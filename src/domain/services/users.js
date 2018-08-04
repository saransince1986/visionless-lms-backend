export default class UsersManagerService {
  constructor({
    userModel,
    roleModel,
  }) {
    this.userModel = userModel;
    this.roleModel = roleModel;
  }

  createUser({
    email,
    phoneNumber,
    authId,
    firstName,
    middleName,
    lastName,
    secondLastName,
    idNumber,
    disabilites,
  }) {
    return this.userModel.create({
      email,
      phoneNumber,
      authId,
      firstName,
      middleName,
      lastName,
      secondLastName,
      idNumber,
      disabilites,
    });
  }

  getAllUsers() {
    return this.userModel.findAll({ limit: 50 });
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
