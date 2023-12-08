"use strict";

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
    await queryInterface.bulkInsert("Posts", [
      {
        title: "His mother had always taught him",
        body: "Alii diceret nostrum usu an, ad per soluta pericula, ea vel elit quas bonorum.",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "He was an expert but not in a discipline",
        body: "Lorem ipsum dolor sit amet, ne eripuit ancillae mea, no justo quidam impetus duo.",
        user_id: 2,
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
    await queryInterface.bulkDelete("People", null, {});
  },
};
