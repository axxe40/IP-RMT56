require("dotenv").config({ path: "../.env" });
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Product } = require("../models");
const { Op } = require("sequelize");

async function generateAIResponse() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Mock data user preferences
    // const preferences = {
    //   brand: "Fender",
    //   type: "Electric",
    //   price_range: {
    //     min_price: 2000000,
    //     max_price: 5000000,
    //   },
    //   };
      
    //   console.log("Preferences:",preferences);

    // Ambil data produk dari database
    const products = await Product.findAll({
      where: {
        brand: preferences.brand,
        type: preferences.type,
        price: {
          [Op.between]: [
            preferences.price_range.min_price,
            preferences.price_range.max_price,
          ],
        },
      },
    });
    // console.log("Products found with price range:", products);
    if (!products.length) {
      console.error("No matching products found for the given preferences");
      return;
    }

    // Buat prompt untuk AI
    const prompt = `
     User Preferences:
    Brand: ${preferences.brand}
    Type: ${preferences.type}
    Price Range: ${preferences.price_range.min_price} - ${preferences.price_range.max_price}
    
    Products:
     ${products
       .map(
         (p) => `
      {
        "id": ${p.id},
        "imgUrl": "${p.imgUrl}",
        "name": "${p.name}",
        "brand": "${p.brand}",
        "type": "${p.type}",
        "price": ${p.price},
        "description": "${p.description}"
      }`
       )
       .join(",")}

    Based on the preferences, provide a recommendation list in JSON format.
    `;

    // Generate content dari Gemini AI
    const result = await model.generateContent(prompt);

    console.log("AI Response:");
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating AI response:", error);
  }
}

generateAIResponse();
