const express = require('express');
const router = express.Router();
const product = require('../database/models/product');
router.get('/', (req, res) => {
  res.send('aqui los productos');
});

// create
router.post('/', (req, res) => {
  product
    .create({
      title: req.body.title,
      body: req.body.body,
    })
    .then((post) => {
      res.json(post);
    });
});

module.exports = router;
