import n from "NY";
import r from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import l from "Kt";
import c from "eX4";
import u from "gn";
import { Z } from "./module-zi0_2.js";
class M extends Z {
  get duration() {
    let e;
    let t;
    if (
      (e = (t = this._audioMetadata) == null ? undefined : t.duration) != null
    ) {
      return e;
    }
    return 0;
  }
  toJSON() {
    const e = r._(
      a._(r._({}, super.toJSON(), this.remoteExtraInfo), {
        coverUrl: this.coverUrl,
      }),
      this._audioMetadata,
    );
    return {
      $type: M.$type,
      ...e,
    };
  }
  replaceWith(e) {
    super.replaceWith(e);
    this._setRemoteExtraInfo(e.remoteExtraInfo);
    this._setCoverUrl(e.coverUrl);
    this._setAudioMetadata(e._audioMetadata);
    this._audioBuffer = undefined;
  }
  resolveMetadata() {
    return n
      ._(function* () {
        if (this._audioMetadata) {
          return this._audioMetadata;
        }
        const e = yield u.I(this.url);
        if (e) {
          this._setAudioMetadata({
            duration: e.duration,
          });
          return this._audioMetadata;
        }
      })
      .call(this);
  }
  resolveAudioBuffer() {
    return n
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (this._audioBuffer) {
          return this._audioBuffer;
        }
        const t = yield this.resolveFile(e);
        if (t) {
          const i = yield c.J(t);
          if (i) {
            this._audioBuffer = i;
            return this._audioBuffer;
          }
        }
      })
      .apply(this, arguments);
  }
  _setRemoteExtraInfo(e) {
    this.remoteExtraInfo = e;
  }
  _setCoverUrl(e) {
    this.coverUrl = e;
  }
  _setAudioMetadata(e) {
    this._audioMetadata = e;
  }
  constructor(e, t) {
    super(e, t);
    this.type = "audio";
    this.remoteExtraInfo = undefined;
    this.coverUrl = undefined;
    this._audioMetadata = undefined;
    this._audioBuffer = undefined;
    s.Gn(this);
    if (!("file" in e)) {
      this._setRemoteExtraInfo({
        aigcItemId: e.aigcItemId,
      });
    }
    this.coverUrl = e.coverUrl;
    if ("duration" in e) {
      this._setAudioMetadata({
        duration: e.duration,
      });
    }
  }
}
export { M as e };
M.$type = "ContentGeneratorAudioResource";
o.Cg(
  [s.sH, o.Sn("design:type", Object)],
  M.prototype,
  "remoteExtraInfo",
  undefined,
);
o.Cg([s.sH, o.Sn("design:type", Object)], M.prototype, "coverUrl", undefined);
o.Cg(
  [s.sH, o.Sn("design:type", Object)],
  M.prototype,
  "_audioMetadata",
  undefined,
);
o.Cg(
  [s.EW, o.Sn("design:type", Number), o.Sn("design:paramtypes", [])],
  M.prototype,
  "duration",
  null,
);
o.Cg(
  [
    s.XI,
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Object]),
    o.Sn("design:returntype", undefined),
  ],
  M.prototype,
  "_setRemoteExtraInfo",
  null,
);
o.Cg(
  [
    s.XI,
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Object]),
    o.Sn("design:returntype", undefined),
  ],
  M.prototype,
  "_setCoverUrl",
  null,
);
o.Cg(
  [
    s.XI,
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Object]),
    o.Sn("design:returntype", undefined),
  ],
  M.prototype,
  "_setAudioMetadata",
  null,
);
M = o.Cg(
  [
    o.Qj(1, l._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ReferenceAudioResourceInfo === "undefined"
        ? Object
        : ReferenceAudioResourceInfo,
      l._ === undefined ? Object : l._,
    ]),
  ],
  M,
);
