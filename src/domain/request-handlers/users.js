import { isEmpty } from 'lodash';

export default class UsersRequestHandler {
  constructor({
    usersService,
    rolesService,
  }) {
    this.usersService = usersService;
    this.rolesService = rolesService;
  }

  async createUser(data) {
    const roleName = data.role;
    const userData = Object.assign({}, data);
    const role = await this.rolesService.getRoleByName(roleName);
    if (isEmpty(role)) {
      throw new Error(`Role "${roleName}" does not exists`);
    }
    userData.roleId = role.id;
    return this.usersService.createUser(userData);
  }

  getUserById(userId) {
    try {
      return this.usersService.getUserById(userId);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  deleteUserById(userId) {
    try {
      return this.usersService.deleteUserById(userId);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
