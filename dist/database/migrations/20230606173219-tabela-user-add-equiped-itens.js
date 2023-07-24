"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'equiped_sword',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_helmet',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_armor',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_amulet',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
    await queryInterface.addColumn(
      'users',
      'equiped_glove',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
    );
  },

  async down() { //
  },
};
