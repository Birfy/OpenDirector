import n from "./module-O9_5.js";
import i from "./module-X_6.js";
import o from "./module-Y_6.js";
import s from "./module-S9_5.js";
import a from "./module-YR_5.js";
import u from "./module-iJ_5.js";
const c = function () {};
const f = [];
const h = a("Reflect", "construct");
const l = /^\s*(?:class|function)\b/;
const v = n(l.exec);
const p = !l.exec(c);
const d = function (t) {
  if (!o(t)) {
    return false;
  }
  try {
    h(c, f, t);
    return true;
  } catch (t) {
    return false;
  }
};
const g = function (t) {
  if (!o(t)) {
    return false;
  }
  switch (s(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return p || !!v(l, u(t));
  } catch (t) {
    return true;
  }
};
g.sham = true;
export default !h ||
i(function () {
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
