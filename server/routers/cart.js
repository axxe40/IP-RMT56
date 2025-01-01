const Controller = require("../controllers/CartController");
const routerCart = require("express").Router();

routerCart.post("/", Controller.addToCart)
routerCart.get("/", Controller.showCartItem)
routerCart.delete("/:id", Controller.deleteItem)

module.exports = routerCart