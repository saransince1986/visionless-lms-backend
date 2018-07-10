export default class RolesRequestHandler {
  constructor({
    rolesManagerService,
  }) {
    this.rolesManagerService = rolesManagerService;
  }

  createRole({ roleName }) {
    return this.rolesManagerService.createRole({ roleName });
  }

  getRoleById(roleId) {
    return this.rolesManagerService.getRoleById(roleId);
  }

  getRoleByName(roleName) {
    return this.rolesManagerService.findRoleByName(roleName);
  }

  getAllRoles() {
    return this.rolesManagerService.getAllRoles();
  }

  updateRole(roleId, role) {
    return this.rolesManagerService.updateRole(roleId, role);
  }

  deleteRoleById({ roleId }) {
    return this.rolesManagerService.deleteRoleById(roleId);
  }
}
