import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-we_10.js";
import a from "./module-vo_9.js";
import s from "./module-eXf_9.js";
import u from "./module-p2_9.js";
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
      const e = u && o_process.domain;
      i(e ? e.bind(t) : t);
    },
  },
);
