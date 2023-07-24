const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shoguns', {
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
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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
      energy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 100,
      },
      gold: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 100,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 1,
      },
      map: {
        type: Sequelize.FLOAT,
        allowNull: true,
        unique: false,
      },
      victorypvp: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
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
    await queryInterface.dropTable('shogun');
  },
};
