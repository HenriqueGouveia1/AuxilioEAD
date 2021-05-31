import React from 'react'

export default function Footer() {
  return (
    <div className="footerbrabo">
        <div className="container ">
            <div className="row">
                <div className="col-md-4 col sm-6">
                  
                    <h4>Feito por:</h4>
                    <ul className="list-unstyled">
                        <li>Henrique Gouveia Silva</li>
                        <li>GitHub: <a className="footer-link" href="https://github.com/HenriqueGouveia1">@HenriqueGouveia1</a></li>
                        <li>Linkedin: <a className="footer-link" href="https://www.linkedin.com/in/henrique-gouveia-silva/">henrique-gouveia-silva</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col sm-6">
                
                    <h4>Contate-nos:</h4>
                    <ul className="list-unstyled">
                        <li>Instagram: <a className="footer-link" href="https://www.instagram.com/auxilioead/">AuxílioEAD</a> </li>
                        <li>WhatsApp: 12345678900 </li>
                        <li>PcforEAD@gmail.com</li>
                    </ul>
                </div>
                <div className="col-md-4 col sm-6">
                  
                    <h4>Design dos Ícones:</h4>
                    <ul className="list-unstyled">
                        <li>~~ Daniel Nóbrega.</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy; {new Date().getFullYear()} AuxílioEAD - Direitos Reservados
                </p>
            </div>
        </div>
    </div>
  );
}
