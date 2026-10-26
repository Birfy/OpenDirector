import r from "oa";
import a from "bk";
import o from "o7";
import { C } from "./module-WAd.js";
import n from "gG";
class u extends o.jG {
  get data() {
    return this._subjectRepositoryStore;
  }
  get subjects() {
    return this._subjectRepositoryStore.subjects;
  }
  getSubject(e) {
    return this._subjectRepositoryStore.getSubject(e);
  }
  addSubjects(e) {
    if (e.length) {
      this._subjectRepositoryStore.setSubjects(e);
    }
  }
  setSubject(e) {
    this._subjectRepositoryStore.setSubject(e);
  }
  removeSubject(e) {
    this._subjectRepositoryStore.removeSubject(e);
  }
  removeByKey(e) {
    this._subjectRepositoryStore.removeSubject(e);
  }
  upsertSubject(e, t) {
    if (t) {
      this._subjectRepositoryStore.removeSubject(t);
    }
    this._subjectRepositoryStore.setSubject(e);
  }
  applyFavorite(e, isFavorite) {
    const i = new Map(
      e.map((e) => [
        n.K(e),
        a._(r._({}, e), {
          subjectControl: a._(r._({}, e.subjectControl), {
            isFavorite,
          }),
        }),
      ]),
    );
    this._subjectRepositoryStore.subjects.forEach((e) => {
      var t = i.get(n.K(e));
      if (t) {
        this._subjectRepositoryStore.setSubject(t);
      }
    });
  }
  clearCache() {
    this._subjectRepositoryStore.clear();
  }
  constructor(...e) {
    super(...e);
    this._subjectRepositoryStore = new C();
  }
}
export { u };
