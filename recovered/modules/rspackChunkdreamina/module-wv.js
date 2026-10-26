function r(e, t) {
  if (typeof e === "number" && Number.isFinite(e) && e > 0) {
    return e;
  }
  if (typeof t === "number" && Number.isFinite(t) && t > 0) {
    return t / 1000;
  }
}
export function Rd(e, t) {
  let i;
  let n;
  let a;
  let o;
  const s = t ? e.itemList.find((e) => e.id === t) : e.itemList[0];
  return r(
    (i =
      (n = s == null || (a = s.video) == null ? undefined : a.duration) != null
        ? n
        : (o = e.video) == null
          ? undefined
          : o.duration) != null
      ? i
      : e.videoDuration,
  );
}
export function gC(e) {
  let t;
  let i;
  let n;
  let a;
  let o;
  if (
    (t =
      (i = r(
        e == null ? undefined : e.duration,
        e == null ? undefined : e.durationMs,
      )) != null
        ? i
        : r(
            e == null || (n = e.originVideo) == null ? undefined : n.duration,
          )) != null
  ) {
    return t;
  }
  return r(
    e == null || (o = e.transcodedVideo) == null || (a = o.origin) == null
      ? undefined
      : a.duration,
  );
}
export function RJ(e, t) {
  const i = Rd(e, t);
  return typeof i === "number" && i > 30;
}
Object.defineProperty(exports, "pp", {
  enumerable: true,
  get: () => 30,
});
