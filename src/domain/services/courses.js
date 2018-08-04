export default class CoursesManagerService {
  constructor({ courseModel, sectionModel }) {
    this.courseModel = courseModel;
    this.sectionModel = sectionModel;
  }

  getAllCourses() {
    return this.courseModel.findAll({ limit: 50 });
  }

  getCourseById(courseId) {
    return this.courseModel.findById(courseId);
  }

  createCourse(course) {
    return this.courseModel.create(course);
  }
}
