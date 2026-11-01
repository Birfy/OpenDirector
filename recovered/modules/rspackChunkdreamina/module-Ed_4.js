import n from "g";
import i from "u";
import a from "zr";
import o from "B";
import s from "lU";
import A from "fd";
const i_process = i.process;
n(
  {
    global: true,
    enumerable: true,
    dontCallGetSet: true,
  },
  {
    queueMicrotask: function (t) {
      s(arguments.length, 1);
      o(t);
      const e = A && i_process.domain;
      a(e ? e.bind(t) : t);
    },
  },
);
