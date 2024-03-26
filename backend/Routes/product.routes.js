const express = require('express');
const router = express.Router();
const productController = require('../Controllers/product.controller');

router.get('/', productController.getProducts);

module.exports = router;
