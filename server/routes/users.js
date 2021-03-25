const { Router } = require('express')
const usersController = require('../controller/users')

const usersRouter = Router()

usersRouter.get("/", usersController.getUsers)
usersRouter.get("/:id", usersController.getUserId)
usersRouter.post("/", usersController.createUser)
usersRouter.put("/:id", usersController.updateUser)
usersRouter.delete("/:id", usersController.deleteUser)

module.exports = usersRouter