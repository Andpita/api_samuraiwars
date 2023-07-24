"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'pves',
      'xp',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 100,
      },
    );

    await queryInterface.addColumn(
      'pves',
      'reputacao',
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
