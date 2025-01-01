const router = require("express").Router()

const HomeController = require("../controllers/HomePageController")
const Controller = require("../controllers/UsersController")
const authentication = require("../middlewares/authentication")
const routerUsers = require("./users")

router.get("/", HomeController.homepage)
router.use(routerUsers)
router.use(authentication)

module.exports = router