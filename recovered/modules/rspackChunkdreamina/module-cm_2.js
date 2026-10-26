import { F } from "./module-vz.js";
import { y } from "./module-ys.js";
import { W } from "./module-on_3.js";
import { H } from "./module-vxa.js";
import l from "fF";
import { Y } from "./module-kcd_2.js";
import { Ld } from "./module-L6W.js";
export var N = (e) => {
  var t;
  var n;
  if (Y(e)) {
    return Ld(e);
  }
  if (F(e)) {
    return e.benefitAmount;
  }
  if (y(e)) {
    if ((t = e.benefitAmount) != null) {
      return t;
    }
    return l.Jl;
  }
  if (W(e)) {
    if ((n = e.benefitCount) != null) {
      return n;
    }
    return 1;
  }
  H(e);
  return 1;
};
