const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

// DEFINIR EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extend: true }));
app.set(express.static(path.join(__dirname, 'public')));

// ROTAS
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});