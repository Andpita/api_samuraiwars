"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'fire_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'water_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'earth_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'users',
      'air_fragment',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
