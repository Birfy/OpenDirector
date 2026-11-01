import "./module-FA_14.js";
import n from "./module-Yj_13.js";
import o from "./module-vE_13.js";
import i from "./module-X7_13.js";
import a from "./module-X_14.js";
import s from "./module-lN_13.js";
import u from "./module-h_14.js";
const c = s("species");
export default function (r, t, e, h) {
  const l = s(r);
  const v = !a(function () {
    const t = {};
    t[l] = function () {
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
        e[l] = /./[l];
      }
      e.exec = function () {
        t = true;
        return null;
      };
      e[l]("");
      return !t;
    });
  if (!v || !p || e) {
    const d = n(/./[l]);
    const g = t(l, ""[r], function (r, t, e, o, a) {
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
    o(RegExp.prototype, l, g[1]);
  }
  if (h) {
    u(RegExp.prototype[l], "sham", true);
  }
}
