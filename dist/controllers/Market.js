"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _Market = require('../models/Market'); var _Market2 = _interopRequireDefault(_Market);

class MarketC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoItem = await _Market2.default.create(req.body);

      return res.json(novoItem);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    const user = await _Market2.default.findByPk(req.userId, {
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

      const item = await _Market2.default.findAll({ where: { item_id: id } });

      return res.json(item);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allInventario = await _Market2.default.findAll();

      return res.json(allInventario);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new MarketC();
