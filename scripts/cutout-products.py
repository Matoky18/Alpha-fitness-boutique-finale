"""Create product cutouts locally, preserving source pixels and original files.

Setup: python -m pip install -r scripts/requirements-cutout.txt
Run: python scripts/cutout-products.py [--names image.png ...] [--review-only]
"""

import argparse
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/assets/produit-img"
DEST = SOURCE / "transparent"
REVIEW = ROOT / "output/cutout-review"
os.environ.setdefault("U2NET_HOME", str(ROOT / ".cache-cutout"))
os.environ.setdefault("OMP_NUM_THREADS", "4")

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageOps

# Reviewed exceptions: this model retains light clothing and the person better.
MODEL_OVERRIDES = {name: "u2netp" for name in (
    "barrePompe2.png", "debardeurbleu.png", "gantphoto1.png", "protmod.png",
    "tapisphoto01.png"
)}


def refine_mask(name, mask):
    if name == "debardeurbleu.png":
        # The model identifies the silhouette but gives the shirt a partial alpha.
        mask = mask.point(lambda value: 255 if value >= 96 else 0)
        # Restore the shadowed shirt underneath the arm, inside its real contour.
        contour = [(284, 535), (415, 548), (530, 583), (608, 601),
                   (613, 669), (285, 684), (272, 642)]
        ImageDraw.Draw(mask).polygon(
            [(round(x * mask.width / 784), round(y * mask.height / 789))
             for x, y in contour], fill=255)
        mask = mask.filter(ImageFilter.GaussianBlur(0.6))
    if name == "gantphoto1.png":
        # Restore the lower forearm omitted by both models. Coordinates follow
        # the photographed contour at the source's 1280 x 800 reference size.
        contour = [(0, 372), (25, 383), (64, 394), (100, 403), (160, 409),
                   (220, 413), (265, 416), (296, 426), (307, 643),
                   (270, 650), (210, 657), (150, 663), (80, 667), (0, 669)]
        restoration = Image.new("L", mask.size)
        points = [(round(x * mask.width / 1280), round(y * mask.height / 800))
                  for x, y in contour]
        ImageDraw.Draw(restoration).polygon(points, fill=255)
        restoration = restoration.filter(ImageFilter.GaussianBlur(0.6))
        mask = Image.fromarray(np.maximum(np.asarray(mask), np.asarray(restoration)))
    return mask


def review(files):
    REVIEW.mkdir(parents=True, exist_ok=True)
    report = []
    for path in files:
        source = Image.open(path).convert("RGBA")
        result = Image.open(DEST / path.name).convert("RGBA")
        original = np.asarray(source)
        actual = np.asarray(result)
        assert source.size == result.size, path.name
        assert np.array_equal(original[:, :, :3], actual[:, :, :3]), path.name
        alpha = actual[:, :, 3]
        assert alpha.min() == 0 and alpha.max() >= 250, path.name
        report.append({"file": path.name, "size": list(result.size),
                       "transparent_percent": round(float((alpha == 0).mean() * 100), 2),
                       "rgb_unchanged": True})
    (REVIEW / "validation.json").write_text(json.dumps(report, indent=2))
    # Each tile shows the original followed by the cutout on a contrasting ground.
    for start in range(0, len(files), 12):
        sheet = Image.new("RGB", (1200, 1080), "#f5f5f5")
        draw = ImageDraw.Draw(sheet)
        for index, path in enumerate(files[start:start + 12]):
            x, y = (index % 3) * 400, (index // 3) * 270
            draw.text((x + 8, y + 6), path.name, fill="#38342d")
            for offset, photo_path in [(0, path), (200, DEST / path.name)]:
                photo = Image.open(photo_path).convert("RGBA")
                photo.thumbnail((192, 238))
                if offset:
                    draw.rectangle((x + 200, y + 25, x + 399, y + 269), fill="#a69892")
                sheet.paste(photo, (x + offset + (200 - photo.width) // 2,
                                   y + 28 + (238 - photo.height) // 2), photo)
        sheet.save(REVIEW / f"review-{start // 12 + 1:02}.jpg")
    print(f"Verified {len(report)} PNGs: original RGB and dimensions, genuine alpha.", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--names", nargs="+")
    parser.add_argument("--review-only", action="store_true")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--model", help="Override automatic model selection")
    args = parser.parse_args()
    files = sorted(SOURCE.glob("*.png"))
    if args.names:
        requested = set(args.names)
        files = [path for path in files if path.name in requested]
        if requested != {path.name for path in files}:
            parser.error("Unknown source filename")
    if not args.review_only:
        from rembg import new_session, remove
        sessions = {}
        DEST.mkdir(exist_ok=True)
        for index, path in enumerate(files, 1):
            target = DEST / path.name
            if target.exists() and not args.force:
                print(f"[{index}/{len(files)}] Existing: {path.name}", flush=True)
                continue
            source = ImageOps.exif_transpose(Image.open(path)).convert("RGBA")
            existing_alpha = np.asarray(source.getchannel("A"))
            if (existing_alpha == 0).mean() > 0.05:
                source.save(target, optimize=True)
                print(f"[{index}/{len(files)}] Preserved existing transparency: {path.name}", flush=True)
                continue
            model = args.model or MODEL_OVERRIDES.get(path.name, "isnet-general-use")
            if model not in sessions:
                sessions[model] = new_session(model, providers=["CPUExecutionProvider"])
            mask = remove(source.convert("RGB"), session=sessions[model], only_mask=True).convert("L")
            mask = refine_mask(path.name, mask)
            # Clamp near-zero background noise and opaque interiors; preserve soft edges.
            mask = mask.point(lambda value: 0 if value < 5 else 255 if value > 250 else value)
            mask = Image.fromarray(np.minimum(np.asarray(mask), np.asarray(source.getchannel("A"))))
            source.putalpha(mask)
            source.save(target, optimize=True)
            print(f"[{index}/{len(files)}] Saved: {path.name}", flush=True)
            if index % 12 == 0:
                review(files[:index])
    review(files)


if __name__ == "__main__":
    main()
