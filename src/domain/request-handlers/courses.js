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

  getCourseById(courseId) {
    return this.coursesManagerService.getCourseById(courseId);
  }

  deleteCourseById(courseId) {
    return this.coursesManagerService.deleteById(courseId);
  }
}
