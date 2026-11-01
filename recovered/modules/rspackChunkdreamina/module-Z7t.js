export var Dr = [
  "image",
  "video",
  "audio",
  "document",
  "story",
  "canvas",
  "subject",
];
export var MZ = ["image", "video", "audio", "document"];
const n = new Set(Dr);
const o = new Set(MZ);
export function yM(e) {
  return n.has(e);
}
export function xT(e) {
  return o.has(e);
}
