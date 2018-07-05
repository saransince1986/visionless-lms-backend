export default class RolesService {
  constructor({
    roleModel,
    privilegeModel,
  }) {
    this.roleModel = roleModel;
    this.privilegeModel = privilegeModel;
  }

  getAllRoles() {
    return this.roleModel.findAll();
  }

  getRoleById(roleId) {
    return this.roleModel.findById(roleId, {
      include: {
        model: this.privilegeModel,
        as: 'privileges',
      },
    });
  }

  createRole({ roleName }) {
    return this.roleModel.create({ roleName });
  }

  getRoleByName(roleName) {
    return this.roleModel.findOne({
      where: {
        roleName,
      },
    });
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
