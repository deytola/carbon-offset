'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      species: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      unitPrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Create foreign key for orders association
    await queryInterface.addColumn('Orders', 'fk_tree_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Trees',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'fk_tree_id');

    await queryInterface.dropTable('Trees');
  },
};
