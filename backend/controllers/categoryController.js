const db = require("../models");
const Category = db.ProductCategory;

const list = async (req, res) => {
    try {
    const categories = await Category.findAll();
    res.json(categories);
    } catch(error) {
        res.status(500).json({ error: 'Error al obtener las categorías'});
    };
};

module.exports = { list };