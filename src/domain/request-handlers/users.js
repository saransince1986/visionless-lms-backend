export default class UsersRequestHandler {
  constructor({
    usersManagerService,
    rolesManagerService,
  }) {
    this.usersManagerService = usersManagerService;
    this.rolesManagerService = rolesManagerService;
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
