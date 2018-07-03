export default class RolesRequestHandler {
  constructor({
    roleModel,
    rolesService,
  }) {
    this.roleModel = roleModel;
    this.rolesService = rolesService;
  }

  createRole({ roleName }) {
    return this.rolesService.createRole({ roleName });
  }

  getRoleById({ roleId }) {
    return this.roleModel.findById(roleId);
  }

  getRoleByName(roleName) {
    return this.roleModel.findOne({
      where: {
        roleName,
      },
    });
  }

  getAllRoles() {
    return this.roleModel.findAll();
  }

  updateRole(roleId, role) {
    return this.roleModel.update(role, {
      where: {
        id: roleId,
      },
    });
  }

  deleteRoleById({ roleId }) {
    return this.roleModel.destroy({
      where: {
        id: roleId,
      },
    });
  }
}
