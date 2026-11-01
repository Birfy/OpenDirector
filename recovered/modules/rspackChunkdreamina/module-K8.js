if (require.j == "wl4") var a = require("oa");
let o = Symbol("lvErrorRef");
export function nj() {
  return a._(
    {
      ok: true,
      value: null,
      pair: () => [null, null],
      code: 0,
      msg: "",
    },
    {
      [o]: true,
    },
  );
}
export function TZ(e) {
  return a._(
    {
      ok: true,
      value: e,
      pair: () => [null, e],
      code: 0,
      msg: "",
    },
    {
      [o]: true,
    },
  );
}
function c(code, msg, cause, errorInfo) {
  let n = a._(
    {
      ok: false,
      code,
      msg,
      cause,
      errorInfo,
      toString: () =>
        `[${code}]${msg}.${
          cause
            ? (function e(t) {
                if (t === undefined) {
                  return "";
                }
                if (t instanceof Error) {
                  return `
caused by [jsError]${t.name}-${t.message}`;
                }
                return `
caused by [${t.code}]${t.msg}${t.ok ? "" : e(t.cause)}`;
              })(cause)
            : ""
        }`,
      pair: () => [n, null],
      stack: cause instanceof Error ? cause.stack : undefined,
      findJsError: () =>
        ((e) => {
          let t = e;
          while (t) {
            if (t instanceof Error) {
              return t;
            }
            t = t.cause;
          }
          return Error(e.toString());
        })(n),
    },
    {
      [o]: true,
    },
  );
  return n;
}
export function xz(e, t, r) {
  return c(e, t, undefined, r);
}
export function iX(e, t, r, a) {
  return c(e, t, r, a);
}
export function GC(e) {
  return typeof e === "object" && e !== null && o in e;
}
