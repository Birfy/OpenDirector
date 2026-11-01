import "./module-ID_8.js";
import "./module-KR_7.js";
import n from "./module-YR_7.js";
import o from "./module-Za_7.js";
import i from "./module-y_2_7.js";
const u = n("Map");
const c = n("WeakMap");
class f {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = o(null);
  }
  get(r, t) {
    return this[r] || (this[r] = t());
  }
  next(r, t, e) {
    const n = e
      ? this.objectsByIndex[r] || (this.objectsByIndex[r] = new c())
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
  let r;
  let t;
  let e = l;
  const arguments_length = arguments.length;
  for (r = 0; r < arguments_length; r++) {
    if (i((t = arguments[r]))) {
      e = e.next(r, t, true);
    }
  }
  if (this === Object && e === l) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (r = 0; r < arguments_length; r++) {
    if (!i((t = arguments[r]))) {
      e = e.next(r, t, false);
    }
  }
  return e;
}
