'use strict';

 module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    tableName: 'products',
    timestamps: false
  });

  Product.associate = function(models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: 'category_id',
      as: 'category'
    });
  };

  return Product;
};

