const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

router.get('/products', controller.list);
router.get('/products/create', controller.createForm);
router.post('/products', upload.single('image'), controller.store);
router.get('/products/:id/edit', controller.editForm);
router.post('/products/:id', upload.single('image'), controller.update);
router.post('/products/:id/delete', controller.destroy);

module.exports = router;