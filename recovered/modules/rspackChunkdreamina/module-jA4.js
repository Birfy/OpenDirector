import a from "QWK";
import r from "Dm";
import s from "puv";
import l from "Kt";
import n from "kF";
class o extends n.v {
  constructor(...t) {
    super(...t);
    this.eventName = "agent_mode_adjust_param";
  }
}
export class S extends n.o {
  _setInitialParams(t) {
    if (t) {
      const {
        enterFrom,
        lastPictureId,
        lastGenerateId,
        drawType,
        position,
        showcaseId,
        aiFeatureName,
      } = t;
      this.setParams({
        enterFrom,
        lastPictureId,
        lastGenerateId,
        drawType,
        position,
        showcaseId,
        aiFeatureName,
      });
    }
  }
  _getCollectorClass() {
    return o;
  }
  _validateParams(t) {
    this._validateRequiredFields(t);
  }
  _validateRequiredFields(t) {
    ["action", "enter_from"].forEach((e) => {
      r.F4(t[e], "[AgentModeAdjustParamReporter] ".concat(e, " is required"));
    });
    if (t.enter_from === "ai_feature") {
      r.F4(
        t.ai_feature_name,
        "[AgentModeAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  constructor(t, e) {
    var teamId = s.y();
    super(
      teamId
        ? {
            teamId,
          }
        : {},
      e,
    );
    this._containerService = e;
    this._setInitialParams(t);
  }
}
S = a.Cg(
  [
    a.Qj(1, l._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Object, l._ === undefined ? Object : l._]),
  ],
  S,
);
