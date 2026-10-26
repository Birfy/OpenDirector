import s from "rCO";
import { Buffer } from "wS";
const r = {};
r.d = (t, e) => {
  for (var i in e) {
    if (r.o(e, i) && !r.o(t, i)) {
      Object.defineProperty(t, i, {
        enumerable: true,
        get: e[i],
      });
    }
  }
};
r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
const n = (globalThis.pdfjsLib = {});
r.d(n, {
  AbortException: () => R,
  AnnotationEditorLayer: () => iN,
  AnnotationEditorParamsType: () => u,
  AnnotationEditorType: () => c,
  AnnotationEditorUIManager: () => tb,
  AnnotationLayer: () => iw,
  AnnotationMode: () => d,
  ColorPicker: () => iD,
  DOMSVGFactory: () => e0,
  DrawLayer: () => iB,
  FeatureTest: () => O,
  GlobalWorkerOptions: () => t4,
  ImageKind: () => g,
  InvalidPDFException: () => M,
  MissingPDFException: () => k,
  OPS: () => f,
  OutputScale: () => tl,
  PDFDataRangeTransport: () => eB,
  PDFDateString: () => ti,
  PDFWorker: () => eU,
  PasswordResponses: () => b,
  PermissionFlag: () => p,
  PixelsPerInch: () => G,
  RenderingCancelledException: () => q,
  TextLayer: () => ek,
  UnexpectedResponseException: () => I,
  Util: () => B,
  VerbosityLevel: () => m,
  XfaLayer: () => e1,
  build: () => eK,
  createValidAbsoluteUrl: () => w,
  fetchData: () => V,
  getDocument: () => eF,
  getFilenameFromUrl: () => Y,
  getPdfFilenameFromUrl: () => Q,
  getXfaPageViewport: () => ts,
  isDataScheme: () => X,
  isPdfFile: () => K,
  noContextMenu: () => tt,
  normalizeUnicode: () => j,
  setLayerDimensions: () => to,
  shadow: () => C,
  version: () => eX,
});
let o =
  typeof s === "object" &&
  s + "" == "[object process]" &&
  !s.versions.nw &&
  !(s.versions.electron && s.type && s.type !== "browser");
let l = [1, 0, 0, 1, 0, 0];
let h = [0.001, 0, 0, 0.001, 0, 0];
let d = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3,
};
let c = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
};
let u = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
};
let p = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048,
};
let g = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3,
};
let m = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
};
let f = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
};
let b = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};
let m_WARNINGS = m.WARNINGS;
function A(t) {
  if (m_WARNINGS >= m.INFOS) {
    console.log(`Info: ${t}`);
  }
}
function y(t) {
  if (m_WARNINGS >= m.WARNINGS) {
    console.log(`Warning: ${t}`);
  }
}
function _(t) {
  throw Error(t);
}
function x(t, e) {
  if (!t) {
    _(e);
  }
}
function w(t, e = null, i = null) {
  if (!t) {
    return null;
  }
  try {
    if (i && typeof t === "string") {
      if (i.addDefaultProtocol && t.startsWith("www.")) {
        let e = t.match(/\./g);
        if (e?.length >= 2) {
          t = `http://${t}`;
        }
      }
      if (i.tryConvertEncoding) {
        try {
          let s;
          s = t;
          t = decodeURIComponent(escape(s));
        } catch {}
      }
    }
    let a = e ? new URL(t, e) : new URL(t);
    if (
      ((t) => {
        switch (t?.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;
          default:
            return false;
        }
      })(a)
    ) {
      return a;
    }
  } catch {}
  return null;
}
function C(t, e, i, s = false) {
  Object.defineProperty(t, e, {
    value: i,
    enumerable: !s,
    configurable: true,
    writable: false,
  });
  return i;
}
let E = (() => {
  function t(t, e) {
    this.message = t;
    this.name = e;
  }
  t.prototype = Error();
  t.constructor = t;
  return t;
})();
class S extends E {
  constructor(t, e) {
    super(t, "PasswordException");
    this.code = e;
  }
}
class T extends E {
  constructor(t, e) {
    super(t, "UnknownErrorException");
    this.details = e;
  }
}
class M extends E {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class k extends E {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class I extends E {
  constructor(t, e) {
    super(t, "UnexpectedResponseException");
    this.status = e;
  }
}
class P extends E {
  constructor(t) {
    super(t, "FormatError");
  }
}
class R extends E {
  constructor(t) {
    super(t, "AbortException");
  }
}
function D(t) {
  if (typeof t !== "object" || t?.length === undefined) {
    _("Invalid argument for bytesToString");
  }
  let t_length = t.length;
  if (t_length < 8192) {
    return String.fromCharCode.apply(null, t);
  }
  let i = [];
  for (let s = 0; s < t_length; s += 8192) {
    let a = Math.min(s + 8192, t_length);
    let r = t.subarray(s, a);
    i.push(String.fromCharCode.apply(null, r));
  }
  return i.join("");
}
function L(t) {
  if (typeof t !== "string") {
    _("Invalid argument for stringToBytes");
  }
  let t_length = t.length;
  let i = new Uint8Array(t_length);
  for (let s = 0; s < t_length; ++s) {
    i[s] = 255 & t.charCodeAt(s);
  }
  return i;
}
function F(t) {
  let e = Object.create(null);
  for (let [i, s] of t) {
    e[i] = s;
  }
  return e;
}
class O {
  static get isLittleEndian() {
    let t;
    return C(
      this,
      "isLittleEndian",
      (((t = new Uint8Array(4))[0] = 1),
      new Uint32Array(t.buffer, 0, 1)[0] === 1),
    );
  }
  static get isEvalSupported() {
    return C(
      this,
      "isEvalSupported",
      (() => {
        try {
          Function("");
          return true;
        } catch {
          return false;
        }
      })(),
    );
  }
  static get isOffscreenCanvasSupported() {
    return C(
      this,
      "isOffscreenCanvasSupported",
      typeof OffscreenCanvas !== "undefined",
    );
  }
  static get platform() {
    if (
      typeof navigator !== "undefined" &&
      typeof navigator?.platform === "string"
    ) {
      return C(this, "platform", {
        isMac: navigator.platform.includes("Mac"),
        isWindows: navigator.platform.includes("Win"),
        isFirefox:
          typeof navigator?.userAgent === "string" &&
          navigator.userAgent.includes("Firefox"),
      });
    }
    return C(this, "platform", {
      isMac: false,
      isWindows: false,
      isFirefox: false,
    });
  }
  static get isCSSRoundSupported() {
    return C(
      this,
      "isCSSRoundSupported",
      globalThis.CSS?.supports?.("width: round(1.5px, 1px)"),
    );
  }
}
let N = Array.from(Array(256).keys(), (t) => t.toString(16).padStart(2, "0"));
class B {
  static makeHexColor(t, e, i) {
    return `#${N[t]}${N[e]}${N[i]}`;
  }
  static scaleMinMax(t, e) {
    let i;
    if (t[0]) {
      if (t[0] < 0) {
        i = e[0];
        e[0] = e[2];
        e[2] = i;
      }
      e[0] *= t[0];
      e[2] *= t[0];
      if (t[3] < 0) {
        i = e[1];
        e[1] = e[3];
        e[3] = i;
      }
      e[1] *= t[3];
      e[3] *= t[3];
    } else {
      i = e[0];
      e[0] = e[1];
      e[1] = i;
      i = e[2];
      e[2] = e[3];
      e[3] = i;
      if (t[1] < 0) {
        i = e[1];
        e[1] = e[3];
        e[3] = i;
      }
      e[1] *= t[1];
      e[3] *= t[1];
      if (t[2] < 0) {
        i = e[0];
        e[0] = e[2];
        e[2] = i;
      }
      e[0] *= t[2];
      e[2] *= t[2];
    }
    e[0] += t[4];
    e[1] += t[5];
    e[2] += t[4];
    e[3] += t[5];
  }
  static transform(t, e) {
    return [
      t[0] * e[0] + t[2] * e[1],
      t[1] * e[0] + t[3] * e[1],
      t[0] * e[2] + t[2] * e[3],
      t[1] * e[2] + t[3] * e[3],
      t[0] * e[4] + t[2] * e[5] + t[4],
      t[1] * e[4] + t[3] * e[5] + t[5],
    ];
  }
  static applyTransform(t, e) {
    return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]];
  }
  static applyInverseTransform(t, e) {
    let i = e[0] * e[3] - e[1] * e[2];
    return [
      (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i,
      (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i,
    ];
  }
  static getAxialAlignedBoundingBox(t, e) {
    let i = this.applyTransform(t, e);
    let s = this.applyTransform(t.slice(2, 4), e);
    let a = this.applyTransform([t[0], t[3]], e);
    let r = this.applyTransform([t[2], t[1]], e);
    return [
      Math.min(i[0], s[0], a[0], r[0]),
      Math.min(i[1], s[1], a[1], r[1]),
      Math.max(i[0], s[0], a[0], r[0]),
      Math.max(i[1], s[1], a[1], r[1]),
    ];
  }
  static inverseTransform(t) {
    let e = t[0] * t[3] - t[1] * t[2];
    return [
      t[3] / e,
      -t[1] / e,
      -t[2] / e,
      t[0] / e,
      (t[2] * t[5] - t[4] * t[3]) / e,
      (t[4] * t[1] - t[5] * t[0]) / e,
    ];
  }
  static singularValueDecompose2dScale(t) {
    let e = [t[0], t[2], t[1], t[3]];
    let i = t[0] * e[0] + t[1] * e[2];
    let s = t[0] * e[1] + t[1] * e[3];
    let a = t[2] * e[0] + t[3] * e[2];
    let r = t[2] * e[1] + t[3] * e[3];
    let n = (i + r) / 2;
    let o = Math.sqrt((i + r) ** 2 - 4 * (i * r - a * s)) / 2;
    return [Math.sqrt(n + o || 1), Math.sqrt(n - o || 1)];
  }
  static normalizeRect(t) {
    let e = t.slice(0);
    if (t[0] > t[2]) {
      e[0] = t[2];
      e[2] = t[0];
    }
    if (t[1] > t[3]) {
      e[1] = t[3];
      e[3] = t[1];
    }
    return e;
  }
  static intersect(t, e) {
    let i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2]));
    let s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s) {
      return null;
    }
    let a = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3]));
    let r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    if (a > r) {
      return null;
    }
    return [i, a, s, r];
  }
  static #t(t, e, i, s, a, r, n, o, l, h) {
    if (l <= 0 || l >= 1) {
      return;
    }
    let d = 1 - l;
    let c = l * l;
    let u = c * l;
    let p = d * (d * (d * t + 3 * l * e) + 3 * c * i) + u * s;
    let g = d * (d * (d * a + 3 * l * r) + 3 * c * n) + u * o;
    h[0] = Math.min(h[0], p);
    h[1] = Math.min(h[1], g);
    h[2] = Math.max(h[2], p);
    h[3] = Math.max(h[3], g);
  }
  static #e(t, e, i, s, a, r, n, o, l, h, d, c) {
    if (Math.abs(l) < 1e-12) {
      if (Math.abs(h) >= 1e-12) {
        this.#t(t, e, i, s, a, r, n, o, -d / h, c);
      }
      return;
    }
    let u = h ** 2 - 4 * d * l;
    if (u < 0) {
      return;
    }
    let p = Math.sqrt(u);
    let g = 2 * l;
    this.#t(t, e, i, s, a, r, n, o, (-h + p) / g, c);
    this.#t(t, e, i, s, a, r, n, o, (-h - p) / g, c);
  }
  static bezierBoundingBox(t, e, i, s, a, r, n, o, l) {
    if (l) {
      l[0] = Math.min(l[0], t, n);
      l[1] = Math.min(l[1], e, o);
      l[2] = Math.max(l[2], t, n);
      l[3] = Math.max(l[3], e, o);
    } else {
      l = [Math.min(t, n), Math.min(e, o), Math.max(t, n), Math.max(e, o)];
    }
    this.#e(
      t,
      i,
      a,
      n,
      e,
      s,
      r,
      o,
      3 * (-t + 3 * (i - a) + n),
      6 * (t - 2 * i + a),
      3 * (i - t),
      l,
    );
    this.#e(
      t,
      i,
      a,
      n,
      e,
      s,
      r,
      o,
      3 * (-e + 3 * (s - r) + o),
      6 * (e - 2 * s + r),
      3 * (s - e),
      l,
    );
    return l;
  }
}
let z = null;
let H = null;
function j(t) {
  if (!z) {
    z =
      /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    H = new Map([["ﬅ", "ſt"]]);
  }
  return t.replaceAll(z, (t, e, i) => {
    if (e) {
      return e.normalize("NFKC");
    }
    return H.get(i);
  });
}
let U = "pdfjs_internal_id_";
let $ = "http://www.w3.org/2000/svg";
class G {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function V(t, e = "text") {
  if (Z(t, document.baseURI)) {
    let i = await fetch(t);
    if (!i.ok) {
      throw Error(i.statusText);
    }
    switch (e) {
      case "arraybuffer":
        return i.arrayBuffer();
      case "blob":
        return i.blob();
      case "json":
        return i.json();
    }
    return i.text();
  }
  return new Promise((resolve, reject) => {
    let a = new XMLHttpRequest();
    a.open("GET", t, true);
    a.responseType = e;
    a.onreadystatechange = () => {
      if (a.readyState === XMLHttpRequest.DONE) {
        if (a.status === 200 || a.status === 0) {
          switch (e) {
            case "arraybuffer":
            case "blob":
            case "json":
              resolve(a.response);
              return;
          }
          resolve(a.responseText);
          return;
        }
        reject(Error(a.statusText));
      }
    };
    a.send(null);
  });
}
class W {
  constructor({
    viewBox,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false,
  }) {
    let n;
    let o;
    let l;
    let h;
    let d;
    let c;
    let u;
    let p;
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    let g = (viewBox[2] + viewBox[0]) / 2;
    let m = (viewBox[3] + viewBox[1]) / 2;
    if ((rotation %= 360) < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        n = -1;
        o = 0;
        l = 0;
        h = 1;
        break;
      case 90:
        n = 0;
        o = 1;
        l = 1;
        h = 0;
        break;
      case 270:
        n = 0;
        o = -1;
        l = -1;
        h = 0;
        break;
      case 0:
        n = 1;
        o = 0;
        l = 0;
        h = -1;
        break;
      default:
        throw Error(
          "PageViewport: Invalid rotation, must be a multiple of 90 degrees.",
        );
    }
    if (dontFlip) {
      l = -l;
      h = -h;
    }
    if (n === 0) {
      d = Math.abs(m - viewBox[1]) * scale + offsetX;
      c = Math.abs(g - viewBox[0]) * scale + offsetY;
      u = (viewBox[3] - viewBox[1]) * scale;
      p = (viewBox[2] - viewBox[0]) * scale;
    } else {
      d = Math.abs(g - viewBox[0]) * scale + offsetX;
      c = Math.abs(m - viewBox[1]) * scale + offsetY;
      u = (viewBox[2] - viewBox[0]) * scale;
      p = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [
      n * scale,
      o * scale,
      l * scale,
      h * scale,
      d - n * scale * g - l * scale * m,
      c - o * scale * g - h * scale * m,
    ];
    this.width = u;
    this.height = p;
  }
  get rawDims() {
    let { viewBox } = this;
    return C(this, "rawDims", {
      pageWidth: viewBox[2] - viewBox[0],
      pageHeight: viewBox[3] - viewBox[1],
      pageX: viewBox[0],
      pageY: viewBox[1],
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false,
  } = {}) {
    return new W({
      viewBox: this.viewBox.slice(),
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip,
    });
  }
  convertToViewportPoint(t, e) {
    return B.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    let e = B.applyTransform([t[0], t[1]], this.transform);
    let i = B.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], i[0], i[1]];
  }
  convertToPdfPoint(t, e) {
    return B.applyInverseTransform([t, e], this.transform);
  }
}
class q extends E {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException");
    this.extraDelay = e;
  }
}
function X(t) {
  let t_length = t.length;
  let i = 0;
  while (i < t_length && t[i].trim() === "") {
    i++;
  }
  return t.substring(i, i + 5).toLowerCase() === "data:";
}
function K(t) {
  return typeof t === "string" && /\.pdf$/i.test(t);
}
function Y(t) {
  [t] = t.split(/[#?]/, 1);
  return t.substring(t.lastIndexOf("/") + 1);
}
function Q(t, e = "document.pdf") {
  if (typeof t !== "string") {
    return e;
  }
  if (X(t)) {
    y('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return e;
  }
  let i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  let s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
  let a = i.exec(s[1]) || i.exec(s[2]) || i.exec(s[3]);
  if (a && (a = a[0]).includes("%")) {
    try {
      a = i.exec(decodeURIComponent(a))[0];
    } catch {}
  }
  return a || e;
}
class J {
  started = Object.create(null);
  times = [];
  time(t) {
    if (t in this.started) {
      y(`Timer is already running for ${t}`);
    }
    this.started[t] = Date.now();
  }
  timeEnd(t) {
    if (!(t in this.started)) {
      y(`Timer has not been started for ${t}`);
    }
    this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now(),
    });
    delete this.started[t];
  }
  toString() {
    let t = [];
    let e = 0;
    for (let { name } of this.times) {
      e = Math.max(name.length, e);
    }
    for (let { name, start, end } of this.times) {
      t.push(`${name.padEnd(e)} ${end - start}ms
`);
    }
    return t.join("");
  }
}
function Z(t, e) {
  try {
    let { protocol } = e ? new URL(t, e) : new URL(t);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
function tt(t) {
  t.preventDefault();
}
function te(t) {
  console.log("Deprecated API usage: " + t);
}
class ti {
  static #i;
  static toDateObject(t) {
    if (!t || typeof t !== "string") {
      return null;
    }
    this.#i ||= RegExp(
      "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?",
    );
    let e = this.#i.exec(t);
    if (!e) {
      return null;
    }
    let i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let a = parseInt(e[3], 10);
    a = a >= 1 && a <= 31 ? a : 1;
    let r = parseInt(e[4], 10);
    r = r >= 0 && r <= 23 ? r : 0;
    let n = parseInt(e[5], 10);
    n = n >= 0 && n <= 59 ? n : 0;
    let o = parseInt(e[6], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = e[7] || "Z";
    let h = parseInt(e[8], 10);
    h = h >= 0 && h <= 23 ? h : 0;
    let d = parseInt(e[9], 10) || 0;
    d = d >= 0 && d <= 59 ? d : 0;
    if (l === "-") {
      r += h;
      n += d;
    } else if (l === "+") {
      r -= h;
      n -= d;
    }
    return new Date(Date.UTC(i, s, a, r, n, o));
  }
}
function ts(t, { scale = 1, rotation = 0 }) {
  let { width, height } = t.attributes.style;
  return new W({
    viewBox: [0, 0, parseInt(width), parseInt(height)],
    scale,
    rotation,
  });
}
function ta(t) {
  if (t.startsWith("#")) {
    let e = parseInt(t.slice(1), 16);
    return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
  }
  if (t.startsWith("rgb(")) {
    return t
      .slice(4, -1)
      .split(",")
      .map((t) => parseInt(t));
  }
  if (t.startsWith("rgba(")) {
    return t
      .slice(5, -1)
      .split(",")
      .map((t) => parseInt(t))
      .slice(0, 3);
  }
  y(`Not a valid color format: "${t}"`);
  return [0, 0, 0];
}
function tr(t) {
  let { a: a_1, b, c, d, e: e_1, f } = t.getTransform();
  return [a_1, b, c, d, e_1, f];
}
function tn(t) {
  let { a: a_1, b, c, d, e: e_1, f } = t.getTransform().invertSelf();
  return [a_1, b, c, d, e_1, f];
}
function to(t, e, i = false, s = true) {
  if (e instanceof W) {
    let { pageWidth, pageHeight } = e.rawDims;
    let { style } = t;
    let n = O.isCSSRoundSupported;
    let o = `var(--scale-factor) * ${pageWidth}px`;
    let l = `var(--scale-factor) * ${pageHeight}px`;
    let h = n ? `round(down, ${o}, var(--scale-round-x, 1px))` : `calc(${o})`;
    let d = n ? `round(down, ${l}, var(--scale-round-y, 1px))` : `calc(${l})`;
    if (i && e.rotation % 180 != 0) {
      style.width = d;
      style.height = h;
    } else {
      style.width = h;
      style.height = d;
    }
  }
  if (s) {
    t.setAttribute("data-main-rotation", e.rotation);
  }
}
class tl {
  constructor() {
    let t = window.devicePixelRatio || 1;
    this.sx = t;
    this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
class th {
  #s = null;
  #a = null;
  #r;
  #n = null;
  #o = null;
  static #l = null;
  constructor(t) {
    this.#r = t;
    th.#l ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
    });
  }
  render() {
    let t = (this.#s = document.createElement("div"));
    t.classList.add("editToolbar", "hidden");
    t.setAttribute("role", "toolbar");
    let _signal = this.#r._uiManager._signal;
    t.addEventListener("contextmenu", tt, {
      signal: _signal,
    });
    t.addEventListener("pointerdown", th.#h, {
      signal: _signal,
    });
    let i = (this.#n = document.createElement("div"));
    i.className = "buttons";
    t.append(i);
    let toolbarPosition = this.#r.toolbarPosition;
    if (toolbarPosition) {
      let { style } = t;
      let i =
        this.#r._uiManager.direction === "ltr"
          ? 1 - toolbarPosition[0]
          : toolbarPosition[0];
      style.insetInlineEnd = `${100 * i}%`;
      style.top = `calc(${100 * toolbarPosition[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    this.#d();
    return t;
  }
  get div() {
    return this.#s;
  }
  static #h(t) {
    t.stopPropagation();
  }
  #c(t) {
    this.#r._focusEventsAllowed = false;
    t.preventDefault();
    t.stopPropagation();
  }
  #u(t) {
    this.#r._focusEventsAllowed = true;
    t.preventDefault();
    t.stopPropagation();
  }
  #p(t) {
    let _signal = this.#r._uiManager._signal;
    t.addEventListener("focusin", this.#c.bind(this), {
      capture: true,
      signal: _signal,
    });
    t.addEventListener("focusout", this.#u.bind(this), {
      capture: true,
      signal: _signal,
    });
    t.addEventListener("contextmenu", tt, {
      signal: _signal,
    });
  }
  hide() {
    this.#s.classList.add("hidden");
    this.#a?.hideDropdown();
  }
  show() {
    this.#s.classList.remove("hidden");
    this.#o?.shown();
  }
  #d() {
    let { editorType, _uiManager } = this.#r;
    let i = document.createElement("button");
    i.className = "delete";
    i.tabIndex = 0;
    i.setAttribute("data-l10n-id", th.#l[editorType]);
    this.#p(i);
    i.addEventListener(
      "click",
      (t) => {
        _uiManager.delete();
      },
      {
        signal: _uiManager._signal,
      },
    );
    this.#n.append(i);
  }
  get #g() {
    let t = document.createElement("div");
    t.className = "divider";
    return t;
  }
  async addAltText(t) {
    let e = await t.render();
    this.#p(e);
    this.#n.prepend(e, this.#g);
    this.#o = t;
  }
  addColorPicker(t) {
    this.#a = t;
    let e = t.renderButton();
    this.#p(e);
    this.#n.prepend(e, this.#g);
  }
  remove() {
    this.#s.remove();
    this.#a?.destroy();
    this.#a = null;
  }
}
class td {
  #n = null;
  #s = null;
  #m;
  constructor(t) {
    this.#m = t;
  }
  #f() {
    let t = (this.#s = document.createElement("div"));
    t.className = "editToolbar";
    t.setAttribute("role", "toolbar");
    t.addEventListener("contextmenu", tt, {
      signal: this.#m._signal,
    });
    let e = (this.#n = document.createElement("div"));
    e.className = "buttons";
    t.append(e);
    this.#b();
    return t;
  }
  #v(t, e) {
    let i = 0;
    let s = 0;
    for (let a of t) {
      let t = a.y + a.height;
      if (t < i) {
        continue;
      }
      let r = a.x + (e ? a.width : 0);
      if (t > i) {
        s = r;
        i = t;
        continue;
      }
      if (e) {
        if (r > s) {
          s = r;
        }
      } else if (r < s) {
        s = r;
      }
    }
    return [e ? 1 - s : s, i];
  }
  show(t, e, i) {
    let [s, a] = this.#v(e, i);
    let { style } = (this.#s ||= this.#f());
    t.append(this.#s);
    style.insetInlineEnd = `${100 * s}%`;
    style.top = `calc(${100 * a}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#s.remove();
  }
  #b() {
    let t = document.createElement("button");
    t.className = "highlightButton";
    t.tabIndex = 0;
    t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
    let e = document.createElement("span");
    t.append(e);
    e.className = "visuallyHidden";
    e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
    let _signal = this.#m._signal;
    t.addEventListener("contextmenu", tt, {
      signal: _signal,
    });
    t.addEventListener(
      "click",
      () => {
        this.#m.highlightSelection("floating_button");
      },
      {
        signal: _signal,
      },
    );
    this.#n.append(t);
  }
}
function tc(t, e, i) {
  for (let s of i) {
    e.addEventListener(s, t[s].bind(t));
  }
}
class tu {
  #A = 0;
  get id() {
    return `pdfjs_internal_editor_${this.#A++}`;
  }
}
class tp {
  #y = (() => {
    if (
      typeof crypto !== "undefined" &&
      typeof crypto?.randomUUID === "function"
    ) {
      return crypto.randomUUID();
    }
    let t = new Uint8Array(32);
    if (
      typeof crypto !== "undefined" &&
      typeof crypto?.getRandomValues === "function"
    ) {
      crypto.getRandomValues(t);
    } else {
      for (let e = 0; e < 32; e++) {
        t[e] = Math.floor(255 * Math.random());
      }
    }
    return D(t);
  })();
  #A = 0;
  #_ = null;
  static get _isSVGFittingCanvas() {
    let t = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: true,
    });
    let e = new Image();
    e.src =
      'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
    return C(
      this,
      "_isSVGFittingCanvas",
      e.decode().then(() => {
        t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3);
        return new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
      }),
    );
  }
  async #x(t, e) {
    this.#_ ||= new Map();
    let i = this.#_.get(t);
    if (i === null) {
      return null;
    }
    if (i?.bitmap) {
      i.refCounter += 1;
      return i;
    }
    try {
      let t;
      i ||= {
        bitmap: null,
        id: `image_${this.#y}_${this.#A++}`,
        refCounter: 0,
        isSvg: false,
      };
      if (typeof e === "string") {
        i.url = e;
        t = await V(e, "blob");
      } else if (e instanceof File) {
        t = i.file = e;
      } else if (e instanceof Blob) {
        t = e;
      }
      if (t.type === "image/svg+xml") {
        let e = tp._isSVGFittingCanvas;
        let s = new FileReader();
        let a = new Image();
        let r = new Promise((resolve, reject) => {
          a.onload = () => {
            i.bitmap = a;
            i.isSvg = true;
            resolve();
          };
          s.onload = async () => {
            let t = (i.svgUrl = s.result);
            a.src = (await e) ? `${t}#svgView(preserveAspectRatio(none))` : t;
          };
          a.onerror = s.onerror = reject;
        });
        s.readAsDataURL(t);
        await r;
      } else {
        i.bitmap = await createImageBitmap(t);
      }
      i.refCounter = 1;
    } catch (error) {
      console.error(error);
      i = null;
    }
    this.#_.set(t, i);
    if (i) {
      this.#_.set(i.id, i);
    }
    return i;
  }
  async getFromFile(t) {
    let { lastModified, name, size, type } = t;
    return this.#x(`${lastModified}_${name}_${size}_${type}`, t);
  }
  async getFromUrl(t) {
    return this.#x(t, t);
  }
  async getFromBlob(t, e) {
    let i = await e;
    return this.#x(t, i);
  }
  async getFromId(t) {
    this.#_ ||= new Map();
    let e = this.#_.get(t);
    if (!e) {
      return null;
    }
    if (e.bitmap) {
      e.refCounter += 1;
      return e;
    }
    if (e.file) {
      return this.getFromFile(e.file);
    }
    if (e.blobPromise) {
      let { blobPromise } = e;
      delete e.blobPromise;
      return this.getFromBlob(e.id, blobPromise);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    this.#_ ||= new Map();
    let i = this.#_.get(t);
    if (i?.bitmap) {
      i.refCounter += 1;
      return i;
    }
    let s = new OffscreenCanvas(e.width, e.height);
    s.getContext("2d").drawImage(e, 0, 0);
    i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${this.#y}_${this.#A++}`,
      refCounter: 1,
      isSvg: false,
    };
    this.#_.set(t, i);
    this.#_.set(i.id, i);
    return i;
  }
  getSvgUrl(t) {
    let e = this.#_.get(t);
    if (e?.isSvg) {
      return e.svgUrl;
    }
    return null;
  }
  deleteId(t) {
    this.#_ ||= new Map();
    let e = this.#_.get(t);
    if (!e || ((e.refCounter -= 1), e.refCounter !== 0)) {
      return;
    }
    let { bitmap } = e;
    if (!e.url && !e.file) {
      let t = new OffscreenCanvas(bitmap.width, bitmap.height);
      t.getContext("bitmaprenderer").transferFromImageBitmap(bitmap);
      e.blobPromise = t.convertToBlob();
    }
    bitmap.close?.();
    e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${this.#y}_`);
  }
}
class tg {
  #w = [];
  #C = false;
  #E;
  #S = -1;
  constructor(t = 128) {
    this.#E = t;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = 0 / 0,
    overwriteIfSameType = false,
    keepUndo = false,
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#C) {
      return;
    }
    let o = {
      cmd,
      undo,
      post,
      type,
    };
    if (this.#S === -1) {
      if (this.#w.length > 0) {
        this.#w.length = 0;
      }
      this.#S = 0;
      this.#w.push(o);
      return;
    }
    if (overwriteIfSameType && this.#w[this.#S].type === type) {
      if (keepUndo) {
        o.undo = this.#w[this.#S].undo;
      }
      this.#w[this.#S] = o;
      return;
    }
    let l = this.#S + 1;
    if (l === this.#E) {
      this.#w.splice(0, 1);
    } else {
      this.#S = l;
      if (l < this.#w.length) {
        this.#w.splice(l);
      }
    }
    this.#w.push(o);
  }
  undo() {
    if (this.#S === -1) {
      return;
    }
    this.#C = true;
    let { undo, post } = this.#w[this.#S];
    undo();
    post?.();
    this.#C = false;
    this.#S -= 1;
  }
  redo() {
    if (this.#S < this.#w.length - 1) {
      this.#S += 1;
      this.#C = true;
      let { cmd, post } = this.#w[this.#S];
      cmd();
      post?.();
      this.#C = false;
    }
  }
  hasSomethingToUndo() {
    return this.#S !== -1;
  }
  hasSomethingToRedo() {
    return this.#S < this.#w.length - 1;
  }
  destroy() {
    this.#w = null;
  }
}
class tm {
  constructor(t) {
    this.buffer = [];
    this.callbacks = new Map();
    this.allKeys = new Set();
    let { isMac } = O.platform;
    for (let [i, s, options = {}] of t) {
      for (let t of i) {
        let i = t.startsWith("mac+");
        if (isMac && i) {
          this.callbacks.set(t.slice(4), {
            callback: s,
            options,
          });
          this.allKeys.add(t.split("+").at(-1));
        } else if (!(isMac || i)) {
          this.callbacks.set(t, {
            callback: s,
            options,
          });
          this.allKeys.add(t.split("+").at(-1));
        }
      }
    }
  }
  #T(t) {
    if (t.altKey) {
      this.buffer.push("alt");
    }
    if (t.ctrlKey) {
      this.buffer.push("ctrl");
    }
    if (t.metaKey) {
      this.buffer.push("meta");
    }
    if (t.shiftKey) {
      this.buffer.push("shift");
    }
    this.buffer.push(t.key);
    let e = this.buffer.join("+");
    this.buffer.length = 0;
    return e;
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key)) {
      return;
    }
    let i = this.callbacks.get(this.#T(e));
    if (!i) {
      return;
    }
    let {
      callback,
      options: { bubbles = false, args = [], checker = null },
    } = i;
    if (!checker || checker(t, e)) {
      callback.bind(t, ...args, e)();
      if (!bubbles) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }
}
class tf {
  static _colorsMapping = new Map([
    ["CanvasText", [0, 0, 0]],
    ["Canvas", [255, 255, 255]],
  ]);
  get _colors() {
    let t = new Map([
      ["CanvasText", null],
      ["Canvas", null],
    ]);
    let e = document.createElement("span");
    for (let i of ((e.style.visibility = "hidden"),
    document.body.append(e),
    t.keys())) {
      e.style.color = i;
      let s = window.getComputedStyle(e).color;
      t.set(i, ta(s));
    }
    e.remove();
    return C(this, "_colors", t);
  }
  convert(t) {
    let e = ta(t);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return e;
    }
    for (let [t, i] of this._colors) {
      if (i.every((t, i) => t === e[i])) {
        return tf._colorsMapping.get(t);
      }
    }
    return e;
  }
  getHexCode(t) {
    let e = this._colors.get(t);
    if (e) {
      return B.makeHexColor(...e);
    }
    return t;
  }
}
class tb {
  #M = new AbortController();
  #k = null;
  #I = new Map();
  #P = new Map();
  #R = null;
  #D = null;
  #L = null;
  #F = new tg();
  #O = null;
  #N = 0;
  #B = new Set();
  #z = null;
  #H = null;
  #j = new Set();
  #U = false;
  #$ = false;
  #G = false;
  #V = null;
  #W = null;
  #q = null;
  #X = null;
  #K = false;
  #Y = null;
  #Q = new tu();
  #J = false;
  #Z = false;
  #tt = null;
  #te = null;
  #ti = null;
  #ts = null;
  #ta = c.NONE;
  #tr = new Set();
  #tn = null;
  #to = null;
  #tl = null;
  #th = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false,
  };
  #td = [0, 0];
  #tc = null;
  #tu = null;
  #tp = null;
  #tg = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    let tb_prototype = tb.prototype;
    let e = (t) =>
      t.#tu.contains(document.activeElement) &&
      document.activeElement.tagName !== "BUTTON" &&
      t.hasSomethingToControl();
    let i = (t, { target }) => {
      if (target instanceof HTMLInputElement) {
        let { type } = target;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    let TRANSLATE_SMALL = this.TRANSLATE_SMALL;
    let TRANSLATE_BIG = this.TRANSLATE_BIG;
    return C(
      this,
      "_keyboardManager",
      new tm([
        [
          ["ctrl+a", "mac+meta+a"],
          tb_prototype.selectAll,
          {
            checker: i,
          },
        ],
        [
          ["ctrl+z", "mac+meta+z"],
          tb_prototype.undo,
          {
            checker: i,
          },
        ],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z",
          ],
          tb_prototype.redo,
          {
            checker: i,
          },
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete",
          ],
          tb_prototype.delete,
          {
            checker: i,
          },
        ],
        [
          ["Enter", "mac+Enter"],
          tb_prototype.addNewEditorFromKeyboard,
          {
            checker: (t, { target }) =>
              !(target instanceof HTMLButtonElement) &&
              t.#tu.contains(target) &&
              !t.isEnterHandled,
          },
        ],
        [
          [" ", "mac+ "],
          tb_prototype.addNewEditorFromKeyboard,
          {
            checker: (t, { target }) =>
              !(target instanceof HTMLButtonElement) &&
              t.#tu.contains(document.activeElement),
          },
        ],
        [["Escape", "mac+Escape"], tb_prototype.unselectAll],
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          tb_prototype.translateSelectedEditors,
          {
            args: [-TRANSLATE_SMALL, 0],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
          tb_prototype.translateSelectedEditors,
          {
            args: [-TRANSLATE_BIG, 0],
            checker: e,
          },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          tb_prototype.translateSelectedEditors,
          {
            args: [TRANSLATE_SMALL, 0],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
          tb_prototype.translateSelectedEditors,
          {
            args: [TRANSLATE_BIG, 0],
            checker: e,
          },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          tb_prototype.translateSelectedEditors,
          {
            args: [0, -TRANSLATE_SMALL],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
          tb_prototype.translateSelectedEditors,
          {
            args: [0, -TRANSLATE_BIG],
            checker: e,
          },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          tb_prototype.translateSelectedEditors,
          {
            args: [0, TRANSLATE_SMALL],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
          tb_prototype.translateSelectedEditors,
          {
            args: [0, TRANSLATE_BIG],
            checker: e,
          },
        ],
      ]),
    );
  }
  constructor(t, e, i, s, a, r, n, o, l, h, d) {
    let c = (this._signal = this.#M.signal);
    this.#tu = t;
    this.#tp = e;
    this.#R = i;
    this._eventBus = s;
    s._on("editingaction", this.onEditingAction.bind(this), {
      signal: c,
    });
    s._on("pagechanging", this.onPageChanging.bind(this), {
      signal: c,
    });
    s._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: c,
    });
    s._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: c,
    });
    s._on("setpreference", this.onSetPreference.bind(this), {
      signal: c,
    });
    s._on(
      "switchannotationeditorparams",
      (t) => this.updateParams(t.type, t.value),
      {
        signal: c,
      },
    );
    this.#tm();
    this.#tf();
    this.#tb();
    this.#D = a.annotationStorage;
    this.#V = a.filterFactory;
    this.#to = r;
    this.#X = n || null;
    this.#U = o;
    this.#$ = l;
    this.#G = h;
    this.#ts = d || null;
    this.viewParameters = {
      realScale: G.PDF_TO_CSS_UNITS,
      rotation: 0,
    };
    this.isShiftKeyDown = false;
  }
  destroy() {
    for (let t of (this.#tg?.resolve(),
    (this.#tg = null),
    this.#M?.abort(),
    (this.#M = null),
    (this._signal = null),
    this.#P.values())) {
      t.destroy();
    }
    this.#P.clear();
    this.#I.clear();
    this.#j.clear();
    this.#k = null;
    this.#tr.clear();
    this.#F.destroy();
    this.#R?.destroy();
    this.#Y?.hide();
    this.#Y = null;
    if (this.#W) {
      clearTimeout(this.#W);
      this.#W = null;
    }
    if (this.#tc) {
      clearTimeout(this.#tc);
      this.#tc = null;
    }
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return this.#ts;
  }
  get useNewAltTextFlow() {
    return this.#$;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#G;
  }
  get hcmFilter() {
    return C(
      this,
      "hcmFilter",
      this.#to
        ? this.#V.addHCMFilter(this.#to.foreground, this.#to.background)
        : "none",
    );
  }
  get direction() {
    return C(this, "direction", getComputedStyle(this.#tu).direction);
  }
  get highlightColors() {
    return C(
      this,
      "highlightColors",
      this.#X
        ? new Map(
            this.#X.split(",").map((t) => t.split("=").map((t) => t.trim())),
          )
        : null,
    );
  }
  get highlightColorNames() {
    return C(
      this,
      "highlightColorNames",
      this.highlightColors
        ? new Map(Array.from(this.highlightColors, (t) => t.reverse()))
        : null,
    );
  }
  setMainHighlightColorPicker(t) {
    this.#ti = t;
  }
  editAltText(t, e = false) {
    this.#R?.editAltText(this, t, e);
  }
  switchToMode(mode, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: true,
      signal: this._signal,
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode,
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e,
    });
  }
  onSetPreference({ name, value }) {
    if (name === "enableNewAltTextWhenAddingImage") {
      this.#G = value;
    }
  }
  onPageChanging({ pageNumber }) {
    this.#N = pageNumber - 1;
  }
  focusMainContainer() {
    this.#tu.focus();
  }
  findParent(t, e) {
    for (let i of this.#P.values()) {
      let { x, y, width, height } = i.div.getBoundingClientRect();
      if (t >= x && t <= x + width && e >= y && e <= y + height) {
        return i;
      }
    }
    return null;
  }
  disableUserSelect(t = false) {
    this.#tp.classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    this.#j.add(t);
  }
  removeShouldRescale(t) {
    this.#j.delete(t);
  }
  onScaleChanging({ scale }) {
    for (let e of (this.commitOrRemove(),
    (this.viewParameters.realScale = scale * G.PDF_TO_CSS_UNITS),
    this.#j)) {
      e.onScaleChanging();
    }
  }
  onRotationChanging({ pagesRotation }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #tv({ anchorNode }) {
    if (anchorNode.nodeType === Node.TEXT_NODE) {
      return anchorNode.parentElement;
    }
    return anchorNode;
  }
  #tA(t) {
    let { currentLayer } = this;
    if (currentLayer.hasTextLayer(t)) {
      return currentLayer;
    }
    for (let e of this.#P.values()) {
      if (e.hasTextLayer(t)) {
        return e;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "") {
    let e = document.getSelection();
    if (!e || e.isCollapsed) {
      return;
    }
    let { anchorNode, anchorOffset, focusNode, focusOffset } = e;
    let text = e.toString();
    let o = this.#tv(e).closest(".textLayer");
    let boxes = this.getSelectionBoxes(o);
    if (!boxes) {
      return;
    }
    e.empty();
    let h = this.#tA(o);
    let d = this.#ta === c.NONE;
    let u = () => {
      h?.createAndAddNewEditor(
        {
          x: 0,
          y: 0,
        },
        false,
        {
          methodOfCreation,
          boxes,
          anchorNode,
          anchorOffset,
          focusNode,
          focusOffset,
          text,
        },
      );
      if (d) {
        this.showAllEditors("highlight", true, true);
      }
    };
    if (d) {
      this.switchToMode(c.HIGHLIGHT, u);
    } else {
      u();
    }
  }
  #ty() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) {
      return;
    }
    let e = this.#tv(t).closest(".textLayer");
    let i = this.getSelectionBoxes(e);
    if (i) {
      this.#Y ||= new td(this);
      this.#Y.show(e, i, this.direction === "ltr");
    }
  }
  addToAnnotationStorage(t) {
    if (!(t.isEmpty() || !this.#D || this.#D.has(t.id))) {
      this.#D.setValue(t.id, t);
    }
  }
  #t_() {
    let t = document.getSelection();
    if (!t || t.isCollapsed) {
      if (this.#tn) {
        this.#Y?.hide();
        this.#tn = null;
        this.#tx({
          hasSelectedText: false,
        });
      }
      return;
    }
    let { anchorNode } = t;
    if (anchorNode === this.#tn) {
      return;
    }
    let i = this.#tv(t).closest(".textLayer");
    if (!i) {
      if (this.#tn) {
        this.#Y?.hide();
        this.#tn = null;
        this.#tx({
          hasSelectedText: false,
        });
      }
      return;
    }
    this.#Y?.hide();
    this.#tn = anchorNode;
    this.#tx({
      hasSelectedText: true,
    });
    if (
      (this.#ta === c.HIGHLIGHT || this.#ta === c.NONE) &&
      (this.#ta === c.HIGHLIGHT && this.showAllEditors("highlight", true, true),
      (this.#K = this.isShiftKeyDown),
      !this.isShiftKeyDown)
    ) {
      let t = this.#ta === c.HIGHLIGHT ? this.#tA(i) : null;
      t?.toggleDrawing();
      let e = new AbortController();
      let s = this.combinedSignal(e);
      let a = (i) => {
        if (i.type !== "pointerup" || i.button === 0) {
          e.abort();
          t?.toggleDrawing(true);
          if (i.type === "pointerup") {
            this.#tw("main_toolbar");
          }
        }
      };
      window.addEventListener("pointerup", a, {
        signal: s,
      });
      window.addEventListener("blur", a, {
        signal: s,
      });
    }
  }
  #tw(t = "") {
    if (this.#ta === c.HIGHLIGHT) {
      this.highlightSelection(t);
    } else if (this.#U) {
      this.#ty();
    }
  }
  #tm() {
    document.addEventListener("selectionchange", this.#t_.bind(this), {
      signal: this._signal,
    });
  }
  #tC() {
    if (this.#q) {
      return;
    }
    this.#q = new AbortController();
    let t = this.combinedSignal(this.#q);
    window.addEventListener("focus", this.focus.bind(this), {
      signal: t,
    });
    window.addEventListener("blur", this.blur.bind(this), {
      signal: t,
    });
  }
  #tE() {
    this.#q?.abort();
    this.#q = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#K) {
      this.#K = false;
      this.#tw("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    let { activeElement } = document;
    for (let e of this.#tr) {
      if (e.div.contains(activeElement)) {
        this.#te = [e, activeElement];
        e._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#te) {
      return;
    }
    let [t, e] = this.#te;
    this.#te = null;
    e.addEventListener(
      "focusin",
      () => {
        t._focusEventsAllowed = true;
      },
      {
        once: true,
        signal: this._signal,
      },
    );
    e.focus();
  }
  #tb() {
    if (this.#tt) {
      return;
    }
    this.#tt = new AbortController();
    let t = this.combinedSignal(this.#tt);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: t,
    });
    window.addEventListener("keyup", this.keyup.bind(this), {
      signal: t,
    });
  }
  #tS() {
    this.#tt?.abort();
    this.#tt = null;
  }
  #tT() {
    if (this.#O) {
      return;
    }
    this.#O = new AbortController();
    let t = this.combinedSignal(this.#O);
    document.addEventListener("copy", this.copy.bind(this), {
      signal: t,
    });
    document.addEventListener("cut", this.cut.bind(this), {
      signal: t,
    });
    document.addEventListener("paste", this.paste.bind(this), {
      signal: t,
    });
  }
  #tM() {
    this.#O?.abort();
    this.#O = null;
  }
  #tf() {
    let _signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: _signal,
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal: _signal,
    });
  }
  addEditListeners() {
    this.#tb();
    this.#tT();
  }
  removeEditListeners() {
    this.#tS();
    this.#tM();
  }
  dragOver(t) {
    for (let { type } of t.dataTransfer.items) {
      for (let i of this.#H) {
        if (i.isHandlingMimeForPasting(type)) {
          t.dataTransfer.dropEffect = "copy";
          t.preventDefault();
          return;
        }
      }
    }
  }
  drop(t) {
    for (let e of t.dataTransfer.items) {
      for (let i of this.#H) {
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer);
          t.preventDefault();
          return;
        }
      }
    }
  }
  copy(t) {
    t.preventDefault();
    this.#k?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    let e = [];
    for (let t of this.#tr) {
      let i = t.serialize(true);
      if (i) {
        e.push(i);
      }
    }
    if (e.length !== 0) {
      t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
  }
  cut(t) {
    this.copy(t);
    this.delete();
  }
  async paste(t) {
    t.preventDefault();
    let { clipboardData } = t;
    for (let t of clipboardData.items) {
      for (let e of this.#H) {
        if (e.isHandlingMimeForPasting(t.type)) {
          return void e.paste(t, this.currentLayer);
        }
      }
    }
    let i = clipboardData.getData("application/pdfjs");
    if (!i) {
      return;
    }
    try {
      i = JSON.parse(i);
    } catch (error) {
      y(`paste: "${error.message}".`);
      return;
    }
    if (!Array.isArray(i)) {
      return;
    }
    this.unselectAll();
    let currentLayer = this.currentLayer;
    try {
      let t = [];
      for (let e of i) {
        let i = await currentLayer.deserialize(e);
        if (!i) {
          return;
        }
        t.push(i);
      }
      let e = () => {
        for (let e of t) {
          this.#tk(e);
        }
        this.#tI(t);
      };
      this.addCommands({
        cmd: e,
        undo: () => {
          for (let e of t) {
            e.remove();
          }
        },
        mustExec: true,
      });
    } catch (error) {
      y(`paste: "${error.message}".`);
    }
  }
  keydown(t) {
    if (!(this.isShiftKeyDown || t.key !== "Shift")) {
      this.isShiftKeyDown = true;
    }
    if (!(this.#ta === c.NONE || this.isEditorHandlingKeyboard)) {
      tb._keyboardManager.exec(this, t);
    }
  }
  keyup(t) {
    if (this.isShiftKeyDown && t.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#K) {
        this.#K = false;
        this.#tw("main_toolbar");
      }
    }
  }
  onEditingAction({ name }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
    }
  }
  #tx(t) {
    if (Object.entries(t).some(([t, e]) => this.#th[t] !== e)) {
      this._eventBus.dispatch("annotationeditorstateschanged", {
        source: this,
        details: Object.assign(this.#th, t),
      });
      if (this.#ta === c.HIGHLIGHT && t.hasSelectedEditor === false) {
        this.#tP([[u.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #tP(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details,
    });
  }
  setEditingState(t) {
    if (t) {
      this.#tC();
      this.#tT();
      this.#tx({
        isEditing: this.#ta !== c.NONE,
        isEmpty: this.#tR(),
        hasSomethingToUndo: this.#F.hasSomethingToUndo(),
        hasSomethingToRedo: this.#F.hasSomethingToRedo(),
        hasSelectedEditor: false,
      });
    } else {
      this.#tE();
      this.#tM();
      this.#tx({
        isEditing: false,
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(t) {
    if (!this.#H) {
      for (let e of ((this.#H = t), this.#H)) {
        this.#tP(e.defaultPropertiesToUpdate);
      }
    }
  }
  getId() {
    return this.#Q.id;
  }
  get currentLayer() {
    return this.#P.get(this.#N);
  }
  getLayer(t) {
    return this.#P.get(t);
  }
  get currentPageIndex() {
    return this.#N;
  }
  addLayer(t) {
    this.#P.set(t.pageIndex, t);
    if (this.#J) {
      t.enable();
    } else {
      t.disable();
    }
  }
  removeLayer(t) {
    this.#P.delete(t.pageIndex);
  }
  async updateMode(t, e = null, i = false) {
    if (this.#ta !== t && (!this.#tg || (await this.#tg.promise, this.#tg))) {
      this.#tg = Promise.withResolvers();
      this.#ta = t;
      if (t === c.NONE) {
        this.setEditingState(false);
        this.#tD();
        this.#tg.resolve();
        return;
      }
      for (let e of (this.setEditingState(true),
      await this.#tL(),
      this.unselectAll(),
      this.#P.values())) {
        e.updateMode(t);
      }
      if (!e) {
        if (i) {
          this.addNewEditorFromKeyboard();
        }
        this.#tg.resolve();
        return;
      }
      for (let t of this.#I.values()) {
        if (t.annotationElementId === e) {
          this.setSelected(t);
          t.enterInEditMode();
        } else {
          t.unselect();
        }
      }
      this.#tg.resolve();
    }
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(t) {
    if (t !== this.#ta) {
      this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
      });
    }
  }
  updateParams(t, e) {
    if (this.#H) {
      switch (t) {
        case u.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case u.HIGHLIGHT_DEFAULT_COLOR:
          this.#ti?.updateColor(e);
          break;
        case u.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility",
              },
            },
          });
          (this.#tl ||= new Map()).set(t, e);
          this.showAllEditors("highlight", e);
      }
      for (let i of this.#tr) {
        i.updateParams(t, e);
      }
      for (let i of this.#H) {
        i.updateDefaultParams(t, e);
      }
    }
  }
  showAllEditors(t, e, i = false) {
    for (let i of this.#I.values()) {
      if (i.editorType === t) {
        i.show(e);
      }
    }
    if ((this.#tl?.get(u.HIGHLIGHT_SHOW_ALL) ?? true) !== e) {
      this.#tP([[u.HIGHLIGHT_SHOW_ALL, e]]);
    }
  }
  enableWaiting(t = false) {
    if (this.#Z !== t) {
      for (let e of ((this.#Z = t), this.#P.values())) {
        if (t) {
          e.disableClick();
        } else {
          e.enableClick();
        }
        e.div.classList.toggle("waiting", t);
      }
    }
  }
  async #tL() {
    if (!this.#J) {
      this.#J = true;
      let t = [];
      for (let e of this.#P.values()) {
        t.push(e.enable());
      }
      for (let e of (await Promise.all(t), this.#I.values())) {
        e.enable();
      }
    }
  }
  #tD() {
    this.unselectAll();
    if (this.#J) {
      for (let t of ((this.#J = false), this.#P.values())) {
        t.disable();
      }
      for (let t of this.#I.values()) {
        t.disable();
      }
    }
  }
  getEditors(t) {
    let e = [];
    for (let i of this.#I.values()) {
      if (i.pageIndex === t) {
        e.push(i);
      }
    }
    return e;
  }
  getEditor(t) {
    return this.#I.get(t);
  }
  addEditor(t) {
    this.#I.set(t.id, t);
  }
  removeEditor(t) {
    if (t.div.contains(document.activeElement)) {
      if (this.#W) {
        clearTimeout(this.#W);
      }
      this.#W = setTimeout(() => {
        this.focusMainContainer();
        this.#W = null;
      }, 0);
    }
    this.#I.delete(t.id);
    this.unselect(t);
    if (!(t.annotationElementId && this.#B.has(t.annotationElementId))) {
      this.#D?.remove(t.id);
    }
  }
  addDeletedAnnotationElement(t) {
    this.#B.add(t.annotationElementId);
    this.addChangedExistingAnnotation(t);
    t.deleted = true;
  }
  isDeletedAnnotationElement(t) {
    return this.#B.has(t);
  }
  removeDeletedAnnotationElement(t) {
    this.#B.delete(t.annotationElementId);
    this.removeChangedExistingAnnotation(t);
    t.deleted = false;
  }
  #tk(t) {
    let e = this.#P.get(t.pageIndex);
    if (e) {
      e.addOrRebuild(t);
    } else {
      this.addEditor(t);
      this.addToAnnotationStorage(t);
    }
  }
  setActiveEditor(t) {
    if (this.#k !== t) {
      this.#k = t;
      if (t) {
        this.#tP(t.propertiesToUpdate);
      }
    }
  }
  get #tF() {
    let t = null;
    for (t of this.#tr);
    return t;
  }
  updateUI(t) {
    if (this.#tF === t) {
      this.#tP(t.propertiesToUpdate);
    }
  }
  toggleSelected(t) {
    if (this.#tr.has(t)) {
      this.#tr.delete(t);
      t.unselect();
      this.#tx({
        hasSelectedEditor: this.hasSelection,
      });
      return;
    }
    this.#tr.add(t);
    t.select();
    this.#tP(t.propertiesToUpdate);
    this.#tx({
      hasSelectedEditor: true,
    });
  }
  setSelected(t) {
    for (let e of this.#tr) {
      if (e !== t) {
        e.unselect();
      }
    }
    this.#tr.clear();
    this.#tr.add(t);
    t.select();
    this.#tP(t.propertiesToUpdate);
    this.#tx({
      hasSelectedEditor: true,
    });
  }
  isSelected(t) {
    return this.#tr.has(t);
  }
  get firstSelectedEditor() {
    return this.#tr.values().next().value;
  }
  unselect(t) {
    t.unselect();
    this.#tr.delete(t);
    this.#tx({
      hasSelectedEditor: this.hasSelection,
    });
  }
  get hasSelection() {
    return this.#tr.size !== 0;
  }
  get isEnterHandled() {
    return this.#tr.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#F.undo();
    this.#tx({
      hasSomethingToUndo: this.#F.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#tR(),
    });
  }
  redo() {
    this.#F.redo();
    this.#tx({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#F.hasSomethingToRedo(),
      isEmpty: this.#tR(),
    });
  }
  addCommands(t) {
    this.#F.add(t);
    this.#tx({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#tR(),
    });
  }
  #tR() {
    if (this.#I.size === 0) {
      return true;
    }
    if (this.#I.size === 1) {
      for (let t of this.#I.values()) {
        return t.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    let t = [...this.#tr];
    let e = () => {
      for (let e of t) {
        this.#tk(e);
      }
    };
    this.addCommands({
      cmd: () => {
        for (let e of t) {
          e.remove();
        }
      },
      undo: e,
      mustExec: true,
    });
  }
  commitOrRemove() {
    this.#k?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#k || this.hasSelection;
  }
  #tI(t) {
    for (let t of this.#tr) {
      t.unselect();
    }
    for (let e of (this.#tr.clear(), t)) {
      if (!e.isEmpty()) {
        this.#tr.add(e);
        e.select();
      }
    }
    this.#tx({
      hasSelectedEditor: this.hasSelection,
    });
  }
  selectAll() {
    for (let t of this.#tr) {
      t.commit();
    }
    this.#tI(this.#I.values());
  }
  unselectAll() {
    if (
      (!this.#k || (this.#k.commitOrRemove(), this.#ta === c.NONE)) &&
      this.hasSelection
    ) {
      for (let t of this.#tr) {
        t.unselect();
      }
      this.#tr.clear();
      this.#tx({
        hasSelectedEditor: false,
      });
    }
  }
  translateSelectedEditors(t, e, i = false) {
    if (!i) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#td[0] += t;
    this.#td[1] += e;
    let [s, a] = this.#td;
    let r = [...this.#tr];
    for (let i of (this.#tc && clearTimeout(this.#tc),
    (this.#tc = setTimeout(() => {
      this.#tc = null;
      this.#td[0] = this.#td[1] = 0;
      this.addCommands({
        cmd: () => {
          for (let t of r) {
            if (this.#I.has(t.id)) {
              t.translateInPage(s, a);
            }
          }
        },
        undo: () => {
          for (let t of r) {
            if (this.#I.has(t.id)) {
              t.translateInPage(-s, -a);
            }
          }
        },
        mustExec: false,
      });
    }, 1000)),
    r)) {
      i.translateInPage(t, e);
    }
  }
  setUpDragSession() {
    if (this.hasSelection) {
      for (let t of (this.disableUserSelect(true),
      (this.#z = new Map()),
      this.#tr)) {
        this.#z.set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1,
        });
      }
    }
  }
  endDragSession() {
    if (!this.#z) {
      return false;
    }
    this.disableUserSelect(false);
    let t = this.#z;
    this.#z = null;
    let e = false;
    for (let [{ x, y, pageIndex }, r] of t) {
      r.newX = x;
      r.newY = y;
      r.newPageIndex = pageIndex;
      e ||= x !== r.savedX || y !== r.savedY || pageIndex !== r.savedPageIndex;
    }
    if (!e) {
      return false;
    }
    let i = (t, e, i, s) => {
      if (this.#I.has(t.id)) {
        let a = this.#P.get(s);
        if (a) {
          t._setParentAndPosition(a, e, i);
        } else {
          t.pageIndex = s;
          t.x = e;
          t.y = i;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (let [e, { newX, newY, newPageIndex }] of t) {
          i(e, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (let [e, { savedX, savedY, savedPageIndex }] of t) {
          i(e, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true,
    });
    return true;
  }
  dragSelectedEditors(t, e) {
    if (this.#z) {
      for (let i of this.#z.keys()) {
        i.drag(t, e);
      }
    }
  }
  rebuild(t) {
    if (t.parent === null) {
      let e = this.getLayer(t.pageIndex);
      if (e) {
        e.changeParent(t);
        e.addOrRebuild(t);
      } else {
        this.addEditor(t);
        this.addToAnnotationStorage(t);
        t.rebuild();
      }
    } else {
      t.parent.addOrRebuild(t);
    }
  }
  get isEditorHandlingKeyboard() {
    return (
      this.getActive()?.shouldGetKeyboardEvents() ||
      (this.#tr.size === 1 &&
        this.firstSelectedEditor.shouldGetKeyboardEvents())
    );
  }
  isActive(t) {
    return this.#k === t;
  }
  getActive() {
    return this.#k;
  }
  getMode() {
    return this.#ta;
  }
  get imageManager() {
    return C(this, "imageManager", new tp());
  }
  getSelectionBoxes(t) {
    let e;
    if (!t) {
      return null;
    }
    let i = document.getSelection();
    for (let e = 0, s = i.rangeCount; e < s; e++) {
      if (!t.contains(i.getRangeAt(e).commonAncestorContainer)) {
        return null;
      }
    }
    let { x, y, width, height } = t.getBoundingClientRect();
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        e = (t, e, i, o) => ({
          x: (e - y) / height,
          y: 1 - (t + i - x) / width,
          width: o / height,
          height: i / width,
        });
        break;
      case "180":
        e = (t, e, i, o) => ({
          x: 1 - (t + i - x) / width,
          y: 1 - (e + o - y) / height,
          width: i / width,
          height: o / height,
        });
        break;
      case "270":
        e = (t, e, i, o) => ({
          x: 1 - (e + o - y) / height,
          y: (t - x) / width,
          width: o / height,
          height: i / width,
        });
        break;
      default:
        e = (t, e, i, o) => ({
          x: (t - x) / width,
          y: (e - y) / height,
          width: i / width,
          height: o / height,
        });
    }
    let o = [];
    for (let t = 0, s = i.rangeCount; t < s; t++) {
      let s = i.getRangeAt(t);
      if (!s.collapsed) {
        for (let {
          x: x_1,
          y: y_1,
          width: width_1,
          height: height_1,
        } of s.getClientRects()) {
          if (width_1 !== 0 && height_1 !== 0) {
            o.push(e(x_1, y_1, width_1, height_1));
          }
        }
      }
    }
    if (o.length === 0) {
      return null;
    }
    return o;
  }
  addChangedExistingAnnotation({ annotationElementId, id }) {
    (this.#L ||= new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({ annotationElementId }) {
    this.#L?.delete(annotationElementId);
  }
  renderAnnotationElement(t) {
    let e = this.#L?.get(t.data.id);
    if (!e) {
      return;
    }
    let i = this.#D.getRawValue(e);
    if (i) {
      if (this.#ta !== c.NONE || i.hasBeenModified) {
        i.renderAnnotationElement(t);
      }
    }
  }
}
class tv {
  #o = null;
  #tO = false;
  #tN = null;
  #tB = null;
  #tz = null;
  #tH = null;
  #tj = false;
  #tU = null;
  #r = null;
  #t$ = null;
  #tG = null;
  #tV = false;
  static #tW = null;
  static _l10n = null;
  constructor(t) {
    this.#r = t;
    this.#tV = t._uiManager.useNewAltTextFlow;
    tv.#tW ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label",
    });
  }
  static initialize(t) {
    tv._l10n ??= t;
  }
  async render() {
    let t = (this.#tN = document.createElement("button"));
    t.className = "altText";
    t.tabIndex = "0";
    let e = (this.#tB = document.createElement("span"));
    t.append(e);
    if (this.#tV) {
      t.classList.add("new");
      t.setAttribute("data-l10n-id", tv.#tW.missing);
      e.setAttribute("data-l10n-id", tv.#tW["missing-label"]);
    } else {
      t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    let _signal = this.#r._uiManager._signal;
    t.addEventListener("contextmenu", tt, {
      signal: _signal,
    });
    t.addEventListener("pointerdown", (t) => t.stopPropagation(), {
      signal: _signal,
    });
    let s = (t) => {
      t.preventDefault();
      this.#r._uiManager.editAltText(this.#r);
      if (this.#tV) {
        this.#r._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#tq,
          },
        });
      }
    };
    t.addEventListener("click", s, {
      capture: true,
      signal: _signal,
    });
    t.addEventListener(
      "keydown",
      (e) => {
        if (e.target === t && e.key === "Enter") {
          this.#tj = true;
          s(e);
        }
      },
      {
        signal: _signal,
      },
    );
    await this.#tX();
    return t;
  }
  get #tq() {
    return (
      (this.#o && "added") ||
      (this.#o === null && this.guessedText && "review") ||
      "missing"
    );
  }
  finish() {
    if (this.#tN) {
      this.#tN.focus({
        focusVisible: this.#tj,
      });
      this.#tj = false;
    }
  }
  isEmpty() {
    if (this.#tV) {
      return this.#o === null;
    }
    return !this.#o && !this.#tO;
  }
  hasData() {
    if (this.#tV) {
      return this.#o !== null || !!this.#t$;
    }
    return this.isEmpty();
  }
  get guessedText() {
    return this.#t$;
  }
  async setGuessedText(generatedAltText) {
    if (this.#o === null) {
      this.#t$ = generatedAltText;
      this.#tG = await tv._l10n.get(
        "pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer",
        {
          generatedAltText,
        },
      );
      this.#tX();
    }
  }
  toggleAltTextBadge(t = false) {
    if (!this.#tV || this.#o) {
      this.#tU?.remove();
      this.#tU = null;
      return;
    }
    if (!this.#tU) {
      let t = (this.#tU = document.createElement("div"));
      t.className = "noAltTextBadge";
      this.#r.div.append(t);
    }
    this.#tU.classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = this.#o;
    if (!(t || this.#t$ !== e)) {
      e = this.#tG;
    }
    return {
      altText: e,
      decorative: this.#tO,
      guessedText: this.#t$,
      textWithDisclaimer: this.#tG,
    };
  }
  get data() {
    return {
      altText: this.#o,
      decorative: this.#tO,
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false,
  }) {
    if (guessedText) {
      this.#t$ = guessedText;
      this.#tG = textWithDisclaimer;
    }
    if (this.#o !== altText || this.#tO !== decorative) {
      if (!cancel) {
        this.#o = altText;
        this.#tO = decorative;
      }
      this.#tX();
    }
  }
  toggle(t = false) {
    if (this.#tN) {
      if (!t && this.#tH) {
        clearTimeout(this.#tH);
        this.#tH = null;
      }
      this.#tN.disabled = !t;
    }
  }
  shown() {
    this.#r._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#tq,
      },
    });
  }
  destroy() {
    this.#tN?.remove();
    this.#tN = null;
    this.#tB = null;
    this.#tz = null;
    this.#tU?.remove();
    this.#tU = null;
  }
  async #tX() {
    let t = this.#tN;
    if (!t) {
      return;
    }
    if (this.#tV) {
      t.classList.toggle("done", !!this.#o);
      t.setAttribute("data-l10n-id", tv.#tW[this.#tq]);
      this.#tB?.setAttribute("data-l10n-id", tv.#tW[`${this.#tq}-label`]);
      if (!this.#o) {
        return void this.#tz?.remove();
      }
    } else {
      if (!this.#o && !this.#tO) {
        t.classList.remove("done");
        this.#tz?.remove();
        return;
      }
      t.classList.add("done");
      t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = this.#tz;
    if (!e) {
      this.#tz = e = document.createElement("span");
      e.className = "tooltip";
      e.setAttribute("role", "tooltip");
      e.id = `alt-text-tooltip-${this.#r.id}`;
      let i = this.#r._uiManager._signal;
      i.addEventListener(
        "abort",
        () => {
          clearTimeout(this.#tH);
          this.#tH = null;
        },
        {
          once: true,
        },
      );
      t.addEventListener(
        "mouseenter",
        () => {
          this.#tH = setTimeout(() => {
            this.#tH = null;
            this.#tz.classList.add("show");
            this.#r._reportTelemetry({
              action: "alt_text_tooltip",
            });
          }, 100);
        },
        {
          signal: i,
        },
      );
      t.addEventListener(
        "mouseleave",
        () => {
          if (this.#tH) {
            clearTimeout(this.#tH);
            this.#tH = null;
          }
          this.#tz?.classList.remove("show");
        },
        {
          signal: i,
        },
      );
    }
    if (this.#tO) {
      e.setAttribute(
        "data-l10n-id",
        "pdfjs-editor-alt-text-decorative-tooltip",
      );
    } else {
      e.removeAttribute("data-l10n-id");
      e.textContent = this.#o;
    }
    if (!e.parentNode) {
      t.append(e);
    }
    let i = this.#r.getImageForAltText();
    i?.setAttribute("aria-describedby", e.id);
  }
}
class tA {
  #tK = null;
  #tY = null;
  #o = null;
  #tQ = false;
  #tJ = false;
  #tZ = null;
  #t0 = null;
  #t1 = null;
  #t2 = "";
  #t3 = false;
  #t5 = null;
  #t6 = false;
  #t4 = false;
  #t8 = false;
  #t7 = null;
  #t9 = 0;
  #et = 0;
  #ee = null;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nResizer = null;
  #ei = false;
  #es = tA._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new tf();
  static _zIndex = 1;
  static _telemetryTimeout = 1000;
  static get _resizerKeyboardManager() {
    let _resizeWithKeyboard = tA.prototype._resizeWithKeyboard;
    let tb_TRANSLATE_SMALL = tb.TRANSLATE_SMALL;
    let tb_TRANSLATE_BIG = tb.TRANSLATE_BIG;
    return C(
      this,
      "_resizerKeyboardManager",
      new tm([
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          _resizeWithKeyboard,
          {
            args: [-tb_TRANSLATE_SMALL, 0],
          },
        ],
        [
          ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
          _resizeWithKeyboard,
          {
            args: [-tb_TRANSLATE_BIG, 0],
          },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          _resizeWithKeyboard,
          {
            args: [tb_TRANSLATE_SMALL, 0],
          },
        ],
        [
          ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
          _resizeWithKeyboard,
          {
            args: [tb_TRANSLATE_BIG, 0],
          },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          _resizeWithKeyboard,
          {
            args: [0, -tb_TRANSLATE_SMALL],
          },
        ],
        [
          ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
          _resizeWithKeyboard,
          {
            args: [0, -tb_TRANSLATE_BIG],
          },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          _resizeWithKeyboard,
          {
            args: [0, tb_TRANSLATE_SMALL],
          },
        ],
        [
          ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
          _resizeWithKeyboard,
          {
            args: [0, tb_TRANSLATE_BIG],
          },
        ],
        [["Escape", "mac+Escape"], tA.prototype._stopResizingWithKeyboard],
      ]),
    );
  }
  constructor(t) {
    this.parent = t.parent;
    this.id = t.id;
    this.width = this.height = null;
    this.pageIndex = t.parent.pageIndex;
    this.name = t.name;
    this.div = null;
    this._uiManager = t.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = t.isCentered;
    this._structTreeParentId = null;
    let {
      rotation,
      rawDims: { pageWidth, pageHeight, pageX, pageY },
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation =
      (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    let [n, o] = this.parentDimensions;
    this.x = t.x / n;
    this.y = t.y / o;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return C(
      this,
      "_defaultLineColor",
      this._colorManager.getHexCode("CanvasText"),
    );
  }
  static deleteAnnotationElement(t) {
    let e = new ty({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager,
    });
    e.annotationElementId = t.annotationElementId;
    e.deleted = true;
    e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    tA._l10n ??= t;
    tA._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left",
    });
    if (tA._borderLineWidth !== -1) {
      return;
    }
    let i = getComputedStyle(document.documentElement);
    tA._borderLineWidth =
      parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return false;
  }
  static paste(t, e) {
    _("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#ei;
  }
  set _isDraggable(t) {
    this.#ei = t;
    this.div?.classList.toggle("draggable", t);
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    let [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= (this.height * e) / (2 * t);
        this.y += (this.width * t) / (2 * e);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += (this.height * e) / (2 * t);
        this.y -= (this.width * t) / (2 * e);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#es;
  }
  setParent(t) {
    if (t !== null) {
      this.pageIndex = t.pageIndex;
      this.pageDimensions = t.pageDimensions;
    } else {
      this.#ea();
    }
    this.parent = t;
  }
  focusin(t) {
    if (this._focusEventsAllowed) {
      if (this.#t3) {
        this.#t3 = false;
      } else {
        this.parent.setSelected(this);
      }
    }
  }
  focusout(t) {
    if (!this._focusEventsAllowed || !this.isAttachedToDOM) {
      return;
    }
    let t_relatedTarget = t.relatedTarget;
    if (!t_relatedTarget?.closest(`#${this.id}`)) {
      t.preventDefault();
      if (!this.parent?.isMultipleSelection) {
        this.commitOrRemove();
      }
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, i, s) {
    let [a, r] = this.parentDimensions;
    [i, s] = this.screenToPageTranslation(i, s);
    this.x = (t + i) / a;
    this.y = (e + s) / r;
    this.fixAndSetPosition();
  }
  #er([t, e], i, s) {
    [i, s] = this.screenToPageTranslation(i, s);
    this.x += i / t;
    this.y += s / e;
    this.fixAndSetPosition();
  }
  translate(t, e) {
    this.#er(this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    this.#t5 ||= [this.x, this.y];
    this.#er(this.pageDimensions, t, e);
    this.div.scrollIntoView({
      block: "nearest",
    });
  }
  drag(t, e) {
    this.#t5 ||= [this.x, this.y];
    let [i, s] = this.parentDimensions;
    this.x += t / i;
    this.y += e / s;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      let { x: x_1, y: y_1 } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x_1, y_1)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let { x, y } = this;
    let [n, o] = this.getBaseTranslation();
    x += n;
    y += o;
    this.div.style.left = `${(100 * x).toFixed(2)}%`;
    this.div.style.top = `${(100 * y).toFixed(2)}%`;
    this.div.scrollIntoView({
      block: "nearest",
    });
  }
  get _hasBeenMoved() {
    return !!this.#t5 && (this.#t5[0] !== this.x || this.#t5[1] !== this.y);
  }
  getBaseTranslation() {
    let [t, e] = this.parentDimensions;
    let { _borderLineWidth } = tA;
    let s = _borderLineWidth / t;
    let a = _borderLineWidth / e;
    switch (this.rotation) {
      case 90:
        return [-s, a];
      case 180:
        return [s, a];
      case 270:
        return [s, -a];
      default:
        return [-s, -a];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(t = this.rotation) {
    let [e, i] = this.pageDimensions;
    let { x, y, width, height } = this;
    width *= e;
    height *= i;
    x *= e;
    y *= i;
    if (this._mustFixPosition) {
      switch (t) {
        case 0:
          x = Math.max(0, Math.min(e - width, x));
          y = Math.max(0, Math.min(i - height, y));
          break;
        case 90:
          x = Math.max(0, Math.min(e - height, x));
          y = Math.min(i, Math.max(width, y));
          break;
        case 180:
          x = Math.min(e, Math.max(width, x));
          y = Math.min(i, Math.max(height, y));
          break;
        case 270:
          x = Math.min(e, Math.max(height, x));
          y = Math.max(0, Math.min(i - width, y));
      }
    }
    this.x = x /= e;
    this.y = y /= i;
    let [o, l] = this.getBaseTranslation();
    x += o;
    y += l;
    let { style } = this.div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #en(t, e, i) {
    switch (i) {
      case 90:
        return [e, -t];
      case 180:
        return [-t, -e];
      case 270:
        return [-e, t];
      default:
        return [t, e];
    }
  }
  screenToPageTranslation(t, e) {
    return tA.#en(t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    return tA.#en(t, e, 360 - this.parentRotation);
  }
  #eo(t) {
    switch (t) {
      case 90: {
        let [t, e] = this.pageDimensions;
        return [0, -t / e, e / t, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        let [t, e] = this.pageDimensions;
        return [0, t / e, -e / t, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    let {
      parentScale,
      pageDimensions: [e, i],
    } = this;
    return [e * parentScale, i * parentScale];
  }
  setDims(t, e) {
    let [i, s] = this.parentDimensions;
    this.div.style.width = `${((100 * t) / i).toFixed(2)}%`;
    if (!this.#tJ) {
      this.div.style.height = `${((100 * e) / s).toFixed(2)}%`;
    }
  }
  fixDims() {
    let { style } = this.div;
    let { height, width } = style;
    let s = width.endsWith("%");
    let a = !this.#tJ && height.endsWith("%");
    if (s && a) {
      return;
    }
    let [r, n] = this.parentDimensions;
    if (!s) {
      style.width = `${((100 * parseFloat(width)) / r).toFixed(2)}%`;
    }
    if (!(this.#tJ || a)) {
      style.height = `${((100 * parseFloat(height)) / n).toFixed(2)}%`;
    }
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #el() {
    if (this.#tZ) {
      return;
    }
    this.#tZ = document.createElement("div");
    this.#tZ.classList.add("resizers");
    let t = this._willKeepAspectRatio
      ? ["topLeft", "topRight", "bottomRight", "bottomLeft"]
      : [
          "topLeft",
          "topMiddle",
          "topRight",
          "middleRight",
          "bottomRight",
          "bottomMiddle",
          "bottomLeft",
          "middleLeft",
        ];
    let _signal = this._uiManager._signal;
    for (let i of t) {
      let t = document.createElement("div");
      this.#tZ.append(t);
      t.classList.add("resizer", i);
      t.setAttribute("data-resizer-name", i);
      t.addEventListener("pointerdown", this.#eh.bind(this, i), {
        signal: _signal,
      });
      t.addEventListener("contextmenu", tt, {
        signal: _signal,
      });
      t.tabIndex = -1;
    }
    this.div.prepend(this.#tZ);
  }
  #eh(t, e) {
    e.preventDefault();
    let { isMac } = O.platform;
    if (e.button !== 0 || (e.ctrlKey && isMac)) {
      return;
    }
    this.#o?.toggle(false);
    let _isDraggable = this._isDraggable;
    this._isDraggable = false;
    let a = new AbortController();
    let r = this._uiManager.combinedSignal(a);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#ed.bind(this, t), {
      passive: true,
      capture: true,
      signal: r,
    });
    window.addEventListener("contextmenu", tt, {
      signal: r,
    });
    let n = this.x;
    let o = this.y;
    let width = this.width;
    let height = this.height;
    let cursor = this.parent.div.style.cursor;
    let cursor_1 = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor =
      window.getComputedStyle(e.target).cursor;
    let u = () => {
      a.abort();
      this.parent.togglePointerEvents(true);
      this.#o?.toggle(true);
      this._isDraggable = _isDraggable;
      this.parent.div.style.cursor = cursor;
      this.div.style.cursor = cursor_1;
      this.#ec(n, o, width, height);
    };
    window.addEventListener("pointerup", u, {
      signal: r,
    });
    window.addEventListener("blur", u, {
      signal: r,
    });
  }
  #ec(t, e, i, s) {
    let a = this.x;
    let r = this.y;
    let width = this.width;
    let height = this.height;
    if (a !== t || r !== e || width !== i || height !== s) {
      this.addCommands({
        cmd: () => {
          this.width = width;
          this.height = height;
          this.x = a;
          this.y = r;
          let [t, e] = this.parentDimensions;
          this.setDims(t * width, e * height);
          this.fixAndSetPosition();
        },
        undo: () => {
          this.width = i;
          this.height = s;
          this.x = t;
          this.y = e;
          let [a, r] = this.parentDimensions;
          this.setDims(a * i, r * s);
          this.fixAndSetPosition();
        },
        mustExec: true,
      });
    }
  }
  #ed(t, e) {
    let i;
    let s;
    let a;
    let r;
    let [n, o] = this.parentDimensions;
    let l = this.x;
    let h = this.y;
    let width = this.width;
    let height = this.height;
    let u = tA.MIN_SIZE / n;
    let p = tA.MIN_SIZE / o;
    let g = (t) => Math.round(10000 * t) / 10000;
    let m = this.#eo(this.rotation);
    let f = (t, e) => [m[0] * t + m[2] * e, m[1] * t + m[3] * e];
    let b = this.#eo(360 - this.rotation);
    let v = false;
    let A = false;
    switch (t) {
      case "topLeft":
        v = true;
        i = (t, e) => [0, 0];
        s = (t, e) => [t, e];
        break;
      case "topMiddle":
        i = (t, e) => [t / 2, 0];
        s = (t, e) => [t / 2, e];
        break;
      case "topRight":
        v = true;
        i = (t, e) => [t, 0];
        s = (t, e) => [0, e];
        break;
      case "middleRight":
        A = true;
        i = (t, e) => [t, e / 2];
        s = (t, e) => [0, e / 2];
        break;
      case "bottomRight":
        v = true;
        i = (t, e) => [t, e];
        s = (t, e) => [0, 0];
        break;
      case "bottomMiddle":
        i = (t, e) => [t / 2, e];
        s = (t, e) => [t / 2, 0];
        break;
      case "bottomLeft":
        v = true;
        i = (t, e) => [0, e];
        s = (t, e) => [t, 0];
        break;
      case "middleLeft":
        A = true;
        i = (t, e) => [0, e / 2];
        s = (t, e) => [t, e / 2];
    }
    let y = i(width, height);
    let _ = s(width, height);
    let x = f(..._);
    let w = g(l + x[0]);
    let C = g(h + x[1]);
    let E = 1;
    let S = 1;
    let [T, M] = this.screenToPageTranslation(e.movementX, e.movementY);
    [T, M] =
      ((a = T / n), (r = M / o), [b[0] * a + b[2] * r, b[1] * a + b[3] * r]);
    if (v) {
      let t = Math.hypot(width, height);
      E = S = Math.max(
        Math.min(
          Math.hypot(_[0] - y[0] - T, _[1] - y[1] - M) / t,
          1 / width,
          1 / height,
        ),
        u / width,
        p / height,
      );
    } else {
      if (A) {
        E = Math.max(u, Math.min(1, Math.abs(_[0] - y[0] - T))) / width;
      } else {
        S = Math.max(p, Math.min(1, Math.abs(_[1] - y[1] - M))) / height;
      }
    }
    let k = g(width * E);
    let I = g(height * S);
    let P = w - (x = f(...s(k, I)))[0];
    let R = C - x[1];
    this.width = k;
    this.height = I;
    this.x = P;
    this.y = R;
    this.setDims(n * k, o * I);
    this.fixAndSetPosition();
  }
  altTextFinish() {
    this.#o?.finish();
  }
  async addEditToolbar() {
    if (!(this._editToolbar || this.#t4)) {
      this._editToolbar = new th(this);
      this.div.append(this._editToolbar.render());
      if (this.#o) {
        await this._editToolbar.addAltText(this.#o);
      }
    }
    return this._editToolbar;
  }
  removeEditToolbar() {
    if (this._editToolbar) {
      this._editToolbar.remove();
      this._editToolbar = null;
      this.#o?.destroy();
    }
  }
  addContainer(t) {
    let e = this._editToolbar?.div;
    if (e) {
      e.before(t);
    } else {
      this.div.append(t);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    if (!this.#o) {
      tv.initialize(tA._l10n);
      this.#o = new tv(this);
      if (this.#tK) {
        this.#o.data = this.#tK;
        this.#tK = null;
      }
      await this.addEditToolbar();
    }
  }
  get altTextData() {
    return this.#o?.data;
  }
  set altTextData(t) {
    if (this.#o) {
      this.#o.data = t;
    }
  }
  get guessedAltText() {
    return this.#o?.guessedText;
  }
  async setGuessedAltText(t) {
    await this.#o?.setGuessedText(t);
  }
  serializeAltText(t) {
    return this.#o?.serialize(t);
  }
  hasAltText() {
    return !!this.#o && !this.#o.isEmpty();
  }
  hasAltTextData() {
    return this.#o?.hasData() ?? false;
  }
  render() {
    this.div = document.createElement("div");
    this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    this.div.className = this.name;
    this.div.setAttribute("id", this.id);
    this.div.tabIndex = this.#tQ ? -1 : 0;
    if (!this._isVisible) {
      this.div.classList.add("hidden");
    }
    this.setInForeground();
    this.#eu();
    let [t, e] = this.parentDimensions;
    if (this.parentRotation % 180 != 0) {
      this.div.style.maxWidth = `${((100 * e) / t).toFixed(2)}%`;
      this.div.style.maxHeight = `${((100 * t) / e).toFixed(2)}%`;
    }
    let [i, s] = this.getInitialTranslation();
    this.translate(i, s);
    tc(this, this.div, ["pointerdown"]);
    return this.div;
  }
  pointerdown(t) {
    let { isMac } = O.platform;
    if (t.button !== 0 || (t.ctrlKey && isMac)) {
      t.preventDefault();
    } else {
      this.#t3 = true;
      if (this._isDraggable) {
        this.#ep(t);
      } else {
        this.#eg(t);
      }
    }
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  #eg(t) {
    let { isMac } = O.platform;
    if ((t.ctrlKey && !isMac) || t.shiftKey || (t.metaKey && isMac)) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #ep(t) {
    let { isSelected } = this;
    this._uiManager.setUpDragSession();
    let i = new AbortController();
    let s = this._uiManager.combinedSignal(i);
    if (isSelected) {
      this.div.classList.add("moving");
      this.#t9 = t.clientX;
      this.#et = t.clientY;
      let e = (t) => {
        let { clientX, clientY } = t;
        let [s, a] = this.screenToPageTranslation(
          clientX - this.#t9,
          clientY - this.#et,
        );
        this.#t9 = clientX;
        this.#et = clientY;
        this._uiManager.dragSelectedEditors(s, a);
      };
      window.addEventListener("pointermove", e, {
        passive: true,
        capture: true,
        signal: s,
      });
    }
    let a = () => {
      i.abort();
      if (isSelected) {
        this.div.classList.remove("moving");
      }
      this.#t3 = false;
      if (!this._uiManager.endDragSession()) {
        this.#eg(t);
      }
    };
    window.addEventListener("pointerup", a, {
      signal: s,
    });
    window.addEventListener("blur", a, {
      signal: s,
    });
  }
  moveInDOM() {
    if (this.#t7) {
      clearTimeout(this.#t7);
    }
    this.#t7 = setTimeout(() => {
      this.#t7 = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(t, e, i) {
    t.changeParent(this);
    this.x = e;
    this.y = i;
    this.fixAndSetPosition();
  }
  getRect(t, e, i = this.rotation) {
    let parentScale = this.parentScale;
    let [a, r] = this.pageDimensions;
    let [n, o] = this.pageTranslation;
    let l = t / parentScale;
    let h = e / parentScale;
    let d = this.x * a;
    let c = this.y * r;
    let u = this.width * a;
    let p = this.height * r;
    switch (i) {
      case 0:
        return [d + l + n, r - c - h - p + o, d + l + u + n, r - c - h + o];
      case 90:
        return [d + h + n, r - c + l + o, d + h + p + n, r - c + l + u + o];
      case 180:
        return [d - l - u + n, r - c + h + o, d - l + n, r - c + h + p + o];
      case 270:
        return [d - h - p + n, r - c - l - u + o, d - h + n, r - c - l + o];
      default:
        throw Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    let [i, s, a, r] = t;
    let n = a - i;
    let o = r - s;
    switch (this.rotation) {
      case 0:
        return [i, e - r, n, o];
      case 90:
        return [i, e - s, o, n];
      case 180:
        return [a, e - s, n, o];
      case 270:
        return [a, e - r, o, n];
      default:
        throw Error("Invalid rotation");
    }
  }
  onceAdded() {}
  isEmpty() {
    return false;
  }
  enableEditMode() {
    this.#t4 = true;
  }
  disableEditMode() {
    this.#t4 = false;
  }
  isInEditMode() {
    return this.#t4;
  }
  shouldGetKeyboardEvents() {
    return this.#t8;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  #eu() {
    if (this.#t1 || !this.div) {
      return;
    }
    this.#t1 = new AbortController();
    let t = this._uiManager.combinedSignal(this.#t1);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t,
    });
    this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: t,
    });
  }
  rebuild() {
    this.#eu();
  }
  rotate(t) {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || "",
    };
  }
  serialize(t = false, e = null) {
    _("An editor must be serializable");
  }
  static async deserialize(t, parent, uiManager) {
    let s = new this.prototype.constructor({
      parent,
      id: parent.getNextId(),
      uiManager,
    });
    s.rotation = t.rotation;
    s.#tK = t.accessibilityData;
    let [a, r] = s.pageDimensions;
    let [n, o, l, h] = s.getRectInCurrentCoords(t.rect, r);
    s.x = n / a;
    s.y = o / r;
    s.width = l / a;
    s.height = h / r;
    return s;
  }
  get hasBeenModified() {
    return (
      !!this.annotationElementId && (this.deleted || this.serialize() !== null)
    );
  }
  remove() {
    this.#t1?.abort();
    this.#t1 = null;
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    if (this.#t7) {
      clearTimeout(this.#t7);
      this.#t7 = null;
    }
    this.#ea();
    this.removeEditToolbar();
    if (this.#ee) {
      for (let t of this.#ee.values()) {
        clearTimeout(t);
      }
      this.#ee = null;
    }
    this.parent = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#el();
      this.#tZ.classList.remove("hidden");
      tc(this, this.div, ["keydown"]);
    }
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#t0 = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height,
    };
    let children = this.#tZ.children;
    if (!this.#tY) {
      this.#tY = Array.from(children);
      let t = this.#em.bind(this);
      let i = this.#ef.bind(this);
      let s = this._uiManager._signal;
      for (let e of this.#tY) {
        let a = e.getAttribute("data-resizer-name");
        e.setAttribute("role", "spinbutton");
        e.addEventListener("keydown", t, {
          signal: s,
        });
        e.addEventListener("blur", i, {
          signal: s,
        });
        e.addEventListener("focus", this.#eb.bind(this, a), {
          signal: s,
        });
        e.setAttribute("data-l10n-id", tA._l10nResizer[a]);
      }
    }
    let i = this.#tY[0];
    let s = 0;
    for (let t of children) {
      if (t === i) {
        break;
      }
      s++;
    }
    let a =
      (((360 - this.rotation + this.parentRotation) % 360) / 90) *
      (this.#tY.length / 4);
    if (a !== s) {
      if (a < s) {
        for (let t = 0; t < s - a; t++) {
          this.#tZ.append(this.#tZ.firstChild);
        }
      } else if (a > s) {
        for (let t = 0; t < a - s; t++) {
          this.#tZ.firstChild.before(this.#tZ.lastChild);
        }
      }
      let t = 0;
      for (let i of children) {
        let e = this.#tY[t++].getAttribute("data-resizer-name");
        i.setAttribute("data-l10n-id", tA._l10nResizer[e]);
      }
    }
    this.#ev(0);
    this.#t8 = true;
    this.#tZ.firstChild.focus({
      focusVisible: true,
    });
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  #em(t) {
    tA._resizerKeyboardManager.exec(this, t);
  }
  #ef(t) {
    if (this.#t8 && t.relatedTarget?.parentNode !== this.#tZ) {
      this.#ea();
    }
  }
  #eb(t) {
    this.#t2 = this.#t8 ? t : "";
  }
  #ev(t) {
    if (this.#tY) {
      for (let e of this.#tY) {
        e.tabIndex = t;
      }
    }
  }
  _resizeWithKeyboard(movementX, movementY) {
    if (this.#t8) {
      this.#ed(this.#t2, {
        movementX,
        movementY,
      });
    }
  }
  #ea() {
    this.#t8 = false;
    this.#ev(-1);
    if (this.#t0) {
      let { savedX, savedY, savedWidth, savedHeight } = this.#t0;
      this.#ec(savedX, savedY, savedWidth, savedHeight);
      this.#t0 = null;
    }
  }
  _stopResizingWithKeyboard() {
    this.#ea();
    this.div.focus();
  }
  select() {
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (this._editToolbar) {
      this._editToolbar?.show();
      this.#o?.toggleAltTextBadge(false);
    } else {
      this.addEditToolbar().then(() => {
        if (this.div?.classList.contains("selectedEditor")) {
          this._editToolbar?.show();
        }
      });
    }
  }
  unselect() {
    this.#tZ?.classList.add("hidden");
    this.div?.classList.remove("selectedEditor");
    if (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true,
      });
    }
    this._editToolbar?.hide();
    this.#o?.toggleAltTextBadge(true);
  }
  updateParams(t, e) {}
  disableEditing() {}
  enableEditing() {}
  enterInEditMode() {}
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#t6;
  }
  set isEditing(t) {
    this.#t6 = t;
    if (this.parent) {
      if (t) {
        this.parent.setSelected(this);
        this.parent.setActiveEditor(this);
      } else {
        this.parent.setActiveEditor(null);
      }
    }
  }
  setAspectRatio(t, e) {
    this.#tJ = true;
    let { style } = this.div;
    style.aspectRatio = t / e;
    style.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added",
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = false) {
    if (e) {
      this.#ee ||= new Map();
      let { action } = t;
      let i = this.#ee.get(action);
      if (i) {
        clearTimeout(i);
      }
      i = setTimeout(() => {
        this._reportTelemetry(t);
        this.#ee.delete(action);
        if (this.#ee.size === 0) {
          this.#ee = null;
        }
      }, tA._telemetryTimeout);
      this.#ee.set(action, i);
      return;
    }
    t.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t,
      },
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t);
    this._isVisible = t;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#tQ = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#tQ = true;
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (e) {
      if (e.nodeName === "CANVAS") {
        let t = e;
        (e = document.createElement("div")).classList.add(
          "annotationContent",
          this.editorType,
        );
        t.before(e);
      }
    } else {
      (e = document.createElement("div")).classList.add(
        "annotationContent",
        this.editorType,
      );
      t.container.prepend(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    let { firstChild } = t.container;
    if (
      firstChild?.nodeName === "DIV" &&
      firstChild.classList.contains("annotationContent")
    ) {
      firstChild.remove();
    }
  }
}
class ty extends tA {
  constructor(t) {
    super(t);
    this.annotationElementId = t.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
class t_ {
  constructor(t) {
    this.h1 = t ? 0 | t : 3285377520;
    this.h2 = t ? 0 | t : 3285377520;
  }
  update(t) {
    let e;
    let i;
    if (typeof t === "string") {
      e = new Uint8Array(2 * t.length);
      i = 0;
      for (let s = 0, a = t.length; s < a; s++) {
        let a = t.charCodeAt(s);
        if (a <= 255) {
          e[i++] = a;
        } else {
          e[i++] = a >>> 8;
          e[i++] = 255 & a;
        }
      }
    } else if (ArrayBuffer.isView(t)) {
      i = (e = t.slice()).byteLength;
    } else {
      throw Error("Invalid data format, must be a string or TypedArray.");
    }
    let s = i >> 2;
    let a = i - 4 * s;
    let r = new Uint32Array(e.buffer, 0, s);
    let n = 0;
    let o = 0;
    let l = this.h1;
    let h = this.h2;
    for (let t = 0; t < s; t++) {
      if (1 & t) {
        l ^= n =
          ((461845907 *
            (n =
              ((n =
                ((3432918353 * (n = r[t])) & 4294901760) |
                ((11601 * n) & 65535)) <<
                15) |
              (n >>> 17))) &
            4294901760) |
          ((13715 * n) & 65535);
        l = 5 * (l = (l << 13) | (l >>> 19)) + 3864292196;
      } else {
        h ^= o =
          ((461845907 *
            (o =
              ((o =
                ((3432918353 * (o = r[t])) & 4294901760) |
                ((11601 * o) & 65535)) <<
                15) |
              (o >>> 17))) &
            4294901760) |
          ((13715 * o) & 65535);
        h = 5 * (h = (h << 13) | (h >>> 19)) + 3864292196;
      }
    }
    n = 0;
    switch (a) {
      case 3:
        n ^= e[4 * s + 2] << 16;
      case 2:
        n ^= e[4 * s + 1] << 8;
      case 1:
        n ^= e[4 * s];
        n =
          ((461845907 *
            (n =
              ((n = ((3432918353 * n) & 4294901760) | ((11601 * n) & 65535)) <<
                15) |
              (n >>> 17))) &
            4294901760) |
          ((13715 * n) & 65535);
        if (1 & s) {
          l ^= n;
        } else {
          h ^= n;
        }
    }
    this.h1 = l;
    this.h2 = h;
  }
  hexdigest() {
    let t = this.h1;
    let e = this.h2;
    t ^= e >>> 1;
    e =
      ((4283543511 * e) & 4294901760) |
      (((((e << 16) |
        ((t = ((3981806797 * t) & 4294901760) | ((36045 * t) & 65535)) >>>
          16)) *
        2950163797) &
        4294901760) >>>
        16);
    t ^= e >>> 1;
    e =
      ((3301882366 * e) & 4294901760) |
      (((((e << 16) |
        ((t = ((444984403 * t) & 4294901760) | ((60499 * t) & 65535)) >>> 16)) *
        3120437893) &
        4294901760) >>>
        16);
    return (
      ((t ^= e >>> 1) >>> 0).toString(16).padStart(8, "0") +
      (e >>> 0).toString(16).padStart(8, "0")
    );
  }
}
let tx = Object.freeze({
  map: null,
  hash: "",
  transfer: undefined,
});
class tw {
  #eA = false;
  #ey = null;
  #e_ = new Map();
  constructor() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    let i = this.#e_.get(t);
    if (i === undefined) {
      return e;
    }
    return Object.assign(e, i);
  }
  getRawValue(t) {
    return this.#e_.get(t);
  }
  remove(t) {
    this.#e_.delete(t);
    if (this.#e_.size === 0) {
      this.resetModified();
    }
    if (typeof this.onAnnotationEditor === "function") {
      for (let t of this.#e_.values()) {
        if (t instanceof tA) {
          return;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    let i = this.#e_.get(t);
    let s = false;
    if (i !== undefined) {
      for (let [t, a] of Object.entries(e)) {
        if (i[t] !== a) {
          s = true;
          i[t] = a;
        }
      }
    } else {
      s = true;
      this.#e_.set(t, e);
    }
    if (s) {
      this.#ex();
    }
    if (e instanceof tA && typeof this.onAnnotationEditor === "function") {
      this.onAnnotationEditor(e.constructor._type);
    }
  }
  has(t) {
    return this.#e_.has(t);
  }
  getAll() {
    if (this.#e_.size > 0) {
      return F(this.#e_);
    }
    return null;
  }
  setAll(t) {
    for (let [e, i] of Object.entries(t)) {
      this.setValue(e, i);
    }
  }
  get size() {
    return this.#e_.size;
  }
  #ex() {
    if (!this.#eA) {
      this.#eA = true;
      if (typeof this.onSetModified === "function") {
        this.onSetModified();
      }
    }
  }
  resetModified() {
    if (this.#eA) {
      this.#eA = false;
      if (typeof this.onResetModified === "function") {
        this.onResetModified();
      }
    }
  }
  get print() {
    return new tC(this);
  }
  get serializable() {
    if (this.#e_.size === 0) {
      return tx;
    }
    let t = new Map();
    let e = new t_();
    let i = [];
    let s = Object.create(null);
    let a = false;
    for (let [i, r] of this.#e_) {
      let n = r instanceof tA ? r.serialize(false, s) : r;
      if (n) {
        t.set(i, n);
        e.update(`${i}:${JSON.stringify(n)}`);
        a ||= !!n.bitmap;
      }
    }
    if (a) {
      for (let e of t.values()) {
        if (e.bitmap) {
          i.push(e.bitmap);
        }
      }
    }
    if (t.size > 0) {
      return {
        map: t,
        hash: e.hexdigest(),
        transfer: i,
      };
    }
    return tx;
  }
  get editorStats() {
    let t = null;
    let e = new Map();
    for (let i of this.#e_.values()) {
      if (!(i instanceof tA)) {
        continue;
      }
      let s = i.telemetryFinalData;
      if (!s) {
        continue;
      }
      let { type } = s;
      if (!e.has(type)) {
        e.set(type, Object.getPrototypeOf(i).constructor);
      }
      t ||= Object.create(null);
      let r = (t[type] ||= new Map());
      for (let [t, e] of Object.entries(s)) {
        if (t === "type") {
          continue;
        }
        let i = r.get(t);
        if (!i) {
          i = new Map();
          r.set(t, i);
        }
        let s = i.get(e) ?? 0;
        i.set(e, s + 1);
      }
    }
    for (let [i, s] of e) {
      t[i] = s.computeTelemetryFinalData(t[i]);
    }
    return t;
  }
  resetModifiedIds() {
    this.#ey = null;
  }
  get modifiedIds() {
    if (this.#ey) {
      return this.#ey;
    }
    let t = [];
    for (let e of this.#e_.values()) {
      if (e instanceof tA && e.annotationElementId && e.serialize()) {
        t.push(e.annotationElementId);
      }
    }
    return (this.#ey = {
      ids: new Set(t),
      hash: t.join(","),
    });
  }
}
class tC extends tw {
  #ew;
  constructor(t) {
    super();
    let { map, hash, transfer } = t.serializable;
    let map_1 = structuredClone(
      map,
      transfer
        ? {
            transfer,
          }
        : null,
    );
    this.#ew = {
      map: map_1,
      hash,
      transfer,
    };
  }
  get print() {
    _("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#ew;
  }
  get modifiedIds() {
    return C(this, "modifiedIds", {
      ids: new Set(),
      hash: "",
    });
  }
}
class tE {
  #eC = new Set();
  constructor({ ownerDocument = globalThis.document, styleElement = null }) {
    this._document = ownerDocument;
    this.nativeFontFaces = new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t);
    this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t);
    this._document.fonts.delete(t);
  }
  insertRule(t) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement
        .getElementsByTagName("head")[0]
        .append(this.styleElement);
    }
    let sheet = this.styleElement.sheet;
    sheet.insertRule(t, sheet.cssRules.length);
  }
  clear() {
    for (let t of this.nativeFontFaces) {
      this._document.fonts.delete(t);
    }
    this.nativeFontFaces.clear();
    this.#eC.clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({ systemFontInfo, _inspectFont }) {
    if (!(!systemFontInfo || this.#eC.has(systemFontInfo.loadedName))) {
      x(
        !this.disableFontFace,
        "loadSystemFont shouldn't be called when `disableFontFace` is set.",
      );
      if (this.isFontLoadingAPISupported) {
        let { loadedName, src, style } = systemFontInfo;
        let r = new FontFace(loadedName, src, style);
        this.addNativeFontFace(r);
        try {
          await r.load();
          this.#eC.add(loadedName);
          _inspectFont?.(systemFontInfo);
        } catch {
          y(
            `Cannot load system font: ${systemFontInfo.baseFontName}, installing it could help to improve PDF rendering.`,
          );
          this.removeNativeFontFace(r);
        }
        return;
      }
      _("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || (t.missingFile && !t.systemFontInfo)) {
      return;
    }
    t.attached = true;
    if (t.systemFontInfo) {
      return void (await this.loadSystemFont(t));
    }
    if (this.isFontLoadingAPISupported) {
      let e = t.createNativeFontFace();
      if (e) {
        this.addNativeFontFace(e);
        try {
          await e.loaded;
        } catch (error) {
          y(`Failed to load font '${e.family}': '${error}'.`);
          t.disableFontFace = true;
          throw error;
        }
      }
      return;
    }
    let e = t.createFontFaceRule();
    if (e) {
      this.insertRule(e);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise((resolve) => {
        let i = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    return C(this, "isFontLoadingAPISupported", !!this._document?.fonts);
  }
  get isSyncFontLoadingSupported() {
    let t = false;
    if (o) {
      t = true;
    } else if (
      typeof navigator !== "undefined" &&
      typeof navigator?.userAgent === "string" &&
      /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)
    ) {
      t = true;
    }
    return C(this, "isSyncFontLoadingSupported", t);
  }
  _queueLoadingCallback(t) {
    let { loadingRequests } = this;
    let i = {
      done: false,
      complete: function () {
        x(!i.done, "completeRequest() cannot be called twice.");
        for (
          i.done = true;
          loadingRequests.length > 0 && loadingRequests[0].done;
        ) {
          setTimeout(loadingRequests.shift().callback, 0);
        }
      },
      callback: t,
    };
    loadingRequests.push(i);
    return i;
  }
  get _loadTestFont() {
    return C(
      this,
      "_loadTestFont",
      atob(
        "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==",
      ),
    );
  }
  _prepareFontLoadEvent(t, e) {
    let i;
    let s;
    let a;
    function r(t, e) {
      return (
        (t.charCodeAt(e) << 24) |
        (t.charCodeAt(e + 1) << 16) |
        (t.charCodeAt(e + 2) << 8) |
        (255 & t.charCodeAt(e + 3))
      );
    }
    function n(_loadTestFont, e, i, s) {
      return _loadTestFont.substring(0, e) + s + _loadTestFont.substring(e + i);
    }
    let o = this._document.createElement("canvas");
    o.width = 1;
    o.height = 1;
    let l = o.getContext("2d");
    let h = 0;
    let d = `lt${Date.now()}${this.loadTestFontId++}`;
    let _loadTestFont = this._loadTestFont;
    let u = r((_loadTestFont = n(_loadTestFont, 976, d.length, d)), 16);
    s = 0;
    for (a = d.length - 3; s < a; s += 4) {
      u = (u - 1482184792 + r(d, s)) | 0;
    }
    if (s < d.length) {
      u = (u - 1482184792 + r(d + "XXX", s)) | 0;
    }
    _loadTestFont = n(
      _loadTestFont,
      16,
      4,
      String.fromCharCode(
        ((i = u) >> 24) & 255,
        (i >> 16) & 255,
        (i >> 8) & 255,
        255 & i,
      ),
    );
    let p = `url(data:font/opentype;base64,${btoa(_loadTestFont)});`;
    let g = `@font-face {font-family:"${d}";src:${p}}`;
    this.insertRule(g);
    let m = this._document.createElement("div");
    for (let e of ((m.style.visibility = "hidden"),
    (m.style.width = m.style.height = "10px"),
    (m.style.position = "absolute"),
    (m.style.top = m.style.left = "0px"),
    [t.loadedName, d])) {
      let t = this._document.createElement("span");
      t.textContent = "Hi";
      t.style.fontFamily = e;
      m.append(t);
    }
    this._document.body.append(m);
    (function t(e, i) {
      if (++h > 30) {
        y("Load test font never loaded.");
        i();
        return;
      }
      l.font = "30px " + e;
      l.fillText(".", 0, 20);
      if (l.getImageData(0, 0, 1, 1).data[3] > 0) {
        i();
      } else {
        setTimeout(t.bind(null, e, i));
      }
    })(d, () => {
      m.remove();
      e.complete();
    });
  }
}
class tS {
  constructor(t, { disableFontFace = false, inspectFont = null }) {
    for (let e in ((this.compiledGlyphs = Object.create(null)), t)) {
      this[e] = t[e];
    }
    this.disableFontFace = disableFontFace === true;
    this._inspectFont = inspectFont;
  }
  createNativeFontFace() {
    let t;
    if (!this.data || this.disableFontFace) {
      return null;
    }
    if (this.cssFontInfo) {
      let e = {
        weight: this.cssFontInfo.fontWeight,
      };
      if (this.cssFontInfo.italicAngle) {
        e.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
    } else {
      t = new FontFace(this.loadedName, this.data, {});
    }
    this._inspectFont?.(this);
    return t;
  }
  createFontFaceRule() {
    let t;
    let e;
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let i = `url(data:${this.mimetype};base64,${((t = this.data), Uint8Array.prototype.toBase64 ? t.toBase64() : btoa(D(t)))});`;
    if (this.cssFontInfo) {
      let t = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        t += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${t}src:${i}}`;
    } else {
      e = `@font-face {font-family:"${this.loadedName}";src:${i}}`;
    }
    this._inspectFont?.(this, i);
    return e;
  }
  getPathGenerator(t, e) {
    let i;
    if (this.compiledGlyphs[e] !== undefined) {
      return this.compiledGlyphs[e];
    }
    try {
      i = t.get(this.loadedName + "_path_" + e);
    } catch (error) {
      y(`getPathGenerator - ignoring character: "${error}".`);
    }
    if (!Array.isArray(i) || i.length === 0) {
      return (this.compiledGlyphs[e] = function (t, e) {});
    }
    let s = [];
    for (let t = 0, e = i.length; t < e;) {
      switch (i[t++]) {
        case 0:
          {
            let [e, a, r, n, o, l] = i.slice(t, t + 6);
            s.push((t) => t.bezierCurveTo(e, a, r, n, o, l));
            t += 6;
          }
          break;
        case 1:
          {
            let [e, a] = i.slice(t, t + 2);
            s.push((t) => t.moveTo(e, a));
            t += 2;
          }
          break;
        case 2:
          {
            let [e, a] = i.slice(t, t + 2);
            s.push((t) => t.lineTo(e, a));
            t += 2;
          }
          break;
        case 3:
          {
            let [e, a, r, n] = i.slice(t, t + 4);
            s.push((t) => t.quadraticCurveTo(e, a, r, n));
            t += 4;
          }
          break;
        case 4:
          s.push((t) => t.restore());
          break;
        case 5:
          s.push((t) => t.save());
          break;
        case 6:
          x(
            s.length === 2,
            "Scale command is only valid at the third position.",
          );
          break;
        case 7:
          {
            let [e, a, r, n, o, l] = i.slice(t, t + 6);
            s.push((t) => t.transform(e, a, r, n, o, l));
            t += 6;
          }
          break;
        case 8: {
          let [e, a] = i.slice(t, t + 2);
          s.push((t) => t.translate(e, a));
          t += 2;
        }
      }
    }
    return (this.compiledGlyphs[e] = function (t, e) {
      s[0](t);
      s[1](t);
      t.scale(e, -e);
      for (let e = 2, i = s.length; e < i; e++) {
        s[e](t);
      }
    });
  }
}
class tT {
  #eE = false;
  constructor({ enableHWA = false }) {
    this.#eE = enableHWA;
  }
  create(t, e) {
    if (t <= 0 || e <= 0) {
      throw Error("Invalid canvas size");
    }
    let i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext("2d", {
        willReadFrequently: !this.#eE,
      }),
    };
  }
  reset(t, e, i) {
    if (!t.canvas) {
      throw Error("Canvas is not specified");
    }
    if (e <= 0 || i <= 0) {
      throw Error("Invalid canvas size");
    }
    t.canvas.width = e;
    t.canvas.height = i;
  }
  destroy(t) {
    if (!t.canvas) {
      throw Error("Canvas is not specified");
    }
    t.canvas.width = 0;
    t.canvas.height = 0;
    t.canvas = null;
    t.context = null;
  }
  _createCanvas(t, e) {
    _("Abstract method `_createCanvas` called.");
  }
}
class tM {
  constructor({ baseUrl = null, isCompressed = true }) {
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  async fetch({ name }) {
    if (!this.baseUrl) {
      throw Error(
        "Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.",
      );
    }
    if (!name) {
      throw Error("CMap name must be specified.");
    }
    let e = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e)
      .then((cMapData) => ({
        cMapData,
        isCompressed: this.isCompressed,
      }))
      .catch((t) => {
        throw Error(
          `Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`,
        );
      });
  }
  async _fetch(t) {
    _("Abstract method `_fetch` called.");
  }
}
class tk extends tM {
  async _fetch(t) {
    let e = await V(t, this.isCompressed ? "arraybuffer" : "text");
    if (e instanceof ArrayBuffer) {
      return new Uint8Array(e);
    }
    return L(e);
  }
}
class tI {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, i, s, a) {
    return "none";
  }
  destroy(t = false) {}
}
class tP {
  constructor({ baseUrl = null }) {
    this.baseUrl = baseUrl;
  }
  async fetch({ filename }) {
    if (!this.baseUrl) {
      throw Error(
        "Ensure that the `standardFontDataUrl` API parameter is provided.",
      );
    }
    if (!filename) {
      throw Error("Font filename must be specified.");
    }
    let e = `${this.baseUrl}${filename}`;
    return this._fetch(e).catch((t) => {
      throw Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    _("Abstract method `_fetch` called.");
  }
}
class tR extends tP {
  async _fetch(t) {
    return new Uint8Array(await V(t, "arraybuffer"));
  }
}
if (o) {
  var tD = Promise.withResolvers();
  var tL = null;
  (async () => {
    let canvas;
    let path2d;
    let fs = await import("fs");
    let http = await import("http");
    return new Map(
      Object.entries({
        fs,
        http,
        https: await import("https"),
        url: await import("url"),
        canvas,
        path2d,
      }),
    );
  })().then(
    (t) => {
      tL = t;
      tD.resolve();
    },
    (t) => {
      y(`loadPackages: ${t}`);
      tL = new Map();
      tD.resolve();
    },
  );
}
class tF {
  static get promise() {
    return tD.promise;
  }
  static get(t) {
    return tL?.get(t);
  }
}
async function tO(t) {
  let e = tF.get("fs");
  return new Uint8Array(await e.promises.readFile(t));
}
let tN = "Fill";
let tB = "Stroke";
let tz = "Shading";
function tH(t, _bbox) {
  if (!_bbox) {
    return;
  }
  let i = _bbox[2] - _bbox[0];
  let s = _bbox[3] - _bbox[1];
  let a = new Path2D();
  a.rect(_bbox[0], _bbox[1], i, s);
  t.clip(a);
}
class tj {
  getPattern() {
    _("Abstract method `getPattern` called.");
  }
}
class tU extends tj {
  constructor(t) {
    super();
    this._type = t[1];
    this._bbox = t[2];
    this._colorStops = t[3];
    this._p0 = t[4];
    this._p1 = t[5];
    this._r0 = t[6];
    this._r1 = t[7];
    this.matrix = null;
  }
  _createGradient(t) {
    let e;
    for (let i of (this._type === "axial"
      ? (e = t.createLinearGradient(
          this._p0[0],
          this._p0[1],
          this._p1[0],
          this._p1[1],
        ))
      : this._type === "radial" &&
        (e = t.createRadialGradient(
          this._p0[0],
          this._p0[1],
          this._r0,
          this._p1[0],
          this._p1[1],
          this._r1,
        )),
    this._colorStops)) {
      e.addColorStop(i[0], i[1]);
    }
    return e;
  }
  getPattern(t, e, i, s) {
    let a;
    if (s === tB || s === tN) {
      let r = e.current.getClippedPathBoundingBox(s, tr(t)) || [0, 0, 0, 0];
      let n = Math.ceil(r[2] - r[0]) || 1;
      let o = Math.ceil(r[3] - r[1]) || 1;
      let l = e.cachedCanvases.getCanvas("pattern", n, o);
      let h = l.context;
      h.clearRect(0, 0, h.canvas.width, h.canvas.height);
      h.beginPath();
      h.rect(0, 0, h.canvas.width, h.canvas.height);
      h.translate(-r[0], -r[1]);
      i = B.transform(i, [1, 0, 0, 1, r[0], r[1]]);
      h.transform(...e.baseTransform);
      if (this.matrix) {
        h.transform(...this.matrix);
      }
      tH(h, this._bbox);
      h.fillStyle = this._createGradient(h);
      h.fill();
      a = t.createPattern(l.canvas, "no-repeat");
      let d = new DOMMatrix(i);
      a.setTransform(d);
    } else {
      tH(t, this._bbox);
      a = this._createGradient(t);
    }
    return a;
  }
}
function t$(t, e, i, s, a, r, n, o) {
  let l;
  let h;
  let d;
  let c;
  let u;
  let p;
  let g;
  let m;
  let f;
  let e_coords = e.coords;
  let e_colors = e.colors;
  let t_data = t.data;
  let y = 4 * t.width;
  if (e_coords[i + 1] > e_coords[s + 1]) {
    l = i;
    i = s;
    s = l;
    l = r;
    r = n;
    n = l;
  }
  if (e_coords[s + 1] > e_coords[a + 1]) {
    l = s;
    s = a;
    a = l;
    l = n;
    n = o;
    o = l;
  }
  if (e_coords[i + 1] > e_coords[s + 1]) {
    l = i;
    i = s;
    s = l;
    l = r;
    r = n;
    n = l;
  }
  let _ = (e_coords[i] + e.offsetX) * e.scaleX;
  let x = (e_coords[i + 1] + e.offsetY) * e.scaleY;
  let w = (e_coords[s] + e.offsetX) * e.scaleX;
  let C = (e_coords[s + 1] + e.offsetY) * e.scaleY;
  let E = (e_coords[a] + e.offsetX) * e.scaleX;
  let S = (e_coords[a + 1] + e.offsetY) * e.scaleY;
  if (x >= S) {
    return;
  }
  let T = e_colors[r];
  let M = e_colors[r + 1];
  let k = e_colors[r + 2];
  let I = e_colors[n];
  let P = e_colors[n + 1];
  let R = e_colors[n + 2];
  let D = e_colors[o];
  let L = e_colors[o + 1];
  let F = e_colors[o + 2];
  let O = Math.round(x);
  let N = Math.round(S);
  for (let t = O; t <= N; t++) {
    let e;
    if (t < C) {
      let e = t < x ? 0 : (x - t) / (x - C);
      h = _ - (_ - w) * e;
      d = T - (T - I) * e;
      c = M - (M - P) * e;
      u = k - (k - R) * e;
    } else {
      let e;
      h = w - (w - E) * (e = t > S ? 1 : C === S ? 0 : (C - t) / (C - S));
      d = I - (I - D) * e;
      c = P - (P - L) * e;
      u = R - (R - F) * e;
    }
    p = _ - (_ - E) * (e = t < x ? 0 : t > S ? 1 : (x - t) / (x - S));
    g = T - (T - D) * e;
    m = M - (M - L) * e;
    f = k - (k - F) * e;
    let i = Math.round(Math.min(h, p));
    let s = Math.round(Math.max(h, p));
    let a = y * t + 4 * i;
    for (let t = i; t <= s; t++) {
      if ((e = (h - t) / (h - p)) < 0) {
        e = 0;
      } else if (e > 1) {
        e = 1;
      }
      t_data[a++] = (d - (d - g) * e) | 0;
      t_data[a++] = (c - (c - m) * e) | 0;
      t_data[a++] = (u - (u - f) * e) | 0;
      t_data[a++] = 255;
    }
  }
}
class tG extends tj {
  constructor(t) {
    super();
    this._coords = t[2];
    this._colors = t[3];
    this._figures = t[4];
    this._bounds = t[5];
    this._bbox = t[7];
    this._background = t[8];
    this.matrix = null;
  }
  _createMeshCanvas(t, e, i) {
    let s = Math.floor(this._bounds[0]);
    let a = Math.floor(this._bounds[1]);
    let r = Math.ceil(this._bounds[2]) - s;
    let n = Math.ceil(this._bounds[3]) - a;
    let o = Math.min(Math.ceil(Math.abs(r * t[0] * 1.1)), 3000);
    let l = Math.min(Math.ceil(Math.abs(n * t[1] * 1.1)), 3000);
    let scaleX = r / o;
    let scaleY = n / l;
    let c = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -s,
      offsetY: -a,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY,
    };
    let u = o + 4;
    let p = l + 4;
    let g = i.getCanvas("mesh", u, p);
    let g_context = g.context;
    let f = g_context.createImageData(o, l);
    if (e) {
      let t = f.data;
      for (let i = 0, s = t.length; i < s; i += 4) {
        t[i] = e[0];
        t[i + 1] = e[1];
        t[i + 2] = e[2];
        t[i + 3] = 255;
      }
    }
    for (let t of this._figures) {
      ((t, e, i) => {
        let s;
        let a;
        let e_coords = e.coords;
        let e_colors = e.colors;
        switch (e.type) {
          case "lattice":
            let o = e.verticesPerRow;
            let l = Math.floor(e_coords.length / o) - 1;
            let h = o - 1;
            for (s = 0; s < l; s++) {
              let e = s * o;
              for (let s = 0; s < h; s++, e++) {
                t$(
                  t,
                  i,
                  e_coords[e],
                  e_coords[e + 1],
                  e_coords[e + o],
                  e_colors[e],
                  e_colors[e + 1],
                  e_colors[e + o],
                );
                t$(
                  t,
                  i,
                  e_coords[e + o + 1],
                  e_coords[e + 1],
                  e_coords[e + o],
                  e_colors[e + o + 1],
                  e_colors[e + 1],
                  e_colors[e + o],
                );
              }
            }
            break;
          case "triangles":
            s = 0;
            for (a = e_coords.length; s < a; s += 3) {
              t$(
                t,
                i,
                e_coords[s],
                e_coords[s + 1],
                e_coords[s + 2],
                e_colors[s],
                e_colors[s + 1],
                e_colors[s + 2],
              );
            }
            break;
          default:
            throw Error("illegal figure");
        }
      })(f, t, c);
    }
    g_context.putImageData(f, 2, 2);
    return {
      canvas: g.canvas,
      offsetX: s - 2 * scaleX,
      offsetY: a - 2 * scaleY,
      scaleX,
      scaleY,
    };
  }
  getPattern(t, e, i, s) {
    let a;
    tH(t, this._bbox);
    if (s === tz) {
      a = B.singularValueDecompose2dScale(tr(t));
    } else {
      a = B.singularValueDecompose2dScale(e.baseTransform);
      if (this.matrix) {
        let t = B.singularValueDecompose2dScale(this.matrix);
        a = [a[0] * t[0], a[1] * t[1]];
      }
    }
    let r = this._createMeshCanvas(
      a,
      s === tz ? null : this._background,
      e.cachedCanvases,
    );
    if (s !== tz) {
      t.setTransform(...e.baseTransform);
      if (this.matrix) {
        t.transform(...this.matrix);
      }
    }
    t.translate(r.offsetX, r.offsetY);
    t.scale(r.scaleX, r.scaleY);
    return t.createPattern(r.canvas, "no-repeat");
  }
}
class tV extends tj {
  getPattern() {
    return "hotpink";
  }
}
class tW {
  static MAX_PATTERN_SIZE = 3000;
  constructor(t, e, i, s, a) {
    this.operatorList = t[2];
    this.matrix = t[3];
    this.bbox = t[4];
    this.xstep = t[5];
    this.ystep = t[6];
    this.paintType = t[7];
    this.tilingType = t[8];
    this.color = e;
    this.ctx = i;
    this.canvasGraphicsFactory = s;
    this.baseTransform = a;
  }
  createPatternCanvas(t) {
    let {
      bbox,
      operatorList,
      paintType,
      tilingType,
      color,
      canvasGraphicsFactory,
    } = this;
    let { xstep, ystep } = this;
    xstep = Math.abs(xstep);
    ystep = Math.abs(ystep);
    A("TilingType: " + tilingType);
    let h = bbox[0];
    let d = bbox[1];
    let c = bbox[2];
    let u = bbox[3];
    let p = c - h;
    let g = u - d;
    let m = B.singularValueDecompose2dScale(this.matrix);
    let f = B.singularValueDecompose2dScale(this.baseTransform);
    let b = m[0] * f[0];
    let v = m[1] * f[1];
    let y = p;
    let _ = g;
    let x = false;
    let w = false;
    let C = Math.ceil(ystep * v);
    let E = Math.ceil(g * v);
    if (Math.ceil(xstep * b) >= Math.ceil(p * b)) {
      y = xstep;
    } else {
      x = true;
    }
    if (C >= E) {
      _ = ystep;
    } else {
      w = true;
    }
    let S = this.getSizeAndScale(y, this.ctx.canvas.width, b);
    let T = this.getSizeAndScale(_, this.ctx.canvas.height, v);
    let M = t.cachedCanvases.getCanvas("pattern", S.size, T.size);
    let M_context = M.context;
    let I = canvasGraphicsFactory.createCanvasGraphics(M_context);
    I.groupLevel = t.groupLevel;
    this.setFillAndStrokeStyleToContext(I, paintType, color);
    M_context.translate(-S.scale * h, -T.scale * d);
    I.transform(S.scale, 0, 0, T.scale, 0, 0);
    M_context.save();
    this.clipBbox(I, h, d, c, u);
    I.baseTransform = tr(I.ctx);
    I.executeOperatorList(operatorList);
    I.endDrawing();
    M_context.restore();
    if (x || w) {
      let e = M.canvas;
      if (x) {
        y = xstep;
      }
      if (w) {
        _ = ystep;
      }
      let i = this.getSizeAndScale(y, this.ctx.canvas.width, b);
      let s = this.getSizeAndScale(_, this.ctx.canvas.height, v);
      let a = i.size;
      let r = s.size;
      let n = t.cachedCanvases.getCanvas("pattern-workaround", a, r);
      let c = n.context;
      let u = x ? Math.floor(p / xstep) : 0;
      let m = w ? Math.floor(g / ystep) : 0;
      for (let t = 0; t <= u; t++) {
        for (let i = 0; i <= m; i++) {
          c.drawImage(e, a * t, r * i, a, r, 0, 0, a, r);
        }
      }
      return {
        canvas: n.canvas,
        scaleX: i.scale,
        scaleY: s.scale,
        offsetX: h,
        offsetY: d,
      };
    }
    return {
      canvas: M.canvas,
      scaleX: S.scale,
      scaleY: T.scale,
      offsetX: h,
      offsetY: d,
    };
  }
  getSizeAndScale(t, e, scale) {
    let s = Math.max(tW.MAX_PATTERN_SIZE, e);
    let size = Math.ceil(t * scale);
    if (size >= s) {
      size = s;
    } else {
      scale = size / t;
    }
    return {
      scale,
      size,
    };
  }
  clipBbox(t, e, i, s, a) {
    let r = s - e;
    let n = a - i;
    t.ctx.rect(e, i, r, n);
    t.current.updateRectMinMax(tr(t.ctx), [e, i, s, a]);
    t.clip();
    t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, i) {
    let t_ctx = t.ctx;
    let t_current = t.current;
    switch (e) {
      case 1:
        let r = this.ctx;
        t_ctx.fillStyle = r.fillStyle;
        t_ctx.strokeStyle = r.strokeStyle;
        t_current.fillColor = r.fillStyle;
        t_current.strokeColor = r.strokeStyle;
        break;
      case 2:
        let n = B.makeHexColor(i[0], i[1], i[2]);
        t_ctx.fillStyle = n;
        t_ctx.strokeStyle = n;
        t_current.fillColor = n;
        t_current.strokeColor = n;
        break;
      default:
        throw new P(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, i, s) {
    let a = i;
    if (s !== tz) {
      a = B.transform(a, e.baseTransform);
      if (this.matrix) {
        a = B.transform(a, this.matrix);
      }
    }
    let r = this.createPatternCanvas(e);
    let n = new DOMMatrix(a);
    n = (n = n.translate(r.offsetX, r.offsetY)).scale(
      1 / r.scaleX,
      1 / r.scaleY,
    );
    let o = t.createPattern(r.canvas, "repeat");
    o.setTransform(n);
    return o;
  }
}
class tq {
  constructor(t) {
    this.canvasFactory = t;
    this.cache = Object.create(null);
  }
  getCanvas(t, e, i) {
    let s;
    if (this.cache[t] !== undefined) {
      s = this.cache[t];
      this.canvasFactory.reset(s, e, i);
    } else {
      s = this.canvasFactory.create(e, i);
      this.cache[t] = s;
    }
    return s;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (let t in this.cache) {
      let e = this.cache[t];
      this.canvasFactory.destroy(e);
      delete this.cache[t];
    }
  }
}
function tX(t, e, i, s, a, r, n, o, l, h) {
  let [d, c, u, p, g, m] = tr(t);
  if (c === 0 && u === 0) {
    let f = Math.round(n * d + g);
    let b = Math.round(o * p + m);
    let v = Math.abs(Math.round((n + l) * d + g) - f) || 1;
    let A = Math.abs(Math.round((o + h) * p + m) - b) || 1;
    t.setTransform(Math.sign(d), 0, 0, Math.sign(p), f, b);
    t.drawImage(e, i, s, a, r, 0, 0, v, A);
    t.setTransform(d, c, u, p, g, m);
    return [v, A];
  }
  if (d === 0 && p === 0) {
    let f = Math.round(o * u + g);
    let b = Math.round(n * c + m);
    let v = Math.abs(Math.round((o + h) * u + g) - f) || 1;
    let A = Math.abs(Math.round((n + l) * c + m) - b) || 1;
    t.setTransform(0, Math.sign(c), Math.sign(u), 0, f, b);
    t.drawImage(e, i, s, a, r, 0, 0, A, v);
    t.setTransform(d, c, u, p, g, m);
    return [A, v];
  }
  t.drawImage(e, i, s, a, r, n, o, l, h);
  return [Math.hypot(d, c) * l, Math.hypot(u, p) * h];
}
class tK {
  constructor(t, e) {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = l;
    this.textMatrixScale = 1;
    this.fontMatrix = h;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = 0;
    this.textRise = 0;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.transferMaps = "none";
    this.startNewPathAndClipBox([0, 0, t, e]);
  }
  clone() {
    let t = Object.create(this);
    t.clipBox = this.clipBox.slice();
    return t;
  }
  setCurrentPoint(t, e) {
    this.x = t;
    this.y = e;
  }
  updatePathMinMax(t, e, i) {
    [e, i] = B.applyTransform([e, i], t);
    this.minX = Math.min(this.minX, e);
    this.minY = Math.min(this.minY, i);
    this.maxX = Math.max(this.maxX, e);
    this.maxY = Math.max(this.maxY, i);
  }
  updateRectMinMax(t, e) {
    let i = B.applyTransform(e, t);
    let s = B.applyTransform(e.slice(2), t);
    let a = B.applyTransform([e[0], e[3]], t);
    let r = B.applyTransform([e[2], e[1]], t);
    this.minX = Math.min(this.minX, i[0], s[0], a[0], r[0]);
    this.minY = Math.min(this.minY, i[1], s[1], a[1], r[1]);
    this.maxX = Math.max(this.maxX, i[0], s[0], a[0], r[0]);
    this.maxY = Math.max(this.maxY, i[1], s[1], a[1], r[1]);
  }
  updateScalingPathMinMax(t, e) {
    B.scaleMinMax(t, e);
    this.minX = Math.min(this.minX, e[0]);
    this.minY = Math.min(this.minY, e[1]);
    this.maxX = Math.max(this.maxX, e[2]);
    this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(t, e, i, s, a, r, n, o, l, h) {
    let d = B.bezierBoundingBox(e, i, s, a, r, n, o, l, h);
    if (!h) {
      this.updateRectMinMax(t, d);
    }
  }
  getPathBoundingBox(t = tN, e = null) {
    let i = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === tB) {
      if (!e) {
        _("Stroke bounding box must include transform.");
      }
      let t = B.singularValueDecompose2dScale(e);
      let s = (t[0] * this.lineWidth) / 2;
      let a = (t[1] * this.lineWidth) / 2;
      i[0] -= s;
      i[1] -= a;
      i[2] += s;
      i[3] += a;
    }
    return i;
  }
  updateClipFromPath() {
    let t = B.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return Infinity === this.minX;
  }
  startNewPathAndClipBox(t) {
    this.clipBox = t;
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = 0;
    this.maxY = 0;
  }
  getClippedPathBoundingBox(t = tN, e = null) {
    return B.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function tY(t, e) {
  let i;
  let s;
  let a;
  let r;
  if (typeof ImageData !== "undefined" && e instanceof ImageData) {
    return void t.putImageData(e, 0, 0);
  }
  let e_height = e.height;
  let e_width = e.width;
  let l = e_height % 16;
  let h = (e_height - l) / 16;
  let d = l === 0 ? h : h + 1;
  let c = t.createImageData(e_width, 16);
  let u = 0;
  let p;
  let e_data = e.data;
  let c_data = c.data;
  if (e.kind === g.GRAYSCALE_1BPP) {
    let e = e_data.byteLength;
    let r = new Uint32Array(c_data.buffer, 0, c_data.byteLength >> 2);
    let n = r.length;
    let g = (e_width + 7) >> 3;
    let b = O.isLittleEndian ? 4278190080 : 255;
    for (i = 0; i < d; i++) {
      a = i < h ? 16 : l;
      p = 0;
      for (s = 0; s < a; s++) {
        let t = e - u;
        let i = 0;
        let s = t > g ? e_width : 8 * t - 7;
        let a = -8 & s;
        let n = 0;
        let l = 0;
        for (; i < a; i += 8) {
          l = e_data[u++];
          r[p++] = 128 & l ? 4294967295 : b;
          r[p++] = 64 & l ? 4294967295 : b;
          r[p++] = 32 & l ? 4294967295 : b;
          r[p++] = 16 & l ? 4294967295 : b;
          r[p++] = 8 & l ? 4294967295 : b;
          r[p++] = 4 & l ? 4294967295 : b;
          r[p++] = 2 & l ? 4294967295 : b;
          r[p++] = 1 & l ? 4294967295 : b;
        }
        for (; i < s; i++) {
          if (n === 0) {
            l = e_data[u++];
            n = 128;
          }
          r[p++] = l & n ? 4294967295 : b;
          n >>= 1;
        }
      }
      while (p < n) {
        r[p++] = 0;
      }
      t.putImageData(c, 0, 16 * i);
    }
  } else if (e.kind === g.RGBA_32BPP) {
    s = 0;
    r = 16 * e_width * 4;
    for (i = 0; i < h; i++) {
      c_data.set(e_data.subarray(u, u + r));
      u += r;
      t.putImageData(c, 0, s);
      s += 16;
    }
    if (i < d) {
      r = e_width * l * 4;
      c_data.set(e_data.subarray(u, u + r));
      t.putImageData(c, 0, s);
    }
  } else if (e.kind === g.RGB_24BPP) {
    r = e_width * (a = 16);
    for (i = 0; i < d; i++) {
      if (i >= h) {
        r = e_width * (a = l);
      }
      p = 0;
      for (s = r; s--;) {
        c_data[p++] = e_data[u++];
        c_data[p++] = e_data[u++];
        c_data[p++] = e_data[u++];
        c_data[p++] = 255;
      }
      t.putImageData(c, 0, 16 * i);
    }
  } else {
    throw Error(`bad image kind: ${e.kind}`);
  }
}
function tQ(t, e) {
  if (e.bitmap) {
    return void t.drawImage(e.bitmap, 0, 0);
  }
  let e_height = e.height;
  let e_width = e.width;
  let a = e_height % 16;
  let r = (e_height - a) / 16;
  let n = a === 0 ? r : r + 1;
  let o = t.createImageData(e_width, 16);
  let srcPos = 0;
  let e_data = e.data;
  let o_data = o.data;
  for (let e = 0; e < n; e++) {
    let i = e < r ? 16 : a;
    ({ srcPos } = (({
      src,
      srcPos = 0,
      dest,
      width,
      height,
      nonBlackColor = 4294967295,
      inverseDecode = false,
    }) => {
      let o = O.isLittleEndian ? 4278190080 : 255;
      let [l, h] = inverseDecode ? [nonBlackColor, o] : [o, nonBlackColor];
      let d = width >> 3;
      let c = 7 & width;
      let src_length = src.length;
      dest = new Uint32Array(dest.buffer);
      let destPos = 0;
      for (let s = 0; s < height; s++) {
        for (let s = srcPos + d; srcPos < s; srcPos++) {
          let s = srcPos < src_length ? src[srcPos] : 255;
          dest[destPos++] = 128 & s ? h : l;
          dest[destPos++] = 64 & s ? h : l;
          dest[destPos++] = 32 & s ? h : l;
          dest[destPos++] = 16 & s ? h : l;
          dest[destPos++] = 8 & s ? h : l;
          dest[destPos++] = 4 & s ? h : l;
          dest[destPos++] = 2 & s ? h : l;
          dest[destPos++] = 1 & s ? h : l;
        }
        if (c === 0) {
          continue;
        }
        let s = srcPos < src_length ? src[srcPos++] : 255;
        for (let t = 0; t < c; t++) {
          dest[destPos++] = s & (1 << (7 - t)) ? h : l;
        }
      }
      return {
        srcPos,
        destPos,
      };
    })({
      src: e_data,
      srcPos,
      dest: o_data,
      width: e_width,
      height: i,
      nonBlackColor: 0,
    }));
    t.putImageData(o, 0, 16 * e);
  }
}
function tJ(t, e) {
  for (let i of [
    "strokeStyle",
    "fillStyle",
    "fillRule",
    "globalAlpha",
    "lineWidth",
    "lineCap",
    "lineJoin",
    "miterLimit",
    "globalCompositeOperation",
    "font",
    "filter",
  ]) {
    if (t[i] !== undefined) {
      e[i] = t[i];
    }
  }
  if (t.setLineDash !== undefined) {
    e.setLineDash(t.getLineDash());
    e.lineDashOffset = t.lineDashOffset;
  }
}
function tZ(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== undefined) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  if (!o) {
    let { filter } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
  }
}
function t0(t, interpolate) {
  if (interpolate) {
    return true;
  }
  let i = B.singularValueDecompose2dScale(t);
  i[0] = Math.fround(i[0]);
  i[1] = Math.fround(i[1]);
  let s = Math.fround((globalThis.devicePixelRatio || 1) * G.PDF_TO_CSS_UNITS);
  return i[0] <= s && i[1] <= s;
}
let t1 = ["butt", "round", "square"];
let t2 = ["miter", "round", "bevel"];
let t3 = {};
let t5 = {};
class t6 {
  constructor(
    t,
    e,
    i,
    s,
    a,
    { optionalContentConfig, markedContentStack = null },
    o,
    l,
  ) {
    this.ctx = t;
    this.current = new tK(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = e;
    this.objs = i;
    this.canvasFactory = s;
    this.filterFactory = a;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new tq(this.canvasFactory);
    this.cachedPatterns = new Map();
    this.annotationCanvasMap = o;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = l;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = new Map();
  }
  getObject(t, e = null) {
    if (typeof t === "string") {
      if (t.startsWith("g_")) {
        return this.commonObjs.get(t);
      }
      return this.objs.get(t);
    }
    return e;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null,
  }) {
    let width = this.ctx.canvas.width;
    let height = this.ctx.canvas.height;
    let fillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = fillStyle;
    if (transparency) {
      let t = this.cachedCanvases.getCanvas("transparent", width, height);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = t.canvas;
      this.ctx = t.context;
      this.ctx.save();
      this.ctx.transform(...tr(this.compositeCtx));
    }
    this.ctx.save();
    tZ(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = tr(this.ctx);
  }
  executeOperatorList(t, e, i, s) {
    let a;
    let t_argsArray = t.argsArray;
    let t_fnArray = t.fnArray;
    let o = e || 0;
    let r_length = t_argsArray.length;
    if (r_length === o) {
      return o;
    }
    let h = r_length - o > 10 && typeof i === "function";
    let d = h ? Date.now() + 15 : 0;
    let c = 0;
    let commonObjs = this.commonObjs;
    let objs = this.objs;
    while (true) {
      if (s !== undefined && o === s.nextBreakPoint) {
        s.breakIt(o, i);
        return o;
      }
      if ((a = t_fnArray[o]) !== f.dependency) {
        this[a].apply(this, t_argsArray[o]);
      } else {
        for (let t of t_argsArray[o]) {
          let e = t.startsWith("g_") ? commonObjs : objs;
          if (!e.has(t)) {
            e.get(t, i);
            return o;
          }
        }
      }
      if (++o === r_length) {
        return o;
      }
      if (h && ++c > 10) {
        if (Date.now() > d) {
          i();
          return o;
        }
        c = 0;
      }
    }
  }
  #eS() {
    while (this.stateStack.length || this.inSMaskMode) {
      this.restore();
    }
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  endDrawing() {
    for (let t of (this.#eS(),
    this.cachedCanvases.clear(),
    this.cachedPatterns.clear(),
    this._cachedBitmapsMap.values())) {
      for (let e of t.values()) {
        if (
          typeof HTMLCanvasElement !== "undefined" &&
          e instanceof HTMLCanvasElement
        ) {
          e.width = e.height = 0;
        }
      }
      t.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#eT();
  }
  #eT() {
    if (this.pageColors) {
      let t = this.filterFactory.addHCMFilter(
        this.pageColors.foreground,
        this.pageColors.background,
      );
      if (t !== "none") {
        let e = this.ctx.filter;
        this.ctx.filter = t;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = e;
      }
    }
  }
  _scaleImage(img, e) {
    let i;
    let s;
    let a = img.width ?? img.displayWidth;
    let r = img.height ?? img.displayHeight;
    let n = Math.max(Math.hypot(e[0], e[1]), 1);
    let o = Math.max(Math.hypot(e[2], e[3]), 1);
    let paintWidth = a;
    let paintHeight = r;
    let d = "prescale1";
    while ((n > 2 && paintWidth > 1) || (o > 2 && paintHeight > 1)) {
      let e = paintWidth;
      let a = paintHeight;
      if (n > 2 && paintWidth > 1) {
        e =
          paintWidth >= 16384
            ? Math.floor(paintWidth / 2) - 1 || 1
            : Math.ceil(paintWidth / 2);
        n /= paintWidth / e;
      }
      if (o > 2 && paintHeight > 1) {
        a =
          paintHeight >= 16384
            ? Math.floor(paintHeight / 2) - 1 || 1
            : Math.ceil(paintHeight) / 2;
        o /= paintHeight / a;
      }
      (s = (i = this.cachedCanvases.getCanvas(d, e, a)).context).clearRect(
        0,
        0,
        e,
        a,
      );
      s.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, e, a);
      img = i.canvas;
      paintWidth = e;
      paintHeight = a;
      d = d === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img,
      paintWidth,
      paintHeight,
    };
  }
  _createMaskCanvas(t) {
    let e;
    let i;
    let s;
    let a;
    let ctx = this.ctx;
    let { width, height } = t;
    let fillColor = this.current.fillColor;
    let patternFill = this.current.patternFill;
    let d = tr(ctx);
    if ((t.bitmap || t.data) && t.count > 1) {
      let a = t.bitmap || t.data.buffer;
      i = JSON.stringify(patternFill ? d : [d.slice(0, 4), fillColor]);
      if (!(e = this._cachedBitmapsMap.get(a))) {
        e = new Map();
        this._cachedBitmapsMap.set(a, e);
      }
      let r = e.get(i);
      if (r && !patternFill) {
        return {
          canvas: r,
          offsetX: Math.round(Math.min(d[0], d[2]) + d[4]),
          offsetY: Math.round(Math.min(d[1], d[3]) + d[5]),
        };
      }
      s = r;
    }
    if (!s) {
      tQ(
        (a = this.cachedCanvases.getCanvas("maskCanvas", width, height))
          .context,
        t,
      );
    }
    let c = B.transform(d, [1 / width, 0, 0, -1 / height, 0, 0]);
    c = B.transform(c, [1, 0, 0, 1, 0, -height]);
    let [u, p, g, m] = B.getAxialAlignedBoundingBox([0, 0, width, height], c);
    let f = Math.round(g - u) || 1;
    let b = Math.round(m - p) || 1;
    let v = this.cachedCanvases.getCanvas("fillCanvas", f, b);
    let v_context = v.context;
    v_context.translate(-u, -p);
    v_context.transform(...c);
    if (!s) {
      s = (s = this._scaleImage(a.canvas, tn(v_context))).img;
      if (e && patternFill) {
        e.set(i, s);
      }
    }
    v_context.imageSmoothingEnabled = t0(tr(v_context), t.interpolate);
    tX(v_context, s, 0, 0, s.width, s.height, 0, 0, width, height);
    v_context.globalCompositeOperation = "source-in";
    let y = B.transform(tn(v_context), [1, 0, 0, 1, -u, -p]);
    v_context.fillStyle = patternFill
      ? fillColor.getPattern(ctx, this, y, tN)
      : fillColor;
    v_context.fillRect(0, 0, width, height);
    if (e && !patternFill) {
      this.cachedCanvases.delete("fillCanvas");
      e.set(i, v.canvas);
    }
    return {
      canvas: v.canvas,
      offsetX: Math.round(u),
      offsetY: Math.round(p),
    };
  }
  setLineWidth(t) {
    if (t !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = t;
    this.ctx.lineWidth = t;
  }
  setLineCap(t) {
    this.ctx.lineCap = t1[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = t2[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    let ctx = this.ctx;
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash(t);
      ctx.lineDashOffset = e;
    }
  }
  setRenderingIntent(t) {}
  setFlatness(t) {}
  setGState(t) {
    for (let [e, i] of t) {
      switch (e) {
        case "LW":
          this.setLineWidth(i);
          break;
        case "LC":
          this.setLineCap(i);
          break;
        case "LJ":
          this.setLineJoin(i);
          break;
        case "ML":
          this.setMiterLimit(i);
          break;
        case "D":
          this.setDash(i[0], i[1]);
          break;
        case "RI":
          this.setRenderingIntent(i);
          break;
        case "FL":
          this.setFlatness(i);
          break;
        case "Font":
          this.setFont(i[0], i[1]);
          break;
        case "CA":
          this.current.strokeAlpha = i;
          break;
        case "ca":
          this.current.fillAlpha = i;
          this.ctx.globalAlpha = i;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = i;
          break;
        case "SMask":
          this.current.activeSMask = i ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps =
            this.filterFactory.addFilter(i);
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    let inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode();
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    }
  }
  beginSMaskMode() {
    if (this.inSMaskMode) {
      throw Error("beginSMaskMode called while already in smask mode");
    }
    let width = this.ctx.canvas.width;
    let height = this.ctx.canvas.height;
    let i = "smaskGroupAt" + this.groupLevel;
    let s = this.cachedCanvases.getCanvas(i, width, height);
    this.suspendedCtx = this.ctx;
    this.ctx = s.context;
    let ctx = this.ctx;
    ctx.setTransform(...tr(this.suspendedCtx));
    tJ(this.suspendedCtx, ctx);
    const suspendedCtx = this.suspendedCtx;
    if (ctx._removeMirroring) {
      throw Error("Context is already forwarding operations.");
    }
    ctx.__originalSave = ctx.save;
    ctx.__originalRestore = ctx.restore;
    ctx.__originalRotate = ctx.rotate;
    ctx.__originalScale = ctx.scale;
    ctx.__originalTranslate = ctx.translate;
    ctx.__originalTransform = ctx.transform;
    ctx.__originalSetTransform = ctx.setTransform;
    ctx.__originalResetTransform = ctx.resetTransform;
    ctx.__originalClip = ctx.clip;
    ctx.__originalMoveTo = ctx.moveTo;
    ctx.__originalLineTo = ctx.lineTo;
    ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
    ctx.__originalRect = ctx.rect;
    ctx.__originalClosePath = ctx.closePath;
    ctx.__originalBeginPath = ctx.beginPath;
    ctx._removeMirroring = () => {
      ctx.save = ctx.__originalSave;
      ctx.restore = ctx.__originalRestore;
      ctx.rotate = ctx.__originalRotate;
      ctx.scale = ctx.__originalScale;
      ctx.translate = ctx.__originalTranslate;
      ctx.transform = ctx.__originalTransform;
      ctx.setTransform = ctx.__originalSetTransform;
      ctx.resetTransform = ctx.__originalResetTransform;
      ctx.clip = ctx.__originalClip;
      ctx.moveTo = ctx.__originalMoveTo;
      ctx.lineTo = ctx.__originalLineTo;
      ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
      ctx.rect = ctx.__originalRect;
      ctx.closePath = ctx.__originalClosePath;
      ctx.beginPath = ctx.__originalBeginPath;
      delete ctx._removeMirroring;
    };
    ctx.save = function () {
      suspendedCtx.save();
      this.__originalSave();
    };
    ctx.restore = function () {
      suspendedCtx.restore();
      this.__originalRestore();
    };
    ctx.translate = function (t, e) {
      suspendedCtx.translate(t, e);
      this.__originalTranslate(t, e);
    };
    ctx.scale = function (t, e) {
      suspendedCtx.scale(t, e);
      this.__originalScale(t, e);
    };
    ctx.transform = function (t, e, i, s, a, n) {
      suspendedCtx.transform(t, e, i, s, a, n);
      this.__originalTransform(t, e, i, s, a, n);
    };
    ctx.setTransform = function (t, e, i, s, a, n) {
      suspendedCtx.setTransform(t, e, i, s, a, n);
      this.__originalSetTransform(t, e, i, s, a, n);
    };
    ctx.resetTransform = function () {
      suspendedCtx.resetTransform();
      this.__originalResetTransform();
    };
    ctx.rotate = function (t) {
      suspendedCtx.rotate(t);
      this.__originalRotate(t);
    };
    ctx.clip = function (t) {
      suspendedCtx.clip(t);
      this.__originalClip(t);
    };
    ctx.moveTo = function (t, e) {
      suspendedCtx.moveTo(t, e);
      this.__originalMoveTo(t, e);
    };
    ctx.lineTo = function (t, e) {
      suspendedCtx.lineTo(t, e);
      this.__originalLineTo(t, e);
    };
    ctx.bezierCurveTo = function (t, e, i, s, a, n) {
      suspendedCtx.bezierCurveTo(t, e, i, s, a, n);
      this.__originalBezierCurveTo(t, e, i, s, a, n);
    };
    ctx.rect = function (t, e, i, s) {
      suspendedCtx.rect(t, e, i, s);
      this.__originalRect(t, e, i, s);
    };
    ctx.closePath = function () {
      suspendedCtx.closePath();
      this.__originalClosePath();
    };
    ctx.beginPath = function () {
      suspendedCtx.beginPath();
      this.__originalBeginPath();
    };
    this.setGState([
      ["BM", "source-over"],
      ["ca", 1],
      ["CA", 1],
    ]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    tJ(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask) {
      return;
    }
    if (t) {
      t[0] = Math.floor(t[0]);
      t[1] = Math.floor(t[1]);
      t[2] = Math.ceil(t[2]);
      t[3] = Math.ceil(t[3]);
    } else {
      t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    }
    let activeSMask = this.current.activeSMask;
    let suspendedCtx = this.suspendedCtx;
    this.composeSMask(suspendedCtx, activeSMask, this.ctx, t);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(t, e, i, s) {
    let a = s[0];
    let r = s[1];
    let n = s[2] - a;
    let o = s[3] - r;
    if (n !== 0 && o !== 0) {
      this.genericComposeSMask(
        e.context,
        i,
        n,
        o,
        e.subtype,
        e.backdrop,
        e.transferMap,
        a,
        r,
        e.offsetX,
        e.offsetY,
      );
      t.save();
      t.globalAlpha = 1;
      t.globalCompositeOperation = "source-over";
      t.setTransform(1, 0, 0, 1, 0, 0);
      t.drawImage(i.canvas, 0, 0);
      t.restore();
    }
  }
  genericComposeSMask(t, e, i, s, a, r, n, o, l, h, d) {
    let t_canvas = t.canvas;
    let u = o - h;
    let p = l - d;
    if (r) {
      let e = B.makeHexColor(...r);
      if (u < 0 || p < 0 || u + i > t_canvas.width || p + s > t_canvas.height) {
        let t = this.cachedCanvases.getCanvas("maskExtension", i, s);
        let a = t.context;
        a.drawImage(t_canvas, -u, -p);
        a.globalCompositeOperation = "destination-atop";
        a.fillStyle = e;
        a.fillRect(0, 0, i, s);
        a.globalCompositeOperation = "source-over";
        t_canvas = t.canvas;
        p = 0;
        u = 0;
      } else {
        t.save();
        t.globalAlpha = 1;
        t.setTransform(1, 0, 0, 1, 0, 0);
        let a = new Path2D();
        a.rect(u, p, i, s);
        t.clip(a);
        t.globalCompositeOperation = "destination-atop";
        t.fillStyle = e;
        t.fillRect(u, p, i, s);
        t.restore();
      }
    }
    e.save();
    e.globalAlpha = 1;
    e.setTransform(1, 0, 0, 1, 0, 0);
    if (a === "Alpha" && n) {
      e.filter = this.filterFactory.addAlphaFilter(n);
    } else if (a === "Luminosity") {
      e.filter = this.filterFactory.addLuminosityFilter(n);
    }
    let g = new Path2D();
    g.rect(o, l, i, s);
    e.clip(g);
    e.globalCompositeOperation = "destination-in";
    e.drawImage(t_canvas, u, p, i, s, o, l, i, s);
    e.restore();
  }
  save() {
    if (this.inSMaskMode) {
      tJ(this.ctx, this.suspendedCtx);
      this.suspendedCtx.save();
    } else {
      this.ctx.save();
    }
    let current = this.current;
    this.stateStack.push(current);
    this.current = current.clone();
  }
  restore() {
    if (this.stateStack.length === 0 && this.inSMaskMode) {
      this.endSMaskMode();
    }
    if (this.stateStack.length !== 0) {
      this.current = this.stateStack.pop();
      if (this.inSMaskMode) {
        this.suspendedCtx.restore();
        tJ(this.suspendedCtx, this.ctx);
      } else {
        this.ctx.restore();
      }
      this.checkSMaskState();
      this.pendingClip = null;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
  }
  transform(t, e, i, s, a, r) {
    this.ctx.transform(t, e, i, s, a, r);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, i) {
    let s;
    let a;
    let ctx = this.ctx;
    let current = this.current;
    let o = current.x;
    let l = current.y;
    let h = tr(ctx);
    let d = (h[0] === 0 && h[3] === 0) || (h[1] === 0 && h[2] === 0);
    let c = d ? i.slice(0) : null;
    for (let i = 0, u = 0, p = t.length; i < p; i++) {
      switch (0 | t[i]) {
        case f.rectangle:
          o = e[u++];
          l = e[u++];
          let p = e[u++];
          let g = e[u++];
          let m = o + p;
          let b = l + g;
          ctx.moveTo(o, l);
          if (p === 0 || g === 0) {
            ctx.lineTo(m, b);
          } else {
            ctx.lineTo(m, l);
            ctx.lineTo(m, b);
            ctx.lineTo(o, b);
          }
          if (!d) {
            current.updateRectMinMax(h, [o, l, m, b]);
          }
          ctx.closePath();
          break;
        case f.moveTo:
          o = e[u++];
          l = e[u++];
          ctx.moveTo(o, l);
          if (!d) {
            current.updatePathMinMax(h, o, l);
          }
          break;
        case f.lineTo:
          o = e[u++];
          l = e[u++];
          ctx.lineTo(o, l);
          if (!d) {
            current.updatePathMinMax(h, o, l);
          }
          break;
        case f.curveTo:
          s = o;
          a = l;
          o = e[u + 4];
          l = e[u + 5];
          ctx.bezierCurveTo(e[u], e[u + 1], e[u + 2], e[u + 3], o, l);
          current.updateCurvePathMinMax(
            h,
            s,
            a,
            e[u],
            e[u + 1],
            e[u + 2],
            e[u + 3],
            o,
            l,
            c,
          );
          u += 6;
          break;
        case f.curveTo2:
          s = o;
          a = l;
          ctx.bezierCurveTo(o, l, e[u], e[u + 1], e[u + 2], e[u + 3]);
          current.updateCurvePathMinMax(
            h,
            s,
            a,
            o,
            l,
            e[u],
            e[u + 1],
            e[u + 2],
            e[u + 3],
            c,
          );
          o = e[u + 2];
          l = e[u + 3];
          u += 4;
          break;
        case f.curveTo3:
          s = o;
          a = l;
          o = e[u + 2];
          l = e[u + 3];
          ctx.bezierCurveTo(e[u], e[u + 1], o, l, o, l);
          current.updateCurvePathMinMax(h, s, a, e[u], e[u + 1], o, l, o, l, c);
          u += 4;
          break;
        case f.closePath:
          ctx.closePath();
      }
    }
    if (d) {
      current.updateScalingPathMinMax(h, c);
    }
    current.setCurrentPoint(o, l);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = true) {
    let ctx = this.ctx;
    let strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && strokeColor?.getPattern) {
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, tn(ctx), tB);
        this.rescaleAndStroke(false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(true);
      }
    }
    if (t) {
      this.consumePath(this.current.getClippedPathBoundingBox());
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath();
    this.stroke();
  }
  fill(t = true) {
    let ctx = this.ctx;
    let fillColor = this.current.fillColor;
    let patternFill = this.current.patternFill;
    let a = false;
    if (patternFill) {
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, tn(ctx), tN);
      a = true;
    }
    let r = this.current.getClippedPathBoundingBox();
    if (this.contentVisible && r !== null) {
      if (this.pendingEOFill) {
        ctx.fill("evenodd");
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }
    }
    if (a) {
      ctx.restore();
    }
    if (t) {
      this.consumePath(r);
    }
  }
  eoFill() {
    this.pendingEOFill = true;
    this.fill();
  }
  fillStroke() {
    this.fill(false);
    this.stroke(false);
    this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = true;
    this.fillStroke();
  }
  closeFillStroke() {
    this.closePath();
    this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = true;
    this.closePath();
    this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = t3;
  }
  eoClip() {
    this.pendingClip = t5;
  }
  beginText() {
    this.current.textMatrix = l;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  endText() {
    let pendingTextPaths = this.pendingTextPaths;
    let ctx = this.ctx;
    if (pendingTextPaths === undefined) {
      return void ctx.beginPath();
    }
    for (let i of (ctx.save(), ctx.beginPath(), pendingTextPaths)) {
      ctx.setTransform(...i.transform);
      ctx.translate(i.x, i.y);
      i.addToPath(ctx, i.fontSize);
    }
    ctx.restore();
    ctx.clip();
    ctx.beginPath();
    delete this.pendingTextPaths;
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    let i = this.commonObjs.get(t);
    let current = this.current;
    if (!i) {
      throw Error(`Can't find font for ${t}`);
    }
    current.fontMatrix = i.fontMatrix || h;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      y("Invalid font matrix for font " + t);
    }
    if (e < 0) {
      e = -e;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = i;
    this.current.fontSize = e;
    if (i.isType3Font) {
      return;
    }
    let a = i.loadedName || "sans-serif";
    let r = i.systemFontInfo?.css || `"${a}", ${i.fallbackName}`;
    let n = "normal";
    if (i.black) {
      n = "900";
    } else if (i.bold) {
      n = "bold";
    }
    let o = i.italic ? "italic" : "normal";
    let l = e;
    if (e < 16) {
      l = 16;
    } else if (e > 100) {
      l = 100;
    }
    this.current.fontSizeScale = e / l;
    this.ctx.font = `${o} ${n} ${l}px ${r}`;
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    this.current.x = this.current.lineX += t;
    this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(t, e) {
    this.setLeading(-e);
    this.moveText(t, e);
  }
  setTextMatrix(t, e, i, s, a, r) {
    this.current.textMatrix = [t, e, i, s, a, r];
    this.current.textMatrixScale = Math.hypot(t, e);
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, i, s) {
    let addToPath;
    let ctx = this.ctx;
    let current = this.current;
    let n_font = current.font;
    let n_textRenderingMode = current.textRenderingMode;
    let fontSize = current.fontSize / current.fontSizeScale;
    let d = 3 & n_textRenderingMode;
    let c = !!(4 & n_textRenderingMode);
    let u = current.patternFill && !n_font.missingFile;
    if (n_font.disableFontFace || c || u) {
      addToPath = n_font.getPathGenerator(this.commonObjs, t);
    }
    if (n_font.disableFontFace || u) {
      ctx.save();
      ctx.translate(e, i);
      ctx.beginPath();
      addToPath(ctx, fontSize);
      if (s) {
        ctx.setTransform(...s);
      }
      if (d === 0 || d === 2) {
        ctx.fill();
      }
      if (d === 1 || d === 2) {
        ctx.stroke();
      }
      ctx.restore();
    } else {
      if (d === 0 || d === 2) {
        ctx.fillText(t, e, i);
      }
      if (d === 1 || d === 2) {
        ctx.strokeText(t, e, i);
      }
    }
    if (c) {
      (this.pendingTextPaths ||= []).push({
        transform: tr(ctx),
        x: e,
        y: i,
        fontSize,
        addToPath,
      });
    }
  }
  get isFontSubpixelAAEnabled() {
    let { context } = this.cachedCanvases.getCanvas(
      "isFontSubpixelAAEnabled",
      10,
      10,
    );
    context.scale(1.5, 1);
    context.fillText("I", 0, 10);
    let data = context.getImageData(0, 0, 10, 10).data;
    let i = false;
    for (let t = 3; t < data.length; t += 4) {
      if (data[t] > 0 && data[t] < 255) {
        i = true;
        break;
      }
    }
    return C(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t) {
    let e;
    let current = this.current;
    let i_font = current.font;
    if (i_font.isType3Font) {
      return this.showType3Text(t);
    }
    let i_fontSize = current.fontSize;
    if (i_fontSize === 0) {
      return;
    }
    let ctx = this.ctx;
    let i_fontSizeScale = current.fontSizeScale;
    let i_charSpacing = current.charSpacing;
    let i_wordSpacing = current.wordSpacing;
    let i_fontDirection = current.fontDirection;
    let d = current.textHScale * i_fontDirection;
    let t_length = t.length;
    let s_vertical = i_font.vertical;
    let p = s_vertical ? 1 : -1;
    let s_defaultVMetrics = i_font.defaultVMetrics;
    let m = i_fontSize * current.fontMatrix[0];
    let f =
      current.textRenderingMode === 0 &&
      !i_font.disableFontFace &&
      !current.patternFill;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y + current.textRise);
    if (i_fontDirection > 0) {
      ctx.scale(d, -1);
    } else {
      ctx.scale(d, 1);
    }
    if (current.patternFill) {
      ctx.save();
      let t = current.fillColor.getPattern(ctx, this, tn(ctx), tN);
      e = tr(ctx);
      ctx.restore();
      ctx.fillStyle = t;
    }
    let i_lineWidth = current.lineWidth;
    let i_textMatrixScale = current.textMatrixScale;
    if (i_textMatrixScale === 0 || i_lineWidth === 0) {
      let t = 3 & current.textRenderingMode;
      if (t === 1 || t === 2) {
        i_lineWidth = this.getSinglePixelWidth();
      }
    } else {
      i_lineWidth /= i_textMatrixScale;
    }
    if (i_fontSizeScale !== 1) {
      ctx.scale(i_fontSizeScale, i_fontSizeScale);
      i_lineWidth /= i_fontSizeScale;
    }
    ctx.lineWidth = i_lineWidth;
    if (i_font.isInvalidPDFjsFont) {
      let e = [];
      let s = 0;
      for (let i of t) {
        e.push(i.unicode);
        s += i.width;
      }
      ctx.fillText(e.join(""), 0, 0);
      current.x += s * m * d;
      ctx.restore();
      this.compose();
      return;
    }
    let A = 0;
    let y;
    for (y = 0; y < t_length; ++y) {
      let i;
      let d;
      let c = t[y];
      if (typeof c === "number") {
        A += (p * c * i_fontSize) / 1000;
        continue;
      }
      let b = false;
      let v = (c.isSpace ? i_wordSpacing : 0) + i_charSpacing;
      let _ = c.fontChar;
      let x = c.accent;
      let w = c.width;
      if (s_vertical) {
        let t = c.vmetric || s_defaultVMetrics;
        let e = -(c.vmetric ? t[1] : 0.5 * w) * m;
        let s = t[2] * m;
        w = t ? -t[0] : w;
        i = e / i_fontSizeScale;
        d = (A + s) / i_fontSizeScale;
      } else {
        i = A / i_fontSizeScale;
        d = 0;
      }
      if (i_font.remeasure && w > 0) {
        let t =
          ((1000 * ctx.measureText(_).width) / i_fontSize) * i_fontSizeScale;
        if (w < t && this.isFontSubpixelAAEnabled) {
          let e = w / t;
          b = true;
          ctx.save();
          ctx.scale(e, 1);
          i /= e;
        } else {
          if (w !== t) {
            i += (((w - t) / 2000) * i_fontSize) / i_fontSizeScale;
          }
        }
      }
      if (this.contentVisible && (c.isInFont || i_font.missingFile)) {
        if (f && !x) {
          ctx.fillText(_, i, d);
        } else {
          this.paintChar(_, i, d, e);
          if (x) {
            let t = i + (i_fontSize * x.offset.x) / i_fontSizeScale;
            let s = d - (i_fontSize * x.offset.y) / i_fontSizeScale;
            this.paintChar(x.fontChar, t, s, e);
          }
        }
      }
      A += s_vertical
        ? w * m - v * i_fontDirection
        : w * m + v * i_fontDirection;
      if (b) {
        ctx.restore();
      }
    }
    if (s_vertical) {
      current.y -= A;
    } else {
      current.x += A * d;
    }
    ctx.restore();
    this.compose();
  }
  showType3Text(t) {
    let e;
    let i;
    let s;
    let a;
    let ctx = this.ctx;
    let current = this.current;
    let n_font = current.font;
    let n_fontSize = current.fontSize;
    let n_fontDirection = current.fontDirection;
    let c = n_font.vertical ? 1 : -1;
    let n_charSpacing = current.charSpacing;
    let n_wordSpacing = current.wordSpacing;
    let g = current.textHScale * n_fontDirection;
    let m = current.fontMatrix || h;
    let t_length = t.length;
    if (current.textRenderingMode !== 3 && n_fontSize !== 0) {
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform(...current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(g, n_fontDirection);
      for (e = 0; e < t_length; ++e) {
        if (typeof (i = t[e]) === "number") {
          a = (c * i * n_fontSize) / 1000;
          this.ctx.translate(a, 0);
          current.x += a * g;
          continue;
        }
        let h = (i.isSpace ? n_wordSpacing : 0) + n_charSpacing;
        let d = n_font.charProcOperatorList[i.operatorListId];
        if (!d) {
          y(`Type3 character "${i.operatorListId}" is not available.`);
          continue;
        }
        if (this.contentVisible) {
          this.processingType3 = i;
          this.save();
          ctx.scale(n_fontSize, n_fontSize);
          ctx.transform(...m);
          this.executeOperatorList(d);
          this.restore();
        }
        s = B.applyTransform([i.width, 0], m)[0] * n_fontSize + h;
        ctx.translate(s, 0);
        current.x += s * g;
      }
      ctx.restore();
      this.processingType3 = null;
    }
  }
  setCharWidth(t, e) {}
  setCharWidthAndBounds(t, e, i, s, a, r) {
    this.ctx.rect(i, s, a - i, r - s);
    this.ctx.clip();
    this.endPath();
  }
  getColorN_Pattern(t) {
    let e;
    if (t[0] === "TilingPattern") {
      let i = t[1];
      let s = this.baseTransform || tr(this.ctx);
      e = new tW(
        t,
        i,
        this.ctx,
        {
          createCanvasGraphics: (t) =>
            new t6(
              t,
              this.commonObjs,
              this.objs,
              this.canvasFactory,
              this.filterFactory,
              {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack,
              },
            ),
        },
        s,
      );
    } else {
      e = this._getPattern(t[1], t[2]);
    }
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(t, e, i) {
    this.ctx.strokeStyle = this.current.strokeColor = B.makeHexColor(t, e, i);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(t, e, i) {
    this.ctx.fillStyle = this.current.fillColor = B.makeHexColor(t, e, i);
    this.current.patternFill = false;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(t, e = null) {
    let i;
    if (this.cachedPatterns.has(t)) {
      i = this.cachedPatterns.get(t);
    } else {
      i = ((t) => {
        switch (t[0]) {
          case "RadialAxial":
            return new tU(t);
          case "Mesh":
            return new tG(t);
          case "Dummy":
            return new tV();
        }
        throw Error(`Unknown IR type: ${t[0]}`);
      })(this.getObject(t));
      this.cachedPatterns.set(t, i);
    }
    if (e) {
      i.matrix = e;
    }
    return i;
  }
  shadingFill(t) {
    if (!this.contentVisible) {
      return;
    }
    let ctx = this.ctx;
    this.save();
    ctx.fillStyle = this._getPattern(t).getPattern(ctx, this, tn(ctx), tz);
    let i = tn(ctx);
    if (i) {
      let { width, height } = ctx.canvas;
      let [a, r, n, o] = B.getAxialAlignedBoundingBox([0, 0, width, height], i);
      this.ctx.fillRect(a, r, n - a, o - r);
    } else {
      this.ctx.fillRect(-10000000000, -10000000000, 20000000000, 20000000000);
    }
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore();
  }
  beginInlineImage() {
    _("Should not call beginInlineImage");
  }
  beginImageData() {
    _("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (
      this.contentVisible &&
      (this.save(),
      this.baseTransformStack.push(this.baseTransform),
      t && this.transform(...t),
      (this.baseTransform = tr(this.ctx)),
      e)
    ) {
      let t = e[2] - e[0];
      let i = e[3] - e[1];
      this.ctx.rect(e[0], e[1], t, i);
      this.current.updateRectMinMax(tr(this.ctx), e);
      this.clip();
      this.endPath();
    }
  }
  paintFormXObjectEnd() {
    if (this.contentVisible) {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    }
  }
  beginGroup(t) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    let ctx = this.ctx;
    if (!t.isolated) {
      A("TODO: Support non-isolated groups.");
    }
    if (t.knockout) {
      y("Knockout groups not supported.");
    }
    let i = tr(ctx);
    if (t.matrix) {
      ctx.transform(...t.matrix);
    }
    if (!t.bbox) {
      throw Error("Bounding box is required.");
    }
    let s = B.getAxialAlignedBoundingBox(t.bbox, tr(ctx));
    let a = [0, 0, ctx.canvas.width, ctx.canvas.height];
    let r = Math.floor((s = B.intersect(s, a) || [0, 0, 0, 0])[0]);
    let n = Math.floor(s[1]);
    let o = Math.max(Math.ceil(s[2]) - r, 1);
    let l = Math.max(Math.ceil(s[3]) - n, 1);
    this.current.startNewPathAndClipBox([0, 0, o, l]);
    let h = "groupAt" + this.groupLevel;
    if (t.smask) {
      h += `_smask_${this.smaskCounter++ % 2}`;
    }
    let d = this.cachedCanvases.getCanvas(h, o, l);
    let d_context = d.context;
    d_context.translate(-r, -n);
    d_context.transform(...i);
    if (t.smask) {
      this.smaskStack.push({
        canvas: d.canvas,
        context: d_context,
        offsetX: r,
        offsetY: n,
        subtype: t.smask.subtype,
        backdrop: t.smask.backdrop,
        transferMap: t.smask.transferMap || null,
        startTransformInverse: null,
      });
    } else {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(r, n);
      ctx.save();
    }
    tJ(ctx, d_context);
    this.ctx = d_context;
    this.setGState([
      ["BM", "source-over"],
      ["ca", 1],
      ["CA", 1],
    ]);
    this.groupStack.push(ctx);
    this.groupLevel++;
  }
  endGroup(t) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    let ctx = this.ctx;
    let i = this.groupStack.pop();
    this.ctx = i;
    this.ctx.imageSmoothingEnabled = false;
    if (t.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore();
    } else {
      this.ctx.restore();
      let t = tr(this.ctx);
      this.restore();
      this.ctx.save();
      this.ctx.setTransform(...t);
      let i = B.getAxialAlignedBoundingBox(
        [0, 0, ctx.canvas.width, ctx.canvas.height],
        t,
      );
      this.ctx.drawImage(ctx.canvas, 0, 0);
      this.ctx.restore();
      this.compose(i);
    }
  }
  beginAnnotation(t, e, i, s, a) {
    this.#eS();
    tZ(this.ctx);
    this.ctx.save();
    this.save();
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (e) {
      let s = e[2] - e[0];
      let r = e[3] - e[1];
      if (a && this.annotationCanvasMap) {
        i = i.slice();
        i[4] -= e[0];
        i[5] -= e[1];
        e = e.slice();
        e[0] = e[1] = 0;
        e[2] = s;
        e[3] = r;
        let [a, n] = B.singularValueDecompose2dScale(tr(this.ctx));
        let { viewportScale } = this;
        let l = Math.ceil(s * this.outputScaleX * viewportScale);
        let h = Math.ceil(r * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(l, h);
        let { canvas, context } = this.annotationCanvas;
        this.annotationCanvasMap.set(t, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(a, 0, 0, -n, 0, r * n);
        tZ(this.ctx);
      } else {
        tZ(this.ctx);
        this.endPath();
        this.ctx.rect(e[0], e[1], s, r);
        this.ctx.clip();
        this.ctx.beginPath();
      }
    }
    this.current = new tK(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(...i);
    this.transform(...s);
  }
  endAnnotation() {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#eT();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible) {
      return;
    }
    let t_count = t.count;
    t = this.getObject(t.data, t);
    t.count = t_count;
    let ctx = this.ctx;
    let processingType3 = this.processingType3;
    if (
      processingType3 &&
      (processingType3.compiled === undefined &&
        (processingType3.compiled = ((t) => {
          let e;
          let i;
          let s;
          let { width, height } = t;
          if (width > 1000 || height > 1000) {
            return null;
          }
          let n = new Uint8Array([
            0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
          ]);
          let o = width + 1;
          let l = new Uint8Array(o * (height + 1));
          let h = (width + 7) & -8;
          let d = new Uint8Array(h * height);
          let c = 0;
          for (let e of t.data) {
            let t = 128;
            while (t > 0) {
              d[c++] = e & t ? 0 : 255;
              t >>= 1;
            }
          }
          let u = 0;
          if (d[(c = 0)] !== 0) {
            l[0] = 1;
            ++u;
          }
          for (i = 1; i < width; i++) {
            if (d[c] !== d[c + 1]) {
              l[i] = d[c] ? 2 : 1;
              ++u;
            }
            c++;
          }
          if (d[c] !== 0) {
            l[i] = 2;
            ++u;
          }
          for (e = 1; e < height; e++) {
            c = e * h;
            s = e * o;
            if (d[c - h] !== d[c]) {
              l[s] = d[c] ? 1 : 8;
              ++u;
            }
            let t = 4 * !!d[c] + 8 * !!d[c - h];
            for (i = 1; i < width; i++) {
              if (n[(t = (t >> 2) + 4 * !!d[c + 1] + 8 * !!d[c - h + 1])]) {
                l[s + i] = n[t];
                ++u;
              }
              c++;
            }
            if (d[c - h] !== d[c]) {
              l[s + i] = d[c] ? 2 : 4;
              ++u;
            }
            if (u > 1000) {
              return null;
            }
          }
          c = h * (height - 1);
          s = e * o;
          if (d[c] !== 0) {
            l[s] = 8;
            ++u;
          }
          for (i = 1; i < width; i++) {
            if (d[c] !== d[c + 1]) {
              l[s + i] = d[c] ? 4 : 8;
              ++u;
            }
            c++;
          }
          if (d[c] !== 0) {
            l[s + i] = 4;
            ++u;
          }
          if (u > 1000) {
            return null;
          }
          let p = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]);
          let g = new Path2D();
          for (e = 0; u && e <= height; e++) {
            let t = e * o;
            let i = t + width;
            while (t < i && !l[t]) {
              t++;
            }
            if (t === i) {
              continue;
            }
            g.moveTo(t % o, e);
            let s = t;
            let r = l[t];
            do {
              let e = p[r];
              do {
                t += e;
              } while (!l[t]);
              let i = l[t];
              if (i !== 5 && i !== 10) {
                r = i;
                l[t] = 0;
              } else {
                r = i & ((51 * r) >> 4);
                l[t] &= (r >> 2) | (r << 2);
              }
              g.lineTo(t % o, (t / o) | 0);
              if (!l[t]) {
                --u;
              }
            } while (s !== t);
            --e;
          }
          d = null;
          l = null;
          return function (t) {
            t.save();
            t.scale(1 / width, -1 / height);
            t.translate(0, -height);
            t.fill(g);
            t.beginPath();
            t.restore();
          };
        })(t)),
      processingType3.compiled)
    ) {
      return void processingType3.compiled(ctx);
    }
    let a = this._createMaskCanvas(t);
    let a_canvas = a.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(a_canvas, a.offsetX, a.offsetY);
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, i = 0, s = 0, a, r) {
    if (!this.contentVisible) {
      return;
    }
    t = this.getObject(t.data, t);
    let ctx = this.ctx;
    ctx.save();
    let o = tr(ctx);
    ctx.transform(e, i, s, a, 0, 0);
    let l = this._createMaskCanvas(t);
    ctx.setTransform(1, 0, 0, 1, l.offsetX - o[4], l.offsetY - o[5]);
    for (let t = 0, h = r.length; t < h; t += 2) {
      let h = B.transform(o, [e, i, s, a, r[t], r[t + 1]]);
      let [d, c] = B.applyTransform([0, 0], h);
      ctx.drawImage(l.canvas, d, c);
    }
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible) {
      return;
    }
    let ctx = this.ctx;
    let fillColor = this.current.fillColor;
    let patternFill = this.current.patternFill;
    for (let a of t) {
      let { data, width, height, transform } = a;
      let l = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      let h = l.context;
      h.save();
      tQ(h, this.getObject(data, a));
      h.globalCompositeOperation = "source-in";
      h.fillStyle = patternFill
        ? fillColor.getPattern(h, this, tn(ctx), tN)
        : fillColor;
      h.fillRect(0, 0, width, height);
      h.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      tX(ctx, l.canvas, 0, 0, width, height, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible) {
      return;
    }
    let e = this.getObject(t);
    if (e) {
      this.paintInlineImageXObject(e);
    } else {
      y("Dependent image isn't ready yet");
    }
  }
  paintImageXObjectRepeat(t, e, i, s) {
    if (!this.contentVisible) {
      return;
    }
    let a = this.getObject(t);
    if (!a) {
      return void y("Dependent image isn't ready yet");
    }
    let a_width = a.width;
    let a_height = a.height;
    let o = [];
    for (let t = 0, a = s.length; t < a; t += 2) {
      o.push({
        transform: [e, 0, 0, i, s[t], s[t + 1]],
        x: 0,
        y: 0,
        w: a_width,
        h: a_height,
      });
    }
    this.paintInlineImageXObjectGroup(a, o);
  }
  applyTransferMapsToCanvas(t) {
    if (this.current.transferMaps !== "none") {
      t.filter = this.current.transferMaps;
      t.drawImage(t.canvas, 0, 0);
      t.filter = "none";
    }
    return t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none") {
      return t.bitmap;
    }
    let { bitmap, width, height } = t;
    let a = this.cachedCanvases.getCanvas("inlineImage", width, height);
    let a_context = a.context;
    a_context.filter = this.current.transferMaps;
    a_context.drawImage(bitmap, 0, 0);
    a_context.filter = "none";
    return a.canvas;
  }
  paintInlineImageXObject(t) {
    let e;
    if (!this.contentVisible) {
      return;
    }
    let t_width = t.width;
    let t_height = t.height;
    let ctx = this.ctx;
    this.save();
    if (!o) {
      let { filter } = ctx;
      if (filter !== "none" && filter !== "") {
        ctx.filter = "none";
      }
    }
    ctx.scale(1 / t_width, -1 / t_height);
    if (t.bitmap) {
      e = this.applyTransferMapsToBitmap(t);
    } else if (
      (typeof HTMLElement === "function" && t instanceof HTMLElement) ||
      !t.data
    ) {
      e = t;
    } else {
      let a = this.cachedCanvases.getCanvas(
        "inlineImage",
        t_width,
        t_height,
      ).context;
      tY(a, t);
      e = this.applyTransferMapsToCanvas(a);
    }
    let r = this._scaleImage(e, tn(ctx));
    ctx.imageSmoothingEnabled = t0(tr(ctx), t.interpolate);
    tX(
      ctx,
      r.img,
      0,
      0,
      r.paintWidth,
      r.paintHeight,
      0,
      -t_height,
      t_width,
      t_height,
    );
    this.compose();
    this.restore();
  }
  paintInlineImageXObjectGroup(t, e) {
    let i;
    if (!this.contentVisible) {
      return;
    }
    let ctx = this.ctx;
    if (t.bitmap) {
      i = t.bitmap;
    } else {
      let e = t.width;
      let s = t.height;
      let a = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
      tY(a, t);
      i = this.applyTransferMapsToCanvas(a);
    }
    for (let t of e) {
      ctx.save();
      ctx.transform(...t.transform);
      ctx.scale(1, -1);
      tX(ctx, i, t.x, t.y, t.w, t.h, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintSolidColorImageMask() {
    if (this.contentVisible) {
      this.ctx.fillRect(0, 0, 1, 1);
      this.compose();
    }
  }
  markPoint(t) {}
  markPointProps(t, e) {}
  beginMarkedContent(t) {
    this.markedContentStack.push({
      visible: true,
    });
  }
  beginMarkedContentProps(t, e) {
    if (t === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(e),
      });
    } else {
      this.markedContentStack.push({
        visible: true,
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat() {}
  endCompat() {}
  consumePath(t) {
    let e = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(t);
    }
    let ctx = this.ctx;
    if (this.pendingClip) {
      if (!e) {
        if (this.pendingClip === t5) {
          ctx.clip("evenodd");
        } else {
          ctx.clip();
        }
      }
      this.pendingClip = null;
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
    ctx.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      let t = tr(this.ctx);
      if (t[1] === 0 && t[2] === 0) {
        this._cachedGetSinglePixelWidth =
          1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      } else {
        let e = Math.abs(t[0] * t[3] - t[2] * t[1]);
        let i = Math.hypot(t[0], t[2]);
        let s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      let t;
      let e;
      let { lineWidth } = this.current;
      let { a: a_1, b, c, d } = this.ctx.getTransform();
      if (b === 0 && c === 0) {
        let a = Math.abs(a_1);
        let r = Math.abs(d);
        if (a === r) {
          if (lineWidth === 0) {
            t = e = 1 / a;
          } else {
            let s = a * lineWidth;
            t = e = s < 1 ? 1 / s : 1;
          }
        } else if (lineWidth === 0) {
          t = 1 / a;
          e = 1 / r;
        } else {
          let s = a * lineWidth;
          let n = r * lineWidth;
          t = s < 1 ? 1 / s : 1;
          e = n < 1 ? 1 / n : 1;
        }
      } else {
        let o = Math.abs(a_1 * d - b * c);
        let l = Math.hypot(a_1, b);
        let h = Math.hypot(c, d);
        if (lineWidth === 0) {
          t = h / o;
          e = l / o;
        } else {
          let s = lineWidth * o;
          t = h > s ? h / s : 1;
          e = l > s ? l / s : 1;
        }
      }
      this._cachedScaleForStroking[0] = t;
      this._cachedScaleForStroking[1] = e;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    let { ctx } = this;
    let { lineWidth } = this.current;
    let [s, a] = this.getScaleForStroking();
    ctx.lineWidth = lineWidth || 1;
    if (s === 1 && a === 1) {
      return void ctx.stroke();
    }
    let r = ctx.getLineDash();
    if (t) {
      ctx.save();
    }
    ctx.scale(s, a);
    if (r.length > 0) {
      let t = Math.max(s, a);
      ctx.setLineDash(r.map((e) => e / t));
      ctx.lineDashOffset /= t;
    }
    ctx.stroke();
    if (t) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) {
      if (!this.markedContentStack[t].visible) {
        return false;
      }
    }
    return true;
  }
}
for (let t in f) {
  if (t6.prototype[t] !== undefined) {
    t6.prototype[f[t]] = t6.prototype[t];
  }
}
class t4 {
  static #eM = null;
  static #ek = "";
  static get workerPort() {
    return this.#eM;
  }
  static set workerPort(t) {
    if (!(typeof Worker !== "undefined" && t instanceof Worker) && t !== null) {
      throw Error("Invalid `workerPort` type.");
    }
    this.#eM = t;
  }
  static get workerSrc() {
    return this.#ek;
  }
  static set workerSrc(t) {
    if (typeof t !== "string") {
      throw Error("Invalid `workerSrc` type.");
    }
    this.#ek = t;
  }
}
function t8(t) {
  if (!(t instanceof Error || (typeof t === "object" && t !== null))) {
    _('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (t.name) {
    case "AbortException":
      return new R(t.message);
    case "MissingPDFException":
      return new k(t.message);
    case "PasswordException":
      return new S(t.message, t.code);
    case "UnexpectedResponseException":
      return new I(t.message, t.status);
    case "UnknownErrorException":
      return new T(t.message, t.details);
    default:
      return new T(t.message, t.toString());
  }
}
class t7 {
  #eI = new AbortController();
  constructor(t, e, i) {
    this.sourceName = t;
    this.targetName = e;
    this.comObj = i;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = Object.create(null);
    this.streamControllers = Object.create(null);
    this.callbackCapabilities = Object.create(null);
    this.actionHandler = Object.create(null);
    i.addEventListener("message", this.#eP.bind(this), {
      signal: this.#eI.signal,
    });
  }
  #eP({ data }) {
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.stream) {
      return void this.#eR(data);
    }
    if (data.callback) {
      let e = data.callbackId;
      let i = this.callbackCapabilities[e];
      if (!i) {
        throw Error(`Cannot resolve callback ${e}`);
      }
      delete this.callbackCapabilities[e];
      if (data.callback === 1) {
        i.resolve(data.data);
      } else if (data.callback === 2) {
        i.reject(t8(data.reason));
      } else {
        throw Error("Unexpected callback case");
      }
      return;
    }
    let e = this.actionHandler[data.action];
    if (!e) {
      throw Error(`Unknown action from worker: ${data.action}`);
    }
    if (data.callbackId) {
      let sourceName = this.sourceName;
      let targetName = data.sourceName;
      let a = this.comObj;
      new Promise((resolve) => {
        resolve(e(data.data));
      }).then(
        (e) => {
          a.postMessage({
            sourceName,
            targetName,
            callback: 1,
            callbackId: data.callbackId,
            data: e,
          });
        },
        (e) => {
          a.postMessage({
            sourceName,
            targetName,
            callback: 2,
            callbackId: data.callbackId,
            reason: t8(e),
          });
        },
      );
      return;
    }
    if (data.streamId) {
      this.#eD(data);
    } else {
      e(data.data);
    }
  }
  on(t, e) {
    let actionHandler = this.actionHandler;
    if (actionHandler[t]) {
      throw Error(`There is already an actionName called "${t}"`);
    }
    actionHandler[t] = e;
  }
  send(t, e, i) {
    this.comObj.postMessage(
      {
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e,
      },
      i,
    );
  }
  sendWithPromise(t, e, i) {
    let callbackId = this.callbackId++;
    let a = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = a;
    try {
      this.comObj.postMessage(
        {
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId,
          data: e,
        },
        i,
      );
    } catch (error) {
      a.reject(error);
    }
    return a.promise;
  }
  sendWithStream(t, e, i, s) {
    let streamId = this.streamId++;
    let sourceName = this.sourceName;
    let targetName = this.targetName;
    let comObj = this.comObj;
    return new ReadableStream(
      {
        start: (controller) => {
          let startCall = Promise.withResolvers();
          this.streamControllers[streamId] = {
            controller,
            startCall,
            pullCall: null,
            cancelCall: null,
            isClosed: false,
          };
          comObj.postMessage(
            {
              sourceName,
              targetName,
              action: t,
              streamId,
              data: e,
              desiredSize: controller.desiredSize,
            },
            s,
          );
          return startCall.promise;
        },
        pull: (t) => {
          let e = Promise.withResolvers();
          this.streamControllers[streamId].pullCall = e;
          comObj.postMessage({
            sourceName,
            targetName,
            stream: 6,
            streamId,
            desiredSize: t.desiredSize,
          });
          return e.promise;
        },
        cancel: (t) => {
          x(t instanceof Error, "cancel must have a valid reason");
          let e = Promise.withResolvers();
          this.streamControllers[streamId].cancelCall = e;
          this.streamControllers[streamId].isClosed = true;
          comObj.postMessage({
            sourceName,
            targetName,
            stream: 1,
            streamId,
            reason: t8(t),
          });
          return e.promise;
        },
      },
      i,
    );
  }
  #eD(t) {
    let t_streamId = t.streamId;
    let sourceName = this.sourceName;
    let t_sourceName = t.sourceName;
    let comObj = this.comObj;
    let r = this;
    let n = this.actionHandler[t.action];
    let o = {
      enqueue(t, r = 1, n) {
        if (this.isCancelled) {
          return;
        }
        let desiredSize = this.desiredSize;
        this.desiredSize -= r;
        if (desiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        comObj.postMessage(
          {
            sourceName,
            targetName: t_sourceName,
            stream: 4,
            streamId: t_streamId,
            chunk: t,
          },
          n,
        );
      },
      close() {
        if (!this.isCancelled) {
          this.isCancelled = true;
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: 3,
            streamId: t_streamId,
          });
          delete r.streamSinks[t_streamId];
        }
      },
      error(t) {
        x(t instanceof Error, "error must have a valid reason");
        if (!this.isCancelled) {
          this.isCancelled = true;
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: 5,
            streamId: t_streamId,
            reason: t8(t),
          });
        }
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: t.desiredSize,
      ready: null,
    };
    o.sinkCapability.resolve();
    o.ready = o.sinkCapability.promise;
    this.streamSinks[t_streamId] = o;
    new Promise((resolve) => {
      resolve(n(t.data, o));
    }).then(
      () => {
        comObj.postMessage({
          sourceName,
          targetName: t_sourceName,
          stream: 8,
          streamId: t_streamId,
          success: true,
        });
      },
      (t) => {
        comObj.postMessage({
          sourceName,
          targetName: t_sourceName,
          stream: 8,
          streamId: t_streamId,
          reason: t8(t),
        });
      },
    );
  }
  #eR(t) {
    let t_streamId = t.streamId;
    let sourceName = this.sourceName;
    let t_sourceName = t.sourceName;
    let comObj = this.comObj;
    let r = this.streamControllers[t_streamId];
    let n = this.streamSinks[t_streamId];
    switch (t.stream) {
      case 8:
        if (t.success) {
          r.startCall.resolve();
        } else {
          r.startCall.reject(t8(t.reason));
        }
        break;
      case 7:
        if (t.success) {
          r.pullCall.resolve();
        } else {
          r.pullCall.reject(t8(t.reason));
        }
        break;
      case 6:
        if (!n) {
          comObj.postMessage({
            sourceName,
            targetName: t_sourceName,
            stream: 7,
            streamId: t_streamId,
            success: true,
          });
          break;
        }
        if (n.desiredSize <= 0 && t.desiredSize > 0) {
          n.sinkCapability.resolve();
        }
        n.desiredSize = t.desiredSize;
        new Promise((resolve) => {
          resolve(n.onPull?.());
        }).then(
          () => {
            comObj.postMessage({
              sourceName,
              targetName: t_sourceName,
              stream: 7,
              streamId: t_streamId,
              success: true,
            });
          },
          (t) => {
            comObj.postMessage({
              sourceName,
              targetName: t_sourceName,
              stream: 7,
              streamId: t_streamId,
              reason: t8(t),
            });
          },
        );
        break;
      case 4:
        x(r, "enqueue should have stream controller");
        if (r.isClosed) {
          break;
        }
        r.controller.enqueue(t.chunk);
        break;
      case 3:
        x(r, "close should have stream controller");
        if (r.isClosed) {
          break;
        }
        r.isClosed = true;
        r.controller.close();
        this.#eL(r, t_streamId);
        break;
      case 5:
        x(r, "error should have stream controller");
        r.controller.error(t8(t.reason));
        this.#eL(r, t_streamId);
        break;
      case 2:
        if (t.success) {
          r.cancelCall.resolve();
        } else {
          r.cancelCall.reject(t8(t.reason));
        }
        this.#eL(r, t_streamId);
        break;
      case 1:
        if (!n) {
          break;
        }
        new Promise((resolve) => {
          resolve(n.onCancel?.(t8(t.reason)));
        }).then(
          () => {
            comObj.postMessage({
              sourceName,
              targetName: t_sourceName,
              stream: 2,
              streamId: t_streamId,
              success: true,
            });
          },
          (t) => {
            comObj.postMessage({
              sourceName,
              targetName: t_sourceName,
              stream: 2,
              streamId: t_streamId,
              reason: t8(t),
            });
          },
        );
        n.sinkCapability.reject(t8(t.reason));
        n.isCancelled = true;
        delete this.streamSinks[t_streamId];
        break;
      default:
        throw Error("Unexpected stream case");
    }
  }
  async #eL(t, e) {
    await Promise.allSettled([
      t.startCall?.promise,
      t.pullCall?.promise,
      t.cancelCall?.promise,
    ]);
    delete this.streamControllers[e];
  }
  destroy() {
    this.#eI?.abort();
    this.#eI = null;
  }
}
class t9 {
  #eF;
  #eO;
  constructor({ parsedData, rawData }) {
    this.#eF = parsedData;
    this.#eO = rawData;
  }
  getRaw() {
    return this.#eO;
  }
  get(t) {
    return this.#eF.get(t) ?? null;
  }
  getAll() {
    return F(this.#eF);
  }
  has(t) {
    return this.#eF.has(t);
  }
}
let et = Symbol("INTERNAL");
class ee {
  #eN = false;
  #eB = false;
  #ez = false;
  #eH = true;
  constructor(t, { name, intent, usage, rbGroups }) {
    this.#eN = !!(2 & t);
    this.#eB = !!(4 & t);
    this.name = name;
    this.intent = intent;
    this.usage = usage;
    this.rbGroups = rbGroups;
  }
  get visible() {
    if (this.#ez) {
      return this.#eH;
    }
    if (!this.#eH) {
      return false;
    }
    let { print, view } = this.usage;
    if (this.#eN) {
      return view?.viewState !== "OFF";
    }
    return !this.#eB || print?.printState !== "OFF";
  }
  _setVisible(t, e, i = false) {
    if (t !== et) {
      _("Internal method `_setVisible` called.");
    }
    this.#ez = i;
    this.#eH = e;
  }
}
class ei {
  #ej = null;
  #eU = new Map();
  #e$ = null;
  #eG = null;
  constructor(t, e = 2) {
    this.renderingIntent = e;
    this.name = null;
    this.creator = null;
    if (t === null) {
      return;
    }
    for (let i of ((this.name = t.name),
    (this.creator = t.creator),
    (this.#eG = t.order),
    t.groups)) {
      this.#eU.set(i.id, new ee(e, i));
    }
    if (t.baseState === "OFF") {
      for (let t of this.#eU.values()) {
        t._setVisible(et, false);
      }
    }
    for (let e of t.on) {
      this.#eU.get(e)._setVisible(et, true);
    }
    for (let e of t.off) {
      this.#eU.get(e)._setVisible(et, false);
    }
    this.#e$ = this.getHash();
  }
  #eV(t) {
    let t_length = t.length;
    if (t_length < 2) {
      return true;
    }
    let i = t[0];
    for (let s = 1; s < t_length; s++) {
      let e;
      let a = t[s];
      if (Array.isArray(a)) {
        e = this.#eV(a);
      } else {
        if (!this.#eU.has(a)) {
          y(`Optional content group not found: ${a}`);
          return true;
        }
        e = this.#eU.get(a).visible;
      }
      switch (i) {
        case "And":
          if (!e) {
            return false;
          }
          break;
        case "Or":
          if (e) {
            return true;
          }
          break;
        case "Not":
          return !e;
        default:
          return true;
      }
    }
    return i === "And";
  }
  isVisible(t) {
    if (this.#eU.size === 0) {
      return true;
    }
    if (!t) {
      A("Optional content group not defined.");
      return true;
    }
    if (t.type === "OCG") {
      if (this.#eU.has(t.id)) {
        return this.#eU.get(t.id).visible;
      }
      y(`Optional content group not found: ${t.id}`);
      return true;
    }
    if (t.type === "OCMD") {
      if (t.expression) {
        return this.#eV(t.expression);
      }
      if (t.policy && t.policy !== "AnyOn") {
        if (t.policy === "AllOn") {
          for (let e of t.ids) {
            if (!this.#eU.has(e)) {
              y(`Optional content group not found: ${e}`);
              break;
            }
            if (!this.#eU.get(e).visible) {
              return false;
            }
          }
          return true;
        } else if (t.policy === "AnyOff") {
          for (let e of t.ids) {
            if (!this.#eU.has(e)) {
              y(`Optional content group not found: ${e}`);
              return true;
            }
            if (!this.#eU.get(e).visible) {
              return true;
            }
          }
          return false;
        } else if (t.policy === "AllOff") {
          for (let e of t.ids) {
            if (!this.#eU.has(e)) {
              y(`Optional content group not found: ${e}`);
              break;
            }
            if (this.#eU.get(e).visible) {
              return false;
            }
          }
          return true;
        }
      } else {
        for (let e of t.ids) {
          if (!this.#eU.has(e)) {
            y(`Optional content group not found: ${e}`);
            return true;
          }
          if (this.#eU.get(e).visible) {
            return true;
          }
        }
        return false;
      }
      y(`Unknown optional content policy ${t.policy}.`);
      return true;
    }
    y(`Unknown group type ${t.type}.`);
    return true;
  }
  setVisibility(t, e = true, i = true) {
    let s = this.#eU.get(t);
    if (!s) {
      return void y(`Optional content group not found: ${t}`);
    }
    if (i && e && s.rbGroups.length) {
      for (let e of s.rbGroups) {
        for (let i of e) {
          if (i !== t) {
            this.#eU.get(i)?._setVisible(et, false, true);
          }
        }
      }
    }
    s._setVisible(et, !!e, true);
    this.#ej = null;
  }
  setOCGState({ state, preserveRB }) {
    let i;
    for (let s of state) {
      switch (s) {
        case "ON":
        case "OFF":
        case "Toggle":
          i = s;
          continue;
      }
      let t = this.#eU.get(s);
      if (t) {
        switch (i) {
          case "ON":
            this.setVisibility(s, true, preserveRB);
            break;
          case "OFF":
            this.setVisibility(s, false, preserveRB);
            break;
          case "Toggle":
            this.setVisibility(s, !t.visible, preserveRB);
        }
      }
    }
    this.#ej = null;
  }
  get hasInitialVisibility() {
    return this.#e$ === null || this.getHash() === this.#e$;
  }
  getOrder() {
    if (this.#eU.size) {
      if (this.#eG) {
        return this.#eG.slice();
      }
      return [...this.#eU.keys()];
    }
    return null;
  }
  getGroups() {
    if (this.#eU.size > 0) {
      return F(this.#eU);
    }
    return null;
  }
  getGroup(t) {
    return this.#eU.get(t) || null;
  }
  getHash() {
    if (this.#ej !== null) {
      return this.#ej;
    }
    let t = new t_();
    for (let [e, i] of this.#eU) {
      t.update(`${e}:${i.visible}`);
    }
    return (this.#ej = t.hexdigest());
  }
}
class es {
  constructor(t, { disableRange = false, disableStream = false }) {
    x(
      t,
      'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.',
    );
    let { length, initialData, progressiveDone, contentDispositionFilename } =
      t;
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    if (initialData?.length > 0) {
      let t =
        initialData instanceof Uint8Array &&
        initialData.byteLength === initialData.buffer.byteLength
          ? initialData.buffer
          : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(t);
    }
    this._pdfDataRangeTransport = t;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    t.addRangeListener((t, e) => {
      this._onReceiveData({
        begin: t,
        chunk: e,
      });
    });
    t.addProgressListener((loaded, total) => {
      this._onProgress({
        loaded,
        total,
      });
    });
    t.addProgressiveReadListener((t) => {
      this._onReceiveData({
        chunk: t,
      });
    });
    t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    t.transportReady();
  }
  _onReceiveData({ begin, chunk }) {
    let i =
      chunk instanceof Uint8Array &&
      chunk.byteLength === chunk.buffer.byteLength
        ? chunk.buffer
        : new Uint8Array(chunk).buffer;
    if (begin === undefined) {
      if (this._fullRequestReader) {
        this._fullRequestReader._enqueue(i);
      } else {
        this._queuedChunks.push(i);
      }
    } else {
      x(
        this._rangeReaders.some(
          (e) => e._begin === begin && (e._enqueue(i), true),
        ),
        "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.",
      );
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t) {
    if (t.total === undefined) {
      this._rangeReaders[0]?.onProgress?.({
        loaded: t.loaded,
      });
    } else {
      this._fullRequestReader?.onProgress?.({
        loaded: t.loaded,
        total: t.total,
      });
    }
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(t) {
    let e = this._rangeReaders.indexOf(t);
    if (e >= 0) {
      this._rangeReaders.splice(e, 1);
    }
  }
  getFullReader() {
    x(
      !this._fullRequestReader,
      "PDFDataTransportStream.getFullReader can only be called once.",
    );
    let _queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    return new ea(
      this,
      _queuedChunks,
      this._progressiveDone,
      this._contentDispositionFilename,
    );
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    let i = new er(this, t, e);
    this._pdfDataRangeTransport.requestDataRange(t, e);
    this._rangeReaders.push(i);
    return i;
  }
  cancelAllRequests(t) {
    for (let e of (this._fullRequestReader?.cancel(t),
    this._rangeReaders.slice(0))) {
      e.cancel(t);
    }
    this._pdfDataRangeTransport.abort();
  }
}
class ea {
  constructor(t, e, i = false, s = null) {
    for (let a of ((this._stream = t),
    (this._done = i || false),
    (this._filename = K(s) ? s : null),
    (this._queuedChunks = e || []),
    (this._loaded = 0),
    this._queuedChunks)) {
      this._loaded += a.byteLength;
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    t._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({
          value: t,
          done: false,
        });
      } else {
        this._queuedChunks.push(t);
      }
      this._loaded += t.byteLength;
    }
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      return {
        value: this._queuedChunks.shift(),
        done: false,
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    let t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    for (let t of ((this._done = true), this._requests)) {
      t.resolve({
        value: undefined,
        done: true,
      });
    }
    this._requests.length = 0;
  }
  progressiveDone() {
    if (!this._done) {
      this._done = true;
    }
  }
}
class er {
  constructor(t, e, i) {
    this._stream = t;
    this._begin = e;
    this._end = i;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0) {
        this._queuedChunk = t;
      } else {
        for (let e of (this._requests.shift().resolve({
          value: t,
          done: false,
        }),
        this._requests)) {
          e.resolve({
            value: undefined,
            done: true,
          });
        }
        this._requests.length = 0;
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      let t = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: t,
        done: false,
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    let t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    for (let t of ((this._done = true), this._requests)) {
      t.resolve({
        value: undefined,
        done: true,
      });
    }
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
}
function en(isHttp, httpHeaders) {
  let i = new Headers();
  if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
    return i;
  }
  for (let t in httpHeaders) {
    let s = httpHeaders[t];
    if (s !== undefined) {
      i.append(t, s);
    }
  }
  return i;
}
function eo({ responseHeaders, isHttp, rangeChunkSize, disableRange }) {
  let a = {
    allowRangeRequests: false,
    suggestedLength: undefined,
  };
  let r = parseInt(responseHeaders.get("Content-Length"), 10);
  if (Number.isInteger(r)) {
    a.suggestedLength = r;
    if (
      !(
        r <= 2 * rangeChunkSize ||
        disableRange ||
        !isHttp ||
        responseHeaders.get("Accept-Ranges") !== "bytes" ||
        (responseHeaders.get("Content-Encoding") || "identity") !== "identity"
      )
    ) {
      a.allowRangeRequests = true;
    }
  }
  return a;
}
function el(t) {
  let e = t.get("Content-Disposition");
  if (e) {
    let t = ((t) => {
      let e = true;
      let i = s("filename\\*", "i").exec(t);
      if (i) {
        let t = n((i = i[1]));
        return r((t = l((t = o((t = unescape(t)))))));
      }
      if (
        (i = ((t) => {
          let e;
          let i = [];
          let a = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          while ((e = a.exec(t)) !== null) {
            let [, t, s, a] = e;
            if ((t = parseInt(t, 10)) in i) {
              if (t === 0) {
                break;
              }
              continue;
            }
            i[t] = [s, a];
          }
          let r = [];
          for (let t = 0; t < i.length && t in i; ++t) {
            let [e, s] = i[t];
            s = n(s);
            if (e) {
              s = unescape(s);
              if (t === 0) {
                s = o(s);
              }
            }
            r.push(s);
          }
          return r.join("");
        })(t))
      ) {
        return r(l(i));
      }
      if ((i = s("filename", "i").exec(t))) {
        let t = n((i = i[1]));
        return r((t = l(t)));
      }
      function s(t, e) {
        return RegExp(
          "(?:^|;)\\s*" +
            t +
            '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
          e,
        );
      }
      function a(t, i) {
        if (t) {
          if (!/^[\x00-\xFF]+$/.test(i)) {
            return i;
          }
          try {
            let s = new TextDecoder(t, {
              fatal: true,
            });
            let a = L(i);
            i = s.decode(a);
            e = false;
          } catch {}
        }
        return i;
      }
      function r(t) {
        if (e && /[\x80-\xff]/.test(t)) {
          t = a("utf-8", t);
          if (e) {
            t = a("iso-8859-1", t);
          }
        }
        return t;
      }
      function n(t) {
        if (t.startsWith('"')) {
          let e = t.slice(1).split('\\"');
          for (let t = 0; t < e.length; ++t) {
            let i = e[t].indexOf('"');
            if (i !== -1) {
              e[t] = e[t].slice(0, i);
              e.length = t + 1;
            }
            e[t] = e[t].replaceAll(/\\(.)/g, "$1");
          }
          t = e.join('"');
        }
        return t;
      }
      function o(t) {
        let e = t.indexOf("'");
        if (e === -1) {
          return t;
        }
        return a(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
      }
      function l(t) {
        if (!t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)) {
          return t;
        }
        return t.replaceAll(
          /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
          (t, e, i, s) => {
            if (i === "q" || i === "Q") {
              return a(
                e,
                (s = (s = s.replaceAll("_", " ")).replaceAll(
                  /=([0-9a-fA-F]{2})/g,
                  (t, e) => String.fromCharCode(parseInt(e, 16)),
                )),
              );
            }
            try {
              s = atob(s);
            } catch {}
            return a(e, s);
          },
        );
      }
      return "";
    })(e);
    if (t.includes("%")) {
      try {
        t = decodeURIComponent(t);
      } catch {}
    }
    if (K(t)) {
      return t;
    }
  }
  return null;
}
function eh(t, e) {
  if (t === 404 || (t === 0 && e.startsWith("file:"))) {
    return new k('Missing PDF "' + e + '".');
  }
  return new I(
    `Unexpected server response (${t}) while retrieving PDF "${e}".`,
    t,
  );
}
function ed(status) {
  return status === 200 || status === 206;
}
function ec(t, _withCredentials, _abortController) {
  return {
    method: "GET",
    headers: t,
    signal: _abortController.signal,
    mode: "cors",
    credentials: _withCredentials ? "include" : "same-origin",
    redirect: "follow",
  };
}
function eu(t) {
  if (t instanceof Uint8Array) {
    return t.buffer;
  }
  if (t instanceof ArrayBuffer) {
    return t;
  }
  y(`getArrayBuffer - unexpected data format: ${t}`);
  return new Uint8Array(t).buffer;
}
class ep {
  constructor(t) {
    this.source = t;
    this.isHttp = /^https?:/i.test(t.url);
    this.headers = en(this.isHttp, t.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    x(
      !this._fullRequestReader,
      "PDFFetchStream.getFullReader can only be called once.",
    );
    this._fullRequestReader = new eg(this);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    let i = new em(this, t, e);
    this._rangeRequestReaders.push(i);
    return i;
  }
  cancelAllRequests(t) {
    for (let e of (this._fullRequestReader?.cancel(t),
    this._rangeRequestReaders.slice(0))) {
      e.cancel(t);
    }
  }
}
class eg {
  constructor(t) {
    this._stream = t;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    let e = t.source;
    this._withCredentials = e.withCredentials || false;
    this._contentLength = e.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e.disableRange || false;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!(this._rangeChunkSize || this._disableRange)) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !e.disableStream;
    this._isRangeSupported = !e.disableRange;
    let i = new Headers(t.headers);
    let s = e.url;
    fetch(s, ec(i, this._withCredentials, this._abortController))
      .then((e) => {
        if (!ed(e.status)) {
          throw eh(e.status, s);
        }
        this._reader = e.body.getReader();
        this._headersCapability.resolve();
        let e_headers = e.headers;
        let { allowRangeRequests, suggestedLength } = eo({
          responseHeaders: e_headers,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
        this._isRangeSupported = allowRangeRequests;
        this._contentLength = suggestedLength || this._contentLength;
        this._filename = el(e_headers);
        if (!this._isStreamingSupported && this._isRangeSupported) {
          this.cancel(new R("Streaming is disabled."));
        }
      })
      .catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    let { value, done } = await this._reader.read();
    if (done) {
      return {
        value,
        done,
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength,
    });
    return {
      value: eu(value),
      done: false,
    };
  }
  cancel(t) {
    this._reader?.cancel(t);
    this._abortController.abort();
  }
}
class em {
  constructor(t, e, i) {
    this._stream = t;
    this._reader = null;
    this._loaded = 0;
    let s = t.source;
    this._withCredentials = s.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !s.disableStream;
    this._abortController = new AbortController();
    let a = new Headers(t.headers);
    a.append("Range", `bytes=${e}-${i - 1}`);
    let r = s.url;
    fetch(r, ec(a, this._withCredentials, this._abortController))
      .then((t) => {
        if (!ed(t.status)) {
          throw eh(t.status, r);
        }
        this._readCapability.resolve();
        this._reader = t.body.getReader();
      })
      .catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    let { value, done } = await this._reader.read();
    if (done) {
      return {
        value,
        done,
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded,
    });
    return {
      value: eu(value),
      done: false,
    };
  }
  cancel(t) {
    this._reader?.cancel(t);
    this._abortController.abort();
  }
}
class ef {
  constructor({ url, httpHeaders, withCredentials }) {
    this.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.headers = en(this.isHttp, httpHeaders);
    this.withCredentials = withCredentials || false;
    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }
  requestRange(t, end, i) {
    let s = {
      begin: t,
      end,
    };
    for (let t in i) {
      s[t] = i[t];
    }
    return this.request(s);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    let xhr = new XMLHttpRequest();
    let i = this.currXhrId++;
    let s = (this.pendingRequests[i] = {
      xhr,
    });
    for (let [t, i] of (xhr.open("GET", this.url),
    (xhr.withCredentials = this.withCredentials),
    this.headers)) {
      xhr.setRequestHeader(t, i);
    }
    if (this.isHttp && "begin" in t && "end" in t) {
      xhr.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`);
      s.expectedStatus = 206;
    } else {
      s.expectedStatus = 200;
    }
    xhr.responseType = "arraybuffer";
    if (t.onError) {
      xhr.onerror = function (i) {
        t.onError(xhr.status);
      };
    }
    xhr.onreadystatechange = this.onStateChange.bind(this, i);
    xhr.onprogress = this.onProgress.bind(this, i);
    s.onHeadersReceived = t.onHeadersReceived;
    s.onDone = t.onDone;
    s.onError = t.onError;
    s.onProgress = t.onProgress;
    xhr.send(null);
    return i;
  }
  onProgress(t, e) {
    let i = this.pendingRequests[t];
    if (i) {
      i.onProgress?.(e);
    }
  }
  onStateChange(t, e) {
    let i;
    let s = this.pendingRequests[t];
    if (!s) {
      return;
    }
    let s_xhr = s.xhr;
    if (s_xhr.readyState >= 2 && s.onHeadersReceived) {
      s.onHeadersReceived();
      delete s.onHeadersReceived;
    }
    if (s_xhr.readyState !== 4 || !(t in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[t];
    if (s_xhr.status === 0 && this.isHttp) {
      return void s.onError?.(s_xhr.status);
    }
    let r = s_xhr.status || 200;
    if ((r !== 200 || s.expectedStatus !== 206) && r !== s.expectedStatus) {
      return void s.onError?.(s_xhr.status);
    }
    let n = typeof (i = s_xhr.response) !== "string" ? i : L(i).buffer;
    if (r === 206) {
      let t = s_xhr.getResponseHeader("Content-Range");
      let e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
      s.onDone({
        begin: parseInt(e[1], 10),
        chunk: n,
      });
    } else {
      if (n) {
        s.onDone({
          begin: 0,
          chunk: n,
        });
      } else {
        s.onError?.(s_xhr.status);
      }
    }
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    let xhr = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t];
    xhr.abort();
  }
}
class eb {
  constructor(t) {
    this._source = t;
    this._manager = new ef(t);
    this._rangeChunkSize = t.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    let e = this._rangeRequestReaders.indexOf(t);
    if (e >= 0) {
      this._rangeRequestReaders.splice(e, 1);
    }
  }
  getFullReader() {
    x(
      !this._fullRequestReader,
      "PDFNetworkStream.getFullReader can only be called once.",
    );
    this._fullRequestReader = new ev(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    let i = new eA(this._manager, t, e);
    i.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(i);
    return i;
  }
  cancelAllRequests(t) {
    for (let e of (this._fullRequestReader?.cancel(t),
    this._rangeRequestReaders.slice(0))) {
      e.cancel(t);
    }
  }
}
class ev {
  constructor(t, e) {
    this._manager = t;
    let i = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    };
    this._url = e.url;
    this._fullRequestId = t.requestFull(i);
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e.disableRange || false;
    this._contentLength = e.length;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!(this._rangeChunkSize || this._disableRange)) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    let _fullRequestId = this._fullRequestId;
    let e = new Headers(
      this._manager
        .getRequestXhr(_fullRequestId)
        .getAllResponseHeaders()
        .trim()
        .split(/[\r\n]+/)
        .map((t) => {
          let [e, ...i] = t.split(": ");
          return [e, i.join(": ")];
        }),
    );
    let { allowRangeRequests, suggestedLength } = eo({
      responseHeaders: e,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange,
    });
    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = el(e);
    if (this._isRangeSupported) {
      this._manager.abortRequest(_fullRequestId);
    }
    this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({
          value: t.chunk,
          done: false,
        });
      } else {
        this._cachedChunks.push(t.chunk);
      }
    }
    this._done = true;
    if (!(this._cachedChunks.length > 0)) {
      for (let t of this._requests) {
        t.resolve({
          value: undefined,
          done: true,
        });
      }
      this._requests.length = 0;
    }
  }
  _onError(t) {
    for (let e of ((this._storedError = eh(t, this._url)),
    this._headersCapability.reject(this._storedError),
    this._requests)) {
      e.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    this.onProgress?.({
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength,
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      return {
        value: this._cachedChunks.shift(),
        done: false,
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    let t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    for (let e of ((this._done = true),
    this._headersCapability.reject(t),
    this._requests)) {
      e.resolve({
        value: undefined,
        done: true,
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
}
class eA {
  constructor(t, e, i) {
    this._manager = t;
    let s = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    };
    this._url = t.url;
    this._requestId = t.requestRange(e, i, s);
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = undefined;
    this.onProgress = null;
    this.onClosed = null;
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(t) {
    let t_chunk = t.chunk;
    for (let t of (this._requests.length > 0
      ? this._requests.shift().resolve({
          value: t_chunk,
          done: false,
        })
      : (this._queuedChunk = t_chunk),
    (this._done = true),
    this._requests)) {
      t.resolve({
        value: undefined,
        done: true,
      });
    }
    this._requests.length = 0;
    this._close();
  }
  _onError(t) {
    for (let e of ((this._storedError = eh(t, this._url)), this._requests)) {
      e.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(t) {
    if (!this.isStreamingSupported) {
      this.onProgress?.({
        loaded: t.loaded,
      });
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      let t = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: t,
        done: false,
      };
    }
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    let t = Promise.withResolvers();
    this._requests.push(t);
    return t.promise;
  }
  cancel(t) {
    for (let t of ((this._done = true), this._requests)) {
      t.resolve({
        value: undefined,
        done: true,
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
}
let ey = /^[a-z][a-z0-9\-+.]+:/i;
function e_(t, e, i) {
  if (t.protocol === "http:") {
    return tF.get("http").request(
      t,
      {
        headers: e,
      },
      i,
    );
  }
  return tF.get("https").request(
    t,
    {
      headers: e,
    },
    i,
  );
}
class ex {
  constructor(t) {
    var e;
    this.source = t;
    this.url =
      ((e = t.url), new URL(ey.test(e) ? e : tF.get("url").pathToFileURL(e)));
    this.isHttp =
      this.url.protocol === "http:" || this.url.protocol === "https:";
    this.isFsUrl = this.url.protocol === "file:";
    this.headers = en(this.isHttp, t.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    x(
      !this._fullRequestReader,
      "PDFNodeStream.getFullReader can only be called once.",
    );
    this._fullRequestReader = this.isFsUrl ? new eT(this) : new eE(this);
    return this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) {
      return null;
    }
    let i = this.isFsUrl ? new eM(this, t, e) : new eS(this, t, e);
    this._rangeRequestReaders.push(i);
    return i;
  }
  cancelAllRequests(t) {
    for (let e of (this._fullRequestReader?.cancel(t),
    this._rangeRequestReaders.slice(0))) {
      e.cancel(t);
    }
  }
}
class ew {
  constructor(t) {
    this._url = t.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    let e = t.source;
    this._contentLength = e.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = e.disableRange || false;
    this._rangeChunkSize = e.rangeChunkSize;
    if (!(this._rangeChunkSize || this._disableRange)) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !e.disableStream;
    this._isRangeSupported = !e.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    let t = this._readableStream.read();
    if (t === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t.length;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength,
    });
    return {
      value: new Uint8Array(t).buffer,
      done: false,
    };
  }
  cancel(t) {
    if (this._readableStream) {
      this._readableStream.destroy(t);
    } else {
      this._error(t);
    }
  }
  _error(t) {
    this._storedError = t;
    this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t;
    t.on("readable", () => {
      this._readCapability.resolve();
    });
    t.on("end", () => {
      t.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t.on("error", (t) => {
      this._error(t);
    });
    if (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new R("streaming is disabled"));
    }
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
class eC {
  constructor(t) {
    this._url = t.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    let e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: undefined,
        done: true,
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    let t = this._readableStream.read();
    if (t === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t.length;
    this.onProgress?.({
      loaded: this._loaded,
    });
    return {
      value: new Uint8Array(t).buffer,
      done: false,
    };
  }
  cancel(t) {
    if (this._readableStream) {
      this._readableStream.destroy(t);
    } else {
      this._error(t);
    }
  }
  _error(t) {
    this._storedError = t;
    this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t;
    t.on("readable", () => {
      this._readCapability.resolve();
    });
    t.on("end", () => {
      t.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t.on("error", (t) => {
      this._error(t);
    });
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
}
class eE extends ew {
  constructor(t) {
    super(t);
    let e = Object.fromEntries(t.headers);
    let i = (e) => {
      if (e.statusCode === 404) {
        let t = new k(`Missing PDF "${this._url}".`);
        this._storedError = t;
        this._headersCapability.reject(t);
        return;
      }
      this._headersCapability.resolve();
      this._setReadableStream(e);
      let i = new Headers(this._readableStream.headers);
      let { allowRangeRequests, suggestedLength } = eo({
        responseHeaders: i,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = el(i);
    };
    this._request = e_(this._url, e, i);
    this._request.on("error", (t) => {
      this._storedError = t;
      this._headersCapability.reject(t);
    });
    this._request.end();
  }
}
class eS extends eC {
  constructor(t, e, i) {
    super(t);
    let s = Object.fromEntries(t.headers);
    s.Range = `bytes=${e}-${i - 1}`;
    let a = (t) => {
      if (t.statusCode === 404) {
        let t = new k(`Missing PDF "${this._url}".`);
        this._storedError = t;
        return;
      }
      this._setReadableStream(t);
    };
    this._request = e_(this._url, s, a);
    this._request.on("error", (t) => {
      this._storedError = t;
    });
    this._request.end();
  }
}
class eT extends ew {
  constructor(t) {
    super(t);
    let e = tF.get("fs");
    e.promises.lstat(this._url).then(
      (t) => {
        this._contentLength = t.size;
        this._setReadableStream(e.createReadStream(this._url));
        this._headersCapability.resolve();
      },
      (t) => {
        if (t.code === "ENOENT") {
          t = new k(`Missing PDF "${this._url}".`);
        }
        this._storedError = t;
        this._headersCapability.reject(t);
      },
    );
  }
}
class eM extends eC {
  constructor(t, start, i) {
    super(t);
    let s = tF.get("fs");
    this._setReadableStream(
      s.createReadStream(this._url, {
        start,
        end: i - 1,
      }),
    );
  }
}
class ek {
  #eW = Promise.withResolvers();
  #tu = null;
  #eq = false;
  #eX = !!globalThis.FontInspector?.enabled;
  #eK = null;
  #eY = null;
  #eQ = 0;
  #eJ = 0;
  #eZ = null;
  #e0 = null;
  #e1 = 0;
  #e2 = 0;
  #e3 = Object.create(null);
  #e5 = [];
  #e6 = null;
  #e4 = [];
  #e8 = new WeakMap();
  #e7 = null;
  static #e9 = new Map();
  static #it = new Map();
  static #ie = new WeakMap();
  static #ii = null;
  static #is = new Set();
  constructor({ textContentSource, container, viewport }) {
    if (textContentSource instanceof ReadableStream) {
      this.#e6 = textContentSource;
    } else if (typeof textContentSource === "object") {
      this.#e6 = new ReadableStream({
        start(e) {
          e.enqueue(textContentSource);
          e.close();
        },
      });
    } else {
      throw Error('No "textContentSource" parameter specified.');
    }
    this.#tu = this.#e0 = container;
    this.#e2 = viewport.scale * (globalThis.devicePixelRatio || 1);
    this.#e1 = viewport.rotation;
    this.#eY = {
      div: null,
      properties: null,
      ctx: null,
    };
    let { pageWidth, pageHeight, pageX, pageY } = viewport.rawDims;
    this.#e7 = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this.#eJ = pageWidth;
    this.#eQ = pageHeight;
    ek.#ia();
    to(container, viewport);
    this.#eW.promise
      .finally(() => {
        ek.#is.delete(this);
        this.#eY = null;
        this.#e3 = null;
      })
      .catch(() => {});
  }
  static get fontFamilyMap() {
    let { isWindows, isFirefox } = O.platform;
    return C(
      this,
      "fontFamilyMap",
      new Map([
        [
          "sans-serif",
          `${isWindows && isFirefox ? "Calibri, " : ""}sans-serif`,
        ],
        [
          "monospace",
          `${isWindows && isFirefox ? "Lucida Console, " : ""}monospace`,
        ],
      ]),
    );
  }
  render() {
    let t = () => {
      this.#eZ.read().then(({ value, done }) => {
        if (done) {
          this.#eW.resolve();
        } else {
          this.#eK ??= value.lang;
          Object.assign(this.#e3, value.styles);
          this.#ir(value.items);
          t();
        }
      }, this.#eW.reject);
    };
    this.#eZ = this.#e6.getReader();
    ek.#is.add(this);
    t();
    return this.#eW.promise;
  }
  update({ viewport, onBefore = null }) {
    let i = viewport.scale * (globalThis.devicePixelRatio || 1);
    let viewport_rotation = viewport.rotation;
    if (viewport_rotation !== this.#e1) {
      onBefore?.();
      this.#e1 = viewport_rotation;
      to(this.#e0, {
        rotation: viewport_rotation,
      });
    }
    if (i !== this.#e2) {
      onBefore?.();
      this.#e2 = i;
      let t = {
        div: null,
        properties: null,
        ctx: ek.#io(this.#eK),
      };
      for (let e of this.#e4) {
        t.properties = this.#e8.get(e);
        t.div = e;
        this.#il(t);
      }
    }
  }
  cancel() {
    let t = new R("TextLayer task cancelled.");
    this.#eZ?.cancel(t).catch(() => {});
    this.#eZ = null;
    this.#eW.reject(t);
  }
  get textDivs() {
    return this.#e4;
  }
  get textContentItemsStr() {
    return this.#e5;
  }
  #ir(t) {
    if (this.#eq) {
      return;
    }
    this.#eY.ctx ??= ek.#io(this.#eK);
    let e = this.#e4;
    let i = this.#e5;
    for (let s of t) {
      if (e.length > 100000) {
        y("Ignoring additional textDivs for performance reasons.");
        this.#eq = true;
        return;
      }
      if (s.str === undefined) {
        if (
          s.type === "beginMarkedContentProps" ||
          s.type === "beginMarkedContent"
        ) {
          let t = this.#tu;
          this.#tu = document.createElement("span");
          this.#tu.classList.add("markedContent");
          if (s.id !== null) {
            this.#tu.setAttribute("id", `${s.id}`);
          }
          t.append(this.#tu);
        } else {
          if (s.type === "endMarkedContent") {
            this.#tu = this.#tu.parentNode;
          }
        }
        continue;
      }
      i.push(s.str);
      this.#ih(s);
    }
  }
  #ih(t) {
    let e;
    let i;
    let s = document.createElement("span");
    let a = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== "",
      hasEOL: t.hasEOL,
      fontSize: 0,
    };
    this.#e4.push(s);
    let r = B.transform(this.#e7, t.transform);
    let n = Math.atan2(r[1], r[0]);
    let o = this.#e3[t.fontName];
    if (o.vertical) {
      n += Math.PI / 2;
    }
    let l = (this.#eX && o.fontSubstitution) || o.fontFamily;
    l = ek.fontFamilyMap.get(l) || l;
    let h = Math.hypot(r[2], r[3]);
    let d = h * ek.#id(l, this.#eK);
    if (n === 0) {
      e = r[4];
      i = r[5] - d;
    } else {
      e = r[4] + d * Math.sin(n);
      i = r[5] - d * Math.cos(n);
    }
    let c = "calc(var(--scale-factor)*";
    let s_style = s.style;
    if (this.#tu === this.#e0) {
      s_style.left = `${((100 * e) / this.#eJ).toFixed(2)}%`;
      s_style.top = `${((100 * i) / this.#eQ).toFixed(2)}%`;
    } else {
      s_style.left = `${c}${e.toFixed(2)}px)`;
      s_style.top = `${c}${i.toFixed(2)}px)`;
    }
    s_style.fontSize = `${c}${(ek.#ii * h).toFixed(2)}px)`;
    s_style.fontFamily = l;
    a.fontSize = h;
    s.setAttribute("role", "presentation");
    s.textContent = t.str;
    s.dir = t.dir;
    if (this.#eX) {
      s.dataset.fontName = o.fontSubstitutionLoadedName || t.fontName;
    }
    if (n !== 0) {
      a.angle = (180 / Math.PI) * n;
    }
    let p = false;
    if (t.str.length > 1) {
      p = true;
    } else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
      let e = Math.abs(t.transform[0]);
      let i = Math.abs(t.transform[3]);
      if (e !== i && Math.max(e, i) / Math.min(e, i) > 1.5) {
        p = true;
      }
    }
    if (p) {
      a.canvasWidth = o.vertical ? t.height : t.width;
    }
    this.#e8.set(s, a);
    this.#eY.div = s;
    this.#eY.properties = a;
    this.#il(this.#eY);
    if (a.hasText) {
      this.#tu.append(s);
    }
    if (a.hasEOL) {
      let t = document.createElement("br");
      t.setAttribute("role", "presentation");
      this.#tu.append(t);
    }
  }
  #il(t) {
    let { div, properties, ctx } = t;
    let { style } = div;
    let r = "";
    if (ek.#ii > 1) {
      r = `scale(${1 / ek.#ii})`;
    }
    if (properties.canvasWidth !== 0 && properties.hasText) {
      let { fontFamily } = style;
      let { canvasWidth, fontSize } = properties;
      ek.#ic(ctx, fontSize * this.#e2, fontFamily);
      let { width } = ctx.measureText(div.textContent);
      if (width > 0) {
        r = `scaleX(${(canvasWidth * this.#e2) / width}) ${r}`;
      }
    }
    if (properties.angle !== 0) {
      r = `rotate(${properties.angle}deg) ${r}`;
    }
    if (r.length > 0) {
      style.transform = r;
    }
  }
  static cleanup() {
    if (!(this.#is.size > 0)) {
      for (let { canvas } of (this.#e9.clear(), this.#it.values())) {
        canvas.remove();
      }
      this.#it.clear();
    }
  }
  static #io(t = null) {
    let e = this.#it.get((t ||= ""));
    if (!e) {
      let i = document.createElement("canvas");
      i.className = "hiddenCanvasElement";
      i.lang = t;
      document.body.append(i);
      e = i.getContext("2d", {
        alpha: false,
        willReadFrequently: true,
      });
      this.#it.set(t, e);
      this.#ie.set(e, {
        size: 0,
        family: "",
      });
    }
    return e;
  }
  static #ic(t, e, i) {
    let s = this.#ie.get(t);
    if (e !== s.size || i !== s.family) {
      t.font = `${e}px ${i}`;
      s.size = e;
      s.family = i;
    }
  }
  static #ia() {
    if (this.#ii !== null) {
      return;
    }
    let t = document.createElement("div");
    t.style.opacity = 0;
    t.style.lineHeight = 1;
    t.style.fontSize = "1px";
    t.style.position = "absolute";
    t.textContent = "X";
    document.body.append(t);
    this.#ii = t.getBoundingClientRect().height;
    t.remove();
  }
  static #id(t, e) {
    let i = this.#e9.get(t);
    if (i) {
      return i;
    }
    let s = this.#io(e);
    s.canvas.width = s.canvas.height = 30;
    this.#ic(s, 30, t);
    let a = s.measureText("");
    let a_fontBoundingBoxAscent = a.fontBoundingBoxAscent;
    let n = Math.abs(a.fontBoundingBoxDescent);
    if (a_fontBoundingBoxAscent) {
      let e = a_fontBoundingBoxAscent / (a_fontBoundingBoxAscent + n);
      this.#e9.set(t, e);
      s.canvas.width = s.canvas.height = 0;
      return e;
    }
    s.strokeStyle = "red";
    s.clearRect(0, 0, 30, 30);
    s.strokeText("g", 0, 0);
    let data = s.getImageData(0, 0, 30, 30).data;
    n = 0;
    for (let t = data.length - 1 - 3; t >= 0; t -= 4) {
      if (data[t] > 0) {
        n = Math.ceil(t / 4 / 30);
        break;
      }
    }
    s.clearRect(0, 0, 30, 30);
    s.strokeText("A", 0, 30);
    data = s.getImageData(0, 0, 30, 30).data;
    a_fontBoundingBoxAscent = 0;
    for (let t = 0, e = data.length; t < e; t += 4) {
      if (data[t] > 0) {
        a_fontBoundingBoxAscent = 30 - Math.floor(t / 4 / 30);
        break;
      }
    }
    s.canvas.width = s.canvas.height = 0;
    let l = a_fontBoundingBoxAscent
      ? a_fontBoundingBoxAscent / (a_fontBoundingBoxAscent + n)
      : 0.8;
    this.#e9.set(t, l);
    return l;
  }
}
class eI {
  static textContent(t) {
    let items = [];
    let i = {
      items,
      styles: Object.create(null),
    };
    (function t(i) {
      if (!i) {
        return;
      }
      let s = null;
      let i_name = i.name;
      if (i_name === "#text") {
        s = i.value;
      } else {
        if (!eI.shouldBuildText(i_name)) {
          return;
        }
        if (i?.attributes?.textContent) {
          s = i.attributes.textContent;
        } else if (i.value) {
          s = i.value;
        }
      }
      if (s !== null) {
        items.push({
          str: s,
        });
      }
      if (i.children) {
        for (let e of i.children) {
          t(e);
        }
      }
    })(t);
    return i;
  }
  static shouldBuildText(t) {
    return (
      t !== "textarea" && t !== "input" && t !== "option" && t !== "select"
    );
  }
}
let eP = o
  ? class extends tT {
      _createCanvas(t, e) {
        return tF.get("canvas").createCanvas(t, e);
      }
    }
  : class extends tT {
      constructor({ ownerDocument = globalThis.document, enableHWA = false }) {
        super({
          enableHWA,
        });
        this._document = ownerDocument;
      }
      _createCanvas(t, e) {
        let i = this._document.createElement("canvas");
        i.width = t;
        i.height = e;
        return i;
      }
    };
let eR = o
  ? class extends tM {
      async _fetch(t) {
        return tO(t);
      }
    }
  : tk;
let eD = o
  ? class extends tI {}
  : class extends tI {
      #iu;
      #ip;
      #ig;
      #im;
      #ib;
      #iv;
      #A = 0;
      constructor({ docId, ownerDocument = globalThis.document }) {
        super();
        this.#im = docId;
        this.#ib = ownerDocument;
      }
      get #_() {
        return (this.#ip ||= new Map());
      }
      get #iA() {
        return (this.#iv ||= new Map());
      }
      get #iy() {
        if (!this.#ig) {
          let t = this.#ib.createElement("div");
          let { style } = t;
          style.visibility = "hidden";
          style.contain = "strict";
          style.width = style.height = 0;
          style.position = "absolute";
          style.top = style.left = 0;
          style.zIndex = -1;
          let i = this.#ib.createElementNS($, "svg");
          i.setAttribute("width", 0);
          i.setAttribute("height", 0);
          this.#ig = this.#ib.createElementNS($, "defs");
          t.append(i);
          i.append(this.#ig);
          this.#ib.body.append(t);
        }
        return this.#ig;
      }
      #i_(t) {
        if (t.length === 1) {
          let e = t[0];
          let i = Array(256);
          for (let t = 0; t < 256; t++) {
            i[t] = e[t] / 255;
          }
          let s = i.join(",");
          return [s, s, s];
        }
        let [e, i, s] = t;
        let a = Array(256);
        let r = Array(256);
        let n = Array(256);
        for (let t = 0; t < 256; t++) {
          a[t] = e[t] / 255;
          r[t] = i[t] / 255;
          n[t] = s[t] / 255;
        }
        return [a.join(","), r.join(","), n.join(",")];
      }
      #ix(t) {
        if (this.#iu === undefined) {
          this.#iu = "";
          let t = this.#ib.URL;
          if (t !== this.#ib.baseURI) {
            if (X(t)) {
              y('#createUrl: ignore "data:"-URL for performance reasons.');
            } else {
              this.#iu = t.split("#", 1)[0];
            }
          }
        }
        return `url(${this.#iu}#${t})`;
      }
      addFilter(t) {
        if (!t) {
          return "none";
        }
        let e = this.#_.get(t);
        if (e) {
          return e;
        }
        let [i, s, a] = this.#i_(t);
        let r = t.length === 1 ? i : `${i}${s}${a}`;
        if ((e = this.#_.get(r))) {
          this.#_.set(t, e);
          return e;
        }
        let n = `g_${this.#im}_transfer_map_${this.#A++}`;
        let o = this.#ix(n);
        this.#_.set(t, o);
        this.#_.set(r, o);
        let l = this.#iw(n);
        this.#iC(i, s, a, l);
        return o;
      }
      addHCMFilter(t, e) {
        let i = `${t}-${e}`;
        let s = "base";
        let a = this.#iA.get(s);
        if (
          a?.key === i ||
          (a
            ? (a.filter?.remove(),
              (a.key = i),
              (a.url = "none"),
              (a.filter = null))
            : ((a = {
                key: i,
                url: "none",
                filter: null,
              }),
              this.#iA.set(s, a)),
          !t || !e)
        ) {
          return a.url;
        }
        let r = this.#iE(t);
        t = B.makeHexColor(...r);
        let n = this.#iE(e);
        e = B.makeHexColor(...n);
        this.#iy.style.color = "";
        if ((t === "#000000" && e === "#ffffff") || t === e) {
          return a.url;
        }
        let o = Array(256);
        for (let t = 0; t <= 255; t++) {
          let e = t / 255;
          o[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
        }
        let l = o.join(",");
        let h = `g_${this.#im}_hcm_filter`;
        let d = (a.filter = this.#iw(h));
        this.#iC(l, l, l, d);
        this.#iS(d);
        let c = (t, e) => {
          let i = r[t] / 255;
          let s = n[t] / 255;
          let a = Array(e + 1);
          for (let t = 0; t <= e; t++) {
            a[t] = i + (t / e) * (s - i);
          }
          return a.join(",");
        };
        this.#iC(c(0, 5), c(1, 5), c(2, 5), d);
        a.url = this.#ix(h);
        return a.url;
      }
      addAlphaFilter(t) {
        let e = this.#_.get(t);
        if (e) {
          return e;
        }
        let [i] = this.#i_([t]);
        let s = `alpha_${i}`;
        if ((e = this.#_.get(s))) {
          this.#_.set(t, e);
          return e;
        }
        let a = `g_${this.#im}_alpha_map_${this.#A++}`;
        let r = this.#ix(a);
        this.#_.set(t, r);
        this.#_.set(s, r);
        let n = this.#iw(a);
        this.#iT(i, n);
        return r;
      }
      addLuminosityFilter(t) {
        let e;
        let i;
        let s = this.#_.get(t || "luminosity");
        if (s) {
          return s;
        }
        if (t) {
          [e] = this.#i_([t]);
          i = `luminosity_${e}`;
        } else {
          i = "luminosity";
        }
        if ((s = this.#_.get(i))) {
          this.#_.set(t, s);
          return s;
        }
        let a = `g_${this.#im}_luminosity_map_${this.#A++}`;
        let r = this.#ix(a);
        this.#_.set(t, r);
        this.#_.set(i, r);
        let n = this.#iw(a);
        this.#iM(n);
        if (t) {
          this.#iT(e, n);
        }
        return r;
      }
      addHighlightHCMFilter(t, e, i, s, a) {
        let r = `${e}-${i}-${s}-${a}`;
        let n = this.#iA.get(t);
        if (
          n?.key === r ||
          (n
            ? (n.filter?.remove(),
              (n.key = r),
              (n.url = "none"),
              (n.filter = null))
            : ((n = {
                key: r,
                url: "none",
                filter: null,
              }),
              this.#iA.set(t, n)),
          !e || !i)
        ) {
          return n.url;
        }
        let [o, l] = [e, i].map(this.#iE.bind(this));
        let h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]);
        let d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]);
        let [c, u] = [s, a].map(this.#iE.bind(this));
        if (d < h) {
          [h, d, c, u] = [d, h, u, c];
        }
        this.#iy.style.color = "";
        let p = (t, e, i) => {
          let s = Array(256);
          let a = (d - h) / i;
          let r = t / 255;
          let n = (e - t) / (255 * i);
          let o = 0;
          for (let t = 0; t <= i; t++) {
            let e = Math.round(h + t * a);
            let i = r + t * n;
            for (let t = o; t <= e; t++) {
              s[t] = i;
            }
            o = e + 1;
          }
          for (let t = o; t < 256; t++) {
            s[t] = s[o - 1];
          }
          return s.join(",");
        };
        let g = `g_${this.#im}_hcm_${t}_filter`;
        let m = (n.filter = this.#iw(g));
        this.#iS(m);
        this.#iC(p(c[0], u[0], 5), p(c[1], u[1], 5), p(c[2], u[2], 5), m);
        n.url = this.#ix(g);
        return n.url;
      }
      destroy(t = false) {
        if (!(t && this.#iA.size !== 0)) {
          if (this.#ig) {
            this.#ig.parentNode.parentNode.remove();
            this.#ig = null;
          }
          if (this.#ip) {
            this.#ip.clear();
            this.#ip = null;
          }
          this.#A = 0;
        }
      }
      #iM(t) {
        let e = this.#ib.createElementNS($, "feColorMatrix");
        e.setAttribute("type", "matrix");
        e.setAttribute(
          "values",
          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0",
        );
        t.append(e);
      }
      #iS(t) {
        let e = this.#ib.createElementNS($, "feColorMatrix");
        e.setAttribute("type", "matrix");
        e.setAttribute(
          "values",
          "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0",
        );
        t.append(e);
      }
      #iw(t) {
        let e = this.#ib.createElementNS($, "filter");
        e.setAttribute("color-interpolation-filters", "sRGB");
        e.setAttribute("id", t);
        this.#iy.append(e);
        return e;
      }
      #ik(t, e, i) {
        let s = this.#ib.createElementNS($, e);
        s.setAttribute("type", "discrete");
        s.setAttribute("tableValues", i);
        t.append(s);
      }
      #iC(t, e, i, s) {
        let a = this.#ib.createElementNS($, "feComponentTransfer");
        s.append(a);
        this.#ik(a, "feFuncR", t);
        this.#ik(a, "feFuncG", e);
        this.#ik(a, "feFuncB", i);
      }
      #iT(t, e) {
        let i = this.#ib.createElementNS($, "feComponentTransfer");
        e.append(i);
        this.#ik(i, "feFuncA", t);
      }
      #iE(t) {
        this.#iy.style.color = t;
        return ta(getComputedStyle(this.#iy).getPropertyValue("color"));
      }
    };
let eL = o
  ? class extends tP {
      async _fetch(t) {
        return tO(t);
      }
    }
  : tR;
function eF(t = {}) {
  if (typeof t === "string" || t instanceof URL) {
    t = {
      url: t,
    };
  } else if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) {
    t = {
      data: t,
    };
  }
  let e = new eN();
  let { docId } = e;
  let url = t.url
    ? ((t) => {
        if (t instanceof URL) {
          return t.href;
        }
        try {
          return new URL(t, window.location).href;
        } catch {
          if (o && typeof t === "string") {
            return t;
          }
        }
        throw Error(
          "Invalid PDF url data: either string or URL-object is expected in the url property.",
        );
      })(t.url)
    : null;
  let r = t.data
    ? ((t) => {
        if (o && Buffer !== undefined && t instanceof Buffer) {
          throw Error(
            "Please provide binary data as `Uint8Array`, rather than `Buffer`.",
          );
        }
        if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength) {
          return t;
        }
        if (typeof t === "string") {
          return L(t);
        }
        if (
          t instanceof ArrayBuffer ||
          ArrayBuffer.isView(t) ||
          (typeof t === "object" && !isNaN(t?.length))
        ) {
          return new Uint8Array(t);
        }
        throw Error(
          "Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.",
        );
      })(t.data)
    : null;
  let httpHeaders = t.httpHeaders || null;
  let withCredentials = t.withCredentials === true;
  let password = t.password ?? null;
  let d = t.range instanceof eB ? t.range : null;
  let rangeChunkSize =
    Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0
      ? t.rangeChunkSize
      : 65536;
  let u = t.worker instanceof eU ? t.worker : null;
  let t_verbosity = t.verbosity;
  let docBaseUrl =
    typeof t.docBaseUrl !== "string" || X(t.docBaseUrl) ? null : t.docBaseUrl;
  let m = typeof t.cMapUrl === "string" ? t.cMapUrl : null;
  let isCompressed = t.cMapPacked !== false;
  let b = t.CMapReaderFactory || eR;
  let A =
    typeof t.standardFontDataUrl === "string" ? t.standardFontDataUrl : null;
  let y = t.StandardFontDataFactory || eL;
  let ignoreErrors = t.stopAtErrors !== true;
  let maxImageSize =
    Number.isInteger(t.maxImageSize) && t.maxImageSize > -1
      ? t.maxImageSize
      : -1;
  let isEvalSupported = t.isEvalSupported !== false;
  let isOffscreenCanvasSupported =
    typeof t.isOffscreenCanvasSupported === "boolean"
      ? t.isOffscreenCanvasSupported
      : !o;
  let isChrome =
    typeof t.isChrome === "boolean"
      ? t.isChrome
      : !O.platform.isFirefox &&
        typeof window !== "undefined" &&
        !!window?.chrome;
  let canvasMaxAreaInBytes = Number.isInteger(t.canvasMaxAreaInBytes)
    ? t.canvasMaxAreaInBytes
    : -1;
  let disableFontFace =
    typeof t.disableFontFace === "boolean" ? t.disableFontFace : o;
  let fontExtraProperties = t.fontExtraProperties === true;
  let enableXfa = t.enableXfa === true;
  let ownerDocument = t.ownerDocument || globalThis.document;
  let disableRange = t.disableRange === true;
  let disableStream = t.disableStream === true;
  let disableAutoFetch = t.disableAutoFetch === true;
  let pdfBug = t.pdfBug === true;
  let N = t.CanvasFactory || eP;
  let B = t.FilterFactory || eD;
  let enableHWA = t.enableHWA === true;
  let length = d ? d.length : (t.length ?? 0 / 0);
  let useSystemFonts =
    typeof t.useSystemFonts === "boolean"
      ? t.useSystemFonts
      : !o && !disableFontFace;
  let U =
    typeof t.useWorkerFetch === "boolean"
      ? t.useWorkerFetch
      : b === tk &&
        y === tR &&
        m &&
        A &&
        Z(m, document.baseURI) &&
        Z(A, document.baseURI);
  if (t.canvasFactory) {
    te("`canvasFactory`-instance option, please use `CanvasFactory` instead.");
  }
  if (t.filterFactory) {
    te("`filterFactory`-instance option, please use `FilterFactory` instead.");
  }
  if (Number.isInteger(t_verbosity)) {
    m_WARNINGS = t_verbosity;
  }
  let $ = {
    canvasFactory: new N({
      ownerDocument,
      enableHWA,
    }),
    filterFactory: new B({
      docId,
      ownerDocument,
    }),
    cMapReaderFactory: U
      ? null
      : new b({
          baseUrl: m,
          isCompressed,
        }),
    standardFontDataFactory: U
      ? null
      : new y({
          baseUrl: A,
        }),
  };
  if (!u) {
    let t = {
      verbosity: t_verbosity,
      port: t4.workerPort,
    };
    e._worker = u = t.port ? eU.fromPort(t) : new eU(t);
  }
  let G = {
    docId,
    apiVersion: "4.8.69",
    data: r,
    password,
    disableAutoFetch,
    rangeChunkSize,
    length,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isEvalSupported,
      isOffscreenCanvasSupported,
      isChrome,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      cMapUrl: U ? m : null,
      standardFontDataUrl: U ? A : null,
    },
  };
  let V = {
    disableFontFace,
    fontExtraProperties,
    ownerDocument,
    pdfBug,
    styleElement: null,
    loadingParams: {
      disableAutoFetch,
      enableXfa,
    },
  };
  u.promise
    .then(() => {
      let t;
      if (e.destroyed) {
        throw Error("Loading aborted");
      }
      if (u.destroyed) {
        throw Error("Worker was destroyed");
      }
      let a = u.messageHandler.sendWithPromise(
        "GetDocRequest",
        G,
        r ? [r.buffer] : null,
      );
      if (d) {
        t = new es(d, {
          disableRange,
          disableStream,
        });
      } else if (!r) {
        if (!url) {
          throw Error("getDocument - no `url` parameter provided.");
        }
        t = new (
          o
            ? typeof fetch !== "undefined" &&
              typeof Response !== "undefined" &&
              "body" in Response.prototype &&
              Z(url)
              ? ep
              : ex
            : Z(url)
              ? ep
              : eb
        )({
          url,
          length,
          httpHeaders,
          withCredentials,
          rangeChunkSize,
          disableRange,
          disableStream,
        });
      }
      return a.then((s) => {
        if (e.destroyed) {
          throw Error("Loading aborted");
        }
        if (u.destroyed) {
          throw Error("Worker was destroyed");
        }
        let a = new t7(docId, s, u.port);
        let r = new e$(a, e, t, V, $);
        e._transport = r;
        a.send("Ready", null);
      });
    })
    .catch(e._capability.reject);
  return e;
}
function eO(t) {
  return (
    typeof t === "object" &&
    Number.isInteger(t?.num) &&
    t.num >= 0 &&
    Number.isInteger(t?.gen) &&
    t.gen >= 0
  );
}
class eN {
  static #im = 0;
  constructor() {
    this._capability = Promise.withResolvers();
    this._transport = null;
    this._worker = null;
    this.docId = `d${eN.#im++}`;
    this.destroyed = false;
    this.onPassword = null;
    this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    try {
      if (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      await this._transport?.destroy();
    } catch (error) {
      if (this._worker?.port) {
        delete this._worker._pendingDestroy;
      }
      throw error;
    }
    this._transport = null;
    if (this._worker) {
      this._worker.destroy();
      this._worker = null;
    }
  }
}
class eB {
  constructor(t, e, i = false, s = null) {
    this.length = t;
    this.initialData = e;
    this.progressiveDone = i;
    this.contentDispositionFilename = s;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (let i of this._rangeListeners) {
      i(t, e);
    }
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (let i of this._progressListeners) {
        i(t, e);
      }
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (let e of this._progressiveReadListeners) {
        e(t);
      }
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (let t of this._progressiveDoneListeners) {
        t();
      }
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    _("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
class ez {
  constructor(t, e) {
    this._pdfInfo = t;
    this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return C(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({ intent = "display" } = {}) {
    let { renderingIntent } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = false) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class eH {
  #iI = null;
  #iP = false;
  constructor(t, e, i, s = false) {
    this._pageIndex = t;
    this._pageInfo = e;
    this._transport = i;
    this._stats = s ? new J() : null;
    this._pdfBug = s;
    this.commonObjs = i.commonObjs;
    this.objs = new eV();
    this._maybeCleanupAfterRender = false;
    this._intentStates = new Map();
    this.destroyed = false;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false,
  } = {}) {
    return new W({
      viewBox: this.view,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip,
    });
  }
  getAnnotations({ intent = "display" } = {}) {
    let { renderingIntent } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return C(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext,
    viewport,
    intent = "display",
    annotationMode = d.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false,
  }) {
    this._stats?.time("Overall");
    let u = this._transport.getRenderingIntent(
      intent,
      annotationMode,
      printAnnotationStorage,
      isEditing,
    );
    let { renderingIntent, cacheKey } = u;
    this.#iP = false;
    this.#iR();
    optionalContentConfigPromise ||=
      this._transport.getOptionalContentConfig(renderingIntent);
    let m = this._intentStates.get(cacheKey);
    if (!m) {
      m = Object.create(null);
      this._intentStates.set(cacheKey, m);
    }
    if (m.streamReaderCancelTimeout) {
      clearTimeout(m.streamReaderCancelTimeout);
      m.streamReaderCancelTimeout = null;
    }
    let f = !!(4 & renderingIntent);
    if (!m.displayReadyCapability) {
      m.displayReadyCapability = Promise.withResolvers();
      m.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null,
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(u);
    }
    let b = (t) => {
      m.renderTasks.delete(v);
      if (this._maybeCleanupAfterRender || f) {
        this.#iP = true;
      }
      this.#iD(!f);
      if (t) {
        v.capability.reject(t);
        this._abortOperatorList({
          intentState: m,
          reason: t instanceof Error ? t : Error(t),
        });
      } else {
        v.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if (globalThis.Stats?.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    let v = new eq({
      callback: b,
      params: {
        canvasContext,
        viewport,
        transform,
        background,
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: m.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !f,
      pdfBug: this._pdfBug,
      pageColors,
    });
    (m.renderTasks ||= new Set()).add(v);
    let v_task = v.task;
    Promise.all([
      m.displayReadyCapability.promise,
      optionalContentConfigPromise,
    ])
      .then(([transparency, e]) => {
        if (this.destroyed) {
          return void b();
        }
        this._stats?.time("Rendering");
        if (!(e.renderingIntent & renderingIntent)) {
          throw Error(
            "Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.",
          );
        }
        v.initializeGraphics({
          transparency,
          optionalContentConfig: e,
        });
        v.operatorListChanged();
      })
      .catch(b);
    return v_task;
  }
  getOperatorList({
    intent = "display",
    annotationMode = d.ENABLE,
    printAnnotationStorage = null,
    isEditing = false,
  } = {}) {
    let a;
    let r = this._transport.getRenderingIntent(
      intent,
      annotationMode,
      printAnnotationStorage,
      isEditing,
      true,
    );
    let n = this._intentStates.get(r.cacheKey);
    if (!n) {
      n = Object.create(null);
      this._intentStates.set(r.cacheKey, n);
    }
    if (!n.opListReadCapability) {
      a = Object.create(null);
      a.operatorListChanged = function () {
        if (n.operatorList.lastChunk) {
          n.opListReadCapability.resolve(n.operatorList);
          n.renderTasks.delete(a);
        }
      };
      n.opListReadCapability = Promise.withResolvers();
      (n.renderTasks ||= new Set()).add(a);
      n.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null,
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(r);
    }
    return n.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false,
  } = {}) {
    return this._transport.messageHandler.sendWithStream(
      "GetTextContent",
      {
        pageIndex: this._pageIndex,
        includeMarkedContent: includeMarkedContent === true,
        disableNormalization: disableNormalization === true,
      },
      {
        highWaterMark: 100,
        size: (t) => t.items.length,
      },
    );
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then((t) => eI.textContent(t));
    }
    let e = this.streamTextContent(t);
    return new Promise((resolve, reject) => {
      let s = e.getReader();
      let a = {
        items: [],
        styles: Object.create(null),
        lang: null,
      };
      (function e() {
        s.read().then(({ value, done }) => {
          if (done) {
            resolve(a);
          } else {
            a.lang ??= value.lang;
            Object.assign(a.styles, value.styles);
            a.items.push(...value.items);
            e();
          }
        }, reject);
      })();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    let t = [];
    for (let e of this._intentStates.values()) {
      this._abortOperatorList({
        intentState: e,
        reason: Error("Page was destroyed."),
        force: true,
      });
      if (!e.opListReadCapability) {
        for (let i of e.renderTasks) {
          t.push(i.completed);
          i.cancel();
        }
      }
    }
    this.objs.clear();
    this.#iP = false;
    this.#iR();
    return Promise.all(t);
  }
  cleanup(t = false) {
    this.#iP = true;
    let e = this.#iD(false);
    if (t && e) {
      this._stats &&= new J();
    }
    return e;
  }
  #iD(t = false) {
    this.#iR();
    if (!this.#iP || this.destroyed) {
      return false;
    }
    if (t) {
      this.#iI = setTimeout(() => {
        this.#iI = null;
        this.#iD(false);
      }, 5000);
      return false;
    }
    for (let { renderTasks, operatorList } of this._intentStates.values()) {
      if (renderTasks.size > 0 || !operatorList.lastChunk) {
        return false;
      }
    }
    this._intentStates.clear();
    this.objs.clear();
    this.#iP = false;
    return true;
  }
  #iR() {
    if (this.#iI) {
      clearTimeout(this.#iI);
      this.#iI = null;
    }
  }
  _startRenderPage(t, e) {
    let i = this._intentStates.get(e);
    if (i) {
      this._stats?.timeEnd("Page Request");
      i.displayReadyCapability?.resolve(t);
    }
  }
  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++) {
      e.operatorList.fnArray.push(t.fnArray[i]);
      e.operatorList.argsArray.push(t.argsArray[i]);
    }
    for (let i of ((e.operatorList.lastChunk = t.lastChunk),
    (e.operatorList.separateAnnots = t.separateAnnots),
    e.renderTasks)) {
      i.operatorListChanged();
    }
    if (t.lastChunk) {
      this.#iD(true);
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds,
  }) {
    let { map, transfer } = annotationStorageSerializable;
    let n = this._transport.messageHandler
      .sendWithStream(
        "GetOperatorList",
        {
          pageIndex: this._pageIndex,
          intent: renderingIntent,
          cacheKey,
          annotationStorage: map,
          modifiedIds,
        },
        transfer,
      )
      .getReader();
    let o = this._intentStates.get(cacheKey);
    o.streamReader = n;
    let l = () => {
      n.read().then(
        ({ value, done }) => {
          if (done) {
            o.streamReader = null;
            return;
          }
          if (!this._transport.destroyed) {
            this._renderPageChunk(value, o);
            l();
          }
        },
        (t) => {
          o.streamReader = null;
          if (!this._transport.destroyed) {
            if (o.operatorList) {
              for (let t of ((o.operatorList.lastChunk = true),
              o.renderTasks)) {
                t.operatorListChanged();
              }
              this.#iD(true);
            }
            if (o.displayReadyCapability) {
              o.displayReadyCapability.reject(t);
            } else if (o.opListReadCapability) {
              o.opListReadCapability.reject(t);
            } else {
              throw t;
            }
          }
        },
      );
    };
    l();
  }
  _abortOperatorList({ intentState, reason, force = false }) {
    if (intentState.streamReader) {
      if (intentState.streamReaderCancelTimeout) {
        clearTimeout(intentState.streamReaderCancelTimeout);
        intentState.streamReaderCancelTimeout = null;
      }
      if (!force) {
        if (intentState.renderTasks.size > 0) {
          return;
        }
        if (reason instanceof q) {
          let i = 100;
          if (reason.extraDelay > 0 && reason.extraDelay < 1000) {
            i += reason.extraDelay;
          }
          intentState.streamReaderCancelTimeout = setTimeout(() => {
            intentState.streamReaderCancelTimeout = null;
            this._abortOperatorList({
              intentState,
              reason,
              force: true,
            });
          }, i);
          return;
        }
      }
      intentState.streamReader.cancel(new R(reason.message)).catch(() => {});
      intentState.streamReader = null;
      if (!this._transport.destroyed) {
        for (let [e, i] of this._intentStates) {
          if (i === intentState) {
            this._intentStates.delete(e);
            break;
          }
        }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
class ej {
  #iL = new Map();
  #iF = Promise.resolve();
  postMessage(t, e) {
    let i = {
      data: structuredClone(
        t,
        e
          ? {
              transfer: e,
            }
          : null,
      ),
    };
    this.#iF.then(() => {
      for (let [t] of this.#iL) {
        t.call(this, i);
      }
    });
  }
  addEventListener(t, e, i = null) {
    let s = null;
    if (i?.signal instanceof AbortSignal) {
      let { signal } = i;
      if (signal.aborted) {
        return void y("LoopbackPort - cannot use an `aborted` signal.");
      }
      let r = () => this.removeEventListener(t, e);
      s = () => signal.removeEventListener("abort", r);
      signal.addEventListener("abort", r);
    }
    this.#iL.set(e, s);
  }
  removeEventListener(t, e) {
    let i = this.#iL.get(e);
    i?.();
    this.#iL.delete(e);
  }
  terminate() {
    for (let [, t] of this.#iL) {
      t?.();
    }
    this.#iL.clear();
  }
}
class eU {
  static #iO = 0;
  static #iN = false;
  static #iB;
  static {
    if (o) {
      this.#iN = true;
      t4.workerSrc ||= "./pdf.worker.mjs";
    }
    this._isSameOrigin = (t, e) => {
      let i;
      try {
        if (!(i = new URL(t)).origin || i.origin === "null") {
          return false;
        }
      } catch {
        return false;
      }
      let s = new URL(e, i);
      return i.origin === s.origin;
    };
    this._createCDNWrapper = (t) => {
      let e = `await import("${t}");`;
      return URL.createObjectURL(
        new Blob([e], {
          type: "text/javascript",
        }),
      );
    };
  }
  constructor({ name = null, port = null, verbosity = m_WARNINGS } = {}) {
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity;
    this._readyCapability = Promise.withResolvers();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    if (port) {
      if (eU.#iB?.has(port)) {
        throw Error("Cannot use more than one PDFWorker per port.");
      }
      (eU.#iB ||= new WeakMap()).set(port, this);
      this._initializeFromPort(port);
      return;
    }
    this._initialize();
  }
  get promise() {
    if (o) {
      return Promise.all([tF.promise, this._readyCapability.promise]);
    }
    return this._readyCapability.promise;
  }
  #iz() {
    this._readyCapability.resolve();
    this._messageHandler.send("configure", {
      verbosity: this.verbosity,
    });
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    this._port = t;
    this._messageHandler = new t7("main", "worker", t);
    this._messageHandler.on("ready", function () {});
    this.#iz();
  }
  _initialize() {
    if (eU.#iN || eU.#iH) {
      return void this._setupFakeWorker();
    }
    let { workerSrc } = eU;
    try {
      if (!eU._isSameOrigin(window.location.href, workerSrc)) {
        workerSrc = eU._createCDNWrapper(
          new URL(workerSrc, window.location).href,
        );
      }
      let e = new Worker(workerSrc, {
        type: "module",
      });
      let i = new t7("main", "worker", e);
      let s = () => {
        a.abort();
        i.destroy();
        e.terminate();
        if (this.destroyed) {
          this._readyCapability.reject(Error("Worker was destroyed"));
        } else {
          this._setupFakeWorker();
        }
      };
      let a = new AbortController();
      e.addEventListener(
        "error",
        () => {
          if (!this._webWorker) {
            s();
          }
        },
        {
          signal: a.signal,
        },
      );
      i.on("test", (t) => {
        a.abort();
        if (this.destroyed || !t) {
          s();
        } else {
          this._messageHandler = i;
          this._port = e;
          this._webWorker = e;
          this.#iz();
        }
      });
      i.on("ready", (t) => {
        a.abort();
        if (this.destroyed) {
          return void s();
        }
        try {
          r();
        } catch {
          this._setupFakeWorker();
        }
      });
      let r = () => {
        let t = new Uint8Array();
        i.send("test", t, [t.buffer]);
      };
      r();
      return;
    } catch {
      A("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    if (!eU.#iN) {
      y("Setting up fake worker.");
      eU.#iN = true;
    }
    eU._setupFakeWorkerGlobal
      .then((t) => {
        if (this.destroyed) {
          return void this._readyCapability.reject(
            Error("Worker was destroyed"),
          );
        }
        let e = new ej();
        this._port = e;
        let i = `fake${eU.#iO++}`;
        let s = new t7(i + "_worker", i, e);
        t.setup(s, e);
        this._messageHandler = new t7(i, i + "_worker", e);
        this.#iz();
      })
      .catch((t) => {
        this._readyCapability.reject(
          Error(`Setting up fake worker failed: "${t.message}".`),
        );
      });
  }
  destroy() {
    this.destroyed = true;
    if (this._webWorker) {
      this._webWorker.terminate();
      this._webWorker = null;
    }
    eU.#iB?.delete(this._port);
    this._port = null;
    if (this._messageHandler) {
      this._messageHandler.destroy();
      this._messageHandler = null;
    }
  }
  static fromPort(t) {
    if (!t?.port) {
      throw Error("PDFWorker.fromPort - invalid method signature.");
    }
    let e = this.#iB?.get(t.port);
    if (e) {
      if (e._pendingDestroy) {
        throw Error(
          "PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.",
        );
      }
      return e;
    }
    return new eU(t);
  }
  static get workerSrc() {
    if (t4.workerSrc) {
      return t4.workerSrc;
    }
    throw Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #iH() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    return C(
      this,
      "_setupFakeWorkerGlobal",
      (async () => {
        if (this.#iH) {
          return this.#iH;
        }
        return (await import(this.workerSrc)).WorkerMessageHandler;
      })(),
    );
  }
}
class e$ {
  #ij = new Map();
  #iU = new Map();
  #i$ = new Map();
  #iG = new Map();
  #iV = null;
  constructor(t, e, i, s, a) {
    this.messageHandler = t;
    this.loadingTask = e;
    this.commonObjs = new eV();
    this.fontLoader = new tE({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement,
    });
    this.loadingParams = s.loadingParams;
    this._params = s;
    this.canvasFactory = a.canvasFactory;
    this.filterFactory = a.filterFactory;
    this.cMapReaderFactory = a.cMapReaderFactory;
    this.standardFontDataFactory = a.standardFontDataFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = i;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.setupMessageHandler();
  }
  #iW(t, e = null) {
    let i = this.#ij.get(t);
    if (i) {
      return i;
    }
    let s = this.messageHandler.sendWithPromise(t, e);
    this.#ij.set(t, s);
    return s;
  }
  get annotationStorage() {
    return C(this, "annotationStorage", new tw());
  }
  getRenderingIntent(t, e = d.ENABLE, i = null, s = false, a = false) {
    let renderingIntent = 2;
    let annotationStorageSerializable = tx;
    switch (t) {
      case "any":
        renderingIntent = 1;
        break;
      case "display":
        break;
      case "print":
        renderingIntent = 4;
        break;
      default:
        y(`getRenderingIntent - invalid intent: ${t}`);
    }
    let o = 4 & renderingIntent && i instanceof tC ? i : this.annotationStorage;
    switch (e) {
      case d.DISABLE:
        renderingIntent += 64;
        break;
      case d.ENABLE:
        break;
      case d.ENABLE_FORMS:
        renderingIntent += 16;
        break;
      case d.ENABLE_STORAGE:
        renderingIntent += 32;
        annotationStorageSerializable = o.serializable;
        break;
      default:
        y(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    if (s) {
      renderingIntent += 128;
    }
    if (a) {
      renderingIntent += 256;
    }
    let { ids, hash } = o.modifiedIds;
    let c = [renderingIntent, annotationStorageSerializable.hash, hash];
    return {
      renderingIntent,
      cacheKey: c.join("_"),
      annotationStorageSerializable,
      modifiedIds: ids,
    };
  }
  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#iV?.reject(Error("Worker was destroyed during onPassword callback"));
    let t = [];
    for (let e of this.#iU.values()) {
      t.push(e._destroy());
    }
    this.#iU.clear();
    this.#i$.clear();
    this.#iG.clear();
    if (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    let e = this.messageHandler.sendWithPromise("Terminate", null);
    t.push(e);
    Promise.all(t).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#ij.clear();
      this.filterFactory.destroy();
      ek.cleanup();
      this._networkStream?.cancelAllRequests(new R("Worker was terminated."));
      if (this.messageHandler) {
        this.messageHandler.destroy();
        this.messageHandler = null;
      }
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    let { messageHandler, loadingTask } = this;
    messageHandler.on("GetReader", (t, e) => {
      x(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = (t) => {
        this._lastProgress = {
          loaded: t.loaded,
          total: t.total,
        };
      };
      e.onPull = () => {
        this._fullReader
          .read()
          .then(({ value, done }) => {
            if (done) {
              e.close();
            } else {
              x(
                value instanceof ArrayBuffer,
                "GetReader - expected an ArrayBuffer.",
              );
              e.enqueue(new Uint8Array(value), 1, [value]);
            }
          })
          .catch((t) => {
            e.error(t);
          });
      };
      e.onCancel = (t) => {
        this._fullReader.cancel(t);
        e.ready.catch((t) => {
          if (!this.destroyed) {
            throw t;
          }
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", async (t) => {
      await this._fullReader.headersReady;
      let { isStreamingSupported, isRangeSupported, contentLength } =
        this._fullReader;
      if (!(isStreamingSupported && isRangeSupported)) {
        if (this._lastProgress) {
          loadingTask.onProgress?.(this._lastProgress);
        }
        this._fullReader.onProgress = (t) => {
          loadingTask.onProgress?.({
            loaded: t.loaded,
            total: t.total,
          });
        };
      }
      return {
        isStreamingSupported,
        isRangeSupported,
        contentLength,
      };
    });
    messageHandler.on("GetRangeReader", (t, e) => {
      x(
        this._networkStream,
        "GetRangeReader - no `IPDFStream` instance available.",
      );
      let i = this._networkStream.getRangeReader(t.begin, t.end);
      if (i) {
        e.onPull = () => {
          i.read()
            .then(({ value, done }) => {
              if (done) {
                e.close();
              } else {
                x(
                  value instanceof ArrayBuffer,
                  "GetRangeReader - expected an ArrayBuffer.",
                );
                e.enqueue(new Uint8Array(value), 1, [value]);
              }
            })
            .catch((t) => {
              e.error(t);
            });
        };
        e.onCancel = (t) => {
          i.cancel(t);
          e.ready.catch((t) => {
            if (!this.destroyed) {
              throw t;
            }
          });
        };
      } else {
        e.close();
      }
    });
    messageHandler.on("GetDoc", ({ pdfInfo }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new ez(pdfInfo, this));
    });
    messageHandler.on("DocException", function (t) {
      let i;
      switch (t.name) {
        case "PasswordException":
          i = new S(t.message, t.code);
          break;
        case "InvalidPDFException":
          i = new M(t.message);
          break;
        case "MissingPDFException":
          i = new k(t.message);
          break;
        case "UnexpectedResponseException":
          i = new I(t.message, t.status);
          break;
        case "UnknownErrorException":
          i = new T(t.message, t.details);
          break;
        default:
          _("DocException - expected a valid Error.");
      }
      loadingTask._capability.reject(i);
    });
    messageHandler.on("PasswordRequest", (t) => {
      this.#iV = Promise.withResolvers();
      if (loadingTask.onPassword) {
        let i = (t) => {
          if (t instanceof Error) {
            this.#iV.reject(t);
          } else {
            this.#iV.resolve({
              password: t,
            });
          }
        };
        try {
          loadingTask.onPassword(i, t.code);
        } catch (error) {
          this.#iV.reject(error);
        }
      } else {
        this.#iV.reject(new S(t.message, t.code));
      }
      return this.#iV.promise;
    });
    messageHandler.on("DataLoaded", (t) => {
      loadingTask.onProgress?.({
        loaded: t.length,
        total: t.length,
      });
      this.downloadInfoCapability.resolve(t);
    });
    messageHandler.on("StartRenderPage", (t) => {
      if (!this.destroyed) {
        this.#iU.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
      }
    });
    messageHandler.on("commonobj", ([e, i, s]) => {
      if (this.destroyed || this.commonObjs.has(e)) {
        return null;
      }
      switch (i) {
        case "Font":
          let { disableFontFace, fontExtraProperties, pdfBug } = this._params;
          if ("error" in s) {
            let t = s.error;
            y(`Error during font loading: ${t}`);
            this.commonObjs.resolve(e, t);
            break;
          }
          let o = new tS(s, {
            disableFontFace,
            inspectFont:
              pdfBug && globalThis.FontInspector?.enabled
                ? (t, e) => globalThis.FontInspector.fontAdded(t, e)
                : null,
          });
          this.fontLoader
            .bind(o)
            .catch(() =>
              messageHandler.sendWithPromise("FontFallback", {
                id: e,
              }),
            )
            .finally(() => {
              if (!fontExtraProperties && o.data) {
                o.data = null;
              }
              this.commonObjs.resolve(e, o);
            });
          break;
        case "CopyLocalImage":
          let { imageRef } = s;
          for (let t of (x(imageRef, "The imageRef must be defined."),
          this.#iU.values())) {
            for (let [, i] of t.objs) {
              if (i?.ref === imageRef) {
                if (!i.dataLen) {
                  return null;
                }
                this.commonObjs.resolve(e, structuredClone(i));
                return i.dataLen;
              }
            }
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(e, s);
          break;
        default:
          throw Error(`Got unknown common object type ${i}`);
      }
      return null;
    });
    messageHandler.on("obj", ([t, e, i, s]) => {
      if (this.destroyed) {
        return;
      }
      let a = this.#iU.get(e);
      if (!a.objs.has(t)) {
        if (a._intentStates.size === 0) {
          return void s?.bitmap?.close();
        }
        switch (i) {
          case "Image":
            a.objs.resolve(t, s);
            if (s?.dataLen > 10000000) {
              a._maybeCleanupAfterRender = true;
            }
            break;
          case "Pattern":
            a.objs.resolve(t, s);
            break;
          default:
            throw Error(`Got unknown object type ${i}`);
        }
      }
    });
    messageHandler.on("DocProgress", (t) => {
      if (!this.destroyed) {
        loadingTask.onProgress?.({
          loaded: t.loaded,
          total: t.total,
        });
      }
    });
    messageHandler.on("FetchBuiltInCMap", async (t) => {
      if (this.destroyed) {
        throw Error("Worker was destroyed.");
      }
      if (!this.cMapReaderFactory) {
        throw Error(
          "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.",
        );
      }
      return this.cMapReaderFactory.fetch(t);
    });
    messageHandler.on("FetchStandardFontData", async (t) => {
      if (this.destroyed) {
        throw Error("Worker was destroyed.");
      }
      if (!this.standardFontDataFactory) {
        throw Error(
          "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.",
        );
      }
      return this.standardFontDataFactory.fetch(t);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    if (this.annotationStorage.size <= 0) {
      y(
        "saveDocument called while `annotationStorage` is empty, please use the getData-method instead.",
      );
    }
    let { map, transfer } = this.annotationStorage.serializable;
    return this.messageHandler
      .sendWithPromise(
        "SaveDocument",
        {
          isPureXfa: !!this._htmlForXfa,
          numPages: this._numPages,
          annotationStorage: map,
          filename: this._fullReader?.filename ?? null,
        },
        transfer,
      )
      .finally(() => {
        this.annotationStorage.resetModified();
      });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages) {
      return Promise.reject(Error("Invalid page request."));
    }
    let e = t - 1;
    let i = this.#i$.get(e);
    if (i) {
      return i;
    }
    let s = this.messageHandler
      .sendWithPromise("GetPage", {
        pageIndex: e,
      })
      .then((i) => {
        if (this.destroyed) {
          throw Error("Transport destroyed");
        }
        if (i.refStr) {
          this.#iG.set(i.refStr, t);
        }
        let s = new eH(e, i, this, this._params.pdfBug);
        this.#iU.set(e, s);
        return s;
      });
    this.#i$.set(e, s);
    return s;
  }
  getPageIndex(t) {
    if (eO(t)) {
      return this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen,
      });
    }
    return Promise.reject(Error("Invalid pageIndex request."));
  }
  getAnnotations(t, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent,
    });
  }
  getFieldObjects() {
    return this.#iW("GetFieldObjects");
  }
  hasJSActions() {
    return this.#iW("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    if (typeof t !== "string") {
      return Promise.reject(Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id: t,
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return this.#iW("GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t,
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t,
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return this.#iW("GetOptionalContentConfig").then((e) => new ei(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    let t = "GetMetadata";
    let e = this.#ij.get(t);
    if (e) {
      return e;
    }
    let i = this.messageHandler.sendWithPromise(t, null).then((t) => ({
      info: t[0],
      metadata: t[1] ? new t9(t[1]) : null,
      contentDispositionFilename: this._fullReader?.filename ?? null,
      contentLength: this._fullReader?.contentLength ?? null,
    }));
    this.#ij.set(t, i);
    return i;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = false) {
    if (!this.destroyed) {
      for (let t of (await this.messageHandler.sendWithPromise("Cleanup", null),
      this.#iU.values())) {
        if (!t.cleanup()) {
          throw Error(
            `startCleanup: Page ${t.pageNumber} is currently rendering.`,
          );
        }
      }
      this.commonObjs.clear();
      if (!t) {
        this.fontLoader.clear();
      }
      this.#ij.clear();
      this.filterFactory.destroy(true);
      ek.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!eO(t)) {
      return null;
    }
    let e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return this.#iG.get(e) ?? null;
  }
}
let eG = Symbol("INITIAL_DATA");
class eV {
  #iq = Object.create(null);
  #iX(t) {
    return (this.#iq[t] ||= {
      ...Promise.withResolvers(),
      data: eG,
    });
  }
  get(t, e = null) {
    if (e) {
      let i = this.#iX(t);
      i.promise.then(() => e(i.data));
      return null;
    }
    let i = this.#iq[t];
    if (!i || i.data === eG) {
      throw Error(`Requesting object that isn't resolved yet ${t}.`);
    }
    return i.data;
  }
  has(t) {
    let e = this.#iq[t];
    return !!e && e.data !== eG;
  }
  resolve(t, e = null) {
    let i = this.#iX(t);
    i.data = e;
    i.resolve();
  }
  clear() {
    for (let t in this.#iq) {
      let { data } = this.#iq[t];
      data?.bitmap?.close();
    }
    this.#iq = Object.create(null);
  }
  *[Symbol.iterator]() {
    for (let t in this.#iq) {
      let { data } = this.#iq[t];
      if (data !== eG) {
        yield [t, data];
      }
    }
  }
}
class eW {
  #iK = null;
  constructor(t) {
    this.#iK = t;
    this.onContinue = null;
  }
  get promise() {
    return this.#iK.capability.promise;
  }
  cancel(t = 0) {
    this.#iK.cancel(null, t);
  }
  get separateAnnots() {
    let { separateAnnots } = this.#iK.operatorList;
    if (!separateAnnots) {
      return false;
    }
    let { annotationCanvasMap } = this.#iK;
    return (
      separateAnnots.form ||
      (separateAnnots.canvas && annotationCanvasMap?.size > 0)
    );
  }
}
class eq {
  #iY = null;
  static #iQ = new WeakSet();
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null,
  }) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame =
      useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new eW(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(() => {});
  }
  initializeGraphics({ transparency = false, optionalContentConfig }) {
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (eq.#iQ.has(this._canvas)) {
        throw Error(
          "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.",
        );
      }
      eq.#iQ.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    let { canvasContext, viewport, transform, background } = this.params;
    this.gfx = new t6(
      canvasContext,
      this.commonObjs,
      this.objs,
      this.canvasFactory,
      this.filterFactory,
      {
        optionalContentConfig,
      },
      this.annotationCanvasMap,
      this.pageColors,
    );
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background,
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(t = null, e = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#iY) {
      window.cancelAnimationFrame(this.#iY);
      this.#iY = null;
    }
    eq.#iQ.delete(this._canvas);
    this.callback(
      t || new q(`Rendering cancelled, page ${this._pageIndex + 1}`, e),
    );
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.stepper?.updateOperatorList(this.operatorList);
    if (!this.running) {
      this._continue();
    }
  }
  _continue() {
    this.running = true;
    if (!this.cancelled) {
      if (this.task.onContinue) {
        this.task.onContinue(this._scheduleNextBound);
      } else {
        this._scheduleNext();
      }
    }
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      this.#iY = window.requestAnimationFrame(() => {
        this.#iY = null;
        this._nextBound().catch(this._cancelBound);
      });
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (!this.cancelled) {
      this.operatorListIdx = this.gfx.executeOperatorList(
        this.operatorList,
        this.operatorListIdx,
        this._continueBound,
        this.stepper,
      );
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
        this.running = false;
        if (this.operatorList.lastChunk) {
          this.gfx.endDrawing();
          eq.#iQ.delete(this._canvas);
          this.callback();
        }
      }
    }
  }
}
let eX = "4.8.69";
let eK = "3634dab10";
function eY(t) {
  return Math.floor(255 * Math.max(0, Math.min(1, t)))
    .toString(16)
    .padStart(2, "0");
}
function eQ(t) {
  return Math.max(0, Math.min(255, 255 * t));
}
class eJ {
  static CMYK_G([t, e, i, s]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return [(t = eQ(t)), t, t];
  }
  static G_HTML([t]) {
    let e = eY(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, i]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
  }
  static RGB_rgb(t) {
    return t.map(eQ);
  }
  static RGB_HTML(t) {
    return `#${t.map(eY).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, i, s]) {
    return [
      "RGB",
      1 - Math.min(1, t + s),
      1 - Math.min(1, i + s),
      1 - Math.min(1, e + s),
    ];
  }
  static CMYK_rgb([t, e, i, s]) {
    return [
      eQ(1 - Math.min(1, t + s)),
      eQ(1 - Math.min(1, i + s)),
      eQ(1 - Math.min(1, e + s)),
    ];
  }
  static CMYK_HTML(t) {
    let e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, i]) {
    let s = 1 - t;
    let a = 1 - e;
    let r = 1 - i;
    let n = Math.min(s, a, r);
    return ["CMYK", s, a, r, n];
  }
}
class eZ {
  create(t, e, i = false) {
    if (t <= 0 || e <= 0) {
      throw Error("Invalid SVG dimensions");
    }
    let s = this._createSVG("svg:svg");
    s.setAttribute("version", "1.1");
    if (!i) {
      s.setAttribute("width", `${t}px`);
      s.setAttribute("height", `${e}px`);
    }
    s.setAttribute("preserveAspectRatio", "none");
    s.setAttribute("viewBox", `0 0 ${t} ${e}`);
    return s;
  }
  createElement(t) {
    if (typeof t !== "string") {
      throw Error("Invalid SVG element type");
    }
    return this._createSVG(t);
  }
  _createSVG(t) {
    _("Abstract method `_createSVG` called.");
  }
}
class e0 extends eZ {
  _createSVG(t) {
    return document.createElementNS($, t);
  }
}
class e1 {
  static setupStorage(t, e, i, s, a) {
    let r = s.getValue(e, {
      value: null,
    });
    switch (i.name) {
      case "textarea":
        if (r.value !== null) {
          t.textContent = r.value;
        }
        if (a === "print") {
          break;
        }
        t.addEventListener("input", (t) => {
          s.setValue(e, {
            value: t.target.value,
          });
        });
        break;
      case "input":
        if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
          if (r.value === i.attributes.xfaOn) {
            t.setAttribute("checked", true);
          } else if (r.value === i.attributes.xfaOff) {
            t.removeAttribute("checked");
          }
          if (a === "print") {
            break;
          }
          t.addEventListener("change", (t) => {
            s.setValue(e, {
              value: t.target.checked
                ? t.target.getAttribute("xfaOn")
                : t.target.getAttribute("xfaOff"),
            });
          });
        } else {
          if (r.value !== null) {
            t.setAttribute("value", r.value);
          }
          if (a === "print") {
            break;
          }
          t.addEventListener("input", (t) => {
            s.setValue(e, {
              value: t.target.value,
            });
          });
        }
        break;
      case "select":
        if (r.value !== null) {
          for (let e of (t.setAttribute("value", r.value), i.children)) {
            if (e.attributes.value === r.value) {
              e.attributes.selected = true;
            } else if (e.attributes.hasOwnProperty("selected")) {
              delete e.attributes.selected;
            }
          }
        }
        t.addEventListener("input", (t) => {
          let options = t.target.options;
          let a =
            options.selectedIndex === -1
              ? ""
              : options[options.selectedIndex].value;
          s.setValue(e, {
            value: a,
          });
        });
    }
  }
  static setAttributes({ html, element, storage = null, intent, linkService }) {
    let { attributes } = element;
    let n = html instanceof HTMLAnchorElement;
    for (let [e, i] of (attributes.type === "radio" &&
      (attributes.name = `${attributes.name}-${intent}`),
    Object.entries(attributes))) {
      if (i != null) {
        switch (e) {
          case "class":
            if (i.length) {
              html.setAttribute(e, i.join(" "));
            }
            break;
          case "dataId":
            break;
          case "id":
            html.setAttribute("data-element-id", i);
            break;
          case "style":
            Object.assign(html.style, i);
            break;
          case "textContent":
            html.textContent = i;
            break;
          default:
            if (!(n && (e === "href" || e === "newWindow"))) {
              html.setAttribute(e, i);
            }
        }
      }
    }
    if (n) {
      linkService.addLinkAttributes(
        html,
        attributes.href,
        attributes.newWindow,
      );
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(t) {
    let t_annotationStorage = t.annotationStorage;
    let t_linkService = t.linkService;
    let t_xfaHtml = t.xfaHtml;
    let a = t.intent || "display";
    let r = document.createElement(t_xfaHtml.name);
    if (t_xfaHtml.attributes) {
      this.setAttributes({
        html: r,
        element: t_xfaHtml,
        intent: a,
        linkService: t_linkService,
      });
    }
    let n = a !== "richText";
    let t_div = t.div;
    t_div.append(r);
    if (t.viewport) {
      let e = `matrix(${t.viewport.transform.join(",")})`;
      t_div.style.transform = e;
    }
    if (n) {
      t_div.setAttribute("class", "xfaLayer xfaFont");
    }
    let textDivs = [];
    if (t_xfaHtml.children.length === 0) {
      if (t_xfaHtml.value) {
        let t = document.createTextNode(t_xfaHtml.value);
        r.append(t);
        if (n && eI.shouldBuildText(t_xfaHtml.name)) {
          textDivs.push(t);
        }
      }
      return {
        textDivs,
      };
    }
    let h = [[t_xfaHtml, -1, r]];
    while (h.length > 0) {
      let [t, s, r] = h.at(-1);
      if (s + 1 === t.children.length) {
        h.pop();
        continue;
      }
      let element = t.children[++h.at(-1)[1]];
      if (element === null) {
        continue;
      }
      let { name } = element;
      if (name === "#text") {
        let t = document.createTextNode(element.value);
        textDivs.push(t);
        r.append(t);
        continue;
      }
      let c = element?.attributes?.xmlns
        ? document.createElementNS(element.attributes.xmlns, name)
        : document.createElement(name);
      r.append(c);
      if (element.attributes) {
        this.setAttributes({
          html: c,
          element,
          storage: t_annotationStorage,
          intent: a,
          linkService: t_linkService,
        });
      }
      if (element.children?.length > 0) {
        h.push([element, -1, c]);
      } else if (element.value) {
        let t = document.createTextNode(element.value);
        if (n && eI.shouldBuildText(name)) {
          textDivs.push(t);
        }
        c.append(t);
      }
    }
    for (let t of t_div.querySelectorAll(
      ".xfaNonInteractive input, .xfaNonInteractive textarea",
    )) {
      t.setAttribute("readOnly", true);
    }
    return {
      textDivs,
    };
  }
  static update(t) {
    let e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e;
    t.div.hidden = false;
  }
}
let e2 = new WeakSet();
function e3(t) {
  return {
    width: t[2] - t[0],
    height: t[3] - t[1],
  };
}
class e5 {
  static create(t) {
    switch (t.data.annotationType) {
      case 2:
        return new e4(t);
      case 1:
        return new e8(t);
      case 20:
        switch (t.data.fieldType) {
          case "Tx":
            return new e9(t);
          case "Btn":
            if (t.data.radioButton) {
              return new ii(t);
            }
            if (t.data.checkBox) {
              return new ie(t);
            }
            return new is(t);
          case "Ch":
            return new ia(t);
          case "Sig":
            return new it(t);
        }
        return new e7(t);
      case 16:
        return new ir(t);
      case 3:
        return new il(t);
      case 4:
        return new ih(t);
      case 5:
        return new id(t);
      case 6:
        return new ic(t);
      case 8:
        return new iu(t);
      case 14:
        return new ig(t);
      case 15:
        return new im(t);
      case 7:
        return new ip(t);
      case 9:
        return new ib(t);
      case 10:
        return new iv(t);
      case 11:
        return new iA(t);
      case 12:
        return new iy(t);
      case 13:
        return new i_(t);
      case 17:
        return new ix(t);
      default:
        return new e6(t);
    }
  }
}
class e6 {
  #iJ = null;
  #iZ = false;
  #i0 = null;
  constructor(
    t,
    {
      isRenderable = false,
      ignoreBorder = false,
      createQuadrilaterals = false,
    } = {},
  ) {
    this.isRenderable = isRenderable;
    this.data = t.data;
    this.layer = t.layer;
    this.linkService = t.linkService;
    this.downloadManager = t.downloadManager;
    this.imageResourcesPath = t.imageResourcesPath;
    this.renderForms = t.renderForms;
    this.svgFactory = t.svgFactory;
    this.annotationStorage = t.annotationStorage;
    this.enableScripting = t.enableScripting;
    this.hasJSActions = t.hasJSActions;
    this._fieldObjects = t.fieldObjects;
    this.parent = t.parent;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({ titleObj, contentsObj, richText }) {
    return !!(titleObj?.str || contentsObj?.str || richText?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return e6._hasPopupData(this.data);
  }
  updateEdited(t) {
    if (!this.container) {
      return;
    }
    this.#iJ ||= {
      rect: this.data.rect.slice(0),
    };
    let { rect } = t;
    if (rect) {
      this.#i1(rect);
    }
    this.#i0?.popup.updateEdited(t);
  }
  resetEdited() {
    if (this.#iJ) {
      this.#i1(this.#iJ.rect);
      this.#i0?.popup.resetEdited();
      this.#iJ = null;
    }
  }
  #i1(t) {
    let {
      container: { style },
      data: { rect, rotation },
      parent: {
        viewport: {
          rawDims: { pageWidth, pageHeight, pageX, pageY },
        },
      },
    } = this;
    rect?.splice(0, 4, ...t);
    let { width, height } = e3(t);
    style.left = `${(100 * (t[0] - pageX)) / pageWidth}%`;
    style.top = `${(100 * (pageHeight - t[3] + pageY)) / pageHeight}%`;
    if (rotation === 0) {
      style.width = `${(100 * width) / pageWidth}%`;
      style.height = `${(100 * height) / pageHeight}%`;
    } else {
      this.setRotation(rotation);
    }
  }
  _createContainer(t) {
    let {
      data,
      parent: { page, viewport },
    } = this;
    let a = document.createElement("section");
    a.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof e7)) {
      a.tabIndex = 1000;
    }
    let { style } = a;
    style.zIndex = this.parent.zIndex++;
    if (data.alternativeText) {
      a.title = data.alternativeText;
    }
    if (data.noRotate) {
      a.classList.add("norotate");
    }
    if (!data.rect || this instanceof ir) {
      let { rotation: rotation_1 } = data;
      if (!(data.hasOwnCanvas || rotation_1 === 0)) {
        this.setRotation(rotation_1, a);
      }
      return a;
    }
    let { width, height } = e3(data.rect);
    if (!t && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      let t = data.borderStyle.horizontalCornerRadius;
      let i = data.borderStyle.verticalCornerRadius;
      if (t > 0 || i > 0) {
        style.borderRadius = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`;
      } else if (this instanceof ii) {
        style.borderRadius = `calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;
      }
      switch (data.borderStyle.style) {
        case 1:
          style.borderStyle = "solid";
          break;
        case 2:
          style.borderStyle = "dashed";
          break;
        case 3:
          y("Unimplemented border style: beveled");
          break;
        case 4:
          y("Unimplemented border style: inset");
          break;
        case 5:
          style.borderBottomStyle = "solid";
      }
      let s = data.borderColor || null;
      if (s) {
        this.#iZ = true;
        style.borderColor = B.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2]);
      } else {
        style.borderWidth = 0;
      }
    }
    let l = B.normalizeRect([
      data.rect[0],
      page.view[3] - data.rect[1] + page.view[1],
      data.rect[2],
      page.view[3] - data.rect[3] + page.view[1],
    ]);
    let { pageWidth, pageHeight, pageX, pageY } = viewport.rawDims;
    style.left = `${(100 * (l[0] - pageX)) / pageWidth}%`;
    style.top = `${(100 * (l[1] - pageY)) / pageHeight}%`;
    let { rotation } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${(100 * width) / pageWidth}%`;
      style.height = `${(100 * height) / pageHeight}%`;
    } else {
      this.setRotation(rotation, a);
    }
    return a;
  }
  setRotation(t, e = this.container) {
    let i;
    let s;
    if (!this.data.rect) {
      return;
    }
    let { pageWidth, pageHeight } = this.parent.viewport.rawDims;
    let { width, height } = e3(this.data.rect);
    if (t % 180 == 0) {
      i = (100 * width) / pageWidth;
      s = (100 * height) / pageHeight;
    } else {
      i = (100 * height) / pageWidth;
      s = (100 * width) / pageHeight;
    }
    e.style.width = `${i}%`;
    e.style.height = `${s}%`;
    e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    let t = (t, e, i) => {
      let s = i.detail[t];
      let a = s[0];
      let r = s.slice(1);
      i.target.style[e] = eJ[`${a}_HTML`](r);
      this.annotationStorage.setValue(this.data.id, {
        [e]: eJ[`${a}_rgb`](r),
      });
    };
    return C(this, "_commonActions", {
      display: (t) => {
        let { display } = t.detail;
        let noView = display % 2 == 1;
        this.container.style.visibility = noView ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView,
          noPrint: display === 1 || display === 2,
        });
      },
      print: (t) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !t.detail.print,
        });
      },
      hidden: (t) => {
        let { hidden } = t.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden,
        });
      },
      focus: (t) => {
        setTimeout(
          () =>
            t.target.focus({
              preventScroll: false,
            }),
          0,
        );
      },
      userName: (t) => {
        t.target.title = t.detail.userName;
      },
      readonly: (t) => {
        t.target.disabled = t.detail.readonly;
      },
      required: (t) => {
        this._setRequired(t.target, t.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (t) => {
        let rotation = t.detail.rotation;
        this.setRotation(rotation);
        this.annotationStorage.setValue(this.data.id, {
          rotation,
        });
      },
    });
  }
  _dispatchEventFromSandbox(t, e) {
    let _commonActions = this._commonActions;
    for (let s of Object.keys(e.detail)) {
      let a = t[s] || _commonActions[s];
      a?.(e);
    }
  }
  _setDefaultPropertiesFromJS(target) {
    if (!this.enableScripting) {
      return;
    }
    let e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) {
      return;
    }
    let _commonActions = this._commonActions;
    for (let [s, a] of Object.entries(e)) {
      let r = _commonActions[s];
      if (r) {
        r({
          detail: {
            [s]: a,
          },
          target,
        });
        delete e[s];
      }
    }
  }
  _createQuadrilaterals() {
    let t;
    if (!this.container) {
      return;
    }
    let { quadPoints } = this.data;
    if (!quadPoints) {
      return;
    }
    let [i, s, a, r] = this.data.rect.map((t) => Math.fround(t));
    if (quadPoints.length === 8) {
      let [t, n, o, l] = quadPoints.subarray(2, 6);
      if (a === t && r === n && i === o && s === l) {
        return;
      }
    }
    let { style } = this.container;
    if (this.#iZ) {
      let { borderColor, borderWidth } = style;
      style.borderWidth = 0;
      t = [
        "url('data:image/svg+xml;utf8,",
        '<svg xmlns="http://www.w3.org/2000/svg"',
        ' preserveAspectRatio="none" viewBox="0 0 1 1">',
        `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`,
      ];
      this.container.classList.add("hasBorder");
    }
    let o = a - i;
    let l = r - s;
    let { svgFactory } = this;
    let d = svgFactory.createElement("svg");
    d.classList.add("quadrilateralsContainer");
    d.setAttribute("width", 0);
    d.setAttribute("height", 0);
    let c = svgFactory.createElement("defs");
    d.append(c);
    let u = svgFactory.createElement("clipPath");
    let p = `clippath_${this.data.id}`;
    u.setAttribute("id", p);
    u.setAttribute("clipPathUnits", "objectBoundingBox");
    c.append(u);
    for (let s = 2, a = quadPoints.length; s < a; s += 8) {
      let quadPoint = quadPoints[s];
      let n = quadPoints[s + 1];
      let d = quadPoints[s + 2];
      let c = quadPoints[s + 3];
      let p = svgFactory.createElement("rect");
      let g = (d - i) / o;
      let m = (r - n) / l;
      let f = (quadPoint - d) / o;
      let b = (n - c) / l;
      p.setAttribute("x", g);
      p.setAttribute("y", m);
      p.setAttribute("width", f);
      p.setAttribute("height", b);
      u.append(p);
      t?.push(
        `<rect vector-effect="non-scaling-stroke" x="${g}" y="${m}" width="${f}" height="${b}"/>`,
      );
    }
    if (this.#iZ) {
      t.push("</g></svg>')");
      style.backgroundImage = t.join("");
    }
    this.container.append(d);
    this.container.style.clipPath = `url(#${p})`;
  }
  _createPopup() {
    let { data } = this;
    let e = (this.#i0 = new ir({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate: data.modificationDate,
        contentsObj: data.contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation,
      },
      parent: this.parent,
      elements: [this],
    }));
    this.parent.div.append(e.render());
  }
  render() {
    _("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    let i = [];
    if (this._fieldObjects) {
      let s = this._fieldObjects[t];
      if (s) {
        for (let { page, id, exportValues } of s) {
          if (page === -1 || id === e) {
            continue;
          }
          let exportValue =
            typeof exportValues === "string" ? exportValues : null;
          let n = document.querySelector(`[data-element-id="${id}"]`);
          if (n && !e2.has(n)) {
            y(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          i.push({
            id,
            exportValue,
            domElement: n,
          });
        }
      }
      return i;
    }
    for (let s of document.getElementsByName(t)) {
      let { exportValue } = s;
      let a = s.getAttribute("data-element-id");
      if (a !== e && e2.has(s)) {
        i.push({
          id: a,
          exportValue,
          domElement: s,
        });
      }
    }
    return i;
  }
  show() {
    if (this.container) {
      this.container.hidden = false;
    }
    this.popup?.maybeShow();
  }
  hide() {
    if (this.container) {
      this.container.hidden = true;
    }
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    let t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) {
      for (let e of t) {
        e.classList.add("highlightArea");
      }
    } else {
      t.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    let {
      annotationEditorType,
      data: { id: editId },
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: annotationEditorType,
        editId,
      });
    });
  }
}
class e4 extends e6 {
  constructor(t, e = null) {
    super(t, {
      isRenderable: true,
      ignoreBorder: !!e?.ignoreBorder,
      createQuadrilaterals: true,
    });
    this.isTooltipOnly = t.data.isTooltipOnly;
  }
  render() {
    let { data, linkService } = this;
    let i = document.createElement("a");
    i.setAttribute("data-element-id", data.id);
    let s = false;
    if (data.url) {
      linkService.addLinkAttributes(i, data.url, data.newWindow);
      s = true;
    } else if (data.action) {
      this._bindNamedAction(i, data.action);
      s = true;
    } else if (data.attachment) {
      this.#i2(i, data.attachment, data.attachmentDest);
      s = true;
    } else if (data.setOCGState) {
      this.#i3(i, data.setOCGState);
      s = true;
    } else if (data.dest) {
      this._bindLink(i, data.dest);
      s = true;
    } else {
      if (
        data.actions &&
        (data.actions.Action ||
          data.actions["Mouse Up"] ||
          data.actions["Mouse Down"]) &&
        this.enableScripting &&
        this.hasJSActions
      ) {
        this._bindJSAction(i, data);
        s = true;
      }
      if (data.resetForm) {
        this._bindResetFormAction(i, data.resetForm);
        s = true;
      } else if (this.isTooltipOnly && !s) {
        this._bindLink(i, "");
        s = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    if (s) {
      this.container.append(i);
    }
    return this.container;
  }
  #i5() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(t, e) {
    t.href = this.linkService.getDestinationHash(e);
    t.onclick = () => {
      if (e) {
        this.linkService.goToDestination(e);
      }
      return false;
    };
    if (e || e === "") {
      this.#i5();
    }
  }
  _bindNamedAction(t, e) {
    t.href = this.linkService.getAnchorUrl("");
    t.onclick = () => {
      this.linkService.executeNamedAction(e);
      return false;
    };
    this.#i5();
  }
  #i2(t, e, i = null) {
    t.href = this.linkService.getAnchorUrl("");
    if (e.description) {
      t.title = e.description;
    }
    t.onclick = () => {
      this.downloadManager?.openOrDownloadData(e.content, e.filename, i);
      return false;
    };
    this.#i5();
  }
  #i3(t, e) {
    t.href = this.linkService.getAnchorUrl("");
    t.onclick = () => {
      this.linkService.executeSetOCGState(e);
      return false;
    };
    this.#i5();
  }
  _bindJSAction(t, e) {
    t.href = this.linkService.getAnchorUrl("");
    let i = new Map([
      ["Action", "onclick"],
      ["Mouse Up", "onmouseup"],
      ["Mouse Down", "onmousedown"],
    ]);
    for (let s of Object.keys(e.actions)) {
      let a = i.get(s);
      if (a) {
        t[a] = () => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e.id,
              name: s,
            },
          });
          return false;
        };
      }
    }
    if (!t.onclick) {
      t.onclick = () => false;
    }
    this.#i5();
  }
  _bindResetFormAction(t, e) {
    let t_onclick = t.onclick;
    if (!t_onclick) {
      t.href = this.linkService.getAnchorUrl("");
    }
    this.#i5();
    if (!this._fieldObjects) {
      y(
        '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
      );
      if (!t_onclick) {
        t.onclick = () => false;
      }
      return;
    }
    t.onclick = () => {
      t_onclick?.();
      let { fields, refs, include } = e;
      let r = [];
      if (fields.length !== 0 || refs.length !== 0) {
        let e = new Set(refs);
        for (let i of fields) {
          for (let { id } of this._fieldObjects[i] || []) {
            e.add(id);
          }
        }
        for (let t of Object.values(this._fieldObjects)) {
          for (let i of t) {
            if (e.has(i.id) === include) {
              r.push(i);
            }
          }
        }
      } else {
        for (let t of Object.values(this._fieldObjects)) {
          r.push(...t);
        }
      }
      let annotationStorage = this.annotationStorage;
      let ids = [];
      for (let t of r) {
        let { id } = t;
        ids.push(id);
        switch (t.type) {
          case "text": {
            let i = t.defaultValue || "";
            annotationStorage.setValue(id, {
              value: i,
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            let i = t.defaultValue === t.exportValues;
            annotationStorage.setValue(id, {
              value: i,
            });
            break;
          }
          case "combobox":
          case "listbox": {
            let i = t.defaultValue || "";
            annotationStorage.setValue(id, {
              value: i,
            });
            break;
          }
          default:
            continue;
        }
        let i = document.querySelector(`[data-element-id="${id}"]`);
        if (i) {
          if (!e2.has(i)) {
            y(`_bindResetFormAction - element not allowed: ${id}`);
            continue;
          }
          i.dispatchEvent(new Event("resetform"));
        }
      }
      if (this.enableScripting) {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids,
            name: "ResetForm",
          },
        });
      }
      return false;
    };
  }
}
class e8 extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    let t = document.createElement("img");
    t.src =
      this.imageResourcesPath +
      "annotation-" +
      this.data.name.toLowerCase() +
      ".svg";
    t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    t.setAttribute(
      "data-l10n-args",
      JSON.stringify({
        type: this.data.name,
      }),
    );
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(t);
    return this.container;
  }
}
class e7 extends e6 {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    if (this.data.hasOwnCanvas) {
      if (t.previousSibling?.nodeName === "CANVAS") {
        t.previousSibling.hidden = true;
      }
      t.hidden = false;
    }
  }
  _getKeyModifier(t) {
    if (O.platform.isMac) {
      return t.metaKey;
    }
    return t.ctrlKey;
  }
  _setEventListener(t, e, i, s, a) {
    if (i.includes("mouse")) {
      t.addEventListener(i, (t) => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: s,
            value: a(t),
            shift: t.shiftKey,
            modifier: this._getKeyModifier(t),
          },
        });
      });
    } else {
      t.addEventListener(i, (t) => {
        if (i === "blur") {
          if (!e.focused || !t.relatedTarget) {
            return;
          }
          e.focused = false;
        } else if (i === "focus") {
          if (e.focused) {
            return;
          }
          e.focused = true;
        }
        if (a) {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: this.data.id,
              name: s,
              value: a(t),
            },
          });
        }
      });
    }
  }
  _setEventListeners(t, e, i, s) {
    for (let [a, r] of i) {
      if (r === "Action" || this.data.actions?.[r]) {
        if (r === "Focus" || r === "Blur") {
          e ||= {
            focused: false,
          };
        }
        this._setEventListener(t, e, a, r, s);
        if (r !== "Focus" || this.data.actions?.Blur) {
          if (!(r !== "Blur" || this.data.actions?.Focus)) {
            this._setEventListener(t, e, "focus", "Focus", null);
          }
        } else {
          this._setEventListener(t, e, "blur", "Blur", null);
        }
      }
    }
  }
  _setBackgroundColor(t) {
    let e = this.data.backgroundColor || null;
    t.style.backgroundColor =
      e === null ? "transparent" : B.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    let e;
    let { fontColor } = this.data.defaultAppearanceData;
    let s = this.data.defaultAppearanceData.fontSize || 9;
    let t_style = t.style;
    let r = (t) => Math.round(10 * t) / 10;
    if (this.data.multiLine) {
      let t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
      let i = Math.round(t / (1.35 * s)) || 1;
      e = Math.min(s, r(t / i / 1.35));
    } else {
      e = Math.min(
        s,
        r(Math.abs(this.data.rect[3] - this.data.rect[1] - 2) / 1.35),
      );
    }
    t_style.fontSize = `calc(${e}px * var(--scale-factor))`;
    t_style.color = B.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    if (this.data.textAlignment !== null) {
      t_style.textAlign = ["left", "center", "right"][this.data.textAlignment];
    }
  }
  _setRequired(t, e) {
    if (e) {
      t.setAttribute("required", true);
    } else {
      t.removeAttribute("required");
    }
    t.setAttribute("aria-required", e);
  }
}
class e9 extends e7 {
  constructor(t) {
    let isRenderable =
      t.renderForms ||
      t.data.hasOwnCanvas ||
      (!t.data.hasAppearance && !!t.data.fieldValue);
    super(t, {
      isRenderable,
    });
  }
  setPropertyOnSiblings(t, e, i, s) {
    let annotationStorage = this.annotationStorage;
    for (let r of this._getElementsByName(t.name, t.id)) {
      if (r.domElement) {
        r.domElement[e] = i;
      }
      annotationStorage.setValue(r.id, {
        [s]: i,
      });
    }
  }
  render() {
    let annotationStorage = this.annotationStorage;
    let e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i = null;
    if (this.renderForms) {
      let s = annotationStorage.getValue(e, {
        value: this.data.fieldValue,
      });
      let userValue = s.value || "";
      let r = annotationStorage.getValue(e, {
        charLimit: this.data.maxLen,
      }).charLimit;
      if (r && userValue.length > r) {
        userValue = userValue.slice(0, r);
      }
      let formattedValue =
        s.formattedValue || this.data.textContent?.join("\n") || null;
      if (formattedValue && this.data.comb) {
        formattedValue = formattedValue.replaceAll(/\s+/g, "");
      }
      let o = {
        userValue,
        formattedValue,
        lastCommittedValue: null,
        commitKey: 1,
        focused: false,
      };
      if (this.data.multiLine) {
        i = document.createElement("textarea");
        i.textContent = formattedValue ?? userValue;
        if (this.data.doNotScroll) {
          i.style.overflowY = "hidden";
        }
      } else {
        i = document.createElement("input");
        i.type = "text";
        i.setAttribute("value", formattedValue ?? userValue);
        if (this.data.doNotScroll) {
          i.style.overflowX = "hidden";
        }
      }
      if (this.data.hasOwnCanvas) {
        i.hidden = true;
      }
      e2.add(i);
      i.setAttribute("data-element-id", e);
      i.disabled = this.data.readOnly;
      i.name = this.data.fieldName;
      i.tabIndex = 1000;
      this._setRequired(i, this.data.required);
      if (r) {
        i.maxLength = r;
      }
      i.addEventListener("input", (s) => {
        annotationStorage.setValue(e, {
          value: s.target.value,
        });
        this.setPropertyOnSiblings(i, "value", s.target.value, "value");
        o.formattedValue = null;
      });
      i.addEventListener("resetform", (t) => {
        let e = this.data.defaultFieldValue ?? "";
        i.value = o.userValue = e;
        o.formattedValue = null;
      });
      let l = (t) => {
        let { formattedValue } = o;
        if (formattedValue != null) {
          t.target.value = formattedValue;
        }
        t.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener("focus", (t) => {
          if (o.focused) {
            return;
          }
          let { target } = t;
          if (o.userValue) {
            target.value = o.userValue;
          }
          o.lastCommittedValue = target.value;
          o.commitKey = 1;
          if (!this.data.actions?.Focus) {
            o.focused = true;
          }
        });
        i.addEventListener("updatefromsandbox", (i) => {
          this.showElementAndHideCanvas(i.target);
          this._dispatchEventFromSandbox(
            {
              value(i) {
                o.userValue = i.detail.value ?? "";
                annotationStorage.setValue(e, {
                  value: o.userValue.toString(),
                });
                i.target.value = o.userValue;
              },
              formattedValue(i) {
                let { formattedValue } = i.detail;
                o.formattedValue = formattedValue;
                if (
                  formattedValue != null &&
                  i.target !== document.activeElement
                ) {
                  i.target.value = formattedValue;
                }
                annotationStorage.setValue(e, {
                  formattedValue,
                });
              },
              selRange(t) {
                t.target.setSelectionRange(...t.detail.selRange);
              },
              charLimit: (i) => {
                let { charLimit } = i.detail;
                let { target } = i;
                if (charLimit === 0) {
                  return void target.removeAttribute("maxLength");
                }
                target.setAttribute("maxLength", charLimit);
                let o_userValue = o.userValue;
                if (o_userValue && !(o_userValue.length <= charLimit)) {
                  target.value =
                    o.userValue =
                    o_userValue =
                      o_userValue.slice(0, charLimit);
                  annotationStorage.setValue(e, {
                    value: o_userValue,
                  });
                  this.linkService.eventBus?.dispatch(
                    "dispatcheventinsandbox",
                    {
                      source: this,
                      detail: {
                        id: e,
                        name: "Keystroke",
                        value: o_userValue,
                        willCommit: true,
                        commitKey: 1,
                        selStart: target.selectionStart,
                        selEnd: target.selectionEnd,
                      },
                    },
                  );
                }
              },
            },
            i,
          );
        });
        i.addEventListener("keydown", (t) => {
          o.commitKey = 1;
          let commitKey = -1;
          if (t.key === "Escape") {
            commitKey = 0;
          } else if (t.key !== "Enter" || this.data.multiLine) {
            if (t.key === "Tab") {
              o.commitKey = 3;
            }
          } else {
            commitKey = 2;
          }
          if (commitKey === -1) {
            return;
          }
          let { value } = t.target;
          if (o.lastCommittedValue !== value) {
            o.lastCommittedValue = value;
            o.userValue = value;
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey,
                selStart: t.target.selectionStart,
                selEnd: t.target.selectionEnd,
              },
            });
          }
        });
        let s = l;
        l = null;
        i.addEventListener("blur", (t) => {
          if (!o.focused || !t.relatedTarget) {
            return;
          }
          if (!this.data.actions?.Blur) {
            o.focused = false;
          }
          let { value } = t.target;
          o.userValue = value;
          if (o.lastCommittedValue !== value) {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey: o.commitKey,
                selStart: t.target.selectionStart,
                selEnd: t.target.selectionEnd,
              },
            });
          }
          s(t);
        });
        if (this.data.actions?.Keystroke) {
          i.addEventListener("beforeinput", (t) => {
            o.lastCommittedValue = null;
            let { data, target } = t;
            let { value, selectionStart, selectionEnd } = target;
            let selStart = selectionStart;
            let selEnd = selectionEnd;
            switch (t.inputType) {
              case "deleteWordBackward": {
                let t = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                if (t) {
                  selStart -= t[0].length;
                }
                break;
              }
              case "deleteWordForward": {
                let t = value.substring(selectionStart).match(/^[^\w]*\w*/);
                if (t) {
                  selEnd += t[0].length;
                }
                break;
              }
              case "deleteContentBackward":
                if (selectionStart === selectionEnd) {
                  selStart -= 1;
                }
                break;
              case "deleteContentForward":
                if (selectionStart === selectionEnd) {
                  selEnd += 1;
                }
            }
            t.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value,
                change: data || "",
                willCommit: false,
                selStart,
                selEnd,
              },
            });
          });
        }
        this._setEventListeners(
          i,
          o,
          [
            ["focus", "Focus"],
            ["blur", "Blur"],
            ["mousedown", "Mouse Down"],
            ["mouseenter", "Mouse Enter"],
            ["mouseleave", "Mouse Exit"],
            ["mouseup", "Mouse Up"],
          ],
          (t) => t.target.value,
        );
      }
      if (l) {
        i.addEventListener("blur", l);
      }
      if (this.data.comb) {
        let t = (this.data.rect[2] - this.data.rect[0]) / r;
        i.classList.add("comb");
        i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`;
      }
    } else {
      i = document.createElement("div");
      i.textContent = this.data.fieldValue;
      i.style.verticalAlign = "middle";
      i.style.display = "table-cell";
      if (this.data.hasOwnCanvas) {
        i.hidden = true;
      }
    }
    this._setTextStyle(i);
    this._setBackgroundColor(i);
    this._setDefaultPropertiesFromJS(i);
    this.container.append(i);
    return this.container;
  }
}
class it extends e7 {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas,
    });
  }
}
class ie extends e7 {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }
  render() {
    let annotationStorage = this.annotationStorage;
    let data = this.data;
    let i = data.id;
    let value = annotationStorage.getValue(i, {
      value: data.exportValue === data.fieldValue,
    }).value;
    if (typeof value === "string") {
      value = value !== "Off";
      annotationStorage.setValue(i, {
        value,
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    let a = document.createElement("input");
    e2.add(a);
    a.setAttribute("data-element-id", i);
    a.disabled = data.readOnly;
    this._setRequired(a, this.data.required);
    a.type = "checkbox";
    a.name = data.fieldName;
    if (value) {
      a.setAttribute("checked", true);
    }
    a.setAttribute("exportValue", data.exportValue);
    a.tabIndex = 1000;
    a.addEventListener("change", (s) => {
      let { name, checked } = s.target;
      for (let s of this._getElementsByName(name, i)) {
        let i = checked && s.exportValue === data.exportValue;
        if (s.domElement) {
          s.domElement.checked = i;
        }
        annotationStorage.setValue(s.id, {
          value: i,
        });
      }
      annotationStorage.setValue(i, {
        value: checked,
      });
    });
    a.addEventListener("resetform", (t) => {
      let i = data.defaultFieldValue || "Off";
      t.target.checked = i === data.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      a.addEventListener("updatefromsandbox", (e) => {
        this._dispatchEventFromSandbox(
          {
            value(e) {
              e.target.checked = e.detail.value !== "Off";
              annotationStorage.setValue(i, {
                value: e.target.checked,
              });
            },
          },
          e,
        );
      });
      this._setEventListeners(
        a,
        null,
        [
          ["change", "Validate"],
          ["change", "Action"],
          ["focus", "Focus"],
          ["blur", "Blur"],
          ["mousedown", "Mouse Down"],
          ["mouseenter", "Mouse Enter"],
          ["mouseleave", "Mouse Exit"],
          ["mouseup", "Mouse Up"],
        ],
        (t) => t.target.checked,
      );
    }
    this._setBackgroundColor(a);
    this._setDefaultPropertiesFromJS(a);
    this.container.append(a);
    return this.container;
  }
}
class ii extends e7 {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    let annotationStorage = this.annotationStorage;
    let data = this.data;
    let i = data.id;
    let value = annotationStorage.getValue(i, {
      value: data.fieldValue === data.buttonValue,
    }).value;
    if (typeof value === "string") {
      value = value !== data.buttonValue;
      annotationStorage.setValue(i, {
        value,
      });
    }
    if (value) {
      for (let s of this._getElementsByName(data.fieldName, i)) {
        annotationStorage.setValue(s.id, {
          value: false,
        });
      }
    }
    let a = document.createElement("input");
    e2.add(a);
    a.setAttribute("data-element-id", i);
    a.disabled = data.readOnly;
    this._setRequired(a, this.data.required);
    a.type = "radio";
    a.name = data.fieldName;
    if (value) {
      a.setAttribute("checked", true);
    }
    a.tabIndex = 1000;
    a.addEventListener("change", (e) => {
      let { name, checked } = e.target;
      for (let e of this._getElementsByName(name, i)) {
        annotationStorage.setValue(e.id, {
          value: false,
        });
      }
      annotationStorage.setValue(i, {
        value: checked,
      });
    });
    a.addEventListener("resetform", (t) => {
      let data_defaultFieldValue = data.defaultFieldValue;
      t.target.checked =
        data_defaultFieldValue != null &&
        data_defaultFieldValue === data.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      let s = data.buttonValue;
      a.addEventListener("updatefromsandbox", (e) => {
        this._dispatchEventFromSandbox(
          {
            value: (e) => {
              let a = s === e.detail.value;
              for (let s of this._getElementsByName(e.target.name)) {
                let e = a && s.id === i;
                if (s.domElement) {
                  s.domElement.checked = e;
                }
                annotationStorage.setValue(s.id, {
                  value: e,
                });
              }
            },
          },
          e,
        );
      });
      this._setEventListeners(
        a,
        null,
        [
          ["change", "Validate"],
          ["change", "Action"],
          ["focus", "Focus"],
          ["blur", "Blur"],
          ["mousedown", "Mouse Down"],
          ["mouseenter", "Mouse Enter"],
          ["mouseleave", "Mouse Exit"],
          ["mouseup", "Mouse Up"],
        ],
        (t) => t.target.checked,
      );
    }
    this._setBackgroundColor(a);
    this._setDefaultPropertiesFromJS(a);
    this.container.append(a);
    return this.container;
  }
}
class is extends e4 {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance,
    });
  }
  render() {
    let t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    let t_lastChild = t.lastChild;
    if (this.enableScripting && this.hasJSActions && t_lastChild) {
      this._setDefaultPropertiesFromJS(t_lastChild);
      t_lastChild.addEventListener("updatefromsandbox", (t) => {
        this._dispatchEventFromSandbox({}, t);
      });
    }
    return t;
  }
}
class ia extends e7 {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    let annotationStorage = this.annotationStorage;
    let e = this.data.id;
    let i = annotationStorage.getValue(e, {
      value: this.data.fieldValue,
    });
    let s = document.createElement("select");
    e2.add(s);
    s.setAttribute("data-element-id", e);
    s.disabled = this.data.readOnly;
    this._setRequired(s, this.data.required);
    s.name = this.data.fieldName;
    s.tabIndex = 1000;
    let a = this.data.combo && this.data.options.length > 0;
    for (let t of (!this.data.combo &&
      ((s.size = this.data.options.length),
      this.data.multiSelect && (s.multiple = true)),
    s.addEventListener("resetform", (t) => {
      let defaultFieldValue = this.data.defaultFieldValue;
      for (let t of s.options) {
        t.selected = t.value === defaultFieldValue;
      }
    }),
    this.data.options)) {
      let e = document.createElement("option");
      e.textContent = t.displayValue;
      e.value = t.exportValue;
      if (i.value.includes(t.exportValue)) {
        e.setAttribute("selected", true);
        a = false;
      }
      s.append(e);
    }
    let r = null;
    if (a) {
      let t = document.createElement("option");
      t.value = " ";
      t.setAttribute("hidden", true);
      t.setAttribute("selected", true);
      s.prepend(t);
      r = () => {
        t.remove();
        s.removeEventListener("input", r);
        r = null;
      };
      s.addEventListener("input", r);
    }
    let n = (t) => {
      let e = t ? "value" : "textContent";
      let { options, multiple } = s;
      if (multiple) {
        return Array.prototype.filter
          .call(options, (t) => t.selected)
          .map((t) => t[e]);
      }
      if (options.selectedIndex === -1) {
        return null;
      }
      return options[options.selectedIndex][e];
    };
    let o = n(false);
    let l = (t) => {
      let options = t.target.options;
      return Array.prototype.map.call(options, (t) => ({
        displayValue: t.textContent,
        exportValue: t.value,
      }));
    };
    if (this.enableScripting && this.hasJSActions) {
      s.addEventListener("updatefromsandbox", (i) => {
        this._dispatchEventFromSandbox(
          {
            value(i) {
              r?.();
              let value = i.detail.value;
              let l = new Set(Array.isArray(value) ? value : [value]);
              for (let t of s.options) {
                t.selected = l.has(t.value);
              }
              annotationStorage.setValue(e, {
                value: n(true),
              });
              o = n(false);
            },
            multipleSelection(t) {
              s.multiple = true;
            },
            remove(i) {
              let s_options = s.options;
              let remove = i.detail.remove;
              s_options[remove].selected = false;
              s.remove(remove);
              if (
                s_options.length > 0 &&
                Array.prototype.findIndex.call(s_options, (t) => t.selected) ===
                  -1
              ) {
                s_options[0].selected = true;
              }
              annotationStorage.setValue(e, {
                value: n(true),
                items: l(i),
              });
              o = n(false);
            },
            clear(i) {
              while (s.length !== 0) {
                s.remove(0);
              }
              annotationStorage.setValue(e, {
                value: null,
                items: [],
              });
              o = n(false);
            },
            insert(i) {
              let { index, displayValue, exportValue } = i.detail.insert;
              let d = s.children[index];
              let c = document.createElement("option");
              c.textContent = displayValue;
              c.value = exportValue;
              if (d) {
                d.before(c);
              } else {
                s.append(c);
              }
              annotationStorage.setValue(e, {
                value: n(true),
                items: l(i),
              });
              o = n(false);
            },
            items(i) {
              let { items } = i.detail;
              while (s.length !== 0) {
                s.remove(0);
              }
              for (let t of items) {
                let { displayValue, exportValue } = t;
                let a = document.createElement("option");
                a.textContent = displayValue;
                a.value = exportValue;
                s.append(a);
              }
              if (s.options.length > 0) {
                s.options[0].selected = true;
              }
              annotationStorage.setValue(e, {
                value: n(true),
                items: l(i),
              });
              o = n(false);
            },
            indices(i) {
              let s = new Set(i.detail.indices);
              for (let t of i.target.options) {
                t.selected = s.has(t.index);
              }
              annotationStorage.setValue(e, {
                value: n(true),
              });
              o = n(false);
            },
            editable(t) {
              t.target.disabled = !t.detail.editable;
            },
          },
          i,
        );
      });
      s.addEventListener("input", (i) => {
        let s = n(true);
        let change = n(false);
        annotationStorage.setValue(e, {
          value: s,
        });
        i.preventDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: o,
            change,
            changeEx: s,
            willCommit: false,
            commitKey: 1,
            keyDown: false,
          },
        });
      });
      this._setEventListeners(
        s,
        null,
        [
          ["focus", "Focus"],
          ["blur", "Blur"],
          ["mousedown", "Mouse Down"],
          ["mouseenter", "Mouse Enter"],
          ["mouseleave", "Mouse Exit"],
          ["mouseup", "Mouse Up"],
          ["input", "Action"],
          ["input", "Validate"],
        ],
        (t) => t.target.value,
      );
    } else {
      s.addEventListener("input", function (i) {
        annotationStorage.setValue(e, {
          value: n(true),
        });
      });
    }
    if (this.data.combo) {
      this._setTextStyle(s);
    }
    this._setBackgroundColor(s);
    this._setDefaultPropertiesFromJS(s);
    this.container.append(s);
    return this.container;
  }
}
class ir extends e6 {
  constructor(t) {
    let { data, elements } = t;
    super(t, {
      isRenderable: e6._hasPopupData(data),
    });
    this.elements = elements;
    this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    let t = (this.popup = new io({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open,
    }));
    let e = [];
    for (let i of this.elements) {
      i.popup = t;
      i.container.ariaHasPopup = "dialog";
      e.push(i.data.id);
      i.addHighlightArea();
    }
    this.container.setAttribute(
      "aria-controls",
      e.map((t) => `${U}${t}`).join(","),
    );
    return this.container;
  }
}
class io {
  #i6 = this.#i4.bind(this);
  #i8 = this.#i7.bind(this);
  #i9 = this.#st.bind(this);
  #se = this.#si.bind(this);
  #ss = null;
  #tu = null;
  #sa = null;
  #sr = null;
  #sn = null;
  #so = null;
  #sl = null;
  #sh = false;
  #sd = null;
  #S = null;
  #sc = null;
  #su = null;
  #sp = null;
  #iJ = null;
  #sg = false;
  constructor({
    container,
    color,
    elements,
    titleObj,
    modificationDate,
    contentsObj,
    richText,
    parent,
    rect,
    parentRect,
    open,
  }) {
    for (let d of ((this.#tu = container),
    (this.#sp = titleObj),
    (this.#sa = contentsObj),
    (this.#su = richText),
    (this.#so = parent),
    (this.#ss = color),
    (this.#sc = rect),
    (this.#sl = parentRect),
    (this.#sn = elements),
    (this.#sr = ti.toDateObject(modificationDate)),
    (this.trigger = elements.flatMap((t) => t.getElementsToTriggerPopup())),
    this.trigger)) {
      d.addEventListener("click", this.#se);
      d.addEventListener("mouseenter", this.#i9);
      d.addEventListener("mouseleave", this.#i8);
      d.classList.add("popupTriggerArea");
    }
    for (let t of elements) {
      t.container?.addEventListener("keydown", this.#i6);
    }
    this.#tu.hidden = true;
    if (open) {
      this.#si();
    }
  }
  render() {
    if (this.#sd) {
      return;
    }
    let div = (this.#sd = document.createElement("div"));
    div.className = "popup";
    if (this.#ss) {
      let e = (div.style.outlineColor = B.makeHexColor(...this.#ss));
      if (
        CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")
      ) {
        div.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
      } else {
        div.style.backgroundColor = B.makeHexColor(
          ...this.#ss.map((t) => Math.floor(0.7 * (255 - t) + t)),
        );
      }
    }
    let e = document.createElement("span");
    e.className = "header";
    let i = document.createElement("h1");
    e.append(i);
    ({ dir: i.dir, str: i.textContent } = this.#sp);
    div.append(e);
    if (this.#sr) {
      let t = document.createElement("span");
      t.classList.add("popupDate");
      t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
      t.setAttribute(
        "data-l10n-args",
        JSON.stringify({
          dateObj: this.#sr.valueOf(),
        }),
      );
      e.append(t);
    }
    let xfaHtml = this.#sm;
    if (xfaHtml) {
      e1.render({
        xfaHtml,
        intent: "richText",
        div,
      });
      div.lastChild.classList.add("richText", "popupContent");
    } else {
      let e = this._formatContents(this.#sa);
      div.append(e);
    }
    this.#tu.append(div);
  }
  get #sm() {
    let t = this.#su;
    let e = this.#sa;
    return (t?.str && (!e?.str || e.str === t.str) && this.#su.html) || null;
  }
  get #sf() {
    return this.#sm?.attributes?.style?.fontSize || 0;
  }
  get #sb() {
    return this.#sm?.attributes?.style?.color || null;
  }
  #sv(t) {
    let children = [];
    let attributes = {
      style: {
        color: this.#sb,
        fontSize: this.#sf ? `calc(${this.#sf}px * var(--scale-factor))` : "",
      },
    };
    for (let s of t.split("\n")) {
      children.push({
        name: "span",
        value: s,
        attributes,
      });
    }
    return {
      str: t,
      html: {
        name: "div",
        attributes: {
          dir: "auto",
        },
        children: [
          {
            name: "p",
            children,
          },
        ],
      },
    };
  }
  _formatContents({ str, dir }) {
    let i = document.createElement("p");
    i.classList.add("popupContent");
    i.dir = dir;
    let s = str.split(/(?:\r\n?|\n)/);
    for (let t = 0, e = s.length; t < e; ++t) {
      let a = s[t];
      i.append(document.createTextNode(a));
      if (t < e - 1) {
        i.append(document.createElement("br"));
      }
    }
    return i;
  }
  #i4(t) {
    if (!(t.altKey || t.shiftKey || t.ctrlKey || t.metaKey)) {
      if (t.key === "Enter" || (t.key === "Escape" && this.#sh)) {
        this.#si();
      }
    }
  }
  updateEdited({ rect, popupContent }) {
    this.#iJ ||= {
      contentsObj: this.#sa,
      richText: this.#su,
    };
    if (rect) {
      this.#S = null;
    }
    if (popupContent) {
      this.#su = this.#sv(popupContent);
      this.#sa = null;
    }
    this.#sd?.remove();
    this.#sd = null;
  }
  resetEdited() {
    if (this.#iJ) {
      ({ contentsObj: this.#sa, richText: this.#su } = this.#iJ);
      this.#iJ = null;
      this.#sd?.remove();
      this.#sd = null;
      this.#S = null;
    }
  }
  #sA() {
    if (this.#S !== null) {
      return;
    }
    let {
      page: { view },
      viewport: {
        rawDims: { pageWidth, pageHeight, pageX, pageY },
      },
    } = this.#so;
    let r = !!this.#sl;
    let n = r ? this.#sl : this.#sc;
    for (let t of this.#sn) {
      if (!n || B.intersect(t.data.rect, n) !== null) {
        n = t.data.rect;
        r = true;
        break;
      }
    }
    let o = B.normalizeRect([
      n[0],
      view[3] - n[1] + view[1],
      n[2],
      view[3] - n[3] + view[1],
    ]);
    let l = r ? n[2] - n[0] + 5 : 0;
    let h = o[0] + l;
    let d = o[1];
    this.#S = [
      (100 * (h - pageX)) / pageWidth,
      (100 * (d - pageY)) / pageHeight,
    ];
    let { style } = this.#tu;
    style.left = `${this.#S[0]}%`;
    style.top = `${this.#S[1]}%`;
  }
  #si() {
    this.#sh = !this.#sh;
    if (this.#sh) {
      this.#st();
      this.#tu.addEventListener("click", this.#se);
      this.#tu.addEventListener("keydown", this.#i6);
    } else {
      this.#i7();
      this.#tu.removeEventListener("click", this.#se);
      this.#tu.removeEventListener("keydown", this.#i6);
    }
  }
  #st() {
    if (!this.#sd) {
      this.render();
    }
    if (this.isVisible) {
      if (this.#sh) {
        this.#tu.classList.add("focused");
      }
    } else {
      this.#sA();
      this.#tu.hidden = false;
      this.#tu.style.zIndex = parseInt(this.#tu.style.zIndex) + 1000;
    }
  }
  #i7() {
    this.#tu.classList.remove("focused");
    if (!this.#sh && this.isVisible) {
      this.#tu.hidden = true;
      this.#tu.style.zIndex = parseInt(this.#tu.style.zIndex) - 1000;
    }
  }
  forceHide() {
    this.#sg = this.isVisible;
    if (this.#sg) {
      this.#tu.hidden = true;
    }
  }
  maybeShow() {
    if (this.#sg) {
      if (!this.#sd) {
        this.#st();
      }
      this.#sg = false;
      this.#tu.hidden = false;
    }
  }
  get isVisible() {
    return this.#tu.hidden === false;
  }
}
class il extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
    this.textContent = t.data.textContent;
    this.textPosition = t.data.textPosition;
    this.annotationEditorType = c.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      let t = document.createElement("div");
      for (let e of (t.classList.add("annotationTextContent"),
      t.setAttribute("role", "comment"),
      this.textContent)) {
        let i = document.createElement("span");
        i.textContent = e;
        t.append(i);
      }
      this.container.append(t);
    }
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class ih extends e6 {
  #sy = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    let data = this.data;
    let { width, height } = e3(data.rect);
    let s = this.svgFactory.create(width, height, true);
    let a = (this.#sy = this.svgFactory.createElement("svg:line"));
    a.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
    a.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
    a.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
    a.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
    a.setAttribute("stroke-width", data.borderStyle.width || 1);
    a.setAttribute("stroke", "transparent");
    a.setAttribute("fill", "transparent");
    s.append(a);
    this.container.append(s);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#sy;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class id extends e6 {
  #s_ = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    let data = this.data;
    let { width, height } = e3(data.rect);
    let s = this.svgFactory.create(width, height, true);
    let width_1 = data.borderStyle.width;
    let r = (this.#s_ = this.svgFactory.createElement("svg:rect"));
    r.setAttribute("x", width_1 / 2);
    r.setAttribute("y", width_1 / 2);
    r.setAttribute("width", width - width_1);
    r.setAttribute("height", height - width_1);
    r.setAttribute("stroke-width", width_1 || 1);
    r.setAttribute("stroke", "transparent");
    r.setAttribute("fill", "transparent");
    s.append(r);
    this.container.append(s);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#s_;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ic extends e6 {
  #sx = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    let data = this.data;
    let { width, height } = e3(data.rect);
    let s = this.svgFactory.create(width, height, true);
    let width_1 = data.borderStyle.width;
    let r = (this.#sx = this.svgFactory.createElement("svg:ellipse"));
    r.setAttribute("cx", width / 2);
    r.setAttribute("cy", height / 2);
    r.setAttribute("rx", width / 2 - width_1 / 2);
    r.setAttribute("ry", height / 2 - width_1 / 2);
    r.setAttribute("stroke-width", width_1 || 1);
    r.setAttribute("stroke", "transparent");
    r.setAttribute("fill", "transparent");
    s.append(r);
    this.container.append(s);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#sx;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class iu extends e6 {
  #sw = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    let {
      data: { rect, vertices, borderStyle, popupRef },
    } = this;
    if (!vertices) {
      return this.container;
    }
    let { width, height } = e3(rect);
    let n = this.svgFactory.create(width, height, true);
    let o = [];
    for (let i = 0, s = vertices.length; i < s; i += 2) {
      let s = vertices[i] - rect[0];
      let a = rect[3] - vertices[i + 1];
      o.push(`${s},${a}`);
    }
    o = o.join(" ");
    let l = (this.#sw = this.svgFactory.createElement(this.svgElementName));
    l.setAttribute("points", o);
    l.setAttribute("stroke-width", borderStyle.width || 1);
    l.setAttribute("stroke", "transparent");
    l.setAttribute("fill", "transparent");
    n.append(l);
    this.container.append(n);
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#sw;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ip extends iu {
  constructor(t) {
    super(t);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
}
class ig extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
}
class im extends e6 {
  #sC = [];
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType =
      this.data.it === "InkHighlight" ? c.HIGHLIGHT : c.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    let {
      data: { rect, inkLists, borderStyle, popupRef },
    } = this;
    let { width, height } = e3(rect);
    let n = this.svgFactory.create(width, height, true);
    for (let s of inkLists) {
      let e = [];
      for (let i = 0, a = s.length; i < a; i += 2) {
        let a = s[i] - rect[0];
        let r = rect[3] - s[i + 1];
        e.push(`${a},${r}`);
      }
      e = e.join(" ");
      let a = this.svgFactory.createElement(this.svgElementName);
      this.#sC.push(a);
      a.setAttribute("points", e);
      a.setAttribute("stroke-width", borderStyle.width || 1);
      a.setAttribute("stroke", "transparent");
      a.setAttribute("fill", "transparent");
      n.append(a);
    }
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(n);
    this._editOnDoubleClick();
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#sC;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ib extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true,
    });
    this.annotationEditorType = c.HIGHLIGHT;
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("highlightAnnotation");
    this._editOnDoubleClick();
    return this.container;
  }
}
class iv extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true,
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("underlineAnnotation");
    return this.container;
  }
}
class iA extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true,
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    return this.container;
  }
}
class iy extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true,
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    return this.container;
  }
}
class i_ extends e6 {
  constructor(t) {
    super(t, {
      isRenderable: true,
      ignoreBorder: true,
    });
    this.annotationEditorType = c.STAMP;
  }
  render() {
    this.container.classList.add("stampAnnotation");
    this.container.setAttribute("role", "img");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
}
class ix extends e6 {
  #sE = null;
  constructor(t) {
    super(t, {
      isRenderable: true,
    });
    let { file } = this.data;
    this.filename = file.filename;
    this.content = file.content;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...file,
    });
  }
  render() {
    let t;
    this.container.classList.add("fileAttachmentAnnotation");
    let { container, data } = this;
    if (data.hasAppearance || data.fillAlpha === 0) {
      t = document.createElement("div");
    } else {
      t = document.createElement("img");
      t.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "paperclip" : "pushpin"}.svg`;
      if (data.fillAlpha && data.fillAlpha < 1) {
        t.style = `filter: opacity(${Math.round(100 * data.fillAlpha)}%);`;
      }
    }
    t.addEventListener("dblclick", this.#sS.bind(this));
    this.#sE = t;
    let { isMac } = O.platform;
    container.addEventListener("keydown", (t) => {
      if (t.key === "Enter" && (isMac ? t.metaKey : t.ctrlKey)) {
        this.#sS();
      }
    });
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    } else {
      t.classList.add("popupTriggerArea");
    }
    container.append(t);
    return container;
  }
  getElementsToTriggerPopup() {
    return this.#sE;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #sS() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
}
class iw {
  #sT = null;
  #sM = null;
  #sk = new Map();
  #sI = null;
  constructor({
    div,
    accessibilityManager,
    annotationCanvasMap,
    annotationEditorUIManager,
    page,
    viewport,
    structTreeLayer,
  }) {
    this.div = div;
    this.#sT = accessibilityManager;
    this.#sM = annotationCanvasMap;
    this.#sI = structTreeLayer || null;
    this.page = page;
    this.viewport = viewport;
    this.zIndex = 0;
    this._annotationEditorUIManager = annotationEditorUIManager;
  }
  hasEditableAnnotations() {
    return this.#sk.size > 0;
  }
  async #sP(t, e) {
    let i = t.firstChild || t;
    let s = (i.id = `${U}${e}`);
    let a = await this.#sI?.getAriaAttributes(s);
    if (a) {
      for (let [t, e] of a) {
        i.setAttribute(t, e);
      }
    }
    this.div.append(t);
    this.#sT?.moveElementInDOM(this.div, t, i, false);
  }
  async render(t) {
    let { annotations } = t;
    let div = this.div;
    to(div, this.viewport);
    let s = new Map();
    let a = {
      data: null,
      layer: div,
      linkService: t.linkService,
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== false,
      svgFactory: new e0(),
      annotationStorage: t.annotationStorage || new tw(),
      enableScripting: t.enableScripting === true,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null,
    };
    for (let t of annotations) {
      if (t.noHTML) {
        continue;
      }
      let e = t.annotationType === 16;
      if (e) {
        let e = s.get(t.id);
        if (!e) {
          continue;
        }
        a.elements = e;
      } else {
        let { width, height } = e3(t.rect);
        if (width <= 0 || height <= 0) {
          continue;
        }
      }
      a.data = t;
      let i = e5.create(a);
      if (!i.isRenderable) {
        continue;
      }
      if (!e && t.popupRef) {
        let e = s.get(t.popupRef);
        if (e) {
          e.push(i);
        } else {
          s.set(t.popupRef, [i]);
        }
      }
      let r = i.render();
      if (t.hidden) {
        r.style.visibility = "hidden";
      }
      await this.#sP(r, t.id);
      if (i._isEditable) {
        this.#sk.set(i.data.id, i);
        this._annotationEditorUIManager?.renderAnnotationElement(i);
      }
    }
    this.#sR();
  }
  update({ viewport }) {
    let div = this.div;
    this.viewport = viewport;
    to(div, {
      rotation: viewport.rotation,
    });
    this.#sR();
    div.hidden = false;
  }
  #sR() {
    if (!this.#sM) {
      return;
    }
    let div = this.div;
    for (let [e, i] of this.#sM) {
      let s = div.querySelector(`[data-annotation-id="${e}"]`);
      if (!s) {
        continue;
      }
      i.className = "annotationContent";
      let { firstChild } = s;
      if (firstChild) {
        if (firstChild.nodeName === "CANVAS") {
          firstChild.replaceWith(i);
        } else if (firstChild.classList.contains("annotationContent")) {
          firstChild.after(i);
        } else {
          firstChild.before(i);
        }
      } else {
        s.append(i);
      }
    }
    this.#sM.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#sk.values());
  }
  getEditableAnnotation(t) {
    return this.#sk.get(t);
  }
}
let iC = /\r\n?|\n/g;
class iE extends tA {
  #ss;
  #sD = "";
  #sL = `${this.id}-editor`;
  #sF = null;
  #sf;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    let iE_prototype = iE.prototype;
    let e = (t) => t.isEmpty();
    let tb_TRANSLATE_SMALL = tb.TRANSLATE_SMALL;
    let tb_TRANSLATE_BIG = tb.TRANSLATE_BIG;
    return C(
      this,
      "_keyboardManager",
      new tm([
        [
          ["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"],
          iE_prototype.commitOrRemove,
          {
            bubbles: true,
          },
        ],
        [
          ["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"],
          iE_prototype.commitOrRemove,
        ],
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          iE_prototype._translateEmpty,
          {
            args: [-tb_TRANSLATE_SMALL, 0],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
          iE_prototype._translateEmpty,
          {
            args: [-tb_TRANSLATE_BIG, 0],
            checker: e,
          },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          iE_prototype._translateEmpty,
          {
            args: [tb_TRANSLATE_SMALL, 0],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
          iE_prototype._translateEmpty,
          {
            args: [tb_TRANSLATE_BIG, 0],
            checker: e,
          },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          iE_prototype._translateEmpty,
          {
            args: [0, -tb_TRANSLATE_SMALL],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
          iE_prototype._translateEmpty,
          {
            args: [0, -tb_TRANSLATE_BIG],
            checker: e,
          },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          iE_prototype._translateEmpty,
          {
            args: [0, tb_TRANSLATE_SMALL],
            checker: e,
          },
        ],
        [
          ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
          iE_prototype._translateEmpty,
          {
            args: [0, tb_TRANSLATE_BIG],
            checker: e,
          },
        ],
      ]),
    );
  }
  static _type = "freetext";
  static _editorType = c.FREETEXT;
  constructor(t) {
    super({
      ...t,
      name: "freeTextEditor",
    });
    this.#ss = t.color || iE._defaultColor || tA._defaultLineColor;
    this.#sf = t.fontSize || iE._defaultFontSize;
  }
  static initialize(t, e) {
    tA.initialize(t, e);
    let i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(
      i.getPropertyValue("--freetext-padding"),
    );
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case u.FREETEXT_SIZE:
        iE._defaultFontSize = e;
        break;
      case u.FREETEXT_COLOR:
        iE._defaultColor = e;
    }
  }
  updateParams(t, e) {
    switch (t) {
      case u.FREETEXT_SIZE:
        this.#sO(e);
        break;
      case u.FREETEXT_COLOR:
        this.#sN(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [u.FREETEXT_SIZE, iE._defaultFontSize],
      [u.FREETEXT_COLOR, iE._defaultColor || tA._defaultLineColor],
    ];
  }
  get propertiesToUpdate() {
    return [
      [u.FREETEXT_SIZE, this.#sf],
      [u.FREETEXT_COLOR, this.#ss],
    ];
  }
  #sO(t) {
    let e = (t) => {
      this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`;
      this.translate(0, -(t - this.#sf) * this.parentScale);
      this.#sf = t;
      this.#sB();
    };
    let i = this.#sf;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true,
    });
  }
  #sN(t) {
    let e = (t) => {
      this.#ss = this.editorDiv.style.color = t;
    };
    let i = this.#ss;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true,
    });
  }
  _translateEmpty(t, e) {
    this._uiManager.translateSelectedEditors(t, e, true);
  }
  getInitialTranslation() {
    let parentScale = this.parentScale;
    return [
      -iE._internalPadding * parentScale,
      -(iE._internalPadding + this.#sf) * parentScale,
    ];
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (this.div !== null) {
        if (!this.isAttachedToDOM) {
          this.parent.add(this);
        }
      }
    }
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return;
    }
    this.parent.setEditingState(false);
    this.parent.updateToolbar(c.FREETEXT);
    super.enableEditMode();
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.#sF = new AbortController();
    let t = this._uiManager.combinedSignal(this.#sF);
    this.editorDiv.addEventListener(
      "keydown",
      this.editorDivKeydown.bind(this),
      {
        signal: t,
      },
    );
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: t,
    });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: t,
    });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: t,
    });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: t,
    });
  }
  disableEditMode() {
    if (this.isInEditMode()) {
      this.parent.setEditingState(true);
      super.disableEditMode();
      this.overlayDiv.classList.add("enabled");
      this.editorDiv.contentEditable = false;
      this.div.setAttribute("aria-activedescendant", this.#sL);
      this._isDraggable = true;
      this.#sF?.abort();
      this.#sF = null;
      this.div.focus({
        preventScroll: true,
      });
      this.isEditing = false;
      this.parent.div.classList.add("freetextEditing");
    }
  }
  focusin(t) {
    if (this._focusEventsAllowed) {
      super.focusin(t);
      if (t.target !== this.editorDiv) {
        this.editorDiv.focus();
      }
    }
  }
  onceAdded() {
    if (!this.width) {
      this.enableEditMode();
      this.editorDiv.focus();
      if (this._initialOptions?.isCentered) {
        this.center();
      }
      this._initialOptions = null;
    }
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #sz() {
    let t = [];
    this.editorDiv.normalize();
    let e = null;
    for (let i of this.editorDiv.childNodes) {
      if (e?.nodeType !== Node.TEXT_NODE || i.nodeName !== "BR") {
        t.push(iE.#sH(i));
        e = i;
      }
    }
    return t.join("\n");
  }
  #sB() {
    let t;
    let [e, i] = this.parentDimensions;
    if (this.isAttachedToDOM) {
      t = this.div.getBoundingClientRect();
    } else {
      let { currentLayer, div } = this;
      let s = div.style.display;
      let a = div.classList.contains("hidden");
      div.classList.remove("hidden");
      div.style.display = "hidden";
      currentLayer.div.append(this.div);
      t = div.getBoundingClientRect();
      div.remove();
      div.style.display = s;
      div.classList.toggle("hidden", a);
    }
    if (this.rotation % 180 == this.parentRotation % 180) {
      this.width = t.width / e;
      this.height = t.height / i;
    } else {
      this.width = t.height / e;
      this.height = t.width / i;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    let t = this.#sD;
    let e = (this.#sD = this.#sz().trimEnd());
    if (t === e) {
      return;
    }
    let i = (t) => {
      this.#sD = t;
      if (t) {
        this.#sj();
        this._uiManager.rebuild(this);
        this.#sB();
      } else {
        this.remove();
      }
    };
    this.addCommands({
      cmd: () => {
        i(e);
      },
      undo: () => {
        i(t);
      },
      mustExec: false,
    });
    this.#sB();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  dblclick(t) {
    this.enterInEditMode();
  }
  keydown(t) {
    if (t.target === this.div && t.key === "Enter") {
      this.enterInEditMode();
      t.preventDefault();
    }
  }
  editorDivKeydown(t) {
    iE._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = true;
  }
  editorDivBlur(t) {
    this.isEditing = false;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  render() {
    let t;
    let e;
    if (this.div) {
      return this.div;
    }
    if (this.width) {
      t = this.x;
      e = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#sL);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    let { style } = this.editorDiv;
    style.fontSize = `calc(${this.#sf}px * var(--scale-factor))`;
    style.color = this.#ss;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    tc(this, this.div, ["dblclick", "keydown"]);
    if (this.width) {
      let [i, s] = this.parentDimensions;
      if (this.annotationElementId) {
        let a;
        let r;
        let { position } = this._initialData;
        let [o, l] = this.getInitialTranslation();
        [o, l] = this.pageTranslationToScreen(o, l);
        let [h, d] = this.pageDimensions;
        let [c, u] = this.pageTranslation;
        switch (this.rotation) {
          case 0:
            a = t + (position[0] - c) / h;
            r = e + this.height - (position[1] - u) / d;
            break;
          case 90:
            a = t + (position[0] - c) / h;
            r = e - (position[1] - u) / d;
            [o, l] = [l, -o];
            break;
          case 180:
            a = t - this.width + (position[0] - c) / h;
            r = e - (position[1] - u) / d;
            [o, l] = [-o, -l];
            break;
          case 270:
            a = t + (position[0] - c - this.height * d) / h;
            r = e + (position[1] - u - this.width * h) / d;
            [o, l] = [-l, o];
        }
        this.setAt(a * i, r * s, o, l);
      } else {
        this.setAt(t * i, e * s, this.width * i, this.height * s);
      }
      this.#sj();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #sH(t) {
    return (
      t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText
    ).replaceAll(iC, "");
  }
  editorDivPaste(t) {
    let e = t.clipboardData || window.clipboardData;
    let { types } = e;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    t.preventDefault();
    let s = iE.#sU(e.getData("text") || "").replaceAll(iC, "\n");
    if (!s) {
      return;
    }
    let a = window.getSelection();
    if (!a.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    a.deleteFromDocument();
    let r = a.getRangeAt(0);
    if (!s.includes("\n")) {
      r.insertNode(document.createTextNode(s));
      this.editorDiv.normalize();
      a.collapseToStart();
      return;
    }
    let { startContainer, startOffset } = r;
    let l = [];
    let h = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      let t = startContainer.parentElement;
      h.push(startContainer.nodeValue.slice(startOffset).replaceAll(iC, ""));
      if (t !== this.editorDiv) {
        let e = l;
        for (let i of this.editorDiv.childNodes) {
          if (i === t) {
            e = h;
            continue;
          }
          e.push(iE.#sH(i));
        }
      }
      l.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(iC, ""));
    } else if (startContainer === this.editorDiv) {
      let t = l;
      let e = 0;
      for (let i of this.editorDiv.childNodes) {
        if (e++ === startOffset) {
          t = h;
        }
        t.push(iE.#sH(i));
      }
    }
    this.#sD = `${l.join("\n")}${s}${h.join("\n")}`;
    this.#sj();
    let d = new Range();
    let c = l.reduce((acc, item) => acc + item.length, 0);
    for (let { firstChild } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        let e = firstChild.nodeValue.length;
        if (c <= e) {
          d.setStart(firstChild, c);
          d.setEnd(firstChild, c);
          break;
        }
        c -= e;
      }
    }
    a.removeAllRanges();
    a.addRange(d);
  }
  #sj() {
    this.editorDiv.replaceChildren();
    if (this.#sD) {
      for (let t of this.#sD.split("\n")) {
        let e = document.createElement("div");
        e.append(t ? document.createTextNode(t) : document.createElement("br"));
        this.editorDiv.append(e);
      }
    }
  }
  #s$() {
    return this.#sD.replaceAll("\xa0", " ");
  }
  static #sU(t) {
    return t.replaceAll(" ", "\xa0");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof il) {
      let {
        data: {
          defaultAppearanceData: { fontSize, fontColor },
          rect,
          rotation,
          id,
          popupRef,
        },
        textContent,
        textPosition,
        parent: {
          page: { pageNumber },
        },
      } = t;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      s = t = {
        annotationType: c.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join("\n"),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef,
      };
    }
    let a = await super.deserialize(t, e, i);
    a.#sf = t.fontSize;
    a.#ss = B.makeHexColor(...t.color);
    a.#sD = iE.#sU(t.value);
    a.annotationElementId = t.id || null;
    a._initialData = s;
    return a;
  }
  serialize(t = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    let e = iE._internalPadding * this.parentScale;
    let rect = this.getRect(e, e);
    let s = tA._colorManager.convert(
      this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#ss,
    );
    let a = {
      annotationType: c.FREETEXT,
      color: s,
      fontSize: this.#sf,
      value: this.#s$(),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
    };
    if (t) {
      return a;
    }
    if (this.annotationElementId && !this.#sG(a)) {
      return null;
    }
    a.id = this.annotationElementId;
    return a;
  }
  #sG(t) {
    let { value, fontSize, color, pageIndex } = this._initialData;
    return (
      this._hasBeenMoved ||
      t.value !== value ||
      t.fontSize !== fontSize ||
      t.color.some((t, e) => t !== color[e]) ||
      t.pageIndex !== pageIndex
    );
  }
  renderAnnotationElement(t) {
    let e = super.renderAnnotationElement(t);
    if (this.deleted) {
      return e;
    }
    let { style } = e;
    for (let t of ((style.fontSize = `calc(${this.#sf}px * var(--scale-factor))`),
    (style.color = this.#ss),
    e.replaceChildren(),
    this.#sD.split("\n"))) {
      let i = document.createElement("div");
      i.append(t ? document.createTextNode(t) : document.createElement("br"));
      e.append(i);
    }
    let s = iE._internalPadding * this.parentScale;
    t.updateEdited({
      rect: this.getRect(s, s),
      popupContent: this.#sD,
    });
    return e;
  }
  resetAnnotationElement(t) {
    super.resetAnnotationElement(t);
    t.resetEdited();
  }
}
class iS {
  toSVGPath() {
    _("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    _("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    _("Abstract method `serialize` must be implemented.");
  }
  get classNamesForDrawing() {
    _("Abstract getter `classNamesForDrawing` must be implemented.");
  }
  get classNamesForOutlining() {
    _("Abstract getter `classNamesForOutlining` must be implemented.");
  }
  get mustRemoveSelfIntersections() {
    return false;
  }
}
class iT {
  #sV;
  #sW = [];
  #sq;
  #sX;
  #sK = [];
  #sY = new Float64Array(18);
  #sQ;
  #sJ;
  #sZ;
  #s0;
  #s1;
  #s2;
  #s3 = [];
  static #s5 = 8;
  static #s6 = 2;
  static #s4 = iT.#s5 + iT.#s6;
  constructor({ x, y }, i, s, a, r, n = 0) {
    this.#sV = i;
    this.#s2 = a * s;
    this.#sX = r;
    this.#sY.set([0 / 0, 0 / 0, 0 / 0, 0 / 0, x, y], 6);
    this.#sq = n;
    this.#s0 = iT.#s5 * s;
    this.#sZ = iT.#s4 * s;
    this.#s1 = s;
    this.#s3.push(x, y);
  }
  isEmpty() {
    return isNaN(this.#sY[8]);
  }
  #s8() {
    let t = this.#sY.subarray(4, 6);
    let e = this.#sY.subarray(16, 18);
    let [i, s, a, r] = this.#sV;
    return [
      (this.#sQ + (t[0] - e[0]) / 2 - i) / a,
      (this.#sJ + (t[1] - e[1]) / 2 - s) / r,
      (this.#sQ + (e[0] - t[0]) / 2 - i) / a,
      (this.#sJ + (e[1] - t[1]) / 2 - s) / r,
    ];
  }
  add({ x, y: y_1 }) {
    this.#sQ = x;
    this.#sJ = y_1;
    let [i, s, a, r] = this.#sV;
    let [n, o, l, h] = this.#sY.subarray(8, 12);
    let d = x - l;
    let c = y_1 - h;
    let u = Math.hypot(d, c);
    if (u < this.#sZ) {
      return false;
    }
    let p = u - this.#s0;
    let g = p / u;
    let m = g * d;
    let f = g * c;
    let b = n;
    let v = o;
    n = l;
    o = h;
    l += m;
    h += f;
    this.#s3?.push(x, y_1);
    let A = (-f / p) * this.#s2;
    let y = (m / p) * this.#s2;
    this.#sY.set(this.#sY.subarray(2, 8), 0);
    this.#sY.set([l + A, h + y], 4);
    this.#sY.set(this.#sY.subarray(14, 18), 12);
    this.#sY.set([l - A, h - y], 16);
    if (isNaN(this.#sY[6])) {
      if (this.#sK.length === 0) {
        this.#sY.set([n + A, o + y], 2);
        this.#sK.push(
          0 / 0,
          0 / 0,
          0 / 0,
          0 / 0,
          (n + A - i) / a,
          (o + y - s) / r,
        );
        this.#sY.set([n - A, o - y], 14);
        this.#sW.push(
          0 / 0,
          0 / 0,
          0 / 0,
          0 / 0,
          (n - A - i) / a,
          (o - y - s) / r,
        );
      }
      this.#sY.set([b, v, n, o, l, h], 6);
      return !this.isEmpty();
    }
    if (
      (this.#sY.set([b, v, n, o, l, h], 6),
      Math.abs(Math.atan2(v - o, b - n) - Math.atan2(f, m)) < Math.PI / 2)
    ) {
      [n, o, l, h] = this.#sY.subarray(2, 6);
      this.#sK.push(
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        ((n + l) / 2 - i) / a,
        ((o + h) / 2 - s) / r,
      );
      [n, o, b, v] = this.#sY.subarray(14, 18);
      this.#sW.push(
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        ((b + n) / 2 - i) / a,
        ((v + o) / 2 - s) / r,
      );
    } else {
      [b, v, n, o, l, h] = this.#sY.subarray(0, 6);
      this.#sK.push(
        ((b + 5 * n) / 6 - i) / a,
        ((v + 5 * o) / 6 - s) / r,
        ((5 * n + l) / 6 - i) / a,
        ((5 * o + h) / 6 - s) / r,
        ((n + l) / 2 - i) / a,
        ((o + h) / 2 - s) / r,
      );
      [l, h, n, o, b, v] = this.#sY.subarray(12, 18);
      this.#sW.push(
        ((b + 5 * n) / 6 - i) / a,
        ((v + 5 * o) / 6 - s) / r,
        ((5 * n + l) / 6 - i) / a,
        ((5 * o + h) / 6 - s) / r,
        ((n + l) / 2 - i) / a,
        ((o + h) / 2 - s) / r,
      );
    }
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    let t = this.#sK;
    let e = this.#sW;
    if (isNaN(this.#sY[6]) && !this.isEmpty()) {
      return this.#s7();
    }
    let i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let e = 6; e < t.length; e += 6) {
      if (isNaN(t[e])) {
        i.push(`L${t[e + 4]} ${t[e + 5]}`);
      } else {
        i.push(
          `C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`,
        );
      }
    }
    this.#s9(i);
    for (let t = e.length - 6; t >= 6; t -= 6) {
      if (isNaN(e[t])) {
        i.push(`L${e[t + 4]} ${e[t + 5]}`);
      } else {
        i.push(
          `C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`,
        );
      }
    }
    this.#at(i);
    return i.join(" ");
  }
  #s7() {
    let [t, e, i, s] = this.#sV;
    let [a, r, n, o] = this.#s8();
    return `M${(this.#sY[2] - t) / i} ${(this.#sY[3] - e) / s} L${(this.#sY[4] - t) / i} ${(this.#sY[5] - e) / s} L${a} ${r} L${n} ${o} L${(this.#sY[16] - t) / i} ${(this.#sY[17] - e) / s} L${(this.#sY[14] - t) / i} ${(this.#sY[15] - e) / s} Z`;
  }
  #at(t) {
    let e = this.#sW;
    t.push(`L${e[4]} ${e[5]} Z`);
  }
  #s9(t) {
    let [e, i, s, a] = this.#sV;
    let r = this.#sY.subarray(4, 6);
    let n = this.#sY.subarray(16, 18);
    let [o, l, h, d] = this.#s8();
    t.push(
      `L${(r[0] - e) / s} ${(r[1] - i) / a} L${o} ${l} L${h} ${d} L${(n[0] - e) / s} ${(n[1] - i) / a}`,
    );
  }
  newFreeDrawOutline(t, e, i, s, a, r) {
    return new iM(t, e, i, s, a, r);
  }
  getOutlines() {
    let t = this.#sK;
    let e = this.#sW;
    let i = this.#sY;
    let [s, a, r, n] = this.#sV;
    let o = new Float64Array((this.#s3?.length ?? 0) + 2);
    for (let t = 0, e = o.length - 2; t < e; t += 2) {
      o[t] = (this.#s3[t] - s) / r;
      o[t + 1] = (this.#s3[t + 1] - a) / n;
    }
    o[o.length - 2] = (this.#sQ - s) / r;
    o[o.length - 1] = (this.#sJ - a) / n;
    if (isNaN(i[6]) && !this.isEmpty()) {
      return this.#ae(o);
    }
    let l = new Float64Array(this.#sK.length + 24 + this.#sW.length);
    let t_length = t.length;
    for (let e = 0; e < t_length; e += 2) {
      if (isNaN(t[e])) {
        l[e] = l[e + 1] = 0 / 0;
        continue;
      }
      l[e] = t[e];
      l[e + 1] = t[e + 1];
    }
    t_length = this.#ai(l, t_length);
    for (let t = e.length - 6; t >= 6; t -= 6) {
      for (let i = 0; i < 6; i += 2) {
        if (isNaN(e[t + i])) {
          l[t_length] = l[t_length + 1] = 0 / 0;
          t_length += 2;
          continue;
        }
        l[t_length] = e[t + i];
        l[t_length + 1] = e[t + i + 1];
        t_length += 2;
      }
    }
    this.#as(l, t_length);
    return this.newFreeDrawOutline(
      l,
      o,
      this.#sV,
      this.#s1,
      this.#sq,
      this.#sX,
    );
  }
  #ae(t) {
    let e = this.#sY;
    let [i, s, a, r] = this.#sV;
    let [n, o, l, h] = this.#s8();
    let d = new Float64Array(36);
    d.set(
      [
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (e[2] - i) / a,
        (e[3] - s) / r,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (e[4] - i) / a,
        (e[5] - s) / r,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        n,
        o,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        l,
        h,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (e[16] - i) / a,
        (e[17] - s) / r,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (e[14] - i) / a,
        (e[15] - s) / r,
      ],
      0,
    );
    return this.newFreeDrawOutline(
      d,
      t,
      this.#sV,
      this.#s1,
      this.#sq,
      this.#sX,
    );
  }
  #as(t, e) {
    let i = this.#sW;
    t.set([0 / 0, 0 / 0, 0 / 0, 0 / 0, i[4], i[5]], e);
    return (e += 6);
  }
  #ai(t, e) {
    let i = this.#sY.subarray(4, 6);
    let s = this.#sY.subarray(16, 18);
    let [a, r, n, o] = this.#sV;
    let [l, h, d, c] = this.#s8();
    t.set(
      [
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (i[0] - a) / n,
        (i[1] - r) / o,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        l,
        h,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        d,
        c,
        0 / 0,
        0 / 0,
        0 / 0,
        0 / 0,
        (s[0] - a) / n,
        (s[1] - r) / o,
      ],
      e,
    );
    return (e += 24);
  }
}
class iM extends iS {
  #sV;
  #aa = null;
  #sq;
  #sX;
  #s3;
  #s1;
  #ar;
  constructor(t, e, i, s, a, r) {
    super();
    this.#ar = t;
    this.#s3 = e;
    this.#sV = i;
    this.#s1 = s;
    this.#sq = a;
    this.#sX = r;
    this.#an(r);
    let { x, y, width, height } = this.#aa;
    for (let e = 0, i = t.length; e < i; e += 2) {
      t[e] = (t[e] - x) / width;
      t[e + 1] = (t[e + 1] - y) / height;
    }
    for (let t = 0, i = e.length; t < i; t += 2) {
      e[t] = (e[t] - x) / width;
      e[t + 1] = (e[t + 1] - y) / height;
    }
  }
  toSVGPath() {
    let t = [`M${this.#ar[4]} ${this.#ar[5]}`];
    for (let e = 6, i = this.#ar.length; e < i; e += 6) {
      if (isNaN(this.#ar[e])) {
        t.push(`L${this.#ar[e + 4]} ${this.#ar[e + 5]}`);
        continue;
      }
      t.push(
        `C${this.#ar[e]} ${this.#ar[e + 1]} ${this.#ar[e + 2]} ${this.#ar[e + 3]} ${this.#ar[e + 4]} ${this.#ar[e + 5]}`,
      );
    }
    t.push("Z");
    return t.join(" ");
  }
  serialize([t, e, i, s], a) {
    let r;
    let n;
    let o = i - t;
    let l = s - e;
    switch (a) {
      case 0:
        r = this.#ao(this.#ar, t, s, o, -l);
        n = this.#ao(this.#s3, t, s, o, -l);
        break;
      case 90:
        r = this.#al(this.#ar, t, e, o, l);
        n = this.#al(this.#s3, t, e, o, l);
        break;
      case 180:
        r = this.#ao(this.#ar, i, e, -o, l);
        n = this.#ao(this.#s3, i, e, -o, l);
        break;
      case 270:
        r = this.#al(this.#ar, i, s, -o, -l);
        n = this.#al(this.#s3, i, s, -o, -l);
    }
    return {
      outline: Array.from(r),
      points: [Array.from(n)],
    };
  }
  #ao(t, e, i, s, a) {
    let r = new Float64Array(t.length);
    for (let n = 0, o = t.length; n < o; n += 2) {
      r[n] = e + t[n] * s;
      r[n + 1] = i + t[n + 1] * a;
    }
    return r;
  }
  #al(t, e, i, s, a) {
    let r = new Float64Array(t.length);
    for (let n = 0, o = t.length; n < o; n += 2) {
      r[n] = e + t[n + 1] * s;
      r[n + 1] = i + t[n] * a;
    }
    return r;
  }
  #an(t) {
    let e = this.#ar;
    let i = e[4];
    let s = e[5];
    let a = i;
    let r = s;
    let n = i;
    let o = s;
    let l = i;
    let h = s;
    let d = t ? Math.max : Math.min;
    for (let t = 6, c = e.length; t < c; t += 6) {
      if (isNaN(e[t])) {
        a = Math.min(a, e[t + 4]);
        r = Math.min(r, e[t + 5]);
        n = Math.max(n, e[t + 4]);
        o = Math.max(o, e[t + 5]);
        if (h < e[t + 5]) {
          l = e[t + 4];
          h = e[t + 5];
        } else if (h === e[t + 5]) {
          l = d(l, e[t + 4]);
        }
      } else {
        let c = B.bezierBoundingBox(i, s, ...e.slice(t, t + 6));
        a = Math.min(a, c[0]);
        r = Math.min(r, c[1]);
        n = Math.max(n, c[2]);
        o = Math.max(o, c[3]);
        if (h < c[3]) {
          l = c[2];
          h = c[3];
        } else if (h === c[3]) {
          l = d(l, c[2]);
        }
      }
      i = e[t + 4];
      s = e[t + 5];
    }
    let x_1 = a - this.#sq;
    let y_1 = r - this.#sq;
    let width = n - a + 2 * this.#sq;
    let g = o - r + 2 * this.#sq;
    this.#aa = {
      x: x_1,
      y: y_1,
      width,
      height: g,
      lastPoint: [l, h],
    };
  }
  get box() {
    return this.#aa;
  }
  newOutliner(t, e, i, s, a, r = 0) {
    return new iT(t, e, i, s, a, r);
  }
  getNewOutline(t, e) {
    let { x, y, width, height } = this.#aa;
    let [n, o, l, h] = this.#sV;
    let d = width * l;
    let c = height * h;
    let u = x * l + n;
    let p = y * h + o;
    let g = this.newOutliner(
      {
        x: this.#s3[0] * d + u,
        y: this.#s3[1] * c + p,
      },
      this.#sV,
      this.#s1,
      t,
      this.#sX,
      e ?? this.#sq,
    );
    for (let t = 2; t < this.#s3.length; t += 2) {
      g.add({
        x: this.#s3[t] * d + u,
        y: this.#s3[t + 1] * c + p,
      });
    }
    return g.getOutlines();
  }
  get mustRemoveSelfIntersections() {
    return true;
  }
}
class ik {
  #sV;
  #ah = [];
  #ad = [];
  constructor(t, e = 0, i = 0, s = true) {
    let a = Infinity;
    let r = -Infinity;
    let n = Infinity;
    let o = -Infinity;
    for (let { x, y, width, height } of t) {
      let t = 0.0001 * Math.floor((x - e) / 0.0001);
      let d = 0.0001 * Math.ceil((x + width + e) / 0.0001);
      let c = 0.0001 * Math.floor((y - e) / 0.0001);
      let u = 0.0001 * Math.ceil((y + height + e) / 0.0001);
      let p = [t, c, u, true];
      let g = [d, c, u, false];
      this.#ah.push(p, g);
      a = Math.min(a, t);
      r = Math.max(r, d);
      n = Math.min(n, c);
      o = Math.max(o, u);
    }
    let l = r - a + 2 * i;
    let h = o - n + 2 * i;
    let d = a - i;
    let c = n - i;
    let u = this.#ah.at(s ? -1 : -2);
    let lastPoint = [u[0], u[2]];
    for (let t of this.#ah) {
      let [e, i, s] = t;
      t[0] = (e - d) / l;
      t[1] = (i - c) / h;
      t[2] = (s - c) / h;
    }
    this.#sV = {
      x: d,
      y: c,
      width: l,
      height: h,
      lastPoint,
    };
  }
  getOutlines() {
    this.#ah.sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]);
    let t = [];
    for (let e of this.#ah) {
      if (e[3]) {
        t.push(...this.#ac(e));
        this.#au(e);
      } else {
        this.#ap(e);
        t.push(...this.#ac(e));
      }
    }
    return this.#ag(t);
  }
  #ag(t) {
    let e;
    let i = [];
    let s = new Set();
    for (let e of t) {
      let [t, s, a] = e;
      i.push([t, s, e], [t, a, e]);
    }
    i.sort((t, e) => t[1] - e[1] || t[0] - e[0]);
    for (let t = 0, e = i.length; t < e; t += 2) {
      let e = i[t][2];
      let a = i[t + 1][2];
      e.push(a);
      a.push(e);
      s.add(e);
      s.add(a);
    }
    let a = [];
    while (s.size > 0) {
      let t = s.values().next().value;
      let [i, r, n, o, l] = t;
      s.delete(t);
      let h = i;
      let d = r;
      e = [i, n];
      a.push(e);
      while (true) {
        let t;
        if (s.has(o)) {
          t = o;
        } else if (s.has(l)) {
          t = l;
        } else {
          break;
        }
        s.delete(t);
        [i, r, n, o, l] = t;
        if (h !== i) {
          e.push(h, d, i, d === r ? r : n);
          h = i;
        }
        d = d === r ? n : r;
      }
      e.push(h, d);
    }
    return new iI(a, this.#sV);
  }
  #am(t) {
    let e = this.#ad;
    let i = 0;
    let s = e.length - 1;
    while (i <= s) {
      let a = (i + s) >> 1;
      let r = e[a][0];
      if (r === t) {
        return a;
      }
      if (r < t) {
        i = a + 1;
      } else {
        s = a - 1;
      }
    }
    return s + 1;
  }
  #au([, t, e]) {
    let i = this.#am(t);
    this.#ad.splice(i, 0, [t, e]);
  }
  #ap([, t, e]) {
    let i = this.#am(t);
    for (let s = i; s < this.#ad.length; s++) {
      let [i, a] = this.#ad[s];
      if (i !== t) {
        break;
      }
      if (i === t && a === e) {
        return void this.#ad.splice(s, 1);
      }
    }
    for (let s = i - 1; s >= 0; s--) {
      let [i, a] = this.#ad[s];
      if (i !== t) {
        break;
      }
      if (i === t && a === e) {
        return void this.#ad.splice(s, 1);
      }
    }
  }
  #ac(t) {
    let [e, i, s] = t;
    let a = [[e, i, s]];
    let r = this.#am(s);
    for (let t = 0; t < r; t++) {
      let [i, s] = this.#ad[t];
      for (let t = 0, r = a.length; t < r; t++) {
        let [, n, o] = a[t];
        if (!(s <= n) && !(o <= i)) {
          if (n >= i) {
            if (o > s) {
              a[t][1] = s;
            } else {
              if (r === 1) {
                return [];
              }
              a.splice(t, 1);
              t--;
              r--;
            }
            continue;
          }
          a[t][2] = i;
          if (o > s) {
            a.push([e, s, o]);
          }
        }
      }
    }
    return a;
  }
}
class iI extends iS {
  #sV;
  #af;
  constructor(t, e) {
    super();
    this.#af = t;
    this.#sV = e;
  }
  toSVGPath() {
    let t = [];
    for (let e of this.#af) {
      let [i, s] = e;
      t.push(`M${i} ${s}`);
      for (let a = 2; a < e.length; a += 2) {
        let r = e[a];
        let n = e[a + 1];
        if (r === i) {
          t.push(`V${n}`);
          s = n;
        } else if (n === s) {
          t.push(`H${r}`);
          i = r;
        }
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, e, i, s], a) {
    let r = [];
    let n = i - t;
    let o = s - e;
    for (let e of this.#af) {
      let i = Array(e.length);
      for (let a = 0; a < e.length; a += 2) {
        i[a] = t + e[a] * n;
        i[a + 1] = s - e[a + 1] * o;
      }
      r.push(i);
    }
    return r;
  }
  get box() {
    return this.#sV;
  }
  get classNamesForDrawing() {
    return ["highlight"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class iP extends iT {
  newFreeDrawOutline(t, e, i, s, a, r) {
    return new iR(t, e, i, s, a, r);
  }
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
}
class iR extends iM {
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline", "free"];
  }
  newOutliner(t, e, i, s, a, r = 0) {
    return new iP(t, e, i, s, a, r);
  }
}
class iD {
  #ab = null;
  #av = null;
  #aA;
  #ay = null;
  #a_ = false;
  #ax = false;
  #r = null;
  #aw;
  #aC = null;
  #m = null;
  #aE;
  static #aS = null;
  static get _keyboardManager() {
    return C(
      this,
      "_keyboardManager",
      new tm([
        [["Escape", "mac+Escape"], iD.prototype._hideDropdownFromKeyboard],
        [[" ", "mac+ "], iD.prototype._colorSelectFromKeyboard],
        [
          ["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"],
          iD.prototype._moveToNext,
        ],
        [
          ["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"],
          iD.prototype._moveToPrevious,
        ],
        [["Home", "mac+Home"], iD.prototype._moveToBeginning],
        [["End", "mac+End"], iD.prototype._moveToEnd],
      ]),
    );
  }
  constructor({ editor = null, uiManager = null }) {
    if (editor) {
      this.#ax = false;
      this.#aE = u.HIGHLIGHT_COLOR;
      this.#r = editor;
    } else {
      this.#ax = true;
      this.#aE = u.HIGHLIGHT_DEFAULT_COLOR;
    }
    this.#m = editor?._uiManager || uiManager;
    this.#aw = this.#m._eventBus;
    this.#aA =
      editor?.color ||
      this.#m?.highlightColors.values().next().value ||
      "#FFFF98";
    iD.#aS ||= Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow",
    });
  }
  renderButton() {
    let t = (this.#ab = document.createElement("button"));
    t.className = "colorPicker";
    t.tabIndex = "0";
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    t.setAttribute("aria-haspopup", true);
    let _signal = this.#m._signal;
    t.addEventListener("click", this.#aT.bind(this), {
      signal: _signal,
    });
    t.addEventListener("keydown", this.#i4.bind(this), {
      signal: _signal,
    });
    let i = (this.#av = document.createElement("span"));
    i.className = "swatch";
    i.setAttribute("aria-hidden", true);
    i.style.backgroundColor = this.#aA;
    t.append(i);
    return t;
  }
  renderMainDropdown() {
    let t = (this.#ay = this.#aM());
    t.setAttribute("aria-orientation", "horizontal");
    t.setAttribute("aria-labelledby", "highlightColorPickerLabel");
    return t;
  }
  #aM() {
    let t = document.createElement("div");
    let _signal = this.#m._signal;
    for (let [i, s] of (t.addEventListener("contextmenu", tt, {
      signal: _signal,
    }),
    (t.className = "dropdown"),
    (t.role = "listbox"),
    t.setAttribute("aria-multiselectable", false),
    t.setAttribute("aria-orientation", "vertical"),
    t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"),
    this.#m.highlightColors)) {
      let a = document.createElement("button");
      a.tabIndex = "0";
      a.role = "option";
      a.setAttribute("data-color", s);
      a.title = i;
      a.setAttribute("data-l10n-id", iD.#aS[i]);
      let r = document.createElement("span");
      a.append(r);
      r.className = "swatch";
      r.style.backgroundColor = s;
      a.setAttribute("aria-selected", s === this.#aA);
      a.addEventListener("click", this.#ak.bind(this, s), {
        signal: _signal,
      });
      t.append(a);
    }
    t.addEventListener("keydown", this.#i4.bind(this), {
      signal: _signal,
    });
    return t;
  }
  #ak(t, e) {
    e.stopPropagation();
    this.#aw.dispatch("switchannotationeditorparams", {
      source: this,
      type: this.#aE,
      value: t,
    });
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === this.#ab) {
      return void this.#aT(t);
    }
    let e = t.target.getAttribute("data-color");
    if (e) {
      this.#ak(e, t);
    }
  }
  _moveToNext(t) {
    if (this.#aI) {
      if (t.target === this.#ab) {
        this.#ay.firstChild?.focus();
      } else {
        t.target.nextSibling?.focus();
      }
    } else {
      this.#aT(t);
    }
  }
  _moveToPrevious(t) {
    if (t.target === this.#ay?.firstChild || t.target === this.#ab) {
      if (this.#aI) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!this.#aI) {
      this.#aT(t);
    }
    t.target.previousSibling?.focus();
  }
  _moveToBeginning(t) {
    if (this.#aI) {
      this.#ay.firstChild?.focus();
    } else {
      this.#aT(t);
    }
  }
  _moveToEnd(t) {
    if (this.#aI) {
      this.#ay.lastChild?.focus();
    } else {
      this.#aT(t);
    }
  }
  #i4(t) {
    iD._keyboardManager.exec(this, t);
  }
  #aT(t) {
    if (this.#aI) {
      return void this.hideDropdown();
    }
    this.#a_ = t.detail === 0;
    if (!this.#aC) {
      this.#aC = new AbortController();
      window.addEventListener("pointerdown", this.#h.bind(this), {
        signal: this.#m.combinedSignal(this.#aC),
      });
    }
    if (this.#ay) {
      return void this.#ay.classList.remove("hidden");
    }
    let e = (this.#ay = this.#aM());
    this.#ab.append(e);
  }
  #h(t) {
    if (!this.#ay?.contains(t.target)) {
      this.hideDropdown();
    }
  }
  hideDropdown() {
    this.#ay?.classList.add("hidden");
    this.#aC?.abort();
    this.#aC = null;
  }
  get #aI() {
    return this.#ay && !this.#ay.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (!this.#ax) {
      if (!this.#aI) {
        return void this.#r?.unselect();
      }
      this.hideDropdown();
      this.#ab.focus({
        preventScroll: true,
        focusVisible: this.#a_,
      });
    }
  }
  updateColor(t) {
    if (this.#av) {
      this.#av.style.backgroundColor = t;
    }
    if (!this.#ay) {
      return;
    }
    let e = this.#m.highlightColors.values();
    for (let i of this.#ay.children) {
      i.setAttribute("aria-selected", e.next().value === t);
    }
  }
  destroy() {
    this.#ab?.remove();
    this.#ab = null;
    this.#av = null;
    this.#ay?.remove();
    this.#ay = null;
  }
}
class iL extends tA {
  #aP = null;
  #aR = 0;
  #aD;
  #aL = null;
  #a = null;
  #aF = null;
  #aO = null;
  #aN = 0;
  #aB = null;
  #az = null;
  #A = null;
  #aH = false;
  #aj = null;
  #aU;
  #a$ = null;
  #aG = "";
  #s2;
  #aV = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = c.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    let iL_prototype = iL.prototype;
    return C(
      this,
      "_keyboardManager",
      new tm([
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          iL_prototype._moveCaret,
          {
            args: [0],
          },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          iL_prototype._moveCaret,
          {
            args: [1],
          },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          iL_prototype._moveCaret,
          {
            args: [2],
          },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          iL_prototype._moveCaret,
          {
            args: [3],
          },
        ],
      ]),
    );
  }
  constructor(t) {
    super({
      ...t,
      name: "highlightEditor",
    });
    this.color = t.color || iL._defaultColor;
    this.#s2 = t.thickness || iL._defaultThickness;
    this.#aU = t.opacity || iL._defaultOpacity;
    this.#aD = t.boxes || null;
    this.#aV = t.methodOfCreation || "";
    this.#aG = t.text || "";
    this._isDraggable = false;
    if (t.highlightId > -1) {
      this.#aH = true;
      this.#aW(t);
      this.#aq();
    } else if (this.#aD) {
      this.#aP = t.anchorNode;
      this.#aR = t.anchorOffset;
      this.#aO = t.focusNode;
      this.#aN = t.focusOffset;
      this.#aX();
      this.#aq();
      this.rotate(this.rotation);
    }
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#aH ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: this.#s2,
      methodOfCreation: this.#aV,
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
    };
  }
  static computeTelemetryFinalData(t) {
    return {
      numberOfColors: t.get("color").size,
    };
  }
  #aX() {
    let t = new ik(this.#aD, 0.001);
    this.#az = t.getOutlines();
    ({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    } = this.#az.box);
    let e = new ik(
      this.#aD,
      0.0025,
      0.001,
      this._uiManager.direction === "ltr",
    );
    this.#aF = e.getOutlines();
    let { lastPoint } = this.#aF.box;
    this.#aj = [
      (lastPoint[0] - this.x) / this.width,
      (lastPoint[1] - this.y) / this.height,
    ];
  }
  #aW({ highlightOutlines, highlightId, clipPathId }) {
    this.#az = highlightOutlines;
    this.#aF = highlightOutlines.getNewOutline(this.#s2 / 2 + 1.5, 0.0025);
    if (highlightId >= 0) {
      this.#A = highlightId;
      this.#aL = clipPathId;
      this.parent.drawLayer.finalizeLine(highlightId, highlightOutlines);
      this.#a$ = this.parent.drawLayer.drawOutline(this.#aF);
    } else if (this.parent) {
      let e = this.parent.viewport.rotation;
      this.parent.drawLayer.updateLine(this.#A, highlightOutlines);
      this.parent.drawLayer.updateBox(
        this.#A,
        iL.#aK(this.#az.box, (e - this.rotation + 360) % 360),
      );
      this.parent.drawLayer.updateLine(this.#a$, this.#aF);
      this.parent.drawLayer.updateBox(this.#a$, iL.#aK(this.#aF.box, e));
    }
    let { x, y, width, height } = highlightOutlines.box;
    switch (this.rotation) {
      case 0:
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        break;
      case 90: {
        let [t, e] = this.parentDimensions;
        this.x = y;
        this.y = 1 - x;
        this.width = (width * e) / t;
        this.height = (height * t) / e;
        break;
      }
      case 180:
        this.x = 1 - x;
        this.y = 1 - y;
        this.width = width;
        this.height = height;
        break;
      case 270: {
        let [t, e] = this.parentDimensions;
        this.x = 1 - y;
        this.y = x;
        this.width = (width * e) / t;
        this.height = (height * t) / e;
      }
    }
    let { lastPoint } = this.#aF.box;
    this.#aj = [(lastPoint[0] - x) / width, (lastPoint[1] - y) / height];
  }
  static initialize(t, e) {
    tA.initialize(t, e);
    iL._defaultColor ||= e.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case u.HIGHLIGHT_DEFAULT_COLOR:
        iL._defaultColor = e;
        break;
      case u.HIGHLIGHT_THICKNESS:
        iL._defaultThickness = e;
    }
  }
  translateInPage(t, e) {}
  get toolbarPosition() {
    return this.#aj;
  }
  updateParams(t, e) {
    switch (t) {
      case u.HIGHLIGHT_COLOR:
        this.#sN(e);
        break;
      case u.HIGHLIGHT_THICKNESS:
        this.#aY(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [u.HIGHLIGHT_DEFAULT_COLOR, iL._defaultColor],
      [u.HIGHLIGHT_THICKNESS, iL._defaultThickness],
    ];
  }
  get propertiesToUpdate() {
    return [
      [u.HIGHLIGHT_COLOR, this.color || iL._defaultColor],
      [u.HIGHLIGHT_THICKNESS, this.#s2 || iL._defaultThickness],
      [u.HIGHLIGHT_FREE, this.#aH],
    ];
  }
  #sN(t) {
    let e = (t, e) => {
      this.color = t;
      this.parent?.drawLayer.changeColor(this.#A, t);
      this.#a?.updateColor(t);
      this.#aU = e;
      this.parent?.drawLayer.changeOpacity(this.#A, e);
    };
    let color = this.color;
    let s = this.#aU;
    this.addCommands({
      cmd: e.bind(this, t, iL._defaultOpacity),
      undo: e.bind(this, color, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true,
    });
    this._reportTelemetry(
      {
        action: "color_changed",
        color: this._uiManager.highlightColorNames.get(t),
      },
      true,
    );
  }
  #aY(thickness) {
    let e = this.#s2;
    let i = (t) => {
      this.#s2 = t;
      this.#aQ(t);
    };
    this.addCommands({
      cmd: i.bind(this, thickness),
      undo: i.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true,
    });
    this._reportTelemetry(
      {
        action: "thickness_changed",
        thickness,
      },
      true,
    );
  }
  async addEditToolbar() {
    let t = await super.addEditToolbar();
    if (t) {
      if (this._uiManager.highlightColors) {
        this.#a = new iD({
          editor: this,
        });
        t.addColorPicker(this.#a);
      }
      return t;
    }
    return null;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#aJ());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t, e) {
    return super.getRect(t, e, this.#aJ());
  }
  onceAdded() {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    this.div.focus();
  }
  remove() {
    this.#aZ();
    this._reportTelemetry({
      action: "deleted",
    });
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (this.div !== null) {
        this.#aq();
        if (!this.isAttachedToDOM) {
          this.parent.add(this);
        }
      }
    }
  }
  setParent(t) {
    let e = false;
    if (this.parent && !t) {
      this.#aZ();
    } else if (t) {
      this.#aq(t);
      e = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(t);
    this.show(this._isVisible);
    if (e) {
      this.select();
    }
  }
  #aQ(t) {
    if (!this.#aH) {
      return;
    }
    this.#aW({
      highlightOutlines: this.#az.getNewOutline(t / 2),
    });
    this.fixAndSetPosition();
    let [e, i] = this.parentDimensions;
    this.setDims(this.width * e, this.height * i);
  }
  #aZ() {
    if (this.#A !== null && this.parent) {
      this.parent.drawLayer.remove(this.#A);
      this.#A = null;
      this.parent.drawLayer.remove(this.#a$);
      this.#a$ = null;
    }
  }
  #aq(t = this.parent) {
    if (this.#A === null) {
      ({ id: this.#A, clipPathId: this.#aL } = t.drawLayer.draw(
        this.#az,
        this.color,
        this.#aU,
      ));
      this.#a$ = t.drawLayer.drawOutline(this.#aF);
      if (this.#aB) {
        this.#aB.style.clipPath = this.#aL;
      }
    }
  }
  static #aK({ x, y, width, height }, a) {
    switch (a) {
      case 90:
        return {
          x: 1 - y - height,
          y: x,
          width: height,
          height: width,
        };
      case 180:
        return {
          x: 1 - x - width,
          y: 1 - y - height,
          width,
          height,
        };
      case 270:
        return {
          x: y,
          y: 1 - x - width,
          width: height,
          height: width,
        };
    }
    return {
      x,
      y,
      width,
      height,
    };
  }
  rotate(t) {
    let e;
    let { drawLayer } = this.parent;
    if (this.#aH) {
      t = (t - this.rotation + 360) % 360;
      e = iL.#aK(this.#az.box, t);
    } else {
      e = iL.#aK(this, t);
    }
    drawLayer.rotate(this.#A, t);
    drawLayer.rotate(this.#a$, t);
    drawLayer.updateBox(this.#A, e);
    drawLayer.updateBox(this.#a$, iL.#aK(this.#aF.box, t));
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let t = super.render();
    if (this.#aG) {
      t.setAttribute("aria-label", this.#aG);
      t.setAttribute("role", "mark");
    }
    if (this.#aH) {
      t.classList.add("free");
    } else {
      this.div.addEventListener("keydown", this.#a0.bind(this), {
        signal: this._uiManager._signal,
      });
    }
    let e = (this.#aB = document.createElement("div"));
    t.append(e);
    e.setAttribute("aria-hidden", "true");
    e.className = "internal";
    e.style.clipPath = this.#aL;
    let [i, s] = this.parentDimensions;
    this.setDims(this.width * i, this.height * s);
    tc(this, this.#aB, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return t;
  }
  pointerover() {
    if (!this.isSelected) {
      this.parent.drawLayer.addClass(this.#a$, "hovered");
    }
  }
  pointerleave() {
    if (!this.isSelected) {
      this.parent.drawLayer.removeClass(this.#a$, "hovered");
    }
  }
  #a0(t) {
    iL._keyboardManager.exec(this, t);
  }
  _moveCaret(t) {
    this.parent.unselect(this);
    switch (t) {
      case 0:
      case 2:
        this.#a1(true);
        break;
      case 1:
      case 3:
        this.#a1(false);
    }
  }
  #a1(t) {
    if (!this.#aP) {
      return;
    }
    let e = window.getSelection();
    if (t) {
      e.setPosition(this.#aP, this.#aR);
    } else {
      e.setPosition(this.#aO, this.#aN);
    }
  }
  select() {
    super.select();
    if (this.#a$) {
      this.parent?.drawLayer.removeClass(this.#a$, "hovered");
      this.parent?.drawLayer.addClass(this.#a$, "selected");
    }
  }
  unselect() {
    super.unselect();
    if (this.#a$) {
      this.parent?.drawLayer.removeClass(this.#a$, "selected");
      if (!this.#aH) {
        this.#a1(false);
      }
    }
  }
  get _mustFixPosition() {
    return !this.#aH;
  }
  show(t = this._isVisible) {
    super.show(t);
    if (this.parent) {
      this.parent.drawLayer.show(this.#A, t);
      this.parent.drawLayer.show(this.#a$, t);
    }
  }
  #aJ() {
    if (this.#aH) {
      return this.rotation;
    }
    return 0;
  }
  #a2() {
    if (this.#aH) {
      return null;
    }
    let [t, e] = this.pageDimensions;
    let [i, s] = this.pageTranslation;
    let a = this.#aD;
    let r = new Float32Array(8 * a.length);
    let n = 0;
    for (let { x, y, width, height } of a) {
      let a = x * t + i;
      let c = (1 - y - height) * e + s;
      r[n] = r[n + 4] = a;
      r[n + 1] = r[n + 3] = c;
      r[n + 2] = r[n + 6] = a + width * t;
      r[n + 5] = r[n + 7] = c + height * e;
      n += 8;
    }
    return r;
  }
  #a3(t) {
    return this.#az.serialize(t, this.#aJ());
  }
  static startHighlighting(t, e, { target, x, y }) {
    let { x: x_1, y: y_1, width, height } = target.getBoundingClientRect();
    let h = new AbortController();
    let d = t.combinedSignal(h);
    let c = (e) => {
      h.abort();
      this.#a5(t, e);
    };
    window.addEventListener("blur", c, {
      signal: d,
    });
    window.addEventListener("pointerup", c, {
      signal: d,
    });
    window.addEventListener(
      "pointerdown",
      (t) => {
        t.preventDefault();
        t.stopPropagation();
      },
      {
        capture: true,
        passive: false,
        signal: d,
      },
    );
    window.addEventListener("contextmenu", tt, {
      signal: d,
    });
    target.addEventListener("pointermove", this.#a6.bind(this, t), {
      signal: d,
    });
    this._freeHighlight = new iP(
      {
        x,
        y,
      },
      [x_1, y_1, width, height],
      t.scale,
      this._defaultThickness / 2,
      e,
      0.001,
    );
    ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } =
      t.drawLayer.draw(
        this._freeHighlight,
        this._defaultColor,
        this._defaultOpacity,
        true,
      ));
  }
  static #a6(t, e) {
    if (this._freeHighlight.add(e)) {
      t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
    }
  }
  static #a5(t, e) {
    if (this._freeHighlight.isEmpty()) {
      t.drawLayer.remove(this._freeHighlightId);
    } else {
      t.createAndAddNewEditor(e, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar",
      });
    }
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof ib) {
      let {
        data: {
          quadPoints: quadPoints_1,
          rect,
          rotation,
          id,
          color: color_1,
          opacity: opacity_1,
          popupRef,
        },
        parent: {
          page: { pageNumber },
        },
      } = t;
      s = t = {
        annotationType: c.HIGHLIGHT,
        color: Array.from(color_1),
        opacity: opacity_1,
        quadPoints: quadPoints_1,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef,
      };
    } else if (t instanceof im) {
      let {
        data: {
          inkLists: inkLists_1,
          rect,
          rotation,
          id,
          color: color_1,
          borderStyle: { rawWidth },
          popupRef,
        },
        parent: {
          page: { pageNumber },
        },
      } = t;
      s = t = {
        annotationType: c.HIGHLIGHT,
        color: Array.from(color_1),
        thickness: rawWidth,
        inkLists: inkLists_1,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef,
      };
    }
    let { color, quadPoints, inkLists, opacity } = t;
    let l = await super.deserialize(t, e, i);
    l.color = B.makeHexColor(...color);
    l.#aU = opacity || 1;
    if (inkLists) {
      l.#s2 = t.thickness;
    }
    l.annotationElementId = t.id || null;
    l._initialData = s;
    let [h, d] = l.pageDimensions;
    let [u, p] = l.pageTranslation;
    if (quadPoints) {
      let t = (l.#aD = []);
      for (let e = 0; e < quadPoints.length; e += 8) {
        t.push({
          x: (quadPoints[e] - u) / h,
          y: 1 - (quadPoints[e + 1] - p) / d,
          width: (quadPoints[e + 2] - quadPoints[e]) / h,
          height: (quadPoints[e + 1] - quadPoints[e + 5]) / d,
        });
      }
      l.#aX();
      l.#aq();
      l.rotate(l.rotation);
    } else if (inkLists) {
      l.#aH = true;
      let t = inkLists[0];
      let i = {
        x: t[0] - u,
        y: d - (t[1] - p),
      };
      let s = new iP(i, [0, 0, h, d], 1, l.#s2 / 2, true, 0.001);
      for (let e = 0, a = t.length; e < a; e += 2) {
        i.x = t[e] - u;
        i.y = d - (t[e + 1] - p);
        s.add(i);
      }
      let { id: highlightId, clipPathId } = e.drawLayer.draw(
        s,
        l.color,
        l._defaultOpacity,
        true,
      );
      l.#aW({
        highlightOutlines: s.getOutlines(),
        highlightId,
        clipPathId,
      });
      l.#aq();
    }
    return l;
  }
  serialize(t = false) {
    if (this.isEmpty() || t) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    let e = this.getRect(0, 0);
    let i = tA._colorManager.convert(this.color);
    let s = {
      annotationType: c.HIGHLIGHT,
      color: i,
      opacity: this.#aU,
      thickness: this.#s2,
      quadPoints: this.#a2(),
      outlines: this.#a3(e),
      pageIndex: this.pageIndex,
      rect: e,
      rotation: this.#aJ(),
      structTreeParentId: this._structTreeParentId,
    };
    if (this.annotationElementId && !this.#sG(s)) {
      return null;
    }
    s.id = this.annotationElementId;
    return s;
  }
  #sG(t) {
    let { color } = this._initialData;
    return t.color.some((t, i) => t !== color[i]);
  }
  renderAnnotationElement(t) {
    t.updateEdited({
      rect: this.getRect(0, 0),
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}
class iF extends tA {
  #a4 = 0;
  #a8 = 0;
  #a7 = null;
  #a9 = new Path2D();
  #rt = false;
  #re = null;
  #ri = false;
  #rs = false;
  #ra = null;
  #rr = null;
  #rn = 0;
  #ro = 0;
  #rl = null;
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 1;
  static _type = "ink";
  static _editorType = c.INK;
  constructor(t) {
    super({
      ...t,
      name: "inkEditor",
    });
    this.color = t.color || null;
    this.thickness = t.thickness || null;
    this.opacity = t.opacity || null;
    this.paths = [];
    this.bezierPath2D = [];
    this.allRawPaths = [];
    this.currentPath = [];
    this.scaleFactor = 1;
    this.translationX = this.translationY = 0;
    this.x = 0;
    this.y = 0;
    this._willKeepAspectRatio = true;
  }
  static initialize(t, e) {
    tA.initialize(t, e);
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case u.INK_THICKNESS:
        iF._defaultThickness = e;
        break;
      case u.INK_COLOR:
        iF._defaultColor = e;
        break;
      case u.INK_OPACITY:
        iF._defaultOpacity = e / 100;
    }
  }
  updateParams(t, e) {
    switch (t) {
      case u.INK_THICKNESS:
        this.#aY(e);
        break;
      case u.INK_COLOR:
        this.#sN(e);
        break;
      case u.INK_OPACITY:
        this.#rh(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [u.INK_THICKNESS, iF._defaultThickness],
      [u.INK_COLOR, iF._defaultColor || tA._defaultLineColor],
      [u.INK_OPACITY, Math.round(100 * iF._defaultOpacity)],
    ];
  }
  get propertiesToUpdate() {
    return [
      [u.INK_THICKNESS, this.thickness || iF._defaultThickness],
      [u.INK_COLOR, this.color || iF._defaultColor || tA._defaultLineColor],
      [u.INK_OPACITY, Math.round(100 * (this.opacity ?? iF._defaultOpacity))],
    ];
  }
  #aY(t) {
    let e = (t) => {
      this.thickness = t;
      this.#rd();
    };
    let thickness = this.thickness;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, thickness),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true,
    });
  }
  #sN(t) {
    let e = (t) => {
      this.color = t;
      this.#rc();
    };
    let color = this.color;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, color),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.INK_COLOR,
      overwriteIfSameType: true,
      keepUndo: true,
    });
  }
  #rh(t) {
    let e = (t) => {
      this.opacity = t;
      this.#rc();
    };
    t /= 100;
    let opacity = this.opacity;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, opacity),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: u.INK_OPACITY,
      overwriteIfSameType: true,
      keepUndo: true,
    });
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (this.div !== null) {
        if (!this.canvas) {
          this.#ru();
          this.#rp();
        }
        if (!this.isAttachedToDOM) {
          this.parent.add(this);
          this.#rg();
        }
        this.#rd();
      }
    }
  }
  remove() {
    if (this.canvas !== null) {
      if (!this.isEmpty()) {
        this.commit();
      }
      this.canvas.width = this.canvas.height = 0;
      this.canvas.remove();
      this.canvas = null;
      if (this.#a7) {
        clearTimeout(this.#a7);
        this.#a7 = null;
      }
      this.#ra?.disconnect();
      this.#ra = null;
      super.remove();
    }
  }
  setParent(t) {
    if (!this.parent && t) {
      this._uiManager.removeShouldRescale(this);
    } else if (this.parent && t === null) {
      this._uiManager.addShouldRescale(this);
    }
    super.setParent(t);
  }
  onScaleChanging() {
    let [t, e] = this.parentDimensions;
    let i = this.width * t;
    let s = this.height * e;
    this.setDimensions(i, s);
  }
  enableEditMode() {
    if (!(this.#rt || this.canvas === null)) {
      super.enableEditMode();
      this._isDraggable = false;
      this.#rm();
    }
  }
  disableEditMode() {
    if (this.isInEditMode() && this.canvas !== null) {
      super.disableEditMode();
      this._isDraggable = !this.isEmpty();
      this.div.classList.remove("editing");
      this.#rf();
    }
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return (
      this.paths.length === 0 ||
      (this.paths.length === 1 && this.paths[0].length === 0)
    );
  }
  #rb() {
    let {
      parentRotation,
      parentDimensions: [e, i],
    } = this;
    switch (parentRotation) {
      case 90:
        return [0, i, i, e];
      case 180:
        return [e, i, e, i];
      case 270:
        return [e, 0, i, e];
      default:
        return [0, 0, e, i];
    }
  }
  #rv() {
    let { ctx, color, opacity, thickness, parentScale, scaleFactor } = this;
    ctx.lineWidth = (thickness * parentScale) / scaleFactor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.miterLimit = 10;
    ctx.strokeStyle = `${color}${Math.round(
      Math.min(255, Math.max(1, 255 * opacity)),
    )
      .toString(16)
      .padStart(2, "0")}`;
  }
  #rA(t, e) {
    this.canvas.addEventListener("contextmenu", tt, {
      signal: this._uiManager._signal,
    });
    this.#rf();
    this.#re = new AbortController();
    let i = this._uiManager.combinedSignal(this.#re);
    this.canvas.addEventListener(
      "pointerleave",
      this.canvasPointerleave.bind(this),
      {
        signal: i,
      },
    );
    this.canvas.addEventListener(
      "pointermove",
      this.canvasPointermove.bind(this),
      {
        signal: i,
      },
    );
    this.canvas.addEventListener("pointerup", this.canvasPointerup.bind(this), {
      signal: i,
    });
    this.isEditing = true;
    if (!this.#rs) {
      this.#rs = true;
      this.#rg();
      this.thickness ||= iF._defaultThickness;
      this.color ||= iF._defaultColor || tA._defaultLineColor;
      this.opacity ??= iF._defaultOpacity;
    }
    this.currentPath.push([t, e]);
    this.#ri = false;
    this.#rv();
    this.#rl = () => {
      this.#ry();
      if (this.#rl) {
        window.requestAnimationFrame(this.#rl);
      }
    };
    window.requestAnimationFrame(this.#rl);
  }
  #r_(t, e) {
    let [i, s] = this.currentPath.at(-1);
    if (this.currentPath.length > 1 && t === i && e === s) {
      return;
    }
    let currentPath = this.currentPath;
    let r = this.#a9;
    currentPath.push([t, e]);
    this.#ri = true;
    if (currentPath.length <= 2) {
      r.moveTo(...currentPath[0]);
      r.lineTo(t, e);
      return;
    }
    if (currentPath.length === 3) {
      this.#a9 = r = new Path2D();
      r.moveTo(...currentPath[0]);
    }
    this.#rx(r, ...currentPath.at(-3), ...currentPath.at(-2), t, e);
  }
  #rw() {
    if (this.currentPath.length === 0) {
      return;
    }
    let t = this.currentPath.at(-1);
    this.#a9.lineTo(...t);
  }
  #rC(t, e) {
    let i;
    this.#rl = null;
    t = Math.min(Math.max(t, 0), this.canvas.width);
    e = Math.min(Math.max(e, 0), this.canvas.height);
    this.#r_(t, e);
    this.#rw();
    if (this.currentPath.length !== 1) {
      i = this.#rE();
    } else {
      let s = [t, e];
      i = [[s, s.slice(), s.slice(), s]];
    }
    let s = this.#a9;
    let currentPath = this.currentPath;
    this.currentPath = [];
    this.#a9 = new Path2D();
    let r = () => {
      this.allRawPaths.push(currentPath);
      this.paths.push(i);
      this.bezierPath2D.push(s);
      this._uiManager.rebuild(this);
    };
    let n = () => {
      this.allRawPaths.pop();
      this.paths.pop();
      this.bezierPath2D.pop();
      if (this.paths.length === 0) {
        this.remove();
      } else {
        if (!this.canvas) {
          this.#ru();
          this.#rp();
        }
        this.#rd();
      }
    };
    this.addCommands({
      cmd: r,
      undo: n,
      mustExec: true,
    });
  }
  #ry() {
    if (!this.#ri) {
      return;
    }
    this.#ri = false;
    this.thickness;
    this.parentScale;
    let t = this.currentPath.slice(-3);
    t.map((t) => t[0]);
    t.map((t) => t[1]);
    let { ctx } = this;
    for (let t of (ctx.save(),
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
    this.bezierPath2D)) {
      ctx.stroke(t);
    }
    ctx.stroke(this.#a9);
    ctx.restore();
  }
  #rx(t, e, i, s, a, r, n) {
    let o = (e + s) / 2;
    let l = (i + a) / 2;
    let h = (s + r) / 2;
    let d = (a + n) / 2;
    t.bezierCurveTo(
      o + (2 * (s - o)) / 3,
      l + (2 * (a - l)) / 3,
      h + (2 * (s - h)) / 3,
      d + (2 * (a - d)) / 3,
      h,
      d,
    );
  }
  #rE() {
    let t;
    let currentPath = this.currentPath;
    if (currentPath.length <= 2) {
      return [
        [
          currentPath[0],
          currentPath[0],
          currentPath.at(-1),
          currentPath.at(-1),
        ],
      ];
    }
    let i = [];
    let [s, a] = currentPath[0];
    for (t = 1; t < currentPath.length - 2; t++) {
      let [r, n] = currentPath[t];
      let [o, l] = currentPath[t + 1];
      let h = (r + o) / 2;
      let d = (n + l) / 2;
      let c = [s + (2 * (r - s)) / 3, a + (2 * (n - a)) / 3];
      let u = [h + (2 * (r - h)) / 3, d + (2 * (n - d)) / 3];
      i.push([[s, a], c, u, [h, d]]);
      [s, a] = [h, d];
    }
    let [r, n] = currentPath[t];
    let [o, l] = currentPath[t + 1];
    let h = [s + (2 * (r - s)) / 3, a + (2 * (n - a)) / 3];
    i.push([[s, a], h, [o + (2 * (r - o)) / 3, l + (2 * (n - l)) / 3], [o, l]]);
    return i;
  }
  #rc() {
    if (this.isEmpty()) {
      return void this.#rS();
    }
    this.#rv();
    let { canvas, ctx } = this;
    for (let i of (ctx.setTransform(1, 0, 0, 1, 0, 0),
    ctx.clearRect(0, 0, canvas.width, canvas.height),
    this.#rS(),
    this.bezierPath2D)) {
      ctx.stroke(i);
    }
  }
  commit() {
    if (!this.#rt) {
      super.commit();
      this.isEditing = false;
      this.disableEditMode();
      this.setInForeground();
      this.#rt = true;
      this.div.classList.add("disabled");
      this.#rd(true);
      this.select();
      this.parent.addInkEditorIfNeeded(true);
      this.moveInDOM();
      this.div.focus({
        preventScroll: true,
      });
    }
  }
  focusin(t) {
    if (this._focusEventsAllowed) {
      super.focusin(t);
      this.enableEditMode();
    }
  }
  #rm() {
    if (this.#rr) {
      return;
    }
    this.#rr = new AbortController();
    let t = this._uiManager.combinedSignal(this.#rr);
    this.canvas.addEventListener(
      "pointerdown",
      this.canvasPointerdown.bind(this),
      {
        signal: t,
      },
    );
  }
  #rf() {
    this.pointerdownAC?.abort();
    this.pointerdownAC = null;
  }
  canvasPointerdown(t) {
    if (t.button === 0 && this.isInEditMode() && !this.#rt) {
      this.setInForeground();
      t.preventDefault();
      if (!this.div.contains(document.activeElement)) {
        this.div.focus({
          preventScroll: true,
        });
      }
      this.#rA(t.offsetX, t.offsetY);
    }
  }
  canvasPointermove(t) {
    t.preventDefault();
    this.#r_(t.offsetX, t.offsetY);
  }
  canvasPointerup(t) {
    t.preventDefault();
    this.#rT(t);
  }
  canvasPointerleave(t) {
    this.#rT(t);
  }
  #rT(t) {
    this.#re?.abort();
    this.#re = null;
    this.#rm();
    if (this.#a7) {
      clearTimeout(this.#a7);
    }
    this.#a7 = setTimeout(() => {
      this.#a7 = null;
      this.canvas.removeEventListener("contextmenu", tt);
    }, 10);
    this.#rC(t.offsetX, t.offsetY);
    this.addToAnnotationStorage();
    this.setInBackground();
  }
  #ru() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = 0;
    this.canvas.className = "inkEditorCanvas";
    this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas");
    this.div.append(this.canvas);
    this.ctx = this.canvas.getContext("2d");
  }
  #rp() {
    this.#ra = new ResizeObserver((t) => {
      let contentRect = t[0].contentRect;
      if (contentRect.width && contentRect.height) {
        this.setDimensions(contentRect.width, contentRect.height);
      }
    });
    this.#ra.observe(this.div);
    this._uiManager._signal.addEventListener(
      "abort",
      () => {
        this.#ra?.disconnect();
        this.#ra = null;
      },
      {
        once: true,
      },
    );
  }
  get isResizable() {
    return !this.isEmpty() && this.#rt;
  }
  render() {
    let t;
    let e;
    if (this.div) {
      return this.div;
    }
    if (this.width) {
      t = this.x;
      e = this.y;
    }
    super.render();
    this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    let [i, s, a, r] = this.#rb();
    this.setAt(i, s, 0, 0);
    this.setDims(a, r);
    this.#ru();
    if (this.width) {
      let [i, s] = this.parentDimensions;
      this.setAspectRatio(this.width * i, this.height * s);
      this.setAt(t * i, e * s, this.width * i, this.height * s);
      this.#rs = true;
      this.#rg();
      this.setDims(this.width * i, this.height * s);
      this.#rc();
      this.div.classList.add("disabled");
    } else {
      this.div.classList.add("editing");
      this.enableEditMode();
    }
    this.#rp();
    return this.div;
  }
  #rg() {
    if (!this.#rs) {
      return;
    }
    let [t, e] = this.parentDimensions;
    this.canvas.width = Math.ceil(this.width * t);
    this.canvas.height = Math.ceil(this.height * e);
    this.#rS();
  }
  setDimensions(t, e) {
    let i = Math.round(t);
    let s = Math.round(e);
    if (this.#rn === i && this.#ro === s) {
      return;
    }
    this.#rn = i;
    this.#ro = s;
    this.canvas.style.visibility = "hidden";
    let [a, r] = this.parentDimensions;
    this.width = t / a;
    this.height = e / r;
    this.fixAndSetPosition();
    if (this.#rt) {
      this.#rM(t, e);
    }
    this.#rg();
    this.#rc();
    this.canvas.style.visibility = "visible";
    this.fixDims();
  }
  #rM(t, e) {
    let i = this.#rk();
    let s = (t - i) / this.#a8;
    let a = (e - i) / this.#a4;
    this.scaleFactor = Math.min(s, a);
  }
  #rS() {
    let t = this.#rk() / 2;
    this.ctx.setTransform(
      this.scaleFactor,
      0,
      0,
      this.scaleFactor,
      this.translationX * this.scaleFactor + t,
      this.translationY * this.scaleFactor + t,
    );
  }
  static #rI(t) {
    let e = new Path2D();
    for (let i = 0, s = t.length; i < s; i++) {
      let [s, a, r, n] = t[i];
      if (i === 0) {
        e.moveTo(...s);
      }
      e.bezierCurveTo(a[0], a[1], r[0], r[1], n[0], n[1]);
    }
    return e;
  }
  static #rP(t, e, i) {
    let [s, a, r, n] = e;
    switch (i) {
      case 0:
        for (let e = 0, i = t.length; e < i; e += 2) {
          t[e] += s;
          t[e + 1] = n - t[e + 1];
        }
        break;
      case 90:
        for (let e = 0, i = t.length; e < i; e += 2) {
          let i = t[e];
          t[e] = t[e + 1] + s;
          t[e + 1] = i + a;
        }
        break;
      case 180:
        for (let e = 0, i = t.length; e < i; e += 2) {
          t[e] = r - t[e];
          t[e + 1] += a;
        }
        break;
      case 270:
        for (let e = 0, i = t.length; e < i; e += 2) {
          let i = t[e];
          t[e] = r - t[e + 1];
          t[e + 1] = n - i;
        }
        break;
      default:
        throw Error("Invalid rotation");
    }
    return t;
  }
  static #rR(t, e, i) {
    let [s, a, r, n] = e;
    switch (i) {
      case 0:
        for (let e = 0, i = t.length; e < i; e += 2) {
          t[e] -= s;
          t[e + 1] = n - t[e + 1];
        }
        break;
      case 90:
        for (let e = 0, i = t.length; e < i; e += 2) {
          let i = t[e];
          t[e] = t[e + 1] - a;
          t[e + 1] = i - s;
        }
        break;
      case 180:
        for (let e = 0, i = t.length; e < i; e += 2) {
          t[e] = r - t[e];
          t[e + 1] -= a;
        }
        break;
      case 270:
        for (let e = 0, i = t.length; e < i; e += 2) {
          let i = t[e];
          t[e] = n - t[e + 1];
          t[e + 1] = r - i;
        }
        break;
      default:
        throw Error("Invalid rotation");
    }
    return t;
  }
  #rD(t, e, i, s) {
    let a = [];
    let r = this.thickness / 2;
    let n = t * e + r;
    let o = t * i + r;
    for (let e of this.paths) {
      let i = [];
      let r = [];
      for (let s = 0, a = e.length; s < a; s++) {
        let [l, h, d, c] = e[s];
        if (l[0] === c[0] && l[1] === c[1] && a === 1) {
          let e = t * l[0] + n;
          let s = t * l[1] + o;
          i.push(e, s);
          r.push(e, s);
          break;
        }
        let u = t * l[0] + n;
        let p = t * l[1] + o;
        let g = t * h[0] + n;
        let m = t * h[1] + o;
        let f = t * d[0] + n;
        let b = t * d[1] + o;
        let v = t * c[0] + n;
        let A = t * c[1] + o;
        if (s === 0) {
          i.push(u, p);
          r.push(u, p);
        }
        i.push(g, m, f, b, v, A);
        r.push(g, m);
        if (s === a - 1) {
          r.push(v, A);
        }
      }
      a.push({
        bezier: iF.#rP(i, s, this.rotation),
        points: iF.#rP(r, s, this.rotation),
      });
    }
    return a;
  }
  #rL() {
    let t = Infinity;
    let e = -Infinity;
    let i = Infinity;
    let s = -Infinity;
    for (let a of this.paths) {
      for (let [r, n, o, l] of a) {
        let a = B.bezierBoundingBox(...r, ...n, ...o, ...l);
        t = Math.min(t, a[0]);
        i = Math.min(i, a[1]);
        e = Math.max(e, a[2]);
        s = Math.max(s, a[3]);
      }
    }
    return [t, i, e, s];
  }
  #rk() {
    if (this.#rt) {
      return Math.ceil(this.thickness * this.parentScale);
    }
    return 0;
  }
  #rd(t = false) {
    if (this.isEmpty()) {
      return;
    }
    if (!this.#rt) {
      return void this.#rc();
    }
    let e = this.#rL();
    let i = this.#rk();
    this.#a8 = Math.max(tA.MIN_SIZE, e[2] - e[0]);
    this.#a4 = Math.max(tA.MIN_SIZE, e[3] - e[1]);
    let s = Math.ceil(i + this.#a8 * this.scaleFactor);
    let a = Math.ceil(i + this.#a4 * this.scaleFactor);
    let [r, n] = this.parentDimensions;
    this.width = s / r;
    this.height = a / n;
    this.setAspectRatio(s, a);
    let translationX = this.translationX;
    let translationY = this.translationY;
    this.translationX = -e[0];
    this.translationY = -e[1];
    this.#rg();
    this.#rc();
    this.#rn = s;
    this.#ro = a;
    this.setDims(s, a);
    let h = t ? i / this.scaleFactor / 2 : 0;
    this.translate(
      translationX - this.translationX - h,
      translationY - this.translationY - h,
    );
  }
  static async deserialize(t, e, i) {
    if (t instanceof im) {
      return null;
    }
    let s = await super.deserialize(t, e, i);
    s.thickness = t.thickness;
    s.color = B.makeHexColor(...t.color);
    s.opacity = t.opacity;
    let [a, r] = s.pageDimensions;
    let n = s.width * a;
    let o = s.height * r;
    let s_parentScale = s.parentScale;
    let h = t.thickness / 2;
    s.#rt = true;
    s.#rn = Math.round(n);
    s.#ro = Math.round(o);
    let { paths, rect, rotation } = t;
    for (let { bezier } of paths) {
      bezier = iF.#rR(bezier, rect, rotation);
      let e = [];
      s.paths.push(e);
      let i = s_parentScale * (bezier[0] - h);
      let a = s_parentScale * (bezier[1] - h);
      for (let s = 2, r = bezier.length; s < r; s += 6) {
        let r = s_parentScale * (bezier[s] - h);
        let n = s_parentScale * (bezier[s + 1] - h);
        let o = s_parentScale * (bezier[s + 2] - h);
        let d = s_parentScale * (bezier[s + 3] - h);
        let c = s_parentScale * (bezier[s + 4] - h);
        let u = s_parentScale * (bezier[s + 5] - h);
        e.push([
          [i, a],
          [r, n],
          [o, d],
          [c, u],
        ]);
        i = c;
        a = u;
      }
      let r = this.#rI(e);
      s.bezierPath2D.push(r);
    }
    let p = s.#rL();
    s.#a8 = Math.max(tA.MIN_SIZE, p[2] - p[0]);
    s.#a4 = Math.max(tA.MIN_SIZE, p[3] - p[1]);
    s.#rM(n, o);
    return s;
  }
  serialize() {
    if (this.isEmpty()) {
      return null;
    }
    let t = this.getRect(0, 0);
    let e = tA._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: c.INK,
      color: e,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: this.#rD(
        this.scaleFactor / this.parentScale,
        this.translationX,
        this.translationY,
        t,
      ),
      pageIndex: this.pageIndex,
      rect: t,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
    };
  }
}
class iO extends tA {
  #rF = null;
  #rO = null;
  #rN = null;
  #rB = null;
  #rz = null;
  #rH = "";
  #rj = null;
  #ra = null;
  #rU = null;
  #r$ = false;
  #rG = false;
  static _type = "stamp";
  static _editorType = c.STAMP;
  constructor(t) {
    super({
      ...t,
      name: "stampEditor",
    });
    this.#rB = t.bitmapUrl;
    this.#rz = t.bitmapFile;
  }
  static initialize(t, e) {
    tA.initialize(t, e);
  }
  static get supportedTypes() {
    return C(
      this,
      "supportedTypes",
      [
        "apng",
        "avif",
        "bmp",
        "gif",
        "jpeg",
        "png",
        "svg+xml",
        "webp",
        "x-icon",
      ].map((t) => `image/${t}`),
    );
  }
  static get supportedTypesStr() {
    return C(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(t) {
    return this.supportedTypes.includes(t);
  }
  static paste(t, e) {
    e.pasteEditor(c.STAMP, {
      bitmapFile: t.getAsFile(),
    });
  }
  altTextFinish() {
    if (this._uiManager.useNewAltTextFlow) {
      this.div.hidden = false;
    }
    super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText,
    };
  }
  static computeTelemetryFinalData(t) {
    let e = t.get("hasAltText");
    return {
      hasAltText: e.get(true) ?? 0,
      hasNoAltText: e.get(false) ?? 0,
    };
  }
  #rV(t, e = false) {
    if (t) {
      this.#rF = t.bitmap;
      if (!e) {
        this.#rO = t.id;
        this.#r$ = t.isSvg;
      }
      if (t.file) {
        this.#rH = t.file.name;
      }
      this.#ru();
    } else {
      this.remove();
    }
  }
  #rW() {
    this.#rN = null;
    this._uiManager.enableWaiting(false);
    if (this.#rj) {
      if (
        this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        this.#rF
      ) {
        this._editToolbar.hide();
        this._uiManager.editAltText(this, true);
        return;
      }
      if (
        !this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        this.#rF
      ) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: false,
            alt_text_type: "empty",
          },
        });
        try {
          this.mlGuessAltText();
        } catch {}
      }
      this.div.focus();
    }
  }
  async mlGuessAltText(t = null, e = true) {
    if (this.hasAltTextData()) {
      return null;
    }
    let { mlManager } = this._uiManager;
    if (!mlManager) {
      throw Error("No ML.");
    }
    if (!(await mlManager.isEnabledFor("altText"))) {
      throw Error("ML isn't enabled for alt text.");
    }
    let { data, width, height } =
      t || this.copyCanvas(null, null, true).imageData;
    let n = await mlManager.guess({
      name: "altText",
      request: {
        data,
        width,
        height,
        channels: data.length / (width * height),
      },
    });
    if (!n) {
      throw Error("No response from the AI service.");
    }
    if (n.error) {
      throw Error("Error from the AI service.");
    }
    if (n.cancel) {
      return null;
    }
    if (!n.output) {
      throw Error("No valid response from the AI service.");
    }
    let n_output = n.output;
    await this.setGuessedAltText(n_output);
    if (e && !this.hasAltTextData()) {
      this.altTextData = {
        alt: n_output,
        decorative: false,
      };
    }
    return n_output;
  }
  #rq() {
    if (this.#rO) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager
        .getFromId(this.#rO)
        .then((t) => this.#rV(t, true))
        .finally(() => this.#rW());
      return;
    }
    if (this.#rB) {
      let t = this.#rB;
      this.#rB = null;
      this._uiManager.enableWaiting(true);
      this.#rN = this._uiManager.imageManager
        .getFromUrl(t)
        .then((t) => this.#rV(t))
        .finally(() => this.#rW());
      return;
    }
    if (this.#rz) {
      let t = this.#rz;
      this.#rz = null;
      this._uiManager.enableWaiting(true);
      this.#rN = this._uiManager.imageManager
        .getFromFile(t)
        .then((t) => this.#rV(t))
        .finally(() => this.#rW());
      return;
    }
    let t = document.createElement("input");
    t.type = "file";
    t.accept = iO.supportedTypesStr;
    let _signal = this._uiManager._signal;
    this.#rN = new Promise((resolve) => {
      t.addEventListener(
        "change",
        async () => {
          if (t.files && t.files.length !== 0) {
            this._uiManager.enableWaiting(true);
            let e = await this._uiManager.imageManager.getFromFile(t.files[0]);
            this._reportTelemetry({
              action: "pdfjs.image.image_selected",
              data: {
                alt_text_modal: this._uiManager.useNewAltTextFlow,
              },
            });
            this.#rV(e);
          } else {
            this.remove();
          }
          resolve();
        },
        {
          signal: _signal,
        },
      );
      t.addEventListener(
        "cancel",
        () => {
          this.remove();
          resolve();
        },
        {
          signal: _signal,
        },
      );
    }).finally(() => this.#rW());
    t.click();
  }
  remove() {
    if (this.#rO) {
      this.#rF = null;
      this._uiManager.imageManager.deleteId(this.#rO);
      this.#rj?.remove();
      this.#rj = null;
      this.#ra?.disconnect();
      this.#ra = null;
      if (this.#rU) {
        clearTimeout(this.#rU);
        this.#rU = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (this.#rO) {
        this.#rq();
      }
      return;
    }
    super.rebuild();
    if (this.div !== null) {
      if (this.#rO && this.#rj === null) {
        this.#rq();
      }
      if (!this.isAttachedToDOM) {
        this.parent.add(this);
      }
    }
  }
  onceAdded() {
    this._isDraggable = true;
    this.div.focus();
  }
  isEmpty() {
    return !(this.#rN || this.#rF || this.#rB || this.#rz || this.#rO);
  }
  get isResizable() {
    return true;
  }
  render() {
    let t;
    let e;
    if (this.div) {
      return this.div;
    }
    if (this.width) {
      t = this.x;
      e = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.div.setAttribute("role", "figure");
    this.addAltTextButton();
    if (this.#rF) {
      this.#ru();
    } else {
      this.#rq();
    }
    if (this.width && !this.annotationElementId) {
      let [i, s] = this.parentDimensions;
      this.setAt(t * i, e * s, this.width * i, this.height * s);
    }
    return this.div;
  }
  #ru() {
    let { div } = this;
    let { width, height } = this.#rF;
    let [s, a] = this.pageDimensions;
    if (this.width) {
      width = this.width * s;
      height = this.height * a;
    } else if (width > 0.75 * s || height > 0.75 * a) {
      let t = Math.min((0.75 * s) / width, (0.75 * a) / height);
      width *= t;
      height *= t;
    }
    let [r, n] = this.parentDimensions;
    this.setDims((width * r) / s, (height * n) / a);
    this._uiManager.enableWaiting(false);
    let o = (this.#rj = document.createElement("canvas"));
    o.setAttribute("role", "img");
    this.addContainer(o);
    if (
      !(
        this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        !this.annotationElementId
      )
    ) {
      div.hidden = false;
    }
    this.#rX(width, height);
    this.#rp();
    if (!this.#rG) {
      this.parent.addUndoableEditor(this);
      this.#rG = true;
    }
    this._reportTelemetry({
      action: "inserted_image",
    });
    if (this.#rH) {
      o.setAttribute("aria-label", this.#rH);
    }
  }
  copyCanvas(t, e, i = false) {
    if (!t) {
      t = 224;
    }
    let { width, height } = this.#rF;
    let r = new tl();
    let n = this.#rF;
    let o = width;
    let l = height;
    let h = null;
    if (e) {
      if (width > e || height > e) {
        let t = Math.min(e / width, e / height);
        o = Math.floor(width * t);
        l = Math.floor(height * t);
      }
      let t = ((h = document.createElement("canvas")).width = Math.ceil(
        o * r.sx,
      ));
      let i = (h.height = Math.ceil(l * r.sy));
      if (!this.#r$) {
        n = this.#rK(t, i);
      }
      let d = h.getContext("2d");
      d.filter = this._uiManager.hcmFilter;
      let c = "white";
      let u = "#cfcfd8";
      if (this._uiManager.hcmFilter !== "none") {
        u = "black";
      } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        c = "#8f8f9d";
        u = "#42414d";
      }
      let p = 15 * r.sx;
      let g = 15 * r.sy;
      let m = new OffscreenCanvas(2 * p, 2 * g);
      let f = m.getContext("2d");
      f.fillStyle = c;
      f.fillRect(0, 0, 2 * p, 2 * g);
      f.fillStyle = u;
      f.fillRect(0, 0, p, g);
      f.fillRect(p, g, p, g);
      d.fillStyle = d.createPattern(m, "repeat");
      d.fillRect(0, 0, t, i);
      d.drawImage(n, 0, 0, n.width, n.height, 0, 0, t, i);
    }
    let imageData = null;
    if (i) {
      let e;
      let i;
      if (r.symmetric && n.width < t && n.height < t) {
        e = n.width;
        i = n.height;
      } else {
        n = this.#rF;
        if (width > t || height > t) {
          let r = Math.min(t / width, t / height);
          e = Math.floor(width * r);
          i = Math.floor(height * r);
          if (!this.#r$) {
            n = this.#rK(e, i);
          }
        }
      }
      let o = new OffscreenCanvas(e, i).getContext("2d", {
        willReadFrequently: true,
      });
      o.drawImage(n, 0, 0, n.width, n.height, 0, 0, e, i);
      imageData = {
        width: e,
        height: i,
        data: o.getImageData(0, 0, e, i).data,
      };
    }
    return {
      canvas: h,
      width: o,
      height: l,
      imageData,
    };
  }
  #rY(t, e) {
    let [i, s] = this.parentDimensions;
    this.width = t / i;
    this.height = e / s;
    if (this._initialOptions?.isCentered) {
      this.center();
    } else {
      this.fixAndSetPosition();
    }
    this._initialOptions = null;
    if (this.#rU !== null) {
      clearTimeout(this.#rU);
    }
    this.#rU = setTimeout(() => {
      this.#rU = null;
      this.#rX(t, e);
    }, 200);
  }
  #rK(t, e) {
    let { width, height } = this.#rF;
    let a = width;
    let r = height;
    let n = this.#rF;
    while (a > 2 * t || r > 2 * e) {
      let i = a;
      let s = r;
      if (a > 2 * t) {
        a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2);
      }
      if (r > 2 * e) {
        r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2);
      }
      let o = new OffscreenCanvas(a, r);
      o.getContext("2d").drawImage(n, 0, 0, i, s, 0, 0, a, r);
      n = o.transferToImageBitmap();
    }
    return n;
  }
  #rX(t, e) {
    let i = new tl();
    let s = Math.ceil(t * i.sx);
    let a = Math.ceil(e * i.sy);
    let r = this.#rj;
    if (!r || (r.width === s && r.height === a)) {
      return;
    }
    r.width = s;
    r.height = a;
    let n = this.#r$ ? this.#rF : this.#rK(s, a);
    let o = r.getContext("2d");
    o.filter = this._uiManager.hcmFilter;
    o.drawImage(n, 0, 0, n.width, n.height, 0, 0, s, a);
  }
  getImageForAltText() {
    return this.#rj;
  }
  #rQ(t) {
    if (t) {
      if (this.#r$) {
        let t = this._uiManager.imageManager.getSvgUrl(this.#rO);
        if (t) {
          return t;
        }
      }
      let t = document.createElement("canvas");
      ({ width: t.width, height: t.height } = this.#rF);
      t.getContext("2d").drawImage(this.#rF, 0, 0);
      return t.toDataURL();
    }
    if (this.#r$) {
      let [t, e] = this.pageDimensions;
      let i = Math.round(this.width * t * G.PDF_TO_CSS_UNITS);
      let s = Math.round(this.height * e * G.PDF_TO_CSS_UNITS);
      let a = new OffscreenCanvas(i, s);
      a.getContext("2d").drawImage(
        this.#rF,
        0,
        0,
        this.#rF.width,
        this.#rF.height,
        0,
        0,
        i,
        s,
      );
      return a.transferToImageBitmap();
    }
    return structuredClone(this.#rF);
  }
  #rp() {
    if (this._uiManager._signal) {
      this.#ra = new ResizeObserver((t) => {
        let contentRect = t[0].contentRect;
        if (contentRect.width && contentRect.height) {
          this.#rY(contentRect.width, contentRect.height);
        }
      });
      this.#ra.observe(this.div);
      this._uiManager._signal.addEventListener(
        "abort",
        () => {
          this.#ra?.disconnect();
          this.#ra = null;
        },
        {
          once: true,
        },
      );
    }
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof i_) {
      let {
        data: { rect: rect_1, rotation, id, structParent, popupRef },
        container,
        parent: {
          page: { pageNumber },
        },
      } = t;
      let u = container.querySelector("canvas");
      let p = i.imageManager.getFromCanvas(container.id, u);
      u.remove();
      let altText =
        (await e._structTree.getAriaAttributes(`${U}${id}`))?.get(
          "aria-label",
        ) || "";
      s = t = {
        annotationType: c.STAMP,
        bitmapId: p.id,
        bitmap: p.bitmap,
        pageIndex: pageNumber - 1,
        rect: rect_1.slice(0),
        rotation,
        id,
        deleted: false,
        accessibilityData: {
          decorative: false,
          altText,
        },
        isSvg: false,
        structParent,
        popupRef,
      };
    }
    let a = await super.deserialize(t, e, i);
    let { rect, bitmap, bitmapUrl, bitmapId, isSvg, accessibilityData } = t;
    if (bitmapId && i.imageManager.isValidId(bitmapId)) {
      a.#rO = bitmapId;
      if (bitmap) {
        a.#rF = bitmap;
      }
    } else {
      a.#rB = bitmapUrl;
    }
    a.#r$ = isSvg;
    let [u, p] = a.pageDimensions;
    a.width = (rect[2] - rect[0]) / u;
    a.height = (rect[3] - rect[1]) / p;
    a.annotationElementId = t.id || null;
    if (accessibilityData) {
      a.altTextData = accessibilityData;
    }
    a._initialData = s;
    a.#rG = !!s;
    return a;
  }
  serialize(t = false, e = null) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    let serialized = {
      annotationType: c.STAMP,
      bitmapId: this.#rO,
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: this.#r$,
      structTreeParentId: this._structTreeParentId,
    };
    if (t) {
      serialized.bitmapUrl = this.#rQ(true);
      serialized.accessibilityData = this.serializeAltText(true);
      return serialized;
    }
    let { decorative, altText } = this.serializeAltText(false);
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText,
      };
    }
    if (this.annotationElementId) {
      let t = this.#sG(serialized);
      if (t.isSame) {
        return null;
      }
      if (t.isSameAltText) {
        delete serialized.accessibilityData;
      } else {
        serialized.accessibilityData.structParent =
          this._initialData.structParent ?? -1;
      }
    }
    serialized.id = this.annotationElementId;
    if (e === null) {
      return serialized;
    }
    e.stamps ||= new Map();
    let area = this.#r$
      ? (serialized.rect[2] - serialized.rect[0]) *
        (serialized.rect[3] - serialized.rect[1])
      : null;
    if (e.stamps.has(this.#rO)) {
      if (this.#r$) {
        let t = e.stamps.get(this.#rO);
        if (area > t.area) {
          t.area = area;
          t.serialized.bitmap.close();
          t.serialized.bitmap = this.#rQ(false);
        }
      }
    } else {
      e.stamps.set(this.#rO, {
        area,
        serialized,
      });
      serialized.bitmap = this.#rQ(false);
    }
    return serialized;
  }
  #sG(t) {
    let {
      rect,
      pageIndex,
      accessibilityData: { altText },
    } = this._initialData;
    let a = t.rect.every((t, i) => Math.abs(t - rect[i]) < 1);
    let r = t.pageIndex === pageIndex;
    let isSameAltText = (t.accessibilityData?.alt || "") === altText;
    return {
      isSame: a && r && isSameAltText,
      isSameAltText,
    };
  }
  renderAnnotationElement(t) {
    t.updateEdited({
      rect: this.getRect(0, 0),
    });
    return null;
  }
}
class iN {
  #sT;
  #rJ = false;
  #rZ = null;
  #r0 = null;
  #r1 = null;
  #r2 = new Map();
  #r3 = false;
  #r5 = false;
  #r6 = false;
  #r4 = null;
  #r8 = null;
  #m;
  static _initialized = false;
  static #H = new Map([iE, iF, iO, iL].map((t) => [t._editorType, t]));
  constructor({
    uiManager,
    pageIndex,
    div,
    structTreeLayer,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n,
  }) {
    let d = [...iN.#H.values()];
    if (!iN._initialized) {
      for (let e of ((iN._initialized = true), d)) {
        e.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(d);
    this.#m = uiManager;
    this.pageIndex = pageIndex;
    this.div = div;
    this.#sT = accessibilityManager;
    this.#rZ = annotationLayer;
    this.viewport = viewport;
    this.#r4 = textLayer;
    this.drawLayer = drawLayer;
    this._structTree = structTreeLayer;
    this.#m.addLayer(this);
  }
  get isEmpty() {
    return this.#r2.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#m.getMode() === c.NONE;
  }
  updateToolbar(t) {
    this.#m.updateToolbar(t);
  }
  updateMode(t = this.#m.getMode()) {
    this.#r7();
    switch (t) {
      case c.NONE:
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case c.INK:
        this.addInkEditorIfNeeded(false);
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.disableClick();
        break;
      case c.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    let { classList } = this.div;
    for (let i of iN.#H.values()) {
      classList.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(t) {
    return t === this.#r4?.div;
  }
  addInkEditorIfNeeded(t) {
    if (this.#m.getMode() === c.INK) {
      if (!t) {
        for (let t of this.#r2.values()) {
          if (t.isEmpty()) {
            return void t.setInBackground();
          }
        }
      }
      this.createAndAddNewEditor(
        {
          offsetX: 0,
          offsetY: 0,
        },
        false,
      ).setInBackground();
    }
  }
  setEditingState(t) {
    this.#m.setEditingState(t);
  }
  addCommands(t) {
    this.#m.addCommands(t);
  }
  toggleDrawing(t = false) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = false) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = false) {
    this.#rZ?.div.classList.toggle("disabled", !t);
  }
  async enable() {
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    let t = new Set();
    for (let e of this.#r2.values()) {
      e.enableEditing();
      e.show(true);
      if (e.annotationElementId) {
        this.#m.removeChangedExistingAnnotation(e);
        t.add(e.annotationElementId);
      }
    }
    if (this.#rZ) {
      for (let e of this.#rZ.getEditableAnnotations()) {
        e.hide();
        if (this.#m.isDeletedAnnotationElement(e.data.id) || t.has(e.data.id)) {
          continue;
        }
        let i = await this.deserialize(e);
        if (i) {
          this.addOrRebuild(i);
          i.enableEditing();
        }
      }
    }
  }
  disable() {
    this.#r6 = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    let t = new Map();
    let e = new Map();
    for (let i of this.#r2.values()) {
      i.disableEditing();
      if (i.annotationElementId) {
        if (i.serialize() !== null) {
          t.set(i.annotationElementId, i);
          continue;
        }
        e.set(i.annotationElementId, i);
        this.getEditableAnnotation(i.annotationElementId)?.show();
        i.remove();
      }
    }
    if (this.#rZ) {
      for (let i of this.#rZ.getEditableAnnotations()) {
        let { id } = i.data;
        if (this.#m.isDeletedAnnotationElement(id)) {
          continue;
        }
        let a = e.get(id);
        if (a) {
          a.resetAnnotationElement(i);
          a.show(false);
          i.show();
          continue;
        }
        if ((a = t.get(id))) {
          this.#m.addChangedExistingAnnotation(a);
          if (a.renderAnnotationElement(i)) {
            a.show(false);
          }
        }
        i.show();
      }
    }
    this.#r7();
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    let { classList } = this.div;
    for (let t of iN.#H.values()) {
      classList.remove(`${t._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    this.#r6 = false;
  }
  getEditableAnnotation(t) {
    return this.#rZ?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    if (this.#m.getActive() !== t) {
      this.#m.setActiveEditor(t);
    }
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#r4?.div && !this.#r8) {
      this.#r8 = new AbortController();
      let t = this.#m.combinedSignal(this.#r8);
      this.#r4.div.addEventListener("pointerdown", this.#r9.bind(this), {
        signal: t,
      });
      this.#r4.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#r4?.div && this.#r8) {
      this.#r8.abort();
      this.#r8 = null;
      this.#r4.div.classList.remove("highlighting");
    }
  }
  #r9(t) {
    this.#m.unselectAll();
    let { target } = t;
    if (
      target === this.#r4.div ||
      ((target.getAttribute("role") === "img" ||
        target.classList.contains("endOfContent")) &&
        this.#r4.div.contains(target))
    ) {
      let { isMac } = O.platform;
      if (t.button !== 0 || (t.ctrlKey && isMac)) {
        return;
      }
      this.#m.showAllEditors("highlight", true, true);
      this.#r4.div.classList.add("free");
      this.toggleDrawing();
      iL.startHighlighting(this, this.#m.direction === "ltr", {
        target: this.#r4.div,
        x: t.x,
        y: t.y,
      });
      this.#r4.div.addEventListener(
        "pointerup",
        () => {
          this.#r4.div.classList.remove("free");
          this.toggleDrawing(true);
        },
        {
          once: true,
          signal: this.#m._signal,
        },
      );
      t.preventDefault();
    }
  }
  enableClick() {
    if (this.#r0) {
      return;
    }
    this.#r0 = new AbortController();
    let t = this.#m.combinedSignal(this.#r0);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t,
    });
    this.div.addEventListener("pointerup", this.pointerup.bind(this), {
      signal: t,
    });
  }
  disableClick() {
    this.#r0?.abort();
    this.#r0 = null;
  }
  attach(t) {
    this.#r2.set(t.id, t);
    let { annotationElementId } = t;
    if (
      annotationElementId &&
      this.#m.isDeletedAnnotationElement(annotationElementId)
    ) {
      this.#m.removeDeletedAnnotationElement(t);
    }
  }
  detach(t) {
    this.#r2.delete(t.id);
    this.#sT?.removePointerInTextLayer(t.contentDiv);
    if (!this.#r6 && t.annotationElementId) {
      this.#m.addDeletedAnnotationElement(t);
    }
  }
  remove(t) {
    this.detach(t);
    this.#m.removeEditor(t);
    t.div.remove();
    t.isAttachedToDOM = false;
    if (!this.#r5) {
      this.addInkEditorIfNeeded(false);
    }
  }
  changeParent(t) {
    if (t.parent !== this) {
      if (t.parent && t.annotationElementId) {
        this.#m.addDeletedAnnotationElement(t.annotationElementId);
        tA.deleteAnnotationElement(t);
        t.annotationElementId = null;
      }
      this.attach(t);
      t.parent?.detach(t);
      t.setParent(this);
      if (t.div && t.isAttachedToDOM) {
        t.div.remove();
        this.div.append(t.div);
      }
    }
  }
  add(t) {
    if (t.parent !== this || !t.isAttachedToDOM) {
      this.changeParent(t);
      this.#m.addEditor(t);
      this.attach(t);
      if (!t.isAttachedToDOM) {
        let e = t.render();
        this.div.append(e);
        t.isAttachedToDOM = true;
      }
      t.fixAndSetPosition();
      t.onceAdded();
      this.#m.addToAnnotationStorage(t);
      t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM) {
      return;
    }
    let { activeElement } = document;
    if (t.div.contains(activeElement) && !this.#r1) {
      t._focusEventsAllowed = false;
      this.#r1 = setTimeout(() => {
        this.#r1 = null;
        if (t.div.contains(document.activeElement)) {
          t._focusEventsAllowed = true;
        } else {
          t.div.addEventListener(
            "focusin",
            () => {
              t._focusEventsAllowed = true;
            },
            {
              once: true,
              signal: this.#m._signal,
            },
          );
          activeElement.focus();
        }
      }, 0);
    }
    t._structTreeParentId = this.#sT?.moveElementInDOM(
      this.div,
      t.div,
      t.contentDiv,
      true,
    );
  }
  addOrRebuild(t) {
    if (t.needsToBeRebuilt()) {
      t.parent ||= this;
      t.rebuild();
      t.show();
    } else {
      this.add(t);
    }
  }
  addUndoableEditor(t) {
    this.addCommands({
      cmd: () => t._uiManager.rebuild(t),
      undo: () => {
        t.remove();
      },
      mustExec: false,
    });
  }
  getNextId() {
    return this.#m.getId();
  }
  get #nt() {
    return iN.#H.get(this.#m.getMode());
  }
  combinedSignal(t) {
    return this.#m.combinedSignal(t);
  }
  #ne(t) {
    let e = this.#nt;
    if (e) {
      return new e.prototype.constructor(t);
    }
    return null;
  }
  canCreateNewEmptyEditor() {
    return this.#nt?.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    this.#m.updateToolbar(t);
    this.#m.updateMode(t);
    let { offsetX, offsetY } = this.#ni();
    let a = this.getNextId();
    let r = this.#ne({
      parent: this,
      id: a,
      x: offsetX,
      y: offsetY,
      uiManager: this.#m,
      isCentered: true,
      ...e,
    });
    if (r) {
      this.add(r);
    }
  }
  async deserialize(t) {
    return (
      (await iN.#H
        .get(t.annotationType ?? t.annotationEditorType)
        ?.deserialize(t, this, this.#m)) || null
    );
  }
  createAndAddNewEditor(t, isCentered, i = {}) {
    let s = this.getNextId();
    let a = this.#ne({
      parent: this,
      id: s,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: this.#m,
      isCentered,
      ...i,
    });
    if (a) {
      this.add(a);
    }
    return a;
  }
  #ni() {
    let { x, y, width, height } = this.div.getBoundingClientRect();
    let a = Math.max(0, x);
    let r = Math.max(0, y);
    let n = Math.min(window.innerWidth, x + width);
    let o = Math.min(window.innerHeight, y + height);
    let l = (a + n) / 2 - x;
    let h = (r + o) / 2 - y;
    let [offsetX, offsetY] =
      this.viewport.rotation % 180 == 0 ? [l, h] : [h, l];
    return {
      offsetX,
      offsetY,
    };
  }
  addNewEditor() {
    this.createAndAddNewEditor(this.#ni(), true);
  }
  setSelected(t) {
    this.#m.setSelected(t);
  }
  toggleSelected(t) {
    this.#m.toggleSelected(t);
  }
  unselect(t) {
    this.#m.unselect(t);
  }
  pointerup(t) {
    let { isMac } = O.platform;
    if (
      t.button === 0 &&
      (!t.ctrlKey || !isMac) &&
      t.target === this.div &&
      this.#r3
    ) {
      this.#r3 = false;
      if (!this.#rJ) {
        this.#rJ = true;
        return;
      }
      if (this.#m.getMode() === c.STAMP) {
        return void this.#m.unselectAll();
      }
      this.createAndAddNewEditor(t, false);
    }
  }
  pointerdown(t) {
    if (this.#m.getMode() === c.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (this.#r3) {
      this.#r3 = false;
      return;
    }
    let { isMac } = O.platform;
    if (t.button !== 0 || (t.ctrlKey && isMac) || t.target !== this.div) {
      return;
    }
    this.#r3 = true;
    let i = this.#m.getActive();
    this.#rJ = !i || i.isEmpty();
  }
  findNewParent(t, e, i) {
    let s = this.#m.findParent(e, i);
    return s !== null && s !== this && (s.changeParent(t), true);
  }
  destroy() {
    for (let t of (this.#m.getActive()?.parent === this &&
      (this.#m.commitOrRemove(), this.#m.setActiveEditor(null)),
    this.#r1 && (clearTimeout(this.#r1), (this.#r1 = null)),
    this.#r2.values())) {
      this.#sT?.removePointerInTextLayer(t.contentDiv);
      t.setParent(null);
      t.isAttachedToDOM = false;
      t.div.remove();
    }
    this.div = null;
    this.#r2.clear();
    this.#m.removeLayer(this);
  }
  #r7() {
    for (let t of ((this.#r5 = true), this.#r2.values())) {
      if (t.isEmpty()) {
        t.remove();
      }
    }
    this.#r5 = false;
  }
  render({ viewport }) {
    for (let e of ((this.viewport = viewport),
    to(this.div, viewport),
    this.#m.getEditors(this.pageIndex))) {
      this.add(e);
      e.rebuild();
    }
    this.updateMode();
  }
  update({ viewport }) {
    this.#m.commitOrRemove();
    this.#r7();
    let rotation = this.viewport.rotation;
    let viewport_rotation = viewport.rotation;
    this.viewport = viewport;
    to(this.div, {
      rotation: viewport_rotation,
    });
    if (rotation !== viewport_rotation) {
      for (let t of this.#r2.values()) {
        t.rotate(viewport_rotation);
      }
    }
    this.addInkEditorIfNeeded(false);
  }
  get pageDimensions() {
    let { pageWidth, pageHeight } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return this.#m.viewParameters.realScale;
  }
}
class iB {
  #so = null;
  #A = 0;
  #ns = new Map();
  #na = new Map();
  constructor({ pageIndex }) {
    this.pageIndex = pageIndex;
  }
  setParent(t) {
    if (!this.#so) {
      this.#so = t;
      return;
    }
    if (this.#so !== t) {
      if (this.#ns.size > 0) {
        for (let e of this.#ns.values()) {
          e.remove();
          t.append(e);
        }
      }
      this.#so = t;
    }
  }
  static get _svgFactory() {
    return C(this, "_svgFactory", new e0());
  }
  static #nr(t, { x = 0, y = 0, width = 1, height = 1 } = {}) {
    let { style } = t;
    style.top = `${100 * y}%`;
    style.left = `${100 * x}%`;
    style.width = `${100 * width}%`;
    style.height = `${100 * height}%`;
  }
  #nn(t) {
    let e = iB._svgFactory.create(1, 1, true);
    this.#so.append(e);
    e.setAttribute("aria-hidden", true);
    iB.#nr(e, t);
    return e;
  }
  #no(t, e) {
    let i = iB._svgFactory.createElement("clipPath");
    t.append(i);
    let s = `clip_${e}`;
    i.setAttribute("id", s);
    i.setAttribute("clipPathUnits", "objectBoundingBox");
    let a = iB._svgFactory.createElement("use");
    i.append(a);
    a.setAttribute("href", `#${e}`);
    a.classList.add("clip");
    return s;
  }
  draw(t, e, i, s = false) {
    let a = this.#A++;
    let r = this.#nn(t.box);
    r.classList.add(...t.classNamesForDrawing);
    let n = iB._svgFactory.createElement("defs");
    r.append(n);
    let o = iB._svgFactory.createElement("path");
    n.append(o);
    let l = `path_p${this.pageIndex}_${a}`;
    o.setAttribute("id", l);
    o.setAttribute("d", t.toSVGPath());
    if (s) {
      this.#na.set(a, o);
    }
    let h = this.#no(n, l);
    let d = iB._svgFactory.createElement("use");
    r.append(d);
    r.setAttribute("fill", e);
    r.setAttribute("fill-opacity", i);
    d.setAttribute("href", `#${l}`);
    this.#ns.set(a, r);
    return {
      id: a,
      clipPathId: `url(#${h})`,
    };
  }
  drawOutline(t) {
    let e;
    let i = this.#A++;
    let s = this.#nn(t.box);
    s.classList.add(...t.classNamesForOutlining);
    let a = iB._svgFactory.createElement("defs");
    s.append(a);
    let r = iB._svgFactory.createElement("path");
    a.append(r);
    let n = `path_p${this.pageIndex}_${i}`;
    r.setAttribute("id", n);
    r.setAttribute("d", t.toSVGPath());
    r.setAttribute("vector-effect", "non-scaling-stroke");
    if (t.mustRemoveSelfIntersections) {
      let t = iB._svgFactory.createElement("mask");
      a.append(t);
      e = `mask_p${this.pageIndex}_${i}`;
      t.setAttribute("id", e);
      t.setAttribute("maskUnits", "objectBoundingBox");
      let s = iB._svgFactory.createElement("rect");
      t.append(s);
      s.setAttribute("width", "1");
      s.setAttribute("height", "1");
      s.setAttribute("fill", "white");
      let r = iB._svgFactory.createElement("use");
      t.append(r);
      r.setAttribute("href", `#${n}`);
      r.setAttribute("stroke", "none");
      r.setAttribute("fill", "black");
      r.setAttribute("fill-rule", "nonzero");
      r.classList.add("mask");
    }
    let o = iB._svgFactory.createElement("use");
    s.append(o);
    o.setAttribute("href", `#${n}`);
    if (e) {
      o.setAttribute("mask", `url(#${e})`);
    }
    let l = o.cloneNode();
    s.append(l);
    o.classList.add("mainOutline");
    l.classList.add("secondaryOutline");
    this.#ns.set(i, s);
    return i;
  }
  finalizeLine(t, e) {
    let i = this.#na.get(t);
    this.#na.delete(t);
    this.updateBox(t, e.box);
    i.setAttribute("d", e.toSVGPath());
  }
  updateLine(t, e) {
    this.#ns.get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  updatePath(t, e) {
    this.#na.get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    iB.#nr(this.#ns.get(t), e);
  }
  show(t, e) {
    this.#ns.get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    this.#ns.get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    this.#ns.get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    this.#ns.get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    this.#ns.get(t).classList.add(e);
  }
  removeClass(t, e) {
    this.#ns.get(t).classList.remove(e);
  }
  getSVGRoot(t) {
    return this.#ns.get(t);
  }
  remove(t) {
    this.#na.delete(t);
    if (this.#so !== null) {
      this.#ns.get(t).remove();
      this.#ns.delete(t);
    }
  }
  destroy() {
    for (let t of ((this.#so = null), this.#ns.values())) {
      t.remove();
    }
    this.#ns.clear();
    this.#na.clear();
  }
}
n.AbortException;
n.AnnotationEditorLayer;
n.AnnotationEditorParamsType;
n.AnnotationEditorType;
n.AnnotationEditorUIManager;
export var dU = n.AnnotationLayer;
export var ng = n.AnnotationMode;
n.ColorPicker;
n.DOMSVGFactory;
n.DrawLayer;
n.FeatureTest;
export var EA = n.GlobalWorkerOptions;
n.ImageKind;
n.InvalidPDFException;
n.MissingPDFException;
n.OPS;
n.OutputScale;
export var Tm = n.PDFDataRangeTransport;
n.PDFDateString;
n.PDFWorker;
n.PasswordResponses;
n.PermissionFlag;
n.PixelsPerInch;
n.RenderingCancelledException;
export var D6 = n.TextLayer;
n.UnexpectedResponseException;
n.Util;
n.VerbosityLevel;
n.XfaLayer;
n.build;
n.createValidAbsoluteUrl;
n.fetchData;
export var YE = n.getDocument;
n.getFilenameFromUrl;
n.getPdfFilenameFromUrl;
n.getXfaPageViewport;
n.isDataScheme;
n.isPdfFile;
n.noContextMenu;
n.normalizeUnicode;
n.setLayerDimensions;
n.shadow;
n.version;
