const Controller = require("../controllers/HomePageController");
const routerProducts = require("express").Router();

routerProducts.get("/", Controller.showAllGuitars)

module.exports = routerProducts