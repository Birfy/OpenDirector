import n from "./module-A_11.js";
import o from "./module-J_11.js";
import i from "./module-we_11.js";
import a from "./module-vo_10.js";
import s from "./module-eXf_10.js";
import u from "./module-p2_10.js";
const o_process = o.process;
n(
  {
    global: true,
    enumerable: true,
    dontCallGetSet: true,
  },
  {
    queueMicrotask: function (t) {
      s(arguments.length, 1);
      a(t);
      const r = u && o_process.domain;
      i(r ? r.bind(t) : t);
    },
  },
);
