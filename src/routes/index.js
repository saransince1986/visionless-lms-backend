import express from 'express';
import container from '../config/awilixContainer';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
const v1Router = express.Router();
v1Router.use('/roles', container.resolve('rolesRouter'));
v1Router.use('/users', container.resolve('usersRouter'));
v1Router.use('/courses', container.resolve('coursesRouter'));

router.use('/api/v1', v1Router);

export default router;

