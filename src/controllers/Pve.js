import { Sequelize } from 'sequelize';
import Pve from "../models/Pve";

class PveC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoPve = await Pve.create(req.body);

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
      const pves = await Pve.findAll();
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
      const pveRandom = await Pve.findOne({
        order: [
          Sequelize.fn('RAND'),
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
      const pve = await Pve.findByPk(req.params.id);

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
      const pve = await Pve.findByPk(req.pveId);

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

export default new PveC();
