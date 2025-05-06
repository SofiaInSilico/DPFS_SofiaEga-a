'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  User.associate = function(models) {
    User.belongsTo(models.UserCategory, {
      foreignKey: 'category_id',
      as: 'category'
    });
    User.hasMany(models.Cart, {
      foreignKey: 'user_id',
      as: 'carts'
    });
  };

  return User;
};