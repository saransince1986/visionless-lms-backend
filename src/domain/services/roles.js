export default class RolesService {
  constructor({
    roleModel,
    privilegeModel,
  }) {
    this.roleModel = roleModel;
    this.privilegeModel = privilegeModel;
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
}
