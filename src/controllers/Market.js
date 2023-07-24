/* eslint-disable camelcase */
import Market from '../models/Market';

class MarketC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const novoItem = await Market.create(req.body);

      return res.json(novoItem);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    const user = await Market.findByPk(req.userId, {
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

      const item = await Market.findAll({ where: { item_id: id } });

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
      const allInventario = await Market.findAll();

      return res.json(allInventario);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new MarketC();
