import React from 'react';
import './App.css';
import Grafico from './components/grafico';
import Cotacao from './componente3/cotacao';
import SobreNos from './components/SobreNos';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default () =>{
  const [activeKey, setActiveKey] = React.useState("0");

  return(
    <div>

      <BrowserRouter> 
      <div className="container" style={{padding: "30px 30px"}}>
      <Link style={{color: "#40E0D0"}} to="/components/grafico.js">IBOVESPA</Link> | <Link style={{color: "#40E0D0"}} to="/components3/cotacao.js">Cotacão de Moedas</Link> | <Link style={{color: "#40E0D0"}} to="/components/SobreNos.js">Sobre o projeto</Link>
      </div>

       


        <Route path="/components/grafico.js" exact component={Grafico}></Route>
        <Route path="/components3/cotacao.js" component={Cotacao}></Route>
        <Route path="/components/SobreNos.js" component={SobreNos}></Route>
      </BrowserRouter>
    </div>
  );
}