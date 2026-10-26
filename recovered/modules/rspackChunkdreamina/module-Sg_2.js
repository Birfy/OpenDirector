import a from "Qey";
import r from "Jy";
export var rd = r.B;
export var xH = "480p";
export function BC(t, e) {
  if (t.isDraft) {
    return e.filter((t) => t === xH);
  }
  return e;
}
const o = {
  "1080p": "web_new_video_generate_1080p",
};
export function H5(t) {
  const { model, resolution } = t;
  return r.q({
    model,
    resolution,
  });
}
export function N(t) {
  const { model, resolution } = t;
  const string0 = H5({
    model,
    resolution,
  });
  if (string0) {
    const s = resolution ? o[resolution] : undefined;
    if (s) {
      return a.Ay.t(s, {}, "".concat(string0, "生成视频"));
    }
    return a.Ay.t(
      "web_new_video_generate_resolution",
      {
        string0,
      },
      "".concat(string0, "生成视频"),
    );
  }
}
export function qh(t) {
  const { resolution } = t;
  if (resolution) {
    return o[resolution];
  }
}
