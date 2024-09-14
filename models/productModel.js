const db = require('../database/database');

// Listar todos os produtos
class Product {
    static getAll(callback) {
        db.all('SELECT * FROM products', callback);
    }

}

module.exports = Product;