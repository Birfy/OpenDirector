import i from "./module-d_23.js";
import { f as f_1 } from "./module-og_23.js";
import s from "./module-ny_24.js";
import a from "./module-S_22.js";
import u from "./module-iB_23.js";
import c from "./module-xv_22.js";
import f from "./module-uW_23.js";
let n;
const h = "prototype";
const l = "script";
const v = f("IE_PROTO");
const p = function () {};
const d = (t) => "<" + l + ">" + t + "</" + l + ">";
const g = (t) => {
  t.write(d(""));
  t.close();
  const Object = t.parentWindow.Object;
  t = null;
  return Object;
};
const y = () => {
  let t;
  const r = c("iframe");
  r.style.display = "none";
  u.appendChild(r);
  r.src = String("java" + l + ":");
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
  for (let t = s.length; t--;) {
    delete b[h][s[t]];
  }
  return b();
};
a[v] = true;
export default Object.create ||
  function (t, r) {
    let e;
    if (t !== null) {
      p[h] = i(t);
      e = new p();
      p[h] = null;
      e[v] = t;
    } else {
      e = b();
    }
    if (r === undefined) {
      return e;
    }
    return f_1(e, r);
  };
