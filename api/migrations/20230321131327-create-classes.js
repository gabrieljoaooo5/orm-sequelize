'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      teacherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'Id'}
      },
      levelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Levels', key: 'Id'}
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};