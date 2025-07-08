require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const getLiveGoldPrice = require('./utils/getLiveGoldPrice');

const app = express();
app.use(cors());

app.get('/api/products', async (req, res) => {
  const rawData = fs.readFileSync('./data/products.json');
  const products = JSON.parse(rawData);
  const goldPrice = await getLiveGoldPrice();

  const enriched = products.map(product => ({
    ...product,
    priceUSD: ((product.popularityScore + 1) * product.weight * goldPrice).toFixed(2)
  }));

  res.json(enriched);
});

app.listen(3001, () => console.log('API running on http://localhost:3001'));
