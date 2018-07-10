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
    try {
      return this.usersManagerService.getUserById(userId);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  deleteUserById(userId) {
    try {
      return this.usersManagerService.deleteUserById(userId);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  getAllUsers() {
    return this.usersManagerService.getAllUsers();
  }
}
