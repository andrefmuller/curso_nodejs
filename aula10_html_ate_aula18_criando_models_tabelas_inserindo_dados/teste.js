const Sequelize = require(`sequelize`)
//`teste` = Nome do banco
//1º `admin` = usuário do banco
//2º `admin` = senha do usuário 
const sequelize = new Sequelize(`teste`,`admin`,`admin`, {
    host: "localhost",
    dialect: `mariadb`
})
//Para fazer a verificação de conexão com o banco
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

//Criando MODELS, que vão gerar as tabelas no banco.
//Model para postagens (Tabela Postagem, com os campos "titulo" e "conteudo")

//Variável Postagem, com os parâmetros para criar a tabela "postagens"
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Inserindo uma postagem manualmente no banco de dados.
/*Postagem.create({
    titulo: "O Primeiro Título",
    conteudo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit modi deleniti doloremque odit culpa ipsam veritatis tempora consequatur possimus autem numquam facilis quos, ad quaerat maiores cupiditate at iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, porro magni. Aut explicabo quo commodi ab, enim voluptatum, illum necessitatibus iste quia odit officiis illo tenetur vel tempore magnam. At!"
})*/


//Variável Usuario, com os parâmetros para criar a tabela "usuarios"
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Inserindo um usuário manualmente na tabela "usuarios" do banco de dados teste

Usuario.create ({
    nome: "Renato Luiz",
    sobrenome: "Müller",
    idade: 37,
    email: "tators@gmail.com"
})

//Comando para, de fato, criar as tabelas "postagens" e "usuarios".
//Depois que ela foi criada, a linha abaixo foi comentada, para que não fosse criada de novo!

//Postagem.sync({force: true})
//Usuario.sync({force: true})

