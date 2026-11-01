import $ from "./module-Xy_3_2.js";
import tt from "./module-M_2_12.js";
import te from "./module-O9_12.js";
import tr from "./module-xg_13.js";
import tn from "./module-d_13.js";
import ti from "./module-Mi_12.js";
import to from "./module-Su_12.js";
import ta from "./module-vj_13.js";
import ts from "./module-V0_12.js";
import tf from "./module-Gl_12.js";
import tu from "./module-dV_12.js";
import tc from "./module-ng_13.js";
import th from "./module-C_13.js";
import td from "./module-wL_12.js";
import tl from "./module-uc_12.js";
import tp from "./module-X7_12.js";
import tb from "./module-Tc_12.js";
import tv from "./module-X_13.js";
const tb_UNSUPPORTED_Y = tb.UNSUPPORTED_Y;
const push = [].push;
const tw = te(/./.exec);
const tx = te(push);
const t_ = te("".slice);
tr(
  "split",
  function (J, Z, Q) {
    let te;
    te =
      "abbc".split(/(b)*/)[1] === "c" ||
      "test".split(/(?:)/, -1).length !== 4 ||
      "ab".split(/(?:ab)*/).length !== 2 ||
      ".".split(/(.?)(.?)/).length !== 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function (J, Q) {
            let te;
            let tr;
            let tn;
            const ti = tc(ta(this));
            const ts = Q === undefined ? 4294967295 : Q >>> 0;
            if (ts === 0) {
              return [];
            }
            if (J === undefined) {
              return [ti];
            }
            if (!to(J)) {
              return tt(Z, ti, J, ts);
            }
            for (
              var tf = [],
                tu =
                  (J.ignoreCase ? "i" : "") +
                  (J.multiline ? "m" : "") +
                  (J.unicode ? "u" : "") +
                  (J.sticky ? "y" : ""),
                th = 0,
                tl = RegExp(J.source, tu + "g");
              (te = tt(tp, tl, ti)) &&
              (!((tr = tl.lastIndex) > th) ||
                (tx(tf, t_(ti, th, te.index)),
                te.length > 1 && te.index < ti.length && $(push, tf, td(te, 1)),
                (tn = te[0].length),
                (th = tr),
                !(tf.length >= ts)));
            ) {
              if (tl.lastIndex === te.index) {
                tl.lastIndex++;
              }
            }
            if (th === ti.length) {
              if (tn || !tw(tl, "")) {
                tx(tf, "");
              }
            } else {
              tx(tf, t_(ti, th));
            }
            if (tf.length > ts) {
              return td(tf, 0, ts);
            }
            return tf;
          }
        : "0".split(undefined, 0).length
          ? function (J, Q) {
              if (J === undefined && Q === 0) {
                return [];
              }
              return tt(Z, this, J, Q);
            }
          : Z;
    return [
      function (Z, Q) {
        const $ = ta(this);
        const tr = ti(Z) ? undefined : th(Z, J);
        if (tr) {
          return tt(tr, Z, $, Q);
        }
        return tt(te, tc($), Z, Q);
      },
      function (J, $) {
        const tt = tn(this);
        const tr = tc(J);
        const ti = Q(te, tt, tr, $, te !== Z);
        if (ti.done) {
          return ti.value;
        }
        const to = ts(tt, RegExp);
        const tt_unicode = tt.unicode;
        const th =
          (tt.ignoreCase ? "i" : "") +
          (tt.multiline ? "m" : "") +
          (tt.unicode ? "u" : "") +
          (tb_UNSUPPORTED_Y ? "g" : "y");
        const td = new to(tb_UNSUPPORTED_Y ? "^(?:" + tt.source + ")" : tt, th);
        const tp = $ === undefined ? 4294967295 : $ >>> 0;
        if (tp === 0) {
          return [];
        }
        if (tr.length === 0) {
          if (tl(td, tr) === null) {
            return [tr];
          }
          return [];
        }
        let tb = 0;
        for (var tv = 0, tm = []; tv < tr.length;) {
          td.lastIndex = tb_UNSUPPORTED_Y ? 0 : tv;
          let tw;
          const tM = tl(td, tb_UNSUPPORTED_Y ? t_(tr, tv) : tr);
          if (
            tM === null ||
            (tw = Math.min(
              tu(td.lastIndex + (tb_UNSUPPORTED_Y ? tv : 0)),
              tr.length,
            )) === tb
          ) {
            tv = tf(tr, tv, tt_unicode);
          } else {
            tx(tm, t_(tr, tb, tv));
            if (tm.length === tp) {
              return tm;
            }
            for (let tS = 1; tS <= tM.length - 1; tS++) {
              tx(tm, tM[tS]);
              if (tm.length === tp) {
                return tm;
              }
            }
            tb = tw;
            tv = tw;
          }
        }
        tx(tm, t_(tr, tb));
        return tm;
      },
    ];
  },
  !!tv(function () {
    const J = /(?:)/;
    const J_exec = J.exec;
    J.exec = function () {
      return J_exec.apply(this, arguments);
    };
    const Q = "ab".split(J);
    return Q.length !== 2 || Q[0] !== "a" || Q[1] !== "b";
  }),
  tb_UNSUPPORTED_Y,
);
