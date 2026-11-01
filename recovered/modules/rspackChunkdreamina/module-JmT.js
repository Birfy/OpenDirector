import i from "Tj";
export function S9(e, t) {
  if (e <= 0) {
    return 0;
  }
  return Math.max(0, Math.min(t, e - 1));
}
function a(e) {
  return typeof e === "number" && e > 0;
}
export function K5(e) {
  let t;
  let n;
  let i;
  const r =
    (t = (n = e.songAbility) == null ? undefined : n.duration) != null
      ? t
      : (i = e.instrumentalAbility) == null
        ? undefined
        : i.duration;
  if (a(r)) {
    return r;
  }
}
export function aT(e) {
  let t;
  const n = (t = e.audio) == null ? undefined : t.originAudio;
  if (n) {
    const r = i.N(n.durationMs, n.duration);
    if (a(r)) {
      return r;
    }
  }
}
export function HG(e) {
  let t;
  const n =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const i = (t = e.itemList) != null ? t : [];
  const u = S9(i.length, n);
  const s = i[u];
  const d = s ? aT(s) : undefined;
  if (a(d)) {
    return d;
  }
  return K5(e);
}
