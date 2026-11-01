import n from "./module-A_22.js";
import i from "./module-J_22.js";
import o from "./module-we_22.js";
import s from "./module-vo_21.js";
import a from "./module-eXf_21.js";
import u from "./module-p2_21.js";
const i_process = i.process;
n(
  {
    global: true,
    enumerable: true,
    dontCallGetSet: true,
  },
  {
    queueMicrotask: function (t) {
      a(arguments.length, 1);
      s(t);
      const r = u && i_process.domain;
      o(r ? r.bind(t) : t);
    },
  },
);
