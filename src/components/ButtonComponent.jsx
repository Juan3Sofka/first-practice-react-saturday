/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// PascalCase -> Primera letra en mayuscula ejemplo -> NombreComponente
import { useState } from 'react'
import './button-component.css'
function ButtonComponent(props) {
    const [isFollow, setIsFollow] = useState('Seguir')

    const handleClick = () => {
        if (isFollow === 'Seguir') {
            setIsFollow('Siguiendo')
        } else {
            setIsFollow('Seguir')
        }
    }

    return (
        <button className="button-component" onClick={handleClick}>
            {/* {props.title === undefined && 'es undefined'}
            {props.title}
            {props.icon} */}
            {isFollow}
            {props.text}
        </button>
    )
}

export default ButtonComponent;