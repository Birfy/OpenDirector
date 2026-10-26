import i from "NY";
import s from "QWK";
import a from "Kt";
import n from "oa";
import o from "bk";
import l from "qa";
import d from "KC";
import c from "dR";
import u from "qN";
import h from "iN";
import p from "FL";
import _ from "K8";
import v from "Bb";
class g {
  syncUrlToEverPhoto(e) {
    return i
      ._(function* (e) {
        let t;
        const r =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const i = this._httpApiSettingService.getRequestURL({
          domainType: h.X.DEFAULT,
          path: "/lv/v2/intelligence/tts/curl_sync_everphoto",
        });
        r.headers = o._(n._({}, (t = r.headers) != null ? t : {}), {
          loc: this._httpApiSettingService.userLocationInfo.region,
          "x-lvweb-idc": this._httpApiSettingService.userLocationInfo.idc,
        });
        try {
          const s = yield this._networkClient.post(
            i,
            {
              url: e.url,
              workspace_id: e.workspaceId,
            },
            r,
          );
          const { asset_id } = s;
          const d = l._(s, ["asset_id"]);
          return _.TZ(
            n._(
              {
                assetId: asset_id,
              },
              d,
            ),
          );
        } catch (error) {
          return _.iX(v.gn.NetworkFailed, "post data error.", error);
        }
      })
      .apply(this, arguments);
  }
  constructor(e) {
    var t;
    this._httpApiSettingService = e;
    this._networkClient =
      ((t = new d.LL().build({
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })),
      c.vo(t),
      u.J$(t),
      t);
  }
}
s.Cg(
  [
    p.R(),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof SyncUrlToEverSpaceParams === "undefined"
        ? Object
        : SyncUrlToEverSpaceParams,
      typeof NetworkRequestConfig === "undefined"
        ? Object
        : NetworkRequestConfig,
    ]),
    s.Sn("design:returntype", Promise),
  ],
  g.prototype,
  "syncUrlToEverPhoto",
  null,
);
g = s.Cg(
  [
    s.Qj(0, h.r),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [h.r === undefined ? Object : h.r]),
  ],
  g,
);
const m = require("Dm");
const f = require("xi");
const k = require("Ik");
const y = require("o7");
class I extends y.jG {
  _flushToken() {
    return i
      ._(function* () {
        if (Date.now() - this._lastFlushTokenTime > this._tokenMaxAge) {
          if (!this._flushMutex.tryLock()) {
            yield this._flushMutex.lockShared();
            this._flushMutex.unLockShared();
            return;
          }
          try {
            const e = yield this._getToken();
            if (!e.ok) {
              this._token = undefined;
              return;
            }
            this._token = e.value;
            this._lastFlushTokenTime = Date.now();
          } finally {
            this._flushMutex.unLock();
          }
        }
      })
      .call(this);
  }
  constructor(...e) {
    super(...e);
    this._flushMutex = new k.P();
    this._lastFlushTokenTime = 0;
    this._tokenMaxAge = 1200000;
  }
}
const S = require("./module-k6i.js");
const service_id = "ccagentfilethread";
class C extends S.W {
  getEventParams() {
    const e = n._({}, this._params);
    if (!e.entry_position) {
      delete e.entry_position;
    }
    if (!e.log_id) {
      delete e.log_id;
    }
    return e;
  }
  isAllowReportToSlardar() {
    return true;
  }
  constructor(e) {
    super();
    this._params = e;
    this.eventName = "ccagentfilethread_upload";
  }
}
const b = require("A7");
const E = require("LTY");
class x {
  cancel() {
    this._cancelled = true;
  }
  get onComplete() {
    if (!this._neverEmitter) {
      this._neverEmitter = new b.v();
    }
    return this._neverEmitter.event;
  }
  get onProgress() {
    if (!this._neverEmitter) {
      this._neverEmitter = new b.v();
    }
    return this._neverEmitter.event;
  }
  get onError() {
    if (this._cancelled) {
      if (!this._neverEmitter) {
        this._neverEmitter = new b.v();
      }
      return this._neverEmitter.event;
    }
    return E.j(this._err);
  }
  constructor(e) {
    this._err = e;
    this._cancelled = false;
  }
}
const w = require("vrE");
const A = require("qr");
const R = require("bE");
class F {
  get userId() {
    if (this._accountService.hasLogin) {
      return this._accountService.userProfile.uid;
    }
    return "unknown";
  }
  constructor(e) {
    this._accountService = e;
    this._onUserIdChange = new b.v();
    this.onUserIdChange = this._onUserIdChange.event;
    if (!this._accountService.hasLogin) {
      w.J(this._accountService.onDidLogin)(() => {
        this._onUserIdChange.fire(this._accountService.userProfile.uid);
      });
    }
  }
}
F = s.Cg(
  [
    s.Qj(0, R.c),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [R.c === undefined ? Object : R.c]),
  ],
  F,
);
class M {
  get userId() {
    return this._userId;
  }
  get onUserIdChange() {
    return A.d;
  }
  constructor(e) {
    this._userId = e;
  }
}
const P = require("./module-xL4.js");
function U(e, cancellationToken) {
  let r = false;
  const i = () => {
    r = true;
    e.cancel();
  };
  if (cancellationToken instanceof AbortSignal) {
    if (cancellationToken.aborted) {
      i();
    } else {
      cancellationToken.addEventListener("abort", i, {
        once: true,
      });
    }
  } else {
    cancellationToken.onCancellationRequested(i);
  }
  return r;
}
class j extends y.jG {
  cancel() {
    this._sdk.cancel(this._key);
    this._onError.fire(_.xz(v.gn.Cancelled, "upload task cancelled."));
  }
  constructor(e, t) {
    super();
    this._sdk = e;
    this._key = t;
    this._onCompleted = new b.v();
    this._onError = new b.v();
    this._onProgress = new b.v();
    this.onComplete = this._onCompleted.event;
    this.onError = this._onError.event;
    this.onProgress = this._onProgress.event;
    this._sdk.on("complete", (e) => {
      if (e.key === this._key) {
        var t;
        var r;
        var { uploadResult } = e;
        this._onCompleted.fire({
          uri: (t = uploadResult.Uri) != null ? t : "",
          md5: (r = uploadResult.ObjectMeta) == null ? undefined : r.Md5,
        });
      }
    });
    this._sdk.on("error", (e) => {
      var t;
      if (e.key === this._key) {
        this._onError.fire(
          _.xz((t = e.extra.errorCode) != null ? t : -1, e.extra.message),
        );
      }
    });
    this._sdk.on("progress", (e) => {
      if (e.key === this._key) {
        this._onProgress.fire(e.percent);
      }
    });
  }
}
class D extends y.jG {
  cancel() {
    this._sdk.cancel(this._key);
    this._onError.fire(_.xz(v.gn.Cancelled, "upload task cancelled."));
  }
  constructor(e, t) {
    super();
    this._sdk = e;
    this._key = t;
    this._onCompleted = new b.v();
    this._onError = new b.v();
    this._onProgress = new b.v();
    this.onComplete = this._onCompleted.event;
    this.onError = this._onError.event;
    this.onProgress = this._onProgress.event;
    this._sdk.on("complete", (e) => {
      if (e.key === this._key) {
        var t;
        var r;
        var i;
        var s;
        var a;
        var { uploadResult } = e;
        this._onCompleted.fire({
          uri: (t = uploadResult.Uri) != null ? t : "",
          width: (r = uploadResult.ImageWidth) != null ? r : 0,
          height: (i = uploadResult.ImageHeight) != null ? i : 0,
          md5: (s = uploadResult.ImageMd5) != null ? s : "",
          fileName: (a = uploadResult.FileName) != null ? a : "",
        });
      }
    });
    this._sdk.on("error", (e) => {
      var t;
      if (e.key === this._key) {
        this._onError.fire(
          _.xz((t = e.extra.errorCode) != null ? t : -1, e.extra.message),
        );
      }
    });
    this._sdk.on("progress", (e) => {
      if (e.key === this._key) {
        this._onProgress.fire(e.percent);
      }
    });
  }
}
require("XlT");
class N {
  setUserId(e) {
    let t;
    this._config.userId = e;
    if ((t = this._sdk) != null) {
      t.setOption({
        userId: e,
      });
    }
  }
  uploadFile(e, t, r, contentType) {
    return i
      ._(function* () {
        m.X3(e.serviceId, "use imagex must set `serviceId` in uploader.");
        yield this._ensureSdk(e);
        if (r instanceof AbortSignal && r.aborted) {
          return _.xz(
            v.gn.Cancelled,
            "upload cancelled before file task creation.",
          );
        }
        if (!this._sdk) {
          return _.xz(-1, "sdk undefined.");
        }
        let i;
        let a;
        let n;
        let o;
        i = this._sdk;
        a = {
          file: t,
          stsToken: this._convertToken(e),
          cancellationToken: r,
          contentType,
        };
        n = i.addFile({
          file: a.file,
          stsToken: a.stsToken,
          type: "object",
          contentType: a.contentType,
        });
        o = new j(i, n);
        if (!(a.cancellationToken && U(o, a.cancellationToken))) {
          i.start(n);
        }
        const l = o;
        return _.TZ(l);
      })
      .call(this);
  }
  uploadImage(e, t, r) {
    return i
      ._(function* () {
        m.X3(e.serviceId, "use imagex must set `serviceId` in uploader.");
        yield this._ensureSdk(e);
        if (r instanceof AbortSignal && r.aborted) {
          return _.xz(
            v.gn.Cancelled,
            "upload cancelled before image task creation.",
          );
        }
        if (!this._sdk) {
          return _.xz(-1, "sdk undefined.");
        }
        let i;
        let s;
        let a;
        let n;
        i = this._sdk;
        s = {
          file: t,
          stsToken: this._convertToken(e),
          cancellationToken: r,
        };
        a = i.addFile({
          file: s.file,
          stsToken: s.stsToken,
          type: "image",
        });
        n = new D(i, a);
        if (!(s.cancellationToken && U(n, s.cancellationToken))) {
          i.start(a);
        }
        const o = n;
        return _.TZ(o);
      })
      .call(this);
  }
  _ensureSdk(e) {
    return i
      ._(function* () {
        if (!this._sdk) {
          if (!this._mutex.tryLock()) {
            yield this._mutex.lockShared();
            this._mutex.unLockShared();
            return;
          }
          try {
            const t = (yield Promise.all([
              require.e("imy"),
              require.e("t0q"),
            ]).then(require.t.bind(require, "sU", 23))).default;
            const i = o._(
              n._(
                {
                  userId: this._config.userId,
                  appId: this._config.appId,
                  region: e.region,
                  logDomain: undefined,
                  stsToken: this._convertToken(e),
                  imageConfig: {
                    serviceId: e.serviceId,
                    processAction: this._config.actions,
                  },
                  objectConfig: {
                    serviceId: e.serviceId,
                    processAction: this._config.actions,
                  },
                },
                P.L(),
                this._config.imageHost
                  ? {
                      imageHost: this._config.imageHost,
                    }
                  : {},
                this._config.imageFallbackHost
                  ? {
                      imageFallbackHost: this._config.imageFallbackHost,
                    }
                  : {},
              ),
              {
                getSliceFunc: this._config.getSliceFunc,
                preloadCache: this._config.preloadCache,
                cacheUploadedFile: this._config.cacheUploadedFile,
                enableOmitInitUpload: this._config.enableOmitInitUpload,
                enableMergeRequest: this._config.enableMergeRequest,
                crc32WorkerUrl: "".concat(
                  location.origin,
                  "/static-resource/ies/ccweb/scm_storage/sdk/ttp-uploader/uploader-oversea-crc32-0.1.29.js",
                ),
              },
            );
            console.info("[ImageX TTuploader Config]", {
              appId: i.appId,
              serviceId: e.serviceId,
              enableOmitInitUpload: i.enableOmitInitUpload,
              enableMergeRequest: i.enableMergeRequest,
              preloadCache: i.preloadCache,
              cacheUploadedFile: i.cacheUploadedFile,
            });
            this._sdk = new t(i);
          } finally {
            this._mutex.unLock();
          }
        }
      })
      .call(this);
  }
  _convertToken(e) {
    return {
      AccessKeyId: e.accessKeyId,
      SecretAccessKey: e.secretAccessKey,
      SessionToken: e.sessionToken,
      ExpiredTime: e.expiredTime,
      CurrentTime: e.currentTime,
    };
  }
  constructor(e) {
    this._config = e;
    this._mutex = new k.P();
  }
}
function q(e) {
  return new Promise((resolve) => {
    e.onComplete((e) => {
      resolve(_.TZ(e));
    });
    e.onError((e) => {
      resolve(e);
    });
  });
}
class O extends I {
  uploadImage(e) {
    return i
      ._(function* () {
        const t = this._createUploadReportContext(e, "image", "uploadImage");
        const { file, cancellationToken } = e;
        const s = yield this._uploadImageAndGetTask(file, cancellationToken);
        if (s.ok) {
          return q(this._bindUploadReport(s.value, t));
        }
        this._reportUploadResult(t, "fail", s);
        return s;
      })
      .call(this);
  }
  uploadImageAndGetTask(e) {
    return i
      ._(function* () {
        const t = this._createUploadReportContext(
          e,
          "image",
          "uploadImageAndGetTask",
        );
        const { file, cancellationToken } = e;
        const s = yield this._uploadImageAndGetTask(file, cancellationToken);
        if (s.ok) {
          return this._bindUploadReport(s.value, t);
        }
        this._reportUploadResult(t, "fail", s);
        return new x(s);
      })
      .call(this);
  }
  uploadFile(e) {
    return i
      ._(function* () {
        const t = this._createUploadReportContext(e, "file", "uploadFile");
        const { file, cancellationToken, contentType } = e;
        const a = yield this._uploadFileAndGetTask(
          file,
          cancellationToken,
          contentType,
        );
        if (a.ok) {
          return q(this._bindUploadReport(a.value, t));
        }
        this._reportUploadResult(t, "fail", a);
        return a;
      })
      .call(this);
  }
  uploadFileAndGetTask(e) {
    return i
      ._(function* () {
        const t = this._createUploadReportContext(
          e,
          "file",
          "uploadFileAndGetTask",
        );
        const { file, cancellationToken, contentType } = e;
        const a = yield this._uploadFileAndGetTask(
          file,
          cancellationToken,
          contentType,
        );
        if (a.ok) {
          return this._bindUploadReport(a.value, t);
        }
        this._reportUploadResult(t, "fail", a);
        return new x(a);
      })
      .call(this);
  }
  preFlushToken() {
    return this._flushToken();
  }
  _getToken() {
    return this._spaceConfig.getImageXToken();
  }
  _createUploadReportContext(e, uploadMethod, uploadApi) {
    return {
      startTime: Date.now(),
      file: e.file,
      uploadMethod,
      uploadApi,
      reportSource: e.reportSource,
      reportEntryPosition: e.reportEntryPosition,
    };
  }
  _bindUploadReport(e, t) {
    let r = false;
    const i = (e, i) => {
      if (!r) {
        r = true;
        this._reportUploadResult(t, e, i);
      }
    };
    e.onComplete(() => i("success"));
    e.onError((e) => i(this._getUploadFailStatus(e), e));
    return e;
  }
  _reportUploadResult(e, status, r) {
    let i;
    let s;
    if (
      (((s = this._token) == null ? undefined : s.serviceId) ||
        this._spaceConfig.serviceId) === service_id
    ) {
      const source = e.reportSource || "unknown";
      if (!e.reportSource) {
        f.V.warn(
          "[ccagentfilethread_upload] missing reportSource",
          e.uploadApi,
        );
      }
      new C({
        service_id,
        app_id: this._appId,
        source,
        upload_method: e.uploadMethod,
        upload_api: e.uploadApi,
        entry_position: e.reportEntryPosition,
        status,
        duration_ms: Date.now() - e.startTime,
        file_size: e.file.size,
        file_type: e.file.type || "",
        file_ext: this._getFileExtension(e.file.name),
        cache_uploaded_file: +!!this._uploadSettings.cacheUploadedFile,
        err_code: (i = r == null ? undefined : r.code) != null ? i : 0,
        err_msg: this._normalizeErrorMessage(r),
        log_id: this._getErrorLogId(r),
      }).report();
    }
  }
  _getUploadFailStatus(e) {
    if (e.code === v.gn.Cancelled) {
      return "cancel";
    }
    return "fail";
  }
  _normalizeErrorMessage(e) {
    if (!e) {
      return "";
    }
    const t = (e.msg || e.message || "").trim();
    if (t.length > 200) {
      return t.slice(0, 200);
    }
    return t;
  }
  _getErrorLogId(e) {
    let t;
    return (
      (e == null || (t = e.errorInfo) == null ? undefined : t.logId) ||
      (e == null ? undefined : e.logId)
    );
  }
  _getFileExtension(e) {
    const t = e.lastIndexOf(".");
    if (t < 0 || t === e.length - 1) {
      return "";
    }
    return e.slice(t + 1).toLowerCase();
  }
  _getSdkDriver() {
    if (!this._sdkDriver) {
      this._sdkDriver = new N({
        appId: this._appId,
        userId: this._userIdProvider.userId,
        getSliceFunc: this._uploadSettings.sliceSize,
        actions: this._uploadSettings.actions,
        preloadCache: this._uploadSettings.preloadCache,
        cacheUploadedFile: this._uploadSettings.cacheUploadedFile,
        enableOmitInitUpload: this._uploadSettings.enableOmitInitUpload,
        enableMergeRequest: this._uploadSettings.enableMergeRequest,
        imageHost: this._uploadSettings.imageHost,
        imageFallbackHost: this._uploadSettings.imageFallbackHost,
      });
    }
    return this._sdkDriver;
  }
  _uploadImageAndGetTask(e, t) {
    const r = this;
    const s = () => super._flushToken;
    return i
      ._(function* () {
        m.X3(
          1 & this._spaceConfig.permissionSlots,
          "this imagex space no support upload image.",
        );
        yield s().call(r);
        if (t instanceof AbortSignal && t.aborted) {
          return _.xz(
            v.gn.Cancelled,
            "upload cancelled before image task creation.",
          );
        }
        if (this._token) {
          return this._getSdkDriver().uploadImage(this._token, e, t);
        }
        return _.xz(-1, "stsToken undefined.");
      })
      .call(this);
  }
  _uploadFileAndGetTask(e, t, r) {
    const s = this;
    const a = () => super._flushToken;
    return i
      ._(function* () {
        m.X3(
          2 & this._spaceConfig.permissionSlots,
          "this imagex space no support upload file.",
        );
        yield a().call(s);
        if (t instanceof AbortSignal && t.aborted) {
          return _.xz(
            v.gn.Cancelled,
            "upload cancelled before file task creation.",
          );
        }
        if (this._token) {
          return this._getSdkDriver().uploadFile(this._token, e, t, r);
        }
        return _.xz(-1, "stsToken undefined.");
      })
      .call(this);
  }
  constructor(e, t, r, i) {
    super();
    this._appId = e;
    this._spaceConfig = t;
    this._uploadSettings = r;
    this._containerService = i;
    if (this._uploadSettings.userId !== undefined) {
      this._userIdProvider = new M(this._uploadSettings.userId);
    } else {
      this._userIdProvider = this._containerService.createInstance(F);
    }
    this._userIdProvider.onUserIdChange(() => {
      if (this._sdkDriver) {
        this._sdkDriver.setUserId(this._userIdProvider.userId);
      }
    });
  }
}
function G(e) {
  return new Promise((resolve) => {
    e.onComplete((e) => {
      resolve(_.TZ(e));
    });
    e.onError((e) => {
      resolve(e);
    });
  });
}
function L(e, cancellationToken) {
  if (cancellationToken instanceof AbortSignal) {
    if (cancellationToken.aborted) {
      e.cancel();
    } else {
      cancellationToken.addEventListener("abort", () => {
        e.cancel();
      });
    }
  } else {
    cancellationToken.onCancellationRequested(() => {
      e.cancel();
    });
  }
}
O = s.Cg(
  [
    s.Qj(3, a._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      Number,
      typeof IImageXUploaderConfigProxy === "undefined"
        ? Object
        : IImageXUploaderConfigProxy,
      typeof IImageXSettings === "undefined" ? Object : IImageXSettings,
      a._ === undefined ? Object : a._,
    ]),
  ],
  O,
);
class V extends y.jG {
  cancel() {
    this._sdk.cancel(this._key);
    this._onError.fire(_.xz(v.gn.Cancelled, "upload task cancelled."));
  }
  constructor(e, t) {
    super();
    this._sdk = e;
    this._key = t;
    this._onCompleted = new b.v();
    this._onError = new b.v();
    this._onProgress = new b.v();
    this.onComplete = this._onCompleted.event;
    this.onError = this._onError.event;
    this.onProgress = this._onProgress.event;
    this._sdk.on("complete", (e) => {
      if (e.key === this._key) {
        var t;
        var r;
        var { uploadResult } = e;
        this._onCompleted.fire({
          uri: (t = uploadResult.Uri) != null ? t : "",
          md5: (r = uploadResult.ObjectMeta) == null ? undefined : r.Md5,
        });
      }
    });
    this._sdk.on("error", (e) => {
      var t;
      if (e.key === this._key) {
        this._onError.fire(
          _.xz((t = e.extra.errorCode) != null ? t : -1, e.extra.message),
        );
      }
    });
    this._sdk.on("progress", (e) => {
      if (e.key === this._key) {
        this._onProgress.fire(e.percent);
      }
    });
  }
}
class z extends y.jG {
  cancel() {
    this._sdk.cancel(this._key);
    this._onError.fire(_.xz(v.gn.Cancelled, "upload task cancelled."));
  }
  constructor(e, t) {
    super();
    this._sdk = e;
    this._key = t;
    this._onCompleted = new b.v();
    this._onError = new b.v();
    this._onProgress = new b.v();
    this.onComplete = this._onCompleted.event;
    this.onError = this._onError.event;
    this.onProgress = this._onProgress.event;
    this._sdk.on("complete", (e) => {
      if (e.key === this._key) {
        var t;
        var r;
        var i;
        var { uploadResult } = e;
        this._onCompleted.fire({
          uri: (t = uploadResult.Uri) != null ? t : "",
          md5:
            (r = uploadResult.ImageMd5) != null
              ? r
              : (i = uploadResult.ObjectMeta) == null
                ? undefined
                : i.Md5,
        });
      }
    });
    this._sdk.on("error", (e) => {
      var t;
      if (e.key === this._key) {
        this._onError.fire(
          _.xz((t = e.extra.errorCode) != null ? t : -1, e.extra.message),
        );
      }
    });
    this._sdk.on("progress", (e) => {
      if (e.key === this._key) {
        this._onProgress.fire(e.percent);
      }
    });
  }
}
class K extends y.jG {
  cancel() {
    this._sdk.cancel(this._key);
    this._onError.fire(_.xz(v.gn.Cancelled, "upload task cancelled."));
  }
  constructor(e, t) {
    super();
    this._sdk = e;
    this._key = t;
    this._onCompleted = new b.v();
    this._onError = new b.v();
    this._onProgress = new b.v();
    this.onComplete = this._onCompleted.event;
    this.onError = this._onError.event;
    this.onProgress = this._onProgress.event;
    this._sdk.on("complete", (e) => {
      if (e.key === this._key) {
        var t;
        var r;
        var i;
        var s;
        var a;
        var n;
        var o;
        var { uploadResult } = e;
        this._onCompleted.fire({
          vid: (t = uploadResult.Vid) != null ? t : "",
          posterUri: uploadResult.PosterUri,
          duration:
            (r = uploadResult.VideoMeta) == null ? undefined : r.Duration,
          width: (i = uploadResult.VideoMeta) == null ? undefined : i.Width,
          height: (s = uploadResult.VideoMeta) == null ? undefined : s.Height,
          format: (a = uploadResult.VideoMeta) == null ? undefined : a.Format,
          md5: (n = uploadResult.VideoMeta) == null ? undefined : n.Md5,
          uri: (o = uploadResult.VideoMeta) == null ? undefined : o.Uri,
          runId: uploadResult.RunId,
        });
      }
    });
    this._sdk.on("error", (e) => {
      var t;
      if (e.key === this._key) {
        this._onError.fire(
          _.xz((t = e.extra.errorCode) != null ? t : -1, e.extra.message),
        );
      }
    });
    this._sdk.on("progress", (e) => {
      if (e.key === this._key) {
        this._onProgress.fire(e.percent);
      }
    });
  }
}
class B {
  setUserId(e) {
    let t;
    this._config.userId = e;
    if ((t = this._sdk) != null) {
      t.setOption({
        userId: e,
      });
    }
  }
  uploadFile(e, t, r) {
    return i
      ._(function* () {
        m.X3(e.spaceName, "use vod must set `spaceName` in uploader.");
        yield this._ensureSdk(e);
        if (!this._sdk) {
          return _.xz(-1, "sdk undefined.");
        }
        let i;
        let s;
        let a;
        let n;
        i = this._sdk;
        s = {
          file: t,
          stsToken: this._convertToken(e),
          cancellationToken: r,
        };
        a = i.addFile({
          file: s.file,
          stsToken: s.stsToken,
          type: "object",
        });
        i.start(a);
        n = new V(i, a);
        if (s.cancellationToken) {
          L(n, s.cancellationToken);
        }
        const o = n;
        return _.TZ(o);
      })
      .call(this);
  }
  uploadImage(e, t, r) {
    return i
      ._(function* () {
        m.X3(e.spaceName, "use vod must set `spaceName` in uploader.");
        yield this._ensureSdk(e);
        if (!this._sdk) {
          return _.xz(-1, "sdk undefined.");
        }
        let i;
        let s;
        let a;
        let n;
        i = this._sdk;
        s = {
          file: t,
          stsToken: this._convertToken(e),
          cancellationToken: r,
        };
        a = i.addFile({
          file: s.file,
          stsToken: s.stsToken,
          type: "image",
          serviceType: "vod",
        });
        i.start(a);
        n = new z(i, a);
        if (s.cancellationToken) {
          L(n, s.cancellationToken);
        }
        const o = n;
        return _.TZ(o);
      })
      .call(this);
  }
  uploadVideo(e, t, r) {
    return i
      ._(function* () {
        m.X3(e.spaceName, "use vod must set `spaceName` in uploader.");
        yield this._ensureSdk(e);
        if (!this._sdk) {
          return _.xz(-1, "sdk undefined.");
        }
        let i;
        let s;
        let a;
        let n;
        i = this._sdk;
        s = {
          file: t,
          stsToken: this._convertToken(e),
          cancellationToken: r,
        };
        a = i.addFile({
          file: s.file,
          stsToken: s.stsToken,
          type: "video",
        });
        i.start(a);
        n = new K(i, a);
        if (s.cancellationToken) {
          L(n, s.cancellationToken);
        }
        const o = n;
        return _.TZ(o);
      })
      .call(this);
  }
  _ensureSdk(e) {
    return i
      ._(function* () {
        if (!this._sdk) {
          if (!this._mutex.tryLock()) {
            yield this._mutex.lockShared();
            this._mutex.unLockShared();
            return;
          }
          try {
            let t;
            let i;
            i = (yield Promise.all([require.e("imy"), require.e("t0q")]).then(
              require.t.bind(require, "sU", 23),
            )).default;
            this._sdk = new i(
              o._(
                n._(
                  {
                    userId: this._config.userId,
                    appId: this._config.appId,
                    region: e.region,
                    stsToken: this._convertToken(e),
                    logDomain: undefined,
                    videoConfig: {
                      spaceName: e.spaceName,
                      processAction: this._config.actions,
                    },
                    objectConfig: {
                      spaceName: e.spaceName,
                      processAction: this._config.actions,
                    },
                  },
                  P.L(),
                  (t = this._overlayHost) != null ? t : {},
                ),
                {
                  getSliceFunc: this._config.getSliceFunc,
                  crc32WorkerUrl: "".concat(
                    location.origin,
                    "/static-resource/ies/ccweb/scm_storage/sdk/ttp-uploader/uploader-oversea-crc32-0.1.29.js",
                  ),
                },
              ),
            );
          } finally {
            this._mutex.unLock();
          }
        }
      })
      .call(this);
  }
  _convertToken(e) {
    return {
      AccessKeyId: e.accessKeyId,
      SecretAccessKey: e.secretAccessKey,
      SessionToken: e.sessionToken,
      ExpiredTime: e.expiredTime,
      CurrentTime: e.currentTime,
    };
  }
  constructor(e, t) {
    this._config = e;
    this._overlayHost = t;
    this._mutex = new k.P();
  }
}
class H extends I {
  preFlushToken() {
    return this._flushToken();
  }
  uploadVideo(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadVideoAndGetTask(file, cancellationToken);
        if (i.ok) {
          return G(i.value);
        }
        return i;
      })
      .call(this);
  }
  uploadVideoAndGetTask(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadVideoAndGetTask(file, cancellationToken);
        if (i.ok) {
          return i.value;
        }
        return new x(i);
      })
      .call(this);
  }
  uploadFile(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadFileAndGetTask(file, cancellationToken);
        if (i.ok) {
          return G(i.value);
        }
        return i;
      })
      .call(this);
  }
  uploadFileAndGetTask(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadFileAndGetTask(file, cancellationToken);
        if (i.ok) {
          return i.value;
        }
        return new x(i);
      })
      .call(this);
  }
  uploadImage(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadImageAndGetTask(file, cancellationToken);
        if (i.ok) {
          return G(i.value);
        }
        return i;
      })
      .call(this);
  }
  uploadImageAndGetTask(e) {
    return i
      ._(function* () {
        const { file, cancellationToken } = e;
        const i = yield this._uploadImageAndGetTask(file, cancellationToken);
        if (i.ok) {
          return i.value;
        }
        return new x(i);
      })
      .call(this);
  }
  _getToken() {
    return this._spaceConfig.getVodToken();
  }
  _getSdkDriver() {
    if (!(this._sdkDriver || this._sdkDriver)) {
      this._sdkDriver = new B(
        {
          appId: this._appId,
          userId: this._userIdProvider.userId,
          getSliceFunc: this._uploadSettings.sliceSize,
          actions: this._uploadSettings.actions,
        },
        this._spaceConfig.host,
      );
    }
    return this._sdkDriver;
  }
  _uploadVideoAndGetTask(e, t) {
    const r = this;
    const s = () => super._flushToken;
    return i
      ._(function* () {
        m.X3(
          1 & this._spaceConfig.permissionSlots,
          "this vod space no support upload video.",
        );
        yield s().call(r);
        if (this._token) {
          return this._getSdkDriver().uploadVideo(this._token, e, t);
        }
        return _.xz(-1, "stsToken undefined.");
      })
      .call(this);
  }
  _uploadFileAndGetTask(e, t) {
    const r = this;
    const s = () => super._flushToken;
    return i
      ._(function* () {
        m.X3(
          2 & this._spaceConfig.permissionSlots,
          "this vod space no support upload file.",
        );
        yield s().call(r);
        if (this._token) {
          return this._getSdkDriver().uploadFile(this._token, e, t);
        }
        return _.xz(-1, "stsToken undefined.");
      })
      .call(this);
  }
  _uploadImageAndGetTask(e, t) {
    const r = this;
    const s = () => super._flushToken;
    return i
      ._(function* () {
        m.X3(
          2 & this._spaceConfig.permissionSlots,
          "this vod space no support upload image.",
        );
        yield s().call(r);
        if (this._token) {
          return this._getSdkDriver().uploadImage(this._token, e, t);
        }
        return _.xz(-1, "stsToken undefined.");
      })
      .call(this);
  }
  constructor(e, t, r, i) {
    super();
    this._appId = e;
    this._spaceConfig = t;
    this._uploadSettings = r;
    this._containerService = i;
    if (this._uploadSettings.userId !== undefined) {
      this._userIdProvider = new M(this._uploadSettings.userId);
    } else {
      this._userIdProvider = this._containerService.createInstance(F);
    }
    this._userIdProvider.onUserIdChange(() => {
      if (this._sdkDriver) {
        this._sdkDriver.setUserId(this._userIdProvider.userId);
      }
    });
  }
}
function Q(e, t) {
  let r;
  let i;
  let s;
  let a;
  let n;
  let o;
  let l;
  return "".concat(e, "-").concat(
    JSON.stringify({
      actions: (r = t.actions) != null ? r : "",
      preloadCache: (i = t.preloadCache) != null && i,
      cacheUploadedFile: (s = t.cacheUploadedFile) != null && s,
      enableOmitInitUpload: (a = t.enableOmitInitUpload) != null && a,
      enableMergeRequest: (n = t.enableMergeRequest) != null && n,
      imageHost: (o = t.imageHost) != null ? o : "",
      imageFallbackHost: (l = t.imageFallbackHost) != null ? l : "",
    }),
  );
}
H = s.Cg(
  [
    s.Qj(3, a._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      Number,
      typeof IVodUploaderConfigProxy === "undefined"
        ? Object
        : IVodUploaderConfigProxy,
      typeof IVodSettings === "undefined" ? Object : IVodSettings,
      a._ === undefined ? Object : a._,
    ]),
  ],
  H,
);
class X {
  preloadImageXSdk() {
    return this._preloadBytedUploaderSdk();
  }
  preloadVodSdk() {
    return this._preloadBytedUploaderSdk();
  }
  getImageXUploader(e, t) {
    const r =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const i = this._getUploaderCache(Q(e, r), t);
    if (i) {
      return i;
    }
    const s = this._containerService.createInstance(t);
    const a = this._containerService.createInstance(O, e, s, r);
    this._setUploaderCache(Q(e, r), t, a);
    return a;
  }
  getVodUploader(e, t) {
    const r =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const i = this._getUploaderCache(Q(e, r), t);
    if (i) {
      return i;
    }
    const s = this._containerService.createInstance(t);
    const a = this._containerService.createInstance(H, e, s, r);
    this._setUploaderCache(Q(e, r), t, a);
    return a;
  }
  syncUrlToEverSpace(e) {
    return this._getSyncEverPhotoRepository().syncUrlToEverPhoto(e);
  }
  _getSyncEverPhotoRepository() {
    if (!this._syncEverPhotoRepository) {
      this._syncEverPhotoRepository = this._containerService.createInstance(g);
    }
    return this._syncEverPhotoRepository;
  }
  _getUploaderCache(e, t) {
    if (this._caches.has(e)) {
      return this._caches.get(e).get(t);
    }
  }
  _setUploaderCache(e, t, r) {
    if (!this._caches.has(e)) {
      this._caches.set(e, new Map());
    }
    this._caches.get(e).set(t, r);
  }
  _preloadBytedUploaderSdk() {
    return i
      ._(function* () {
        if (!this._hasPreloadBytedUploaderSdk) {
          this._hasPreloadBytedUploaderSdk = true;
          yield Promise.all([require.e("imy"), require.e("t0q")]).then(
            require.t.bind(require, "sU", 23),
          );
        }
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._hasPreloadBytedUploaderSdk = false;
    this._caches = new Map();
  }
}
export { X as B };
X = s.Cg(
  [
    s.Qj(0, a._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  X,
);
