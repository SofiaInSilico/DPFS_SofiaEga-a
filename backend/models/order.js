'use strict';
module.exports =  (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  });

  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    Orders.hasMany(models.OrderItems, {
      foreignKey: 'order_id',
      as: 'order_items'
    });
  };

  return Orders;
};