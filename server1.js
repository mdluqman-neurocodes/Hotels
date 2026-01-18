const express = require('express')
const app = express();
const db = require('./basic_nodejs/db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my Hotel...')
})


// Import the router files
const personroutes = require('./routes/personroutes');
const menuitemsroutes = require('./routes/menuitemsroutes');

// Use the routers
app.use('/person', personroutes);
app.use('/menuitems', menuitemsroutes);

app.listen(PORT, () => {
    console.log('listening on port 3000');
})