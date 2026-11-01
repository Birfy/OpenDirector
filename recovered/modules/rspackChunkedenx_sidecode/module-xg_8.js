import "./module-FA_8.js";
import n from "./module-Yj_7.js";
import o from "./module-vE_7.js";
import i from "./module-X7_7.js";
import a from "./module-X_8.js";
import s from "./module-lN_7.js";
import u from "./module-h_8.js";
const c = s("species");
export default function (r, t, e, l) {
  const h = s(r);
  const v = !a(function () {
    const t = {};
    t[h] = function () {
      return 7;
    };
    return ""[r](t) !== 7;
  });
  const p =
    v &&
    !a(function () {
      let t = false;
      let e = /a/;
      if (r === "split") {
        e = {};
        e.constructor = {};
        e.constructor[c] = function () {
          return e;
        };
        e.flags = "";
        e[h] = /./[h];
      }
      e.exec = function () {
        t = true;
        return null;
      };
      e[h]("");
      return !t;
    });
  if (!v || !p || e) {
    const d = n(/./[h]);
    const g = t(h, ""[r], function (r, t, e, o, a) {
      const s = n(r);
      const t_exec = t.exec;
      if (t_exec === i || t_exec === RegExp.prototype.exec) {
        if (v && !a) {
          return {
            done: true,
            value: d(t, e, o),
          };
        }
        return {
          done: true,
          value: s(e, t, o),
        };
      }
      return {
        done: false,
      };
    });
    o(String.prototype, r, g[0]);
    o(RegExp.prototype, h, g[1]);
  }
  if (l) {
    u(RegExp.prototype[h], "sham", true);
  }
}
