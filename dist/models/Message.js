"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Message extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_name: {
        type: _sequelize2.default.STRING,
        allowNull: true,

      },
      title: {
        type: _sequelize2.default.STRING,
        allowNull: false,
      },
      sender_id: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        dafaultValue: 0,
      },
      sender_name: {
        type: _sequelize2.default.STRING,
        allowNull: true,
        dafaultValue: 'Default',
      },
      text: {
        type: _sequelize2.default.TEXT,
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
} exports.default = Message;
