import n from "./module-J_3.js";
import i from "./module-M_2_2.js";
import o from "./module-vB_4.js";
import s from "./module-F4_3.js";
import a from "./module-C1_3.js";
import u from "./module-aq_2.js";
import c from "./module-X_3.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const l = n_Int8Array && n_Int8Array.prototype;
const v = l && l.set;
const o_aTypedArray = o.aTypedArray;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const g = !c(function () {
  const t = new Uint8ClampedArray(2);
  i(
    v,
    t,
    {
      length: 1,
      0: 3,
    },
    1,
  );
  return t[1] !== 3;
});
const y =
  g &&
  o.NATIVE_ARRAY_BUFFER_VIEWS &&
  c(function () {
    const t = new n_Int8Array(2);
    t.set(1);
    t.set("2", 1);
    return t[0] !== 0 || t[1] !== 2;
  });
o_exportTypedArrayMethod(
  "set",
  function (t) {
    o_aTypedArray(this);
    const r = a(arguments.length > 1 ? arguments[1] : undefined, 1);
    const e = u(t);
    if (g) {
      return i(v, this, e, r);
    }
    const length = this.length;
    const o = s(e);
    let c = 0;
    if (o + r > length) {
      throw n_RangeError("Wrong length");
    }
    while (c < o) {
      this[r + c] = e[c++];
    }
  },
  !g || y,
);
