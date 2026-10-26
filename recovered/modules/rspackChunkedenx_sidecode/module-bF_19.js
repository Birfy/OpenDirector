import n from "./module-J_19.js";
import o from "./module-Xy_2_18.js";
import i from "./module-vB_20.js";
import a from "./module-X_19.js";
import s from "./module-E6_18.js";
const n_Int8Array = n.Int8Array;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const toLocaleString = [].toLocaleString;
const l =
  !!n_Int8Array &&
  a(function () {
    toLocaleString.call(new n_Int8Array(1));
  });
i_exportTypedArrayMethod(
  "toLocaleString",
  function () {
    return o(
      toLocaleString,
      l ? s(i_aTypedArray(this)) : i_aTypedArray(this),
      s(arguments),
    );
  },
  a(function () {
    return [1, 2].toLocaleString() !== new n_Int8Array([1, 2]).toLocaleString();
  }) ||
    !a(function () {
      n_Int8Array.prototype.toLocaleString.call([1, 2]);
    }),
);
