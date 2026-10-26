import a from "f3";
import { F } from "./module-Rrw.js";
import { P } from "./module-dRT.js";
export function tE(t) {
  return t.source === a.fc.User && !!t.originalSkillId && !t.extraInfo.isEdited;
}
export function xV(t) {
  return P(t);
}
export function zU(t) {
  return xV(t);
}
export function rM(t, e) {
  return !(
    !e.publishAllowed ||
    (t.isSkillPackage && !F()) ||
    t.source === a.fc.Platform ||
    t.source === a.fc.Market ||
    !xV(t) ||
    tE(t)
  );
}
