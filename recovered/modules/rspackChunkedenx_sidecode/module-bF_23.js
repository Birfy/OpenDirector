import n from "./module-J_23.js";
import i from "./module-Xy_2_22.js";
import o from "./module-vB_24.js";
import s from "./module-X_23.js";
import a from "./module-E6_22.js";
const n_Int8Array = n.Int8Array;
const o_aTypedArray = o.aTypedArray;
const o_exportTypedArrayMethod = o.exportTypedArrayMethod;
const toLocaleString = [].toLocaleString;
const l =
  !!n_Int8Array &&
  s(function () {
    toLocaleString.call(new n_Int8Array(1));
  });
o_exportTypedArrayMethod(
  "toLocaleString",
  function () {
    return i(
      toLocaleString,
      l ? a(o_aTypedArray(this)) : o_aTypedArray(this),
      a(arguments),
    );
  },
  s(function () {
    return [1, 2].toLocaleString() !== new n_Int8Array([1, 2]).toLocaleString();
  }) ||
    !s(function () {
      n_Int8Array.prototype.toLocaleString.call([1, 2]);
    }),
);
