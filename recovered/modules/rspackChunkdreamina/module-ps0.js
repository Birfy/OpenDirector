import r from "NY";
import i from "QWK";
import n from "Qey";
import o from "o7";
import s from "K8";
import c from "aEB";
import d from "Kt";
import l from "yB";
import u from "Qxy";
import h from "mFN";
import m from "w3D";
import g from "KDr";
import p from "yI";
import v from "R3";
import S from "NXV";
import f from "dw4";
import A from "oa";
import P from "jnc";
import R from "xi";
import b from "UH9";
import T from "Ko";
import k from "Vo";
import G from "FY";
import V from "GS";
import x from "hP";
import j from "ur";
import w from "K4";
import F from "at";
import O from "mir";
import L from "IHa";
import E from "bk";
import B from "JSz";
import K from "uiO";
import U from "lXG";
import z from "gr";
import W from "Ut";
import N from "I3";
import $ from "fg";
import J from "aS";
import Z from "sV8";
import X from "Bb1";
import Y from "LLl";
import ee from "A3X";
import et from "yMd";
import ea from "BW";
import er from "pc";
import ei from "Zt";
import en from "fHC";
import eo from "rGr";
import es from "Y9q";
import ec from "dHI";
import ed from "BwB";
import el from "z8f";
import eu from "JEp";
import eg from "b3";
import e_ from "Gr4";
import ep from "gu";
import ev from "sl";
import eS from "ZHm";
import ef from "ft";
import eM from "VhU";
import ey from "Xfi";
const _ = "dreamina_first_time_multiple_faces_detected";
const M = {
  data: {
    leadingSilenceDuration: 0,
    trailingSilenceDuration: 0,
  },
  loading: false,
  error: undefined,
};
class y {
  get audioSilenceDuration() {
    let e;
    const { leadingSilenceDuration = 0, trailingSilenceDuration = 0 } =
      (e = this.audioSilenceInfo.data) != null ? e : {};
    return leadingSilenceDuration + trailingSilenceDuration;
  }
  setAudioSilenceInfo(e) {
    this.audioSilenceInfo = e;
  }
  constructor() {
    this.audioSilenceInfo = M;
    f.l_(this);
  }
}
class I extends o.jG {
  get data() {
    return this._audioSilenceStore;
  }
  _loadAudioSilenceInfo(e) {
    return r
      ._(function* () {
        if ((t = this._abortController) != null) {
          t.abort();
        }
        this._abortController = new AbortController();
        var t;
        const { signal } = this._abortController;
        if (!e.trim()) {
          return void this._audioSilenceStore.setAudioSilenceInfo({
            data: {
              leadingSilenceDuration: 0,
              trailingSilenceDuration: 0,
            },
            loading: false,
            error: undefined,
          });
        }
        this._audioSilenceStore.setAudioSilenceInfo({
          data: undefined,
          loading: true,
          error: undefined,
        });
        const r = yield this._fetchAudioSilenceInfo(e, {
          signal,
        });
        if (!signal.aborted) {
          if (!r.ok) {
            return void this._audioSilenceStore.setAudioSilenceInfo({
              data: {
                leadingSilenceDuration: 0,
                trailingSilenceDuration: 0,
              },
              loading: false,
              error: r.findJsError(),
            });
          }
          this._audioSilenceStore.setAudioSilenceInfo({
            data: r.value,
            loading: false,
            error: undefined,
          });
        }
      })
      .call(this);
  }
  _fetchAudioSilenceInfo(prompt, t) {
    return r
      ._(function* () {
        const a = this._audioSilenceInfoCache.get(prompt);
        if (a) {
          return a;
        }
        const { promise, resolve } = Promise.withResolvers();
        this._audioSilenceInfoCache.put(prompt, promise);
        const n = yield this._digitalHumanDetectService.fetchAudioSilenceInfo(
          {
            prompt,
          },
          t,
        );
        if (!n.ok) {
          this._audioSilenceInfoCache.remove(prompt);
        }
        resolve(n);
        return promise;
      })
      .call(this);
  }
  constructor(e) {
    super();
    this._digitalHumanDetectService = e;
    this._abortController = null;
    this._audioSilenceInfoCache = new v.q(50);
    this._audioSilenceStore = new y();
    this.updateAudioSilenceInfo = (e) => {
      this._loadAudioSilenceInfo(e);
    };
    this.updateAudioSilenceInfo = p.A(this.updateAudioSilenceInfo, 500, {
      leading: true,
      trailing: true,
    });
  }
}
I = i.Cg(
  [
    i.Qj(0, S.$),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [S.$ === undefined ? Object : S.$]),
  ],
  I,
);
class C {
  setStartTime(e) {
    this.startTime = e;
  }
  setEndTime(e) {
    this.endTime = e;
  }
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    f.l_(this);
  }
}
class D {
  setMetadata(e) {
    const {
      name,
      audioBuffer,
      duration,
      minReservedDuration,
      maxReservedDuration,
    } = e;
    this.name = name;
    this.audioBuffer = audioBuffer;
    this.duration = duration;
    this.minReservedDuration = minReservedDuration;
    this.maxReservedDuration = maxReservedDuration;
  }
  constructor() {
    this.name = "";
    this.audioBuffer = undefined;
    this.duration = undefined;
    this.minReservedDuration = 0;
    this.maxReservedDuration = 0;
    f.l_(this);
  }
}
class H extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  constructor(...e) {
    super(...e);
    this._metadataStore = new D();
    this._dataStore = new C();
    this.prepareAudioTrim = (e) => {
      var { maxReservedDuration } = e;
      this._metadataStore.setMetadata(e);
      this._dataStore.setStartTime(0);
      this._dataStore.setEndTime(maxReservedDuration);
    };
    this.updateStartTime = (e) => {
      this._dataStore.setStartTime(e);
    };
    this.updateEndTime = (e) => {
      this._dataStore.setEndTime(e);
    };
  }
}
class q extends o.jG {
  _detectImage(e) {
    return r
      ._(function* () {
        const {
          metadata: { faceDetectionScenes },
        } = this._digitalHumanManager;
        const a = yield this._digitalHumanDetectService.detectWithImage({
          id: B.bz(),
          startTime: Date.now(),
          imageUri: e,
          faceDetectionScenes,
        });
        if (!a.ok) {
          this._digitalHumanManager.reportManager.characterReportManager.reportImageFaceDetectionTaskError(
            {
              pictureId: e,
              failReason: a.msg,
              faceDetectionScenes,
            },
          );
          return E._(A._({}, a), {
            msg: this._getImageDetectionErrorMessage(a),
          });
        }
        const { value } = a;
        this._digitalHumanManager.reportManager.characterReportManager.reportImageFaceDetectionTaskSuccess(
          {
            pictureId: e,
            detectResultMap: value,
          },
        );
        this._digitalHumanManager.updateCharacterExtra({
          faceDetectionSceneToInfo: value,
        });
        return s.nj();
      })
      .call(this);
  }
  _detectVideo(videoId, historyId) {
    return r
      ._(function* () {
        const a = yield this._digitalHumanDetectService.detectWithVideo({
          videoId,
          historyId,
        });
        if (a.ok) {
          if ([G.A.Success, G.A.PoorEffect].includes(a.value.detectStatus)) {
            this._digitalHumanManager.updateCharacterExtra({
              videoDetectResult: a.value,
            });
            this._digitalHumanManager.reportManager.characterReportManager.reportVideoFaceDetectionTaskSuccess(
              {
                videoId,
                detectResult: a.value,
              },
            );
            return s.TZ(a.value);
          }
          this._digitalHumanManager.reportManager.characterReportManager.reportVideoFaceDetectionTaskError(
            {
              videoId,
              failReason: a.msg,
            },
          );
          return s.xz(
            -1,
            n.Ay.t(
              "web_new_avatar_micmic_toast_upload_character_fail",
              {},
              "未检测到人物",
            ),
          );
        }
        this._digitalHumanManager.reportManager.characterReportManager.reportVideoFaceDetectionTaskError(
          {
            videoId,
            failReason: a.msg,
          },
        );
        return E._(A._({}, a), {
          msg: n.Ay.t(
            "web_new_avatar_micmic_toast_upload_character_fail",
            {},
            "未检测到人物",
          ),
        });
      })
      .call(this);
  }
  _getImageDetectionErrorMessage(e) {
    if (e.ok) {
      return "";
    }
    if (K.U(e.errorInfo) && "errorCode" in e.errorInfo) {
      const { errorCode } = e.errorInfo;
      if (errorCode === U.a.CopyrightLimit || errorCode === U.a.SecurityLimit) {
        return n.Ay.t(
          "web_image_violates_community_guidelines_toast",
          {},
          "你上传的图片不符合平台规则，请修改后重试",
        );
      }
    }
    return n.Ay.t(
      "web_new_avatar_micmic_toast_upload_character_fail",
      {},
      "未检测到人物",
    );
  }
  constructor(e, t) {
    var a;
    super();
    a = this;
    this._digitalHumanManager = e;
    this._digitalHumanDetectService = t;
    this.detect = (e, t, i) =>
      r._(function* () {
        a._digitalHumanManager.updateCharacterProcessStatus({
          detecting: true,
        });
        a._digitalHumanManager.reportManager.characterReportManager.startFaceDetectStartTime();
        const r = e === "video" ? a._detectVideo(t, i) : a._detectImage(t);
        const n = yield r;
        a._digitalHumanManager.updateCharacterProcessStatus({
          detecting: false,
          detectionError: !n.ok,
        });
        if (n.ok) {
          return s.nj();
        }
        return s.xz(-1, n.msg);
      })();
  }
}
q = i.Cg(
  [
    i.Qj(1, S.$),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      S.$ === undefined ? Object : S.$,
    ]),
  ],
  q,
);
class Q extends o.jG {
  _importLocalReferenceCharacter(e) {
    return r
      ._(function* () {
        this._digitalHumanManager.reportManager.reportClickUpload();
        this._digitalHumanManager.resetCharacter();
        const t = this._registerReferenceCharacterImportAbortController();
        const e_type = e.type;
        const r = yield this._validateCharacter(e);
        if (!r.ok) {
          this._notificationService.warning(r.msg);
          this._digitalHumanManager.reportManager.reportImportReferenceMaterial(
            {
              status: "fail",
              failReason: "file_invalid",
              materialType: e_type,
            },
          );
          return false;
        }
        this._digitalHumanManager.setCharacter(
          e,
          this._createInitialCharacterExtra(e),
        );
        this.characterProcessProgressManager.start();
        const i = yield this._upload(e, t);
        if (!i.ok) {
          this._digitalHumanManager.reportManager.reportImportReferenceMaterial(
            {
              status: "fail",
              failReason: "upload_reference_material_error: ".concat(i.msg),
              materialType: e_type,
            },
          );
          this._notificationService.warning(
            n.Ay.t("web_new_character_audio_upload_fail", {}, "上传失败"),
          );
          this.resetData();
          return false;
        }
        this._digitalHumanManager.reportManager.reportImportReferenceMaterial({
          status: "success",
          materialType: e_type,
        });
        const { uri } = i.value;
        if (!(yield this._audit(uri, e_type)).ok) {
          this._notificationService.warning(
            n.Ay.t(
              "web_image_violates_community_guidelines_toast",
              {},
              "你上传的图片不符合平台规则，请修改后重试",
            ),
          );
          this.resetData();
          return false;
        }
        const s = yield this._detectionManager.detect(e_type, uri);
        if (!s.ok) {
          this._notificationService.warning(s.msg);
          this.resetData();
          return false;
        }
        const { selectAvailableModel, voiceRecommendationManager } =
          this._digitalHumanManager;
        const { fetchRecommendedVoices } = voiceRecommendationManager;
        yield fetchRecommendedVoices();
        selectAvailableModel();
        const {
          metadata: { speakingCharacterOptions },
          selectSpeakingCharacter,
        } = this._digitalHumanManager;
        if (speakingCharacterOptions.length) {
          selectSpeakingCharacter(speakingCharacterOptions[0].value);
        } else if (e.uri) {
          selectSpeakingCharacter(e.uri);
        }
        this.characterProcessProgressManager.stop();
        return true;
      })
      .call(this);
  }
  _importRemoteReferenceCharacter(e, t) {
    return r
      ._(function* () {
        let a;
        const { uri } = e;
        if (!uri) {
          R.V.error(
            "[DigitalHumanGeneratorCharacterManager] importReferenceCharacter",
            "uri not found",
            JSON.stringify(e),
          );
          return false;
        }
        const i = yield this._validateCharacter(e);
        if (!i.ok) {
          this._notificationService.warning(i.msg);
          this.resetData();
          return false;
        }
        this._digitalHumanManager.resetCharacter();
        this._digitalHumanManager.setCharacter(
          e,
          A._(
            {},
            this._createInitialCharacterExtra(e),
            e.type === "video"
              ? {
                  originAIGCVideoData: t.originAIGCVideoData,
                }
              : {},
          ),
        );
        this.characterProcessProgressManager.start();
        const n =
          e.type === "video"
            ? (a = t.originAIGCVideoData) == null
              ? undefined
              : a.historyRecordId
            : undefined;
        const o = yield this._detectionManager.detect(e.type, uri, n);
        if (!o.ok) {
          this._notificationService.warning(o.msg);
          this.resetData();
          return false;
        }
        const { selectAvailableModel, voiceRecommendationManager } =
          this._digitalHumanManager;
        const { resetRecommendedVoices } = voiceRecommendationManager;
        resetRecommendedVoices();
        selectAvailableModel();
        const {
          metadata: { speakingCharacterOptions },
          selectSpeakingCharacter,
        } = this._digitalHumanManager;
        if (speakingCharacterOptions.length) {
          selectSpeakingCharacter(speakingCharacterOptions[0].value);
        } else if (e.uri) {
          selectSpeakingCharacter(e.uri);
        }
        this.characterProcessProgressManager.stop();
        return true;
      })
      .call(this);
  }
  _validateCharacter(e) {
    return r
      ._(function* () {
        const t = yield O.A([e]);
        if (t.ok) {
          return L.T({
            materials: [e],
            limits:
              this._digitalHumanManager.metadata.characterValidationLimits,
          });
        }
        return t;
      })
      .call(this);
  }
  _createInitialCharacterExtra(e) {
    if (e.type === "image") {
      return {
        faceDetectionSceneToInfo: {},
      };
    }
    return {
      videoDetectResult: {
        detectStatus: G.A.Processing,
      },
    };
  }
  _upload(e, t) {
    return r
      ._(function* () {
        this._digitalHumanManager.updateCharacterProcessStatus({
          uploading: true,
        });
        try {
          const uri = yield Promise.race([e.resolveUri(), P.Rn(t)]);
          this._digitalHumanManager.updateCharacterProcessStatus({
            uploading: false,
            uploadError: !uri,
          });
          if (!uri) {
            this._digitalHumanManager.updateCharacterProcessStatus({
              uploading: false,
              uploadError: true,
            });
            return s.xz(-1, "upload failed");
          }
          this._digitalHumanManager.updateCharacterProcessStatus({
            uploading: false,
            uploadError: false,
          });
          return s.TZ({
            uri,
          });
        } catch (e) {
          this._digitalHumanManager.updateCharacterProcessStatus({
            uploading: false,
            uploadError: !t.aborted,
          });
          return s.xz(-1, "request aborted");
        }
      })
      .call(this);
  }
  _audit(fileUri, t) {
    return r
      ._(function* () {
        if (t === "image") {
          this._digitalHumanManager.updateCharacterProcessStatus({
            auditing: true,
          });
          const a = yield this._algorithmDataService.requestAlgorithm(
            "benchmark_test_user_upload_image_input.video_lip_sync",
            {
              params: {},
              fileList: [
                {
                  fileUri,
                },
              ],
              options: {
                ipCheck: true,
              },
            },
            {
              babiParam: this._getBabiParam(),
            },
          );
          this._digitalHumanManager.updateCharacterProcessStatus({
            auditing: false,
          });
          if (!a.ok) {
            this._digitalHumanManager.updateCharacterProcessStatus({
              auditError: true,
            });
            return a;
          }
        }
        return s.nj();
      })
      .call(this);
  }
  _registerReferenceCharacterImportAbortController() {
    this._cancelReferenceCharacterImport();
    const e = new AbortController();
    const { signal } = e;
    this._referenceCharacterImportAbortController = e;
    return signal;
  }
  _cancelReferenceCharacterImport() {
    let e;
    if ((e = this._referenceCharacterImportAbortController) != null) {
      e.abort();
    }
    this._disposeReferenceCharacterImportAbortController();
  }
  _disposeReferenceCharacterImportAbortController() {
    this._referenceCharacterImportAbortController = null;
  }
  _getBabiParam() {
    return V.OC({
      scenario: "image_video_generation",
      featureKey: "to_video-lipsync",
      featureEntranceDetail: "".concat(b.F(), "-algo_proxy"),
      editType: "tool",
      toolId: x.M.Character,
    });
  }
  constructor(e, t, a, i) {
    var n;
    var o;
    super();
    n = this;
    o = this;
    this._digitalHumanManager = e;
    this._containerService = t;
    this._algorithmDataService = a;
    this._notificationService = i;
    this._referenceCharacterImportAbortController = null;
    this.characterProcessProgressManager = this._register(
      this._containerService.createInstance(k.a, {
        estimatedDuration: 6000,
      }),
    );
    this._detectionManager = this._register(
      this._containerService.createInstance(q, this._digitalHumanManager),
    );
    this.importReferenceCharacterFromLocal = (e) =>
      r._(function* () {
        const { acceptedFiles } = T.g(
          o._containerService,
          [e],
          o._digitalHumanManager.metadata.acceptedCharacterFileTypes,
        );
        if (acceptedFiles.length) {
          const a = e.type.startsWith("video/")
            ? o._containerService.createInstance(w.p, {
                file: e,
              })
            : o._containerService.createInstance(F.Vl, {
                file: e,
              });
          yield o._importLocalReferenceCharacter(a);
        }
      })();
    this.importReferenceCharacter = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (e.file) {
        return n._importLocalReferenceCharacter(e);
      }
      return n._importRemoteReferenceCharacter(e, t);
    };
    this.removeReferenceCharacter = () => {
      var { reportManager } = this._digitalHumanManager;
      reportManager.characterReportManager.reportCancelFaceDetection();
      reportManager.reportDeleteUpload();
      this.resetData();
    };
    this.resetData = () => {
      this._cancelReferenceCharacterImport();
      this._digitalHumanManager.resetCharacter();
      this.characterProcessProgressManager.stop();
    };
  }
}
Q = i.Cg(
  [
    i.Qj(1, d._),
    i.Qj(2, j.o),
    i.Qj(3, c.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
      j.o === undefined ? Object : j.o,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  Q,
);
const eh = [
  {
    videoMode: W.DAVideoMode.avatar,
    lipSyncMode: W.DALipSyncMode.standard,
  },
  {
    videoMode: W.DAVideoMode.avatarLoopy,
    lipSyncMode: W.DALipSyncMode.loopy,
  },
  {
    videoMode: W.DAVideoMode.avatarHq,
    lipSyncMode: W.DALipSyncMode.hq,
  },
  {
    videoMode: W.DAVideoMode.avatarHq480,
    lipSyncMode: W.DALipSyncMode.hq480,
  },
];
class em extends o.jG {
  reeditGenerationDataInRecord(originalRecord) {
    if (!J.g(originalRecord)) {
      return Promise.resolve(s.nj());
    }
    const { originalInput } = originalRecord;
    if (originalInput) {
      this._setupDigitalHumanGenerationData(originalInput, {
        originalRecord,
      });
    }
    return Promise.resolve(s.nj());
  }
  applyPrompt(e) {
    this._digitalHumanGeneratorManager.setPrompt(e);
  }
  applyTextInputs(e, t) {
    const { contentGeneratorManager, reportManager } =
      this._digitalHumanGeneratorManager;
    const { activateContentGenerator, setContentGeneratorType } =
      contentGeneratorManager;
    setContentGeneratorType("digitalHuman");
    const { speech, prompt } = e;
    if (speech !== undefined) {
      this._digitalHumanGeneratorManager.speechToSpeechManager.removeOriginalAudio();
      this._digitalHumanGeneratorManager.textToSpeechManager.updateText(speech);
    }
    if (prompt !== undefined) {
      this._digitalHumanGeneratorManager.setPrompt(prompt);
    }
    reportManager.resetReferenceTemplateParams();
    reportManager.setResourceReportParams(
      t == null ? undefined : t.reportParams,
    );
    activateContentGenerator();
  }
  importAsDigitalHumanGeneratorReference(e, t, a) {
    return r
      ._(function* () {
        const { contentGeneratorManager, reportManager } =
          this._digitalHumanGeneratorManager;
        const { activateContentGenerator, setContentGeneratorType } =
          contentGeneratorManager;
        setContentGeneratorType("digitalHuman");
        reportManager.resetReferenceTemplateParams();
        reportManager.setResourceReportParams(
          a == null ? undefined : a.reportParams,
        );
        yield this.importRecordAsReference(e, t);
        activateContentGenerator();
        return s.nj();
      })
      .call(this);
  }
  applyRichPrompt(e) {
    const t = es.I(this._containerService, e.resources, ["image", "video"]);
    if (t.length === 1) {
      this._importCharacterResource(t[0]);
    }
    const a = e.promptContents
      .filter((e) => e.type === "text")
      .map((e) => e.text)
      .join("");
    this._digitalHumanGeneratorManager.setPrompt(a);
    return Promise.resolve(s.nj());
  }
  importReferencesInRecord(e) {
    if (!J.g(e)) {
      return Promise.resolve(s.nj());
    }
    const { originalInput } = e;
    if (originalInput) {
      this._digitalHumanGeneratorManager.resetCharacter();
      this._setupDigitalHumanReferenceCharacter(originalInput);
    }
    return Promise.resolve(s.nj());
  }
  importRecordAsReference(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const a = arguments.length > 2 ? arguments[2] : undefined;
    return r
      ._(function* () {
        if (Z.n(e)) {
          if ((typeof a === "number" && a !== 1) || !X.S(e.generateType)) {
            return s.nj();
          }
          const r = ec.R(this._containerService, e, t);
          yield this._importAudioResource(r);
          return s.nj();
        }
        if (typeof a === "number" && a !== 0) {
          return s.nj();
        }
        if (J.g(e)) {
          if (!e.itemList.length) {
            return s.nj();
          }
          const { video } = e.itemList[t];
          this._digitalHumanGeneratorManager.resetCharacter();
          if (
            yield this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
              ed.b(this._containerService, video),
              {
                originAIGCVideoData: e,
              },
            )
          ) {
            this._reportImportedRecordResource(e, t);
          }
          return s.nj();
        }
        if (e.itemList.length) {
          let n;
          const o =
            (n = e.itemList[t].image.largeImages) == null ? undefined : n[0];
          if (o) {
            this._digitalHumanGeneratorManager.resetCharacter();
            if (
              yield this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
                el.h(this._containerService, o),
              )
            ) {
              this._reportImportedRecordResource(e, t);
            }
          }
        }
        return s.nj();
      })
      .call(this);
  }
  _reportImportedRecordResource(e, t) {
    const a = ec.R(this._containerService, e, t);
    if (a) {
      eu.j([a], this._digitalHumanGeneratorManager.reportManager);
    }
  }
  importWorkDetailAsReference(e) {
    if (!Y.Y(e)) {
      return s.nj();
    }
    const {
      image: { largeImages },
    } = e;
    if (largeImages == null ? undefined : largeImages.length) {
      this._digitalHumanGeneratorManager.resetCharacter();
      this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
        el.h(this._containerService, largeImages[0]),
      );
    }
    return s.nj();
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return s.nj();
    }
    var t;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const r = videoGenInputs.find((e) => !!e.firstFrameImage);
    const i = r == null ? undefined : r.firstFrameImage;
    if (i) {
      this._digitalHumanGeneratorManager.resetCharacter();
      this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
        el.h(this._containerService, i),
      );
    }
    return s.nj();
  }
  importReferenceResources(e, t) {
    if (t === undefined) {
      const a = es.I(this._containerService, e, ["image", "video", "audio"]);
      const r = a.filter((e) => e instanceof F.Vl || e instanceof w.p);
      const i = a.filter((e) => e instanceof eo.e);
      this._importCharacterResource(r.at(0));
      this._importAudioResource(i.at(0));
      return Promise.resolve(s.nj());
    }
    if (t === 0) {
      const n = es.I(this._containerService, e, ["image", "video"]);
      this._importCharacterResource(n.at(0));
      return Promise.resolve(s.nj());
    }
    if (t === 1) {
      const o = es.I(this._containerService, e, ["audio"]);
      this._importAudioResource(o.at(0));
    }
    return Promise.resolve(s.nj());
  }
  reeditGenerationDataInWorkDetail(e) {
    if (!ee.s(e)) {
      return s.nj();
    }
    const { aigcImageParams } = e;
    const {
      text2videoParams,
      publishOpt: { publicUserAudio = false, publicCloneVoice = false } = {},
    } = aigcImageParams != null ? aigcImageParams : {};
    if (text2videoParams) {
      this._setupDigitalHumanGenerationData(text2videoParams, {
        ignoreOriginalAudio: !publicUserAudio,
        ignoreTemplateVoice: !publicCloneVoice,
      });
    }
    return s.nj();
  }
  _importCharacterResource(e) {
    if (e) {
      this._digitalHumanGeneratorManager.resetCharacter();
      this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
        e,
      );
    }
  }
  _importAudioResource(e) {
    return r
      ._(function* () {
        if (
          e &&
          (yield this._digitalHumanGeneratorManager.speechToSpeechManager.importOriginalAudioResource(
            e,
          )).ok
        ) {
          eu.j([e], this._digitalHumanGeneratorManager.reportManager);
        }
      })
      .call(this);
  }
  _setupDigitalHumanReferenceCharacter(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const a = this._createReferenceCharacterSource(e, t.originalRecord);
    if (a) {
      const { character, options } = a;
      this._digitalHumanGeneratorManager.characterManager.importReferenceCharacter(
        character,
        options,
      );
    }
  }
  _setupDigitalHumanGenerationData(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._setupDigitalHumanModel(e, t);
    this._setupDigitalHumanReferenceCharacter(e, t);
    this._setupDigitalHumanSpeech(e, t);
    this._setupDigitalHumanPrompt(e);
  }
  _setupDigitalHumanPrompt(e) {
    const { prompt = "" } = e.videoGenInputs[0];
    this._digitalHumanGeneratorManager.setPrompt(prompt);
  }
  _setupDigitalHumanSpeech(e, t) {
    const a = this._getLipSyncInfo(e);
    const r = this._getLipSyncOpt(e);
    if (a && r) {
      const i = this._getVoiceData(a, r);
      if (a.sourceType === et.yA.TextToSpeech) {
        return void this._setupDigitalHumanTextToSpeech(
          {
            text: a.text,
          },
          i,
          t,
        );
      }
      const originalAudio = this._getOriginalAudioFromOriginalInput(a, r);
      this._setupDigitalHumanSpeechToSpeech(
        {
          originalAudio,
        },
        i,
        t,
      );
    }
  }
  _setupDigitalHumanTextToSpeech(e, t) {
    const a =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const { ignoreTemplateVoice = false } = a;
    const { textToSpeechManager, voiceManager } =
      this._digitalHumanGeneratorManager;
    const { voice } = t;
    textToSpeechManager.setData(e);
    if (
      voice.itemPlatform !== W.CommonItemPlatform.Dmop &&
      ignoreTemplateVoice
    ) {
      return void voiceManager.setData(
        E._(A._({}, t), {
          voiceCategory: u.y3,
          voice: u.Jn,
        }),
      );
    }
    if (voice.itemPlatform === W.CommonItemPlatform.Template) {
      const { voiceManager: voiceManager_1 } =
        this._digitalHumanGeneratorManager;
      voiceManager_1.setTemplateVoiceId(voice.id);
    }
    voiceManager.setData(t);
  }
  _checkModelAvailable(e) {
    const { models } = this._digitalHumanGeneratorManager.metadata;
    return models.find((t) => t.key === e) !== undefined;
  }
  _setupDigitalHumanSpeechToSpeech(e, t) {
    return r
      ._(function* (e, t) {
        const a =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        const { ignoreOriginalAudio = false, ignoreTemplateVoice = false } = a;
        if (!ignoreOriginalAudio) {
          const { speechToSpeechManager, voiceManager } =
            this._digitalHumanGeneratorManager;
          const { originalAudio } = e;
          const { voice } = t;
          if ((yield speechToSpeechManager.setData(e)).ok) {
            if (
              voice.itemPlatform !== W.CommonItemPlatform.Dmop &&
              ignoreTemplateVoice
            ) {
              if (voice.itemPlatform === W.CommonItemPlatform.Template) {
                this._notificationService.normal(
                  n.Ay.t(
                    "web_new_template_voice_not_published_auto_match_toast",
                    {},
                    "模板音色未发布，已为您匹配至音频原声",
                  ),
                );
              }
              voiceManager.setData(
                E._(A._({}, t), {
                  voiceCategory: u.y3,
                  voice: u.Jn,
                  speechAudio: originalAudio,
                }),
              );
              return;
            }
            if (voice.itemPlatform === W.CommonItemPlatform.Template) {
              const { voiceManager: voiceManager_1 } =
                this._digitalHumanGeneratorManager;
              voiceManager_1.setTemplateVoiceId(voice.id);
            }
            voiceManager.setData(t);
          }
        }
      })
      .apply(this, arguments);
  }
  _setupDigitalHumanModel(e) {
    let t;
    let a;
    let r;
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const o = this._createReferenceCharacterSource(e, i.originalRecord);
    if (o) {
      const [s] = e.videoGenInputs;
      const { modelReqKey } = e;
      const { videoMode } = s;
      if (modelReqKey && this._checkModelAvailable(modelReqKey)) {
        return void this._digitalHumanGeneratorManager.setModel(modelReqKey);
      }
      const l =
        (t = eh.find((e) => e.videoMode === videoMode)) == null
          ? undefined
          : t.lipSyncMode;
      if (
        (r =
          (a = this._digitalHumanGeneratorManager.metadata.models.find((e) => {
            var t;
            return ((t = e.extra) == null ? undefined : t.mode) === l;
          })) == null
            ? undefined
            : a.key)
      ) {
        return void this._digitalHumanGeneratorManager.setModel(r);
      }
      const { fallbackModel, defaultVideoModel, defaultImageModel } =
        this._digitalHumanGeneratorManager.metadata;
      r =
        o.character.type === "video"
          ? defaultVideoModel == null
            ? undefined
            : defaultVideoModel.key
          : defaultImageModel == null
            ? undefined
            : defaultImageModel.key;
      this._digitalHumanGeneratorManager.setModel(
        r != null ? r : fallbackModel.key,
      );
      this._notificationService.normal(
        n.Ay.t(
          "web_new_dre_auto_match_model_toast",
          {},
          "已为您匹配至最佳模型",
        ),
      );
    }
  }
  _getLipSyncInfo(e) {
    let t;
    let a;
    let r;
    let i;
    let n;
    let o;
    let s;
    let c;
    let d;
    let l;
    let u;
    let h;
    let m;
    let g;
    let _;
    let p;
    let v;
    let S;
    let f;
    const [M] = e.videoGenInputs;
    const y =
      (t =
        (a =
          (o = M.v2vOpt) == null || (n = o.lipSync) == null
            ? undefined
            : n.ttsInfo) != null
          ? a
          : (c = M.v2vOpt) == null || (s = c.lipSyncUserVideo) == null
            ? undefined
            : s.ttsInfo) != null
        ? t
        : (l = M.i2vOpt) == null || (d = l.realmanAvatar) == null
          ? undefined
          : d.ttsInfo;
    if (y) {
      const I =
        (r =
          (i =
            (m = M.v2vOpt) == null ||
            (h = m.lipSync) == null ||
            (u = h.voiceInfo) == null
              ? undefined
              : u.idInfo) != null
            ? i
            : (p = M.v2vOpt) == null ||
                (_ = p.lipSyncUserVideo) == null ||
                (g = _.voiceInfo) == null
              ? undefined
              : g.idInfo) != null
          ? r
          : (f = M.i2vOpt) == null ||
              (S = f.realmanAvatar) == null ||
              (v = S.voiceInfo) == null
            ? undefined
            : v.idInfo;
      const C = $.o(N.j(y), z.A);
      if (I && C) {
        C.toneId = I.id;
        C.toneItemPlatform = I.itemPlatform;
      }
      return C;
    }
  }
  _getVoiceData(e, t) {
    let a;
    let r;
    let i;
    let n;
    const speechAudio = this._getAudioResourceFromAudioParams(
      t.originAudio,
      e.name,
    );
    return E._(
      A._(
        {
          voiceCategory: {
            id: (a = e.toneCategoryId) != null ? a : u.y3.id,
            name: u.y3.name,
            categoryKey: (r = e.toneCategoryKey) != null ? r : u.y3.categoryKey,
          },
          voice: this._getVoiceFromSpeechInfo(e),
        },
        e.sourceType === et.yA.TextToSpeech
          ? {
              speed: e.speed,
              emotion: e.toneEmotion
                ? {
                    type: (i = e.toneEmotion.emotion) != null ? i : "",
                    scale: (n = e.toneEmotion.emotionScale) != null ? n : 0,
                  }
                : undefined,
            }
          : {},
      ),
      {
        speechAudio,
      },
    );
  }
  _getVoiceFromSpeechInfo(e) {
    let t;
    const a = {
      id: e.toneId,
      name: (t = e.toneKey) != null ? t : "",
      isFavorite: false,
    };
    if (
      e.toneItemPlatform === W.CommonItemPlatform.Local ||
      e.toneItemPlatform === W.CommonItemPlatform.Template
    ) {
      return E._(A._({}, a), {
        itemPlatform: e.toneItemPlatform,
        effectType: et.NB.ClonedVoice,
        voiceCloning: {
          status: en.$Q.Success,
        },
      });
    }
    return E._(A._({}, a), {
      itemPlatform: W.CommonItemPlatform.Dmop,
      effectType: et.NB.Voice,
      tags: {},
      isSpeedAdjustmentEnabled: false,
      isVoiceConversionEnabled: false,
      emotions: [],
    });
  }
  _getLipSyncOpt(e) {
    let t;
    let a;
    let r;
    let i;
    let n;
    const [o] = e.videoGenInputs;
    if (
      (t =
        (a = (r = o.v2vOpt) == null ? undefined : r.lipSyncUserVideo) != null
          ? a
          : (i = o.v2vOpt) == null
            ? undefined
            : i.lipSync) != null
    ) {
      return t;
    }
    if ((n = o.i2vOpt) == null) {
      return undefined;
    }
    return n.realmanAvatar;
  }
  _getOriginalAudioFromOriginalInput(e, t) {
    let a;
    const r = (a = t.audioBeforeConversion) != null ? a : t.originAudio;
    return this._getAudioResourceFromAudioParams(r, e.name);
  }
  _getAudioResourceFromAudioParams(e, t) {
    const { url, vid, duration } = e;
    return this._containerService.createInstance(eo.e, {
      uri: vid,
      url,
      duration,
      name: t || n.Ay.t("web_new_ai_avatar_original_audio", {}, "音频原声"),
    });
  }
  _createReferenceCharacterSource(e, originAIGCVideoData) {
    if (ea.N(e)) {
      return {
        character: ed.b(
          this._containerService,
          e.videoGenInputs[0].v2vOpt.lipSyncUserVideo.originVideo,
        ),
      };
    }
    if (er.p(e)) {
      return {
        character: ed.b(
          this._containerService,
          e.videoGenInputs[0].v2vOpt.lipSync.originVideo,
        ),
        options: {
          originAIGCVideoData,
        },
      };
    }
    if (ei.r(e)) {
      return {
        character: el.h(
          this._containerService,
          e.videoGenInputs[0].i2vOpt.realmanAvatar.originImage,
        ),
      };
    }
  }
  constructor(e, t, a) {
    super();
    this._digitalHumanGeneratorManager = e;
    this._containerService = t;
    this._notificationService = a;
  }
}
em = i.Cg(
  [
    i.Qj(1, d._),
    i.Qj(2, c.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  em,
);
const eI = {
  uploading: false,
  uploadError: false,
  auditing: false,
  auditError: false,
  detecting: false,
  detectionError: false,
};
class eC {
  get model() {
    const {
      metadata: { models },
    } = this._digitalHumanGeneratorManager;
    return models.find((e) => e.key === this.modelKey);
  }
  get characterExtra() {
    let e;
    if (
      (e =
        this.character &&
        this.characterExtraByReferenceId[this.character.id]) != null
    ) {
      return e;
    }
    return {};
  }
  get faceDetails() {
    if (((t = this.character) == null ? undefined : t.type) === "image") {
      let e;
      var t;
      let a;
      let r;
      const { faceDetectionSceneToInfo = {} } = this.characterExtra;
      const n =
        faceDetectionSceneToInfo[
          (e =
            (r = this.model) == null || (a = r.extra) == null
              ? undefined
              : a.faceDetectionScene) != null
            ? e
            : eM.Aj.FaceDetection
        ];
      if (n == null) {
        return undefined;
      }
      return n.faceDetails;
    }
  }
  get commercialSceneOptions() {
    let e;
    let t;
    return e_.I({
      scene: ep.Sk.LipSync,
      modelReqKey: this.modelKey,
      videoDuration: this._generationDuration,
      reportParams: {
        enterSource: ef.k.Generate,
        vipSource: ev.d.Generate,
        useVipFunctionDetailsReporterHoc: true,
        cashierBusinessExtra: E._(
          A._(
            {},
            eS.PO(
              this._digitalHumanGeneratorManager.reportManager
                .resourceReportParams,
            ),
          ),
          {
            gen_mode:
              (t = (e = this.character) == null ? undefined : e.type) ===
              "image"
                ? "lip_sync_image"
                : t === "video"
                  ? "lip_sync"
                  : undefined,
          },
        ),
        cashierActivityId: eS.W_(
          this._digitalHumanGeneratorManager.reportManager.resourceReportParams,
        ),
      },
    });
  }
  get _generationDuration() {
    const {
      metadata: { maxAudioDuration, isAudioSilenceDetectionEnabled },
      voiceManager,
      audioSilenceManager,
      textToSpeechManager,
      speechToSpeechManager,
    } = this._digitalHumanGeneratorManager;
    const {
      data: { speechAudio, speechAudioDuration },
      metadata: { speechSourceType },
    } = voiceManager;
    const { isUsingFallbackText } = textToSpeechManager;
    const {
      data: { audioSilenceDuration },
    } = audioSilenceManager;
    const {
      data: { humanVoiceDetection },
    } = speechToSpeechManager;
    if (
      !this.character ||
      !speechAudio ||
      (speechSourceType === "text-to-speech" &&
        isUsingFallbackText(speechAudio))
    ) {
      return 0;
    }
    if (this.character.type === "video") {
      return Math.min(maxAudioDuration, this.character.duration);
    }
    const h =
      isAudioSilenceDetectionEnabled &&
      (speechSourceType === "text-to-speech" || humanVoiceDetection.data)
        ? audioSilenceDuration
        : 0;
    if (speechAudioDuration + h > maxAudioDuration) {
      return speechAudioDuration;
    }
    return speechAudioDuration + h;
  }
  get isPristine() {
    const { voiceManager } = this._digitalHumanGeneratorManager;
    const {
      data: { selectedVoiceId },
    } = voiceManager;
    return (
      this.isPromptEmpty &&
      this.character === undefined &&
      selectedVoiceId === undefined
    );
  }
  get isPromptEmpty() {
    return !this.prompt.trim();
  }
  get validationResult() {
    if (
      this.character === undefined ||
      this.characterProcessStatus.uploading ||
      this.characterProcessStatus.auditing ||
      this.characterProcessStatus.detecting
    ) {
      return s.xz(
        -1,
        n.F2.t(
          "web_generator_digital_avatar_upload_avatar_notice",
          {},
          "请添加角色图片/视频",
        ),
      );
    }
    const {
      metadata: { submitButtonCreditsLoading },
      textToSpeechManager,
      voiceManager,
    } = this._digitalHumanGeneratorManager;
    const {
      data: { textValidationResult },
      isUsingFallbackText,
    } = textToSpeechManager;
    const {
      metadata: { speechSourceType },
      data: { speechAudio },
    } = voiceManager;
    if (speechSourceType !== "text-to-speech" || textValidationResult.ok) {
      if (
        !speechAudio ||
        (speechSourceType === "text-to-speech" &&
          isUsingFallbackText(speechAudio))
      ) {
        return s.xz(
          -1,
          n.F2.t(
            "web_generator_digital_avatar_upload_audio_notice",
            {},
            "请添加说话内容或上传音频",
          ),
        );
      }
      if (submitButtonCreditsLoading) {
        return s.xz(
          -1,
          n.F2.t("web_avatar_generate_loading", {}, "积分计算中"),
        );
      }
      return this.promptValidationResult;
    }
    return textValidationResult;
  }
  get promptValidationResult() {
    const {
      metadata: { isPromptEnabled },
    } = this._digitalHumanGeneratorManager;
    if (isPromptEnabled) {
      return eg.f(this.prompt, {
        allowEmpty: true,
        maxLength: g.O({
          domesticTextLimit: 500,
        }),
      });
    }
    return s.nj();
  }
  setPrompt(e) {
    this.prompt = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  resetCharacter() {
    this.character = undefined;
    this.characterExtraByReferenceId = {};
    this.characterProcessStatus = eI;
    this.speakingCharacterFaceImageUri = "";
  }
  setCharacter(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.character = e;
    this.characterExtraByReferenceId = {
      [e.id]: t,
    };
  }
  updateCharacterExtra(e) {
    if (this.character) {
      const { id } = this.character;
      this.characterExtraByReferenceId = E._(
        A._({}, this.characterExtraByReferenceId),
        {
          [id]: A._({}, this.characterExtraByReferenceId[id], e),
        },
      );
    }
  }
  updateCharacterProcessStatus(e) {
    this.characterProcessStatus = A._({}, this.characterProcessStatus, e);
  }
  setSpeakingCharacterImageUri(e) {
    this.speakingCharacterFaceImageUri = e;
  }
  constructor(e) {
    this._digitalHumanGeneratorManager = e;
    this.modelKey = "";
    this.character = undefined;
    this.characterExtraByReferenceId = {};
    this.characterProcessStatus = eI;
    this.speakingCharacterFaceImageUri = "";
    this.prompt = "";
    f.l_(this);
  }
}
i.Cg([ey.A()], eC.prototype, "modelKey", undefined);
eC = i.Cg(
  [
    ey.L("digital-human"),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof StoreData === "undefined" ? Object : StoreData,
    ]),
  ],
  eC,
);
const eD = require("crc");
const eH = {
  key: "",
  name: "",
  description: "",
  preAuditPolicy: "",
  subjectPreAuditPolicy: "",
  fields: [],
  commercialConfig: {
    default: {
      resourceSubType: "",
      resourceIdType: "",
      resourceId: "",
      benefitType: "",
    },
  },
};
const eA = eD.A(20);
const eP = eD.A(50);
function eR(e) {
  const { model, disabledTip } = e;
  return E._(A._({}, model), {
    disabled: true,
    extra: E._(A._({}, model.extra), {
      tooltipProps: {
        content: disabledTip,
        position: "top",
      },
      commercial: E._(A._({}, model.extra.commercial), {
        sceneOptions: e_.I({
          scene: ep.Sk.LipSync,
          videoDuration: 0,
          modelReqKey: model.value,
        }),
      }),
    }),
  });
}
class eb {
  get _imageCharacterModelKeys() {
    return new Set(this._imageCharacterModels.map((e) => e.key));
  }
  get _videoCharacterModelKeys() {
    return new Set(this._videoCharacterModels.map((e) => e.key));
  }
  get isModelListVisible() {
    return this._isModelListVisible;
  }
  get models() {
    return [...this._imageCharacterModels, ...this._videoCharacterModels];
  }
  get modelOptions() {
    const {
      data: { character, characterExtra },
    } = this._digitalHumanGeneratorManager;
    const {
      faceDetectionSceneToInfo = {},
      videoDetectResult = {
        detectStatus: G.A.Processing,
      },
    } = characterExtra;
    const i = this.models.map((e) => {
      var {
        key,
        name,
        description,
        source,
        coverUrl,
        iconUrl,
        extra: { faceDetectionScene = eM.Aj.FaceDetection } = {},
      } = e;
      return {
        value: key,
        label: name,
        extra: {
          coverUrl,
          iconUrl,
          description,
          source,
          commercial: {
            sceneOptions: e_.I({
              scene: ep.Sk.VideoLipSyncModelSwitch,
              modelReqKey: key,
              videoDuration: 0,
            }),
          },
          faceDetectionScene,
        },
      };
    });
    const o = [G.A.Fail, G.A.TnsFail];
    if ((character == null ? undefined : character.type) === "video") {
      return i.map((e) => {
        if (
          !this._videoCharacterModelKeys.has(e.value) ||
          o.includes(videoDetectResult.detectStatus)
        ) {
          return eR({
            model: e,
            disabledTip: n.Ay.t(
              "web_character_hover_mode_disabled",
              {},
              "暂不支持当前角色",
            ),
          });
        }
        return e;
      });
    }
    if ((character == null ? undefined : character.type) === "image") {
      return i.map((e) => {
        if (!this._imageCharacterModelKeys.has(e.value)) {
          return eR({
            model: e,
            disabledTip: n.Ay.t(
              "web_character_hover_mode_disabled",
              {},
              "暂不支持当前角色",
            ),
          });
        }
        var t = faceDetectionSceneToInfo[e.extra.faceDetectionScene];
        if (t && o.includes(t.status)) {
          return eR({
            model: e,
            disabledTip:
              t.errorCode === U.a.ServerBusiness
                ? n.Ay.t(
                    "web_fail2generate_server_busy",
                    {},
                    "服务器拥挤,请稍后重试",
                  )
                : n.Ay.t(
                    "web_character_hover_mode_disabled",
                    {},
                    "暂不支持当前角色",
                  ),
          });
        }
        return e;
      });
    }
    return i;
  }
  get maxAudioDuration() {
    let e;
    let t;
    const {
      data: { model },
    } = this._digitalHumanGeneratorManager;
    if (
      (e =
        model == null || (t = model.extra) == null
          ? undefined
          : t.maxAudioDuration) != null
    ) {
      return e;
    }
    return 15;
  }
  get minAudioDuration() {
    let e;
    let t;
    const {
      data: { model },
    } = this._digitalHumanGeneratorManager;
    if (
      (e =
        model == null || (t = model.extra) == null
          ? undefined
          : t.minAudioDuration) != null
    ) {
      return e;
    }
    return 1;
  }
  get isPromptEnabled() {
    let e;
    let t;
    const {
      data: { modelKey },
    } = this._digitalHumanGeneratorManager;
    const { fields } =
      (e = this.models.find((e) => e.key === modelKey)) != null ? e : {};
    const i =
      fields == null
        ? undefined
        : fields.find((e) => e.type === et.pH.InputMediaType);
    return (
      (t = i == null ? undefined : i.values.includes("prompt")) != null && t
    );
  }
  get isAudioSilenceDetectionEnabled() {
    let e;
    let t;
    const {
      data: { modelKey },
    } = this._digitalHumanGeneratorManager;
    const { fields } =
      (e = this.models.find((e) => e.key === modelKey)) != null ? e : {};
    const i =
      fields == null
        ? undefined
        : fields.find((e) => e.type === et.pH.AudioOption);
    return (
      (t = i == null ? undefined : i.values.includes("audio_silence_detect")) !=
        null && t
    );
  }
  get referenceCharacterTooltips() {
    const {
      data: { character },
      characterManager,
    } = this._digitalHumanGeneratorManager;
    if (character) {
      const { characterProcessProgressManager } = characterManager;
      const {
        data: { progress },
      } = characterProcessProgressManager;
      if (this.referenceCharacterLoading) {
        return n.Ay.t(
          "web_avatar_upload_detect_progress",
          {
            number: Math.floor(progress),
          },
          "角色检测中 {number}%",
        );
      }
    }
  }
  get referenceCharacterLoading() {
    const {
      data: { characterProcessStatus },
      voiceRecommendationManager,
    } = this._digitalHumanGeneratorManager;
    const {
      metadata: { recommendedVoices },
    } = voiceRecommendationManager;
    return (
      characterProcessStatus.detecting ||
      characterProcessStatus.uploading ||
      characterProcessStatus.auditing ||
      recommendedVoices.loading
    );
  }
  get referenceCharacterTooltipProps() {
    return {
      content: this.referenceCharacterTooltips,
    };
  }
  get submitButtonCreditsLoading() {
    const {
      voiceManager,
      speechToSpeechManager,
      audioSilenceManager,
      textToSpeechManager,
      data: { character },
    } = this._digitalHumanGeneratorManager;
    const {
      metadata: { speechSourceType },
      data: { speechAudioLoading },
    } = voiceManager;
    const {
      data: { humanVoiceDetection },
    } = speechToSpeechManager;
    const {
      data: { audioSilenceInfo },
    } = audioSilenceManager;
    const {
      data: { text },
    } = textToSpeechManager;
    return (
      !!character &&
      (speechSourceType === "text-to-speech"
        ? (audioSilenceInfo.loading || speechAudioLoading) && text.trim() !== ""
        : humanVoiceDetection.loading ||
          audioSilenceInfo.loading ||
          speechAudioLoading)
    );
  }
  get submitButtonDisabled() {
    const {
      data: { validationResult },
    } = this._digitalHumanGeneratorManager;
    return !validationResult.ok;
  }
  get submitButtonTooltipProps() {
    const {
      data: { validationResult },
    } = this._digitalHumanGeneratorManager;
    return {
      content:
        validationResult.msg ||
        n.Ay.t(
          "web_character_legal_hint",
          {},
          "请确保所有素材为本人所有或已获得合法授权",
        ),
    };
  }
  get promptEditorReadOnly() {
    const { voiceManager } = this._digitalHumanGeneratorManager;
    const {
      metadata: { speechSourceType },
    } = voiceManager;
    return !this.isPromptEnabled && speechSourceType === "speech-to-speech";
  }
  get speakingCharacterOptions() {
    const {
      data: { character, faceDetails },
    } = this._digitalHumanGeneratorManager;
    if (
      (character == null ? undefined : character.type) === "image" &&
      !this.referenceCharacterLoading &&
      (faceDetails == null ? undefined : faceDetails.length)
    ) {
      return faceDetails
        .map((e, t) => {
          var {
            faceImage: { imageUrl, imageUri },
          } = e;
          return {
            label: n.Ay.t(
              "web_avatar_select_single_character",
              {
                number0: t + 1,
              },
              "角色{number0}",
            ),
            value: imageUri,
            extra: {
              imageUrl,
            },
          };
        })
        .concat(
          character.uri
            ? {
                label: n.Ay.t(
                  "web_avatar_select_all_characters",
                  {},
                  "全部角色",
                ),
                value: character.uri,
                extra: {
                  imageUrl: character.url,
                },
              }
            : [],
        );
    }
    return [];
  }
  get faceDetectionScenes() {
    return [
      ...new Set(
        this._imageCharacterModels
          .map((e) => {
            var t;
            if ((t = e.extra) == null) {
              return undefined;
            }
            return t.faceDetectionScene;
          })
          .filter((e) => typeof e === "string"),
      ),
    ];
  }
  setIsModelListVisible(e) {
    this._isModelListVisible = e;
  }
  setSubmitButtonLoading(e) {
    this.submitButtonLoading = e;
  }
  setIsInFreemiumStage(e) {
    this.isInFreemiumStage = e;
  }
  setIsModelListLoading(e) {
    this.isModelListLoading = e;
  }
  setImageModels(e) {
    this._imageCharacterModels = e;
  }
  setVideoModels(e) {
    this._videoCharacterModels = e;
  }
  setFallbackModel(e) {
    this.fallbackModel = e;
  }
  constructor(e) {
    this._digitalHumanGeneratorManager = e;
    this.isInFreemiumStage = false;
    this._isModelListVisible = true;
    this.acceptedCharacterFileTypes = A._(
      {
        "image/jpeg": [".jpeg", ".jpg"],
        "image/png": [".png"],
      },
      {
        "video/mp4": [".mp4"],
        "video/quicktime": [".mov"],
      },
    );
    this.characterValidationLimits = {
      materialLimits: {
        image: {
          maxFileSize: eA,
        },
        video: {
          maxFileSize: eP,
          maxDuration: 30,
        },
      },
    };
    this.submitButtonLoading = false;
    this.fallbackModel = eH;
    this.isModelListLoading = false;
    this._imageCharacterModels = [];
    this._videoCharacterModels = [];
    f.l_(this);
  }
}
const eT = require("ai0");
const ek = require("nZ");
const eG = require("Dm");
const eV = require("kF");
class ex extends eV.v {
  constructor(...e) {
    super(...e);
    this.eventName = "lip_sync_adjust_param";
  }
}
class ej extends eV.o {
  _setInitialParams(e) {
    if (e) {
      const { enterFrom, position, aiFeatureName } = e;
      this.setParams({
        enterFrom,
        position,
        aiFeatureName,
      });
    }
  }
  _getCollectorClass() {
    return ex;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "enter_from", "modal", "position"].forEach((t) => {
      eG.F4(e[t], "[LipSyncAdjustParamReporter] ".concat(t, " is required"));
    });
    if (e.enter_from === "ai_feature") {
      eG.F4(
        e.ai_feature_name,
        "[LipSyncAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "click_upload":
      case "click_upload_audio":
        eG.F4(
          e.upload_method,
          "[LipSyncAdjustParamReporter] upload_method is required",
        );
        break;
      case "switch_lip_sync_mode":
        eG.F4(
          e.lip_sync_mode,
          "[LipSyncAdjustParamReporter] lip_sync_mode is required",
        );
    }
  }
  _setCommonParams() {
    this._params.modal = "lip_sync";
  }
  constructor(e, t) {
    super({}, t);
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
  }
}
ej = i.Cg(
  [
    i.Qj(1, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [Object, d._ === undefined ? Object : d._]),
  ],
  ej,
);
class ew extends eV.v {
  constructor(...e) {
    super(...e);
    this.eventName = "lip_sync_trim_popup";
  }
}
class eF extends eV.o {
  _getCollectorClass() {
    return ew;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["action", "lip_sync_type"].forEach((t) => {
      eG.F4(e[t], "[LipSyncTrimPopupReporter] ".concat(t, " is required"));
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
eF = i.Cg(
  [
    i.Qj(0, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  eF,
);
const eO = require("J1j");
class eL extends eV.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_video_face_detection_status";
  }
}
class eE extends eV.o {
  _getCollectorClass() {
    return eL;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["status", "time"].forEach((t) => {
      eG.F4(
        e[t],
        "[AiVideoFaceDetectionStatusReporter] ".concat(t, " is required"),
      );
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
eE = i.Cg(
  [
    i.Qj(0, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  eE,
);
class eB extends o.jG {
  constructor(e, t) {
    super();
    this._digitalHumanGeneratorManager = e;
    this._containerService = t;
    this._faceDetectStartTime = 0;
    this.startFaceDetectStartTime = () => {
      this._faceDetectStartTime = Date.now();
    };
    this.reportVideoFaceDetectionTaskError = (e) => {
      var { videoId, failReason } = e;
      var r = Date.now() - this._faceDetectStartTime;
      this._reportFaceDetectionStatus({
        status: "fail",
        time: r,
        videoId,
        failReason,
      });
    };
    this.reportVideoFaceDetectionTaskSuccess = (e) => {
      var { videoId, detectResult } = e;
      var r = Date.now() - this._faceDetectStartTime;
      if (eO.ar(detectResult.detectStatus)) {
        this._reportFaceDetectionStatus({
          status: "success",
          time: r,
          videoId,
        });
      } else {
        this._reportFaceDetectionStatus({
          status: "fail",
          time: r,
          videoId,
          failReason: "fail code: "
            .concat(detectResult.failCode, ", fail message: ")
            .concat(detectResult.failStarlingMessage),
        });
      }
    };
    this.reportImageFaceDetectionTaskError = (e) => {
      var { pictureId, failReason, faceDetectionScenes } = e;
      var i = Date.now() - this._faceDetectStartTime;
      faceDetectionScenes.forEach(() => {
        this._reportFaceDetectionStatus({
          status: "fail",
          time: i,
          pictureId,
          failReason,
        });
      });
    };
    this.reportImageFaceDetectionTaskSuccess = (e) => {
      var { pictureId, detectResultMap } = e;
      var r = Date.now() - this._faceDetectStartTime;
      Object.values(detectResultMap).forEach((e) => {
        if (eO.ar(e.status)) {
          this._reportFaceDetectionStatus({
            status: "success",
            time: r,
            pictureId,
          });
        } else {
          this._reportFaceDetectionStatus({
            status: "fail",
            time: r,
            pictureId,
            failReason: "fail code: "
              .concat(e.errorCode, ", fail message: ")
              .concat(e.errorMessage),
          });
        }
      });
    };
    this.reportCancelFaceDetection = () => {
      var {
        data: { character, characterProcessStatus },
      } = this._digitalHumanGeneratorManager;
      if (characterProcessStatus.detecting) {
        if (
          (character == null ? undefined : character.type) === "image" &&
          character.uri
        ) {
          this._reportFaceDetectionStatus({
            status: "cancel",
            time: Date.now() - this._faceDetectStartTime,
            pictureId: character.uri,
          });
        }
        if (
          (character == null ? undefined : character.type) === "video" &&
          character.uri
        ) {
          this._reportFaceDetectionStatus({
            status: "cancel",
            time: Date.now() - this._faceDetectStartTime,
            videoId: character.uri,
          });
        }
      }
    };
    this._reportFaceDetectionStatus = (e) => {
      var t = this._containerService.createInstance(eE);
      t.setParams(e);
      t.report("dev");
      this._faceDetectStartTime = 0;
    };
  }
}
eB = i.Cg(
  [
    i.Qj(1, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
    ]),
  ],
  eB,
);
const eK = require("qa");
const eU = require("GRv");
const eq = require("wsY");
class eQ extends eV.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_audio_generate_status";
  }
}
class ez extends eV.o {
  _setSourceReportParams(e) {
    if (!e) {
      return;
    }
  }
  _getCollectorClass() {
    return eQ;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    [
      "status",
      "time",
      "text_cnt",
      "is_voice_clone",
      "is_audio_to_audio",
    ].forEach((t) => {
      eG.F4(e[t], "[AiAudioGenerateStatusReporter] ".concat(t, " is required"));
    });
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
ez = i.Cg(
  [
    i.Qj(0, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  ez,
);
class eW extends o.jG {
  get commonParams() {
    const { voiceManager } = this._digitalHumanGeneratorManager;
    const {
      data: {
        selectedVoice,
        selectedVoiceId,
        selectedVoiceEmotion,
        voiceCategory,
        voiceCategoryKey,
      },
    } = voiceManager;
    return {
      voiceCategoryKey,
      voiceCategoryId: String(
        voiceCategory == null ? undefined : voiceCategory.id,
      ),
      voiceId: selectedVoiceId,
      voiceKey: selectedVoice == null ? undefined : selectedVoice.name,
      emotionKey:
        selectedVoiceEmotion == null ? undefined : selectedVoiceEmotion.type,
      isVoiceClone: +(
        (selectedVoice == null ? undefined : selectedVoice.itemPlatform) ===
        W.CommonItemPlatform.Local
      ),
      isAudioToAudio: selectedVoice && !eq.aY(selectedVoice) ? 1 : 0,
    };
  }
  _reportPerfDualChannelMetricsTracker(e) {
    const { taskId } = e;
    const a = eK._(e, ["taskId"]);
    if (taskId in this._taskMap) {
      const { startTime, fallbackReason, pollingCount } = this._taskMap[taskId];
      this._containerService
        .createInstance(
          eU.$,
          A._(
            {
              scene: "speech_to_speech",
              fallbackReason,
              costTime: Date.now() - startTime,
              pollingCount,
              extra: JSON.stringify({
                taskId,
              }),
            },
            a,
          ),
        )
        .report("dev");
      this.removeTask(taskId);
    }
  }
  constructor(e, t) {
    super();
    this._digitalHumanGeneratorManager = e;
    this._containerService = t;
    this._taskMap = {};
    this.addTask = (e, t) => {
      this._taskMap[e] = {
        startTime: t,
        pollingCount: 0,
      };
    };
    this.updateWebSocketFallbackReason = (e, t) => {
      if (e in this._taskMap) {
        this._taskMap[e].fallbackReason = t;
      }
    };
    this.addPollingCount = (e) => {
      if (e in this._taskMap) {
        this._taskMap[e].pollingCount++;
      }
    };
    this.removeTask = (e) => {
      delete this._taskMap[e];
    };
    this.reportTextToSpeechStatus = (e, t) => {
      var { textToSpeechManager } = this._digitalHumanGeneratorManager;
      var {
        data: { text },
      } = textToSpeechManager;
      this._reportAiAudioGenerateStatus({
        time: Date.now() - e,
        textCnt: text.length,
        script: text,
        status: t.ok ? "success" : "fail",
        failReason: t.ok
          ? undefined
          : "code: ".concat(t.code, ", msg: ").concat(t.msg),
        isAudioToAudio: 0,
      });
    };
    this.reportSpeechToSpeechStatus = (e) => {
      var { status, failReason, startTime } = e;
      this._reportAiAudioGenerateStatus(
        E._(
          A._(
            {},
            {
              status,
              failReason,
              textCnt: 0,
            },
          ),
          {
            time: Date.now() - startTime,
          },
        ),
      );
    };
    this.reportSpeechToSpeechResult = (e, t, channel) => {
      if (t.ok) {
        this._reportPerfDualChannelMetricsTracker({
          channel,
          status: "success",
          taskId: e,
        });
      } else {
        this._reportPerfDualChannelMetricsTracker({
          channel,
          status: "fail",
          taskId: e,
          failCode: t.code,
          failReason: t.msg,
        });
      }
    };
    this.reportSpeechToSpeechResultFromPolling = (e, status) => {
      this._reportPerfDualChannelMetricsTracker({
        channel: "polling",
        status,
        taskId: e,
      });
    };
    this._reportAiAudioGenerateStatus = (e) => {
      var t = this._containerService.createInstance(ez);
      t.setParams(A._({}, this.commonParams, e));
      t.report();
    };
  }
}
eW = i.Cg(
  [
    i.Qj(1, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
    ]),
  ],
  eW,
);
class eN extends eV.v {
  constructor(...e) {
    super(...e);
    this.eventName = "lip_sync_voice_match";
  }
}
class e$ extends eV.o {
  _getCollectorClass() {
    return eN;
  }
  _validateParams(e) {
    eG.F4(e.status, "[LipSyncVoiceMatchReporter] status is required");
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
e$ = i.Cg(
  [
    i.Qj(0, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  e$,
);
class eJ extends o.jG {
  constructor(e) {
    super();
    this._containerService = e;
    this.reportLipSyncVoiceMatch = (e, t) => {
      var a = this._containerService.createInstance(e$);
      var recVoiceCnt = e.ok
        ? Object.values(e.value.faceImageUriToRecommendedVoiceIds).flat().length
        : 0;
      var i = {
        status: 3 * t.length === recVoiceCnt ? "success" : "fail",
        recVoiceCnt,
      };
      if (!e.ok) {
        i.failCode = String(e.code);
        i.failMsg = e.msg;
      }
      a.setParams(i);
      a.report();
    };
  }
}
eJ = i.Cg(
  [
    i.Qj(0, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [d._ === undefined ? Object : d._]),
  ],
  eJ,
);
class eZ extends ek.j {
  constructor(e, t) {
    super(t);
    this._digitalHumanGeneratorManager = e;
    this.characterReportManager = this._register(
      this._containerService.createInstance(
        eB,
        this._digitalHumanGeneratorManager,
      ),
    );
    this.speechReportManager = this._register(
      this._containerService.createInstance(
        eW,
        this._digitalHumanGeneratorManager,
      ),
    );
    this.voiceRecommendationReportManager = this._register(
      this._containerService.createInstance(eJ),
    );
    this.reportComplianceShow = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "compliance_show",
      });
      e.report();
    };
    this.reportEnterScript = () => {
      var {
        textToSpeechManager,
        data: { prompt },
      } = this._digitalHumanGeneratorManager;
      var {
        data: { text },
      } = textToSpeechManager;
      if (text.trim() !== "" || prompt.trim() !== "") {
        var r = this._containerService.createInstance(ej, this.commonParams);
        r.setParams({
          action: "enter_script",
        });
        r.report();
      }
    };
    this.reportClickUpload = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "click_upload",
        uploadMethod: "click",
      });
      e.report();
    };
    this.reportDeleteUpload = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "delete_upload",
      });
      e.report();
    };
    this.reportClickUploadAudio = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "click_upload_audio",
        uploadMethod: "click",
      });
      e.report();
    };
    this.reportSwitchLipSyncMode = () => {
      var e;
      var {
        data: { model },
      } = this._digitalHumanGeneratorManager;
      var a = this._containerService.createInstance(ej, this.commonParams);
      a.setParams({
        action: "switch_lip_sync_mode",
        lipSyncMode:
          model == null || (e = model.extra) == null ? undefined : e.mode,
      });
      a.report();
    };
    this.reportDeleteUploadAudio = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "delete_upload_audio",
      });
      e.report();
    };
    this.reportImportReferenceMaterial = (e) => {
      var t = this._containerService.createInstance(eT.k);
      t.setParams(
        A._(
          {
            position: "generation",
            modal: "lip_sync",
            materialSource: "local",
            actionType: "click",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportImportAudioMaterial = (e) => {
      var t = this._containerService.createInstance(eT.k);
      t.setParams(
        A._(
          {
            position: "generation",
            modal: "lip_sync",
            materialSource: "local",
            materialType: "audio",
            actionType: "click",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportLipSyncTrimPopup = (action) => {
      var { voiceManager } = this._digitalHumanGeneratorManager;
      var {
        metadata: { speechSourceType },
      } = voiceManager;
      var r = this._containerService.createInstance(eF);
      r.setParams({
        lipSyncType:
          speechSourceType === "text-to-speech"
            ? "text_to_speech"
            : "upload_audio",
        action,
      });
      r.report();
    };
    this.reportActivate = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "activate",
      });
      e.report();
    };
    this.reportPlayUploadAudio = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "play_upload_audio",
      });
      e.report();
    };
    this.reportPlayTts = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "play_tts",
      });
      e.report();
    };
    this.reportSwitchCharacter = () => {
      var e = this._containerService.createInstance(ej, this.commonParams);
      e.setParams({
        action: "switch_character",
      });
      e.report();
    };
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(ej, this.commonParams);
      t.setParams({
        action: "add_image",
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(ej, this.commonParams);
      t.setParams({
        action: "add_video",
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportAddAudio = (e) => {
      var t = this._containerService.createInstance(ej, this.commonParams);
      t.setParams({
        action: "add_audio",
        audioId: e == null ? undefined : e.audioId,
      });
      t.report();
    };
  }
}
eZ = i.Cg(
  [
    i.Qj(1, d._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
    ]),
  ],
  eZ,
);
const eX = require("FAB");
const eY = require("sMA");
const e0 = require("qq");
const e1 = require("yDb");
const e2 = {
  data: undefined,
  loading: false,
  error: undefined,
};
class e4 {
  updateOriginalAudio(e) {
    this.originalAudio = e;
    this.humanVoiceDetection = e2;
  }
  updateHumanVoiceDetection(e) {
    this.humanVoiceDetection = e;
  }
  constructor() {
    this.originalAudio = undefined;
    this.humanVoiceDetection = e2;
    f.l_(this);
  }
}
class e3 {
  get acceptedAudioFileTypes() {
    return {
      "audio/mpeg": [".mp3"],
      "audio/wav": [".wav"],
      "audio/ogg": [".ogg"],
      "audio/m4a": [".m4a"],
      "audio/aac": [".aac"],
      "audio/flac": [".flac"],
    };
  }
  constructor() {
    f.l_(this);
  }
}
class e8 extends o.jG {
  get metadata() {
    return this._speechToSpeechMetadataStore;
  }
  get data() {
    return this._speechToSpeechDataStore;
  }
  fetchSpeechAudioResource(e) {
    return r
      ._(function* () {
        const { voice } = e;
        const { originalAudio } = this._speechToSpeechDataStore;
        if (!originalAudio) {
          return s.xz(
            -1,
            n.Ay.t("web_new_local_audio_not_exist", {}, "本地音频不存在"),
          );
        }
        if (!voice.id) {
          return s.TZ(originalAudio);
        }
        try {
          const vid = yield originalAudio.resolveUri();
          if (!vid) {
            this._notificationService.warning(
              n.Ay.t(
                "web_dreamina_tts_result_error_service_error",
                {},
                "配音服务发生错误，请稍后重试",
              ),
            );
            return s.xz(
              -1,
              n.Ay.t("web_new_local_audio_not_exist", {}, "本地音频不存在"),
            );
          }
          const i = this._getVoiceConversionResourceFromCache(vid, voice.id);
          if (i) {
            return s.TZ(i);
          }
          const o = Date.now();
          const c = yield this._voiceDataService.submitVoiceConversionTask({
            audio: {
              vid,
            },
            voice,
          });
          const {
            reportManager: { speechReportManager },
          } = this._digitalHumanManager;
          if (!c.ok) {
            const failReason = "提交音色迁移任务失败: code: "
              .concat(c.code, " msg: ")
              .concat(c.msg);
            speechReportManager.reportSpeechToSpeechStatus({
              startTime: o,
              status: "fail",
              failReason,
            });
            R.V.error("DigitalHumanGeneratorSpeechToSpeechManager", failReason);
            this._notificationService.warning(
              n.Ay.t(
                "web_dreamina_tts_result_error_service_error",
                {},
                "配音服务发生错误，请稍后重试",
              ),
            );
            return c;
          }
          const { taskId, data } = c.value;
          if (data) {
            const m = this._convertBase64ToAudioResource(data, voice.name);
            this._setVoiceConversionResourceToCache(vid, voice.id, m);
            speechReportManager.reportSpeechToSpeechStatus({
              startTime: o,
              status: "success",
            });
            return s.TZ(m);
          }
          R.V.info(
            "DigitalHumanGeneratorSpeechToSpeechManager",
            "开始监听音色迁移任务".concat(taskId, "状态"),
          );
          const g = yield this._pollVoiceConversionStatus(taskId);
          if (!g.ok) {
            this._notificationService.warning(
              n.Ay.t(
                "web_dreamina_tts_result_error_service_error",
                {},
                "配音服务发生错误，请稍后重试",
              ),
            );
            speechReportManager.reportSpeechToSpeechStatus({
              status: "fail",
              failReason: g.msg,
              startTime: o,
            });
            return g;
          }
          speechReportManager.reportSpeechToSpeechStatus({
            startTime: o,
            status: "success",
          });
          const _ = this._convertBase64ToAudioResource(g.value, voice.name);
          this._setVoiceConversionResourceToCache(vid, voice.id, _);
          return s.TZ(_);
        } catch (error) {
          const p = error instanceof Error ? error.message : String(error);
          R.V.error(
            "DigitalHumanGeneratorSpeechToSpeechManager",
            "音色迁移失败:",
            error,
          );
          return s.xz(
            -1,
            ""
              .concat(n.Ay.t("web_new_use_tone_fail", {}, "音色迁移失败"), ": ")
              .concat(p),
          );
        }
      })
      .call(this);
  }
  _convertBase64ToAudioResource(e, t) {
    const a = new File([eX.z(e, u.rX)], "".concat(t, ".mp3"), {
      type: u.rX,
    });
    return this._containerService.createInstance(eo.e, {
      file: a,
    });
  }
  _createWebsocketMessageHandler(e, t) {
    return (a) => {
      if (a.taskId !== e) {
        return {
          accepted: false,
          done: false,
        };
      }
      var { status } = a;
      R.V.info(
        "DigitalHumanGeneratorSpeechToSpeechManager",
        "收到音色迁移任务".concat(e, "状态变更: ").concat(status),
      );
      if (status === en.k_.Success || status === en.k_.Fail) {
        if (status === en.k_.Success) {
          this._fetchTaskResult(e).then((a) => {
            this._digitalHumanManager.reportManager.speechReportManager.reportSpeechToSpeechResult(
              e,
              a,
              "websocket",
            );
            t(a);
          });
        } else {
          t(s.xz(-1, n.Ay.t("web_new_use_tone_fail", {}, "音色迁移失败")));
        }
        return {
          accepted: true,
          done: true,
        };
      }
      return {
        accepted: true,
        done: false,
      };
    };
  }
  _createPollingHandler(e, t) {
    return () =>
      r
        ._(function* () {
          try {
            const {
              reportManager: { speechReportManager },
            } = this._digitalHumanManager;
            const r = yield this._fetchTaskResult(e);
            speechReportManager.addPollingCount(e);
            if (!r.ok) {
              R.V.info(
                "DigitalHumanGeneratorSpeechToSpeechManager",
                "查询音色迁移任务".concat(e, "失败，继续轮询"),
              );
              return false;
            }
            const i = r.value;
            if (!i) {
              R.V.info(
                "DigitalHumanGeneratorSpeechToSpeechManager",
                "音色迁移任务".concat(e, "仍在处理中，继续轮询"),
              );
              return false;
            }
            speechReportManager.reportSpeechToSpeechResult(e, r, "polling");
            R.V.info(
              "DigitalHumanGeneratorSpeechToSpeechManager",
              "音色迁移任务".concat(e, "已完成"),
            );
            t(s.TZ(i));
            return true;
          } catch (error) {
            const n = error instanceof Error ? error.message : String(error);
            R.V.error(
              "DigitalHumanGeneratorSpeechToSpeechManager",
              "轮询音色迁移任务".concat(e, "出错:"),
              n,
            );
            return false;
          }
        })
        .call(this);
  }
  _pollVoiceConversionStatus(e) {
    const { promise, resolve } = Promise.withResolvers();
    const {
      reportManager: { speechReportManager },
    } = this._digitalHumanManager;
    const i = new AbortController();
    const n = {
      methodId: en.NY.VoiceTaskChange,
      timeout: 10000,
      fallbackStrategy: eY.WV.RACING,
      signal: i.signal,
      pollingConfig: {
        initialInterval: 1000,
        maxInterval: 10000,
        intervalStep: 2000,
        backoffStrategy: eY.c2.LINEAR,
      },
      websocketMessageHandler: this._createWebsocketMessageHandler(e, resolve),
      pollingHandler: this._createPollingHandler(e, resolve),
      onFallbackToPolling: (t) =>
        speechReportManager.updateWebSocketFallbackReason(e, t),
    };
    const o = new e0.E(n, this._websocketService);
    speechReportManager.addTask(e, Date.now());
    o.startListening().then((t) => {
      R.V.info(
        "DigitalHumanGeneratorSpeechToSpeechManager",
        "音色迁移任务"
          .concat(e, "监听结束，任务状态：")
          .concat(t ? "成功" : "失败"),
      );
    });
    this._register({
      dispose: () => {
        R.V.info(
          "DigitalHumanGeneratorSpeechToSpeechManager",
          "终止音色迁移任务".concat(e, "监听"),
        );
        speechReportManager.removeTask(e);
        i.abort();
        o.dispose();
      },
    });
    return promise;
  }
  _fetchTaskResult(e) {
    return r
      ._(function* () {
        const t = yield this._voiceDataService.queryVoiceTasks({
          taskIds: [e],
        });
        if (!t.ok) {
          return t;
        }
        const { tasks } = t.value;
        if (tasks.length === 0) {
          return s.xz(-1, "任务结果为空");
        }
        const r = tasks[0];
        if (r.data) {
          return s.TZ(r.data);
        }
        return s.xz(-1, "任务未完成或结果为空");
      })
      .call(this);
  }
  _getVoiceConversionResourceFromCache(e, t) {
    const a = "".concat(e, "-").concat(t);
    return this._voiceConversionResourceCache.get(a);
  }
  _setVoiceConversionResourceToCache(e, t, a) {
    const r = "".concat(e, "-").concat(t);
    this._voiceConversionResourceCache.set(r, a);
  }
  _performHumanVoiceDetection(e) {
    return r
      ._(function* () {
        this._speechToSpeechDataStore.updateHumanVoiceDetection({
          data: undefined,
          loading: true,
          error: undefined,
        });
        const audioUri = yield e.resolveUri();
        if (e === this._speechToSpeechDataStore.originalAudio) {
          if (!audioUri) {
            return void this._speechToSpeechDataStore.updateHumanVoiceDetection(
              {
                data: false,
                loading: false,
                error: undefined,
              },
            );
          }
          const a = yield this._digitalHumanDetectService.detectHumanVoice({
            audioUri,
          });
          if (e === this._speechToSpeechDataStore.originalAudio) {
            if (!a.ok) {
              return void this._speechToSpeechDataStore.updateHumanVoiceDetection(
                {
                  data: false,
                  loading: false,
                  error: a.findJsError(),
                },
              );
            }
            const { isHumanVoice } = a.value;
            this._speechToSpeechDataStore.updateHumanVoiceDetection({
              data: isHumanVoice,
              loading: false,
              error: undefined,
            });
          }
        }
      })
      .call(this);
  }
  constructor(e, t, a, i, o, c) {
    var d;
    super();
    d = this;
    this._digitalHumanManager = e;
    this._containerService = t;
    this._voiceDataService = a;
    this._websocketService = i;
    this._digitalHumanDetectService = o;
    this._notificationService = c;
    this._voiceConversionResourceCache = new Map();
    this._speechToSpeechMetadataStore = new e3();
    this._speechToSpeechDataStore = new e4();
    this.setData = (e) => {
      var { originalAudio } = e;
      return this.importOriginalAudioResource(originalAudio);
    };
    this.importLocalAudio = (e) =>
      r._(function* () {
        const { reportManager } = d._digitalHumanManager;
        reportManager.reportClickUploadAudio();
        const a = d._containerService.createInstance(eo.e, {
          file: e,
        });
        if ((yield d.importOriginalAudioResource(a)).ok) {
          reportManager.reportImportAudioMaterial({
            status: "success",
          });
        } else {
          reportManager.reportImportAudioMaterial({
            status: "fail",
            failReason: "audio_duration_too_long",
          });
        }
      })();
    this.importOriginalAudioResource = (e) =>
      r._(function* () {
        const t = yield e.resolveMetadata();
        const {
          metadata: { maxAudioDuration, minAudioDuration },
          voiceManager,
          speechToSpeechManager,
        } = d._digitalHumanManager;
        const { switchToSpeechToSpeech } = voiceManager;
        if (!t || t.duration > maxAudioDuration) {
          const l = n.Ay.t(
            "web_dreamina_lipsync_upload_audio_errortoast_duration",
            {
              number0: maxAudioDuration,
            },
            "请选择时长小于 {number0}s 的音频",
          );
          d._notificationService.warning(l);
          return s.xz(-1, l);
        }
        if (t.duration < minAudioDuration) {
          const u = n.Ay.t(
            "web_dreamina_lipsync_upload_audio_errortoast_min_duration",
            {
              number0: minAudioDuration,
            },
            "请选择时长大于 {number0}s 的音频",
          );
          d._notificationService.warning(u);
          return s.xz(-1, u);
        }
        d._speechToSpeechDataStore.updateOriginalAudio(e);
        switchToSpeechToSpeech(speechToSpeechManager);
        d._performHumanVoiceDetection(e);
        return s.nj();
      })();
    this.removeOriginalAudio = () => {
      var { voiceManager, textToSpeechManager, reportManager } =
        this._digitalHumanManager;
      voiceManager.switchToTextToSpeech(textToSpeechManager);
      this._speechToSpeechDataStore.updateOriginalAudio(undefined);
      reportManager.reportDeleteUploadAudio();
    };
  }
}
e8 = i.Cg(
  [
    i.Qj(1, d._),
    i.Qj(2, e1.W),
    i.Qj(3, en.dE),
    i.Qj(4, S.$),
    i.Qj(5, c.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      d._ === undefined ? Object : d._,
      e1.W === undefined ? Object : e1.W,
      en.dE === undefined ? Object : en.dE,
      S.$ === undefined ? Object : S.$,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  e8,
);
const e5 = require("H26");
const e6 = require("iuD");
const e9 = require("wZz");
const e7 = require("g98");
const te = require("rr");
class tt extends o.jG {
  _submit() {
    return r
      ._(function* () {
        const {
          data: { character, characterExtra },
        } = this._digitalHumanGeneratorManager;
        if (character) {
          if (character.type === "image") {
            return this._submitImageLipSync();
          }
          if (characterExtra.originAIGCVideoData) {
            return this._submitVideoLipSyncByAIGCVideoData(
              characterExtra.originAIGCVideoData,
            );
          }
          return this._submitVideoLipSync();
        }
        return s.xz(-1, "character is undefined");
      })
      .call(this);
  }
  _submitImageLipSync() {
    return r
      ._(function* () {
        let e;
        let t;
        const {
          metadata: {
            maxAudioDuration,
            isPromptEnabled,
            isAudioSilenceDetectionEnabled,
          },
          data: {
            character,
            prompt,
            modelKey,
            speakingCharacterFaceImageUri,
            faceDetails,
            commercialSceneOptions,
          },
          audioSilenceManager,
          reportManager: { commonParams },
          voiceManager: {
            metadata: { speechSourceType },
          },
          voiceRecommendationManager: {
            metadata: { recommendedVoices },
          },
          speechToSpeechManager: {
            data: { humanVoiceDetection },
          },
        } = this._digitalHumanGeneratorManager;
        const {
          data: { audioSilenceInfo, audioSilenceDuration },
        } = audioSilenceManager;
        if ((character == null ? undefined : character.type) !== "image") {
          return s.xz(-1, "character is not an image");
        }
        const { file, uri, url, remoteExtraInfo } = character;
        const itemId =
          remoteExtraInfo == null ? undefined : remoteExtraInfo.aigcItemId;
        const width = character.width || undefined;
        const height = character.height || undefined;
        const [P, R] = yield Promise.all([
          file ? this._uploadImage(file) : Promise.resolve(uri),
          this._getSpeechInputParams(),
        ]);
        if (P === undefined || !R) {
          return s.xz(-1, "imageUri or speechInputParams is undefined");
        }
        const b = this._getCurrentMode();
        const T = this._getSupportModes();
        const selectedFace =
          faceDetails == null
            ? undefined
            : faceDetails.find(
                (e) => e.faceImage.imageUri === speakingCharacterFaceImageUri,
              );
        const recommendedVoiceIds =
          (t = recommendedVoices.data) == null
            ? undefined
            : t[speakingCharacterFaceImageUri];
        const V =
          speechSourceType === "text-to-speech" || humanVoiceDetection.data;
        const x =
          isAudioSilenceDetectionEnabled &&
          audioSilenceInfo.data &&
          V &&
          R.originAudio.duration + audioSilenceDuration <= maxAudioDuration
            ? {
                beforeSilenceMillisecond:
                  audioSilenceInfo.data.leadingSilenceDuration * e5.K,
                afterSilenceMillisecond:
                  audioSilenceInfo.data.trailingSilenceDuration * e5.K,
              }
            : undefined;
        const j = yield this._workspaceService.ensureWorkspaceId();
        if (!j.ok) {
          return j;
        }
        const j_value = j.value;
        const F = {
          input: {
            videoGenInputs: {
              i2vOpt: {
                realmanAvatar: A._(
                  {
                    originImage: {
                      imageUri: P,
                      imageUrl: url,
                      width,
                      height,
                      aigcImage: itemId
                        ? {
                            itemId,
                          }
                        : undefined,
                    },
                    supportedModes: T,
                    selectedFace,
                  },
                  R,
                  x,
                ),
              },
              videoMode: b,
              prompt: isPromptEnabled ? prompt : undefined,
            },
            modelReqKey: modelKey,
          },
          workspaceId: j_value,
          isRegenerate: false,
          taskPayload: {
            taskExtra: E._(A._({}, commonParams), {
              audioId: this._getSpeechAudioItemId(),
              promptSource: undefined,
              detectedFaceCount:
                (e = faceDetails == null ? undefined : faceDetails.length) !=
                null
                  ? e
                  : 1,
              recommendedVoiceIds,
              sceneOptions: JSON.stringify(commercialSceneOptions),
            }),
          },
        };
        return (yield this._contentGeneratorTaskFeatureContainerService.getInstance()).createAIGCImageLipSyncAvatarTask(
          F,
        );
      })
      .call(this);
  }
  _submitVideoLipSyncByAIGCVideoData(targetAIGCData) {
    return r
      ._(function* () {
        let t;
        let a;
        let r;
        let i;
        let n;
        let o;
        const {
          data: { character, modelKey, commercialSceneOptions },
          reportManager: { commonParams },
        } = this._digitalHumanGeneratorManager;
        if ((character == null ? undefined : character.type) !== "video") {
          return s.xz(-1, "character is not a video");
        }
        const { file, uri, url, duration, width, height } = character;
        const [S, f] = yield Promise.all([
          file ? this._uploadVideo(file) : Promise.resolve(uri),
          this._getSpeechInputParams(),
        ]);
        if (!S || !f) {
          return s.xz(-1, "videoId or speechInputParams is undefined");
        }
        const videoItemId =
          (t =
            ((n = targetAIGCData.originalInput) == null ||
            (i = n.videoGenInputs[0]) == null ||
            (r = i.v2vOpt) == null ||
            (a = r.lipSync) == null
              ? undefined
              : a.videoItemId) ||
            ((o = targetAIGCData.item) == null ? undefined : o.id)) != null
            ? t
            : "";
        const isRegenerate =
          !!targetAIGCData.originalInput && er.p(targetAIGCData.originalInput);
        const I = this._getCurrentMode();
        const C = this._getSupportModes();
        const D = yield this._workspaceService.ensureWorkspaceId();
        if (!D.ok) {
          return D;
        }
        const D_value = D.value;
        const P = {
          targetAIGCData,
          input: {
            videoGenInputs: {
              v2vOpt: {
                lipSync: A._(
                  {
                    originVideo: {
                      videoId: S,
                      duration,
                      originVideo: {
                        videoUrl: url,
                        width,
                        height,
                      },
                    },
                    videoItemId,
                    supportedModes: C,
                  },
                  f,
                ),
              },
              videoMode: I,
            },
            modelReqKey: modelKey,
          },
          workspaceId: D_value,
          isRegenerate,
          taskPayload: {
            taskExtra: E._(A._({}, commonParams), {
              audioId: this._getSpeechAudioItemId(),
              promptSource: undefined,
              sceneOptions: JSON.stringify(commercialSceneOptions),
            }),
          },
        };
        return (yield this._contentGeneratorTaskFeatureContainerService.getInstance()).createAIGCVideoLipSyncTask(
          P,
        );
      })
      .call(this);
  }
  _submitVideoLipSync() {
    return r
      ._(function* () {
        const {
          data: { character, modelKey, commercialSceneOptions },
          reportManager: { commonParams },
        } = this._digitalHumanGeneratorManager;
        if ((character == null ? undefined : character.type) !== "video") {
          return s.xz(-1, "character is not a video");
        }
        const { file, uri, url, duration, width, height } = character;
        const [u, h] = yield Promise.all([
          file ? this._uploadVideo(file) : Promise.resolve(uri),
          this._getSpeechInputParams(),
        ]);
        if (u === undefined || !h) {
          return s.xz(-1, "videoId or speechInputParams is undefined");
        }
        const m = this._getCurrentMode();
        const g = this._getSupportModes();
        const _ = yield this._workspaceService.ensureWorkspaceId();
        if (!_.ok) {
          return _;
        }
        const __value = _.value;
        const v = {
          input: {
            videoGenInputs: {
              v2vOpt: {
                lipSyncUserVideo: A._(
                  {
                    originVideo: {
                      videoId: u,
                      duration,
                      originVideo: {
                        videoUrl: url,
                        width,
                        height,
                      },
                    },
                    supportedModes: g,
                  },
                  h,
                ),
              },
              videoMode: m,
            },
            modelReqKey: modelKey,
          },
          workspaceId: __value,
          isRegenerate: false,
          taskPayload: {
            taskExtra: E._(A._({}, commonParams), {
              audioId: this._getSpeechAudioItemId(),
              promptSource: undefined,
              sceneOptions: JSON.stringify(commercialSceneOptions),
            }),
          },
        };
        return (yield this._contentGeneratorTaskFeatureContainerService.getInstance()).createAIGCVideoLipSyncAvatarTask(
          v,
        );
      })
      .call(this);
  }
  _findVideoMode(e) {
    switch (e) {
      case "standard":
        return W.DAVideoMode.avatar;
      case "vivid":
        return W.DAVideoMode.avatarLoopy;
      case "hq":
        return W.DAVideoMode.avatarHq;
      case "hq_480":
        return W.DAVideoMode.avatarHq480;
      default:
        return W.DAVideoMode.avatar;
    }
  }
  _getCurrentMode() {
    let e;
    const {
      data: { model },
    } = this._digitalHumanGeneratorManager;
    return this._findVideoMode(
      model == null || (e = model.extra) == null ? undefined : e.mode,
    );
  }
  _getSupportModes() {
    let e;
    const {
      data: { character, model },
      metadata: { models },
    } = this._digitalHumanGeneratorManager;
    if ((character == null ? undefined : character.type) !== "image") {
      return [this._getCurrentMode()];
    }
    const i =
      model == null || (e = model.extra) == null
        ? undefined
        : e.faceDetectionScene;
    const n = [];
    models.forEach((e) => {
      var t = (a = e.extra) == null ? undefined : a.faceDetectionScene;
      if (t && t === i) {
        var a;
        var r;
        var o = this._findVideoMode((r = e.extra) == null ? undefined : r.mode);
        if (!n.includes(o)) {
          n.push(o);
        }
      }
    });
    if (n.length === 0) {
      return [W.DAVideoMode.avatar];
    }
    return n;
  }
  _uploadImage(e) {
    return r
      ._(function* () {
        const t = yield this._uploadService.uploadImage({
          file: e,
        });
        if (t.ok) {
          return t.value.uri;
        }
        this._notificationService.warning(
          n.Ay.t("web_new_character_audio_upload_fail", {}, "上传失败"),
        );
      })
      .call(this);
  }
  _uploadVideo(e) {
    return r
      ._(function* () {
        const t = yield this._uploadService.uploadVideo({
          file: e,
        });
        if (t.ok) {
          return t.value.vid;
        }
        this._notificationService.warning(
          n.Ay.t("web_new_character_audio_upload_fail", {}, "上传失败"),
        );
      })
      .call(this);
  }
  _getSpeechInputParams() {
    return r
      ._(function* () {
        const { voiceManager } = this._digitalHumanGeneratorManager;
        const {
          metadata: { speechSourceType },
        } = voiceManager;
        if (speechSourceType === "text-to-speech") {
          return this._getTextToSpeechInputParams();
        }
        return this._getSpeechToSpeechInputParams();
      })
      .call(this);
  }
  _getTextToSpeechInputParams() {
    return r
      ._(function* () {
        const {
          data: { character },
          textToSpeechManager,
          voiceManager,
        } = this._digitalHumanGeneratorManager;
        const {
          data: { text },
        } = textToSpeechManager;
        const {
          data: {
            voiceCategory,
            selectedVoice,
            selectedVoiceSpeed = u.$w,
            selectedVoiceEmotion,
            speechAudio,
          },
        } = voiceManager;
        if (character && selectedVoice && speechAudio) {
          const originAudio = yield this._getSpeechAudioInputParams(
            character,
            speechAudio,
          );
          if (originAudio) {
            return {
              ttsInfo: {
                sourceType: et.yA.TextToSpeech,
                text,
                name: selectedVoice.name,
                speed: selectedVoiceSpeed,
                toneId: selectedVoice.id,
                toneItemPlatform: selectedVoice.itemPlatform,
                toneEmotion: selectedVoiceEmotion
                  ? {
                      emotion: selectedVoiceEmotion.type,
                      emotionScale: selectedVoiceEmotion.scale,
                    }
                  : undefined,
                toneCategoryId:
                  voiceCategory == null ? undefined : voiceCategory.id,
                toneCategoryKey:
                  voiceCategory == null ? undefined : voiceCategory.categoryKey,
                toneKey: selectedVoice.name,
              },
              originAudio,
            };
          }
        }
      })
      .call(this);
  }
  _getSpeechToSpeechInputParams() {
    return r
      ._(function* () {
        let e;
        const {
          data: { character },
          speechToSpeechManager,
          voiceManager,
        } = this._digitalHumanGeneratorManager;
        const {
          data: { originalAudio },
        } = speechToSpeechManager;
        const {
          data: { voiceCategory, selectedVoice, speechAudio },
        } = voiceManager;
        if (character && selectedVoice && originalAudio && speechAudio) {
          const [c, d] = yield Promise.all([
            this._getSpeechAudioInputParams(character, speechAudio),
            this._getOriginalAudioInputParams(originalAudio),
          ]);
          if (c && d) {
            return {
              ttsInfo: {
                sourceType: et.yA.LocalFile,
                toneId: selectedVoice.id,
                toneItemPlatform: selectedVoice.itemPlatform,
                name: (e = originalAudio.name) != null ? e : "",
                toneCategoryId:
                  voiceCategory == null ? undefined : voiceCategory.id,
                toneCategoryKey:
                  voiceCategory == null ? undefined : voiceCategory.categoryKey,
                toneKey: selectedVoice.name,
              },
              originAudio: c,
              audioBeforeConversion: d,
            };
          }
        }
      })
      .call(this);
  }
  _getSpeechAudioInputParams(e, t) {
    return r
      ._(function* () {
        const a = yield this._getSpeechAudio(e, t);
        if (a) {
          const [r, i] = yield Promise.all([
            a.resolveUri(),
            a.resolveMetadata(),
          ]);
          if (r && i) {
            return {
              vid: r,
              duration: i.duration,
            };
          }
        }
      })
      .call(this);
  }
  _getSpeechAudio(e, t) {
    return r
      ._(function* () {
        let a;
        let r;
        let i;
        let n;
        const {
          metadata: { maxAudioDuration, minAudioDuration },
        } = this._digitalHumanGeneratorManager;
        const c = yield t.resolveMetadata();
        if (c) {
          const maxReservedDuration =
            e.type === "video"
              ? Math.min(maxAudioDuration, e.duration)
              : maxAudioDuration;
          if (c.duration <= maxReservedDuration) {
            if (!(yield t.resolveUri())) {
              return;
            }
            return t;
          }
          const { audioTrimManager } = this._digitalHumanGeneratorManager;
          const { prepareAudioTrim } = audioTrimManager;
          const audioBuffer = yield t.resolveAudioBuffer();
          if (audioBuffer) {
            prepareAudioTrim({
              name: (a = t.name) != null ? a : "",
              audioBuffer,
              minReservedDuration: minAudioDuration,
              maxReservedDuration,
            });
            const m = yield (i = this.requestAudioTrim) == null
              ? undefined
              : i.call(this, {
                  containerService: this._containerService,
                });
            if (m) {
              const g = new File(
                [yield e6.n(m)],
                ((r = (n = t.file) == null ? undefined : n.name) != null
                  ? r
                  : ""
                ).replace(/\.mp3$/, ".wav"),
                {
                  type: "audio/wav",
                },
              );
              return this._containerService.createInstance(eo.e, {
                file: g,
                duration: m.duration,
              });
            }
          }
        }
      })
      .call(this);
  }
  _getOriginalAudioInputParams(e) {
    return r._(function* () {
      const [t, a] = yield Promise.all([e.resolveUri(), e.resolveMetadata()]);
      if (t && a) {
        return {
          vid: t,
          duration: a.duration,
        };
      }
    })();
  }
  _getSpeechAudioItemId() {
    let e;
    const {
      voiceManager: {
        metadata: { speechSourceType },
        data: { speechAudio },
      },
    } = this._digitalHumanGeneratorManager;
    if (speechSourceType !== "text-to-speech" && speechAudio) {
      if ((e = speechAudio.remoteExtraInfo) == null) {
        return undefined;
      }
      return e.aigcItemId;
    }
  }
  constructor(e, t, a, i, n, o) {
    var c;
    super();
    c = this;
    this._digitalHumanGeneratorManager = e;
    this._contentGeneratorTaskFeatureContainerService = t;
    this._containerService = a;
    this._uploadService = i;
    this._notificationService = n;
    this._workspaceService = o;
    this.submit = () =>
      r._(function* () {
        const {
          data: { validationResult },
        } = c._digitalHumanGeneratorManager;
        if (!validationResult.ok) {
          c._notificationService.warning(validationResult.msg);
          return validationResult;
        }
        c._digitalHumanGeneratorManager.setSubmitButtonLoading(true);
        const t = yield c._submit();
        c._digitalHumanGeneratorManager.setSubmitButtonLoading(false);
        if (t.ok) {
          c._digitalHumanGeneratorManager.reportManager.resetResourceReportParams();
        }
        if (t.ok) {
          return s.TZ([t.value]);
        }
        return t;
      })();
  }
}
tt = i.Cg(
  [
    i.Qj(1, e9.L),
    i.Qj(2, d._),
    i.Qj(3, e7.H),
    i.Qj(4, c.Ot),
    i.Qj(5, te.D),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      e9.L === undefined ? Object : e9.L,
      d._ === undefined ? Object : d._,
      e7.H === undefined ? Object : e7.H,
      c.Ot === undefined ? Object : c.Ot,
      te.D === undefined ? Object : te.D,
    ]),
  ],
  tt,
);
const ta = {
  data: undefined,
  loading: false,
  error: undefined,
};
class tr {
  get faceImageUriToRecommendedVoiceIds() {
    let e;
    if ((e = this.recommendedVoices.data) != null) {
      return e;
    }
    return {};
  }
  get recommendedVoiceIds() {
    let e;
    const {
      data: { speakingCharacterFaceImageUri },
    } = this._digitalHumanGeneratorManager;
    if (
      (e =
        this.faceImageUriToRecommendedVoiceIds[
          speakingCharacterFaceImageUri
        ]) != null
    ) {
      return e;
    }
    return [];
  }
  resetData() {
    this.recommendedVoices = ta;
    this.previousRecommendedVoiceIds = undefined;
  }
  setRecommendedVoices(e) {
    this.recommendedVoices = e;
  }
  setPreviousRecommendedVoiceIds(e) {
    this.previousRecommendedVoiceIds = e;
  }
  constructor(e) {
    this._digitalHumanGeneratorManager = e;
    this.recommendedVoices = ta;
    this.previousRecommendedVoiceIds = undefined;
    f.l_(this);
  }
}
class ti extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  constructor(e, t) {
    var a;
    super();
    a = this;
    this._digitalHumanGeneratorManager = e;
    this._digitalHumanDetectService = t;
    this._metadataStore = new tr(this._digitalHumanGeneratorManager);
    this.resetRecommendedVoices = () => {
      this._metadataStore.resetData();
    };
    this.fetchRecommendedVoices = () =>
      r._(function* () {
        const {
          data: { character, characterExtra },
        } = a._digitalHumanGeneratorManager;
        if ((character == null ? undefined : character.type) === "image") {
          const { faceDetectionSceneToInfo = {} } = characterExtra;
          a._metadataStore.setRecommendedVoices({
            data: undefined,
            loading: true,
            error: undefined,
          });
          const imageUris = Object.values(faceDetectionSceneToInfo)
            .flatMap((e) => {
              var t;
              var { faceDetails } = e;
              if (
                (t =
                  faceDetails == null
                    ? undefined
                    : faceDetails.map((e) => {
                        var { faceImage } = e;
                        return faceImage.imageUri;
                      })) != null
              ) {
                return t;
              }
              return [];
            })
            .concat(character.uri ? [character.uri] : []);
          const n = yield a._digitalHumanDetectService.fetchRecommendedVoices({
            imageUris,
          });
          a._digitalHumanGeneratorManager.reportManager.voiceRecommendationReportManager.reportLipSyncVoiceMatch(
            n,
            imageUris,
          );
          if (!n.ok) {
            return void a._metadataStore.setRecommendedVoices({
              data: undefined,
              loading: false,
              error: n.findJsError(),
            });
          }
          const { faceImageUriToRecommendedVoiceIds } = n.value;
          a._metadataStore.setRecommendedVoices({
            data: faceImageUriToRecommendedVoiceIds,
            loading: false,
            error: undefined,
          });
        }
      })();
    this.recommendVoice = () => {
      var { recommendedVoiceIds, previousRecommendedVoiceIds } = this.metadata;
      var {
        data: { character },
      } = this._digitalHumanGeneratorManager;
      if (
        (character == null ? undefined : character.type) === "image" &&
        character.uri
      ) {
        var { voiceManager } = this._digitalHumanGeneratorManager;
        var {
          data: { selectedVoiceId },
          selectVoice,
          disposeSpeechAudio,
        } = voiceManager;
        if (
          (typeof selectedVoiceId !== "string" ||
            (previousRecommendedVoiceIds == null
              ? undefined
              : previousRecommendedVoiceIds.includes(selectedVoiceId))) &&
          recommendedVoiceIds.length
        ) {
          disposeSpeechAudio();
          selectVoice(recommendedVoiceIds[0], {
            silent: true,
          });
          this._metadataStore.setPreviousRecommendedVoiceIds(
            recommendedVoiceIds,
          );
        }
      }
    };
  }
}
ti = i.Cg(
  [
    i.Qj(1, S.$),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof DigitalHumanGeneratorManager === "undefined"
        ? Object
        : DigitalHumanGeneratorManager,
      S.$ === undefined ? Object : S.$,
    ]),
  ],
  ti,
);
class tn extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  cleanupSideEffects() {
    this.voiceManager.pauseSpeechAudio();
  }
  syncModelConfig(e) {
    const { data, loading } = e;
    this._metadataStore.setIsModelListLoading(loading);
    if (!loading && (data == null ? undefined : data.ok)) {
      const {
        value: {
          imageModels,
          videoModels,
          defaultImageModel,
          defaultVideoModel,
          disabled,
        },
      } = data;
      this._metadataStore.setIsModelListVisible(!disabled);
      this._metadataStore.setImageModels(imageModels);
      this._metadataStore.setVideoModels(videoModels);
      if (defaultImageModel) {
        this._metadataStore.defaultImageModel = defaultImageModel;
      }
      if (defaultVideoModel) {
        this._metadataStore.defaultVideoModel = defaultVideoModel;
      }
      const c = defaultImageModel || defaultVideoModel;
      if (c) {
        this._metadataStore.setFallbackModel(c);
        this.setModel(c.key);
      }
    }
  }
  setSubmitButtonLoading(e) {
    this._metadataStore.setSubmitButtonLoading(e);
  }
  setCharacter(e, t) {
    this._dataStore.setCharacter(e, t);
  }
  updateCharacterExtra(e) {
    this._dataStore.updateCharacterExtra(e);
  }
  isFirstTimeMultipleFacesDetected() {
    return !!localStorage.getItem(_);
  }
  recordIsFirstTimeMultipleFacesDetected() {
    localStorage.setItem(_, "true");
  }
  updateCharacterProcessStatus(e) {
    this._dataStore.updateCharacterProcessStatus(e);
  }
  resetCharacter() {
    const { character } = this._dataStore;
    if ((character == null ? undefined : character.type) === "image") {
      this.reportManager.deleteReferenceParams(character.uri);
    }
    this._dataStore.resetCharacter();
  }
  _fallbackToAlternativeModel(e) {
    const { modelKey } = this.data;
    if (modelKey !== e) {
      this.setModel(e);
      this._notificationService.normal(
        n.Ay.t(
          "web_new_dre_auto_match_model_toast",
          {},
          "已为您匹配至最佳模型",
        ),
      );
    }
  }
  _initCommercialFeatureListeners() {
    return r
      ._(function* () {
        const e = yield this._commercialFeatureContainerService.getInstance();
        this._metadataStore.setIsInFreemiumStage(
          e.commercialStrategyService.isInFreemiumStage,
        );
        this._register(
          e.commercialStrategyService.onIsInFreemiumStageChange((e) => {
            this._metadataStore.setIsInFreemiumStage(e);
          }),
        );
      })
      .call(this);
  }
  _initDefaultModel() {
    let e;
    let t;
    const { modelOptions } = this._metadataStore;
    if (modelOptions.length) {
      const r =
        (e =
          (t = modelOptions.find(
            (e) => e.value === this._dataStore.modelKey,
          )) == null
            ? undefined
            : t.value) != null
          ? e
          : modelOptions[0].value;
      this.setModel(r);
    }
  }
  constructor(e, t, a, r) {
    super();
    this.contentGeneratorManager = e;
    this._containerService = t;
    this._commercialFeatureContainerService = a;
    this._notificationService = r;
    this.characterManager = this._register(
      this._containerService.createInstance(Q, this),
    );
    this.voiceManager = this._register(
      this._containerService.createInstance(h.a, {
        getModelKey: () => u._3,
      }),
    );
    this.voiceRecommendationManager = this._register(
      this._containerService.createInstance(ti, this),
    );
    this.textToSpeechManager = this._register(
      this._containerService.createInstance(m.W, this.voiceManager, {
        maxTextLength: g.O({
          domesticTextLimit: 120,
        }),
        get fallbackText() {
          return n.Ay.t(
            "web_new_dreamina_lipsync_tts_demo_text",
            {},
            "欢迎使用对口型功能，让你的故事镜头栩栩如生",
          );
        },
      }),
    );
    this.speechToSpeechManager = this._register(
      this._containerService.createInstance(e8, this),
    );
    this.audioTrimManager = this._register(
      this._containerService.createInstance(H),
    );
    this.audioSilenceManager = this._register(
      this._containerService.createInstance(I),
    );
    this.dataAdapter = this._register(
      this._containerService.createInstance(em, this),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(tt, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(eZ, this),
    );
    this._metadataStore = new eb(this);
    this._dataStore = new eC(this);
    this.insertSubject = (e, t) =>
      s.xz(
        -1,
        n.Ay.t(
          "subject_type_not_supported_in_mode",
          {},
          "当前模式不支持该类型主体",
        ),
      );
    this.setPrompt = (e) => {
      this._dataStore.setPrompt(e);
      var { promptValidationResult } = this._dataStore;
      if (promptValidationResult.ok) {
        this.audioSilenceManager.updateAudioSilenceInfo(e);
      }
    };
    this.changePrompt = (e) => {
      if (e !== this._dataStore.prompt) {
        this.setPrompt(e);
        var { isPromptEmpty, promptValidationResult } = this._dataStore;
        if (!(isPromptEmpty || promptValidationResult.ok)) {
          this._notificationService.warning(promptValidationResult.msg);
        }
      }
    };
    this.switchModel = (e) => {
      this.setModel(e);
      this.reportManager.reportSwitchLipSyncMode();
    };
    this.setModel = (e) => {
      var { models } = this.metadata;
      var a = models.find((t) => t.key === e);
      if (a) {
        this._dataStore.setModelKey(a.key);
      }
    };
    this.selectSpeakingCharacter = (e) => {
      var { recommendVoice } = this.voiceRecommendationManager;
      this._dataStore.setSpeakingCharacterImageUri(e);
      recommendVoice();
    };
    this.selectAvailableModel = () => {
      var {
        defaultImageModel,
        defaultVideoModel,
        fallbackModel,
        modelOptions,
      } = this.metadata;
      var { modelKey, character } = this.data;
      if (character) {
        var o = modelOptions.find((e) => e.value === modelKey);
        if (o == null ? undefined : o.disabled) {
          var s = character.type;
          var c = "";
          c =
            s === "image" && defaultImageModel
              ? defaultImageModel.key
              : s === "video" && defaultVideoModel
                ? defaultVideoModel.key
                : fallbackModel.key;
          var d = modelOptions.find((e) => e.value === c);
          if (d && !d.disabled) {
            return void this._fallbackToAlternativeModel(c);
          }
          var l = modelOptions.find((e) => !e.disabled);
          if (!l) {
            return void this.resetCharacter();
          }
          this._fallbackToAlternativeModel(l.value);
        }
      }
    };
    this.removeVoice = () => {
      var {
        resetVoice,
        metadata: { speechSourceType },
      } = this.voiceManager;
      var { removeOriginalAudio } = this.speechToSpeechManager;
      resetVoice();
      if (speechSourceType === "speech-to-speech") {
        removeOriginalAudio();
      }
    };
    this.voiceManager.switchToTextToSpeech(this.textToSpeechManager);
    this._initCommercialFeatureListeners();
    this._initDefaultModel();
  }
}
export { tn as A };
tn = i.Cg(
  [
    i.Qj(1, d._),
    i.Qj(2, l.X),
    i.Qj(3, c.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      d._ === undefined ? Object : d._,
      l.X === undefined ? Object : l.X,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  tn,
);
