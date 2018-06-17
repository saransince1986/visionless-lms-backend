/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize.json')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
 fs
   .readdirSync(__dirname)
   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
   .forEach((file) => {
     const model = sequelize.import(path.join(__dirname, file));
     db[model.name] = model;
   });
  const models = sequelize.models;
  Object.keys(models)
    .map(name => models[name])
    .filter((model) => {
      return model.associate;
    })
    .forEach((model) => {
      model.associate(models)
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;