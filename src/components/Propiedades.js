import React from 'react';
import PropTypes from 'prop-types';
export default function Propiedades(props) {
    // props.attribute Significa 'toma el valor que tienes en el atributo attribute y hazle esto' 
    //console.log(props);
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{(props.booleano) ? "True" : "False"}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{`${props.objeto.nombre} - ${props.objeto.correo}`}</li>
                <li>{props.arreglo.map(props.elevarCuadrado).join(', ')}</li>
                <li>{props.elementoReact}</li> {/*Elementos HTML*/};
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

// Estoy creando una nueva propiedad a la función Propiedades, la cual
// Asigna a porDefecto un valor
Propiedades.defaultProps = {
    porDefecto: "Las Props"
}

// Estoy creando una nueva propiedad a la función Propiedades, la cual
// Asigna un tipo de dato especifico para numero
Propiedades.propTypes = {
    numero: PropTypes.number/*.isRequried Me inidica que si o si le tengo que pasar ese attribute*/
}