const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
  register,
  login
} = require('../controllers/authController');

// login
router.post('/login', login);

// register
router.post('/register', register);

// logout
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      return res.status(200).json({message: 'Usuario cerró de la sesión'}); // o donde esté el usuario
    }
    return res.status(500).json({error: 'No se pudo cerrar sesión'});
  });
});



module.exports = router;
