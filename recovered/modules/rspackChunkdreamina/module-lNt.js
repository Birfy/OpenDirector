import a from "f3";
export function sK(t) {
  let e;
  return (
    ((e = t.introduction) == null ? undefined : e.trim()) || t.description || ""
  );
}
export function WA(t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
  const i = t.trim();
  return i.length > 0 && i.length <= e && !/[\r\n]/.test(i);
}
export function HX(t) {
  return (
    t.source === a.fc.User &&
    typeof t.originalSkillId === "string" &&
    /^[1-9]\d*$/.test(t.originalSkillId) &&
    !t.extraInfo.isEdited
  );
}
Object.defineProperty(exports, "FN", {
  enumerable: true,
  get: () => 40,
});
Object.defineProperty(exports, "x8", {
  enumerable: true,
  get: () => "解释一下这个技能的使用方法",
});
