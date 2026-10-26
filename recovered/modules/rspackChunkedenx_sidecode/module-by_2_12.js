import $ from "./module-J_13.js";
import tt from "./module-X_13.js";
import te from "./module-A3_13.js";
import _tr from "./module-vB_14.js";
const _tr_NATIVE_ARRAY_BUFFER_VIEWS = _tr.NATIVE_ARRAY_BUFFER_VIEWS;
const $_ArrayBuffer = $.ArrayBuffer;
const $_Int8Array = $.Int8Array;
export default !_tr_NATIVE_ARRAY_BUFFER_VIEWS ||
  !tt(function () {
    $_Int8Array(1);
  }) ||
  !tt(function () {
    new $_Int8Array(-1);
  }) ||
  !te(function (J) {
    new $_Int8Array();
    new $_Int8Array(null);
    new $_Int8Array(1.5);
    new $_Int8Array(J);
  }, true) ||
  tt(function () {
    return new $_Int8Array(new $_ArrayBuffer(2), 1, undefined).length !== 1;
  });
