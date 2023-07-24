"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 25],
            msg: 'Nome precisa ter entre 4 e 25 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 18],
            msg: 'Senha precisa ter entre 6 e 18 caracteres',
          },
        },
      },
      strength: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      dexterity: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      intelligence: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      luck: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      hp: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      energy: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      gold: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      level: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      reputacao: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      xp: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
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
      fire_fragment: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      water_fragment: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      earth_fragment: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      air_fragment: {
        type: _sequelize2.default.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'users',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Message, { foreignKey: 'user_id' });
    this.belongsToMany(models.Inventario, { through: 'conections' });
  }
} exports.default = User;
