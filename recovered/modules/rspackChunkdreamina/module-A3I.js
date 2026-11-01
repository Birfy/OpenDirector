import i from "Qey";
import r from "Ut";
import a from "VH";
import o from "yMd";
const l = {
  [a._.Canny]: o.yo.Canny,
  [a._.Depth]: o.yo.Depth,
  [a._.Pose]: o.yo.Pose,
  [a._.BgPaint]: o.yo.BgPaint,
  [r.DABlendAbilityName.ControlNet]: o.yo.Default,
  [r.DABlendAbilityName.BgPaint]: o.yo.BgPaint,
  [r.DABlendAbilityName.FaceGan]: o.yo.FaceWrap,
  [r.DABlendAbilityName.StyleReference]: o.yo.StyleReference,
  [r.DABlendAbilityName.Unknown]: o.yo.Default,
  [r.DABlendAbilityName.IpKeep]: o.yo.IpKeep,
  [r.DABlendAbilityName.ByteEdit]: o.yo.ByteEdit,
  [r.DABlendAbilityName.StyleCode]: o.yo.StyleCode,
  [r.DABlendAbilityName.T2I]: o.yo.Default,
  [r.DABlendAbilityName.I2I]: o.yo.Default,
};
const u = {
  [a._.Canny]: "web_reference_element_edge",
  [a._.Depth]: "web_reference_element_depth",
  [a._.Pose]: "web_reference_element_pose",
  [a._.BgPaint]: "web_reference_element_object",
  [r.DABlendAbilityName.ControlNet]: "",
  [r.DABlendAbilityName.BgPaint]: "web_reference_element_object",
  [r.DABlendAbilityName.FaceGan]: "web_dre_t2i_reference_option_one_face",
  [r.DABlendAbilityName.StyleReference]: "web_reference_element_style",
  [r.DABlendAbilityName.Unknown]: "",
  [r.DABlendAbilityName.IpKeep]: "web_reference_element_character",
  [r.DABlendAbilityName.ByteEdit]: "web_reference_element_smart",
  [r.DABlendAbilityName.StyleCode]: "web_t2i_style_code_placeholder",
  [r.DABlendAbilityName.T2I]: "",
  [r.DABlendAbilityName.I2I]: "",
};
function s(e) {
  if (e.abilityName === r.DABlendAbilityName.ControlNet) {
    return e.controlNet.name;
  }
  return e.abilityName;
}
function d(e) {
  return l[s(e)];
}
export { d as l };
export function P(e, t) {
  if (
    e.abilityName === r.DABlendAbilityName.FaceGan &&
    t &&
    t.filter((e) => e.abilityName === r.DABlendAbilityName.FaceGan).length >= 2
  ) {
    return i.Ay.t("web_dre_t2i_reference_option_more_faces", {}, "人像合影");
  }
  const n = u[s(e)];
  return i.Ay.t(n, {}, "");
}
