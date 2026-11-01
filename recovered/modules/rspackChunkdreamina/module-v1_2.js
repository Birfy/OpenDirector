import "./module-OS_2.js";
import n from "./module-Kp.js";
import o from "./module-xX_2.js";
import i from "./module-Iz_4.js";
import a from "./module-VV_4.js";
import s from "./module-Nt_3.js";
import u from "./module-z3.js";
const c = s("species");
export default function (e, t, r, l) {
  const p = s(e);
  const h = !a(function () {
    const t = {};
    t[p] = function () {
      return 7;
    };
    return ""[e](t) !== 7;
  });
  const v =
    h &&
    !a(function () {
      let t = false;
      let r = /a/;
      if (e === "split") {
        r = {};
        r.constructor = {};
        r.constructor[c] = function () {
          return r;
        };
        r.flags = "";
        r[p] = /./[p];
      }
      r.exec = function () {
        t = true;
        return null;
      };
      r[p]("");
      return !t;
    });
  if (!h || !v || r) {
    const d = n(/./[p]);
    const g = t(p, ""[e], function (e, t, r, o, a) {
      const s = n(e);
      const t_exec = t.exec;
      if (t_exec === i || t_exec === RegExp.prototype.exec) {
        if (h && !a) {
          return {
            done: true,
            value: d(t, r, o),
          };
        }
        return {
          done: true,
          value: s(r, t, o),
        };
      }
      return {
        done: false,
      };
    });
    o(String.prototype, e, g[0]);
    o(RegExp.prototype, p, g[1]);
  }
  if (l) {
    u(RegExp.prototype[p], "sham", true);
  }
}
