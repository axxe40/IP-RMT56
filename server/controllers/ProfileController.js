const { User } = require("../models");

class ProfileController {
  static async showProfile(req, res, next) {
    try {
      const userId = req.user.id;
      const user = await User.findByPk(userId, {
        attributes: { exclude: ["password"] }, 
      });

      if (!user) {
        next({ name: "NotFound", message: "User not found" });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async updatePreference(req, res, next) {
    try {
      const { brand, type, price_range } = req.body;
      const formPriceRange =
        price_range && price_range.min_price && price_range.max_price;

      if (price_range && !formPriceRange) {
        return next({
          name: "BadRequest",
          message: "Invalid price_range format",
        });
      }

      const updatedData = {};
      if (brand) updatedData.brand = brand;
      if (type) updatedData.type = type;
      if (price_range) updatedData.price_range = price_range;

      const user = await User.findByPk(req.user.id);
      if (!user) {
        return next({ name: "NotFound", message: "User not found" });
      }

      await user.update(updatedData); 

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        brand: user.brand,
        type: user.type,
        price_range: user.price_range,
      });
    } catch (error) {
      console.log("what happen:", error);
      next(error);
    }
  }
}

module.exports = ProfileController;
