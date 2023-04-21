const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/api', shopController.getProducts);

router.post('/cart', shopController.postCart);

router.get('/products/:productId', shopController.getProduct);

module.exports = router;
