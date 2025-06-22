const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

const {
  userList,
  userDestroy, 
} = require('../controllers/userController');

// Mostrar lista de usuarios
router.get('/', userList);

// Eliminar usuario
router.delete('/user/:id', userDestroy);


module.exports = router;
