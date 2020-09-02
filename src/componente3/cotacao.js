import React from 'react';
import { object } from 'prop-types';
import Reactstrap from 'reactstrap';

class Cotacao extends React.Component {
    state = {
        linguagens: []
    };
    componentDidMount() {
        fetch('https://economia.awesomeapi.com.br/json/all')
        .then(Response => Response.json())
        .then(Response => {
            Response = Object.values(Response)
            this.setState({
                linguagens: Response
            });
        });
    }

render() {
    return(
        <div className= "container">
            <h1>
                Cotação de moedas
            </h1>
            <ul style={{display: "flex", flexWrap: "wrap"}}>
                {this.state.linguagens.map(item => (
                    <li style={{width: "250px",margin: "30px"}} key={item.id}>
                        <p><b>Código:</b>{item.code}</p>
                        <p><b>Moeda:</b>{item.codein}</p>
                        <p><b>Nome:</b>{item.name}</p>
                        <p><b>Máxima:</b>{item.high}</p>
                        <p><b>Mínima:</b>{item.low}</p>
                        <p><b>Variação:</b>{item.varBid}</p>
                        <p><b>Porcentagem de variação:</b>{item.pctChange}</p>
                        <p><b>Compra:</b>{item.bid}</p>
                        <p><b>Venda:</b>{item.ask}</p>
                        <p><b>Código de acesso:</b>{item.timestamp}</p>
                        <p><b>Atualizado em:</b>{item.create_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
                }
}
export default Cotacao;