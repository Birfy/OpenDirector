import o from "./module-d.js";
import { f as f_1 } from "./module-og.js";
import a from "./module-ny.js";
import s from "./module-S.js";
import u from "./module-iB.js";
import c from "./module-xv.js";
import f from "./module-uW.js";
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
  for (let t = a.length; t--;) {
    delete b[h][a[t]];
  }
  return b();
};
s[v] = true;
export default Object.create ||
  function (t, r) {
    let e;
    if (t !== null) {
      p[h] = o(t);
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
