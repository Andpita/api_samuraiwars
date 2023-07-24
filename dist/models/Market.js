"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Market extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        allowNull: false,
      },
      class: {
        type: _sequelize2.default.STRING,
        allowNull: false,
      },
      attributes_strength: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
      },
      attributes_dexterity:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      attributes_intelligence:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      attributes_luck:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      tier:
      {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'D',
      },
      price:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 100,
      },
      creator_item:
      {
        type: _sequelize2.default.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'Reliquia',
      },
      item_id:
      {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      tableName: 'markets',
    });
    return this;
  }
} exports.default = Market;
