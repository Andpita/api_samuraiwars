import Sequelize, { Model } from 'sequelize';

export default class Inventario extends Model {
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
    }, {
      sequelize,
      tableName: 'inventarios',
    });
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, { through: 'conections' });
  }
}
