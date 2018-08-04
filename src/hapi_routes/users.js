import awilixContainer from '../config/awilixContainer';

export default [
  {
    method: 'GET',
    path: '/users',
    handler() {
      const usersRequestHandler = awilixContainer.resolve('usersRequestHandler');
      return usersRequestHandler.getAllUsers()
        .then((users) => users || [])
        .catch(console.log.bind(console));
    },
    config: {
      tags: ['api'],
      description: 'Get all users',
    },
  },
];
