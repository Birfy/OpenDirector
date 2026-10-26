import "./module-FA_15.js";
import n from "./module-Yj_14.js";
import o from "./module-vE_14.js";
import i from "./module-X7_14.js";
import a from "./module-X_15.js";
import s from "./module-lN_14.js";
import c from "./module-h_15.js";
const u = s("species");
export default function (t, r, e, l) {
  const h = s(t);
  const v = !a(function () {
    const r = {};
    r[h] = function () {
      return 7;
    };
    return ""[t](r) !== 7;
  });
  const p =
    v &&
    !a(function () {
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
  if (!v || !p || e) {
    const d = n(/./[h]);
    const g = r(h, ""[t], function (t, r, e, o, a) {
      const s = n(t);
      const r_exec = r.exec;
      if (r_exec === i || r_exec === RegExp.prototype.exec) {
        if (v && !a) {
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
