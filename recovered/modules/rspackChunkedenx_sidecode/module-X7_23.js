import i from "./module-M_2_23.js";
import a from "./module-O9_23.js";
import s from "./module-ng_24.js";
import c from "./module-qN_2_23.js";
import u from "./module-Tc_23.js";
import f from "./module-K_24.js";
import l from "./module-Za_23.js";
import _h from "./module-b_23.js";
import v from "./module-e0_23.js";
import p from "./module-yZ_23.js";
let n;
let o;
const _h_get = _h.get;
const d = f("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let y = exec;
const b = a("".charAt);
const m = a("".indexOf);
const A = a("".replace);
const x = a("".slice);
o = /b*/g;
i(exec, (n = /a/), "a");
i(exec, o, "a");
const w = n.lastIndex !== 0 || o.lastIndex !== 0;
const u_BROKEN_CARET = u.BROKEN_CARET;
const E = /()??/.exec("")[1] !== undefined;
if (w || E || u_BROKEN_CARET || v || p) {
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
    let j = 0;
    let T = p;
    if (M) {
      if (m((I = A(I, "y", "")), "g") === -1) {
        I += "g";
      }
      T = x(p, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && b(p, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        T = " " + T;
        j++;
      }
      e = RegExp("^(?:" + source + ")", I);
    }
    if (E) {
      e = RegExp("^" + source + "$(?!\\s)", I);
    }
    if (w) {
      n = this.lastIndex;
    }
    o = i(exec, M ? e : this, T);
    if (M) {
      if (o) {
        o.input = x(o.input, j);
        o[0] = x(o[0], j);
        o.index = this.lastIndex;
        this.lastIndex += o[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (w && o) {
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
