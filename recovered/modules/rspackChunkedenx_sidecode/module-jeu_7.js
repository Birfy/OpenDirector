import n from "./module-J_8.js";
import o from "./module-O9_7.js";
import i from "./module-WH_7.js";
import a from "./module-wr_7.js";
import s from "./module-YI_7.js";
import u from "./module-ur_8.js";
import c from "./module-H2_7.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const h_prototype = n_ArrayBuffer.prototype;
const v_prototype = n_DataView.prototype;
const y = o(h_prototype.slice);
const m = i(h_prototype, "resizable", "get");
const b = i(h_prototype, "maxByteLength", "get");
const A = o(v_prototype.getInt8);
const w = o(v_prototype.setInt8);
export default c &&
  function (r, t, e) {
    const n = u(r);
    const o = t === undefined ? n : a(t);
    const i = !m || !m(r);
    if (s(r)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const c = n_structuredClone(r, {
      transfer: [r],
    });
    if (n === o && (e || i)) {
      return c;
    }
    if (n >= o && (!e || i)) {
      return y(c, 0, o);
    }
    const d = new n_ArrayBuffer(
      o,
      e && !i && b
        ? {
            maxByteLength: b(c),
          }
        : undefined,
    );
    const g = new n_DataView(c);
    const x = new n_DataView(d);
    for (let E = Math.min(o, n), S = 0; S < E; S++) {
      w(x, S, A(g, S));
    }
    return d;
  };
