const Product = require('../models/productModel');

exports.listProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).send("Erro ao listar produtos");
        res.render('productList', { products });
    });
};

exports.getProductById = (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, product) => {
        if (err) return res.status(500).send("Erro ao buscar o produto");
        res.render('viewProduct', { product });
    });
};

exports.addProductForm = (req, res) => {
    res.render('addProduct');
}

exports.addProduct = (req, res) => {
    const { name, price, quantity } = req.body;
    Product.create(name, price, quantity, (err) => {
        if (err) return res.status(500).send("Erro ao adicionar o produto");
        res.redirect('/products');
    });
};

exports.editProductForm = (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, product) => {
        if (err) return res.status(500). send("Erro ao buscar o produto");
        res.render('editProduct', { product });
    });
};

exports.editProduct = (req, res) => {
    const { id, name, price, quantity } = req.body;
    Product.update(id, name, price, quantity, (err) => {
        if (err) return res.status(500).send("Erro ao editar o produto");
        res.redirect('/products');
    });
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.delete(id, (err) => {
        if (err) return res.status(500).send("Erro ao deletar o produto");
        res.redirect('/products');
    });
};