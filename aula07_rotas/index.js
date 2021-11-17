//O const serve para que a variável criada não possa ser renomeada com outro valor. Desta forma evita muitos problemas. 

const express = require("express")
const app = express()

app.get(`/`,function(rea, res){
    res.send(`Seja bem vindo ao meu app!`)
})

app.get(`/sobre`, function(req, res){
    res.send(`Minha pagina sobre`)
})

app.get(`/blog`, function(req, res){
    res.send(`Bem-vindo ao meu blog!`)
})

app.get(`/ola/:nome/:cargo`, function(req, res){
    res.send(`Ola`)
})

app.get(`/administrativo/:nome/:cargo/:setor`, function(req, res){
//Nas funções de rota, apenas um send pode ser escrito.
    res.send(`<h1>Ola `+req.params.nome+`</h1>`+`<h2>Seu cargo e: `+ req.params.cargo + `</h2>`+`<h3> Seu setor de atuacao é:` + req.params.setor + `</h3>`)
})

app.listen(8090, function(){
    console.log(`Server executando na url http://localhost:8090 `)
})