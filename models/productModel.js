const db = require('../database/database');

// Listar todos os produtos
class Product {
    static getAll(callback) {
        db.all('SELECT * FROM products', callback);
    }

    static getById(id, callback) {
        db.get('SELECT * FROM products WHERE id = ?', [id], callback);
    }

    static create(name, price, quantity, callback) {
        const sql = 'INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)';
        db.run(sql, [name, price, quantity], callback);
    }

    static update(id, name, price, quantity, callback) {
        const sql = 'UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?';
        db.run(sql, [name, price, quantity, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM products WHERE id = ?';
        db.run(sql, [id], callback);
    }
}

module.exports = Product;