'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('infos_gov', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      mesAno: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'mes_ano' 
      },
      programaOrcamentario: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'programa_orcamentario'
      },
      acaoOrcamentaria: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'acao_orcamentaria'
      },
      valorEmpenhado: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'valor_empenhado'
      },
      valorLiquidado: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'valor_liquidado'
      },
      valorPago: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'valor_pago'
      },
      valorRestosAPagarPagos: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'valor_restos_a_pagar_pagos'
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('infos_gov');
  },
};