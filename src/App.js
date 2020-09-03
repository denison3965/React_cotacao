import React from 'react';
import './App.css';
import Grafico from './components/grafico';
import Cotacao from './componente3/cotacao';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default () =>{
  const [activeKey, setActiveKey] = React.useState("0");

  return(
    <div>

      <BrowserRouter> 
      <div className="container" style={{padding: "30px 30px"}}>
      <Link style={{color: "#333"}} to="/components/grafico.js">IBOVESPA</Link> | <Link style={{color: "#333"}} to="/components3/cotacao.js">Cotacão de Moedas</Link>
      </div>

       


        <Route path="/components/grafico.js" exact component={Grafico}></Route>
        <Route path="/components3/cotacao.js" component={Cotacao}></Route>
      </BrowserRouter>
    </div>
  );
}