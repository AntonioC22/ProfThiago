const {sequelize, DataTypes, Sequelize} = require('sequelize');
class Endereco extends Model {}

Endereco.init({
    //Atributos da model
    Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        Complemento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    Sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos', //define o nome da tabela no banco de dados
    timestamps: true, //define se quer ou não os campos createdAt e updatedAt
});

module.exports = Endereco;

/* 
Criar banco de dados:
Nome do banco -> apiNode
Criando o banco -> Create database apiNode

Porta do postgre -> 5432
*/

/*
Migrations:
Cria tabela no banco, altera as colunas, dropa colunas etc
npx sequelize-cli init
npx sequelize-cli migration:generate --name create-endereco

up: metodo para criar tabela
down: metodo para remover o que foi feito pela migration
*/