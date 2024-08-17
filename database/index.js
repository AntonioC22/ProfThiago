//Iniciando a conexão com o postgres

const Sequelize = require('sequelize')
const config = require('../config/database')

const Endereco = require('../models/endereco')

const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

modeule.exports = connection