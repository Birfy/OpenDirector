import a from "NY";
import r from "oa";
import s from "bk";
import l from "QWK";
import n from "dw4";
import o from "Qey";
import d from "o7";
import c from "K8";
import u from "aEB";
import _ from "f3";
import { j } from "./module-aoz.js";
import { O } from "./module-cAy.js";
import { x } from "./module-vGo.js";
import S from "b5";
import v from "WA9";
import { P } from "./module-dRT.js";
import { S as S_1 } from "./module-cou.js";
import { t_ } from "./module-L7p.js";
const f = [
  {
    extension: "zip",
    header: "PK\x03\x04",
  },
  {
    extension: "zip",
    header: "PK\x05\x06",
  },
  {
    extension: "rar",
    header: "Rar!\x1a\x07\0",
  },
  {
    extension: "rar",
    header: "Rar!\x1a\x07\x01\0",
  },
  {
    extension: "7z",
    header: "7z¼¯'\x1c",
  },
];
const m = {
  "application/zip": "zip",
  "application/x-zip": "zip",
  "application/x-zip-compressed": "zip",
  "application/vnd.rar": "rar",
  "application/x-rar": "rar",
  "application/x-rar-compressed": "rar",
  "application/rar": "rar",
  "application/x-7z-compressed": "7z",
  "text/markdown": "md",
  "text/x-markdown": "md",
  "text/plain": "md",
};
export class C extends d.jG {
  get data() {
    return this._dataStore;
  }
  get metadata() {
    return this._metadataStore;
  }
  get currentSkill() {
    return this._resolveSkill(this._metadataStore.currentSkillId);
  }
  get canEditCurrentSkill() {
    const currentSkill = this.currentSkill;
    return (
      !(
        !currentSkill ||
        currentSkill.isSkillPackage ||
        this._isSkillReuploading(currentSkill.id)
      ) &&
      (currentSkill.source === _.fc.User
        ? P(currentSkill)
        : currentSkill.source === _.fc.Market &&
          currentSkill.isContentAccessible)
    );
  }
  get isFormSubmittable() {
    return (
      this._dataStore.isFormValid &&
      this.getFormNameValidationStatus() === "valid"
    );
  }
  get isFormDirty() {
    const { formViewMode } = this._metadataStore;
    if (!formViewMode) {
      return false;
    }
    if (formViewMode === "edit") {
      return (
        this._dataStore.name.trim() !== this._dataStore.initialName.trim() ||
        this._dataStore.description.trim() !==
          this._dataStore.initialDescription.trim() ||
        this._dataStore.isInstructionDirty
      );
    }
    const { name, description, instruction } = this._dataStore;
    return (
      name.trim().length > 0 ||
      description.trim().length > 0 ||
      instruction.trim().length > 0
    );
  }
  get canSubmitForm() {
    const t =
      this._metadataStore.formViewMode === "edit" &&
      this._isSkillReuploading(this._metadataStore.currentSkillId);
    return this.isFormSubmittable && this.isFormDirty && !t;
  }
  get isCurrentSkillPlatform() {
    let t;
    return (
      ((t = this.currentSkill) == null ? undefined : t.source) === _.fc.Platform
    );
  }
  get isFormBlockingSearch() {
    return this._isFormBlockingSearch();
  }
  dispose() {
    this._closeEditor();
    super.dispose();
  }
  syncAfterSkillRemoved(t) {
    if (this._metadataStore.currentSkillId === t) {
      this._reconcileMainPanelWithVisibleSkills();
    }
  }
  _registerViewInitializationReaction() {
    this._register({
      dispose: n.mJ(
        () => ({
          skills: this.hostAdapter.librarySkills,
          skillsLoading: this.hostAdapter.isSkillsLoading,
        }),
        () => this._tryInitializeView(),
      ),
    });
    this._register({
      dispose: n.mJ(
        () => this.hostAdapter.searchKeyword,
        () => this._reconcileMainPanelOnSearchChange(),
      ),
    });
  }
  _tryInitializeView() {
    if (
      this._editorHandle &&
      this._metadataStore.viewMode === "wait" &&
      this._isSkillsReady()
    ) {
      const t = this._initialSkillId
        ? this._resolveSkill(this._initialSkillId)
        : undefined;
      if (t) {
        return void this._applySpecifiedSkillView(t);
      }
      this._reconcileMainPanelWithVisibleSkills();
    }
  }
  _reconcileMainPanelWithVisibleSkills(t) {
    if (
      this._editorHandle &&
      !(
        !(t == null ? undefined : t.forceFormViewExit) &&
        this._metadataStore.viewMode !== "wait" &&
        this._isFormBlockingSearch()
      )
    ) {
      const { manageVisibleSkills } = this.hostAdapter;
      const { currentSkillId, viewMode } = this._metadataStore;
      const r = manageVisibleSkills.find((t) => t.id === currentSkillId);
      if (r && viewMode !== "create") {
        return void this._applyDetailView(r.id);
      }
      const s = manageVisibleSkills[0];
      if (s) {
        return void this._applyDetailView(s.id);
      }
      this._applyCreateView();
    }
  }
  _reconcileMainPanelOnSearchChange() {
    if (this._metadataStore.viewMode !== "wait") {
      this._reconcileMainPanelWithVisibleSkills();
    }
  }
  _isFormBlockingSearch() {
    const { viewMode } = this._metadataStore;
    return viewMode === "edit" || (viewMode === "create" && this.isFormDirty);
  }
  _isSkillsReady() {
    return !this.hostAdapter.isSkillsLoading || this.hostAdapter.hasLoadedOnce;
  }
  _applySpecifiedSkillView(t) {
    if (
      this._preferredViewMode === "edit" &&
      !this._isSkillReuploading(t.id) &&
      !t.isSkillPackage &&
      ((t.source === _.fc.User && P(t)) ||
        (t.source === _.fc.Market && t.isContentAccessible))
    ) {
      this._applyEditView(t.id, t);
    } else {
      this._applyDetailView(t.id);
    }
  }
  _resolveSkill(t) {
    if (t) {
      return this.hostAdapter.librarySkills.find((e) => e.id === t);
    }
  }
  _isSkillReuploading(t) {
    return (
      t !== undefined &&
      this._skillLibraryService.data.reuploadingSkillIds.includes(t)
    );
  }
  _closeEditor() {
    let t;
    if ((t = this._editorHandle) != null) {
      t.close();
    }
    this._editorHandle = undefined;
    this._initialSkillId = undefined;
    this._preferredViewMode = undefined;
    this._pendingAction = null;
    this._metadataStore.reset();
  }
  _setView(t, e) {
    this._metadataStore.setViewMode(t);
    this._metadataStore.setCurrentSkillId(e);
  }
  _applyDetailView(t) {
    this._setView("detail", t);
  }
  _applyCreateView() {
    this._setView("create");
    this._dataStore.initializeForm();
    this._metadataStore.resetFormInteractionState();
  }
  _applyEditView(t, e) {
    this.hostAdapter.reportEdit(t, e.name);
    this._setView("edit", t);
    this._dataStore.initializeForm(e);
    this._metadataStore.resetFormInteractionState();
  }
  _executeLeaveTarget(t) {
    switch (t.kind) {
      case "close-modal":
        let e;
        this.hostAdapter.reportCloseList();
        this._closeEditor();
        this.hostAdapter.clearSearchKeyword();
        if ((e = t.onClose) != null) {
          e.call(t);
        }
        break;
      case "detail":
        if (this._resolveSkill(t.skillId)) {
          this._applyDetailView(t.skillId);
        }
        break;
      case "create":
        this.hostAdapter.reportCreateNew();
        this._applyCreateView();
        break;
      case "sidebar-search":
        if (this._isFormBlockingSearch()) {
          this._reconcileMainPanelWithVisibleSkills({
            forceFormViewExit: true,
          });
        }
        t.onReady();
    }
  }
  _runAfterUnsavedConfirm(t) {
    if (this.isFormDirty) {
      this._pendingAction = t;
      this._metadataStore.setUnsavedDialogVisible(true);
    } else {
      t();
    }
  }
  _getUnsavedDialogReportSkillInfo() {
    let t;
    const { name } = this._dataStore.formData;
    return {
      skillId: this._metadataStore.currentSkillId,
      skillName: name || ((t = this.currentSkill) == null ? undefined : t.name),
    };
  }
  _syncFormFieldValueBeforeLeave() {
    const { activeElement } = document;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  }
  _handleSaveOutcome(t, e) {
    let i;
    const { formData, resolvedSkillId } = e;
    if (t.ok) {
      const s = resolvedSkillId != null ? resolvedSkillId : t.value.id;
      this.hostAdapter.reportSave(s, formData.name, "success");
      if (resolvedSkillId && this._dataStore.isInstructionDirty) {
        this.hostAdapter.reportInstructionAdjust();
      }
      this._notificationService.success(
        o.Ay.t("skill_toast_save_success", {}, "Saved"),
      );
      this._applyDetailView(t.value.id);
      return;
    }
    this.hostAdapter.reportSave(resolvedSkillId, formData.name, "fail", t.msg);
    this._notificationService.warning(
      (i = S_1(t.code)) != null
        ? i
        : o.Ay.t("skill_toast_save_failed", {}, "Couldn't save"),
    );
  }
  _createSkill(t) {
    return a
      ._(function* () {
        const e = yield this._skillLibraryService.createSkill(
          s._(r._({}, t), {
            status: _.Ir.Active,
            source: _.fc.User,
          }),
          {
            validateSource: false,
            reportEnterFrom: "create_click",
          },
        );
        if (e.ok) {
          return c.TZ(e.value.skill);
        }
        return c.xz(e.code, e.msg);
      })
      .call(this);
  }
  _editSkill(id, e) {
    return a
      ._(function* () {
        let i;
        let a;
        const l = this._resolveSkill(id);
        if (!l || l.source !== _.fc.User || !P(l)) {
          return c.xz(
            -1,
            (a = S_1(-1)) != null
              ? a
              : o.Ay.t("skill_toast_save_failed", {}, "Couldn't save"),
          );
        }
        const n = yield this.hostAdapter.updateSkill(
          s._(
            r._(
              {
                id,
              },
              e,
            ),
            {
              status: (i = l.status) != null ? i : _.Ir.Disabled,
            },
          ),
          {
            preserveCachedStatus: true,
          },
        );
        if (n.ok) {
          return c.TZ(n.value.skill);
        }
        return c.xz(n.code, n.msg);
      })
      .call(this);
  }
  _getSkillFormNameValidationOptions() {
    return {
      existingSkillNames: this.hostAdapter.librarySkills.map((t) => t.name),
      unchangedName: this._dataStore.initialName,
    };
  }
  constructor(t, e, i) {
    var r;
    super();
    r = this;
    this.hostAdapter = t;
    this._skillLibraryService = e;
    this._notificationService = i;
    this._dataStore = new O();
    this._metadataStore = new x();
    this._pendingAction = null;
    this._initialSkillId = undefined;
    this._preferredViewMode = undefined;
    this.getFormNameValidationStatus = () =>
      t_(this._dataStore.name, this._getSkillFormNameValidationOptions());
    this.applyFormName = (t) => {
      if (this._metadataStore.isFormFieldsLocked) {
        return this.getFormNameValidationStatus();
      }
      var e = t_(t, this._getSkillFormNameValidationOptions());
      if (e !== "invalid_character") {
        this._dataStore.setName(t);
      }
      return e;
    };
    this.updateUserSkillsConfig = (t) => {
      this._metadataStore.setUserSkillsConfig(t);
    };
    this.openSkillEditor = (t) => {
      if (this.presentSkillEditor) {
        this._closeEditor();
        this.hostAdapter.clearSearchKeyword();
        this._initialSkillId = t == null ? undefined : t.initialSkillId;
        this._preferredViewMode = t == null ? undefined : t.preferredViewMode;
        this._metadataStore.reset();
        this._editorHandle = this.presentSkillEditor({
          onClose: () =>
            this.leaveFormView({
              kind: "close-modal",
            }),
        });
        if (t == null ? undefined : t.enterFrom) {
          this.hostAdapter.reportEditorOpen(t.enterFrom);
        }
        this._tryInitializeView();
      }
    };
    this.leaveFormView = (t) => {
      if (this._metadataStore.isCreateOrEditView) {
        this._syncFormFieldValueBeforeLeave();
      }
      var e = () => this._executeLeaveTarget(t);
      if (this._metadataStore.isCreateOrEditView) {
        this._runAfterUnsavedConfirm(e);
      } else {
        e();
      }
    };
    this.enterEditMode = (t) => {
      var e = this._resolveSkill(t);
      if (!(!e || e.isSkillPackage || this._isSkillReuploading(t))) {
        if (e.source === _.fc.User && P(e)) {
          return void this._applyEditView(t, e);
        }
        if (e.source === _.fc.Market && e.isContentAccessible) {
          this._applyEditView(t, e);
        }
      }
    };
    this.confirmUnsavedChanges = () => {
      var t;
      var { skillId, skillName } = this._getUnsavedDialogReportSkillInfo();
      this.hostAdapter.reportCloseConfirm(skillId, skillName);
      this._metadataStore.setUnsavedDialogVisible(false);
      if ((t = this._pendingAction) != null) {
        t.call(this);
      }
      this._pendingAction = null;
    };
    this.cancelUnsavedChanges = () => {
      var { skillId, skillName } = this._getUnsavedDialogReportSkillInfo();
      this.hostAdapter.reportCloseEditCancel(skillId, skillName);
      this._metadataStore.setUnsavedDialogVisible(false);
      this._pendingAction = null;
    };
    this.setSkillActive = (t, e) =>
      a._(function* () {
        if (
          !(
            r.hostAdapter.updatingSkillStatusIdSet.has(t) ||
            r._isSkillReuploading(t)
          )
        ) {
          const i = r._resolveSkill(t);
          const a = yield r.hostAdapter.setSkillActive(t, e);
          if (a !== undefined) {
            const s = a.ok ? "success" : "fail";
            const l = a.ok ? undefined : a.msg;
            if (e) {
              r.hostAdapter.reportActivate(
                t,
                i == null ? undefined : i.name,
                s,
                l,
              );
            } else {
              r.hostAdapter.reportDeactivate(
                t,
                i == null ? undefined : i.name,
                s,
                l,
              );
            }
          }
        }
      })();
    this.downloadCurrentSkill = () =>
      a._(function* () {
        if (!r._isSkillReuploading(r._metadataStore.currentSkillId)) {
          const t = r.currentSkill;
          if (t && t.source === _.fc.User && P(t)) {
            let e;
            const { markdownUrl, name, id } = t;
            const n = o.Ay.t(
              "skill_dialog_manage_more_download_failed",
              {},
              "Couldn't download. Try again.",
            );
            if (!markdownUrl) {
              r.hostAdapter.reportDownload(t, "fail", "no url");
              r._notificationService.warning(n);
              return;
            }
            const d = yield (
              ((e = name || id),
              a._(function* () {
                try {
                  let t;
                  const r = yield fetch(markdownUrl);
                  if (!r.ok) {
                    return c.xz(
                      -1,
                      "response code:"
                        .concat(r.status, ", msg:")
                        .concat(r.statusText),
                    );
                  }
                  const s = (
                    (t = r.headers.get("content-type")) != null ? t : ""
                  )
                    .split(";")[0]
                    .trim()
                    .toLowerCase();
                  const l = yield r.blob();
                  if (l.size === 0) {
                    return c.xz(-1, "Empty skill download response");
                  }
                  let n = m[s];
                  if (!(n || (s !== "application/octet-stream" && s !== ""))) {
                    n = yield a._(function* () {
                      const t = new Uint8Array(
                        yield l.slice(0, 8).arrayBuffer(),
                      );
                      const e = f.find((e) => {
                        var { header } = e;
                        return (
                          t.length >= header.length &&
                          Array.from(header).every(
                            (e, i) => t[i] === e.charCodeAt(0),
                          )
                        );
                      });
                      if (e == null) {
                        return undefined;
                      }
                      return e.extension;
                    })();
                  }
                  if (!n) {
                    return c.xz(
                      -1,
                      "Unsupported skill download content type: ".concat(
                        s || "missing",
                      ),
                    );
                  }
                  const o = e.replace(/\.(zip|rar|7z|md)$/i, "");
                  v.W(l, "".concat(o, ".").concat(n));
                  return c.nj();
                } catch (error) {
                  return S.r(error);
                }
              })())
            );
            if (!d.ok) {
              r.hostAdapter.reportDownload(t, "fail", d.msg);
              r._notificationService.warning(n);
              return;
            }
            r.hostAdapter.reportDownload(t, "success");
            r._notificationService.success(
              o.Ay.t(
                "skill_dialog_manage_more_download_success",
                {},
                "Downloaded",
              ),
            );
          }
        }
      })();
    this.deleteCurrentSkill = () =>
      a._(function* () {
        const r_currentSkill = r.currentSkill;
        return (
          !(!r_currentSkill || r._isSkillReuploading(r_currentSkill.id)) &&
          (r.hostAdapter.reportDeleteConfirm(
            r_currentSkill.id,
            r_currentSkill.name,
          ),
          (yield r.hostAdapter.deleteSkill(r_currentSkill.id)).ok)
        );
      })();
    this.setFormNameRaw = (t) => {
      if (!this._metadataStore.isFormFieldsLocked) {
        this._dataStore.setNameRaw(t);
      }
    };
    this.setFormDescription = (t) => {
      if (!this._metadataStore.isFormFieldsLocked) {
        this._dataStore.setDescription(t);
      }
    };
    this.setFormInstruction = (t) => {
      if (!this._metadataStore.isFormFieldsLocked) {
        this._dataStore.setInstruction(t);
      }
    };
    this.applyInstructionCanonicalValue = (t) => {
      if (!this._metadataStore.isFormFieldsLocked) {
        if (this._dataStore.isInstructionDirty) {
          this._dataStore.setInstruction(t);
        } else {
          this._dataStore.applyInstructionCanonicalValue(t);
        }
      }
    };
    this.updateInstruction = (t) => {
      this.setFormInstruction(t);
    };
    this.submitForm = () =>
      a._(function* () {
        if (r.canSubmitForm && !r._metadataStore.isSubmitting) {
          const { viewMode } = r._metadataStore;
          r._metadataStore.setSubmitting(true);
          try {
            const { formData } = r._dataStore;
            if (viewMode === "create") {
              const i = yield r._createSkill(formData);
              r._handleSaveOutcome(i, {
                formData,
              });
              return;
            }
            if (viewMode === "edit" && r.currentSkill) {
              const a = yield r._editSkill(r.currentSkill.id, formData);
              r._handleSaveOutcome(a, {
                formData,
                resolvedSkillId: r.currentSkill.id,
              });
            }
          } finally {
            r._metadataStore.setSubmitting(false);
          }
        }
      })();
    this._registerViewInitializationReaction();
  }
}
C = l.Cg(
  [
    l.Qj(1, j),
    l.Qj(2, u.Ot),
    l.Sn("design:type", Function),
    l.Sn("design:paramtypes", [
      typeof SkillEditorHostAdapter === "undefined"
        ? Object
        : SkillEditorHostAdapter,
      j === undefined ? Object : j,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  C,
);
