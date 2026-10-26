import i from "Qey";
import r from "Ut";
function n() {
  return i.Ay.t("web_my_feed_reference_style_only", {}, "风格");
}
export function or(e) {
  return "#".concat(n()).concat(e);
}
export function h9(e, t) {
  const a = t.find(
    (e) => e.blendModel.abilityName === r.DABlendAbilityName.StyleCode,
  );
  if (!a) {
    return e;
  }
  const { code } = a.blendModel;
  return e
    .replace(
      RegExp("#(".concat(n(), "|style)\\s?(").concat(code, ")"), "i"),
      "",
    )
    .trim();
}
export function A_(e) {
  if (!e) {
    return "";
  }
  const t = e.match(
    RegExp("#(".concat(n(), "|style)\\s?([a-zA-Z0-9]{6})"), "i"),
  );
  if (t) {
    return t[2];
  }
  return "";
}
