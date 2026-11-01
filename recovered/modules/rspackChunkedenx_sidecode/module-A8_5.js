import n from "./module-N_5.js";
import i from "./module-A_6.js";
import o from "./module-J_6.js";
import s from "./module-YR_5.js";
import a from "./module-O9_5.js";
import u from "./module-X_6.js";
import c from "./module-o_5.js";
import f from "./module-Y_6.js";
import h from "./module-yM_6.js";
import l from "./module-Mi_5.js";
import v from "./module-y_2_5.js";
import p from "./module-i_2_5.js";
import d from "./module-xK_5.js";
import g from "./module-d_6.js";
import y from "./module-S9_5.js";
import b from "./module-D_2_5.js";
import m from "./module-er_5.js";
import A from "./module-h_6.js";
import x from "./module-F4_6.js";
import w from "./module-eXf_5.js";
import S from "./module-TK_6.js";
import E from "./module-e7_5.js";
import O from "./module-yh_5.js";
import R from "./module-dF_6.js";
import M from "./module-H2_5.js";
const o_Object = o.Object;
const o_Array = o.Array;
const o_Date = o.Date;
const o_Error = o.Error;
const o_EvalError = o.EvalError;
const o_RangeError = o.RangeError;
const o_ReferenceError = o.ReferenceError;
const o_SyntaxError = o.SyntaxError;
const o_TypeError = o.TypeError;
const o_URIError = o.URIError;
const o_PerformanceMark = o.PerformanceMark;
const o_WebAssembly = o.WebAssembly;
const Y = (o_WebAssembly && o_WebAssembly.CompileError) || o_Error;
const B = (o_WebAssembly && o_WebAssembly.LinkError) || o_Error;
const X = (o_WebAssembly && o_WebAssembly.RuntimeError) || o_Error;
const W = s("DOMException");
const E_Map = E.Map;
const E_has = E.has;
const E_get = E.get;
const E_set = E.set;
const O_Set = O.Set;
const O_add = O.add;
const H = s("Object", "keys");
const Q = a([].push);
const Z = a(true.valueOf);
const $ = a((1).valueOf);
const tt = a("".valueOf);
const tr = a(o_Date.prototype.getTime);
const te = c("structuredClone");
const tn = "DataCloneError";
const ti = "Transferring";
const to = (t) =>
  !u(function () {
    const r = new o.Set([7]);
    const e = t(r);
    const n = t(o_Object(7));
    return e === r || !e.has(7) || typeof n !== "object" || +n != 7;
  }) && t;
const ts = (t, r) =>
  !u(function () {
    const e = new r();
    const n = t({
      a: e,
      b: e,
    });
    return !(n && n.a === n.b && n.a instanceof r && n.a.stack === e.stack);
  });
const o_structuredClone = o.structuredClone;
const forced =
  n ||
  !ts(o_structuredClone, o_Error) ||
  !ts(o_structuredClone, W) ||
  !!u(function () {
    const t = o_structuredClone(
      new o.AggregateError([1], te, {
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
  !o_structuredClone &&
  to(function (detail) {
    return new o_PerformanceMark(te, {
      detail,
    }).detail;
  });
const tf = to(o_structuredClone) || tc;
const th = (t) => {
  throw new W("Uncloneable type: " + t, tn);
};
const tl = (t, r) => {
  throw new W(
    (r || "Cloning") +
      " of " +
      t +
      " cannot be properly polyfilled in this engine",
    tn,
  );
};
const tv = (t, r) => {
  if (!tf) {
    tl(r);
  }
  return tf(t);
};
const tp = () => {
  let t;
  try {
    t = new o.DataTransfer();
  } catch (r) {
    try {
      t = new o.ClipboardEvent("").clipboardData;
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
    let i;
    let s;
    let a;
    let u;
    let c;
    const f = o.DataView;
    if (!(f || typeof t.slice === "function")) {
      tl("ArrayBuffer");
    }
    try {
      if (typeof t.slice !== "function" || t.resizable) {
        i = t.byteLength;
        s =
          "maxByteLength" in t
            ? {
                maxByteLength: t.maxByteLength,
              }
            : undefined;
        n = new ArrayBuffer(i, s);
        a = new f(t);
        u = new f(n);
        for (c = 0; c < i; c++) {
          u.setUint8(c, a.getUint8(c));
        }
      } else {
        n = t.slice(0);
      }
    } catch (t) {
      throw new W("ArrayBuffer is detached", tn);
    }
  }
  E_set(r, t, n);
  return n;
};
const tg = (t, r, e, n, i) => {
  const s = o[r];
  if (!v(s)) {
    tl(r);
  }
  return new s(td(t.buffer, i), e, n);
};
const ty = function (t, r, e) {
  this.object = t;
  this.type = r;
  this.metadata = e;
};
const tb = (t, r, e) => {
  if (p(t)) {
    th("Symbol");
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
  let i;
  let a;
  let u;
  let c;
  let length;
  let l;
  let d;
  const g = y(t);
  switch (g) {
    case "Array":
      a = o_Array(x(t));
      break;
    case "Object":
      a = {};
      break;
    case "Map":
      a = new E_Map();
      break;
    case "Set":
      a = new O_Set();
      break;
    case "RegExp":
      a = new RegExp(t.source, S(t));
      break;
    case "Error":
      switch ((i = t.name)) {
        case "AggregateError":
          a = s("AggregateError")([]);
          break;
        case "EvalError":
          a = o_EvalError();
          break;
        case "RangeError":
          a = o_RangeError();
          break;
        case "ReferenceError":
          a = o_ReferenceError();
          break;
        case "SyntaxError":
          a = o_SyntaxError();
          break;
        case "TypeError":
          a = o_TypeError();
          break;
        case "URIError":
          a = o_URIError();
          break;
        case "CompileError":
          a = Y();
          break;
        case "LinkError":
          a = B();
          break;
        case "RuntimeError":
          a = X();
          break;
        default:
          a = o_Error();
      }
      break;
    case "DOMException":
      a = new W(t.message, t.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      a = e ? new ty(t, g) : td(t, r, g);
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
      a = e
        ? new ty(t, g, {
            offset: t.byteOffset,
            length,
          })
        : tg(t, g, t.byteOffset, length, r);
      break;
    case "DOMQuad":
      try {
        a = new DOMQuad(
          tb(t.p1, r, e),
          tb(t.p2, r, e),
          tb(t.p3, r, e),
          tb(t.p4, r, e),
        );
      } catch (r) {
        a = tv(t, g);
      }
      break;
    case "File":
      if (tf) {
        try {
          a = tf(t);
          if (y(a) !== g) {
            a = undefined;
          }
        } catch (t) {}
      }
      if (!a) {
        try {
          a = new File([t], t.name, t);
        } catch (t) {}
      }
      if (!a) {
        tl(g);
      }
      break;
    case "FileList":
      if ((u = tp())) {
        c = 0;
        for (length = x(t); c < length; c++) {
          u.items.add(tb(t[c], r, e));
        }
        a = u.files;
      } else {
        a = tv(t, g);
      }
      break;
    case "ImageData":
      try {
        a = new ImageData(tb(t.data, r, e), t.width, t.height, {
          colorSpace: t.colorSpace,
        });
      } catch (r) {
        a = tv(t, g);
      }
      break;
    default:
      if (tf) {
        a = tf(t);
      } else {
        switch (g) {
          case "BigInt":
            a = o_Object(t.valueOf());
            break;
          case "Boolean":
            a = o_Object(Z(t));
            break;
          case "Number":
            a = o_Object($(t));
            break;
          case "String":
            a = o_Object(tt(t));
            break;
          case "Date":
            a = new o_Date(tr(t));
            break;
          case "Blob":
            try {
              a = t.slice(0, t.size, t.type);
            } catch (t) {
              tl(g);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            n = o[g];
            try {
              a = n.fromPoint ? n.fromPoint(t) : new n(t.x, t.y, t.z, t.w);
            } catch (t) {
              tl(g);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            n = o[g];
            try {
              a = n.fromRect
                ? n.fromRect(t)
                : new n(t.x, t.y, t.width, t.height);
            } catch (t) {
              tl(g);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            n = o[g];
            try {
              a = n.fromMatrix ? n.fromMatrix(t) : new n(t);
            } catch (t) {
              tl(g);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!f(t.clone)) {
              tl(g);
            }
            try {
              a = t.clone();
            } catch (t) {
              th(g);
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
            tl(g);
          default:
            th(g);
        }
      }
  }
  E_set(r, t, a);
  switch (g) {
    case "Array":
    case "Object":
      c = 0;
      for (length = x((l = H(t))); c < length; c++) {
        d = l[c];
        m(a, d, tb(t[d], r, e));
      }
      break;
    case "Map":
      t.forEach((t, n) => {
        E_set(a, tb(n, r, e), tb(t, r, e));
      });
      break;
    case "Set":
      t.forEach((t) => {
        O_add(a, tb(t, r, e));
      });
      break;
    case "Error":
      A(a, "message", tb(t.message, r, e));
      if (b(t, "cause")) {
        A(a, "cause", tb(t.cause, r, e));
      }
      if (i === "AggregateError") {
        a.errors = tb(t.errors, r, e);
      }
    case "DOMException":
      if (R) {
        A(a, "stack", tb(t.stack, r, e));
      }
  }
  return a;
};
const tm = (t, r) => {
  let e;
  let n;
  let i;
  let o;
  let s;
  let a;
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
        c = tg(n, e, (i = t.metadata).offset, i.length, r);
    }
  } else {
    switch (y(t)) {
      case "Array":
      case "Object":
        o = 0;
        for (s = x((a = H(t))); o < s; o++) {
          t[(u = a[o])] = tm(t[u], r);
        }
        break;
      case "Map":
        c = new E_Map();
        t.forEach((t, e) => {
          E_set(c, tm(e, r), tm(t, r));
        });
        break;
      case "Set":
        c = new O_Set();
        t.forEach((t) => {
          O_add(c, tm(t, r));
        });
        break;
      case "Error":
        t.message = tm(t.message, r);
        if (b(t, "cause")) {
          t.cause = tm(t.cause, r);
        }
        if (t.name === "AggregateError") {
          t.errors = tm(t.errors, r);
        }
      case "DOMException":
        if (R) {
          t.stack = tm(t.stack, r);
        }
    }
  }
  E_set(r, t, c || t);
  return c || t;
};
const tA = (t, r) => {
  if (!v(t)) {
    throw o_TypeError("Transfer option cannot be converted to a sequence");
  }
  let e;
  let n;
  let i;
  let s;
  let a;
  const u = [];
  d(t, function (t) {
    Q(u, g(t));
  });
  for (var c = 0, l = x(u), p = []; c < l;) {
    if ((n = y((e = u[c++]))) === "ArrayBuffer") {
      Q(p, e);
      continue;
    }
    if (E_has(r, e)) {
      throw new W("Duplicate transferable", tn);
    }
    if (M) {
      s = o_structuredClone(e, {
        transfer: [e],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!h((i = o.OffscreenCanvas))) {
            tl(n, ti);
          }
          try {
            (a = new i(e.width, e.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(e);
            s = a.transferToImageBitmap();
          } catch (t) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(f(e.clone) && f(e.close))) {
            tl(n, ti);
          }
          try {
            s = e.clone();
            e.close();
          } catch (t) {}
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          tl(n, ti);
      }
    }
    if (s === undefined) {
      throw new W("This object cannot be transferred: " + n, tn);
    }
    E_set(r, e, s);
  }
  return p;
};
const tx = (t, r) => {
  let e;
  let n;
  for (let i = 0, o = x(t); i < o;) {
    if (E_has(r, (e = t[i++]))) {
      throw new W("Duplicate transferable", tn);
    }
    if (M) {
      n = o_structuredClone(e, {
        transfer: [e],
      });
    } else {
      if (!f(e.transfer)) {
        tl("ArrayBuffer", ti);
      }
      n = e.transfer();
    }
    E_set(r, e, n);
  }
};
i(
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
        w(arguments.length, 1) > 1 && !l(arguments[1])
          ? g(arguments[1])
          : undefined;
      const n = e ? e.transfer : undefined;
      let i = false;
      if (n !== undefined) {
        i = !!x(tA(n, (r = new E_Map())));
      }
      let o = tb(t, r, i);
      if (i) {
        tx(n, (r = new E_Map()));
        o = tm(o, r);
      }
      return o;
    },
  },
);
