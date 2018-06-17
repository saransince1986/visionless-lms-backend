import awilix from 'awilix';
import db from '../models';

const container = awilix.createContainer();

Object.keys(db).forEach((model) => {
  if (model.toLowerCase() !== 'sequelize') {
    container.registerValue(`${model}Model`, db[model]);
  }
});

export default container;


