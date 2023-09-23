/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// PascalCase -> Primera letra en mayuscula ejemplo -> NombreComponente
function ButtonComponent(props) {
    // const numers = [2, 3, 4]
    // const numbers2 = [5, 8, 9]
    // numers.concat(numbers2)
    // const titleMayus = title.toUpperCase()
    return (
        <button>
            {props.title}
            {props.icon}
        </button>
    )
}

export default ButtonComponent;