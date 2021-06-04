import React from 'react';
import {useState} from "react";
import Axios from 'axios'

export default function Form() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [opcao, setOpcao] = useState('')
    const [texto, setTexto] = useState('')
    
    const cad = () => {

        Axios.post('http://localhost:3001/cad', 
        {

    })
    }

    return (
      <div className="formDiv">
           <div className="formDivContent card">
            <div className=" mt-5">    
            <label for="basic-url" className="form-label">Seu nome, Primeiramente</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ex: João da Silva" aria-label="NomeCompleto" aria-describedby="basic-addon1" onChange={(event) =>{setName[event.target.value]}} />
            </div>

            <label for="basic-url" className="form-label">Email:</label>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Ex: joaodasilva@gmail.com" aria-label="Email" aria-describedby="basic-addon1" onChange={(event) =>{setEmail[event.target.value]}} />     
            </div>

            <label for="basic-url" className="form-label">Telefone:</label>
            <div className="input-group mb-3">
                <input type="number" className="form-control" id="basic-url"  placeholder="Ex: (xx)xxxxx-xxxx" aria-describedby="basic-addon1" onChange={(event) =>{setTelefone[event.target.value]}}/>
            </div>
    
            <label for="basic-url" className="form-label">Quer doar ou receber?</label>
            <div className="input-group mb-3">
            <select class="form-select" aria-label="Default select example" onChange={(event) =>{setOpcao[event.target.value]}}>
                <option selected>Selecione uma opção</option>
                <option value="Doar">Doar</option>
                <option value="Receber">Receber</option>
            </select>            
        </div>
    
            <label for="basic-url" className="form-label">Se for doar, descreva o que quer doar.</label><br />
            <label for="basic-url" className="form-label">Se quer receber, descreva sua situação de ensino e entraremos em contato.</label>
            <div className="input-group mb-3">
                <textarea type="text-area" className="form-control" id="basic-url" aria-describedby="basic-addon1" onChange={(event) =>{setTexto[event.target.value]}} />
            </div>
            <button onClick={} className="btn btn-success">Enviar!</button>
        </div>
       </div>
      </div>
    );
}
