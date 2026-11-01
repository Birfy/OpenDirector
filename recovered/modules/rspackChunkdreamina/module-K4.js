import r from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import l from "Kt";
import d from "KI";
import { H } from "./module-HR_3.js";
import { Z } from "./module-zi0.js";
export class p extends Z {
  get width() {
    let e;
    let t;
    if ((e = (t = this._videoMetadata) == null ? undefined : t.width) != null) {
      return e;
    }
    return 0;
  }
  get height() {
    let e;
    let t;
    if (
      (e = (t = this._videoMetadata) == null ? undefined : t.height) != null
    ) {
      return e;
    }
    return 0;
  }
  get duration() {
    let e;
    let t;
    if (
      (e = (t = this._videoMetadata) == null ? undefined : t.duration) != null
    ) {
      return e;
    }
    return 0;
  }
  toJSON() {
    const e = n._(
      a._(n._({}, super.toJSON(), this.remoteExtraInfo), {
        coverUrl: this.coverUrl,
      }),
      this._videoMetadata,
    );
    return {
      $type: p.$type,
      ...e,
    };
  }
  replaceWith(e) {
    super.replaceWith(e);
    this._setVideoMetadata(e._videoMetadata);
  }
  resolveMetadata() {
    return r
      ._(function* () {
        if (this._videoMetadata) {
          return this._videoMetadata;
        }
        const e = yield H(this.url);
        if (e) {
          const { width, height, duration } = e;
          this._setVideoMetadata({
            width,
            height,
            duration,
          });
          return this._videoMetadata;
        }
      })
      .call(this);
  }
  resolveCoverUrl() {
    return r
      ._(function* () {
        if (this.coverUrl) {
          return this.coverUrl;
        }
        const e = yield d.$(this.url);
        if (e) {
          this._setCoverUrl(URL.createObjectURL(e));
          return this.coverUrl;
        }
      })
      .call(this);
  }
  _setRemoteExtraInfo(e) {
    this.remoteExtraInfo = e;
  }
  _setCoverUrl(e) {
    this.coverUrl = e;
  }
  _setVideoMetadata(e) {
    this._videoMetadata = e;
  }
  constructor(e, t) {
    super(e, t);
    this.type = "video";
    this.remoteExtraInfo = undefined;
    this.coverUrl = undefined;
    this._videoMetadata = undefined;
    s.Gn(this);
    if (!("file" in e)) {
      var { aigcItemId, submitId } = e;
      this._setRemoteExtraInfo({
        aigcItemId,
        submitId,
      });
    }
    this.coverUrl = e.coverUrl;
    if ("width" in e && "height" in e && "duration" in e) {
      var { width, height, duration } = e;
      this._setVideoMetadata({
        width,
        height,
        duration,
      });
    }
  }
}
p.$type = "ContentGeneratorVideoResource";
o.Cg(
  [s.sH, o.Sn("design:type", Object)],
  p.prototype,
  "remoteExtraInfo",
  undefined,
);
o.Cg([s.sH, o.Sn("design:type", Object)], p.prototype, "coverUrl", undefined);
o.Cg(
  [s.sH, o.Sn("design:type", Object)],
  p.prototype,
  "_videoMetadata",
  undefined,
);
o.Cg(
  [s.EW, o.Sn("design:type", Number), o.Sn("design:paramtypes", [])],
  p.prototype,
  "width",
  null,
);
o.Cg(
  [s.EW, o.Sn("design:type", Number), o.Sn("design:paramtypes", [])],
  p.prototype,
  "height",
  null,
);
o.Cg(
  [s.EW, o.Sn("design:type", Number), o.Sn("design:paramtypes", [])],
  p.prototype,
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
  p.prototype,
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
  p.prototype,
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
  p.prototype,
  "_setVideoMetadata",
  null,
);
p = o.Cg(
  [
    o.Qj(1, l._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ReferenceVideoResourceInfo === "undefined"
        ? Object
        : ReferenceVideoResourceInfo,
      l._ === undefined ? Object : l._,
    ]),
  ],
  p,
);
