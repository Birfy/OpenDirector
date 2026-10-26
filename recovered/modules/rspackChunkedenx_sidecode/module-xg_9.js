import "./module-FA_9.js";
import n from "./module-Yj_8.js";
import i from "./module-vE_8.js";
import o from "./module-X7_8.js";
import s from "./module-X_9.js";
import a from "./module-lN_8.js";
import u from "./module-h_9.js";
const c = a("species");
export default function (t, r, e, h) {
  const l = a(t);
  const v = !s(function () {
    const r = {};
    r[l] = function () {
      return 7;
    };
    return ""[t](r) !== 7;
  });
  const p =
    v &&
    !s(function () {
      let r = false;
      let e = /a/;
      if (t === "split") {
        e = {};
        e.constructor = {};
        e.constructor[c] = function () {
          return e;
        };
        e.flags = "";
        e[l] = /./[l];
      }
      e.exec = function () {
        r = true;
        return null;
      };
      e[l]("");
      return !r;
    });
  if (!v || !p || e) {
    const d = n(/./[l]);
    const g = r(l, ""[t], function (t, r, e, i, s) {
      const a = n(t);
      const r_exec = r.exec;
      if (r_exec === o || r_exec === RegExp.prototype.exec) {
        if (v && !s) {
          return {
            done: true,
            value: d(r, e, i),
          };
        }
        return {
          done: true,
          value: a(e, r, i),
        };
      }
      return {
        done: false,
      };
    });
    i(String.prototype, t, g[0]);
    i(RegExp.prototype, l, g[1]);
  }
  if (h) {
    u(RegExp.prototype[l], "sham", true);
  }
}
