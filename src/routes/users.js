import express from 'express';
import expressJoi from 'express-joi-validator';
import { isEmpty } from 'lodash';

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
    const user = await usersRequestHandler.getUserById(req.params.userId);
    if (!isEmpty(user)) {
      res.send(user);
    } else {
      res.statusCode = 404;
      res.send([]);
    }
  });

  router.delete('/:userId', async (req, res) => {
    await usersRequestHandler.deleteUserById(req.params.userId)
      .then(() => res.send('OK'));
  });

  router.post('/', expressJoi(usersSchemaValidator.post), async (req, res) => {
    try {
      const user = await usersRequestHandler.createUser({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        authId: req.body.authId,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        secondLastName: req.body.secondLastName,
        idNumber: req.body.idNumber,
        role: req.body.role,
      });
      res.send(user);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.send(err.stack);
    }
  });
  return router;
}
