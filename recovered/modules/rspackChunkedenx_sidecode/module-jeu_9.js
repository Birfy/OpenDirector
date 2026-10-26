import n from "./module-J_10.js";
import o from "./module-O9_9.js";
import i from "./module-WH_9.js";
import a from "./module-wr_9.js";
import s from "./module-YI_9.js";
import u from "./module-ur_10.js";
import c from "./module-H2_9.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const h_prototype = n_ArrayBuffer.prototype;
const v_prototype = n_DataView.prototype;
const y = o(h_prototype.slice);
const m = i(h_prototype, "resizable", "get");
const b = i(h_prototype, "maxByteLength", "get");
const w = o(v_prototype.getInt8);
const A = o(v_prototype.setInt8);
export default c &&
  function (t, e, r) {
    const n = u(t);
    const o = e === undefined ? n : a(e);
    const i = !m || !m(t);
    if (s(t)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const c = n_structuredClone(t, {
      transfer: [t],
    });
    if (n === o && (r || i)) {
      return c;
    }
    if (n >= o && (!r || i)) {
      return y(c, 0, o);
    }
    const p = new n_ArrayBuffer(
      o,
      r && !i && b
        ? {
            maxByteLength: b(c),
          }
        : undefined,
    );
    const g = new n_DataView(c);
    const x = new n_DataView(p);
    for (let E = Math.min(o, n), S = 0; S < E; S++) {
      A(x, S, w(g, S));
    }
    return p;
  };
