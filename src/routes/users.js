import express from 'express';

export default function ({
  usersRequestHandler,
}) {
  const router = express.Router();

  router.delete('/:userId', async (req, res) => {
    await usersRequestHandler.deleteUserById(req.params.userId)
      .then(() => res.send('OK'));
  });
  return router;
}
