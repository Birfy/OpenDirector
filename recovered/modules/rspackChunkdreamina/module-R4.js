import r from "NY";
import s from "QWK";
import i from "K8";
import n from "b5";
import d from "ar";
import o from "xi";
import { J } from "./module-E6f.js";
import { n as n_1 } from "./module-Lj.js";
import c from "lUQ";
import h from "UkV";
import p from "TSSB";
import m from "Kt";
import { A } from "./module-XV.js";
import _ from "EQ";
import { b } from "./module-bzD.js";
import g from "R3";
class y {
  getItem(e) {
    return this._lruIns.get(e);
  }
  setItem(e, t) {
    this._lruIns.put(e, t);
    this._allKeys.add(e);
    const a = this._lruToJson();
    this._storage.setJson(this._storageKey, a);
  }
  _restoreFromStorage() {
    const e = this._storage.getJson(this._storageKey);
    if (e) {
      Object.entries(e).forEach((e) => {
        var [t, a] = e;
        this._allKeys.add(t);
        this._lruIns.put(t, a);
      });
    }
  }
  _lruToJson() {
    const e = {};
    for (const t of this._allKeys) {
      const a = this._lruIns.get(t);
      if (a) {
        e[t] = a;
      }
    }
    return e;
  }
  constructor(e, t = 50) {
    this._storageKey = e;
    this.capacity = t;
    this._allKeys = new Set();
    this._lruIns = new g.q(t);
    this._storage = b;
    this._restoreFromStorage();
  }
}
export class U {
  getImageXUploader(e) {
    return this._uploadService.getImageXUploader(
      this._environmentService.appId,
      J,
      e,
    );
  }
  getVodUploader(e) {
    return this._uploadService.getVodUploader(
      this._environmentService.appId,
      n_1,
      e,
    );
  }
  uploadImage(e, t) {
    return r
      ._(function* () {
        const a = this.getImageXUploader();
        const s = yield this._upload({
          type: "image",
          options: e,
          execute: (e, t) =>
            r
              ._(function* () {
                if (!t) {
                  return a.uploadImage(e);
                }
                const r = yield a.uploadImageAndGetTask(e);
                return this._resolveUploadTask(r, t);
              })
              .call(this),
          skipCache: t == null ? undefined : t.skipCache,
          onProgress: t == null ? undefined : t.onProgress,
        });
        if (s.ok) {
          this._submitImageAudit(s.value.uri);
        }
        return s;
      })
      .call(this);
  }
  uploadVideo(e, t) {
    const a = this.getVodUploader(t == null ? undefined : t.uploaderSettings);
    return this._upload({
      type: "video",
      options: e,
      execute: (e, t) =>
        r
          ._(function* () {
            if (!t) {
              return a.uploadVideo(e);
            }
            const r = yield a.uploadVideoAndGetTask(e);
            return this._resolveUploadTask(r, t);
          })
          .call(this),
      skipCache: t == null ? undefined : t.skipCache,
      onProgress: t == null ? undefined : t.onProgress,
    });
  }
  uploadFile(e, t) {
    const a = this.getFileUploader();
    return this._upload({
      type: "file",
      options: e,
      execute: (e) => a.uploadFile(e),
      skipCache: t == null ? undefined : t.skipCache,
    });
  }
  getFileUploader(e) {
    return this._uploadService.getImageXUploader(
      this._environmentService.appId,
      c.Q,
      e,
    );
  }
  _upload(e) {
    const { type, options, execute, skipCache, onProgress } = e;
    const { file, cancellationToken } = options;
    if (!skipCache) {
      const h = this._uploadingPromises.get(file);
      if (h && h.type === type) {
        return this._wrapPromiseWithCancellation(h.promise, cancellationToken);
      }
    }
    const promise = r
      ._(function* () {
        const startTime = Date.now();
        try {
          if (!skipCache) {
            var r;
            var c;
            const h = yield this._tryGetUploadCache({
              type,
              options,
            });
            if (h.ok) {
              if (h.value.cache) {
                this._reportPerfResourceUploadSuccess({
                  type,
                  file,
                  isHitCache: "1",
                  startTime,
                });
                if (onProgress != null) {
                  onProgress(100);
                }
                return i.TZ(h.value.cache);
              }
              r = h.value.md5;
            }
          }
          const p = yield execute(options, onProgress);
          if (!p.ok) {
            this._reportPerfResourceUploadFailed({
              type,
              startTime,
              file,
              failCode: String(p.code),
              failReason: p.msg,
            });
            return p;
          }
          this._reportPerfResourceUploadSuccess({
            type,
            startTime,
            file,
            isHitCache: "0",
          });
          c =
            type === "image"
              ? {
                  type: "image",
                  data: p.value,
                }
              : type === "file"
                ? {
                    type: "file",
                    data: p.value,
                  }
                : {
                    type: "video",
                    data: p.value,
                  };
          if (r) {
            this._lruCache.setItem(r, c);
          }
          return p;
        } catch (error) {
          o.V.error("".concat(type, " upload failed:"), error);
          const m = n.r(error);
          this._reportPerfResourceUploadFailed({
            type,
            startTime,
            file,
            failCode: String(m.code),
            failReason: m.msg,
          });
          return i.xz(
            "UPLOAD_".concat(type.toUpperCase(), "_FAILED_IN_CACHE_SERVICE"),
            "[upload-"
              .concat(type, "-with-cache-error]: ")
              .concat(error instanceof Error ? error.message : String(error)),
          );
        }
      })
      .call(this);
    this._uploadingPromises.set(file, {
      type,
      promise,
    });
    promise.finally(() => {
      this._uploadingPromises.delete(file);
    });
    return this._wrapPromiseWithCancellation(promise, cancellationToken);
  }
  _resolveUploadTask(e, t) {
    e.onProgress(t);
    return new Promise((resolve) => {
      e.onComplete((e) => resolve(i.TZ(e)));
      e.onError(resolve);
    });
  }
  _tryGetUploadCache(e) {
    return r
      ._(function* (e) {
        const { type, options } = e;
        try {
          const { file } = options;
          const s = yield this._lazyFileMd5CalcService.getInstance();
          const n = yield s.calcFileMd5(file);
          if (!n.ok) {
            o.V.warn(
              "[upload-".concat(
                type,
                "-with-cache-warning]:MD5 calculation failed:",
              ),
              n.msg,
            );
            return n;
          }
          const md5 = n.value;
          const u = this._lruCache.getItem(md5);
          if (u && u.type === type) {
            return i.TZ({
              md5,
              cache: u.data,
            });
          }
          return i.TZ({
            md5,
            cache: undefined,
          });
        } catch (error) {
          o.V.warn(
            "[upload-".concat(
              type,
              "-with-cache-warning]:MD5 calculation failed:",
            ),
            error == null ? undefined : error.message,
          );
          return i.xz(
            -1,
            "[upload-with-cache-service]: try get upload cache failure: ".concat(
              error == null ? undefined : error.message,
            ),
          );
        }
      })
      .apply(this, arguments);
  }
  _wrapPromiseWithCancellation(e, t) {
    if (t) {
      return new Promise((resolve, reject) => {
        var s;
        var n = false;
        var d = () => {
          if (s) {
            s();
            s = undefined;
          }
        };
        var o = () => {
          if (!n) {
            n = true;
            d();
            resolve(i.xz(-1, "Upload cancelled by this specific caller."));
          }
        };
        if ("aborted" in t) {
          if (t.aborted) {
            return void o();
          }
          var u = () => o();
          t.addEventListener("abort", u, {
            once: true,
          });
          s = () => t.removeEventListener("abort", u);
        } else {
          if (t.isCancellationRequested) {
            return void o();
          }
          var l = t.onCancellationRequested(o);
          s = () => {
            if (l == null) {
              return undefined;
            }
            return l.dispose();
          };
        }
        e.then(
          (e) => {
            if (!n) {
              n = true;
              d();
              resolve(e);
            }
          },
          (e) => {
            if (!n) {
              n = true;
              d();
              reject(e);
            }
          },
        );
      });
    }
    return e;
  }
  _reportPerfResourceUploadSuccess(e) {
    const { type, file, startTime, isHitCache } = e;
    this._containerService
      .createInstance(A, {
        category: type,
        size: file.size,
        type: file.type,
        status: "success",
        isHitCache,
        costTime: Date.now() - startTime,
      })
      .report("dev");
  }
  _reportPerfResourceUploadFailed(e) {
    const { type, file, startTime, failCode, failReason } = e;
    this._containerService
      .createInstance(A, {
        category: type,
        size: file.size,
        type: file.type,
        status: "fail",
        failCode,
        failReason,
        costTime: Date.now() - startTime,
        isHitCache: "0",
      })
      .report("dev");
  }
  _submitImageAudit(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._imageAuditDataService.submitAuditJob({
            uri_list: [e],
          });
          if (t.ok) {
            o.V.info("Image audit submitted successfully for uri:", e);
          } else {
            o.V.warn("Image audit submission failed:", t.msg);
          }
        } catch (error) {
          o.V.error("Image audit submission error:", error);
        }
      })
      .call(this);
  }
  constructor(e, t, a, r, s) {
    this._lazyFileMd5CalcService = e;
    this._uploadService = t;
    this._environmentService = a;
    this._containerService = r;
    this._imageAuditDataService = s;
    this._lruCache = new y("upload-service-cache", 20);
    this._uploadingPromises = new Map();
  }
}
U = s.Cg(
  [
    s.Qj(0, h.s),
    s.Qj(1, p.W),
    s.Qj(2, d.k),
    s.Qj(3, m._),
    s.Qj(4, _.z),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      h.s === undefined ? Object : h.s,
      p.W === undefined ? Object : p.W,
      d.k === undefined ? Object : d.k,
      m._ === undefined ? Object : m._,
      _.z === undefined ? Object : _.z,
    ]),
  ],
  U,
);
