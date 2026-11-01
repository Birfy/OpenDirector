import n from "./module-O9_9.js";
import o from "./module-X_10.js";
import i from "./module-Y_10.js";
import a from "./module-S9_9.js";
import s from "./module-YR_9.js";
import u from "./module-iJ_9.js";
const c = function () {};
const f = [];
const l = s("Reflect", "construct");
const h = /^\s*(?:class|function)\b/;
const v = n(h.exec);
const d = !h.exec(c);
const p = function (t) {
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
    return d || !!v(h, u(t));
  } catch (t) {
    return true;
  }
};
g.sham = true;
export default !l ||
o(function () {
  let t;
  return (
    p(p.call) ||
    !p(Object) ||
    !p(function () {
      t = true;
    }) ||
    t
  );
})
  ? g
  : p;
