// Importa express y path
const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const morgan = require('morgan');

const app = express();

// ver las peticiones en la terminal
app.use(morgan('dev'));

app.use(session({
  secret: 'clave_secreta', 
  resave: false,
  saveUninitialized: false
}));

// Para leer datos en formato JSON (si algún formulario o API lo usara)
app.use(express.json());

app.use(cors());
// Importar y usar las rutas

// Rutas
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);

app.get('/users', (req, res) => {
  res.json(usersArray);
});

// Servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, '../frontend')));
// app.js o server.js
app.use('/images', express.static('public/images'));


// Si no encuentra ruta, devolver el index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Configurar el puerto y arrancar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
