import n from "./module-N_16.js";
import o from "./module-A_17.js";
import i from "./module-J_17.js";
import a from "./module-YR_16.js";
import s from "./module-O9_16.js";
import u from "./module-X_17.js";
import c from "./module-o_16.js";
import f from "./module-Y_17.js";
import l from "./module-yM_17.js";
import h from "./module-Mi_16.js";
import v from "./module-y_2_16.js";
import p from "./module-i_2_16.js";
import d from "./module-xK_16.js";
import g from "./module-d_17.js";
import y from "./module-S9_16.js";
import m from "./module-D_2_16.js";
import b from "./module-er_16.js";
import A from "./module-h_17.js";
import x from "./module-F4_17.js";
import w from "./module-eXf_16.js";
import S from "./module-TK_17.js";
import E from "./module-e7_16.js";
import O from "./module-yh_16.js";
import R from "./module-dF_17.js";
import M from "./module-H2_16.js";
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
const B = (i_WebAssembly && i_WebAssembly.RuntimeError) || i_Error;
const X = a("DOMException");
const E_Map = E.Map;
const E_has = E.has;
const E_get = E.get;
const E_set = E.set;
const O_Set = O.Set;
const O_add = O.add;
const H = a("Object", "keys");
const Q = s([].push);
const Z = s(true.valueOf);
const $ = s((1).valueOf);
const tt = s("".valueOf);
const tr = s(i_Date.prototype.getTime);
const te = c("structuredClone");
const tn = "DataCloneError";
const to = "Transferring";
const ti = (t) =>
  !u(function () {
    const r = new i.Set([7]);
    const e = t(r);
    const n = t(i_Object(7));
    return e === r || !e.has(7) || typeof n !== "object" || +n != 7;
  }) && t;
const ta = (t, r) =>
  !u(function () {
    const e = new r();
    const n = t({
      a: e,
      b: e,
    });
    return !(n && n.a === n.b && n.a instanceof r && n.a.stack === e.stack);
  });
const i_structuredClone = i.structuredClone;
const forced =
  n ||
  !ta(i_structuredClone, i_Error) ||
  !ta(i_structuredClone, X) ||
  !!u(function () {
    const t = i_structuredClone(
      new i.AggregateError([1], te, {
        cause: 3,
      }),
    );
    return (
      t.name !== "AggregateError" ||
      t.errors[0] !== 1 ||
      t.message !== te ||
      t.cause !== 3
    );
  });
const tc =
  !i_structuredClone &&
  ti(function (detail) {
    return new i_PerformanceMark(te, {
      detail,
    }).detail;
  });
const tf = ti(i_structuredClone) || tc;
const tl = (t) => {
  throw new X("Uncloneable type: " + t, tn);
};
const th = (t, r) => {
  throw new X(
    (r || "Cloning") +
      " of " +
      t +
      " cannot be properly polyfilled in this engine",
    tn,
  );
};
const tv = (t, r) => {
  if (!tf) {
    th(r);
  }
  return tf(t);
};
const tp = () => {
  let t;
  try {
    t = new i.DataTransfer();
  } catch (r) {
    try {
      t = new i.ClipboardEvent("").clipboardData;
    } catch (t) {}
  }
  if (t && t.items && t.files) {
    return t;
  }
  return null;
};
const td = (t, r, e) => {
  if (E_has(r, t)) {
    return E_get(r, t);
  }
  if ((e || y(t)) === "SharedArrayBuffer") {
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
      throw new X("ArrayBuffer is detached", tn);
    }
  }
  E_set(r, t, n);
  return n;
};
const tg = (t, r, e, n, o) => {
  const a = i[r];
  if (!v(a)) {
    th(r);
  }
  return new a(td(t.buffer, o), e, n);
};
const ty = function (t, r, e) {
  this.object = t;
  this.type = r;
  this.metadata = e;
};
const tm = (t, r, e) => {
  if (p(t)) {
    tl("Symbol");
  }
  if (!v(t)) {
    return t;
  }
  if (r) {
    if (E_has(r, t)) {
      return E_get(r, t);
    }
  } else {
    r = new E_Map();
  }
  let n;
  let o;
  let s;
  let u;
  let c;
  let length;
  let h;
  let d;
  const g = y(t);
  switch (g) {
    case "Array":
      s = i_Array(x(t));
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
      s = new RegExp(t.source, S(t));
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
          s = V();
          break;
        case "LinkError":
          s = Y();
          break;
        case "RuntimeError":
          s = B();
          break;
        default:
          s = i_Error();
      }
      break;
    case "DOMException":
      s = new X(t.message, t.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      s = e ? new ty(t, g) : td(t, r, g);
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
      s = e
        ? new ty(t, g, {
            offset: t.byteOffset,
            length,
          })
        : tg(t, g, t.byteOffset, length, r);
      break;
    case "DOMQuad":
      try {
        s = new DOMQuad(
          tm(t.p1, r, e),
          tm(t.p2, r, e),
          tm(t.p3, r, e),
          tm(t.p4, r, e),
        );
      } catch (r) {
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
      if ((u = tp())) {
        c = 0;
        for (length = x(t); c < length; c++) {
          u.items.add(tm(t[c], r, e));
        }
        s = u.files;
      } else {
        s = tv(t, g);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(tm(t.data, r, e), t.width, t.height, {
          colorSpace: t.colorSpace,
        });
      } catch (r) {
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
            s = new i_Date(tr(t));
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
  E_set(r, t, s);
  switch (g) {
    case "Array":
    case "Object":
      c = 0;
      for (length = x((h = H(t))); c < length; c++) {
        d = h[c];
        b(s, d, tm(t[d], r, e));
      }
      break;
    case "Map":
      t.forEach((t, n) => {
        E_set(s, tm(n, r, e), tm(t, r, e));
      });
      break;
    case "Set":
      t.forEach((t) => {
        O_add(s, tm(t, r, e));
      });
      break;
    case "Error":
      A(s, "message", tm(t.message, r, e));
      if (m(t, "cause")) {
        A(s, "cause", tm(t.cause, r, e));
      }
      if (o === "AggregateError") {
        s.errors = tm(t.errors, r, e);
      }
    case "DOMException":
      if (R) {
        A(s, "stack", tm(t.stack, r, e));
      }
  }
  return s;
};
const tb = (t, r) => {
  let e;
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
  if (E_has(r, t)) {
    return E_get(r, t);
  }
  if (t instanceof ty) {
    e = t.type;
    n = t.object;
    switch (e) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        c = td(n, r, e);
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
        c = tg(n, e, (o = t.metadata).offset, o.length, r);
    }
  } else {
    switch (y(t)) {
      case "Array":
      case "Object":
        i = 0;
        for (a = x((s = H(t))); i < a; i++) {
          t[(u = s[i])] = tb(t[u], r);
        }
        break;
      case "Map":
        c = new E_Map();
        t.forEach((t, e) => {
          E_set(c, tb(e, r), tb(t, r));
        });
        break;
      case "Set":
        c = new O_Set();
        t.forEach((t) => {
          O_add(c, tb(t, r));
        });
        break;
      case "Error":
        t.message = tb(t.message, r);
        if (m(t, "cause")) {
          t.cause = tb(t.cause, r);
        }
        if (t.name === "AggregateError") {
          t.errors = tb(t.errors, r);
        }
      case "DOMException":
        if (R) {
          t.stack = tb(t.stack, r);
        }
    }
  }
  E_set(r, t, c || t);
  return c || t;
};
const tA = (t, r) => {
  if (!v(t)) {
    throw i_TypeError("Transfer option cannot be converted to a sequence");
  }
  let e;
  let n;
  let o;
  let a;
  let s;
  const u = [];
  d(t, function (t) {
    Q(u, g(t));
  });
  for (var c = 0, h = x(u), p = []; c < h;) {
    if ((n = y((e = u[c++]))) === "ArrayBuffer") {
      Q(p, e);
      continue;
    }
    if (E_has(r, e)) {
      throw new X("Duplicate transferable", tn);
    }
    if (M) {
      a = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!l((o = i.OffscreenCanvas))) {
            th(n, to);
          }
          try {
            (s = new o(e.width, e.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(e);
            a = s.transferToImageBitmap();
          } catch (t) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(f(e.clone) && f(e.close))) {
            th(n, to);
          }
          try {
            a = e.clone();
            e.close();
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
      throw new X("This object cannot be transferred: " + n, tn);
    }
    E_set(r, e, a);
  }
  return p;
};
const tx = (t, r) => {
  let e;
  let n;
  for (let o = 0, i = x(t); o < i;) {
    if (E_has(r, (e = t[o++]))) {
      throw new X("Duplicate transferable", tn);
    }
    if (M) {
      n = i_structuredClone(e, {
        transfer: [e],
      });
    } else {
      if (!f(e.transfer)) {
        th("ArrayBuffer", to);
      }
      n = e.transfer();
    }
    E_set(r, e, n);
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
    structuredClone: function (t) {
      let r;
      const e =
        w(arguments.length, 1) > 1 && !h(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = e ? e.transfer : undefined;
      let o = false;
      if (n !== undefined) {
        o = !!x(tA(n, (r = new E_Map())));
      }
      let i = tm(t, r, o);
      if (o) {
        tx(n, (r = new E_Map()));
        i = tb(i, r);
      }
      return i;
    },
  },
);
