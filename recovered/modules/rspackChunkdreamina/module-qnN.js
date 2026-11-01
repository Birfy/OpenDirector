import i from "SZS";
export function EZ(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 && e <= 8;
}
export function Cw(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 && e <= 15;
}
export function hU(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 && e <= 15;
}
function l(e, t) {
  return EZ(e) && t.includes(e);
}
export function PP(e) {
  if (Array.isArray(e) && e.length !== 0) {
    const t = [];
    for (const n of e) {
      if (!EZ(n)) {
        return;
      }
      const i = t.at(-1);
      if (i !== undefined && n !== i + 1) {
        return;
      }
      t.push(n);
    }
    return t;
  }
}
export function Nv(e, t) {
  const n = PP(t);
  return !!n && l(e, n);
}
export function XT(e, t) {
  if (Cw(e)) {
    if (!hU(t) || t > e) {
      return 1;
    }
    return e - t;
  }
  if (t === i.qV) {
    return i.qV;
  }
  return 1;
}
export function id(e) {
  const { generateCountOptions, selectedGenerateCount, defaultGenerateCount } =
    e;
  const r = PP(generateCountOptions);
  if (r) {
    if (l(selectedGenerateCount, r)) {
      return selectedGenerateCount;
    }
    if (l(defaultGenerateCount, r)) {
      return defaultGenerateCount;
    }
    return r.at(-1);
  }
}
Object.defineProperty(exports, "YJ", {
  enumerable: true,
  get: () => 8,
});
Object.defineProperty(exports, "n5", {
  enumerable: true,
  get: () => 15,
});
