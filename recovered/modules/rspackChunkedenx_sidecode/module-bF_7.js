import n from "./module-J_7.js";
import o from "./module-Xy_2_6.js";
import a from "./module-vB_8.js";
import i from "./module-X_7.js";
import s from "./module-E6_6.js";
const n_Int8Array = n.Int8Array;
const a_aTypedArray = a.aTypedArray;
const a_exportTypedArrayMethod = a.exportTypedArrayMethod;
const toLocaleString = [].toLocaleString;
const h =
  !!n_Int8Array &&
  i(function () {
    toLocaleString.call(new n_Int8Array(1));
  });
a_exportTypedArrayMethod(
  "toLocaleString",
  function () {
    return o(
      toLocaleString,
      h ? s(a_aTypedArray(this)) : a_aTypedArray(this),
      s(arguments),
    );
  },
  i(function () {
    return [1, 2].toLocaleString() !== new n_Int8Array([1, 2]).toLocaleString();
  }) ||
    !i(function () {
      n_Int8Array.prototype.toLocaleString.call([1, 2]);
    }),
);
