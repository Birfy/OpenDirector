import n from "./module-o.js";
import o from "./module-VV_4.js";
import i from "./module-r.js";
import a from "./module-xE_3.js";
import s from "./module-Y.js";
import u from "./module-VO_3.js";
const c = function () {};
const f = [];
const l = s("Reflect", "construct");
const p = /^\s*(?:class|function)\b/;
const h = n(p.exec);
const v = !p.exec(c);
const d = function (e) {
  if (!i(e)) {
    return false;
  }
  try {
    l(c, f, e);
    return true;
  } catch (e) {
    return false;
  }
};
const g = function (e) {
  if (!i(e)) {
    return false;
  }
  switch (a(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return v || !!h(p, u(e));
  } catch (e) {
    return true;
  }
};
g.sham = true;
export default !l ||
o(function () {
  let e;
  return (
    d(d.call) ||
    !d(Object) ||
    !d(function () {
      e = true;
    }) ||
    e
  );
})
  ? g
  : d;
