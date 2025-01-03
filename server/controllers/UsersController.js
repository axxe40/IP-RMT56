const { User } = require("../models");
const { comparePassword } = require('../helpers/hashPassword')
const { signToken } = require("../helpers/jwt");

class UsersController {
  static async register(req, res, next) {
    try {
      const {name, email, password } = req.body;
      if (!name) {
        next({ name: "BadRequest", message: "name is required" });
        return;
      }
      if (!email) {
        next({ name: "BadRequest", message: "Email is required" });
        return;
      }
      if (!password) {
        next({ name: "BadRequest", message: "Password is required" });
        return;
      }

      const user = await User.create(req.body);
      res.status(201).json({
        id: user.id,
        username: user.name,
      });
    } catch (error) {
      next(error);
    } 
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        next({ name: "BadRequest", message: "Email is required" });
        return;
      }
      if (!password) {
        next({ name: "BadRequest", message: "Password is required" });
        return;
      }

      let user;
      if (email) {
        user = await User.findOne({ where: { email } });
      }

      if (!user) {
        next({ name: "Unauthorized", message: "Invalid email or password" });
        return;
      }

      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) {
        next({ name: "Unauthorized", message: "Invalid email or password" });
        return;
      }

      const access_token = signToken({ id: user.id, name: user.name });
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UsersController;
