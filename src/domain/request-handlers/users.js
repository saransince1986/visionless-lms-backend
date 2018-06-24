export default class UsersRequestHandler {
  constructor({
    userModel,
  }) {
    this.userModel = userModel;
  }

  async createUser({ roleName }) {
    const role = await this.userModel.create({ roleName });
    return role;
  }

  async getUserById({ roleId }) {
    const role = await this.userModel.findById(roleId);
    return role;
  }

  async getAllUsers() {
    const roles = await this.userModel.findAll();
    return roles;
  }

  async updateRole(userId, user) {
    const updatedUser = await this.userModel.update(user, {
      where: {
        id: userId,
      },
    });
    return updatedUser;
  }
}
