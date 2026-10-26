import n from "./module-A_24.js";
import o from "./module-A2_24.js";
import i from "./module-H_2_23.js";
import a from "./module-h_24.js";
import s from "./module-D_2_23.js";
import c from "./module-lN_23.js";
import u from "./module-fq_23.js";
import forced from "./module-N_23.js";
const l = c("toStringTag");
const AsyncIterator = function () {
  o(this, u);
  if (i(this) === u) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = u;
if (!s(u, l)) {
  a(u, l, "AsyncIterator");
}
if (forced || !s(u, "constructor") || u.constructor === Object) {
  a(u, "constructor", AsyncIterator);
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
