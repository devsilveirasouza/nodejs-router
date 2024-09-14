const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas
router.get('/', productController.listProducts);

module.exports = router;