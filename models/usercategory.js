'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define('UserCategory', {
    name: DataTypes.STRING
  }, {
    tableName: 'user_categories',
    timestamps: false
  });

  UserCategory.associate = function(models) {
    UserCategory.hasMany(models.User, {
      foreignKey: 'category_id',
      as: 'users'
    });
  };

  return UserCategory;
};