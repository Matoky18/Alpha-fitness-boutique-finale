
import React from 'react'
import './Checkbox.css'
const Checkbox = ({lableCheckbox,className}) => {

    

  return (
    <div className= {className}>
       <input type="checkbox" className='checkbox' /> 
       <label htmlFor=""> {lableCheckbox} </label>
    </div>
  )
}

export default Checkbox
