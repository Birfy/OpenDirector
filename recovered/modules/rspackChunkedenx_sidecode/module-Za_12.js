import tt from "./module-d_13.js";
import { f } from "./module-og_13.js";
import tr from "./module-ny_14.js";
import tn from "./module-S_12.js";
import ti from "./module-iB_13.js";
import to from "./module-xv_12.js";
import ta from "./module-uW_13.js";
let $;
const ts = "prototype";
const tf = "script";
const tu = ta("IE_PROTO");
const tc = function () {};
const th = (J) => "<" + tf + ">" + J + "</" + tf + ">";
const td = (J) => {
  J.write(th(""));
  J.close();
  const Object = J.parentWindow.Object;
  J = null;
  return Object;
};
const tl = () => {
  let J;
  const Z = to("iframe");
  Z.style.display = "none";
  ti.appendChild(Z);
  Z.src = String("java" + tf + ":");
  (J = Z.contentWindow.document).open();
  J.write(th("document.F=Object"));
  J.close();
  return J.F;
};
let tp = function () {
  try {
    $ = new ActiveXObject("htmlfile");
  } catch (J) {}
  tp =
    typeof document !== "undefined"
      ? document.domain && $
        ? td($)
        : tl()
      : td($);
  for (let J = tr.length; J--;) {
    delete tp[ts][tr[J]];
  }
  return tp();
};
tn[tu] = true;
export default Object.create ||
  function (J, Z) {
    let Q;
    if (J !== null) {
      tc[ts] = tt(J);
      Q = new tc();
      tc[ts] = null;
      Q[tu] = J;
    } else {
      Q = tp();
    }
    if (Z === undefined) {
      return Q;
    }
    return f(Q, Z);
  };
