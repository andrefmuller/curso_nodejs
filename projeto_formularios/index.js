const express = require(`express`)
const app = express();
const Sequelize = require('sequelize')
const handlebars = require(`express-handlebars`)
const hbs = handlebars.create({defaultLayout: 'main'})

//Config
    //Template Engine
    app.engine('handlebars',() => hbs)
    app.set(`view engine`,`handlebars`)

//Conectando no banco de dados MariaDB
//`teste` = Nome do banco
//1º `admin` = usuário do banco
//2º `admin` = senha do usuário 
const conex_sequelize = new Sequelize(`teste`,`admin`,`admin`, {
    host: "localhost",
    dialect: `mariadb`
})

//Criando as rotas (endereços da aplicação)
app.get(`/teste`, function(req, res){
res.send(`ROTA PARA TESTAR o SERVIDOR.`)
})

app.get(`/cad`, function(req, res){
res.render(__dirname+`/views/formulario`)
})

conex_sequelize.authenticate().then(function(){
    console.log(`Conectado com sucesso.`)
}).catch(function(erro){
    console.log(`Falha ao se conectar: ` + erro)
})

app.listen(8090,function(){
    console.log(`Servidor executando na porta 8090: http://localhost:8090`)
})