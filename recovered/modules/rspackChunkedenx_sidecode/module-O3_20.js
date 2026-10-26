import n from "./module-J_21.js";
import o from "./module-M_2_20.js";
import i from "./module-vB_22.js";
import a from "./module-F4_21.js";
import s from "./module-C1_21.js";
import c from "./module-aq_20.js";
import u from "./module-X_21.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const h = n_Int8Array && n_Int8Array.prototype;
const v = h && h.set;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const g = !u(function () {
  const t = new Uint8ClampedArray(2);
  o(
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
  i.NATIVE_ARRAY_BUFFER_VIEWS &&
  u(function () {
    const t = new n_Int8Array(2);
    t.set(1);
    t.set("2", 1);
    return t[0] !== 0 || t[1] !== 2;
  });
i_exportTypedArrayMethod(
  "set",
  function (t) {
    i_aTypedArray(this);
    const r = s(arguments.length > 1 ? arguments[1] : undefined, 1);
    const e = c(t);
    if (g) {
      return o(v, this, e, r);
    }
    const length = this.length;
    const i = a(e);
    let u = 0;
    if (i + r > length) {
      throw n_RangeError("Wrong length");
    }
    while (u < i) {
      this[r + u] = e[u++];
    }
  },
  !g || y,
);
