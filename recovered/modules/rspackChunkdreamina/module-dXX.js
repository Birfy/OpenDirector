import r from "NY";
import a from "oa";
import o from "bk";
import s from "QWK";
import n from "dw4";
import u from "Qey";
import c from "o7";
import d from "K8";
import l from "A7";
import h from "aEB";
import _ from "Kt";
import { w as w_1 } from "./module-D8B.js";
import { r as r_1 } from "./module-DsS.js";
import { k } from "./module-ai0_2.js";
import { o as o_1 } from "./module-bhi.js";
import { p } from "./module-DdJ.js";
import { g } from "./module-WiH.js";
import b from "ZX";
import { R } from "./module-Uu7.js";
import { n as n_1 } from "./module-Bf.js";
import { Y } from "./module-Xik.js";
import I from "eNj";
import { z } from "./module-s4D.js";
import { h as h_1 } from "./module-rSA.js";
import { Mn, N3, dH, oP, ty } from "./module-DTs.js";
import { Y as Y_1 } from "./module-M0o.js";
import C from "gG";
import F from "Iq4Q";
import { P } from "./module-anW.js";
import { w } from "./module-NSD.js";
import { c as c_1 } from "./module-o2y.js";
export class B extends c.jG {
  get formData() {
    return this._subjectOperationStore.formData;
  }
  get editSubjectId() {
    return this._subjectOperationStore.editSubjectId;
  }
  get subjectSettingCanvasProjectId() {
    return this._subjectOperationStore.subjectSettingCanvasProjectId;
  }
  get isMainImageUploading() {
    return this._subjectOperationStore.isMainImageUploading;
  }
  get isAuxiliaryImageUploading() {
    return this._subjectOperationStore.isAuxiliaryImageUploading;
  }
  get auxiliaryImageUploadingCount() {
    return this._subjectOperationStore.auxiliaryImageUploadingCount;
  }
  get isVideoUploading() {
    return this._subjectOperationStore.isVideoUploading;
  }
  get isAudioUploading() {
    return this._subjectOperationStore.isAudioUploading;
  }
  get isVoiceGenerating() {
    return this._subjectOperationStore.isVoiceGenerating;
  }
  get isVoiceAuditing() {
    return this._subjectOperationStore.isVoiceAuditing;
  }
  get mainImageAudit() {
    return this._subjectOperationStore.mainImageAudit;
  }
  get auxiliaryImageAuditMap() {
    return this._subjectOperationStore.auxiliaryImageAuditMap;
  }
  get videoAudit() {
    return this._subjectOperationStore.videoAudit;
  }
  get audioAudit() {
    return this._subjectOperationStore.audioAudit;
  }
  get voiceAuditMap() {
    return this._subjectOperationStore.voiceAuditMap;
  }
  get audioUploadManager() {
    return this._audioUploadManager;
  }
  get isEmpty() {
    const { mainImage, video, audio } = this._subjectOperationStore.formData;
    return (
      !mainImage &&
      !video &&
      !audio &&
      !this.isMainImageUploading &&
      !this.isVideoUploading &&
      !this.isAudioUploading
    );
  }
  get isMaterialAuditing() {
    return this._subjectOperationStore.isAnyAuditLoading;
  }
  get isMaterialRejected() {
    return this._subjectOperationStore.hasRejectedAudit;
  }
  get isUploading() {
    return (
      this.isMainImageUploading ||
      this.isAuxiliaryImageUploading ||
      this.isVideoUploading ||
      this.isAudioUploading ||
      this.isVoiceGenerating
    );
  }
  get canSubmit() {
    let e;
    const { mediaType, mainImage, video, audio, name } =
      this._subjectOperationStore.formData;
    const s = name.trim().length > 0;
    const n = this.isUploading || this.isMaterialAuditing;
    switch (mediaType) {
      case "video":
        e = !!(video == null ? undefined : video.videoId);
        break;
      case "audio":
        e = !!(audio == null ? undefined : audio.vid);
        break;
      default:
        e = !!(mainImage == null ? undefined : mainImage.imageUri);
    }
    return e && s && !n && !this.isMaterialRejected;
  }
  setFormData(e) {
    this._subjectOperationStore.setFormData(e);
  }
  setVoiceGenerating(e) {
    this._subjectOperationStore.setVoiceGenerating(e);
  }
  setEditSubjectId(e) {
    this._subjectOperationStore.setEditSubjectId(e);
  }
  removeAuxiliaryImage(e) {
    let t;
    const i =
      (t = this._subjectOperationStore.formData.auxiliaryImages) == null
        ? undefined
        : t[e];
    const r = ty(i);
    if (r && !this._hasOtherAuxiliaryImageWithAuditKey(e, r)) {
      this._subjectOperationStore.clearAuxiliaryImageAudit(r);
    }
    this._subjectOperationStore.removeAuxiliaryImage(e);
  }
  setEditDataId(e) {
    this._subjectOperationStore.setEditDataId(e);
  }
  setSubjectListShowFrom(e) {
    this._subjectOperationStore.setSubjectListShowFrom(e);
  }
  setSubjectActionModal(e) {
    this._subjectOperationStore.setSubjectActionModal(e);
  }
  setSubjectActionReportContext(e) {
    this._subjectOperationStore.setSubjectActionReportContext(e);
  }
  uploadMainImageFromLocal(e, t) {
    return r
      ._(function* () {
        if (e.length !== 0) {
          yield this._ensureAuditAcknowledgedForLocalUpload();
          this._subjectOperationStore.setFormData({
            mediaType: "image",
            video: undefined,
            audio: undefined,
          });
          const i = this._truncateToMainImageLimit(e);
          this._subjectOperationStore.setMainImageUploading(true);
          if (i.length > 1) {
            this._subjectOperationStore.setAuxiliaryImageUploading(true);
            this._subjectOperationStore.setAuxiliaryImageUploadingCount(
              i.length - 1,
            );
          }
          try {
            const a = yield this._uploadFromLocalAndApply(
              i,
              (e, t) =>
                r
                  ._(function* () {
                    if (t === 0) {
                      this._subjectOperationStore.clearMainImageAudit();
                      this._subjectOperationStore.setMainImage(e);
                      yield this._executeImageAudit(e, "main");
                    } else {
                      this._subjectOperationStore.addAuxiliaryImage(e);
                      yield this._executeImageAudit(e, "auxiliary");
                    }
                  })
                  .call(this),
              (e) => {
                if (e > 0) {
                  this._subjectOperationStore.decrementAuxiliaryImageUploadingCount();
                }
              },
            );
            this._reportImportMaterial({
              materialSource: "local",
              position: t.position,
              status: a > 0 ? "success" : "fail",
            });
          } finally {
            this._subjectOperationStore.setMainImageUploading(false);
            if (i.length > 1) {
              this._subjectOperationStore.setAuxiliaryImageUploading(false);
              this._subjectOperationStore.setAuxiliaryImageUploadingCount(0);
            }
          }
        }
      })
      .call(this);
  }
  uploadMainImageFromAsset(e, t) {
    if (e.length !== 0) {
      let i;
      const r = this._truncateToMainImageLimit(e);
      const a = r[0];
      const o = this._imageUploadManager.uploadFromAsset(
        a.data,
        (i = a.itemIndex) != null ? i : 0,
      );
      this._subjectOperationStore.clearMainImageAudit();
      this._subjectOperationStore.clearVideoAudit();
      this._subjectOperationStore.clearAudioAudit();
      this._subjectOperationStore.setMainImage(o);
      r.slice(1).forEach((e) => {
        var { data, itemIndex = 0 } = e;
        var r = this._imageUploadManager.uploadFromAsset(data, itemIndex);
        this._subjectOperationStore.addAuxiliaryImage(r);
      });
      this._reportImportMaterial({
        materialSource: "assets",
        position: t.position,
        status: o.imageUri ? "success" : "fail",
      });
    }
  }
  uploadAuxiliaryImagesFromLocal(e, t) {
    return r
      ._(function* () {
        if (e.length !== 0) {
          yield this._ensureAuditAcknowledgedForLocalUpload();
          const i = this._truncateToAuxiliaryLimit(e);
          this._subjectOperationStore.setAuxiliaryImageUploading(true);
          this._subjectOperationStore.setAuxiliaryImageUploadingCount(i.length);
          try {
            const a = yield this._uploadFromLocalAndApply(
              i,
              (e) =>
                r
                  ._(function* () {
                    this._subjectOperationStore.addAuxiliaryImage(e);
                    yield this._executeImageAudit(e, "auxiliary");
                  })
                  .call(this),
              () => {
                this._subjectOperationStore.decrementAuxiliaryImageUploadingCount();
              },
            );
            this._reportImportMaterial({
              materialSource: "local",
              position: t.position,
              status: a > 0 ? "success" : "fail",
            });
          } finally {
            this._subjectOperationStore.setAuxiliaryImageUploading(false);
            this._subjectOperationStore.setAuxiliaryImageUploadingCount(0);
          }
        }
      })
      .call(this);
  }
  removeAudio() {
    this._subjectOperationStore.clearAudioAudit();
    this._subjectOperationStore.setFormData({
      mediaType: undefined,
      audio: undefined,
    });
  }
  uploadAuxiliaryImagesFromAsset(e, t) {
    if (e.length !== 0) {
      const i = this._truncateToAuxiliaryLimit(e);
      let r = 0;
      i.forEach((e) => {
        var { data, itemIndex = 0 } = e;
        var a = this._imageUploadManager.uploadFromAsset(data, itemIndex);
        this._subjectOperationStore.addAuxiliaryImage(a);
        var o = ty(a);
        if (o) {
          this._subjectOperationStore.clearAuxiliaryImageAudit(o);
        }
        if (a.imageUri) {
          r += 1;
        }
      });
      this._reportImportMaterial({
        materialSource: "assets",
        position: t.position,
        status: r > 0 ? "success" : "fail",
      });
    }
  }
  uploadVideoFromLocal(e, t) {
    return r
      ._(function* () {
        if (e.length !== 0) {
          yield this._ensureAuditAcknowledgedForLocalUpload();
          this._subjectOperationStore.setVideoUploading(true);
          this._subjectOperationStore.setFormData({
            mediaType: "video",
          });
          try {
            const i = yield this._videoUploadManager.uploadFromLocal(e);
            if (i.ok) {
              n.h5(() => {
                this._applyVideoAndClearConflicts(i.value);
              });
              yield this._executeVideoAudit(i.value);
            } else {
              n.h5(() => {
                this._subjectOperationStore.clearVideoAudit();
                this._subjectOperationStore.setFormData({
                  mediaType: undefined,
                });
              });
            }
            this._reportImportMaterial({
              materialSource: "local",
              position: t.position,
              status: i.ok ? "success" : "fail",
              materialType: "video",
            });
          } finally {
            this._subjectOperationStore.setVideoUploading(false);
          }
        }
      })
      .call(this);
  }
  uploadVideoFromAsset(e, t) {
    const i = this._videoUploadManager.uploadFromAsset(e);
    if (i.ok) {
      this._subjectOperationStore.setFormData({
        mediaType: "video",
      });
      this._applyVideoAndClearConflicts(i.value);
      this._subjectOperationStore.clearVideoAudit();
      this._reportImportMaterial({
        materialSource: "assets",
        position: t.position,
        status: "success",
        materialType: "video",
      });
    } else {
      this._reportImportMaterial({
        materialSource: "assets",
        position: t.position,
        status: "fail",
        materialType: "video",
      });
    }
  }
  validateVideoDuration(e) {
    return this._videoUploadManager.validateDuration(e);
  }
  uploadAudioFromLocal(e, t) {
    return r
      ._(function* () {
        if (e.length !== 0) {
          yield this._ensureAuditAcknowledgedForLocalUpload();
          this._subjectOperationStore.setAudioUploading(true);
          this._subjectOperationStore.setFormData({
            mediaType: "audio",
          });
          try {
            const i = yield this._audioUploadManager.uploadFromLocal(e);
            if (i.ok) {
              n.h5(() => {
                this._prepareAudioAndClearConflicts();
              });
              yield this._executeAudioAudit(i.value, () =>
                this._isPendingAudioAuditTarget(),
              );
              if (!this._isPendingAudioAuditTarget()) {
                return;
              }
              this._subjectOperationStore.setFormData({
                audio: i.value,
              });
            } else {
              n.h5(() => {
                this._subjectOperationStore.clearAudioAudit();
                this._subjectOperationStore.setFormData({
                  mediaType: undefined,
                });
              });
            }
            this._reportImportMaterial({
              materialSource: "local",
              position: t.position,
              status: i.ok ? "success" : "fail",
              materialType: "audio",
            });
          } finally {
            this._subjectOperationStore.setAudioUploading(false);
          }
        }
      })
      .call(this);
  }
  uploadMediaFromLocal(e, t) {
    return r
      ._(function* () {
        if (e.length !== 0) {
          if (new Set(e.map((e) => this._getFileCategory(e))).size > 1) {
            return void this._notificationService.warning(
              u.Ay.t("subject_upload_mix_err", {}, "请上传同一类型的文件"),
            );
          }
          const i = this._getFileCategory(e[0]);
          if (i === "video") {
            return void (yield this.uploadVideoFromLocal(e, t));
          }
          if (i === "audio") {
            return void (yield this.uploadAudioFromLocal(e, t));
          }
          yield this.uploadMainImageFromLocal(e, t);
        }
      })
      .call(this);
  }
  uploadVoiceFromLocal(e, t) {
    return r
      ._(function* () {
        yield this._ensureAuditAcknowledgedForLocalUpload();
        return this._audioUploadManager.uploadVoiceFromLocal(e, t);
      })
      .call(this);
  }
  generateSubjectVoice(e) {
    return r
      ._(function* () {
        let t;
        const i = yield this._subjectService.generateSubjectVoice(e);
        if (!i.ok) {
          this._notificationService.error(
            u.Ay.t("web_new_character_sound_generate_fail", {}, "音色生成失败"),
          );
          this._reportGenerateSubjectVoiceStatus({
            status: "fail",
            subjectVoiceId: "",
            failReason: i.msg,
            errorCode: String(i.code),
          });
          return i;
        }
        const r = Y_1((t = i.value) == null ? undefined : t.audioInfo);
        if (r) {
          this._reportGenerateSubjectVoiceStatus({
            status: "success",
            subjectVoiceId: r.vid,
          });
          return d.TZ(r);
        }
        this._notificationService.error(
          u.Ay.t("web_new_character_sound_generate_fail", {}, "音色生成失败"),
        );
        this._reportGenerateSubjectVoiceStatus({
          status: "fail",
          subjectVoiceId: "",
        });
        return d.xz(-1, "generate subject voice returned invalid audio info");
      })
      .call(this);
  }
  createSubject() {
    return r
      ._(function* () {
        const subjectSettingWorkspaceId =
          this._subjectOperationStore.subjectSettingWorkspaceId;
        const t = yield this._subjectService.createSubject({
          workspaceId: subjectSettingWorkspaceId,
          agentContext: this._subjectOperationStore.subjectAgentContext,
          content: this._buildSubjectContent(
            this._subjectOperationStore.formData,
          ),
        });
        if (t.ok && t.value) {
          this._subjectRepositoryManager.addSubjects([t.value]);
          this._onSubjectCreated.fire({
            subject: t.value,
            workspaceId: subjectSettingWorkspaceId,
          });
        }
        return t;
      })
      .call(this);
  }
  updateSubject(e) {
    return r
      ._(function* () {
        const t = yield this._subjectService.updateSubject({
          subjectId: e,
          content: this._buildSubjectContent(
            this._subjectOperationStore.formData,
          ),
        });
        if (t.ok && t.value) {
          const { editSubjectId, editDataId } = this._subjectOperationStore;
          const oldSubject =
            editSubjectId !== undefined && editDataId
              ? this._subjectRepositoryManager.getSubject(
                  C.K({
                    subjectId: editSubjectId,
                    dataId: editDataId,
                  }),
                )
              : undefined;
          this._subjectRepositoryManager.addSubjects([t.value]);
          if (oldSubject) {
            this._onSubjectUpdated.fire({
              oldSubject,
              newSubject: t.value,
            });
          }
        }
        return t;
      })
      .call(this);
  }
  deleteSubject(e) {
    return r
      ._(function* () {
        const t = yield this._subjectService.deleteSubject(e);
        if (t.ok && e.dataId !== undefined) {
          this._onSubjectDeleted.fire({
            subjectId: e.subjectId,
            dataId: e.dataId,
          });
        }
        return t;
      })
      .call(this);
  }
  deleteSubjects(e) {
    return r
      ._(function* () {
        const t = yield this._subjectService.deleteSubjects(e);
        if (t.ok) {
          for (const i of e.subjects) {
            if (i.dataId !== undefined) {
              this._onSubjectDeleted.fire({
                subjectId: i.subjectId,
                dataId: i.dataId,
              });
            }
          }
        }
        return t;
      })
      .call(this);
  }
  getSubjectList(e) {
    return r
      ._(function* () {
        let t;
        let i;
        const r = yield this._subjectService.getSubjectList(
          o._(a._({}, e), {
            subjectSource: (t = e.subjectSource) != null ? t : "mine",
          }),
        );
        if (r.ok) {
          return d.TZ((i = r.value.dataList) != null ? i : []);
        }
        return d.xz(r.code, r.msg);
      })
      .call(this);
  }
  validateAudioDuration(e) {
    return this._audioUploadManager.validateDuration(e);
  }
  resetData() {
    this._subjectOperationStore.reset();
  }
  clearVoiceAuditState(e) {
    const t = Mn(e);
    if (t) {
      this._subjectOperationStore.clearVoiceAudit(t);
    }
  }
  executeVoiceAudit(e) {
    return r
      ._(function* () {
        const t = Mn(e);
        if (!t) {
          return oP;
        }
        this._subjectOperationStore.setVoiceAuditing(true);
        try {
          return yield this._executeMaterialPreAudit(
            [
              {
                materialType: b.Xx.Audio,
                uri: e.vid,
              },
            ],
            (e) => this._subjectOperationStore.setVoiceAudit(t, e),
          );
        } finally {
          this._subjectOperationStore.setVoiceAuditing(false);
        }
      })
      .call(this);
  }
  setSubjectSettingCanvasProjectId(e) {
    this._subjectOperationStore.setSubjectSettingCanvasProjectId(e);
  }
  setSubjectSettingWorkspaceId(e) {
    this._subjectOperationStore.setSubjectSettingWorkspaceId(e);
  }
  setSubjectAgentContext(e) {
    this._subjectOperationStore.setSubjectAgentContext(e);
  }
  reportSubjectSettingAction(e) {
    let t;
    let i;
    let r;
    const projectId =
      (t = e.projectId) != null
        ? t
        : this._subjectOperationStore.subjectSettingCanvasProjectId;
    const { subjectSettingWorkspaceId } = this._subjectOperationStore;
    const workspaceId =
      (i = e.workspaceId) != null
        ? i
        : subjectSettingWorkspaceId !== undefined
          ? String(subjectSettingWorkspaceId)
          : undefined;
    const modal =
      (r = e.modal) != null
        ? r
        : this._subjectOperationStore.subjectActionModal;
    const d = o._(a._({}, e), {
      projectId,
      workspaceId,
      modal,
    });
    const l = this._containerService.createInstance(w_1);
    l.setParams(d);
    l.report();
  }
  reportUploadFromLocal() {
    this._reportSubjectAction(r_1.UploadFromLocal);
  }
  reportUploadFromAsset() {
    this._reportSubjectAction(r_1.UploadFromAsset);
  }
  reportSubjectDelete(e) {
    this._reportSubjectAction(r_1.SubjectDelete, e);
  }
  reportSubjectEdit(e) {
    this._reportSubjectAction(r_1.SubjectSetting, e);
  }
  _buildSubjectContent(e) {
    const {
      name,
      description,
      mainImage,
      auxiliaryImages,
      video,
      audio,
      voiceList,
      selectedVoice,
    } = e;
    return {
      name,
      description,
      mainImage: mainImage ? a._({}, mainImage) : undefined,
      auxiliaryImages:
        auxiliaryImages == null
          ? undefined
          : auxiliaryImages.map((e) => a._({}, e)),
      videoInfo: video
        ? {
            vid: video.videoId,
            aigcVideo: video.aigcItemId
              ? {
                  itemId: video.aigcItemId,
                }
              : undefined,
            duration: video.duration,
            coverUrl: video.coverUrl,
            videoUrl: video.videoUrl,
          }
        : undefined,
      audioInfo: audio
        ? {
            vid: audio.vid,
            aigcAudio: audio.aigcItemId
              ? {
                  itemId: audio.aigcItemId,
                }
              : undefined,
            audioUrl: audio.audioUrl,
            duration: audio.duration,
            title: audio.title,
          }
        : undefined,
      voiceList: voiceList == null ? undefined : voiceList.map(F.M),
      selectedVoice: selectedVoice ? F.M(selectedVoice) : undefined,
    };
  }
  _truncateToMainImageLimit(e) {
    let t;
    const i =
      ((t = this._subjectOperationStore.formData.auxiliaryImages) == null
        ? undefined
        : t.length) || 0;
    const r = Math.max(0, e.length - 1);
    const num = 1 + I.nQ;
    if (i + r > I.nQ) {
      this._notificationService.warning(
        u.Ay.t(
          "subject_upload_image_limit_toast",
          {
            num,
          },
          "最多上传{num}张图片",
        ),
      );
      const o = I.nQ - i;
      return e.slice(0, 1 + o);
    }
    return e;
  }
  _truncateToAuxiliaryLimit(e) {
    let t;
    const i =
      ((t = this._subjectOperationStore.formData.auxiliaryImages) == null
        ? undefined
        : t.length) || 0;
    const r = I.nQ - i;
    if (e.length > r) {
      this._notificationService.warning(
        u.Ay.t(
          "subject_upload_image_limit_toast",
          {
            num: I.nQ + 1,
          },
          "最多上传{num}张图片",
        ),
      );
      return e.slice(0, r);
    }
    return e;
  }
  _reportImportMaterial(e) {
    let t;
    const i = this._containerService.createInstance(k);
    i.setParams({
      actionType: "click",
      materialSource: e.materialSource,
      materialType: (t = e.materialType) != null ? t : "image",
      position: e.position,
      status: e.status,
    });
    i.report();
  }
  _reportSubjectAction(action, t) {
    const {
      subjectListShowFrom,
      subjectActionModal,
      subjectActionReportContext,
    } = this._subjectOperationStore;
    const s = this._containerService.createInstance(o_1);
    s.setParams(
      a._(
        {
          action,
          subjectListShowFrom,
          subjectId: t,
          modal: subjectActionModal,
        },
        subjectActionReportContext,
      ),
    );
    s.report();
  }
  _reportGenerateSubjectVoiceStatus(e) {
    const t = this._containerService.createInstance(p);
    t.setParams(e);
    t.report();
  }
  _uploadFromLocalAndApply(e, t, i) {
    return r
      ._(function* () {
        const r = yield this._imageUploadManager.uploadFromLocal(e);
        let a = 0;
        for (const [o, s] of r.entries()) {
          if (i != null) {
            i(o);
          }
          if (s.ok) {
            a += 1;
            yield t(s.value, o);
          }
        }
        return a;
      })
      .call(this);
  }
  _getFileCategory(e) {
    if (e.type.startsWith("video/")) {
      return "video";
    }
    if (e.type.startsWith("audio/")) {
      return "audio";
    }
    return "image";
  }
  _executeImageAudit(e, t) {
    return r
      ._(function* () {
        const uri = ty(e);
        if (!uri) {
          return oP;
        }
        const r =
          t === "main"
            ? (e) => {
                this._subjectOperationStore.setMainImageAudit(e);
              }
            : (e) => {
                this._subjectOperationStore.setAuxiliaryImageAudit(uri, e);
              };
        return this._executeMaterialPreAudit(
          [
            {
              materialType: b.Xx.Image,
              uri,
            },
          ],
          r,
          t === "main"
            ? () => this._isCurrentMainImageAuditTarget(uri)
            : () => this._hasCurrentAuxiliaryImageAuditTarget(uri),
        );
      })
      .call(this);
  }
  _executeVideoAudit(e) {
    return r
      ._(function* () {
        if (e.videoId) {
          return this._executeMaterialPreAudit(
            [
              {
                materialType: b.Xx.Video,
                uri: e.videoId,
              },
            ],
            (e) => this._subjectOperationStore.setVideoAudit(e),
            () => this._isCurrentVideoAuditTarget(e.videoId),
          );
        }
        return oP;
      })
      .call(this);
  }
  _executeAudioAudit(e, t) {
    return r
      ._(function* () {
        if (e.vid) {
          return this._executeMaterialPreAudit(
            [
              {
                materialType: b.Xx.Audio,
                uri: e.vid,
              },
            ],
            (e) => this._subjectOperationStore.setAudioAudit(e),
            t != null ? t : () => this._isCurrentAudioAuditTarget(e.vid),
          );
        }
        return oP;
      })
      .call(this);
  }
  _executeMaterialPreAudit(materialList, t, i) {
    return r
      ._(function* () {
        if (!Y) {
          if (t != null) {
            t(oP);
          }
          return oP;
        }
        if (t != null) {
          t(dH);
        }
        const r = yield this._executeAuditAndNormalize({
          scene: b.EZ.Subject,
          materialList,
        });
        if (i && !i()) {
          return oP;
        }
        if (r.auditDecision === "reject") {
          this._dreaminaAuditInteractionService.notifyAuditRejection();
        }
        if (t != null) {
          t(r);
        }
        return r;
      })
      .call(this);
  }
  _ensureAuditAcknowledgedForLocalUpload() {
    return r
      ._(function* () {
        if (Y) {
          yield this._dreaminaAuditInteractionService.ensureAuditAcknowledged();
        }
      })
      .call(this);
  }
  _executeAuditAndNormalize(e) {
    return r
      ._(function* () {
        let t;
        const i = yield this._dreaminaAuditService.executeAudit(e);
        this._reportSubjectAuditStatus(e.materialList, i);
        if (!i.ok) {
          this._dreaminaAuditInteractionService.notifyAuditRequestFailure();
          return N3;
        }
        if (!((t = i.value) == null ? undefined : t.length)) {
          return N3;
        }
        const [r] = i.value;
        if (r.auditDecision === b.Mw.Pass || r.auditDecision === b.Mw.Unknown) {
          return N3;
        }
        return {
          status: "done",
          auditDecision: "reject",
          reasonDetail: r.reasonDetail,
        };
      })
      .call(this);
  }
  _reportSubjectAuditStatus(e, t) {
    e.forEach((e, i) => {
      var r = this._containerService.createInstance(g);
      var a = t.ok ? t.value[i] : undefined;
      var failReason = t.ok ? (a == null ? undefined : a.reasonDetail) : t.msg;
      r.setParams({
        status:
          (a == null ? undefined : a.auditDecision) === b.Mw.Pass
            ? "success"
            : "fail",
        failReason,
        reviewType: "subject",
      });
      r.report();
    });
  }
  _clearImageAuditState() {
    this._subjectOperationStore.clearMainImageAudit();
    this._subjectOperationStore.clearAllAuxiliaryImageAudit();
  }
  _isCurrentMainImageAuditTarget(e) {
    return ty(this._subjectOperationStore.formData.mainImage) === e;
  }
  _hasCurrentAuxiliaryImageAuditTarget(e) {
    let t;
    return (
      (t = this._subjectOperationStore.formData.auxiliaryImages) != null
        ? t
        : []
    ).some((t) => ty(t) === e);
  }
  _isCurrentVideoAuditTarget(e) {
    let t;
    return (
      ((t = this._subjectOperationStore.formData.video) == null
        ? undefined
        : t.videoId) === e
    );
  }
  _isCurrentAudioAuditTarget(e) {
    let t;
    return (
      ((t = this._subjectOperationStore.formData.audio) == null
        ? undefined
        : t.vid) === e
    );
  }
  _isPendingAudioAuditTarget() {
    const { mediaType, audio } = this._subjectOperationStore.formData;
    return mediaType === "audio" && !audio;
  }
  _hasOtherAuxiliaryImageWithAuditKey(e, t) {
    let i;
    return (
      (i = this._subjectOperationStore.formData.auxiliaryImages) != null
        ? i
        : []
    ).some((i, r) => r !== e && ty(i) === t);
  }
  _applyVideoAndClearConflicts(video) {
    const { voiceList, selectedVoice } = this._subjectOperationStore.formData;
    const r = !!(
      (voiceList == null ? undefined : voiceList.length) || selectedVoice
    );
    this._clearImageAuditState();
    this._subjectOperationStore.clearAudioAudit();
    this._subjectOperationStore.clearAllVoiceAudit();
    this._subjectOperationStore.setFormData({
      video,
      mainImage: undefined,
      auxiliaryImages: undefined,
      audio: undefined,
      voiceList: undefined,
      selectedVoice: undefined,
    });
    if (r) {
      this._notificationService.info(
        u.Ay.t(
          "subject_switch_video_clear_tone",
          {},
          "切换为视频主体，原音色配置已清除",
        ),
      );
    }
  }
  _prepareAudioAndClearConflicts() {
    const { voiceList, selectedVoice } = this._subjectOperationStore.formData;
    const i = !!(
      (voiceList == null ? undefined : voiceList.length) || selectedVoice
    );
    this._clearImageAuditState();
    this._subjectOperationStore.clearVideoAudit();
    this._subjectOperationStore.clearAudioAudit();
    this._subjectOperationStore.clearAllVoiceAudit();
    this._subjectOperationStore.setFormData({
      audio: undefined,
      mainImage: undefined,
      auxiliaryImages: undefined,
      video: undefined,
      voiceList: undefined,
      selectedVoice: undefined,
    });
    if (i) {
      this._notificationService.info(
        u.Ay.t(
          "subject_switch_audio_clear_tone",
          {},
          "切换为音频主体，原音色配置已清除",
        ),
      );
    }
  }
  constructor(e, t, i, r, a, o, s) {
    super();
    this._subjectRepositoryManager = e;
    this._containerService = i;
    this._subjectService = r;
    this._notificationService = a;
    this._dreaminaAuditInteractionService = o;
    this._dreaminaAuditService = s;
    this._onSubjectDeleted = this._register(new l.v());
    this.onSubjectDeleted = this._onSubjectDeleted.event;
    this._onSubjectCreated = this._register(new l.v());
    this.onSubjectCreated = this._onSubjectCreated.event;
    this._onSubjectUpdated = this._register(new l.v());
    this.onSubjectUpdated = this._onSubjectUpdated.event;
    this._imageUploadManager = this._containerService.createInstance(w);
    this._videoUploadManager = this._containerService.createInstance(c_1);
    this._audioUploadManager = this._containerService.createInstance(P);
    this._subjectOperationStore = new h_1(t);
  }
}
B = s.Cg(
  [
    s.Qj(2, _._),
    s.Qj(3, z),
    s.Qj(4, h.Ot),
    s.Qj(5, R),
    s.Qj(6, n_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof SubjectRepositoryManager === "undefined"
        ? Object
        : SubjectRepositoryManager,
      Object,
      _._ === undefined ? Object : _._,
      z === undefined ? Object : z,
      h.Ot === undefined ? Object : h.Ot,
      R === undefined ? Object : R,
      n_1 === undefined ? Object : n_1,
    ]),
  ],
  B,
);
