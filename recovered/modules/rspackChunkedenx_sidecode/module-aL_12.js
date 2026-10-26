import $ from "./module-A_13.js";
import tt from "./module-A2_13.js";
import te from "./module-H_2_12.js";
import tr from "./module-h_13.js";
import tn from "./module-D_2_12.js";
import ti from "./module-lN_12.js";
import to from "./module-fq_12.js";
import forced from "./module-N_12.js";
const ts = ti("toStringTag");
const AsyncIterator = function () {
  tt(this, to);
  if (te(this) === to) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = to;
if (!tn(to, ts)) {
  tr(to, ts, "AsyncIterator");
}
if (forced || !tn(to, "constructor") || to.constructor === Object) {
  tr(to, "constructor", AsyncIterator);
}
$(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    AsyncIterator,
  },
);
