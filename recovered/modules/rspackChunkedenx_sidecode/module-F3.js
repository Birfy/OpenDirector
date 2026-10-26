import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-we.js";
import a from "./module-vo.js";
import s from "./module-eXf.js";
import u from "./module-p2.js";
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
