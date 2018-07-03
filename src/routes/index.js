import express from 'express';
import container from '../config/awilixContainer';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/roles', container.resolve('rolesRouter'));
router.use('/users', container.resolve('usersRouter'));

export default router;

