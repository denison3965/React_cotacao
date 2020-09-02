import React, { useState } from 'react';
import { Component } from 'react';
import Reactstrap from 'reactstrap';



class Tabela extends Component {

    constructor() {
        super();
        this.state = { data : []}
    }
    
    componentDidMount() {
        fetch(`https://v2-api.sheety.co/2ac728626639f7e8772ca31394a909ae/%C3%ADndiceBovespa/bovespa`)
        .then(Response => Response.json())
        .then(Json => {
            const info =Object.values(Json)
            this.setState({data: info[0]})
        });
    }

    render(){

        return(
            
            <div className="container">
                <h2>Informações sobre a IBOVESPA</h2>
                <hr></hr>
                <table class="table">
                <thead class="thead-dark">
  
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Data</th>
                        <th scope="col">Abertura</th>
                        <th scope="col">Fechamento</th>
                        <th scope="col">Variação</th>
                        <th scope="col">Mínimo</th>
                        <th scope="col">Maximo</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.data.map(element => (
                    <tr>
                        <th scope="row">{element.id}</th>
                        <td>{element.data}</td>
                        <td>{element.abertura} pts</td>
                        <td>{element.fechamento} pts</td>
                        <td id="Variacao">{element.variacao} %</td>
                        <td>{element.minimo} pts</td>
                        <td>{element.maximo} pts</td>
                        <td>{element.volume}</td>

                    </tr>
                ))}

                </tbody>
                </table>
            </div>
        )
    }
}

export default Tabela