import n from "./module-J_20.js";
import o from "./module-O9_19.js";
import i from "./module-WH_19.js";
import a from "./module-wr_19.js";
import s from "./module-YI_19.js";
import u from "./module-ur_20.js";
import c from "./module-H2_19.js";
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
export default c &&
  function (r, t, e) {
    const n = u(r);
    const o = t === undefined ? n : a(t);
    const i = !b || !b(r);
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
      e && !i && m
        ? {
            maxByteLength: m(c),
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
