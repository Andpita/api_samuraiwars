"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Shogun extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',

      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',

      },
      strength: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      dexterity: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      intelligence: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      luck: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,

      },
      hp: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      energy: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      gold: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,

      },
      level: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 1,

      },
      reputacao: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        defaultValue: 0,

      },
      xp: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        defaultValue: 0,

      },
      victorypvp:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      map:
      {
        type: _sequelize2.default.FLOAT,
        allowNull: true,
        unique: false,
      },
      id_player:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_sword: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_armor: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_helmet: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_amulet: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_glove: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
      },
      equiped_sword_atr2: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_armor_atr2: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_helmet_atr2: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_amulet_atr2: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_glove_atr2: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_sword_atr1: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_armor_atr1: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_helmet_atr1: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_amulet_atr1: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
      equiped_glove_atr1: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },

    }, {
      sequelize,
      tableName: 'shoguns',
    });

    return this;
  }
} exports.default = Shogun;
