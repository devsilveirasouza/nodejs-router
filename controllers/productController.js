const Product = require('../models/productModel');

exports.listProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).send("Erro ao listar produtos");
        res.render('productList', { products });
    });
};
