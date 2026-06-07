const express = require('express');
const app = express();

app.get('/users', (req, res) => res.json({status: 'success'}));
app.get('/orders', (req, res) => res.json({id: 101, status: 'created'}));
app.listen(3001, () => console.log('Order service is running on port 3001'));