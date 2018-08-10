export default class CoursesRequestHandler {
  constructor({ coursesManagerService }) {
    this.coursesManagerService = coursesManagerService;
  }

  getAllCourses() {
    return this.coursesManagerService.getAllCourses();
  }

  createCourse(request, h) {
    const payload = request.payload;
    return this.coursesManagerService.createCourse({
      courseId: payload.courseId,
      courseName: payload.courseName,
    }).catch((error) => {
      console.error(error);
      return h.response(error.message).code(500);
    });
  }

  getCourseById(courseId) {
    return this.coursesManagerService.getCourseById(courseId);
  }

  deleteCourseById(courseId) {
    return this.coursesManagerService.deleteById(courseId);
  }

  getCourseSections(request, h) {
    const courseId = request.params.id;
    return this.coursesManagerService.getCourseSections(courseId)
      .catch((error) => h.response(error.message).code(500));
  }
}
