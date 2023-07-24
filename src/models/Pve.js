import Sequelize, { Model } from 'sequelize';

export default class Pve extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 25],
            msg: 'Nome precisa ter entre 4 e 25 caracteres',
          },
        },
      },
      strength: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      dexterity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      intelligence: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      luck: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      gold: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      ranking: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'A',
      },
      reputacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      xp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 100,
      },
      energy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 10,
      },
      fire_fragment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      water_fragment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      earth_fragment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
      air_fragment: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
        defaultValue: 0,
      },
    }, {
      sequelize,
    });

    return this;
  }
}
