import r from "NY";
import a from "QWK";
import o from "Kt";
import { L } from "./module-uMO.js";
export class M {
  createSubject(e) {
    return r
      ._(function* () {
        return yield this._subjectRepo.createSubject({
          content: e.content,
          workspaceId: e.workspaceId,
          agentContext: e.agentContext,
        });
      })
      .call(this);
  }
  updateSubject(e) {
    return r
      ._(function* () {
        return yield this._subjectRepo.updateSubject({
          subjectId: e.subjectId,
          content: e.content,
        });
      })
      .call(this);
  }
  deleteSubject(e) {
    return r
      ._(function* () {
        return yield this._subjectRepo.deleteSubject({
          subjectId: e.subjectId,
        });
      })
      .call(this);
  }
  deleteSubjects(e) {
    return r
      ._(function* () {
        return yield this._subjectRepo.deleteSubjects({
          subjectIdList: e.subjects.map((e) => e.subjectId),
        });
      })
      .call(this);
  }
  getSubjectList(e) {
    return r
      ._(function* () {
        return yield this._subjectRepo.getSubjectList({
          cursor: e.cursor,
          limit: e.limit,
          keyword: e.keyword,
          subjectIdList: e.subjectIdList,
          onlyFavorite: e.onlyFavorite,
          workspaceId: e.workspaceId,
          subjectSource: e.subjectSource,
          beginTimeStamp: e.beginTimeStamp,
          endTimeStamp: e.endTimeStamp,
          sortField: e.sortField,
          sortOrder: e.sortOrder,
        });
      })
      .call(this);
  }
  generateSubjectVoice(e) {
    return r
      ._(function* () {
        return this._subjectRepo.generateSubjectVoice({
          imageUri: e.imageUri,
        });
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._subjectRepo = this._containerService.createInstance(L);
  }
}
M = a.Cg(
  [
    a.Qj(0, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  M,
);
