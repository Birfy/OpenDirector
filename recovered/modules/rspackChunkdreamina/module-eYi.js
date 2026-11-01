import { tE } from "./module-rd_2.js";
export var qD = (() => {
  try {
    return typeof window === "undefined" || document === undefined;
  } catch (e) {
    return true;
  }
})();
export var on = qD
  ? tE
  : function (e, t, n, r) {
      if (e) {
        e.addEventListener(t, n, r || false);
      }
    };
export var AU = qD
  ? tE
  : function (e, t, n, r) {
      if (e) {
        e.removeEventListener(t, n, r || false);
      }
    };
export var gR = function (e, t) {
  if (!e) {
    return false;
  }
  if (e.contains) {
    return e.contains(t);
  }
  for (let n = t; n;) {
    if (n === e) {
      return true;
    }
    n = n.parentNode;
  }
  return false;
};
export var k7 = function (e) {
  const t = e === document.documentElement ? e.clientHeight : e.offsetHeight;
  const n = e === document.documentElement ? e.clientWidth : e.offsetWidth;
  return e.scrollHeight > t || e.scrollWidth > n;
};
export var t7 = function (e, t = document.documentElement) {
  const n = [];
  for (let r = e; r && r !== t;) {
    if (k7(r)) {
      n.push(r);
    }
    r = r.parentElement;
  }
  return n;
};
