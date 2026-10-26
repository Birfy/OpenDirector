import "./module-ID_7.js";
import "./module-KR_6.js";
import n from "./module-YR_6.js";
import o from "./module-Za_6.js";
import a from "./module-y_2_6.js";
const c = n("Map");
const u = n("WeakMap");
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
      ? this.objectsByIndex[t] || (this.objectsByIndex[t] = new u())
      : this.primitives || (this.primitives = new c());
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
    if (a((r = arguments[t]))) {
      e = e.next(t, r, true);
    }
  }
  if (this === Object && e === l) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (t = 0; t < arguments_length; t++) {
    if (!a((r = arguments[t]))) {
      e = e.next(t, r, false);
    }
  }
  return e;
}
