import n from "./module-A_3.js";
import i from "./module-J_3.js";
import o from "./module-we_3.js";
import s from "./module-vo_2.js";
import a from "./module-eXf_2.js";
import u from "./module-p2_2.js";
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
