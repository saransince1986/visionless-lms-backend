export default class SectionsRequestHandler {
  constructor({ sectionsManagerService }) {
    this.sectionsManagerService = sectionsManagerService;
  }

  getAllSections() {
    return this.sectionsManagerService.getAllSections();
  }

  getSectionById(sectionId) {
    return this.sectionsManagerService.getSectionById(sectionId);
  }

  deleteSectionById(courseId) {
    return this.sectionsManagerService.deleteById(courseId);
  }
}
