module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ventas', [{
      clienteId: 1,
      vehiculoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      clienteId: 3,
      vehiculoId: 1,      
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      clienteId: 2,
      vehiculoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      clienteId: 1,
      vehiculoId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ventas', null, {});
  }
};
