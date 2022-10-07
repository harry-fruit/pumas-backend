'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      INSERT INTO State (
      Name,
      CreatedAt,
      UpdatedAt
    ) VALUES (
      'São Paulo',
      '2022-10-07 00:43:33.157',
      UpdatedAt
    )`)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
