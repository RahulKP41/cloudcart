const express = require('express');
const app = express();

app.get('/health', (req,res) => res.json({status: 'ok'}));
app.get('/users', (req,res) => res.json([{id: 101, name: 'Alice'}, {id: 102, name: 'Bob'}]));
app.listen(3000, () => console.log('User service is running on port 3000'));