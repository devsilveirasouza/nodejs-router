const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

// DEFINIR EJS como motor de visualização
// Configurando a pasta 'views' e a engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
// COnfiguração do body-parser
app.use(bodyParser.urlencoded({ extend: true }));

// Configurando a pasta pública para os arquivos estáticos (CSS)
app.set(express.static(path.join(__dirname, 'public')));

// ROTAS
// Rotas de produtos
app.use('/', productRoutes);

// Rodando o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});