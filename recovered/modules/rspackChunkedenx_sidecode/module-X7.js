import i from "./module-M_2.js";
import a from "./module-O9.js";
import s from "./module-ng.js";
import u from "./module-qN_2.js";
import c from "./module-Tc.js";
import f from "./module-K.js";
import h from "./module-Za.js";
import _l from "./module-b.js";
import v from "./module-e0.js";
import p from "./module-yZ.js";
let n;
let o;
const _l_get = _l.get;
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
const c_BROKEN_CARET = c.BROKEN_CARET;
const E = /()??/.exec("")[1] !== undefined;
if (w || E || c_BROKEN_CARET || v || p) {
  y = function (t) {
    let r;
    let e;
    let n;
    let o;
    let a;
    let c;
    let f;
    const v = _l_get(this);
    const p = s(t);
    const v_raw = v.raw;
    if (v_raw) {
      v_raw.lastIndex = this.lastIndex;
      r = i(y, v_raw, p);
      this.lastIndex = v_raw.lastIndex;
      return r;
    }
    const v_groups = v.groups;
    const M = c_BROKEN_CARET && this.sticky;
    let I = i(u, this);
    let source = this.source;
    let T = 0;
    let j = p;
    if (M) {
      if (m((I = A(I, "y", "")), "g") === -1) {
        I += "g";
      }
      j = x(p, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && b(p, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        j = " " + j;
        T++;
      }
      e = RegExp("^(?:" + source + ")", I);
    }
    if (E) {
      e = RegExp("^" + source + "$(?!\\s)", I);
    }
    if (w) {
      n = this.lastIndex;
    }
    o = i(exec, M ? e : this, j);
    if (M) {
      if (o) {
        o.input = x(o.input, T);
        o[0] = x(o[0], T);
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
      o.groups = c = h(null);
      for (a = 0; a < v_groups.length; a++) {
        c[(f = v_groups[a])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
export default y;
