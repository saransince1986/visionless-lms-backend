export default class UsersRequestHandler {
  constructor({
    usersManagerService,
  }) {
    this.usersManagerService = usersManagerService;
  }

  createUser(data) {
    return this.usersManagerService.createUser(data);
  }

  getUserById(userId) {
    return this.usersManagerService.getUserById(userId);
  }

  deleteUserById(userId) {
    return this.usersManagerService.deleteUserById(userId);
  }

  getAllUsers() {
    return this.usersManagerService.getAllUsers();
  }

  getUserEnrollmentsByUserId(request, h) { // eslint-disable-line
    const userId = request.params.userId;
    return this.usersManagerService.getUserEnrollmentsByUserId(userId)
      .catch((error) => h.response(error.message).code(500));
  }
}
