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
                <hr style={{backgroundColor: "#61dafb"}}></hr>
                <table class="table table-striped table-dark">
                <thead>
  
                    <tr>
                        <th scope="col"><span style={{color: "#61dafb"}}>ID</span></th>
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
                        <th scope="row"><span style={{color: "#61dafb"}}>{element.id}</span></th>
                        <td>{element.data}</td>
                        <td>{element.abertura} <span style={{color: "#61dafb"}}>pts</span></td>
                        <td>{element.fechamento} <span style={{color: "#61dafb"}}>pts</span></td>
                        <td id="Variacao">{element.variacao} %</td>
                        <td>{element.minimo} <span style={{color: "#61dafb"}}>pts</span></td>
                        <td>{element.maximo} <span style={{color: "#61dafb"}}>pts</span></td>
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