export default class CoursesRequestHandler {
  constructor({ coursesManagerService }) {
    this.coursesManagerService = coursesManagerService;
  }

  getAllCourses() {
    return this.coursesManagerService.getAllCourses();
  }

  createCourse({ courseId, courseName }) {
    return this.coursesManagerService.createCourse({ courseId, courseName });
  }
}
