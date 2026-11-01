import r from "NY";
import n from "QWK";
import a from "dw4";
import o from "M8X";
import s from "Kt";
import l from "o7";
import d from "JSz";
import { S } from "./module-t0F.js";
import { H } from "./module-g98.js";
export class Z extends l.jG {
  get name() {
    let e;
    let t;
    const i =
      (e = this._name) != null
        ? e
        : (t = this.file) == null
          ? undefined
          : t.name;
    if (i) {
      return S(i);
    }
  }
  toJSON() {
    return {
      uri: this.uri,
      url: this.url,
      id: this.id,
      name: this.name,
    };
  }
  replaceWith(e) {
    this._downloading = undefined;
    this._uploading = undefined;
    this._setFile(e.file);
    this._setUri(e.uri);
    this._setUrl(e.url);
  }
  resolveFile() {
    return r
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (this.file) {
          return this.file;
        }
        if (this._downloading) {
          return this._downloading;
        }
        if (this.url) {
          this._downloading = this._downloadFile(this.url, e);
          const t = yield this._downloading;
          if (t) {
            this._setFile(t);
          } else {
            this._downloading = undefined;
          }
          return t;
        }
      })
      .apply(this, arguments);
  }
  resolveUri() {
    return r
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (this.uri) {
          return this.uri;
        }
        const t = yield this.resolveFile(e);
        if (t) {
          if (this._uploading) {
            return this._uploading;
          }
          this._uploading = this._uploadFile(t, e);
          const i = yield this._uploading;
          if (i) {
            this._setUri(i);
          } else {
            this._uploading = undefined;
          }
          return i;
        }
      })
      .apply(this, arguments);
  }
  _setFile(e) {
    this.file = e;
  }
  _setUri(e) {
    this.uri = e;
  }
  _setUrl(e) {
    this.url = e;
  }
  setResolvedUri(e) {
    this._setUri(e);
  }
  _setName(e) {
    this._name = e;
  }
  _downloadFile(e, t) {
    return r
      ._(function* () {
        try {
          const i = yield fetch(e, {
            signal: t.signal,
          });
          if (!i.ok) {
            return;
          }
          const r = yield i.blob();
          return new File([r], this._extractFilename(i), {
            type: r.type,
          });
        } catch (e) {
          return;
        }
      })
      .call(this);
  }
  _uploadFile(file, t) {
    return r
      ._(function* () {
        if (this.containerService) {
          const i = o.cQ(this.containerService, H);
          if (file.type.startsWith("image/")) {
            const r = yield i.uploadImage({
              file,
              cancellationToken: t.signal,
            });
            if (r.ok) {
              return r.value.uri;
            }
            return undefined;
          }
          if (
            file.type.startsWith("video/") ||
            file.type.startsWith("audio/")
          ) {
            const n = yield i.uploadVideo({
              file,
              cancellationToken: t.signal,
            });
            if (n.ok) {
              return n.value.vid;
            }
            return undefined;
          }
          const a = yield i.uploadFile({
            file,
            cancellationToken: t.signal,
          });
          if (a.ok) {
            return a.value.uri;
          }
          return undefined;
        }
      })
      .call(this);
  }
  _extractFilename(e) {
    let t;
    const i = e.headers.get("content-disposition");
    const r = i == null ? undefined : i.match(/filename="?([^"]+)"?/);
    if (r && r.length > 1) {
      return r[1];
    }
    return (
      ((t = e.url.split("/").at(-1)) == null ? undefined : t.split("?")[0]) ||
      "downloaded-file"
    );
  }
  constructor(e, t) {
    super();
    this.containerService = t;
    this.id = d.uR();
    this.file = undefined;
    this.uri = undefined;
    this._name = undefined;
    this._downloading = undefined;
    this._uploading = undefined;
    a.Gn(this);
    if (e.id) {
      this.id = e.id;
    }
    if ("file" in e) {
      this._setFile(e.file);
      this.url = URL.createObjectURL(e.file);
    } else {
      this._setUri(e.uri);
      this.url = e.url;
    }
    if ("name" in e) {
      this._setName(e.name);
    }
  }
}
n.Cg([a.sH, n.Sn("design:type", Object)], Z.prototype, "file", undefined);
n.Cg([a.sH, n.Sn("design:type", Object)], Z.prototype, "uri", undefined);
n.Cg([a.sH, n.Sn("design:type", String)], Z.prototype, "url", undefined);
n.Cg([a.sH, n.Sn("design:type", Object)], Z.prototype, "_name", undefined);
n.Cg(
  [a.EW, n.Sn("design:type", Object), n.Sn("design:paramtypes", [])],
  Z.prototype,
  "name",
  null,
);
n.Cg(
  [
    a.XI,
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [Object]),
    n.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setFile",
  null,
);
n.Cg(
  [
    a.XI,
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [Object]),
    n.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setUri",
  null,
);
n.Cg(
  [
    a.XI,
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [String]),
    n.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setUrl",
  null,
);
n.Cg(
  [
    a.XI,
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [String]),
    n.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "setResolvedUri",
  null,
);
n.Cg(
  [
    a.XI,
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [Object]),
    n.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setName",
  null,
);
Z = n.Cg(
  [
    n.Qj(1, s._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof ReferenceResourceInfo === "undefined"
        ? Object
        : ReferenceResourceInfo,
      s._ === undefined ? Object : s._,
    ]),
  ],
  Z,
);
export class N extends Z {
  toJSON() {
    return {
      $type: N.$type,
      ...super.toJSON(),
    };
  }
  constructor(e) {
    super(
      {
        url: "",
      },
      e,
    );
    this.type = "empty";
    a.Gn(this);
  }
}
N.$type = "ContentGeneratorEmptyResource";
N = n.Cg(
  [
    n.Qj(0, s._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  N,
);
