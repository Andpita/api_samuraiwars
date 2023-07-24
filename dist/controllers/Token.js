"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class Token {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const {
      id, strength, dexterity, intelligence, gold,
      energy, luck, hp, level, reputacao, xp, nome, victorypvp,
      equiped_sword: sword, equiped_armor: armor, equiped_helmet: helmet,
      equiped_glove: glove, equiped_amulet: amulet,
      equiped_sword_atr1: swordAtr1, equiped_sword_atr2: swordAtr2,
      equiped_armor_atr1: armorAtr1, equiped_armor_atr2: armorAtr2,
      equiped_helmet_atr1: helmetAtr1, equiped_helmet_atr2: helmetAtr2,
      equiped_glove_atr1: gloveAtr1, equiped_glove_atr2: gloveAtr2,
      equiped_amulet_atr1: amuletAtr1, equiped_amulet_atr2: amuletAtr2,
      air_fragment: airfragment, fire_fragment: firefragment,
      water_fragment: waterfragment, earth_fragment: earthfragment,
    } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      user: { nome: user.nome, id, email },
      equiped: {
        sword,
        armor,
        helmet,
        glove,
        amulet,
        swordAtr1,
        swordAtr2,
        armorAtr1,
        armorAtr2,
        helmetAtr1,
        helmetAtr2,
        amuletAtr1,
        amuletAtr2,
        gloveAtr1,
        gloveAtr2,
      },
      status: {
        id,
        strength,
        dexterity,
        intelligence,
        gold,
        energy,
        luck,
        hp,
        level,
        reputacao,
        xp,
        nome,
        victorypvp,

      },
      fragments: {
        airfragment,
        firefragment,
        earthfragment,
        waterfragment,
      },
    });
  }
}

exports. default = new Token();
