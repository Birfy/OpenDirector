import "./module-ID_13.js";
import "./module-KR_12.js";
import $ from "./module-YR_12.js";
import tt from "./module-Za_12.js";
import te from "./module-y_2_12.js";
const ti = $("Map");
const to = $("WeakMap");
class ta {
  constructor() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = tt(null);
  }
  get(J, Z) {
    return this[J] || (this[J] = Z());
  }
  next(J, Z, Q) {
    const $ = Q
      ? this.objectsByIndex[J] || (this.objectsByIndex[J] = new to())
      : this.primitives || (this.primitives = new ti());
    let tt = $.get(Z);
    if (!tt) {
      $.set(Z, (tt = new ta()));
    }
    return tt;
  }
}
const ts = new ta();
export default function () {
  let J;
  let Z;
  let Q = ts;
  const arguments_length = arguments.length;
  for (J = 0; J < arguments_length; J++) {
    if (te((Z = arguments[J]))) {
      Q = Q.next(J, Z, true);
    }
  }
  if (this === Object && Q === ts) {
    throw TypeError("Composite keys must contain a non-primitive component");
  }
  for (J = 0; J < arguments_length; J++) {
    if (!te((Z = arguments[J]))) {
      Q = Q.next(J, Z, false);
    }
  }
  return Q;
}
