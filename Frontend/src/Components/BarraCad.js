import React from 'react'
import '../styles/App.css'

const BarraCad   = () => {
    return (
        <div className="Barra">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-center" >
                <div className="container-fluid Barra">
                    <a className="navbar-brand " href="/main"><img className="iconeBarra" src="../AuxílioAssets/Auxilioicobar.png" alt="icon" /></a>
                </div>
            </nav>
        </div>
    );
};

export default BarraCad;