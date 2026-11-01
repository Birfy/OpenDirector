import o from "./module-M_2_3.js";
import s from "./module-O9_3.js";
import a from "./module-ng_4.js";
import u from "./module-qN_2_3.js";
import c from "./module-Tc_3.js";
import f from "./module-K_4.js";
import h from "./module-Za_3.js";
import _l from "./module-b_3.js";
import v from "./module-e0_3.js";
import p from "./module-yZ_3.js";
let n;
let i;
const _l_get = _l.get;
const d = f("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let y = exec;
const b = s("".charAt);
const m = s("".indexOf);
const A = s("".replace);
const x = s("".slice);
i = /b*/g;
o(exec, (n = /a/), "a");
o(exec, i, "a");
const w = n.lastIndex !== 0 || i.lastIndex !== 0;
const c_BROKEN_CARET = c.BROKEN_CARET;
const E = /()??/.exec("")[1] !== undefined;
if (w || E || c_BROKEN_CARET || v || p) {
  y = function (t) {
    let r;
    let e;
    let n;
    let i;
    let s;
    let c;
    let f;
    const v = _l_get(this);
    const p = a(t);
    const v_raw = v.raw;
    if (v_raw) {
      v_raw.lastIndex = this.lastIndex;
      r = o(y, v_raw, p);
      this.lastIndex = v_raw.lastIndex;
      return r;
    }
    const v_groups = v.groups;
    const M = c_BROKEN_CARET && this.sticky;
    let I = o(u, this);
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
    i = o(exec, M ? e : this, j);
    if (M) {
      if (i) {
        i.input = x(i.input, T);
        i[0] = x(i[0], T);
        i.index = this.lastIndex;
        this.lastIndex += i[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (w && i) {
      this.lastIndex = this.global ? i.index + i[0].length : n;
    }
    if (E && i && i.length > 1) {
      o(d, i[0], e, function () {
        for (s = 1; s < arguments.length - 2; s++) {
          if (arguments[s] === undefined) {
            i[s] = undefined;
          }
        }
      });
    }
    if (i && v_groups) {
      i.groups = c = h(null);
      for (s = 0; s < v_groups.length; s++) {
        c[(f = v_groups[s])[0]] = i[f[1]];
      }
    }
    return i;
  };
}
export default y;
