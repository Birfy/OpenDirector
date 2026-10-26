import { tE } from "./module-uRn.js";
export let qD = (() => {
  try {
    return typeof window === "undefined" || document === undefined;
  } catch (e) {
    return true;
  }
})();
export let on = qD
  ? tE
  : function (e, t, n, r) {
      if (e) {
        e.addEventListener(t, n, r || false);
      }
    };
export let AU = qD
  ? tE
  : function (e, t, n, r) {
      if (e) {
        e.removeEventListener(t, n, r || false);
      }
    };
let s = (e) => e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth;
export function G9(e) {
  return e.scrollWidth > e.clientWidth || e.clientHeight < e.scrollHeight;
}
export const gR = function (e, t) {
  if (!e) {
    return false;
  }
  if (e.contains) {
    return e.contains(t);
  }
  let n = t;
  while (n) {
    if (n === e) {
      return true;
    }
    n = n.parentNode;
  }
  return false;
};
export const t7 = (e, t = document.documentElement) => {
  let n = [];
  let r = e;
  while (r && r !== t) {
    if (s(r)) {
      n.push(r);
    }
    r = r.parentElement;
  }
  return n;
};
