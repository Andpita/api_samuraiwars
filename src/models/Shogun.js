import Sequelize, { Model } from 'sequelize';

export default class Shogun extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',

      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',

      },
      strength: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      dexterity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      intelligence: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      luck: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      energy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      gold: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,

      },
      reputacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,

      },
      xp: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,

      },
      victorypvp:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      map:
      {
        type: Sequelize.FLOAT,
        allowNull: true,
        unique: false,
      },
      id_player:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_sword: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_armor: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_helmet: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_amulet: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_glove: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_sword_atr2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_armor_atr2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_helmet_atr2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_amulet_atr2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_glove_atr2: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_sword_atr1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_armor_atr1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_helmet_atr1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_amulet_atr1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_glove_atr1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },

    }, {
      sequelize,
      tableName: 'shoguns',
    });

    return this;
  }
}
