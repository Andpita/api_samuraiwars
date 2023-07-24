"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'users',
      'map',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
        unique: false,
      },
    );
  },

  async down() { //
  },
};
