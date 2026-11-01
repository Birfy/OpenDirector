import n from "./module-J_7.js";
import o from "./module-X_7.js";
import a from "./module-A3_7.js";
import _i from "./module-vB_8.js";
const _i_NATIVE_ARRAY_BUFFER_VIEWS = _i.NATIVE_ARRAY_BUFFER_VIEWS;
const n_ArrayBuffer = n.ArrayBuffer;
const n_Int8Array = n.Int8Array;
export default !_i_NATIVE_ARRAY_BUFFER_VIEWS ||
  !o(function () {
    n_Int8Array(1);
  }) ||
  !o(function () {
    new n_Int8Array(-1);
  }) ||
  !a(function (t) {
    new n_Int8Array();
    new n_Int8Array(null);
    new n_Int8Array(1.5);
    new n_Int8Array(t);
  }, true) ||
  o(function () {
    return new n_Int8Array(new n_ArrayBuffer(2), 1, undefined).length !== 1;
  });
