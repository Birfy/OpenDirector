import a from "dw4";
import { _ } from "./module-NtM.js";
export class x {
  get isCreateOrEditView() {
    return this.viewMode === "create" || this.viewMode === "edit";
  }
  get formViewMode() {
    if (this.viewMode === "create" || this.viewMode === "edit") {
      return this.viewMode;
    }
  }
  get toolsetGuideDocUrl() {
    let t;
    let e;
    if (
      (t = (e = this.userSkillsConfig) == null ? undefined : e.guideDoc) != null
    ) {
      return t;
    }
    return "";
  }
  get isSubmitting() {
    return this._isSubmitting;
  }
  get isFormFieldsLocked() {
    return this._isSubmitting;
  }
  get isInstructionSyncInProgress() {
    return this.instructionSyncStatus === _.Saving;
  }
  setViewMode(t) {
    this.viewMode = t;
  }
  setCurrentSkillId(t) {
    this.currentSkillId = t;
  }
  setUnsavedDialogVisible(t) {
    this.isUnsavedDialogVisible = t;
  }
  setUserSkillsConfig(t) {
    this.userSkillsConfig = t;
  }
  setSubmitting(t) {
    this._isSubmitting = t;
  }
  beginInstructionSync() {
    if (this.instructionSyncStatus !== _.Saving) {
      this._instructionSyncStatusBeforeSaving = this.instructionSyncStatus;
    }
    this.instructionSyncStatus = _.Saving;
  }
  finishInstructionSync(t) {
    this.instructionSyncStatus = t;
    this._instructionSyncStatusBeforeSaving = _.Idle;
  }
  revertInstructionSyncIfSaving() {
    if (this.instructionSyncStatus === _.Saving) {
      this.instructionSyncStatus = this._instructionSyncStatusBeforeSaving;
    }
  }
  resetFormInteractionState() {
    this._isSubmitting = false;
    this.instructionSyncStatus = _.Idle;
    this._instructionSyncStatusBeforeSaving = _.Idle;
    this.instructionAdjustReported = false;
  }
  reset() {
    this.viewMode = "wait";
    this.currentSkillId = undefined;
    this.isUnsavedDialogVisible = false;
    this.resetFormInteractionState();
  }
  constructor() {
    this.viewMode = "wait";
    this.currentSkillId = undefined;
    this.isUnsavedDialogVisible = false;
    this._isSubmitting = false;
    this.instructionSyncStatus = _.Idle;
    this._instructionSyncStatusBeforeSaving = _.Idle;
    this.instructionAdjustReported = false;
    this.userSkillsConfig = undefined;
    a.l_(this);
  }
}
