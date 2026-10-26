import n from "./module-A_24.js";
import o from "./module-J_24.js";
import i from "./module-we_24.js";
import a from "./module-vo_23.js";
import s from "./module-eXf_23.js";
import c from "./module-p2_23.js";
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
      const r = c && o_process.domain;
      i(r ? r.bind(t) : t);
    },
  },
);
