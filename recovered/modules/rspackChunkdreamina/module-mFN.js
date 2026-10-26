import r from "NY";
import o from "oa";
import n from "bk";
import a from "QWK";
import s from "cO";
import c from "dw4";
import l from "Qey";
import u from "dm";
import d from "o7";
import h from "K8";
import v from "aEB";
import _ from "Kt";
import p from "rGr";
import m from "Qxy";
import { h as h_1 } from "./module-KkU.js";
import f from "lRe";
import { a as a_1 } from "./module-Vo_2.js";
import { C7, Ci, aY, tx } from "./module-wsY.js";
import V from "Q0d";
import { a as a_2 } from "./module-U8C.js";
import { y } from "./module-g908.js";
import { d as d_1 } from "./module-Oot.js";
import { j } from "./module-nZ_2.js";
const C = {
  data: undefined,
  loading: false,
  error: undefined,
};
class b {
  get voiceCategory() {
    let e;
    const {
      metadata: { voiceCategories },
    } = this._voiceService;
    if ((e = voiceCategories.data) == null) {
      return undefined;
    }
    return e.find((e) => e.categoryKey === this.voiceCategoryKey);
  }
  get focusedVoice() {
    let e;
    const {
      metadata: { voiceIdToVoice },
    } = this._voiceManager;
    return voiceIdToVoice[(e = this.focusedVoiceId) != null ? e : m.hs];
  }
  get focusedVoiceSpeed() {
    let e;
    if (
      !(this.focusedVoice && C7(this.focusedVoice)) ||
      this.focusedVoice.isSpeedAdjustmentEnabled
    ) {
      return this.voiceIdToSpeed[(e = this.focusedVoiceId) != null ? e : m.hs];
    }
  }
  get focusedVoiceEmotion() {
    let e;
    if (
      !(this.focusedVoice && C7(this.focusedVoice)) ||
      this.focusedVoice.emotions.length
    ) {
      return this.voiceIdToEmotion[
        (e = this.focusedVoiceId) != null ? e : m.hs
      ];
    }
  }
  get selectedVoiceId() {
    if (this.selectedVoiceIds.size === 1) {
      const [e] = this.selectedVoiceIds;
      return e;
    }
  }
  get selectedVoice() {
    let e;
    const {
      metadata: { voiceIdToVoice },
    } = this._voiceManager;
    return voiceIdToVoice[(e = this.selectedVoiceId) != null ? e : m.hs];
  }
  get selectedVoiceSpeed() {
    let e;
    if (
      !(this.selectedVoice && C7(this.selectedVoice)) ||
      this.selectedVoice.isSpeedAdjustmentEnabled
    ) {
      return this.voiceIdToSpeed[(e = this.selectedVoiceId) != null ? e : m.hs];
    }
  }
  get selectedVoiceEmotion() {
    let e;
    if (
      !(this.selectedVoice && C7(this.selectedVoice)) ||
      this.selectedVoice.emotions.length
    ) {
      return this.voiceIdToEmotion[
        (e = this.selectedVoiceId) != null ? e : m.hs
      ];
    }
  }
  get speechAudio() {
    return this._speechAudio.data;
  }
  get speechAudioLoading() {
    return this._speechAudio.loading;
  }
  get speechAudioDuration() {
    let e;
    let t;
    if ((e = (t = this.speechAudio) == null ? undefined : t.duration) != null) {
      return e;
    }
    return 0;
  }
  setData(e) {
    const { voice, speed, emotion } = e;
    this.voiceCategoryKey = m.MG;
    this.focusedVoiceId = voice.id;
    this.selectedVoiceIds = new Set([voice.id]);
    this.voiceIdToSpeed[voice.id] = speed;
    this.voiceIdToEmotion[voice.id] = emotion;
  }
  setVoiceCategoryKey(e) {
    this.voiceCategoryKey = e;
  }
  setVoiceFilterValue(e, t) {
    this.voiceFilterValues[e] = t;
  }
  setFocusedVoiceId(e) {
    this.focusedVoiceId = e;
  }
  resetVoice() {
    this.selectedVoiceIds = new Set();
    this.focusedVoiceId = undefined;
  }
  addSelectedVoiceId(e) {
    this.selectedVoiceIds.add(e);
  }
  removeSelectedVoiceId(e) {
    this.selectedVoiceIds.delete(e);
  }
  updateSpeedByVoiceId(e, t) {
    this.voiceIdToSpeed[e] = t;
  }
  updateEmotionByVoiceId(e, t) {
    this.voiceIdToEmotion[e] = t;
  }
  updateRenamedVoiceName(e) {
    this.renamedVoiceName = e;
  }
  setSpeechAudio(e) {
    this._speechAudio = e;
  }
  resetSpeechAudio() {
    this._speechAudio = C;
  }
  constructor(e, t) {
    this._voiceService = e;
    this._voiceManager = t;
    this.voiceCategoryKey = m.MG;
    this.voiceFilterValues = {};
    this.focusedVoiceId = undefined;
    this.selectedVoiceIds = new Set();
    this.voiceIdToSpeed = {};
    this.voiceIdToEmotion = {};
    this.renamedVoiceName = undefined;
    this._speechAudio = C;
    c.l_(this);
  }
}
const I = [];
let T;
class M {
  get _templateVoice() {
    if (this.templateVoiceId) {
      return n._(o._({}, m.o_), {
        id: this.templateVoiceId,
      });
    }
  }
  get _templateVoices() {
    if (this._templateVoice) {
      return [this._templateVoice];
    }
    return [];
  }
  get _originalVoices() {
    if (this.speechSourceType === "speech-to-speech") {
      return [m.Jn];
    }
    return [];
  }
  get _categoryKeyToVoices() {
    let e;
    let t;
    const {
      metadata: { categoryKeyToVoices },
    } = this._voiceService;
    const r =
      (t = this._options) == null || (e = t.getVoiceControlConfig) == null
        ? undefined
        : e.call(t);
    return Object.fromEntries(
      Object.entries(categoryKeyToVoices).map((e) => {
        var t;
        var [i, a] = e;
        var s = (t = a == null ? undefined : a.data) != null ? t : [];
        if (!r) {
          return [i, s];
        }
        var { isSpeedAdjustmentEnabled, isEmotionSelectionEnabled } = r;
        return [
          i,
          s.map((e) => {
            if (C7(e)) {
              return n._(o._({}, e), {
                isSpeedAdjustmentEnabled:
                  e.isSpeedAdjustmentEnabled && isSpeedAdjustmentEnabled,
                emotions: isEmotionSelectionEnabled ? e.emotions : [],
              });
            }
            return e;
          }),
        ];
      }),
    );
  }
  get _allVoices() {
    let e;
    let t;
    return [
      ...this._templateVoices,
      ...this._originalVoices,
      ...((e = this._categoryKeyToVoices[m.yW]) != null ? e : []),
      ...((t = this._categoryKeyToVoices[m.MG]) != null ? t : []),
    ];
  }
  get voiceIdToVoice() {
    return Object.fromEntries(this._allVoices.map((e) => [e.id, e]));
  }
  get _categoryVoices() {
    const {
      metadata: { categoryKeyToVoices },
    } = this._voiceService;
    const {
      data: { voiceCategoryKey },
    } = this._voiceManager;
    return categoryKeyToVoices[voiceCategoryKey];
  }
  get categoryVoicesLoading() {
    return this._categoryVoices.loading;
  }
  get _allEligibleVoices() {
    let e;
    let t;
    const i =
      (t = this._options) == null || (e = t.getModelKey) == null
        ? undefined
        : e.call(t);
    return Object.fromEntries(
      Object.keys(this._categoryKeyToVoices).map((e) => {
        var t;
        var r = (
          e === m.MG
            ? this._allVoices
            : (t = this._categoryKeyToVoices[e]) != null
              ? t
              : []
        ).filter((e) => {
          var t;
          var r;
          return (
            (this.isVoiceCloningSupported || !Ci(e) || aY(e) || tx(e)) &&
            (!i ||
              (t =
                (r = e.supportedModelKeys) == null
                  ? undefined
                  : r.includes(i)) == null ||
              t)
          );
        });
        if (this.speechSourceType === "text-to-speech") {
          return [e, r];
        }
        return [
          e,
          r
            .filter((e) => Ci(e) || e.isVoiceConversionEnabled)
            .map((e) => {
              if (Ci(e)) {
                return e;
              }
              return n._(o._({}, e), {
                isSpeedAdjustmentEnabled: false,
                emotions: [],
              });
            }),
        ];
      }),
    );
  }
  get allEligibleVoiceIds() {
    return new Set(this._allEligibleVoices[m.MG].map((e) => e.id));
  }
  get eligibleVoices() {
    const {
      data: { voiceCategoryKey },
    } = this._voiceManager;
    return this._allEligibleVoices[voiceCategoryKey];
  }
  get voices() {
    const {
      metadata: { voiceFilters },
    } = this._voiceService;
    const {
      data: { voiceFilterValues },
    } = this._voiceManager;
    const i = this.eligibleVoices.filter((i) => {
      var r;
      return Object.values((r = voiceFilters.data) != null ? r : []).every(
        (e) => {
          var { type } = e;
          return (
            voiceFilterValues[type] === undefined ||
            (C7(i) && voiceFilterValues[type] === i.tags[type])
          );
        },
      );
    });
    const r = Object.fromEntries(this.pinnedVoiceIds.map((e, t) => [e, t]));
    const [o, n] = V.A(i, (e) => Object.hasOwn(r, e.id));
    return o.toSorted((e, t) => r[e.id] - r[t.id]).concat(n);
  }
  get incomingVoicesLoading() {
    return this.incomingVoiceCount > 0;
  }
  get incomingVoicesLoadingTooltipProps() {
    const { incomingVoicesLoadingProgressManager } = this._voiceManager;
    const {
      data: { loading, progress },
    } = incomingVoicesLoadingProgressManager;
    if (loading) {
      return {
        content: l.Ay.t(
          "web_audio_voice_clone_progress",
          {
            num1: Math.floor(progress),
          },
          "音色克隆中 {num1}%",
        ),
      };
    }
  }
  get isMultipleSelection() {
    let e;
    let t;
    let i;
    return (
      (e =
        (i = this._options) == null || (t = i.multiple) == null
          ? undefined
          : t.call(i)) != null && e
    );
  }
  get voiceSelectionDisabled() {
    return false;
  }
  get isVoiceCloningSupported() {
    return true;
  }
  get voiceCategoryOptions() {
    const {
      metadata: { voiceCategoryOptions },
    } = this._voiceService;
    const length = this._allEligibleVoices[m.MG].filter(
      (e) => e.isFavorite,
    ).length;
    return voiceCategoryOptions
      .filter((e) => this.isVoiceCloningSupported || e.value !== m.yW)
      .map((e) => {
        if (e.value !== m.Jq) {
          return e;
        }
        return n._(o._({}, e), {
          label: length ? "".concat(e.label, " ").concat(length) : e.label,
        });
      });
  }
  setPinnedVoiceIds(e) {
    this.pinnedVoiceIds = e;
  }
  setSpeechSourceType(e) {
    this.speechSourceType = e;
  }
  setTemplateVoiceId(e) {
    this.templateVoiceId = e;
  }
  setUserTriggeredSpeechAudioDataLoading(e) {
    this.userTriggeredSpeechAudioDataLoading = e;
  }
  setIncomingVoiceCount(e) {
    this.incomingVoiceCount = e(this.incomingVoiceCount);
  }
  constructor(e, t, i) {
    this._voiceService = e;
    this._voiceManager = t;
    this._options = i;
    this.pinnedVoiceIds = I;
    this.speechSourceType = "text-to-speech";
    this.templateVoiceId = T;
    this.userTriggeredSpeechAudioDataLoading = false;
    this.incomingVoiceCount = 0;
    c.l_(this);
  }
}
class x extends j {
  _reportVoiceSelectPanel(e) {
    const t = d_1(this._containerService);
    const i = a_2(t);
    const r = this._containerService.createInstance(y);
    r.setParams(
      n._(o._({}, e), {
        modal: i === "aigc_audio" || i === "lip_sync" ? i : undefined,
      }),
    );
    r.report();
  }
  constructor(e, t) {
    super(t);
    this._voiceManager = e;
    this.reportChangeAudioSpeed = () => {
      var {
        data: { focusedVoiceSpeed },
      } = this._voiceManager;
      this._reportVoiceSelectPanel({
        action: "change_audio_speed",
        audioSpeed:
          focusedVoiceSpeed == null ? undefined : focusedVoiceSpeed.toString(),
      });
    };
    this.reportClickEmotion = () => {
      var {
        data: { focusedVoice, focusedVoiceEmotion, voiceCategoryKey },
      } = this._voiceManager;
      this._reportVoiceSelectPanel({
        action: "click_emotion",
        emotion:
          focusedVoiceEmotion == null ? undefined : focusedVoiceEmotion.type,
        voiceId: focusedVoice == null ? undefined : focusedVoice.id,
        voiceKey: focusedVoice == null ? undefined : focusedVoice.name,
        voiceCategoryKey,
      });
    };
    this.reportChooseVoiceCategory = () => {
      var {
        data: { voiceCategoryKey },
      } = this._voiceManager;
      this._reportVoiceSelectPanel({
        action: "choose_voice_category",
        voiceCategoryKey,
      });
    };
    this.reportClickVoice = () => {
      var {
        data: { focusedVoice, voiceCategoryKey },
      } = this._voiceManager;
      this._reportVoiceSelectPanel({
        action: "click_voice",
        voiceId: focusedVoice == null ? undefined : focusedVoice.id,
        voiceKey: focusedVoice == null ? undefined : focusedVoice.name,
        voiceCategoryKey,
      });
    };
    this.reportClickSettings = () => {
      this._reportVoiceSelectPanel({
        action: "click_settings",
      });
    };
    this.reportRenameVoiceClone = () => {
      this._reportVoiceSelectPanel({
        action: "rename_voice_clone",
      });
    };
    this.reportClickVoiceClone = () => {
      this._reportVoiceSelectPanel({
        action: "click_voice_clone",
      });
    };
    this.reportDeleteVoiceClone = () => {
      this._reportVoiceSelectPanel({
        action: "delete_voice_clone",
      });
    };
    this.reportVoicePanelShow = () => {
      this._reportVoiceSelectPanel({
        action: "voice_panel_show",
      });
    };
    this.reportCollectVoice = (e) => {
      var {
        data: { voiceCategoryKey },
      } = this._voiceManager;
      this._reportVoiceSelectPanel({
        action: "collect_voice",
        voiceId: e == null ? undefined : e.id,
        voiceKey: e == null ? undefined : e.name,
        voiceCategoryKey,
      });
    };
    this.reportClickFilter = (filterName) => {
      this._reportVoiceSelectPanel({
        action: "click_filter",
        filterName,
      });
    };
  }
}
x = a.Cg(
  [
    a.Qj(1, _._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ContentGeneratorVoiceManager === "undefined"
        ? Object
        : ContentGeneratorVoiceManager,
      _._ === undefined ? Object : _._,
    ]),
  ],
  x,
);
class w extends d.jG {
  get metadata() {
    return this._voiceMetadataStore;
  }
  get data() {
    return this._voiceDataStore;
  }
  setData(e) {
    const { resolveVoice } = this._voiceService;
    this.disposeSpeechAudio();
    const i = resolveVoice(e.voice);
    if (i) {
      this._voiceDataStore.setData(
        n._(o._({}, e), {
          voice: i,
        }),
      );
    } else {
      this._voiceDataStore.resetVoice();
    }
    this.loadSpeechAudio();
  }
  _cloneVoice(e, t) {
    return r
      ._(function* () {
        let i;
        let r;
        const { voiceCloningManager } = this._voiceService;
        const { cloneVoice } = voiceCloningManager;
        this.selectVoiceCategory(m.yW, {
          silent: true,
        });
        this._voiceMetadataStore.setIncomingVoiceCount((e) => e + 1);
        const a = yield cloneVoice(e, t);
        this._voiceMetadataStore.setIncomingVoiceCount((e) => e - 1);
        const { selectedVoiceIds } = this._voiceDataStore;
        if (selectedVoiceIds.size > 0 || !a.ok) {
          return a;
        }
        const a_value = a.value;
        if (
          (i = (r = this._options).multiple) == null ? undefined : i.call(r)
        ) {
          this.focusVoice(a_value, {
            silent: true,
          });
        } else {
          this.selectVoice(a_value, {
            silent: true,
          });
        }
        return a;
      })
      .call(this);
  }
  _prepareSpeechAudio(e) {
    return r
      ._(function* () {
        let t;
        const { focusedVoice, focusedVoiceSpeed, focusedVoiceEmotion } =
          this._voiceDataStore;
        const { silent = false } = e != null ? e : {};
        if (!silent) {
          this.disposeSpeechAudio();
        }
        if ((t = this._abortController) != null) {
          t.abort();
        }
        this._abortController = new AbortController();
        if (focusedVoice && this._speechAudioDataSource) {
          const { signal } = this._abortController;
          if (!silent) {
            this._voiceMetadataStore.setUserTriggeredSpeechAudioDataLoading(
              true,
            );
          }
          this._voiceDataStore.setSpeechAudio({
            data: undefined,
            loading: true,
            error: undefined,
          });
          const c = yield this._speechAudioDataSource.fetchSpeechAudioResource({
            voice: focusedVoice,
            speed: focusedVoiceSpeed,
            emotion: focusedVoiceEmotion,
          });
          if (!signal.aborted) {
            if (!c.ok) {
              this._updateUserTriggeredSpeechAudioDataLoading(false);
              this._voiceDataStore.setSpeechAudio({
                data: undefined,
                loading: false,
                error: c.findJsError(),
              });
              return;
            }
            const l = c.value;
            l.resolveMetadata();
            this._voiceDataStore.setSpeechAudio({
              data: l,
              loading: false,
              error: undefined,
            });
            const d = l.url;
            if (this.audio.src !== d) {
              if (!this.audio.paused) {
                this.audio.pause();
              }
              yield u.y(0);
              if (signal.aborted) {
                return;
              }
              this.audio.src = s.m(d, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: true,
                bid: "cc_dreamina",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: false,
                escapeRule: "escape-report",
                reportUrl:
                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                htmlparserOptions: "{}",
                scmBranch: "-",
                scmName: "-",
                scmVersion: "-",
                webpackPluginVersion: "3.6.0",
                filename:
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWJWcFhSakJr$0$wc1kzaz$hb%l5TlRC-$Z6$Xd%RmRr-kdKdFZubFpXRkoyWTJrNWR*bFhO$2hhTWxaN$kzaz$hb%l5TlRC-$Z6$Xd%RmRr-kdKdFZubFpXRkoyWTJreE1tSXliR3Bh$Xp*MFdW-zFhRm95$m5sT%1rNTJZbT$T-kdKd$$-%mFNbFox$2xoS2FH%khPW*xN$0ZwMllWZE9iRXh-T$doaWJ$Wn$Xb*hKZFdSS$Rta*pi$1F4WTNjO$BRPT0",
              });
            }
            const { userTriggeredSpeechAudioDataLoading } =
              this._voiceMetadataStore;
            if (!silent || userTriggeredSpeechAudioDataLoading) {
              this._updateUserTriggeredSpeechAudioDataLoading(false);
              this.audio.play();
            }
          }
        }
      })
      .call(this);
  }
  _updateUserTriggeredSpeechAudioDataLoading(e) {
    if (e !== this._voiceMetadataStore.userTriggeredSpeechAudioDataLoading) {
      this._voiceMetadataStore.setUserTriggeredSpeechAudioDataLoading(e);
    }
  }
  constructor(e, t, i, o) {
    var voiceManager;
    super();
    voiceManager = this;
    this._options = e;
    this._containerService = t;
    this._notificationService = i;
    this._voiceService = o;
    this.audio = new Audio();
    this._voiceAudioResourceCache = new Map();
    this.voiceReportManager = this._register(
      this._containerService.createInstance(x, this),
    );
    this.incomingVoicesLoadingProgressManager = this._register(
      new a_1({
        estimatedDuration: 10000,
      }),
    );
    this._speechAudioDataSource = null;
    this._abortController = null;
    this._voiceMetadataStore = new M(this._voiceService, this, this._options);
    this._voiceDataStore = new b(this._voiceService, this);
    this.switchToTextToSpeech = (e) => {
      var { speechSourceType } = this._voiceMetadataStore;
      this.disposeSpeechAudio();
      if (
        speechSourceType !== "text-to-speech" ||
        e !== this._speechAudioDataSource
      ) {
        this._voiceMetadataStore.setSpeechSourceType("text-to-speech");
        this._speechAudioDataSource = e;
        this.selectVoiceCategory(m.MG, {
          silent: true,
        });
        this.resetVoice();
      }
    };
    this.switchToSpeechToSpeech = (e) => {
      var { speechSourceType } = this._voiceMetadataStore;
      this.disposeSpeechAudio();
      if (
        speechSourceType === "speech-to-speech" &&
        e === this._speechAudioDataSource
      ) {
        this.loadSpeechAudio();
      } else {
        this.disposeSpeechAudio();
        this._voiceMetadataStore.setSpeechSourceType("speech-to-speech");
        this._speechAudioDataSource = e;
        this.selectVoiceCategory(m.MG, {
          silent: true,
        });
        this.selectVoice(m.hs, {
          silent: true,
        });
      }
    };
    this.disposeSpeechAudio = () => {
      var e;
      if ((e = this._abortController) != null) {
        e.abort();
      }
      this._updateUserTriggeredSpeechAudioDataLoading(false);
      this._voiceDataStore.resetSpeechAudio();
      this.pauseSpeechAudio();
    };
    this.setPinnedVoiceIds = (e) => {
      this._voiceMetadataStore.setPinnedVoiceIds([...new Set(e)]);
    };
    this.prepareVoicePanelOpen = () => {
      var { selectedVoiceIds } = this._voiceDataStore;
      this.setPinnedVoiceIds(
        selectedVoiceIds.size ? [...selectedVoiceIds] : undefined,
      );
      this._voiceService.updateFavoriteVoices();
      this.voiceReportManager.reportVoicePanelShow();
    };
    this.setTemplateVoiceId = (e) => {
      this._voiceMetadataStore.setTemplateVoiceId(e);
    };
    this.selectVoiceCategory = (e, t) => {
      if (e !== this._voiceDataStore.voiceCategoryKey) {
        this._voiceService.loadVoicesByCategoryKey(e);
        this._voiceDataStore.setVoiceCategoryKey(e);
        if (!(t == null ? undefined : t.silent)) {
          this.voiceReportManager.reportChooseVoiceCategory();
        }
      }
    };
    this.selectVoiceFilterValue = (e, t) => {
      this._voiceDataStore.setVoiceFilterValue(e, t);
      if (typeof t === "string") {
        this.voiceReportManager.reportClickFilter(e);
      }
    };
    this.focusVoice = (e, t) => {
      if (e !== this._voiceDataStore.focusedVoiceId) {
        this._voiceDataStore.setFocusedVoiceId(e);
        this._prepareSpeechAudio(t);
        if (!(typeof e !== "string" || (t == null ? undefined : t.silent))) {
          this.voiceReportManager.reportClickVoice();
        }
      }
    };
    this.selectVoice = (e, t) => {
      var i;
      var r;
      var o;
      var n;
      var a;
      if (
        !(
          (i =
            (r = (o = this._options).multiple) == null
              ? undefined
              : r.call(o)) != null && i
        )
      ) {
        this._voiceDataStore.selectedVoiceIds.forEach((t) => {
          if (t !== e) {
            this.deselectVoice(t);
          }
        });
      }
      if (!this._voiceDataStore.selectedVoiceIds.has(e)) {
        this._voiceDataStore.addSelectedVoiceId(e);
        if ((n = (a = this._options).onVoiceSelected) != null) {
          n.call(a, e);
        }
      }
      this.focusVoice(e, t);
    };
    this.deselectVoice = (e) => {
      var t;
      var i;
      if (this._voiceDataStore.selectedVoiceIds.has(e)) {
        this._voiceDataStore.removeSelectedVoiceId(e);
        if ((t = (i = this._options).onVoiceDeselected) != null) {
          t.call(i, e);
        }
        if (e === this._voiceDataStore.focusedVoiceId) {
          this.disposeSpeechAudio();
          this.focusVoice(undefined, {
            silent: true,
          });
        }
      }
    };
    this.toggleVoice = (e, t) => {
      if (this._voiceDataStore.selectedVoiceIds.has(e)) {
        this.deselectVoice(e);
      } else {
        this.selectVoice(e, t);
      }
    };
    this.resetVoice = () => {
      this.disposeSpeechAudio();
      this._voiceDataStore.resetVoice();
    };
    this.getVoiceAudioResource = (e) => {
      var t = this._voiceAudioResourceCache.get(e.id);
      if (t) {
        return t;
      }
      var { audio } = e;
      if (audio) {
        var r = f.M(this._containerService, audio, {
          name: e.name,
        });
        if (r.url) {
          this._voiceAudioResourceCache.set(e.id, r);
          return r;
        }
      }
    };
    this.invalidateVoiceAudioResource = (e) => {
      this._voiceAudioResourceCache.delete(e);
    };
    this.playSpeechAudio = () => {
      this._prepareSpeechAudio();
    };
    this.pauseSpeechAudio = () => {
      this.audio.pause();
      this.audio.currentTime = 0;
    };
    this.loadSpeechAudio = () => {
      this._prepareSpeechAudio({
        silent: true,
      });
    };
    this.updateSpeedByVoiceId = (e, t) => {
      this._voiceDataStore.updateSpeedByVoiceId(e, t);
    };
    this.updateEmotionByVoiceId = (e, t) => {
      this._voiceDataStore.updateEmotionByVoiceId(e, t);
      this.playSpeechAudio();
    };
    this.confirmVoiceSpeed = () => {
      this.playSpeechAudio();
      this.voiceReportManager.reportChangeAudioSpeed();
    };
    this.selectVoiceEmotion = (e, t) => {
      this.updateEmotionByVoiceId(e, t);
      this.voiceReportManager.reportClickEmotion();
    };
    this.favoriteVoice = (e, t) => {
      var { voiceFavoriteManager } = this._voiceService;
      var { favoriteVoice } = voiceFavoriteManager;
      favoriteVoice(e, t);
      if (t) {
        this.voiceReportManager.reportCollectVoice(e);
      }
    };
    this.updateRenamedVoiceName = (e) => {
      this._voiceDataStore.updateRenamedVoiceName(e);
    };
    this.renameClonedVoice = (e, t) =>
      r._(function* () {
        const i = yield t({
          containerService: voiceManager._containerService,
          voiceManager,
          voice: e,
        });
        if (i) {
          yield voiceManager._voiceService.renameClonedVoice(e, i);
        }
      })();
    this.deleteClonedVoice = (e, t) =>
      r._(function* () {
        if (
          yield t({
            voice: e,
          })
        ) {
          if ((yield voiceManager._voiceService.deleteClonedVoice(e)).ok) {
            voiceManager.voiceReportManager.reportDeleteVoiceClone();
            voiceManager._deselectVoices([e.id]);
          }
        }
      })();
    this.importVoicesFromLocal = (e, t) => {
      var i = e.map((file) =>
        this._containerService.createInstance(p.e, {
          file,
        }),
      );
      return this.cloneVoices(i, t);
    };
    this.cloneVoices = (e, t) => {
      var { isVoiceCloningSupported } = this._voiceMetadataStore;
      if (isVoiceCloningSupported) {
        if (e.length > m.w8) {
          this._notificationService.warning(
            l.Ay.t(
              "web_audio_generation_toast_voice_upload_limit",
              {
                num1: m.w8,
              },
              "最多批量上传 {num1} 个音色",
            ),
          );
        }
        return Promise.all(
          e.map((e, i) => {
            if (i < m.w8) {
              return this._cloneVoice(e, t);
            }
            return Promise.resolve(
              h.xz(-1, "voice count exceeds the batch upload limit"),
            );
          }),
        );
      }
      return Promise.resolve(
        e.map(() => h.xz(-1, "voice cloning is not supported")),
      );
    };
    this._deselectVoices = (e) => {
      if (e.length) {
        e.forEach((e) => {
          this.deselectVoice(e);
        });
        this.disposeSpeechAudio();
        if (this._voiceMetadataStore.speechSourceType === "speech-to-speech") {
          this.selectVoice(m.hs, {
            silent: true,
          });
        } else {
          this.focusVoice(undefined, {
            silent: true,
          });
        }
      }
    };
    this._register({
      dispose: c.mJ(
        () =>
          this._voiceMetadataStore.incomingVoicesLoading &&
          this._voiceDataStore.selectedVoiceIds.size === 0,
        (e) => {
          if (e) {
            this.incomingVoicesLoadingProgressManager.start();
          } else {
            this.incomingVoicesLoadingProgressManager.stop();
          }
        },
        {
          fireImmediately: true,
        },
      ),
    });
    this._register({
      dispose: c.mJ(
        () => {
          var e;
          var t;
          var i;
          return (
            (e =
              (t = (i = this._options).multiple) == null
                ? undefined
                : t.call(i)) != null && e
          );
        },
        () => {
          this.resetVoice();
        },
      ),
    });
    this._register({
      dispose: c.mJ(
        () => {
          var { allEligibleVoiceIds } = this._voiceMetadataStore;
          var { selectedVoiceIds, focusedVoiceId } = this._voiceDataStore;
          return [
            ...(typeof focusedVoiceId === "string"
              ? new Set([...selectedVoiceIds, focusedVoiceId])
              : selectedVoiceIds
            ).difference(allEligibleVoiceIds),
          ];
        },
        this._deselectVoices,
        {
          equals: c.m3.structural,
        },
      ),
    });
    this._register({
      dispose: c.mJ(
        () =>
          this._voiceMetadataStore.voiceCategoryOptions.some(
            (e) => e.value === this._voiceDataStore.voiceCategoryKey,
          ),
        (e) => {
          if (!e) {
            this.selectVoiceCategory(m.MG, {
              silent: true,
            });
          }
        },
      ),
    });
  }
}
export { w as a };
w = a.Cg(
  [
    a.Qj(1, _._),
    a.Qj(2, v.Ot),
    a.Qj(3, h_1),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ContentGeneratorVoiceManagerOptions === "undefined"
        ? Object
        : ContentGeneratorVoiceManagerOptions,
      _._ === undefined ? Object : _._,
      v.Ot === undefined ? Object : v.Ot,
      h_1 === undefined ? Object : h_1,
    ]),
  ],
  w,
);
