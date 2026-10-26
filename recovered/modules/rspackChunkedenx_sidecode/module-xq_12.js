import $ from "./module-vB_14.js";
import tt from "./module-O9_12.js";
import te from "./module-vo_12.js";
import tr from "./module-i1_12.js";
const $_aTypedArray = $.aTypedArray;
const $_getTypedArrayConstructor = $.getTypedArrayConstructor;
const $_exportTypedArrayMethod = $.exportTypedArrayMethod;
const ta = tt($.TypedArrayPrototype.sort);
$_exportTypedArrayMethod("toSorted", function (J) {
  if (J !== undefined) {
    te(J);
  }
  const Z = $_aTypedArray(this);
  return ta(tr($_getTypedArrayConstructor(Z), Z), J);
});
