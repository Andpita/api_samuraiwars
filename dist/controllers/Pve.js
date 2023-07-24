"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Pve = require('../models/Pve'); var _Pve2 = _interopRequireDefault(_Pve);

class PveC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoPve = await _Pve2.default.create(req.body);

      return res.json(novoPve);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const pves = await _Pve2.default.findAll();
      return res.json(pves);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  /*async show(req, res) {
    try {
      const pve = await Pve.findByPk(req.params.id);

      if (!pve) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(pve);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  } */

  //SHOW -> random
  async random(req, res) {
    try {
      const pveRandom = await _Pve2.default.findOne({
        order: [
          _sequelize.Sequelize.fn('RAND'),
        ],
      });

      if (!pveRandom) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(pveRandom);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const pve = await _Pve2.default.findByPk(req.params.id);

      if (!pve) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await pve.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const pve = await _Pve2.default.findByPk(req.pveId);

      if (!pve) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await pve.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new PveC();
