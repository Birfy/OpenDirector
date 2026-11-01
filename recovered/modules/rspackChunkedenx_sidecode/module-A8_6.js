import n from "./module-N_6.js";
import o from "./module-A_7.js";
import a from "./module-J_7.js";
import i from "./module-YR_6.js";
import s from "./module-O9_6.js";
import c from "./module-X_7.js";
import u from "./module-o_6.js";
import f from "./module-Y_7.js";
import l from "./module-yM_7.js";
import h from "./module-Mi_6.js";
import p from "./module-y_2_6.js";
import v from "./module-i_2_6.js";
import d from "./module-xK_6.js";
import g from "./module-d_7.js";
import y from "./module-S9_6.js";
import m from "./module-D_2_6.js";
import b from "./module-er_6.js";
import A from "./module-h_7.js";
import w from "./module-F4_7.js";
import x from "./module-eXf_6.js";
import E from "./module-TK_7.js";
import S from "./module-e7_6.js";
import O from "./module-yh_6.js";
import R from "./module-dF_7.js";
import M from "./module-H2_6.js";
const a_Object = a.Object;
const a_Array = a.Array;
const a_Date = a.Date;
const a_Error = a.Error;
const a_EvalError = a.EvalError;
const a_RangeError = a.RangeError;
const a_ReferenceError = a.ReferenceError;
const a_SyntaxError = a.SyntaxError;
const a_TypeError = a.TypeError;
const a_URIError = a.URIError;
const a_PerformanceMark = a.PerformanceMark;
const a_WebAssembly = a.WebAssembly;
const V = (a_WebAssembly && a_WebAssembly.CompileError) || a_Error;
const W = (a_WebAssembly && a_WebAssembly.LinkError) || a_Error;
const Y = (a_WebAssembly && a_WebAssembly.RuntimeError) || a_Error;
const B = i("DOMException");
const S_Map = S.Map;
const S_has = S.has;
const S_get = S.get;
const S_set = S.set;
const O_Set = O.Set;
const O_add = O.add;
const K = i("Object", "keys");
const Q = s([].push);
const Z = s(true.valueOf);
const $ = s((1).valueOf);
const tt = s("".valueOf);
const tr = s(a_Date.prototype.getTime);
const te = u("structuredClone");
const tn = "DataCloneError";
const to = "Transferring";
const ta = (t) =>
  !c(function () {
    const r = new a.Set([7]);
    const e = t(r);
    const n = t(a_Object(7));
    return e === r || !e.has(7) || typeof n !== "object" || +n != 7;
  }) && t;
const ti = (t, r) =>
  !c(function () {
    const e = new r();
    const n = t({
      a: e,
      b: e,
    });
    return !(n && n.a === n.b && n.a instanceof r && n.a.stack === e.stack);
  });
const a_structuredClone = a.structuredClone;
const forced =
  n ||
  !ti(a_structuredClone, a_Error) ||
  !ti(a_structuredClone, B) ||
  !!c(function () {
    const t = a_structuredClone(
      new a.AggregateError([1], te, {
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
const tu =
  !a_structuredClone &&
  ta(function (detail) {
    return new a_PerformanceMark(te, {
      detail,
    }).detail;
  });
const tf = ta(a_structuredClone) || tu;
const tl = (t) => {
  throw new B("Uncloneable type: " + t, tn);
};
const th = (t, r) => {
  throw new B(
    (r || "Cloning") +
      " of " +
      t +
      " cannot be properly polyfilled in this engine",
    tn,
  );
};
const tp = (t, r) => {
  if (!tf) {
    th(r);
  }
  return tf(t);
};
const tv = () => {
  let t;
  try {
    t = new a.DataTransfer();
  } catch (r) {
    try {
      t = new a.ClipboardEvent("").clipboardData;
    } catch (t) {}
  }
  if (t && t.items && t.files) {
    return t;
  }
  return null;
};
const td = (t, r, e) => {
  if (S_has(r, t)) {
    return S_get(r, t);
  }
  if ((e || y(t)) === "SharedArrayBuffer") {
    n = tf ? tf(t) : t;
  } else {
    var n;
    let o;
    let i;
    let s;
    let c;
    let u;
    const f = a.DataView;
    if (!(f || typeof t.slice === "function")) {
      th("ArrayBuffer");
    }
    try {
      if (typeof t.slice !== "function" || t.resizable) {
        o = t.byteLength;
        i =
          "maxByteLength" in t
            ? {
                maxByteLength: t.maxByteLength,
              }
            : undefined;
        n = new ArrayBuffer(o, i);
        s = new f(t);
        c = new f(n);
        for (u = 0; u < o; u++) {
          c.setUint8(u, s.getUint8(u));
        }
      } else {
        n = t.slice(0);
      }
    } catch (t) {
      throw new B("ArrayBuffer is detached", tn);
    }
  }
  S_set(r, t, n);
  return n;
};
const tg = (t, r, e, n, o) => {
  const i = a[r];
  if (!p(i)) {
    th(r);
  }
  return new i(td(t.buffer, o), e, n);
};
const ty = function (t, r, e) {
  this.object = t;
  this.type = r;
  this.metadata = e;
};
const tm = (t, r, e) => {
  if (v(t)) {
    tl("Symbol");
  }
  if (!p(t)) {
    return t;
  }
  if (r) {
    if (S_has(r, t)) {
      return S_get(r, t);
    }
  } else {
    r = new S_Map();
  }
  let n;
  let o;
  let s;
  let c;
  let u;
  let length;
  let h;
  let d;
  const g = y(t);
  switch (g) {
    case "Array":
      s = a_Array(w(t));
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
          s = i("AggregateError")([]);
          break;
        case "EvalError":
          s = a_EvalError();
          break;
        case "RangeError":
          s = a_RangeError();
          break;
        case "ReferenceError":
          s = a_ReferenceError();
          break;
        case "SyntaxError":
          s = a_SyntaxError();
          break;
        case "TypeError":
          s = a_TypeError();
          break;
        case "URIError":
          s = a_URIError();
          break;
        case "CompileError":
          s = V();
          break;
        case "LinkError":
          s = W();
          break;
        case "RuntimeError":
          s = Y();
          break;
        default:
          s = a_Error();
      }
      break;
    case "DOMException":
      s = new B(t.message, t.name);
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
        s = tp(t, g);
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
      if ((c = tv())) {
        u = 0;
        for (length = w(t); u < length; u++) {
          c.items.add(tm(t[u], r, e));
        }
        s = c.files;
      } else {
        s = tp(t, g);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(tm(t.data, r, e), t.width, t.height, {
          colorSpace: t.colorSpace,
        });
      } catch (r) {
        s = tp(t, g);
      }
      break;
    default:
      if (tf) {
        s = tf(t);
      } else {
        switch (g) {
          case "BigInt":
            s = a_Object(t.valueOf());
            break;
          case "Boolean":
            s = a_Object(Z(t));
            break;
          case "Number":
            s = a_Object($(t));
            break;
          case "String":
            s = a_Object(tt(t));
            break;
          case "Date":
            s = new a_Date(tr(t));
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
            n = a[g];
            try {
              s = n.fromPoint ? n.fromPoint(t) : new n(t.x, t.y, t.z, t.w);
            } catch (t) {
              th(g);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            n = a[g];
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
            n = a[g];
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
  S_set(r, t, s);
  switch (g) {
    case "Array":
    case "Object":
      u = 0;
      for (length = w((h = K(t))); u < length; u++) {
        d = h[u];
        b(s, d, tm(t[d], r, e));
      }
      break;
    case "Map":
      t.forEach((t, n) => {
        S_set(s, tm(n, r, e), tm(t, r, e));
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
  let a;
  let i;
  let s;
  let c;
  let u;
  if (!p(t)) {
    return t;
  }
  if (S_has(r, t)) {
    return S_get(r, t);
  }
  if (t instanceof ty) {
    e = t.type;
    n = t.object;
    switch (e) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        u = td(n, r, e);
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
        u = tg(n, e, (o = t.metadata).offset, o.length, r);
    }
  } else {
    switch (y(t)) {
      case "Array":
      case "Object":
        a = 0;
        for (i = w((s = K(t))); a < i; a++) {
          t[(c = s[a])] = tb(t[c], r);
        }
        break;
      case "Map":
        u = new S_Map();
        t.forEach((t, e) => {
          S_set(u, tb(e, r), tb(t, r));
        });
        break;
      case "Set":
        u = new O_Set();
        t.forEach((t) => {
          O_add(u, tb(t, r));
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
  S_set(r, t, u || t);
  return u || t;
};
const tA = (t, r) => {
  if (!p(t)) {
    throw a_TypeError("Transfer option cannot be converted to a sequence");
  }
  let e;
  let n;
  let o;
  let i;
  let s;
  const c = [];
  d(t, function (t) {
    Q(c, g(t));
  });
  for (var u = 0, h = w(c), v = []; u < h;) {
    if ((n = y((e = c[u++]))) === "ArrayBuffer") {
      Q(v, e);
      continue;
    }
    if (S_has(r, e)) {
      throw new B("Duplicate transferable", tn);
    }
    if (M) {
      i = a_structuredClone(e, {
        transfer: [e],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!l((o = a.OffscreenCanvas))) {
            th(n, to);
          }
          try {
            (s = new o(e.width, e.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(e);
            i = s.transferToImageBitmap();
          } catch (t) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(f(e.clone) && f(e.close))) {
            th(n, to);
          }
          try {
            i = e.clone();
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
    if (i === undefined) {
      throw new B("This object cannot be transferred: " + n, tn);
    }
    S_set(r, e, i);
  }
  return v;
};
const tw = (t, r) => {
  let e;
  let n;
  for (let o = 0, a = w(t); o < a;) {
    if (S_has(r, (e = t[o++]))) {
      throw new B("Duplicate transferable", tn);
    }
    if (M) {
      n = a_structuredClone(e, {
        transfer: [e],
      });
    } else {
      if (!f(e.transfer)) {
        th("ArrayBuffer", to);
      }
      n = e.transfer();
    }
    S_set(r, e, n);
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
        x(arguments.length, 1) > 1 && !h(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = e ? e.transfer : undefined;
      let o = false;
      if (n !== undefined) {
        o = !!w(tA(n, (r = new S_Map())));
      }
      let a = tm(t, r, o);
      if (o) {
        tw(n, (r = new S_Map()));
        a = tb(a, r);
      }
      return a;
    },
  },
);
