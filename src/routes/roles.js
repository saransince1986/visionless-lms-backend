import express from 'express';

export default function ({
  rolesRequestHandler,
}) {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const roles = await rolesRequestHandler.getAllRoles();
    if (roles) {
      res.send(roles);
    } else {
      res.statusCode = 404;
      res.send([]);
    }
  });
  router.get('/:roleId', async (req, res) => {
    const { roleId } = req.params;
    const role = await rolesRequestHandler.getRoleById({ roleId });
    if (role) {
      res.send(role);
    } else {
      res.statusCode = 404;
      res.send([]);
    }
  });
  router.post('/', async (req, res) => {
    try {
      let { roleName } = req.body;
      roleName = roleName.toLowerCase();
      const role = await rolesRequestHandler.createRole({ roleName });
      res.send(role);
    } catch (err) {
      res.statusCode = 500;
      res.send(err);
    }
  });
  return router;
}
