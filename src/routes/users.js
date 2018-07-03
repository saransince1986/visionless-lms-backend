import express from 'express';
import expressJoi from 'express-joi-validator';

export default function ({
  usersRequestHandler,
  usersSchemaValidator,
}) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const users = await usersRequestHandler.getAllUsers();
    if (users) {
      res.send(users);
    } else {
      res.statusCode = 404;
      res.send([]);
    }
  });
  router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const user = await usersRequestHandler.getUserById({ userId });
    if (user) {
      res.send(user);
    } else {
      res.statusCode = 404;
      res.send([]);
    }
  });
  router.post('/', expressJoi(usersSchemaValidator.post), async (req, res) => {
    try {
      const user = await usersRequestHandler.createUser(req.body);
      res.send(user);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.stack);
    }
  });
  return router;
}
