import React from "react";
import reactstrap from 'reactstrap';
import Facebook from '../img/facebook.png';
import Twitter from '../img/twiter.png';
import Email from '../img/email.png';
import Linkedin from '../img/linkdin.png';
import Instagram from '../img/instagram.png';
import Casa from '../img/casa.png';
import Email2 from '../img/email2.png';
import Whatsapp from '../img/whatsapp.png';
import Celular from '../img/celular.png';

export default () =>{
    return(
        <footer class="page-footer font-small">
            <div style={{backgroundColor: "#005D8F"}}>
                 <div class="container">    
                   <div class="row py-4 d-flex align-items-center">
                    <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                     <h6 class="mb-0">Conecte-se conosco nas redes sociais!</h6>
                    </div>
                    {/*  Grid column  */}
                    <div class="col-md-6 col-lg-7 text-center text-md-right">
                    {/*  Facebook  */}
                        <a class="fb-ic">
                             <img class="icone" src={Facebook} />  
                        </a>
                    {/*  Twitter  */}
                        <a class="tw-ic">
                        <img class="icone" src={Twitter} /> 
                        </a>
                    {/*  Email */}
                        <a class="gplus-ic">
                        <img class="icone" src={Email} /> 
                        </a>
                    {/* Linkedin */}
                        <a class="li-ic">
                        <img class="icone" src={Linkedin} /> 
                        </a>
                    {/* Instagram */}
                        <a class="ins-ic">
                        <img class="icone" src={Instagram} /> 
                        </a>
                   </div>
                   </div>
               </div>
           </div>
        
            <div class="container text-center text-md-left mt-5">
            <div class="row mt-3">
              {/* Grid column */}
                 <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/*  Content  */}
                 <h6 class="text-uppercase font-weight-bold">ConectaSoft</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                   <p>
                   The company ConectaSoft brings you information about the currency quote, 
                   ConectaSoft leaves you connected with the economy news
                  </p>
              </div>
               <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase font-weight-bold">Tecnologias</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                         <p>  
                            <a href="#!">Bootstrap</a> 
                         </p>     
                         <p>
                            <a href="#!">React</a>
                        </p>
                        <p>
                            <a href="#!">CSS3</a>
                         </p>
                         <p>
                            <a href="#!">HTML5</a>
                         </p>
               </div>

              {/*  Grid column  */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/*  Links */}
                    <h6 class="text-uppercase font-weight-bold">Names Devs:</h6>
                         <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                        <p>
                            <a href="#!">Ana Gomes</a>
                        </p>
                        <p>
                            <a href="#!">Denison Portela</a>
                        </p>
                        <p>
                            <a href="#!">Mauricio Calassara</a>
                        </p>
                        <p>
                            <a href="#!">Victor Bhering</a>
                        </p>
                        <p>
                            <a href="#!">Giovanni Perrotta</a>
                        </p>
                </div>
                    {/*  Grid column  */}
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                 {/* Links  */}
                    <h6 class="text-uppercase font-weight-bold">Contact</h6>
                <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p>
                 <img class="icone" src={Casa} />  New York, NY 10012, US</p>
                <p>
                <img class="icone" src={Email2} />  info@example.com</p>
                <p>
                <img class="icone" src={Whatsapp} />  + 01 234 567 88</p>
                <p>
                <img class="icone" src={Celular} />  + 01 234 567 89</p>
                     </div>
            </div>
          </div>
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href=""> Devs</a>
          </div>
        </footer>  
    );
}
    
                  
              