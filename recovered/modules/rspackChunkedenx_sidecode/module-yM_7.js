import n from "./module-O9_6.js";
import o from "./module-X_7.js";
import a from "./module-Y_7.js";
import i from "./module-S9_6.js";
import s from "./module-YR_6.js";
import c from "./module-iJ_6.js";
const u = function () {};
const f = [];
const l = s("Reflect", "construct");
const h = /^\s*(?:class|function)\b/;
const p = n(h.exec);
const v = !h.exec(u);
const d = function (t) {
  if (!a(t)) {
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
  if (!a(t)) {
    return false;
  }
  switch (i(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return v || !!p(h, c(t));
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
