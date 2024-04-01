'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      mttRatio: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    await queryInterface.addColumn('Vehicles', 'fk_model_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Models',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Vehicles', 'fk_model_id');

    await queryInterface.dropTable('Models');
  },
};
