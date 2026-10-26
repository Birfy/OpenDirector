import n from "./module-u.js";
import o from "./module-l.js";
import i from "./module-ga_2.js";
import a from "./module-VV_4.js";
import s from "./module-Vz_2.js";
const n_Int8Array = n.Int8Array;
const i_aTypedArray = i.aTypedArray;
const i_exportTypedArrayMethod = i.exportTypedArrayMethod;
const toLocaleString = [].toLocaleString;
const p =
  !!n_Int8Array &&
  a(function () {
    toLocaleString.call(new n_Int8Array(1));
  });
i_exportTypedArrayMethod(
  "toLocaleString",
  function () {
    return o(
      toLocaleString,
      p ? s(i_aTypedArray(this)) : i_aTypedArray(this),
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
