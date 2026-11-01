import n from "./module-J_7.js";
import o from "./module-O9_6.js";
import a from "./module-WH_6.js";
import i from "./module-wr_6.js";
import s from "./module-YI_6.js";
import c from "./module-ur_7.js";
import u from "./module-H2_6.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const h_prototype = n_ArrayBuffer.prototype;
const p_prototype = n_DataView.prototype;
const y = o(h_prototype.slice);
const m = a(h_prototype, "resizable", "get");
const b = a(h_prototype, "maxByteLength", "get");
const A = o(p_prototype.getInt8);
const w = o(p_prototype.setInt8);
export default u &&
  function (t, r, e) {
    const n = c(t);
    const o = r === undefined ? n : i(r);
    const a = !m || !m(t);
    if (s(t)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const u = n_structuredClone(t, {
      transfer: [t],
    });
    if (n === o && (e || a)) {
      return u;
    }
    if (n >= o && (!e || a)) {
      return y(u, 0, o);
    }
    const d = new n_ArrayBuffer(
      o,
      e && !a && b
        ? {
            maxByteLength: b(u),
          }
        : undefined,
    );
    const g = new n_DataView(u);
    const x = new n_DataView(d);
    for (let E = Math.min(o, n), S = 0; S < E; S++) {
      w(x, S, A(g, S));
    }
    return d;
  };
