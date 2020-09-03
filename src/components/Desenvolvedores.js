import React from 'react';
import { Component } from 'react';
import Reactstrap from 'reactstrap';
import './Desenvolvedores.css';
import dev1 from './img_devs/dev1.jpeg';
import dev2 from './img_devs/dev2.jpeg';
import dev3 from './img_devs/dev3.jpeg';
import dev4 from './img_devs/dev4.jpeg';
import dev5 from './img_devs/dev5.jpeg';


class Desenvolvedores extends Component {
    render(){
        return(
            <div className="container">
                <h1>Desenvolvedores</h1>
                <div style={{width: "100px", height: "5px", backgroundColor:"#61dafb" }}></div>

                <div className="devs--area">

                    <div class="card" style={{width: "18rem", margin: "30px", border: "2px solid #61dafb"}}>
                        <div style={{height: "300px", overflow: "hidden"}}>
                            <img src={dev1} class="card-img-top" alt="dev1" style={{backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Denison Portela</h5>
                            <p class="card-text">Desenvolvedor Junior</p>
                            <div className="btns">
                                <a href="https://github.com/denison3965" target="_blank"><button type="button" class="btn btn-dark">GitHub</button></a>
                                <a href="https://www.linkedin.com/in/denison-portela-9074001b3/ " target="_blank"><button type="button" class="btn btn-info">Linkedin</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card" style={{width: "18rem", margin: "30px", border: "2px solid #61dafb"}}>
                        <div style={{height: "300px", overflow: "hidden"}}>
                            <img src={dev2} class="card-img-top" alt="dev1" style={{backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Ana Gomes</h5>
                            <p class="card-text">Desenvolvedor Junior</p>
                            <div className="btns">
                                <a href="https://github.com/ana204" target="_blank"><button type="button" class="btn btn-dark">GitHub</button></a>
                                <a href="https://www.linkedin.com/in/ana-lucia-ferreira-gomes-bb375816a/" target="_blank"><button type="button" class="btn btn-info">Linkedin</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card" style={{width: "18rem", margin: "30px", border: "2px solid #61dafb"}}>
                        <div style={{height: "300px", overflow: "hidden"}}>
                            <img src={dev3} class="card-img-top" alt="dev1" style={{backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Giovanni Perrotta</h5>
                            <p class="card-text">Desenvolvedor Junior</p>
                            <div className="btns">
                                <a href="https://github.com/Giovanni-Perrotta" target="_blank"><button type="button" class="btn btn-dark">GitHub</button></a>
                                <a href=""><button type="button" class="btn btn-info">Linkedin</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card" style={{width: "18rem", margin: "30px", border: "2px solid #61dafb"}}>
                        <div style={{height: "300px", overflow: "hidden"}}>
                            <img src={dev4} class="card-img-top" alt="dev1" style={{backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Mauricio Calassara</h5>
                            <p class="card-text">Desenvolvedor Junior</p>
                            <div className="btns">
                            <a href="https://www.linkedin.com/in/mauricio-calassara-rodrigues-1a8a961ab" target="_blank"><button type="button" class="btn btn-dark">GitHub</button></a>
                                <a href="https://www.linkedin.com/in/mauricio-calassara-rodrigues-1a8a961ab"><button type="button" class="btn btn-info">Linkedin</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="card" style={{width: "18rem", margin: "30px", border: "2px solid #61dafb"}}>
                        <div style={{height: "300px", overflow: "hidden"}}>
                            <img src={dev5} class="card-img-top" alt="dev1" style={{backgroundSize: 'cover', backgroundPosition: 'center'}} />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Victor Bhering</h5>
                            <p class="card-text">Desenvolvedor Junior</p>
                            <div className="btns">
                            <a href="https://github.com/Victor846" target="_blank"><button type="button" class="btn btn-dark">GitHub</button></a>
                                <a href=""><button type="button" class="btn btn-info">Linkedin</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Desenvolvedores