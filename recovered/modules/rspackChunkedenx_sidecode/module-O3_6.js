import n from "./module-J_7.js";
import o from "./module-M_2_6.js";
import a from "./module-vB_8.js";
import i from "./module-F4_7.js";
import s from "./module-C1_7.js";
import c from "./module-aq_6.js";
import u from "./module-X_7.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const h = n_Int8Array && n_Int8Array.prototype;
const p = h && h.set;
const a_aTypedArray = a.aTypedArray;
const a_exportTypedArrayMethod = a.exportTypedArrayMethod;
const g = !u(function () {
  const t = new Uint8ClampedArray(2);
  o(
    p,
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
  a.NATIVE_ARRAY_BUFFER_VIEWS &&
  u(function () {
    const t = new n_Int8Array(2);
    t.set(1);
    t.set("2", 1);
    return t[0] !== 0 || t[1] !== 2;
  });
a_exportTypedArrayMethod(
  "set",
  function (t) {
    a_aTypedArray(this);
    const r = s(arguments.length > 1 ? arguments[1] : undefined, 1);
    const e = c(t);
    if (g) {
      return o(p, this, e, r);
    }
    const length = this.length;
    const a = i(e);
    let u = 0;
    if (a + r > length) {
      throw n_RangeError("Wrong length");
    }
    while (u < a) {
      this[r + u] = e[u++];
    }
  },
  !g || y,
);
