export default class UsersRequestHandler {
  constructor({
    usersManagerService,
  }) {
    this.usersManagerService = usersManagerService;
  }

  async createUser(data) {
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
}
