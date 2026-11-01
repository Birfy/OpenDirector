import $ from "./module-J_13.js";
import tt from "./module-Xy_3_2.js";
import te from "./module-vB_14.js";
import tr from "./module-X_13.js";
import tn from "./module-E6_12.js";
const $_Int8Array = $.Int8Array;
const te_aTypedArray = te.aTypedArray;
const te_exportTypedArrayMethod = te.exportTypedArrayMethod;
const toLocaleString = [].toLocaleString;
const tf =
  !!$_Int8Array &&
  tr(function () {
    toLocaleString.call(new $_Int8Array(1));
  });
te_exportTypedArrayMethod(
  "toLocaleString",
  function () {
    return tt(
      toLocaleString,
      tf ? tn(te_aTypedArray(this)) : te_aTypedArray(this),
      tn(arguments),
    );
  },
  tr(function () {
    return [1, 2].toLocaleString() !== new $_Int8Array([1, 2]).toLocaleString();
  }) ||
    !tr(function () {
      $_Int8Array.prototype.toLocaleString.call([1, 2]);
    }),
);
