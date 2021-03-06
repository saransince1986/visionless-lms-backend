import { createContainer, Lifetime, asValue, asClass } from 'awilix';
import db from '../models';
import courseSectionTypes from '../domain/data/courseSectionTypes';

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

container.loadModules([`${__dirname}/../domain/services/*.js`], {
  formatName: (name) => `${name}ManagerService`,
  resolverOptions: {
    lifetime: Lifetime.SINGLETON,
    register: asClass,
  },
});

container.register('courseSectionTypes', asValue(courseSectionTypes));

export default container;
