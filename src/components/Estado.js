import React, { Component } from 'react';

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };
        /* Cada vez que se modifica el estado, se ejecuta el render */
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }
    render(){
        return(
            <div>
                <h2>El State
                    <p>{this.state.contador}</p>
                </h2>
            </div>
        );
    }
}