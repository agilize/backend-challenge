module.exports = (sequelize, DataTypes) => {
  const InfosGov = sequelize.define(
    'InfosGov',
    {
      mesAno: {
        type: DataTypes.STRING,
        mesAno: 'mes_ano',
      },
      programaOrcamentario: {
        type: DataTypes.STRING,
        programaOrcamentario: 'programa_orcamentario',
      },
      acaoOrcamentaria: {
        type: DataTypes.STRING,
        acaoOrcamentaria: 'acao_orcamentaria',
      },
      valorEmpenhado: {
        type: DataTypes.STRING,
        valorEmpenhado: 'valor_empenhado'
      },
      valorLiquidado: {
        type: DataTypes.STRING,
        valorLiquidado: 'valor_liquidado'
      },
      valorPago: {
        type: DataTypes.STRING,
        valorPago: 'valor_pago'
      },
      valorRestosAPagarPagos: {
        type: DataTypes.STRING,
        valorRestosAPagarPagos: 'valor_restos_a_pagar_pagos'
      },
    },
    {
      timestamps: false,
      tablename: 'infos_govs',
      underscored: true,
    }
  );

  return InfosGov;
}
