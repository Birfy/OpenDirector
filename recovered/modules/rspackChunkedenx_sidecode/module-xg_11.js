import "./module-FA_11.js";
import n from "./module-Yj_10.js";
import o from "./module-vE_10.js";
import i from "./module-X7_10.js";
import a from "./module-X_11.js";
import s from "./module-lN_10.js";
import u from "./module-h_11.js";
const c = s("species");
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
        e.constructor[c] = function () {
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
    u(RegExp.prototype[h], "sham", true);
  }
}
