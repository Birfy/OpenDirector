import te from "./module-J_13.js";
import tr from "./module-W_2_12.js";
import tn from "./module-Y_13.js";
import ti from "./module-Za_12.js";
import to from "./module-H_2_12.js";
import ta from "./module-vE_12.js";
import ts from "./module-lN_12.js";
import tf from "./module-N_12.js";
let $;
let tt;
const tu = "USE_FUNCTION_CONSTRUCTOR";
const tc = ts("asyncIterator");
const te_AsyncIterator = te.AsyncIterator;
const tr_AsyncIteratorPrototype = tr.AsyncIteratorPrototype;
if (tr_AsyncIteratorPrototype) {
  $ = tr_AsyncIteratorPrototype;
} else if (tn(te_AsyncIterator)) {
  $ = te_AsyncIterator.prototype;
} else if (tr[tu] || te[tu]) {
  try {
    tt = to(to(to(Function("return async function*(){}()")())));
    if (to(tt) === Object.prototype) {
      $ = tt;
    }
  } catch (J) {}
}
if ($) {
  if (tf) {
    $ = ti($);
  }
} else {
  $ = {};
}
if (!tn($[tc])) {
  ta($, tc, function () {
    return this;
  });
}
export default $;
