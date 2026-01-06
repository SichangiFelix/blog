const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const locals = {
        title: "Home Page",
        description: "Welcome to the Home Page"
    };

    res.render('index', locals);
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;