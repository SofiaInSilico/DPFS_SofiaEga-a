// Importa express y path
const express = require('express');
const path = require('path');

const app = express();

// Configurar motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar las rutas
const mainRoutes = require('./routes/mainRoutes');
app.use(mainRoutes); // Usa las rutas definidas en mainRoutes.js

// Configurar el puerto y arrancar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});

const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);