import r from "dw4";
import a from "gG";
export class C {
  get subjects() {
    return Array.from(this._subjectMap.values());
  }
  getSubject(e) {
    return this._subjectMap.get(e);
  }
  hasSubject(e) {
    return this._subjectMap.has(e);
  }
  setSubject(e) {
    this._subjectMap.set(a.K(e), e);
  }
  setSubjects(e) {
    for (const t of e) {
      this._subjectMap.set(a.K(t), t);
    }
  }
  removeSubject(e) {
    this._subjectMap.delete(e);
  }
  clear() {
    this._subjectMap.clear();
    this.listError = undefined;
  }
  setListLoading(e) {
    this.isLoadingList = e;
  }
  setListError(e) {
    this.listError = e;
  }
  constructor() {
    this._subjectMap = new Map();
    this.isLoadingList = false;
    this.listError = undefined;
    r.l_(this);
  }
}
