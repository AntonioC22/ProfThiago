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
