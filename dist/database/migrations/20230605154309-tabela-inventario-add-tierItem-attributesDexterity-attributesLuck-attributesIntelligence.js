"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'inventarios',
      'attributes_dexterity',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'inventarios',
      'attributes_intelligence',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'inventarios',
      'attributes_luck',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    );
    await queryInterface.addColumn(
      'inventarios',
      'tier',
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'D',
      },
    );
  },

  async down() { //
  },
};
