import r from "QWK";
import a from "Bt1";
import o from "o7";
import s from "A7";
import n from "Kt";
import { u } from "./module-JH0.js";
import { B } from "./module-dXX.js";
import { I } from "./module-kt6.js";
import l from "gG";
import { N } from "./module-WO_2.js";
export class k extends o.jG {
  get subjectRepositoryManager() {
    return this._subjectRepositoryManager;
  }
  get subjectSearchManager() {
    return this._subjectSearchManager;
  }
  validateSubjectCreateAudioDuration(e) {
    return this.subjectOperationManager.validateAudioDuration(e);
  }
  validateSubjectCreateVideoDuration(e) {
    return this.subjectOperationManager.validateVideoDuration(e);
  }
  constructor(e) {
    super();
    this.containerService = e;
    this._subjectRepositoryManager = this.containerService.createInstance(u);
    this._subjectSearchManager = this.containerService.createInstance(
      I,
      this._subjectRepositoryManager,
    );
    this._onSubjectDeleted = this._register(new s.v());
    this.onSubjectDeleted = this._onSubjectDeleted.event;
    this._onSubjectCreated = this._register(new s.v());
    this.onSubjectCreated = this._onSubjectCreated.event;
    this._onSubjectUpdated = this._register(new s.v());
    this.onSubjectUpdated = this._onSubjectUpdated.event;
    this.showSubjectCreateModal = a.A;
    this.subjectOperationManager = this.containerService.createInstance(
      B,
      this._subjectRepositoryManager,
      undefined,
    );
    this._register(
      this.subjectOperationManager.onSubjectCreated((e) => {
        this._onSubjectCreated.fire(e);
      }),
    );
    this._register(
      this.subjectOperationManager.onSubjectDeleted((e) => {
        var t = l.K(e);
        this._subjectRepositoryManager.removeByKey(t);
        this._subjectSearchManager.removeByKey(t);
        this._onSubjectDeleted.fire(e);
      }),
    );
    this._register(
      this.subjectOperationManager.onSubjectUpdated((e) => {
        var t = l.K(e.oldSubject);
        var newSubject = N(e);
        this._subjectRepositoryManager.removeSubject(t);
        this._subjectRepositoryManager.setSubject(newSubject);
        this._subjectSearchManager.upsertSubject(newSubject, t);
        this._onSubjectUpdated.fire({
          oldSubject: e.oldSubject,
          newSubject,
        });
      }),
    );
  }
}
k = r.Cg(
  [
    r.Qj(0, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  k,
);
