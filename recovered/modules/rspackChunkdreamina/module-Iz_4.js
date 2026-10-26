import i from "./module-p3.js";
import a from "./module-o.js";
import s from "./module-BC_2.js";
import u from "./module-qs_2.js";
import c from "./module-wu_4.js";
import f from "./module-Mz_2.js";
import l from "./module-lY_4.js";
import _p from "./module-G_2.js";
import h from "./module-w9.js";
import v from "./module-bQ_2.js";
let n;
let o;
const _p_get = _p.get;
const d = f("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let y = exec;
const m = a("".charAt);
const x = a("".indexOf);
const b = a("".replace);
const w = a("".slice);
o = /b*/g;
i(exec, (n = /a/), "a");
i(exec, o, "a");
const A = n.lastIndex !== 0 || o.lastIndex !== 0;
const c_BROKEN_CARET = c.BROKEN_CARET;
const j = /()??/.exec("")[1] !== undefined;
if (A || j || c_BROKEN_CARET || h || v) {
  y = function (e) {
    let t;
    let r;
    let n;
    let o;
    let a;
    let c;
    let f;
    const h = _p_get(this);
    const v = s(e);
    const h_raw = h.raw;
    if (h_raw) {
      h_raw.lastIndex = this.lastIndex;
      t = i(y, h_raw, v);
      this.lastIndex = h_raw.lastIndex;
      return t;
    }
    const h_groups = h.groups;
    const z = c_BROKEN_CARET && this.sticky;
    let O = i(u, this);
    let source = this.source;
    let _ = 0;
    let T = v;
    if (z) {
      if (x((O = b(O, "y", "")), "g") === -1) {
        O += "g";
      }
      T = w(v, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && m(v, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        T = " " + T;
        _++;
      }
      r = RegExp("^(?:" + source + ")", O);
    }
    if (j) {
      r = RegExp("^" + source + "$(?!\\s)", O);
    }
    if (A) {
      n = this.lastIndex;
    }
    o = i(exec, z ? r : this, T);
    if (z) {
      if (o) {
        o.input = w(o.input, _);
        o[0] = w(o[0], _);
        o.index = this.lastIndex;
        this.lastIndex += o[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (A && o) {
      this.lastIndex = this.global ? o.index + o[0].length : n;
    }
    if (j && o && o.length > 1) {
      i(d, o[0], r, function () {
        for (a = 1; a < arguments.length - 2; a++) {
          if (arguments[a] === undefined) {
            o[a] = undefined;
          }
        }
      });
    }
    if (o && h_groups) {
      o.groups = c = l(null);
      for (a = 0; a < h_groups.length; a++) {
        c[(f = h_groups[a])[0]] = o[f[1]];
      }
    }
    return o;
  };
}
export default y;
