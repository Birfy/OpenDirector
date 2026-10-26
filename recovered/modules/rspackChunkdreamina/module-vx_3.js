import { Ql } from "./module-Vc_3.js";
export var rl = (e) => (n) => {
  var t;
  var l;
  var a = (l = window) == null || (t = l[Ql]) == null ? undefined : t[e];
  if (a && typeof a.shouldRevalidate === "function") {
    return a.shouldRevalidate(n);
  }
  return n.defaultShouldRevalidate;
};
export var eM = (e, n) => {
  if (typeof document !== "undefined") {
    window[Ql][n] = e;
  }
  return e;
};
