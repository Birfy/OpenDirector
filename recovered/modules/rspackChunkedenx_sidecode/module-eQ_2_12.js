import $ from "./module-vE_12.js";
import tt from "./module-O9_12.js";
import te from "./module-ng_13.js";
import tr from "./module-eXf_12.js";
const tn = URLSearchParams;
const tn_prototype = tn.prototype;
const to = tt(tn_prototype.append);
const ta = tt(tn_prototype.delete);
const ts = tt(tn_prototype.forEach);
const tf = tt([].push);
const tu = new tn("a=1&a=2&b=3");
tu.delete("a", 1);
tu.delete("b", undefined);
if (tu + "" != "a=2") {
  $(
    tn_prototype,
    "delete",
    function (J) {
      let Z;
      const arguments_length = arguments.length;
      const $ = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && $ === undefined) {
        return ta(this, J);
      }
      const tt = [];
      ts(this, function (value, key) {
        tf(tt, {
          key,
          value,
        });
      });
      tr(arguments_length, 1);
      const tn = te(J);
      const ti = te($);
      for (var tu = 0, tc = 0, th = false, td = tt.length; tu < td;) {
        Z = tt[tu++];
        if (th || Z.key === tn) {
          th = true;
          ta(this, Z.key);
        } else {
          tc++;
        }
      }
      while (tc < td) {
        if ((Z = tt[tc++]).key !== tn || Z.value !== ti) {
          to(this, Z.key, Z.value);
        }
      }
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
