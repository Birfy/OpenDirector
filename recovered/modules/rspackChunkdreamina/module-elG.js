import a from "oa";
import r from "bk";
import s from "dw4";
import l from "f3";
class n {
  get uploadingTaskIds() {
    return [...this._uploadingTasks.keys()];
  }
  get newUploadTaskIds() {
    return [...this._uploadingTasks]
      .filter((t) => {
        var [, e] = t;
        return e === undefined;
      })
      .map((t) => {
        var [e] = t;
        return e;
      });
  }
  get reuploadingSkillIds() {
    return [...this._uploadingTasks.values()].filter((t) => t !== undefined);
  }
  addUploadTask(t, e) {
    this._uploadingTasks.set(t, e);
  }
  removeUploadTask(t) {
    this._uploadingTasks.delete(t);
  }
  get skills() {
    return this._skills;
  }
  get skillIdSet() {
    return new Set(this._skills.map((t) => t.id));
  }
  get activeSkills() {
    return this._skills.filter((t) => t.status === l.Ir.Active);
  }
  get userSkills() {
    return this._skills.filter((t) => t.source === l.fc.User);
  }
  get platformSkills() {
    return this._skills.filter((t) => t.source === l.fc.Platform);
  }
  get isLoading() {
    return this._isLoading;
  }
  get hasLoaded() {
    return this._hasLoaded;
  }
  get updatingSkillStatusIdSet() {
    return new Set(this._updatingSkillStatusIds);
  }
  get revision() {
    return this._revision;
  }
  getSkillById(t) {
    return this._skills.find((e) => e.id === t);
  }
  startLoading() {
    this._isLoading = true;
  }
  finishLoading(t) {
    this._skills = this._mergeServerSkillsWithLocalCache(t);
    this._isLoading = false;
    this._hasLoaded = true;
  }
  failLoading() {
    this._isLoading = false;
  }
  beginSkillMutation(t) {
    const e = this._recordSkillMutation(t);
    this._pendingSkillMutationRevisions.set(t, e);
    return e;
  }
  finishSkillMutation(t, e) {
    if (this._pendingSkillMutationRevisions.get(t) === e) {
      this._pendingSkillMutationRevisions.delete(t);
    }
  }
  hasSkillMutatedSince(t, e) {
    let i;
    return (
      this._pendingSkillMutationRevisions.has(t) ||
      ((i = this._skillMutationRevisions.get(t)) != null ? i : 0) > e
    );
  }
  addSkill(t) {
    const e =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    return (
      !this._skills.some((e) => e.id === t.id) &&
      (e && this._recordSkillMutation(t.id),
      (this._skills = [t, ...this._skills]),
      true)
    );
  }
  updateSkill(t) {
    const e =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    const i = this._skills.findIndex((e) => e.id === t.id);
    if (i !== -1) {
      if (e) {
        this._recordSkillMutation(t.id);
      }
      const a = this._skills[i];
      this._skills[i] = this._mergeSkillWithLocalCache(t, a);
      this._skills = [...this._skills];
      return a;
    }
  }
  upsertSkill(t) {
    const e =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    const i = this.getSkillById(t.id);
    if (i) {
      this.updateSkill(t, e);
      return i;
    }
    this.addSkill(t, e);
  }
  removeSkill(t) {
    this._recordSkillMutation(t);
    const e = this.getSkillById(t);
    this._skills = this._skills.filter((e) => e.id !== t);
    return e;
  }
  lockSkillStatusUpdate(t) {
    if (!this._updatingSkillStatusIds.includes(t)) {
      this._updatingSkillStatusIds = [...this._updatingSkillStatusIds, t];
    }
  }
  unlockSkillStatusUpdate(t) {
    this._updatingSkillStatusIds = this._updatingSkillStatusIds.filter(
      (e) => e !== t,
    );
  }
  reset() {
    this._uploadingTasks.clear();
    this._skills = [];
    this._isLoading = false;
    this._hasLoaded = false;
    this._updatingSkillStatusIds = [];
    this._skillMutationRevisions.clear();
    this._pendingSkillMutationRevisions.clear();
  }
  _mergeServerSkillsWithLocalCache(t) {
    if (this._skills.length === 0) {
      return t;
    }
    const e = new Map(this._skills.map((t) => [t.id, t]));
    const i = new Set(t.map((t) => t.id));
    return [
      ...this._skills.filter((t) => !i.has(t.id)),
      ...t.map((t) => {
        var i;
        if ((i = e.get(t.id)) != null) {
          return i;
        }
        return t;
      }),
    ];
  }
  _recordSkillMutation(t) {
    this._revision += 1;
    this._skillMutationRevisions.set(t, this._revision);
    return this._revision;
  }
  _mergeSkillWithLocalCache(t, e) {
    let i;
    let s;
    if (t.source !== l.fc.User || e.source !== l.fc.User) {
      return t;
    }
    return r._(a._({}, t), {
      originalSkillId: (i = t.originalSkillId) != null ? i : e.originalSkillId,
      author: (s = t.author) != null ? s : e.author,
    });
  }
  constructor() {
    this._uploadingTasks = new Map();
    this._skills = [];
    this._isLoading = false;
    this._hasLoaded = false;
    this._updatingSkillStatusIds = [];
    this._revision = 0;
    this._skillMutationRevisions = new Map();
    this._pendingSkillMutationRevisions = new Map();
    s.l_(this);
  }
}
export { n as s };
