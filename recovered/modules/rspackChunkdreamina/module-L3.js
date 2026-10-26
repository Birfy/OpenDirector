import n from "./module-u.js";
import o from "./module-p3.js";
import i from "./module-ga_2.js";
import a from "./module-OG_2.js";
import s from "./module-im_2.js";
import u from "./module-O_2.js";
import c from "./module-VV_4.js";
const n_RangeError = n.RangeError;
const n_Int8Array = n.Int8Array;
const p = n_Int8Array && n_Int8Array.prototype;
const h = p && p.set;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const g = !c(function () {
  const e = new Uint8ClampedArray(2);
  o(
    h,
    e,
    {
      length: 1,
      0: 3,
    },
    1,
  );
  return e[1] !== 3;
});
const y =
  g &&
  i.NATIVE_ARRAY_BUFFER_VIEWS &&
  c(function () {
    const e = new n_Int8Array(2);
    e.set(1);
    e.set("2", 1);
    return e[0] !== 0 || e[1] !== 2;
  });
i_exportTypedArrayMethod(
  "set",
  function (e) {
    i_aTypedArray(this);
    const t = s(arguments.length > 1 ? arguments[1] : undefined, 1);
    const r = u(e);
    if (g) {
      return o(h, this, r, t);
    }
    const length = this.length;
    const i = a(r);
    let c = 0;
    if (i + t > length) {
      throw n_RangeError("Wrong length");
    }
    while (c < i) {
      this[t + c] = r[c++];
    }
  },
  !g || y,
);
