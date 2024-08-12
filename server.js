const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

/*
app.get('/rota', (req, res) => {
    res.send('Minha primeira rota');
});
*/

app.get('/consulta-cep/:cep', async (req, res) => { //:cep -> Os dois pontos indicam que é um parâmetro
    const cep = req.params.cep; //obtém o cep da url
    const cepRegex = /^[0-9]{5}-?\[0-9]{3}$/;

    if(cepRegex.test(cep)) {
        try {
            //fazendo a requisição para a api do ViaCEP
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            res.json(response.data); //retorna os dados da resposta
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            res.status(500).send("Erro ao consultar o CEP.");
        }
    } else {
       res.status(400).send("CEP inválido. Formato: XXXXX-XXX");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); //A crase serve para usar a variável assim: ${var}.
});

/* Rotas:
    Associação entre um método HTTP, uma URL e um método de um Controlador, retornando a resposta. 
    No caso acima, a rota definida é o app.get, a rota raiz ('/'), sendo essa a URL.

    Axios:
    Auxilia no processo de envio de requisições HTTP com node.
    npm install axios
*/

/*
Declarar uma const 
Método teste
se não for válido
*/

/*
npm install sequeliza -> para comunicado o back end com diversos sgbd
ORM: Traduz entidades de um banco de dados para objetos.

Model: 
É uma abstração que representa uma tabela. Ela uma classe que representa uma tabela.
Vai ter os atributos com seus tipos específicos.
As instâncias serão as linhas da tabela.
A model vai dar informações para o sequelize se comunicar com sgbd.
*/