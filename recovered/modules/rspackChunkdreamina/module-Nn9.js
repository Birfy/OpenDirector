import i from "oa";
import r from "bk";
import n from "Qey";
import o from "A3I";
import s from "xH6";
import { G } from "./module-C6j.js";
export function Y(e) {
  if (e.length < 1) {
    return "";
  }
  const t = e.reduce((acc, item) => {
    var a;
    var n = G(item.blendModel);
    return r._(i._({}, acc), {
      [n]: ((a = acc[n]) != null ? a : 0) + 1,
    });
  }, {});
  if (Object.values(t).some((e) => e > 1)) {
    let a;
    const d = Object.keys(t);
    a = d.reduce((acc, item) => {
      if (t[acc] && t[item] && t[item] > t[acc]) {
        return item;
      }
      return acc;
    }, d[0]);
    const reference = {
      [s.gP.ByteEdit]: n.Ay.t("web_reference_element_smart", {}, "智能参考"),
      [s.gP.FaceGan]: n.Ay.t(
        "web_dre_t2i_reference_option_more_faces",
        {},
        "人像合影",
      ),
      [s.gP.BgPaint]: n.Ay.t("web_reference_element_object", {}, "主体识别"),
      [s.gP.IpKeep]: n.Ay.t("web_reference_element_character", {}, "角色特征"),
      [s.gP.ControlNetCanny]: n.Ay.t(
        "web_reference_element_edge",
        {},
        "边缘轮廓",
      ),
      [s.gP.ControlNetDepth]: n.Ay.t("web_reference_element_depth", {}, "景深"),
      [s.gP.ControlNetPose]: n.Ay.t(
        "web_reference_element_pose",
        {},
        "人物姿势",
      ),
    }[a];
    if (reference) {
      return n.Ay.t("dreamina_image4_seededit_multi_img_modelchange_toast", {
        reference,
      });
    }
  }
  const c = e
    .map((e) => o.P(e.blendModel))
    .filter((e, t, a) => a.indexOf(e) === t);
  for (var m = Math.min(c.length, 3), u = {}, h = 0; h < m; h++) {
    u["string".concat(h)] = c[h];
  }
  return n.Ay.t(
    "web_controlnet_model_".concat(m),
    u,
    [
      "",
      "Can’t reference {string0} with this model",
      "Can’t reference {string0} and {string1} with this model",
      "Can’t reference {string0}, {string1}, and {string2} with this model",
    ][m],
  );
}
