const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const { route } = require('./admin');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts)

router.get('/products/:productId', shopController.getProduct)

router.get('/cart', shopController.getCart)

router.post('/cart-delete-item', shopController.postCartDeleteProduct)

router.post('/cart', shopController.postCart)

router.get('/checkout',shopController.getCheckout)

router.get('/orders', shopController.getOrders)
module.exports = router;
