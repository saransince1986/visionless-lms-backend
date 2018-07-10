import express from 'express';
import expressJoi from 'express-joi-validator';

export default function ({
  rolesRequestHandler,
  rolesSchemaValidator,
}) {
  const router = express.Router();
  router.get('/', async (req, res) => {
    const roles = await rolesRequestHandler.getAllRoles() || [];
    res.send(roles);
  });
  router.get('/:roleId', async (req, res) => {
    try {
      const { roleId } = req.params;
      const role = await rolesRequestHandler.getRoleById(roleId) || [];
      res.send(role);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
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
      console.error(err);
      res.status(500).send(err.message);
    }
  });
  return router;
}
