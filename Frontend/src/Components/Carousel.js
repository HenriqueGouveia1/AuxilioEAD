import React, { Component } from 'react';
import '../styles/App.css'

class Carrousel extends Component {
    render() {
        return (
            <div>
                
                <div className="card-title carouselTitle"> <h1>Nossos Pilares:</h1></div>

                <div id="carouselExampleCaptions" className="carousel carousel-dark slide Carrossel " data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner jus">
                        <div className="carousel-item active">
                            <img src={"https://s1.static.brasilescola.uol.com.br/img/2019/01/educacao-escolar.jpg"} className="d-block imageCarousel" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Educação</h5>
                                <p>Acreditamos que o caminho mais seguro para o sucesso é a educação.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={"https://s4.static.brasilescola.uol.com.br/vestibular/2021/04/ead.jpg"} className="d-block imageCarousel" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ensino a distância</h5>
                                <p>O ensino á distância é uma alternativa maravilhosa para ajudar no seu desenvolvimento.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={"https://horizonteambiental.com.br/wp-content/uploads/2020/07/Os-três-pilares-da-sustentabilidade.jpg"} className="d-block imageCarousel" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Sustentabilidade</h5>
                                <p>Não jogue fora seu equipamento, ele ainda pode servir para alguém, assim você também contribui para um mundo melhor!</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Carrousel;