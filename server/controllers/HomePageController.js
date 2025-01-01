const { Product } = require("../models");

class HomePageController {
  static async homepage(req, res, next) {
    try {
      res.json({ message: "Welcome to yourGuitar server" });
    } catch (error) {
      next(error);
    }
  }

  static async showAllGuitars(req, res, next) {
    try {
      const shoes = await Product.findAll();
      return res.status(200).json(shoes);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = HomePageController;
