import $ from "./module-O9_12.js";
import tt from "./module-V6_13.js";
import te from "./module-ng_13.js";
import tr from "./module-vj_13.js";
const tn = $("".charAt);
const ti = $("".charCodeAt);
const to = $("".slice);
const ta = (J) =>
  function (Z, Q) {
    let $;
    let ta;
    const ts = te(tr(Z));
    const tf = tt(Q);
    const ts_length = ts.length;
    if (tf < 0 || tf >= ts_length) {
      if (J) {
        return "";
      }
      return undefined;
    }
    if (
      ($ = ti(ts, tf)) < 55296 ||
      $ > 56319 ||
      tf + 1 === ts_length ||
      (ta = ti(ts, tf + 1)) < 56320 ||
      ta > 57343
    ) {
      if (J) {
        return tn(ts, tf);
      }
      return $;
    }
    if (J) {
      return to(ts, tf, tf + 2);
    }
    return (($ - 55296) << 10) + (ta - 56320) + 65536;
  };
export default {
  codeAt: ta(false),
  charAt: ta(true),
};
