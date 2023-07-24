const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pves', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strength: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 10,
      },
      dexterity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 10,
      },
      intelligence: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 10,
      },
      luck: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 10,
      },
      hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 100,
      },
      gold: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 100,
      },
      ranking: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      energy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 10,
      },
      xp: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 100,
      },
      reputacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
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
    await queryInterface.dropTable('pve');
  },
};
