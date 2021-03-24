const { Router } = require('express')
const usersController = require('../controller/users')

const usersRouter = Router()

usersRouter.get("/", usersController.getUsers)
usersRouter.get("/:id", usersController.getUserId)
usersRouter.post("/", usersController.creatUser)
usersRouter.put("/:id", usersController.updateUserId)
usersRouter.delete("/:id", usersController.deleteUserId)

module.exports = usersRouter