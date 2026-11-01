import i from "oa";
import r from "bk";
import a from "QWK";
import o from "Dm";
import l from "Kt";
import u from "M6d";
import { Xd } from "./module-fRi.js";
import d from "yB";
import c from "mnO";
import m from "c0";
import v from "SF";
import p from "pY";
import g from "GFn";
import f from "fIG";
import { k as k_1 } from "./module-Vhy.js";
import _ from "WJu";
import y from "ie";
import b from "Ey";
import A from "Cf";
import x from "tDK";
import T from "VHu";
import I from "Rq";
import w from "VJy";
import C from "u55";
import S from "Sl";
import k from "y7i";
import N from "Wp";
import F from "kF";
import R from "dkM";
class M extends F.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_ai_video_generate";
  }
}
export class W extends F.o {
  setParamsByTask(e) {
    p.n(this, this._dreaminaCommercialFeatureContainerService, e.sceneOptions);
    let t;
    let n;
    let i;
    let r;
    let a;
    let o;
    let l;
    let d;
    const e_model = e.model;
    C.W(this, e_model);
    I.j(this, e_model);
    w.S(this, e_model);
    y.Y(this, e_model);
    N.J(this, e_model);
    b.y(this, e_model);
    f.L(this, e_model);
    m.a(this, e_model.taskExtra);
    T.C(this, e_model);
    _.y(this, e_model);
    k_1(this, e_model);
    A.iU(this, e_model);
    this._params.generateType = e_model.generateType;
    this._params.submitId = e_model.idModel.submitId;
    this._params.taskId = e_model.idModel.taskId;
    this._params.submitGroupId = e_model.taskExtra.submitGroupId;
    this._params.originItemId = e_model.taskExtra.originId;
    this._params.lastSubmitId = e_model.taskExtra.previewSubmitId;
    this._params.referenceSet = "byte_edit";
    if (this._params.imagePromptCnt) {
      this._params.aspectRatio =
        this._params.imagePromptCnt > 0
          ? "custom"
          : (d = e_model.originalInput) == null
            ? undefined
            : d.videoAspectRatio;
    }
    this._params.seed = (
      (r = e_model.originalInput) == null ? undefined : r.seed
    )
      ? "".concat(e_model.originalInput.seed)
      : undefined;
    this._params.isDefaultSeed = +!!e_model.taskExtra.isDefaultSeed;
    const F =
      (a = e_model.originalInput) == null ? undefined : a.videoGenInputs[0];
    this._params.originVideoDuration =
      (t = F == null ? undefined : F.durationMs) != null
        ? t
        : (o = e_model.video) == null
          ? undefined
          : o.durationMs;
    this._params.videoDuration = 1000 * e_model.videoDuration;
    this._params.modelResolution = Xd(e_model);
    const R =
      F == null || (l = F.v2vOpt) == null ? undefined : l.superResolution;
    if (R) {
      this._params.hdUpscaleTo = R.resolution;
    }
    this._params.withRelaxedGenerateModeSwitch = 0;
    this._params.enterFrom =
      (n = e_model.taskExtra.enterFrom) != null ? n : "click";
    this.setParams(g.X(e_model));
    this._params.hasRejectedAudit = e_model.taskExtra.hasRejectedAudit;
    this._params.replyMessageId = e_model.taskExtra.replyMessageId;
    this._params.projectId = e_model.taskExtra.projectId;
    this._params.isAgentMode = +!!u.F(e_model);
    this._params.imageId = e_model.taskExtra.imageId;
    this._params.videoId = e_model.taskExtra.videoId;
    this._params.audioId = e_model.taskExtra.audioId;
    if (!this._params.actionType) {
      this._params.actionType = e_model.taskExtra.isRegenerate
        ? "regenerate"
        : "generate";
    }
    if (!this._params.genMode) {
      x.h(this, e_model);
    }
    k.o(this, e_model);
    this._params.referenceCnt =
      (i = this._params.imagePromptCnt) != null ? i : 0;
    c.H(this, e_model);
    S.v(this, e_model.originalInput);
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateLipSyncFields(e);
    v.B(e, "ClickAIVideoGenerateReporter");
  }
  _getCollectorClass() {
    return M;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      r._(i._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateRequiredFields(e) {
    [
      "is_freetrial",
      "vip_right_trial_type",
      "credits_need",
      "credits_now",
      "generate_type",
      "gen_mode",
      "submit_id",
      "action_type",
      "prompt_cnt",
      "prompt_type",
      "image_prompt_cnt",
      "enter_from",
      "is_default_seed",
      "is_first_relaxed_generate",
      "is_from_preview",
      "is_quick_preview",
      "is_relaxed_generate",
      "magic_box_cnt",
      "with_relaxed_generate_mode_switch",
    ].forEach((t) => {
      o.F4(e[t], "[ClickAIVideoGenerateReporter] ".concat(t, " is required"));
    });
  }
  _validateLipSyncFields(e) {
    if (e.lip_sync_type) {
      [
        "lip_sync_mode",
        "voice_category_id",
        "voice_category_key",
        "voice_id",
        "voice_key",
      ].forEach((t) => {
        o.F4(
          e[t],
          "[ClickAIVideoGenerateReporter] ".concat(
            t,
            " is required when lip_sync_type exists",
          ),
        );
      });
      if (e.lip_sync_type === "text_to_speech") {
        ["script", "audio_speed"].forEach((t) => {
          o.F4(
            e[t],
            "[ClickAIVideoGenerateReporter] ".concat(
              t,
              " is required when lip_sync_type is text_to_speech",
            ),
          );
        });
      }
    }
  }
  constructor(e, t, n) {
    super(R.T(e), t);
    this._containerService = t;
    this._dreaminaCommercialFeatureContainerService = n;
  }
}
W = a.Cg(
  [
    a.Qj(1, l._),
    a.Qj(2, d.X),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      l._ === undefined ? Object : l._,
      d.X === undefined ? Object : d.X,
    ]),
  ],
  W,
);
