import n from "yMd";
export function S(e) {
  return e === n.NB.DreaminaAiAudio || e === n.NB.DreaminaTTSAudio;
}
export function t(e) {
  return S(e.effectType);
}
