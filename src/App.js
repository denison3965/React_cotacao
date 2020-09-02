import React from 'react';
import './App.css';
import Grafico from './components/grafico';
import Teste from './components/teste';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default () =>{
  const [activeKey, setActiveKey] = React.useState("0");

  return(
    <div>

      <BrowserRouter> 
      <div className="container" style={{padding: "30px 30px"}}>
      <Link style={{color: "#333"}} to="/components/grafico.js">IBOVESPA</Link> | <Link style={{color: "#333"}} to="/components/teste.js">teste</Link>
      </div>

       


        <Route path="/components/grafico.js" exact component={Grafico}></Route>
        <Route path="/components/teste.js" component={Teste}></Route>
      </BrowserRouter>
    </div>
  );
}