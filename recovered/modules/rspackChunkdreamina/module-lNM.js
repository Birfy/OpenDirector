import i from "NY";
import s from "oa";
import a from "bk";
import n from "QWK";
import o from "qip";
import d from "mL";
import c from "SR";
import u from "Qey";
import l from "Rb";
import _ from "K8";
import h from "A7";
import m from "aEB";
import v from "Kt";
import p from "uCp";
import g from "Os";
import f from "aX";
import I from "ONA";
import S from "yMd";
import C from "CR";
import k from "xiM";
import T from "aS";
import y from "e3";
import A from "sV8";
import b from "Hd";
import M from "Fe0";
import E from "z7O";
import F from "z6";
import w from "FI";
import R from "oAx";
import P from "gu";
import G from "yB";
import D from "ft";
import x from "eA5";
import q from "AX";
import j from "TK";
import O from "VA";
import B from "Y6";
import Q from "KV";
import N from "Nux";
import { Z as Z_1 } from "./module-IO9.js";
import U from "SZS";
import L from "qnN";
import { e as e_1 } from "./module-bV6.js";
import H from "wRe";
import W from "Ut";
import J from "Dm";
import z from "fku";
import X from "kF";
import et from "EIO";
import er from "mnO";
import ei from "c0";
import es from "SF";
import ea from "dpB";
import en from "cFd";
import eo from "zU";
import ed from "RXB";
import ec from "Mze";
import eu from "x4";
import el from "yGz";
import e_ from "oYY";
import eh from "dkM";
import { R as R_1 } from "./module-x5f.js";
import { M as M_1 } from "./module-wSn.js";
import { C as C_1 } from "./module-xbE.js";
import { G as G_1 } from "./module-SHI.js";
import eS from "Byj";
import eC from "sTW";
import ek from "PQZ";
import eT from "e2O";
import ey from "MGT";
import eA from "rm3";
import eb from "PXv";
import eM from "yBC";
import eE from "tIm";
import eF from "HaY";
import ew from "abs";
import eR from "avO6";
import eP from "s85";
import eG from "vMJ";
import eD from "NWG";
import ex from "kI";
import eq from "YGb";
import ej from "Q6";
import eO from "OP0";
import eB from "S2m";
import eQ from "XHe";
import eN from "T0g";
import eV from "qCz";
import eU from "uE";
import eL from "zIa";
import eK from "eq6";
import eH from "v1t";
import eW from "bJ";
import eJ from "gHp";
import ez from "yQ";
import eX from "Z4v";
import eY from "Ywv";
import eZ from "jP";
import e$ from "k86";
import e0 from "Fde";
import e1 from "S7Nl";
import e2 from "MAr";
import e3 from "UFQ";
import e4 from "iT";
class Y extends X.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_ai_audio_generate";
  }
}
class Z extends X.o {
  setParamsByTask(e) {
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    const e_model = e.model;
    const {
      idModel: { submitId, generateId },
      generateType,
      metricsExtra: {
        enterFrom,
        isRegenerate,
        voiceId,
        imageId,
        videoId,
        audioId,
      } = {},
    } = e_model;
    this._params.enterFrom = enterFrom != null ? enterFrom : "click";
    if (!this._params.actionType) {
      this._params.actionType = isRegenerate ? "regenerate" : "generate";
    }
    this._params.submitId = submitId;
    this._params.generateId = generateId || submitId || e_model.uniqueKey;
    this._params.generateType = generateType;
    const g = (
      (t =
        (r = e_model.unifiedEditInput) == null ? undefined : r.materialList) !=
      null
        ? t
        : []
    ).flatMap((e) => {
      var t;
      if (
        e.materialType === "subject" &&
        ((t = e.subjectData) == null ? undefined : t.subjectId)
      ) {
        return [e.subjectData.subjectId];
      }
      return [];
    });
    this._params.subjectId = g.length > 0 ? g.join(",") : undefined;
    this._isUnifiedEditMode =
      ((i = e_model.textToSpeechAbility) == null ? undefined : i.mode) ===
      W.DAGenerateTTSMode.UnifiedEdit;
    this._isTextReadingMode =
      ((s = e_model.textToSpeechAbility) == null ? undefined : s.mode) ===
      W.DAGenerateTTSMode.TTS;
    z.i.setTextToSpeechParams(this, e_model);
    z.i.setAudioFunctionModeParams(this, e_model);
    z.i.setAudioModelParams(this, e_model, this._containerService);
    z.i.setAudioPromptParams(this, e_model);
    this._params.voiceId =
      voiceId != null
        ? voiceId
        : (n = e_model.textToSpeechAbility) == null || (a = n.idInfo) == null
          ? undefined
          : a.id;
    this._params.imageId = imageId;
    this._params.videoId = videoId;
    this._params.audioId = audioId;
  }
  _getCollectorClass() {
    return Y;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      a._(s._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateParams(e) {
    if (!this._isUnifiedEditMode) {
      this._validateRequiredFields(e);
    }
  }
  _validateRequiredFields(e) {
    ["enter_from", "action_type", "submit_id", "generate_type"].forEach((t) => {
      J.F4(e[t], "[ClickAIAudioGenerateReporter] ".concat(t, " is required"));
    });
    if (this._isTextReadingMode) {
      J.F4(
        e.is_voice_clone,
        "[ClickAIAudioGenerateReporter] is_voice_clone is required",
      );
    }
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
    this._isUnifiedEditMode = false;
    this._isTextReadingMode = false;
  }
}
Z = n.Cg(
  [
    n.Qj(1, v._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      v._ === undefined ? Object : v._,
    ]),
  ],
  Z,
);
class $ extends X.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_ai_music_generate";
  }
}
class ee extends X.o {
  setParamsByTask(e) {
    const e_model = e.model;
    const {
      idModel: { submitId, generateId },
      generateType,
      metricsExtra: { enterFrom, isRegenerate } = {},
    } = e_model;
    this._params.enterFrom = enterFrom != null ? enterFrom : "click";
    if (!this._params.actionType) {
      this._params.actionType = isRegenerate ? "regenerate" : "generate";
    }
    this._params.submitId = submitId;
    this._params.generateId = generateId || submitId || e_model.uniqueKey;
    this._params.generateType = generateType;
    z.i.setMusicModelParams(this, e_model, this._containerService);
    z.i.setMusicPromptParams(this, e_model);
    z.i.setMusicDurationParams(this, e_model);
  }
  _getCollectorClass() {
    return $;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      a._(s._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    [
      "enter_from",
      "action_type",
      "submit_id",
      "generate_type",
      "model_name",
      "prompt",
      "prompt_cnt",
      "prompt_source",
      "generate_id",
    ].forEach((t) => {
      J.F4(e[t], "[ClickAIMusicGenerateReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
ee = n.Cg(
  [
    n.Qj(1, v._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      v._ === undefined ? Object : v._,
    ]),
  ],
  ee,
);
class em extends X.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_generate";
  }
}
class ev extends X.o {
  setParamsByTask(e) {
    eo.n(this, e.sceneOptions, this._dreaminaCommercialFeatureContainerService);
    let t;
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    let d;
    let c;
    let u;
    let l;
    let _;
    let h;
    let m;
    let v;
    let p;
    let g;
    let f;
    let I;
    let S;
    let C;
    let k;
    let T;
    let y;
    let A;
    let b;
    let M;
    let E;
    let F;
    let w;
    const e_model = e.model;
    this._params.generateType = e_model.generateType;
    this._params.submitId = e_model.idModel.submitId;
    this._params.lastPictureId =
      (c = e_model.refInfo) == null || (d = c.refRecordInfo) == null
        ? undefined
        : d.refItemId;
    this._params.imageId =
      (u = e_model.metricsExtra) == null ? undefined : u.imageId;
    this._params.videoId =
      (l = e_model.metricsExtra) == null ? undefined : l.videoId;
    this._params.audioId =
      (_ = e_model.metricsExtra) == null ? undefined : _.audioId;
    this._params.originItemId =
      (h = e_model.metricsExtra) == null ? undefined : h.originItemId;
    this._params.generateLogId =
      (m = e_model.metricsExtra) == null ? undefined : m.generateLogId;
    this._params.generateSuggestion =
      (v = e_model.metricsExtra) == null ? undefined : v.generateSuggestion;
    this._params.page =
      (p = e_model.metricsExtra) == null ? undefined : p.reportPage;
    this.setParams(
      (t = e_model.viewControlParams)
        ? {
            horizonAngle: t.yaw,
            verticalAngel: t.pitch,
            distanceLevel:
              (r = t.distance) === 1
                ? -1
                : r === 0
                  ? 0
                  : r === -1
                    ? 1
                    : undefined,
          }
        : {},
    );
    this._params.actionType = (
      (g = e_model.metricsExtra) == null ? undefined : g.isRegenerate
    )
      ? "regenerate"
      : "generate";
    el.Z(this, e_model);
    eu.C(this, e_model);
    en.J(this, e_model.blendImageInfo);
    ed.j(this, e_model);
    ea.B(this, e_model.blendImageInfo);
    ec.L(this, e_model.proHDParams);
    this._params.definition =
      (I = e_model.text2imageParams) == null || (f = I.largeImageInfo) == null
        ? undefined
        : f.resolutionType;
    this._params.isDescribe = 0;
    this.setParams(
      ((a = {
        generateCnt:
          (i =
            (s = e_model.metricsExtra) == null ? undefined : s.generateCount) !=
          null
            ? i
            : 1,
      }),
      e_model.maxGenerateCount !== undefined &&
        (a.generateNum = e_model.maxGenerateCount),
      a),
    );
    this._params.hasRejectedAudit =
      (S = e_model.metricsExtra) == null ? undefined : S.hasRejectedAudit;
    this._params.enterFrom =
      (n = (C = e_model.metricsExtra) == null ? undefined : C.enterFrom) != null
        ? n
        : "click";
    this._params.replyMessageId =
      (k = e_model.metricsExtra) == null ? undefined : k.replyMessageId;
    ei.a(this, e_model.metricsExtra);
    this._params.referenceCnt =
      (o = this._params.imagePromptCnt) != null ? o : 0;
    if (
      ((T = e_model.metricsExtra) == null ? undefined : T.isBoxSelect) !==
      undefined
    ) {
      this._params.isBoxSelect = +!!e_model.metricsExtra.isBoxSelect;
    }
    if (
      ((y = e_model.metricsExtra) == null ? undefined : y.isCutout) !==
      undefined
    ) {
      this._params.isCutout = +!!e_model.metricsExtra.isCutout;
    }
    this._params.textRowsCnt =
      (A = e_model.metricsExtra) == null ? undefined : A.textRowsCnt;
    this._params.modifiedTextRowsCnt =
      (b = e_model.metricsExtra) == null ? undefined : b.modifiedTextRowsCnt;
    this._params.markTagCnt =
      (M = e_model.metricsExtra) == null ? undefined : M.markTagCnt;
    this._params.markBoxCnt =
      (E = e_model.metricsExtra) == null ? undefined : E.markBoxCnt;
    this._params.imageTextCnt =
      (F = e_model.metricsExtra) == null ? undefined : F.imageTextCnt;
    this._params.imageArrowCnt =
      (w = e_model.metricsExtra) == null ? undefined : w.imageArrowCnt;
    er.H(this, e_model);
    e_.x(this, e_model.unifiedEditInput);
  }
  _getCollectorClass() {
    return em;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      a._(s._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    es.B(e, "ClickGenerateReporter");
  }
  _validateRequiredFields(e) {
    [
      "is_time_limited_free",
      "credits_need",
      "credits_now",
      "generate_cnt",
      "generate_type",
      "submit_id",
      "action_type",
      "prompt_cnt",
      "image_prompt_cnt",
      "enter_from",
      "ratio",
      "is_describe",
    ].forEach((t) => {
      J.F4(e[t], "[ClickGenerateReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t, r) {
    super(eh.T(e), t);
    this._containerService = t;
    this._dreaminaCommercialFeatureContainerService = r;
  }
}
ev = n.Cg(
  [
    n.Qj(1, v._),
    n.Qj(2, G.X),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      v._ === undefined ? Object : v._,
      G.X === undefined ? Object : G.X,
    ]),
  ],
  ev,
);
const e5 = new Set([
  l.DMLGenRecordStatus.Loading,
  l.DMLGenRecordStatus.Thinking,
  l.DMLGenRecordStatus.ContinueGen,
]);
class e8 {
  get agenticTaskStore() {
    return this._agenticTaskStore.tasks;
  }
  get taskStore() {
    return this._taskStore;
  }
  get onAigcDataTaskCreated() {
    return this._onAigcDataTaskCreated.event;
  }
  get onAigcDataTaskSubmitSuccess() {
    return this._onAigcDataTaskSubmitSuccess.event;
  }
  get onAigcDataTaskRestored() {
    return this._onAigcDataTaskRestored.event;
  }
  get onAigcDataTaskGenerated() {
    return this._onAigcDataTaskGenerated.event;
  }
  get onAigcDataTaskGeneratedFailed() {
    return this._onAigcDataTaskGeneratedFailed.event;
  }
  get onAigcDataTaskGeneratePartialSuccess() {
    return this._onAigcDataTaskGeneratePartialSuccess.event;
  }
  get onAigcDataTaskRemoved() {
    return this._onAigcDataTaskRemoved.event;
  }
  get onAigcAgenticDataConversationStateChange() {
    return this._onAigcAgenticDataConversationStateChange.event;
  }
  get onAigcComplianceError() {
    return this._onAigcComplianceError.event;
  }
  retryFailureTask(e) {
    const t = this._taskStore.find((t) => t.task.model.idModel.submitId === e);
    if (t) {
      t.task.retryFailureTask();
    }
  }
  deleteAIGCTask(e) {
    if (
      this._agenticTaskStore.find(e) ||
      this._pendingFormCollectionTasks.has(e) ||
      this._pendingInterruptApprovalTasks.has(e)
    ) {
      this._deleteAIGCAgenticTask(e);
    } else if (
      this._taskStore.find((t) => t.task.model.idModel.submitId === e)
    ) {
      this._deleteAIGCMediaTask(e);
    }
  }
  restoreAIGCTaskMonitor(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (f.e(e)) {
      this._restoreAIGCAgenticTaskMonitor(e);
    } else if (I.l(e)) {
      this._restoreAIGCMediaTaskMonitor(e, t);
    }
  }
  createAIGCVideoTask(e, t) {
    return this._createVideoTask(eM.a, e, t);
  }
  createAIGCVideoGenerateFromDraftTask(e, t) {
    const r = ((e) => {
      const { targetAIGCData, resolution, itemId, isRegenerate } = e;
      if (targetAIGCData && resolution) {
        const a = e_1(targetAIGCData, {
          itemId,
          isRegenerate,
        });
        if (a) {
          return ""
            .concat(a.originHistoryId, ":")
            .concat(a.originItemId, ":")
            .concat(resolution);
        }
      }
    })(e);
    const i = r ? this._getPendingVideoGenerateFromDraftTask(r) : undefined;
    if (i) {
      return _.TZ(i.model);
    }
    return this._createVideoTask(
      (e, t) => {
        var i = eE.H(e, t);
        if (r) {
          this._registerPendingVideoGenerateFromDraftTask(r, i);
        }
        return i;
      },
      e,
      t,
    );
  }
  createAIGCVideoInsertFrameTask(e, t) {
    return this._createVideoTask(eF.m, e, t);
  }
  createAIGCTextToImageTask(e, t) {
    return this._createImageTask(ew.Pb, e, t);
  }
  createAIGCTextToImagePartialTask(e, t) {
    return this._createImageTask(
      ew.Pb,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  continueAIGCTextToImagePartialTask(e, t) {
    return this._createImageTask(
      ew.Pb,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  stopAIGCTextToImagePartialTask(e, t) {
    return this._createImageTask(
      ew.Pb,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  createAIGCImageProHDTask(e, t) {
    return this._createImageTask(eR.Bm, e, t);
  }
  createAIGCImageProHDTaskUnified(e, t) {
    return this._createImageTask(eR.nL, e, t);
  }
  createAIGCImageSuperDefinitionTask(e, t) {
    return this._createImageTask(eP.Mv, e, t);
  }
  createAIGCImageSuperDefinitionTaskUnified(e, t) {
    return this._createImageTask(eP.W$, e, t);
  }
  createAIGCImageSuperResolutionTask(e, t) {
    return this._createImageTask(eG.B, e, t);
  }
  createAIGCImageInPaintingTask(e, t) {
    return this._createImageTask(eD.pt, e, t);
  }
  createAIGCImageInPaintingTaskUnified(e, t) {
    return this._createImageTask(eD.vi, e, t);
  }
  createAIGCImageEttaPaintingTask(e, t) {
    return this._createImageTask(ex.su, e, t);
  }
  createAIGCImageEttaPaintingTaskUnified(e, t) {
    return this._createImageTask(ex.wL, e, t);
  }
  createAIGCImageCutoutTaskUnified(e, t) {
    return this._createImageTask(eq.i$, e, t);
  }
  createAIGCImageOutPaintingTask(e, t) {
    return this._createImageTask(ej.ir, e, t);
  }
  createAIGCImageOutPaintingTaskUnified(e, t) {
    return this._createImageTask(ej.mc, e, t);
  }
  createAIGCImageViewControlTask(e, t) {
    return this._createImageTask(eO.c7, e, t);
  }
  createAIGCImageViewControlTaskUnified(e, t) {
    return this._createImageTask(eO.wM, e, t);
  }
  createAIGCImageSmartEditTask(e, t) {
    return this._createImageTask(eB.Zn, e, t);
  }
  createAIGCImageSmartEditTaskUnified(e, t) {
    return this._createImageTask(eB.Hg, e, t);
  }
  createAIGCImageInPaintingRemoveTask(e, t) {
    return this._createImageTask(eQ.nG, e, t);
  }
  createAIGCImageInPaintingRemoveTaskUnified(e, t) {
    return this._createImageTask(eQ.XO, e, t);
  }
  createAIGCImageBlendTask(e, t) {
    return this._createImageTask(eN.aY, e, t);
  }
  createAIGCImageBlendPartialTask(e, t) {
    return this._createImageTask(
      eN.aY,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  continueAIGCImageBlendPartialTask(e, t) {
    return this._createImageTask(
      eN.aY,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  stopAIGCImageBlendPartialTask(e, t) {
    return this._createImageTask(
      eN.aY,
      a._(s._({}, e), {
        isPartial: true,
      }),
      t,
    );
  }
  generateAIGCSubjectMaterialImage(e) {
    return i
      ._(function* () {
        try {
          let t;
          const r = this._containerService.invokeFunction((e) => e.get(G_1));
          const i =
            e.generateType === S.ce.Blend
              ? yield eN.HV(this._containerService, e)
              : ew.OT(this._containerService, e);
          const s = yield r.generateImage(i.params, i.queryParams);
          if (!s.ok) {
            return s;
          }
          if (
            (t =
              this._dreaminaCommercialFeatureContainerService.getInstanceSync()) !=
            null
          ) {
            t.forceUpdateBenefitStrategy();
          }
          return _.TZ(s.value.data);
        } catch (error) {
          return _.xz(
            C.Q.ErrClientCommon,
            error instanceof Error
              ? error.message
              : "subject material generate failed",
          );
        }
      })
      .call(this);
  }
  createAIGCImageFusionTask(e, t) {
    return this._createImageTask(eV.H, e, t);
  }
  createAIGCImageGuiEditTextTask(e, t) {
    return this._createImageTask(eU.Y, e, t);
  }
  createAIGCVideoLipSyncTask(e, t) {
    return this._createVideoTask(eL.U, e, t);
  }
  createAIGCActionCopyTask(e, t) {
    return this._createVideoTask(eK.b, e, t);
  }
  createAIGCVideoSubtitleEraseTask(e, t) {
    const r = o.h(this._containerService, e);
    if (r.ok) {
      return this._createVideoTask(o.J, e, t);
    }
    return r;
  }
  createAIGCVideoSuperResolutionTask(e, t) {
    return this._createVideoTask(eH.Y, e, t);
  }
  createAIGCVideoLipSyncAvatarTask(e, t) {
    return this._createVideoTask(eW.I, e, t);
  }
  createAIGCImageLipSyncAvatarTask(e, t) {
    return this._createVideoTask(eJ.o, e, t);
  }
  createAIGCVideoAudioEffectTask(e, t) {
    return this._createVideoTask(ez.Q, e, t);
  }
  createAIGCVideoBGMTask(e, t) {
    return this._createVideoTask(eX.l, e, t);
  }
  createAIGCVideoExtendTask(e, t) {
    return this._createVideoTask(eY.l, e, t);
  }
  createAIGCVideoLabSrExtendTask(e, t) {
    return this._createVideoTask(eZ.v, e, t);
  }
  createAIGCTextReadingTask(e, t) {
    return this._createTask(e$.v8, e, t);
  }
  createAIGCAudioOmniDubbingTask(e, t) {
    return this._createTask(e$.iA, e, t);
  }
  createAIGCAudioSeparationTask(e, t) {
    return this._createTask(e$.AP, e, t);
  }
  createAIGCVideoOmniDubbingTask(e, t) {
    return this._createVideoTask(e0.rw, e, t);
  }
  createAIGCVideoTranslationTask(e, t) {
    return this._createVideoTask(e0.iV, e, t);
  }
  createAIGCAudioGenerationTask(e, t) {
    return this._createTask(e$.AZ, e, t);
  }
  createAIGCVideoDubbingTask(e, t) {
    return this._createVideoTask(e0.qL, e, t);
  }
  createAIGCMusicTask(e, t) {
    return this._createTask(e1.J, e, t);
  }
  createAIGCAgenticTask(e) {
    if (Z_1(e));
    else if (e.workspaceId !== undefined);
    else if (this._isParallelStream) {
      const { runningTasks } = this._agenticTaskStore;
      if (runningTasks.length >= N.eF) {
        const r = u.Ay.t(
          "web_agent_parallel_limit_toast",
          {},
          "You're going a bit too fast. Try again in a moment.",
        );
        this._notificationService.warning(r);
        return _.xz(C.Q.ErrClientCommon, r);
      }
    } else {
      this.cancelAllAIGCAgenticTask();
    }
    const i = e2.J(this._containerService, e);
    if (!(e.isRegenerate || e.isContinueGenerate)) {
      this._contentGeneratorTaskReportService.reportAgentMessageAction(
        i,
        "send_message",
      );
    }
    const s = this._containerService.createInstance(H.K, {
      isManualSettings: +!!e.generateArgs,
    });
    s.setParamsByAIGCAgenticData(i.model, e);
    s.report();
    const a =
      this._contentGeneratorTaskReportService.createPerfAgentConversationReporter(
        i.model.idModel.submitId,
      );
    if (a != null) {
      a.recordUserMessageSentTime();
    }
    if (a != null) {
      a.recordConversationConfig(e.conversationConfig);
    }
    this._listenAgenticTask(i);
    this._onAigcDataTaskCreated.fire(i.model);
    return _.TZ(i.model);
  }
  createAgentEditTask(e) {
    const t = e3.J(this._containerService, e);
    return _.TZ(t.model);
  }
  aigcAgenticTaskSendToolResult(e, t, r) {
    return i
      ._(function* (e, t, r) {
        const i =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : {};
        const s = this._agenticTaskStore.find(e);
        if (s) {
          return s.task.sendToolResultMessage(t, r, i);
        }
        const a = this._pendingFormCollectionTasks.get(e);
        if (a) {
          let n;
          const o = a.model.statusModel.recordStatus;
          a.model.statusModel.recordStatus = l.DMLGenRecordStatus.Loading;
          const d = yield a.sendFormCollectionToolResult(t, r, {
            shouldFailCurrentTask: (n = i.shouldFailCurrentTask) != null && n,
          });
          if (d.ok) {
            this._pendingFormCollectionTasks.delete(e);
            a.resetCompletionFlags();
            this._listenAgenticTask(a);
            this._onAigcDataTaskRestored.fire(a.model);
          } else {
            a.model.statusModel.recordStatus = o;
          }
          return d;
        }
        return _.xz(
          C.Q.ErrClientCommon,
          "No agentic task found to send tool result message",
        );
      })
      .apply(this, arguments);
  }
  aigcAgenticTaskResumeInterrupt(e, t, r) {
    return i
      ._(function* () {
        const i = this._interruptApprovalResumeQueue.get(e);
        const s =
          i == null
            ? undefined
            : i.then(
                () => undefined,
                () => undefined,
              );
        const a = (s != null ? s : Promise.resolve()).then(() =>
          this._resumeAgenticTaskInterrupt(e, t, r),
        );
        this._interruptApprovalResumeQueue.set(e, a);
        try {
          return yield a;
        } finally {
          if (this._interruptApprovalResumeQueue.get(e) === a) {
            this._interruptApprovalResumeQueue.delete(e);
          }
        }
      })
      .call(this);
  }
  _resumeAgenticTaskInterrupt(e, t, r) {
    return i
      ._(function* () {
        const i = this._agenticTaskStore.find(e);
        if (i) {
          return yield i.task.resumeInterrupt(t, r);
        }
        const s = this._pendingInterruptApprovalTasks.get(e);
        if (s) {
          s.resetCompletionFlags();
          const a = yield s.resumeInterrupt(t, r);
          this._listenAgenticTask(s);
          if (a.ok) {
            this._pendingInterruptApprovalTasks.delete(e);
          }
          this._onAigcDataTaskRestored.fire(s.model);
          return a;
        }
        return _.xz(C.Q.ErrClientCommon, "task not found");
      })
      .call(this);
  }
  cancelAIGCAgenticTask(e) {
    const t = this._agenticTaskStore.find(e);
    if (t) {
      t.task.interrupt();
      t.task.terminateSubscribeStreamLease();
      this._contentGeneratorTaskReportService.reportAgentMessageAction(
        t.task,
        "stop",
      );
      this._agenticTaskStore.remove(e);
      t.disposes.forEach((e) => e.dispose());
      this._onAigcDataTaskRemoved.fire(t.task.model);
      return _.TZ(t.task.model);
    }
    return _.nj();
  }
  cancelAIGCAgenticTaskByConversationId(e, t) {
    const r = [];
    this._agenticTaskStore.tasks.forEach((i) => {
      var s = i.task.model.conversationId === e;
      var a = t === undefined || i.task.model.idModel.workspaceId === t;
      if (s && a) {
        var { submitId } = i.task.model.idModel;
        if (submitId) {
          var o = this.cancelAIGCAgenticTask(submitId);
          if (o.ok && o.value) {
            r.push(o.value);
          }
        }
      }
    });
    return _.TZ(r);
  }
  cancelAllAIGCAgenticTask() {
    const e = [];
    this._agenticTaskStore.tasks.forEach((t) => {
      var { submitId } = t.task.model.idModel;
      if (submitId) {
        var i = this.cancelAIGCAgenticTask(submitId);
        if (i.ok && i.value) {
          e.push(i.value);
        }
      }
    });
    return _.TZ(e);
  }
  cancelAIGCAgenticTaskByInput(e) {
    if (Z_1(e) || e.workspaceId !== undefined) {
      return this.cancelAIGCAgenticTaskByConversationId(
        e.conversationId,
        e.workspaceId,
      );
    }
    return this.cancelAllAIGCAgenticTask();
  }
  accelerateAIGCQueueTask(e) {
    return i
      ._(function* () {
        try {
          if (
            !(yield this._contentGeneratorTaskQueueService.generateAccelerate(
              e,
            ))
          ) {
            return _.xz(C.Q.ErrClientCommon, "failed to accelerate");
          }
          return _.nj();
        } catch (error) {
          return _.xz(
            C.Q.ErrClientCommon,
            error instanceof Error ? error.message : "failed to accelerate",
            error,
          );
        }
      })
      .call(this);
  }
  getSwitchModelQueueInfo(e) {
    return i
      ._(function* () {
        try {
          let t;
          const r =
            yield this._contentGenerationTaskQueueDataService.getSwitchModelQueueInfo(
              e,
            );
          if (!r.ok) {
            return _.xz(r.code, (t = r.msg) != null ? t : "", r.errorInfo);
          }
          return _.TZ(r.value);
        } catch (error) {
          return _.xz(C.Q.ErrClientCommon, "", error);
        }
      })
      .call(this);
  }
  cancelAIGCQueueTask(historyId) {
    return i
      ._(function* () {
        try {
          const t =
            yield this._contentGenerationTaskQueueDataService.cancelGenerate({
              historyId,
            });
          if (!t.ok) {
            let r;
            let i;
            const s = t.errorInfo;
            const a =
              (r =
                s == null || (i = s.data) == null
                  ? undefined
                  : i.fail_starling_message) != null
                ? r
                : "";
            return _.xz(t.code, a, t.errorInfo);
          }
          return _.nj();
        } catch (error) {
          return _.xz(C.Q.ErrClientCommon, "", error);
        }
      })
      .call(this);
  }
  createMixAudioVideoTask(e) {
    return new Promise((resolve) => {
      if (e.tasks.length === 0) {
        return void resolve(_.TZ([]));
      }
      var r = e4.B(this._containerService, e);
      r.onTaskDone((e) => {
        resolve(_.TZ(e));
      });
      r.onTaskFailure((e) => {
        resolve(e);
      });
    });
  }
  dispose() {
    for (const e of this._pendingFormCollectionTasks.values()) {
      e.dispose();
    }
    this._pendingFormCollectionTasks.clear();
    for (const t of this._pendingInterruptApprovalTasks.values()) {
      t.dispose();
    }
    this._pendingInterruptApprovalTasks.clear();
    this._clearAllPendingVideoGenerateFromDraftTasks();
  }
  _restoreAIGCAgenticTaskMonitor(e) {
    if (e.resumeConversationStr) {
      const { submitId } = e.idModel;
      if (!(submitId && this._agenticTaskStore.find(submitId))) {
        if (e.hasPendingFormCollection) {
          if (submitId && !this._pendingFormCollectionTasks.has(submitId)) {
            const r = this._containerService.createInstance(ek.P, {
              model: e,
            });
            this._pendingFormCollectionTasks.set(submitId, r);
          }
          return;
        }
        if (k.T(e)) {
          if (submitId && !this._pendingInterruptApprovalTasks.has(submitId)) {
            const i = this._containerService.createInstance(ek.P, {
              model: e,
            });
            this._pendingInterruptApprovalTasks.set(submitId, i);
          }
          return;
        }
        const { runningTasks } = this._agenticTaskStore;
        if (!(runningTasks.length >= N.eF)) {
          const a = this._containerService.createInstance(ek.P, {
            model: e,
          });
          this._listenAgenticTask(a);
          this._onAigcDataTaskRestored.fire(e);
        }
      }
    }
  }
  _createGeneratorCommerceManager(e) {
    let t;
    const r = this._dreaminaCommercialFeatureContainerService.getInstanceSync();
    return this._containerService.createInstance(w.E, {
      sceneOptions:
        r == null ? undefined : r.getCommercialSceneOptionsFromAIGCData(e),
      submitId: (t = e.idModel.submitId) != null ? t : "",
    });
  }
  _restoreAIGCMediaTaskMonitor(e, t) {
    let r;
    if (
      !this._taskStore.find(
        (t) => t.task.model.idModel.submitId === e.idModel.submitId,
      )
    ) {
      if (T.g(e)) {
        r = this._containerService.createInstance(eb.T, {
          model: e,
          generatorCommerceManager: this._createGeneratorCommerceManager(e),
        });
      } else if (y.A(e)) {
        r =
          e.statusModel.recordStatus === l.DMLGenRecordStatus.Thinking
            ? this._containerService.createInstance(eA.a, {
                model: e,
                generatorCommerceManager:
                  this._createGeneratorCommerceManager(e),
              })
            : this._containerService.createInstance(ey.X, {
                model: e,
                generatorCommerceManager:
                  this._createGeneratorCommerceManager(e),
              });
      } else if (A.n(e)) {
        r = this._containerService.createInstance(eT.w, {
          model: e,
          generatorCommerceManager: this._createGeneratorCommerceManager(e),
        });
      } else {
        throw Error("未支持的任务类型，补充代码设计");
      }
      this._listenAndBindAigcTask(r, undefined, t);
      this._createQueueTaskByAIGCDataTask(r);
      this._onAigcDataTaskRestored.fire(e);
    }
  }
  _reportGenerateStatus(e) {
    if (y.A(e.model)) {
      this._contentGeneratorTaskReportService.reportImageGenerateStatus(e);
    } else if (T.g(e.model)) {
      this._contentGeneratorTaskReportService.reportVideoGenerateStatus(e);
    } else {
      if (A.n(e.model)) {
        if (b.N(e.model.generateType)) {
          this._contentGeneratorTaskReportService.reportMusicGenerateStatus(e);
        } else {
          this._contentGeneratorTaskReportService.reportAudioGenerateStatus(e);
        }
      }
    }
  }
  _reportGenerateStatusMore(e) {
    if (y.A(e.model)) {
      this._contentGeneratorTaskReportService.reportImageGenerateStatusMore(e);
    } else if (T.g(e.model)) {
      this._contentGeneratorTaskReportService.reportVideoGenerateStatusMore(e);
    }
  }
  _listenAndBindAigcTask(e, input) {
    const r =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const i = arguments.length > 3 ? arguments[3] : undefined;
    const disposes = [];
    this._reportGenerateStatusMore(e);
    disposes.push(
      e.onGeneratedDone((t) => {
        this._onAigcDataTaskGenerated.fire(t);
        disposes.forEach((e) => e.dispose());
        this._taskStore = this._taskStore.filter((t) => t.task !== e);
        this._fetchAndUpdateAllQueueingTask();
        if (!r) {
          this._reportGenerateStatus(e);
          this._reportGenerateStatusMore(e);
        }
      }),
    );
    disposes.push(
      e.onQueueDetailsChanged((t) => {
        if (!r) {
          this._reportGenerateStatusMore(e);
        }
      }),
    );
    disposes.push(
      e.onSubmitSuccess((t) => {
        this._createQueueTaskByAIGCDataTask(e);
        this._fetchAndUpdateAllQueueingTask();
        if (!r) {
          this._reportAccelerateUseAction(e);
          this._reportGenerateStatusMore(e);
          this._contentGeneratorTaskReportService.reportVipFunctionDetailsUse(
            e,
            i,
          );
        }
        this._onAigcDataTaskSubmitSuccess.fire(t);
      }),
    );
    disposes.push(
      e.onGeneratedFailed(() => {
        this._onAigcDataTaskGeneratedFailed.fire(e.model);
        this._tryHandleQueueTaskFailed(e);
        if (!r) {
          this._reportGenerateStatus(e);
          this._reportGenerateStatusMore(e);
        }
      }),
    );
    if (e instanceof eA.a) {
      disposes.push(
        e.onGeneratePartialSuccess((t) => {
          this._onAigcDataTaskGeneratePartialSuccess.fire(t);
          if (
            ((e) => {
              const { finishedImageCount, maxGenerateCount, totalImageCount } =
                e;
              return (
                !!L.Cw(totalImageCount) &&
                !!L.hU(finishedImageCount) &&
                finishedImageCount >=
                  (L.EZ(maxGenerateCount) ? maxGenerateCount : U.qV) &&
                totalImageCount > finishedImageCount
              );
            })(t)
          ) {
            if (!r) {
              this._reportGenerateStatus(e);
              this._reportGenerateStatusMore(e);
            }
            disposes.forEach((e) => e.dispose());
            this._taskStore = this._taskStore.filter((t) => t.task !== e);
            this._fetchAndUpdateAllQueueingTask();
            e.dispose();
          }
        }),
      );
    }
    this._taskStore.push({
      task: e,
      input,
      disposes,
    });
  }
  _reportAccelerateUseAction(e) {
    const {
      statusModel: { queueInfo },
    } = e.model;
    if (M.n(queueInfo == null ? undefined : queueInfo.priority)) {
      const r = R.H({
        scene: P.Sk.QueueSpeed,
      });
      const i = this._containerService.createInstance(x.l, {
        action: q.U.Use,
        enterSource: D.k.GenerateTaskBottomTooltip,
      });
      i.setParamsByCommercialSceneOptions(r);
      i.report();
    }
  }
  _createQueueTaskByAIGCDataTask(e) {
    this._contentGeneratorTaskQueueService.createQueueTaskByAIGCDataTask(e);
  }
  _fetchAndUpdateAllQueueingTask() {
    this._contentGeneratorTaskQueueService.fetchAndUpdateAllQueueingTask();
  }
  _tryHandleQueueTaskFailed(e) {
    let t;
    let r;
    let i;
    const {
      statusModel: { queueInfo, recordStatus },
    } = e.model;
    if (
      (queueInfo == null ? undefined : queueInfo.priority) ===
        E.k.AccelerationPackageUser &&
      recordStatus === l.DMLGenRecordStatus.Failed
    ) {
      const n =
        (t =
          this._dreaminaCommercialFeatureContainerService.getInstanceSync()) ==
        null
          ? undefined
          : t.getNeedCredits(
              R.H({
                scene: P.Sk.QueueSpeed,
              }),
            );
      if ((n == null ? undefined : n.credits) && n.credits > 0) {
        this._notificationService.warning(
          u.Ay.t("web_m10n_toast_generate_failed_credits_return", {
            num: n.credits,
          }),
        );
        if (
          (i =
            this._dreaminaCommercialFeatureContainerService.getInstanceSync()) !=
          null
        ) {
          i.syncRemoteCreditHistory();
        }
        return;
      }
      this._notificationService.warning(
        u.Ay.t(
          "web_priority_generation_failed_toast",
          {},
          "高峰期加速拥挤，免费次数已返还",
        ),
      );
      if (
        (r =
          this._dreaminaCommercialFeatureContainerService.getInstanceSync()) !=
        null
      ) {
        r.forceUpdateBenefitStrategy();
      }
    }
  }
  _createTask(e, t, r) {
    let i;
    let s;
    let a;
    const n = ((e) => {
      const { action, submitId } = e;
      if (action === g.f.Continue) {
        return submitId;
      }
    })(t);
    const o = n
      ? this._taskStore.find((e) => {
          var t;
          return (
            ((e, t) => {
              if (!e) {
                return false;
              }
              const { action, submitId } = e;
              return action === g.f.Continue && submitId === t;
            })(e.input, n) &&
            ((t = e.task.model.statusModel.recordStatus), e5.has(t))
          );
        })
      : undefined;
    if (o) {
      return _.TZ(o.task.model);
    }
    const c = this._taskStore.filter((e) => {
      var t;
      t = e.task.model.statusModel.recordStatus;
      return e5.has(t);
    });
    const { action } = t;
    i = c.length;
    s = N.kk;
    if (action !== g.f.Stop && i > s) {
      if (!(r == null ? undefined : r.disableLimitTips)) {
        this._notificationService.error(
          u.Ay.t("web_click_too_fast_toast", {}, "点击速度过快，请稍后重试"),
        );
      }
      return _.xz(C.Q.ErrClientCommon, "too much generating task");
    }
    if (t.isRegenerate && t.targetAIGCData) {
      const m = this._taskStore.find((e) => {
        var r;
        return (
          e.task.model.idModel.submitId ===
          ((r = t.targetAIGCData) == null ? undefined : r.idModel.submitId)
        );
      });
      const v =
        (m == null ? undefined : m.task.model.statusModel.recordStatus) ===
        l.DMLGenRecordStatus.Failed;
      if ((m == null ? undefined : m.input) && v) {
        a = e(this._containerService, d.A(m.input));
      }
    }
    if (!a) {
      a = e(this._containerService, d.A(t));
    }
    const { submitId } = a.model.idModel;
    if (T.g(a.model)) {
      const f =
        this._contentGeneratorTaskReportService.createPerfVideoReporter(
          submitId,
        );
      if (f != null) {
        f.recordClickGenerateTime();
      }
    } else if (y.A(a.model)) {
      const I =
        this._contentGeneratorTaskReportService.createPerfImageReporter(
          submitId,
        );
      if (I != null) {
        I.recordClickGenerateTime();
      }
    }
    this._listenAndBindAigcTask(a, t, false, r);
    if (T.g(a.model)) {
      const S =
        r && "clickAIVideoGenerateReporter" in r
          ? r.clickAIVideoGenerateReporter
          : undefined;
      const k = S != null ? S : this._containerService.createInstance(et.W, {});
      k.setParamsByTask(a);
      k.report();
    } else if (y.A(a.model)) {
      const M = this._containerService.createInstance(ev, {});
      M.setParamsByTask(a);
      M.report();
    } else if (A.n(a.model)) {
      const E = b.N(a.model.generateType)
        ? this._containerService.createInstance(ee, {})
        : this._containerService.createInstance(Z, {});
      E.setParamsByTask(a);
      E.report();
    }
    this._onAigcDataTaskCreated.fire(a.model);
    return _.TZ(a.model);
  }
  _createVideoTask(e, t, r) {
    return this._createTask(e, t, r);
  }
  _createImageTask(e, t, r) {
    return this._createTask(e, t, r);
  }
  _bootstrap() {
    this._contentGeneratorTaskQueueService.bootstrap();
  }
  _deleteAIGCAgenticTask(e) {
    let t;
    let r;
    const i = this._agenticTaskStore.find(e);
    const s = this._pendingFormCollectionTasks.get(e);
    const a = this._pendingInterruptApprovalTasks.get(e);
    const n =
      (t = (r = i == null ? undefined : i.task) != null ? r : s) != null
        ? t
        : a;
    if (n) {
      this._pendingFormCollectionTasks.delete(e);
      this._pendingInterruptApprovalTasks.delete(e);
      this._agenticTaskStore.remove(e);
      if (i != null) {
        i.disposes.forEach((e) => e.dispose());
      }
      for (const o of new Set([i == null ? undefined : i.task, s, a])) {
        if (o) {
          o.terminateSubscribeStreamLease();
          o.dispose();
        }
      }
      this._domainModelChangeSyncService.syncDomainModelData({
        eventType: B.T.Delete,
        modelType: B.$.AIGCData,
        id: e,
      });
      this._onAigcDataTaskRemoved.fire(n.model);
    }
  }
  _deleteAIGCMediaTask(e) {
    const t = this._taskStore.find((t) => t.task.model.idModel.submitId === e);
    if (t) {
      this._clearPendingVideoGenerateFromDraftTaskByTask(t.task);
      this._taskStore = this._taskStore.filter(
        (t) => t.task.model.idModel.submitId !== e,
      );
      t.disposes.forEach((e) => e.dispose());
      if (
        t.task.model.statusModel.recordStatus === l.DMLGenRecordStatus.Loading
      ) {
        t.task.dispose();
      }
      this._domainModelChangeSyncService.syncDomainModelData({
        eventType: B.T.Delete,
        modelType: B.$.AIGCData,
        id: e,
      });
      this._onAigcDataTaskRemoved.fire(t.task.model);
    }
  }
  _clearPendingVideoGenerateFromDraftTask(e, t) {
    const r = this._pendingVideoGenerateFromDraftTasks.get(e);
    if (r && (!t || r.task === t)) {
      this._pendingVideoGenerateFromDraftTasks.delete(e);
      r.disposes.forEach((e) => e.dispose());
    }
  }
  _getPendingVideoGenerateFromDraftTask(e) {
    const t = this._pendingVideoGenerateFromDraftTasks.get(e);
    if (t) {
      if (this._taskStore.some((e) => e.task === t.task)) {
        return t.task;
      }
      this._clearPendingVideoGenerateFromDraftTask(e, t.task);
    }
  }
  _registerPendingVideoGenerateFromDraftTask(e, t) {
    const r = {
      task: t,
      disposes: [],
    };
    this._pendingVideoGenerateFromDraftTasks.set(e, r);
    r.disposes.push(
      t.onSubmitSuccess(() =>
        this._clearPendingVideoGenerateFromDraftTask(e, t),
      ),
      t.onGeneratedFailed(() =>
        this._clearPendingVideoGenerateFromDraftTask(e, t),
      ),
    );
  }
  _clearPendingVideoGenerateFromDraftTaskByTask(e) {
    for (const [t, r] of this._pendingVideoGenerateFromDraftTasks) {
      if (r.task === e) {
        return void this._clearPendingVideoGenerateFromDraftTask(t, r.task);
      }
    }
  }
  _clearAllPendingVideoGenerateFromDraftTasks() {
    for (const e of [...this._pendingVideoGenerateFromDraftTasks.keys()]) {
      this._clearPendingVideoGenerateFromDraftTask(e);
    }
  }
  _listenAgenticTask(e) {
    const t = [];
    const r =
      this._contentGeneratorTaskReportService.getPerfAgentConversationReporter(
        e.model.taskData.taskId,
      );
    t.push(
      e.onSessionExpired(() => {
        var { submitId } = e.model.idModel;
        if (submitId) {
          var i = this._agenticTaskStore.find(submitId);
          if ((i == null ? undefined : i.task) === e) {
            this._agenticTaskStore.remove(submitId);
          }
          if (this._pendingFormCollectionTasks.get(submitId) === e) {
            this._pendingFormCollectionTasks.delete(submitId);
          }
          if (this._pendingInterruptApprovalTasks.get(submitId) === e) {
            this._pendingInterruptApprovalTasks.delete(submitId);
          }
        }
        t.forEach((e) => e.dispose());
      }),
    );
    t.push(
      e.onGeneratedDone((t) => {
        if (
          (r =
            this._dreaminaCommercialFeatureContainerService.getInstanceSync()) !=
          null
        ) {
          r.forceUpdateBenefitStrategy();
        }
        var r;
        var { submitId } = e.model.idModel;
        if (submitId) {
          if (
            t.taskData.replyMessages.some(
              (e) =>
                e instanceof c.NuroToolCallMessage && F.U(e) && !e.toolResult,
            )
          ) {
            this._pendingFormCollectionTasks.set(submitId, e);
          } else if (k.T(t)) {
            this._pendingInterruptApprovalTasks.set(submitId, e);
          } else {
            e.releaseSubscribeStreamLease();
          }
          this._agenticTaskStore.remove(submitId);
        }
        this._onAigcDataTaskGenerated.fire(t);
        this._contentGeneratorTaskReportService.reportAgentMessageReply(e);
        this._contentGeneratorTaskReportService.reportAgenticTaskVipFunctionDetails(
          t,
        );
      }),
    );
    t.push(
      e.onPendingInterruptApproval((t) => {
        if (k.T(t)) {
          var r;
          var i =
            (r = this._agenticTaskStore.find(e.model.idModel.submitId)) == null
              ? undefined
              : r.task;
          if (i && i !== e) {
            e.terminateSubscribeStreamLease();
            e.dispose();
            return;
          }
          if (
            eC.A(e, this._agenticTaskStore, this._pendingInterruptApprovalTasks)
          ) {
            var { workspaceId, projectId } = e.model.idModel;
            if (workspaceId !== undefined) {
              e.acquireSubscribeStreamLease(workspaceId, projectId);
            }
          }
        }
      }),
    );
    t.push(
      e.onGeneratedFailed((t) => {
        e.terminateSubscribeStreamLease();
        var { submitId } = e.model.idModel;
        if (submitId) {
          this._agenticTaskStore.remove(submitId);
        }
        this._onAigcDataTaskGeneratedFailed.fire(t);
        this._contentGeneratorTaskReportService.reportAgentMessageReply(e);
      }),
    );
    t.push(
      e.onSubmitSuccess((e) => {
        this._onAigcDataTaskSubmitSuccess.fire(e);
      }),
    );
    t.push(
      e.onConversationStateChange((e) => {
        this._onAigcAgenticDataConversationStateChange.fire(e);
      }),
    );
    t.push(
      e.onMediaRestored((e) => {
        if (y.A(e.model)) {
          var t =
            this._contentGeneratorTaskReportService.createPerfImageReporter(
              e.id,
            );
          if (t != null) {
            t.recordClickGenerateTime();
          }
          if (t != null) {
            t.recordSubmitTime();
          }
        }
        if (T.g(e.model)) {
          var r =
            this._contentGeneratorTaskReportService.createPerfVideoReporter(
              e.id,
            );
          if (r != null) {
            r.recordClickGenerateTime();
          }
          if (r != null) {
            r.recordSubmitTime();
          }
        }
        this._createQueueTaskByAIGCDataTask(e);
      }),
    );
    t.push(
      e.onMediaGeneratedDone((t) => {
        this._fetchAndUpdateAllQueueingTask();
        this._reportGenerateStatus(t);
        this._reportGenerateStatusMore(t);
        if (r) {
          r.recordCurrentArtifactFinishTime(t.id, e);
        }
      }),
    );
    t.push(
      e.onMediaQueueDetailsChanged((e) => {
        this._reportGenerateStatusMore(e);
      }),
    );
    t.push(
      e.onMediaGeneratedFailed((t) => {
        this._reportGenerateStatus(t);
        this._tryHandleQueueTaskFailed(t);
        this._reportGenerateStatusMore(t);
        if (r) {
          r.recordCurrentArtifactFinishTime(t.id, e);
        }
      }),
    );
    t.push(
      e.onComplianceError(() => {
        this._onAigcComplianceError.fire();
      }),
    );
    this._agenticTaskStore.add(e, t);
  }
  constructor(e, t, r, i, s, a, n, o) {
    this._configurationService = e;
    this._containerService = t;
    this._domainModelChangeSyncService = r;
    this._dreaminaCommercialFeatureContainerService = i;
    this._contentGeneratorTaskReportService = s;
    this._contentGeneratorTaskQueueService = a;
    this._contentGenerationTaskQueueDataService = n;
    this._notificationService = o;
    this._agenticTaskStore = new eS.U();
    this._pendingFormCollectionTasks = new Map();
    this._pendingInterruptApprovalTasks = new Map();
    this._interruptApprovalResumeQueue = new Map();
    this._pendingVideoGenerateFromDraftTasks = new Map();
    this._taskStore = [];
    this._onAigcDataTaskCreated = new h.v();
    this._onAigcDataTaskGenerated = new h.v();
    this._onAigcDataTaskGeneratedFailed = new h.v();
    this._onAigcDataTaskGeneratePartialSuccess = new h.v();
    this._onAigcDataTaskSubmitSuccess = new h.v();
    this._onAigcDataTaskRestored = new h.v();
    this._onAigcDataTaskRemoved = new h.v();
    this._onAigcAgenticDataConversationStateChange = new h.v();
    this._onAigcComplianceError = new h.v();
    p.v("ContentGeneratorTaskFeatureService", this);
    this._isParallelStream = e.abTestManager.getBooleanAbTestValue(
      O.ob.DreaminaCreativeAgentParallelStream,
      false,
    );
    this._bootstrap();
  }
}
export { e8 as h };
e8 = n.Cg(
  [
    n.Qj(0, j.a),
    n.Qj(1, v._),
    n.Qj(2, Q.j),
    n.Qj(3, G.X),
    n.Qj(4, M_1),
    n.Qj(5, R_1),
    n.Qj(6, C_1),
    n.Qj(7, m.Ot),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      j.a === undefined ? Object : j.a,
      v._ === undefined ? Object : v._,
      Q.j === undefined ? Object : Q.j,
      G.X === undefined ? Object : G.X,
      M_1 === undefined ? Object : M_1,
      typeof ContentGeneratorTaskQueueService === "undefined"
        ? Object
        : ContentGeneratorTaskQueueService,
      C_1 === undefined ? Object : C_1,
      m.Ot === undefined ? Object : m.Ot,
    ]),
  ],
  e8,
);
