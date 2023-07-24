"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Pve extends _sequelize.Model {
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
      ranking: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        defaultValue: 'A',
      },
      reputacao: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      xp: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      energy: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        defaultValue: 10,
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
    });

    return this;
  }
} exports.default = Pve;
