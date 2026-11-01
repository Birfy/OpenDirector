import n from "./module-O9.js";
import o from "./module-X.js";
import i from "./module-Y.js";
import a from "./module-S9.js";
import s from "./module-YR.js";
import u from "./module-iJ.js";
const c = function () {};
const f = [];
const h = s("Reflect", "construct");
const l = /^\s*(?:class|function)\b/;
const v = n(l.exec);
const p = !l.exec(c);
const d = function (t) {
  if (!i(t)) {
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
    return p || !!v(l, u(t));
  } catch (t) {
    return true;
  }
};
g.sham = true;
export default !h ||
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
