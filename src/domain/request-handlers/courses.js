export default class CoursesRequestHandler {
  constructor({ coursesManagerService }) {
    this.coursesManagerService = coursesManagerService;
  }

  getAllCourses() {
    return this.coursesManagerService.getAllCourses();
  }
}
