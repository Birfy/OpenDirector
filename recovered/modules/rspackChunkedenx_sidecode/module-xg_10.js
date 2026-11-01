import "./module-FA_10.js";
import n from "./module-Yj_9.js";
import o from "./module-vE_9.js";
import i from "./module-X7_9.js";
import a from "./module-X_10.js";
import s from "./module-lN_9.js";
import u from "./module-h_10.js";
const c = s("species");
export default function (t, e, r, l) {
  const h = s(t);
  const v = !a(function () {
    const e = {};
    e[h] = function () {
      return 7;
    };
    return ""[t](e) !== 7;
  });
  const d =
    v &&
    !a(function () {
      let e = false;
      let r = /a/;
      if (t === "split") {
        r = {};
        r.constructor = {};
        r.constructor[c] = function () {
          return r;
        };
        r.flags = "";
        r[h] = /./[h];
      }
      r.exec = function () {
        e = true;
        return null;
      };
      r[h]("");
      return !e;
    });
  if (!v || !d || r) {
    const p = n(/./[h]);
    const g = e(h, ""[t], function (t, e, r, o, a) {
      const s = n(t);
      const e_exec = e.exec;
      if (e_exec === i || e_exec === RegExp.prototype.exec) {
        if (v && !a) {
          return {
            done: true,
            value: p(e, r, o),
          };
        }
        return {
          done: true,
          value: s(r, e, o),
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
