export default class CoursesManagerService {
  constructor({ courseModel, sectionModel }) {
    this.courseModel = courseModel;
    this.sectionModel = sectionModel;
  }

  getAllCourses() {
    return this.courseModel.findAll();
  }

  getCourseById(courseId) {
    return this.courseModel.findById(courseId);
  }
}
