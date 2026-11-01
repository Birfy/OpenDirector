export function Cs() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  const n = new Uint8Array(
    (t = t.filter(Boolean)).reduce((acc, item) => acc + item.byteLength, 0),
  );
  let i = 0;
  t.forEach((e) => {
    n.set(e, i);
    i += e.byteLength;
  });
  return n;
}
export function e$(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (e[t] << 8) + (e[t + 1] || 0);
}
export function nO(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (e[t] << 16) + (e[t + 1] << 8) + (e[t + 2] || 0);
}
export function kl(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (
    ((e[t] << 24) >>> 0) + (e[t + 1] << 16) + (e[t + 2] << 8) + (e[t + 3] || 0)
  );
}
export function p1(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new DataView(e.buffer, e.byteOffset, e.byteLength).getInt32(t);
}
export function xV(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return 4294967296 * kl(e, t) + kl(e, t + 4);
}
export function OU(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return (r.getUint32(t) << 32) | r.getUint32(t + 4);
}
export function hy(e) {
  let t;
  let r = "avc1.";
  for (let n = 0; n < 3; n++) {
    if ((t = e[n].toString(16)).length < 2) {
      t = "0".concat(t);
    }
    r += t;
  }
  return r;
}
export function vF(e) {
  let t = "";
  e.forEach((e) => {
    t += ("0" + Number(e).toString(16)).slice(-2).toUpperCase();
  });
  if (t.length <= 32) {
    for (let r = 32 - t.length, n = 0; n < r; n++) {
      t += "0";
    }
  }
  return t;
}
export function qg(e) {
  if (!Array.isArray(e)) {
    const t = [];
    let r = "";
    for (let n = 0; n < e.length; n++) {
      if (n % 2) {
        t.push(parseInt((r = e[n - 1] + e[n]), 16));
      }
    }
    return t;
  }
  return e.map((e) => parseInt(e, 16));
}
export function ZT(e, t) {
  return Number(e + "." + t);
}
export function ct(e) {
  if (e.length < 5) {
    return 0;
  }
  const t = Math.hypot(e[0], e[3]);
  const r = Math.hypot(e[1], e[4]);
  if (t === 0 || r === 0) {
    return 0;
  }
  return (180 * Math.atan2(e[1] / r, e[0] / t)) / Math.PI;
}
