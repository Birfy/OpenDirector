import i from "yMd";
export function r(e) {
  return e === i.NB.Single || e === i.NB.ImageMaterial;
}
export function Y(e) {
  return r(e.effectType);
}
