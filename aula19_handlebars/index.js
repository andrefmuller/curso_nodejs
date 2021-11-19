const express = require(`express`)
const app = express()
const hbr = require(`handlebars`)
const hbs = handlebars.create({defaultLayout:`main`}) 
const Sequelize = require(`sequelize`)

//Config
    //Template Engine
    app.engine(`handlebars`, () => hbs)
    app.set(`view engine`,`handlebars`)
//Conexão com o banco de dados MariaDB
    sequelize = new Sequelize("teste","admin","admin", {
        host: "localhost",
        dialect: "mariadb"
    })

//Rotas
    app.get('/cad', function(req,res){
        res.send(`ROTA DE CADASTRO DE POSTS`)
    })

app.listen(8090, function(){
    console.log("Servidor executando na porta 8090.")
})