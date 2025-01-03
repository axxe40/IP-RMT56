const Controller = require("../controllers/UsersController")

const routerUsers = require("express").Router()

routerUsers.post("/register", Controller.register)
routerUsers.post("/login", Controller.login)
module.exports = routerUsers