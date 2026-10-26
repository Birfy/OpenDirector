import i from "Qey";
function r(e) {
  return String(e).padStart(2, "0");
}
export function bg(e) {
  const t = Math.max(0, Math.round(e / 1000));
  const n = Math.floor(t / 60);
  return "".concat(r(n), ":").concat(r(t % 60));
}
export function nW() {
  return i.Ay.t("seedance_25_edit_frame_label", {}, "视频帧标注");
}
export function Dl(e) {
  const t = bg(e);
  return "".concat(t, " ").concat(nW());
}
export function dv(e, t) {
  const num = String(t);
  switch (e) {
    case "video":
      return i.Ay.t(
        "seedance_25_edit_video_num",
        {
          num,
        },
        "视频".concat(num),
      );
    case "audio":
      return i.Ay.t(
        "seedance_25_edit_audio_num",
        {
          num,
        },
        "音频".concat(num),
      );
    default:
      return i.Ay.t(
        "seedance_25_edit_image_num",
        {
          num,
        },
        "图片".concat(num),
      );
  }
}
