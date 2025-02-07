import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) { // El prop, es un objeto que almacena a todas las propiedades que se le pasen a la etiqueta
  // Como se le pasa la propiedad 'el', este engloba la información para cada posición del arreglo de objetos de data.json
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons:["Primavera", "Verano", "Otoño", "Invierno"]
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {
            this.state.seasons.map((el,index) => (
                <li key={index}> {el} </li>
            ))
          }
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map(el => (
            <ElementoLista key={el.id} el={el}/>
          ))}
        </ul>
      </div>
    );
  }
}
