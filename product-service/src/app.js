const express = require('express');
const app = express();

app.get('/health', (req, res) => res.json({ status: 'UP' }));
app.get('/products', (req, res) => res.json([
  { id: 1, name: 'Product A', price: 10.99 },
  { id: 2, name: 'Product B', price: 19.99 },
]));
app.listen(3002, () => console.log('Product service running on port 3002'));