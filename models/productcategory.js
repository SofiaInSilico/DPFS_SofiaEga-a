'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    name: DataTypes.STRING
  }, {
    tableName: 'product_categories',
    timestamps: false
  });

  ProductCategory.associate = function(models) {
    ProductCategory.hasMany(models.Product, {
      foreignKey: 'category_id',
      as: 'products'
    });
  };

  return ProductCategory;
};