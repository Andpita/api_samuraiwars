import Shogun from "../models/Shogun";

class ShogunC {
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

      const shogun = await Shogun.create(data);

      return res.json(shogun);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //INDEX -> LISTAR TODOS
  async index(req, res) {
    try {
      const shogun = await Shogun.findAll();

      return res.json(shogun);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  //SHOW -> LISTAR 1
  async show(req, res) {
    try {
      const { id } = req.params;

      const shogun = await Shogun.findByPk(id);

      if (!shogun) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(shogun);
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
      const shogun = await Shogun.findByPk(req.userId);
      if (!shogun) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }
      const { itens, ...data } = req.body;

      const novosDados = await shogun.update(data);

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
      const shogun = await Shogun.findByPk(req.userId);

      if (!shogun) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await shogun.destroy();
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

      const player = await Shogun.findByPk(id);

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

export default new ShogunC();
