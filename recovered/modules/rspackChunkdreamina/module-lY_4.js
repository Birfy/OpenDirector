import o from "./module-IF_2.js";
import { f as f_1 } from "./module-Eq_2.js";
import a from "./module-zg_3.js";
import s from "./module-rw.js";
import u from "./module-sb_2.js";
import c from "./module-nH_3.js";
import f from "./module-s.js";
let n;
const l = "prototype";
const p = "script";
const h = f("IE_PROTO");
const v = function () {};
const d = (e) => "<" + p + ">" + e + "</" + p + ">";
const g = (e) => {
  e.write(d(""));
  e.close();
  const Object = e.parentWindow.Object;
  e = null;
  return Object;
};
const y = () => {
  let e;
  const t = c("iframe");
  t.style.display = "none";
  u.appendChild(t);
  t.src = String("java" + p + ":");
  (e = t.contentWindow.document).open();
  e.write(d("document.F=Object"));
  e.close();
  return e.F;
};
let m = function () {
  try {
    n = new ActiveXObject("htmlfile");
  } catch (e) {}
  m =
    typeof document !== "undefined"
      ? document.domain && n
        ? g(n)
        : y()
      : g(n);
  for (let e = a.length; e--;) {
    delete m[l][a[e]];
  }
  return m();
};
s[h] = true;
export default Object.create ||
  function (e, t) {
    let r;
    if (e !== null) {
      v[l] = o(e);
      r = new v();
      v[l] = null;
      r[h] = e;
    } else {
      r = m();
    }
    if (t === undefined) {
      return r;
    }
    return f_1(r, t);
  };
