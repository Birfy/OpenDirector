import a from "oa";
import i from "bk";
import n from "QWK";
import o from "dw4";
import s from "bE";
import l from "o7";
import c from "K8";
import d from "aEB";
import u from "Kt";
import * as h from "./module-bCt.js";
import g from "krN";
import m from "gG";
import p from "ZX";
import _ from "VA";
import v from "TK";
import f from "f3";
import S from "fbb";
import y from "gKw";
import M from "htj";
import k from "rIS";
import R from "wh";
import I from "v1T";
import b from "jkF";
import C from "xi";
import P from "k4";
import G from "NY";
import w from "aX";
import j from "H6T";
import D from "e3";
import F from "LLl";
import { a as a_1 } from "./module-fkB.js";
import { S as S_1 } from "./module-Nde.js";
import E from "at";
import O from "Y9q";
import U from "dHI";
import V from "m7A";
import N from "z8f";
import K from "JEp";
import z from "uhr";
import W from "WUK";
import * as B from "./module-QrL.js";
import q from "SR";
import H from "Qey";
import J from "Dm";
import Z from "b3";
import * as $ from "./module-Xfi.js";
import Y from "iU";
import X from "n4G";
import ee from "lt";
import { C as C_1 } from "./module-E0L.js";
import { _F, z as z_1 } from "./module-ll.js";
function A(e) {
  return `agent_creation_mode:`.concat(e);
}
function T(e) {
  return `agent_inference_model:`.concat(e);
}
class Q extends l.jG {
  applyPrompt(e) {
    this.setPromptContents([
      {
        type: "text",
        text: e,
      },
    ]);
  }
  importAgenticRecord(e, t) {
    const { activateContentGenerator, setContentGeneratorType } =
      this._contentGeneratorManager;
    const { reportManager } = this._agenticGeneratorManager;
    setContentGeneratorType("agentic");
    reportManager.setResourceReportParams(
      t == null ? undefined : t.reportParams,
    );
    this._agenticGeneratorManager.setReferenceRecord(e);
    activateContentGenerator();
  }
  applyRichPrompt(e) {
    return G._(function* () {
      const {
        metadata: { acceptedResourceTypes },
        resetReferenceResources,
        addReferenceResources,
      } = this._agenticGeneratorManager;
      const i = O.I(this._containerService, e.resources, acceptedResourceTypes);
      const n = new Map(i.map((e) => [e.id, e]));
      const o = e.promptContents.flatMap((e) => {
        if (e.type === "text" || e.type === "subject") {
          return [e];
        }
        var t = n.get(e.id);
        if (t) {
          return [
            {
              type: "reference-resource",
              resource: t,
            },
          ];
        }
        return [];
      });
      resetReferenceResources();
      const s = yield addReferenceResources(i);
      if (s.ok) {
        yield this.setPromptContents(o);
        return c.nj();
      }
      return s;
    }).call(this);
  }
  importReferencesInRecord(e, t) {
    if (!w.e(e)) {
      return Promise.resolve(c.nj());
    }
    const r = j.U(e, t);
    if (!(r == null ? undefined : r.url)) {
      return Promise.resolve(c.nj());
    }
    const a = this._containerService.createInstance(E.Vl, {
      uri: r.uri,
      url: r.url,
      width: r.width,
      height: r.height,
      aigcItemId: r.aigcItemId,
    });
    this._agenticGeneratorManager.addReferenceResources([a]);
    return Promise.resolve(c.nj());
  }
  importRecordAsReference(e, t, r) {
    return G._(function* () {
      const a = U.R(this._containerService, e, t);
      if (!a) {
        return c.nj();
      }
      if (D.A(e)) {
        let i;
        const n = e.itemList[t];
        const o = B.I.includes(e.generateType)
          ? (i = n.text2imageParams.modelRewrittenPrompt) != null
            ? i
            : n.text2imageParams.prompt
          : undefined;
        this._agenticGeneratorManager.reportManager.reportAddReferenceImage();
        if (o) {
          this._agenticGeneratorManager.setReferenceResourcePrompt(a.id, o);
        }
      }
      yield this.importReferenceResources([a], r);
      return c.nj();
    }).call(this);
  }
  importWorkDetailAsReference(e) {
    if (!F.Y(e)) {
      return c.nj();
    }
    let t;
    const r = V.w(this._containerService, e);
    if (!r) {
      return c.nj();
    }
    const { text2imageParams, aigcImageParams } = e;
    const n =
      (aigcImageParams == null ? undefined : aigcImageParams.generateType) &&
      B.I.includes(aigcImageParams.generateType)
        ? (t = text2imageParams.modelRewrittenPrompt) != null
          ? t
          : text2imageParams.prompt
        : undefined;
    if (n) {
      this._agenticGeneratorManager.setReferenceResourcePrompt(r.id, n);
    }
    this._agenticGeneratorManager.addReferenceResources([r]);
    return c.nj();
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return c.nj();
    }
    var t;
    let r;
    let a;
    let i;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const o = videoGenInputs.find((e) => !!e.firstFrameImage);
    const s = o == null ? undefined : o.firstFrameImage;
    if (!s) {
      return c.nj();
    }
    const l =
      ((a = s.aigcImage) == null || (r = a.aigcImageParams) == null
        ? undefined
        : r.generateType) &&
      B.I.includes(s.aigcImage.aigcImageParams.generateType)
        ? (i = e.firstFrameImageAigcParams) == null
          ? undefined
          : i.text2imageParams.prompt
        : undefined;
    const d = N.h(this._containerService, s, {
      resolutionUrlMap: e.commonAttr.coverUrlMap,
      cacheKey: e.commonAttr.id,
      aigcItemId: e.commonAttr.id,
    });
    if (l) {
      this._agenticGeneratorManager.setReferenceResourcePrompt(d.id, l);
    }
    this._agenticGeneratorManager.addReferenceResources([d]);
    return c.nj();
  }
  importReferenceResources(e, t) {
    return G._(function* () {
      const {
        metadata: { acceptedResourceTypes },
      } = this._agenticGeneratorManager;
      const a = O.I(this._containerService, e, acceptedResourceTypes);
      if (!a.length) {
        return c.nj();
      }
      const { reportManager, replaceReferenceResource, addReferenceResources } =
        this._agenticGeneratorManager;
      if (typeof t === "number" && a.length === 1) {
        if ((yield replaceReferenceResource(t, a[0])).ok) {
          K.j([a[0]], reportManager);
        }
        return c.nj();
      }
      const s = yield addReferenceResources(a);
      if (s.ok) {
        K.j(s.value, reportManager);
      }
      return c.nj();
    }).call(this);
  }
  reeditGenerationDataInRecord(e) {
    return G._(function* () {
      if (!w.e(e)) {
        return c.nj();
      }
      const { userMessage } = e.taskData;
      this._agenticGeneratorManager.resetReferenceResources();
      if (userMessage.text) {
        yield this.setPromptContents([
          {
            type: "text",
            text: userMessage.text,
          },
        ]);
      }
      let r = new Map();
      if (userMessage.files && userMessage.files.length > 0) {
        r = a_1(this._containerService, userMessage.files);
        yield this._agenticGeneratorManager.addReferenceResources(
          Array.from(r.values()),
        );
      }
      if (userMessage.referenceInfo && userMessage.referenceInfo.length > 0) {
        const n = userMessage.referenceInfo.filter((e) => !e.isReferenced);
        const o = S_1(this._containerService, n, r).map((e) => {
          if (e.type === "subject") {
            return i._(a._({}, e), {
              loading: true,
            });
          }
          return e;
        });
        yield this.setPromptContents(o);
        z.r(this._containerService, o, {
          setPromptContents: this._agenticGeneratorManager.changePromptContents,
          getCurrentPromptContents: () =>
            this._agenticGeneratorManager.data.promptContents,
        });
        const s = userMessage.referenceInfo.filter((e) => e.isReferenced);
        this._agenticGeneratorManager.setReferenceRecordContents(s);
      }
      return c.nj();
    }).call(this);
  }
  reeditGenerationDataInWorkDetail() {
    return W.P();
  }
  constructor(e, t, r) {
    var a;
    super();
    a = this;
    this._agenticGeneratorManager = e;
    this._contentGeneratorManager = t;
    this._containerService = r;
    this.setPromptContents = (e, t) =>
      G._(function* () {
        const {
          changePromptContents,
          reportManager,
          agenticVoiceInputManager,
        } = a._agenticGeneratorManager;
        const { activateContentGenerator } = a._contentGeneratorManager;
        agenticVoiceInputManager.stopIfActive();
        changePromptContents(yield a._resolveEffectivePromptContents(e));
        reportManager.setResourceReportParams(
          t == null ? undefined : t.reportParams,
        );
        activateContentGenerator();
      })();
    this.insertPromptContents = (e, t) =>
      G._(function* () {
        let r;
        let i;
        let n;
        const { promptEditorManager, reportManager, agenticVoiceInputManager } =
          a._agenticGeneratorManager;
        const { transformPromptContentToNodes } = promptEditorManager;
        const { visibleContentGeneratorInstance, activateContentGenerator } =
          a._contentGeneratorManager;
        const { promptEditorRef } =
          (r =
            visibleContentGeneratorInstance == null
              ? undefined
              : visibleContentGeneratorInstance.elements) != null
            ? r
            : {};
        agenticVoiceInputManager.stopIfActive();
        const g = yield a._resolveEffectivePromptContents(e);
        if (g.length) {
          if (
            !(promptEditorRef == null || (i = promptEditorRef.current) == null)
          ) {
            i.commands.insertContent(g.flatMap(transformPromptContentToNodes));
          }
          const m =
            g.length === 1 &&
            ((n = g[0]) == null ? undefined : n.type) === "reference-resource";
          reportManager.setResourceReportParams(
            t == null ? undefined : t.reportParams,
          );
          if (m) {
            reportManager.reportAddReferenceImage();
          } else {
            reportManager.reportBatchAdd();
          }
          activateContentGenerator();
        }
      })();
    this._resolveEffectivePromptContents = (e) =>
      G._(function* () {
        const { addReferenceResources, setReferenceResourcePrompt } =
          a._agenticGeneratorManager;
        const i = e.filter((e) => e.type === "reference-resource");
        const n = i.map((e) => e.resource);
        yield addReferenceResources(n);
        const o = new Set(
          a._agenticGeneratorManager.data.referenceResources.map((e) => e.id),
        );
        i.filter((e) => o.has(e.resource.id)).forEach((e) => {
          setReferenceResourcePrompt(e.resource.id, e.prompt);
        });
        return e.filter(
          (e) => e.type !== "reference-resource" || o.has(e.resource.id),
        );
      })();
  }
}
Q = n.Cg(
  [
    n.Qj(2, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      u._ === undefined ? Object : u._,
    ]),
  ],
  Q,
);
const ea = {};
const ei = {};
const en = {};
const eo = {};
let es;
let el;
const ec = {};
class ed {
  get inferenceModelId() {
    return this._inferenceModelId;
  }
  setInferenceModelId(e) {
    this._inferenceModelId = e;
  }
  get creationMode() {
    return this._creationMode;
  }
  setCreationMode(e) {
    this._creationMode = e;
  }
  get searchEnabled() {
    const visibleContentGeneratorVariant =
      this._agenticGeneratorManager.contentGeneratorManager
        .visibleContentGeneratorVariant;
    if (
      visibleContentGeneratorVariant !== "canvas" &&
      visibleContentGeneratorVariant !== undefined
    ) {
      return this._searchEnabled && !C_1;
    }
    return this._searchEnabled;
  }
  get conversationId() {
    let e;
    let t;
    if (
      (e =
        (t = this._agenticGeneratorManager.agentConversationsManager) == null
          ? undefined
          : t.data.currentConversationId) != null
    ) {
      return e;
    }
    return "";
  }
  get promptContents() {
    let e;
    if (
      (e = this.conversationIdToPromptContents[this.conversationId]) != null
    ) {
      return e;
    }
    return [];
  }
  get editorDocument() {
    const { promptEditorManager } = this._agenticGeneratorManager;
    return promptEditorManager.transformPromptContentsToEditorDocument(
      this.promptContents,
    );
  }
  get referenceResources() {
    let e;
    if (
      (e = this.conversationIdToReferenceResources[this.conversationId]) != null
    ) {
      return e;
    }
    return [];
  }
  set referenceResources(e) {
    this.conversationIdToReferenceResources[this.conversationId] = e;
  }
  get referencePanelVisible() {
    let e;
    return (
      (e = this.conversationIdToReferencePanelVisible[this.conversationId]) !=
        null && e
    );
  }
  get referencePanelActiveTab() {
    let e;
    if (
      (e = this.conversationIdToReferencePanelActiveTab[this.conversationId]) !=
      null
    ) {
      return e;
    }
    return "all";
  }
  get promptTextContent() {
    return this.promptContents
      .flatMap((e) => {
        if (e.type === "text") {
          return [e.text];
        }
        return [];
      })
      .join("");
  }
  get isPristine() {
    return (
      this.isPromptEmpty &&
      this.referenceRecordContents === undefined &&
      !this.referenceResources.length
    );
  }
  get generatorSettings() {
    J.X3(this._imageSettingsData && this._videoSettingsData);
    return {
      imageSettings: this._imageSettingsData.imageSettings,
      videoSettings: this._videoSettingsData.videoSettings,
    };
  }
  get hasSkill() {
    return this.promptContents.some((e) => e.type === "skill");
  }
  get currentSkillId() {
    let e;
    if ((e = this.promptContents.find((e) => e.type === "skill")) == null) {
      return undefined;
    }
    return e.id;
  }
  get isPromptEmpty() {
    return !this.promptTextContent.trim() && !this.promptContents.length;
  }
  get referenceRecordText() {
    let e;
    if ((e = this.referenceRecordContents) == null) {
      return undefined;
    }
    return e
      .flatMap((e) => {
        if (e.text) {
          return [e.text];
        }
        if (e.file) {
          switch (e.file.type) {
            case q.NuroFileType.image:
              return [H.Ay.t("web_agent_quote_content_image", {}, "[Image]")];
            case q.NuroFileType.video:
              return [H.Ay.t("web_agent_quote_content_video", {}, "[Video]")];
            case q.NuroFileType.audio:
              return [H.Ay.t("web_agent_quote_content_audio", {}, "[Audio]")];
            case q.NuroFileType.markdown:
              return [
                H.Ay.t("web_agent_quote_content_markdown", {}, "[Markdown]"),
              ];
            case q.NuroFileType.pdf:
              return [H.Ay.t("web_agent_quote_content_pdf", {}, "[PDF]")];
            case q.NuroFileType.docx:
              return [H.Ay.t("web_agent_quote_content_doc", {}, "[Doc]")];
          }
        }
        return [];
      })
      .join("\n");
  }
  get validationResult() {
    if (this._agenticGeneratorManager.metadata.isSettingsRestoring) {
      return c.xz(-1, "");
    }
    const { contentGeneratorManager } = this._agenticGeneratorManager;
    const { visibleContentGeneratorInstance } = contentGeneratorManager;
    const r = this.referenceResources.some((e) => e.uri === undefined);
    if (
      (visibleContentGeneratorInstance == null
        ? undefined
        : visibleContentGeneratorInstance.environment.submitExternally) &&
      r
    ) {
      return c.xz(
        -1,
        H.Ay.t("web_canva_material_uploading_tooltip", {}, "素材上传中"),
      );
    }
    if (this.promptContents.some((e) => e.type === "subject" && e.loading)) {
      return c.xz(
        -1,
        H.Ay.t(
          "web_agent_subject_material_updating",
          {},
          "Updating element...",
        ),
      );
    }
    const a = this.promptContents.some(
      (e) => e.type === "create-skill-template-slot",
    )
      ? c.xz(-1, z_1())
      : c.nj();
    if (a.ok) {
      return this.promptValidationResult;
    }
    return a;
  }
  get promptValidationResult() {
    const {
      metadata: { referenceValidationLimits },
    } = this._agenticGeneratorManager;
    const t = Y.Z({
      materials: X.G({
        resources: this.referenceResources,
        subjects: ee.I(this.promptContents),
      }),
      limits: referenceValidationLimits,
    });
    if (!t.ok) {
      return t;
    }
    const allowEmpty =
      this.promptContents.some((e) => e.type !== "text") ||
      this.referenceResources.length > 0;
    return Z.f(this.promptTextContent, {
      allowEmpty,
      maxLength: this._agenticGeneratorManager.metadata.promptMaxLength,
      allowUrls: true,
    });
  }
  resetData() {
    this.resetInputData();
  }
  resetInputData() {
    this.referenceRecordContents = es;
    this.referenceTurnId = el;
    this.resetReferenceResources();
    delete this.conversationIdToPromptContents[this.conversationId];
  }
  setManualSettingsEnabled(e) {
    this.manualSettingsEnabled = e;
  }
  setVideoSettingsConfigured(e) {
    this.videoSettingsConfigured = e;
  }
  setSearchEnabled(e) {
    this._searchEnabled = e;
  }
  setCreativeModelEnabled(e) {
    const { contentGeneratorManager } = this._agenticGeneratorManager;
    const { visibleContentGeneratorVariant } = contentGeneratorManager;
    this.creativeModelEnabled =
      e && (visibleContentGeneratorVariant === "canvas" || !y.F);
  }
  setPromptContents(e) {
    this.conversationIdToPromptContents[this.conversationId] = e;
  }
  setReferenceRecordContents(e) {
    this.referenceRecordContents = e;
  }
  setReferenceTurnId(e) {
    this.referenceTurnId = e;
  }
  setReferencePanelVisible(e) {
    this.conversationIdToReferencePanelVisible[this.conversationId] = e;
  }
  setReferencePanelActiveTab(e) {
    this.conversationIdToReferencePanelActiveTab[this.conversationId] = e;
  }
  addReferenceResources(e) {
    this.referenceResources = [...this.referenceResources, ...e];
  }
  setReferenceResource(e, t) {
    let r;
    const a = (r = this.referenceResources.at(e)) == null ? undefined : r.id;
    if (a && a !== t.id) {
      delete this.referenceResourcePromptMap[a];
    }
    const i = [...this.referenceResources];
    i[e] = t;
    this.referenceResources = i;
  }
  moveReferenceResources(e, t) {
    if (e !== t) {
      const r = [...this.referenceResources];
      const [a] = r.splice(e, 1);
      r.splice(t, 0, a);
      this.referenceResources = r;
    }
  }
  removeReferenceResource(e) {
    this.removeReferenceResources([e]);
  }
  removeReferenceResources(e) {
    let t;
    const r =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : this.conversationId;
    if (e.length !== 0) {
      const a = new Set(e);
      const i = (
        (t = this.conversationIdToReferenceResources[r]) != null ? t : []
      ).filter((e) => !a.has(e.id));
      this.conversationIdToReferenceResources[r] = i;
      e.forEach((e) => {
        delete this.referenceResourcePromptMap[e];
      });
      if (i.length === 0) {
        delete this.conversationIdToReferencePanelVisible[r];
        delete this.conversationIdToReferencePanelActiveTab[r];
      }
      const n = this.conversationIdToPromptContents[r];
      if (n) {
        this.conversationIdToPromptContents[r] = n.filter(
          (e) => !(e.type === "reference-resource" && a.has(e.resource.id)),
        );
      }
    }
  }
  resetReferenceRecord() {
    this.referenceRecordContents = undefined;
    this.referenceTurnId = undefined;
  }
  resetReferenceResources() {
    for (const e of this.referenceResources) {
      delete this.referenceResourcePromptMap[e.id];
    }
    delete this.conversationIdToReferenceResources[this.conversationId];
    delete this.conversationIdToReferencePanelVisible[this.conversationId];
    delete this.conversationIdToReferencePanelActiveTab[this.conversationId];
  }
  setReferenceResourcePrompt(e, t) {
    if (typeof t === "string") {
      this.referenceResourcePromptMap[e] = t;
      return;
    }
    delete this.referenceResourcePromptMap[e];
  }
  setSettingsType(e) {
    this.settingsType = e;
  }
  setImageSettingData(e) {
    this._imageSettingsData = e;
  }
  setVideoSettingData(e) {
    this._videoSettingsData = e;
  }
  constructor(e) {
    this._agenticGeneratorManager = e;
    this._inferenceModelId = undefined;
    this._creationMode = h.a.Standard;
    this._imageSettingsData = null;
    this._videoSettingsData = null;
    this.conversationIdToPromptContents = ea;
    this.conversationIdToReferenceResources = ei;
    this.conversationIdToReferencePanelVisible = en;
    this.conversationIdToReferencePanelActiveTab = eo;
    this.referenceRecordContents = es;
    this.referenceTurnId = el;
    this.referenceResourcePromptMap = ec;
    this.creativeModelEnabled = true;
    this.settingsType = "image";
    this.videoSettingsConfigured = false;
    this.manualSettingsEnabled = false;
    this._searchEnabled = true;
    o.l_(this);
  }
}
n.Cg([$.A()], ed.prototype, "creativeModelEnabled", undefined);
n.Cg([$.A()], ed.prototype, "_searchEnabled", undefined);
ed = n.Cg(
  [
    $.L("agentic"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
    ]),
  ],
  ed,
);
const eu = require("SI");
const eh = require("OY4");
const eg = require("SZS");
const em = require("gpv");
const ep = require("prY");
const e_ = require("CmP");
const ev = require("aF");
const ef = require("ZHm");
const eS = require("z7R");
const ey = require("CrL");
const eM = require("Ut");
const ek = require("r5O");
const eR = require("yMd");
const eI = require("XTm");
const eb = require("./module-Mp_2.js");
function eC(e) {
  const { imageSettings, videoSettings } = e;
  return {
    imageSettings: {
      modelKey: imageSettings.modelKey,
      aspectRatio: imageSettings.aspectRatio,
      resolution: imageSettings.resolution,
      manualWidth: imageSettings.manualWidth,
      manualHeight: imageSettings.manualHeight,
    },
    videoSettings: {
      modelKey: videoSettings.modelKey,
      aspectRatio: videoSettings.aspectRatio,
      resolution: videoSettings.resolution,
    },
  };
}
function eP(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function eA(aspectRatio) {
  return (
    aspectRatio === undefined ||
    (typeof aspectRatio === "string" &&
      !!/^\d+(?:\.\d+)?:\d+(?:\.\d+)?$/.test(aspectRatio) &&
      aspectRatio
        .split(":")
        .every((e) => Number.isFinite(Number(e)) && Number(e) > 0))
  );
}
function eT(e) {
  return (
    e === undefined || (typeof e === "number" && Number.isFinite(e) && e > 0)
  );
}
function eG(e, t, r) {
  let n;
  let o;
  let s;
  let l;
  let c;
  let d;
  const u = t.modelList.filter((e) => e.feats.includes(eR.yo.Default));
  const h =
    (n =
      (o =
        (s = u.find((t) => t.key === e.modelKey)) != null
          ? s
          : u.find((e) => e.key === r.modelKey)) != null
        ? o
        : u.find((e) => {
            var r;
            return (
              e.key ===
              ((r = t.modelList[t.defaultModelIndex]) == null
                ? undefined
                : r.key)
            );
          })) != null
      ? n
      : u.at(0);
  if (!h) {
    return {
      settings: a._({}, e),
      model: h,
      resolutionKey: undefined,
    };
  }
  const g = i._(a._({}, e), {
    modelKey: h.key,
  });
  const m = Object.keys((l = h.resolutionMap) != null ? l : {});
  const p =
    e.resolution === undefined
      ? undefined
      : m.find((t) => eI.u[t] === e.resolution);
  const _ =
    (c =
      (d = m.find((e) => e === h.defaultResolutionType)) != null
        ? d
        : m.find((e) => eI.u[e] === r.resolution)) != null
      ? c
      : m.at(0);
  const resolutionKey =
    e.resolution === undefined ? undefined : p != null ? p : _;
  if (resolutionKey) {
    g.resolution = eI.u[resolutionKey];
  } else {
    g.resolution = undefined;
  }
  return {
    settings: g,
    model: h,
    resolutionKey,
  };
}
function ew(e, t, r) {
  const { settings, model, resolutionKey } = eG(e, t, r);
  if (model) {
    return ((e, t, r, a) => {
      let i;
      let n;
      let o;
      let s;
      const l =
        t.resolutionMap && r === undefined
          ? (i =
              (n = Object.keys(t.resolutionMap).find(
                (e) => e === t.defaultResolutionType,
              )) != null
                ? n
                : Object.keys(t.resolutionMap).find(
                    (e) => eI.u[e] === a.resolution,
                  )) != null
            ? i
            : Object.keys(t.resolutionMap).at(0)
          : undefined;
      const c = r != null ? r : l;
      const d = c
        ? (o = t.resolutionMap) == null
          ? undefined
          : o[c]
        : undefined;
      const u = ey.$_({
        intelligentAspectRatioOptionVisible: true,
        feats: t.feats,
        imageRatioSizes: d == null ? undefined : d.imageRatioSizes,
      });
      const h = u.some((t) => t.value === e.aspectRatio && !t.disabled);
      const { manualWidth, manualHeight } = e;
      const p = d == null ? undefined : d.imageRangeConfig;
      const _ =
        manualWidth !== undefined &&
        manualHeight !== undefined &&
        Number.isFinite(manualWidth) &&
        Number.isFinite(manualHeight) &&
        manualWidth > 0 &&
        manualHeight > 0 &&
        (!p ||
          (Math.min(manualWidth, manualHeight) >= p.minLength &&
            Math.max(manualWidth, manualHeight) <= p.maxLength &&
            manualWidth * manualHeight <= p.maxPixelNum));
      if (!(e.aspectRatio === undefined || ev.z(e.aspectRatio) ? h : _)) {
        e.aspectRatio =
          (s = u.find((e) => e.value === a.aspectRatio && !e.disabled)) == null
            ? undefined
            : s.value;
        e.manualWidth = undefined;
        e.manualHeight = undefined;
      }
      return e;
    })(settings, model, resolutionKey, r);
  }
  return settings;
}
function ej(videoSettings, videoData, r) {
  if (videoData.disabled) {
    return a._({}, videoSettings);
  }
  let n;
  let o;
  let s;
  let l;
  const c =
    (n =
      (o =
        (s = videoData.modelList.find(
          (t) => t.key === videoSettings.modelKey,
        )) != null
          ? s
          : videoData.modelList.find((e) => e.key === r.modelKey)) != null
        ? o
        : videoData.defaultModel) != null
      ? n
      : videoData.modelList.at(0);
  if (!c) {
    return a._({}, videoSettings);
  }
  const d = i._(a._({}, videoSettings), {
    modelKey: c.key,
  });
  const u = c.fields.find((e) => e.type === eR.pH.Resolution);
  if (
    d.resolution !== undefined &&
    u &&
    !u.disabled &&
    u.values.length &&
    !u.values.includes(d.resolution)
  ) {
    d.resolution =
      (l = [u.defaultValue, r.resolution].find(
        (e) => e !== undefined && u.values.includes(e),
      )) != null
        ? l
        : u.values[0];
  }
  const h = c.fields.find((e) => e.type === eR.pH.VideoAspectRatio);
  if (
    d.aspectRatio !== undefined &&
    (!h ||
      h.disabled ||
      !h.values.includes(d.aspectRatio) ||
      !ev.z(d.aspectRatio))
  ) {
    const g = h == null ? undefined : h.defaultValue;
    d.aspectRatio =
      !(h == null ? undefined : h.disabled) &&
      ev.z(g) &&
      (h == null ? undefined : h.values.includes(g))
        ? g
        : undefined;
  }
  return d;
}
function eD(e, t, _autoSettings) {
  const a = eC(e);
  const i = {
    imageSettings: ew(
      a.imageSettings,
      t.imageData,
      _autoSettings.imageSettings,
    ),
    videoSettings: ej(
      a.videoSettings,
      t.videoData,
      _autoSettings.videoSettings,
    ),
  };
  return {
    settings: i,
    changed: !ek.A(i, a),
  };
}
function eF(e) {
  const { autoResolution = false } =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const r = a._(
    {},
    eb.O,
    autoResolution
      ? {
          resolution: undefined,
        }
      : {},
  );
  if (!e) {
    return r;
  }
  const i = e.modelList[e.defaultModelIndex];
  if (i) {
    r.modelKey = i.key;
    if (!autoResolution && i.defaultResolutionType) {
      r.resolution = eI.u[i.defaultResolutionType];
    }
  }
  return ew(r, e, r);
}
function eL(e) {
  let t;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const autoResolution = (t = r.autoResolution) != null && t;
  const n = {
    imageSettings: eF(e == null ? undefined : e.imageData, {
      autoResolution,
    }),
    videoSettings: a._(
      {},
      eb.K,
      autoResolution
        ? {
            resolution: undefined,
          }
        : {},
    ),
  };
  if (!e) {
    return n;
  }
  const defaultModel = e.videoData.defaultModel;
  if (defaultModel) {
    n.videoSettings.modelKey = defaultModel.key;
    const s = defaultModel.fields.find((e) => e.type === eR.pH.Resolution);
    if (!autoResolution && (s == null ? undefined : s.defaultValue)) {
      n.videoSettings.resolution = s.defaultValue;
    }
    const l = defaultModel.fields.find(
      (e) => e.type === eR.pH.VideoAspectRatio,
    );
    if (ev.z(l == null ? undefined : l.defaultValue)) {
      n.videoSettings.aspectRatio = l.defaultValue;
    }
  }
  n.videoSettings = ej(n.videoSettings, e.videoData, n.videoSettings);
  return n;
}
class ex {
  get modelKey() {
    return this._modelKey;
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  get resolution() {
    return this._resolution;
  }
  get manualWidth() {
    return this._manualWidth;
  }
  get manualHeight() {
    return this._manualHeight;
  }
  get isLockRatio() {
    return this._isLockRatio;
  }
  get intelligentRatio() {
    return typeof this._aspectRatio !== "string";
  }
  get imageSettings() {
    return {
      intelligentRatio: this.intelligentRatio,
      modelKey: this.modelKey,
      aspectRatio: this.aspectRatio,
      resolution: this.resolution,
      manualWidth: this.manualWidth,
      manualHeight: this.manualHeight,
    };
  }
  setAspectRatio(e) {
    this._aspectRatio = e;
  }
  setModelKey(e) {
    this._modelKey = e;
  }
  setResolution(e) {
    this._resolution = e;
  }
  setManualDimensions(e, t) {
    this._manualWidth = e;
    this._manualHeight = t;
  }
  setIsLockRatio(e) {
    this._isLockRatio = e;
  }
  constructor() {
    this._modelKey = eb.O.modelKey;
    this._aspectRatio = eb.O.aspectRatio;
    this._resolution = eb.O.resolution;
    this._manualWidth = undefined;
    this._manualHeight = undefined;
    this._isLockRatio = false;
    o.l_(this);
  }
}
const eE = require("j6i");
const eO = require("gu");
const eU = require("j5o");
const eV = require("fF");
const eN = new Set(["seedream-5", "high_aes_general_v50p_large"]);
class eK {
  get aspectRatioOptions() {
    let e;
    let t;
    const r = this._getCurrentModel();
    if (this._agenticGeneratorImageSettingsManager.creationPreferenceEnabled) {
      const a = [
        ...new Set(
          this._preferenceModels
            .flatMap((e) => {
              var t;
              var r;
              var a = Object.entries(
                (t = e.resolutionMap) != null ? t : {},
              ).filter((e) => {
                var t;
                var [r] = e;
                return (
                  !((t = this._data) == null ? undefined : t.resolution) ||
                  eI.u[r] === this._data.resolution
                );
              });
              if (
                ((r = this._data) == null ? undefined : r.resolution) &&
                !a.length
              ) {
                return [];
              }
              return a.flatMap((e) => {
                var t;
                var [, r] = e;
                return ey._l((t = r.imageRatioSizes) != null ? t : []);
              });
            })
            .map((e) => {
              var { aspectRatio } = e;
              return aspectRatio;
            }),
        ),
      ].map((e) => ({
        value: e,
        label: e,
      }));
      if (this._intelligentAspectRatioOptionVisible) {
        return [
          {
            value: undefined,
            label: H.Ay.t("dreamina_image4_ratio_auto", {}),
          },
          ...a,
        ];
      }
      return a;
    }
    return ey.$_({
      intelligentAspectRatioOptionVisible:
        this._intelligentAspectRatioOptionVisible,
      feats: (e = r == null ? undefined : r.feats) != null ? e : [],
      imageRatioSizes:
        (t = this._getCurrentResolutionConfig()) == null
          ? undefined
          : t.imageRatioSizes,
    });
  }
  get resolutionOptions() {
    let e;
    const { creationPreferenceEnabled } =
      this._agenticGeneratorImageSettingsManager;
    if (!creationPreferenceEnabled && !this._commercialReady) {
      return [];
    }
    const r = this._preferenceModels.flatMap((e) => {
      var { key, resolutionMap } = e;
      return Object.keys(resolutionMap != null ? resolutionMap : {}).map(
        (resolutionType) => {
          var a;
          var i;
          return {
            label:
              (a =
                resolutionMap == null ||
                (i = resolutionMap[resolutionType]) == null
                  ? undefined
                  : i.resolutionName) != null
                ? a
                : "",
            value: eI.u[resolutionType],
            extra: {
              commercialSceneOptions: eE.O({
                scene: eO.Sk.ImageUhd,
                modelReqKey: key,
                resolutionType,
                reportParams: {
                  cashierBusinessExtra:
                    this._agenticGeneratorImageSettingsManager
                      .cashierBusinessExtra,
                },
              }),
            },
          };
        },
      );
    });
    const n =
      creationPreferenceEnabled &&
      !((e = this._data) == null ? undefined : e.modelKey);
    const o = new Map();
    for (const s of r) {
      const l = o.get(s.value);
      if (!l) {
        o.set(s.value, s);
        continue;
      }
      if (n && this._commercialReady) {
        const c =
          this._agenticGeneratorImageSettingsManager
            .getCommerceRequiredVipPriority;
        const d = c(l.extra.commercialSceneOptions);
        const u = c(s.extra.commercialSceneOptions);
        if (u !== undefined && d !== undefined && u < d) {
          o.set(
            s.value,
            i._(a._({}, l), {
              extra: s.extra,
            }),
          );
        }
      }
    }
    const h = [...o.values()];
    if (creationPreferenceEnabled) {
      return h;
    }
    return h.filter((e) => {
      var commercialSceneOptions = e.extra.commercialSceneOptions;
      return (
        !!commercialSceneOptions &&
        this._agenticGeneratorImageSettingsManager.getCommerceRightCanUse(
          commercialSceneOptions,
        )
      );
    });
  }
  get aspectRatioImageSizeMap() {
    const e = this._getCurrentResolutionConfig();
    if (!e) {
      return {};
    }
    const { imageRatioSizes = [] } = e;
    return imageRatioSizes.reduce((acc, imageRatioSize) => {
      if (
        imageRatioSize.ratioType &&
        imageRatioSize.width &&
        imageRatioSize.width > 0 &&
        imageRatioSize.height &&
        imageRatioSize.height > 0
      ) {
        acc[imageRatioSize.ratioType] = {
          width: imageRatioSize.width,
          height: imageRatioSize.height,
        };
      }
      return acc;
    }, {});
  }
  get aspectRatioSizeMap() {
    let e;
    let t;
    const r =
      (e =
        (t = this._getCurrentResolutionConfig()) == null
          ? undefined
          : t.imageRatioSizes) != null
        ? e
        : [];
    return new Map(
      ey._l(r).flatMap((e) => {
        var { aspectRatio, width, height } = e;
        if (width && height) {
          return [
            [
              aspectRatio,
              {
                width,
                height,
              },
            ],
          ];
        }
        return [];
      }),
    );
  }
  get imageRangeConfig() {
    const e = this._getCurrentResolutionConfig();
    if (e == null ? undefined : e.imageRangeConfig) {
      return e.imageRangeConfig;
    }
    return {
      minLength: eg.z,
      maxLength: eg.du,
      maxPixelNum: eg.zt,
    };
  }
  get intelligentAspectRatioOptionVisible() {
    return this._intelligentAspectRatioOptionVisible;
  }
  get isModelListLoading() {
    return this._isModelListLoading;
  }
  get modelList() {
    return this._imageModelList;
  }
  get generateImageModelList() {
    if (this._agenticGeneratorImageSettingsManager.creationPreferenceEnabled) {
      if (this._isModelListLoading) {
        return [];
      }
      return this._imageModelList;
    }
    return this._imageModelList.filter((e) => e.feats.includes(eR.yo.Default));
  }
  get defaultImageModel() {
    return this._defaultImageModel || this.generateImageModelList[0];
  }
  get modelOptions() {
    return this.generateImageModelList.map((e) =>
      ((e, cashierBusinessExtra) => {
        var { key, name, description, coverUrl, iconUrl } = e;
        return {
          label: name,
          value: key,
          extra: {
            coverUrl,
            iconUrl,
            description,
            tag: ((e) => {
              var { isNewModel } = e;
              if (isNewModel) {
                return "new";
              }
              if (e.feats.includes(eR.Si.BetaModel)) {
                return "beta";
              }
            })(e),
            commercial: {
              sceneOptions: eE.O({
                scene: eO.Sk.ImageModelSwitch,
                modelReqKey: key,
                modelSwitchSource: eV.AL.Agentic,
                reportParams: {
                  cashierBusinessExtra,
                },
              }),
              statusVisible: !eN.has(key),
              statusProps: {
                showUnitCreditFreeTrialForVip: true,
              },
            },
          },
        };
      })(e, this._agenticGeneratorImageSettingsManager.cashierBusinessExtra),
    );
  }
  setCommercialReady(e) {
    this._commercialReady = e;
  }
  setIsModelListLoading(e) {
    this._isModelListLoading = e;
  }
  setImageModelList(e) {
    this._imageModelList = e;
  }
  setDefaultImageModel(e) {
    this._defaultImageModel = e;
  }
  setIntelligentAspectRatioOptionVisible(e) {
    this._intelligentAspectRatioOptionVisible = e;
  }
  setDataStore(e) {
    this._data = e;
  }
  get _preferenceModels() {
    if (this._agenticGeneratorImageSettingsManager.creationPreferenceEnabled) {
      let e;
      if ((e = this._data) == null ? undefined : e.modelKey) {
        return this.generateImageModelList.filter((e) => {
          var t;
          return e.key === ((t = this._data) == null ? undefined : t.modelKey);
        });
      }
      return this.generateImageModelList;
    }
    const t = this._getCurrentModel();
    if (t) {
      return [t];
    }
    return [];
  }
  _getCurrentModel() {
    let e;
    let t;
    let r;
    if (
      (e =
        (t = ((r = this._data) == null ? undefined : r.modelKey)
          ? this._imageModelList.find((e) => {
              var t;
              return (
                e.key === ((t = this._data) == null ? undefined : t.modelKey)
              );
            })
          : undefined) != null
          ? t
          : this._defaultImageModel) != null
    ) {
      return e;
    }
    return this.generateImageModelList[0];
  }
  _getCurrentResolutionConfig() {
    let e;
    let t;
    const r =
      (t = this._getCurrentModel()) == null ? undefined : t.resolutionMap;
    if (r) {
      const a = Object.keys(r);
      const i = a.find((e) => {
        var t;
        return (
          eI.u[e] === ((t = this._data) == null ? undefined : t.resolution)
        );
      });
      const n =
        (e = a.find((e) => {
          var t;
          return (
            e ===
            ((t = this._getCurrentModel()) == null
              ? undefined
              : t.defaultResolutionType)
          );
        })) != null
          ? e
          : a.at(0);
      const o = i != null ? i : n;
      if (o) {
        return r[o];
      }
      return undefined;
    }
  }
  constructor(e) {
    this._agenticGeneratorImageSettingsManager = e;
    this._commercialReady = false;
    this._imageModelList = [eU.K];
    this._defaultImageModel = eU.K;
    this._intelligentAspectRatioOptionVisible = true;
    this._data = null;
    this._isModelListLoading = true;
    o.l_(this);
  }
}
class ez extends l.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get cashierBusinessExtra() {
    return ef.Dm(this._agenticGeneratorManager.cashierConversationId);
  }
  get creationPreferenceEnabled() {
    return this._agenticGeneratorManager.metadata.creationPreferenceEnabled;
  }
  syncModelConfig(e) {
    this._modelConfig = e;
    this._metadataStore.setIsModelListLoading(false);
    const { modelList, defaultModelIndex } = e;
    this._metadataStore.setImageModelList(modelList);
    const a = modelList[defaultModelIndex];
    this._metadataStore.setDefaultImageModel(a);
  }
  _syncModelAndResolutionSettings() {
    if (this._modelConfig && !this.creationPreferenceEnabled) {
      const { settings, model } = eG(
        this._dataStore.imageSettings,
        this._modelConfig,
        eF(this._modelConfig),
      );
      if (model) {
        this.setModel(settings.modelKey);
        this.setResolution(settings.resolution);
        const r = ey.ju(
          this._metadataStore.aspectRatioOptions,
          this._dataStore.aspectRatio,
        );
        if (r !== this._dataStore.aspectRatio) {
          this._dataStore.setAspectRatio(r);
          this._dataStore.setIsLockRatio(r !== undefined);
        }
        this._updateDimensionsByRatio(r);
      }
    }
  }
  _refreshIntrinsicRatioDimensions() {
    const { aspectRatio } = this._dataStore;
    if (ev.z(aspectRatio)) {
      this._updateDimensionsByRatio(aspectRatio);
    }
  }
  _setupCommercialFeatureServiceLoadedListener() {
    return G._(function* () {
      const e =
        (yield this._commercialFeatureLoaderService.getInstance()).onReadyChange(
          (e) => {
            if (e) {
              this._metadataStore.setCommercialReady(true);
            }
          },
        );
      this._register(e);
    }).call(this);
  }
  _updateDimensionsByRatio(e) {
    if (!e) {
      const { manualWidth, manualHeight } = this._dataStore;
      if (manualWidth && manualHeight) {
        const { minLength, maxLength, maxPixelNum } =
          this._metadataStore.imageRangeConfig;
        const { width, height } = e_.$(
          manualWidth,
          manualHeight,
          minLength,
          maxLength,
          maxPixelNum,
        );
        this._dataStore.setManualDimensions(width, height);
      } else {
        this._dataStore.setManualDimensions(undefined, undefined);
      }
      return;
    }
    const l = this._metadataStore.aspectRatioSizeMap.get(e);
    if (l) {
      return void this._dataStore.setManualDimensions(l.width, l.height);
    }
    if (ev.z(e)) {
      let c;
      const d = ep.i(e);
      const u =
        (c = this._metadataStore.aspectRatioImageSizeMap[d]) != null
          ? c
          : eg.Pn[d];
      this._dataStore.setManualDimensions(u.width, u.height);
      return;
    }
    const [h, g] = e.split(":").map(Number);
    if (h > 0 && g > 0) {
      this._dataStore.setManualDimensions(h, g);
    }
  }
  constructor(e, t) {
    var r;
    super();
    r = this;
    this._agenticGeneratorManager = e;
    this._commercialFeatureLoaderService = t;
    this._metadataStore = new eK(this);
    this._dataStore = new ex();
    this.setAspectRatio = (e) => {
      this._dataStore.setAspectRatio(e);
    };
    this.selectAspectRatio = (e) => {
      this._agenticGeneratorManager.changeManualSettings(() => {
        this.setAspectRatio(e);
        this._dataStore.setIsLockRatio(e !== undefined);
        this._updateDimensionsByRatio(e);
      }, [
        {
          media: "image",
          field: "aspectRatio",
        },
      ]);
      this._agenticGeneratorManager.reportManager.reportAgentSwitchRatio(e);
    };
    this.setResolution = (e) => {
      this._dataStore.setResolution(e);
    };
    this.selectResolution = (e) => {
      if (
        !(
          e === this._dataStore.resolution &&
          this._agenticGeneratorManager.data.manualSettingsEnabled
        )
      ) {
        this._agenticGeneratorManager.changeManualSettings(() => {
          this.setResolution(e);
          this._syncModelAndResolutionSettings();
        }, [
          {
            media: "image",
            field: "resolution",
          },
        ]);
        this._agenticGeneratorManager.reportManager.reportAgentSwitchResolution(
          e != null ? e : "auto",
        );
      }
    };
    this.changeDimension = (e, t) => {
      this._agenticGeneratorManager.changeManualSettings(() => {
        this._dataStore.setManualDimensions(e, t);
        if (!this._dataStore.isLockRatio && e > 0 && t > 0) {
          this._dataStore.setAspectRatio("".concat(e, ":").concat(t));
        }
      }, [
        {
          media: "image",
          field: "aspectRatio",
        },
      ]);
    };
    this.changeAspectRatioMaintain = (e) => {
      this._agenticGeneratorManager.changeManualSettings(() => {
        var t;
        var r;
        var a = (t = this._dataStore.manualWidth) != null ? t : eg.z;
        var i = (r = this._dataStore.manualHeight) != null ? r : eg.z;
        this._dataStore.setIsLockRatio(e);
        var n = em.F(a / i);
        this._dataStore.setAspectRatio(
          e && ev.z(n) ? n : "".concat(a, ":").concat(i),
        );
      }, [
        {
          media: "image",
          field: "aspectRatio",
        },
      ]);
    };
    this.getCommerceRightCanUse = (e) => {
      var t;
      var r = this._commercialFeatureLoaderService.getInstanceSync();
      return (
        (t = r == null ? undefined : r.getCommerceRightCanUse(e)) != null && t
      );
    };
    this.getCommerceRequiredVipPriority = (e) => {
      var t;
      var r =
        (t = this._commercialFeatureLoaderService.getInstanceSync()) == null
          ? undefined
          : t.commercialStrategyService;
      if (e && (r == null ? undefined : r.isReady)) {
        return eu.MG[
          eh.I({
            scene: e.scene,
            sceneOptions: e,
            commercialStrategyService: r,
          })
        ];
      }
    };
    this.setModel = (e) => {
      if (!e) {
        return void this._dataStore.setModelKey("");
      }
      var { modelList } = this._metadataStore;
      var r = modelList.find((t) => t.key === e);
      if (r) {
        this._dataStore.setModelKey(r.key);
      }
    };
    this.switchModel = (e) => {
      var t;
      var r;
      this._agenticGeneratorManager.changeManualSettings(() => {
        this.setModel(e);
        if (e) {
          this._syncModelAndResolutionSettings();
        }
      }, [
        {
          media: "image",
          field: "model",
        },
      ]);
      this._agenticGeneratorManager.reportManager.reportAgentSwitchModel(
        (t =
          (r = this._metadataStore.modelOptions.find((t) => t.value === e)) ==
          null
            ? undefined
            : r.label) != null
          ? t
          : e || "auto",
        e || "auto",
        {
          displaySettingsTab: "image",
        },
      );
    };
    this.setSettings = function (e) {
      const { refreshDimensions = false } =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      r._dataStore.setModelKey(e.modelKey);
      r._dataStore.setAspectRatio(e.aspectRatio);
      r._dataStore.setResolution(e.resolution);
      r._dataStore.setManualDimensions(e.manualWidth, e.manualHeight);
      if (refreshDimensions) {
        r._refreshIntrinsicRatioDimensions();
      }
      r._dataStore.setIsLockRatio(e.aspectRatio !== undefined);
    };
    this._metadataStore.setDataStore(this._dataStore);
    this._setupCommercialFeatureServiceLoadedListener();
  }
}
ez = n.Cg(
  [
    n.Qj(1, eS.jV),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      eS.jV === undefined ? Object : eS.jV,
    ]),
  ],
  ez,
);
const eW = require("kV9");
const eB = require("A0");
const eQ = require("dzV");
const eq = require("pX");
const eH = require("KDr");
const eJ = require("Oqv");
const eZ = require("LBS");
const e$ = require("MVd").J;
const eY = ["markdown", "pdf", "docx"];
const eX = ["all", "image", "video", "audio"];
class e0 {
  get inferenceModelSelectionEnabled() {
    let e;
    return !!((e = this._inferenceData) == null
      ? undefined
      : e.modelList.length);
  }
  get inferenceData() {
    return this._inferenceData;
  }
  get selectedInferenceModel() {
    let e;
    if (this.inferenceModelSelectionEnabled) {
      if ((e = this._inferenceData) == null) {
        return undefined;
      }
      return e.modelList.find(
        (e) =>
          e.modelId === this._agenticGeneratorManager.data.inferenceModelId,
      );
    }
  }
  setInferenceData(e) {
    this._inferenceData = e;
  }
  get showCreationModeSelector() {
    return this._showCreationModeSelector;
  }
  setShowCreationModeSelector(e) {
    this._showCreationModeSelector = e;
  }
  get creationModeSelectorEnabled() {
    return (
      this.inferenceModelSelectionEnabled && this._showCreationModeSelector
    );
  }
  get voiceInputActive() {
    return this._agenticGeneratorManager.agenticVoiceInputManager.store
      .voiceInputActive;
  }
  get acceptedFileTypes() {
    let e;
    let t;
    return a._(
      {},
      (e =
        (t = this._referenceLimits) == null
          ? undefined
          : t.acceptedFileTypes) != null
        ? e
        : a._({}, eW.R, eB.P, eQ.M),
      this.acceptedFileTypesByGroup.document,
    );
  }
  get isDocumentReferenceEnabled() {
    const { contentGeneratorManager } = this._agenticGeneratorManager;
    const { visibleContentGeneratorVariant } = contentGeneratorManager;
    return visibleContentGeneratorVariant !== "canvas" && y.F;
  }
  get referencePanelTabs() {
    if (this.isDocumentReferenceEnabled) {
      return [...eX, "document"];
    }
    return [...eX];
  }
  get acceptedFileTypesByGroup() {
    let e;
    let t;
    let r;
    let a;
    let i;
    let n;
    let o;
    const { materialLimits } = (e = this._referenceLimits) != null ? e : {};
    const l = {
      image:
        (t =
          materialLimits == null || (i = materialLimits.image) == null
            ? undefined
            : i.acceptedFileTypes) != null
          ? t
          : eW.R,
      video:
        (r =
          materialLimits == null || (n = materialLimits.video) == null
            ? undefined
            : n.acceptedFileTypes) != null
          ? r
          : eB.P,
      audio:
        (a =
          materialLimits == null || (o = materialLimits.audio) == null
            ? undefined
            : o.acceptedFileTypes) != null
          ? a
          : eQ.M,
    };
    if (this.isDocumentReferenceEnabled) {
      l.document = e$;
    }
    return l;
  }
  get acceptedResourceTypes() {
    return [
      "image",
      "video",
      "audio",
      ...(this.isDocumentReferenceEnabled ? eY : []),
    ];
  }
  get placeholderKey() {
    const {
      data: { referenceResources, isPromptEmpty },
      agenticVoiceInputManager,
    } = this._agenticGeneratorManager;
    if (
      isPromptEmpty &&
      agenticVoiceInputManager.store.status === eq.t.Listening
    ) {
      return "voice_input_Listening";
    }
    const { contentGeneratorManager } = this._agenticGeneratorManager;
    const { visibleContentGeneratorVariant } = contentGeneratorManager;
    if (y.F && visibleContentGeneratorVariant !== "canvas") {
      if (referenceResources.length) {
        return "web_agent_hint_with_skill_ref";
      }
      return "web_agent_hint_with_skill";
    }
    if (referenceResources.length) {
      return "agent_prompt_withref";
    }
    return "agent_no_ref_hint";
  }
  get promptMaxLength() {
    let e;
    if ((e = this._serverPromptMaxLength) != null) {
      return e;
    }
    return eH.O({
      domesticTextLimit: B.e,
    });
  }
  get referenceValidationLimits() {
    let e;
    if ((e = this._referenceLimits) != null) {
      return e;
    }
    return {};
  }
  get referenceAdditionValidationResult() {
    const {
      data: { referenceResources, promptContents },
    } = this._agenticGeneratorManager;
    return eJ.y({
      materials: X.G({
        resources: referenceResources,
        subjects: ee.I(promptContents),
      }),
      candidateTypes: this.acceptedResourceTypes,
      limits: this.referenceValidationLimits,
    });
  }
  get referenceUploadVisible() {
    const {
      data: { referenceResources },
    } = this._agenticGeneratorManager;
    return (
      !referenceResources.length || this.referenceAdditionValidationResult.ok
    );
  }
  get canAddReferenceByTab() {
    const {
      data: { referenceResources, promptContents },
    } = this._agenticGeneratorManager;
    const materials = X.G({
      resources: referenceResources,
      subjects: ee.I(promptContents),
    });
    const referenceValidationLimits = this.referenceValidationLimits;
    const n = (candidateTypes) =>
      eJ.y({
        materials,
        candidateTypes,
        limits: referenceValidationLimits,
      }).ok;
    return a._(
      {
        image: n(["image"]),
        video: n(["video"]),
        audio: n(["audio"]),
      },
      this.isDocumentReferenceEnabled
        ? {
            document: n(["markdown", "pdf", "docx"]),
          }
        : {},
    );
  }
  get referenceIdToLabel() {
    const {
      data: { referenceResources },
    } = this._agenticGeneratorManager;
    return eZ.v(referenceResources);
  }
  get referenceResourceOptions() {
    const {
      data: { referenceResources },
    } = this._agenticGeneratorManager;
    return referenceResources.map((e) => ({
      value: e.id,
      label: this.referenceIdToLabel[e.id],
      extra: {
        resource: e,
      },
    }));
  }
  get abortable() {
    const { contentGeneratorManager, isParallelStream } =
      this._agenticGeneratorManager;
    const { visibleContentGeneratorVariant } = contentGeneratorManager;
    if (
      visibleContentGeneratorVariant === undefined ||
      visibleContentGeneratorVariant === "canvas"
    ) {
      return this.streaming;
    }
    return !isParallelStream && this.streaming;
  }
  get submitButtonDisabled() {
    const {
      data: { validationResult },
    } = this._agenticGeneratorManager;
    return !this.abortable && !validationResult.ok;
  }
  get submitButtonTooltipProps() {
    const {
      data: { validationResult },
    } = this._agenticGeneratorManager;
    if (!this.abortable && validationResult.msg) {
      return {
        content: validationResult.msg,
      };
    }
  }
  get voiceInputButtonDisabled() {
    const {
      data: { promptTextContent },
    } = this._agenticGeneratorManager;
    const { promptMaxLength } = this;
    return (
      this.submitButtonLoading ||
      (typeof promptMaxLength === "number" &&
        [...promptTextContent].length > promptMaxLength)
    );
  }
  get voiceInputButtonTooltipProps() {
    const {
      data: { promptTextContent },
    } = this._agenticGeneratorManager;
    const { promptMaxLength } = this;
    if (
      !this.voiceInputActive &&
      typeof promptMaxLength === "number" &&
      [...promptTextContent].length > promptMaxLength
    ) {
      return {
        content: H.Ay.t(
          "web_new_image_paint_prompt_length_limit",
          {
            number: promptMaxLength,
          },
          "文字描述超过了 ".concat(promptMaxLength, " 字"),
        ),
      };
    }
  }
  get settingsTypeOptions() {
    return [
      {
        label: H.Ay.t("web_canva_agent_param_image", {}, "Image"),
        value: "image",
      },
      {
        label: H.Ay.t("web_canva_agent_param_video", {}, "Video"),
        value: "video",
      },
    ];
  }
  get isSkillButtonBadgeDismissed() {
    return this._agenticGeneratorManager.skillManager.metadata
      .isSkillButtonBadgeDismissed;
  }
  get activeSkills() {
    return this._agenticGeneratorManager.skillManager.metadata.activeSkills;
  }
  get searchKeyword() {
    return this._agenticGeneratorManager.skillManager.metadata.searchKeyword;
  }
  get isSkillsLoading() {
    return this._agenticGeneratorManager.skillManager.metadata.isSkillsLoading;
  }
  get activeSkillOptions() {
    return this._agenticGeneratorManager.skillManager.metadata
      .activeSkillOptions;
  }
  get librarySkills() {
    return this._agenticGeneratorManager.skillManager.metadata.librarySkills;
  }
  setStreaming(e) {
    this.streaming = e;
  }
  setSubmitButtonLoading(e) {
    this.submitButtonLoading = e;
  }
  setIsSettingsRestoring(e) {
    this.isSettingsRestoring = e;
  }
  setIsSettingsInitializing(e) {
    this.isSettingsInitializing = e;
  }
  setCreationPreferenceEnabled(e) {
    this.creationPreferenceEnabled = e;
  }
  setReferenceLimits(e) {
    this._referenceLimits = e;
  }
  setPromptMaxLength(e) {
    this._serverPromptMaxLength =
      typeof e === "number" && e > 0 ? e : undefined;
  }
  constructor(e) {
    this._agenticGeneratorManager = e;
    this._inferenceData = undefined;
    this._showCreationModeSelector = false;
    this.streaming = false;
    this.submitButtonLoading = false;
    this.isSettingsRestoring = false;
    this.isSettingsInitializing = true;
    this.creationPreferenceEnabled = false;
    this._referenceLimits = undefined;
    this._serverPromptMaxLength = undefined;
    o.l_(this);
  }
}
const e1 = require("R2");
const e2 = require("Nyo");
const e3 = require("xXe");
class e4 extends e2.Z {
  _createTextContent(e) {
    return {
      type: "text",
      text: e,
    };
  }
  constructor(e) {
    super();
    this._agenticGeneratorManager = e;
    this.transformPromptContentToNodes = (e) => {
      if (e.type === "reference-frame") {
        return [
          {
            type: M.t.AgenticGeneratorReferenceFrameTag,
            attrs: {
              layerId: e.layerId,
              title: e.title,
            },
          },
        ];
      }
      if (e.type === "reference-resource") {
        return [
          {
            type: M.t.ReferenceMentionTag,
            attrs: {
              id: e.resource.id,
            },
          },
        ];
      }
      if (e.type === "subject") {
        return [
          {
            type: M.t.SubjectMentionTag,
            attrs: {
              id: e.id,
              subject: e.subject,
              loading: e.loading,
            },
          },
        ];
      }
      if (e.type === "reference-text") {
        return [
          {
            type: M.t.AgenticGeneratorReferenceTextTag,
            attrs: {
              layerId: e.layerId,
              text: e.text,
            },
          },
        ];
      }
      if (e.type === "skill") {
        return [
          {
            type: M.t.AgenticGeneratorSkillTag,
            attrs: {
              id: e.id,
              displayName: e.displayName,
              source: e.source,
            },
          },
        ];
      }
      if (e.type === "create-skill-template-slot") {
        return [
          {
            type: M.t.AgenticGeneratorCreateSkillTemplateSlot,
            attrs: {
              slotType: e.slotType,
            },
          },
        ];
      }
      return super.transformPromptContentToNodes(e);
    };
    this.transformNodeToPromptContents = (e) => {
      var { data } = this._agenticGeneratorManager;
      var { referenceResources } = data;
      var e_attrs = e.attrs;
      if (e.type === M.t.SubjectMentionTag) {
        var { id, subject, loading } = e_attrs;
        if (e1.y(id) && subject) {
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
      if (e.type === M.t.AgenticGeneratorReferenceFrameTag) {
        var { layerId, title } = e_attrs;
        if (typeof layerId !== "string" || typeof title !== "string") {
          return [];
        }
        return [
          {
            type: "reference-frame",
            layerId,
            title,
          },
        ];
      }
      if (e.type === M.t.ReferenceMentionTag) {
        var { id: id_1 } = e_attrs;
        if (typeof id_1 !== "string" || !e3.O(id_1)) {
          return [];
        }
        var d = referenceResources.find((e) => e.id === id_1);
        if (d) {
          return [
            {
              type: "reference-resource",
              resource: d,
            },
          ];
        }
        return [];
      }
      if (e.type === M.t.AgenticGeneratorReferenceTextTag) {
        var { layerId: layerId_1, text } = e_attrs;
        if (typeof layerId_1 !== "string" || typeof text !== "string") {
          return [];
        }
        return [
          {
            type: "reference-text",
            layerId: layerId_1,
            text,
          },
        ];
      }
      if (e.type === M.t.AgenticGeneratorSkillTag) {
        var { id: id_2, displayName, source } = e_attrs;
        var _ =
          source === f.fc.User ||
          source === f.fc.Platform ||
          source === f.fc.Market;
        if (typeof id_2 === "string" && typeof displayName === "string" && _) {
          return [
            {
              type: "skill",
              id: id_2,
              displayName,
              source,
            },
          ];
        }
        return [];
      }
      if (e.type === M.t.AgenticGeneratorCreateSkillTemplateSlot) {
        var { slotType } = e_attrs;
        if (_F(slotType)) {
          return [
            {
              type: "create-skill-template-slot",
              slotType,
            },
          ];
        }
        return [];
      }
      return super.transformNodeToPromptContents(e);
    };
  }
}
const e5 = require("dm");
const e8 = require("rr");
class e9 extends l.jG {
  _setupVoiceInputAutoStopContext() {
    this._register({
      dispose: o.mJ(
        () => ({
          promptTextContent: this._dataStore.promptTextContent,
          promptMaxLength:
            this._agenticGeneratorManager.metadata.promptMaxLength,
          transcript:
            this._agenticGeneratorManager.agenticVoiceInputManager.store
              .transcript,
        }),
        (e) => {
          var { promptTextContent, promptMaxLength, transcript } = e;
          this._agenticGeneratorManager.agenticVoiceInputManager.setAutoStopContext(
            {
              currentInputTextLength: [...promptTextContent].length,
              transcript,
              maxInputLength: promptMaxLength,
            },
          );
        },
      ),
    });
  }
  _registerSelectionToEndOnSwitchReaction() {
    this._register({
      dispose: o.mJ(
        () =>
          this._agenticGeneratorManager.contentGeneratorManager.data
            .contentGeneratorType,
        (e) => {
          if (e === "agentic") {
            requestAnimationFrame(() =>
              G._(function* () {
                yield e5.y(e9.PROMPT_CONTROL_FOCUS_DELAY);
                this._setPromptSelectionToEnd();
              }).call(this),
            );
          }
        },
      ),
    });
  }
  _setPromptSelectionToEnd() {
    const visibleContentGeneratorInstance =
      this._agenticGeneratorManager.contentGeneratorManager
        .visibleContentGeneratorInstance;
    if (visibleContentGeneratorInstance) {
      const { promptEditorRef, promptInputRef } =
        visibleContentGeneratorInstance.elements;
      const a = promptEditorRef == null ? undefined : promptEditorRef.current;
      const i = promptInputRef == null ? undefined : promptInputRef.current;
      if (a) {
        const n = a.state.doc.content.size;
        a.commands.setTextSelection(n);
        a.commands.focus();
        return;
      }
      if (i) {
        const o = i.value.length;
        i.setSelectionRange(o, o);
        i.focus({
          preventScroll: true,
        });
      }
    }
  }
  _registerVoiceInputReactions() {
    this._register({
      dispose: o.mJ(
        () =>
          this._agenticGeneratorManager.contentGeneratorManager.data
            .contentGeneratorType,
        (e) => {
          if (e !== "agentic") {
            this._agenticGeneratorManager.agenticVoiceInputManager.stopIfActive();
          }
        },
      ),
    });
  }
  _registerVoiceStopOnWorkspaceSwitch() {
    this._register({
      dispose: o.mJ(
        () => this._workspaceService.data.selectedWorkspaceId,
        () => {
          this._agenticGeneratorManager.agenticVoiceInputManager.stopIfActive();
        },
      ),
    });
  }
  constructor(e, t, r, a) {
    super();
    this._agenticGeneratorManager = e;
    this._dataStore = t;
    this._metadataStore = r;
    this._workspaceService = a;
    this._registerVoiceInputReactions();
    this._registerVoiceStopOnWorkspaceSwitch();
    this._registerSelectionToEndOnSwitchReaction();
    this._setupVoiceInputAutoStopContext();
  }
}
e9.PROMPT_CONTROL_FOCUS_DELAY = 100;
e9 = n.Cg(
  [
    n.Qj(3, e8.D),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      typeof AgenticGeneratorDataStore === "undefined"
        ? Object
        : AgenticGeneratorDataStore,
      typeof AgenticGeneratorMetadataStore === "undefined"
        ? Object
        : AgenticGeneratorMetadataStore,
      e8.D === undefined ? Object : e8.D,
    ]),
  ],
  e9,
);
const e7 = require("./module-kbb.js");
class e6 extends l.jG {
  constructor(e, t) {
    super();
    this._agenticGeneratorManager = e;
    this._dataStore = t;
    this.setReferenceRecord = (e) => {
      var t = e7.Y(e);
      this._dataStore.setReferenceRecordContents(t);
      this._dataStore.setReferenceTurnId(e.taskData.taskId);
      this._agenticGeneratorManager.reportManager.reportAddQuotation({
        turnId: e.taskData.taskId,
      });
    };
    this.setReferenceRecordContents = (e) => {
      this._dataStore.setReferenceRecordContents(e);
    };
    this.resetReferenceRecord = () => {
      this._agenticGeneratorManager.reportManager.reportDeleteQuotation({
        turnId: this._dataStore.referenceTurnId,
      });
      this._dataStore.resetReferenceRecord();
    };
  }
}
const te = require("Ko");
const tt = require("DNq");
const tr = require("g98");
const ta = require("TH");
const ti = require("Oqj");
const tn = require("IHa");
const to = require("Erm");
const ts = require("mir");
class tl extends l.jG {
  dispose() {
    this._pdfUploadControllers.forEach((e) => e.abort());
    this._pdfUploadControllers.clear();
    super.dispose();
  }
  _getImportMaterialType(e) {
    return e.type;
  }
  _reportAddedResources(e, t, r, a) {
    if (r == null ? undefined : r.reportParams) {
      const i = new Set(t.map((e) => e.id));
      for (const n of e) {
        const o = this._getImportMaterialType(n);
        if (o) {
          let s;
          let l;
          const c = i.has(n.id) ? "success" : "fail";
          this._reportImportMaterial(o, {
            status: c,
            actionType:
              (s =
                (l = r.reportParams.importMaterialParams) == null
                  ? undefined
                  : l.actionType) != null
                ? s
                : "click",
            failReason: c === "fail" ? a : undefined,
          });
        }
      }
    }
  }
  _reportImportMaterial(e, t) {
    this._agenticGeneratorManager.reportManager.reportImportMaterial(
      a._(
        {
          materialType: e,
        },
        t,
      ),
    );
  }
  _validateReferencesChange(e) {
    const { resources, subjects } = e;
    for (const a of resources) {
      const i = ((e) => {
        let t;
        const r = (t = e.file) == null ? undefined : t.size;
        if (r !== undefined && r <= 0) {
          return c.xz(
            -1,
            H.Ay.t(
              "web_agent_upload_empty_file_toast",
              {},
              "Empty files cannot be uploaded",
            ),
          );
        }
        return c.nj();
      })(a);
      if (!i.ok) {
        return i;
      }
    }
    return tn.T({
      materials: X.G({
        resources,
        subjects,
      }),
      limits: this._metadataStore.referenceValidationLimits,
    });
  }
  _ensureReferenceResources(e) {
    for (const t of e) {
      t.resolveUri();
      if (t.type === "video") {
        t.resolveCoverUrl();
      }
    }
  }
  _ensurePdfReferenceResource(e) {
    return G._(function* () {
      const t = this._pdfUploadControllers.get(e.id);
      if (!e.uri && (!t || t.signal.aborted)) {
        const { conversationId } = this._dataStore;
        const { visibleContentGeneratorVariant } =
          this._agenticGeneratorManager.contentGeneratorManager;
        const i = new AbortController();
        this._pdfUploadControllers.set(e.id, i);
        try {
          const n = yield e.resolveFile({
            signal: i.signal,
          });
          if (
            i.signal.aborted ||
            !this._hasReferenceResource(e, conversationId)
          ) {
            return;
          }
          if (!n) {
            throw Error("PDF file is unavailable");
          }
          const o = yield this._uploadService.uploadFile({
            cancellationToken: i.signal,
            file: n,
          });
          if (
            i.signal.aborted ||
            !this._hasReferenceResource(e, conversationId)
          ) {
            return;
          }
          if (!o.ok || !o.value.uri) {
            throw Error(o.msg || "PDF upload failed");
          }
          const s = yield this._attachmentAuditService.submitPdfAuditJob({
            scene:
              visibleContentGeneratorVariant === "canvas"
                ? tt.N.canvasAgentUpload
                : tt.N.creationAgentUpload,
            signal: i.signal,
            uri: o.value.uri,
          });
          if (
            i.signal.aborted ||
            !this._hasReferenceResource(e, conversationId)
          ) {
            return;
          }
          if (!s.ok) {
            const l =
              Number(s.code) === tt.c
                ? this._getPdfAuditRejectedMessage()
                : this._getPdfAuditFailedMessage();
            this._notificationService.warning(l);
            this.removeReferenceResources([e.id], conversationId);
            return;
          }
          e.setResolvedUri(o.value.uri);
        } catch (t) {
          if (
            i.signal.aborted ||
            !this._hasReferenceResource(e, conversationId)
          ) {
            return;
          }
          this._notificationService.warning(this._getPdfAuditFailedMessage());
          this.removeReferenceResources([e.id], conversationId);
        } finally {
          if (this._pdfUploadControllers.get(e.id) === i) {
            this._pdfUploadControllers.delete(e.id);
          }
        }
      }
    }).call(this);
  }
  _hasReferenceResource(e, t) {
    let r;
    let a;
    return (
      (r =
        (a = this._dataStore.conversationIdToReferenceResources[t]) == null
          ? undefined
          : a.includes(e)) != null && r
    );
  }
  _getPdfAuditRejectedMessage() {
    return H.Ay.t(
      "web_input_box_upload_pdf_violation",
      {},
      "The content may violate our community guidelines. Please adjust and try again.",
    );
  }
  _getPdfAuditFailedMessage() {
    return H.Ay.t(
      "web_input_box_upload_pdf_failed",
      {},
      "Something went wrong, please try uploading your file again.",
    );
  }
  constructor(e, t, r, n, o, s, l) {
    var d;
    var u;
    super();
    d = this;
    u = this;
    this._agenticGeneratorManager = e;
    this._dataStore = t;
    this._metadataStore = r;
    this._containerService = n;
    this._notificationService = o;
    this._uploadService = s;
    this._attachmentAuditService = l;
    this._pdfUploadControllers = new Map();
    this.importReferenceResourcesFromLocal = (e, t) =>
      G._(function* () {
        const { acceptedFiles } = te.g(
          u._containerService,
          e,
          u._metadataStore.acceptedFileTypes,
        );
        const a = acceptedFiles
          .map((e) => ti.f(u._containerService, e))
          .filter((e) => !!e);
        if (!a.length) {
          return [];
        }
        const i = yield u.addReferenceResources(a, {
          reportParams: t == null ? undefined : t.reportParams,
        });
        if (i.ok) {
          return i.value;
        }
        return [];
      })();
    this.dropAsReferences = (e) =>
      G._(function* () {
        let t;
        let r;
        let a;
        let i;
        let n;
        const { dataTransfer } = e;
        if (!dataTransfer) {
          return;
        }
        const { acceptedFileTypes } = u._metadataStore;
        const { acceptedFiles } = te.g(
          u._containerService,
          to.o(dataTransfer),
          acceptedFileTypes,
        );
        if (acceptedFiles.length) {
          const { visibleContentGeneratorInstance } =
            u._agenticGeneratorManager.contentGeneratorManager;
          const { promptEditorRef } =
            (t =
              visibleContentGeneratorInstance == null
                ? undefined
                : visibleContentGeneratorInstance.elements) != null
              ? t
              : {};
          const h =
            promptEditorRef == null || (r = promptEditorRef.current) == null
              ? undefined
              : r.view.posAtCoords({
                  left: e.clientX,
                  top: e.clientY,
                });
          if (h == null ? undefined : h.pos) {
            e.preventDefault();
            const g = yield u.importReferenceResourcesFromLocal(acceptedFiles, {
              reportParams: {
                importMaterialParams: {
                  actionType: "drag",
                },
              },
            });
            if (g.length) {
              if (
                !(
                  promptEditorRef == null ||
                  (a = promptEditorRef.current) == null
                )
              ) {
                a.commands.setTextSelection(h.pos);
              }
              if (
                !(
                  promptEditorRef == null ||
                  (i = promptEditorRef.current) == null
                )
              ) {
                i.commands.insertContent(
                  g.map((e) => ({
                    type: M.t.ReferenceMentionTag,
                    attrs: {
                      id: e.id,
                    },
                  })),
                );
              }
              if (
                !(
                  promptEditorRef == null ||
                  (n = promptEditorRef.current) == null
                )
              ) {
                n.commands.focus();
              }
            }
          }
        }
      })();
    this.pasteAsReferences = (e) =>
      G._(function* () {
        if (e.clipboardData) {
          const { acceptedFileTypes } = u._metadataStore;
          const { acceptedFiles } = te.g(
            u._containerService,
            to.o(e.clipboardData),
            acceptedFileTypes,
          );
          if (acceptedFiles.length) {
            e.preventDefault();
            const a = yield u.importReferenceResourcesFromLocal(acceptedFiles, {
              reportParams: {
                importMaterialParams: {
                  actionType: "paste",
                },
              },
            });
            if (a.length) {
              let i;
              let n;
              const { visibleContentGeneratorInstance } =
                u._agenticGeneratorManager.contentGeneratorManager;
              const { promptEditorRef } =
                (i =
                  visibleContentGeneratorInstance == null
                    ? undefined
                    : visibleContentGeneratorInstance.elements) != null
                  ? i
                  : {};
              if (
                !(
                  promptEditorRef == null ||
                  (n = promptEditorRef.current) == null
                )
              ) {
                n.commands.insertContent(
                  a.map((e) => ({
                    type: M.t.ReferenceMentionTag,
                    attrs: {
                      id: e.id,
                    },
                  })),
                );
              }
            }
            u._agenticGeneratorManager.reportManager.reportPasteUpload(
              acceptedFiles,
            );
          }
        }
      })();
    this.replaceReferenceResourceFromLocal = (e, t) =>
      G._(function* () {
        const { acceptedFileTypes } = u._metadataStore;
        const {
          acceptedFiles: [a],
        } = te.g(u._containerService, [e], acceptedFileTypes);
        if (a) {
          const i = ti.f(u._containerService, a);
          if (i) {
            const n = yield u.replaceReferenceResource(t, i);
            const o = u._getImportMaterialType(i);
            if (o) {
              u._reportImportMaterial(o, {
                status: n.ok ? "success" : "fail",
                actionType: "click",
                failReason: n.ok ? undefined : n.msg,
              });
            }
          }
        }
      })();
    this.addReferenceResources = (e, t) => this._addReferenceResources(e, t);
    this._addReferenceResources = (e, t) =>
      G._(function* () {
        const r = O.I(
          u._containerService,
          e,
          u._metadataStore.acceptedResourceTypes,
        );
        const referenceResources = u._dataStore.referenceResources;
        const i = r.filter(
          (e) => !referenceResources.some((t) => t.id === e.id),
        );
        if (!i.length) {
          u._reportAddedResources(e, [], t);
          return c.TZ([]);
        }
        const n = yield ts.A(i);
        if (!n.ok) {
          u._notificationService.warning(n.msg);
          u._reportAddedResources(e, [], t);
          return n;
        }
        const o = u._validateReferencesChange({
          resources: [...u._dataStore.referenceResources, ...i],
          subjects: ee.I(u._dataStore.promptContents),
        });
        if (o.ok) {
          u._dataStore.addReferenceResources(i);
          u._ensureReferenceResources(i);
          u._agenticGeneratorManager.auditReferences();
          u._reportAddedResources(e, i, t);
          return c.TZ(i);
        }
        u._notificationService.warning(o.msg);
        u._reportAddedResources(e, [], t, o.msg);
        return o;
      })();
    this.replaceReferenceResource = (e, t) =>
      G._(function* () {
        if (
          !O.I(u._containerService, [t], u._metadataStore.acceptedResourceTypes)
            .length
        ) {
          return c.nj();
        }
        let r;
        const n = u._dataStore.referenceResources.at(e);
        const o = n == null ? undefined : n.id;
        const s = yield ts.A([t]);
        if (!s.ok) {
          u._notificationService.warning(s.msg);
          return s;
        }
        const l = u._dataStore.referenceResources.filter((t, r) => r !== e);
        const d = u._validateReferencesChange({
          resources: [...l, t],
          subjects: ee.I(u._dataStore.promptContents),
        });
        if (d.ok) {
          u._dataStore.setReferenceResource(e, t);
          u._ensureReferenceResources([t]);
          u._agenticGeneratorManager.auditReferences();
          if (o && o !== t.id) {
            if ((r = u._pdfUploadControllers.get(o)) != null) {
              r.abort();
            }
            n.dispose();
            u._dataStore.setPromptContents(
              u._dataStore.promptContents.map((e) => {
                if (e.type === "reference-resource" && e.resource.id === o) {
                  return i._(a._({}, e), {
                    resource: t,
                  });
                }
                return e;
              }),
            );
          }
          return c.nj();
        }
        u._notificationService.warning(d.msg);
        return d;
      })();
    this.removeReferenceResource = (e) => {
      this.removeReferenceResources([e]);
    };
    this.removeReferenceResources = function (e) {
      let t;
      const r =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : d._dataStore.conversationId;
      if (e.length !== 0) {
        const a = new Set(e);
        const i = (
          (t = d._dataStore.conversationIdToReferenceResources[r]) != null
            ? t
            : []
        ).filter((e) => a.has(e.id));
        e.forEach((e) => {
          var t;
          if ((t = d._pdfUploadControllers.get(e)) == null) {
            return undefined;
          }
          return t.abort();
        });
        i.forEach((e) => {
          e.dispose();
          if (e.uri) {
            d._agenticGeneratorManager.reportManager.deleteReferenceParams(
              e.uri,
            );
          }
        });
        d._dataStore.removeReferenceResources(e, r);
        if (r === d._dataStore.conversationId) {
          d._agenticGeneratorManager.auditReferences();
        }
        d._agenticGeneratorManager.reportManager.reportDeleteUpload();
      }
    };
    this.insertReferenceResourceIntoPrompt = (e) => {
      var t;
      var r = this._dataStore.referenceResources.find((t) => t.id === e);
      if (r) {
        var { visibleContentGeneratorInstance } =
          this._agenticGeneratorManager.contentGeneratorManager;
        var i =
          visibleContentGeneratorInstance == null ||
          (t = visibleContentGeneratorInstance.elements.promptEditorRef) == null
            ? undefined
            : t.current;
        if (i) {
          i.commands.insertContent({
            type: M.t.ReferenceMentionTag,
            attrs: {
              id: r.id,
            },
          });
          i.commands.focus();
        }
      }
    };
  }
}
tl = n.Cg(
  [
    n.Qj(3, u._),
    n.Qj(4, d.Ot),
    n.Qj(5, tr.H),
    n.Qj(6, ta.T),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      typeof AgenticGeneratorDataStore === "undefined"
        ? Object
        : AgenticGeneratorDataStore,
      typeof AgenticGeneratorMetadataStore === "undefined"
        ? Object
        : AgenticGeneratorMetadataStore,
      u._ === undefined ? Object : u._,
      d.Ot === undefined ? Object : d.Ot,
      tr.H === undefined ? Object : tr.H,
      ta.T === undefined ? Object : ta.T,
    ]),
  ],
  tl,
);
const tc = require("qa");
const td = require("dRO");
const tu = require("ai0");
const th = require("BNg");
const tg = require("pfC");
const tm = require("./module-JJ_2.js");
const tp = require("nZ");
const t_ = require("kDy");
const tv = require("jA4");
const tf = require("kF");
class tS extends tf.v {
  constructor(...e) {
    super(...e);
    this.eventName = "voice_record_status";
  }
}
class ty extends tf.o {
  _getCollectorClass() {
    return tS;
  }
  _validateParams(e) {
    J.F4(e.action, "[VoiceRecordStatusReporter] action is required");
    if (e.action === "record_end") {
      J.F4(
        e.status,
        "[VoiceRecordStatusReporter] status is required when action is record_end",
      );
    }
  }
}
const tM = require("iak");
class tk extends tf.v {
  constructor(...e) {
    super(...e);
    this.eventName = "skill_export";
  }
}
class tR extends tf.o {
  _getCollectorClass() {
    return tk;
  }
  _validateParams(e) {
    ["status", "format"].forEach((t) => {
      J.F4(e[t], "[SkillExportReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tR = n.Cg(
  [
    n.Qj(1, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      u._ === undefined ? Object : u._,
    ]),
  ],
  tR,
);
class tI extends tf.v {
  constructor(...e) {
    super(...e);
    this.eventName = "skill_publish_status";
  }
}
class tb extends tf.o {
  _getCollectorClass() {
    return tI;
  }
  _validateParams(e) {
    [
      "status",
      "skill_category",
      "privacy_setting",
      "skill_name",
      "intro",
      "skill_id",
    ].forEach((t) => {
      J.F4(e[t], "[SkillPublishStatusReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tb = n.Cg(
  [
    n.Qj(1, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      u._ === undefined ? Object : u._,
    ]),
  ],
  tb,
);
class tC extends tf.v {
  constructor(...e) {
    super(...e);
    this.eventName = "agent_skill_manage_action";
  }
}
class tP extends tf.o {
  _getCollectorClass() {
    return tC;
  }
  _validateParams(e) {
    const t = ["action", "enter_from", "is_skill_package"];
    if (
      [
        "publish_entrance_click",
        "publish_panel_show",
        "publish",
        "upload",
        "agent_edit",
      ].includes(e.action)
    ) {
      t.push("intro");
    }
    t.forEach((t) => {
      J.F4(e[t], "[AgentSkillManageActionReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tP = n.Cg(
  [
    n.Qj(1, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      u._ === undefined ? Object : u._,
    ]),
  ],
  tP,
);
const tA = (e) => {
  if (e.length) {
    return [...e];
  }
  return [undefined];
};
class tT extends tp.j {
  get _conversationId() {
    let e;
    if ((e = this._agenticGeneratorManager.agentConversationsManager) == null) {
      return undefined;
    }
    return e.data.currentConversationId;
  }
  get _displaySettingsTab() {
    if (this._agenticGeneratorManager.data.settingsType === "image") {
      return "image";
    }
    return "video";
  }
  _getCurrentModelReportParams(e) {
    const displaySettingsTab =
      (a = e == null ? undefined : e.displaySettingsTab) != null
        ? a
        : this._displaySettingsTab;
    const r =
      (i = e == null ? undefined : e.functionButtonPosition) != null
        ? i
        : "button";
    if (displaySettingsTab === "image") {
      var a;
      var i;
      var n;
      var o;
      let s;
      let l;
      const {
        data: { modelKey: modelKey_1 },
      } = this._agenticGeneratorManager.imageSettingsManager;
      const d =
        (s =
          (l =
            this._agenticGeneratorManager.imageSettingsManager.metadata.modelOptions.find(
              (e) => e.value === modelKey_1,
            )) == null
            ? undefined
            : l.label) != null
          ? s
          : modelKey_1;
      return {
        displaySettingsTab,
        functionButtonPosition: r,
        modelKey: modelKey_1,
        modelName: d,
      };
    }
    const {
      data: { modelKey },
    } = this._agenticGeneratorManager.videoSettingsManager;
    const h =
      (n =
        (o =
          this._agenticGeneratorManager.videoSettingsManager.metadata.modelOptions.find(
            (e) => e.value === modelKey,
          )) == null
          ? undefined
          : o.label) != null
        ? n
        : modelKey;
    return {
      displaySettingsTab,
      functionButtonPosition: r,
      modelKey,
      modelName: h,
    };
  }
  _getCurrentBaseModelReportParams() {
    const selectedInferenceModel =
      this._agenticGeneratorManager.metadata.selectedInferenceModel;
    if (selectedInferenceModel) {
      return {
        baseModelId: selectedInferenceModel.modelId,
        baseModelName: selectedInferenceModel.displayName,
      };
    }
    return {};
  }
  _resolveSkillById(e) {
    if (e) {
      return this._agenticGeneratorManager.skillManager.metadata.librarySkills.find(
        (t) => t.id === e,
      );
    }
  }
  _withSkillManageParams(e, t) {
    if (!e.skillId) {
      return e;
    }
    const r = t != null ? t : this._resolveSkillById(e.skillId);
    if (!r) {
      return e;
    }
    const i = tg.m(r);
    const { skillTags } = i;
    const o = tc._(i, ["skillTags"]);
    return a._({}, e, o);
  }
  _getSkillPublishManageBaseParams(position) {
    return {
      position,
    };
  }
  constructor(e, t) {
    var r;
    super(t);
    r = this;
    this._agenticGeneratorManager = e;
    this.reportAgentSwitchModel = (e, t, r) => {
      var n = this._containerService.createInstance(tv.S, this.commonParams);
      var o = this._getCurrentModelReportParams(r);
      n.setParams(
        i._(
          a._(
            {
              action: "switch_model",
            },
            o,
          ),
          {
            modelName: e || o.modelName,
            modelKey: t != null ? t : o.modelKey,
            panelName: o.displaySettingsTab,
            conversationId: this._conversationId,
          },
        ),
      );
      n.report();
    };
    this.reportAgentSwitchRatio = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      var r = this._getCurrentModelReportParams();
      t.setParams(
        i._(
          a._(
            {
              action: "input_aspect_ratio",
            },
            r,
          ),
          {
            ratio: e != null ? e : "auto",
            panelName: r.displaySettingsTab,
            conversationId: this._conversationId,
          },
        ),
      );
      t.report();
    };
    this.reportAgentSwitchResolution = (resolution) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      var r = this._getCurrentModelReportParams();
      t.setParams(
        i._(
          a._(
            {
              action: "switch_definition",
            },
            r,
          ),
          {
            resolution,
            panelName: r.displaySettingsTab,
            conversationId: this._conversationId,
          },
        ),
      );
      t.report();
    };
    this.reportAgentSwitchSettingType = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: e === "image" ? "switch_to_image" : "switch_to_video",
        conversationId: this._conversationId,
      });
      t.report();
    };
    this.reportAgentClickSettings = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams(
        i._(
          a._(
            {
              action: "click_settings",
            },
            this._getCurrentModelReportParams(),
          ),
          {
            conversationId: this._conversationId,
          },
        ),
      );
      e.report();
    };
    this.reportAgentTriggerManualSettings = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: e === "open" ? "open_manual_settings" : "close_manual_settings",
        conversationId: this._conversationId,
      });
      t.report();
    };
    this.reportAgentToggleCreativeMode = () => {
      var creativeModelEnabled =
        this._agenticGeneratorManager.data.creativeModelEnabled;
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: creativeModelEnabled
          ? "open_creative_mode"
          : "close_creative_mode",
      });
      t.report();
    };
    this.reportAgentSwitchBaseModel = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams(
        i._(
          a._(
            {
              action: "switch_base_model",
            },
            this._getCurrentBaseModelReportParams(),
          ),
          {
            conversationId: this._conversationId,
          },
        ),
      );
      e.report();
    };
    this.reportAgentToggleDeepCreation = () => {
      var e = this._agenticGeneratorManager.data.creationMode === h.a.Ultra;
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams(
        i._(
          a._(
            {
              action: e ? "deep_creation_on" : "deep_creation_off",
            },
            this._getCurrentBaseModelReportParams(),
          ),
          {
            conversationId: this._conversationId,
          },
        ),
      );
      t.report();
    };
    this.reportActivatePrompt = () => {
      var e;
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      var r =
        (e =
          this._agenticGeneratorManager.contentGeneratorManager
            .visibleContentGeneratorInstance) == null
          ? undefined
          : e.environment.reportPosition;
      t.setParams(
        a._(
          {
            action: "activate",
            conversationId: this._conversationId,
          },
          r
            ? {
                position: r,
              }
            : {},
        ),
      );
      t.report();
    };
    this.reportVoiceRecordStart = () => {
      var e = this._containerService.createInstance(ty, {});
      e.setParams({
        action: "record_start",
      });
      e.report();
    };
    this.reportVoiceRecordClick = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "voice_record_click",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportVoiceRecordReady = (voiceRecordTime) => {
      var t = this._containerService.createInstance(ty, {});
      t.setParams({
        action: "record_ready",
        voiceRecordTime,
      });
      t.report();
    };
    this.reportVoiceRecordEnd = (e) => {
      var t = this._containerService.createInstance(ty, {});
      t.setParams(
        a._(
          {
            action: "record_end",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportVoiceRecordDone = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "voice_record_done",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportSkillUsagePromptInserted = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: "enter_prompt",
        actionMethod: "click_tab",
        conversationId: this._conversationId,
        skillId: e,
      });
      t.report();
    };
    this.reportEnterPrompt = () => {
      if (!this._agenticGeneratorManager.data.isPromptEmpty) {
        var e;
        var t;
        var r = this._resolveSkillById(
          this._agenticGeneratorManager.data.currentSkillId,
        );
        var i = r ? tg.m(r) : undefined;
        var n =
          (t =
            this._agenticGeneratorManager.contentGeneratorManager
              .visibleContentGeneratorInstance) == null
            ? undefined
            : t.environment.reportPosition;
        tA((e = i == null ? undefined : i.skillTags) != null ? e : []).forEach(
          (e) => {
            var t = this._containerService.createInstance(
              tv.S,
              this.commonParams,
            );
            t.setParams(
              a._(
                {
                  action: "enter_prompt",
                  conversationId: this._conversationId,
                },
                n
                  ? {
                      position: n,
                    }
                  : {},
                r && i
                  ? {
                      skillId: i.skillId,
                      skillName: r.name,
                      skillSource: i.skillSource,
                      originalSkillId: i.originalSkillId,
                      skillTag: e,
                    }
                  : {},
              ),
            );
            t.report();
          },
        );
      }
    };
    this.reportClickUpload = function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : "button";
      const t = r._containerService.createInstance(tv.S, r.commonParams);
      t.setParams(
        i._(
          a._(
            {
              action: "click_upload",
            },
            r._getCurrentModelReportParams({
              functionButtonPosition: e,
            }),
          ),
          {
            conversationId: r._conversationId,
          },
        ),
      );
      t.report();
    };
    this.reportUploadFromLocal = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "upload_from_local",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportDeleteUpload = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "delete_upload",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportAddQuotation = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams(
        a._(
          {
            action: "add_quotation",
            conversationId: this._conversationId,
          },
          e,
        ),
      );
      t.report();
    };
    this.reportDeleteQuotation = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams(
        a._(
          {
            action: "delete_quotation",
            conversationId: this._conversationId,
          },
          e,
        ),
      );
      t.report();
    };
    this.reportBatchAdd = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "batch_add",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportAddReferenceImage = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "add_reference_image",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportImportMaterial = (e) => {
      var t = this._containerService.createInstance(tu.k);
      t.setParams(
        a._(
          {
            position: "generation",
            modal: "aigc_agentic",
            materialSource: "local",
          },
          e,
        ),
      );
      t.report();
    };
    this.reportPasteUpload = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: "paste_upload",
        uploadCnt: e.length,
        conversationId: this._conversationId,
      });
      t.report();
    };
    this.reportPasteReplace = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: "paste_replace",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: "add_image",
        conversationId: this._conversationId,
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: "add_video",
        conversationId: this._conversationId,
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportAddAudio = (e) => {
      var t = this._containerService.createInstance(tv.S, this.commonParams);
      t.setParams({
        action: "add_audio",
        conversationId: this._conversationId,
        audioId: e == null ? undefined : e.audioId,
      });
      t.report();
    };
    this.reportToggleInspirationSearch = () => {
      var e = this._containerService.createInstance(tv.S, this.commonParams);
      e.setParams({
        action: this._agenticGeneratorManager.data.searchEnabled
          ? "open_inspiration_search"
          : "close_inspiration_search",
        conversationId: this._conversationId,
      });
      e.report();
    };
    this.reportAddTempSubject = (e) => {
      var { subjectListShowFrom } = tm.m[e];
      var r = this._containerService.createInstance(tv.S, this.commonParams);
      r.setParams({
        action: "add_temp_subject",
        subjectListShowFrom,
        conversationId: this._conversationId,
      });
      r.report();
    };
    this.reportAddSubject = (e, subjectId) => {
      var { subjectListShowFrom, assetPosition } = tm.m[e];
      var i = this._containerService.createInstance(tv.S, this.commonParams);
      i.setParams({
        action: "add_subject",
        subjectListShowFrom,
        subjectId,
        conversationId: this._conversationId,
        assetPosition,
      });
      i.report();
    };
    this.reportAddSkills = (e, t) => {
      var r = tg.m(e);
      tA(t != null ? t : r.skillTags).forEach((t) => {
        var a = this._containerService.createInstance(tv.S, this.commonParams);
        a.setParams({
          action: "add_skills",
          skillId: r.skillId,
          skillName: e.name,
          skillSource: r.skillSource,
          originalSkillId: r.originalSkillId,
          skillTag: t,
          conversationId: this._conversationId,
        });
        a.report();
      });
    };
    this.reportWorkspaceActivate = (e, t) => {
      var r = this._containerService.createInstance(
        tv.S,
        i._(a._({}, this.commonParams), {
          enterFrom: t ? "new_conversation" : "click",
        }),
      );
      r.setParams({
        action: "activate",
        conversationId: String(e),
      });
      r.report();
    };
    this.reportSkillsAction = (e) => {
      this._containerService.createInstance(tM.P, e).report();
    };
    this.reportSkillsSelect = (e, actionMethod, r) => {
      var a = tg.m(e);
      tA(r != null ? r : a.skillTags).forEach((r) => {
        this.reportSkillsAction({
          action: "select",
          actionMethod,
          skillId: a.skillId,
          skillName: e.name,
          skillSource: a.skillSource,
          originalSkillId: a.originalSkillId,
          skillTag: r,
        });
      });
    };
    this.reportSkillManageShow = (e) => {
      this._skillManageEnterFrom = e;
      this._reportSkillManageAction({
        action: "show",
      });
    };
    this.reportSkillManageCloseList = () => {
      this._reportSkillManageAction({
        action: "close_list",
      });
    };
    this.reportSkillManageCreateNew = function () {
      const e =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : "create_new";
      const t = arguments.length > 1 ? arguments[1] : undefined;
      r._reportSkillManageAction(
        {
          action: e,
        },
        undefined,
        undefined,
        t,
      );
    };
    this.reportSkillManageUploadClick = (e, t) => {
      this._reportSkillManageAction(
        {
          action: e ? "skill_reupload" : "skill_upload",
          skillId: e == null ? undefined : e.id,
          skillName: e == null ? undefined : e.name,
        },
        e,
        undefined,
        t,
      );
    };
    this.reportSkillUploadBlocked = () => {
      this._containerService
        .createInstance(td.j, {
          status: "fail",
          enterFrom: "skill_upload",
          failReason: "concurrent_upload_limit",
        })
        .report();
    };
    this.reportSkillManageEdit = (e, t) => {
      this._reportSkillManageAction({
        action: "edit",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageActivate = (e, t, r, a) => {
      this._reportSkillManageAction({
        action: "activate",
        skillId: e,
        skillName: t,
        status: r,
        failReason: a,
      });
    };
    this.reportSkillManageDeactivate = (e, t, r, a) => {
      this._reportSkillManageAction({
        action: "deactivate",
        skillId: e,
        skillName: t,
        status: r,
        failReason: a,
      });
    };
    this.reportSkillManageDelete = (e, t) => {
      this._reportSkillManageAction({
        action: "delete",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageDeleteConfirm = (e, t) => {
      this._reportSkillManageAction({
        action: "delete_confirm",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageDownload = (e, t, r) => {
      this._reportSkillManageAction(
        {
          action: "download",
          skillId: e.id,
          skillName: e.name,
          status: t,
          failReason: r,
        },
        e,
      );
    };
    this.reportSkillExport = (e, t, r) => {
      var a = tg.m(e);
      this._containerService
        .createInstance(tR, {
          status: t,
          format: "md",
          skillId: a.skillId,
          skillSource: a.skillSource,
          originalSkillId: a.originalSkillId,
          failReason: r,
        })
        .report();
    };
    this.reportSkillManageUse = (e, t) => {
      this._reportSkillManageAction({
        action: "use",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageSave = (e, t, r, a) => {
      this._reportSkillManageAction({
        action: "save",
        skillId: e,
        skillName: t,
        status: r,
        failReason: a,
      });
    };
    this.reportSkillManageCloseConfirm = (e, t) => {
      this._reportSkillManageAction({
        action: "close_confirm",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageCloseEditCancel = (e, t) => {
      this._reportSkillManageAction({
        action: "close_edit_cancel",
        skillId: e,
        skillName: t,
      });
    };
    this.reportSkillManageSearch = (keyword) => {
      this._reportSkillManageAction({
        action: "search",
        keyword,
      });
    };
    this.reportSkillManageGoCheckDreaminaTools = () => {
      this._reportSkillManageAction({
        action: "go_check_dreamina_tools",
      });
    };
    this.reportSkillManageMoreSkillsEntranceClick = () => {
      this._reportSkillManageAction({
        action: "more_skills_entrance_click",
      });
    };
    this.reportSkillManagePublishEntranceClick = (e) => {
      this._reportSkillManageAction(
        i._(
          a._({}, this._getSkillPublishManageBaseParams("skill_manage_page")),
          {
            action: "publish_entrance_click",
            skillId: e.id,
            skillName: e.name,
          },
        ),
        e,
      );
    };
    this.reportSkillPublishPanelShow = (e) => {
      this._reportSkillManageAction(
        i._(
          a._({}, this._getSkillPublishManageBaseParams("skill_publish_panel")),
          {
            action: "publish_panel_show",
            skillId: e.id,
            skillName: e.name,
          },
        ),
        e,
      );
    };
    this.reportSkillPublishUpload = (e, t) => {
      this._reportSkillManageAction(
        i._(a._({}, this._getSkillPublishManageBaseParams(t)), {
          action: "upload",
          skillId: e.id,
          skillName: e.name,
        }),
        e,
      );
    };
    this.reportSkillPublishCoverDelete = (e) => {
      this._reportSkillManageAction(
        i._(
          a._(
            {},
            this._getSkillPublishManageBaseParams("cover_setting_upload_click"),
          ),
          {
            action: "cover_delete",
            skillId: e.id,
            skillName: e.name,
          },
        ),
        e,
      );
    };
    this.reportSkillPublishCoverReset = (e) => {
      this._reportSkillManageAction(
        i._(
          a._(
            {},
            this._getSkillPublishManageBaseParams("cover_setting_upload_click"),
          ),
          {
            action: "cover_reset",
            skillId: e.id,
            skillName: e.name,
          },
        ),
        e,
      );
    };
    this.reportSkillManageAgentEdit = (e) => {
      this._reportSkillManageAction(
        i._(
          a._({}, this._getSkillPublishManageBaseParams("skill_manage_page")),
          {
            action: "agent_edit",
            skillId: e.id,
            skillName: e.name,
          },
        ),
        e,
      );
    };
    this.reportSkillPublish = (e, t, r, n) => {
      this._reportSkillManageAction(
        i._(a._({}, this._getSkillPublishManageBaseParams(r)), {
          action: "publish",
          materialType: t,
          skillId: e.id,
          skillName: e.name,
        }),
        e,
        n,
      );
    };
    this.reportSkillPublishStatus = (e) => {
      this._containerService.createInstance(tb, e).report();
    };
    this.setSkillMarkdownContext = (e, t) => {
      this._skillMarkdownEnterFrom = e;
      this._skillMarkdownId = t;
    };
    this.clearSkillMarkdownContext = () => {
      this._skillMarkdownEnterFrom = undefined;
      this._skillMarkdownId = undefined;
    };
    this.reportSkillMarkdownBoldToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "bold",
      });
    };
    this.reportSkillMarkdownItalicToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "italics",
      });
    };
    this.reportSkillMarkdownStrikethroughToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "strikethrough",
      });
    };
    this.reportSkillMarkdownUnderlineToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "underline",
      });
    };
    this.reportSkillMarkdownQuoteToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "quote",
      });
    };
    this.reportSkillMarkdownOrderedListToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "ordered_list",
      });
    };
    this.reportSkillMarkdownUnorderedListToggle = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "unordered_list",
      });
    };
    this.reportSkillMarkdownHeadingChange = (e) => {
      this._reportSkillMarkdownAdjustAction({
        action: "heading",
        headingLevel: "".concat(e),
      });
    };
    this.reportSkillMarkdownAlignmentChange = (alignment) => {
      this._reportSkillMarkdownAdjustAction({
        action: "align",
        alignment,
      });
    };
    this.reportSkillMarkdownAdjust = () => {
      this._reportSkillMarkdownAdjustAction({
        action: "adjust",
      });
    };
    this.reportSessionOperate = (e, workspaceId) => {
      this._containerService
        .createInstance(t_.Z, {
          action: e,
          workspaceId,
        })
        .report();
    };
    this._reportSkillMarkdownAdjustAction = (e) => {
      var t;
      if (this._skillMarkdownEnterFrom) {
        this._containerService
          .createInstance(
            th.K,
            i._(a._({}, e), {
              enterFrom: this._skillMarkdownEnterFrom,
              markdownId: (t = this._skillMarkdownId) != null ? t : "",
            }),
          )
          .report();
      }
    };
    this._reportSkillManageAction = function (e, t, n) {
      let o;
      const enterFrom =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : r._skillManageEnterFrom;
      if (enterFrom) {
        const l = t != null ? t : r._resolveSkillById(e.skillId);
        const c = n != null ? n : l ? tg.m(l).skillTags : [];
        const d = r._withSkillManageParams(e, l);
        const u =
          e.action === "skill_upload" ||
          (l == null ? undefined : l.isSkillPackage) === true;
        if (
          e.action === "publish_entrance_click" ||
          e.action === "agent_edit"
        ) {
          d.intro =
            (o = l == null ? undefined : l.introduction) != null ? o : "";
        } else if (
          ["publish_panel_show", "publish", "upload"].includes(e.action)
        ) {
          const h = r._agenticGeneratorManager.skillPublishManager.data;
          d.intro = h.isIntroductionEnabled ? h.introduction.trim() : "";
        }
        tA(c).forEach((e) => {
          r._containerService
            .createInstance(
              tP,
              i._(a._({}, d), {
                enterFrom,
                isSkillPackage: +!!u,
                skillTag: e,
              }),
            )
            .report();
        });
      }
    };
  }
}
tT = n.Cg(
  [
    n.Qj(1, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      u._ === undefined ? Object : u._,
    ]),
  ],
  tT,
);
const tG = require("jtL");
const tw = require("T7");
const tj = require("RLQ");
const tD = require("QC");
function tF(e, t) {
  if (!(e.mode !== "manual" || t)) {
    e.mode = "auto";
    delete e.value;
  }
}
function tL(e, _config) {
  const r = structuredClone(e);
  const { image, video } = r;
  const modelList = _config.imageData.modelList;
  if (modelList.length) {
    tF(
      image.model,
      modelList.some((e) => e.key === image.model.value),
    );
    const o =
      image.model.mode === "manual"
        ? modelList.filter((e) => e.key === image.model.value)
        : modelList;
    tF(
      image.resolution,
      o.some((e) => {
        var t;
        return Object.keys((t = e.resolutionMap) != null ? t : {}).some(
          (e) => eI.u[e] === image.resolution.value,
        );
      }),
    );
    tF(
      image.aspectRatio,
      o.some((e) => {
        var t;
        var r = Object.entries((t = e.resolutionMap) != null ? t : {}).filter(
          (e) => {
            var [t] = e;
            return (
              image.resolution.mode === "auto" ||
              eI.u[t] === image.resolution.value
            );
          },
        );
        return (
          (image.resolution.mode !== "manual" || !!r.length) &&
          (r.length
            ? r.map((e) => {
                var [, t] = e;
                return t;
              })
            : [undefined]
          ).some((e) => {
            if (
              ey
                ._l(
                  (t = e == null ? undefined : e.imageRatioSizes) != null
                    ? t
                    : [],
                )
                .some((e) => {
                  var { aspectRatio } = e;
                  return aspectRatio === image.aspectRatio.value;
                })
            ) {
              return true;
            }
            if (
              !image.aspectRatio.value ||
              ev.z(image.aspectRatio.value) ||
              (e == null ? undefined : e.imageRatioSizes)
            ) {
              return false;
            }
            var t;
            var [r, i] = image.aspectRatio.value.split(":").map(Number);
            var n = e == null ? undefined : e.imageRangeConfig;
            return (
              r > 0 &&
              i > 0 &&
              Number.isFinite(r * i) &&
              (!n ||
                (Math.min(r, i) >= n.minLength &&
                  Math.max(r, i) <= n.maxLength &&
                  r * i <= n.maxPixelNum))
            );
          })
        );
      }),
    );
  }
  if (!_config.videoData.disabled && _config.videoData.modelList.length) {
    const s = _config.videoData.modelList;
    tF(
      video.model,
      s.some((e) => e.key === video.model.value),
    );
    const l =
      video.model.mode === "manual"
        ? s.filter((e) => e.key === video.model.value)
        : s;
    if (video.resolution.mode === "manual") {
      const c = l
        .flatMap((e) =>
          e.fields.flatMap((e) => {
            if (e.type !== eR.pH.Resolution || e.disabled) {
              return [];
            }
            return e.values;
          }),
        )
        .find((e) => {
          var t;
          return (
            e.toLowerCase() ===
            ((t = video.resolution.value) == null ? undefined : t.toLowerCase())
          );
        });
      if (c !== undefined) {
        video.resolution.value = c;
      }
      tF(video.resolution, c !== undefined);
    }
    tF(
      video.aspectRatio,
      l.some((e) =>
        e.fields.some(
          (e) =>
            e.type === eR.pH.VideoAspectRatio &&
            !e.disabled &&
            e.values.some((e) => e === video.aspectRatio.value),
        ),
      ),
    );
  }
  return r;
}
function tx(e, t) {
  if (e && t) {
    return {
      mode: "manual",
      value: t,
    };
  }
  return {
    mode: "auto",
  };
}
function tE(e, t) {
  return i._(a._({}, e), {
    modelKey: t.model.mode === "manual" ? t.model.value : undefined,
    aspectRatio:
      t.aspectRatio.mode === "manual" ? t.aspectRatio.value : undefined,
    resolution: t.resolution.mode === "manual" ? t.resolution.value : undefined,
  });
}
class tO extends l.jG {
  get hasSavedPreferences() {
    return this._preferences !== undefined;
  }
  get _serverPreferenceEnabled() {
    return this._metadataStore.creationPreferenceEnabled;
  }
  get _preferenceRepository() {
    if (!this._preferenceRepositoryInstance) {
      this._preferenceRepositoryInstance =
        this._containerService.createInstance(tD.t);
    }
    return this._preferenceRepositoryInstance;
  }
  setConversationIdProvider(e) {
    let t;
    const r =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this._invalidateRestore();
    this._conversationIdProvider = e;
    this._canvasPreferences = r;
    if ((t = this._conversationPreferenceDisposer) != null) {
      t.call(this);
    }
    this._conversationPreferenceDisposer = undefined;
    this._restoredPreferenceScope = null;
    if (this._serverPreferenceEnabled && this._userId && e) {
      this._observeConversationPreference();
    } else if (this._serverPreferenceEnabled && this._userId) {
      this._restorePreferenceForCurrentScope();
    }
  }
  setGenerationWorkspaceProvider(e) {
    let t;
    if ((t = this._conversationPreferenceDisposer) != null) {
      t.call(this);
    }
    this._conversationPreferenceDisposer = undefined;
    this._generationWorkspaceProvider = e;
    if (this._serverPreferenceEnabled && this._userId) {
      this._bindConversationPreference();
    }
    return () => {
      if (this._generationWorkspaceProvider === e) {
        this.setGenerationWorkspaceProvider(undefined);
      }
    };
  }
  persistPreferenceForSubmission(e, t) {
    return G._(function* () {
      if (this._serverPreferenceEnabled && this._userId) {
        let r;
        let a;
        let i;
        const n = this._preferenceLifecycle;
        if (
          this._isGenerationScopeLoading() &&
          (yield o.z7(() => !this._isGenerationScopeLoading(), {
            timeout: 15000,
          }),
          n !== this._preferenceLifecycle)
        ) {
          throw Error("Agent creation preference owner changed while loading");
        }
        const s = this._currentPreferenceScope();
        this._restorePreferenceForCurrentScope();
        yield this._pendingPreferenceRestore;
        if (
          n !== this._preferenceLifecycle ||
          s !== this._currentPreferenceScope() ||
          s !== this._restoredPreferenceScope
        ) {
          throw Error(
            "Agent creation preference scope changed or is not ready",
          );
        }
        const l = this._usesWorkspacePreference ? String(t) : e;
        if (
          this._usesWorkspacePreference &&
          this._currentPreferenceId() !== l
        ) {
          throw Error(
            "Agent creation preference workspace changed before submission",
          );
        }
        const c = this._currentPreferenceScope();
        do {
          a = structuredClone(
            (i = this._serverPreference) != null ? i : tj.oS(),
          );
          yield this._updateScopedPreference(l, a);
          if (
            n !== this._preferenceLifecycle ||
            c !== this._currentPreferenceScope()
          ) {
            throw Error("Agent creation preference scope changed while saving");
          }
        } while (!ek.A(a, (r = this._serverPreference) != null ? r : tj.oS()));
        if (!this._usesWorkspacePreference) {
          this._draftConversationPreferences.delete(
            "".concat(this._userId, ":").concat(e),
          );
        }
      }
    }).call(this);
  }
  preparePreferenceForConversation(e) {
    return G._(function* () {
      if (this._serverPreferenceEnabled && this._userId) {
        let t;
        const r = this._preferenceLifecycle;
        const a = this._currentPreferenceScope();
        this._restorePreferenceForCurrentScope();
        let i = false;
        try {
          yield this._pendingPreferenceRestore;
        } catch (error) {
          i = true;
          C.V.warn(
            "Failed to load Agent creation preference; keeping current settings for new conversation",
            error,
          );
        }
        if (
          r !== this._preferenceLifecycle ||
          a !== this._currentPreferenceScope() ||
          (!i && a !== this._restoredPreferenceScope)
        ) {
          throw Error(
            "Agent creation preference scope changed or is not ready",
          );
        }
        this._draftConversationPreferences.set(
          "".concat(this._userId, ":").concat(e),
          structuredClone((t = this._serverPreference) != null ? t : tj.oS()),
        );
      }
    }).call(this);
  }
  changeMode(e) {
    if (this._canEditCurrentPreference()) {
      const t = e === "manual";
      this._invalidateRestore();
      o.h5(() => {
        var e =
          !this._dataStore.manualSettingsEnabled && this._manualSettings
            ? this._manualSettings
            : this._captureCurrentSettings();
        this._manualSettings = e;
        this._usesAutoDefaults = !t;
        if (this._serverPreferenceEnabled && t) {
          this._applySettings(e, true, {
            resetControls: true,
          });
        } else {
          if (this._serverPreferenceEnabled) {
            this._serverPreference = tj.oS();
          }
          this._applySettings(t ? e : this._autoSettings, t, {
            resetControls: true,
          });
          if (this._serverPreferenceEnabled) {
            this._saveServerPreferences();
          } else {
            this._savePreferences();
          }
        }
      });
    }
  }
  changeSettings(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (this._canEditCurrentPreference()) {
      this._invalidateRestore();
      o.h5(() => {
        var r;
        var a;
        if (!this._dataStore.manualSettingsEnabled) {
          this._applySettings(
            (r = this._manualSettings) != null ? r : this._autoSettings,
            true,
          );
        }
        e();
        this._usesAutoDefaults = false;
        if (this._serverPreferenceEnabled) {
          this._recordServerPreferenceEdits(t);
          this._applyServerPreference(
            (a = this._serverPreference) != null ? a : tj.oS(),
          );
          this._saveServerPreferences();
          return;
        }
        this._normalizeCurrentSettings();
        this._manualSettings = this._captureCurrentSettings();
        this._savePreferences();
      });
    }
  }
  configureVideoSettings() {
    let e;
    if (this._canEditCurrentPreference()) {
      this._invalidateRestore();
      this._dataStore.setVideoSettingsConfigured(true);
      this._manualSettings = i._(
        a._(
          {},
          (e = this._manualSettings) != null
            ? e
            : this._captureCurrentSettings(),
        ),
        {
          videoSettingsConfigured: true,
        },
      );
      if (!this._serverPreferenceEnabled) {
        this._savePreferences();
      }
    }
  }
  isCreationSelectionManual(e, t) {
    if (!this._serverPreferenceEnabled) {
      return this._dataStore.manualSettingsEnabled;
    }
    let r;
    const a = ((r = this._serverPreference) != null ? r : tj.oS())[e][t];
    return a.mode === "manual" && !!a.value;
  }
  createRestoreGuard() {
    const e = (this._restoreToken = Symbol());
    this._metadataStore.setIsSettingsRestoring(true);
    return {
      canRestore: () =>
        e === this._restoreToken && (this._invalidateRestore(), true),
      dispose: () => {
        if (e === this._restoreToken) {
          this._invalidateRestore();
        }
      },
    };
  }
  _invalidateRestore() {
    this._serverPreferenceSerial++;
    this._restoreToken = Symbol();
    this._restoringPreferenceScope = null;
    this._pendingPreferenceRestore = undefined;
    this._metadataStore.setIsSettingsRestoring(false);
  }
  restoreSettings(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : this._dataStore.manualSettingsEnabled;
    const r =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : this._dataStore.videoSettingsConfigured;
    this._invalidateRestore();
    o.h5(() => {
      if (e) {
        this._applySettings(e, t, {
          resetControls: true,
        });
      } else {
        this._dataStore.setManualSettingsEnabled(t);
      }
      this._dataStore.setVideoSettingsConfigured(r);
      this._usesAutoDefaults = false;
      this._normalizeCurrentSettings();
      this._manualSettings = this._captureCurrentSettings();
    });
  }
  restorePreferences() {
    this._invalidateRestore();
    o.h5(() => {
      this._manualSettings =
        (e = (a = this._preferences) == null ? undefined : a.manualSettings) !=
        null
          ? e
          : null;
      var e;
      var t;
      var r;
      var a;
      var i;
      var n = this._preferences
        ? this._preferences.mode === "manual"
        : this._dataStore.manualSettingsEnabled;
      this._usesAutoDefaults = !n;
      this._dataStore.setVideoSettingsConfigured(
        (t =
          (i = this._manualSettings) == null
            ? undefined
            : i.videoSettingsConfigured) != null && t,
      );
      this._applySettings(
        n && (r = this._manualSettings) != null ? r : this._autoSettings,
        n,
        {
          resetControls: true,
        },
      );
    });
  }
  _restoreServerPreferences(e, t, r) {
    return G._(function* () {
      const _usesWorkspacePreference = this._usesWorkspacePreference;
      try {
        const i = this._preferenceWrites.get(this._writeScope(e));
        if (i) {
          yield i;
        }
        if (r !== this._serverPreferenceSerial) {
          return;
        }
        if (e) {
          yield this._preferenceWrites.get(this._writeScope());
          if (r !== this._serverPreferenceSerial) {
            return;
          }
          if (this._legacyPreferenceForMigration) {
            const n = yield this._unwrapPreference(
              this._preferenceRepository.getDefaultCreationPreference(),
            );
            yield this._migrateLegacyDefaultPreference(n, r);
          }
          if (r !== this._serverPreferenceSerial) {
            return;
          }
        }
        let o = yield this._unwrapPreference(
          e
            ? _usesWorkspacePreference
              ? this._preferenceRepository.getWorkspaceCreationPreference(
                  Number(e),
                )
              : this._preferenceRepository.getConversationCreationPreference(e)
            : this._preferenceRepository.getDefaultCreationPreference(),
        );
        if (!e) {
          o = yield this._migrateLegacyDefaultPreference(o, r);
        }
        if (
          r !== this._serverPreferenceSerial ||
          t !== this._currentPreferenceScope()
        ) {
          return;
        }
        if (e) {
          this._savedPreferencesByScope.set(
            this._writeScope(e),
            structuredClone(o),
          );
        }
        this._applyServerPreference(o);
        this._restoredPreferenceScope = t;
        if (!ek.A(o, this._serverPreference)) {
          this._saveServerPreferences();
        }
      } catch (error) {
        C.V.warn("Failed to restore server Agent creation preference", error);
        throw error;
      } finally {
        if (r === this._serverPreferenceSerial) {
          this._restoringPreferenceScope = null;
          this._pendingPreferenceRestore = undefined;
          this._metadataStore.setIsSettingsRestoring(false);
        }
      }
    }).call(this);
  }
  _migrateLegacyDefaultPreference(e, t) {
    return G._(function* () {
      if (!this._userId || t !== this._serverPreferenceSerial) {
        return e;
      }
      if (e.updatedAtMs) {
        this._legacyPreferenceForMigration = undefined;
        return e;
      }
      const r = this._legacyPreferenceForMigration
        ? ((e) => {
            if (e.mode === "auto") {
              return tj.oS();
            }
            if (e.manualSettings) {
              const { imageSettings, videoSettings, videoSettingsConfigured } =
                e.manualSettings;
              const i = tj.oS();
              i.image.model = tx(
                !!imageSettings.modelKey,
                imageSettings.modelKey,
              );
              i.image.aspectRatio = tx(
                !!imageSettings.aspectRatio,
                imageSettings.aspectRatio,
              );
              i.image.resolution = tx(
                !!imageSettings.resolution,
                imageSettings.resolution,
              );
              if (videoSettingsConfigured) {
                i.video.model = tx(
                  !!videoSettings.modelKey,
                  videoSettings.modelKey,
                );
                i.video.aspectRatio = tx(
                  !!videoSettings.aspectRatio,
                  videoSettings.aspectRatio,
                );
                i.video.resolution = tx(
                  !!videoSettings.resolution,
                  videoSettings.resolution,
                );
              }
              return i;
            }
          })(this._legacyPreferenceForMigration)
        : undefined;
      if (
        !r ||
        (this._config || (yield this._modelConfigReady),
        !this._config || t !== this._serverPreferenceSerial)
      ) {
        return e;
      }
      const a = yield this._updateDefaultPreference(tL(r, this._config));
      if (t === this._serverPreferenceSerial) {
        this._legacyPreferenceForMigration = undefined;
      }
      return a;
    }).call(this);
  }
  _applyServerPreference(e) {
    e = this._config ? tL(e, this._config) : e;
    o.h5(() => {
      var t;
      var r = this._captureCurrentSettings();
      var a = [
        (t = e).image.model,
        t.image.aspectRatio,
        t.image.resolution,
        t.video.model,
        t.video.aspectRatio,
        t.video.resolution,
      ].some((e) => e.mode === "manual" && !!e.value);
      var imageSettings = tE(r.imageSettings, e.image);
      var i_aspectRatio = imageSettings.aspectRatio;
      var [o, s] =
        i_aspectRatio && !ev.z(i_aspectRatio)
          ? i_aspectRatio.split(":").map(Number)
          : [];
      imageSettings.manualWidth = Number.isFinite(o) && o > 0 ? o : undefined;
      imageSettings.manualHeight = Number.isFinite(s) && s > 0 ? s : undefined;
      this._applySettings(
        {
          imageSettings,
          videoSettings: tE(r.videoSettings, e.video),
        },
        a,
        {
          resetControls: true,
        },
      );
      this._serverPreference = e;
      this._manualSettings = this._captureCurrentSettings();
      this._usesAutoDefaults = !a;
      this._dataStore.setVideoSettingsConfigured(true);
    });
  }
  _normalizeCurrentSettings() {
    if (this._config) {
      const { settings, changed } = eD(
        this._dataStore.generatorSettings,
        this._config,
        this._autoSettings,
      );
      if (changed) {
        this._applySettings(settings, this._dataStore.manualSettingsEnabled, {
          refreshImageDimensions: true,
        });
      }
    }
  }
  syncModelConfig(e) {
    o.h5(() => {
      this._config = e;
      if ((t = this._resolveModelConfigReady) != null) {
        t.call(this);
      }
      this._autoSettings = this._getDefaultSettings(e);
      if (this._serverPreferenceEnabled) {
        var t;
        var r;
        var n;
        var o = (n = this._serverPreference) != null ? n : tj.oS();
        this._applyServerPreference(o);
        if (!ek.A(o, this._serverPreference)) {
          this._saveServerPreferences();
        }
        return;
      }
      if (this._manualSettings) {
        var s = eD(this._manualSettings, e, this._autoSettings);
        this._manualSettings = a._({}, this._manualSettings, s.settings);
      }
      var l = (r = this._preferences) == null ? undefined : r.manualSettings;
      if (this._preferences && l) {
        var c = eD(l, e, this._autoSettings);
        if (c.changed) {
          this._preferences = i._(a._({}, this._preferences), {
            manualSettings: a._({}, l, c.settings),
          });
          this._writePreferences();
        }
      }
      var manualSettingsEnabled = this._dataStore.manualSettingsEnabled;
      var u = eD(this._dataStore.generatorSettings, e, this._autoSettings);
      if (this._usesAutoDefaults) {
        this._applySettings(this._autoSettings, manualSettingsEnabled);
      } else if (u.changed) {
        this._applySettings(u.settings, manualSettingsEnabled, {
          refreshImageDimensions: true,
        });
      }
      if (manualSettingsEnabled && u.changed) {
        this._notificationService.warning(
          H.Ay.t(
            "web_agent_params_offline_default_toast",
            {},
            "部分参数已下线，自动替换为默认值",
          ),
        );
      }
    });
  }
  _applySettings(e, t) {
    const { resetControls = false, refreshImageDimensions = false } =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const i = eC(this._dataStore.generatorSettings);
    if (resetControls || !ek.A(i.imageSettings, e.imageSettings)) {
      this._manager.imageSettingsManager.setSettings(e.imageSettings, {
        refreshDimensions: refreshImageDimensions,
      });
    }
    if (resetControls || !ek.A(i.videoSettings, e.videoSettings)) {
      this._manager.videoSettingsManager.setSettings(e.videoSettings);
    }
    this._dataStore.setManualSettingsEnabled(t);
  }
  _activateAccount() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const r =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const a =
      !t && this._accountService.hasLogin
        ? this._accountService.userProfile.uid
        : undefined;
    if (!this._initialized || a !== this._userId || r) {
      this._initialized = true;
      this._preferenceLifecycle = Symbol();
      this._savedPreferencesByScope.clear();
      this._draftConversationPreferences.clear();
      if ((e = this._conversationPreferenceDisposer) != null) {
        e.call(this);
      }
      this._conversationPreferenceDisposer = undefined;
      this._invalidateRestore();
      this._userId = a;
      if (!r) {
        this._legacyPreferenceForMigration = undefined;
      }
      this._autoSettings = this._getDefaultSettings(this._config);
      this._manualSettings = null;
      this._preferences = undefined;
      this._serverPreference = tj.oS();
      this._restoredPreferenceScope = null;
      if (this._serverPreferenceEnabled && a) {
        if (!r) {
          this._restoreLegacyAccountPreferences(a);
        }
        this._bindConversationPreference();
        return;
      }
      if (a) {
        this._restoreLegacyAccountPreferences(a);
      }
      this._dataStore.setManualSettingsEnabled(false);
      this.restorePreferences();
    }
  }
  _getDefaultSettings(e) {
    return eL(e, {
      autoResolution: this._serverPreferenceEnabled,
    });
  }
  _restoreLegacyAccountPreferences(e) {
    try {
      const t = P.b.getItem("generator_agentic_preferences_".concat(e));
      const r = t
        ? ((e) => {
            if (eP(e) && (e.mode === "auto" || e.mode === "manual")) {
              if (e.manualSettings === null) {
                if (e.mode === "auto") {
                  return {
                    mode: "auto",
                    manualSettings: null,
                  };
                }
                return undefined;
              }
              let t;
              let r;
              let n;
              const o = e.manualSettings;
              if (
                eP(o) &&
                eP((t = o.imageSettings)) &&
                typeof t.modelKey === "string" &&
                eA(t.aspectRatio) &&
                (t.resolution === undefined ||
                  Object.values(eM.DAImageResolutionType).some(
                    (e) => e === t.resolution,
                  )) &&
                eT(t.manualWidth) &&
                eT(t.manualHeight) &&
                (t.manualWidth === undefined) ==
                  (t.manualHeight === undefined) &&
                eP((r = o.videoSettings)) &&
                typeof r.modelKey === "string" &&
                (typeof r.resolution === "string" ||
                  r.resolution === undefined) &&
                eA(r.aspectRatio) &&
                (o.videoSettingsConfigured === undefined ||
                  typeof o.videoSettingsConfigured === "boolean")
              ) {
                return {
                  mode: e.mode,
                  manualSettings: i._(
                    a._(
                      {},
                      eC({
                        imageSettings: o.imageSettings,
                        videoSettings: o.videoSettings,
                      }),
                    ),
                    {
                      videoSettingsConfigured:
                        (n = o.videoSettingsConfigured) != null && n,
                    },
                  ),
                };
              }
            }
          })(JSON.parse(t))
        : undefined;
      if (r) {
        this._preferences = r;
        this._legacyPreferenceForMigration = r;
      }
    } catch (error) {
      C.V.warn("Failed to restore Agent parameter preferences", error);
    }
  }
  _initServerPreferenceExperiment() {
    return G._(function* () {
      try {
        if (this._serverPreferenceEnabled) {
          return;
        }
        yield (e = this._accountService.initializationBarrier) == null
          ? undefined
          : e.wait();
        yield this._configurationService.serverAbTestManager.initAndExposeAbTest();
        var e;
        const t =
          yield this._configurationService.serverAbTestManager.getAbTestValue(
            tw.s.AgentCreationPreferenceV1,
          );
        this._handleServerPreferenceExperiment(t);
        this._register(
          this._configurationService.serverAbTestManager.onDidChangeConfiguration(
            (e) => {
              this._handleServerPreferenceExperiment(
                e[tw.s.AgentCreationPreferenceV1],
              );
            },
          ),
        );
      } catch (error) {
        C.V.warn("Failed to load Agent creation preference experiment", error);
      } finally {
        this._metadataStore.setIsSettingsInitializing(false);
      }
    }).call(this);
  }
  _handleServerPreferenceExperiment(e) {
    const t = tG.m(e);
    if (this._serverPreferenceEnabled !== t) {
      this._metadataStore.setCreationPreferenceEnabled(t);
      this._activateAccount(false, true);
    }
  }
  _bindConversationPreference() {
    if (this._conversationIdProvider || this._generationWorkspaceProvider) {
      this._observeConversationPreference();
    } else {
      this._restorePreferenceForCurrentScope();
    }
  }
  _observeConversationPreference() {
    if ((e = this._conversationPreferenceDisposer) != null) {
      e.call(this);
    }
    var e;
    const t = o.mJ(
      () => [this._currentPreferenceScope(), this._isGenerationScopeLoading()],
      () => this._restorePreferenceForCurrentScope(),
      {
        fireImmediately: true,
        equals: ek.A,
      },
    );
    this._conversationPreferenceDisposer = t;
    this._register({
      dispose: t,
    });
  }
  get _usesWorkspacePreference() {
    return (
      !this._canvasPreferences &&
      this._generationWorkspaceProvider !== undefined
    );
  }
  _currentPreferenceId() {
    let e;
    let t;
    let r;
    let a;
    if (this._canvasPreferences) {
      return (
        ((t = this._conversationIdProvider) == null
          ? undefined
          : t.call(this)) || undefined
      );
    }
    if (this._usesWorkspacePreference) {
      if (
        (a = this._generationWorkspaceProvider) == null ||
        (r = a.call(this).workspaceId) == null
      ) {
        return undefined;
      }
      return r.toString();
    }
    return (
      ((e = this._conversationIdProvider) == null ? undefined : e.call(this)) ||
      undefined
    );
  }
  _isGenerationScopeLoading() {
    let e;
    return (
      this._usesWorkspacePreference &&
      !!((e = this._generationWorkspaceProvider) == null
        ? undefined
        : e.call(this).isLoading)
    );
  }
  _currentPreferenceScope() {
    const e = this._currentPreferenceId();
    if (this._usesWorkspacePreference && e) {
      return "".concat(this._userId, ":workspace:").concat(e);
    }
    return ""
      .concat(this._userId, ":")
      .concat(
        e != null ? e : this._canvasPreferences ? "canvas-new" : "default",
      );
  }
  _canEditCurrentPreference() {
    return (
      !this._serverPreferenceEnabled ||
      !this._userId ||
      (this._restorePreferenceForCurrentScope(),
      this._restoredPreferenceScope === this._currentPreferenceScope())
    );
  }
  _restorePreferenceForCurrentScope() {
    if (this._serverPreferenceEnabled && this._userId) {
      if (this._isGenerationScopeLoading()) {
        this._invalidateRestore();
        this._restoredPreferenceScope = null;
        this._metadataStore.setIsSettingsRestoring(true);
        return;
      }
      const e = this._currentPreferenceId();
      const t = this._currentPreferenceScope();
      if (
        t !== this._restoredPreferenceScope &&
        t !== this._restoringPreferenceScope
      ) {
        this._invalidateRestore();
        this._restoredPreferenceScope = null;
        const r = this._draftConversationPreferences.get(t);
        if (r) {
          this._applyServerPreference(r);
          this._restoredPreferenceScope = t;
          return;
        }
        if (this._canvasPreferences && !e) {
          this._applyServerPreference(tj.oS());
          this._restoredPreferenceScope = t;
          return;
        }
        this._restoringPreferenceScope = t;
        this._metadataStore.setIsSettingsRestoring(true);
        this._pendingPreferenceRestore = this._restoreServerPreferences(
          e,
          t,
          this._serverPreferenceSerial,
        );
        this._pendingPreferenceRestore.catch(() => undefined);
      }
    }
  }
  _captureCurrentSettings() {
    return i._(a._({}, eC(this._dataStore.generatorSettings)), {
      videoSettingsConfigured: this._dataStore.videoSettingsConfigured,
    });
  }
  _savePreferences() {
    if (this._serverPreferenceEnabled) {
      this._saveServerPreferences();
    } else {
      this._preferences = {
        mode: this._dataStore.manualSettingsEnabled ? "manual" : "auto",
        manualSettings: this._manualSettings,
      };
      this._writePreferences();
    }
  }
  _writePreferences() {
    if (this._userId && this._preferences) {
      try {
        P.b.setItem(
          "generator_agentic_preferences_".concat(this._userId),
          JSON.stringify(this._preferences),
        );
      } catch (error) {
        C.V.warn("Failed to save Agent parameter preferences", error);
      }
    }
  }
  _saveServerPreferences() {
    if (
      this._userId &&
      this._restoredPreferenceScope === this._currentPreferenceScope()
    ) {
      let e;
      const t = (e = this._serverPreference) != null ? e : tj.oS();
      this._serverPreference = t;
      const r = this._currentPreferenceId();
      const a = this._currentPreferenceScope();
      if (this._draftConversationPreferences.has(a)) {
        this._draftConversationPreferences.set(a, structuredClone(t));
      }
      (r
        ? this._updateScopedPreference(r, t)
        : this._updateDefaultPreference(t)
      ).catch((e) => {
        C.V.warn("Failed to save server Agent creation preference", e);
      });
    }
  }
  _updateDefaultPreference(e) {
    return this._queuePreferenceWrite(e);
  }
  _updateScopedPreference(e, t) {
    return this._queuePreferenceWrite(t, e);
  }
  _writeScope(e) {
    return ""
      .concat(this._userId, ":")
      .concat(
        e
          ? `${this._usesWorkspacePreference ? "workspace" : "conversation"}:`.concat(
              e,
            )
          : "default",
      );
  }
  _queuePreferenceWrite(e, t) {
    const _preferenceLifecycle = this._preferenceLifecycle;
    const _usesWorkspacePreference = this._usesWorkspacePreference;
    const i = this._writeScope(t);
    const n = structuredClone(e);
    const o = () =>
      G._(function* () {
        if (
          _preferenceLifecycle !== this._preferenceLifecycle ||
          !this._serverPreferenceEnabled
        ) {
          throw Error("Agent creation preference owner changed");
        }
        const e = t ? this._savedPreferencesByScope.get(i) : undefined;
        if (e && ek.A(e.image, n.image) && ek.A(e.video, n.video)) {
          return e;
        }
        try {
          const o = yield this._unwrapPreference(
            t
              ? _usesWorkspacePreference
                ? this._preferenceRepository.updateWorkspaceCreationPreference(
                    Number(t),
                    n,
                  )
                : this._preferenceRepository.updateConversationCreationPreference(
                    t,
                    n,
                  )
              : this._preferenceRepository.updateDefaultCreationPreference(n),
          );
          if (t && _preferenceLifecycle === this._preferenceLifecycle) {
            this._savedPreferencesByScope.set(i, n);
          }
          return o;
        } catch (error) {
          if (_preferenceLifecycle === this._preferenceLifecycle) {
            this._savedPreferencesByScope.delete(i);
          }
          throw error;
        }
      }).call(this);
    const s = this._preferenceWrites.get(i);
    const l = s ? s.then(o) : o();
    const c = l.then(
      () => undefined,
      () => undefined,
    );
    this._preferenceWrites.set(i, c);
    c.then(() => {
      if (this._preferenceWrites.get(i) === c) {
        this._preferenceWrites.delete(i);
      }
    });
    return l;
  }
  _unwrapPreference(e) {
    return G._(function* () {
      const t = yield e;
      if (!t.ok) {
        throw Error(
          "creation preference request failed: "
            .concat(t.code, " ")
            .concat(t.msg),
        );
      }
      return t.value;
    })();
  }
  _recordServerPreferenceEdits(e) {
    let t;
    const r = structuredClone(
      (t = this._serverPreference) != null ? t : tj.oS(),
    );
    const { imageSettings, videoSettings } = this._captureCurrentSettings();
    e.forEach((e) => {
      var { media, field } = e;
      if (media === "image") {
        if (field === "model") {
          r.image.model = tx(!!imageSettings.modelKey, imageSettings.modelKey);
        } else if (field === "aspectRatio") {
          r.image.aspectRatio = tx(
            !!imageSettings.aspectRatio,
            imageSettings.aspectRatio,
          );
        } else {
          r.image.resolution = tx(
            !!imageSettings.resolution,
            imageSettings.resolution,
          );
        }
      } else if (field === "model") {
        r.video.model = tx(!!videoSettings.modelKey, videoSettings.modelKey);
      } else if (field === "aspectRatio") {
        r.video.aspectRatio = tx(
          !!videoSettings.aspectRatio,
          videoSettings.aspectRatio,
        );
      } else {
        r.video.resolution = tx(
          !!videoSettings.resolution,
          videoSettings.resolution,
        );
      }
    });
    this._serverPreference = r;
  }
  constructor(e, t, r, a, i, n, o) {
    super();
    this._manager = e;
    this._dataStore = t;
    this._metadataStore = r;
    this._accountService = a;
    this._notificationService = i;
    this._configurationService = n;
    this._containerService = o;
    this._initialized = false;
    this._manualSettings = null;
    this._autoSettings = eL();
    this._usesAutoDefaults = true;
    this._modelConfigReady = new Promise((resolve) => {
      this._resolveModelConfigReady = resolve;
    });
    this._serverPreferenceSerial = 0;
    this._restoreToken = Symbol();
    this._restoredPreferenceScope = null;
    this._restoringPreferenceScope = null;
    this._preferenceLifecycle = Symbol();
    this._preferenceWrites = new Map();
    this._savedPreferencesByScope = new Map();
    this._draftConversationPreferences = new Map();
    this._canvasPreferences = false;
    this._initServerPreferenceExperiment();
    this._activateAccount();
    this._register(
      this._accountService.onDidLogin(() => this._activateAccount()),
    );
    this._register(
      this._accountService.onDidLogout(() => this._activateAccount(true)),
    );
    this._register(
      this._accountService.onDidChangeProfile(() => this._activateAccount()),
    );
    this._register({
      dispose: () => {
        var e;
        var t;
        this._preferenceLifecycle = Symbol();
        this._invalidateRestore();
        if ((e = this._resolveModelConfigReady) != null) {
          e.call(this);
        }
        if ((t = this._conversationPreferenceDisposer) != null) {
          t.call(this);
        }
      },
    });
  }
}
tO = n.Cg(
  [
    n.Qj(3, s.c),
    n.Qj(4, d.Ot),
    n.Qj(5, v.a),
    n.Qj(6, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      typeof AgenticGeneratorDataStore === "undefined"
        ? Object
        : AgenticGeneratorDataStore,
      typeof AgenticGeneratorMetadataStore === "undefined"
        ? Object
        : AgenticGeneratorMetadataStore,
      s.c === undefined ? Object : s.c,
      d.Ot === undefined ? Object : d.Ot,
      v.a === undefined ? Object : v.a,
      u._ === undefined ? Object : u._,
    ]),
  ],
  tO,
);
const tU = require("sN5");
const tV = require("aoz");
class tN {
  get librarySkills() {
    return this._manager.skillManager.metadata.librarySkills;
  }
  get manageVisibleSkills() {
    return this._manager.skillManager.metadata.manageVisibleSkills;
  }
  get isSkillsLoading() {
    return this._manager.skillManager.metadata.isSkillsLoading;
  }
  get hasLoadedOnce() {
    return this._manager.skillManager.metadata.hasLoadedOnce;
  }
  get searchKeyword() {
    return this._manager.skillManager.metadata.searchKeyword;
  }
  get updatingSkillStatusIdSet() {
    return this._manager.skillManager.metadata.updatingSkillStatusIdSet;
  }
  clearSearchKeyword() {
    this._manager.skillManager.clearSearchKeyword();
  }
  setManageSearchKeyword(e) {
    this._manager.skillManager.setManageSearchKeyword(e);
  }
  setSkillActive(e, t) {
    return this._manager.skillManager.setSkillActive(e, t);
  }
  updateSkill(e, t) {
    return this._manager.skillManager.updateSkill(e, t);
  }
  deleteSkill(e) {
    return this._manager.skillManager.deleteSkill(e);
  }
  reportEditorOpen(e) {
    this._manager.reportManager.reportSkillManageShow(e);
  }
  reportCloseList() {
    this._manager.reportManager.reportSkillManageCloseList();
  }
  reportCloseConfirm(e, t) {
    this._manager.reportManager.reportSkillManageCloseConfirm(e, t);
  }
  reportCloseEditCancel(e, t) {
    this._manager.reportManager.reportSkillManageCloseEditCancel(e, t);
  }
  reportCreateNew() {
    this._manager.reportManager.reportSkillManageCreateNew();
  }
  reportEdit(e, t) {
    this._manager.reportManager.reportSkillManageEdit(e, t);
  }
  reportActivate(e, t, r, a) {
    this._manager.reportManager.reportSkillManageActivate(e, t, r, a);
  }
  reportDeactivate(e, t, r, a) {
    this._manager.reportManager.reportSkillManageDeactivate(e, t, r, a);
  }
  reportDownload(e, t, r) {
    this._manager.reportManager.reportSkillManageDownload(e, t, r);
    this._manager.reportManager.reportSkillExport(e, t, r);
  }
  reportDeleteConfirm(e, t) {
    this._manager.reportManager.reportSkillManageDeleteConfirm(e, t);
  }
  reportSave(e, t, r, a) {
    this._manager.reportManager.reportSkillManageSave(e, t, r, a);
  }
  reportInstructionAdjust() {
    this._manager.reportManager.reportSkillMarkdownAdjust();
  }
  constructor(e) {
    this._manager = e;
  }
}
class tK extends tU.C {
  constructor(e, t, r) {
    super(new tN(e), t, r);
  }
}
tK = n.Cg(
  [
    n.Qj(1, tV.j),
    n.Qj(2, d.Ot),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      tV.j === undefined ? Object : tV.j,
      d.Ot === undefined ? Object : d.Ot,
    ]),
  ],
  tK,
);
const tz = require("./module-Cvm_2.js");
const tW = require("cO");
const tB = require("cs");
const tQ = require("crc");
const tq = require("HR");
const tH = require("KI");
const tJ = require("xLi");
const tZ = require("zOR");
const t$ = require("lNt");
const tY = require("Rcl");
class tX {
  get isIntroductionValid() {
    return !this.isIntroductionEnabled || t$.WA(this.introduction);
  }
  get hasUploadingMedia() {
    return this.mediaItems.some((e) => e.uploadStatus === "uploading");
  }
  get hasMediaUploadError() {
    return this.mediaItems.some((e) => {
      var t;
      return (
        e.uploadStatus === "error" ||
        ((t = e.customCover) == null ? undefined : t.uploadStatus) === "error"
      );
    });
  }
  get hasUploadingCover() {
    return this.mediaItems.some((e) => {
      var t;
      return (
        ((t = e.customCover) == null ? undefined : t.uploadStatus) ===
        "uploading"
      );
    });
  }
  get hasUnavailableVideoCover() {
    return this.mediaItems.some(
      (e) =>
        e.type === "video" &&
        (e.customCover
          ? e.customCover.uploadStatus !== "uploaded" ||
            !e.customCover.resourceId
          : e.uploadStatus === "uploaded" && !e.defaultCoverUri),
    );
  }
  get categoryId() {
    let e;
    if ((e = this.categoryIds[0]) != null) {
      return e;
    }
    return "";
  }
  get selectedCategoryTitles() {
    return this.categories.flatMap((e) => {
      if (this.categoryIds.includes(e.id)) {
        return [e.title];
      }
      return [];
    });
  }
  get hasIncompleteSkillInfo() {
    let e;
    return (
      !((e = this.skill) == null ? undefined : e.name.trim()) ||
      !this.skill.description.trim() ||
      !this.skill.instruction.trim()
    );
  }
  get isSubmitDisabled() {
    return (
      this.hasIncompleteSkillInfo ||
      !this.isIntroductionValid ||
      this.isSubmitting ||
      this.hasUploadingMedia ||
      this.hasUploadingCover ||
      this.hasMediaUploadError ||
      this.hasUnavailableVideoCover ||
      !this.mediaItems.length ||
      !this.categoryIds.length ||
      this.categoryIds.length > this.maxSelectableCategoryCount
    );
  }
  initialize(e, t) {
    const r =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    this.skill = e;
    this.isTest = t;
    this.isIntroductionEnabled = r;
    this.introduction = "";
  }
  setIntroduction(e) {
    this.introduction = e;
  }
  setCategoriesLoading(e) {
    this.isCategoriesLoading = e;
  }
  setCategories(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tY.tM;
    const r = e.filter((e) => !e.operationOnly);
    this.categories = r;
    this.maxSelectableCategoryCount = tY.ys(t);
    this.categoryIds = this.categoryIds.filter((e) =>
      r.some((t) => t.id === e),
    );
  }
  setCategoryIds(e) {
    this.categoryIds = tY.xc(e);
  }
  trySetCategoryIds(e) {
    const t = tY.xc(e);
    return (
      !(t.length > this.maxSelectableCategoryCount) &&
      ((this.categoryIds = t), true)
    );
  }
  setCategoryId(e) {
    this.setCategoryIds(e ? [e] : []);
  }
  setIsContentPublic(e) {
    this.isContentPublic = e;
  }
  setSubmitting(e) {
    this.isSubmitting = e;
  }
  addUploadingMediaItems(e) {
    this.mediaItems = [...this.mediaItems, ...e];
  }
  markMediaUploading(e) {
    this.mediaItems = this.mediaItems.map((t) => {
      if (t.id !== e) {
        return t;
      }
      var { uploadStatus, resourceId, errorMessage } = t;
      var s = tc._(t, ["uploadStatus", "resourceId", "errorMessage"]);
      return i._(a._({}, s), {
        uploadStatus: "uploading",
        uploadProgress: undefined,
      });
    });
  }
  setMediaUploadProgress(e, t) {
    const r = Math.round(Math.min(100, Math.max(0, t)));
    this.mediaItems = this.mediaItems.map((t) => {
      if (
        t.id !== e ||
        t.uploadStatus !== "uploading" ||
        (t.uploadProgress !== undefined && t.uploadProgress > r)
      ) {
        return t;
      }
      return i._(a._({}, t), {
        uploadProgress: r,
      });
    });
  }
  setVideoMetadata(e, t, r) {
    this.mediaItems = this.mediaItems.map((n) => {
      if (n.id === e && n.type === "video") {
        return i._(a._({}, n), {
          duration: t != null ? t : n.duration,
          defaultCoverPreviewUrl: r != null ? r : n.defaultCoverPreviewUrl,
        });
      }
      return n;
    });
  }
  markMediaUploaded(e, t, r) {
    this.mediaItems = this.mediaItems.map((n) => {
      if (n.id !== e) {
        return n;
      }
      var { uploadStatus, resourceId, errorMessage } = n;
      var c = tc._(n, ["uploadStatus", "resourceId", "errorMessage"]);
      return i._(a._({}, c), {
        uploadStatus: "uploaded",
        uploadProgress: 100,
        resourceId: t,
        defaultCoverUri: r != null ? r : c.defaultCoverUri,
      });
    });
  }
  markMediaFailed(e, t) {
    this.mediaItems = this.mediaItems.map((r) => {
      if (r.id !== e) {
        return r;
      }
      var { uploadStatus, resourceId, errorMessage } = r;
      var l = tc._(r, ["uploadStatus", "resourceId", "errorMessage"]);
      return i._(a._({}, l), {
        uploadStatus: "error",
        errorMessage: t,
      });
    });
  }
  setCustomCoverUploading(e, customCover) {
    this.mediaItems = this.mediaItems.map((r) => {
      if (r.id === e && r.type === "video") {
        return i._(a._({}, r), {
          customCover,
        });
      }
      return r;
    });
  }
  setCustomCoverUploadProgress(e, t, r) {
    const n = Math.round(Math.min(100, Math.max(0, r)));
    this.mediaItems = this.mediaItems.map((r) => {
      var o;
      if (
        r.id !== e ||
        ((o = r.customCover) == null ? undefined : o.file) !== t ||
        r.customCover.uploadStatus !== "uploading" ||
        (r.customCover.uploadProgress !== undefined &&
          r.customCover.uploadProgress > n)
      ) {
        return r;
      }
      return i._(a._({}, r), {
        customCover: i._(a._({}, r.customCover), {
          uploadProgress: n,
        }),
      });
    });
  }
  markCustomCoverUploaded(e, t, r) {
    this.mediaItems = this.mediaItems.map((n) => {
      var o;
      if (
        n.id === e &&
        ((o = n.customCover) == null ? undefined : o.file) === t
      ) {
        return i._(a._({}, n), {
          customCover: i._(a._({}, n.customCover), {
            uploadStatus: "uploaded",
            uploadProgress: 100,
            resourceId: r,
          }),
        });
      }
      return n;
    });
  }
  markCustomCoverFailed(e, t, r) {
    this.mediaItems = this.mediaItems.map((n) => {
      var o;
      if (
        n.id === e &&
        ((o = n.customCover) == null ? undefined : o.file) === t
      ) {
        return i._(a._({}, n), {
          customCover: i._(a._({}, n.customCover), {
            uploadStatus: "error",
            errorMessage: r,
          }),
        });
      }
      return n;
    });
  }
  removeCustomCover(e) {
    let t;
    this.mediaItems = this.mediaItems.map((r) => {
      if (r.id !== e || !r.customCover) {
        return r;
      }
      t = r.customCover;
      var { customCover } = r;
      return tc._(r, ["customCover"]);
    });
    return t;
  }
  removeMedia(e) {
    const t = this.mediaItems.find((t) => t.id === e);
    this.mediaItems = this.mediaItems.filter((t) => t.id !== e);
    return t;
  }
  reset() {
    this.skill = undefined;
    this.introduction = "";
    this.isIntroductionEnabled = false;
    this.isTest = false;
    this.categories = [];
    this.isCategoriesLoading = false;
    this.categoryIds = [];
    this.maxSelectableCategoryCount = tY.tM;
    this.mediaItems = [];
    this.isContentPublic = true;
    this.isSubmitting = false;
  }
  constructor() {
    this.skill = undefined;
    this.isTest = false;
    this.categories = [];
    this.isCategoriesLoading = false;
    this.categoryIds = [];
    this.maxSelectableCategoryCount = tY.tM;
    this.mediaItems = [];
    this.isContentPublic = true;
    this.isSubmitting = false;
    this.introduction = "";
    this.isIntroductionEnabled = false;
    o.l_(this);
  }
}
const t0 = require("./module-op.js");
const t1 = "upload failed";
const t2 = tQ.A(5);
const t3 = {
  categoryLoadFailed: H.Ay.t(
    "skill_publish_toast_category_load_failed",
    {},
    "Something went wrong. Please refresh and try again.",
  ),
  mediaCountLimit: H.Ay.t(
    "skill_publish_dialog_toast_10_pic_max",
    {},
    "Upload up to 10 images to showcase your skill",
  ),
  mixedMediaUploadRule: H.Ay.t(
    "skill_publish_dialog_toast_video_or_pic",
    {},
    "Can't upload images and a video together.",
  ),
  mediaSelectionRule: H.Ay.t(
    "skill_publish_dialog_hover_info",
    {},
    "Upload 1 video or up to 10 images to showcase your skill",
  ),
  duplicateName: H.Ay.t(
    "skill_publish_toast_duplicate_name",
    {},
    "A skill with this name already exists. To post it, choose a different name and try again.",
  ),
  publishFailed: H.Ay.t(
    "skill_publish_toast_publish_failed",
    {},
    "Couldn't post skill. Please try again.",
  ),
  categoryCountLimit: (count) =>
    H.Ay.t(
      "skill_publish_toast_max_tag_count",
      {
        count,
      },
      "Select up to {count} categories that best match your skill for more relevant recommendations",
    ),
  coverSizeExceeded: H.Ay.t(
    "competition_apply_error_upload_maxsize",
    {},
    "Upload a cover image smaller than 5 MB.",
  ),
  invalidCover: H.Ay.t(
    "competition_apply_error_upload_format",
    {},
    "Couldn't read this image. Choose another file and try again.",
  ),
};
class t4 extends l.jG {
  get data() {
    return this._dataStore;
  }
  dispose() {
    this.reset();
    super.dispose();
  }
  _uploadMedia(e) {
    return G._(function* () {
      let t;
      const r = this._dataStore.mediaItems.find((t) => t.id === e);
      if (r) {
        const { file, type } = r;
        const n = this._sessionGeneration;
        this._cancelUpload(this._mediaUploadCancellationTokens, e);
        const o = new tB.Q();
        this._mediaUploadCancellationTokens.set(e, o);
        const s = () =>
          n === this._sessionGeneration &&
          this._mediaUploadCancellationTokens.get(e) === o;
        this._dataStore.markMediaUploading(e);
        try {
          if (type === "image") {
            const l = yield this._uploadService.uploadImage(
              {
                file,
                cancellationToken: o.token,
              },
              {
                skipCache: true,
                onProgress: (t) => {
                  if (s()) {
                    this._dataStore.setMediaUploadProgress(e, t);
                  }
                },
              },
            );
            if (!s()) {
              return;
            }
            if (!l.ok) {
              return void this._dataStore.markMediaFailed(e, l.msg || t1);
            }
            t = l.value.uri;
          } else {
            const c = yield this._uploadService.uploadVideo(
              {
                file,
                cancellationToken: o.token,
              },
              {
                skipCache: true,
                onProgress: (t) => {
                  if (s()) {
                    this._dataStore.setMediaUploadProgress(e, t);
                  }
                },
                uploaderSettings: {
                  actions: [
                    {
                      name: "GetMeta",
                    },
                    {
                      name: "Snapshot",
                      input: {
                        SnapshotTime: 0,
                      },
                    },
                  ],
                },
              },
            );
            if (!s()) {
              return;
            }
            if (!c.ok) {
              return void this._dataStore.markMediaFailed(e, c.msg || t1);
            }
            t = c.value.vid;
            if (typeof c.value.duration === "number") {
              this._dataStore.setVideoMetadata(e, c.value.duration);
            }
            this._dataStore.markMediaUploaded(e, t, c.value.posterUri);
            return;
          }
          if (!t) {
            return void this._dataStore.markMediaFailed(e, t1);
          }
          this._dataStore.markMediaUploaded(e, t);
        } catch (t) {
          if (s()) {
            this._dataStore.markMediaFailed(e, t1);
          }
        } finally {
          if (this._mediaUploadCancellationTokens.get(e) === o) {
            this._mediaUploadCancellationTokens.delete(e);
          }
        }
      }
    }).call(this);
  }
  _prepareVideoPreview(e, t) {
    return G._(function* () {
      const _sessionGeneration = this._sessionGeneration;
      const [a, i] = yield Promise.all([
        tq.H(t),
        tH.$(t, {
          type: "image/jpeg",
          quality: 0.9,
          timeoutMs: 10000,
        }),
      ]);
      if (
        _sessionGeneration === this._sessionGeneration &&
        this._dataStore.mediaItems.find((r) => r.id === e && r.file === t)
      ) {
        const n = i ? URL.createObjectURL(i) : undefined;
        this._dataStore.setVideoMetadata(
          e,
          a == null ? undefined : a.duration,
          n,
        );
      }
    }).call(this);
  }
  _setVideoCover(e, t) {
    return G._(function* () {
      if (t0.dx(t) !== "image") {
        return void this._notificationService.warning(t3.invalidCover);
      }
      if (t.size > t2) {
        return void this._notificationService.warning(t3.coverSizeExceeded);
      }
      if (!(yield this._canPreviewImage(t))) {
        return void this._notificationService.warning(t3.invalidCover);
      }
      const r = this._dataStore.mediaItems.find(
        (t) => t.id === e && t.type === "video",
      );
      if (r) {
        const a = r.customCover;
        const previewUrl = URL.createObjectURL(t);
        this._dataStore.setCustomCoverUploading(e, {
          file: t,
          fileName: t.name,
          previewUrl,
          uploadStatus: "uploading",
        });
        if (a) {
          URL.revokeObjectURL(a.previewUrl);
        }
        if (yield this._uploadVideoCover(e, t)) {
          const { skill } = this._dataStore;
          if (skill) {
            this._agenticGeneratorManager.reportManager.reportSkillPublishUpload(
              skill,
              "cover_setting_upload_click",
            );
          }
        }
      }
    }).call(this);
  }
  _uploadVideoCover(e, t) {
    return G._(function* () {
      const _sessionGeneration = this._sessionGeneration;
      this._cancelUpload(this._coverUploadCancellationTokens, e);
      const a = new tB.Q();
      this._coverUploadCancellationTokens.set(e, a);
      const i = () =>
        _sessionGeneration === this._sessionGeneration &&
        this._coverUploadCancellationTokens.get(e) === a;
      try {
        const n = yield this._uploadService.uploadImage(
          {
            file: t,
            cancellationToken: a.token,
          },
          {
            skipCache: true,
            onProgress: (r) => {
              if (i()) {
                this._dataStore.setCustomCoverUploadProgress(e, t, r);
              }
            },
          },
        );
        if (!i()) {
          return false;
        }
        if (!n.ok || !n.value.uri) {
          this._dataStore.markCustomCoverFailed(e, t, n.ok ? t1 : n.msg || t1);
          return false;
        }
        this._dataStore.markCustomCoverUploaded(e, t, n.value.uri);
        return true;
      } catch (r) {
        if (i()) {
          this._dataStore.markCustomCoverFailed(e, t, t1);
        }
        return false;
      } finally {
        if (this._coverUploadCancellationTokens.get(e) === a) {
          this._coverUploadCancellationTokens.delete(e);
        }
      }
    }).call(this);
  }
  _canPreviewImage(e) {
    const t = URL.createObjectURL(e);
    return new Promise((resolve) => {
      var r = document.createElement("img");
      var a = false;
      var i = (r, i) => {
        if (!a) {
          a = true;
          if (i !== undefined) {
            window.clearTimeout(i);
          }
          URL.revokeObjectURL(t);
          resolve(r);
        }
      };
      var n = window.setTimeout(() => i(false), 10000);
      r.onload = () => i(true, n);
      r.onerror = () => i(false, n);
      r.src = tW.m(t, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWJWcFhSakJr$0$wc1kzaz$hb%l5TlRC-$Z6$Xd%RmRr-kdKdFZubFpXRkoyWTJrNWJWcFhSakJr$0$wc1kzaz$hRm95$m5Wa1IyeHF%RmRr-kdKdFZubFpXRkoyWTJrNWR*bFhO$2hhTWxaN$kzaz$hRm95$m5Wa1IyeHF%RmRr-kdKdFZubFpXRkoyWTJre*$tRXliSE5p%Xp*M1p*ZEtjMkZZ$*05T$Z6Rm9ZbTFH-mxwW$N-$mtTRT$vWTIxa01XTjNQ$DA9",
      });
    });
  }
  _revokeMediaPreviewUrls(e) {
    URL.revokeObjectURL(e.previewUrl);
    if (e.defaultCoverPreviewUrl) {
      URL.revokeObjectURL(e.defaultCoverPreviewUrl);
    }
    if (e.customCover) {
      URL.revokeObjectURL(e.customCover.previewUrl);
    }
  }
  _cancelUpload(e, t) {
    let r;
    if ((r = e.get(t)) != null) {
      r.cancel();
    }
    e.delete(t);
  }
  _cancelUploads(e) {
    e.forEach((e) => e.cancel());
    e.clear();
  }
  constructor(e, t, r, n) {
    var o;
    var s;
    super();
    o = this;
    s = this;
    this._agenticGeneratorManager = e;
    this._skillDataService = t;
    this._uploadService = r;
    this._notificationService = n;
    this._dataStore = new tX();
    this._mediaUploadCancellationTokens = new Map();
    this._coverUploadCancellationTokens = new Map();
    this._sessionGeneration = 0;
    this.initialize = function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      o.reset();
      o._dataStore.initialize(e, t, r);
      o._agenticGeneratorManager.reportManager.reportSkillPublishPanelShow(e);
      o.fetchCategories();
    };
    this.reset = () => {
      this._sessionGeneration += 1;
      this._cancelUploads(this._mediaUploadCancellationTokens);
      this._cancelUploads(this._coverUploadCancellationTokens);
      this._dataStore.mediaItems.forEach((e) =>
        this._revokeMediaPreviewUrls(e),
      );
      this._dataStore.reset();
    };
    this.fetchCategories = () =>
      G._(function* () {
        if (s._dataStore.skill && !s._dataStore.isCategoriesLoading) {
          const e = s._sessionGeneration;
          s._dataStore.setCategoriesLoading(true);
          try {
            const t = yield s._skillDataService.fetchMarketSkillCategories();
            if (e !== s._sessionGeneration) {
              return;
            }
            if (!t.ok) {
              return void s._notificationService.warning(t3.categoryLoadFailed);
            }
            s._dataStore.setCategories(
              t.value.categories,
              t.value.maxSelectableCategoryCount,
            );
          } catch (t) {
            if (e === s._sessionGeneration) {
              s._notificationService.warning(t3.categoryLoadFailed);
            }
          } finally {
            if (e === s._sessionGeneration) {
              s._dataStore.setCategoriesLoading(false);
            }
          }
        }
      })();
    this.setCategoryId = (e) => {
      this.setCategoryIds(e ? [e] : []);
    };
    this.setCategoryIds = (e) => {
      if (!this._dataStore.trySetCategoryIds(e)) {
        this._notificationService.warning(
          t3.categoryCountLimit(this._dataStore.maxSelectableCategoryCount),
        );
      }
    };
    this.setIsContentPublic = (e) => {
      this._dataStore.setIsContentPublic(e);
    };
    this.setIntroduction = (e) => {
      this._dataStore.setIntroduction(e);
    };
    this.reportUploadClick = () => {
      var { skill } = this._dataStore;
      if (skill) {
        this._agenticGeneratorManager.reportManager.reportSkillPublishUpload(
          skill,
          "upload_click",
        );
      }
    };
    this.addMediaFiles = (e) => {
      if (e.length) {
        var { mediaItems } = this._dataStore;
        var r = mediaItems.some((e) => e.type === "image");
        if (mediaItems.some((e) => e.type === "video")) {
          return void this._notificationService.warning(t3.mediaSelectionRule);
        }
        var a = t0.Ah - mediaItems.length;
        if (a <= 0) {
          return void this._notificationService.warning(t3.mediaCountLimit);
        }
        var i = e.flatMap((e) => {
          var t = t0.dx(e);
          if (t) {
            return [
              {
                file: e,
                type: t,
              },
            ];
          }
          return [];
        });
        var n = i.some((e) => e.type === "image");
        var o = i.filter((e) => e.type === "video");
        if ((r || n) && o.length) {
          return void this._notificationService.warning(
            t3.mixedMediaUploadRule,
          );
        }
        if (o.length > 1) {
          return void this._notificationService.warning(t3.mediaSelectionRule);
        }
        var s = i.slice(0, a);
        if (i.length > a) {
          this._notificationService.warning(t3.mediaCountLimit);
        }
        var l = s.map((e) => {
          var { file, type } = e;
          return {
            id: t0.dF(),
            file,
            fileName: file.name,
            type,
            previewUrl: URL.createObjectURL(file),
            uploadStatus: "uploading",
            uploadProgress: undefined,
          };
        });
        if (l.length) {
          this._dataStore.addUploadingMediaItems(l);
          l.forEach((e) => {
            if (e.type === "video") {
              this._prepareVideoPreview(e.id, e.file);
            }
            this._uploadMedia(e.id);
          });
        }
      }
    };
    this.removeMedia = (e) => {
      this._cancelUpload(this._mediaUploadCancellationTokens, e);
      this._cancelUpload(this._coverUploadCancellationTokens, e);
      var t = this._dataStore.removeMedia(e);
      if (t) {
        this._revokeMediaPreviewUrls(t);
        var r;
        var { skill } = this._dataStore;
        if (
          skill &&
          ((r = t.customCover) == null ? undefined : r.uploadStatus) ===
            "uploaded"
        ) {
          this._agenticGeneratorManager.reportManager.reportSkillPublishCoverDelete(
            skill,
          );
        }
      }
    };
    this.retryMediaUpload = (e) => {
      if (this._dataStore.mediaItems.some((t) => t.id === e)) {
        this._uploadMedia(e);
      }
    };
    this.setVideoCoverFile = (e, t) => {
      this._setVideoCover(e, t);
    };
    this.retryVideoCoverUpload = (e) => {
      var t = this._dataStore.mediaItems.find((t) => t.id === e);
      var r = t == null ? undefined : t.customCover;
      if (r) {
        this._dataStore.setCustomCoverUploading(
          e,
          i._(a._({}, r), {
            uploadStatus: "uploading",
            uploadProgress: undefined,
            resourceId: undefined,
            errorMessage: undefined,
          }),
        );
        this._uploadVideoCover(e, r.file);
      }
    };
    this.restoreDefaultVideoCover = (e) => {
      this._cancelUpload(this._coverUploadCancellationTokens, e);
      var t = this._dataStore.removeCustomCover(e);
      if (t) {
        URL.revokeObjectURL(t.previewUrl);
        var { skill } = this._dataStore;
        if (skill && t.uploadStatus === "uploaded") {
          this._agenticGeneratorManager.reportManager.reportSkillPublishCoverReset(
            skill,
          );
        }
      }
    };
    this.submit = () =>
      G._(function* () {
        if (s._dataStore.isSubmitting) {
          return "ignored";
        }
        const e = t0.ru(s.data);
        if (!e.ok) {
          if (e.msg === "unsupported") {
            s._notificationService.warning(t3.publishFailed);
          }
          return "invalid";
        }
        const { skill } = s._dataStore;
        if (skill) {
          var r;
          var n;
          var o;
          let l;
          const c = s._dataStore.mediaItems[0];
          const d =
            c.type === "video" &&
            ((l = c.customCover) == null ? undefined : l.uploadStatus) ===
              "uploaded"
              ? "cover_setting_upload_click"
              : "upload_click";
          s._agenticGeneratorManager.reportManager.reportSkillPublish(
            skill,
            c.type,
            d,
            s._dataStore.categoryIds,
          );
        }
        const u = {
          skillCategory:
            s._dataStore.selectedCategoryTitles.join(",") ||
            s._dataStore.categoryIds.join(","),
          privacySetting: s._dataStore.isContentPublic ? "public" : "unpublic",
          skillName: e.value.name,
          intro: (r = e.value.introduction) != null ? r : "",
          skillImageCnt:
            (n = (o = e.value.showcaseMedia) == null ? undefined : o.length) !=
            null
              ? n
              : 0,
          skillId: skill.id,
        };
        const s__sessionGeneration = s._sessionGeneration;
        s._dataStore.setSubmitting(true);
        try {
          const g = yield s._skillDataService.publishSkill(e.value);
          if (s__sessionGeneration !== s._sessionGeneration) {
            return "ignored";
          }
          if (!g.ok) {
            s._agenticGeneratorManager.reportManager.reportSkillPublishStatus(
              i._(a._({}, u), {
                status: "fail",
                failReason: g.msg,
              }),
            );
            const m =
              g.code === tJ.$.DuplicateName
                ? t3.duplicateName
                : t3.publishFailed;
            s._notificationService.warning(m);
            return "failed";
          }
          s._agenticGeneratorManager.reportManager.reportSkillPublishStatus(
            i._(a._({}, u), {
              status: "success",
            }),
          );
          return "success";
        } catch (error) {
          if (s__sessionGeneration !== s._sessionGeneration) {
            return "ignored";
          }
          s._agenticGeneratorManager.reportManager.reportSkillPublishStatus(
            i._(a._({}, u), {
              status: "fail",
              failReason:
                error instanceof Error ? error.message : String(error),
            }),
          );
          s._notificationService.warning(t3.publishFailed);
          return "failed";
        } finally {
          if (s__sessionGeneration === s._sessionGeneration) {
            s._dataStore.setSubmitting(false);
          }
        }
      })();
  }
}
t4 = n.Cg(
  [
    n.Qj(1, tZ.M),
    n.Qj(2, tr.H),
    n.Qj(3, d.Ot),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      tZ.M === undefined ? Object : tZ.M,
      tr.H === undefined ? Object : tr.H,
      d.Ot === undefined ? Object : d.Ot,
    ]),
  ],
  t4,
);
const t5 = require("iNQ");
class t8 extends l.jG {
  validateSubjectAddition(e) {
    const { referenceResources, promptContents } = this._dataStore;
    const a = m.K(e);
    if (promptContents.some((e) => e.type === "subject" && e.id === a)) {
      return c.nj();
    }
    return tn.T({
      materials: X.G({
        resources: referenceResources,
        subjects: [...ee.I(promptContents), e],
      }),
      limits: this._metadataStore.referenceValidationLimits,
    });
  }
  _initSubjectChangeListeners() {
    this._subjectFeatureContainerService.getInstance().then((e) => {
      this._agenticGeneratorManager.referenceMentionManager.initSubjectSearch(
        e.subjectSearchManager,
      );
      var { changePromptContents } = this._agenticGeneratorManager;
      this._register(
        e.onSubjectDeleted((e) => {
          this.removeSubjectFromPrompt(m.K(e), changePromptContents);
        }),
      );
      this._register(
        e.onSubjectUpdated((e) => {
          var { oldSubject, newSubject } = e;
          var i = m.K(oldSubject);
          this.replaceSubjectInPrompt(i, newSubject, changePromptContents);
        }),
      );
    });
  }
  constructor(e, t, r, n) {
    super();
    this._agenticGeneratorManager = e;
    this._dataStore = t;
    this._metadataStore = r;
    this._subjectFeatureContainerService = n;
    this.removeSubjectFromPrompt = (e, t) => {
      t(
        this._dataStore.promptContents.filter(
          (t) => t.type !== "subject" || t.id !== e,
        ),
      );
    };
    this.replaceSubjectInPrompt = (e, t, r) => {
      r(
        this._dataStore.promptContents.map((r) => {
          if (r.type === "subject" && r.id === e) {
            return i._(a._({}, r), {
              id: m.K(t),
              subject: t,
            });
          }
          return r;
        }),
      );
    };
    this._initSubjectChangeListeners();
  }
}
t8 = n.Cg(
  [
    n.Qj(3, t5.I),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      typeof AgenticGeneratorDataStore === "undefined"
        ? Object
        : AgenticGeneratorDataStore,
      typeof AgenticGeneratorMetadataStore === "undefined"
        ? Object
        : AgenticGeneratorMetadataStore,
      t5.I === undefined ? Object : t5.I,
    ]),
  ],
  t8,
);
const t9 = require("A7");
const t7 = require("fg");
const t6 = require("./module-JTD.js");
const re = require("./module-gJ_2.js");
const rt = require("./module-J9z.js");
const rr = require("./module-Tod.js");
const ra = require("./module-sWx_3.js");
const ri = require("./module-zxd.js");
const rn = require("./module-os5.js");
const ro = require("./module-oaT.js");
const rs = require("./module-nfl.js");
const rl = require("./module-Ivx.js");
const rc = require("wZz");
const rd = require("vHh");
const ru = require("CoI");
const rh = require("Rb");
function rg(model) {
  return (
    model.statusModel.recordStatus === rh.DMLGenRecordStatus.Loading &&
    model.taskData.taskStatus !== q.NuroTaskStatus.finished &&
    model.taskData.taskStatus !== q.NuroTaskStatus.failed &&
    model.taskData.taskStatus !== q.NuroTaskStatus.cancelled
  );
}
class rm extends l.jG {
  getInferenceModelId() {
    let e;
    if (
      (e = this._agenticGeneratorManager.metadata.selectedInferenceModel) ==
      null
    ) {
      return undefined;
    }
    return e.modelId;
  }
  getCreationMode() {
    if (this._agenticGeneratorManager.metadata.creationModeSelectorEnabled) {
      return this._agenticGeneratorManager.data.creationMode;
    }
  }
  getSubmitModelParams(e) {
    if (e == null ? undefined : e.disableModelParams) {
      return {};
    }
    return {
      inferenceModelId: this.getInferenceModelId(),
      creationMode: this.getCreationMode(),
    };
  }
  getCurrentGenerateArgs() {
    return this._getAgentSettingsToGenerateParams();
  }
  getSubmitModelMetricsExtra(e) {
    if (e == null ? undefined : e.disableModelParams) {
      return {};
    }
    const selectedInferenceModel =
      this._agenticGeneratorManager.metadata.selectedInferenceModel;
    const r = this.getCreationMode();
    const a = {};
    if (selectedInferenceModel) {
      a.baseModelId = selectedInferenceModel.modelId;
      a.baseModelName = selectedInferenceModel.displayName;
    }
    if (r) {
      a.isDeepCreation = +(r === "ultra");
    }
    return a;
  }
  _getAgentSettingsToGenerateParams() {
    const e = {};
    const generatorSettings =
      this._agenticGeneratorManager.data.generatorSettings;
    const { videoSettingsConfigured } = this._agenticGeneratorManager.data;
    const { imageSettings, videoSettings } = generatorSettings;
    const n = this._agenticGeneratorManager.isCreationSelectionManual(
      "image",
      "model",
    );
    const o = this._agenticGeneratorManager.isCreationSelectionManual(
      "image",
      "aspectRatio",
    );
    const s = this._agenticGeneratorManager.isCreationSelectionManual(
      "image",
      "resolution",
    );
    const l = this._agenticGeneratorManager.isCreationSelectionManual(
      "video",
      "model",
    );
    const c = this._agenticGeneratorManager.isCreationSelectionManual(
      "video",
      "aspectRatio",
    );
    const d = this._agenticGeneratorManager.isCreationSelectionManual(
      "video",
      "resolution",
    );
    if (n || o || s) {
      e.imageArgs = this._getAgentImageArgs(imageSettings, {
        model: n,
        aspectRatio: o,
        resolution: s,
      });
    }
    if (videoSettingsConfigured && (l || c || d)) {
      e.videoArgs = this._getAgentVideoArgs(videoSettings, {
        model: l,
        aspectRatio: c,
        resolution: d,
      });
    }
    return this._normalizeGenerateArgs(e);
  }
  _getAgentImageArgs(e, t) {
    const { manualWidth, manualHeight } = e;
    const o =
      typeof manualWidth === "number" &&
      typeof manualHeight === "number" &&
      manualWidth > 0 &&
      manualHeight > 0;
    const s = ev.z(e.aspectRatio);
    const l = !e.intelligentRatio && !s && o;
    return i._(
      a._(
        {},
        t.model
          ? {
              modelKey: e.modelKey,
            }
          : {},
        t.aspectRatio
          ? {
              imageRatioType:
                e.intelligentRatio || !s
                  ? undefined
                  : this._formatAspectRatioToImageRatioType(e.aspectRatio),
              width: l ? manualWidth : undefined,
              height: l ? manualHeight : undefined,
            }
          : {},
        t.resolution && e.resolution
          ? {
              imageResolutionType: e.resolution,
            }
          : {},
      ),
      {
        intelligentRatio: !t.aspectRatio || e.intelligentRatio,
      },
    );
  }
  _getAgentVideoArgs(e, t) {
    return i._(
      a._(
        {},
        t.model
          ? {
              modelKey: e.modelKey,
            }
          : {},
        t.aspectRatio
          ? {
              videoRatioType:
                e.intelligentRatio || !ev.z(e.aspectRatio)
                  ? undefined
                  : this._formatAspectRatioToVideoRatioType(e.aspectRatio),
            }
          : {},
        t.resolution && e.resolution
          ? {
              videoResolutionType: e.resolution,
            }
          : {},
      ),
      {
        intelligentRatio: !t.aspectRatio || e.intelligentRatio,
      },
    );
  }
  _normalizeGenerateArgs(e) {
    if (e.imageArgs || e.videoArgs) {
      return e;
    }
  }
  _formatAspectRatioToImageRatioType(e) {
    switch (e) {
      case "1:1":
        return q.ImageRatioType.ImageRatioType_11;
      case "3:4":
        return q.ImageRatioType.ImageRatioType_34;
      case "4:3":
        return q.ImageRatioType.ImageRatioType_43;
      case "16:9":
        return q.ImageRatioType.ImageRatioType_169;
      case "9:16":
        return q.ImageRatioType.ImageRatioType_916;
      case "2:3":
        return q.ImageRatioType.ImageRatioType_23;
      case "3:2":
        return q.ImageRatioType.ImageRatioType_32;
      case "21:9":
        return q.ImageRatioType.ImageRatioType_219;
      default:
        J.DR(e, "Unsupported aspect ratio: ".concat(e));
    }
  }
  _formatAspectRatioToVideoRatioType(e) {
    switch (e) {
      case "1:1":
        return 1;
      case "3:4":
        return 2;
      case "4:3":
        return 4;
      case "16:9":
        return 3;
      case "9:16":
        return 5;
      case "2:3":
        return 6;
      case "3:2":
        return 7;
      case "21:9":
        return 8;
      default:
        J.DR(e, "Unsupported aspect ratio: ".concat(e));
    }
  }
  constructor(e, t, r, n, s) {
    var l;
    super();
    l = this;
    this._agenticGeneratorManager = e;
    this._contentGeneratorTaskFeatureContainerService = t;
    this._containerService = r;
    this._notificationService = n;
    this._workspaceService = s;
    this._onUserAbort = this._register(new t9.v());
    this.onUserAbort = this._onUserAbort.event;
    this.submit = (e) =>
      G._(function* () {
        let t;
        const { environment } = e;
        const { submitExternally } = environment;
        const l__agenticGeneratorManager = l._agenticGeneratorManager;
        const {
          agentConversationsManager,
          canvasProjectService,
          agenticVoiceInputManager,
        } = l__agenticGeneratorManager;
        const disableModelParams = environment.variant === "canvas";
        const { inferenceModelId, creationMode } = l.getSubmitModelParams({
          disableModelParams,
        });
        if (l__agenticGeneratorManager.metadata.submitButtonLoading) {
          return c.xz(-1, "");
        }
        if (
          l__agenticGeneratorManager.metadata.voiceInputActive &&
          !(yield agenticVoiceInputManager.stopAndWaitForIdle())
        ) {
          return c.xz(-1, "Voice stop cancelled");
        }
        const {
          metadata: { abortable },
          data: { validationResult, searchEnabled, creativeModelEnabled },
          resetInputData,
          setSubmitButtonLoading,
          referenceAuditManager,
        } = l__agenticGeneratorManager;
        if (l__agenticGeneratorManager.metadata.isSettingsRestoring) {
          return c.xz(-1, "Agent creation preferences are loading");
        }
        if (submitExternally) {
          const M =
            yield l__agenticGeneratorManager.skillManager.commitPromptSkillToLibrary();
          if (M.ok) {
            return c.xz(
              -1,
              "submission in canvas assets should not be handled internally",
              {
                submitExternally: true,
              },
            );
          }
          return M;
        }
        if (!validationResult.ok) {
          if (!abortable && validationResult.msg) {
            l._notificationService.warning(validationResult.msg);
          }
          return validationResult;
        }
        const k =
          yield l__agenticGeneratorManager.skillManager.commitPromptSkillToLibrary();
        if (!k.ok) {
          return k;
        }
        const {
          promptTextContent,
          promptContents,
          referenceResources,
          referenceTurnId,
        } = l__agenticGeneratorManager.data;
        if (
          !l._contentGeneratorTaskFeatureContainerService.loaded ||
          referenceResources.some((e) => {
            var { uri } = e;
            return !uri;
          }) ||
          (canvasProjectService && !canvasProjectService.getProjectId())
        ) {
          setSubmitButtonLoading(true);
        }
        try {
          const [A, T] = yield Promise.all([
            l._contentGeneratorTaskFeatureContainerService.getInstance(),
            l._buildReferenceContents(),
            ...referenceResources.map((e) => e.resolveUri()),
          ]);
          const G =
            canvasProjectService == null
              ? undefined
              : canvasProjectService.getProjectId();
          const w = q.NuroUtils.randomUUIDString();
          const files = referenceResources.map(l._transformResourceToNuroFile);
          const D =
            files.find((e) => e.type === q.NuroFileType.image) ||
            T.find((e) => {
              var t;
              return (
                ((t = e.file) == null ? undefined : t.type) ===
                  q.NuroFileType.image && !e.isReferenced
              );
            });
          setSubmitButtonLoading(true);
          if (!disableModelParams) {
            const F = l__agenticGeneratorManager.setGenerationWorkspaceProvider(
              () => {
                var {
                  selectedWorkspaceId,
                  isNewConversationMode,
                  isLoading,
                  hasUnresolvedWorkspaceError,
                } = l._workspaceService.data;
                return {
                  workspaceId: isNewConversationMode
                    ? undefined
                    : selectedWorkspaceId,
                  isLoading:
                    !isNewConversationMode &&
                    selectedWorkspaceId === undefined &&
                    (isLoading || hasUnresolvedWorkspaceError),
                };
              },
            );
            if (environment.workspaceStrategy === "isolated") {
              t = F;
            }
          }
          const L = yield l._workspaceService.ensureWorkspaceId();
          if (!L.ok) {
            return L;
          }
          const x = L.value;
          if (
            l._workspaceService.multiWorkspaceEnabled
              ? A.agenticTaskStore.some(
                  (e) =>
                    rg(e.task.model) && e.task.model.idModel.workspaceId === x,
                )
              : abortable
          ) {
            yield l.abort();
          }
          const E =
            agentConversationsManager == null
              ? undefined
              : agentConversationsManager.data.currentConversationId;
          const conversationId = E != null ? E : q.NuroUtils.randomUUIDString();
          try {
            yield l__agenticGeneratorManager.persistCreationPreferenceForSubmission(
              conversationId,
              x,
            );
          } catch (error) {
            C.V.warn(
              "Failed to prepare Agent creation preference for submission",
              error,
            );
            return c.xz(-1, "Agent creation preferences are not ready");
          }
          const U = A.createAIGCAgenticTask({
            projectId: G,
            conversationId,
            submitId: w,
            messageId: w,
            files,
            referenceInfo: T,
            generateArgs: l.getCurrentGenerateArgs(),
            inferenceModelId,
            creationMode,
            creativeModelEnabled,
            searchEnabled,
            workspaceId: x,
            metricsExtra: a._(
              {
                userMessageId: w,
                prompt: promptTextContent,
                isAddImage: +!!D,
                quoteTurnId: referenceTurnId,
                conversationId,
                projectId: G,
                hasRejectedAudit: +!!referenceAuditManager.hasRejectedAudit({
                  resources: referenceResources,
                }),
              },
              l._getMetricsExtraData(promptContents, promptTextContent),
              l.getSubmitModelMetricsExtra({
                disableModelParams,
              }),
            ),
          });
          if (U.ok) {
            resetInputData();
            l._agenticGeneratorManager.reportManager.resetResourceReportParams();
            t = undefined;
          } else {
            C.V.error("submit agentic task failed", U);
          }
          if (U.ok) {
            return c.TZ([U.value]);
          }
          return U;
        } catch (error) {
          C.V.error("Failed to submit Agent conversation", error);
          return c.xz(-1, "Failed to submit Agent conversation");
        } finally {
          if (t != null) {
            t();
          }
          setSubmitButtonLoading(false);
        }
      })();
    this.abort = () =>
      G._(function* () {
        const e =
          yield l._contentGeneratorTaskFeatureContainerService.getInstance();
        const t = l._getCurrentRunningTaskRecord(e);
        if (!t) {
          return c.TZ([]);
        }
        const { agentConversationsManager, canvasProjectService } =
          l._agenticGeneratorManager;
        const i =
          canvasProjectService == null
            ? undefined
            : canvasProjectService.getProjectId();
        const n =
          agentConversationsManager == null
            ? undefined
            : agentConversationsManager.data.currentConversationId;
        const {
          model: { conversationId, idModel },
        } = t.task;
        const { workspaceId } = idModel;
        return e.cancelAIGCAgenticTaskByInput({
          projectId: i,
          conversationId: conversationId || n || "",
          conversationConfig: undefined,
          submitId: "",
          messageId: "",
          text: "",
          files: [],
          referenceInfo: [],
          metricsExtra: {},
          workspaceId,
        });
      })();
    this.abortByUser = () => {
      this._onUserAbort.fire();
      return this.abort();
    };
    this._listenTaskStoreChanges = () =>
      G._(function* () {
        const e =
          yield l._contentGeneratorTaskFeatureContainerService.getInstance();
        const dispose = o.fm(() => {
          var t;
          var { contentGeneratorManager, agentConversationsManager } =
            l._agenticGeneratorManager;
          var { visibleContentGeneratorInstance } = contentGeneratorManager;
          var n =
            (t =
              visibleContentGeneratorInstance == null
                ? undefined
                : visibleContentGeneratorInstance.environment
                    .submitExternally) != null && t;
          var o =
            agentConversationsManager == null
              ? undefined
              : agentConversationsManager.data.currentConversationId;
          var multiWorkspaceEnabled = l._workspaceService.multiWorkspaceEnabled;
          var { isNewConversationMode, selectedWorkspaceId } =
            l._workspaceService.data;
          var u = false;
          if (
            n ||
            (visibleContentGeneratorInstance == null
              ? undefined
              : visibleContentGeneratorInstance.environment
                  .workspaceStrategy) === "isolated"
          ) {
            u = false;
          } else if (multiWorkspaceEnabled) {
            if (!isNewConversationMode) {
              u = e.agenticTaskStore.some(
                (e) =>
                  rg(e.task.model) &&
                  e.task.model.idModel.workspaceId === selectedWorkspaceId,
              );
            }
          } else if (agentConversationsManager) {
            u =
              !!o &&
              e.agenticTaskStore.some(
                (e) => rg(e.task.model) && e.task.model.conversationId === o,
              );
          } else if (
            !(visibleContentGeneratorInstance == null
              ? undefined
              : visibleContentGeneratorInstance.environment.submitExternally)
          ) {
            u = e.agenticTaskStore.some((e) => rg(e.task.model));
          }
          l._agenticGeneratorManager.setStreaming(u);
        });
        l._register({
          dispose,
        });
      })();
    this._getMetricsExtraData = (e, t) => {
      var r;
      var {
        reportManager: {
          resourceReportParams,
          getReferenceAIGCItemIdReportParams,
        },
        data: { referenceResources },
      } = this._agenticGeneratorManager;
      var l = e.find((e) => e.type === "skill");
      var c = l
        ? this._agenticGeneratorManager.skillManager.metadata.librarySkills.find(
            (e) => e.id === l.id,
          )
        : undefined;
      var d = c ? tg.m(c) : undefined;
      var u =
        resourceReportParams.promptSource === "suggestion"
          ? {
              promptSource:
                t === resourceReportParams.generateSuggestionText
                  ? resourceReportParams.promptSource
                  : "custom",
              generateLogId: resourceReportParams.generateLogId,
              generateSuggestion: resourceReportParams.generateSuggestion,
              generateSuggestionText:
                resourceReportParams.generateSuggestionText,
            }
          : {};
      var h = rd.y(this._containerService);
      return i._(
        a._(
          i._(
            a._(
              i._(
                a._({}, getReferenceAIGCItemIdReportParams(referenceResources)),
                {
                  lastPictureId: resourceReportParams.lastPictureId,
                  lastGenerateId: resourceReportParams.lastGenerateId,
                  referenceTemplateCnt:
                    resourceReportParams.referenceTemplateCnt,
                  referenceTemplateId: resourceReportParams.referenceTemplateId,
                  showcaseId: resourceReportParams.showcaseId,
                },
              ),
              u,
            ),
            {
              drawType: resourceReportParams.drawType,
              enterScenario: resourceReportParams.enterScenario,
              impressionId: resourceReportParams.impressionId,
              searchKeyword: resourceReportParams.searchKeyword,
              searchId: resourceReportParams.searchId,
              searchRequestId: resourceReportParams.searchRequestId,
              referenceCnt: referenceResources.length,
              skillId: d == null ? undefined : d.skillId,
              skillName: l == null ? undefined : l.displayName,
              skillSource: d == null ? undefined : d.skillSource,
              originalSkillId: d == null ? undefined : d.originalSkillId,
            },
          ),
          h,
        ),
        {
          enterFrom:
            (r = h.enterFrom) != null ? r : resourceReportParams.enterFrom,
        },
      );
    };
    this._getCurrentRunningTaskRecord = (e) =>
      e.agenticTaskStore.find((e) => {
        if (!rg(e.task.model)) {
          return false;
        }
        if (this._workspaceService.multiWorkspaceEnabled) {
          var t;
          var { isNewConversationMode, selectedWorkspaceId } =
            this._workspaceService.data;
          return (
            !isNewConversationMode &&
            e.task.model.idModel.workspaceId === selectedWorkspaceId
          );
        }
        var { agentConversationsManager, contentGeneratorManager } =
          this._agenticGeneratorManager;
        var { visibleContentGeneratorInstance } = contentGeneratorManager;
        if (
          ((t =
            visibleContentGeneratorInstance == null
              ? undefined
              : visibleContentGeneratorInstance.environment.submitExternally) !=
            null &&
            t) ||
          (visibleContentGeneratorInstance == null
            ? undefined
            : visibleContentGeneratorInstance.environment.workspaceStrategy) ===
            "isolated"
        ) {
          return false;
        }
        if (agentConversationsManager) {
          var {
            data: { currentConversationId },
          } = agentConversationsManager;
          return (
            !!currentConversationId &&
            e.task.model.conversationId === currentConversationId
          );
        }
        return true;
      });
    this._buildReferenceContents = () =>
      G._(function* () {
        const {
          canvasProjectService,
          agentConversationsManager,
          data: { promptContents, referenceRecordContents = [] },
        } = l._agenticGeneratorManager;
        yield canvasProjectService == null
          ? undefined
          : canvasProjectService.ensureProject();
        const i = (yield Promise.all(
          promptContents.map(l._buildReferenceContent),
        )).filter((e) => e !== undefined);
        if (
          agentConversationsManager &&
          !agentConversationsManager.data.currentConversationId
        ) {
          yield agentConversationsManager.ensureConversation();
        }
        return [...i, ...referenceRecordContents];
      })();
    this._buildReferenceContent = (e) =>
      G._(function* () {
        const { canvasProjectService } = l._agenticGeneratorManager;
        const r =
          canvasProjectService == null
            ? undefined
            : canvasProjectService.getProjectId();
        const a =
          canvasProjectService == null
            ? undefined
            : canvasProjectService.getDraftVersion();
        if (e.type === "reference-resource") {
          const { resource } = e;
          yield resource.resolveUri();
          const n = l._transformResourceToNuroMention(resource);
          return new q.RefContent(undefined, undefined, undefined, false, n);
        }
        if (e.type === "subject") {
          const o = t6.z(e.subject);
          const s = re.n(o);
          return new q.RefContent(undefined, undefined, undefined, false, s);
        }
        if (e.type === "reference-text") {
          if (!r || !a) {
            return;
          }
          const c = {
            type: "text",
            text: e.text,
          };
          const d = {
            layerId: e.layerId,
            projectId: r,
            version: a.toString(),
            customInfo: JSON.stringify(c),
          };
          return new q.RefContent(
            undefined,
            undefined,
            JSON.stringify(t7.w(d)),
            false,
          );
        }
        if (e.type === "reference-frame") {
          if (!r || !a) {
            return;
          }
          const u = {
            type: "frame",
            title: e.title,
          };
          const h = {
            layerId: e.layerId,
            projectId: r,
            version: a.toString(),
            customInfo: JSON.stringify(u),
          };
          return new q.RefContent(
            undefined,
            undefined,
            JSON.stringify(t7.w(h)),
            false,
          );
        }
        if (e.type === "skill") {
          return new q.RefContent(
            undefined,
            undefined,
            undefined,
            false,
            undefined,
            new q.NuroSkill(e.id, e.displayName),
          );
        }
        if (e.type !== "create-skill-template-slot") {
          return new q.RefContent(e.text, undefined, undefined, false);
        }
      })();
    this._transformResourceToNuroFile = (e) => {
      var t;
      var {
        data: { referenceResourcePromptMap },
      } = this._agenticGeneratorManager;
      switch (e.type) {
        case "video":
          return rt.U({
            id: e.id,
            vid: e.uri,
            videoUrl: e.url,
            coverUrl: (t = e.coverUrl) != null ? t : "",
            duration: e.duration,
            localFile: e.file,
            title: e.name,
          });
        case "image":
          return rr.Y(
            i._(a._({}, ru.q(e)), {
              id: e.id,
              localFile: e.file,
              prompt: referenceResourcePromptMap[e.id],
            }),
          );
        case "audio":
          return ra.V({
            id: e.id,
            vid: e.uri,
            audioUrl: e.url,
            duration: e.duration,
            localFile: e.file,
            title: e.name,
          });
        case "markdown":
        case "pdf":
        case "docx":
          return ri.W({
            id: e.id,
            uri: e.uri,
            url: e.url,
            title: e.name,
            localFile: e.file,
            format: e.type,
          });
        default:
          return J.DR(e, "Unsupported resource type");
      }
    };
    this._transformResourceToNuroMention = (e) => {
      var t;
      var r;
      var {
        data: { referenceResourcePromptMap },
      } = this._agenticGeneratorManager;
      switch (e.type) {
        case "video":
          return rn.w({
            id: e.id,
            vid: e.uri,
            videoUrl: e.url,
            coverUrl: (t = e.coverUrl) != null ? t : "",
            duration: e.duration,
            localFile: e.file,
            title: e.name,
          });
        case "image":
          return ro.i({
            id: e.id,
            imageUri: e.uri,
            imageUrl: e.url,
            localFile: e.file,
            prompt: referenceResourcePromptMap[e.id],
            width: e.width,
            height: e.height,
            title: e.name,
          });
        case "audio":
          return rs.b({
            id: e.id,
            vid: e.uri,
            audioUrl: e.url,
            duration: e.duration,
            localFile: e.file,
            title: e.name,
          });
        case "markdown":
        case "pdf":
        case "docx":
          return rl.q({
            id: e.id,
            uri: e.uri,
            url: e.url,
            title: (r = e.name) != null ? r : "",
            format: e.type,
          });
        default:
          return J.DR(e, "Unsupported resource type");
      }
    };
    this._listenTaskStoreChanges();
  }
}
rm = n.Cg(
  [
    n.Qj(1, rc.L),
    n.Qj(2, u._),
    n.Qj(3, d.Ot),
    n.Qj(4, e8.D),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      rc.L === undefined ? Object : rc.L,
      u._ === undefined ? Object : u._,
      d.Ot === undefined ? Object : d.Ot,
      e8.D === undefined ? Object : e8.D,
    ]),
  ],
  rm,
);
class rp {
  get intelligentRatio() {
    return typeof this.aspectRatio !== "string";
  }
  get videoSettings() {
    return {
      intelligentRatio: this.intelligentRatio,
      modelKey: this.modelKey,
      aspectRatio: this.aspectRatio,
      resolution: this.resolution,
    };
  }
  setAspectRatio(e) {
    this.aspectRatio = e;
  }
  setResolution(e) {
    this.resolution = e;
  }
  setModelKey(e) {
    this.modelKey = e;
  }
  constructor() {
    this.aspectRatio = eb.K.aspectRatio;
    this.modelKey = eb.K.modelKey;
    this.resolution = eb.K.resolution;
    o.l_(this);
  }
}
const r_ = require("Gr4");
const rv = require("VhU");
const rf = require("bF");
const rS = require("Sg");
const ry = require("LKF");
class rM {
  get models() {
    if (
      this._agenticGeneratorVideoSettingsManager.creationPreferenceEnabled ||
      this._models.length
    ) {
      return this._models;
    }
    return [this.fallbackModel];
  }
  get _preferenceModels() {
    let e;
    let t;
    if (this._agenticGeneratorVideoSettingsManager.creationPreferenceEnabled) {
      if ((t = this._data) == null ? undefined : t.modelKey) {
        return this.models.filter((e) => {
          var t;
          return e.key === ((t = this._data) == null ? undefined : t.modelKey);
        });
      }
      return this.models;
    }
    return [
      (e = this.models.find((e) => {
        var t;
        return e.key === ((t = this._data) == null ? undefined : t.modelKey);
      })) != null
        ? e
        : this.fallbackModel,
    ];
  }
  get aspectRatioOptions() {
    return [
      undefined,
      ...new Set(
        this._preferenceModels.flatMap((e) => {
          var t = e.fields.find((e) => e.type === eR.pH.VideoAspectRatio);
          if (t && !t.disabled) {
            return rf.$h(t.values);
          }
          return [];
        }),
      ),
    ];
  }
  get modelOptions() {
    return this.models.map((e) => {
      var { key, name, description, source, iconTag, coverUrl, iconUrl } = e;
      return {
        label: name,
        value: key,
        extra: {
          coverUrl,
          iconUrl,
          description,
          source,
          tag: iconTag,
          commercial: {
            sceneOptions: r_.I({
              scene: eO.Sk.VideoModelSwitch,
              videoDuration: 0,
              modelReqKey: key,
              reportParams: {
                cashierBusinessExtra:
                  this._agenticGeneratorVideoSettingsManager
                    .cashierBusinessExtra,
              },
            }),
            statusProps: {
              showUnitCreditFreeTrialForVip: true,
            },
          },
        },
      };
    });
  }
  get resolutionOptions() {
    let e;
    const { creationPreferenceEnabled } =
      this._agenticGeneratorVideoSettingsManager;
    if (!creationPreferenceEnabled && !this._commercialReady) {
      return [];
    }
    const r =
      creationPreferenceEnabled &&
      !((e = this._data) == null ? undefined : e.modelKey);
    const n = this._preferenceModels.flatMap((e) => {
      if (r && e.status !== undefined && e.status !== rv.nM.Online) {
        return [];
      }
      var t = e.fields.find((e) => e.type === eR.pH.Resolution);
      if (!t || t.disabled) {
        return [];
      }
      return t.values.map((t) => {
        var r;
        return {
          value: t,
          label:
            (r = rS.H5({
              model: e,
              resolution: t,
            })) != null
              ? r
              : t,
          extra: {
            commercialSceneOptions: r_.I({
              scene: eO.Sk.BasicVideoGenerateButton,
              modelReqKey: e.key,
              videoDuration: 0,
              resolution: t,
              reportParams: {
                cashierBusinessExtra:
                  this._agenticGeneratorVideoSettingsManager
                    .cashierBusinessExtra,
              },
            }),
          },
        };
      });
    });
    const o = new Map();
    for (const s of n) {
      const l = s.value.toLowerCase();
      const c = o.get(l);
      if (!c) {
        o.set(l, s);
        continue;
      }
      if (r && this._commercialReady) {
        const d =
          this._agenticGeneratorVideoSettingsManager
            .getCommerceRequiredVipPriority;
        const u = d(c.extra.commercialSceneOptions);
        const h = d(s.extra.commercialSceneOptions);
        if (h !== undefined && u !== undefined && h < u) {
          o.set(
            l,
            i._(a._({}, c), {
              extra: s.extra,
            }),
          );
        }
      }
    }
    return [...o.values()];
  }
  setCommercialReady(e) {
    this._commercialReady = e;
  }
  setDataStore(e) {
    this._data = e;
  }
  setModels(e) {
    this._models = e;
  }
  setFallbackModel(e) {
    this.fallbackModel = e;
  }
  setIsModelListLoading(e) {
    this.isModelListLoading = e;
  }
  constructor(e) {
    this._agenticGeneratorVideoSettingsManager = e;
    this._commercialReady = false;
    this._data = null;
    this._models = [];
    this.fallbackModel = ry.$;
    this.isModelListLoading = false;
    o.l_(this);
  }
}
class rk extends l.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get cashierBusinessExtra() {
    return ef.Dm(this._agenticGeneratorManager.cashierConversationId);
  }
  get creationPreferenceEnabled() {
    return this._agenticGeneratorManager.metadata.creationPreferenceEnabled;
  }
  syncModelConfig(e) {
    this._metadataStore.setIsModelListLoading(false);
    const { modelList, defaultModel, disabled } = e;
    if (defaultModel) {
      this._metadataStore.setFallbackModel(defaultModel);
    }
    if (disabled) {
      if (this.creationPreferenceEnabled) {
        this._metadataStore.setModels([]);
      }
      return;
    }
    this._metadataStore.setModels(modelList);
  }
  _changeVideoManualSettings(e, t) {
    this._agenticGeneratorManager.changeManualSettings(() => {
      e();
      this._agenticGeneratorManager.setVideoSettingsConfigured(true);
    }, t);
  }
  _setupCommercialFeatureServiceLoadedListener() {
    return G._(function* () {
      const e =
        (yield this._commercialFeatureLoaderService.getInstance()).onReadyChange(
          (e) => {
            if (e) {
              this._metadataStore.setCommercialReady(true);
            }
          },
        );
      this._register(e);
    }).call(this);
  }
  constructor(e, t) {
    super();
    this._agenticGeneratorManager = e;
    this._commercialFeatureLoaderService = t;
    this._metadataStore = new rM(this);
    this._dataStore = new rp();
    this.setAspectRatio = (e) => {
      this._dataStore.setAspectRatio(e);
    };
    this.selectAspectRatio = (e) => {
      this._changeVideoManualSettings(
        () => this.setAspectRatio(e),
        [
          {
            media: "video",
            field: "aspectRatio",
          },
        ],
      );
      this._agenticGeneratorManager.reportManager.reportAgentSwitchRatio(e);
    };
    this.setModel = (e) => {
      this._dataStore.setModelKey(e);
    };
    this.switchModel = (e) => {
      var t;
      var r;
      this._changeVideoManualSettings(
        () => this.setModel(e),
        [
          {
            media: "video",
            field: "model",
          },
        ],
      );
      this._agenticGeneratorManager.reportManager.reportAgentSwitchModel(
        (t =
          (r = this._metadataStore.modelOptions.find((t) => t.value === e)) ==
          null
            ? undefined
            : r.label) != null
          ? t
          : e || "auto",
        e || "auto",
        {
          displaySettingsTab: "video",
        },
      );
    };
    this.setResolution = (e) => {
      this._dataStore.setResolution(e);
    };
    this.setResolutionManual = (e) => {
      this._changeVideoManualSettings(
        () => this.setResolution(e),
        [
          {
            media: "video",
            field: "resolution",
          },
        ],
      );
      this._agenticGeneratorManager.reportManager.reportAgentSwitchResolution(
        e != null ? e : "auto",
      );
    };
    this.getCommerceRightCanUse = (e) => {
      var t;
      var r = this._commercialFeatureLoaderService.getInstanceSync();
      return (
        (t = r == null ? undefined : r.getCommerceRightCanUse(e)) != null && t
      );
    };
    this.getCommerceRequiredVipPriority = (e) => {
      var t;
      var r =
        (t = this._commercialFeatureLoaderService.getInstanceSync()) == null
          ? undefined
          : t.commercialStrategyService;
      if (e && (r == null ? undefined : r.isReady)) {
        return eu.MG[
          eh.I({
            scene: e.scene,
            sceneOptions: e,
            commercialStrategyService: r,
          })
        ];
      }
    };
    this.setSettings = (e) => {
      this._dataStore.setAspectRatio(e.aspectRatio);
      this._dataStore.setModelKey(e.modelKey);
      this._dataStore.setResolution(e.resolution);
    };
    this._metadataStore.setDataStore(this._dataStore);
    this._setupCommercialFeatureServiceLoadedListener();
  }
}
rk = n.Cg(
  [
    n.Qj(1, eS.jV),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof AgenticGeneratorManager === "undefined"
        ? Object
        : AgenticGeneratorManager,
      eS.jV === undefined ? Object : eS.jV,
    ]),
  ],
  rk,
);
class rR extends l.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get isParallelStream() {
    return this._experiments.isParallelStream;
  }
  get cashierConversationId() {
    let e;
    let t;
    let r;
    t =
      (e = this.agentConversationsManager) == null
        ? undefined
        : e.data.currentConversationId;
    r = this._cashierConversationIdProvider;
    return t || (r == null ? undefined : r());
  }
  get hasSavedSettingsPreferences() {
    return this._settingsManager.hasSavedPreferences;
  }
  setData(e) {
    if (
      e.generatorSettings !== undefined ||
      e.manualSettingsEnabled !== undefined ||
      e.videoSettingsConfigured !== undefined
    ) {
      this._settingsManager.restoreSettings(
        e.generatorSettings,
        e.manualSettingsEnabled,
        e.videoSettingsConfigured,
      );
    }
    if (e.searchEnabled !== undefined) {
      this.setSearchEnabled(e.searchEnabled);
    }
  }
  _getLoggedInUserId() {
    if (this._accountService.hasLogin) {
      return this._accountService.userProfile.uid;
    }
  }
  _syncInferenceModel(e, t) {
    let r;
    let a;
    let i;
    const { userId, isSameUser } = t;
    this._metadataStore.setInferenceData(e);
    const s = ((r = e == null ? undefined : e.modelList) != null ? r : []).map(
      (e) => e.modelId,
    );
    if (s.length !== 0) {
      this._accountIdentityUserId = userId;
      const l = (e) => {
        if (e !== undefined && s.includes(e)) {
          return e;
        }
      };
      const c = userId
        ? ((e, t) => {
            let r;
            try {
              r = P.b.getItem(T(e));
            } catch (error) {
              C.V.warn("Failed to restore Agent model selection", error);
              return;
            }
            if (r) {
              if (t.includes(r)) {
                return r;
              }
              return undefined;
            }
          })(userId, s)
        : undefined;
      const d = isSameUser ? this.data.inferenceModelId : undefined;
      this._dataStore.setInferenceModelId(
        (a =
          (i = c != null ? c : l(d)) != null
            ? i
            : l(e == null ? undefined : e.defaultModelId)) != null
          ? a
          : s[0],
      );
    }
  }
  _syncCreationMode(e, t) {
    this._metadataStore.setShowCreationModeSelector(e === true);
    let r;
    const { userId, isSameUser } = t;
    const n = userId
      ? ((e) => {
          let t;
          try {
            t = P.b.getItem(A(e));
          } catch (error) {
            C.V.warn("Failed to restore Agent creation mode", error);
            return;
          }
          if (t && h.S(t)) {
            return t;
          }
        })(userId)
      : undefined;
    const o = isSameUser ? this.data.creationMode : undefined;
    this._dataStore.setCreationMode(
      (r = n != null ? n : o) != null ? r : h.a.Standard,
    );
  }
  validateSubjectAddition(e) {
    return this._subjectManager.validateSubjectAddition(e);
  }
  _initParallelStreamExperiment() {
    const e = this._configurationService.abTestManager.getBooleanAbTestValue(
      _.ob.DreaminaCreativeAgentParallelStream,
      false,
    );
    this._experiments.isParallelStream = e;
  }
  constructor(e, t, r, n, s) {
    super();
    this.contentGeneratorManager = e;
    this._accountService = t;
    this._containerService = r;
    this._notificationService = n;
    this._configurationService = s;
    this._accountIdentityUserId = undefined;
    this._experiments = o.sH({
      isParallelStream: false,
    });
    this.promptEditorManager = this._register(
      this._containerService.createInstance(e4, this),
    );
    this.imageSettingsManager = this._register(
      this._containerService.createInstance(ez, this),
    );
    this.videoSettingsManager = this._register(
      this._containerService.createInstance(rk, this),
    );
    this.dataAdapter = this._register(
      this._containerService.createInstance(
        Q,
        this,
        this.contentGeneratorManager,
      ),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(tT, this),
    );
    this.referenceAuditManager = this._register(
      this._containerService.createInstance(k.K),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(rm, this),
    );
    this.agenticVoiceInputManager = this._register(
      this._containerService.createInstance(S.I, {
        onStart: () => {
          this.reportManager.reportVoiceRecordClick();
          this.reportManager.reportVoiceRecordStart();
        },
        onReady: (e) => {
          this.reportManager.reportVoiceRecordReady(e);
        },
        onEnd: (e) => {
          var { status, error, transcript, taskId, messageId, logId } = e;
          this.reportManager.reportVoiceRecordDone();
          this.reportManager.reportVoiceRecordEnd({
            status,
            failReason: error,
            voicePrompt: transcript,
            taskId,
            messageId,
            logId,
          });
        },
      }),
    );
    this.agentConversationsManager = null;
    this._cashierConversationIdProvider = null;
    this.canvasProjectService = null;
    this.canvasEditor = null;
    this._dataStore = new ed(this);
    this._metadataStore = new e0(this);
    this.skillManager = this._register(
      this._containerService.createInstance(tz.f, this),
    );
    this.skillEditorManager = this._register(
      this._containerService.createInstance(tK, this),
    );
    this.skillPublishManager = this._register(
      this._containerService.createInstance(t4, this),
    );
    this.referenceMentionManager = this._register(
      this._containerService.createInstance(
        R.Z,
        i._(
          a._(
            {
              getResourceOptions: () =>
                this._metadataStore.referenceResourceOptions,
              validateSubjectAddition: (e) => this.validateSubjectAddition(e),
            },
            y.F
              ? undefined
              : {
                  validateSubjectEligibility: (e) =>
                    I.W(e, {
                      acceptedContentTypes: new Set([g.yC.Image]),
                    }),
                },
          ),
          {
            reportManager: this.reportManager,
          },
        ),
      ),
    );
    this._referenceResourceManager = this._register(
      this._containerService.createInstance(
        tl,
        this,
        this._dataStore,
        this._metadataStore,
      ),
    );
    this._referenceRecordManager = this._register(
      this._containerService.createInstance(e6, this, this._dataStore),
    );
    this._subjectManager = this._register(
      this._containerService.createInstance(
        t8,
        this,
        this._dataStore,
        this._metadataStore,
      ),
    );
    this._reactionManager = this._register(
      this._containerService.createInstance(
        e9,
        this,
        this._dataStore,
        this._metadataStore,
      ),
    );
    this.setAgentConversationsManager = (e) => {
      if (this.agentConversationsManager !== e) {
        this.agentConversationsManager = e;
        this._settingsManager.setConversationIdProvider(() => {
          var e;
          if ((e = this.agentConversationsManager) == null) {
            return undefined;
          }
          return e.data.currentConversationId;
        }, true);
        this._setupLocalConversationCreateListener();
      }
    };
    this.setCashierConversationIdProvider = (e) => {
      this._cashierConversationIdProvider = e;
    };
    this.setGenerationWorkspaceProvider = (e) =>
      this._settingsManager.setGenerationWorkspaceProvider(e);
    this.setCanvasProjectService = (e) => {
      this.canvasProjectService = e;
    };
    this.setCanvasEditor = (e) => {
      this.canvasEditor = e;
    };
    this.setManualSettingsEnabled = (e) => {
      this._dataStore.setManualSettingsEnabled(e);
    };
    this.persistCreationPreferenceForSubmission = (e, t) =>
      this._settingsManager.persistPreferenceForSubmission(e, t);
    this.prepareCreationPreferenceForConversation = (e) =>
      this._settingsManager.preparePreferenceForConversation(e);
    this.restoreSettingsPreferences = () => {
      this._settingsManager.restorePreferences();
    };
    this.createSettingsRestorer = () => {
      var { canRestore, dispose } = this._settingsManager.createRestoreGuard();
      return {
        restore: (t) => {
          if (canRestore()) {
            if (t) {
              this.setData(t);
            } else {
              this.restoreSettingsPreferences();
            }
          }
        },
        dispose,
      };
    };
    this.changeManualSettings = (e, t) => {
      this._settingsManager.changeSettings(e, t);
    };
    this.setVideoSettingsConfigured = (e) => {
      this._dataStore.setVideoSettingsConfigured(e);
    };
    this.changeManualSettingsEnabled = (e) => {
      this._settingsManager.changeMode(e ? "manual" : "auto");
      this.reportManager.reportAgentTriggerManualSettings(e ? "open" : "close");
    };
    this.isCreationSelectionManual = (e, t) =>
      this._settingsManager.isCreationSelectionManual(e, t);
    this.toggleCreativeModelEnabled = () => {
      var e = !this._dataStore.creativeModelEnabled;
      this._dataStore.setCreativeModelEnabled(e);
      this.reportManager.reportAgentToggleCreativeMode();
    };
    this.syncModelConfig = (e) => {
      var { data } = e;
      if (!e.loading && (data == null ? undefined : data.ok)) {
        var {
          imageData,
          videoData,
          userCustomSkillsConfig,
          referenceLimits,
          promptMaxLength,
        } = data.value;
        var userId = this._getLoggedInUserId();
        var l = {
          userId,
          isSameUser: userId === this._accountIdentityUserId,
        };
        this._syncInferenceModel(data.value.inferenceData, l);
        this._syncCreationMode(data.value.showCreationModeSelector, l);
        this.imageSettingsManager.syncModelConfig(imageData);
        this.videoSettingsManager.syncModelConfig(videoData);
        this._settingsManager.syncModelConfig(data.value);
        this.skillEditorManager.updateUserSkillsConfig(userCustomSkillsConfig);
        this._metadataStore.setReferenceLimits(referenceLimits);
        this._metadataStore.setPromptMaxLength(promptMaxLength);
      }
    };
    this.changeInferenceModel = (e) => {
      if (e !== this._dataStore.inferenceModelId) {
        this._dataStore.setInferenceModelId(e);
        this.reportManager.reportAgentSwitchBaseModel();
        var t = this._getLoggedInUserId();
        if (t) {
          try {
            P.b.setItem(T(t), e);
          } catch (error) {
            C.V.warn("Failed to save Agent model selection", error);
          }
        }
      }
    };
    this.changeCreationMode = (e) => {
      if (e !== this._dataStore.creationMode) {
        this._dataStore.setCreationMode(e);
        this.reportManager.reportAgentToggleDeepCreation();
        var t = this._getLoggedInUserId();
        if (t) {
          try {
            P.b.setItem(A(t), e);
          } catch (error) {
            C.V.warn("Failed to save Agent creation mode", error);
          }
        }
      }
    };
    this._handleAccountChange = () => {
      this._accountIdentityUserId = undefined;
      var e = {
        userId: this._getLoggedInUserId(),
        isSameUser: false,
      };
      this._syncInferenceModel(this._metadataStore.inferenceData, e);
      this._syncCreationMode(this._metadataStore.showCreationModeSelector, e);
    };
    this.setSearchEnabled = (e) => {
      this._dataStore.setSearchEnabled(e);
    };
    this.toggleSearchEnabled = () => {
      this._dataStore.setSearchEnabled(!this._dataStore.searchEnabled);
      this.reportManager.reportToggleInspirationSearch();
    };
    this.insertSubject = (e, t) => {
      var r;
      var a;
      var i = m.K(e);
      var n = this.referenceMentionManager.validateSubjectEligibility(e);
      if (!n.ok) {
        return n;
      }
      var o =
        (a = this.contentGeneratorManager.visibleContentGeneratorInstance) ==
          null || (r = a.elements.promptEditorRef) == null
          ? undefined
          : r.current;
      if (!o) {
        return c.xz(-1, "");
      }
      var s = this.validateSubjectAddition(e);
      if (!s.ok) {
        return s;
      }
      o.commands.insertContent(
        this.promptEditorManager.transformPromptContentToNodes({
          type: "subject",
          id: i,
          subject: e,
        }),
      );
      o.commands.focus();
      var { entry } = t != null ? t : {};
      if (entry) {
        this.reportManager.reportAddSubject(entry, e.subjectId);
      }
      return c.nj();
    };
    this.changePromptContents = (e) => {
      var hasSkill = this.data.hasSkill;
      this._dataStore.setPromptContents(e);
      if (
        hasSkill &&
        !this.data.hasSkill &&
        (this.reportManager.resourceReportParams.enterFrom === "ai_feature" ||
          this.reportManager.resourceReportParams.enterFrom === "ai_function" ||
          this.reportManager.resourceReportParams.enterFrom ===
            "hover_function_click" ||
          this.reportManager.resourceReportParams.enterFrom ===
            "all_tools_click" ||
          this.reportManager.resourceReportParams.enterFrom ===
            "market_skill_use" ||
          this.reportManager.resourceReportParams.enterFrom ===
            "create_click_more" ||
          this.reportManager.resourceReportParams.enterFrom ===
            "skill_manage_edit")
      ) {
        this.reportManager.updateResourceReportParams({
          enterFrom: "click",
        });
        this.reportManager.setAiFeatureAttribution(undefined);
      }
      var { isPromptEmpty, promptValidationResult } = this.data;
      if (
        !(
          isPromptEmpty ||
          promptValidationResult.ok ||
          !promptValidationResult.msg
        )
      ) {
        this._notificationService.warning(promptValidationResult.msg);
      }
    };
    this.selectSkill = (e, t) => this.skillManager.selectSkill(e, t);
    this.insertSkillTag = (e, displayName, source) => {
      var a;
      var i;
      var { visibleContentGeneratorInstance } = this.contentGeneratorManager;
      var { promptEditorRef } =
        (a =
          visibleContentGeneratorInstance == null
            ? undefined
            : visibleContentGeneratorInstance.elements) != null
          ? a
          : {};
      if (!(promptEditorRef == null || (i = promptEditorRef.current) == null)) {
        i.chain()
          .focus()
          .insertContent({
            type: M.t.AgenticGeneratorSkillTag,
            attrs: {
              id: e,
              displayName,
              source,
            },
          })
          .run();
      }
    };
    this.applyCreateSkillTemplate = () => {
      this.skillManager.applyCreateSkillTemplate();
    };
    this.editSkillWithAgent = (e) => {
      if (!(e.source !== f.fc.User || e.isSkillPackage || !b.xV(e))) {
        this.reportManager.reportSkillManageAgentEdit(e);
        this.skillManager.applyAgentEditSkillTemplate(e);
        this.skillEditorManager.leaveFormView({
          kind: "close-modal",
        });
      }
    };
    this.openSkillEditor = (e) => {
      this.skillEditorManager.openSkillEditor(e);
    };
    this.changeEditorDocument = (e) => {
      var { transformEditorDocumentToPromptContents } =
        this.promptEditorManager;
      var r = transformEditorDocumentToPromptContents(e);
      this.changePromptContents(r);
    };
    this.setReferenceRecord = (e) => {
      this._referenceRecordManager.setReferenceRecord(e);
    };
    this.setReferenceRecordContents = (e) => {
      this._referenceRecordManager.setReferenceRecordContents(e);
    };
    this.resetReferenceRecord = () => {
      this._referenceRecordManager.resetReferenceRecord();
    };
    this.importReferenceResourcesFromLocal = (e) =>
      this._referenceResourceManager.importReferenceResourcesFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: "click",
          },
        },
      });
    this.dropAsReferences = (e) =>
      this._referenceResourceManager.dropAsReferences(e);
    this.pasteAsReferences = (e) =>
      this._referenceResourceManager.pasteAsReferences(e);
    this.replaceReferenceResourceFromLocal = (e, t) =>
      this._referenceResourceManager.replaceReferenceResourceFromLocal(e, t);
    this.addReferenceResources = (e, t) =>
      this._referenceResourceManager.addReferenceResources(e, t);
    this.replaceReferenceResource = (e, t) =>
      this._referenceResourceManager.replaceReferenceResource(e, t);
    this.moveReferenceResources = (e, t) => {
      this._dataStore.moveReferenceResources(e, t);
    };
    this.setReferencePanelVisible = (e) => {
      this._dataStore.setReferencePanelVisible(e);
    };
    this.setReferencePanelActiveTab = (e) => {
      this._dataStore.setReferencePanelActiveTab(e);
    };
    this.removeReferenceResource = (e) => {
      this._referenceResourceManager.removeReferenceResource(e);
    };
    this.removeReferenceResources = (e) => {
      this._referenceResourceManager.removeReferenceResources(e);
    };
    this.insertReferenceResourceIntoPrompt = (e) => {
      this._referenceResourceManager.insertReferenceResourceIntoPrompt(e);
    };
    this.auditReferences = () =>
      this.referenceAuditManager.auditResources(
        this._dataStore.referenceResources,
        {
          scene: p.EZ.Agent,
        },
      );
    this.removeSubjectFromPrompt = (e) => {
      this._subjectManager.removeSubjectFromPrompt(
        e,
        this.changePromptContents,
      );
    };
    this.replaceSubjectInPrompt = (e, t) => {
      this._subjectManager.replaceSubjectInPrompt(
        e,
        t,
        this.changePromptContents,
      );
    };
    this.resetReferenceResources = () => {
      this._dataStore.resetReferenceResources();
      this.auditReferences();
    };
    this.setReferenceResourcePrompt = (e, t) => {
      this._dataStore.setReferenceResourcePrompt(e, t);
    };
    this.resetData = () => {
      this._dataStore.resetData();
      this.auditReferences();
    };
    this.resetInputData = () => {
      this._dataStore.resetInputData();
      this.auditReferences();
    };
    this.setGeneratorSettings = (e) => {
      this.imageSettingsManager.setSettings(e.imageSettings);
      this.videoSettingsManager.setSettings(e.videoSettings);
    };
    this.setStreaming = (e) => {
      this._metadataStore.setStreaming(e);
    };
    this.setSubmitButtonLoading = (e) => {
      this._metadataStore.setSubmitButtonLoading(e);
    };
    this.setSettingsType = (e) => {
      this._dataStore.setSettingsType(e);
    };
    this.switchSettingsType = (e) => {
      this.setSettingsType(e);
      if (e === "video") {
        this._settingsManager.configureVideoSettings();
      }
      this.reportManager.reportAgentSwitchSettingType(e);
    };
    this._setupLocalConversationCreateListener = () => {
      if (this.agentConversationsManager) {
        var e = true;
        this._register(
          this.agentConversationsManager.onLocalConversationCreate(() => {
            if (
              !(
                e &&
                ((e = false),
                this.reportManager.resourceReportParams.enterFrom !== "click")
              )
            ) {
              this.reportManager.setResourceReportParams({
                enterFrom: "create_new",
              });
            }
          }),
        );
      }
    };
    o.Gn(this, {
      _initParallelStreamExperiment: o.XI,
      _cashierConversationIdProvider: o.sH.ref,
      setCashierConversationIdProvider: o.XI,
    });
    this._dataStore.setImageSettingData(this.imageSettingsManager.data);
    this._dataStore.setVideoSettingData(this.videoSettingsManager.data);
    this._settingsManager = this._register(
      this._containerService.createInstance(
        tO,
        this,
        this._dataStore,
        this._metadataStore,
      ),
    );
    this._register(this._accountService.onDidLogin(this._handleAccountChange));
    this._register(this._accountService.onDidLogout(this._handleAccountChange));
    this._initParallelStreamExperiment();
    this._setupLocalConversationCreateListener();
  }
}
export { rR as y };
rR = n.Cg(
  [
    n.Qj(1, s.c),
    n.Qj(2, u._),
    n.Qj(3, d.Ot),
    n.Qj(4, v.a),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      s.c === undefined ? Object : s.c,
      u._ === undefined ? Object : u._,
      d.Ot === undefined ? Object : d.Ot,
      v.a === undefined ? Object : v.a,
    ]),
  ],
  rR,
);
