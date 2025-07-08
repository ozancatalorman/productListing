const axios = require('axios');
require('dotenv').config(); 

const API_KEY = process.env.GOLDAPI_KEY;

module.exports = async function getLiveGoldPrice() {
  try {
    const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
      headers: {
        'x-access-token': API_KEY,
        'Content-Type': 'application/json',
      }
    });

    const price = response.data.price_gram_24k;
    console.log('Live gold price:', price);
    return price;
  } catch (err) {
    console.error('Failed to fetch live gold price, using fallback value of $60/g');
    return 60;
  }
};