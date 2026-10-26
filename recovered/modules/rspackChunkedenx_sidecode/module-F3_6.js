import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-we_7.js";
import i from "./module-vo_6.js";
import s from "./module-eXf_6.js";
import c from "./module-p2_6.js";
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
      i(t);
      const r = c && o_process.domain;
      a(r ? r.bind(t) : t);
    },
  },
);
