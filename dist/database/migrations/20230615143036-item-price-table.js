"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'inventarios',
      'price',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 100,
      },
    );
  },

  async down() { //
  },
};
