import i from "./module-M_2_20.js";
import a from "./module-O9_20.js";
import s from "./module-ng_21.js";
import c from "./module-qN_2_20.js";
import u from "./module-Tc_20.js";
import f from "./module-K_21.js";
import l from "./module-Za_20.js";
import _h from "./module-b_20.js";
import v from "./module-e0_20.js";
import p from "./module-yZ_20.js";
let n;
let o;
const _h_get = _h.get;
const d = f("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let y = exec;
const m = a("".charAt);
const b = a("".indexOf);
const w = a("".replace);
const A = a("".slice);
o = /b*/g;
i(exec, (n = /a/), "a");
i(exec, o, "a");
const x = n.lastIndex !== 0 || o.lastIndex !== 0;
const u_BROKEN_CARET = u.BROKEN_CARET;
const E = /()??/.exec("")[1] !== undefined;
if (x || E || u_BROKEN_CARET || v || p) {
  y = function (t) {
    let r;
    let e;
    let n;
    let o;
    let a;
    let u;
    let f;
    const v = _h_get(this);
    const p = s(t);
    const v_raw = v.raw;
    if (v_raw) {
      v_raw.lastIndex = this.lastIndex;
      r = i(y, v_raw, p);
      this.lastIndex = v_raw.lastIndex;
      return r;
    }
    const v_groups = v.groups;
    const M = u_BROKEN_CARET && this.sticky;
    let I = i(c, this);
    let source = this.source;
    let k = 0;
    let T = p;
    if (M) {
      if (b((I = w(I, "y", "")), "g") === -1) {
        I += "g";
      }
      T = A(p, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && m(p, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        T = " " + T;
        k++;
      }
      e = RegExp("^(?:" + source + ")", I);
    }
    if (E) {
      e = RegExp("^" + source + "$(?!\\s)", I);
    }
    if (x) {
      n = this.lastIndex;
    }
    o = i(exec, M ? e : this, T);
    if (M) {
      if (o) {
        o.input = A(o.input, k);
        o[0] = A(o[0], k);
        o.index = this.lastIndex;
        this.lastIndex += o[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (x && o) {
      this.lastIndex = this.global ? o.index + o[0].length : n;
    }
    if (E && o && o.length > 1) {
      i(d, o[0], e, function () {
        for (a = 1; a < arguments.length - 2; a++) {
          if (arguments[a] === undefined) {
            o[a] = undefined;
          }
        }
      });
    }
    if (o && v_groups) {
      o.groups = u = l(null);
      for (a = 0; a < v_groups.length; a++) {
        u[(f = v_groups[a])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
export default y;
