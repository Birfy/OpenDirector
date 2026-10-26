import n from "NY";
import r from "QWK";
import a from "dw4";
import o from "M8X";
import s from "Kt";
import l from "o7";
import c from "JSz";
import u from "t0F";
import d from "g98";
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
      return u.S(i);
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
    return n
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
    return n
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
    return n
      ._(function* () {
        try {
          const i = yield fetch(e, {
            signal: t.signal,
          });
          if (!i.ok) {
            return;
          }
          const n = yield i.blob();
          return new File([n], this._extractFilename(i), {
            type: n.type,
          });
        } catch (e) {
          return;
        }
      })
      .call(this);
  }
  _uploadFile(file, t) {
    return n
      ._(function* () {
        if (this.containerService) {
          const i = o.cQ(this.containerService, d.H);
          if (file.type.startsWith("image/")) {
            const n = yield i.uploadImage({
              file,
              cancellationToken: t.signal,
            });
            if (n.ok) {
              return n.value.uri;
            }
            return undefined;
          }
          if (
            file.type.startsWith("video/") ||
            file.type.startsWith("audio/")
          ) {
            const r = yield i.uploadVideo({
              file,
              cancellationToken: t.signal,
            });
            if (r.ok) {
              return r.value.vid;
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
    const n = i == null ? undefined : i.match(/filename="?([^"]+)"?/);
    if (n && n.length > 1) {
      return n[1];
    }
    return (
      ((t = e.url.split("/").at(-1)) == null ? undefined : t.split("?")[0]) ||
      "downloaded-file"
    );
  }
  constructor(e, t) {
    super();
    this.containerService = t;
    this.id = c.uR();
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
r.Cg([a.sH, r.Sn("design:type", Object)], Z.prototype, "file", undefined);
r.Cg([a.sH, r.Sn("design:type", Object)], Z.prototype, "uri", undefined);
r.Cg([a.sH, r.Sn("design:type", String)], Z.prototype, "url", undefined);
r.Cg([a.sH, r.Sn("design:type", Object)], Z.prototype, "_name", undefined);
r.Cg(
  [a.EW, r.Sn("design:type", Object), r.Sn("design:paramtypes", [])],
  Z.prototype,
  "name",
  null,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [Object]),
    r.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setFile",
  null,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [Object]),
    r.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setUri",
  null,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [String]),
    r.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setUrl",
  null,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [String]),
    r.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "setResolvedUri",
  null,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [Object]),
    r.Sn("design:returntype", undefined),
  ],
  Z.prototype,
  "_setName",
  null,
);
Z = r.Cg(
  [
    r.Qj(1, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
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
N = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  N,
);
