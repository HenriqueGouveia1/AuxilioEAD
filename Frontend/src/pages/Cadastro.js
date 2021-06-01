import '../styles/App.css';
import React from 'react'
import BarraCad from '../Components/BarraCad';
import Footer from '../Components/Footer';
import Form from '../Components/Form';

function Cadastro() {
    return (
        <div>
            <BarraCad/>
            <div className="Main mt-5">
            
                <Form/>

            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro
