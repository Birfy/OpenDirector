import o from "./module-d_10.js";
import { f as f_1 } from "./module-og_10.js";
import a from "./module-ny_11.js";
import s from "./module-S_9.js";
import u from "./module-iB_10.js";
import c from "./module-xv_9.js";
import f from "./module-uW_10.js";
let n;
const l = "prototype";
const h = "script";
const v = f("IE_PROTO");
const d = function () {};
const p = (t) => "<" + h + ">" + t + "</" + h + ">";
const g = (t) => {
  t.write(p(""));
  t.close();
  const Object = t.parentWindow.Object;
  t = null;
  return Object;
};
const y = () => {
  let t;
  const e = c("iframe");
  e.style.display = "none";
  u.appendChild(e);
  e.src = String("java" + h + ":");
  (t = e.contentWindow.document).open();
  t.write(p("document.F=Object"));
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
  function (t, e) {
    let r;
    if (t !== null) {
      d[l] = o(t);
      r = new d();
      d[l] = null;
      r[v] = t;
    } else {
      r = m();
    }
    if (e === undefined) {
      return r;
    }
    return f_1(r, e);
  };
