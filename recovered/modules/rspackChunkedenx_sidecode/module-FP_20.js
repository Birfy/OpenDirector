import n from "./module-Xy_2_20.js";
import o from "./module-M_2_20.js";
import i from "./module-O9_20.js";
import a from "./module-xg_21.js";
import s from "./module-d_21.js";
import c from "./module-Mi_20.js";
import u from "./module-Su_20.js";
import f from "./module-vj_21.js";
import l from "./module-V0_20.js";
import h from "./module-Gl_20.js";
import v from "./module-dV_20.js";
import p from "./module-ng_21.js";
import d from "./module-C_21.js";
import g from "./module-wL_20.js";
import y from "./module-uc_20.js";
import m from "./module-X7_20.js";
import b from "./module-Tc_20.js";
import w from "./module-X_21.js";
const b_UNSUPPORTED_Y = b.UNSUPPORTED_Y;
const push = [].push;
const E = i(/./.exec);
const O = i(push);
const R = i("".slice);
a(
  "split",
  function (t, r, e) {
    let i;
    i =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (t, e) {
            let i;
            let a;
            let s;
            const c = p(f(this));
            const l = e === undefined ? 4294967295 : e >>> 0;
            if (l === 0) {
              return [];
            }
            if (t === undefined) {
              return [c];
            }
            if (!u(t)) {
              return o(r, c, t, l);
            }
            for (
              var h = [],
                v =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.unicode ? "u" : "") +
                  (t.sticky ? "y" : ""),
                d = 0,
                y = RegExp(t.source, v + "g");
              (i = o(m, y, c)) &&
              (!((a = y.lastIndex) > d) ||
                (O(h, R(c, d, i.index)),
                i.length > 1 && i.index < c.length && n(push, h, g(i, 1)),
                (s = i[0].length),
                (d = a),
                !(h.length >= l)));
            ) {
              if (y.lastIndex === i.index) {
                y.lastIndex++;
              }
            }
            if (d === c.length) {
              if (s || !E(y, "")) {
                O(h, "");
              }
            } else {
              O(h, R(c, d));
            }
            if (h.length > l) {
              return g(h, 0, l);
            }
            return h;
          }
        : "0".split(undefined, 0).length
          ? function (t, e) {
              if (t === undefined && e === 0) {
                return [];
              }
              return o(r, this, t, e);
            }
          : r;
    return [
      function (r, e) {
        const n = f(this);
        const a = c(r) ? undefined : d(r, t);
        if (a) {
          return o(a, r, n, e);
        }
        return o(i, p(n), r, e);
      },
      function (t, n) {
        const o = s(this);
        const a = p(t);
        const c = e(i, o, a, n, i !== r);
        if (c.done) {
          return c.value;
        }
        const u = l(o, RegExp);
        const o_unicode = o.unicode;
        const d =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (b_UNSUPPORTED_Y ? "g" : "y");
        const g = new u(b_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, d);
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
        for (var w = 0, S = []; w < a.length;) {
          g.lastIndex = b_UNSUPPORTED_Y ? 0 : w;
          let E;
          const M = y(g, b_UNSUPPORTED_Y ? R(a, w) : a);
          if (
            M === null ||
            (E = Math.min(
              v(g.lastIndex + (b_UNSUPPORTED_Y ? w : 0)),
              a.length,
            )) === b
          ) {
            w = h(a, w, o_unicode);
          } else {
            O(S, R(a, b, w));
            if (S.length === m) {
              return S;
            }
            for (let I = 1; I <= M.length - 1; I++) {
              O(S, M[I]);
              if (S.length === m) {
                return S;
              }
            }
            b = E;
            w = E;
          }
        }
        O(S, R(a, b));
        return S;
      },
    ];
  },
  !!w(function () {
    const t = /(?:)/;
    const t_exec = t.exec;
    t.exec = function () {
      return t_exec.apply(this, arguments);
    };
    const e = "ab".split(t);
    return e.length !== 2 || e[0] !== "a" || e[1] !== "b";
  }),
  b_UNSUPPORTED_Y,
);
