// Crear un componente basado en clase
import React from "react";

// Estructura de un componente funcional.
function Componente(props) {
  // Para el caso de las funciones, estas no usan la palabra reservada this
  return <h2>{props.msg}</h2>;
}

/* 
// Estructura de un componente como función expresada
const Componente = props => { props.msg}; */

/* 
// Estructura de un Componente basado en Clases 
class Componente extends Component { // Nombre_del_archivo extends Component
    // Método obligatorio para renderizar el código jsx
    render(){
        return <h2>{this.props.msg}</h2> 
    }
} */

// Para exportar el componente
export default Componente;
