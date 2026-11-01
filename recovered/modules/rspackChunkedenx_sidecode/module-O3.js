import n from "./module-J.js";
import o from "./module-M_2.js";
import i from "./module-vB.js";
import a from "./module-F4.js";
import s from "./module-C1.js";
import u from "./module-aq.js";
import c from "./module-X.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const l = n_Int8Array && n_Int8Array.prototype;
const v = l && l.set;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const g = !c(function () {
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
  c(function () {
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
    const e = u(t);
    if (g) {
      return o(v, this, e, r);
    }
    const length = this.length;
    const i = a(e);
    let c = 0;
    if (i + r > length) {
      throw n_RangeError("Wrong length");
    }
    while (c < i) {
      this[r + c] = e[c++];
    }
  },
  !g || y,
);
