import $ from "./module-J_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-vB_14.js";
import tr from "./module-F4_13.js";
import tn from "./module-C1_13.js";
import ti from "./module-aq_12.js";
import to from "./module-X_13.js";
const $_RangeError = $.RangeError;
const $_Int8Array = $.Int8Array;
const tf = $_Int8Array && $_Int8Array.prototype;
const tu = tf && tf.set;
const te_aTypedArray = te.aTypedArray;
const te_exportTypedArrayMethod = te.exportTypedArrayMethod;
const td = !to(function () {
  const J = new Uint8ClampedArray(2);
  tt(
    tu,
    J,
    {
      length: 1,
      0: 3,
    },
    1,
  );
  return J[1] !== 3;
});
const tl =
  td &&
  te.NATIVE_ARRAY_BUFFER_VIEWS &&
  to(function () {
    const J = new $_Int8Array(2);
    J.set(1);
    J.set("2", 1);
    return J[0] !== 0 || J[1] !== 2;
  });
te_exportTypedArrayMethod(
  "set",
  function (J) {
    te_aTypedArray(this);
    const Z = tn(arguments.length > 1 ? arguments[1] : undefined, 1);
    const Q = ti(J);
    if (td) {
      return tt(tu, this, Q, Z);
    }
    const length = this.length;
    const te = tr(Q);
    let to = 0;
    if (te + Z > length) {
      throw $_RangeError("Wrong length");
    }
    while (to < te) {
      this[Z + to] = Q[to++];
    }
  },
  !td || tl,
);
