import a from "QWK";
import i from "Qey";
import n from "o7";
import s from "K8";
import o from "aEB";
import d from "Kt";
import u from "Fw";
import l from "JmT";
import c from "sV8";
import m from "Y9q";
import p from "WUK";
import h from "dHI";
import v from "oa";
import g from "dw4";
import f from "b3";
import M from "CKD";
import y from "gu";
import S from "fF";
import R from "ZHm";
import k from "KDr";
import I from "Nyo";
import b from "H26";
import C from "nZ";
import E from "Dm";
import A from "M8X";
import G from "rr";
import x from "kF";
import w from "NY";
import j from "bk";
import O from "Ut";
import K from "Uk";
import z from "wZz";
class _ extends n.jG {
  applyPrompt(e) {
    this._musicGeneratorManager.setPrompt(e);
  }
  applyRichPrompt(e) {
    if (e.resources.length > 0) {
      m.I(this._containerService, e.resources, []);
    }
    return Promise.resolve(p.P());
  }
  importRecordAsReference(e, t) {
    const r = h.R(this._containerService, e, t);
    if (r) {
      return this.importReferenceResources([r]);
    }
    return Promise.resolve(p.P());
  }
  importReferenceResources(e) {
    m.I(this._containerService, e, []);
    return Promise.resolve(p.P());
  }
  importReferencesInRecord() {
    return Promise.resolve(p.P());
  }
  importWorkDetailAsReference() {
    return p.P();
  }
  importImageAsReferenceInWorkDetailVideo() {
    return p.P();
  }
  reeditGenerationDataInRecord(e) {
    if (!c.n(e)) {
      return Promise.resolve(p.P());
    }
    let t;
    let r;
    let a;
    const { songAbility, instrumentalAbility } = e;
    const o = (t = l.HG(e)) != null ? t : 30;
    if (instrumentalAbility) {
      this._musicGeneratorManager.setMusicMode(u.n1.Song);
      this._musicGeneratorManager.setPrompt(
        (r = instrumentalAbility.prompt) != null ? r : "",
      );
      this._musicGeneratorManager.setManualDuration(o);
    } else if (songAbility) {
      this._musicGeneratorManager.setMusicMode(u.n1.Song);
      this._musicGeneratorManager.setPrompt(
        (a = songAbility.prompt) != null ? a : "",
      );
      this._musicGeneratorManager.setManualDuration(o);
    }
    return Promise.resolve(s.nj());
  }
  reeditGenerationDataInWorkDetail() {
    return p.P();
  }
  constructor(e, t) {
    super();
    this._musicGeneratorManager = e;
    this._containerService = t;
  }
}
_ = a.Cg(
  [
    a.Qj(1, d._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof MusicGeneratorManager === "undefined"
        ? Object
        : MusicGeneratorManager,
      d._ === undefined ? Object : d._,
    ]),
  ],
  _,
);
class T {
  get isPromptEmpty() {
    return !this.prompt.trim();
  }
  get editorDocument() {
    return this._musicGeneratorManager.promptEditorManager.transformPromptToEditorDocument(
      this.prompt,
    );
  }
  get isPristine() {
    return this.isPromptEmpty;
  }
  get durationForSubmission() {
    if (this.smartDurationEnabled) {
      return 0;
    }
    return this.duration;
  }
  get validationResult() {
    return f.f(this.prompt, this._promptValidationOptions);
  }
  get _promptValidationOptions() {
    return {
      maxLength: k.O({
        domesticTextLimit: 4000,
        overseaMultiplier: 1,
      }),
    };
  }
  get commercialSceneOptions() {
    return M.G({
      scene: y.Sk.MusicBasicGenerate,
      modelReqKey: this.modelKey,
      audioDuration: this.durationForSubmission,
      benefitAmount: S.Jl,
      reportParams: v._(
        {},
        R.YQ(this._musicGeneratorManager.reportManager.resourceReportParams),
      ),
    });
  }
  setPrompt(e) {
    this.prompt = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  setDuration(e) {
    const { durationRange } = this._musicGeneratorManager.metadata;
    this.duration = Math.min(
      Math.max(Math.round(e), durationRange.min),
      durationRange.max,
    );
  }
  setSmartDurationEnabled(e) {
    this.smartDurationEnabled = e;
  }
  setMusicMode(e) {
    this.musicMode = e;
  }
  constructor(e) {
    this._musicGeneratorManager = e;
    this.musicMode = u.n1.Song;
    this.prompt = "";
    this.modelKey = "";
    this.duration = 30;
    this.smartDurationEnabled = true;
    g.l_(this);
  }
}
class P {
  get modelList() {
    return this._modelList;
  }
  get currentModel() {
    let e;
    let t;
    if (
      (e =
        (t = this._modelList.find((e) => {
          var t;
          return e.key === ((t = this._data) == null ? undefined : t.modelKey);
        })) != null
          ? t
          : this._modelList.find((e) => e.key === this._defaultModelKey)) !=
      null
    ) {
      return e;
    }
    return this._modelList[0];
  }
  get modelOptions() {
    return this._modelList.map((e) => ({
      label: e.name,
      value: e.key,
      disabled: false,
      extra: {
        coverUrl: e.coverUrl,
        iconUrl: e.iconUrl,
        description: e.description,
        source: e.source,
        tag: e.iconTag,
        commercial: {
          sceneOptions: this._musicGeneratorManager.data.commercialSceneOptions,
        },
      },
    }));
  }
  get durationRange() {
    let e;
    const { currentModel } = this;
    if (
      (e = currentModel == null ? undefined : currentModel.duration) != null
    ) {
      return e;
    }
    return {
      min: 30,
      max: 360,
    };
  }
  get durationStep() {
    let e;
    let t;
    if (
      (e = (t = this.currentModel) == null ? undefined : t.durationStep) != null
    ) {
      return e;
    }
    return 1;
  }
  get promptPlaceholders() {
    return this._promptPlaceholders;
  }
  get submitButtonDisabled() {
    let e;
    return !((e = this._data) == null ? undefined : e.validationResult.ok);
  }
  get submitButtonTooltipProps() {
    let e;
    const t = (e = this._data) == null ? undefined : e.validationResult;
    if (t && !t.ok) {
      return {
        content: t.msg,
      };
    }
  }
  setData(e) {
    this._data = e;
  }
  setModelConfig(e) {
    let t;
    let r;
    let a;
    const i = e[u.n1.Song];
    this._modelList =
      (t = i == null ? undefined : i.modelList) != null ? t : [];
    this._defaultModelKey =
      (r = i == null ? undefined : i.defaultModelKey) != null ? r : "";
    this._promptPlaceholders =
      (a = i == null ? undefined : i.promptPlaceholders) != null ? a : [];
  }
  setSubmitButtonLoading(e) {
    this.submitButtonLoading = e;
  }
  constructor(e) {
    this._musicGeneratorManager = e;
    this._data = null;
    this._modelList = [];
    this._defaultModelKey = "";
    this._promptPlaceholders = [];
    this.submitButtonLoading = false;
    g.l_(this);
  }
}
class F extends I.Z {
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
class D extends x.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_music_adjust_param";
  }
}
class V extends x.o {
  _getCollectorClass() {
    return D;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
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
  _validateRequiredFields(e) {
    ["action", "modal", "position", "enter_from"].forEach((t) => {
      E.F4(
        e[t],
        "[AiMusicGeneratorAdjustParamReporter] ".concat(t, " is required"),
      );
    });
    if (e.enter_from === "ai_feature") {
      E.F4(
        e.ai_feature_name,
        "[AiMusicGeneratorAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "switch_model":
        E.F4(
          e.model_name,
          "[AiMusicGeneratorAdjustParamReporter] model_name is required",
        );
        E.F4(
          e.model_key,
          "[AiMusicGeneratorAdjustParamReporter] model_key is required",
        );
        break;
      case "switch_music_duration":
        E.F4(
          e.music_duration,
          "[AiMusicGeneratorAdjustParamReporter] music_duration is required",
        );
    }
  }
  _setCommonParams() {
    this.setParams({
      modal: "aigc_music",
    });
  }
  _setRuntimeParams() {
    if (typeof window !== "undefined") {
      this._params.urlPath = window.location.pathname;
    }
    try {
      const { selectedWorkspaceId, recentWorkspaceId } = A.cQ(
        this._containerService,
        G.D,
      ).data;
      const r =
        selectedWorkspaceId != null ? selectedWorkspaceId : recentWorkspaceId;
      if (r !== undefined) {
        this._params.workspaceId = r;
      }
    } catch (e) {}
  }
  constructor(e, t) {
    super({}, t);
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
    this._setRuntimeParams();
  }
}
V = a.Cg(
  [
    a.Qj(1, d._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Object, d._ === undefined ? Object : d._]),
  ],
  V,
);
class L extends C.j {
  _reportAdjustParam(e) {
    const t = this._containerService.createInstance(V, this.commonParams);
    t.setParams(e);
    t.report();
  }
  _getCurrentModelReportParams() {
    let e;
    let t;
    const {
      data: { modelKey },
      metadata: { currentModel },
    } = this._musicGeneratorManager;
    return {
      modelKey:
        (e = currentModel == null ? undefined : currentModel.key) != null
          ? e
          : modelKey,
      modelName:
        (t = currentModel == null ? undefined : currentModel.name) != null
          ? t
          : modelKey,
    };
  }
  _getDurationReportParams() {
    const {
      data: { durationForSubmission },
    } = this._musicGeneratorManager;
    return {
      musicDuration: durationForSubmission * b.K,
    };
  }
  constructor(e, t) {
    super(t);
    this._musicGeneratorManager = e;
    this.reportActivatePrompt = () => {
      this._reportAdjustParam({
        action: "activate",
      });
    };
    this.reportEnterPrompt = () => {
      var {
        data: { isPromptEmpty },
      } = this._musicGeneratorManager;
      if (!isPromptEmpty) {
        this._reportAdjustParam({
          action: "enter_prompt",
        });
      }
    };
    this.reportClickGenerate = () => {
      this._reportAdjustParam(
        v._(
          {
            action: "click_generate",
          },
          this._getCurrentModelReportParams(),
          this._getDurationReportParams(),
        ),
      );
    };
    this.reportSwitchModel = () => {
      this._reportAdjustParam(
        v._(
          {
            action: "switch_model",
          },
          this._getCurrentModelReportParams(),
        ),
      );
    };
    this.reportSwitchMusicDuration = () => {
      this._reportAdjustParam(
        v._(
          {
            action: "switch_music_duration",
          },
          this._getDurationReportParams(),
        ),
      );
    };
  }
}
L = a.Cg(
  [
    a.Qj(1, d._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof MusicGeneratorManager === "undefined"
        ? Object
        : MusicGeneratorManager,
      d._ === undefined ? Object : d._,
    ]),
  ],
  L,
);
class B extends n.jG {
  _submit() {
    return w
      ._(function* () {
        const {
          data: {
            commercialSceneOptions,
            modelKey,
            musicMode,
            prompt,
            durationForSubmission,
          },
          reportManager: { commonParams },
        } = this._musicGeneratorManager;
        const s = yield this._workspaceService.ensureWorkspaceId();
        if (!s.ok) {
          return s;
        }
        const s_value = s.value;
        this._musicGeneratorManager.reportManager.reportClickGenerate();
        const metricsExtra = j._(
          v._(
            {
              isAiLyric: false,
              lyricCnt: 0,
              isRandomInspiration: false,
              promptSource: K.W.Custom,
            },
            commonParams,
          ),
          {
            sceneOptions: JSON.stringify(commercialSceneOptions),
          },
        );
        const u = {
          input: {
            musicMode,
            prompt,
            duration: durationForSubmission,
            modelReqKey: modelKey,
          },
          mode: O.DAAIGCMode.workbench,
          isRegenerate: false,
          metricsExtra,
          workspaceId: s_value,
        };
        return (yield this._contentGeneratorTaskFeatureLoaderService.getInstance()).createAIGCMusicTask(
          u,
        );
      })
      .call(this);
  }
  constructor(e, t, r, a) {
    var i;
    super();
    i = this;
    this._musicGeneratorManager = e;
    this._contentGeneratorTaskFeatureLoaderService = t;
    this._notificationService = r;
    this._workspaceService = a;
    this._isSubmitting = false;
    this.submit = () =>
      w._(function* () {
        if (i._isSubmitting) {
          return s.xz(-1, "submission is already in progress");
        }
        i._isSubmitting = true;
        let e = false;
        const {
          data: { validationResult },
        } = i._musicGeneratorManager;
        try {
          if (!validationResult.ok) {
            i._notificationService.warning(validationResult.msg);
            return validationResult;
          }
          i._musicGeneratorManager.setSubmitButtonLoading(true);
          e = true;
          const r = yield i._submit();
          if (r.ok) {
            i._musicGeneratorManager.reportManager.resetResourceReportParams();
          }
          if (r.ok) {
            return s.TZ([r.value]);
          }
          return r;
        } finally {
          if (e) {
            i._musicGeneratorManager.setSubmitButtonLoading(false);
          }
          i._isSubmitting = false;
        }
      })();
  }
}
B = a.Cg(
  [
    a.Qj(1, z.L),
    a.Qj(2, o.Ot),
    a.Qj(3, G.D),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof MusicGeneratorManager === "undefined"
        ? Object
        : MusicGeneratorManager,
      z.L === undefined ? Object : z.L,
      o.Ot === undefined ? Object : o.Ot,
      G.D === undefined ? Object : G.D,
    ]),
  ],
  B,
);
class q extends n.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  syncModelConfig(e) {
    const { data, loading } = e;
    if (!loading && (data == null ? undefined : data.ok)) {
      this._metadataStore.setModelConfig(data.value);
      if (!this._dataStore.modelKey) {
        let a;
        const i = data.value[u.n1.Song];
        this._dataStore.setModelKey(
          (a = i == null ? undefined : i.defaultModelKey) != null ? a : "",
        );
      }
      const { currentModel } = this._metadataStore;
      if (currentModel) {
        this._dataStore.setDuration(currentModel.defaultDuration);
      }
    }
  }
  _captureManualDurationChangeStart() {
    if (this._manualDurationChangeStartDurationForSubmission === undefined) {
      this._manualDurationChangeStartDurationForSubmission =
        this._dataStore.durationForSubmission;
    }
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._notificationService = t;
    this.promptEditorManager = this._register(
      this._containerService.createInstance(F),
    );
    this.dataAdapter = this._register(
      this._containerService.createInstance(_, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(L, this),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(B, this),
    );
    this._metadataStore = new P(this);
    this._dataStore = new T(this);
    this.setPrompt = (e) => {
      this._dataStore.setPrompt(e);
    };
    this.changeEditorDocument = (e) => {
      this.setPrompt(
        this.promptEditorManager.transformEditorDocumentToPrompt(e),
      );
      var { isPromptEmpty, validationResult } = this._dataStore;
      if (!(isPromptEmpty || validationResult.ok)) {
        this._notificationService.warning(validationResult.msg);
      }
    };
    this.insertSubject = (e, t) =>
      s.xz(
        -1,
        i.Ay.t(
          "subject_type_not_supported_in_mode",
          {},
          "当前模式不支持该类型主体",
        ),
      );
    this.setSubmitButtonLoading = (e) => {
      this._metadataStore.setSubmitButtonLoading(e);
    };
    this.switchModel = (e) => {
      var { modelKey } = this._dataStore;
      this._dataStore.setModelKey(e);
      var { currentModel } = this._metadataStore;
      if (currentModel) {
        this._dataStore.setDuration(currentModel.defaultDuration);
      }
      if (this._dataStore.modelKey !== modelKey) {
        this.reportManager.reportSwitchModel();
      }
    };
    this.setManualDuration = (e) => {
      this._dataStore.setSmartDurationEnabled(false);
      this._dataStore.setDuration(e);
    };
    this.previewManualDurationChange = (e) => {
      this._captureManualDurationChangeStart();
      this.setManualDuration(e);
    };
    this.commitManualDurationChange = (e) => {
      var t;
      var r =
        (t = this._manualDurationChangeStartDurationForSubmission) != null
          ? t
          : this._dataStore.durationForSubmission;
      this.setManualDuration(e);
      this._manualDurationChangeStartDurationForSubmission = undefined;
      if (this._dataStore.durationForSubmission !== r) {
        this.reportManager.reportSwitchMusicDuration();
      }
    };
    this.setSmartDurationEnabled = (e) => {
      this._manualDurationChangeStartDurationForSubmission = undefined;
      this._dataStore.setSmartDurationEnabled(e);
    };
    this.switchSmartDuration = (e) => {
      var durationForSubmission = this._dataStore.durationForSubmission;
      this.setSmartDurationEnabled(e);
      if (this._dataStore.durationForSubmission !== durationForSubmission) {
        this.reportManager.reportSwitchMusicDuration();
      }
    };
    this.setMusicMode = (e) => {
      this._dataStore.setMusicMode(e);
    };
    this._metadataStore.setData(this._dataStore);
  }
}
export { q as i };
q = a.Cg(
  [
    a.Qj(0, d._),
    a.Qj(1, o.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      d._ === undefined ? Object : d._,
      o.Ot === undefined ? Object : o.Ot,
    ]),
  ],
  q,
);
