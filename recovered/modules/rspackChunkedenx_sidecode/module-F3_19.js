import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-we_20.js";
import a from "./module-vo_19.js";
import s from "./module-eXf_19.js";
import u from "./module-p2_19.js";
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
