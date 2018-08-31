export default class SectionManagerService {
  constructor({
    sectionModel,
  }) {
    this.sectionModel = sectionModel;
  }

  getAllSections() {
    return this.sectionModel.findAll();
  }

  getSectionById(sectionId) {
    return this.sectionModel.findById(sectionId);
  }

  async deleteById(sectionId) {
    const section = await this.getSectionById(sectionId);
    return section.destroy();
  }
}
