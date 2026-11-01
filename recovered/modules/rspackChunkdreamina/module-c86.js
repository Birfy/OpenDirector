import a from "H26";
import i from "yMd";
export function M4(e, t) {
  let r;
  let a;
  const n = e == null ? undefined : e.fields.find((e) => e.type === i.pH.Fps);
  if (
    (n == null ? undefined : n.values.length) &&
    (r = (a = n.values.find((e) => e === t)) != null ? a : n.defaultValue) !=
      null
  ) {
    return r;
  }
  return t;
}
export function H_(e) {
  if (KT(e)) {
    return i.pH.FramesSlideBar;
  }
  if (
    e == null
      ? undefined
      : e.fields.some((e) => e.type === i.pH.Frames && e.values.length > 0)
  ) {
    return i.pH.Frames;
  }
}
export function KT(e) {
  const t =
    e == null
      ? undefined
      : e.fields.find((e) => e.type === i.pH.FramesSlideBar);
  if (
    t &&
    !t.disabled &&
    Number.isFinite(t.min) &&
    Number.isFinite(t.max) &&
    Number.isFinite(t.step) &&
    !(t.step <= 0) &&
    !(t.max < t.min)
  ) {
    return t;
  }
}
export function W8(e) {
  return !!KT(e);
}
export function zh(e) {
  let t;
  const r = KT(e);
  if (r) {
    const { min, max, step } = r;
    return Array.from(
      {
        length: Math.floor((max - min) / step) + 1,
      },
      (e, t) => min + t * step,
    );
  }
  const d =
    e == null ? undefined : e.fields.find((e) => e.type === i.pH.Frames);
  if ((t = d == null ? undefined : d.values) != null) {
    return t;
  }
  return [];
}
export function q_(e, t, r) {
  if (!t) {
    return r;
  }
  const n = KT(e);
  if (typeof (n == null ? undefined : n.defaultValue) === "number") {
    return (n.defaultValue / t) * a.K;
  }
  const s =
    e == null ? undefined : e.fields.find((e) => e.type === i.pH.Frames);
  if (typeof (s == null ? undefined : s.defaultValue) === "number") {
    return (s.defaultValue / t) * a.K;
  }
  return r;
}
export function HO(e) {
  const { durationMs, fps, model, fallbackDurationMs } = e;
  if (!fps || !model) {
    return durationMs;
  }
  const s = zh(model).map((e) => (e / fps) * a.K);
  if (!s.length || s.includes(durationMs)) {
    return durationMs;
  }
  return q_(model, fps, fallbackDurationMs);
}
