import r from "yMd";
const a = new Set([
  r.ce.Text2Video,
  r.ce.VideoBGM,
  r.ce.AudioVideoMix,
  r.ce.VideoAudioEffect,
  r.ce.VideoAudioEffectMix,
  r.ce.AIEffectWorkVideo,
  r.ce.AIEffectWorkImage,
]);
export var V = (e) => e !== undefined && a.has(e);
