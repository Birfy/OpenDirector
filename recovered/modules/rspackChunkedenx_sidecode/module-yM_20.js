import n from "./module-O9_19.js";
import o from "./module-X_20.js";
import i from "./module-Y_20.js";
import a from "./module-S9_19.js";
import s from "./module-YR_19.js";
import u from "./module-iJ_19.js";
const c = function () {};
const f = [];
const l = s("Reflect", "construct");
const h = /^\s*(?:class|function)\b/;
const v = n(h.exec);
const p = !h.exec(c);
const d = function (r) {
  if (!i(r)) {
    return false;
  }
  try {
    l(c, f, r);
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
    return p || !!v(h, u(r));
  } catch (r) {
    return true;
  }
};
g.sham = true;
export default !l ||
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
