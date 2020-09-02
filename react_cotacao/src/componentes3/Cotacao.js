import React from 'react';

class List extends React.Component {
    state = {
        moeda: []
    };
    componentDidMount() {
        fetch('https://economia.awesomeapi.com.br/json/all')
        .then(res => res.json())
        .then(res => {
            this.setState({
                moeda: res
            });
        });
    }

render() {
    return(
        <div>
            <h1>
                Cotação de moedas
            </h1>
            <ul>
                {this.state.moeda.map(item => (
                    <li key={item.id}>
                        <p><b>Code:</b>{item.code}</p>
                        <p><b>Codein:</b>{item.codein}</p>
                        <p><b>Name:</b>{item.name}</p>
                        <p><b>High:</b>{item.high}</p>
                        <p><b>Low:</b>{item.low}</p>
                        <p><b>varBid:</b>{item.varBid}</p>
                        <p><b>pctChange:</b>{item.pctChange}</p>
                        <p><b>bid:</b>{item.bid}</p>
                        <p><b>ask:</b>{item.ask}</p>
                        <p><b>timestamp:</b>{item.timestamp}</p>
                        <p><b>creat_date:</b>{item.creat_date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
                }
}
export default Cotacao;