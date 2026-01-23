import React from 'react'
import './Input.css'
const Input = ({type,placeholder,value,onChange,className}) => {
  return (
   
        <input type={type} value={value} 
          placeholder= {placeholder} 
          onChange={onChange}
          className= {className} 
        />
    
)}

export default Input
