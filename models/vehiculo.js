'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Venta', {
    vehiculoId:      DataTypes.INTEGER
  }, {});

  Venta.associate = function (models) {

    Venta.belongsTo(models.Vehiculo, {
      foreignKey: 'vehiculoId',
      onDelete: 'CASCADE'
    })

  };
  return Venta;
};
