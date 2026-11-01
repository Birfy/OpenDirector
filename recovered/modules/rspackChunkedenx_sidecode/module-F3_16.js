import n from "./module-A_17.js";
import o from "./module-J_17.js";
import i from "./module-we_17.js";
import a from "./module-vo_16.js";
import s from "./module-eXf_16.js";
import u from "./module-p2_16.js";
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
