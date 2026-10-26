import i from "QWK";
import r from "Dm";
import n from "puv";
import o from "Kt";
import s from "kF";
class l extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_image_adjust_param";
  }
}
export class v extends s.o {
  _setInitialParams(e) {
    if (e) {
      const {
        templateId,
        templateTypeId,
        impressionId,
        searchRequestId,
        searchId,
        enterScenario,
        drawType,
        enterFrom,
        position,
        aiFeatureName,
        toolItemId,
        generateLogId,
        generateSuggestion,
        showcaseId,
      } = e;
      this.setParams({
        templateId,
        templateTypeId,
        impressionId,
        searchRequestId,
        searchId,
        enterScenario,
        drawType,
        enterFrom,
        position,
        aiFeatureName,
        toolItemId,
        generateLogId,
        generateSuggestion,
        showcaseId,
      });
    }
  }
  _getCollectorClass() {
    return l;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "enter_from", "modal", "position"].forEach((t) => {
      r.F4(e[t], "[AiImageAdjustParamReporter] ".concat(t, " is required"));
    });
    if (e.enter_from === "ai_feature") {
      r.F4(
        e.ai_feature_name,
        "[AiImageAdjustParamReporter] ai_feature_name is required when enter_from is 'ai_feature'",
      );
    }
  }
  _validateAction(e) {
    switch (e.action) {
      case "switch_model":
        r.F4(
          e.model_name,
          "[AiImageAdjustParamReporter] model_name is required",
        );
        break;
      case "switch_aspect_ratio":
        r.F4(e.ratio, "[AiImageAdjustParamReporter] ratio is required");
        break;
      case "switch_definition":
        r.F4(
          e.definition,
          "[AiImageAdjustParamReporter] definition is required",
        );
        break;
      case "switch_generate_number":
        r.F4(
          e.generate_num,
          "[AiImageAdjustParamReporter] generate_num is required",
        );
    }
  }
  _setCommonParams() {
    this._params.modal = "aigc_image";
  }
  constructor(e, t) {
    var teamId = n.y();
    super(
      teamId
        ? {
            teamId,
          }
        : {},
      t,
    );
    this._containerService = t;
    this._setCommonParams();
    this._setInitialParams(e);
  }
}
v = i.Cg(
  [
    i.Qj(1, o._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [Object, o._ === undefined ? Object : o._]),
  ],
  v,
);
