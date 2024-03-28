'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Models', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            modelName: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },
            year: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            mttRatio: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            fkMakeId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Makes', // Assuming the Make entity's table name is 'Makes'
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Models');
    }
};
