import n from "./module-J_17.js";
import o from "./module-O9_16.js";
import i from "./module-WH_16.js";
import a from "./module-wr_16.js";
import s from "./module-YI_16.js";
import u from "./module-ur_17.js";
import c from "./module-H2_16.js";
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
const x = o(v_prototype.setInt8);
export default c &&
  function (t, r, e) {
    const n = u(t);
    const o = r === undefined ? n : a(r);
    const i = !m || !m(t);
    if (s(t)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const c = n_structuredClone(t, {
      transfer: [t],
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
    const w = new n_DataView(d);
    for (let S = Math.min(o, n), E = 0; E < S; E++) {
      x(w, E, A(g, E));
    }
    return d;
  };
