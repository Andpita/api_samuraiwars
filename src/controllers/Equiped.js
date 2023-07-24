/* eslint-disable camelcase */
import Inventario from '../models/Inventario';
import User from '../models/User';

class EquipedC {
  async update(req, res) {
    const user = await User.findByPk(req.userId, {
      attributes: ["id", "equiped_sword", "equiped_sword_atr1", "equiped_sword_atr2",
        "equiped_armor", "equiped_armor_atr1", "equiped_armor_atr2",
        "equiped_helmet", "equiped_helmet_atr1", "equiped_helmet_atr2",
        "equiped_glove", "equiped_glove_atr1", "equiped_glove_atr2",
        "equiped_amulet", "equiped_amulet_atr1", "equiped_amulet_atr2"],
      include:
      {
        model: Inventario,
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
        swordAtt = await Inventario.findOne({ where: { nome: sword } });
      }
      if (helmet) {
        helmetAtt = await Inventario.findOne({ where: { nome: helmet } });
      }
      if (armor) {
        armorAtt = await Inventario.findOne({ where: { nome: armor } });
      }
      if (amulet) {
        amuletAtt = await Inventario.findOne({ where: { nome: amulet } });
      }
      if (glove) {
        gloveAtt = await Inventario.findOne({ where: { nome: glove } });
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
      const allInventario = await Inventario.findAll();

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

export default new EquipedC();
