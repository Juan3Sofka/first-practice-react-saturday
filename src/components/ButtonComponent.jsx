/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// PascalCase -> Primera letra en mayuscula ejemplo -> NombreComponente
import { useState } from 'react'
import './button-component.css'
function ButtonComponent({ handleMouseEnter, handleMouseOut, className, text, handleClick}) {
    

    return (
        <button className={`button-component ${className}`} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} >
            {/* {props.title === undefined && 'es undefined'}
            {props.title}
            {props.icon} */}
            {text}
            
        </button>
    )
}

export default ButtonComponent;