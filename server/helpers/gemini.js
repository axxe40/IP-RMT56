require("dotenv").config({ path: "../.env" });
// helpers/geminiHelper.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function getRecommendation(preferences, products) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Buat prompt untuk AI
    const prompt = `
   User Preferences:
    Brand: "${preferences.brand}",
    Type: "${preferences.type}",
    Price Range: ${preferences.price_range.min_price} - ${preferences.price_range.max_price}
    Please find the products that match the user preferences above. If no products match the brand, type and price range, return a message: "Data not found."
    
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

    Based on the User Preferences, provide a recommendation list in JSON format.
    `;
      
    console.log("isi prompt", prompt);

    // Generate content dari Gemini AI
      const result = await model.generateContent(prompt);
      console.log("AI Response: ", result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to generate AI response");
  }
}

module.exports = { getRecommendation };
