import { xI } from "./module-p3K.js";
import { $N, Ax, Ko, v1 } from "./module-KwG.js";
import { G1, Kn, db, f2 } from "./module-XbS.js";
import { EB } from "./module-vTT.js";
let s = xI("ZodISODateTime", (e, t) => {
  Ko.init(e, t);
  EB.init(e, t);
});
export function w$(e) {
  return G1(s, e);
}
let l = xI("ZodISODate", (e, t) => {
  v1.init(e, t);
  EB.init(e, t);
});
export function p6(e) {
  return db(l, e);
}
let d = xI("ZodISOTime", (e, t) => {
  Ax.init(e, t);
  EB.init(e, t);
});
export function kB(e) {
  return Kn(d, e);
}
let f = xI("ZodISODuration", (e, t) => {
  $N.init(e, t);
  EB.init(e, t);
});
export function p0(e) {
  return f2(f, e);
}
