import o from "./module-d_21.js";
import { f as f_1 } from "./module-og_21.js";
import a from "./module-ny_22.js";
import s from "./module-S_20.js";
import c from "./module-iB_21.js";
import u from "./module-xv_20.js";
import f from "./module-uW_21.js";
let n;
const l = "prototype";
const h = "script";
const v = f("IE_PROTO");
const p = function () {};
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
  for (let t = a.length; t--;) {
    delete m[l][a[t]];
  }
  return m();
};
s[v] = true;
export default Object.create ||
  function (t, r) {
    let e;
    if (t !== null) {
      p[l] = o(t);
      e = new p();
      p[l] = null;
      e[v] = t;
    } else {
      e = m();
    }
    if (r === undefined) {
      return e;
    }
    return f_1(e, r);
  };
