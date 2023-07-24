import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
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
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 18],
            msg: 'Senha precisa ter entre 6 e 18 caracteres',
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
      energy: {
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
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      reputacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Atributo precisa ser um número inteiro.',
          },
        },
      },
      xp: {
        type: Sequelize.INTEGER,
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
      tableName: 'users',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Message, { foreignKey: 'user_id' });
    this.belongsToMany(models.Inventario, { through: 'conections' });
  }
}
