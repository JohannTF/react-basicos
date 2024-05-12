import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";
import "./App.css";

function App() {
  let nombre = "Johann";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <hr/>
        <section id="sintaxis-JSX">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder={nombre}></input>
          <p>
            {auth ? "El usuario esta logeado" : "El usuario no esta logeado"}
          </p>
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            {estaciones.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </section>
        <section id="componente-propiedades">
          <Componente msg="Hola soy un componente funcional desde una prop" />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Johann", correo: "johann@gmail.com" }}
            elevarCuadrado={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como prop"></Componente>
            }
          ></Propiedades>
        </section>
        <hr/>
        <section id="estado">
          <Estado/>
        </section>
        <hr/>
        <section id="renderizado-condicional">
          <RenderizadoCondicional/>
        </section>
        <hr/>
        <section id="renderizado-de-elementos">
          <RenderizadoElementos/>
        </section>
        <hr/>
        <section id="eventos">
          <Eventos/>
        </section>
      </header>
    </div>
  );
}

export default App;
