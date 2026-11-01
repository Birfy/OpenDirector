import n from "./module-Xy_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-O9_9.js";
import a from "./module-xg_10.js";
import s from "./module-d_10.js";
import u from "./module-Mi_9.js";
import c from "./module-Su_9.js";
import f from "./module-vj_10.js";
import l from "./module-V0_9.js";
import h from "./module-Gl_9.js";
import v from "./module-dV_9.js";
import d from "./module-ng_10.js";
import p from "./module-C_10.js";
import g from "./module-wL_9.js";
import y from "./module-uc_9.js";
import m from "./module-X7_9.js";
import b from "./module-Tc_9.js";
import w from "./module-X_10.js";
const b_UNSUPPORTED_Y = b.UNSUPPORTED_Y;
const push = [].push;
const S = i(/./.exec);
const O = i(push);
const _ = i("".slice);
a(
  "split",
  function (t, e, r) {
    let i;
    i =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (t, r) {
            let i;
            let a;
            let s;
            const u = d(f(this));
            const l = r === undefined ? 4294967295 : r >>> 0;
            if (l === 0) {
              return [];
            }
            if (t === undefined) {
              return [u];
            }
            if (!c(t)) {
              return o(e, u, t, l);
            }
            for (
              var h = [],
                v =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.unicode ? "u" : "") +
                  (t.sticky ? "y" : ""),
                p = 0,
                y = RegExp(t.source, v + "g");
              (i = o(m, y, u)) &&
              (!((a = y.lastIndex) > p) ||
                (O(h, _(u, p, i.index)),
                i.length > 1 && i.index < u.length && n(push, h, g(i, 1)),
                (s = i[0].length),
                (p = a),
                !(h.length >= l)));
            ) {
              if (y.lastIndex === i.index) {
                y.lastIndex++;
              }
            }
            if (p === u.length) {
              if (s || !S(y, "")) {
                O(h, "");
              }
            } else {
              O(h, _(u, p));
            }
            if (h.length > l) {
              return g(h, 0, l);
            }
            return h;
          }
        : "0".split(undefined, 0).length
          ? function (t, r) {
              if (t === undefined && r === 0) {
                return [];
              }
              return o(e, this, t, r);
            }
          : e;
    return [
      function (e, r) {
        const n = f(this);
        const a = u(e) ? undefined : p(e, t);
        if (a) {
          return o(a, e, n, r);
        }
        return o(i, d(n), e, r);
      },
      function (t, n) {
        const o = s(this);
        const a = d(t);
        const u = r(i, o, a, n, i !== e);
        if (u.done) {
          return u.value;
        }
        const c = l(o, RegExp);
        const o_unicode = o.unicode;
        const p =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (b_UNSUPPORTED_Y ? "g" : "y");
        const g = new c(b_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, p);
        const m = n === undefined ? 4294967295 : n >>> 0;
        if (m === 0) {
          return [];
        }
        if (a.length === 0) {
          if (y(g, a) === null) {
            return [a];
          }
          return [];
        }
        let b = 0;
        for (var w = 0, E = []; w < a.length;) {
          g.lastIndex = b_UNSUPPORTED_Y ? 0 : w;
          let S;
          const R = y(g, b_UNSUPPORTED_Y ? _(a, w) : a);
          if (
            R === null ||
            (S = Math.min(
              v(g.lastIndex + (b_UNSUPPORTED_Y ? w : 0)),
              a.length,
            )) === b
          ) {
            w = h(a, w, o_unicode);
          } else {
            O(E, _(a, b, w));
            if (E.length === m) {
              return E;
            }
            for (let M = 1; M <= R.length - 1; M++) {
              O(E, R[M]);
              if (E.length === m) {
                return E;
              }
            }
            b = S;
            w = S;
          }
        }
        O(E, _(a, b));
        return E;
      },
    ];
  },
  !!w(function () {
    const t = /(?:)/;
    const t_exec = t.exec;
    t.exec = function () {
      return t_exec.apply(this, arguments);
    };
    const r = "ab".split(t);
    return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
  }),
  b_UNSUPPORTED_Y,
);
