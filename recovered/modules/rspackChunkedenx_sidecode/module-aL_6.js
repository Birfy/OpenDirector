import n from "./module-A_7.js";
import o from "./module-A2_7.js";
import a from "./module-H_2_6.js";
import i from "./module-h_7.js";
import s from "./module-D_2_6.js";
import c from "./module-lN_6.js";
import u from "./module-fq_6.js";
import forced from "./module-N_6.js";
const l = c("toStringTag");
const AsyncIterator = function () {
  o(this, u);
  if (a(this) === u) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = u;
if (!s(u, l)) {
  i(u, l, "AsyncIterator");
}
if (forced || !s(u, "constructor") || u.constructor === Object) {
  i(u, "constructor", AsyncIterator);
}
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    AsyncIterator,
  },
);
