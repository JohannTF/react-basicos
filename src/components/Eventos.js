import React, { Component } from 'react';

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0
        };
        this.sumar = this.sumar.bind(this); // Enlaza el contexto de sumar al contexto de sumar
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar(e){
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES6</h2>
                <h3>Contador: {this.state.contador}</h3>
                <nav>
                    <botton onClick={this.sumar}>+</botton>
                    <botton onClick={this.restar}>-</botton>
                </nav>
            </div>
        );
    }
}


// Properties Initializer
export class EventosES7 extends Component{
    state = {
        contador:0
    };

    sumar = (e) => { // Se usa arrow function para decir que hacemos referencia al contexto global de la clase
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar = (e) => {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <h3>Contador: {this.state.contador}</h3>
                <nav>
                    <botton onClick={this.sumar}>+</botton>
                    <botton onClick={this.restar}>-</botton>
                </nav>
            </div>
        );
    }
}



/* 
    function Boton(){
        return <button onClick={prop.myOnClick}>Botón hecho componente</button>
    } 
*/
// En lugar de tenerlo como función, puedo hacerlo como una función expresada
// Las arrow function hacen un return implicito
// const Boton = (props) => (<button onClick={props.myOnClick}>{props.msj}</button>)

// Simplificando aún más la estructura aplicando destructuración obteniendo la propiedad myOnClic
const Boton = ({myOnClick}) => (<button onClick={myOnClick}>Boton hecho componente</button>)
export class MasSobreEventos extends Component {
    // Por lo general se le da este nombre al manejador de eventos
    // EN LOS EVENTOS SOLO SE PUEDEN PASAR DE PARAMETRO EL EVENTO EN SI.
    handleClick = (e,mensaje) => {
        console.log("Synthetic Base Event: \n", e);
        console.log("Evento nativo de JS:\n", e.nativeEvent);
        console.log("Target del evento Synthetic de React:\n", e.target);
        console.log("Target del evento nativo de JS:\n", e.nativeEvent.target);
        console.log(mensaje);
    };

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={
                    (e) => this.handleClick(e, "Hola pasando parametro desde un evento")
                }>Boton 1</button>
                {/* 
                    No hará nada porque el el Boton personalizado que yo cree no tiene ese atributo
                    <Boton onClick={
                        (e) => this.handleClick(e, "Hola pasando parámetro desde un evento")
                    }/>
                */}
                {/* Para ello tengo que crear una prop personalizada con para ese elemento onClick */}
                <Boton myOnClick={
                    (e) => this.handleClick(e, "Hola pasando parámetro desde un evento")
                }/>
            </div>
        );
    }
}