import $ from "./module-vE_12.js";
import tt from "./module-O9_12.js";
import te from "./module-ng_13.js";
import tr from "./module-eXf_12.js";
const tn = URLSearchParams;
const tn_prototype = tn.prototype;
const to = tt(tn_prototype.getAll);
const ta = tt(tn_prototype.has);
const ts = new tn("a=1");
if (ts.has("a", 2) || !ts.has("a", undefined)) {
  $(
    tn_prototype,
    "has",
    function (J) {
      const arguments_length = arguments.length;
      const Q = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && Q === undefined) {
        return ta(this, J);
      }
      const $ = to(this, J);
      tr(arguments_length, 1);
      const tt = te(Q);
      for (let tn = 0; tn < $.length;) {
        if ($[tn++] === tt) {
          return true;
        }
      }
      return false;
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
