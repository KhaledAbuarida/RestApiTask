const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are in users');
});

router.get('/id' , (req,res) => {
    res.send('user id');
});

module.exports = router;