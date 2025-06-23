const db = require("../models");
const Product = db.Product;
const Category = db.ProductCategory;

const list = async (req, res) => {
  try {
    const { count, rows }= await Product.findAndCountAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
    });
    res.json({
      'totalProducts': count,
      products: rows
    });
  } catch {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
    });

    if(!product) {
      res.status(404).json({error: 'Producto no encontrado'});
    }
    console.log(product);
    res.json(product);
  } catch {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};


const createProduct = async (req, res) => {
  try {
    const { name, price, stock, category_id } = req.body;
    let imageFilename = null;

    if (req.file) {
      imageFilename = req.file.filename;
    }

    const newProduct = await Product.create({
      name,
      price,
      stock,
      category_id,
      image: imageFilename,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const { name, price, stock, category_id } = req.body;

    const updatedData = {
      name,
      price,
      stock,
      category_id,
      image: product.image
    };

    if (req.file) {
      updatedData.image = req.file.filename; 
    }
    await Product.update(updatedData, { where: { id } });

    const editedProduct = await Product.findByPk(id);

    return res.status(200).json(editedProduct);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al editar el producto" });
  }
};

const destroyProduct = async (req, res) => {
  try {
    const destroyedProduct = await Product.destroy({
      where: { id: req.params.id },
    });

    if (destroyedProduct === 0) {
      res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({message: 'Producto eliminado correctamente'});
  } catch {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

module.exports = {
  list,
  getProduct,
  createProduct,
  updateProduct,
  destroyProduct
};
