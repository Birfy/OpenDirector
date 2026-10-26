import r from "NY";
import n from "oa";
import a from "QWK";
import o from "dw4";
import s from "Kt";
import l from "xi";
import { T } from "./module-Ag.js";
import { Z } from "./module-zi0.js";
const u = "image/tiff";
const h = new Set(["tif", "tiff"]);
const v = new Set(["image/heic", "image/heif", u]);
const p = new Set(["heic", "heif", ...h]);
const toType = "image/jpeg";
function g(e) {
  let t;
  const i = (t = e.name.split(".").pop()) == null ? undefined : t.toLowerCase();
  if (i && i !== e.name.toLowerCase()) {
    return i;
  }
}
function _(e) {
  if (e.type.toLowerCase() === u) {
    return true;
  }
  const t = g(e);
  return !!(t && h.has(t));
}
export function Qr(blob) {
  return r._(function* () {
    try {
      if (_(blob)) {
        return yield r._(function* () {
          let t;
          const _default = (yield require
            .e("wf8")
            .then(require.t.bind(require, "KA0", 23))).default;
          const n = yield blob.arrayBuffer();
          const a = (t = _default.decode(n)) == null ? undefined : t[0];
          if (a) {
            _default.decodeImage(n, a);
            const o = _default.toRGBA8(a);
            const s = Number(a.width);
            const l = Number(a.height);
            if (s && l) {
              const d = document.createElement("canvas");
              d.width = s;
              d.height = l;
              try {
                const c = d.getContext("2d");
                if (!c) {
                  return;
                }
                c.putImageData(
                  new ImageData(
                    new Uint8ClampedArray(o.buffer, o.byteOffset, o.byteLength),
                    s,
                    l,
                  ),
                  0,
                  0,
                );
                return yield new Promise((resolve) =>
                  d.toBlob(
                    (t) => resolve(t != null ? t : undefined),
                    toType,
                    0.8,
                  ),
                );
              } finally {
                d.width = 0;
                d.height = 0;
              }
            }
          }
        })();
      }
      return yield r._(function* () {
        let t;
        let r;
        const n = (yield require
          .e("jzk")
          .then(require.t.bind(require, "Lnl", 23))).default({
          blob,
          toType,
          quality: 0.8,
        });
        const a = yield r ? Promise.race([n, r]) : n;
        if ((t = Array.isArray(a) ? a[0] : a) != null) {
          return t;
        }
      })();
    } catch (error) {
      l.V.error(
        "[convertToPreviewImage] failed:",
        {
          type: blob.type,
          size: blob.size,
          extension: g(blob),
        },
        error,
      );
      return;
    }
  })();
}
export function My(e) {
  const t = e.type.toLowerCase();
  if (t && v.has(t)) {
    return true;
  }
  const i = g(e);
  return !!(i && p.has(i));
}
export function kg(e) {
  return My(e);
}
function S(e, t, i) {
  const r = e.getUint16(t + 2, i);
  if (!(e.getUint32(t + 4, i) < 1)) {
    switch (r) {
      case 3:
        return e.getUint16(t + 8, i);
      case 4:
        return e.getUint32(t + 8, i);
      default:
        return undefined;
    }
  }
}
export function AH(e) {
  return r._(function* () {
    try {
      let t;
      const n = yield r._(function* () {
        if (!_(e)) {
          return;
        }
        let width_1;
        let height_1;
        const r = new Uint8Array(yield e.arrayBuffer());
        if (!(r.length < 8)) {
          const n = new DataView(r.buffer, r.byteOffset, r.byteLength);
          const a = n.getUint16(0, false);
          const o = a === 18761 || (a !== 19789 && undefined);
          if (typeof o === "boolean" && n.getUint16(2, o) === 42) {
            const s = n.getUint32(4, o);
            if (!(s + 2 > r.length)) {
              for (let l = n.getUint16(s, o), d = 0; d < l; d += 1) {
                const c = s + 2 + 12 * d;
                if (c + 12 > r.length) {
                  break;
                }
                const u = n.getUint16(c, o);
                if (u === 256) {
                  width_1 = S(n, c, o);
                } else if (u === 257) {
                  height_1 = S(n, c, o);
                }
                if (
                  typeof width_1 === "number" &&
                  typeof height_1 === "number"
                ) {
                  return {
                    width: width_1,
                    height: height_1,
                  };
                }
              }
            }
          }
        }
      })();
      if (n) {
        return n;
      }
      const { imageDimensionsFromStream } = yield require
        .e("o3")
        .then(require.bind(require, "ei4"));
      const o = yield imageDimensionsFromStream(e.stream());
      if (!o) {
        return;
      }
      let { width, height } = o;
      const d = new Uint8Array(yield e.slice(0, 16384).arrayBuffer());
      if (
        (t = ((e) => {
          const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
          for (let i = 4; i <= e.length - 5; i += 1) {
            if (
              e[i] === 105 &&
              e[i + 1] === 114 &&
              e[i + 2] === 111 &&
              e[i + 3] === 116 &&
              t.getUint32(i - 4) === 9
            ) {
              return 3 & e[i + 4];
            }
          }
          return 0;
        })(d)) === 1 ||
        t === 3
      ) {
        [width, height] = [height, width];
      }
      return {
        width,
        height,
      };
    } catch (e) {
      return;
    }
  })();
}
export class Vl extends Z {
  get width() {
    let e;
    let t;
    if ((e = (t = this._imageMetadata) == null ? undefined : t.width) != null) {
      return e;
    }
    return 0;
  }
  get height() {
    let e;
    let t;
    if (
      (e = (t = this._imageMetadata) == null ? undefined : t.height) != null
    ) {
      return e;
    }
    return 0;
  }
  toJSON() {
    const e = n._(
      {},
      super.toJSON(),
      this.remoteExtraInfo,
      this._imageMetadata,
    );
    return {
      $type: Vl.$type,
      ...e,
    };
  }
  replaceWith(e) {
    super.replaceWith(e);
    this._setRemoteExtraInfo(e.remoteExtraInfo);
    this._setImageMetadata(e._imageMetadata);
  }
  dispose() {
    this._disposed = true;
    if (this.file && this.url.startsWith("blob:")) {
      URL.revokeObjectURL(this.url);
      this._setUrl("");
    }
    super.dispose();
  }
  resolveMetadata() {
    return r
      ._(function* () {
        if (this._imageMetadata) {
          return this._imageMetadata;
        }
        const e = yield this._resolveMetadataFromHeader();
        if (e) {
          this._setImageMetadata(e);
          return this._imageMetadata;
        }
        yield this._previewConversionPromise;
        const t = yield T(this.url);
        if (t) {
          this._setImageMetadata({
            width: t.width,
            height: t.height,
          });
          return this._imageMetadata;
        }
      })
      .call(this);
  }
  _resolveMetadataFromHeader() {
    return r
      ._(function* () {
        if (this.file && My(this.file)) {
          return AH(this.file);
        }
      })
      .call(this);
  }
  _resolvePreviewConversion(e) {
    return r
      ._(function* () {
        const t = yield Qr(e);
        if (!this._disposed) {
          const i = URL.createObjectURL(t != null ? t : e);
          const r = this.url;
          this._setUrl(i);
          if (r) {
            URL.revokeObjectURL(r);
          }
        }
      })
      .call(this);
  }
  _setRemoteExtraInfo(e) {
    this.remoteExtraInfo = e;
  }
  _setImageMetadata(e) {
    this._imageMetadata = e;
  }
  constructor(e, t) {
    super(e, t);
    this.type = "image";
    this.remoteExtraInfo = undefined;
    this._imageMetadata = undefined;
    this._previewConversionPromise = undefined;
    this._disposed = false;
    o.Gn(this);
    if (!("file" in e)) {
      var { aigcItemId, resolutionUrlMap, cacheKey } = e;
      this._setRemoteExtraInfo({
        aigcItemId,
        resolutionUrlMap,
        cacheKey,
      });
    }
    if ("width" in e && "height" in e) {
      this._setImageMetadata({
        width: e.width,
        height: e.height,
      });
    }
    if ("file" in e && My(e.file)) {
      URL.revokeObjectURL(this.url);
      this.url = "";
      this._previewConversionPromise = this._resolvePreviewConversion(e.file);
    }
  }
}
Vl.$type = "ContentGeneratorImageResource";
a.Cg(
  [o.sH, a.Sn("design:type", Object)],
  Vl.prototype,
  "remoteExtraInfo",
  undefined,
);
a.Cg(
  [o.sH, a.Sn("design:type", Object)],
  Vl.prototype,
  "_imageMetadata",
  undefined,
);
a.Cg(
  [o.EW, a.Sn("design:type", Number), a.Sn("design:paramtypes", [])],
  Vl.prototype,
  "width",
  null,
);
a.Cg(
  [o.EW, a.Sn("design:type", Number), a.Sn("design:paramtypes", [])],
  Vl.prototype,
  "height",
  null,
);
a.Cg(
  [
    o.XI,
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Object]),
    a.Sn("design:returntype", undefined),
  ],
  Vl.prototype,
  "_setRemoteExtraInfo",
  null,
);
a.Cg(
  [
    o.XI,
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Object]),
    a.Sn("design:returntype", undefined),
  ],
  Vl.prototype,
  "_setImageMetadata",
  null,
);
Vl = a.Cg(
  [
    a.Qj(1, s._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ReferenceImageResourceInfo === "undefined"
        ? Object
        : ReferenceImageResourceInfo,
      s._ === undefined ? Object : s._,
    ]),
  ],
  Vl,
);
