import React from 'react'
import '../styles/App.css'

const Barra = () => {
    return (
        <div className="Barra">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid Barra">
                    <a className="navbar-brand " href="/main"><img className="iconeBarra" src="../AuxílioAssets/Auxilioicobar.png" alt="icon" /></a>
                    <div className="TextBarra" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active mr-5" href="/cadastro"> 
                                <button className="btn btn-success" type="submit">Cadastre-se</button>
                                </a>
                            </li>                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Barra;