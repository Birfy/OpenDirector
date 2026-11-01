import a from "QWK";
import i from "Dm";
import n from "Kt";
import o from "kF";
class s extends o.v {
  constructor(...e) {
    super(...e);
    this.eventName = "action_driver_adjust_param";
  }
}
export class A extends o.o {
  _setInitialParams(e) {
    if (e) {
      const { position, enterFrom, aiFeatureName } = e;
      this.setParams({
        position,
        enterFrom: enterFrom || "click",
        aiFeatureName,
      });
    }
  }
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "modal", "enter_from", "position"].forEach((t) => {
      i.F4(
        e[t],
        "[ActionDriverAdjustParamReporter] ".concat(t, " is required"),
      );
    });
    if (e.enter_from === "ai_feature") {
      i.F4(
        e.ai_feature_name,
        "[ActionDriverAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "select_template":
        i.F4(
          e.video_action_template_id,
          "[ActionDriverAdjustParamReporter] video_action_template_id is required for action=select_template",
        );
        i.F4(
          e.video_action_template_name,
          "[ActionDriverAdjustParamReporter] video_action_template_name is required for action=select_template",
        );
        break;
      case "select_action_driver_mode":
        i.F4(
          e.model_name,
          "[ActionDriverAdjustParamReporter] model_name is required for action=select_action_driver_mode",
        );
    }
  }
  _setCommonParams() {
    this.setParams({
      modal: "video_action_driver",
    });
  }
  constructor(e, t) {
    super({}, t);
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
  }
}
A = a.Cg(
  [
    a.Qj(1, n._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Object, n._ === undefined ? Object : n._]),
  ],
  A,
);
