'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
    });

    await queryInterface.addColumn('Orders', 'fk_vehicle_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Vehicles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'fk_vehicle_id');

    await queryInterface.dropTable('Vehicles');
  },
};
