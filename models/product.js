'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    image: DataTypes.STRING,
    institution: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    size: DataTypes.ENUM('A4', 'A5'),
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER
  }, {
    tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Product.associate = function(models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: 'category_id',
      as: 'category'
    });
    Product.belongsTo(models.Brand, {
      foreignKey: 'brand_id',
      as: 'brand'
    });
    Product.belongsTo(models.Color, {
      foreignKey: 'color_id',
      as: 'color'
    });
    Product.hasMany(models.CartItem, {
      foreignKey: 'product_id',
      as: 'cart_items'
    });
  };

  return Product;
};