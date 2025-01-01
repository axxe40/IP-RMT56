const { Cart, Product } = require("../models");

class CartController{
    static async addToCart(req, res, next) {
        const { productId } = req.body; 
        const userId = req.user.id; 
    
        try {
          await Cart.create({
            userId,
            productId,
            quantity: 1 
          });
    
          return res.status(200).json({ message: "Product added to cart" });
        } catch (error) {
            console.log(error);
          next(error);
        }
    }
    
    static async showCartItem(req, res, next) {
        const userId = req.user.id; 
    
        try {
          const cartItems = await Cart.findAll({
            where: { userId },
            include: [
              {
                model: Product, 
                attributes: ['id', 'imgUrl','name', 'brand', 'type','price'] 
              }
            ]
          });
    
          if (cartItems.length === 0) {
            return res.status(200).json({ message: "Your cart is empty" });
          }
    
          return res.status(200).json(cartItems); 
        } catch (error) {
          next(error);
        }
    }
    
    static async deleteItem(req, res, next) {
        const { id } = req.params; 
        // console.log("ini id cart:", id);
    
        try {
            const product = await Cart.findByPk(id);
    
            if (!product) {
                return next({ name: "NotFound", message: "Product not found" });
            }
    
            await Cart.destroy({
                where: {
                    id
                },
            });
    
            return res.status(200).json({ message: "Product removed from cart" });
        } catch (error) {
            next(error); 
        }
    }
    
}
module.exports = CartController