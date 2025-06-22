const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');


const {
  list,
  getProduct,
  createProduct,
  updateProduct,
  destroyProduct
} = require('../controllers/productController');

router.get('/', list);
router.get('/product/:id', getProduct);
router.post('/', upload.single('image'), createProduct);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id/delete', destroyProduct);

module.exports = router;
