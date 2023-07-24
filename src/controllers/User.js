import User from "../models/User";
import Inventario from "../models/Inventario";

class UserC {
  //STORE -> CRIAÇÃO
  async store(req, res) {
    try {
      const baseData = {
        strength: 10,
        dexterity: 10,
        intelligence: 10,
        luck: 10,
        hp: 100,
        energy: 100,
        gold: 50,
        level: 1,
        reputacao: 0,
        victorypvp: 0,
        map: 0,

        ...req.body,
      };

      const { itens, ...data } = baseData;

      const novoUser = await User.create(data);

      if (itens && itens.length > 0) {
        novoUser.setInventario(itens);
      }

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id, {
        include:
        {
          all: true,
        },
      });

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(user);
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
      const { itens, ...data } = req.body;
      if (itens && itens.length > 0) {
        console.log(itens);
        user.setInventarios(itens);
      }

      const novosDados = await user.update(data);

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
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //Update 2 Teste
  async update2(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const player = await User.findByPk(id);

      if (!player) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }

      const attPlayer = await player.update(req.body);

      return res.json(attPlayer);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserC();
