import n from "Ut";
export function F(e) {
  if (e) {
    const t = new n.DAVideoGenV2VAVMix();
    t.enable = e.enable;
    t.videoItemId = e.videoItemId;
    t.audioVid = e.audioVid;
    t.scene = e.scene;
    return t;
  }
}
export function s(e) {
  let t;
  let i;
  let n;
  let r;
  if (e) {
    return {
      enable: (t = e.enable) != null && t,
      videoItemId:
        (i = (r = e.videoItemId) == null ? undefined : r.toString()) != null
          ? i
          : "",
      audioVid: (n = e.audioVid) != null ? n : "",
      scene: e.scene,
    };
  }
}
