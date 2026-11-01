import n from "./module-J_24.js";
import o from "./module-O9_23.js";
import i from "./module-WH_23.js";
import a from "./module-wr_23.js";
import s from "./module-YI_23.js";
import c from "./module-ur_24.js";
import u from "./module-H2_23.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const h_prototype = n_ArrayBuffer.prototype;
const v_prototype = n_DataView.prototype;
const y = o(h_prototype.slice);
const b = i(h_prototype, "resizable", "get");
const m = i(h_prototype, "maxByteLength", "get");
const A = o(v_prototype.getInt8);
const x = o(v_prototype.setInt8);
export default u &&
  function (t, r, e) {
    const n = c(t);
    const o = r === undefined ? n : a(r);
    const i = !b || !b(t);
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
      e && !i && m
        ? {
            maxByteLength: m(u),
          }
        : undefined,
    );
    const g = new n_DataView(u);
    const w = new n_DataView(d);
    for (let S = Math.min(o, n), E = 0; E < S; E++) {
      x(w, E, A(g, E));
    }
    return d;
  };
