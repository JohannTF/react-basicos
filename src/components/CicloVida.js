import React, { Component } from 'react';

class Reloj extends Component {
    // Se ejecuta automaticamente cuando el componente ha sido eliminado del DOM
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado en el DOM");
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0, "El componentes se inicializa, aún NO esta en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temporizador = null;
    }
    // Se ejecuta automaticamente cuando se reenderiza el componenete (el método render)
    componentDidMount(){
        console.log(1, "El componente ya se encuentra visible en el DOM");
    }
    // Se ejecuta automaticamente cuando haya cambios en el state o se redibuje el componente
    // Recibe dos objetos como parametros que son las props y el state ANTERIOR del componente
    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado o las props del componente han cambiado!");
        console.log(prevProps);
        console.log(prevState);
    }
    // Se ejecuta justo antes de que el componente sea eliminado del DOM (todavía ni pasa y ya se esta adelantando)
    componentWillUnmount(){
        console.log(3, "El componente ha sido eliminado del DOM");
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    };

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        })
    };

    render(){
        console.log(4, "El componente se dibuja por primera vez (o redibuja) por algún cambio en el DOM");
        return(
            <>
                <h2>Ciclo de Vdida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora = {this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}