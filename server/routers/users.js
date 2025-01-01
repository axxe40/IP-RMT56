const Controller = require("../controllers/UsersController")

const routerUsers = require("express").Router()

routerUsers.post("/register", Controller)

module.exports = routerUsers