import Sequelize, { Model } from 'sequelize';

export default class Message extends Model {
  static init(sequelize) {
    super.init({
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
    }, {
      sequelize,
      tableName: 'messages',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
