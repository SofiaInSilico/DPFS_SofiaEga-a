'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'carts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  });

  Cart.associate = function(models) {
    Cart.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    Cart.hasMany(models.CartItem, {
      foreignKey: 'cart_id',
      as: 'cart_items'
    });
  };

  return Cart;
};