import userRoutes from './users';

export default [
  {
    method: 'GET',
    path: '/',
    handler() {
      return 'Hello!';
    },
  },
  ...userRoutes,
];
