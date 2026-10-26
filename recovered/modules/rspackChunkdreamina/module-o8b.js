import n from "g";
import i from "o";
import a from "r";
import o from "VO";
import s from "h";
import A from "F";
const u = /^\s*class\b/;
const l = i(u.exec);
const h = (t) => {
  try {
    if (!A || !l(u, o(t))) {
      return false;
    }
  } catch (t) {}
  const e = Object.getOwnPropertyDescriptor(t, "prototype");
  return !!e && s(e, "writable") && !e.writable;
};
n(
  {
    target: "Function",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isCallable: function (t) {
      return a(t) && !h(t);
    },
  },
);
