import Joi from 'joi';
import awilixContainer from '../config/awilixContainer';

const sectionsRequestHandler = awilixContainer.resolve('sectionsRequestHandler');

export default [
  {
    method: 'GET',
    path: '/sections',
    config: {
      tags: ['api'],
      description: 'List sections',
      handler(request, h) {
        return sectionsRequestHandler.getAllSections()
          .catch((error) => {
            console.error(error);
            return h.response(error.message).code(500);
          });
      },
    },
  },
  {
    method: 'GET',
    path: '/sections/{id}',
    config: {
      tags: ['api'],
      description: 'Get section by ID',
      validate: {
        params: {
          id: Joi.number().integer().required(),
        },
      },
      handler(request, h) {
        const sectionId = request.params.id;
        return sectionsRequestHandler.getSectionById(sectionId)
          .then((course) => course || h.response().code(404))
          .catch((error) => {
            console.error(error);
            return h.response(error.message).code(500);
          });
      },
    },
  },
  {
    method: 'DELETE',
    path: '/sections/{id}',
    config: {
      tags: ['api'],
      description: 'Delete a section',
      validate: {
        params: {
          id: Joi.number().integer().required(),
        },
      },
      handler(request, h) {
        const sectionId = request.params.id;
        return sectionsRequestHandler.deleteSectionById(sectionId)
          .then(() => h.response('OK').code(200))
          .catch((error) => {
            console.error(error);
            return h.response(error.message).code(500);
          });
      },
    },
  },
];
