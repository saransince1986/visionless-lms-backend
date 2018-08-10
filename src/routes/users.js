import Joi from 'joi';
import { isEmpty } from 'lodash';
import awilixContainer from '../config/awilixContainer';

const usersRequestHandler = awilixContainer.resolve('usersRequestHandler');

export default [
  {
    method: 'GET',
    path: '/users',
    config: {
      tags: ['api'],
      description: 'Get all users',
      handler() {
        return usersRequestHandler.getAllUsers()
          .then((users) => users || [])
          .catch(console.error.bind(console));
      },
    },
  },
  {
    method: 'GET',
    path: '/users/{userId}',
    config: {
      tags: ['api'],
      description: 'Get a specific user by ID',
      validate: {
        params: {
          userId: Joi.number().integer().required().description('User numeric ID'),
        },
      },
      async handler(request, h) {
        const userId = request.params.userId;
        return usersRequestHandler.getUserById(userId).then((user) => {
          if (isEmpty(user)) {
            return h.response({}).code(404);
          }
          return user;
        }).catch((error) => {
          console.error(error);
          return h.response(error).code(500);
        });
      },
    },
  },
  {
    method: 'GET',
    path: '/users/{userId}/courses',
    config: {
      tags: ['api'],
      description: 'Get user enrollments',
      validate: {
        params: {
          userId: Joi.number().integer().required().description('User numeric ID'),
        },
      },
      handler: usersRequestHandler.getUserEnrollmentsByUserId.bind(usersRequestHandler),
    },
  },
  {
    method: 'POST',
    path: '/users',
    config: {
      tags: ['api'],
      description: 'Create a new user',
      validate: {
        payload: {
          email: Joi.string().email({ minDomainAtoms: 2 }).example('nombre@dominio.com'),
          phoneNumber: Joi.string()
            .regex(/^[0-9]{8}$/)
            .description('Honduras phone number without any special characters')
            .example('33225511'),
          authId: Joi.string().description('External authentication service ID, may be Auth0 ID'),
          firstName: Joi.string().max(20).required(),
          middleName: Joi.string().max(20),
          lastName: Joi.string().max(20).required(),
          secondLastName: Joi.string().max(20).required(),
          idNumber: Joi.string()
            .regex(/^[0-9]{13}$/)
            .description('Honduras id number')
            .required()
            .example('0801199012458'),
          disabilities: Joi.array().description('Disabilities the user has'),
        },
      },
      async handler(request, h) {
        const userData = request.payload;
        return usersRequestHandler.createUser({
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          authId: userData.authId,
          firstName: userData.firstName,
          middleName: userData.middleName,
          lastName: userData.lastName,
          secondLastName: userData.secondLastName,
          idNumber: userData.idNumber,
        }).catch((error) => {
          console.error(error);
          return h.response(error.message).code(500);
        });
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{userId}',
    config: {
      tags: ['api'],
      description: 'Delete a user by its Id',
      validate: {
        params: {
          userId: Joi.number().integer().required(),
        },
      },
      handler(request, h) {
        const userId = request.params.userId;
        return usersRequestHandler.deleteUserById(userId)
          .then(() => h.response('OK').code(204))
          .catch((error) => {
            console.error(error);
            return h.response(error).code(500);
          });
      },
    },
  },
];
