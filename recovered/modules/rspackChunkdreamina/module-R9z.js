import a from "NY";
import i from "QWK";
import n from "Qey";
import o from "o7";
import s from "K8";
import l from "aEB";
import c from "Kt";
import d from "gG";
import u from "iNQ";
import h from "Fw";
import g from "AAv";
import m from "kT";
import p from "mFN";
import _ from "wh";
import v from "v1T";
import { g as g_1 } from "./module-Gg7.js";
import { p as p_1 } from "./module-baR.js";
import y from "oa";
import M from "Ko";
import k from "Oqj";
import R from "IHa";
import I from "Y9q";
import b from "mir";
import C from "dw4";
import P from "b3";
import A from "iU";
import G from "Oqv";
import w from "Iqn";
import D from "Nyo";
import x from "bk";
import E from "Ut";
import O from "sV8";
import U from "u3a";
import V from "aS";
import N from "LLl";
import K from "yMd";
import z from "fHC";
import W from "Qxy";
import B from "WUK";
import Q from "dHI";
import q from "m7A";
import H from "z8f";
import J from "JEp";
import Z from "QPN";
import $ from "JG";
import Y from "uhr";
import { E as E_1 } from "./module-cfI.js";
import et from "h28";
import er from "Qa1";
import ea from "gu";
import ei from "Ook";
import en from "ZHm";
import * as eo from "./module-Xfi.js";
class T {
  get hasReferences() {
    return this.references.length > 0;
  }
  get isPromptEmpty() {
    return !this.prompt.trim();
  }
  get editorDocument() {
    return this._audioGeneratorManager.audioSeparationManager.promptEditorManager.transformPromptToEditorDocument(
      this.prompt,
    );
  }
  get isPristine() {
    return this.isPromptEmpty && !this.hasReferences;
  }
  get promptValidationResult() {
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    return P.f(this.prompt, {
      allowEmpty: false,
      maxLength:
        model == null || (e = model.audioSeparationConfig) == null
          ? undefined
          : e.maxPromptLength,
    });
  }
  get validationResult() {
    const { audioSeparationManager } = this._audioGeneratorManager;
    const {
      metadata: { referenceValidationLimits },
    } = audioSeparationManager;
    const r = A.Z({
      materials: this.references,
      limits: referenceValidationLimits,
    });
    if (r.ok) {
      return this.promptValidationResult;
    }
    return r;
  }
  setPrompt(e) {
    this.prompt = e;
  }
  setData(e) {
    const { prompt, references } = e;
    this.prompt = prompt;
    this.references = references;
  }
  addResources(e) {
    this.references = [...this.references, ...e];
  }
  setResource(e, t) {
    const r = [...this.references];
    r[t] = e;
    this.references = r;
  }
  removeReferences(e) {
    const t = new Set(e);
    this.references = this.references.filter((e) => !t.has(e.id));
  }
  resetData() {
    this.prompt = "";
    this.references = [];
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    this.prompt = "";
    this.references = [];
    C.l_(this);
  }
}
class j {
  get placeholders() {
    let e;
    const {
      data: { model },
      audioSeparationManager,
    } = this._audioGeneratorManager;
    const a =
      model == null || (e = model.audioSeparationConfig) == null
        ? undefined
        : e.promptPlaceholderConfig;
    if (!a) {
      return [];
    }
    const {
      data: { hasReferences },
    } = audioSeparationManager;
    return (
      hasReferences ? a.withReferenceStarlingKeys : a.defaultStarlingKeys
    ).map((e) => n.Ay.t(e));
  }
  get _referenceLimits() {
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    if (model == null || (e = model.audioSeparationConfig) == null) {
      return undefined;
    }
    return e.referenceLimits;
  }
  get referenceValidationLimits() {
    let e;
    if ((e = this._referenceLimits) != null) {
      return e;
    }
    return {};
  }
  get acceptedResourceTypes() {
    let e;
    let t;
    return Object.keys(
      (e =
        (t = this._referenceLimits) == null ? undefined : t.materialLimits) !=
        null
        ? e
        : {},
    );
  }
  get acceptedFileTypes() {
    let e;
    let t;
    if (
      (e =
        (t = this._referenceLimits) == null
          ? undefined
          : t.acceptedFileTypes) != null
    ) {
      return e;
    }
    return {};
  }
  get referenceAdditionValidationResult() {
    const { audioSeparationManager } = this._audioGeneratorManager;
    const {
      data: { references },
    } = audioSeparationManager;
    return G.y({
      materials: references,
      limits: this.referenceValidationLimits,
      candidateTypes: this.acceptedResourceTypes,
    });
  }
  get referenceUploadTooltipProps() {
    return {
      content: this.referenceAdditionValidationResult.ok
        ? w.N(this.referenceValidationLimits.materialCombinationRule, {
            acceptedTypes: this.acceptedResourceTypes,
          })
        : this.referenceAdditionValidationResult.msg,
    };
  }
  get referenceUploadVisible() {
    const { audioSeparationManager } = this._audioGeneratorManager;
    const {
      data: { hasReferences },
    } = audioSeparationManager;
    return !hasReferences || this.referenceAdditionValidationResult.ok;
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    C.l_(this);
  }
}
class F extends D.Z {
  _createTextContent(e) {
    return {
      type: "text",
      text: e,
    };
  }
  constructor(...e) {
    super(...e);
    this.transformPromptContentToNodes = (e) =>
      super.transformPromptContentToNodes(e);
    this.transformPromptToEditorDocument = (e) =>
      this.transformPromptContentsToEditorDocument([
        {
          type: "text",
          text: e,
        },
      ]);
    this.transformEditorDocumentToPrompt = (e) =>
      this.transformEditorDocumentToPromptContents(e)
        .map((e) => {
          var { text } = e;
          return text;
        })
        .join("");
  }
}
class L extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  _reportImportResourcesFromLocal(e, t) {
    for (const r of e) {
      this._audioGeneratorManager.reportManager.reportImportReferenceMaterial(
        y._(
          {
            materialType: r.type,
          },
          t,
        ),
      );
    }
  }
  _validateReferencesChange(e) {
    return R.T({
      materials: e,
      limits: this._metadataStore.referenceValidationLimits,
    });
  }
  constructor(e, t, r) {
    var i;
    super();
    i = this;
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this.promptEditorManager = this._register(
      this._containerService.createInstance(F),
    );
    this._metadataStore = new j(this._audioGeneratorManager);
    this._dataStore = new T(this._audioGeneratorManager);
    this.setPrompt = (e) => {
      this._dataStore.setPrompt(e);
    };
    this.changeEditorDocument = (e) => {
      this.setPrompt(
        this.promptEditorManager.transformEditorDocumentToPrompt(e),
      );
      var { isPromptEmpty, promptValidationResult } = this._dataStore;
      if (!(isPromptEmpty || promptValidationResult.ok)) {
        this._notificationService.warning(promptValidationResult.msg);
      }
    };
    this.setData = (e) => {
      var { references } = e;
      var r = this._validateReferencesChange(references);
      if (r.ok) {
        this._dataStore.setData(e);
        return s.nj();
      }
      this._notificationService.warning(r.msg);
      return r;
    };
    this.importReferenceResourcesFromLocal = (e, t) =>
      a._(function* () {
        if (e.length !== 0) {
          yield i._importResourcesFromLocal(e, i.addReferenceResources, t);
        }
      })();
    this.addReferenceResources = (e) =>
      a._(function* () {
        if (e.length === 0) {
          return s.nj();
        }
        const t = I.I(
          i._containerService,
          e,
          i._metadataStore.acceptedResourceTypes,
        );
        if (!t.length) {
          return s.nj();
        }
        const r = yield b.A(t);
        if (!r.ok) {
          i._notificationService.warning(r.msg);
          return r;
        }
        const a = i._validateReferencesChange([
          ...i._dataStore.references,
          ...t,
        ]);
        if (a.ok) {
          i._dataStore.addResources(t);
          return s.nj();
        }
        i._notificationService.warning(a.msg);
        return a;
      })();
    this.replaceReferenceResourceFromLocal = (e, t) =>
      a._(function* () {
        yield i._importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            var a = i._dataStore.references.findIndex((e) => e.id === t);
            if (a < 0) {
              return Promise.resolve(s.nj());
            }
            return i.replaceReferenceResource(a, r);
          },
          {
            reportParams: {
              importMaterialParams: {
                actionType: "drag",
              },
            },
          },
        );
      })();
    this.replaceReferenceResource = (e, t) =>
      a._(function* () {
        const { references } = i._dataStore;
        if (e >= references.length) {
          return i.addReferenceResources([t]);
        }
        const a = I.I(
          i._containerService,
          [t],
          i._metadataStore.acceptedResourceTypes,
        );
        if (!a.length) {
          return s.nj();
        }
        const n = a[0];
        const o = yield b.A([n]);
        if (!o.ok) {
          i._notificationService.warning(o.msg);
          return o;
        }
        const l = references.filter((t, r) => r !== e);
        const c = i._validateReferencesChange([...l, n]);
        if (c.ok) {
          i._dataStore.setResource(n, e);
          return s.nj();
        }
        i._notificationService.warning(c.msg);
        return c;
      })();
    this.removeReferenceResource = (e) => {
      this.removeReferenceResources([e]);
    };
    this.removeReferenceResources = (e) => {
      if (e.length !== 0) {
        this._dataStore.removeReferences(e);
      }
    };
    this.resetData = () => {
      this._dataStore.resetData();
    };
    this._importResourcesFromLocal = function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return a._(function* () {
        const {
          reportParams: {
            importMaterialParams: { actionType = "click" } = {},
          } = {},
        } = r;
        const { acceptedFileTypes } = i._metadataStore;
        const { acceptedFiles } = M.g(
          i._containerService,
          e,
          acceptedFileTypes,
        );
        const s = acceptedFiles
          .map((e) => k.f(i._containerService, e))
          .filter(
            (e) =>
              e !== null &&
              (e.type === "image" || e.type === "video" || e.type === "audio"),
          );
        if (s.length) {
          const l = yield t(s);
          if (!l.ok) {
            return void i._reportImportResourcesFromLocal(s, {
              status: "fail",
              actionType,
              failReason: l.msg,
            });
          }
          s.forEach((e) => void e.resolveUri());
          yield Promise.all(
            s.filter((e) => e.type === "video").map((e) => e.resolveCoverUrl()),
          );
          i._reportImportResourcesFromLocal(s, {
            status: "success",
            actionType,
          });
        }
      })();
    };
  }
}
L = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, l.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  L,
);
class ee extends o.jG {
  applyPrompt(e) {
    const {
      data: { feature },
      omniDubbingManager,
      textReadingManager,
      audioSeparationManager,
    } = this._audioGeneratorManager;
    switch (feature) {
      case "omniDubbing":
        omniDubbingManager.changePromptContents([
          {
            type: "text",
            text: e,
          },
        ]);
        break;
      case "textReading":
        textReadingManager.updateText(e);
        break;
      case "audioSeparation":
        audioSeparationManager.setPrompt(e);
        break;
      default:
        this._notificationService.warning(
          n.Ay.t("web_text_prompt_not_supported", {}, "当前生成器不支持提示词"),
        );
    }
  }
  applyRichPrompt(e) {
    const {
      data: { feature },
      omniDubbingManager,
    } = this._audioGeneratorManager;
    if (feature !== "omniDubbing") {
      return Promise.resolve(B.P());
    }
    const a = {
      references: I.I(this._containerService, e.resources, [
        "image",
        "video",
        "audio",
      ]),
      promptContents: [...e.promptContents],
    };
    const i = omniDubbingManager.setData(a);
    if (i.ok) {
      this._refreshLatestSubjects(a.promptContents);
      return Promise.resolve(s.nj());
    }
    return Promise.resolve(i);
  }
  importRecordAsReference(e, t, r) {
    const a = Q.R(this._containerService, e, t);
    if (a) {
      return this.importReferenceResources([a], r);
    }
    return Promise.resolve(s.nj());
  }
  importReferencesInRecord(e) {
    if (!O.n(e) && !U.f(e)) {
      return Promise.resolve(s.nj());
    }
    const t = V.g(e) ? e.videoDubbingInfo : e;
    const { textToSpeechAbility, sourceMaterial } = t != null ? t : {};
    if (!textToSpeechAbility) {
      return Promise.resolve(s.nj());
    }
    const { mode, modelReqKey } = textToSpeechAbility;
    if (mode === E.DAGenerateTTSMode.VideoTranslation) {
      const {
        videoTranslationManager: {
          data: { targetLanguages },
        },
      } = this._audioGeneratorManager;
      return Promise.resolve(
        this._restoreVideoTranslationData({
          audioGeneratorData: {
            feature: "videoTranslation",
            modelKey: modelReqKey,
          },
          videoTranslationData: {
            references: this._transformSourceMaterialToReferences(
              sourceMaterial,
              ["video"],
            ),
            targetLanguages,
          },
        }),
      );
    }
    if (mode === E.DAGenerateTTSMode.AudioSeparation) {
      const {
        audioSeparationManager: {
          data: { prompt },
        },
      } = this._audioGeneratorManager;
      return Promise.resolve(
        this._restoreAudioSeparationData({
          audioGeneratorData: {
            feature: "audioSeparation",
            modelKey: modelReqKey,
          },
          audioSeparationData: {
            references: this._transformSourceMaterialToReferences(
              sourceMaterial,
              ["video", "audio"],
            ),
            prompt,
          },
        }),
      );
    }
    return Promise.resolve(s.nj());
  }
  importWorkDetailAsReference(e) {
    if (!N.Y(e)) {
      return s.nj();
    }
    const t = q.w(this._containerService, e);
    if (t) {
      this.importReferenceResources([t]);
    }
    return s.nj();
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return s.nj();
    }
    var t;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const a = videoGenInputs.find((e) => !!e.firstFrameImage);
    const i = a == null ? undefined : a.firstFrameImage;
    if (!i) {
      return s.nj();
    }
    const n = H.h(this._containerService, i, {
      resolutionUrlMap: e.commonAttr.coverUrlMap,
      cacheKey: e.commonAttr.id,
      aigcItemId: e.commonAttr.id,
    });
    this.importReferenceResources([n]);
    return s.nj();
  }
  reeditGenerationDataInWorkDetail() {
    return B.P();
  }
  importReferenceResources(e, t) {
    return a
      ._(function* () {
        const {
          data: { feature },
          voiceManager,
          reportManager,
        } = this._audioGeneratorManager;
        if (feature === "textReading") {
          const {
            metadata: { isVoiceCloningSupported },
          } = voiceManager;
          const o = I.I(
            this._containerService,
            e,
            isVoiceCloningSupported ? ["audio"] : [],
          );
          if (!o.length) {
            return s.nj();
          }
          const l = yield voiceManager.cloneVoices(o, {
            reportParams: {
              importMaterialParams: {
                modal: "aigc_audio",
                position: "generation",
                actionType: "click",
              },
            },
          });
          J.j(
            o.filter((e, t) => {
              var r;
              if ((r = l[t]) == null) {
                return undefined;
              }
              return r.ok;
            }),
            reportManager,
          );
          return s.nj();
        }
        const {
          metadata: { acceptedResourceTypes },
          addReferenceResources,
          replaceReferenceResource,
        } = this._audioGeneratorManager["".concat(feature, "Manager")];
        const h = I.I(this._containerService, e, acceptedResourceTypes);
        if (h.length) {
          if (typeof t === "number" && h.length === 1) {
            if ((yield replaceReferenceResource(t, h[0])).ok) {
              J.j([h[0]], reportManager);
            }
          } else if ((yield addReferenceResources(h)).ok) {
            J.j(h, reportManager);
          }
        }
        return s.nj();
      })
      .call(this);
  }
  importAsOmniDubbingReference(e, t, r) {
    const { contentGeneratorManager } = this._audioGeneratorManager;
    const { setContentGeneratorType, activateContentGenerator } =
      contentGeneratorManager;
    setContentGeneratorType("audio");
    this._importRecordAsFeatureReference(e, t, "omniDubbing", r);
    activateContentGenerator();
  }
  importAsVideoTranslationReference(e, t, r) {
    const { contentGeneratorManager } = this._audioGeneratorManager;
    const { setContentGeneratorType, activateContentGenerator } =
      contentGeneratorManager;
    setContentGeneratorType("audio");
    this._importRecordAsFeatureReference(e, t, "videoTranslation", r);
    activateContentGenerator();
  }
  importAsAudioSeparationReference(e, t, r) {
    const { contentGeneratorManager } = this._audioGeneratorManager;
    const { setContentGeneratorType, activateContentGenerator } =
      contentGeneratorManager;
    setContentGeneratorType("audio");
    this._importRecordAsFeatureReference(e, t, "audioSeparation", r);
    activateContentGenerator();
  }
  reeditGenerationDataInRecord(e) {
    if (!O.n(e) && !U.f(e)) {
      return Promise.resolve(s.nj());
    }
    let t;
    const r = V.g(e) ? e.videoDubbingInfo : e;
    const { textToSpeechAbility, unifiedEditInput, sourceMaterial } =
      r != null ? r : {};
    if (!textToSpeechAbility) {
      return Promise.resolve(s.nj());
    }
    const { mode, modelReqKey, videoTranslationParam, audioSeparationParam } =
      textToSpeechAbility;
    if (mode === E.DAGenerateTTSMode.UnifiedEdit) {
      return Promise.resolve(
        this._reeditOmniDubbingGenerationDataInRecord(
          unifiedEditInput,
          textToSpeechAbility,
        ),
      );
    }
    if (mode === E.DAGenerateTTSMode.VideoTranslation) {
      return Promise.resolve(
        this._restoreVideoTranslationData({
          audioGeneratorData: {
            feature: "videoTranslation",
            modelKey: modelReqKey,
          },
          videoTranslationData: {
            references: this._transformSourceMaterialToReferences(
              sourceMaterial,
              ["video"],
            ),
            targetLanguages: (
              videoTranslationParam == null
                ? undefined
                : videoTranslationParam.targetLanguage
            )
              ? [videoTranslationParam.targetLanguage]
              : [],
          },
        }),
      );
    }
    if (mode === E.DAGenerateTTSMode.AudioSeparation) {
      return Promise.resolve(
        this._restoreAudioSeparationData({
          audioGeneratorData: {
            feature: "audioSeparation",
            modelKey: modelReqKey,
          },
          audioSeparationData: {
            references: this._transformSourceMaterialToReferences(
              sourceMaterial,
              ["video", "audio"],
            ),
            prompt:
              (t =
                audioSeparationParam == null
                  ? undefined
                  : audioSeparationParam.prompt) != null
                ? t
                : "",
          },
        }),
      );
    }
    const u = this._audioGeneratorManager.setData({
      feature: "textReading",
      modelKey: modelReqKey,
    });
    if (!u.ok) {
      this._notificationService.warning(u.msg);
      return Promise.resolve(u);
    }
    const { textReadingManager } = this._audioGeneratorManager;
    textReadingManager.setData(
      x._(y._({}, this._buildTextToSpeechData(textToSpeechAbility)), {
        voiceData: this._buildVoiceData(textToSpeechAbility),
      }),
    );
    return Promise.resolve(s.nj());
  }
  _reeditOmniDubbingGenerationDataInRecord(e, t) {
    if (!e) {
      return s.nj();
    }
    const r = this._buildOmniDubbingDataFromUnifiedEditInput(e);
    const { modelReqKey } = t;
    const { omniDubbingManager } = this._audioGeneratorManager;
    const n = this._audioGeneratorManager.setData({
      feature: "omniDubbing",
      modelKey: modelReqKey,
    });
    if (!n.ok) {
      this._notificationService.warning(n.msg);
      return n;
    }
    const o = omniDubbingManager.setData(r);
    if (o.ok) {
      this._refreshLatestSubjects(r.promptContents);
      return s.nj();
    }
    return o;
  }
  _restoreVideoTranslationData(e) {
    const { audioGeneratorData, videoTranslationData } = e;
    const { videoTranslationManager } = this._audioGeneratorManager;
    const i = this._audioGeneratorManager.setData(audioGeneratorData);
    if (i.ok) {
      return videoTranslationManager.setData(videoTranslationData);
    }
    this._notificationService.warning(i.msg);
    return i;
  }
  _restoreAudioSeparationData(e) {
    const { audioGeneratorData, audioSeparationData } = e;
    const { audioSeparationManager } = this._audioGeneratorManager;
    const i = this._audioGeneratorManager.setData(audioGeneratorData);
    if (i.ok) {
      return audioSeparationManager.setData(audioSeparationData);
    }
    this._notificationService.warning(i.msg);
    return i;
  }
  _transformSourceMaterialToReferences(e, acceptedResourceTypes) {
    if (!e) {
      return [];
    }
    const r = Z.j(this._containerService, e, {
      acceptedResourceTypes,
    });
    if (r) {
      return [r];
    }
    return [];
  }
  _buildOmniDubbingDataFromUnifiedEditInput(e) {
    const { references, promptContents } = $.U(this._containerService, e, {
      acceptedResourceTypes: ["image", "video", "audio"],
    });
    return {
      references,
      promptContents,
    };
  }
  _refreshLatestSubjects(e) {
    const { omniDubbingManager } = this._audioGeneratorManager;
    Y.r(this._containerService, e, {
      setPromptContents: omniDubbingManager.changePromptContents,
      getCurrentPromptContents: () => omniDubbingManager.data.promptContents,
    });
  }
  _buildTextToSpeechData(e) {
    const { text } = e;
    return {
      text,
    };
  }
  _buildVoiceData(e) {
    let t;
    let r;
    const voice = this._buildVoice(e);
    const { audioConfig = new E.DAAudioConfig() } = e;
    const speed = audioConfig.speechRate / 100 + 1;
    const emotion = {
      type: (t = audioConfig.emotion) != null ? t : "",
      scale: (r = audioConfig.emotionScale) != null ? r : 0,
    };
    return {
      voiceCategory: W.y3,
      voice,
      speed,
      emotion,
      speechAudio: undefined,
    };
  }
  _buildVoice(e) {
    const { idInfo: { id, itemPlatform } = new E.DAIdInfo(), voiceName } = e;
    const i = {
      id,
      name: voiceName,
      isFavorite: false,
    };
    if (
      itemPlatform === E.CommonItemPlatform.Local ||
      itemPlatform === E.CommonItemPlatform.Template
    ) {
      return x._(y._({}, i), {
        itemPlatform,
        effectType: K.NB.ClonedVoice,
        voiceCloning: {
          status: z.$Q.Success,
        },
      });
    }
    return x._(y._({}, i), {
      itemPlatform: E.CommonItemPlatform.Dmop,
      effectType: K.NB.Voice,
      tags: {},
      isSpeedAdjustmentEnabled: false,
      isVoiceConversionEnabled: false,
      emotions: [],
    });
  }
  _importRecordAsFeatureReference(e, t, r, i) {
    return a
      ._(function* () {
        const _audioGeneratorManager = this._audioGeneratorManager;
        _audioGeneratorManager.setFeature(r);
        _audioGeneratorManager.currentFeatureManager.resetData();
        const n = Q.R(this._containerService, e, t);
        if (n) {
          const o = this._findModelForFeatureReference(r, [n]);
          if (o) {
            _audioGeneratorManager.setModel(o.key);
          }
          const s = yield _audioGeneratorManager[
            "".concat(r, "Manager")
          ].addReferenceResources([n]);
          if (s.ok) {
            if (
              _audioGeneratorManager.data.feature === r &&
              _audioGeneratorManager[
                "".concat(r, "Manager")
              ].data.references.some((e) => e.id === n.id)
            ) {
              _audioGeneratorManager.reportManager.setResourceReportParams(
                i == null ? undefined : i.reportParams,
              );
              J.j([n], _audioGeneratorManager.reportManager);
            }
          } else {
            this._notificationService.warning(s.msg);
          }
        }
      })
      .call(this);
  }
  _findModelForFeatureReference(e, t) {
    const _audioGeneratorManager = this._audioGeneratorManager;
    const a = E_1[e];
    const modelKey = _audioGeneratorManager.data.modelKey;
    const n = _audioGeneratorManager.metadata.models.filter((e) =>
      e.generateModes.includes(a),
    );
    const o = (r) => {
      var a;
      var i;
      return R.T({
        materials: t,
        limits:
          (a =
            (i = r["".concat(e, "Config")]) == null
              ? undefined
              : i.referenceLimits) != null
            ? a
            : {},
      }).ok;
    };
    const s = n.find((e) => e.key === modelKey);
    if (s && o(s)) {
      return s;
    }
    return n.find((e) => e.key !== modelKey && o(e));
  }
  constructor(e, t, r) {
    super();
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
  }
}
ee = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, l.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  ee,
);
class es {
  get model() {
    const {
      metadata: { models },
    } = this._audioGeneratorManager;
    return models.find((e) => e.key === this.modelKey);
  }
  get feature() {
    let e;
    let t;
    let r;
    if (
      (e =
        (t = this._feature) != null
          ? t
          : (r = this._audioGeneratorManager.metadata.featureOptions.at(0)) ==
              null
            ? undefined
            : r.value) != null
    ) {
      return e;
    }
    return "textReading";
  }
  get isPristine() {
    return this._audioGeneratorManager.currentFeatureManager.data.isPristine;
  }
  get isPromptEmpty() {
    return this._audioGeneratorManager.currentFeatureManager.data.isPromptEmpty;
  }
  get validationResult() {
    return this._audioGeneratorManager.currentFeatureManager.data
      .validationResult;
  }
  get references() {
    return this._audioGeneratorManager.currentFeatureManager.data.references;
  }
  get commercialSceneOptions() {
    let e;
    const { textReadingManager } = this._audioGeneratorManager;
    const {
      data: { text },
    } = textReadingManager;
    const a = this.feature === "textReading" ? et.h(text) : 0;
    return er.r({
      scene: ea.Sk.AudioTTSGenerate,
      audioDuration: a,
      modelReqKey: (e = this.model) == null ? undefined : e.key,
      benefitAmount: ei.D({
        modelConfig: this.model,
        chargeUnits: a,
      }),
      reportParams: y._(
        {},
        en.YQ(this._audioGeneratorManager.reportManager.resourceReportParams),
      ),
    });
  }
  setData(e) {
    const { feature, modelKey } = e;
    this._feature = feature;
    this.modelKey = modelKey;
  }
  setFeature(e) {
    this._feature = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    this.modelKey = "";
    this._feature = undefined;
    C.l_(this);
  }
}
i.Cg([eo.A()], es.prototype, "modelKey", undefined);
es = i.Cg(
  [
    eo.L("audio"),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
    ]),
  ],
  es,
);
const el = require("./module-PGp.js");
const ec = require("./module-qCI.js");
class ed {
  get models() {
    return this._models;
  }
  get featureOptions() {
    return el.H.filter((e) => ec.X(this.models, e.value));
  }
  get modelOptions() {
    return this.models.map((e) => {
      var t = g_1(this._audioGeneratorManager, e);
      return {
        label: e.name,
        value: e.key,
        disabled: !t.ok,
        extra: {
          coverUrl: e.coverUrl,
          iconUrl: e.iconUrl,
          description: e.description,
          source: e.source,
          tag: e.iconTag,
          commercial: {
            sceneOptions: this._buildModelCommercialSceneOptions(e),
          },
          tooltipProps: t.ok
            ? undefined
            : {
                content: t.msg,
              },
        },
      };
    });
  }
  get referenceUploadVisible() {
    return this._audioGeneratorManager.currentFeatureManager.metadata
      .referenceUploadVisible;
  }
  get submitButtonDisabled() {
    const {
      data: { validationResult },
    } = this._audioGeneratorManager;
    return !validationResult.ok;
  }
  get submitButtonTooltipProps() {
    const {
      data: { validationResult },
    } = this._audioGeneratorManager;
    return {
      content: validationResult.msg,
    };
  }
  setModels(e) {
    this._models = e;
  }
  _buildModelCommercialSceneOptions(modelConfig) {
    const commercialSceneOptions =
      this._audioGeneratorManager.data.commercialSceneOptions;
    return x._(y._({}, commercialSceneOptions), {
      modelReqKey: modelConfig.key,
      benefitAmount: ei.D({
        modelConfig,
        chargeUnits: commercialSceneOptions.audioDuration,
      }),
    });
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    this._models = [];
    C.l_(this);
  }
}
const eu = require("./module-iuD.js");
const eh = require("krN");
const eg = require("rGr");
const em = require("n4G");
const ep = require("VOK");
const e_ = require("lt");
const ev = require("Erm");
const ef = require("./module-ejz.js");
class eS {
  get hasReferences() {
    return this.references.length > 0;
  }
  get isPromptEmpty() {
    return this.promptContents.every(
      (e) => e.type === "text" && !e.text.trim(),
    );
  }
  get isPristine() {
    return this.isPromptEmpty && !this.hasReferences;
  }
  get validationResult() {
    let e;
    const {
      data: { model },
      omniDubbingManager,
    } = this._audioGeneratorManager;
    const {
      metadata: { referenceValidationLimits, acceptedSubjectContentTypes },
    } = omniDubbingManager;
    const n = A.Z({
      materials: em.G({
        resources: this.references,
        subjects: e_.I(this.promptContents),
        subjectMaterialPicker: (e) => ef.h(e, acceptedSubjectContentTypes),
      }),
      limits: referenceValidationLimits,
    });
    if (!n.ok) {
      return n;
    }
    const o = this.promptContents
      .flatMap((e) => {
        if (e.type === "text") {
          return [e.text];
        }
        return [];
      })
      .join("");
    return P.f(o, {
      allowEmpty: this.promptContents.some((e) => e.type !== "text"),
      maxLength:
        model == null || (e = model.omniDubbingConfig) == null
          ? undefined
          : e.maxPromptLength,
    });
  }
  get editorDocument() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const { promptEditorManager } = omniDubbingManager;
    const { transformPromptContentsToEditorDocument } = promptEditorManager;
    return transformPromptContentsToEditorDocument(this.promptContents);
  }
  setPromptContents(e) {
    this.promptContents = e;
  }
  addResources(e) {
    this.references = [...this.references, ...e];
  }
  setResource(e, t) {
    const r = [...this.references];
    r[t] = e;
    this.references = r;
  }
  setVoiceReferenceId(e, t) {
    this.voiceReferenceIdToVoiceId[e] = t;
  }
  removeVoiceReferenceId(e) {
    delete this.voiceReferenceIdToVoiceId[e];
  }
  removeReferences(e) {
    const t = new Set(e);
    this.references = this.references.filter((e) => !t.has(e.id));
    this.promptContents = this.promptContents.filter(
      (e) => e.type === "text" || !t.has(e.id),
    );
    e.forEach((e) => this.removeVoiceReferenceId(e));
  }
  moveReference(e, t) {
    if (e !== t) {
      const r = [...this.references];
      const [a] = r.splice(e, 1);
      r.splice(t, 0, a);
      this.references = r;
    }
  }
  resetData() {
    this.references = [];
    this.promptContents = [];
    this.voiceReferenceIdToVoiceId = {};
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    this.references = [];
    this.promptContents = [];
    this.voiceReferenceIdToVoiceId = {};
    C.l_(this);
  }
}
const ey = require("LBS");
const eM = require("./module-ghC.js");
class ek {
  get placeholderKey() {
    let e;
    let t;
    const {
      data: { model },
      omniDubbingManager,
    } = this._audioGeneratorManager;
    const i =
      model == null || (t = model.omniDubbingConfig) == null
        ? undefined
        : t.promptPlaceholderConfig;
    if (!i) {
      return "";
    }
    const {
      data: { hasReferences },
    } = omniDubbingManager;
    if (
      (e = (
        hasReferences ? i.withReferenceStarlingKeys : i.defaultStarlingKeys
      ).at(0)) != null
    ) {
      return e;
    }
    return "";
  }
  get referenceIdToLabel() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const {
      data: { references },
    } = omniDubbingManager;
    return ey.v(references);
  }
  get referenceResourceOptions() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const {
      data: { references },
    } = omniDubbingManager;
    return references.map((resource) => ({
      value: resource.id,
      label: this.referenceIdToLabel[resource.id],
      extra: {
        resource,
      },
    }));
  }
  get _referenceLimits() {
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    if (model == null || (e = model.omniDubbingConfig) == null) {
      return undefined;
    }
    return e.referenceLimits;
  }
  get referenceValidationLimits() {
    let e;
    if ((e = this._referenceLimits) != null) {
      return e;
    }
    return {};
  }
  get acceptedFileTypes() {
    let e;
    let t;
    if (
      (e =
        (t = this._referenceLimits) == null
          ? undefined
          : t.acceptedFileTypes) != null
    ) {
      return e;
    }
    return {};
  }
  get acceptedResourceTypes() {
    let e;
    let t;
    return Object.keys(
      (e =
        (t = this._referenceLimits) == null ? undefined : t.materialLimits) !=
        null
        ? e
        : {},
    );
  }
  get acceptedSubjectContentTypes() {
    return new Set(
      Object.values(eh.yC).filter((e) =>
        this.acceptedResourceTypes.includes(e),
      ),
    );
  }
  get referenceAdditionValidationResult() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const {
      data: { references, promptContents },
    } = omniDubbingManager;
    return G.y({
      materials: em.G({
        resources: references,
        resourceMaterialMapper: (e) => ep.M(e, this.referenceValidationLimits),
        subjects: e_.I(promptContents),
        subjectMaterialPicker: (e) => ef.h(e, this.acceptedSubjectContentTypes),
      }),
      limits: this.referenceValidationLimits,
      candidateTypes: this.acceptedResourceTypes,
    });
  }
  get referenceUploadTooltipProps() {
    return {
      content: this.referenceAdditionValidationResult.ok
        ? w.N(this.referenceValidationLimits.materialCombinationRule, {
            acceptedTypes: this.acceptedResourceTypes,
          })
        : this.referenceAdditionValidationResult.msg,
    };
  }
  get referenceUploadVisible() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const {
      data: { hasReferences },
    } = omniDubbingManager;
    return !hasReferences || this.referenceAdditionValidationResult.ok;
  }
  get audioTrimDurationLimits() {
    return eM.d(this.referenceValidationLimits);
  }
  get overlongAudioReferenceIds() {
    const { audioTrimDurationLimits } = this;
    if (!audioTrimDurationLimits) {
      return new Set();
    }
    const { omniDubbingManager } = this._audioGeneratorManager;
    const {
      data: { references },
    } = omniDubbingManager;
    return new Set(
      references
        .filter(
          (t) =>
            t.type === "audio" &&
            t.duration > audioTrimDurationLimits.maxDuration,
        )
        .map((e) => e.id),
    );
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    C.l_(this);
  }
}
const eR = require("R2");
const eI = require("htj");
class eb extends D.Z {
  _createTextContent(e) {
    return {
      type: "text",
      text: e,
    };
  }
  constructor(e) {
    super();
    this._audioGeneratorManager = e;
    this.transformPromptContentToNodes = (e) => {
      if (e.type === "subject") {
        return [
          {
            type: eI.t.SubjectMentionTag,
            attrs: {
              id: e.id,
              subject: e.subject,
              loading: e.loading,
            },
          },
        ];
      }
      if (e.type === "image" || e.type === "video" || e.type === "audio") {
        return [
          {
            type: eI.t.ReferenceMentionTag,
            attrs: {
              id: e.id,
            },
          },
        ];
      }
      return super.transformPromptContentToNodes(e);
    };
    this.transformNodeToPromptContents = (e) => {
      if (e.type === eI.t.SubjectMentionTag) {
        var { id, subject, loading } = e.attrs;
        if (eR.y(id) && subject) {
          return [
            {
              type: "subject",
              id,
              subject,
              loading: loading === true,
            },
          ];
        }
        return [];
      }
      if (e.type === eI.t.ReferenceMentionTag) {
        var { omniDubbingManager } = this._audioGeneratorManager;
        var {
          data: { references },
        } = omniDubbingManager;
        var { id: id_1 } = e.attrs;
        var s = references.find((e) => e.id === id_1);
        if (typeof id_1 === "string" && s) {
          return [
            {
              type: s.type,
              id: id_1,
            },
          ];
        }
        return [];
      }
      return super.transformNodeToPromptContents(e);
    };
  }
}
class eC extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  _reportImportResourcesFromLocal(e, t) {
    for (const r of e) {
      this._audioGeneratorManager.reportManager.reportImportReferenceMaterial(
        y._(
          {
            materialType: r.type,
          },
          t,
        ),
      );
    }
  }
  resetData() {
    this._dataStore.resetData();
  }
  _importReferenceFilesIntoPrompt(e, t) {
    return this._importResourcesFromLocal(
      e,
      (e) =>
        a
          ._(function* () {
            const t = yield this.addReferenceResources(e);
            if (t.ok) {
              this._insertReferencesIntoPrompt(e);
            }
            return t;
          })
          .call(this),
      t,
    );
  }
  _insertReferencesIntoPrompt(e) {
    if (e.length) {
      let t;
      let r;
      const a =
        (r =
          this._audioGeneratorManager.contentGeneratorManager
            .visibleContentGeneratorInstance) == null ||
        (t = r.elements.promptEditorRef) == null
          ? undefined
          : t.current;
      if (a) {
        a.commands.insertContent(
          e.flatMap((e) =>
            this.promptEditorManager.transformPromptContentToNodes({
              type: e.type,
              id: e.id,
            }),
          ),
        );
        a.commands.focus();
      }
    }
  }
  _validateReferencesChange(e) {
    const { resources, subjects } = e;
    const { acceptedSubjectContentTypes, referenceValidationLimits } =
      this._metadataStore;
    return R.T({
      materials: em.G({
        resources,
        resourceMaterialMapper: (e) => ep.M(e, referenceValidationLimits),
        subjects,
        subjectMaterialPicker: (e) => ef.h(e, acceptedSubjectContentTypes),
      }),
      limits: referenceValidationLimits,
    });
  }
  constructor(e, t, r) {
    var i;
    super();
    i = this;
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this.promptEditorManager = this._register(
      this._containerService.createInstance(eb, this._audioGeneratorManager),
    );
    this._metadataStore = new ek(this._audioGeneratorManager);
    this._dataStore = new eS(this._audioGeneratorManager);
    this.setData = (e) => {
      var t = this._validateReferencesChange({
        resources: e.references,
        subjects: e_.I(e.promptContents),
      });
      if (t.ok) {
        this._audioGeneratorManager.voiceManager.resetVoice();
        this._dataStore.resetData();
        this._dataStore.addResources(e.references);
        this._dataStore.setPromptContents(e.promptContents);
        return s.nj();
      }
      this._notificationService.warning(t.msg);
      return t;
    };
    this.importReferenceResourcesFromLocal = (e, t) =>
      a._(function* () {
        if (e.length !== 0) {
          yield i._importResourcesFromLocal(e, i.addReferenceResources, t);
        }
      })();
    this.pasteAsReferences = (e) => {
      if (e.clipboardData) {
        var { acceptedFileTypes } = this._metadataStore;
        var { acceptedFiles } = M.g(
          this._containerService,
          ev.o(e.clipboardData),
          acceptedFileTypes,
        );
        if (acceptedFiles.length) {
          e.preventDefault();
          this._importReferenceFilesIntoPrompt(acceptedFiles, {
            reportParams: {
              importMaterialParams: {
                actionType: "paste",
              },
            },
          });
        }
      }
    };
    this.dropAsReferences = (e) => {
      var { dataTransfer } = e;
      if (!dataTransfer) {
        return;
      }
      var { visibleContentGeneratorInstance } =
        this._audioGeneratorManager.contentGeneratorManager;
      if (visibleContentGeneratorInstance) {
        var { promptEditorRef } = visibleContentGeneratorInstance.elements;
        var i = promptEditorRef == null ? undefined : promptEditorRef.current;
        if (i) {
          var n = i.view.posAtCoords({
            left: e.clientX,
            top: e.clientY,
          });
          if (n == null ? undefined : n.pos) {
            i.commands.setTextSelection(n.pos);
            var { acceptedFileTypes } = this._metadataStore;
            var { acceptedFiles } = M.g(
              this._containerService,
              ev.o(dataTransfer),
              acceptedFileTypes,
            );
            e.preventDefault();
            this._importReferenceFilesIntoPrompt(acceptedFiles, {
              reportParams: {
                importMaterialParams: {
                  actionType: "drag",
                },
              },
            });
          }
        }
      }
    };
    this._importResourcesFromLocal = function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return a._(function* () {
        const {
          reportParams: {
            importMaterialParams: { actionType = "click" } = {},
          } = {},
        } = r;
        const { acceptedFileTypes } = i._metadataStore;
        const { acceptedFiles } = M.g(
          i._containerService,
          e,
          acceptedFileTypes,
        );
        const s = acceptedFiles
          .map((e) => k.f(i._containerService, e))
          .filter(
            (e) =>
              e !== null &&
              (e.type === "image" || e.type === "video" || e.type === "audio"),
          );
        if (s.length) {
          const l = yield t(s);
          if (!l.ok) {
            return void i._reportImportResourcesFromLocal(s, {
              status: "fail",
              actionType,
              failReason: l.msg,
            });
          }
          s.forEach((e) => void e.resolveUri());
          yield Promise.all(
            s.filter((e) => e.type === "video").map((e) => e.resolveCoverUrl()),
          );
          i._reportImportResourcesFromLocal(s, {
            status: "success",
            actionType,
          });
        }
      })();
    };
    this.addReferenceResources = (e) =>
      a._(function* () {
        if (e.length === 0) {
          return s.nj();
        }
        const t = I.I(
          i._containerService,
          e,
          i._metadataStore.acceptedResourceTypes,
        );
        if (!t.length) {
          return s.nj();
        }
        const r = yield b.A(t);
        if (!r.ok) {
          i._notificationService.warning(r.msg);
          return r;
        }
        const a = i._validateReferencesChange({
          resources: [...i._dataStore.references, ...t],
          subjects: e_.I(i._dataStore.promptContents),
        });
        if (a.ok) {
          i._dataStore.addResources(t);
          return s.nj();
        }
        i._notificationService.warning(a.msg);
        return a;
      })();
    this.replaceReferenceResourceFromLocal = (e, t) =>
      a._(function* () {
        yield i._importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            var a = i._dataStore.references.findIndex((e) => e.id === t);
            if (a < 0) {
              return Promise.resolve(s.nj());
            }
            return i.replaceReferenceResource(a, r);
          },
          {
            reportParams: {
              importMaterialParams: {
                actionType: "drag",
              },
            },
          },
        );
      })();
    this.replaceReferenceResource = (e, t) =>
      a._(function* () {
        const { references } = i._dataStore;
        if (e >= references.length) {
          return i.addReferenceResources([t]);
        }
        const a = I.I(
          i._containerService,
          [t],
          i._metadataStore.acceptedResourceTypes,
        );
        if (!a.length) {
          return s.nj();
        }
        const n = a[0];
        const o = yield b.A([n]);
        if (!o.ok) {
          i._notificationService.warning(o.msg);
          return o;
        }
        const l = references.filter((t, r) => r !== e);
        const c = i._validateReferencesChange({
          resources: [...l, n],
          subjects: e_.I(i._dataStore.promptContents),
        });
        if (!c.ok) {
          i._notificationService.warning(c.msg);
          return c;
        }
        const d = references[e].id;
        i._dataStore.setResource(n, e);
        const u = i._dataStore.voiceReferenceIdToVoiceId[d];
        if (u) {
          i._audioGeneratorManager.voiceManager.deselectVoice(u);
        }
        return s.nj();
      })();
    this.addVoiceReference = (e) =>
      a._(function* () {
        if (
          !Object.values(i._dataStore.voiceReferenceIdToVoiceId).includes(e)
        ) {
          const { voiceManager } = i._audioGeneratorManager;
          const r = voiceManager.metadata.voiceIdToVoice[e];
          const a = r && voiceManager.getVoiceAudioResource(r);
          if (!a || !(yield i.addReferenceResources([a])).ok) {
            return void voiceManager.deselectVoice(e);
          }
          if (!voiceManager.data.selectedVoiceIds.has(e)) {
            return void i.removeReferenceResources([a.id]);
          }
          i._dataStore.setVoiceReferenceId(a.id, e);
          i._audioGeneratorManager.reportManager.reportAddVoice(e);
        }
      })();
    this.removeVoiceReference = (e) => {
      var { voiceReferenceIdToVoiceId } = this._dataStore;
      var r = Object.keys(voiceReferenceIdToVoiceId).find(
        (r) => voiceReferenceIdToVoiceId[r] === e,
      );
      if (r) {
        this.removeReferenceResources([r]);
      }
    };
    this.removeReferenceResource = (e) => {
      this.removeReferenceResources([e]);
    };
    this.removeReferenceResources = (e) => {
      if (e.length !== 0) {
        this._dataStore.removeReferences(e);
      }
    };
    this.moveReferenceResource = (e, t) => {
      this._dataStore.moveReference(e, t);
    };
    this.trimReferenceAudioResource = (e) =>
      a._(function* () {
        let t;
        let r;
        let a;
        const o = i._dataStore.references.find((t) => t.id === e);
        if ((o == null ? undefined : o.type) === "audio") {
          const s = i._metadataStore.audioTrimDurationLimits;
          if (s) {
            i._audioGeneratorManager.reportManager.reportAudioClipClick();
            const audioBuffer = yield o.resolveAudioBuffer();
            if (!audioBuffer) {
              return void i._notificationService.warning(
                n.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
              );
            }
            const c = yield (a = i.requestReferenceAudioTrim) == null
              ? undefined
              : a.call(i, {
                  name: (t = o.name) != null ? t : "",
                  audioBuffer,
                  minReservedDuration: s.minDuration,
                  maxReservedDuration: s.maxDuration,
                });
            if (c) {
              const file = new File(
                [yield eu.n(c)],
                "".concat((r = o.name) != null ? r : "audio", ".wav"),
                {
                  type: "audio/wav",
                },
              );
              const u = i._containerService.createInstance(eg.e, {
                file,
                duration: c.duration,
              });
              o.replaceWith(u);
              o.resolveUri();
              const h = i._dataStore.voiceReferenceIdToVoiceId[e];
              if (h) {
                i._audioGeneratorManager.voiceManager.invalidateVoiceAudioResource(
                  h,
                );
              }
              i._audioGeneratorManager.reportManager.reportAudioClip(
                c.duration,
              );
            }
          }
        }
      })();
    this.changeEditorDocument = (e) => {
      var { transformEditorDocumentToPromptContents } =
        this.promptEditorManager;
      this.changePromptContents(transformEditorDocumentToPromptContents(e));
    };
    this.changePromptContents = (e) => {
      this._dataStore.setPromptContents(e);
    };
    this.notifySubjectAudioUsage = (e) => {
      var { acceptedSubjectContentTypes } = this._metadataStore;
      var r = ef.h(e, acceptedSubjectContentTypes).at(0);
      if (
        (r == null ? undefined : r.type) === "audio" &&
        eh.uZ(e) !== eh.yC.Audio
      ) {
        this._notificationService.normal(
          n.Ay.t(
            "web_audio_gen_toast_use_subject_audio",
            {},
            "默认使用主体中的音频作为参考",
          ),
        );
      }
    };
    this.insertSubjectIntoPrompt = (e, t) => {
      var r;
      var a;
      var i = this.validateSubjectEligibility(e);
      if (!i.ok) {
        return i;
      }
      var n =
        (a =
          this._audioGeneratorManager.contentGeneratorManager
            .visibleContentGeneratorInstance) == null ||
        (r = a.elements.promptEditorRef) == null
          ? undefined
          : r.current;
      if (!n) {
        return s.xz(-1, "");
      }
      var o = this.validateSubjectAddition(e);
      if (!o.ok) {
        return o;
      }
      n.commands.insertContent(
        this.promptEditorManager.transformPromptContentToNodes({
          type: "subject",
          id: d.K(e),
          subject: e,
        }),
      );
      n.commands.focus();
      this.notifySubjectAudioUsage(e);
      var { entry } = t != null ? t : {};
      if (entry) {
        this._audioGeneratorManager.reportManager.reportAddSubject(
          entry,
          e.subjectId,
        );
      }
      return s.nj();
    };
    this.removeSubjectFromPrompt = (e) => {
      var t = this._dataStore.promptContents.filter(
        (t) => t.type !== "subject" || t.id !== e,
      );
      if (t.length !== this._dataStore.promptContents.length) {
        this.changePromptContents(t);
      }
    };
    this.replaceSubjectInPrompt = (e, t) => {
      var id = d.K(t);
      var a = this._dataStore.promptContents.map((a) => {
        if (a.type === "subject" && a.id === e) {
          return x._(y._({}, a), {
            id,
            subject: t,
          });
        }
        return a;
      });
      this.changePromptContents(a);
    };
    this.validateSubjectEligibility = (e) => {
      var t = v.W(e, {
        acceptedContentTypes: this._metadataStore.acceptedSubjectContentTypes,
      });
      if (t.ok) {
        return this.validateSubjectAddition(e);
      }
      return t;
    };
    this.validateSubjectAddition = (e) => {
      var t = d.K(e);
      if (
        this._dataStore.promptContents.some(
          (e) => e.type === "subject" && e.id === t,
        )
      ) {
        return s.nj();
      }
      var { references, promptContents } = this._dataStore;
      return this._validateReferencesChange({
        resources: references,
        subjects: [...e_.I(promptContents), e],
      });
    };
  }
}
eC = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, l.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  eC,
);
const eP = require("uD");
const eA = require("H26");
const eT = require("ai0");
const eG = require("./module-JJ_2.js");
const ew = require("nZ");
const ej = require("Dm");
const eD = require("kF");
class eF extends eD.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_audio_adjust_param";
  }
}
class eL extends eD.o {
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
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "modal", "position", "enter_from"].forEach((t) => {
      ej.F4(e[t], "[AiAudioAdjustParamReporter] ".concat(t, " is required"));
    });
    if (e.enter_from === "ai_feature") {
      ej.F4(
        e.ai_feature_name,
        "[AiAudioAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "switch_model":
        ej.F4(
          e.model_name,
          "[AiAudioAdjustParamReporter] model_name is required",
        );
        ej.F4(
          e.model_key,
          "[AiAudioAdjustParamReporter] model_key is required",
        );
        break;
      case "switch_function_mode":
        ej.F4(
          e.function_mode,
          "[AiAudioAdjustParamReporter] function_mode is required",
        );
        ej.F4(
          e.action_method,
          "[AiAudioAdjustParamReporter] action_method is required",
        );
        break;
      case "translate_language_select":
        ej.F4(e.language, "[AiAudioAdjustParamReporter] language is required");
        break;
      case "add_voice":
        ej.F4(e.voice_id, "[AiAudioAdjustParamReporter] voice_id is required");
        break;
      case "audio_clip":
        ej.F4(
          e.audio_clip_duration,
          "[AiAudioAdjustParamReporter] audio_clip_duration is required",
        );
    }
  }
  _getCollectorClass() {
    return eF;
  }
  _setCommonParams() {
    this.setParams({
      modal: "aigc_audio",
    });
  }
  constructor(e, t) {
    super({}, t);
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
  }
}
eL = i.Cg(
  [
    i.Qj(1, c._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [Object, c._ === undefined ? Object : c._]),
  ],
  eL,
);
const ex = {
  toolbar: "click",
  placeholder: "placeholder_click",
};
class eE extends ew.j {
  constructor(e, t) {
    super(t);
    this._audioGeneratorManager = e;
    this.reportActivatePrompt = () => {
      var e = this._containerService.createInstance(eL, this.commonParams);
      e.setParams({
        action: "activate",
      });
      e.report();
    };
    this.reportEnterPrompt = () => {
      var {
        data: { isPromptEmpty },
      } = this._audioGeneratorManager;
      if (!isPromptEmpty) {
        var t = this._containerService.createInstance(eL, this.commonParams);
        t.setParams({
          action: "enter_script",
        });
        t.report();
      }
    };
    this.reportSwitchModel = () => {
      var {
        data: { model },
      } = this._audioGeneratorManager;
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "switch_model",
        modelName: model == null ? undefined : model.name,
        modelKey: model == null ? undefined : model.key,
      });
      t.report();
    };
    this.reportSwitchFunctionMode = (e) => {
      var {
        data: { feature },
      } = this._audioGeneratorManager;
      var r = this._containerService.createInstance(eL, this.commonParams);
      r.setParams({
        action: "switch_function_mode",
        functionMode: eP.A(feature),
        actionMethod: ex[e],
      });
      r.report();
    };
    this.reportAudioClipClick = () => {
      var e = this._containerService.createInstance(eL, this.commonParams);
      e.setParams({
        action: "audio_clip_click",
      });
      e.report();
    };
    this.reportAudioClip = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "audio_clip",
        audioClipDuration: Math.round(e * eA.K),
      });
      t.report();
    };
    this.reportImportReferenceMaterial = (e) => {
      var t = this._containerService.createInstance(eT.k);
      t.setParams(
        y._(
          {
            position: "generation",
            modal: "aigc_audio",
            materialSource: "local",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportClickUpload = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams(
        y._(
          {
            action: "click_upload",
            uploadMethod: "click",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportSelectTranslationLanguage = (language) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "translate_language_select",
        language,
      });
      t.report();
    };
    this.reportClickVoice = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "click_voice",
        voiceId: e.id,
        voiceKey: e.name,
      });
      t.report();
    };
    this.reportAddVoice = (voiceId) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "add_voice",
        voiceId,
      });
      t.report();
    };
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "add_image",
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "add_video",
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportAddAudio = (e) => {
      var t = this._containerService.createInstance(eL, this.commonParams);
      t.setParams({
        action: "add_audio",
        audioId: e == null ? undefined : e.audioId,
      });
      t.report();
    };
    this.reportAddSubject = (e, subjectId) => {
      var { subjectListShowFrom, assetPosition } = eG.m[e];
      var i = this._containerService.createInstance(eL, this.commonParams);
      i.setParams({
        action: "add_subject",
        subjectListShowFrom,
        subjectId,
        assetPosition,
      });
      i.report();
    };
  }
}
eE = i.Cg(
  [
    i.Qj(1, c._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
    ]),
  ],
  eE,
);
const eO = require("Uk");
const eU = require("wZz");
const eV = require("rr");
const eN = require("sqi");
const eK = require("net");
const ez = require("btw");
class eW extends o.jG {
  _submit() {
    return {
      audioSeparation: () => this._submitAudioSeparation(),
      videoTranslation: () => this._submitVideoTranslation(),
      omniDubbing: () => this._submitOmniDubbing(),
      textReading: () => this._submitTextReading(),
    }[this._audioGeneratorManager.data.feature]();
  }
  _submitAudioSeparation() {
    return a
      ._(function* () {
        const e = this._createAudioSeparationInputParams();
        const t = yield this._workspaceService.ensureWorkspaceId();
        if (!t.ok) {
          return t;
        }
        const r =
          (yield this._contentGeneratorTaskFeatureLoaderService.getInstance()).createAIGCAudioSeparationTask(
            x._(y._({}, e), {
              workspaceId: t.value,
            }),
          );
        if (r.ok) {
          return s.TZ([r.value]);
        }
        return r;
      })
      .call(this);
  }
  _createAudioSeparationInputParams() {
    const {
      audioSeparationManager,
      data: { modelKey },
    } = this._audioGeneratorManager;
    const { references, prompt } = audioSeparationManager.data;
    const i = references[0];
    const sourceMaterial =
      i.type === "video"
        ? {
            materialType: "video",
            videoInfo: x._(y._({}, eN.s(i)), {
              file: i.file,
            }),
          }
        : {
            materialType: "audio",
            audioInfo: x._(y._({}, eK.Q(i)), {
              file: i.file,
            }),
          };
    return {
      isRegenerate: false,
      mode: E.DAAIGCMode.workbench,
      metricsExtra: this._createMetricsExtra(),
      input: {
        modelReqKey: modelKey,
        prompt,
        sourceMaterial,
      },
    };
  }
  _submitVideoTranslation() {
    return a
      ._(function* () {
        const e = this._createVideoTranslationInputParams();
        const t = yield this._workspaceService.ensureWorkspaceId();
        if (!t.ok) {
          return t;
        }
        const r =
          yield this._contentGeneratorTaskFeatureLoaderService.getInstance();
        const a = e.map((e) =>
          r.createAIGCVideoTranslationTask(
            x._(y._({}, e), {
              workspaceId: t.value,
            }),
          ),
        );
        const i = a.filter((e) => e.ok).map((e) => e.value);
        if (!i.length) {
          const n = a[0];
          if (n.ok) {
            return s.TZ([n.value]);
          }
          return n;
        }
        return s.TZ(i);
      })
      .call(this);
  }
  _createVideoTranslationInputParams() {
    const {
      videoTranslationManager,
      data: { modelKey },
    } = this._audioGeneratorManager;
    const { references, targetLanguages } = videoTranslationManager.data;
    const i = references[0];
    const metricsExtra = this._createMetricsExtra();
    const videoInfo = x._(y._({}, eN.s(i)), {
      file: i.file,
    });
    return targetLanguages.map((targetLanguage) => ({
      isRegenerate: false,
      mode: E.DAAIGCMode.workbench,
      metricsExtra,
      input: {
        modelReqKey: modelKey,
        targetLanguage,
        sourceMaterial: {
          materialType: "video",
          videoInfo,
        },
      },
    }));
  }
  _submitTextReading() {
    return a
      ._(function* () {
        const e = this._createTextReadingInputParams();
        if (!e.ok) {
          return e;
        }
        const t = yield this._workspaceService.ensureWorkspaceId();
        if (!t.ok) {
          return t;
        }
        const r =
          (yield this._contentGeneratorTaskFeatureLoaderService.getInstance()).createAIGCTextReadingTask(
            x._(y._({}, e.value), {
              workspaceId: t.value,
            }),
          );
        if (r.ok) {
          return s.TZ([r.value]);
        }
        return r;
      })
      .call(this);
  }
  _createTextReadingInputParams() {
    const {
      data: { modelKey },
      textReadingManager: {
        data: { text },
      },
      voiceManager: {
        data: {
          selectedVoice,
          selectedVoiceSpeed = W.$w,
          selectedVoiceEmotion,
        },
      },
    } = this._audioGeneratorManager;
    if (!selectedVoice) {
      return s.xz(-1, "voice is undefined");
    }
    const { id, itemPlatform, name } = selectedVoice;
    return s.TZ({
      input: {
        modelReqKey: modelKey,
        text,
        idInfo: {
          id,
          itemPlatform,
        },
        audioConfig: y._(
          {
            format: "mp3",
            pitchRate: 0,
            sampleRate: 24000,
            speechRate: Math.round((selectedVoiceSpeed - 1) * 100),
          },
          selectedVoiceEmotion && {
            emotion: selectedVoiceEmotion.type,
            emotionScale: selectedVoiceEmotion.scale,
          },
        ),
        voiceName: name,
      },
      mode: E.DAAIGCMode.workbench,
      isRegenerate: false,
      metricsExtra: this._createMetricsExtra(),
    });
  }
  _submitOmniDubbing() {
    return a
      ._(function* () {
        const e = this._createOmniDubbingInputParams();
        const t = yield this._workspaceService.ensureWorkspaceId();
        if (!t.ok) {
          return t;
        }
        const r =
          yield this._contentGeneratorTaskFeatureLoaderService.getInstance();
        const a = e.input.unifiedEditInput.materialList.some(
          (e) => e.materialType === "video",
        )
          ? r.createAIGCVideoOmniDubbingTask(
              x._(y._({}, e), {
                workspaceId: t.value,
              }),
            )
          : r.createAIGCAudioOmniDubbingTask(
              x._(y._({}, e), {
                workspaceId: t.value,
              }),
            );
        if (a.ok) {
          return s.TZ([a.value]);
        }
        return a;
      })
      .call(this);
  }
  _createOmniDubbingInputParams() {
    const {
      data: { modelKey },
    } = this._audioGeneratorManager;
    return {
      input: {
        modelReqKey: modelKey,
        unifiedEditInput: this._getUnifiedEditInput(),
      },
      mode: E.DAAIGCMode.workbench,
      isRegenerate: false,
      metricsExtra: y._(
        {},
        this._createMetricsExtra(),
        this._createOmniDubbingMetricsExtra(),
      ),
    };
  }
  _createOmniDubbingMetricsExtra() {
    const {
      omniDubbingManager: {
        data: { references, voiceReferenceIdToVoiceId },
      },
      reportManager: { getReferenceAIGCItemIdReportParams },
    } = this._audioGeneratorManager;
    const a = references
      .map((e) => voiceReferenceIdToVoiceId[e.id])
      .filter((e) => !!e);
    return y._(
      {
        voiceId: a.join(","),
      },
      getReferenceAIGCItemIdReportParams(references),
    );
  }
  _createMetricsExtra() {
    const {
      data: { commercialSceneOptions },
      reportManager: { commonParams },
    } = this._audioGeneratorManager;
    return x._(
      y._(
        {
          isAiLyric: false,
          lyricCnt: 0,
          isRandomInspiration: false,
          promptSource: eO.W.Custom,
        },
        commonParams,
      ),
      {
        sceneOptions: JSON.stringify(commercialSceneOptions),
      },
    );
  }
  _getUnifiedEditInput() {
    const { omniDubbingManager } = this._audioGeneratorManager;
    const { references, promptContents } = omniDubbingManager.data;
    return ez.E(
      {
        references,
        promptContents,
      },
      {
        acceptedResourceTypes: ["image", "video", "audio"],
      },
    ).unifiedEditInput;
  }
  constructor(e, t, r, i, n) {
    var o;
    super();
    o = this;
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._contentGeneratorTaskFeatureLoaderService = r;
    this._notificationService = i;
    this._workspaceService = n;
    this.submit = () =>
      a._(function* () {
        let e;
        let t;
        const {
          data: { validationResult, model },
        } = o._audioGeneratorManager;
        const complianceGroupKey =
          model == null || (e = model.extra) == null
            ? undefined
            : e.complianceConfirmationGroupKey;
        if (
          complianceGroupKey &&
          !(yield (t = o.requestAigcComplianceConfirmation) == null
            ? undefined
            : t.call(o, {
                containerService: o._containerService,
                complianceGroupKey,
              }))
        ) {
          return s.xz(-1, "AIGC compliance confirmation rejected");
        }
        if (!validationResult.ok) {
          o._notificationService.warning(validationResult.msg);
          return validationResult;
        }
        const n = yield o._submit();
        if (n.ok) {
          o._audioGeneratorManager.reportManager.resetResourceReportParams();
        }
        return n;
      })();
  }
}
eW = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, eU.L),
    i.Qj(3, l.Ot),
    i.Qj(4, eV.D),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
      eU.L === undefined ? Object : eU.L,
      l.Ot === undefined ? Object : l.Ot,
      eV.D === undefined ? Object : eV.D,
    ]),
  ],
  eW,
);
const eB = require("qa");
const eQ = require("w3D");
const eq = require("KDr");
class eH {
  get text() {
    return this._textToSpeechManager.data.text;
  }
  get isPromptEmpty() {
    return this._textToSpeechManager.data.isTextEmpty;
  }
  get isPristine() {
    return this.isPromptEmpty && this.voiceId === undefined;
  }
  get references() {
    const {
      voiceManager: { data, metadata },
    } = this._audioGeneratorManager;
    if (metadata.speechSourceType === "text-to-speech" && data.speechAudio) {
      return [data.speechAudio];
    }
    return [];
  }
  get validationResult() {
    if (this.voiceId === undefined) {
      return s.xz(
        -1,
        n.Ay.t("web_generator_audio_submit_hint_no_voice", {}, "请选择音色"),
      );
    }
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    return P.f(this.text, {
      emptyPromptErrorMessage: n.Ay.t(
        "web_generator_audio_placeholder",
        {},
        "请输入你想生成的说话内容",
      ),
      maxLength:
        model == null || (e = model.textReadingConfig) == null
          ? undefined
          : e.maxPromptLength,
    });
  }
  setVoiceId(e) {
    this.voiceId = e;
  }
  constructor(e, t) {
    this._audioGeneratorManager = e;
    this._textToSpeechManager = t;
    this.voiceId = undefined;
    C.l_(this);
  }
}
class eJ {
  get placeholder() {
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    const r =
      model == null || (e = model.textReadingConfig) == null
        ? undefined
        : e.promptPlaceholderConfig;
    if (!r) {
      return "";
    }
    const a = r.defaultStarlingKeys.at(0);
    return n.Ay.t(a != null ? a : "");
  }
  get referenceUploadVisible() {
    const {
      voiceManager: {
        data: { selectedVoice },
      },
    } = this._audioGeneratorManager;
    return !selectedVoice;
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    C.l_(this);
  }
}
class eZ extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  activate() {
    this._audioGeneratorManager.voiceManager.switchToTextToSpeech(
      this._textToSpeechManager,
    );
  }
  setData(e) {
    const { voiceData } = e;
    const r = eB._(e, ["voiceData"]);
    const { voiceManager } = this._audioGeneratorManager;
    this._textToSpeechManager.setData(r);
    voiceManager.setData(voiceData);
    this._dataStore.setVoiceId(voiceManager.data.selectedVoiceId);
  }
  resetData() {
    this._textToSpeechManager.updateText("");
    this._dataStore.setVoiceId(undefined);
  }
  setMaxTextLength(e) {
    this._textToSpeechManager.setMaxTextLength(e);
  }
  selectVoice(e) {
    this._dataStore.setVoiceId(e);
  }
  deselectVoice(e) {
    if (this._dataStore.voiceId === e) {
      this._dataStore.setVoiceId(undefined);
    }
  }
  constructor(e, t) {
    super();
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._textToSpeechManager = this._register(
      this._containerService.createInstance(
        eQ.W,
        this._audioGeneratorManager.voiceManager,
        {
          maxTextLength: eq.O({
            domesticTextLimit: 300,
          }),
          get fallbackText() {
            return n.Ay.t(
              "web_audio_generation_default_lines",
              {},
              "欢迎使用即梦，很高兴用这个声音认识你",
            );
          },
          getSpeechText: (e, t) => t,
          preferVoiceAudio: () => {
            var e;
            var t;
            return (
              ((t = this._audioGeneratorManager.data.model) == null ||
              (e = t.extra) == null
                ? undefined
                : e.playMode) === h.Wu.Original
            );
          },
        },
      ),
    );
    this._metadataStore = new eJ(this._audioGeneratorManager);
    this._dataStore = new eH(
      this._audioGeneratorManager,
      this._textToSpeechManager,
    );
    this.updateText = (e) => {
      this._textToSpeechManager.updateText(e);
    };
  }
}
eZ = i.Cg(
  [
    i.Qj(1, c._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
    ]),
  ],
  eZ,
);
class e$ {
  get hasReferences() {
    return this.references.length > 0;
  }
  get isPristine() {
    return !this.hasReferences;
  }
  get validationResult() {
    const { videoTranslationManager } = this._audioGeneratorManager;
    const {
      metadata: { referenceValidationLimits },
    } = videoTranslationManager;
    const r = A.Z({
      materials: this.references,
      limits: referenceValidationLimits,
    });
    if (r.ok) {
      if (this.targetLanguages.length) {
        return s.nj();
      }
      return s.xz(
        -1,
        n.Ay.t(
          "web_audio_gen_seed_audio_1_5_video_translation_language_toast",
          {},
          "请选择需要翻译的目标语种",
        ),
      );
    }
    return r;
  }
  setData(e) {
    const { references, targetLanguages } = e;
    this.references = references;
    this.targetLanguages = targetLanguages;
  }
  addResources(e) {
    this.references = [...this.references, ...e];
  }
  setResource(e, t) {
    const r = [...this.references];
    r[t] = e;
    this.references = r;
  }
  setTargetLanguages(e) {
    this.targetLanguages = e;
  }
  removeReferences(e) {
    const t = new Set(e);
    this.references = this.references.filter((e) => !t.has(e.id));
  }
  resetData() {
    this.references = [];
    this.targetLanguages = [];
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    this.references = [];
    this.targetLanguages = [];
    this.isPromptEmpty = true;
    C.l_(this);
  }
}
class eY {
  get placeholderKey() {
    let e;
    let t;
    const {
      data: { model },
      videoTranslationManager,
    } = this._audioGeneratorManager;
    const i =
      model == null || (t = model.videoTranslationConfig) == null
        ? undefined
        : t.promptPlaceholderConfig;
    if (!i) {
      return "";
    }
    const {
      data: { hasReferences },
    } = videoTranslationManager;
    if (
      (e = (
        hasReferences ? i.withReferenceStarlingKeys : i.defaultStarlingKeys
      ).at(0)) != null
    ) {
      return e;
    }
    return "";
  }
  get targetLanguageOptions() {
    let e;
    let t;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    if (
      (e =
        model == null || (t = model.videoTranslationConfig) == null
          ? undefined
          : t.targetLanguages) != null
    ) {
      return e;
    }
    return [];
  }
  get selectedTargetLanguageOptions() {
    const { videoTranslationManager } = this._audioGeneratorManager;
    const {
      data: { targetLanguages },
    } = videoTranslationManager;
    const r = new Map(this.targetLanguageOptions.map((e) => [e.value, e]));
    return targetLanguages.flatMap((e) => {
      var t;
      if ((t = r.get(e)) != null) {
        return t;
      }
      return [];
    });
  }
  get _referenceLimits() {
    let e;
    const {
      data: { model },
    } = this._audioGeneratorManager;
    if (model == null || (e = model.videoTranslationConfig) == null) {
      return undefined;
    }
    return e.referenceLimits;
  }
  get referenceValidationLimits() {
    let e;
    if ((e = this._referenceLimits) != null) {
      return e;
    }
    return {};
  }
  get acceptedResourceTypes() {
    let e;
    let t;
    return Object.keys(
      (e =
        (t = this._referenceLimits) == null ? undefined : t.materialLimits) !=
        null
        ? e
        : {},
    );
  }
  get acceptedFileTypes() {
    let e;
    let t;
    if (
      (e =
        (t = this._referenceLimits) == null
          ? undefined
          : t.acceptedFileTypes) != null
    ) {
      return e;
    }
    return {};
  }
  get referenceAdditionValidationResult() {
    const { videoTranslationManager } = this._audioGeneratorManager;
    const {
      data: { references },
    } = videoTranslationManager;
    return G.y({
      materials: references,
      limits: this.referenceValidationLimits,
      candidateTypes: this.acceptedResourceTypes,
    });
  }
  get referenceUploadTooltipProps() {
    return {
      content: this.referenceAdditionValidationResult.ok
        ? w.N(this.referenceValidationLimits.materialCombinationRule, {
            acceptedTypes: this.acceptedResourceTypes,
          })
        : this.referenceAdditionValidationResult.msg,
    };
  }
  get referenceUploadVisible() {
    const { videoTranslationManager } = this._audioGeneratorManager;
    const {
      data: { hasReferences },
    } = videoTranslationManager;
    return !hasReferences || this.referenceAdditionValidationResult.ok;
  }
  constructor(e) {
    this._audioGeneratorManager = e;
    C.l_(this);
  }
}
class eX extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  _reportImportResourcesFromLocal(e, t) {
    for (const r of e) {
      this._audioGeneratorManager.reportManager.reportImportReferenceMaterial(
        y._(
          {
            materialType: r.type,
          },
          t,
        ),
      );
    }
  }
  _validateReferencesChange(e) {
    return R.T({
      materials: e,
      limits: this._metadataStore.referenceValidationLimits,
    });
  }
  constructor(e, t, r) {
    var i;
    super();
    i = this;
    this._audioGeneratorManager = e;
    this._containerService = t;
    this._notificationService = r;
    this._metadataStore = new eY(this._audioGeneratorManager);
    this._dataStore = new e$(this._audioGeneratorManager);
    this.importReferenceResourcesFromLocal = (e, t) =>
      a._(function* () {
        if (e.length !== 0) {
          yield i._importResourcesFromLocal(e, i.addReferenceResources, t);
        }
      })();
    this.addReferenceResources = (e) =>
      a._(function* () {
        if (e.length === 0) {
          return s.nj();
        }
        const t = I.I(
          i._containerService,
          e,
          i._metadataStore.acceptedResourceTypes,
        );
        if (!t.length) {
          return s.nj();
        }
        const r = yield b.A(t);
        if (!r.ok) {
          i._notificationService.warning(r.msg);
          return r;
        }
        const a = i._validateReferencesChange([
          ...i._dataStore.references,
          ...t,
        ]);
        if (a.ok) {
          i._dataStore.addResources(t);
          return s.nj();
        }
        i._notificationService.warning(a.msg);
        return a;
      })();
    this.replaceReferenceResourceFromLocal = (e, t) =>
      a._(function* () {
        yield i._importResourcesFromLocal(
          [e],
          (e) => {
            var [r] = e;
            var a = i._dataStore.references.findIndex((e) => e.id === t);
            if (a < 0) {
              return Promise.resolve(s.nj());
            }
            return i.replaceReferenceResource(a, r);
          },
          {
            reportParams: {
              importMaterialParams: {
                actionType: "drag",
              },
            },
          },
        );
      })();
    this.replaceReferenceResource = (e, t) =>
      a._(function* () {
        const { references } = i._dataStore;
        if (e >= references.length) {
          return i.addReferenceResources([t]);
        }
        const a = I.I(
          i._containerService,
          [t],
          i._metadataStore.acceptedResourceTypes,
        );
        if (!a.length) {
          return s.nj();
        }
        const n = a[0];
        const o = yield b.A([n]);
        if (!o.ok) {
          i._notificationService.warning(o.msg);
          return o;
        }
        const l = references.filter((t, r) => r !== e);
        const c = i._validateReferencesChange([...l, n]);
        if (c.ok) {
          i._dataStore.setResource(n, e);
          return s.nj();
        }
        i._notificationService.warning(c.msg);
        return c;
      })();
    this.removeReferenceResource = (e) => {
      this.removeReferenceResources([e]);
    };
    this.removeReferenceResources = (e) => {
      if (e.length !== 0) {
        this._dataStore.removeReferences(e);
      }
    };
    this.setData = (e) => {
      var { references } = e;
      var r = this._validateReferencesChange(references);
      if (r.ok) {
        this._dataStore.setData(e);
        return s.nj();
      }
      this._notificationService.warning(r.msg);
      return r;
    };
    this.selectTargetLanguages = (e) => {
      var t =
        e.length > this._dataStore.targetLanguages.length
          ? e.at(-1)
          : undefined;
      this._dataStore.setTargetLanguages(e);
      if (t) {
        this._audioGeneratorManager.reportManager.reportSelectTranslationLanguage(
          t,
        );
      }
    };
    this.removeTargetLanguage = (e) => {
      var { targetLanguages } = this._dataStore;
      this.selectTargetLanguages(targetLanguages.filter((t) => t !== e));
    };
    this.resetData = () => {
      this._dataStore.resetData();
    };
    this._importResourcesFromLocal = function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return a._(function* () {
        const {
          reportParams: {
            importMaterialParams: { actionType = "click" } = {},
          } = {},
        } = r;
        const { acceptedFileTypes } = i._metadataStore;
        const { acceptedFiles } = M.g(
          i._containerService,
          e,
          acceptedFileTypes,
        );
        const s = acceptedFiles
          .map((e) => k.f(i._containerService, e))
          .filter(
            (e) =>
              e !== null &&
              (e.type === "image" || e.type === "video" || e.type === "audio"),
          );
        if (s.length) {
          const l = yield t(s);
          if (!l.ok) {
            return void i._reportImportResourcesFromLocal(s, {
              status: "fail",
              actionType,
              failReason: l.msg,
            });
          }
          s.forEach((e) => void e.resolveUri());
          yield Promise.all(
            s.filter((e) => e.type === "video").map((e) => e.resolveCoverUrl()),
          );
          i._reportImportResourcesFromLocal(s, {
            status: "success",
            actionType,
          });
        }
      })();
    };
  }
}
eX = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, l.Ot),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof AudioGeneratorManager === "undefined"
        ? Object
        : AudioGeneratorManager,
      c._ === undefined ? Object : c._,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  eX,
);
class e0 extends o.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get currentFeatureManager() {
    return this["".concat(this._dataStore.feature, "Manager")];
  }
  syncModelConfig(e) {
    let t;
    let r;
    const { data, loading } = e;
    if (!loading && (data == null ? undefined : data.ok)) {
      const n = data.value[h.n1.TextToSpeech];
      const o = (t = n == null ? undefined : n.modelList) != null ? t : [];
      this._metadataStore.setModels(o);
      if (!o.length) {
        return void this._dataStore.setModelKey("");
      }
      const s = o.find((e) => e.key === this._dataStore.modelKey);
      const l =
        (r =
          s != null
            ? s
            : o.find(
                (e) => e.key === (n == null ? undefined : n.defaultModelKey),
              )) != null
          ? r
          : o[0];
      if (!this.setModel(l.key).ok) {
        const c = o.find((e) => g_1(this, e).ok);
        if (c) {
          this._dataStore.setModelKey(c.key);
        }
      }
    }
  }
  _switchToSupportedModel() {
    const {
      data: { modelKey },
    } = this;
    const t = this.metadata.modelOptions.find((t) => t.value === modelKey);
    if (t && !t.disabled) {
      return false;
    }
    const r = this.metadata.modelOptions.find((e) => !e.disabled);
    if (r) {
      this._dataStore.setModelKey(r.value);
      return true;
    }
    this.currentFeatureManager.resetData();
    const a = this.metadata.modelOptions.find((e) => !e.disabled);
    return !!a && (this._dataStore.setModelKey(a.value), true);
  }
  cleanupSideEffects() {
    this.voiceManager.pauseSpeechAudio();
  }
  _getSelectedVoiceIds() {
    const {
      data: { feature },
      textReadingManager,
      omniDubbingManager,
    } = this;
    if (feature === "textReading") {
      const {
        data: { voiceId },
      } = textReadingManager;
      if (typeof voiceId === "string") {
        return [voiceId];
      }
      return [];
    }
    if (feature === "omniDubbing") {
      const {
        data: { voiceReferenceIdToVoiceId },
      } = omniDubbingManager;
      return Object.values(voiceReferenceIdToVoiceId).filter(
        (e) => typeof e === "string",
      );
    }
    return [];
  }
  _initSubjectChangeListeners() {
    return a
      ._(function* () {
        const e = yield this._subjectFeatureContainerService.getInstance();
        this.referenceMentionManager.initSubjectSearch(e.subjectSearchManager);
        this._register(
          e.onSubjectDeleted((e) => {
            this.omniDubbingManager.removeSubjectFromPrompt(d.K(e));
          }),
        );
        this._register(
          e.onSubjectUpdated((e) => {
            var { oldSubject, newSubject } = e;
            var a = d.K(oldSubject);
            this.omniDubbingManager.replaceSubjectInPrompt(a, newSubject);
          }),
        );
      })
      .call(this);
  }
  loadAudioGeneratorConfig() {
    return a
      ._(function* () {
        const e = yield this._imcConfigService.getImcConfigByKey(
          g.r1.AudioGeneratorConfig,
        );
        if (e) {
          const { maxTextLength } = e;
          this.textReadingManager.setMaxTextLength(maxTextLength);
        }
      })
      .call(this);
  }
  constructor(e, t, r, a, i) {
    super();
    this.contentGeneratorManager = e;
    this._containerService = t;
    this._imcConfigService = r;
    this._notificationService = a;
    this._subjectFeatureContainerService = i;
    this._metadataStore = new ed(this);
    this._dataStore = new es(this);
    this.voiceManager = this._register(
      this._containerService.createInstance(p.a, {
        getModelKey: () => this._dataStore.modelKey,
        getVoiceControlConfig: () => {
          var e;
          if ((e = this._dataStore.model) == null) {
            return undefined;
          }
          return e.voiceConfig;
        },
        multiple: () => this._dataStore.feature === "omniDubbing",
        onVoiceSelected: (e) => {
          if (this._dataStore.feature === "omniDubbing") {
            this.omniDubbingManager.addVoiceReference(e);
          }
          if (this._dataStore.feature === "textReading") {
            this.textReadingManager.selectVoice(e);
          }
        },
        onVoiceDeselected: (e) => {
          if (this._dataStore.feature === "omniDubbing") {
            this.omniDubbingManager.removeVoiceReference(e);
          }
          if (this._dataStore.feature === "textReading") {
            this.textReadingManager.deselectVoice(e);
          }
        },
      }),
    );
    this.textReadingManager = this._register(
      this._containerService.createInstance(eZ, this),
    );
    this.omniDubbingManager = this._register(
      this._containerService.createInstance(eC, this),
    );
    this.videoTranslationManager = this._register(
      this._containerService.createInstance(eX, this),
    );
    this.audioSeparationManager = this._register(
      this._containerService.createInstance(L, this),
    );
    this.dataAdapter = this._register(
      this._containerService.createInstance(ee, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(eE, this),
    );
    this.referenceMentionManager = this._register(
      this._containerService.createInstance(_.Z, {
        getResourceOptions: () =>
          this.omniDubbingManager.metadata.referenceResourceOptions,
        validateSubjectAddition: (e) =>
          this.omniDubbingManager.validateSubjectAddition(e),
        validateSubjectEligibility: (e) =>
          this.omniDubbingManager.validateSubjectEligibility(e),
        onSubjectInserted: (e) =>
          this.omniDubbingManager.notifySubjectAudioUsage(e),
        reportManager: this.reportManager,
      }),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(eW, this),
    );
    this.insertSubject = (e, t) => {
      if (this._dataStore.feature !== "omniDubbing") {
        return v.W(e, {
          acceptedContentTypes: new Set(),
        });
      }
      return this.omniDubbingManager.insertSubjectIntoPrompt(e, t);
    };
    this.setData = (e) => {
      var { feature, modelKey } = e;
      var a = this.metadata.models.find((e) => e.key === modelKey);
      if (!a) {
        return s.xz(
          -1,
          n.Ay.t("multiframe_model_disabled_default", {}, "暂不支持此模型"),
        );
      }
      var i = p_1(a, feature);
      if (i.ok) {
        this._dataStore.setData(e);
        return s.nj();
      }
      return i;
    };
    this.switchModel = (e) => {
      var t = this.setModel(e);
      if (t.ok) {
        this.reportManager.reportSwitchModel();
      } else {
        this._notificationService.warning(t.msg);
      }
    };
    this.setModel = (e) => {
      var t = this.metadata.models.find((t) => t.key === e);
      if (!t) {
        return s.xz(-1, "");
      }
      var r = g_1(this, t);
      if (r.ok) {
        this._dataStore.setModelKey(t.key);
        return s.nj();
      }
      return r;
    };
    this.switchFeature = (e, t) => {
      if (this._dataStore.feature !== e) {
        var r;
        if (this.setFeature(e)) {
          this._notificationService.normal(
            n.Ay.t(
              "web_new_dre_auto_match_model_toast",
              {},
              "已为您匹配至最佳模型",
            ),
          );
        }
        this.reportManager.reportSwitchFunctionMode(
          (r = t == null ? undefined : t.entry) != null ? r : "toolbar",
        );
      }
    };
    this.setFeature = (e) => {
      if (this._dataStore.feature === e) {
        return false;
      }
      this.voiceManager.resetVoice();
      this._dataStore.setFeature(e);
      var t = this._switchToSupportedModel();
      this._getSelectedVoiceIds().forEach((e) => {
        this.voiceManager.selectVoice(e, {
          silent: true,
        });
      });
      return t;
    };
    this.textReadingManager.activate();
    this.loadAudioGeneratorConfig();
    this._initSubjectChangeListeners();
  }
}
export { e0 as p };
e0 = i.Cg(
  [
    i.Qj(1, c._),
    i.Qj(2, m.R),
    i.Qj(3, l.Ot),
    i.Qj(4, u.I),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      c._ === undefined ? Object : c._,
      m.R === undefined ? Object : m.R,
      l.Ot === undefined ? Object : l.Ot,
      u.I === undefined ? Object : u.I,
    ]),
  ],
  e0,
);
