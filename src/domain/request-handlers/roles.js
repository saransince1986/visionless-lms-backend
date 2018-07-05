export default class RolesRequestHandler {
  constructor({
    rolesService,
  }) {
    this.rolesService = rolesService;
  }

  createRole({ roleName }) {
    return this.rolesService.createRole({ roleName });
  }

  getRoleById(roleId) {
    return this.rolesService.getRoleById(roleId);
  }

  getRoleByName(roleName) {
    return this.rolesService.findRoleByName(roleName);
  }

  getAllRoles() {
    return this.rolesService.getAllRoles();
  }

  updateRole(roleId, role) {
    return this.rolesService.updateRole(roleId, role);
  }

  deleteRoleById({ roleId }) {
    return this.rolesService.deleteRoleById(roleId);
  }
}
