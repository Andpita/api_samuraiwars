"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _Inventario = require('../models/Inventario'); var _Inventario2 = _interopRequireDefault(_Inventario);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class EquipedC {
  async update(req, res) {
    const user = await _User2.default.findByPk(req.userId, {
      attributes: ["id", "equiped_sword", "equiped_sword_atr1", "equiped_sword_atr2",
        "equiped_armor", "equiped_armor_atr1", "equiped_armor_atr2",
        "equiped_helmet", "equiped_helmet_atr1", "equiped_helmet_atr2",
        "equiped_glove", "equiped_glove_atr1", "equiped_glove_atr2",
        "equiped_amulet", "equiped_amulet_atr1", "equiped_amulet_atr2"],
      include:
      {
        model: _Inventario2.default,
        through: {
          attributes: [],
        },
      },

    });

    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const novosDados = await user.update(req.body);

    return res.json(novosDados);
  }

  async show(req, res) {
    try {
      const {
        sword, helmet, armor, amulet, glove,
      } = req.body;

      let swordAtt;
      let helmetAtt;
      let armorAtt;
      let amuletAtt;
      let gloveAtt;

      if (sword) {
        swordAtt = await _Inventario2.default.findOne({ where: { nome: sword } });
      }
      if (helmet) {
        helmetAtt = await _Inventario2.default.findOne({ where: { nome: helmet } });
      }
      if (armor) {
        armorAtt = await _Inventario2.default.findOne({ where: { nome: armor } });
      }
      if (amulet) {
        amuletAtt = await _Inventario2.default.findOne({ where: { nome: amulet } });
      }
      if (glove) {
        gloveAtt = await _Inventario2.default.findOne({ where: { nome: glove } });
      }

      const itensEquiped = {
        swordAtt, helmetAtt, armorAtt, amuletAtt, gloveAtt,
      };
      if (!itensEquiped) {
        return res.status(400).json({
          errors: ['Item não existe.'],
        });
      }

      return res.json(itensEquiped);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allInventario = await _Inventario2.default.findAll();

      if (!allInventario) {
        return res.status(400).json({
          errors: ['Inventario não existe.'],
        });
      }

      return res.json(allInventario);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new EquipedC();
