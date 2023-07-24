"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _Inventario = require('../models/Inventario'); var _Inventario2 = _interopRequireDefault(_Inventario);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class InventarioC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoItem = await _Inventario2.default.create(req.body);

      return res.json(novoItem);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    const user = await _User2.default.findByPk(req.userId, {
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

    const { itens } = req.body;
    if (itens && itens.length > 0) {
      user.addInventario(itens);
      console.log(itens);
    }

    const novosDados = await user.update(user);

    return res.json(novosDados.Inventarios);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await _User2.default.findByPk(id, {
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
          errors: ['Usuário não existe.'],
        });
      }

      const itens = user.Inventarios;

      return res.json(itens);
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
          errors: ['Usuário não existe.'],
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

exports. default = new InventarioC();
