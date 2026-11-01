import i from "./module-M_2_9.js";
import a from "./module-O9_9.js";
import s from "./module-ng_10.js";
import u from "./module-qN_2_9.js";
import c from "./module-Tc_9.js";
import f from "./module-K_10.js";
import l from "./module-Za_9.js";
import _h from "./module-b_9.js";
import v from "./module-e0_9.js";
import d from "./module-yZ_9.js";
let n;
let o;
const _h_get = _h.get;
const p = f("native-string-replace", String.prototype.replace);
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
const c_BROKEN_CARET = c.BROKEN_CARET;
const S = /()??/.exec("")[1] !== undefined;
if (x || S || c_BROKEN_CARET || v || d) {
  y = function (t) {
    let e;
    let r;
    let n;
    let o;
    let a;
    let c;
    let f;
    const v = _h_get(this);
    const d = s(t);
    const v_raw = v.raw;
    if (v_raw) {
      v_raw.lastIndex = this.lastIndex;
      e = i(y, v_raw, d);
      this.lastIndex = v_raw.lastIndex;
      return e;
    }
    const v_groups = v.groups;
    const R = c_BROKEN_CARET && this.sticky;
    let M = i(u, this);
    let source = this.source;
    let T = 0;
    let k = d;
    if (R) {
      if (b((M = w(M, "y", "")), "g") === -1) {
        M += "g";
      }
      k = A(d, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && m(d, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        k = " " + k;
        T++;
      }
      r = RegExp("^(?:" + source + ")", M);
    }
    if (S) {
      r = RegExp("^" + source + "$(?!\\s)", M);
    }
    if (x) {
      n = this.lastIndex;
    }
    o = i(exec, R ? r : this, k);
    if (R) {
      if (o) {
        o.input = A(o.input, T);
        o[0] = A(o[0], T);
        o.index = this.lastIndex;
        this.lastIndex += o[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (x && o) {
      this.lastIndex = this.global ? o.index + o[0].length : n;
    }
    if (S && o && o.length > 1) {
      i(p, o[0], r, function () {
        for (a = 1; a < arguments.length - 2; a++) {
          if (arguments[a] === undefined) {
            o[a] = undefined;
          }
        }
      });
    }
    if (o && v_groups) {
      o.groups = c = l(null);
      for (a = 0; a < v_groups.length; a++) {
        c[(f = v_groups[a])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
export default y;
