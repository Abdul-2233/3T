'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    clienteId:      DataTypes.INTEGER,
  }, {});

  Venta.associate = function (models) {
 
    Venta.belongsTo(models.Cliente, {
        foreignKey: 'clienteId',
        onDelete: 'CASCADE'
    })
 
  };
  return Venta;
};
