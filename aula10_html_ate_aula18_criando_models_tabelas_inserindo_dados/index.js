//Pacotes instalados até o momento:
//express (npm install express --save)
//nodemon (npm install nodemon -g) -g para instalação global
//sequelize (npm install --save sequelize) 

const express = require("express")
const app = express()

app.get(`/`, function(req,res){
    res.send(`Seja bem vindo a AULA 10 de Node.JS!!`)
})

app.get(`/sobre/:nomecurso/:aula`, function(req,res){
    res.send(req.params.nomecurso +` `+ req.params.aula)
})

app.get(`/app`, function(req,res){
    res.sendFile(__dirname+`/html_files/index.html`)
})


app.listen(8090, function(){
    console.log(`Server executando [AULA 10]. http://localhost:8090`)
})