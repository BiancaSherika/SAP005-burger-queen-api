const data = require("../db/models")

class UsersController {
  static async getUsers(__, res) {
    try {
      const allUsers = await data.users.findAll({
        attributes: {
          exclude: ["password"]
        }
      });
      return res.status(200).json(allUsers);
    } catch (e) {
      return res.status(400).json({ error : e.message })
    }
  }

  static async getUserId(req, res) {
    const { id } = req.params
    try {
      const userId = await data.users.findAll({
        where: {
          id: Number(id)
        },
        attributes: {
          exclude: ["password"]
        }
      });
      return res.status(200).json(userId)
    } catch(e) {
      return res.status(400).json({ error: e.message })
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const createdUser = await data.users.create(newUser);
      return res.status(201).json(createdUser)
    } catch (e) {
      return res.status(400).json({ error: e.message })
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params
    try {
      await data.users.update(
        { name: req.body.name, password: req.body.password, role: req.body.role }, {
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json({ status: "usuário alterado com sucesso"})
    } catch(e) {
      return res.status(400).json({ error: e.message })
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await data.users.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json({ status: "usuário deletado com sucesso"})
    } catch(e) {
      return res.status(400).json({ error: e.message })
    }
  }

}

module.exports = UsersController;
