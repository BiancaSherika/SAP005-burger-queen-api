const data = require("../db/models")

class UsersController {
  static async getUsers(__, res) {
    try {
      const allUsers = await data.Users.findAll({
        attributes: {
          exclude: ["password"]
        }
      });
      return res.status(200).json(allUsers);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const createdUser = await data.Users.create(newUser);
      return res.status(201).json(createdUser)
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async getUserId(req, res) {
    const { id } = req.params
    try {
      const userId = await data.Users.findAll({
        where: {
          id: Number(id)
        },
        attributes: {
          exclude: ["password"]
        }
      });
      return res.status(200).json(userId)
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params
    try {
      await data.Users.update(
        { name: req.body.name, password: req.body.password, role: req.body.role }, {
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json("usuário alterado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await data.Users.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json("usuário deletado com sucesso")
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

}

module.exports = UsersController;
