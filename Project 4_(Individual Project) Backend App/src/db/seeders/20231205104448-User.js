"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("users", [
      {
        username: "johnd",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: bcrypt.hashSync(
          "johnDoe51223",
          bcrypt.genSaltSync(process.env.SALT_ROUNDS)
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "atuny0",
        firstName: "Terry",
        lastName: "Medhurst",
        email: "atuny0@shou.com",
        password: bcrypt.hashSync(
          "9uQFF1Lh",
          bcrypt.genSaltSync(process.env.SALT_ROUNDS)
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
