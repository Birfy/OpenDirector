import $ from "./module-O9_12.js";
import tt from "./module-X_13.js";
import te from "./module-Y_13.js";
import tr from "./module-S9_12.js";
import tn from "./module-YR_12.js";
import ti from "./module-iJ_12.js";
const to = function () {};
const ta = [];
const ts = tn("Reflect", "construct");
const tf = /^\s*(?:class|function)\b/;
const tu = $(tf.exec);
const tc = !tf.exec(to);
const th = function (J) {
  if (!te(J)) {
    return false;
  }
  try {
    ts(to, ta, J);
    return true;
  } catch (J) {
    return false;
  }
};
const td = function (J) {
  if (!te(J)) {
    return false;
  }
  switch (tr(J)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return tc || !!tu(tf, ti(J));
  } catch (J) {
    return true;
  }
};
td.sham = true;
export default !ts ||
tt(function () {
  let J;
  return (
    th(th.call) ||
    !th(Object) ||
    !th(function () {
      J = true;
    }) ||
    J
  );
})
  ? td
  : th;
