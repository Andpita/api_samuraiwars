"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'inventarios',
      'creator_item',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'Reliquia',
      },
    );
  },

  async down() { //
  },
};
