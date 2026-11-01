import r from "oa";
import a from "bk";
import o from "qa";
import { _ } from "./module-MvH.js";
import n from "dw4";
import u from "eNj";
import { Mn, oP, ty, vN } from "./module-DTs.js";
export class h {
  get hasRejectedAudit() {
    return this._hasAuditMatching(vN);
  }
  get isAnyAuditLoading() {
    return (
      this._hasAuditMatching((e) => e.status === "auditing") ||
      this.isVoiceAuditing
    );
  }
  setFormData(e) {
    let t;
    let i;
    let a;
    if ("video" in e && e.video !== this.formData.video) {
      if ((i = this.formData.video) == null ? undefined : i.videoUrl) {
        URL.revokeObjectURL(this.formData.video.videoUrl);
      }
      if ((a = this.formData.video) == null ? undefined : a.coverUrl) {
        URL.revokeObjectURL(this.formData.video.coverUrl);
      }
    }
    if (
      "audio" in e &&
      e.audio !== this.formData.audio &&
      ((t = this.formData.audio) == null ? undefined : t.audioUrl)
    ) {
      URL.revokeObjectURL(this.formData.audio.audioUrl);
    }
    this.formData = r._({}, this.formData, e);
  }
  setMainImage(mainImage) {
    this.formData = a._(r._({}, this.formData), {
      mediaType: "image",
      mainImage,
      video: undefined,
      audio: undefined,
    });
  }
  addAuxiliaryImage(e) {
    this.formData = a._(r._({}, this.formData), {
      mediaType: "image",
      auxiliaryImages: [...(this.formData.auxiliaryImages || []), e],
      video: undefined,
      audio: undefined,
    });
  }
  setAudio(audio) {
    this.formData = a._(r._({}, this.formData), {
      mediaType: "audio",
      mainImage: undefined,
      auxiliaryImages: undefined,
      video: undefined,
      audio,
      voiceList: undefined,
      selectedVoice: undefined,
    });
  }
  removeAuxiliaryImage(e) {
    if (
      this.formData.auxiliaryImages &&
      e >= 0 &&
      e < this.formData.auxiliaryImages.length
    ) {
      this.formData.auxiliaryImages = this.formData.auxiliaryImages.filter(
        (t, i) => i !== e,
      );
    }
  }
  setName(e) {
    this.formData.name = e;
  }
  setDescription(e) {
    this.formData.description = e;
  }
  setEditSubjectId(e) {
    this.editSubjectId = e;
  }
  setEditDataId(e) {
    this.editDataId = e;
  }
  setSubjectListShowFrom(e) {
    this.subjectListShowFrom = e;
  }
  setSubjectActionModal(e) {
    this.subjectActionModal = e;
    this.subjectActionReportContext = {};
  }
  setSubjectActionReportContext(e) {
    this.subjectActionReportContext = e;
  }
  setSubjectSettingCanvasProjectId(e) {
    this.subjectSettingCanvasProjectId = e;
  }
  setSubjectSettingWorkspaceId(e) {
    this.subjectSettingWorkspaceId = e;
  }
  setSubjectAgentContext(e) {
    this.subjectAgentContext = e;
  }
  setMainImageUploading(e) {
    this.isMainImageUploading = e;
  }
  setAuxiliaryImageUploading(e) {
    this.isAuxiliaryImageUploading = e;
  }
  setAuxiliaryImageUploadingCount(e) {
    this.auxiliaryImageUploadingCount = e;
  }
  decrementAuxiliaryImageUploadingCount() {
    this.auxiliaryImageUploadingCount = Math.max(
      0,
      this.auxiliaryImageUploadingCount - 1,
    );
  }
  setVideoUploading(e) {
    this.isVideoUploading = e;
  }
  setAudioUploading(e) {
    this.isAudioUploading = e;
  }
  setVoiceGenerating(e) {
    this.isVoiceGenerating = e;
  }
  setMainImageAudit(e) {
    this.mainImageAudit = e;
  }
  clearMainImageAudit() {
    this.mainImageAudit = oP;
  }
  setAuxiliaryImageAudit(e, t) {
    this.auxiliaryImageAuditMap = a._(r._({}, this.auxiliaryImageAuditMap), {
      [e]: t,
    });
  }
  clearAuxiliaryImageAudit(e) {
    const auxiliaryImageAuditMap = this.auxiliaryImageAuditMap;
    const { [e]: i } = auxiliaryImageAuditMap;
    const r = o._(auxiliaryImageAuditMap, [_(e)]);
    this.auxiliaryImageAuditMap = r;
  }
  clearAllAuxiliaryImageAudit() {
    this.auxiliaryImageAuditMap = {};
  }
  setVideoAudit(e) {
    this.videoAudit = e;
  }
  clearVideoAudit() {
    this.videoAudit = oP;
  }
  setAudioAudit(e) {
    this.audioAudit = e;
  }
  clearAudioAudit() {
    this.audioAudit = oP;
  }
  setVoiceAudit(e, t) {
    this.voiceAuditMap = a._(r._({}, this.voiceAuditMap), {
      [e]: t,
    });
  }
  clearVoiceAudit(e) {
    const voiceAuditMap = this.voiceAuditMap;
    const { [e]: i } = voiceAuditMap;
    const r = o._(voiceAuditMap, [_(e)]);
    this.voiceAuditMap = r;
  }
  clearAllVoiceAudit() {
    this.voiceAuditMap = {};
  }
  setVoiceAuditing(e) {
    this.isVoiceAuditing = e;
  }
  resetAuditState() {
    this.mainImageAudit = oP;
    this.auxiliaryImageAuditMap = {};
    this.videoAudit = oP;
    this.audioAudit = oP;
    this.voiceAuditMap = {};
    this.isVoiceAuditing = false;
  }
  reset() {
    let e;
    let t;
    let i;
    if ((e = this.formData.video) == null ? undefined : e.videoUrl) {
      URL.revokeObjectURL(this.formData.video.videoUrl);
    }
    if ((t = this.formData.audio) == null ? undefined : t.audioUrl) {
      URL.revokeObjectURL(this.formData.audio.audioUrl);
    }
    if ((i = this.formData.video) == null ? undefined : i.coverUrl) {
      URL.revokeObjectURL(this.formData.video.coverUrl);
    }
    this.editSubjectId = undefined;
    this.editDataId = undefined;
    this.formData = r._({}, u.q9);
    this.isMainImageUploading = false;
    this.isAuxiliaryImageUploading = false;
    this.isAudioUploading = false;
    this.auxiliaryImageUploadingCount = 0;
    this.isVideoUploading = false;
    this.isAudioUploading = false;
    this.isVoiceGenerating = false;
    this.resetAuditState();
    this.subjectListShowFrom = undefined;
    this.subjectActionModal = undefined;
    this.subjectActionReportContext = {};
    this.subjectSettingCanvasProjectId = undefined;
    this.subjectSettingWorkspaceId = undefined;
    this.subjectAgentContext = undefined;
  }
  _hasAuditMatching(e) {
    let t;
    let i;
    const r = ((t = this.formData.auxiliaryImages) != null ? t : []).some(
      (t) => {
        var i = ty(t);
        var r = i ? this.auxiliaryImageAuditMap[i] : undefined;
        return !!r && e(r);
      },
    );
    const a = ((i = this.formData.voiceList) != null ? i : []).some((t) => {
      var i = Mn(t);
      var r = i ? this.voiceAuditMap[i] : undefined;
      return !!r && e(r);
    });
    return (
      (!!this.formData.mainImage && e(this.mainImageAudit)) ||
      (!!this.formData.video && e(this.videoAudit)) ||
      (!!this.formData.audio && e(this.audioAudit)) ||
      r ||
      a
    );
  }
  constructor(e) {
    this.formData = u.q9;
    this.isMainImageUploading = false;
    this.isAuxiliaryImageUploading = false;
    this.auxiliaryImageUploadingCount = 0;
    this.isVideoUploading = false;
    this.isAudioUploading = false;
    this.isVoiceGenerating = false;
    this.mainImageAudit = oP;
    this.auxiliaryImageAuditMap = {};
    this.videoAudit = oP;
    this.audioAudit = oP;
    this.voiceAuditMap = {};
    this.isVoiceAuditing = false;
    this.subjectActionReportContext = {};
    this.subjectSettingCanvasProjectId = undefined;
    this.subjectSettingWorkspaceId = undefined;
    this.subjectAgentContext = undefined;
    n.l_(this);
    if (e) {
      this.formData = r._({}, u.q9, e);
    }
  }
}
