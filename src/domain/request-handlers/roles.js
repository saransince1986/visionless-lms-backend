export default class RolesRequestHandler {
  constructor({
    roleModel,
  }) {
    this.roleModel = roleModel;
  }

  async createRole({ roleName }) {
    const role = await this.roleModel.create({ roleName });
    return role;
  }

  async getRoleById({ roleId }) {
    const role = await this.roleModel.findById(roleId);
    return role;
  }

  async getRoleByName(roleName) {
    const role = await this.roleModel.findOne({
      where: {
        roleName,
      },
    });
    return role;
  }

  async getAllRoles() {
    const roles = await this.roleModel.findAll();
    return roles;
  }

  async updateRole(roleId, role) {
    const updatedRole = await this.roleModel.update(role, {
      where: {
        id: roleId,
      },
    });
    return updatedRole;
  }

  async deleteRoleById({ roleId }) {
    await this.roleModel.destroy({
      where: {
        roleId,
      },
    });
    return true;
  }
}
