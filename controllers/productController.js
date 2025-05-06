const db = require('../models');
const Product = db.Product;
const Category = db.ProductCategory;
const Color = db.Color;

module.exports = {
  list: async (req, res) => {
    const products = await Product.findAll({ include: [Category, Color] });
    res.render('products/productList', { products });
  },

  createForm: async (req, res) => {
    const [categories, colors] = await Promise.all([
      Category.findAll(), Color.findAll()
    ]);
    res.render('products/productForm', { product: null, categories, colors });
  },

  store: async (req, res) => {
    const { name, price, institution, stock, size, category_id, color_id } = req.body;
    await Product.create({
      name, price, institution, stock, size, category_id, color_id,
      image: req.file ? req.file.filename : 'default.jpg'
    });
    res.redirect('/products');
  },

  editForm: async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    const [categories, colors] = await Promise.all([
      Category.findAll(), Color.findAll()
    ]);
    res.render('products/productForm', { product, categories, colors });
  },

  update: async (req, res) => {
    const id = req.params.id;
    await Product.update(req.body, { where: { id } });
    res.redirect('/products');
  },

  destroy: async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.redirect('/products');
  }
};