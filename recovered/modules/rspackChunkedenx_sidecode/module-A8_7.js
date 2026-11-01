import n from "./module-N_7.js";
import o from "./module-A_8.js";
import i from "./module-J_8.js";
import a from "./module-YR_7.js";
import s from "./module-O9_7.js";
import u from "./module-X_8.js";
import c from "./module-o_7.js";
import f from "./module-Y_8.js";
import l from "./module-yM_8.js";
import h from "./module-Mi_7.js";
import v from "./module-y_2_7.js";
import p from "./module-i_2_7.js";
import d from "./module-xK_7.js";
import g from "./module-d_8.js";
import y from "./module-S9_7.js";
import m from "./module-D_2_7.js";
import b from "./module-er_7.js";
import A from "./module-h_8.js";
import w from "./module-F4_8.js";
import x from "./module-eXf_7.js";
import E from "./module-TK_8.js";
import S from "./module-e7_7.js";
import O from "./module-yh_7.js";
import R from "./module-dF_8.js";
import M from "./module-H2_7.js";
const i_Object = i.Object;
const i_Array = i.Array;
const i_Date = i.Date;
const i_Error = i.Error;
const i_EvalError = i.EvalError;
const i_RangeError = i.RangeError;
const i_ReferenceError = i.ReferenceError;
const i_SyntaxError = i.SyntaxError;
const i_TypeError = i.TypeError;
const i_URIError = i.URIError;
const i_PerformanceMark = i.PerformanceMark;
const i_WebAssembly = i.WebAssembly;
const V = (i_WebAssembly && i_WebAssembly.CompileError) || i_Error;
const Y = (i_WebAssembly && i_WebAssembly.LinkError) || i_Error;
const _ = (i_WebAssembly && i_WebAssembly.RuntimeError) || i_Error;
const B = a("DOMException");
const S_Map = S.Map;
const S_has = S.has;
const S_get = S.get;
const S_set = S.set;
const O_Set = O.Set;
const O_add = O.add;
const H = a("Object", "keys");
const Q = s([].push);
const Z = s(true.valueOf);
const $ = s((1).valueOf);
const rr = s("".valueOf);
const rt = s(i_Date.prototype.getTime);
const re = c("structuredClone");
const rn = "DataCloneError";
const ro = "Transferring";
const ri = (r) =>
  !u(function () {
    const t = new i.Set([7]);
    const e = r(t);
    const n = r(i_Object(7));
    return e === t || !e.has(7) || typeof n !== "object" || +n != 7;
  }) && r;
const ra = (r, t) =>
  !u(function () {
    const e = new t();
    const n = r({
      a: e,
      b: e,
    });
    return !(n && n.a === n.b && n.a instanceof t && n.a.stack === e.stack);
  });
const i_structuredClone = i.structuredClone;
const forced =
  n ||
  !ra(i_structuredClone, i_Error) ||
  !ra(i_structuredClone, B) ||
  !!u(function () {
    const r = i_structuredClone(
      new i.AggregateError([1], re, {
        cause: 3,
      }),
    );
    return (
      r.name !== "AggregateError" ||
      r.errors[0] !== 1 ||
      r.message !== re ||
      r.cause !== 3
    );
  });
const rc =
  !i_structuredClone &&
  ri(function (detail) {
    return new i_PerformanceMark(re, {
      detail,
    }).detail;
  });
const rf = ri(i_structuredClone) || rc;
const rl = (r) => {
  throw new B("Uncloneable type: " + r, rn);
};
const rh = (r, t) => {
  throw new B(
    (t || "Cloning") +
      " of " +
      r +
      " cannot be properly polyfilled in this engine",
    rn,
  );
};
const rv = (r, t) => {
  if (!rf) {
    rh(t);
  }
  return rf(r);
};
const rp = () => {
  let r;
  try {
    r = new i.DataTransfer();
  } catch (t) {
    try {
      r = new i.ClipboardEvent("").clipboardData;
    } catch (r) {}
  }
  if (r && r.items && r.files) {
    return r;
  }
  return null;
};
const rd = (r, t, e) => {
  if (S_has(t, r)) {
    return S_get(t, r);
  }
  if ((e || y(r)) === "SharedArrayBuffer") {
    n = rf ? rf(r) : r;
  } else {
    var n;
    let o;
    let a;
    let s;
    let u;
    let c;
    const f = i.DataView;
    if (!(f || typeof r.slice === "function")) {
      rh("ArrayBuffer");
    }
    try {
      if (typeof r.slice !== "function" || r.resizable) {
        o = r.byteLength;
        a =
          "maxByteLength" in r
            ? {
                maxByteLength: r.maxByteLength,
              }
            : undefined;
        n = new ArrayBuffer(o, a);
        s = new f(r);
        u = new f(n);
        for (c = 0; c < o; c++) {
          u.setUint8(c, s.getUint8(c));
        }
      } else {
        n = r.slice(0);
      }
    } catch (r) {
      throw new B("ArrayBuffer is detached", rn);
    }
  }
  S_set(t, r, n);
  return n;
};
const rg = (r, t, e, n, o) => {
  const a = i[t];
  if (!v(a)) {
    rh(t);
  }
  return new a(rd(r.buffer, o), e, n);
};
const ry = function (r, t, e) {
  this.object = r;
  this.type = t;
  this.metadata = e;
};
const rm = (r, t, e) => {
  if (p(r)) {
    rl("Symbol");
  }
  if (!v(r)) {
    return r;
  }
  if (t) {
    if (S_has(t, r)) {
      return S_get(t, r);
    }
  } else {
    t = new S_Map();
  }
  let n;
  let o;
  let s;
  let u;
  let c;
  let length;
  let h;
  let d;
  const g = y(r);
  switch (g) {
    case "Array":
      s = i_Array(w(r));
      break;
    case "Object":
      s = {};
      break;
    case "Map":
      s = new S_Map();
      break;
    case "Set":
      s = new O_Set();
      break;
    case "RegExp":
      s = new RegExp(r.source, E(r));
      break;
    case "Error":
      switch ((o = r.name)) {
        case "AggregateError":
          s = a("AggregateError")([]);
          break;
        case "EvalError":
          s = i_EvalError();
          break;
        case "RangeError":
          s = i_RangeError();
          break;
        case "ReferenceError":
          s = i_ReferenceError();
          break;
        case "SyntaxError":
          s = i_SyntaxError();
          break;
        case "TypeError":
          s = i_TypeError();
          break;
        case "URIError":
          s = i_URIError();
          break;
        case "CompileError":
          s = V();
          break;
        case "LinkError":
          s = Y();
          break;
        case "RuntimeError":
          s = _();
          break;
        default:
          s = i_Error();
      }
      break;
    case "DOMException":
      s = new B(r.message, r.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      s = e ? new ry(r, g) : rd(r, t, g);
      break;
    case "DataView":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float16Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      length = g === "DataView" ? r.byteLength : r.length;
      s = e
        ? new ry(r, g, {
            offset: r.byteOffset,
            length,
          })
        : rg(r, g, r.byteOffset, length, t);
      break;
    case "DOMQuad":
      try {
        s = new DOMQuad(
          rm(r.p1, t, e),
          rm(r.p2, t, e),
          rm(r.p3, t, e),
          rm(r.p4, t, e),
        );
      } catch (t) {
        s = rv(r, g);
      }
      break;
    case "File":
      if (rf) {
        try {
          s = rf(r);
          if (y(s) !== g) {
            s = undefined;
          }
        } catch (r) {}
      }
      if (!s) {
        try {
          s = new File([r], r.name, r);
        } catch (r) {}
      }
      if (!s) {
        rh(g);
      }
      break;
    case "FileList":
      if ((u = rp())) {
        c = 0;
        for (length = w(r); c < length; c++) {
          u.items.add(rm(r[c], t, e));
        }
        s = u.files;
      } else {
        s = rv(r, g);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(rm(r.data, t, e), r.width, r.height, {
          colorSpace: r.colorSpace,
        });
      } catch (t) {
        s = rv(r, g);
      }
      break;
    default:
      if (rf) {
        s = rf(r);
      } else {
        switch (g) {
          case "BigInt":
            s = i_Object(r.valueOf());
            break;
          case "Boolean":
            s = i_Object(Z(r));
            break;
          case "Number":
            s = i_Object($(r));
            break;
          case "String":
            s = i_Object(rr(r));
            break;
          case "Date":
            s = new i_Date(rt(r));
            break;
          case "Blob":
            try {
              s = r.slice(0, r.size, r.type);
            } catch (r) {
              rh(g);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            n = i[g];
            try {
              s = n.fromPoint ? n.fromPoint(r) : new n(r.x, r.y, r.z, r.w);
            } catch (r) {
              rh(g);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            n = i[g];
            try {
              s = n.fromRect
                ? n.fromRect(r)
                : new n(r.x, r.y, r.width, r.height);
            } catch (r) {
              rh(g);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            n = i[g];
            try {
              s = n.fromMatrix ? n.fromMatrix(r) : new n(r);
            } catch (r) {
              rh(g);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!f(r.clone)) {
              rh(g);
            }
            try {
              s = r.clone();
            } catch (r) {
              rl(g);
            }
            break;
          case "CropTarget":
          case "CryptoKey":
          case "FileSystemDirectoryHandle":
          case "FileSystemFileHandle":
          case "FileSystemHandle":
          case "GPUCompilationInfo":
          case "GPUCompilationMessage":
          case "ImageBitmap":
          case "RTCCertificate":
          case "WebAssembly.Module":
            rh(g);
          default:
            rl(g);
        }
      }
  }
  S_set(t, r, s);
  switch (g) {
    case "Array":
    case "Object":
      c = 0;
      for (length = w((h = H(r))); c < length; c++) {
        d = h[c];
        b(s, d, rm(r[d], t, e));
      }
      break;
    case "Map":
      r.forEach((r, n) => {
        S_set(s, rm(n, t, e), rm(r, t, e));
      });
      break;
    case "Set":
      r.forEach((r) => {
        O_add(s, rm(r, t, e));
      });
      break;
    case "Error":
      A(s, "message", rm(r.message, t, e));
      if (m(r, "cause")) {
        A(s, "cause", rm(r.cause, t, e));
      }
      if (o === "AggregateError") {
        s.errors = rm(r.errors, t, e);
      }
    case "DOMException":
      if (R) {
        A(s, "stack", rm(r.stack, t, e));
      }
  }
  return s;
};
const rb = (r, t) => {
  let e;
  let n;
  let o;
  let i;
  let a;
  let s;
  let u;
  let c;
  if (!v(r)) {
    return r;
  }
  if (S_has(t, r)) {
    return S_get(t, r);
  }
  if (r instanceof ry) {
    e = r.type;
    n = r.object;
    switch (e) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        c = rd(n, t, e);
        break;
      case "DataView":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float16Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array":
        c = rg(n, e, (o = r.metadata).offset, o.length, t);
    }
  } else {
    switch (y(r)) {
      case "Array":
      case "Object":
        i = 0;
        for (a = w((s = H(r))); i < a; i++) {
          r[(u = s[i])] = rb(r[u], t);
        }
        break;
      case "Map":
        c = new S_Map();
        r.forEach((r, e) => {
          S_set(c, rb(e, t), rb(r, t));
        });
        break;
      case "Set":
        c = new O_Set();
        r.forEach((r) => {
          O_add(c, rb(r, t));
        });
        break;
      case "Error":
        r.message = rb(r.message, t);
        if (m(r, "cause")) {
          r.cause = rb(r.cause, t);
        }
        if (r.name === "AggregateError") {
          r.errors = rb(r.errors, t);
        }
      case "DOMException":
        if (R) {
          r.stack = rb(r.stack, t);
        }
    }
  }
  S_set(t, r, c || r);
  return c || r;
};
const rA = (r, t) => {
  if (!v(r)) {
    throw i_TypeError("Transfer option cannot be converted to a sequence");
  }
  let e;
  let n;
  let o;
  let a;
  let s;
  const u = [];
  d(r, function (r) {
    Q(u, g(r));
  });
  for (var c = 0, h = w(u), p = []; c < h;) {
    if ((n = y((e = u[c++]))) === "ArrayBuffer") {
      Q(p, e);
      continue;
    }
    if (S_has(t, e)) {
      throw new B("Duplicate transferable", rn);
    }
    if (M) {
      a = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!l((o = i.OffscreenCanvas))) {
            rh(n, ro);
          }
          try {
            (s = new o(e.width, e.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(e);
            a = s.transferToImageBitmap();
          } catch (r) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(f(e.clone) && f(e.close))) {
            rh(n, ro);
          }
          try {
            a = e.clone();
            e.close();
          } catch (r) {}
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          rh(n, ro);
      }
    }
    if (a === undefined) {
      throw new B("This object cannot be transferred: " + n, rn);
    }
    S_set(t, e, a);
  }
  return p;
};
const rw = (r, t) => {
  let e;
  let n;
  for (let o = 0, i = w(r); o < i;) {
    if (S_has(t, (e = r[o++]))) {
      throw new B("Duplicate transferable", rn);
    }
    if (M) {
      n = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      if (!f(e.transfer)) {
        rh("ArrayBuffer", ro);
      }
      n = e.transfer();
    }
    S_set(t, e, n);
  }
};
o(
  {
    global: true,
    enumerable: true,
    sham: !M,
    forced,
  },
  {
    structuredClone: function (r) {
      let t;
      const e =
        x(arguments.length, 1) > 1 && !h(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = e ? e.transfer : undefined;
      let o = false;
      if (n !== undefined) {
        o = !!w(rA(n, (t = new S_Map())));
      }
      let i = rm(r, t, o);
      if (o) {
        rw(n, (t = new S_Map()));
        i = rb(i, t);
      }
      return i;
    },
  },
);
