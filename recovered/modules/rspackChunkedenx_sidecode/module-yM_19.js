import n from "./module-O9_18.js";
import o from "./module-X_19.js";
import i from "./module-Y_19.js";
import a from "./module-S9_18.js";
import s from "./module-YR_18.js";
import u from "./module-iJ_18.js";
const c = function () {};
const f = [];
const h = s("Reflect", "construct");
const l = /^\s*(?:class|function)\b/;
const v = n(l.exec);
const p = !l.exec(c);
const d = function (r) {
  if (!i(r)) {
    return false;
  }
  try {
    h(c, f, r);
    return true;
  } catch (r) {
    return false;
  }
};
const g = function (r) {
  if (!i(r)) {
    return false;
  }
  switch (a(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return p || !!v(l, u(r));
  } catch (r) {
    return true;
  }
};
g.sham = true;
export default !h ||
o(function () {
  let r;
  return (
    d(d.call) ||
    !d(Object) ||
    !d(function () {
      r = true;
    }) ||
    r
  );
})
  ? g
  : d;
