import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-we_8.js";
import a from "./module-vo_7.js";
import s from "./module-eXf_7.js";
import u from "./module-p2_7.js";
const o_process = o.process;
n(
  {
    global: true,
    enumerable: true,
    dontCallGetSet: true,
  },
  {
    queueMicrotask: function (r) {
      s(arguments.length, 1);
      a(r);
      const t = u && o_process.domain;
      i(t ? t.bind(r) : r);
    },
  },
);
