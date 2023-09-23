/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import ButtonComponent from './components/ButtonComponent'

// componente cardcontainer
// componente followCard
// componente button
function App(props) {

    return (
        // <div style={{ height: '50vh', background: 'red' }}>
        <div>
            <h1>Hola desde app</h1>
            <h1>Tal Vez te guste</h1>
            <ButtonComponent
                title='Consultar'
            ></ButtonComponent>

            <ButtonComponent
                title='sin icono'
            />

            <ButtonComponent
                title='Me gusta'
            />
        </div>
    )
}

export default App;