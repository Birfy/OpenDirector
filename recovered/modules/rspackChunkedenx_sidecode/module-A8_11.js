import n from "./module-N_11.js";
import o from "./module-A_12.js";
import i from "./module-J_12.js";
import a from "./module-YR_11.js";
import s from "./module-O9_11.js";
import u from "./module-X_12.js";
import c from "./module-o_11.js";
import f from "./module-Y_12.js";
import h from "./module-yM_12.js";
import l from "./module-Mi_11.js";
import v from "./module-y_2_11.js";
import p from "./module-i_2_11.js";
import d from "./module-xK_11.js";
import g from "./module-d_12.js";
import y from "./module-S9_11.js";
import b from "./module-D_2_11.js";
import m from "./module-er_11.js";
import A from "./module-h_12.js";
import x from "./module-F4_12.js";
import w from "./module-eXf_11.js";
import S from "./module-TK_12.js";
import E from "./module-e7_11.js";
import O from "./module-yh_11.js";
import R from "./module-dF_12.js";
import M from "./module-H2_11.js";
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
const Y = (i_WebAssembly && i_WebAssembly.CompileError) || i_Error;
const B = (i_WebAssembly && i_WebAssembly.LinkError) || i_Error;
const W = (i_WebAssembly && i_WebAssembly.RuntimeError) || i_Error;
const X = a("DOMException");
const E_Map = E.Map;
const E_has = E.has;
const E_get = E.get;
const E_set = E.set;
const O_Set = O.Set;
const O_add = O.add;
const q = a("Object", "keys");
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
  !ra(i_structuredClone, X) ||
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
const rh = (r) => {
  throw new X("Uncloneable type: " + r, rn);
};
const rl = (r, t) => {
  throw new X(
    (t || "Cloning") +
      " of " +
      r +
      " cannot be properly polyfilled in this engine",
    rn,
  );
};
const rv = (r, t) => {
  if (!rf) {
    rl(t);
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
  if (E_has(t, r)) {
    return E_get(t, r);
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
      rl("ArrayBuffer");
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
      throw new X("ArrayBuffer is detached", rn);
    }
  }
  E_set(t, r, n);
  return n;
};
const rg = (r, t, e, n, o) => {
  const a = i[t];
  if (!v(a)) {
    rl(t);
  }
  return new a(rd(r.buffer, o), e, n);
};
const ry = function (r, t, e) {
  this.object = r;
  this.type = t;
  this.metadata = e;
};
const rb = (r, t, e) => {
  if (p(r)) {
    rh("Symbol");
  }
  if (!v(r)) {
    return r;
  }
  if (t) {
    if (E_has(t, r)) {
      return E_get(t, r);
    }
  } else {
    t = new E_Map();
  }
  let n;
  let o;
  let s;
  let u;
  let c;
  let length;
  let l;
  let d;
  const g = y(r);
  switch (g) {
    case "Array":
      s = i_Array(x(r));
      break;
    case "Object":
      s = {};
      break;
    case "Map":
      s = new E_Map();
      break;
    case "Set":
      s = new O_Set();
      break;
    case "RegExp":
      s = new RegExp(r.source, S(r));
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
          s = Y();
          break;
        case "LinkError":
          s = B();
          break;
        case "RuntimeError":
          s = W();
          break;
        default:
          s = i_Error();
      }
      break;
    case "DOMException":
      s = new X(r.message, r.name);
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
          rb(r.p1, t, e),
          rb(r.p2, t, e),
          rb(r.p3, t, e),
          rb(r.p4, t, e),
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
        rl(g);
      }
      break;
    case "FileList":
      if ((u = rp())) {
        c = 0;
        for (length = x(r); c < length; c++) {
          u.items.add(rb(r[c], t, e));
        }
        s = u.files;
      } else {
        s = rv(r, g);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(rb(r.data, t, e), r.width, r.height, {
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
              rl(g);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            n = i[g];
            try {
              s = n.fromPoint ? n.fromPoint(r) : new n(r.x, r.y, r.z, r.w);
            } catch (r) {
              rl(g);
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
              rl(g);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            n = i[g];
            try {
              s = n.fromMatrix ? n.fromMatrix(r) : new n(r);
            } catch (r) {
              rl(g);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!f(r.clone)) {
              rl(g);
            }
            try {
              s = r.clone();
            } catch (r) {
              rh(g);
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
            rl(g);
          default:
            rh(g);
        }
      }
  }
  E_set(t, r, s);
  switch (g) {
    case "Array":
    case "Object":
      c = 0;
      for (length = x((l = q(r))); c < length; c++) {
        d = l[c];
        m(s, d, rb(r[d], t, e));
      }
      break;
    case "Map":
      r.forEach((r, n) => {
        E_set(s, rb(n, t, e), rb(r, t, e));
      });
      break;
    case "Set":
      r.forEach((r) => {
        O_add(s, rb(r, t, e));
      });
      break;
    case "Error":
      A(s, "message", rb(r.message, t, e));
      if (b(r, "cause")) {
        A(s, "cause", rb(r.cause, t, e));
      }
      if (o === "AggregateError") {
        s.errors = rb(r.errors, t, e);
      }
    case "DOMException":
      if (R) {
        A(s, "stack", rb(r.stack, t, e));
      }
  }
  return s;
};
const rm = (r, t) => {
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
  if (E_has(t, r)) {
    return E_get(t, r);
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
        for (a = x((s = q(r))); i < a; i++) {
          r[(u = s[i])] = rm(r[u], t);
        }
        break;
      case "Map":
        c = new E_Map();
        r.forEach((r, e) => {
          E_set(c, rm(e, t), rm(r, t));
        });
        break;
      case "Set":
        c = new O_Set();
        r.forEach((r) => {
          O_add(c, rm(r, t));
        });
        break;
      case "Error":
        r.message = rm(r.message, t);
        if (b(r, "cause")) {
          r.cause = rm(r.cause, t);
        }
        if (r.name === "AggregateError") {
          r.errors = rm(r.errors, t);
        }
      case "DOMException":
        if (R) {
          r.stack = rm(r.stack, t);
        }
    }
  }
  E_set(t, r, c || r);
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
  for (var c = 0, l = x(u), p = []; c < l;) {
    if ((n = y((e = u[c++]))) === "ArrayBuffer") {
      Q(p, e);
      continue;
    }
    if (E_has(t, e)) {
      throw new X("Duplicate transferable", rn);
    }
    if (M) {
      a = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!h((o = i.OffscreenCanvas))) {
            rl(n, ro);
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
            rl(n, ro);
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
          rl(n, ro);
      }
    }
    if (a === undefined) {
      throw new X("This object cannot be transferred: " + n, rn);
    }
    E_set(t, e, a);
  }
  return p;
};
const rx = (r, t) => {
  let e;
  let n;
  for (let o = 0, i = x(r); o < i;) {
    if (E_has(t, (e = r[o++]))) {
      throw new X("Duplicate transferable", rn);
    }
    if (M) {
      n = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      if (!f(e.transfer)) {
        rl("ArrayBuffer", ro);
      }
      n = e.transfer();
    }
    E_set(t, e, n);
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
        w(arguments.length, 1) > 1 && !l(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = e ? e.transfer : undefined;
      let o = false;
      if (n !== undefined) {
        o = !!x(rA(n, (t = new E_Map())));
      }
      let i = rb(r, t, o);
      if (o) {
        rx(n, (t = new E_Map()));
        i = rm(i, t);
      }
      return i;
    },
  },
);
