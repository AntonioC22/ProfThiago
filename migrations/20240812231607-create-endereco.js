'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
        },
        Cep: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Logradouro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Numero: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Complemento: {
          type: Sequelize.STRING,
          allowNull: false
        },
        Bairro: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Cidade: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Estado: {
            type: Sequelize.STRING,
            allowNull: false
        },
        MunicipioIBGE: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updateAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('enderecos');
  }
};


// npm install sequelize pg pg-hstore - caso a migrate dê erro e peça a instalação do pg
// npx sequelize-cli db:migrate - rodar a migration - vai subir pro banco de dados tudo de uma vez a migration
// comando para voltar (fiz cagada) - npx sequelize-cli db:migrate:undo  - vai voltar uma por uma; npx sequelize-cli db:migrate:undo:all - volta tudo de uma vez