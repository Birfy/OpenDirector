import o from "./module-d_7.js";
import { f as f_1 } from "./module-og_7.js";
import i from "./module-ny_8.js";
import s from "./module-S_6.js";
import c from "./module-iB_7.js";
import u from "./module-xv_6.js";
import f from "./module-uW_7.js";
let n;
const l = "prototype";
const h = "script";
const p = f("IE_PROTO");
const v = function () {};
const d = (t) => "<" + h + ">" + t + "</" + h + ">";
const g = (t) => {
  t.write(d(""));
  t.close();
  const Object = t.parentWindow.Object;
  t = null;
  return Object;
};
const y = () => {
  let t;
  const r = u("iframe");
  r.style.display = "none";
  c.appendChild(r);
  r.src = String("java" + h + ":");
  (t = r.contentWindow.document).open();
  t.write(d("document.F=Object"));
  t.close();
  return t.F;
};
let m = function () {
  try {
    n = new ActiveXObject("htmlfile");
  } catch (t) {}
  m =
    typeof document !== "undefined"
      ? document.domain && n
        ? g(n)
        : y()
      : g(n);
  for (let t = i.length; t--;) {
    delete m[l][i[t]];
  }
  return m();
};
s[p] = true;
export default Object.create ||
  function (t, r) {
    let e;
    if (t !== null) {
      v[l] = o(t);
      e = new v();
      v[l] = null;
      e[p] = t;
    } else {
      e = m();
    }
    if (r === undefined) {
      return e;
    }
    return f_1(e, r);
  };
