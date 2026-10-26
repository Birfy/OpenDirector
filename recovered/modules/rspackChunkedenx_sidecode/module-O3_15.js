import n from "./module-J_16.js";
import o from "./module-M_2_15.js";
import i from "./module-vB_17.js";
import a from "./module-F4_16.js";
import s from "./module-C1_16.js";
import u from "./module-aq_15.js";
import c from "./module-X_16.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const l = n_Int8Array && n_Int8Array.prototype;
const v = l && l.set;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const g = !c(function () {
  const r = new Uint8ClampedArray(2);
  o(
    v,
    r,
    {
      length: 1,
      0: 3,
    },
    1,
  );
  return r[1] !== 3;
});
const y =
  g &&
  i.NATIVE_ARRAY_BUFFER_VIEWS &&
  c(function () {
    const r = new n_Int8Array(2);
    r.set(1);
    r.set("2", 1);
    return r[0] !== 0 || r[1] !== 2;
  });
i_exportTypedArrayMethod(
  "set",
  function (r) {
    i_aTypedArray(this);
    const t = s(arguments.length > 1 ? arguments[1] : undefined, 1);
    const e = u(r);
    if (g) {
      return o(v, this, e, t);
    }
    const length = this.length;
    const i = a(e);
    let c = 0;
    if (i + t > length) {
      throw n_RangeError("Wrong length");
    }
    while (c < i) {
      this[t + c] = e[c++];
    }
  },
  !g || y,
);
