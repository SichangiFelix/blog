require('dotenv').config();
const express = require('express');
const expresslayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// assets
app.use(express.static('public'));

// Templating engine
app.use(expresslayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});