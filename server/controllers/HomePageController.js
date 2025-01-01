class HomePageController {
    static async homepage(req, res, next) {
      try {
          res.json({message:"Welcome to yourGuitar server"})
      } catch (error) {
          next(error)
      }
    }
}
module.exports = HomePageController