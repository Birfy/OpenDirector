import $ from "./module-J_13.js";
import tt from "./module-O9_12.js";
import te from "./module-WH_12.js";
import tr from "./module-wr_12.js";
import tn from "./module-YI_12.js";
import ti from "./module-ur_13.js";
import to from "./module-H2_12.js";
const $_TypeError = $.TypeError;
const $_structuredClone = $.structuredClone;
const $_ArrayBuffer = $.ArrayBuffer;
const $_DataView = $.DataView;
const tf_prototype = $_ArrayBuffer.prototype;
const tu_prototype = $_DataView.prototype;
const tl = tt(tf_prototype.slice);
const tp = te(tf_prototype, "resizable", "get");
const tb = te(tf_prototype, "maxByteLength", "get");
const tv = tt(tu_prototype.getInt8);
const tg = tt(tu_prototype.setInt8);
export default to &&
  function (J, Z, Q) {
    const $ = ti(J);
    const tt = Z === undefined ? $ : tr(Z);
    const te = !tp || !tp(J);
    if (tn(J)) {
      throw $_TypeError("ArrayBuffer is detached");
    }
    const to = $_structuredClone(J, {
      transfer: [J],
    });
    if ($ === tt && (Q || te)) {
      return to;
    }
    if ($ >= tt && (!Q || te)) {
      return tl(to, 0, tt);
    }
    const th = new $_ArrayBuffer(
      tt,
      Q && !te && tb
        ? {
            maxByteLength: tb(to),
          }
        : undefined,
    );
    const td = new $_DataView(to);
    const ty = new $_DataView(th);
    for (let tm = Math.min(tt, $), tw = 0; tw < tm; tw++) {
      tg(ty, tw, tv(td, tw));
    }
    return th;
  };
