import React from 'react'

export default function Form() {
    return (
      <div className="formDiv">
           <div className="formDivContent card">
            <div className=" mt-5">    
            <label for="basic-url" className="form-label">Seu nome, Primeiramente</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ex: João da Silva" aria-label="NomeCompleto" aria-describedby="basic-addon1" />
            </div>

            <label for="basic-url" className="form-label">Email:</label>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Ex: joaodasilva@gmail.com" aria-label="Email" aria-describedby="basic-addon1" />     
            </div>

            <label for="basic-url" className="form-label">Telefone:</label>
            <div className="input-group mb-3">
                <input type="fone" className="form-control" id="basic-url"  placeholder="Ex: (xx)xxxxx-xxxx" aria-describedby="basic-addon1" />
            </div>
            
            <label for="basic-url" className="form-label">Quer doar ou receber?</label>
            <div className="input-group mb-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecione uma opção</option>
                <option value="Doar">Doar</option>
                <option value="Receber">Receber</option>
            </select>
                
            </div>
            
            <label for="basic-url" className="form-label">Se for doar, descreva o que quer doar.</label><br />
            <label for="basic-url" className="form-label">Se quer receber, descreva sua situação de ensino e entraremos em contato.</label>
            <div className="input-group mb-3">
                <textarea type="text-area" className="form-control" id="basic-url" aria-describedby="basic-addon1" />
            </div>
            <button className="btn btn-success" type="submit">Enviar!</button>
        </div>
       </div>
      </div>
    );
}
