import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { PanierContext } from '../../assets/Context/Panier/PanierContext'
import './NavBar.css'

const navigation = [
  { label: 'Accueil', path: '/' },
  { label: 'Musculation', path: '/categorie/Musculation' },
  { label: 'Cardio', path: '/categorie/Cardio' },
  { label: 'Vêtement', path: '/categorie/Vêtement' },
  { label: 'Accessoire', path: '/categorie/Accessoire' },
  { label: 'Nutrition', path: '/categorie/Nutrition' },
]

const NavBar = () => {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const { totalQuantite } = useContext(PanierContext)
  const fermerMenu = () => setMenuOuvert(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <Link className="navbar-brand" to="/" onClick={fermerMenu} aria-label="Alpha Fitness - Accueil">
          <span className="navbar-mark" aria-hidden="true">A</span>
          <span>Alpha Fitness</span>
        </Link>

        <div className={`navbar-menu${menuOuvert ? ' is-open' : ''}`}>
          <ul className="navbar-links">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={fermerMenu}
                  className={({ isActive }) => isActive ? 'navbar-link is-active' : 'navbar-link'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <Link className="cart-link" to="/panier" onClick={fermerMenu} aria-label={`Panier${totalQuantite ? `, ${totalQuantite} article(s)` : ''}`}>
              <FontAwesomeIcon icon={faCartShopping} />
              {totalQuantite > 0 && <span className="cart-count">{totalQuantite}</span>}
            </Link>
            <span className="navbar-separator" aria-hidden="true" />
            <Link className="auth-link login-link" to="/login" onClick={fermerMenu}>Connexion</Link>
            <span className="navbar-separator" aria-hidden="true" />
            <Link className="auth-link signup-link" to="/login" onClick={fermerMenu}>S’inscrire</Link>
          </div>
        </div>

        <button
          className="navbar-toggle"
          type="button"
          onClick={() => setMenuOuvert((ouvert) => !ouvert)}
          aria-expanded={menuOuvert}
          aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <FontAwesomeIcon icon={menuOuvert ? faXmark : faBars} />
        </button>
      </nav>
    </header>
  )
}

export default NavBar
