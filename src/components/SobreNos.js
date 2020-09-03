import React, { Component } from 'react';
import Reactstrap from 'reactstrap';
import Img from './logo192.png';
import './SobreNos.css';
import Bootstrap from './bootstrap.png';

class SobreNos extends Component {
    render(){
        return(
            <div className="container">
                <h1>Sobre o projeto - Tecnologias usadas</h1>
                <div style={{width: "100px", height: "5px", backgroundColor:"#61dafb" }}></div>

                <div className="info--projeto--area">
                    <div className="info--projeto--escito">
                       <p>  <span style={{fontSize: "45px", color: "#61dafb"}}>O</span> React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. ... Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto.</p>
                    </div>
                    <div className="info--projeto--img">
                        <img src={Img} className="App-logo vertical-align " alt="React" />
                    </div>
                </div>

                <hr style={{backgroundColor: "#61dafb"}}></hr>

            

                <div className="info--projeto--area">
                    <div className="info--projeto--img">
                        <img src={Bootstrap} className="logo_bootstrap App-logo vertical-align " alt="logo" />
                    </div>
                    <div className="info--projeto--escito">
                       <p>  <span style={{fontSize: "45px", color: "#61dafb"}}>O</span> Bootstrap é o framework mais utilizado para criar layouts e telas de sistemas web, dashboards, sites responsivos e sites comuns, também. ... Ele facilita muito o trabalho de front-end. Ao final, você vai ter um ambiente com o Bootstrap 4 funcionando, e pronto para começar a criar o seu front.</p>
                    </div>
                </div>
                <hr style={{backgroundColor: "#61dafb"}}></hr>
            </div>
        );
    }
}

export default SobreNos;