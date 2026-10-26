import n from "K";
import i from "g";
import a from "u";
import o from "Y";
import s from "o";
import A from "VV";
import c from "I";
import u from "r";
import l from "c2";
import h from "D";
import f from "N";
import g from "n";
import d from "Fm";
import p from "IF";
import m from "xE";
import y from "h";
import b from "Id";
import v from "z3";
import I from "OG";
import w from "lU";
import C from "zV";
import B from "UF";
import S from "Do";
import E from "ee";
import k from "Yn";
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
const W = (a_WebAssembly && a_WebAssembly.CompileError) || a_Error;
const M = (a_WebAssembly && a_WebAssembly.LinkError) || a_Error;
const J = (a_WebAssembly && a_WebAssembly.RuntimeError) || a_Error;
const L = o("DOMException");
const B_Map = B.Map;
const B_has = B.has;
const B_get = B.get;
const B_set = B.set;
const S_Set = S.Set;
const S_add = S.add;
const X = o("Object", "keys");
const z = s([].push);
const _ = s(true.valueOf);
const $ = s((1).valueOf);
const tt = s("".valueOf);
const te = s(a_Date.prototype.getTime);
const tr = c("structuredClone");
const tn = "DataCloneError";
const ti = "Transferring";
const ta = (t) =>
  !A(function () {
    const e = new a.Set([7]);
    const r = t(e);
    const n = t(a_Object(7));
    return r === e || !r.has(7) || typeof n !== "object" || +n != 7;
  }) && t;
const to = (t, e) =>
  !A(function () {
    const r = new e();
    const n = t({
      a: r,
      b: r,
    });
    return !(n && n.a === n.b && n.a instanceof e && n.a.stack === r.stack);
  });
const a_structuredClone = a.structuredClone;
const forced =
  n ||
  !to(a_structuredClone, a_Error) ||
  !to(a_structuredClone, L) ||
  !!A(function () {
    const t = a_structuredClone(
      new a.AggregateError([1], tr, {
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
  !a_structuredClone &&
  ta(function (detail) {
    return new a_PerformanceMark(tr, {
      detail,
    }).detail;
  });
const tu = ta(a_structuredClone) || tc;
const tl = (t) => {
  throw new L("Uncloneable type: " + t, tn);
};
const th = (t, e) => {
  throw new L(
    (e || "Cloning") +
      " of " +
      t +
      " cannot be properly polyfilled in this engine",
    tn,
  );
};
const tf = (t, e) => {
  if (!tu) {
    th(e);
  }
  return tu(t);
};
const tg = () => {
  let t;
  try {
    t = new a.DataTransfer();
  } catch (e) {
    try {
      t = new a.ClipboardEvent("").clipboardData;
    } catch (t) {}
  }
  if (t && t.items && t.files) {
    return t;
  }
  return null;
};
const td = (t, e, r) => {
  if (B_has(e, t)) {
    return B_get(e, t);
  }
  if ((r || m(t)) === "SharedArrayBuffer") {
    n = tu ? tu(t) : t;
  } else {
    var n;
    let i;
    let o;
    let s;
    let A;
    let c;
    const u = a.DataView;
    if (!(u || typeof t.slice === "function")) {
      th("ArrayBuffer");
    }
    try {
      if (typeof t.slice !== "function" || t.resizable) {
        i = t.byteLength;
        o =
          "maxByteLength" in t
            ? {
                maxByteLength: t.maxByteLength,
              }
            : undefined;
        n = new ArrayBuffer(i, o);
        s = new u(t);
        A = new u(n);
        for (c = 0; c < i; c++) {
          A.setUint8(c, s.getUint8(c));
        }
      } else {
        n = t.slice(0);
      }
    } catch (t) {
      throw new L("ArrayBuffer is detached", tn);
    }
  }
  B_set(e, t, n);
  return n;
};
const tp = (t, e, r, n, i) => {
  const o = a[e];
  if (!f(o)) {
    th(e);
  }
  return new o(td(t.buffer, i), r, n);
};
const tm = function (t, e, r) {
  this.object = t;
  this.type = e;
  this.metadata = r;
};
const ty = (t, e, r) => {
  if (g(t)) {
    tl("Symbol");
  }
  if (!f(t)) {
    return t;
  }
  if (e) {
    if (B_has(e, t)) {
      return B_get(e, t);
    }
  } else {
    e = new B_Map();
  }
  let n;
  let i;
  let s;
  let A;
  let c;
  let length;
  let h;
  let d;
  const p = m(t);
  switch (p) {
    case "Array":
      s = a_Array(I(t));
      break;
    case "Object":
      s = {};
      break;
    case "Map":
      s = new B_Map();
      break;
    case "Set":
      s = new S_Set();
      break;
    case "RegExp":
      s = new RegExp(t.source, C(t));
      break;
    case "Error":
      switch ((i = t.name)) {
        case "AggregateError":
          s = o("AggregateError")([]);
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
          s = W();
          break;
        case "LinkError":
          s = M();
          break;
        case "RuntimeError":
          s = J();
          break;
        default:
          s = a_Error();
      }
      break;
    case "DOMException":
      s = new L(t.message, t.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      s = r ? new tm(t, p) : td(t, e, p);
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
      length = p === "DataView" ? t.byteLength : t.length;
      s = r
        ? new tm(t, p, {
            offset: t.byteOffset,
            length,
          })
        : tp(t, p, t.byteOffset, length, e);
      break;
    case "DOMQuad":
      try {
        s = new DOMQuad(
          ty(t.p1, e, r),
          ty(t.p2, e, r),
          ty(t.p3, e, r),
          ty(t.p4, e, r),
        );
      } catch (e) {
        s = tf(t, p);
      }
      break;
    case "File":
      if (tu) {
        try {
          s = tu(t);
          if (m(s) !== p) {
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
        th(p);
      }
      break;
    case "FileList":
      if ((A = tg())) {
        c = 0;
        for (length = I(t); c < length; c++) {
          A.items.add(ty(t[c], e, r));
        }
        s = A.files;
      } else {
        s = tf(t, p);
      }
      break;
    case "ImageData":
      try {
        s = new ImageData(ty(t.data, e, r), t.width, t.height, {
          colorSpace: t.colorSpace,
        });
      } catch (e) {
        s = tf(t, p);
      }
      break;
    default:
      if (tu) {
        s = tu(t);
      } else {
        switch (p) {
          case "BigInt":
            s = a_Object(t.valueOf());
            break;
          case "Boolean":
            s = a_Object(_(t));
            break;
          case "Number":
            s = a_Object($(t));
            break;
          case "String":
            s = a_Object(tt(t));
            break;
          case "Date":
            s = new a_Date(te(t));
            break;
          case "Blob":
            try {
              s = t.slice(0, t.size, t.type);
            } catch (t) {
              th(p);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            n = a[p];
            try {
              s = n.fromPoint ? n.fromPoint(t) : new n(t.x, t.y, t.z, t.w);
            } catch (t) {
              th(p);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            n = a[p];
            try {
              s = n.fromRect
                ? n.fromRect(t)
                : new n(t.x, t.y, t.width, t.height);
            } catch (t) {
              th(p);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            n = a[p];
            try {
              s = n.fromMatrix ? n.fromMatrix(t) : new n(t);
            } catch (t) {
              th(p);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!u(t.clone)) {
              th(p);
            }
            try {
              s = t.clone();
            } catch (t) {
              tl(p);
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
            th(p);
          default:
            tl(p);
        }
      }
  }
  B_set(e, t, s);
  switch (p) {
    case "Array":
    case "Object":
      c = 0;
      for (length = I((h = X(t))); c < length; c++) {
        d = h[c];
        b(s, d, ty(t[d], e, r));
      }
      break;
    case "Map":
      t.forEach((t, n) => {
        B_set(s, ty(n, e, r), ty(t, e, r));
      });
      break;
    case "Set":
      t.forEach((t) => {
        S_add(s, ty(t, e, r));
      });
      break;
    case "Error":
      v(s, "message", ty(t.message, e, r));
      if (y(t, "cause")) {
        v(s, "cause", ty(t.cause, e, r));
      }
      if (i === "AggregateError") {
        s.errors = ty(t.errors, e, r);
      }
    case "DOMException":
      if (E) {
        v(s, "stack", ty(t.stack, e, r));
      }
  }
  return s;
};
const tb = (t, e) => {
  let r;
  let n;
  let i;
  let a;
  let o;
  let s;
  let A;
  let c;
  if (!f(t)) {
    return t;
  }
  if (B_has(e, t)) {
    return B_get(e, t);
  }
  if (t instanceof tm) {
    r = t.type;
    n = t.object;
    switch (r) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        c = td(n, e, r);
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
        c = tp(n, r, (i = t.metadata).offset, i.length, e);
    }
  } else {
    switch (m(t)) {
      case "Array":
      case "Object":
        a = 0;
        for (o = I((s = X(t))); a < o; a++) {
          t[(A = s[a])] = tb(t[A], e);
        }
        break;
      case "Map":
        c = new B_Map();
        t.forEach((t, r) => {
          B_set(c, tb(r, e), tb(t, e));
        });
        break;
      case "Set":
        c = new S_Set();
        t.forEach((t) => {
          S_add(c, tb(t, e));
        });
        break;
      case "Error":
        t.message = tb(t.message, e);
        if (y(t, "cause")) {
          t.cause = tb(t.cause, e);
        }
        if (t.name === "AggregateError") {
          t.errors = tb(t.errors, e);
        }
      case "DOMException":
        if (E) {
          t.stack = tb(t.stack, e);
        }
    }
  }
  B_set(e, t, c || t);
  return c || t;
};
const tv = (t, e) => {
  if (!f(t)) {
    throw a_TypeError("Transfer option cannot be converted to a sequence");
  }
  let r;
  let n;
  let i;
  let o;
  let s;
  const A = [];
  d(t, function (t) {
    z(A, p(t));
  });
  for (var c = 0, h = I(A), g = []; c < h;) {
    if ((n = m((r = A[c++]))) === "ArrayBuffer") {
      z(g, r);
      continue;
    }
    if (B_has(e, r)) {
      throw new L("Duplicate transferable", tn);
    }
    if (k) {
      o = a_structuredClone(r, {
        transfer: [r],
      });
    } else {
      switch (n) {
        case "ImageBitmap":
          if (!l((i = a.OffscreenCanvas))) {
            th(n, ti);
          }
          try {
            (s = new i(r.width, r.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(r);
            o = s.transferToImageBitmap();
          } catch (t) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(u(r.clone) && u(r.close))) {
            th(n, ti);
          }
          try {
            o = r.clone();
            r.close();
          } catch (t) {}
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          th(n, ti);
      }
    }
    if (o === undefined) {
      throw new L("This object cannot be transferred: " + n, tn);
    }
    B_set(e, r, o);
  }
  return g;
};
const tI = (t, e) => {
  let r;
  let n;
  for (let i = 0, a = I(t); i < a;) {
    if (B_has(e, (r = t[i++]))) {
      throw new L("Duplicate transferable", tn);
    }
    if (k) {
      n = a_structuredClone(r, {
        transfer: [r],
      });
    } else {
      if (!u(r.transfer)) {
        th("ArrayBuffer", ti);
      }
      n = r.transfer();
    }
    B_set(e, r, n);
  }
};
i(
  {
    global: true,
    enumerable: true,
    sham: !k,
    forced,
  },
  {
    structuredClone: function (t) {
      let e;
      const r =
        w(arguments.length, 1) > 1 && !h(arguments[1])
          ? p(arguments[1])
          : undefined;
      const n = r ? r.transfer : undefined;
      let i = false;
      if (n !== undefined) {
        i = !!I(tv(n, (e = new B_Map())));
      }
      let a = ty(t, e, i);
      if (i) {
        tI(n, (e = new B_Map()));
        a = tb(a, e);
      }
      return a;
    },
  },
);
