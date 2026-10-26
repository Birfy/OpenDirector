import n from "./module-N_9.js";
import o from "./module-A_10.js";
import i from "./module-J_10.js";
import a from "./module-YR_9.js";
import s from "./module-O9_9.js";
import u from "./module-X_10.js";
import c from "./module-o_9.js";
import f from "./module-Y_10.js";
import l from "./module-yM_10.js";
import h from "./module-Mi_9.js";
import v from "./module-y_2_9.js";
import d from "./module-i_2_9.js";
import p from "./module-xK_9.js";
import g from "./module-d_10.js";
import y from "./module-S9_9.js";
import m from "./module-D_2_9.js";
import b from "./module-er_9.js";
import w from "./module-h_10.js";
import A from "./module-F4_10.js";
import x from "./module-eXf_9.js";
import E from "./module-TK_10.js";
import S from "./module-e7_9.js";
import O from "./module-yh_9.js";
import _ from "./module-dF_10.js";
import R from "./module-H2_9.js";
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
const B = (i_WebAssembly && i_WebAssembly.CompileError) || i_Error;
const V = (i_WebAssembly && i_WebAssembly.LinkError) || i_Error;
const Y = (i_WebAssembly && i_WebAssembly.RuntimeError) || i_Error;
const W = a("DOMException");
const S_Map = S.Map;
const S_has = S.has;
const S_get = S.get;
const S_set = S.set;
const O_Set = O.Set;
const O_add = O.add;
const K = a("Object", "keys");
const Q = s([].push);
const Z = s(true.valueOf);
const $ = s((1).valueOf);
const tt = s("".valueOf);
const te = s(i_Date.prototype.getTime);
const tr = c("structuredClone");
const tn = "DataCloneError";
const to = "Transferring";
const ti = (t) =>
  !u(function () {
    const e = new i.Set([7]);
    const r = t(e);
    const n = t(i_Object(7));
    return r === e || !r.has(7) || typeof n !== "object" || +n != 7;
  }) && t;
const ta = (t, e) =>
  !u(function () {
    const r = new e();
    const n = t({
      a: r,
      b: r,
    });
    return !(n && n.a === n.b && n.a instanceof e && n.a.stack === r.stack);
  });
const i_structuredClone = i.structuredClone;
const forced =
  n ||
  !ta(i_structuredClone, i_Error) ||
  !ta(i_structuredClone, W) ||
  !!u(function () {
    const t = i_structuredClone(
      new i.AggregateError([1], tr, {
        cause: 3,
      }),
    );
    return (
      t.name !== "AggregateError" ||
      t.errors[0] !== 1 ||
      t.message !== tr ||
      t.cause !== 3
    );
  });
const tc =
  !i_structuredClone &&
  ti(function (detail) {
    return new i_PerformanceMark(tr, {
      detail,
    }).detail;
  });
const tf = ti(i_structuredClone) || tc;
const tl = (t) => {
  throw new W("Uncloneable type: " + t, tn);
};
const th = (t, e) => {
  throw new W(
    (e || "Cloning") +
      " of " +
      t +
      " cannot be properly polyfilled in this engine",
    tn,
  );
};
const tv = (t, e) => {
  if (!tf) {
    th(e);
  }
  return tf(t);
};
const td = () => {
  let t;
  try {
    t = new i.DataTransfer();
  } catch (e) {
    try {
      t = new i.ClipboardEvent("").clipboardData;
    } catch (t) {}
  }
  if (t && t.items && t.files) {
    return t;
  }
  return null;
};
const tp = (t, e, r) => {
  if (S_has(e, t)) {
    return S_get(e, t);
  }
  if ((r || y(t)) === "SharedArrayBuffer") {
    n = tf ? tf(t) : t;
  } else {
    var n;
    let o;
    let a;
    let s;
    let u;
    let c;
    const f = i.DataView;
    if (!(f || typeof t.slice === "function")) {
      th("ArrayBuffer");
    }
    try {
      if (typeof t.slice !== "function" || t.resizable) {
        o = t.byteLength;
        a =
          "maxByteLength" in t
            ? {
                maxByteLength: t.maxByteLength,
              }
            : undefined;
        n = new ArrayBuffer(o, a);
        s = new f(t);
        u = new f(n);
        for (c = 0; c < o; c++) {
          u.setUint8(c, s.getUint8(c));
        }
      } else {
        n = t.slice(0);
      }
    } catch (t) {
      throw new W("ArrayBuffer is detached", tn);
    }
  }
  S_set(e, t, n);
  return n;
};
const tg = (t, e, r, n, o) => {
  const a = i[e];
  if (!v(a)) {
    th(e);
  }
  return new a(tp(t.buffer, o), r, n);
};
const ty = function (t, e, r) {
  this.object = t;
  this.type = e;
  this.metadata = r;
};
const tm = (t, e, r) => {
  if (d(t)) {
    tl("Symbol");
  }
  if (!v(t)) {
    return t;
  }
  if (e) {
    if (S_has(e, t)) {
      return S_get(e, t);
    }
  } else {
    e = new S_Map();
  }
  let n;
  let o;
  let s;
  let u;
  let c;
  let length;
  let h;
  let p;
  const g = y(t);
  switch (g) {
    case "Array":
      s = i_Array(A(t));
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
      s = new RegExp(t.source, E(t));
      break;
    case "Error":
      switch ((o = t.name)) {
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
          s = B();
          break;
        case "LinkError":
          s = V();
          break;
        case "RuntimeError":
          s = Y();
          break;
        default:
          s = i_Error();
      }
      break;
    case "DOMException":
      s = new W(t.message, t.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      s = r ? new ty(t, g) : tp(t, e, g);
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
      length = g === "DataView" ? t.byteLength : t.length;
      s = r
        ? new ty(t, g, {
            offset: t.byteOffset,
            length,
          })
        : tg(t, g, t.byteOffset, length, e);
      break;
    case "DOMQuad":
      try {
        s = new DOMQuad(
          tm(t.p1, e, r),
          tm(t.p2, e, r),
          tm(t.p3, e, r),
          tm(t.p4, e, r),
        );
      } catch (e) {
        s = tv(t, g);
      }
      break;
    case "File":
      if (tf) {
        try {
          s = tf(t);
          if (y(s) !== g) {
            s = undefined;
          }
        } catch (t) {}
      }
      if (!s) {
        try {
          s = new File([t], t.name, t);
        } catch (t) {}
      }
      if (!s) {
        th(g);
      }
      break;
    case "FileList":
      if ((u = td())) {
        c = 0;
        for (length = A(t); c < length; c++) {
          u.items.add(tm(t[c], e, r));
        }
        s = u.files;
      } else {
        s = tv(t, g);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(tm(t.data, e, r), t.width, t.height, {
          colorSpace: t.colorSpace,
        });
      } catch (e) {
        s = tv(t, g);
      }
      break;
    default:
      if (tf) {
        s = tf(t);
      } else {
        switch (g) {
          case "BigInt":
            s = i_Object(t.valueOf());
            break;
          case "Boolean":
            s = i_Object(Z(t));
            break;
          case "Number":
            s = i_Object($(t));
            break;
          case "String":
            s = i_Object(tt(t));
            break;
          case "Date":
            s = new i_Date(te(t));
            break;
          case "Blob":
            try {
              s = t.slice(0, t.size, t.type);
            } catch (t) {
              th(g);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            n = i[g];
            try {
              s = n.fromPoint ? n.fromPoint(t) : new n(t.x, t.y, t.z, t.w);
            } catch (t) {
              th(g);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            n = i[g];
            try {
              s = n.fromRect
                ? n.fromRect(t)
                : new n(t.x, t.y, t.width, t.height);
            } catch (t) {
              th(g);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            n = i[g];
            try {
              s = n.fromMatrix ? n.fromMatrix(t) : new n(t);
            } catch (t) {
              th(g);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!f(t.clone)) {
              th(g);
            }
            try {
              s = t.clone();
            } catch (t) {
              tl(g);
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
            th(g);
          default:
            tl(g);
        }
      }
  }
  S_set(e, t, s);
  switch (g) {
    case "Array":
    case "Object":
      c = 0;
      for (length = A((h = K(t))); c < length; c++) {
        p = h[c];
        b(s, p, tm(t[p], e, r));
      }
      break;
    case "Map":
      t.forEach((t, n) => {
        S_set(s, tm(n, e, r), tm(t, e, r));
      });
      break;
    case "Set":
      t.forEach((t) => {
        O_add(s, tm(t, e, r));
      });
      break;
    case "Error":
      w(s, "message", tm(t.message, e, r));
      if (m(t, "cause")) {
        w(s, "cause", tm(t.cause, e, r));
      }
      if (o === "AggregateError") {
        s.errors = tm(t.errors, e, r);
      }
    case "DOMException":
      if (_) {
        w(s, "stack", tm(t.stack, e, r));
      }
  }
  return s;
};
const tb = (t, e) => {
  let r;
  let n;
  let o;
  let i;
  let a;
  let s;
  let u;
  let c;
  if (!v(t)) {
    return t;
  }
  if (S_has(e, t)) {
    return S_get(e, t);
  }
  if (t instanceof ty) {
    r = t.type;
    n = t.object;
    switch (r) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        c = tp(n, e, r);
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
        c = tg(n, r, (o = t.metadata).offset, o.length, e);
    }
  } else {
    switch (y(t)) {
      case "Array":
      case "Object":
        i = 0;
        for (a = A((s = K(t))); i < a; i++) {
          t[(u = s[i])] = tb(t[u], e);
        }
        break;
      case "Map":
        c = new S_Map();
        t.forEach((t, r) => {
          S_set(c, tb(r, e), tb(t, e));
        });
        break;
      case "Set":
        c = new O_Set();
        t.forEach((t) => {
          O_add(c, tb(t, e));
        });
        break;
      case "Error":
        t.message = tb(t.message, e);
        if (m(t, "cause")) {
          t.cause = tb(t.cause, e);
        }
        if (t.name === "AggregateError") {
          t.errors = tb(t.errors, e);
        }
      case "DOMException":
        if (_) {
          t.stack = tb(t.stack, e);
        }
    }
  }
  S_set(e, t, c || t);
  return c || t;
};
const tw = (t, e) => {
  if (!v(t)) {
    throw i_TypeError("Transfer option cannot be converted to a sequence");
  }
  let r;
  let n;
  let o;
  let a;
  let s;
  const u = [];
  p(t, function (t) {
    Q(u, g(t));
  });
  for (var c = 0, h = A(u), d = []; c < h;) {
    if ((n = y((r = u[c++]))) === "ArrayBuffer") {
      Q(d, r);
      continue;
    }
    if (S_has(e, r)) {
      throw new W("Duplicate transferable", tn);
    }
    if (R) {
      a = i_structuredClone(r, {
        transfer: [r],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!l((o = i.OffscreenCanvas))) {
            th(n, to);
          }
          try {
            (s = new o(r.width, r.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(r);
            a = s.transferToImageBitmap();
          } catch (t) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(f(r.clone) && f(r.close))) {
            th(n, to);
          }
          try {
            a = r.clone();
            r.close();
          } catch (t) {}
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          th(n, to);
      }
    }
    if (a === undefined) {
      throw new W("This object cannot be transferred: " + n, tn);
    }
    S_set(e, r, a);
  }
  return d;
};
const tA = (t, e) => {
  let r;
  let n;
  for (let o = 0, i = A(t); o < i;) {
    if (S_has(e, (r = t[o++]))) {
      throw new W("Duplicate transferable", tn);
    }
    if (R) {
      n = i_structuredClone(r, {
        transfer: [r],
      });
    } else {
      if (!f(r.transfer)) {
        th("ArrayBuffer", to);
      }
      n = r.transfer();
    }
    S_set(e, r, n);
  }
};
o(
  {
    global: true,
    enumerable: true,
    sham: !R,
    forced,
  },
  {
    structuredClone: function (t) {
      let e;
      const r =
        x(arguments.length, 1) > 1 && !h(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = r ? r.transfer : undefined;
      let o = false;
      if (n !== undefined) {
        o = !!A(tw(n, (e = new S_Map())));
      }
      let i = tm(t, e, o);
      if (o) {
        tA(n, (e = new S_Map()));
        i = tb(i, e);
      }
      return i;
    },
  },
);
