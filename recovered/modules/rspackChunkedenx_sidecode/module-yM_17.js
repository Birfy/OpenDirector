import n from "./module-O9_16.js";
import o from "./module-X_17.js";
import i from "./module-Y_17.js";
import a from "./module-S9_16.js";
import s from "./module-YR_16.js";
import u from "./module-iJ_16.js";
const c = function () {};
const f = [];
const l = s("Reflect", "construct");
const h = /^\s*(?:class|function)\b/;
const v = n(h.exec);
const p = !h.exec(c);
const d = function (t) {
  if (!i(t)) {
    return false;
  }
  try {
    l(c, f, t);
    return true;
  } catch (t) {
    return false;
  }
};
const g = function (t) {
  if (!i(t)) {
    return false;
  }
  switch (a(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return p || !!v(h, u(t));
  } catch (t) {
    return true;
  }
};
g.sham = true;
export default !l ||
o(function () {
  let t;
  return (
    d(d.call) ||
    !d(Object) ||
    !d(function () {
      t = true;
    }) ||
    t
  );
})
  ? g
  : d;
