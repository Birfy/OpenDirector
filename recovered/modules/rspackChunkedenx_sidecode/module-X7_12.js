import te from "./module-M_2_12.js";
import tr from "./module-O9_12.js";
import tn from "./module-ng_13.js";
import ti from "./module-qN_2_12.js";
import to from "./module-Tc_12.js";
import ta from "./module-K_13.js";
import ts from "./module-Za_12.js";
import _tf from "./module-b_12.js";
import tu from "./module-e0_12.js";
import tc from "./module-yZ_12.js";
let $;
let tt;
const _tf_get = _tf.get;
const th = ta("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let tl = exec;
const tp = tr("".charAt);
const tb = tr("".indexOf);
const tv = tr("".replace);
const tg = tr("".slice);
tt = /b*/g;
te(exec, ($ = /a/), "a");
te(exec, tt, "a");
const ty = $.lastIndex !== 0 || tt.lastIndex !== 0;
const to_BROKEN_CARET = to.BROKEN_CARET;
const tw = /()??/.exec("")[1] !== undefined;
if (ty || tw || to_BROKEN_CARET || tu || tc) {
  tl = function (J) {
    let Z;
    let Q;
    let $;
    let tt;
    let tr;
    let to;
    let ta;
    const tu = _tf_get(this);
    const tc = tn(J);
    const tu_raw = tu.raw;
    if (tu_raw) {
      tu_raw.lastIndex = this.lastIndex;
      Z = te(tl, tu_raw, tc);
      this.lastIndex = tu_raw.lastIndex;
      return Z;
    }
    const tu_groups = tu.groups;
    const tM = to_BROKEN_CARET && this.sticky;
    let tS = te(ti, this);
    let source = this.source;
    let tE = 0;
    let tk = tc;
    if (tM) {
      if (tb((tS = tv(tS, "y", "")), "g") === -1) {
        tS += "g";
      }
      tk = tg(tc, this.lastIndex);
      if (
        this.lastIndex > 0 &&
        (!this.multiline ||
          (this.multiline && tp(tc, this.lastIndex - 1) !== "\n"))
      ) {
        source = "(?: " + source + ")";
        tk = " " + tk;
        tE++;
      }
      Q = RegExp("^(?:" + source + ")", tS);
    }
    if (tw) {
      Q = RegExp("^" + source + "$(?!\\s)", tS);
    }
    if (ty) {
      $ = this.lastIndex;
    }
    tt = te(exec, tM ? Q : this, tk);
    if (tM) {
      if (tt) {
        tt.input = tg(tt.input, tE);
        tt[0] = tg(tt[0], tE);
        tt.index = this.lastIndex;
        this.lastIndex += tt[0].length;
      } else {
        this.lastIndex = 0;
      }
    } else if (ty && tt) {
      this.lastIndex = this.global ? tt.index + tt[0].length : $;
    }
    if (tw && tt && tt.length > 1) {
      te(th, tt[0], Q, function () {
        for (tr = 1; tr < arguments.length - 2; tr++) {
          if (arguments[tr] === undefined) {
            tt[tr] = undefined;
          }
        }
      });
    }
    if (tt && tu_groups) {
      tt.groups = to = ts(null);
      for (tr = 0; tr < tu_groups.length; tr++) {
        to[(ta = tu_groups[tr])[0]] = tt[ta[1]];
      }
    }
    return tt;
  };
}
export default tl;
