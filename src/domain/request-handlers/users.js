import { isEmpty } from 'lodash';

export default class UsersRequestHandler {
  constructor({
    usersManagerService,
    rolesManagerService,
  }) {
    this.usersManagerService = usersManagerService;
    this.rolesManagerService = rolesManagerService;
  }

  async createUser(data) {
    const roleName = data.role;
    const userData = Object.assign({}, data);
    const role = await this.rolesManagerService.getRoleByName(roleName);
    if (isEmpty(role)) {
      throw new Error(`Role "${roleName}" does not exists`);
    }
    userData.roleId = role.id;
    return this.usersManagerService.createUser(userData);
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
