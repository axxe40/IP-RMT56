const Controller = require("../controllers/CartController");
const routerCart = require("express").Router();

routerCart.post("/", Controller.addToCart)
routerCart.get("/", Controller.showCartItem)
routerCart.put("/:id", Controller.updateQuantity)
routerCart.delete("/:id", Controller.deleteItem)

module.exports = routerCart