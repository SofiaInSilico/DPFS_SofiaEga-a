'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('user', 'admin')
  }, {
    tableName: 'users',
    timestamps: false
  });

  return User;
};