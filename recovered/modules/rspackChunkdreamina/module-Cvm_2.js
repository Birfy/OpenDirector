import a from "NY";
import i from "oa";
import n from "bk";
import o from "QWK";
import s from "Zr";
import l from "Qey";
import c from "o7";
import d from "K8";
import u from "aEB";
import h from "Rrw";
import g from "f3";
import m from "xLi";
import p from "pfC";
import _ from "zOR";
import v from "aoz";
import f from "htj";
import S from "ltb";
import { XD, w2 } from "./module-ll.js";
import M from "cou";
import k from "dw4";
import R from "k4";
import I from "pc7";
const b = "skill_button_badge_dismissed";
class C {
  get librarySkills() {
    return this._skillLibraryStore.skills;
  }
  get librarySkillIdSet() {
    return this._skillLibraryStore.skillIdSet;
  }
  isMarketSkillAdded(e) {
    let t;
    const r = this._marketSkillAddedStateOverrides.get(e.id);
    if (r) {
      return r.isAdded;
    }
    if (this.hasLoadedOnce) {
      return this.getAddedUserSkill(e) !== undefined;
    }
    return (t = e.isAdded) != null && t;
  }
  getMarketSkillAddedSkillId(e) {
    let t;
    const r = this._marketSkillAddedStateOverrides.get(e.id);
    if (r) {
      if (r.isAdded) {
        return r.addedSkillId;
      }
      return undefined;
    }
    if (this.hasLoadedOnce) {
      if ((t = this.getAddedUserSkill(e)) == null) {
        return undefined;
      }
      return t.id;
    }
    if (e.isAdded) {
      return e.addedSkillId;
    }
  }
  setMarketSkillAddedState(e, isAdded, addedSkillId) {
    this._marketSkillAddedStateOverrides.set(e, {
      isAdded,
      addedSkillId,
    });
  }
  getAddedUserSkill(e) {
    return this.librarySkills.find(
      (t) =>
        t.source === g.fc.User &&
        !t.extraInfo.isEdited &&
        t.originalSkillId === e.id &&
        t.name === e.name,
    );
  }
  get copyingFromMarketSkillIdSet() {
    return new Set(this.copyingFromMarketSkillIds);
  }
  get updatingSkillStatusIds() {
    return [...this._skillLibraryStore.updatingSkillStatusIdSet];
  }
  get updatingSkillStatusIdSet() {
    return this._skillLibraryStore.updatingSkillStatusIdSet;
  }
  get activeSkills() {
    return this._skillLibraryStore.activeSkills;
  }
  get userSkills() {
    return I.N(this._skillLibraryStore.userSkills, this._searchKeyword);
  }
  get platformSkills() {
    return I.N(this._skillLibraryStore.platformSkills, this._searchKeyword);
  }
  get manageVisibleSkills() {
    return [...this.userSkills, ...this.platformSkills];
  }
  get activeSkillOptions() {
    return I.N(this.activeSkills, this._searchKeyword).map((e) =>
      this._toSkillSelectOption(e),
    );
  }
  get isEmptySearchResult() {
    return (
      !!this._searchKeyword.trim() &&
      this.userSkills.length === 0 &&
      this.platformSkills.length === 0
    );
  }
  get searchKeyword() {
    return this._searchKeyword;
  }
  get isSkillsLoading() {
    return this._skillLibraryStore.isLoading;
  }
  get hasLoadedOnce() {
    return this._skillLibraryStore.hasLoaded;
  }
  setSkillButtonBadgeDismissed(e) {
    this.isSkillButtonBadgeDismissed = e;
    R.b.setItem(b, JSON.stringify(e));
  }
  setSearchKeyword(e) {
    this._searchKeyword = e;
  }
  clearSearchKeyword() {
    this._searchKeyword = "";
  }
  lockCopyFromMarketSkill(e) {
    if (!this.copyingFromMarketSkillIds.includes(e)) {
      this.copyingFromMarketSkillIds = [...this.copyingFromMarketSkillIds, e];
    }
  }
  unlockCopyFromMarketSkill(e) {
    this.copyingFromMarketSkillIds = this.copyingFromMarketSkillIds.filter(
      (t) => t !== e,
    );
  }
  resetForAccountChange() {
    this._searchKeyword = "";
    this._marketSkillAddedStateOverrides.clear();
    this.copyingFromMarketSkillIds = [];
  }
  _toSkillSelectOption(e) {
    const { id: value, name, description, instruction, source } = e;
    return {
      label: name,
      value,
      extra: {
        description,
        guidingPrompt: source === g.fc.Platform ? instruction : "",
        source,
      },
    };
  }
  constructor(e) {
    this._skillLibraryStore = e;
    this.isSkillButtonBadgeDismissed = R.b.getItem(b) === "true";
    this._searchKeyword = "";
    this._marketSkillAddedStateOverrides = new Map();
    this.copyingFromMarketSkillIds = [];
    k.l_(this);
  }
}
class P extends c.jG {
  get selectionGeneration() {
    return this._selectionGeneration;
  }
  get metadata() {
    return this._metadataStore;
  }
  addSkill(e) {
    this._skillLibraryService.addSkill(e);
  }
  _replaceSkillInLibrary(e, t, r) {
    return a
      ._(function* () {
        const a = t.originalSkillId
          ? yield this.updateSkill({
              id: e.id,
              originalSkillId: t.originalSkillId,
              status: e.status,
            })
          : yield this.updateSkill({
              id: e.id,
              name: t.name,
              description: t.description,
              instruction: t.instruction,
              status: g.Ir.Active,
            });
        if (a.ok) {
          if ((r == null ? undefined : r.notify) !== false) {
            this._notificationService.success(
              l.Ay.t(
                "skillmarket_button_added_success",
                {},
                'Skill added. Type "/" to  use it.',
              ),
            );
          }
          return d.TZ(a.value.skill);
        }
        this._notificationService.warning(
          this._getSkillAddFailedToastMessage(a.code),
        );
        return d.xz(a.code, a.msg);
      })
      .call(this);
  }
  _resolveSkillById(e) {
    return a
      ._(function* () {
        yield this.initializeSkills();
        const t = this._metadataStore.activeSkills.find((t) => t.id === e);
        if (t) {
          return t;
        }
        const r = this._metadataStore.activeSkills.find(
          (t) =>
            t.source === g.fc.User &&
            !t.extraInfo.isEdited &&
            t.originalSkillId === e,
        );
        if (r) {
          return r;
        }
        const a = yield this._resolveDeferredMarketSkill(e);
        if (a && a.status === g.Ir.Active) {
          return a;
        }
      })
      .call(this);
  }
  _commitDeferredMarketSkill(e, t) {
    return a
      ._(function* () {
        const r = yield this._copyDeferredMarketSkillToLibrary(t);
        if (!r) {
          return d.xz(-1, "failed to commit prompt market skill");
        }
        const a = this._getPromptSkillContent();
        if (a && a.id === e.id && a.source === e.source) {
          this._replacePromptSkillContent(r);
          this._deferredLibraryMarketSkills.delete(e.id);
          return d.nj();
        }
        return d.xz(-1, "prompt skill changed while committing market skill");
      })
      .call(this);
  }
  _notifySkillActiveUpdateFailed(e, t) {
    const r = M.S(t);
    if (t === m.$.ActiveLimitExceeded && r) {
      this._notificationService.warning(r);
    } else {
      ({
        activate: () => {
          this._notificationService.warning(
            l.Ay.t(
              "skill_dialog_manage_button_activate_failed",
              {},
              "Couldn't activate skill",
            ),
          );
        },
        deactivate: () => {
          this._notificationService.warning(
            l.Ay.t(
              "skill_dialog_manage_button_disable_failed",
              {},
              "Couldn't deactivate skill",
            ),
          );
        },
      })[e ? "activate" : "deactivate"]();
    }
  }
  _getSkillAddFailedToastMessage(e) {
    let t;
    if (e === m.$.InvalidParam) {
      return l.Ay.t(
        "skill_card_button_add_name_invalid",
        {
          length: S.q,
        },
        'Skill name can\'t exceed {length} characters and only use "-" as a special character',
      );
    }
    if ((t = M.S(e)) != null) {
      return t;
    }
    return l.Ay.t(
      "skillmarket_button_added_failed",
      {},
      "Couldn't add skill. Please try again.",
    );
  }
  _handleSkillNameConflict(e, t, r) {
    return a
      ._(function* () {
        switch (yield this._confirmSkillOverwrite(e, t)) {
          case "overwrite":
            return this._replaceSkillInLibrary(e, t, r);
          case "manage":
            this._agenticGeneratorManager.skillEditorManager.openSkillEditor({
              initialSkillId: e.id,
              preferredViewMode: "detail",
            });
            return;
          case "dismiss":
            return;
        }
      })
      .call(this);
  }
  _confirmSkillOverwrite(existingSkill, pendingSkill) {
    if (this.requestSkillOverwriteConfirmation) {
      return this.requestSkillOverwriteConfirmation({
        existingSkill,
        pendingSkill,
      });
    }
    this._notificationService.warning(
      this._getSkillAddFailedToastMessage(m.$.DuplicateName),
    );
    return Promise.resolve("dismiss");
  }
  _createSkillInLibrary(e, t) {
    return a
      ._(function* () {
        const r = yield this._skillLibraryService.createSkill(
          {
            name: e.name,
            description: e.description,
            instruction: e.instruction,
            status: g.Ir.Active,
            source: g.fc.User,
            bizUniqId: e.bizUniqId,
            originalSkillId: e.originalSkillId,
          },
          {
            fallbackAuthor: e.author,
            reportEnterFrom: e.bizUniqId ? "agent_create" : undefined,
          },
        );
        if (!r.ok) {
          this._notificationService.warning(
            this._getSkillAddFailedToastMessage(r.code),
          );
          return d.xz(r.code, r.msg);
        }
        const { skill } = r.value;
        if (skill.source !== g.fc.User) {
          this._notificationService.warning(
            this._getSkillAddFailedToastMessage(-1),
          );
          return d.xz(-1, "invalid created skill source");
        }
        if (skill.originalSkillId) {
          this._metadataStore.setMarketSkillAddedState(
            skill.originalSkillId,
            true,
            skill.id,
          );
        }
        if ((t == null ? undefined : t.notify) !== false) {
          this._notificationService.success(
            l.Ay.t(
              "skillmarket_button_added_success",
              {},
              'Skill added. Type "/" to  use it.',
            ),
          );
        }
        return d.TZ(skill);
      })
      .call(this);
  }
  _getSameNameSkill(e) {
    return this._metadataStore.librarySkills.find((t) => t.name === e);
  }
  _handleLibrarySkillUpserted(e) {
    const { skill, reason } = e;
    if (reason === "update") {
      this.syncPromptSkillContent(skill);
    } else if (reason === "status" && skill.status === g.Ir.Disabled) {
      this._clearDisabledSkillFromPrompt(skill.id);
    }
  }
  _handleLibrarySkillRemoved(e) {
    const { skillId, skill } = e;
    if (
      (skill == null ? undefined : skill.source) === g.fc.User &&
      skill.originalSkillId &&
      !skill.extraInfo.isEdited
    ) {
      this._metadataStore.setMarketSkillAddedState(
        skill.originalSkillId,
        false,
      );
    }
    this._agenticGeneratorManager.skillEditorManager.syncAfterSkillRemoved(
      skillId,
    );
    const { data } = this._agenticGeneratorManager;
    const { currentSkillId, promptContents } = data;
    if (currentSkillId === skillId) {
      this._agenticGeneratorManager.changePromptContents(
        promptContents.filter((e) => e.type !== "skill" || e.id !== skillId),
      );
    }
  }
  _resolveLibraryPromptSkill(e, t) {
    return a
      ._(function* () {
        if (
          e.source === g.fc.User ||
          e.source === g.fc.Platform ||
          (t == null ? undefined : t.commitToLibrary) === false
        ) {
          return e;
        }
        const r = this._metadataStore.getAddedUserSkill(e);
        if (r) {
          return r;
        }
        const a = this._metadataStore.getMarketSkillAddedSkillId(e);
        if (a) {
          const i = yield this._skillLibraryService.fetchSkillsByIds({
            skillIds: [a],
          });
          if (i.ok) {
            const n = i.value.skills.find(
              (e) => e.source === g.fc.User && e.id === a,
            );
            if (n) {
              this._skillLibraryService.addSkill(n);
              return n;
            }
          }
        }
        if (this._metadataStore.isMarketSkillAdded(e)) {
          yield this.initializeSkills();
          return this._metadataStore.getAddedUserSkill(e);
        }
        const o = yield this.addMarketSkill(e, {
          notify: t == null ? undefined : t.notify,
        });
        if ((o == null ? undefined : o.ok) && o.value.source === g.fc.User) {
          return o.value;
        }
      })
      .call(this);
  }
  _getPromptSkillContent() {
    return this._agenticGeneratorManager.data.promptContents.find(
      (e) => e.type === "skill",
    );
  }
  _getDeferredMarketSkill(e) {
    const t = this._deferredLibraryMarketSkills.get(e.id);
    if (e.source === g.fc.Market && t) {
      return t;
    }
  }
  _resolveDeferredMarketSkill(e) {
    return a
      ._(function* () {
        const t = this._deferredLibraryMarketSkills.get(e);
        if (t) {
          return t;
        }
        const r = yield this._skillDataService.fetchMarketSkillCategories();
        if (r.ok) {
          for (const a of r.value.categories) {
            const i = yield this._findDeferredMarketSkillInCategory(e, a.id);
            if (i) {
              this._deferredLibraryMarketSkills.set(i.id, i);
              return i;
            }
          }
        }
        const n = yield this._skillDataService.fetchMarketSkillsByIds({
          skillIds: [e],
        });
        const o = n.ok ? n.value.skills.find((t) => t.id === e) : undefined;
        if (o) {
          this._deferredLibraryMarketSkills.set(o.id, o);
        }
        return o;
      })
      .call(this);
  }
  _findDeferredMarketSkillInCategory(e, categoryId) {
    return a
      ._(function* () {
        let offset = 0;
        for (let a = 0; a < 20; a += 1) {
          let i;
          const n = yield this._skillDataService.fetchMarketSkills({
            categoryId,
            isTest: false,
            offset,
            limit: 50,
          });
          if (!n.ok) {
            break;
          }
          const o =
            (i = n.value.skills.find((t) => {
              var { skill } = t;
              return skill.id === e;
            })) == null
              ? undefined
              : i.skill;
          if ((o == null ? undefined : o.source) === g.fc.Market) {
            return o;
          }
          const { hasMore, nextOffset } = n.value;
          if (!hasMore || nextOffset === undefined || nextOffset <= offset) {
            break;
          }
          offset = nextOffset;
        }
      })
      .call(this);
  }
  _copyDeferredMarketSkillToLibrary(e) {
    return a
      ._(function* () {
        const t = this._metadataStore.getAddedUserSkill(e);
        if (t) {
          return t;
        }
        const r = this._metadataStore.getMarketSkillAddedSkillId(e);
        if (r && r !== e.id) {
          const a = yield this._skillLibraryService.fetchSkillsByIds({
            skillIds: [r],
          });
          if (!a.ok) {
            return;
          }
          const i = a.value.skills.find(
            (e) => e.source === g.fc.User && e.id === r,
          );
          if (i) {
            this._skillLibraryService.addSkill(i);
            return i;
          }
        }
        const n = yield this.addMarketSkill(e, {
          notify: false,
        });
        if ((n == null ? undefined : n.ok) && n.value.source === g.fc.User) {
          return n.value;
        }
      })
      .call(this);
  }
  _replacePromptSkillContent(e) {
    const t = this._toSkillPromptContent(e);
    const { promptContents } = this._agenticGeneratorManager.data;
    const a = promptContents.findIndex((e) => e.type === "skill");
    const i = promptContents.filter((e) => e.type !== "skill");
    const n = a < 0 ? i.length : a;
    i.splice(n, 0, t);
    this._agenticGeneratorManager.changePromptContents(i);
  }
  _toSkillPromptContent(e) {
    const { id, name, source } = e;
    return {
      type: "skill",
      id,
      displayName: name,
      source,
    };
  }
  _clearDisabledSkillFromPrompt(e) {
    const { data } = this._agenticGeneratorManager;
    if (data.currentSkillId === e) {
      this._agenticGeneratorManager.changePromptContents(
        data.promptContents.filter((t) => t.type !== "skill" || t.id !== e),
      );
    }
  }
  constructor(e, t, r, o) {
    var c;
    super();
    c = this;
    this._agenticGeneratorManager = e;
    this._skillLibraryService = t;
    this._skillDataService = r;
    this._notificationService = o;
    this._deferredLibraryMarketSkills = new Map();
    this._committingMarketSkills = new Map();
    this._selectionGeneration = 0;
    this.initializeSkills = () => this._skillLibraryService.initializeSkills();
    this.initSkills = () => this.initializeSkills();
    this.dismissSkillButtonBadge = () => {
      this._metadataStore.setSkillButtonBadgeDismissed(true);
    };
    this.applyCreateSkillTemplateFromSelect = () => {
      this._agenticGeneratorManager.applyCreateSkillTemplate();
    };
    this.handleUploadClick = (e, t) =>
      !!h.F() &&
      (this._skillLibraryService.canStartUpload()
        ? (this._agenticGeneratorManager.reportManager.reportSkillManageUploadClick(
            e,
            t,
          ),
          true)
        : (e ||
            this._agenticGeneratorManager.reportManager.reportSkillUploadBlocked(),
          false));
    this.setSearchKeyword = (e) => {
      this._metadataStore.setSearchKeyword(e);
    };
    this.setManageSearchKeyword = (e) => {
      this._agenticGeneratorManager.reportManager.reportSkillManageSearch(e);
      this.setSearchKeyword(e);
    };
    this.clearSearchKeyword = () => {
      this._metadataStore.clearSearchKeyword();
    };
    this.updateSkill = (e, t) => this._skillLibraryService.updateSkill(e, t);
    this.syncPromptSkillContent = (e) => {
      var { data } = this._agenticGeneratorManager;
      if (
        data.hasSkill &&
        data.currentSkillId === e.id &&
        e.source !== g.fc.Market
      ) {
        var r = this._toSkillPromptContent(e);
        var a = data.promptContents.map((e) => {
          if (e.type === "skill") {
            return r;
          }
          return e;
        });
        this._agenticGeneratorManager.changePromptContents(a);
      }
    };
    this.addSkillToLibrary = (e, t) =>
      a._(function* () {
        yield c.initializeSkills();
        const r = c._getSameNameSkill(e.name);
        if (r) {
          if (r.source !== g.fc.User) {
            const a = c._getSkillAddFailedToastMessage(m.$.DuplicateName);
            c._notificationService.warning(a);
            return d.xz(m.$.DuplicateName, a);
          }
          return c._handleSkillNameConflict(r, e, t);
        }
        const i = yield c._createSkillInLibrary(e, t);
        if (!i.ok && i.code === m.$.DuplicateName) {
          yield c._skillLibraryService.refreshSkills();
          const n = c._getSameNameSkill(e.name);
          if ((n == null ? undefined : n.source) === g.fc.User) {
            return c._handleSkillNameConflict(n, e, t);
          }
        }
        return i;
      })();
    this.addMarketSkill = (e, t) =>
      a._(function* () {
        if (!c._metadataStore.copyingFromMarketSkillIdSet.has(e.id)) {
          c._metadataStore.lockCopyFromMarketSkill(e.id);
          try {
            yield c.initializeSkills();
            if (c._metadataStore.isMarketSkillAdded(e)) {
              const r = c._metadataStore.getAddedUserSkill(e);
              if (r) {
                return d.TZ(r);
              }
              c._notificationService.warning(
                c._getSkillAddFailedToastMessage(m.$.Duplicate),
              );
              return;
            }
            return yield c.addSkillToLibrary(
              {
                name: e.name,
                description: e.description,
                instruction: e.instruction,
                originalSkillId: e.id,
                author: e.author,
              },
              t,
            );
          } finally {
            c._metadataStore.unlockCopyFromMarketSkill(e.id);
          }
        }
      })();
    this.deleteSkill = (e) =>
      a._(function* () {
        const t = yield c._skillLibraryService.deleteSkill(e);
        if (t.ok) {
          c._notificationService.success(
            l.Ay.t("skill_delete_success", {}, "Deleted"),
          );
        } else {
          c._notificationService.warning(
            l.Ay.t("skill_delete_failed", {}, "Couldn't delete"),
          );
        }
        return t;
      })();
    this.deletePublishedMarketSkill = (id) =>
      a._(function* () {
        if (!id) {
          return void c._notificationService.warning(
            l.Ay.t("skill_publication_delete_failed", {}, "Couldn't delete"),
          );
        }
        const t = yield c._skillDataService.deleteSkill({
          id,
        });
        if (t.ok) {
          c._notificationService.success(
            l.Ay.t("skill_publication_delete_success", {}, "Deleted"),
          );
        } else {
          c._notificationService.warning(
            l.Ay.t("skill_publication_delete_failed", {}, "Couldn't delete"),
          );
        }
        return t;
      })();
    this.deleteSkillPublication = (e) =>
      a._(function* () {
        if (!e.auditRecordId) {
          return void c._notificationService.warning(
            l.Ay.t("skill_publication_delete_failed", {}, "Couldn't delete"),
          );
        }
        const t = yield c._skillDataService.deleteSkillPublication({
          auditRecordId: e.auditRecordId,
        });
        if (t.ok) {
          c._notificationService.success(
            l.Ay.t("skill_publication_delete_success", {}, "Deleted"),
          );
        } else {
          c._notificationService.warning(
            l.Ay.t("skill_publication_delete_failed", {}, "Couldn't delete"),
          );
        }
        return t;
      })();
    this.selectSkill = (e, t) => {
      var r = this._metadataStore.activeSkills.find((t) => t.id === e);
      if (r && r.source !== g.fc.Market) {
        this.applySkill(r, t);
      }
    };
    this.applyLibrarySkill = (e, t) =>
      a._(function* () {
        let r;
        let a;
        let o;
        const s = yield c._resolveLibraryPromptSkill(e, {
          commitToLibrary:
            (t == null ? undefined : t.libraryCommit) !== "onSubmit",
          notify: t == null ? undefined : t.notify,
        });
        if (s && (t == null || (a = t.signal) == null || !a.aborted)) {
          if ((t == null ? undefined : t.libraryCommit) === "onSubmit") {
            c._deferredLibraryMarketSkills.clear();
            if (e.source === g.fc.Market && s.source === g.fc.Market) {
              c._deferredLibraryMarketSkills.set(e.id, e);
            }
          }
          if ((t == null ? undefined : t.promptWriteStrategy) === "replace") {
            c._replacePromptSkillContent(s);
          }
          c.applySkill(s, {
            reportParams: n._(i._({}, t == null ? undefined : t.reportParams), {
              skillTags:
                (r =
                  t == null || (o = t.reportParams) == null
                    ? undefined
                    : o.skillTags) != null
                  ? r
                  : e.source === g.fc.Market
                    ? e.categoryIds
                    : undefined,
            }),
            libraryCommit: t == null ? undefined : t.libraryCommit,
            signal: t == null ? undefined : t.signal,
          });
          return s;
        }
      })();
    this.applyLibrarySkillById = (e, t) =>
      a._(function* () {
        const r = yield c._resolveSkillById(e);
        if (r) {
          return c.applyLibrarySkill(r, t);
        }
      })();
    this.applySkillToPrompt = (e, t) => {
      if (e.source !== g.fc.Market) {
        return this.applyLibrarySkill(e, t);
      }
      return this.applyLibrarySkill(
        e,
        n._(i._({}, t), {
          libraryCommit: "onSubmit",
        }),
      );
    };
    this.applySkillToPromptById = (e, t) =>
      a._(function* () {
        const r = yield c._resolveSkillById(e);
        if (r) {
          return c.applySkillToPrompt(r, t);
        }
      })();
    this.commitPromptSkillToLibrary = () => {
      var e = this._getPromptSkillContent();
      if (!e || e.source !== g.fc.Market) {
        return Promise.resolve(d.nj());
      }
      var t = this._getDeferredMarketSkill(e);
      if (!t) {
        this._notificationService.warning(
          l.Ay.t(
            "skillmarket_button_added_failed",
            {},
            "Couldn't add skill. Please try again.",
          ),
        );
        return Promise.resolve(d.xz(-1, "prompt market skill is missing"));
      }
      var r = this._committingMarketSkills.get(t.id);
      if (r) {
        return r;
      }
      var a = this._commitDeferredMarketSkill(e, t).finally(() => {
        if (this._committingMarketSkills.get(t.id) === a) {
          this._committingMarketSkills.delete(t.id);
        }
      });
      this._committingMarketSkills.set(t.id, a);
      return a;
    };
    this.applySkill = (e, t) => {
      if ((t == null ? undefined : t.libraryCommit) !== "onSubmit") {
        this._deferredLibraryMarketSkills.clear();
      }
      var { contentGeneratorManager } = this._agenticGeneratorManager;
      var { visibleContentGeneratorInstance } = contentGeneratorManager;
      var i =
        (v =
          visibleContentGeneratorInstance == null
            ? undefined
            : visibleContentGeneratorInstance.environment
                .contentGeneratorType) != null
          ? v
          : contentGeneratorManager.data.contentGeneratorType;
      var n =
        visibleContentGeneratorInstance == null ||
        (y = visibleContentGeneratorInstance.elements.promptEditorRef) == null
          ? undefined
          : y.current;
      contentGeneratorManager.setContentGeneratorType("agentic");
      var { id, name } = e;
      var c = this._toSkillPromptContent(e);
      var { data, reportManager } = this._agenticGeneratorManager;
      var enterFrom =
        (S =
          t == null || (M = t.reportParams) == null
            ? undefined
            : M.enterFrom) != null
          ? S
          : p.m(e).skillSource === g.fc.Market
            ? "market_skill_use"
            : undefined;
      if (enterFrom) {
        reportManager.updateResourceReportParams({
          enterFrom,
          showcaseId:
            t == null || (I = t.reportParams) == null
              ? undefined
              : I.showcaseId,
        });
        reportManager.setAiFeatureAttribution(
          t == null || (b = t.reportParams) == null
            ? undefined
            : b.aiFeatureName,
          enterFrom === "ai_function" ||
            enterFrom === "hover_function_click" ||
            enterFrom === "all_tools_click"
            ? enterFrom
            : undefined,
        );
      } else if (
        reportManager.resourceReportParams.enterFrom === "ai_feature" ||
        reportManager.resourceReportParams.enterFrom === "ai_function" ||
        reportManager.resourceReportParams.enterFrom ===
          "hover_function_click" ||
        reportManager.resourceReportParams.enterFrom === "all_tools_click" ||
        reportManager.resourceReportParams.enterFrom === "market_skill_use" ||
        reportManager.resourceReportParams.enterFrom === "create_click_more" ||
        reportManager.resourceReportParams.enterFrom === "skill_manage_edit"
      ) {
        reportManager.updateResourceReportParams({
          enterFrom: "click",
        });
        reportManager.setAiFeatureAttribution(undefined);
      }
      var m =
        t == null || (k = t.reportParams) == null ? undefined : k.skillTags;
      var _ =
        i === "agentic" &&
        !!(n == null
          ? undefined
          : n.schema.nodes[f.t.AgenticGeneratorSkillTag]);
      if (
        (t == null ? undefined : t.manualSelection) &&
        _ &&
        n &&
        !n.isDestroyed
      ) {
        var v;
        var S;
        var y;
        var M;
        var k;
        var R;
        var I;
        var b;
        var C;
        var P = n.state.tr;
        var A = n.schema.nodes[f.t.AgenticGeneratorSkillTag];
        var T = {
          id,
          displayName: name,
          source: e.source,
        };
        P.doc.descendants((e, t) => {
          if (e.type === A) {
            P.setNodeMarkup(t, undefined, T);
            C = t + e.nodeSize;
          }
        });
        if (C === undefined) {
          P.replaceSelectionWith(A.create(T));
          C = P.selection.to;
        }
        P.setSelection(s.U3.near(P.doc.resolve(C)));
        n.view.dispatch(P);
      } else if (data.hasSkill) {
        var G = data.promptContents.map((e) => {
          if (e.type === "skill") {
            return c;
          }
          return e;
        });
        this._agenticGeneratorManager.changePromptContents(G);
      } else {
        if (_) {
          this._agenticGeneratorManager.insertSkillTag(id, name, e.source);
        } else {
          this._agenticGeneratorManager.changePromptContents([
            ...data.promptContents.filter((e) => e.type !== "skill"),
            c,
          ]);
        }
      }
      reportManager.reportAddSkills(e, m);
      if (
        t == null || (R = t.reportParams) == null ? undefined : R.actionMethod
      ) {
        reportManager.reportSkillsSelect(e, t.reportParams.actionMethod, m);
      }
      contentGeneratorManager.activateContentGenerator({
        promptFocusPosition: "end",
      });
    };
    this.applyCreateSkillTemplate = () => {
      this._agenticGeneratorManager.changePromptContents(w2());
    };
    this.applyAgentEditSkillTemplate = (e) => {
      if (e.source === g.fc.User) {
        this._agenticGeneratorManager.contentGeneratorManager.setContentGeneratorType(
          "agentic",
        );
        this._agenticGeneratorManager.reportManager.updateResourceReportParams({
          enterFrom: "skill_manage_edit",
        });
        this._agenticGeneratorManager.changePromptContents([
          this._toSkillPromptContent(e),
          {
            type: "text",
            text: XD(),
          },
        ]);
        this._agenticGeneratorManager.contentGeneratorManager.activateContentGenerator();
      }
    };
    this.setSkillActive = (e, t) =>
      a._(function* () {
        const r = yield c._skillLibraryService.setSkillActive(e, t);
        if (r) {
          if (!r.ok) {
            c._notifySkillActiveUpdateFailed(t, r.code);
            return d.xz(r.code, r.msg);
          }
          const a = t
            ? l.Ay.t(
                "skill_dialog_manage_button_activate_success",
                {},
                "Skill activated",
              )
            : l.Ay.t(
                "skill_dialog_manage_button_disable_success",
                {},
                "Skill deactivated",
              );
          c._notificationService.success(a);
          return d.nj();
        }
      })();
    this._metadataStore = new C(this._skillLibraryService.data);
    this._register(
      this._skillLibraryService.onDidResetSkills(() => {
        this._selectionGeneration += 1;
        var e = this._getPromptSkillContent();
        var t = e ? this._getDeferredMarketSkill(e) : undefined;
        this._metadataStore.resetForAccountChange();
        this._deferredLibraryMarketSkills.clear();
        this._committingMarketSkills.clear();
        if (t) {
          this._deferredLibraryMarketSkills.set(
            t.id,
            n._(i._({}, t), {
              isAdded: false,
              addedSkillId: undefined,
            }),
          );
        }
      }),
    );
    this._register(
      this._skillLibraryService.onDidUpsertSkill((e) => {
        this._handleLibrarySkillUpserted(e);
      }),
    );
    this._register(
      this._skillLibraryService.onDidRemoveSkill((e) => {
        this._handleLibrarySkillRemoved(e);
      }),
    );
  }
}
export { P as f };
P = o.Cg(
  [
    o.Qj(1, v.j),
    o.Qj(2, _.M),
    o.Qj(3, u.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      v.j === undefined ? Object : v.j,
      _.M === undefined ? Object : _.M,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  P,
);
