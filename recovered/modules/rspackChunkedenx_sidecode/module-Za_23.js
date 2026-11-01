import o from "./module-d_24.js";
import { f as f_1 } from "./module-og_24.js";
import a from "./module-ny_25.js";
import s from "./module-S_23.js";
import c from "./module-iB_24.js";
import u from "./module-xv_23.js";
import f from "./module-uW_24.js";
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
let b = function () {
  try {
    n = new ActiveXObject("htmlfile");
  } catch (t) {}
  b =
    typeof document !== "undefined"
      ? document.domain && n
        ? g(n)
        : y()
      : g(n);
  for (let t = a.length; t--;) {
    delete b[l][a[t]];
  }
  return b();
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
      e = b();
    }
    if (r === undefined) {
      return e;
    }
    return f_1(e, r);
  };
