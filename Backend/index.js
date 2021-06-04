const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    user:root,
    host: localhost,
    password:'15963',
    database:'cadastros'
});

app.post('/cad',(req,res)=>{

    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const opcao = req.body.opcao
    const texto = req.body.texto

    db.query("INSERT INTO cadastro (nome, email,telefone,opcao,texto) VALUES (?,?,?,?,?)",
    [nome, email,telefone,opcao,texto],
        (err,result) =>{
            if(err){
                console.log(err)
            }else{
                res.send("Enviado")
            }
    }
    );
});


app.listen(3001);