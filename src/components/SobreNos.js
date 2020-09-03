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
                       <p>  <span style={{fontSize: "45px", color: "#61dafb"}}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                       <p>  <span style={{fontSize: "45px", color: "#61dafb"}}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <hr style={{backgroundColor: "#61dafb"}}></hr>
            </div>
        );
    }
}

export default SobreNos;