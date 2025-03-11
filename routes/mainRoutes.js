const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
  res.render('users/index'); 
});

// Autenticación
router.get('/login', (req, res) => {
  res.render('users/login');
});

router.get('/register', (req, res) => {
  res.render('users/register');
});

// Productos
router.get('/productCard', (req, res) => {
  res.render('products/productCard');
});

router.get('/productDetail', (req, res) => {
  res.render('products/productDetail');
});

module.exports = router; // Exporta las rutas
