/* eslint-disable camelcase */
import Inventario from '../models/Inventario';
import User from '../models/User';

class InventarioC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoItem = await Inventario.create(req.body);

      return res.json(novoItem);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId, {
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

      const user = await User.findByPk(id, {
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
      const allInventario = await Inventario.findAll();

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

export default new InventarioC();
