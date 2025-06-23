'use strict';

const fs = require('fs');
const { basename: _basename, join } = require('path');
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;


const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// para importar todos los modelos del directorio actual
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    console.log('Cargando archivo:', file); 
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;

  });

// Asociaciones entre modelos :V
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
