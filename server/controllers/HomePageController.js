const { Product} = require("../models");
const {getRecommendation} = require("../helpers/gemini");

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

  static async recommendation(req, res, next) {
    try {
      const { brand, type, price_range} = req.user;
    
  
      const products = await Product.findAll({
        attributes: ['id', 'imgUrl', 'name', 'brand', 'type', 'price', 'description'],
      });
      // console.log("isi product:", products);
  
      if (!products.length) {
        next({ name: "NotFound", message: "No matching products found" });
        return;
      }
  
      // Menggunakan helper getRecommendation yang sudah diimpor
      const recommendations = await getRecommendation({ brand, type, price_range }, products);
  
      res.status(200).json({ recommendations });
    } catch (error) {
      console.log("ada apa", error);
      next(error);
    }
  }
}
module.exports = HomePageController;
