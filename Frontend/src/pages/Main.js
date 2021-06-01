import '../styles/App.css';
import React from 'react'
import Barra from '../Components/Barra'
import Carousel from '../Components/Carousel'
import Jumbo from '../Components/Jumbo'
import Footer from '../Components/Footer'
import ToTop from '../Components/ToTop';
import Cards from '../Components/Cards';

function Main() {
    return (
        <div className="">
            <Barra />
                <ToTop />
            <div className="Main mt-5">
                <Jumbo />
                <Carousel />
                
                <div className="">
                <Cards />
                </div>
            
            </div>
           
            <Footer />
        </div>
    )
}

export default Main;
