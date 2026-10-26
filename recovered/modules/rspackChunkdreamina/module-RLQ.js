import a from "oa";
function r() {
  return {
    mode: "auto",
  };
}
export function oS() {
  return {
    image: {
      model: r(),
      aspectRatio: r(),
      resolution: r(),
    },
    video: {
      model: r(),
      aspectRatio: r(),
      resolution: r(),
    },
  };
}
function l(t) {
  const mode =
    (t == null ? undefined : t.mode) === "manual" ? "manual" : "auto";
  const i = mode === "manual" ? (t == null ? undefined : t.value) : undefined;
  return a._(
    {
      mode,
    },
    i
      ? {
          value: i,
        }
      : {},
  );
}
function n(t) {
  return {
    model: l(t == null ? undefined : t.model),
    aspectRatio: l(t == null ? undefined : t.aspectRatio),
    resolution: l(t == null ? undefined : t.resolution),
  };
}
export function fN(t) {
  if (t) {
    return {
      image: n(t.image),
      video: n(t.video),
      updatedAtMs: t.updatedAtMs,
    };
  }
  return oS();
}
function d(t) {
  if (t.mode === "manual" && t.value) {
    return {
      mode: "manual",
      value: t.value,
    };
  }
  return {
    mode: "auto",
  };
}
function c(t) {
  return {
    model: d(t.model),
    aspectRatio: d(t.aspectRatio),
    resolution: d(t.resolution),
  };
}
export function WS(t) {
  return {
    image: c(t.image),
    video: c(t.video),
  };
}
