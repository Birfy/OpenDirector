import $ from "./module-N_12.js";
import tt from "./module-A_13.js";
import te from "./module-J_13.js";
import tr from "./module-YR_12.js";
import tn from "./module-O9_12.js";
import ti from "./module-X_13.js";
import to from "./module-o_12.js";
import ta from "./module-Y_13.js";
import ts from "./module-yM_13.js";
import tf from "./module-Mi_12.js";
import tu from "./module-y_2_12.js";
import tc from "./module-i_2_12.js";
import th from "./module-xK_12.js";
import td from "./module-d_13.js";
import tl from "./module-S9_12.js";
import tp from "./module-D_2_12.js";
import tb from "./module-er_12.js";
import tv from "./module-h_13.js";
import tg from "./module-F4_13.js";
import ty from "./module-eXf_12.js";
import tm from "./module-TK_13.js";
import tw from "./module-e7_12.js";
import tx from "./module-yh_12.js";
import t_ from "./module-dF_13.js";
import tM from "./module-H2_12.js";
const te_Object = te.Object;
const te_Array = te.Array;
const te_Date = te.Date;
const te_Error = te.Error;
const te_EvalError = te.EvalError;
const te_RangeError = te.RangeError;
const te_ReferenceError = te.ReferenceError;
const te_SyntaxError = te.SyntaxError;
const te_TypeError = te.TypeError;
const te_URIError = te.URIError;
const te_PerformanceMark = te.PerformanceMark;
const te_WebAssembly = te.WebAssembly;
const tL = (te_WebAssembly && te_WebAssembly.CompileError) || te_Error;
const tN = (te_WebAssembly && te_WebAssembly.LinkError) || te_Error;
const tU = (te_WebAssembly && te_WebAssembly.RuntimeError) || te_Error;
const tD = tr("DOMException");
const tw_Map = tw.Map;
const tw_has = tw.has;
const tw_get = tw.get;
const tw_set = tw.set;
const tx_Set = tx.Set;
const tx_add = tx.add;
const tK = tr("Object", "keys");
const tY = tn([].push);
const tX = tn(true.valueOf);
const tG = tn((1).valueOf);
const tJ = tn("".valueOf);
const tZ = tn(te_Date.prototype.getTime);
const tQ = to("structuredClone");
const t$ = "DataCloneError";
const t0 = "Transferring";
const t1 = (J) =>
  !ti(function () {
    const Z = new te.Set([7]);
    const Q = J(Z);
    const $ = J(te_Object(7));
    return Q === Z || !Q.has(7) || typeof $ !== "object" || +$ != 7;
  }) && J;
const t2 = (J, Z) =>
  !ti(function () {
    const Q = new Z();
    const $ = J({
      a: Q,
      b: Q,
    });
    return !($ && $.a === $.b && $.a instanceof Z && $.a.stack === Q.stack);
  });
const te_structuredClone = te.structuredClone;
const forced =
  $ ||
  !t2(te_structuredClone, te_Error) ||
  !t2(te_structuredClone, tD) ||
  !!ti(function () {
    const J = te_structuredClone(
      new te.AggregateError([1], tQ, {
        cause: 3,
      }),
    );
    return (
      J.name !== "AggregateError" ||
      J.errors[0] !== 1 ||
      J.message !== tQ ||
      J.cause !== 3
    );
  });
const t4 =
  !te_structuredClone &&
  t1(function (detail) {
    return new te_PerformanceMark(tQ, {
      detail,
    }).detail;
  });
const t8 = t1(te_structuredClone) || t4;
const t5 = (J) => {
  throw new tD("Uncloneable type: " + J, t$);
};
const t9 = (J, Z) => {
  throw new tD(
    (Z || "Cloning") +
      " of " +
      J +
      " cannot be properly polyfilled in this engine",
    t$,
  );
};
const t7 = (J, Z) => {
  if (!t8) {
    t9(Z);
  }
  return t8(J);
};
const et = () => {
  let J;
  try {
    J = new te.DataTransfer();
  } catch (Z) {
    try {
      J = new te.ClipboardEvent("").clipboardData;
    } catch (J) {}
  }
  if (J && J.items && J.files) {
    return J;
  }
  return null;
};
const ee = (J, Z, Q) => {
  if (tw_has(Z, J)) {
    return tw_get(Z, J);
  }
  if ((Q || tl(J)) === "SharedArrayBuffer") {
    $ = t8 ? t8(J) : J;
  } else {
    var $;
    let tt;
    let tr;
    let tn;
    let ti;
    let to;
    const ta = te.DataView;
    if (!(ta || typeof J.slice === "function")) {
      t9("ArrayBuffer");
    }
    try {
      if (typeof J.slice !== "function" || J.resizable) {
        tt = J.byteLength;
        tr =
          "maxByteLength" in J
            ? {
                maxByteLength: J.maxByteLength,
              }
            : undefined;
        $ = new ArrayBuffer(tt, tr);
        tn = new ta(J);
        ti = new ta($);
        for (to = 0; to < tt; to++) {
          ti.setUint8(to, tn.getUint8(to));
        }
      } else {
        $ = J.slice(0);
      }
    } catch (J) {
      throw new tD("ArrayBuffer is detached", t$);
    }
  }
  tw_set(Z, J, $);
  return $;
};
const er = (J, Z, Q, $, tt) => {
  const tr = te[Z];
  if (!tu(tr)) {
    t9(Z);
  }
  return new tr(ee(J.buffer, tt), Q, $);
};
const en = function (J, Z, Q) {
  this.object = J;
  this.type = Z;
  this.metadata = Q;
};
const ei = (J, Z, Q) => {
  if (tc(J)) {
    t5("Symbol");
  }
  if (!tu(J)) {
    return J;
  }
  if (Z) {
    if (tw_has(Z, J)) {
      return tw_get(Z, J);
    }
  } else {
    Z = new tw_Map();
  }
  let $;
  let tt;
  let tn;
  let ti;
  let to;
  let length;
  let tf;
  let th;
  const td = tl(J);
  switch (td) {
    case "Array":
      tn = te_Array(tg(J));
      break;
    case "Object":
      tn = {};
      break;
    case "Map":
      tn = new tw_Map();
      break;
    case "Set":
      tn = new tx_Set();
      break;
    case "RegExp":
      tn = new RegExp(J.source, tm(J));
      break;
    case "Error":
      switch ((tt = J.name)) {
        case "AggregateError":
          tn = tr("AggregateError")([]);
          break;
        case "EvalError":
          tn = te_EvalError();
          break;
        case "RangeError":
          tn = te_RangeError();
          break;
        case "ReferenceError":
          tn = te_ReferenceError();
          break;
        case "SyntaxError":
          tn = te_SyntaxError();
          break;
        case "TypeError":
          tn = te_TypeError();
          break;
        case "URIError":
          tn = te_URIError();
          break;
        case "CompileError":
          tn = tL();
          break;
        case "LinkError":
          tn = tN();
          break;
        case "RuntimeError":
          tn = tU();
          break;
        default:
          tn = te_Error();
      }
      break;
    case "DOMException":
      tn = new tD(J.message, J.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      tn = Q ? new en(J, td) : ee(J, Z, td);
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
      length = td === "DataView" ? J.byteLength : J.length;
      tn = Q
        ? new en(J, td, {
            offset: J.byteOffset,
            length,
          })
        : er(J, td, J.byteOffset, length, Z);
      break;
    case "DOMQuad":
      try {
        tn = new DOMQuad(
          ei(J.p1, Z, Q),
          ei(J.p2, Z, Q),
          ei(J.p3, Z, Q),
          ei(J.p4, Z, Q),
        );
      } catch (Z) {
        tn = t7(J, td);
      }
      break;
    case "File":
      if (t8) {
        try {
          tn = t8(J);
          if (tl(tn) !== td) {
            tn = undefined;
          }
        } catch (J) {}
      }
      if (!tn) {
        try {
          tn = new File([J], J.name, J);
        } catch (J) {}
      }
      if (!tn) {
        t9(td);
      }
      break;
    case "FileList":
      if ((ti = et())) {
        to = 0;
        for (length = tg(J); to < length; to++) {
          ti.items.add(ei(J[to], Z, Q));
        }
        tn = ti.files;
      } else {
        tn = t7(J, td);
      }
      break;
    case "ImageData":
      try {
        tn = new ImageData(ei(J.data, Z, Q), J.width, J.height, {
          colorSpace: J.colorSpace,
        });
      } catch (Z) {
        tn = t7(J, td);
      }
      break;
    default:
      if (t8) {
        tn = t8(J);
      } else {
        switch (td) {
          case "BigInt":
            tn = te_Object(J.valueOf());
            break;
          case "Boolean":
            tn = te_Object(tX(J));
            break;
          case "Number":
            tn = te_Object(tG(J));
            break;
          case "String":
            tn = te_Object(tJ(J));
            break;
          case "Date":
            tn = new te_Date(tZ(J));
            break;
          case "Blob":
            try {
              tn = J.slice(0, J.size, J.type);
            } catch (J) {
              t9(td);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            $ = te[td];
            try {
              tn = $.fromPoint ? $.fromPoint(J) : new $(J.x, J.y, J.z, J.w);
            } catch (J) {
              t9(td);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            $ = te[td];
            try {
              tn = $.fromRect
                ? $.fromRect(J)
                : new $(J.x, J.y, J.width, J.height);
            } catch (J) {
              t9(td);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            $ = te[td];
            try {
              tn = $.fromMatrix ? $.fromMatrix(J) : new $(J);
            } catch (J) {
              t9(td);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!ta(J.clone)) {
              t9(td);
            }
            try {
              tn = J.clone();
            } catch (J) {
              t5(td);
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
            t9(td);
          default:
            t5(td);
        }
      }
  }
  tw_set(Z, J, tn);
  switch (td) {
    case "Array":
    case "Object":
      to = 0;
      for (length = tg((tf = tK(J))); to < length; to++) {
        th = tf[to];
        tb(tn, th, ei(J[th], Z, Q));
      }
      break;
    case "Map":
      J.forEach((J, $) => {
        tw_set(tn, ei($, Z, Q), ei(J, Z, Q));
      });
      break;
    case "Set":
      J.forEach((J) => {
        tx_add(tn, ei(J, Z, Q));
      });
      break;
    case "Error":
      tv(tn, "message", ei(J.message, Z, Q));
      if (tp(J, "cause")) {
        tv(tn, "cause", ei(J.cause, Z, Q));
      }
      if (tt === "AggregateError") {
        tn.errors = ei(J.errors, Z, Q);
      }
    case "DOMException":
      if (t_) {
        tv(tn, "stack", ei(J.stack, Z, Q));
      }
  }
  return tn;
};
const eo = (J, Z) => {
  let Q;
  let $;
  let tt;
  let te;
  let tr;
  let tn;
  let ti;
  let to;
  if (!tu(J)) {
    return J;
  }
  if (tw_has(Z, J)) {
    return tw_get(Z, J);
  }
  if (J instanceof en) {
    Q = J.type;
    $ = J.object;
    switch (Q) {
      case "ArrayBuffer":
      case "SharedArrayBuffer":
        to = ee($, Z, Q);
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
        to = er($, Q, (tt = J.metadata).offset, tt.length, Z);
    }
  } else {
    switch (tl(J)) {
      case "Array":
      case "Object":
        te = 0;
        for (tr = tg((tn = tK(J))); te < tr; te++) {
          J[(ti = tn[te])] = eo(J[ti], Z);
        }
        break;
      case "Map":
        to = new tw_Map();
        J.forEach((J, Q) => {
          tw_set(to, eo(Q, Z), eo(J, Z));
        });
        break;
      case "Set":
        to = new tx_Set();
        J.forEach((J) => {
          tx_add(to, eo(J, Z));
        });
        break;
      case "Error":
        J.message = eo(J.message, Z);
        if (tp(J, "cause")) {
          J.cause = eo(J.cause, Z);
        }
        if (J.name === "AggregateError") {
          J.errors = eo(J.errors, Z);
        }
      case "DOMException":
        if (t_) {
          J.stack = eo(J.stack, Z);
        }
    }
  }
  tw_set(Z, J, to || J);
  return to || J;
};
const ea = (J, Z) => {
  if (!tu(J)) {
    throw te_TypeError("Transfer option cannot be converted to a sequence");
  }
  let Q;
  let $;
  let tt;
  let tr;
  let tn;
  const ti = [];
  th(J, function (J) {
    tY(ti, td(J));
  });
  for (var to = 0, tf = tg(ti), tc = []; to < tf;) {
    if (($ = tl((Q = ti[to++]))) === "ArrayBuffer") {
      tY(tc, Q);
      continue;
    }
    if (tw_has(Z, Q)) {
      throw new tD("Duplicate transferable", t$);
    }
    if (tM) {
      tr = te_structuredClone(Q, {
        transfer: [Q],
      });
    } else {
      switch ($) {
        case "ImageBitmap":
          if (!ts((tt = te.OffscreenCanvas))) {
            t9($, t0);
          }
          try {
            (tn = new tt(Q.width, Q.height))
              .getContext("bitmaprenderer")
              .transferFromImageBitmap(Q);
            tr = tn.transferToImageBitmap();
          } catch (J) {}
          break;
        case "AudioData":
        case "VideoFrame":
          if (!(ta(Q.clone) && ta(Q.close))) {
            t9($, t0);
          }
          try {
            tr = Q.clone();
            Q.close();
          } catch (J) {}
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          t9($, t0);
      }
    }
    if (tr === undefined) {
      throw new tD("This object cannot be transferred: " + $, t$);
    }
    tw_set(Z, Q, tr);
  }
  return tc;
};
const es = (J, Z) => {
  let Q;
  let $;
  for (let tt = 0, te = tg(J); tt < te;) {
    if (tw_has(Z, (Q = J[tt++]))) {
      throw new tD("Duplicate transferable", t$);
    }
    if (tM) {
      $ = te_structuredClone(Q, {
        transfer: [Q],
      });
    } else {
      if (!ta(Q.transfer)) {
        t9("ArrayBuffer", t0);
      }
      $ = Q.transfer();
    }
    tw_set(Z, Q, $);
  }
};
tt(
  {
    global: true,
    enumerable: true,
    sham: !tM,
    forced,
  },
  {
    structuredClone: function (J) {
      let Z;
      const Q =
        ty(arguments.length, 1) > 1 && !tf(arguments[1])
          ? td(arguments[1])
          : undefined;
      const $ = Q ? Q.transfer : undefined;
      let tt = false;
      if ($ !== undefined) {
        tt = !!tg(ea($, (Z = new tw_Map())));
      }
      let te = ei(J, Z, tt);
      if (tt) {
        es($, (Z = new tw_Map()));
        te = eo(te, Z);
      }
      return te;
    },
  },
);
