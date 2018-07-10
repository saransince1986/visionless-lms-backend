export default class UsersManagerService {
  constructor({
    userModel,
    roleModel,
  }) {
    this.userModel = userModel;
    this.roleModel = roleModel;
  }

  createUser(data) {
    return this.userModel.create(data);
  }

  getAllUsers() {
    return this.userModel.findAll({ limit: 100 });
  }

  getUserById(id) {
    return this.userModel.findById(id, {
      include: {
        model: this.roleModel,
      },
    });
  }

  deleteUserById(id) {
    return this.userModel.destroy({
      where: {
        id,
      },
    });
  }
}
