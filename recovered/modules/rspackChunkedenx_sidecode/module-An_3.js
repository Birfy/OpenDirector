import "./module-ID_3.js";
import "./module-KR_2.js";
import n from "./module-YR_2.js";
import i from "./module-Za_2.js";
import o from "./module-y_2_2.js";
const u = n("Map");
const c = n("WeakMap");
class f {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = i(null);
  }
  get(t, r) {
    return this[t] || (this[t] = r());
  }
  next(t, r, e) {
    const n = e
      ? this.objectsByIndex[t] || (this.objectsByIndex[t] = new c())
      : this.primitives || (this.primitives = new u());
    let i = n.get(r);
    if (!i) {
      n.set(r, (i = new f()));
    }
    return i;
  }
}
const h = new f();
export default function () {
  let t;
  let r;
  let e = h;
  const arguments_length = arguments.length;
  for (t = 0; t < arguments_length; t++) {
    if (o((r = arguments[t]))) {
      e = e.next(t, r, true);
    }
  }
  if (this === Object && e === h) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (t = 0; t < arguments_length; t++) {
    if (!o((r = arguments[t]))) {
      e = e.next(t, r, false);
    }
  }
  return e;
}
