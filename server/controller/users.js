const data = require("../db/models")

class UsersController {
  static async getUsers(req, res, next) {
    try {
      const allUsers = await data.users.findAll({
        attributes: {
          exclude: ["password"]
        }
      });
      return res.status(200).json(allUsers);
    } catch (err) {
      return res.status(400).json({ error : err.message })
    }
  }

  static async getUserId(req, res, next) {
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
    } catch(err){
      return res.status(400).json({ error: err.message })
    }
  }

  static async createUser(req, res, next) {
    const newUser = req.body;
    try {
      const createdUser = await data.users.create(newUser);
      return res.status(201).json(createdUser)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  static async updateUser(req, res, next) {
    const { id } = req.params
    try {
      await data.users.update(
        { name: req.body.name, password: req.body.password, role: req.body.role }, {
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json({ status: "usuário alterado com sucesso"})
    } catch(err) {
      return res.status(400).json({ error: err.message })
    }
  }

  static async deleteUser(req, res, next) {
    const { id } = req.params
    try {
      await data.users.destroy({
        where: {
          id: Number(id)
        }
      });
      return res.status(201).json({ status: "usuário deletado com sucesso"})
    } catch(err) {
      return res.status(400).json({ error: err.message })
    }
  }

}

module.exports = UsersController;
