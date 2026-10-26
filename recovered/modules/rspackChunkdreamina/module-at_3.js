import n from "NY";
import r from "oa";
import a from "QWK";
import o from "dw4";
import s from "Kt";
import l from "xi";
import { T } from "./module-Ag_2.js";
import { Z } from "./module-zi0_2.js";
const d = "image/tiff";
const M = new Set(["tif", "tiff"]);
const g = new Set(["image/heic", "image/heif", d]);
const N = new Set(["heic", "heif", ...M]);
const toType = "image/jpeg";
function m(e) {
  let t;
  const i = (t = e.name.split(".").pop()) == null ? undefined : t.toLowerCase();
  if (i && i !== e.name.toLowerCase()) {
    return i;
  }
}
function j(e) {
  if (e.type.toLowerCase() === d) {
    return true;
  }
  const t = m(e);
  return !!(t && M.has(t));
}
export function Qr(blob) {
  return n._(function* () {
    try {
      if (j(blob)) {
        return yield n._(function* () {
          let t;
          const _default = (yield require
            .e("wf8")
            .then(require.t.bind(require, "KA0", 23))).default;
          const r = yield blob.arrayBuffer();
          const a = (t = _default.decode(r)) == null ? undefined : t[0];
          if (a) {
            _default.decodeImage(r, a);
            const o = _default.toRGBA8(a);
            const s = Number(a.width);
            const l = Number(a.height);
            if (s && l) {
              const c = document.createElement("canvas");
              c.width = s;
              c.height = l;
              try {
                const u = c.getContext("2d");
                if (!u) {
                  return;
                }
                u.putImageData(
                  new ImageData(
                    new Uint8ClampedArray(o.buffer, o.byteOffset, o.byteLength),
                    s,
                    l,
                  ),
                  0,
                  0,
                );
                return yield new Promise((resolve) =>
                  c.toBlob(
                    (t) => resolve(t != null ? t : undefined),
                    toType,
                    0.8,
                  ),
                );
              } finally {
                c.width = 0;
                c.height = 0;
              }
            }
          }
        })();
      }
      return yield n._(function* () {
        let t;
        let n;
        const r = (yield require
          .e("jzk")
          .then(require.t.bind(require, "Lnl", 23))).default({
          blob,
          toType,
          quality: 0.8,
        });
        const a = yield n ? Promise.race([r, n]) : r;
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
          extension: m(blob),
        },
        error,
      );
      return;
    }
  })();
}
export function My(e) {
  const t = e.type.toLowerCase();
  if (t && g.has(t)) {
    return true;
  }
  const i = m(e);
  return !!(i && N.has(i));
}
export function kg(e) {
  return My(e);
}
function h(e, t, i) {
  const n = e.getUint16(t + 2, i);
  if (!(e.getUint32(t + 4, i) < 1)) {
    switch (n) {
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
  return n._(function* () {
    try {
      let t;
      const r = yield n._(function* () {
        if (!j(e)) {
          return;
        }
        let width_1;
        let height_1;
        const n = new Uint8Array(yield e.arrayBuffer());
        if (!(n.length < 8)) {
          const r = new DataView(n.buffer, n.byteOffset, n.byteLength);
          const a = r.getUint16(0, false);
          const o = a === 18761 || (a !== 19789 && undefined);
          if (typeof o === "boolean" && r.getUint16(2, o) === 42) {
            const s = r.getUint32(4, o);
            if (!(s + 2 > n.length)) {
              for (let l = r.getUint16(s, o), c = 0; c < l; c += 1) {
                const u = s + 2 + 12 * c;
                if (u + 12 > n.length) {
                  break;
                }
                const d = r.getUint16(u, o);
                if (d === 256) {
                  width_1 = h(r, u, o);
                } else if (d === 257) {
                  height_1 = h(r, u, o);
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
      if (r) {
        return r;
      }
      const { imageDimensionsFromStream } = yield require
        .e("o3")
        .then(require.bind(require, "ei4"));
      const o = yield imageDimensionsFromStream(e.stream());
      if (!o) {
        return;
      }
      let { width, height } = o;
      const c = new Uint8Array(yield e.slice(0, 16384).arrayBuffer());
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
        })(c)) === 1 ||
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
    const e = r._(
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
    return n
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
    return n
      ._(function* () {
        if (this.file && My(this.file)) {
          return AH(this.file);
        }
      })
      .call(this);
  }
  _resolvePreviewConversion(e) {
    return n
      ._(function* () {
        const t = yield Qr(e);
        if (!this._disposed) {
          const i = URL.createObjectURL(t != null ? t : e);
          const n = this.url;
          this._setUrl(i);
          if (n) {
            URL.revokeObjectURL(n);
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
