import "./module-FA_7.js";
import n from "./module-Yj_6.js";
import o from "./module-vE_6.js";
import a from "./module-X7_6.js";
import i from "./module-X_7.js";
import s from "./module-lN_6.js";
import c from "./module-h_7.js";
const u = s("species");
export default function (t, r, e, l) {
  const h = s(t);
  const p = !i(function () {
    const r = {};
    r[h] = function () {
      return 7;
    };
    return ""[t](r) !== 7;
  });
  const v =
    p &&
    !i(function () {
      let r = false;
      let e = /a/;
      if (t === "split") {
        e = {};
        e.constructor = {};
        e.constructor[u] = function () {
          return e;
        };
        e.flags = "";
        e[h] = /./[h];
      }
      e.exec = function () {
        r = true;
        return null;
      };
      e[h]("");
      return !r;
    });
  if (!p || !v || e) {
    const d = n(/./[h]);
    const g = r(h, ""[t], function (t, r, e, o, i) {
      const s = n(t);
      const r_exec = r.exec;
      if (r_exec === a || r_exec === RegExp.prototype.exec) {
        if (p && !i) {
          return {
            done: true,
            value: d(r, e, o),
          };
        }
        return {
          done: true,
          value: s(e, r, o),
        };
      }
      return {
        done: false,
      };
    });
    o(String.prototype, t, g[0]);
    o(RegExp.prototype, h, g[1]);
  }
  if (l) {
    c(RegExp.prototype[h], "sham", true);
  }
}
