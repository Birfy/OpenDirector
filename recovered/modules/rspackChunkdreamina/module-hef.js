import { q } from "./module-c6h.js";
import { q as q_1 } from "./module-gl_2.js";
import { S } from "./module-js_2.js";
import { Y } from "./module-y9l.js";
import { R } from "./module-us4.js";
import { U } from "./module-vN_2.js";
import { e as e_1 } from "./module-MX_2.js";
import { w } from "./module-Hmo.js";
import { d } from "./module-k9s.js";
export function W(e) {
  if (q(e)) {
    if (q_1(e.controlNet)) {
      return e.controlNet.depth.originImage;
    }
    if (S(e.controlNet)) {
      return e.controlNet.canny.originImage;
    }
    if (Y(e.controlNet)) {
      return e.controlNet.pose.originImage;
    }
    return undefined;
  }
  if (R(e)) {
    return e.source;
  }
  if (U(e)) {
    return e.styleReference.image;
  }
  if (e_1(e) || w(e)) {
    return e.source;
  }
  if (d(e)) {
    return e.originImage;
  }
}
