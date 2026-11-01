import o from "./module-d_8.js";
import { f as f_1 } from "./module-og_8.js";
import a from "./module-ny_9.js";
import s from "./module-S_7.js";
import u from "./module-iB_8.js";
import c from "./module-xv_7.js";
import f from "./module-uW_8.js";
let n;
const l = "prototype";
const h = "script";
const v = f("IE_PROTO");
const p = function () {};
const d = (r) => "<" + h + ">" + r + "</" + h + ">";
const g = (r) => {
  r.write(d(""));
  r.close();
  const Object = r.parentWindow.Object;
  r = null;
  return Object;
};
const y = () => {
  let r;
  const t = c("iframe");
  t.style.display = "none";
  u.appendChild(t);
  t.src = String("java" + h + ":");
  (r = t.contentWindow.document).open();
  r.write(d("document.F=Object"));
  r.close();
  return r.F;
};
let m = function () {
  try {
    n = new ActiveXObject("htmlfile");
  } catch (r) {}
  m =
    typeof document !== "undefined"
      ? document.domain && n
        ? g(n)
        : y()
      : g(n);
  for (let r = a.length; r--;) {
    delete m[l][a[r]];
  }
  return m();
};
s[v] = true;
export default Object.create ||
  function (r, t) {
    let e;
    if (r !== null) {
      p[l] = o(r);
      e = new p();
      p[l] = null;
      e[v] = r;
    } else {
      e = m();
    }
    if (t === undefined) {
      return e;
    }
    return f_1(e, t);
  };
