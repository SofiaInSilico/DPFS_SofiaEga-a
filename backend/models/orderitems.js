'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    tableName: 'order_items',
    timestamps: false
  });

  OrderItems.associate = function(models) {
    OrderItems.belongsTo(models.Orders, {
      foreignKey: 'order_id',
      as: 'order'
    });
    OrderItems.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'products'
    });
  };

  return OrderItems;
};