import n from "./module-J_4.js";
import i from "./module-O9_3.js";
import o from "./module-WH_3.js";
import s from "./module-wr_3.js";
import a from "./module-YI_3.js";
import u from "./module-ur_4.js";
import c from "./module-H2_3.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const l_prototype = n_ArrayBuffer.prototype;
const v_prototype = n_DataView.prototype;
const y = i(l_prototype.slice);
const b = o(l_prototype, "resizable", "get");
const m = o(l_prototype, "maxByteLength", "get");
const A = i(v_prototype.getInt8);
const x = i(v_prototype.setInt8);
export default c &&
  function (t, r, e) {
    const n = u(t);
    const i = r === undefined ? n : s(r);
    const o = !b || !b(t);
    if (a(t)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const c = n_structuredClone(t, {
      transfer: [t],
    });
    if (n === i && (e || o)) {
      return c;
    }
    if (n >= i && (!e || o)) {
      return y(c, 0, i);
    }
    const d = new n_ArrayBuffer(
      i,
      e && !o && m
        ? {
            maxByteLength: m(c),
          }
        : undefined,
    );
    const g = new n_DataView(c);
    const w = new n_DataView(d);
    for (let S = Math.min(i, n), E = 0; E < S; E++) {
      x(w, E, A(g, E));
    }
    return d;
  };
