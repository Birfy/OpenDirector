import a from "oa";
import n from "JSz";
import { F } from "./module-UH9.js";
import { M } from "./module-hP_2.js";
export function hT() {
  return "gen-".concat(n.bz());
}
export function OC(e) {
  let t;
  let i;
  let a;
  let n;
  let l;
  let d;
  let u;
  const featureEntrance = (a = e.featureEntrance) != null ? a : F();
  const c =
    ((i = (t = {
      editType: e.editType,
      featureEntrance,
    }).featureEntrance) != null
      ? i
      : F()) !== "canvas" ||
    (t.editType && t.editType !== "tool")
      ? t.editType
        ? t.editType
        : "tool"
      : "canva";
  const m = ((e, t) => {
    switch (e) {
      case "canva":
        return M.Canva;
      case "agent":
        return M.Agent;
      case "octo":
        return M.Octo;
    }
    if (t) {
      return t;
    }
    if (e !== "template") {
      return M.ToolImage;
    }
    throw Error("[ROI] toolId is required when editType=template");
  })(c, e.toolId);
  const subToolId = (n = e.subToolId) != null ? n : m;
  const tabName = (l = e.tabName) != null ? l : c;
  const enterFrom = (d = e.enterFrom) != null ? d : c;
  return {
    scenario: e.scenario,
    featureKey: e.featureKey,
    featureEntrance,
    featureEntranceDetail: e.featureEntranceDetail,
    editType: c,
    toolId: m,
    subToolId,
    tabName,
    enterFrom,
    templateId: (u = e.templateId) != null ? u : "",
    sceneLv1: c,
    sceneLv2: m,
    extraParams: e.extraParams,
  };
}
export function Wu(e) {
  if (e == null) {
    throw Error("[ROI] babiParam is required");
  }
  let t;
  const i = JSON.stringify(
    ((t = {
      feature_entrance: e.featureEntrance,
      feature_entrance_detail: e.featureEntranceDetail,
      feature_key: e.featureKey,
      scenario: e.scenario,
      edit_type: e.editType,
      tool_id: e.toolId,
      sub_tool_id: e.subToolId,
      tab_name: e.tabName,
      enter_from: e.enterFrom,
      template_id: e.templateId,
      scene_lv1: e.sceneLv1,
      scene_lv2: e.sceneLv2,
    }),
    e.extraParams &&
      (t.extra_param = {
        model_id: e.extraParams.modelId,
        generate_type: e.extraParams.generateType,
      }),
    t),
  );
  if (i == null) {
    throw Error("[ROI] failed to stringify babi_param");
  }
  return encodeURIComponent(i);
}
export function wi(e) {
  const { babiParam, generateId = hT(), extraParams } = e;
  return a._(
    {
      generate_id: generateId,
      babi_param: Wu(babiParam),
    },
    extraParams,
  );
}
