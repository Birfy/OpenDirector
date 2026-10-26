import r from "vpF";
const a = /^(\d{4})-(\d{1,2})-(\d{1,2})[ T](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/;
const o = /(Z|[+-]\d{2}:?\d{2})$/i;
export function H9(e) {
  const t = e == null ? undefined : e.trim();
  if (t) {
    if (o.test(t)) {
      const i = Date.parse(t);
      if (Number.isNaN(i)) {
        return undefined;
      }
      return i;
    }
    const r = t.match(a);
    if (r) {
      const [, n, l, s, u, d, c = "0"] = r;
      const m = Number(n);
      const p = Number(l);
      const v = Number(s);
      const f = Number(u);
      const g = Number(d);
      const h = Number(c);
      const y = Date.UTC(m, p - 1, v, f, g, h) - 28800000;
      const _ = new Date(y + 28800000);
      if (
        _.getUTCFullYear() === m &&
        _.getUTCMonth() === p - 1 &&
        _.getUTCDate() === v &&
        _.getUTCHours() === f &&
        _.getUTCMinutes() === g &&
        _.getUTCSeconds() === h
      ) {
        return y;
      }
    }
  }
}
export function rG(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "YYYY-MM-DD HH:mm:ss";
  const i = H9(e);
  if (i === undefined) {
    return "";
  }
  return r(i).format(t);
}
export function P$(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : Date.now();
  const r = H9(e);
  const n = H9(t);
  return r !== undefined && n !== undefined && i >= r && i <= n;
}
