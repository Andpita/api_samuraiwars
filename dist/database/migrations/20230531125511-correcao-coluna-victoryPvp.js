"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'users',
      'victorypvp',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
    );
  },

  async down() { //
  },
};
