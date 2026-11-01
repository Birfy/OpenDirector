import n from "./module-J_6.js";
import i from "./module-X_6.js";
import o from "./module-A3_6.js";
import _s from "./module-vB_7.js";
const _s_NATIVE_ARRAY_BUFFER_VIEWS = _s.NATIVE_ARRAY_BUFFER_VIEWS;
const n_ArrayBuffer = n.ArrayBuffer;
const n_Int8Array = n.Int8Array;
export default !_s_NATIVE_ARRAY_BUFFER_VIEWS ||
  !i(function () {
    n_Int8Array(1);
  }) ||
  !i(function () {
    new n_Int8Array(-1);
  }) ||
  !o(function (t) {
    new n_Int8Array();
    new n_Int8Array(null);
    new n_Int8Array(1.5);
    new n_Int8Array(t);
  }, true) ||
  i(function () {
    return new n_Int8Array(new n_ArrayBuffer(2), 1, undefined).length !== 1;
  });
