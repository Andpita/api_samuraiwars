"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'xp',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    );
  },

  async down() { //
  },
};
