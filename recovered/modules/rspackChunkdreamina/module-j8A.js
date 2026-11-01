import r from "GH";
import a from "xh";
import n from "dOC";
import s from "Edn";
import d from "m7";
import l from "Hka";
import c from "Mco";
import p from "yd";
import u from "mv";
import f from "JK";
import { DAComponent } from "./module-z3F.js";
import { DADraftCreatedPlatform } from "./module-E9.js";
import { DANode } from "./module-uR.js";
import { DAUtils } from "./module-pz.js";
import y from "Rd";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DADraft extends DANode {
  constructor() {
    super(...arguments);
    this.isFromTSN = true;
    this.version = r.currentDreaminaAgreementVersion;
    this.mainComponentId = undefined;
    this.componentList = [];
  }
  static createDraftForGenerateTask(e) {
    if (e === undefined) {
      return new DADraft();
    }
    let t = new DADraft(e);
    if (f.UpgradeManager.shared.run(t).code != u.UpgradeErrorCode.NoError) {
      t = new DADraft();
    }
    t.id = DAUtils.randomUUIDString();
    t.minVersion = undefined;
    t.minFeatures = undefined;
    return t;
  }
  afterInit() {
    super.afterInit();
    this.type = "draft";
  }
  afterParse() {
    super.afterParse();
    this.componentList = this.componentList.map((e, t, i) => {
      if (e.type === "video_base_component") {
        return new c.DAVideoBaseComponent(undefined, e.rawData);
      }
      if (e.type === "image_base_component") {
        return new l.DAImageBaseComponent(undefined, e.rawData);
      }
      if (e.type === "ai_effect_base_component") {
        return new n.DAAIEffectBaseComponent(undefined, e.rawData);
      }
      if (e.type === "audio_base_component") {
        return new s.DAAudioBaseComponent(undefined, e.rawData);
      }
      return e;
    });
  }
  setMainComponent(e) {
    let mainComponentId = this.mainComponentId;
    if (mainComponentId !== e.id) {
      if (mainComponentId != undefined) {
        let i = this.findMainComponent();
        if (i != undefined) {
          i.componentWillResignMain(e);
        }
        e.parentId = mainComponentId;
      }
      this.mainComponentId = e.id;
      this.componentList.push(e);
    }
  }
  replaceMainComponent(e) {
    let t = this.findMainComponent();
    let i = t == null ? undefined : t.parentId;
    this.mainComponentId = e.id;
    e.parentId = i;
    if (this.componentList.length > 0) {
      this.componentList.pop();
    }
    this.componentList.push(e);
  }
  childNodes() {
    return this.componentList.map((e, t, i) => e);
  }
  toJSONString() {
    this.minVersion = this.calculateMinVersion();
    this.minFeatures = this.calculateMinFeatures();
    return super.toJSONString();
  }
  findMainComponent() {
    let e;
    this.componentList.forEach((t) => {
      if (t.id === this.mainComponentId) {
        e = t;
      }
    });
    return e;
  }
  findRootComponent() {
    let e;
    this.componentList.forEach((t) => {
      if (t.parentId === undefined) {
        e = t;
      }
    });
    return e;
  }
  findParentComponent(e) {
    let t;
    this.componentList.forEach((i) => {
      if (i.id === e.parentId) {
        t = i;
      }
    });
    return t;
  }
  findNotNullValueFromNearestComponent(e, t) {
    let i = t != null ? t : this.findMainComponent();
    if (i === undefined) {
      return;
    }
    let o = e(i);
    if (o != undefined) {
      return o;
    }
    let r = this.findParentComponent(i);
    if (r !== undefined) {
      return this.findNotNullValueFromNearestComponent(e, r);
    }
  }
  _hasBaseVideoGenComponent(e) {
    return (
      this.findNotNullValueFromNearestComponent((e) => {
        if (
          e instanceof c.DAVideoBaseComponent &&
          y.ForcedCast.toClass(e, c.DAVideoBaseComponent).processType ===
            p.DAVideoProcessType.VideoGen
        ) {
          return true;
        }
      }, e) === true
    );
  }
  _handleInsertFrameFeatures(e) {
    let t = [];
    if (!this._hasBaseVideoGenComponent(e)) {
      if (e.processType === p.DAVideoProcessType.InsertFrame) {
        t.push(a.MinFeatures.AIGC_GenerateType_VideoInsertFrame);
      }
    }
    return t;
  }
  _handleSRFeatures(e) {
    let t;
    let i;
    let o;
    let r;
    let n;
    let s = [];
    let d = this._hasBaseVideoGenComponent(e);
    if (e.processType === p.DAVideoProcessType.SR) {
      if (!d) {
        s.push(a.MinFeatures.AIGC_GenerateType_VideoSuperResolution);
      }
      let l =
        (o =
          (i = (t = e.abilities) == null ? undefined : t.genVideo) == null
            ? undefined
            : i.text2VideoParams) == null
          ? undefined
          : o.videoGenInputs;
      if (l != undefined) {
        for (let e = 0; e < l.length; e++) {
          if (
            ((n = (r = l[e].v2vOpt) == null ? undefined : r.superResolution) ==
            null
              ? undefined
              : n.aigcSr) === true
          ) {
            s.push(a.MinFeatures.AIGC_GenerateType_VideoSuperResolution2K4K);
            break;
          }
        }
      }
    }
    return s;
  }
  _handleLipSyncFeatures(e) {
    let t;
    let i = [];
    let o = (t = e.abilities) == null ? undefined : t.lipSync;
    if (o !== undefined) {
      if (
        o.audioResourceId != undefined &&
        o.audioResourceId.length > 0 &&
        o.audioItemPlatform === d.CommonItemPlatform.Local
      ) {
        i.push(a.MinFeatures.AIGC_GenerateType_LipSyncPersonalTone);
      }
      if (o.audioToneEmotion != undefined) {
        i.push(a.MinFeatures.AIGC_GenerateType_LipSyncToneEmotion);
      }
    }
    return i;
  }
  _handleMultiFrameFeatures(e) {
    let t;
    let i;
    let o;
    let r = [];
    let n = (t = e.abilities) == null ? undefined : t.genVideo;
    if (n === undefined) {
      return r;
    }
    let s = (i = n.text2VideoParams) == null ? undefined : i.videoGenInputs;
    if (s === undefined || s.length <= 0) {
      return r;
    }
    let d = s[0];
    if (d.multiFrames != undefined && d.multiFrames.length > 0) {
      r.push(a.MinFeatures.AIGC_GenerateType_VideoMultiFrame);
      if (
        ((o = n.text2VideoParams) == null ? undefined : o.modelReqKey) ===
        "dreamina_ic_generate_video_model_vgfm_3.0_fast"
      ) {
        r.push(a.MinFeatures.AIGC_GenerateType_VideoMultiFrame_v2);
      }
    }
    return r;
  }
  _handleIdipFrameFeatures(e) {
    let t;
    let i;
    let o = [];
    let r = (t = e.abilities) == null ? undefined : t.genVideo;
    if (r === undefined) {
      return o;
    }
    let n = (i = r.text2VideoParams) == null ? undefined : i.videoGenInputs;
    if (n === undefined || n.length <= 0) {
      return o;
    }
    let s = n[0];
    if (s.idipFrames != undefined && s.idipFrames.length > 0) {
      o.push(a.MinFeatures.AIGC_GenerateType_VideoIdipFrame);
    }
    return o;
  }
  _handleUnifiedEditFeatures(e) {
    let t;
    let i;
    let o = [];
    let r = (t = e.abilities) == null ? undefined : t.genVideo;
    if (r != undefined) {
      let e = (i = r.text2VideoParams) == null ? undefined : i.videoGenInputs;
      if (e != undefined) {
        for (let t = 0; t < e.length; t++) {
          let i = e[t].unifiedEditInput;
          if (i !== undefined) {
            if (o.indexOf(a.MinFeatures.AIGC_Video_UnifiedEdit) < 0) {
              o.push(a.MinFeatures.AIGC_Video_UnifiedEdit);
            }
            if (
              i.hasSubjectMaterial() &&
              o.indexOf(a.MinFeatures.AIGC_UnifiedEditSubject) < 0
            ) {
              o.push(a.MinFeatures.AIGC_UnifiedEditSubject);
            }
            if (
              i.hasSubjectWithVideoOrAudio() &&
              o.indexOf(a.MinFeatures.AIGC_UnifiedEditSubject_v2) < 0
            ) {
              o.push(a.MinFeatures.AIGC_UnifiedEditSubject_v2);
            }
            if (
              i.hasVideoContinuation() &&
              o.indexOf(a.MinFeatures.AIGC_Video_Continuation) < 0
            ) {
              o.push(a.MinFeatures.AIGC_Video_Continuation);
            }
          }
        }
      }
    }
    return o;
  }
  _handleVideoEditFeatures(e) {
    let t;
    let i;
    let o;
    let r;
    let n = (t = e.abilities) == null ? undefined : t.genVideo;
    if (
      ((i = n == null ? undefined : n.videoTaskExtraObject) == null
        ? undefined
        : i.videoProcessType) != p.DAVideoProcessType.VideoEdit
    ) {
      return [];
    }
    let s = (o = n.text2VideoParams) == null ? undefined : o.videoGenInputs;
    if (s === undefined) {
      return [];
    }
    for (let e = 0; e < s.length; e++) {
      if (
        ((r = s[e].unifiedEditInput) == null
          ? undefined
          : r.hasMaterialSourceInfo()) === true
      ) {
        return [a.MinFeatures.AIGC_GenerateType_VideoEdit];
      }
    }
    return [];
  }
  _handleLongVideoFeatures(e) {
    let t;
    let i;
    let o = [];
    let r = (t = e.abilities) == null ? undefined : t.genVideo;
    if (r === undefined) {
      return o;
    }
    let n = (i = r.text2VideoParams) == null ? undefined : i.videoGenInputs;
    if (n === undefined) {
      return o;
    }
    for (let e = 0; e < n.length; e++) {
      let t = n[e].longVideoInput;
      if (t !== undefined) {
        if (o.indexOf(a.MinFeatures.AIGC_GenerateType_LongVideo) < 0) {
          o.push(a.MinFeatures.AIGC_GenerateType_LongVideo);
        }
        if (
          t.hasSubjectMaterial() &&
          o.indexOf(a.MinFeatures.AIGC_UnifiedEditSubject) < 0
        ) {
          o.push(a.MinFeatures.AIGC_UnifiedEditSubject);
        }
        if (
          t.hasSubjectWithVideoOrAudio() &&
          o.indexOf(a.MinFeatures.AIGC_UnifiedEditSubject_v2) < 0
        ) {
          o.push(a.MinFeatures.AIGC_UnifiedEditSubject_v2);
        }
      }
    }
    return o;
  }
  _handleSeedance25ResultActionFeatures(e) {
    let t;
    let i;
    let o;
    let r =
      (o =
        (i = (t = e.abilities) == null ? undefined : t.genVideo) == null
          ? undefined
          : i.text2VideoParams) == null
        ? undefined
        : o.modelReqKey;
    if (r != undefined && r.indexOf("dreamina_seedance_45") === 0) {
      return [a.MinFeatures.AIGC_Video_Seedance25ResultAction];
    }
    return [];
  }
  _handleWebLocalEditResultActionFeatures(e) {
    let t;
    let i;
    let o;
    let r;
    let n = (t = e.metaData) == null ? undefined : t.createdPlatform;
    let s =
      (r =
        (o = (i = e.abilities) == null ? undefined : i.genVideo) == null
          ? undefined
          : o.videoTaskExtraObject) == null
        ? undefined
        : r.videoProcessType;
    if (
      n === DADraftCreatedPlatform.WEB &&
      s === p.DAVideoProcessType.VideoEdit
    ) {
      return [a.MinFeatures.AIGC_Video_WebLocalEditResultAction];
    }
    return [];
  }
  _calculateVideoMinFeatures(e) {
    let t = [];
    return (t = (t = (t = (t = (t = (t = (t = (t = (t = t.concat(
      this._handleInsertFrameFeatures(e),
    )).concat(this._handleSRFeatures(e))).concat(
      this._handleLipSyncFeatures(e),
    )).concat(this._handleMultiFrameFeatures(e))).concat(
      this._handleIdipFrameFeatures(e),
    )).concat(this._handleUnifiedEditFeatures(e))).concat(
      this._handleVideoEditFeatures(e),
    )).concat(this._handleLongVideoFeatures(e))).concat(
      this._handleSeedance25ResultActionFeatures(e),
    )).concat(this._handleWebLocalEditResultActionFeatures(e));
  }
  calculateMinFeatures() {
    this.minFeatures = [];
    let e = this.findMainComponent();
    if (e instanceof c.DAVideoBaseComponent) {
      this.minFeatures = this._calculateVideoMinFeatures(e);
    }
    return super.calculateMinFeatures();
  }
}
o([y.serializable("is_from_tsn")], DADraft.prototype, "isFromTSN", undefined);
o([y.serializable("version")], DADraft.prototype, "version", undefined);
o(
  [y.serializable("main_component_id")],
  DADraft.prototype,
  "mainComponentId",
  undefined,
);
o(
  [y.serializable("component_list", () => DAComponent)],
  DADraft.prototype,
  "componentList",
  undefined,
);
