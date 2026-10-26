import ti from "./module-J_13.js";
import to from "./module-WG_2_12.js";
import { f } from "./module-R_12.js";
import __ts from "./module-Z6_12.js";
import tf from "./module-nA_12.js";
import tu from "./module-A1_13.js";
import tc from "./module-bT_12.js";
import th from "./module-D8_12.js";
import td from "./module-p2_12.js";
let $;
let tt;
let te;
let tr;
let tn;
let __ts_set = __ts.set;
const tl = ti.MutationObserver || ti.WebKitMutationObserver;
const ti_document = ti.document;
const ti_process = ti.process;
const ti_Promise = ti.Promise;
const tg = f(ti, "queueMicrotask");
let ty = tg && tg.value;
if (!ty) {
  const tm = new tf();
  const tw = function () {
    let J;
    let Z;
    for (td && (J = ti_process.domain) && J.exit(); (Z = tm.get());) {
      try {
        Z();
      } catch (error) {
        if (tm.head) {
          $();
        }
        throw error;
      }
    }
    if (J) {
      J.enter();
    }
  };
  if (tu || td || th || !tl || !ti_document) {
    if (!tc && ti_Promise && ti_Promise.resolve) {
      tr = ti_Promise.resolve(undefined);
      tr.constructor = ti_Promise;
      tn = to(tr.then, tr);
      $ = function () {
        tn(tw);
      };
    } else if (td) {
      $ = function () {
        ti_process.nextTick(tw);
      };
    } else {
      __ts_set = to(__ts_set, ti);
      $ = function () {
        __ts_set(tw);
      };
    }
  } else {
    tt = true;
    te = ti_document.createTextNode("");
    new tl(tw).observe(te, {
      characterData: true,
    });
    $ = function () {
      te.data = tt = !tt;
    };
  }
  ty = function (J) {
    if (!tm.head) {
      $();
    }
    tm.add(J);
  };
}
export default ty;
