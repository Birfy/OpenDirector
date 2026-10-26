import a from "./module-M_2_6.js";
import i from "./module-O9_6.js";
import s from "./module-ng_7.js";
import c from "./module-qN_2_6.js";
import u from "./module-Tc_6.js";
import f from "./module-K_7.js";
import l from "./module-Za_6.js";
import _h from "./module-b_6.js";
import p from "./module-e0_6.js";
import v from "./module-yZ_6.js";
let n;
let o;
const _h_get = _h.get;
const d = f("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let y = exec;
const m = i("".charAt);
const b = i("".indexOf);
const A = i("".replace);
const w = i("".slice);
o = /b*/g;
a(exec, (n = /a/), "a");
a(exec, o, "a");
const x = n.lastIndex !== 0 || o.lastIndex !== 0;
const u_BROKEN_CARET = u.BROKEN_CARET;
const S = /()??/.exec("")[1] !== undefined;
if (x || S || u_BROKEN_CARET || p || v) {
  y = function (t) {
    let r;
    let e;
    let n;
    let o;
    let i;
    let u;
    let f;
    const p = _h_get(this);
    const v = s(t);
    const p_raw = p.raw;
    if (p_raw) {
      p_raw.lastIndex = this.lastIndex;
      r = a(y, p_raw, v);
      this.lastIndex = p_raw.lastIndex;
      return r;
    }
    const p_groups = p.groups;
    const M = u_BROKEN_CARET && this.sticky;
    let I = a(c, this);
    let source = this.source;
    let T = 0;
    let j = v;
    if (M) {
      if (b((I = A(I, "y", "")), "g") === -1) {
        I += "g";
      }
      j = w(v, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && m(v, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        j = " " + j;
        T++;
      }
      e = RegExp("^(?:" + source + ")", I);
    }
    if (S) {
      e = RegExp("^" + source + "$(?!\\s)", I);
    }
    if (x) {
      n = this.lastIndex;
    }
    o = a(exec, M ? e : this, j);
    if (M) {
      if (o) {
        o.input = w(o.input, T);
        o[0] = w(o[0], T);
        o.index = this.lastIndex;
        this.lastIndex += o[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (x && o) {
      this.lastIndex = this.global ? o.index + o[0].length : n;
    }
    if (S && o && o.length > 1) {
      a(d, o[0], e, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) {
            o[i] = undefined;
          }
        }
      });
    }
    if (o && p_groups) {
      o.groups = u = l(null);
      for (i = 0; i < p_groups.length; i++) {
        u[(f = p_groups[i])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
export default y;
