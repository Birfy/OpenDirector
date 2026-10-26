import n from "./module-J_15.js";
import o from "./module-X_15.js";
import i from "./module-A3_15.js";
import _a from "./module-vB_16.js";
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
  !i(function (t) {
    new n_Int8Array();
    new n_Int8Array(null);
    new n_Int8Array(1.5);
    new n_Int8Array(t);
  }, true) ||
  o(function () {
    return new n_Int8Array(new n_ArrayBuffer(2), 1, undefined).length !== 1;
  });
