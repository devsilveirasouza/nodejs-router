const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas
router.get('/products', productController.listProducts);
router.get('/products/add', productController.addProductForm);
router.post('/products/add', productController.addProduct);
router.get('/products/view/:id', productController.getProductById);
router.get('/products/edit/:id', productController.editProductForm);
router.post('/products/edit/:id', productController.editProduct);
router.get('/products/delete/:id', productController.deleteProduct);

module.exports = router;