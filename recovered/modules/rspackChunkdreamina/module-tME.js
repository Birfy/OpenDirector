import r from "Qey";
export function pd(e) {
  let t;
  let i;
  let r;
  if (
    (t =
      (i = (r = e.video) == null ? undefined : r.duration) != null
        ? i
        : e.videoDuration) != null
  ) {
    return t;
  }
  return 0;
}
export function Tj(e, t) {
  return pd(e) > t;
}
export function Kh(string) {
  return r.Ay.t(
    "seedance_25_ban_toolong",
    {
      string,
    },
    "暂不支持".concat(string, " s以上视频"),
  );
}
Object.defineProperty(exports, "Do", {
  enumerable: true,
  get: () => 30,
});
Object.defineProperty(exports, "Qd", {
  enumerable: true,
  get: () => 30,
});
