import n from "./module-u.js";
import o from "./module-o.js";
import i from "./module-J.js";
import a from "./module-Xp_2.js";
import s from "./module-l4J.js";
import u from "./module-HN_2.js";
import c from "./module-Yn_2.js";
const n_TypeError = n.TypeError;
const n_structuredClone = n.structuredClone;
const n_ArrayBuffer = n.ArrayBuffer;
const n_DataView = n.DataView;
const p_prototype = n_ArrayBuffer.prototype;
const h_prototype = n_DataView.prototype;
const y = o(p_prototype.slice);
const m = i(p_prototype, "resizable", "get");
const x = i(p_prototype, "maxByteLength", "get");
const b = o(h_prototype.getInt8);
const w = o(h_prototype.setInt8);
export default c &&
  function (e, t, r) {
    const n = u(e);
    const o = t === undefined ? n : a(t);
    const i = !m || !m(e);
    if (s(e)) {
      throw n_TypeError("ArrayBuffer is detached");
    }
    const c = n_structuredClone(e, {
      transfer: [e],
    });
    if (n === o && (r || i)) {
      return c;
    }
    if (n >= o && (!r || i)) {
      return y(c, 0, o);
    }
    const d = new n_ArrayBuffer(
      o,
      r && !i && x
        ? {
            maxByteLength: x(c),
          }
        : undefined,
    );
    const g = new n_DataView(c);
    const A = new n_DataView(d);
    for (let E = Math.min(o, n), j = 0; j < E; j++) {
      w(A, j, b(g, j));
    }
    return d;
  };
