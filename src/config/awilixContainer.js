import { createContainer, Lifetime, asValue, asClass, asFunction } from 'awilix';
import db from '../models';

const container = createContainer();

Object.keys(db).forEach((model) => {
  if (model.toLowerCase() !== 'sequelize') {
    container.register(`${model}Model`, asValue(db[model]));
  }
});

container.loadModules([`${__dirname}/../domain/request-handlers/!(index).js`], {
  formatName: (name) => `${name}RequestHandler`,
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asClass,
  },
});

container.loadModules([`${__dirname}/../routes/!(index).js`], {
  formatName: (name) => `${name}Router`,
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asFunction,
  },
});

container.loadModules([`${__dirname}/../domain/joi-validators/!(index).js`], {
  formatName: (name) => `${name}SchemaValidator`,
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asFunction,
  },
});

export default container;
