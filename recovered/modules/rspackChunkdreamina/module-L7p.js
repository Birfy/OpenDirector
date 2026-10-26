const a = /^[\u4e00-\u9fa5a-zA-Z0-9-]*$/;
export function eZ(t) {
  return a.test(t);
}
export function eG(t, e) {
  return !!t && e.some((e) => e === t);
}
export function t_(t, e) {
  if (!eZ(t)) {
    return "invalid_character";
  }
  const { existingSkillNames, unchangedName } = e;
  if (unchangedName === t) {
    return "valid";
  }
  if (eG(t, existingSkillNames)) {
    return "duplicate";
  }
  return "valid";
}
