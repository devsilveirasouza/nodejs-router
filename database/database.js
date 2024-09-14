const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(' :memory: ');
const db = new sqlite3.Database('./database/products.db', (err) => {
    if (err) {
        console.log('Erro ao abrir o DB', err.message);
    } else {
        console.log('Conexão com o DB SQLITE foi estalecida.');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        quantity INTEGER
    )
`);
});

module.exports = db;