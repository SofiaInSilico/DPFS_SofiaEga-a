'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    name: DataTypes.STRING
  }, {
    tableName: 'colors',
    timestamps: false
  });

  Color.associate = function(models) {
    Color.hasMany(models.Product, {
      foreignKey: 'color_id',
      as: 'products'
    });
  };

  return Color;
};