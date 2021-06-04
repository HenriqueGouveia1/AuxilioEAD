const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'15963',
    database:'auxilioead'
});

app.post("/cad",(req,res)=>{

    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const opcao = req.body.opcao
    const texto = req.body.texto

    db.query("INSERT INTO cadastros (nome, email,telefone,texto,opcao) VALUES (?,?,?,?,?)",
    [nome, email,telefone,texto,opcao],
        (err,result) =>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    }
    );
});


app.listen(3001, () => {
    console.log('RUNNIGN...')
});