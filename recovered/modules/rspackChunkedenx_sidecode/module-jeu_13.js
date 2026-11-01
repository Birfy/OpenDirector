import n from "./module-J_14.js";
import o from "./module-O9_13.js";
import i from "./module-WH_13.js";
import a from "./module-wr_13.js";
import s from "./module-YI_13.js";
import u from "./module-ur_14.js";
import c from "./module-H2_13.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const l_prototype = n_ArrayBuffer.prototype;
const v_prototype = n_DataView.prototype;
const y = o(l_prototype.slice);
const b = i(l_prototype, "resizable", "get");
const m = i(l_prototype, "maxByteLength", "get");
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
