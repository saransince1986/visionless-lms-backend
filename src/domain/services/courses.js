export default class CoursesManagerService {
  constructor({ courseModel, sectionModel, courseSectionTypes }) {
    this.courseModel = courseModel;
    this.sectionModel = sectionModel;
    this.courseSectionTypes = courseSectionTypes;
  }

  getAllCourses() {
    return this.courseModel.findAll({ limit: 50 });
  }

  getCourseById(courseId) {
    return this.courseModel.findById(courseId);
  }

  createCourse(course) {
    return this.courseModel.create(course).then(async (createdCourse) => {
      createdCourse.addSection(await this.createRootSection());
      return createdCourse;
    });
  }

  async deleteById(courseId) {
    const course = await this.getCourseById(courseId);
    await course.setSections([]);
    return course.destroy();
  }

  getCourseSections(courseId) {
    return this.getCourseById(courseId).then((course) => course.getSections());
  }

  createRootSection() {
    return this.sectionModel.create({
      sectionIndex: 0,
      sectionTitle: 'root',
      parentSection: null,
      sectionType: this.courseSectionTypes.ROOT.code,
    });
  }
}
