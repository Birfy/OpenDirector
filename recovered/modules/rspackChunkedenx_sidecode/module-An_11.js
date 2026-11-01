import "./module-ID_11.js";
import "./module-KR_10.js";
import n from "./module-YR_10.js";
import o from "./module-Za_10.js";
import i from "./module-y_2_10.js";
const u = n("Map");
const c = n("WeakMap");
class f {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = o(null);
  }
  get(t, r) {
    return this[t] || (this[t] = r());
  }
  next(t, r, e) {
    const n = e
      ? this.objectsByIndex[t] || (this.objectsByIndex[t] = new c())
      : this.primitives || (this.primitives = new u());
    let o = n.get(r);
    if (!o) {
      n.set(r, (o = new f()));
    }
    return o;
  }
}
const l = new f();
export default function () {
  let t;
  let r;
  let e = l;
  const arguments_length = arguments.length;
  for (t = 0; t < arguments_length; t++) {
    if (i((r = arguments[t]))) {
      e = e.next(t, r, true);
    }
  }
  if (this === Object && e === l) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (t = 0; t < arguments_length; t++) {
    if (!i((r = arguments[t]))) {
      e = e.next(t, r, false);
    }
  }
  return e;
}
