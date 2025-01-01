const router = require("express").Router()

const Controller = require("../controllers/UsersController")
const routerUsers = require("./users")

router.use(routerUsers)

module.exports = router