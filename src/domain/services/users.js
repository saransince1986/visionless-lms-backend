export default class UsersManagerService {
  constructor({
    userModel,
  }) {
    this.userModel = userModel;
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
    return this.userModel.findById(id);
  }

  deleteUserById(id) {
    return this.userModel.destroy({
      where: {
        id,
      },
    });
  }

  getUserEnrollmentsByUserId(userId) {
    return this.getUserById(userId).then((user) => user.getCourses());
  }
}
