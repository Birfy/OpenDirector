import { NB } from "./module-yMd.js";
export function v(e) {
  return e === NB.DreaminaAiVideo || e === NB.ShortVideo;
}
export function s(e) {
  return v(e.effectType);
}
