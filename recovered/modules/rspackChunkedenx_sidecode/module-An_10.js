import "./module-ID_10.js";
import "./module-KR_9.js";
import n from "./module-YR_9.js";
import o from "./module-Za_9.js";
import i from "./module-y_2_9.js";
const u = n("Map");
const c = n("WeakMap");
class f {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = o(null);
  }
  get(t, e) {
    return this[t] || (this[t] = e());
  }
  next(t, e, r) {
    const n = r
      ? this.objectsByIndex[t] || (this.objectsByIndex[t] = new c())
      : this.primitives || (this.primitives = new u());
    let o = n.get(e);
    if (!o) {
      n.set(e, (o = new f()));
    }
    return o;
  }
}
const l = new f();
export default function () {
  let t;
  let e;
  let r = l;
  const arguments_length = arguments.length;
  for (t = 0; t < arguments_length; t++) {
    if (i((e = arguments[t]))) {
      r = r.next(t, e, true);
    }
  }
  if (this === Object && r === l) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (t = 0; t < arguments_length; t++) {
    if (!i((e = arguments[t]))) {
      r = r.next(t, e, false);
    }
  }
  return r;
}
