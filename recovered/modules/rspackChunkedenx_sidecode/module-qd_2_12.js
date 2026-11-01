import $ from "./module-vB_14.js";
import tt from "./module-F4_13.js";
import te from "./module-jOn_12.js";
import tr from "./module-j_2_12.js";
import tn from "./module-Ke_12.js";
import ti from "./module-V6_13.js";
import to from "./module-X_13.js";
const $_aTypedArray = $.aTypedArray;
const $_getTypedArrayConstructor = $.getTypedArrayConstructor;
const $_exportTypedArrayMethod = $.exportTypedArrayMethod;
$_exportTypedArrayMethod(
  "toSpliced",
  function (J, Z) {
    let Q;
    let $;
    let to;
    let tf;
    let th;
    let td;
    let tl;
    const tp = $_aTypedArray(this);
    const tb = $_getTypedArrayConstructor(tp);
    const tv = tt(tp);
    const tg = tr(J, tv);
    const arguments_length = arguments.length;
    let tm = 0;
    if (arguments_length === 0) {
      $ = 0;
      Q = 0;
    } else if (arguments_length === 1) {
      Q = 0;
      $ = tv - tg;
    } else {
      $ = Math.min(Math.max(ti(Z), 0), tv - tg);
      if ((Q = arguments_length - 2)) {
        to = te((tf = new tb(Q)));
        for (let tw = 2; tw < arguments_length; tw++) {
          th = arguments[tw];
          tf[tw - 2] = to ? tn(th) : +th;
        }
      }
    }
    for (tl = new tb((td = tv + Q - $)); tm < tg; tm++) {
      tl[tm] = tp[tm];
    }
    for (; tm < tg + Q; tm++) {
      tl[tm] = tf[tm - tg];
    }
    for (; tm < td; tm++) {
      tl[tm] = tp[tm + $ - Q];
    }
    return tl;
  },
  !!to(function () {
    const J = new Int8Array([1]);
    const Z = J.toSpliced(1, 0, {
      valueOf: function () {
        J[0] = 2;
        return 3;
      },
    });
    return Z[0] !== 2 || Z[1] !== 3;
  }),
);
