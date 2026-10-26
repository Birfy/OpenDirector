import a from "NY";
import r from "oa";
import s from "bk";
import l from "QWK";
import n from "Qey";
import o from "bE";
import d from "o7";
import c from "K8";
import u from "A7";
import _ from "aEB";
import h from "Kt";
import p from "iOe";
import k from "ai0";
import { j } from "./module-dRO_2.js";
import v from "Si";
import f from "xLi";
import m from "f3";
import { M } from "./module-zOR.js";
import { F as F_1 } from "./module-Rrw.js";
import { S } from "./module-cou.js";
import { s as s_1 } from "./module-elG.js";
import { N } from "./module-pc7.js";
import { o as o_1 } from "./module-i9P.js";
class C {
  loadSkills() {
    if (this._refreshTask) {
      return this._refreshTask;
    }
    const t = this._getAccountVersion();
    const e = this._fetchAndApplySkills(t);
    this._refreshTask = e;
    return e.finally(() => {
      if (this._refreshTask === e) {
        this._refreshTask = undefined;
      }
    });
  }
  reset() {
    this._refreshTask = undefined;
  }
  _fetchAndApplySkills(t) {
    return a
      ._(function* () {
        this._dataStore.startLoading();
        try {
          const e = yield this._skillDataService.fetchSkillLibrary({
            offset: 0,
            limit: 300,
            source: m.fc.User,
          });
          if (t !== this._getAccountVersion()) {
            return;
          }
          if (!e.ok) {
            return void this._dataStore.failLoading();
          }
          const { skills, officialSkills } = e.value;
          this._dataStore.finishLoading([
            ...skills,
            ...(officialSkills != null ? officialSkills : []),
          ]);
          this._onDidRefresh(this._dataStore.skills);
        } catch (e) {
          if (t === this._getAccountVersion()) {
            this._dataStore.failLoading();
          }
        }
      })
      .call(this);
  }
  constructor(t, e, i, a) {
    this._skillDataService = t;
    this._dataStore = e;
    this._getAccountVersion = i;
    this._onDidRefresh = a;
  }
}
class F {
  run(t, e) {
    let i;
    const a = ((i = this._tails.get(t)) != null ? i : Promise.resolve()).then(
      e,
    );
    const r = a.then(
      () => undefined,
      () => undefined,
    );
    this._tails.set(t, r);
    r.then(() => {
      if (this._tails.get(t) === r) {
        this._tails.delete(t);
      }
    });
    return a;
  }
  constructor() {
    this._tails = new Map();
  }
}
const R = "skill request ignored after account change";
const U = "skill replacement upload is in progress";
const x = [
  {
    match: (t) => {
      var { extension } = t;
      return !v.ds.includes(extension);
    },
    code: f.$.UploadUnsupportedFormat,
  },
  {
    match: function (t) {
      const { extension, target } = t;
      return (
        !!target && (extension === v.Uf) == (target.isSkillPackage === true)
      );
    },
    code: f.$.UploadUnsupportedFormat,
  },
  {
    match: (t) => {
      var { size } = t;
      return size === 0;
    },
    code: f.$.UploadEmptyFile,
  },
  {
    match: function (t) {
      const e = t.extension !== v.Uf;
      const i = t.size > v.wG;
      return e && i;
    },
    code: f.$.UploadFileTooLarge,
  },
];
class D extends d.jG {
  get _occupiedActiveSkillSlots() {
    const updatingSkillStatusIdSet = this._dataStore.updatingSkillStatusIdSet;
    return (
      this._dataStore.skills.filter(
        (e) => e.status === m.Ir.Active || updatingSkillStatusIdSet.has(e.id),
      ).length + this._activeCreationReservations.size
    );
  }
  get data() {
    return this._dataStore;
  }
  _activateUploadedSkill(t) {
    return a
      ._(function* () {
        if (t.status !== m.Ir.Active && this._occupiedActiveSkillSlots < 50) {
          const e = yield this.setSkillActive(t.id, true);
          if (e && !e.ok) {
            let i;
            const a =
              (i = S(e.code)) != null
                ? i
                : n.Ay.t("skill_dialog_manage_button_activate_failed");
            this._notificationService.warning(a);
          }
        }
      })
      .call(this);
  }
  _reportUploadOutcome(t, e, i) {
    let materialType;
    switch (t) {
      case "md":
        materialType = "markdown";
        break;
      case "skill":
        materialType = "zip";
        break;
      case "zip":
      case "rar":
      case "7z":
        materialType = t;
    }
    if (materialType) {
      const r = this._containerService.createInstance(k.k);
      r.setParams({
        actionType: "click",
        materialSource: "local",
        materialType,
        position: "skill_upload",
        status: i === undefined ? "success" : "fail",
        failReason: i === undefined ? undefined : String(i),
      });
      r.report();
    }
    if (!e) {
      this._reportCreateOutcome("skill_upload", i);
    }
  }
  _reportCreateOutcome(enterFrom, e) {
    if (enterFrom) {
      this._containerService
        .createInstance(j, {
          enterFrom,
          status: e === undefined ? "success" : "fail",
          failReason: e === undefined ? undefined : String(e),
        })
        .report();
    }
  }
  dispose() {
    this._resetForAccountChange();
    super.dispose();
  }
  _addSkill(t, e) {
    let i;
    const a = this._dataStore.addSkill(t);
    const r = (i = this._dataStore.getSkillById(t.id)) != null ? i : t;
    if (a) {
      this._onDidUpsertSkill.fire({
        skill: r,
        reason: e,
      });
    }
    return r;
  }
  _updateSkill(t, e, i) {
    let a;
    const r = i != null ? i : this._dataStore.getSkillById(t.id);
    this._dataStore.updateSkill(t);
    const s = (a = this._dataStore.getSkillById(t.id)) != null ? a : t;
    this._onDidUpsertSkill.fire({
      skill: s,
      previousSkill: r,
      reason: e,
    });
    return s;
  }
  _upsertSkill(t, e, i) {
    let a;
    const r = i != null ? i : this._dataStore.getSkillById(t.id);
    this._dataStore.upsertSkill(t);
    const s = (a = this._dataStore.getSkillById(t.id)) != null ? a : t;
    this._onDidUpsertSkill.fire({
      skill: s,
      previousSkill: r,
      reason: e,
    });
    return s;
  }
  _resetForAccountChange() {
    this._accountVersion += 1;
    this._activeCreationReservations.clear();
    this._uploadControllers.forEach((t) => t.abort());
    this._uploadControllers.clear();
    this._loader.reset();
    this._dataStore.reset();
    this._onDidResetSkills.fire();
  }
  constructor(t, e, i, l) {
    var o;
    super();
    o = this;
    this._skillDataService = t;
    this._accountService = e;
    this._notificationService = i;
    this._containerService = l;
    this._dataStore = new s_1();
    this._onDidRefreshSkills = this._register(new u.v());
    this._onDidResetSkills = this._register(new u.v());
    this._onDidUpsertSkill = this._register(new u.v());
    this._onDidRemoveSkill = this._register(new u.v());
    this._mutationQueue = new F();
    this.onDidRefreshSkills = this._onDidRefreshSkills.event;
    this.onDidResetSkills = this._onDidResetSkills.event;
    this.onDidUpsertSkill = this._onDidUpsertSkill.event;
    this.onDidRemoveSkill = this._onDidRemoveSkill.event;
    this._accountVersion = 0;
    this._uploadControllers = new Map();
    this._activeCreationReservations = new Set();
    this.canStartUpload = () => {
      if (this._dataStore.uploadingTaskIds.length < 3) {
        return true;
      }
      var t = n.Ay.t(
        "skill_package_toast_concurrent_upload_limit",
        {},
        "You can upload up to 3 skills at a time. Try again later.",
      );
      this._notificationService.warning(t);
      return false;
    };
    this.uploadSkill = (file, target) =>
      a._(function* () {
        if (
          F_1() &&
          !(target && o._dataStore.reuploadingSkillIds.includes(target.id))
        ) {
          if (!o.canStartUpload()) {
            if (!target) {
              o._reportCreateOutcome("skill_upload", "concurrent_upload_limit");
            }
            return;
          }
          let i;
          let r;
          const s = p.Q(file.name);
          i = {
            extension: s ? ".".concat(s) : "",
            size: file.size,
            target,
          };
          const l =
            (r = x.find((t) => t.match(i))) == null ? undefined : r.code;
          if (l !== undefined) {
            o._reportUploadOutcome(s, target, l);
            o._notificationService.warning(o_1(l));
            return;
          }
          const d = crypto.randomUUID();
          const c = new AbortController();
          const u = o._accountVersion;
          o._uploadControllers.set(d, c);
          o._dataStore.addUploadTask(d, target == null ? undefined : target.id);
          const _ = n.Ay.t(
            "skill_package_toast_uploading",
            {},
            "Uploading skill...",
          );
          o._notificationService.normal(
            _ && _ !== "skill_package_toast_uploading" && _ !== "[none]"
              ? _
              : "Uploading skill...",
            undefined,
            {
              id: d,
            },
          );
          try {
            const h = () =>
              a._(function* () {
                let i;
                const a = yield o._skillDataService.uploadSkill({
                  file,
                  requestId: d,
                  signal: c.signal,
                  replacement: target
                    ? {
                        skillId: target.id,
                        expectedContentId:
                          (i = target.contentId) != null ? i : v.q7,
                      }
                    : undefined,
                });
                if (u === o._accountVersion) {
                  if (!a.ok) {
                    o._reportUploadOutcome(s, target, a.code);
                    o._notificationService.warning(
                      o_1(Number(a.code)),
                      undefined,
                      {
                        id: d,
                      },
                    );
                    return;
                  }
                  o._upsertSkill(a.value.skill, target ? "update" : "create");
                  if (
                    !target &&
                    (yield o._activateUploadedSkill(a.value.skill),
                    u !== o._accountVersion)
                  ) {
                    return;
                  }
                  o._reportUploadOutcome(s, target);
                  const r = n.Ay.t(
                    "skill_package_toast_upload_success",
                    {
                      skillname: a.value.skill.name,
                    },
                    '"{skillname}" uploaded',
                  );
                  o._notificationService.success(r, undefined, {
                    id: d,
                  });
                }
              })();
            if (target) {
              yield o._mutationQueue.run(target.id, () =>
                a._(function* () {
                  if (u === o._accountVersion) {
                    const t = o._dataStore.beginSkillMutation(target.id);
                    try {
                      yield h();
                    } finally {
                      o._dataStore.finishSkillMutation(target.id, t);
                    }
                  }
                })(),
              );
            } else {
              yield h();
            }
          } finally {
            o._uploadControllers.delete(d);
            o._dataStore.removeUploadTask(d);
          }
        }
      })();
    this.initializeSkills = () =>
      a._(function* () {
        if (!o._dataStore.hasLoaded) {
          yield o._loader.loadSkills();
        }
      })();
    this.refreshSkills = () => this._loader.loadSkills();
    this.searchSkills = (t) => N(this._dataStore.skills, t);
    this.createSkill = (t, e) =>
      a._(function* () {
        const o__accountVersion = o._accountVersion;
        const a =
          t.status === m.Ir.Active && o._occupiedActiveSkillSlots >= 50
            ? s._(r._({}, t), {
                status: m.Ir.Disabled,
              })
            : t;
        const l = Symbol("active-skill-creation");
        if (a.status === m.Ir.Active) {
          o._activeCreationReservations.add(l);
        }
        try {
          let n;
          let d;
          let u;
          const _ = yield o._skillDataService.createSkill(a);
          if (o__accountVersion !== o._accountVersion) {
            return c.xz(-1, R);
          }
          if (!_.ok) {
            o._reportCreateOutcome(
              e == null ? undefined : e.reportEnterFrom,
              _.code,
            );
            return _;
          }
          n = _.value.skill;
          const h =
            n.source !== m.fc.User
              ? n
              : s._(r._({}, n), {
                  originalSkillId:
                    (d = n.originalSkillId) != null ? d : a.originalSkillId,
                  author:
                    (u = n.author) != null
                      ? u
                      : e == null
                        ? undefined
                        : e.fallbackAuthor,
                });
          if (
            (e == null ? undefined : e.validateSource) !== false &&
            h.source !== t.source
          ) {
            o._reportCreateOutcome(
              e == null ? undefined : e.reportEnterFrom,
              -1,
            );
            return c.xz(-1, "invalid created skill source");
          }
          o._addSkill(h, "create");
          o._reportCreateOutcome(e == null ? undefined : e.reportEnterFrom);
          return c.TZ({
            skill: h,
          });
        } finally {
          o._activeCreationReservations.delete(l);
        }
      })();
    this.updateSkill = (t, e) => {
      if (this._dataStore.reuploadingSkillIds.includes(t.id)) {
        return Promise.resolve(c.xz(-1, U));
      }
      var _accountVersion = this._accountVersion;
      var l = (e == null ? undefined : e.preserveCachedStatus)
        ? this._dataStore.getSkillById(t.id)
        : undefined;
      var n =
        (l == null ? undefined : l.source) === m.fc.User ? l.status : undefined;
      var d =
        n !== undefined && this._dataStore.updatingSkillStatusIdSet.has(t.id);
      return this._mutationQueue.run(t.id, () =>
        a._(function* () {
          if (_accountVersion !== o._accountVersion) {
            return c.xz(-1, R);
          }
          const e = o._dataStore.beginSkillMutation(t.id);
          try {
            let a;
            let l;
            const u = d ? o._dataStore.getSkillById(t.id) : undefined;
            const _ =
              (u == null ? undefined : u.source) === m.fc.User ? u.status : n;
            const h =
              _ === undefined
                ? t
                : s._(r._({}, t), {
                    status: _,
                  });
            const p = yield o._skillDataService.updateSkill(h);
            if (_accountVersion !== o._accountVersion) {
              return c.xz(-1, R);
            }
            if (!p.ok) {
              return p;
            }
            a = p.value.skill;
            const k =
              a.source !== m.fc.User
                ? a
                : s._(r._({}, a), {
                    originalSkillId:
                      (l = a.originalSkillId) != null
                        ? l
                        : "originalSkillId" in h
                          ? h.originalSkillId
                          : undefined,
                  });
            o._updateSkill(k, "update");
            return c.TZ({
              skill: k,
            });
          } finally {
            o._dataStore.finishSkillMutation(t.id, e);
          }
        })(),
      );
    };
    this.deleteSkill = (t) => {
      if (this._dataStore.reuploadingSkillIds.includes(t)) {
        return Promise.resolve(c.xz(-1, U));
      }
      var _accountVersion = this._accountVersion;
      return this._mutationQueue.run(t, () =>
        a._(function* () {
          if (_accountVersion !== o._accountVersion) {
            return c.xz(-1, R);
          }
          const i = o._dataStore.beginSkillMutation(t);
          try {
            const a = yield o._skillDataService.deleteSkill({
              id: t,
            });
            if (_accountVersion !== o._accountVersion) {
              return c.xz(-1, R);
            }
            if (!a.ok) {
              return a;
            }
            const skill = o._dataStore.removeSkill(t);
            o._onDidRemoveSkill.fire({
              skillId: t,
              skill,
            });
            return a;
          } finally {
            o._dataStore.finishSkillMutation(t, i);
          }
        })(),
      );
    };
    this.setSkillActive = (id, e) => {
      if (
        this._dataStore.updatingSkillStatusIdSet.has(id) ||
        this._dataStore.reuploadingSkillIds.includes(id)
      ) {
        return Promise.resolve(undefined);
      }
      var i = this._dataStore.getSkillById(id);
      if (!i || i.source !== m.fc.User) {
        return Promise.resolve(undefined);
      }
      var l = e ? m.Ir.Active : m.Ir.Disabled;
      if (i.status === l) {
        return Promise.resolve(undefined);
      }
      if (e && this._occupiedActiveSkillSlots >= 50) {
        var d = n.Ay.t(
          "skill_package_toast_activation_limit",
          {},
          "You've reached the active skill limit. Turn some skills off and try again.",
        );
        this._notificationService.warning(d);
        return Promise.resolve(undefined);
      }
      var _accountVersion = this._accountVersion;
      var _ = s._(r._({}, i), {
        status: l,
      });
      this._dataStore.upsertSkill(_);
      this._dataStore.lockSkillStatusUpdate(id);
      return this._mutationQueue.run(id, () =>
        a._(function* () {
          if (_accountVersion !== o._accountVersion) {
            return c.xz(-1, R);
          }
          const e = o._dataStore.getSkillById(id);
          if (!e || e.source !== m.fc.User) {
            o._dataStore.unlockSkillStatusUpdate(id);
            return c.xz(-1, "skill unavailable before mutation");
          }
          const a = s._(r._({}, e), {
            status: l,
          });
          const n = o._dataStore.beginSkillMutation(id);
          o._dataStore.upsertSkill(a, false);
          try {
            const d = yield o._skillDataService.updateSkill({
              id,
              name: e.name,
              description: e.description,
              instruction: e.instruction,
              status: l,
            });
            if (_accountVersion !== o._accountVersion) {
              return c.xz(-1, R);
            }
            if (!d.ok) {
              const _ = o._dataStore.getSkillById(id);
              if ((_ == null ? undefined : _.source) === m.fc.User) {
                o._dataStore.upsertSkill(
                  s._(r._({}, _), {
                    status: i.status,
                  }),
                );
              }
              return d;
            }
            o._updateSkill(a, "status", i);
            return c.TZ({
              skill: a,
            });
          } finally {
            o._dataStore.finishSkillMutation(id, n);
            if (_accountVersion === o._accountVersion) {
              o._dataStore.unlockSkillStatusUpdate(id);
            }
          }
        })(),
      );
    };
    this.fetchSkillsByIds = (t) =>
      a._(function* () {
        const o__accountVersion = o._accountVersion;
        const i = yield o._skillDataService.fetchSkillsByIds(t);
        if (o__accountVersion !== o._accountVersion) {
          return c.xz(-1, R);
        }
        return i;
      })();
    this.addSkill = (t) => {
      this._addSkill(t, "external");
    };
    this.upsertSkill = (t) => {
      this._upsertSkill(t, "external");
    };
    this._loader = new C(
      this._skillDataService,
      this._dataStore,
      () => this._accountVersion,
      (skills) =>
        this._onDidRefreshSkills.fire({
          skills,
        }),
    );
    this._register(
      this._accountService.onDidLogout(() => {
        this._resetForAccountChange();
      }),
    );
    this._register(
      this._accountService.onDidLogin(() => {
        this._resetForAccountChange();
        this.initializeSkills();
      }),
    );
  }
}
export { D as _ };
D = l.Cg(
  [
    l.Qj(0, M),
    l.Qj(1, o.c),
    l.Qj(2, _.Ot),
    l.Qj(3, h._),
    l.Sn("design:type", Function),
    l.Sn("design:paramtypes", [
      M === undefined ? Object : M,
      o.c === undefined ? Object : o.c,
      _.Ot === undefined ? Object : _.Ot,
      h._ === undefined ? Object : h._,
    ]),
  ],
  D,
);
