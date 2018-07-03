export default class UsersService {
  constructor({
    userModel,
    roleModel,
  }) {
    this.userModel = userModel;
    this.roleModel = roleModel;
  }

  createUser(data) {
    return this.userModel.create(data, {
      include: {
        model: this.roleModel,
        as: 'role',
      },
    });
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
}
