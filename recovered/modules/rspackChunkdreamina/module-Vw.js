import "./module-Pf_2_2.js";
import "./module-RRx.js";
import n from "./module-Y.js";
import o from "./module-lY_4.js";
import i from "./module-N.js";
const u = n("Map");
const c = n("WeakMap");
class f {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = o(null);
  }
  get(e, t) {
    return this[e] || (this[e] = t());
  }
  next(e, t, r) {
    const n = r
      ? this.objectsByIndex[e] || (this.objectsByIndex[e] = new c())
      : this.primitives || (this.primitives = new u());
    let o = n.get(t);
    if (!o) {
      n.set(t, (o = new f()));
    }
    return o;
  }
}
const l = new f();
export default function () {
  let e;
  let t;
  let r = l;
  const arguments_length = arguments.length;
  for (e = 0; e < arguments_length; e++) {
    if (i((t = arguments[e]))) {
      r = r.next(e, t, true);
    }
  }
  if (this === Object && r === l) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (e = 0; e < arguments_length; e++) {
    if (!i((t = arguments[e]))) {
      r = r.next(e, t, false);
    }
  }
  return r;
}
