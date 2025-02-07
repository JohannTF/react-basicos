import React, { Component } from 'react';
function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default class AjaxApis extends Component {
    // Estado inicial
    state = {
        pokemons:[]
    };
    // En el método componenteDidMount es donde van las peticiones
    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            json.results.forEach((el) => {
                fetch(el.url)
                .then(res => res.json())
                .then(json => {
                    //console.log(json);
                    let pokemon = {
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    }

                    let pokemons = [...this.state.pokemons, pokemon]
                    // Al tener el mismo nombre la variable de estado y a la que hago referencia
                    // Se sobreentiende que va al atributo 'pokemon' le va a asignar lo que haya en la variable 'pokemon'
                    this.setState({pokemons})
                })
            });
        })
    }
    render(){
        return(
            <>
            <h2>Peticiones Asíncronas y componentes de clase</h2>
            {/* El key es IMPORTANTISIMO, lo utiliza react para identificar c/u de sus */}
            {
                this.state.pokemons.map((el) => (
                <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                ))
            }
            </>
        );
    }
}