import "./module-FA.js";
import n from "./module-Yj.js";
import o from "./module-vE.js";
import i from "./module-X7.js";
import a from "./module-X.js";
import s from "./module-lN.js";
import u from "./module-h.js";
const c = s("species");
export default function (t, r, e, h) {
  const l = s(t);
  const v = !a(function () {
    const r = {};
    r[l] = function () {
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
    const g = r(l, ""[t], function (t, r, e, o, a) {
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
    o(RegExp.prototype, l, g[1]);
  }
  if (h) {
    u(RegExp.prototype[l], "sham", true);
  }
}
