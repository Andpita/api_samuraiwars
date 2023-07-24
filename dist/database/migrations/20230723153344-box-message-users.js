"use strict";const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sender_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        dafaultValue: 0,
      },
      sender_name: {
        type: Sequelize.STRING,
        allowNull: true,
        dafaultValue: 'Default',
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
        dafaultValue: 'Default',
      },
      created_at: {
        type: sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('messages');
  },
};
