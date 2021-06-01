import React from 'react'

export default function Cards() {
    return (
    <div className="container mt-5">
       <div className="row">

       <div className=" col-3 m-5">
            <div className="card">
                <div className="card-header">
                    Quem Somos?
                 </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p> Somos um projeto elaborado durante um TCC que visa ajudar pessoas com o ensino a distância, inicialmente, na pandemia.</p>
                        
                    </blockquote>
                </div>
            </div>
        </div>
        <div className=" col-3 m-5 ">
            <div className="card">
                <div className="card-header">
                    O que fazemos?
                 </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Pegamos equipamentos de quem não precisa mais e entregamos a quem precisa. Se precisar a gente monta também!</p>
                        
                    </blockquote>
                </div>
            </div>
        </div>
        <div className=" col-3 m-5 ">
            <div className="card">
                <div className="card-header">
                    O que ganhamos?
                 </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Simplesmente ajudamos você. Entre em contato ou cadastre-se caso queira ajudar ou ser ajudado, faça o mundo melhor!</p>
                        
                    </blockquote>
                </div>
            </div>
        </div>

       </div>
    </div>
    );
}
