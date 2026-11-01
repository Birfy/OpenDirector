import o from "./module-d_19.js";
import { f as f_1 } from "./module-og_19.js";
import a from "./module-ny_20.js";
import s from "./module-S_18.js";
import u from "./module-iB_19.js";
import c from "./module-xv_18.js";
import f from "./module-uW_19.js";
let n;
const h = "prototype";
const l = "script";
const v = f("IE_PROTO");
const p = function () {};
const d = (r) => "<" + l + ">" + r + "</" + l + ">";
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
  t.src = String("java" + l + ":");
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
    delete b[h][a[r]];
  }
  return b();
};
s[v] = true;
export default Object.create ||
  function (r, t) {
    let e;
    if (r !== null) {
      p[h] = o(r);
      e = new p();
      p[h] = null;
      e[v] = r;
    } else {
      e = b();
    }
    if (t === undefined) {
      return e;
    }
    return f_1(e, t);
  };
