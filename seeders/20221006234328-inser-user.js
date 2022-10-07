'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
    INSERT INTO User (
      FirstName,
      LastName,
      Email,
      Login,
      Password,
      Birthdate,
      Gender,
      Phone,
      Cpf,
      Cep,
      Address,
      Number,
      Complement,
      CountryName,
      StateName,
      CreatedAt,
      UpdatedAt
    ) VALUES (
      'Alex',
      'Turner',
      'alex.turner@example.com',
      'alex.turner',
      '123456',
      '1999-07-30',
      'Male',
      '(11) 00000-0000',
      '000.000.000-00',
      '00000-000',
      'Av Brasil',
      44,
      NULL,
      'Brasil',
      'São Paulo',
      '2022-10-07 00:43:33.157',
      NULL
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
