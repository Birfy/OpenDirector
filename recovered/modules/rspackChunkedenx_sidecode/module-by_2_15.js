import n from "./module-J_16.js";
import o from "./module-X_16.js";
import i from "./module-A3_16.js";
import _a from "./module-vB_17.js";
const _a_NATIVE_ARRAY_BUFFER_VIEWS = _a.NATIVE_ARRAY_BUFFER_VIEWS;
const n_ArrayBuffer = n.ArrayBuffer;
const n_Int8Array = n.Int8Array;
export default !_a_NATIVE_ARRAY_BUFFER_VIEWS ||
  !o(function () {
    n_Int8Array(1);
  }) ||
  !o(function () {
    new n_Int8Array(-1);
  }) ||
  !i(function (r) {
    new n_Int8Array();
    new n_Int8Array(null);
    new n_Int8Array(1.5);
    new n_Int8Array(r);
  }, true) ||
  o(function () {
    return new n_Int8Array(new n_ArrayBuffer(2), 1, undefined).length !== 1;
  });
