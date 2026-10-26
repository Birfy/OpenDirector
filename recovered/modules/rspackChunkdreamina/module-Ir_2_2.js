import n from "./module-l.js";
import o from "./module-p3.js";
import i from "./module-o.js";
import a from "./module-v1_2.js";
import s from "./module-IF_2.js";
import u from "./module-D.js";
import c from "./module-hyV.js";
import f from "./module-H_2.js";
import l from "./module-MV_4.js";
import p from "./module-n4.js";
import h from "./module-L_2.js";
import v from "./module-BC_2.js";
import d from "./module-T_2.js";
import g from "./module-us_3.js";
import y from "./module-Ct_3.js";
import m from "./module-Iz_4.js";
import x from "./module-wu_4.js";
import b from "./module-VV_4.js";
const x_UNSUPPORTED_Y = x.UNSUPPORTED_Y;
const push = [].push;
const j = i(/./.exec);
const I = i(push);
const R = i("".slice);
a(
  "split",
  function (e, t, r) {
    let i;
    i =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (e, r) {
            let i;
            let a;
            let s;
            const u = v(f(this));
            const l = r === undefined ? 4294967295 : r >>> 0;
            if (l === 0) {
              return [];
            }
            if (e === undefined) {
              return [u];
            }
            if (!c(e)) {
              return o(t, u, e, l);
            }
            for (
              var p = [],
                h =
                  (e.ignoreCase ? "i" : "") +
                  (e.multiline ? "m" : "") +
                  (e.unicode ? "u" : "") +
                  (e.sticky ? "y" : ""),
                d = 0,
                y = RegExp(e.source, h + "g");
              (i = o(m, y, u)) &&
              (!((a = y.lastIndex) > d) ||
                (I(p, R(u, d, i.index)),
                i.length > 1 && i.index < u.length && n(push, p, g(i, 1)),
                (s = i[0].length),
                (d = a),
                !(p.length >= l)));
            ) {
              if (y.lastIndex === i.index) {
                y.lastIndex++;
              }
            }
            if (d === u.length) {
              if (s || !j(y, "")) {
                I(p, "");
              }
            } else {
              I(p, R(u, d));
            }
            if (p.length > l) {
              return g(p, 0, l);
            }
            return p;
          }
        : "0".split(undefined, 0).length
          ? function (e, r) {
              if (e === undefined && r === 0) {
                return [];
              }
              return o(t, this, e, r);
            }
          : t;
    return [
      function (t, r) {
        const n = f(this);
        const a = u(t) ? undefined : d(t, e);
        if (a) {
          return o(a, t, n, r);
        }
        return o(i, v(n), t, r);
      },
      function (e, n) {
        const o = s(this);
        const a = v(e);
        const u = r(i, o, a, n, i !== t);
        if (u.done) {
          return u.value;
        }
        const c = l(o, RegExp);
        const o_unicode = o.unicode;
        const d =
          (o.ignoreCase ? "i" : "") +
          (o.multiline ? "m" : "") +
          (o.unicode ? "u" : "") +
          (x_UNSUPPORTED_Y ? "g" : "y");
        const g = new c(x_UNSUPPORTED_Y ? "^(?:" + o.source + ")" : o, d);
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
        let x = 0;
        for (var b = 0, E = []; b < a.length;) {
          g.lastIndex = x_UNSUPPORTED_Y ? 0 : b;
          let j;
          const z = y(g, x_UNSUPPORTED_Y ? R(a, b) : a);
          if (
            z === null ||
            (j = Math.min(
              h(g.lastIndex + (x_UNSUPPORTED_Y ? b : 0)),
              a.length,
            )) === x
          ) {
            b = p(a, b, o_unicode);
          } else {
            I(E, R(a, x, b));
            if (E.length === m) {
              return E;
            }
            for (let O = 1; O <= z.length - 1; O++) {
              I(E, z[O]);
              if (E.length === m) {
                return E;
              }
            }
            x = j;
            b = j;
          }
        }
        I(E, R(a, x));
        return E;
      },
    ];
  },
  !!b(function () {
    const e = /(?:)/;
    const e_exec = e.exec;
    e.exec = function () {
      return e_exec.apply(this, arguments);
    };
    const r = "ab".split(e);
    return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
  }),
  x_UNSUPPORTED_Y,
);
