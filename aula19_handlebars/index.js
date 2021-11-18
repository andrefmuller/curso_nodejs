const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")

//Config
    //Template Engine
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine","handlebars")
//
//Conexão com o banco de dados MariaDB
const sequelize = new Sequelize("teste","admin","admin", {
    host: "localhost",
    dialect: "mariadb"
})




sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

app.listen(8090, function(){
    console.log("Servidor executando na porta 8090.")
    console.log("http://localhost:8090")
})