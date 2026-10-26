import n from "./module-A_4.js";
import i from "./module-J_4.js";
import o from "./module-we_4.js";
import s from "./module-vo_3.js";
import a from "./module-eXf_3.js";
import u from "./module-p2_3.js";
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
