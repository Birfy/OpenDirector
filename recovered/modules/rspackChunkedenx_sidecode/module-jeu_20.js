import n from "./module-J_21.js";
import o from "./module-O9_20.js";
import i from "./module-WH_20.js";
import a from "./module-wr_20.js";
import s from "./module-YI_20.js";
import c from "./module-ur_21.js";
import u from "./module-H2_20.js";
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
export default u &&
  function (t, r, e) {
    const n = c(t);
    const o = r === undefined ? n : a(r);
    const i = !m || !m(t);
    if (s(t)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const u = n_structuredClone(t, {
      transfer: [t],
    });
    if (n === o && (e || i)) {
      return u;
    }
    if (n >= o && (!e || i)) {
      return y(u, 0, o);
    }
    const d = new n_ArrayBuffer(
      o,
      e && !i && b
        ? {
            maxByteLength: b(u),
          }
        : undefined,
    );
    const g = new n_DataView(u);
    const x = new n_DataView(d);
    for (let S = Math.min(o, n), E = 0; E < S; E++) {
      A(x, E, w(g, E));
    }
    return d;
  };
