import o from "./module-d_20.js";
import { f as f_1 } from "./module-og_20.js";
import a from "./module-ny_21.js";
import s from "./module-S_19.js";
import u from "./module-iB_20.js";
import c from "./module-xv_19.js";
import f from "./module-uW_20.js";
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
let b = function () {
  try {
    n = new ActiveXObject("htmlfile");
  } catch (r) {}
  b =
    typeof document !== "undefined"
      ? document.domain && n
        ? g(n)
        : y()
      : g(n);
  for (let r = a.length; r--;) {
    delete b[l][a[r]];
  }
  return b();
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
      e = b();
    }
    if (t === undefined) {
      return e;
    }
    return f_1(e, t);
  };
