import express from 'express';
import expressJoi from 'express-joi-validator';

export default function ({
  rolesRequestHandler,
  rolesSchemaValidator,
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
  router.delete('/:roleId', async (req, res) => {
    const { roleId } = req.params;
    await rolesRequestHandler.deleteRoleById({ roleId });
    res.send('OK');
  });
  router.post('/', expressJoi(rolesSchemaValidator.post), async (req, res) => {
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
