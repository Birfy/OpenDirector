import a from "NY";
import i from "oa";
import n from "bk";
import o from "QWK";
import s from "Qey";
import l from "bE";
import c from "o7";
import d from "K8";
import { Ay } from "./module-w0L.js";
import h from "aEB";
import g from "Kt";
import m from "H26";
import p from "Ko";
import _ from "K4";
import v from "mir";
import f from "IHa";
import { z as z_1 } from "./module-DZZ.js";
import y from "Vo";
import M from "at";
import k from "b5";
import R from "JSz";
import I from "UH9";
import b from "hP";
import C from "GS";
import P from "FY";
import A from "r3";
import w from "TA";
import j from "aS";
import D from "zp";
import F from "A3X";
import L from "LLl";
import x from "WUK";
import E from "dHI";
import O from "Y9q";
import U from "JEp";
import V from "z8f";
import N from "BwB";
import z from "dw4";
import W from "r5O";
import B from "Gr4";
import Q from "gu";
import q from "sl";
import H from "ZHm";
import J from "ft";
import Y from "crc";
import X from "LKF";
import ea from "ai0";
import ei from "nZ";
import { A as A_1 } from "./module-Ar_2.js";
import es from "wZz";
import el from "rr";
import ec from "CoI";
class T extends c.jG {
  detectFaces(e, t) {
    return a
      ._(function* (imageUri, t) {
        const r =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        const { signal } = r;
        try {
          const i = t.map((t) => ({
            scene: P.P.VideoTemplateImageDetect,
            submitId: R.bz(),
            videoTemplateImageDetect: {
              image: {
                imageUri,
              },
              modelReqKey: t,
            },
          }));
          const n = new Map();
          i.forEach((e, r) => {
            n.set(e.submitId, t[r]);
          });
          const passedModels = [];
          const failedModels = [];
          if (i.length < 1) {
            return d.xz(-1, "All models failed to detect face");
          }
          if (signal != null) {
            signal.throwIfAborted();
          }
          const l = yield this._videoPreprocessingDataService.process(i, {
            signal,
            babiParam: C.OC({
              scenario: "image_video_generation",
              featureKey: "text_to_video",
              featureEntranceDetail: "".concat(I.F(), "-pre_process"),
              editType: "tool",
              toolId: b.M.VideoActionDriver,
            }),
          });
          if (!l.ok) {
            return l;
          }
          l.value.forEach((e) => {
            var modelKey = n.get(e.submitId);
            var r = e.scene === P.P.VideoTemplateImageDetect;
            var a = e.status === P.A.Success || e.status === P.A.PoorEffect;
            if (modelKey && r) {
              if (
                a &&
                ((i = e.videoTemplateImageDetectInfo) == null
                  ? undefined
                  : i.detectCode) === "0"
              ) {
                passedModels.push(modelKey);
              } else {
                var i;
                var l;
                var c;
                var failReason = this._getFaceDetectionFailReason(
                  e.status,
                  Number(
                    (l =
                      (c = e.videoTemplateImageDetectInfo) == null
                        ? undefined
                        : c.detectCode) != null
                      ? l
                      : 0,
                  ),
                );
                failedModels.push({
                  modelKey,
                  failReason,
                });
              }
            }
          });
          return d.TZ({
            passedModels,
            failedModels,
          });
        } catch (error) {
          return k.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getFaceDetectionFailReason(e, t) {
    if (e === P.A.TnsFail) {
      return "AuditFailed";
    }
    if ((t >= 101001 && t <= 201001) || t === 204004) {
      return "DetectionFailed";
    }
    if (t >= 204001 && t <= 204003) {
      return "NoFaceDetected";
    }
    if (t === 204005) {
      return "ImageTooSmall";
    }
    if (t === 204006) {
      return "ImageTooLarge";
    }
    return "NetworkError";
  }
  constructor(e) {
    super();
    this._videoPreprocessingDataService = e;
  }
}
T = o.Cg(
  [
    o.Qj(0, A.A),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [A.A === undefined ? Object : A.A]),
  ],
  T,
);
class G extends c.jG {
  get _dataStore() {
    return this._actionCopyGeneratorManager.data;
  }
  cancelReferenceCharacterImport() {
    if (this._referenceCharacterImportAbortController) {
      this.characterProcessProgressManager.stop();
      this._referenceCharacterImportAbortController.abort();
      this._disposeReferenceCharacterImportAbortController();
    }
  }
  _validateReferenceImage(e) {
    return a
      ._(function* () {
        const t = yield v.A([e]);
        if (t.ok) {
          return f.T({
            materials: [e],
            limits:
              this._actionCopyGeneratorManager.metadata
                .characterValidationLimits,
          });
        }
        return t;
      })
      .call(this);
  }
  _importReferenceImage(e) {
    return a
      ._(function* () {
        let t;
        const { uri } = e;
        if (!uri) {
          return d.xz(-1, "reference image uri is required");
        }
        this._actionCopyGeneratorManager.resetReferenceImage();
        this._actionCopyGeneratorManager.setReferenceImage(e);
        this.characterProcessProgressManager.start();
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetecting: true,
          faceDetectionFailReason: undefined,
        });
        const a = yield this._imageDetector.detectFaces(
          uri,
          this._actionCopyGeneratorManager.metadata.modelKeys,
        );
        this.characterProcessProgressManager.stop();
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetecting: false,
        });
        if (a.ok) {
          if (a.value.passedModels.length) {
            this._actionCopyGeneratorManager.updateReferenceImageModelDisabled(
              a.value.failedModels.map((e) => e.modelKey),
            );
            this._disposeReferenceCharacterImportAbortController();
            return d.nj();
          }
          this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
            faceDetectionFailReason:
              (t = a.value.failedModels.find(
                (e) => e.modelKey === this._dataStore.modelKey,
              )) == null
                ? undefined
                : t.failReason,
          });
          return d.xz(-1, "detect faces in reference image error", {
            referenceImageProcessStatus:
              this._dataStore.referenceImageProcessStatus,
          });
        }
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetectionFailReason: "NetworkError",
        });
        return d.xz(-1, "detect faces in reference image error", {
          referenceImageProcessStatus:
            this._dataStore.referenceImageProcessStatus,
        });
      })
      .call(this);
  }
  _importReferenceImageFromLocal(e) {
    return a
      ._(function* () {
        let t;
        const signal = this._registerReferenceCharacterImportAbortController();
        this._actionCopyGeneratorManager.resetReferenceImage();
        this._actionCopyGeneratorManager.updateReferenceImage(e);
        this.characterProcessProgressManager.start();
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          uploading: true,
          uploadError: false,
        });
        const a = yield e.resolveUri({
          signal,
        });
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          uploading: false,
          uploadError: !a,
        });
        if (!a) {
          this.characterProcessProgressManager.stop();
          return d.xz(-1, "upload reference image error", {
            signal,
            referenceImageProcessStatus:
              this._dataStore.referenceImageProcessStatus,
          });
        }
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetecting: true,
          faceDetectionFailReason: undefined,
        });
        const i = yield this._imageDetector.detectFaces(
          a,
          this._actionCopyGeneratorManager.metadata.modelKeys,
          {
            signal,
          },
        );
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetecting: false,
        });
        this.characterProcessProgressManager.stop();
        if (i.ok) {
          if (i.value.passedModels.length) {
            this._actionCopyGeneratorManager.updateReferenceImageModelDisabled(
              i.value.failedModels.map((e) => e.modelKey),
            );
            this._disposeReferenceCharacterImportAbortController();
            return d.nj();
          }
          this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
            faceDetectionFailReason:
              (t = i.value.failedModels.find(
                (e) => e.modelKey === this._dataStore.modelKey,
              )) == null
                ? undefined
                : t.failReason,
          });
          return d.xz(-1, "detect faces in local image error", {
            signal,
            referenceImageProcessStatus:
              this._dataStore.referenceImageProcessStatus,
          });
        }
        this._actionCopyGeneratorManager.updateReferenceImageProcessStatus({
          faceDetectionFailReason: "NetworkError",
        });
        return d.xz(-1, "detect faces in local image error", {
          signal,
          referenceImageProcessStatus:
            this._dataStore.referenceImageProcessStatus,
        });
      })
      .call(this);
  }
  _registerReferenceCharacterImportAbortController() {
    this.cancelReferenceCharacterImport();
    const e = new AbortController();
    const { signal } = e;
    this._referenceCharacterImportAbortController = e;
    return signal;
  }
  _disposeReferenceCharacterImportAbortController() {
    this._referenceCharacterImportAbortController = null;
  }
  constructor(e, t, r) {
    var i;
    super();
    i = this;
    this._actionCopyGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this._referenceCharacterImportAbortController = null;
    this.characterProcessProgressManager = this._register(
      this._containerService.createInstance(y.a, {
        estimatedDuration: 6000,
      }),
    );
    this._imageDetector = this._register(
      this._containerService.createInstance(T),
    );
    this.importReferenceCharacterFromLocal = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return a._(function* () {
        let r;
        const {
          reportParams: {
            importMaterialParams: { actionType = "click" } = {},
          } = {},
        } = t;
        const { acceptedFiles } = p.g(
          i._containerService,
          [e],
          i._actionCopyGeneratorManager.metadata.acceptedCharacterFileTypes,
        );
        if (acceptedFiles.length) {
          const o = i._containerService.createInstance(M.Vl, {
            file: e,
          });
          const s = yield i.importReferenceImage(o);
          const { reportManager } = i._actionCopyGeneratorManager;
          if (s.ok) {
            return void reportManager.reportImportCharacterMaterial({
              status: "success",
              actionType,
            });
          }
          const c = s.errorInfo;
          reportManager.reportImportCharacterMaterial(
            (c == null || (r = c.signal) == null ? undefined : r.aborted)
              ? {
                  status: "cancel",
                  actionType,
                  failReason: "cancel import character",
                }
              : {
                  status: "fail",
                  actionType,
                  failReason: s.msg,
                },
          );
        }
      })();
    };
    this.removeReferenceImage = () => {
      var { reportManager } = this._actionCopyGeneratorManager;
      this.cancelReferenceCharacterImport();
      reportManager.reportDeleteImage();
      this._actionCopyGeneratorManager.resetReferenceImage();
    };
    this.importReferenceImage = (e) =>
      a._(function* () {
        let t;
        const r = yield i._validateReferenceImage(e);
        if (!r.ok) {
          i._notificationService.warning(r.msg);
          return d.xz(-1, r.msg);
        }
        const { uri, file } = e;
        const o =
          !uri && file
            ? yield i._importReferenceImageFromLocal(e)
            : yield i._importReferenceImage(e);
        if (o.ok) {
          return o;
        }
        const o_errorInfo = o.errorInfo;
        if (
          o_errorInfo == null || (t = o_errorInfo.signal) == null
            ? undefined
            : t.aborted
        ) {
          return o;
        }
        const referenceImageErrorMessage =
          i._dataStore.referenceImageErrorMessage;
        i._notificationService.warning(referenceImageErrorMessage);
        i._actionCopyGeneratorManager.resetReferenceImage();
        return d.xz(
          -1,
          "import character error: ".concat(referenceImageErrorMessage),
          o_errorInfo,
        );
      })();
  }
}
G = o.Cg(
  [
    o.Qj(1, g._),
    o.Qj(2, h.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ActionCopyGeneratorManager === "undefined"
        ? Object
        : ActionCopyGeneratorManager,
      g._ === undefined ? Object : g._,
      h.Ot === undefined ? Object : h.Ot,
    ]),
  ],
  G,
);
class K extends c.jG {
  applyPrompt() {}
  applyRichPrompt() {
    return Promise.resolve(x.P());
  }
  reeditGenerationDataInRecord(e) {
    if (!j.g(e) || !D.L(e)) {
      return Promise.resolve(d.nj());
    }
    const t = this._getGeneratorDataByInputParams(e.originalInput);
    this._actionCopyGeneratorManager.setData(t);
    return Promise.resolve(d.nj());
  }
  reeditGenerationDataInWorkDetail(e) {
    if (!F.s(e)) {
      return d.nj();
    }
    const { aigcImageParams } = e;
    const { text2videoParams } = aigcImageParams != null ? aigcImageParams : {};
    const a = this._getGeneratorDataByInputParams(text2videoParams);
    this._actionCopyGeneratorManager.setData(a);
    return d.nj();
  }
  importReferencesInRecord(e, t) {
    return a
      ._(function* () {
        if (!j.g(e)) {
          return d.nj();
        }
        let r;
        const { originalInput } = e;
        const [i] =
          (r =
            originalInput == null ? undefined : originalInput.videoGenInputs) !=
          null
            ? r
            : [];
        const { v2vOpt } = i;
        const { videoTemplate } = v2vOpt != null ? v2vOpt : {};
        if (t === 1) {
          const s = this._getActionTemplateByVideoTemplate(videoTemplate);
          if (s) {
            yield this._actionCopyGeneratorManager.importActionTemplate(s);
          } else {
            this._actionCopyGeneratorManager.resetActionTemplate();
          }
          return d.nj();
        }
        const l = this._getReferenceImageByVideoTemplate(videoTemplate);
        if (l) {
          yield this._actionCopyGeneratorManager.characterManager.importReferenceImage(
            l,
          );
        } else {
          this._actionCopyGeneratorManager.characterManager.cancelReferenceCharacterImport();
          this._actionCopyGeneratorManager.resetReferenceImage();
        }
        return d.nj();
      })
      .call(this);
  }
  importRecordAsReference(e, t, r) {
    return a
      ._(function* () {
        const a = E.R(this._containerService, e, t);
        if (a) {
          yield this.importReferenceResources([a], r);
        }
        return d.nj();
      })
      .call(this);
  }
  importReferenceResources(e, t) {
    return a
      ._(function* () {
        const r = O.I(this._containerService, e, ["image", "video"]);
        if (!r.length) {
          return d.nj();
        }
        const [a] = r;
        if (a.type === "video") {
          if (t !== 0) {
            if (
              (yield this._actionCopyGeneratorManager.addActionTemplateResource(
                a,
              )).ok
            ) {
              U.j([a], this._actionCopyGeneratorManager.reportManager);
            }
          }
          return d.nj();
        }
        if (!(typeof t === "number" && t > 0)) {
          if (
            (yield this._actionCopyGeneratorManager.characterManager.importReferenceImage(
              a,
            )).ok
          ) {
            U.j([a], this._actionCopyGeneratorManager.reportManager);
          }
        }
        return d.nj();
      })
      .call(this);
  }
  importWorkDetailAsReference(e) {
    if (!L.Y(e)) {
      return d.nj();
    }
    const { image } = e;
    const { largeImages } = image;
    if (!(largeImages == null ? undefined : largeImages.length)) {
      return d.nj();
    }
    const [a] = largeImages;
    this._actionCopyGeneratorManager.characterManager.importReferenceImage(
      V.h(this._containerService, a),
    );
    return d.nj();
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return d.nj();
    }
    var t;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const a = videoGenInputs.find((e) => !!e.firstFrameImage);
    const i = a == null ? undefined : a.firstFrameImage;
    if (i) {
      this._actionCopyGeneratorManager.characterManager.importReferenceImage(
        V.h(this._containerService, i),
      );
    }
    return d.nj();
  }
  _getGeneratorDataByInputParams(e) {
    let t;
    const [r] = (t = e == null ? undefined : e.videoGenInputs) != null ? t : [];
    const { v2vOpt } = r;
    const { videoTemplate } = v2vOpt != null ? v2vOpt : {};
    return {
      referenceImage: this._getReferenceImageByVideoTemplate(videoTemplate),
      actionTemplate: this._getActionTemplateByVideoTemplate(videoTemplate),
      modelReqKey: e == null ? undefined : e.modelReqKey,
    };
  }
  _getActionTemplateByVideoTemplate(e) {
    let t;
    const { videoInfo, videoTemplateItem } = e != null ? e : {};
    const { commonAttr, extra } =
      videoTemplateItem != null ? videoTemplateItem : {};
    const o = !!(extra == null ? undefined : extra.videoTemplateOfficial);
    const presetTemplateId = o
      ? commonAttr == null
        ? undefined
        : commonAttr.id
      : undefined;
    if (
      videoInfo &&
      (o
        ? presetTemplateId
        : (t = videoInfo.originVideo) == null
          ? undefined
          : t.videoUrl)
    ) {
      return {
        resource: N.b(
          this._containerService,
          videoInfo,
          o
            ? {
                uri: undefined,
              }
            : undefined,
        ),
        presetTemplateId,
      };
    }
  }
  _getReferenceImageByVideoTemplate(e) {
    let t;
    const { imageInfo } = e != null ? e : {};
    if (imageInfo) {
      const { imageUri, imageUrl, coverUrlMap } = imageInfo;
      const o =
        (t = w.HM({
          width: 1080,
          height: 1080,
          resolutionUrlMap: coverUrlMap,
        })) != null
          ? t
          : imageUrl;
      if (imageUri || o) {
        return V.h(this._containerService, imageInfo, {
          url: o != null ? o : "",
        });
      }
    }
  }
  constructor(e, t) {
    super();
    this._actionCopyGeneratorManager = e;
    this._containerService = t;
  }
}
K = o.Cg(
  [
    o.Qj(1, g._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ActionCopyGeneratorManager === "undefined"
        ? Object
        : ActionCopyGeneratorManager,
      g._ === undefined ? Object : g._,
    ]),
  ],
  K,
);
const Z = {
  uploading: false,
  uploadError: false,
  faceDetecting: false,
  faceDetectionFailReason: undefined,
};
class $ {
  get isPristine() {
    return !this.referenceImage && !this.actionTemplate;
  }
  get referenceImageErrorMessage() {
    const { faceDetectionFailReason = "NetworkError", uploadError } =
      this.referenceImageProcessStatus;
    if (uploadError) {
      return s.Ay.t("web_network_error_try_again", {}, "网络异常，请稍后重试");
    }
    return {
      NetworkError: s.Ay.t(
        "web_network_error_try_again",
        {},
        "网络异常，请稍后重试",
      ),
      AuditFailed: s.Ay.t(
        "web_image_violates_community_guidelines_toast",
        {},
        "你上传的图片不符合平台规则，请修改后重试",
      ),
      DetectionFailed: s.Ay.t(
        "web_network_error_try_again",
        {},
        "网络异常，请稍后重试",
      ),
      NoFaceDetected: s.Ay.t(
        "web_new_avatar_micmic_toast_upload_character_fail",
        {},
        "上传失败，图片中未检测到人物",
      ),
      ImageTooSmall: s.Ay.t(
        "web_new_avatar_micmic_toast_image_too_small",
        {},
        "图片分辨率过小",
      ),
      ImageTooLarge: s.Ay.t(
        "web_new_avatar_micmic_toast_image_too_large",
        {},
        "请上传 20MB 内，分辨率不超过 4K 的图片",
      ),
    }[faceDetectionFailReason];
  }
  get presetTemplateId() {
    if (this.actionTemplate) {
      return this.presetTemplateIdByReferenceId[this.actionTemplate.id];
    }
  }
  get actionTemplateSourceType() {
    if (!this.actionTemplate || this.presetTemplateId) {
      return "preset";
    }
    return "local-file";
  }
  get actionTemplateDuration() {
    let e;
    const t = (e = this.actionTemplate) == null ? undefined : e.duration;
    if (t) {
      if (this.presetTemplateId) {
        return t;
      }
      return Math.round(t);
    }
  }
  get actionTemplateUrl() {
    let e;
    return ((e = this.actionTemplate) == null ? undefined : e.url) || undefined;
  }
  get canResetData() {
    let e;
    return (
      typeof ((e = this.referenceImage) == null ? undefined : e.uri) ===
        "string" ||
      !!this.actionTemplate ||
      !W.A(this.referenceImageProcessStatus, Z)
    );
  }
  get validationResult() {
    let e;
    let t;
    if (
      ((e = this.referenceImage) == null ? undefined : e.uri) &&
      !this.referenceImageProcessStatus.faceDetecting
    ) {
      if (
        this.presetTemplateId ||
        ((t = this.actionTemplate) == null ? undefined : t.url)
      ) {
        return d.nj();
      }
      return d.xz(
        -1,
        s.Ay.t(
          "web_avatar_micmic_gen_disabled_hover_choose_motion",
          {},
          "请添加动作模版",
        ),
      );
    }
    return d.xz(
      -1,
      s.Ay.t(
        "web_avatar_micmic_gen_disabled_hover_add_image",
        {},
        "请添加角色图片",
      ),
    );
  }
  get modelConfig() {
    const {
      metadata: { models },
    } = this._actionCopyGeneratorManager;
    return models.find((e) => e.key === this.modelKey);
  }
  get commercialSceneOptions() {
    let e;
    return B.I({
      scene: Q.Sk.ActionCopy,
      modelReqKey: this.modelKey,
      videoDuration: (e = this.actionTemplateDuration) != null ? e : 0,
      reportParams: i._(
        {
          enterSource: J.k.Generate,
          vipSource: q.d.Generate,
          useVipFunctionDetailsReporterHoc: true,
        },
        H.YQ(
          this._actionCopyGeneratorManager.reportManager.resourceReportParams,
        ),
      ),
    });
  }
  updateReferenceImageModelDisabled(e) {
    this.referenceImageModelDisabledMap = e;
  }
  setReferenceImage(e) {
    this.referenceImage = e;
  }
  setActionTemplate(e) {
    const { resource, presetTemplateId } = e;
    this.actionTemplate = resource;
    this.presetTemplateIdByReferenceId = presetTemplateId
      ? {
          [resource.id]: presetTemplateId,
        }
      : {};
  }
  setDraftContent(e) {
    this.draftContent = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  updateReferenceImageProcessStatus(e) {
    this.referenceImageProcessStatus = i._(
      {},
      this.referenceImageProcessStatus,
      e,
    );
  }
  setData(e) {
    const { referenceImage, actionTemplate, modelReqKey } = e;
    this.resetData();
    this.setModelKey(modelReqKey != null ? modelReqKey : "");
    if (actionTemplate) {
      this.setActionTemplate(actionTemplate);
    }
    if (referenceImage) {
      this.referenceImage = referenceImage;
    }
  }
  resetReferenceImage() {
    this.referenceImage = undefined;
    this.referenceImageProcessStatus = Z;
  }
  resetActionTemplate() {
    this.actionTemplate = undefined;
    this.presetTemplateIdByReferenceId = {};
  }
  resetDraftContent() {
    this.draftContent = undefined;
  }
  resetReferenceImageModelDisabled() {
    this.referenceImageModelDisabledMap = {};
  }
  resetData() {
    this.resetReferenceImage();
    this.resetActionTemplate();
    this.resetDraftContent();
    this.resetReferenceImageModelDisabled();
  }
  constructor(e) {
    this._actionCopyGeneratorManager = e;
    this.modelKey = "";
    this.referenceImage = undefined;
    this.actionTemplate = undefined;
    this.presetTemplateIdByReferenceId = {};
    this.referenceImageProcessStatus = Z;
    this.referenceImageModelDisabledMap = {};
    z.l_(this);
  }
}
const ee = Y.A(20);
const et = Y.A(50);
class er {
  get characterTooltipContent() {
    const {
      data: { referenceImageProcessStatus },
      characterManager,
    } = this._actionCopyGeneratorManager;
    const { uploading, faceDetecting } = referenceImageProcessStatus;
    const { characterProcessProgressManager } = characterManager;
    const {
      data: { progress },
    } = characterProcessProgressManager;
    if (uploading || faceDetecting) {
      return s.Ay.t(
        "web_avatar_upload_detect_progress",
        {
          number: Math.floor(progress),
        },
        "角色检测中{number}%",
      );
    }
  }
  get characterTooltipProps() {
    return {
      content: this.characterTooltipContent,
    };
  }
  get models() {
    if (this._models.length) {
      return this._models;
    }
    return [this.fallbackModel];
  }
  get modelOptions() {
    const {
      data: { referenceImageModelDisabledMap },
    } = this._actionCopyGeneratorManager;
    return this.models.map((t) => ({
      label: t.name,
      value: t.key,
      disabled:
        referenceImageModelDisabledMap == null
          ? undefined
          : referenceImageModelDisabledMap[t.key],
      extra: {
        coverUrl: t.coverUrl,
        iconUrl: t.iconUrl,
        description: t.description,
        source: t.source,
        tag: t.iconTag,
        tooltipProps: {
          content: "该模型暂不可用",
          disabled: !(referenceImageModelDisabledMap == null
            ? undefined
            : referenceImageModelDisabledMap[t.key]),
        },
        commercial: {
          sceneOptions: B.I({
            scene: Q.Sk.ActionCopyModelSwitch,
            videoDuration: 0,
            modelReqKey: t.key,
          }),
        },
      },
    }));
  }
  get modelKeys() {
    return this.models.map((e) => e.key);
  }
  get actionTemplates() {
    const { data } = this._actionTemplates;
    const t = data.findIndex(
      (e) => e.commonAttr.id === this.pinnedActionTemplateId,
    );
    if (t === -1) {
      return this._actionTemplates;
    }
    return n._(i._({}, this._actionTemplates), {
      data: [data[t], ...data.slice(0, t), ...data.slice(t + 1)],
    });
  }
  get submitButtonDisabled() {
    const {
      data: { validationResult },
    } = this._actionCopyGeneratorManager;
    return !validationResult.ok;
  }
  get submitButtonTooltipProps() {
    const {
      data: { validationResult },
    } = this._actionCopyGeneratorManager;
    return {
      content: validationResult.msg,
    };
  }
  setShouldSkipActionUploadConfirmation(e) {
    this.shouldSkipActionUploadConfirmation = e;
  }
  setModels(e) {
    this._models = e;
  }
  updateActionTemplates(e) {
    this._actionTemplates = i._({}, this._actionTemplates, e);
  }
  pinActionTemplateOnTop(e) {
    this.pinnedActionTemplateId = e;
  }
  setActionTemplatePanelTriggerProps(e) {
    this.actionTemplatePanelTriggerProps = e;
  }
  setIsModelListVisible(e) {
    this.isModelListVisible = e;
  }
  constructor(e) {
    this._actionCopyGeneratorManager = e;
    this.fallbackModel = X.$;
    this._models = [];
    this._actionTemplates = {
      data: [],
      loading: false,
      error: null,
    };
    this.shouldSkipActionUploadConfirmation = false;
    this.acceptedCharacterFileTypes = {
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      "image/png": [".png"],
    };
    this.acceptedActionFileTypes = {
      "video/mp4": [".mp4"],
      "video/quicktime": [".mov"],
    };
    this.characterValidationLimits = {
      materialLimits: {
        image: {
          maxFileSize: ee,
        },
      },
    };
    this.actionTemplateValidationLimits = {
      materialLimits: {
        video: {
          maxFileSize: et,
          minDuration: 1,
        },
      },
    };
    this.maxActionVideoDuration = 30;
    this.pinnedActionTemplateId = undefined;
    this.actionTemplatePanelTriggerProps = {
      clickOutsideToClose: true,
    };
    this.isModelListVisible = false;
    z.l_(this);
  }
}
class eo extends ei.j {
  constructor(e, t) {
    super(t);
    this._actionCopyGeneratorManager = e;
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(A_1, this.commonParams);
      t.setParams({
        action: "add_image",
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(A_1, this.commonParams);
      t.setParams({
        action: "add_video",
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportSelectActionDriverMode = () => {
      var e;
      var t = this._containerService.createInstance(A_1, this.commonParams);
      t.setParams({
        action: "select_action_driver_mode",
        modelName:
          (e = this._actionCopyGeneratorManager.metadata.models.find(
            (e) => e.key === this._actionCopyGeneratorManager.data.modelKey,
          )) == null
            ? undefined
            : e.name,
      });
      t.report();
    };
    this.reportDeleteImage = () => {
      var e = this._containerService.createInstance(A_1, this.commonParams);
      e.setParams({
        action: "delete_image",
      });
      e.report();
    };
    this.reportTemplatePanelShow = () => {
      var e = this._containerService.createInstance(A_1, this.commonParams);
      e.setParams({
        action: "template_panel_show",
      });
      e.report();
    };
    this.reportAddTemplate = () => {
      var e = this._containerService.createInstance(A_1, this.commonParams);
      e.setParams({
        action: "add_template",
      });
      e.report();
    };
    this.reportDeleteTemplate = () => {
      var e = this._containerService.createInstance(A_1, this.commonParams);
      e.setParams({
        action: "delete_template",
      });
      e.report();
    };
    this.reportSelectTemplate = (videoActionTemplateId) => {
      var t;
      var {
        metadata: { actionTemplates },
      } = this._actionCopyGeneratorManager;
      var videoActionTemplateName =
        (t = actionTemplates.data.find(
          (t) => t.commonAttr.id === videoActionTemplateId,
        )) == null
          ? undefined
          : t.commonAttr.title;
      var i = this._containerService.createInstance(A_1, this.commonParams);
      i.setParams({
        action: "select_template",
        videoActionTemplateId,
        videoActionTemplateName,
      });
      i.report();
    };
    this.reportImportCharacterMaterial = (e) => {
      var t = this._containerService.createInstance(ea.k);
      t.setParams(
        i._(
          {
            position: "generation",
            modal: "video_action_driver",
            materialSource: "local",
            materialType: "image",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportImportActionTemplateMaterial = (e) => {
      var t = this._containerService.createInstance(ea.k);
      t.setParams(
        i._(
          {
            position: "action_template",
            materialSource: "local",
            materialType: "video",
          },
          e,
        ),
      );
      t.report();
    };
  }
}
eo = o.Cg(
  [
    o.Qj(1, g._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ActionCopyGeneratorManager === "undefined"
        ? Object
        : ActionCopyGeneratorManager,
      g._ === undefined ? Object : g._,
    ]),
  ],
  eo,
);
class ed extends c.jG {
  _submit() {
    return a
      ._(function* () {
        let e;
        const {
          data: {
            referenceImage,
            actionTemplate,
            actionTemplateSourceType,
            presetTemplateId,
            actionTemplateDuration,
            modelKey,
          },
          reportManager: { commonParams },
        } = this._actionCopyGeneratorManager;
        const coverUrl =
          actionTemplate == null ? undefined : actionTemplate.coverUrl;
        const u =
          actionTemplateSourceType === "local-file"
            ? {
                videoInfo: {
                  videoId:
                    (e =
                      actionTemplate == null
                        ? undefined
                        : actionTemplate.uri) != null
                      ? e
                      : "",
                  coverUrl,
                  originVideo: {
                    videoUrl:
                      actionTemplate == null ? undefined : actionTemplate.url,
                  },
                  duration: actionTemplateDuration,
                  file:
                    actionTemplate == null ? undefined : actionTemplate.file,
                },
              }
            : {
                videoTemplateItemId: presetTemplateId,
                videoInfo: {
                  videoId: "",
                  coverUrl,
                  duration: actionTemplateDuration,
                },
              };
        const h =
          yield this._contentGeneratorTaskFeatureContainerService.getInstance();
        const { commercialSceneOptions } =
          this._actionCopyGeneratorManager.data;
        const m = yield this._workspaceService.ensureWorkspaceId();
        if (!m.ok) {
          return m;
        }
        const m_value = m.value;
        const _ = {
          input: {
            videoGenInputs: {
              v2vOpt: {
                videoTemplate: i._(
                  {
                    imageInfo: referenceImage
                      ? ec.q(referenceImage)
                      : undefined,
                  },
                  u,
                ),
              },
            },
            modelReqKey: modelKey,
          },
          workspaceId: m_value,
          isRegenerate: false,
          taskPayload: {
            taskExtra: n._(i._({}, commonParams), {
              promptSource: undefined,
              sceneOptions: JSON.stringify(commercialSceneOptions),
            }),
          },
        };
        return h.createAIGCActionCopyTask(_);
      })
      .call(this);
  }
  constructor(e, t, r) {
    var i;
    super();
    i = this;
    this._actionCopyGeneratorManager = e;
    this._contentGeneratorTaskFeatureContainerService = t;
    this._workspaceService = r;
    this.submit = () =>
      a._(function* () {
        const e = yield i._submit();
        if (e.ok) {
          i._actionCopyGeneratorManager.reportManager.resetResourceReportParams();
        }
        if (e.ok) {
          return d.TZ([e.value]);
        }
        return e;
      })();
  }
}
ed = o.Cg(
  [
    o.Qj(1, es.L),
    o.Qj(2, el.D),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ActionCopyGeneratorManager === "undefined"
        ? Object
        : ActionCopyGeneratorManager,
      es.L === undefined ? Object : es.L,
      el.D === undefined ? Object : el.D,
    ]),
  ],
  ed,
);
class eu extends c.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get _actionUploadConfirmationStorageKey() {
    const e = "skip-action-upload-confirmation";
    if (this._accountService.hasLogin) {
      return "".concat(e, "-").concat(this._accountService.userProfile.uid);
    }
    return "".concat(e, "-guest");
  }
  preloadMetadata() {
    this.fetchActionTemplates();
  }
  syncModelConfig(e) {
    const { data, loading } = e;
    if (!loading && (data == null ? undefined : data.ok)) {
      const {
        value: { modelList, defaultModel, disabled },
      } = data;
      this._metadataStore.setIsModelListVisible(!disabled);
      this._metadataStore.setModels(modelList);
      if (defaultModel) {
        this._metadataStore.fallbackModel = defaultModel;
        this.setModel(defaultModel.key);
      }
    }
  }
  updateReferenceImageProcessStatus(e) {
    this._dataStore.updateReferenceImageProcessStatus(e);
  }
  updateReferenceImageModelDisabled(e) {
    const t = this.metadata.models.map((e) => e.key);
    const r = new Set(e);
    const a = {};
    t.forEach((e) => {
      a[e] = r.has(e);
    });
    this._dataStore.updateReferenceImageModelDisabled(a);
    if (r.has(this._dataStore.modelKey)) {
      const i = t.find((e) => !r.has(e));
      if (i) {
        this.setModel(i);
      }
    }
  }
  resetReferenceImageModelDisabled() {
    this._dataStore.resetReferenceImageModelDisabled();
  }
  setModel(e) {
    const { models } = this.metadata;
    const r = models.find((t) => t.key === e);
    if (r) {
      this._dataStore.setModelKey(r.key);
    }
  }
  setReferenceImage(e) {
    this.characterManager.cancelReferenceCharacterImport();
    this._dataStore.setReferenceImage(e);
  }
  updateReferenceImage(e) {
    this._dataStore.setReferenceImage(e);
  }
  setActionTemplate(e) {
    this._dataStore.resetActionTemplate();
    this._dataStore.setActionTemplate(e);
  }
  resetActionTemplate() {
    this._dataStore.resetActionTemplate();
  }
  _validateActionTemplate(e) {
    return a
      ._(function* () {
        const t = yield v.A([e]);
        if (t.ok) {
          return f.T({
            materials: [e],
            limits: this.metadata.actionTemplateValidationLimits,
          });
        }
        return t;
      })
      .call(this);
  }
  _warnIfActionTemplateOverlong(e) {
    if (!(e.duration <= this.metadata.maxActionVideoDuration)) {
      this._notificationService.warning(
        s.Ay.t(
          "web_new_avatar_micmic_toast_motion_too_long",
          {},
          "视频长度过长，将自动裁剪至 30s",
        ),
      );
    }
  }
  setData(e) {
    this.characterManager.cancelReferenceCharacterImport();
    let t;
    const { modelKeys } = this.metadata;
    const { modelReqKey, actionTemplate, referenceImage } = e;
    const o =
      (t = modelKeys.find((e) => e === modelReqKey)) != null
        ? t
        : this._metadataStore.fallbackModel.key;
    this._dataStore.setData({
      modelReqKey: o,
      actionTemplate: undefined,
      referenceImage: undefined,
    });
    if (actionTemplate) {
      this.importActionTemplate(actionTemplate);
    }
    if (referenceImage) {
      this.characterManager.importReferenceImage(referenceImage);
    }
  }
  resetData() {
    this.characterManager.cancelReferenceCharacterImport();
    this._dataStore.resetData();
  }
  fetchActionTemplates() {
    return a
      ._(function* () {
        this._metadataStore.updateActionTemplates({
          loading: true,
        });
        const e = yield this._actionCopyDataService.fetchActionTemplates();
        if (!e.ok) {
          this._metadataStore.updateActionTemplates({
            loading: false,
            error: e.findJsError(),
          });
          return [];
        }
        const t = e.value.value.list.map((e) =>
          n._(i._({}, e), {
            video: n._(i._({}, e.video), {
              duration: Math.round(e.video.durationMs / m.K),
            }),
          }),
        );
        this._metadataStore.updateActionTemplates({
          loading: false,
          data: t,
        });
        return t;
      })
      .call(this);
  }
  pinActionTemplateOnTop(e) {
    this._metadataStore.pinActionTemplateOnTop(e);
  }
  constructor(e, t, r, i) {
    var n;
    super();
    n = this;
    this._containerService = e;
    this._actionCopyDataService = t;
    this._accountService = r;
    this._notificationService = i;
    this.dataAdapter = this._register(
      this._containerService.createInstance(K, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(eo, this),
    );
    this.characterManager = this._register(
      this._containerService.createInstance(G, this),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(ed, this),
    );
    this._metadataStore = new er(this);
    this._dataStore = new $(this);
    this.switchModel = (e) => {
      this.setModel(e);
      this.reportManager.reportSelectActionDriverMode();
    };
    this.skipActionUploadConfirmation = () => {
      Ay.set(this._actionUploadConfirmationStorageKey, true);
      this._metadataStore.setShouldSkipActionUploadConfirmation(true);
    };
    this.resetReferenceImage = () => {
      var { referenceImage } = this._dataStore;
      this.reportManager.deleteReferenceParams(
        referenceImage == null ? undefined : referenceImage.uri,
      );
      this._dataStore.resetReferenceImage();
      this.resetReferenceImageModelDisabled();
    };
    this.selectPresetTemplate = (e) => {
      var {
        commonAttr: { id },
        video: {
          originVideo: { videoUrl, width, height },
          duration,
          coverUrl,
        },
      } = e;
      this.reportManager.reportSelectTemplate(id);
      this._dataStore.setActionTemplate({
        resource: this._containerService.createInstance(_.p, {
          url: videoUrl,
          coverUrl,
          width,
          height,
          duration,
        }),
        presetTemplateId: id,
      });
    };
    this.importActionTemplateFromLocal = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return a._(function* () {
        const {
          reportParams: {
            importMaterialParams: { actionType = "click" } = {},
          } = {},
        } = t;
        const { acceptedFiles } = p.g(
          n._containerService,
          [e],
          n.metadata.acceptedActionFileTypes,
        );
        if (acceptedFiles.length) {
          const i = n._containerService.createInstance(_.p, {
            file: e,
          });
          const o = yield n.addActionTemplateResource(i);
          n.reportManager.reportImportActionTemplateMaterial(
            o.ok
              ? {
                  status: "success",
                  actionType,
                }
              : {
                  status: "fail",
                  actionType,
                  failReason: o.msg,
                },
          );
        }
      })();
    };
    this.addActionTemplateResource = (resource) =>
      a._(function* () {
        const t = yield n._validateActionTemplate(resource);
        if (t.ok) {
          n._warnIfActionTemplateOverlong(resource);
          n.setActionTemplate({
            resource,
          });
          resource.resolveUri();
          return d.nj();
        }
        n._notificationService.warning(t.msg);
        return t;
      })();
    this.importActionTemplate = (e) => {
      if (e.presetTemplateId) {
        this.setActionTemplate(e);
        return Promise.resolve(d.nj());
      }
      return this.addActionTemplateResource(e.resource);
    };
    this.removeActionTemplate = () => {
      this.reportManager.reportDeleteTemplate();
      this._dataStore.resetActionTemplate();
    };
    this.setActionTemplatePanelTriggerProps = (e) => {
      this._metadataStore.setActionTemplatePanelTriggerProps(e);
    };
    this.insertSubject = (e, t) =>
      d.xz(
        -1,
        s.Ay.t(
          "subject_type_not_supported_in_mode",
          {},
          "当前模式不支持该类型主体",
        ),
      );
    this._metadataStore.setShouldSkipActionUploadConfirmation(
      !!Ay.get(this._actionUploadConfirmationStorageKey),
    );
    this._register(
      this._accountService.onDidLogin(() => {
        this._metadataStore.setShouldSkipActionUploadConfirmation(
          !!Ay.get(this._actionUploadConfirmationStorageKey),
        );
      }),
    );
  }
}
export { eu as q };
eu = o.Cg(
  [
    o.Qj(0, g._),
    o.Qj(1, z_1),
    o.Qj(2, l.c),
    o.Qj(3, h.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      g._ === undefined ? Object : g._,
      z_1 === undefined ? Object : z_1,
      l.c === undefined ? Object : l.c,
      h.Ot === undefined ? Object : h.Ot,
    ]),
  ],
  eu,
);
