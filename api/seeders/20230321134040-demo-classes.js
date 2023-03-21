'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Classes', [
      {
        start_date: "2020-02-01",
        levelId: 1,
        teacherId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2020-02-01",
        levelId: 2,
        teacherId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2020-02-01",
        levelId: 3,
        teacherId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        start_date: "2020-07-01",
        levelId: 3,
        teacherId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Classes', null, {})
  }
};
