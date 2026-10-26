import r from "QWK";
import a from "Kt";
import { c } from "./module-P0.js";
class s {
  uploadSkill(e) {
    return this._repository.uploadSkill(e);
  }
  createSkill(e) {
    return this._repository.createSkill(e);
  }
  fetchSkillLibrary(e) {
    return this._repository.fetchSkillLibrary(e);
  }
  fetchMarketSkillCategories() {
    return this._repository.fetchMarketSkillCategories();
  }
  fetchMarketSkills(e) {
    return this._repository.fetchMarketSkills(e);
  }
  searchMarketSkills(e) {
    return this._repository.searchMarketSkills(e);
  }
  likeMarketSkill(e) {
    return this._repository.likeMarketSkill(e);
  }
  fetchUserLikedSkills(e) {
    return this._repository.fetchUserLikedSkills(e);
  }
  fetchMarketSkillsByIds(e) {
    return this._repository.fetchMarketSkillsByIds(e);
  }
  fetchSkillsByIds(e) {
    return this._repository.fetchSkillsByIds(e);
  }
  publishSkill(e) {
    return this._repository.publishSkill(e);
  }
  updateSkill(e) {
    return this._repository.updateSkill(e);
  }
  deleteSkill(e) {
    return this._repository.deleteSkill(e);
  }
  deleteSkillPublication(e) {
    return this._repository.deleteSkillPublication(e);
  }
  fetchSkillPublications(e) {
    return this._repository.fetchSkillPublications(e);
  }
  constructor(e) {
    this._containerService = e;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(c);
  }
}
export { s as r };
s = r.Cg(
  [
    r.Qj(0, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  s,
);
