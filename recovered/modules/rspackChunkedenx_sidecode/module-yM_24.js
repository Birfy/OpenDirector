import n from "./module-O9_23.js";
import o from "./module-X_24.js";
import i from "./module-Y_24.js";
import a from "./module-S9_23.js";
import s from "./module-YR_23.js";
import c from "./module-iJ_23.js";
const u = function () {};
const f = [];
const l = s("Reflect", "construct");
const h = /^\s*(?:class|function)\b/;
const v = n(h.exec);
const p = !h.exec(u);
const d = function (t) {
  if (!i(t)) {
    return false;
  }
  try {
    l(u, f, t);
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
    return p || !!v(h, c(t));
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
