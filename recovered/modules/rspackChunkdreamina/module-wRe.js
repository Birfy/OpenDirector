import i from "oa";
import s from "bk";
import a from "QWK";
import n from "Dm";
import o from "M8X";
import l from "Kt";
import d from "nss";
import { v } from "./module-N3n.js";
import u from "ymj";
import { z } from "./module-Wr5.js";
import p from "kF";
import _ from "dkM";
import { t as t_1 } from "A4";
class g extends p.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_agent_generate";
  }
}
export class K extends p.o {
  setParamsByAIGCAgenticData(e, t) {
    v(this, e);
    this._params.actionType = this._getActionType(t);
    if (this._params.actionType === "generate") {
      let r;
      let i;
      let s;
      let a;
      let n;
      let l;
      let imageSettingsModelKey;
      let videoSettingsModelKey;
      let g;
      let m;
      var f;
      var k;
      var y;
      var I;
      var S;
      var T;
      var C;
      var b;
      var E;
      var x;
      var w;
      var A;
      var R;
      var F;
      var M;
      var P;
      var U;
      var j;
      var D;
      var N;
      var q;
      var O;
      var G;
      var L;
      var V;
      var z;
      var K;
      var B;
      var H;
      var Q;
      var X;
      var Z;
      var W;
      var Y;
      var J;
      var $;
      let ee;
      const et =
        (ee = o.cQ(this._containerService, d.Y).getInstanceSync()) == null
          ? undefined
          : ee.agenticModelConfigData.data;
      this.setParams(
        ((r = t.generateArgs),
        (i = (et == null ? undefined : et.ok) ? et.value : undefined),
        (n = r == null ? undefined : r.imageArgs),
        (l = r == null ? undefined : r.videoArgs),
        (imageSettingsModelKey =
          (n == null ? undefined : n.modelKey) || "auto"),
        (videoSettingsModelKey =
          (l == null ? undefined : l.modelKey) || "auto"),
        (g =
          i == null
            ? undefined
            : i.imageData.modelList.find(
                (e) => e.key === imageSettingsModelKey,
              )),
        (m =
          i == null
            ? undefined
            : i.videoData.modelList.find(
                (e) => e.key === videoSettingsModelKey,
              )),
        {
          imageSettingsModelName:
            (g == null ? undefined : g.name) || imageSettingsModelKey,
          imageSettingsModelKey,
          imageSettingsRatio:
            (n == null ? undefined : n.width) && n.height
              ? "".concat(n.width, ":").concat(n.height)
              : (n == null ? undefined : n.imageRatioType) !== undefined &&
                  (s = t_1[n.imageRatioType]) != null
                ? s
                : "auto",
          imageSettingsDefinition:
            (n == null ? undefined : n.imageResolutionType) || "auto",
          videoSettingsModelName:
            (m == null ? undefined : m.name) || videoSettingsModelKey,
          videoSettingsModelKey,
          videoSettingsRatio:
            (l == null ? undefined : l.videoRatioType) !== undefined &&
            (a = t_1[l.videoRatioType]) != null
              ? a
              : "auto",
          videoSettingsDefinition:
            (l == null ? undefined : l.videoResolutionType) || "auto",
        }),
      );
    }
    this._params.enterFrom =
      (f = (b = e.metricsExtra) == null ? undefined : b.enterFrom) != null
        ? f
        : "click";
    this._params.showcaseId =
      (E = e.metricsExtra) == null ? undefined : E.showcaseId;
    this._params.quoteTurnId =
      (x = e.metricsExtra) == null ? undefined : x.quoteTurnId;
    this._params.lastPictureId =
      (w = e.metricsExtra) == null ? undefined : w.lastPictureId;
    this._params.lastGenerateId =
      (A = e.metricsExtra) == null ? undefined : A.lastGenerateId;
    this._params.imageId = (R = e.metricsExtra) == null ? undefined : R.imageId;
    this._params.videoId = (F = e.metricsExtra) == null ? undefined : F.videoId;
    this._params.audioId = (M = e.metricsExtra) == null ? undefined : M.audioId;
    this._params.referenceTemplateCnt =
      (k = (P = e.metricsExtra) == null ? undefined : P.referenceTemplateCnt) !=
      null
        ? k
        : 0;
    this._params.referenceTemplateId =
      (y = (U = e.metricsExtra) == null ? undefined : U.referenceTemplateId) !=
      null
        ? y
        : "";
    this._params.drawType =
      (j = e.metricsExtra) == null ? undefined : j.drawType;
    this._params.enterScenario =
      (D = e.metricsExtra) == null ? undefined : D.enterScenario;
    this._params.impression_id =
      (N = e.metricsExtra) == null ? undefined : N.impressionId;
    this._params.searchKeyword =
      (q = e.metricsExtra) == null ? undefined : q.searchKeyword;
    this._params.searchId =
      (O = e.metricsExtra) == null ? undefined : O.searchId;
    this._params.searchRequestId =
      (G = e.metricsExtra) == null ? undefined : G.searchRequestId;
    this._params.referenceCnt =
      (I = (L = e.metricsExtra) == null ? undefined : L.referenceCnt) != null
        ? I
        : 0;
    this._params.referenceSet = "byte_edit";
    this._params.hasRejectedAudit =
      (V = e.metricsExtra) == null ? undefined : V.hasRejectedAudit;
    this._params.isCreativeMode = +!!e.creativeModelEnabled;
    this._params.isInspirationSearchOn = +!!e.searchEnabled;
    this._params.conversationId = e.conversationId;
    this._params.workspaceId = e.idModel.workspaceId;
    this._params.position =
      (S = (z = e.metricsExtra) == null ? undefined : z.position) != null
        ? S
        : "page_bottom_box";
    this._params.promptCnt =
      ((K = e.metricsExtra) == null ? undefined : K.promptCnt) ||
      "".concat(
        (T =
          (H = e.metricsExtra) == null || (B = H.prompt) == null
            ? undefined
            : B.length) != null
          ? T
          : 0,
      ) ||
      "0";
    this._params.promptSource =
      (C = (Q = e.metricsExtra) == null ? undefined : Q.promptSource) != null
        ? C
        : "custom";
    this._params.generateLogId =
      (X = e.metricsExtra) == null ? undefined : X.generateLogId;
    this._params.generateSuggestion =
      (Z = e.metricsExtra) == null ? undefined : Z.generateSuggestion;
    this._params.skillId = (W = e.metricsExtra) == null ? undefined : W.skillId;
    this._params.skillName =
      (Y = e.metricsExtra) == null ? undefined : Y.skillName;
    this._params.skillSource =
      (J = e.metricsExtra) == null ? undefined : J.skillSource;
    this._params.originalSkillId =
      ($ = e.metricsExtra) == null ? undefined : $.originalSkillId;
    u.o(this, e.metricsExtra);
    z(this, e);
  }
  _getCollectorClass() {
    return g;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      s._(i._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["action_type", "position", "user_message_id", "prompt"].forEach((t) => {
      n.F4(e[t], "[ClickAgentGenerateReporter] ".concat(t, " is required"));
    });
  }
  _getActionType(e) {
    if (e.isRegenerate) {
      return "regenerate";
    }
    if (e.isContinueGenerate) {
      return "continue_generate";
    }
    return "generate";
  }
  constructor(e, t) {
    super(_.T(e), t);
    this._containerService = t;
  }
}
K = a.Cg(
  [
    a.Qj(1, l._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      l._ === undefined ? Object : l._,
    ]),
  ],
  K,
);
