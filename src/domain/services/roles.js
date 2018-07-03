export default class RolesService {
  constructor({
    roleModel,
  }) {
    this.roleModel = roleModel;
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
