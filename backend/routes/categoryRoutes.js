const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoryController');

router.get('/', categoriesController.list);

module.exports = router;