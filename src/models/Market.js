import Sequelize, { Model } from 'sequelize';

export default class Market extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attributes_strength: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      attributes_dexterity:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      attributes_intelligence:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      attributes_luck:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      tier:
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'D',
      },
      price:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 100,
      },
      creator_item:
      {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
        defaultValue: 'Reliquia',
      },
      item_id:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
    }, {
      sequelize,
      tableName: 'markets',
    });
    return this;
  }
}
