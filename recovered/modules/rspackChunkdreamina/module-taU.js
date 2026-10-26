import a from "NY";
import r from "oa";
import i from "bk";
import o from "cO";
import l from "lY8";
import s from "Ky";
const c = "graphic-image-cache";
const u = new l.qK({
  _capacity: 1000,
  _cacheKey: s.Al,
});
const d = new l.qK({
  _capacity: 1000,
  _cacheKey: "".concat(s.Al, "_bitmap"),
});
const m = new Map();
function p(e) {
  if (e.trim() && !(e.length > 2097152)) {
    try {
      let t;
      const n = new URL(
        e,
        (t = globalThis.location) == null ? undefined : t.href,
      );
      if (
        (n.protocol !== "http:" && n.protocol !== "https:") ||
        n.href.length > 2097152
      ) {
        return;
      }
      try {
        return e.split("?")[0];
      } catch (t) {
        return e;
      }
    } catch (e) {
      return;
    }
  }
}
const v = new (class {
  get(e) {
    return a._(function* () {
      const t = {};
      const n = u.get(e);
      if (n) {
        t.promise = n.promise;
        t.node = n.node;
        return t;
      }
      const a = p(e);
      if (a === undefined) {
        return t;
      }
      try {
        const r = yield caches.open(c);
        const i = yield r.match(a);
        if (i && i.ok) {
          const o = i.headers.get("date");
          if (o) {
            const l = new Date(o).getTime();
            if (Date.now() > l + 604800000) {
              yield r.delete(a);
              m.delete(a);
              return t;
            }
          }
          t.blob = yield i.blob();
        }
      } catch (e) {}
      return t;
    })();
  }
  set(e, t) {
    return a
      ._(function* () {
        if (t.promise) {
          u.set(e, {
            promise: t.promise,
            node: t.node,
          });
        }
        if (t.blob) {
          const n = p(e);
          if (n !== undefined) {
            try {
              const a = yield caches.open(c);
              const r = new Headers();
              const i = new Date().toUTCString();
              r.append("date", i);
              const o = new Response(t.blob, {
                headers: r,
              });
              yield a.put(n, o);
              const l = Date.now() + 604800000;
              m.set(n, {
                timestamp: l,
              });
              this.cleanCacheStorage();
            } catch (e) {}
          }
        }
      })
      .call(this);
  }
  remove(e) {
    return a._(function* () {
      u.remove(e);
      const t = p(e);
      if (t !== undefined) {
        try {
          const n = yield caches.open(c);
          yield n.delete(t);
          m.delete(t);
        } catch (e) {}
      }
    })();
  }
  cleanCacheStorage() {
    return a._(function* () {
      try {
        const e = yield caches.open(c);
        const t = yield e.keys();
        if (t.length > 1000) {
          const n = t.length - 1000;
          for (const a of t.slice(0, n)) {
            yield e.delete(a);
            m.delete(a.url);
          }
        }
        const r = Date.now();
        for (const i of t) {
          const o = yield e.match(i);
          if (o) {
            const l = o.headers.get("date");
            if (l) {
              const s = new Date(l).getTime() + 604800000;
              if (r > s) {
                yield e.delete(i);
                m.delete(i.url);
              }
            }
          }
        }
      } catch (e) {}
    })();
  }
  getBitmap(e) {
    return a._(function* () {
      const t = {};
      const n = d.get(e);
      if (n) {
        t.promise = n.promise;
        t.bitmap = n.bitmap;
        return t;
      }
      const a = p(e);
      if (a === undefined) {
        return t;
      }
      try {
        const r = yield caches.open(c);
        const i = yield r.match(a);
        if (i && i.ok) {
          const o = i.headers.get("date");
          if (o) {
            const l = new Date(o).getTime();
            if (Date.now() > l + 604800000) {
              yield r.delete(a);
              m.delete(a);
              return t;
            }
          }
          t.blob = yield i.blob();
        }
      } catch (e) {}
      return t;
    })();
  }
  setBitmap(e, t) {
    return a
      ._(function* () {
        if (t.promise) {
          d.set(e, {
            promise: t.promise,
            bitmap: t.bitmap,
          });
        }
        if (t.blob) {
          const n = p(e);
          if (n !== undefined) {
            try {
              const a = yield caches.open(c);
              const r = new Headers();
              const i = new Date().toUTCString();
              r.append("date", i);
              const o = new Response(t.blob, {
                headers: r,
              });
              yield a.put(n, o);
              const l = Date.now() + 604800000;
              m.set(n, {
                timestamp: l,
              });
              this.cleanCacheStorage();
            } catch (e) {}
          }
        }
      })
      .call(this);
  }
  removeBitmap(e) {
    d.remove(e);
  }
  isHitMemoryCache(e) {
    let t;
    return !!((t = u.get(e)) == null ? undefined : t.node);
  }
  isHitBitmapMemoryCache(e) {
    let t;
    return !!((t = d.get(e)) == null ? undefined : t.bitmap);
  }
  isHitCacheStorage(e) {
    const t = p(e);
    if (t === undefined) {
      return false;
    }
    const n = m.get(t);
    return !!n && (!(Date.now() > n.timestamp) || (m.delete(t), false));
  }
  checkCacheStorageDirectly(e) {
    return a._(function* () {
      const t = p(e);
      if (t === undefined) {
        return false;
      }
      try {
        const n = yield caches.open(c);
        const a = yield n.match(t);
        if (a && a.ok) {
          const r = a.headers.get("date");
          if (r) {
            const i = new Date(r).getTime();
            const o = Date.now();
            const l = i + 604800000;
            if (o > l) {
              yield n.delete(t);
              m.delete(t);
              return false;
            }
            m.set(t, {
              timestamp: l,
            });
          }
          return true;
        }
      } catch (e) {}
      return false;
    })();
  }
})();
const h = new WeakMap();
const g = (e, t) => {
  var {
    originalUrl,
    currentSrc,
    blobSize,
    contentLength = 0,
    cacheHit,
    cacheSource,
  } = t;
  h.set(e, {
    originalUrl,
    currentSrc,
    blobSize,
    contentLength,
    cacheHit,
    cacheSource,
  });
};
const f = (e) => {
  var {
    report,
    url,
    success,
    errorCode,
    error,
    startTime,
    retriesLeft,
    maxRetry,
    logId = "",
    traceId = "",
  } = e;
  if (report != null) {
    report({
      action: "image_load",
      success,
      url,
      errorCode,
      error,
      logId,
      traceId,
      cost: performance.now() - startTime,
      retry: maxRetry - retriesLeft,
    });
  }
};
const b = () => {
  var e = new Image();
  e.crossOrigin = "anonymous";
  e.fetchPriority = "high";
  return e;
};
export var yt = (e, t) =>
  a._(function* () {
    const { retry = 3, report, needRevoke = true } = t || {};
    if (!e) {
      return Promise.resolve(null);
    }
    const c = yield v.get(e);
    if (c.promise) {
      return c.promise.then((e) => {
        var t = ((e) => {
          if (e) {
            return h.get(e);
          }
        })(e);
        if (e && t) {
          g(
            e,
            i._(r._({}, t), {
              cacheHit: true,
              cacheSource: "memory",
            }),
          );
        }
        return e;
      });
    }
    if (c.blob) {
      const u = URL.createObjectURL(c.blob);
      var d = new Promise((resolve) => {
        var n = b();
        n.onload = () => {
          var a;
          var r;
          g(n, {
            originalUrl: e,
            currentSrc: u,
            blobSize:
              (a = (r = c.blob) == null ? undefined : r.size) != null ? a : 0,
            contentLength: 0,
            cacheHit: true,
            cacheSource: "storage",
          });
          if (needRevoke) {
            URL.revokeObjectURL(u);
          }
          resolve(n);
          v.set(e, {
            promise: d,
            node: n,
          });
        };
        n.onerror = () => {
          URL.revokeObjectURL(u);
          v.remove(e);
          resolve(null);
        };
        n.src = o.m(u, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: true,
          bid: "cc_dreamina",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: false,
          escapeRule: "escape-report",
          reportUrl:
            "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
          htmlparserOptions: "{}",
          scmBranch: "-",
          scmName: "-",
          scmVersion: "-",
          webpackPluginVersion: "3.6.0",
          filename:
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hb%l5T$hSa%1q%jBaRmhT-0dKS$R-WmpNMHBx$ERKc2R*bFhaR3hNTW5oMldWZFJk$1JJ$*1oamJX%XhZM2M5%FE9PQ",
        });
      });
      v.set(e, {
        promise: d,
      });
      return d;
    }
    var m = new Promise((resolve) => {
      if (report != null) {
        report({
          action: "image_start_load",
          url: e,
        });
      }
      var r = (retriesLeft) =>
        a._(function* () {
          const startTime = performance.now();
          try {
            const { blob, logId, traceId, contentLength } = yield ((e) => {
              var { url, report, startTime, retriesLeft, maxRetry } = e;
              return a._(function* () {
                let e;
                let a;
                const l = yield fetch(url);
                const logId_1 =
                  (e = l.headers.get("x-tt-logid")) != null ? e : "";
                const traceId_1 =
                  (a = l.headers.get("x-tt-trace-id")) != null ? a : "";
                if (!l.ok) {
                  f({
                    report,
                    url,
                    success: false,
                    errorCode: 10002,
                    error: "Failed to fetch image: "
                      .concat(l.status, " ")
                      .concat(l.statusText),
                    logId: logId_1,
                    traceId: traceId_1,
                    startTime,
                    retriesLeft,
                    maxRetry,
                  });
                  throw Error(
                    "Network response was not ok: ".concat(l.statusText),
                  );
                }
                if (l.status === 206) {
                  f({
                    report,
                    url,
                    success: false,
                    errorCode: 10003,
                    error: "Partial content received",
                    logId: logId_1,
                    traceId: traceId_1,
                    startTime,
                    retriesLeft,
                    maxRetry,
                  });
                  throw Error("Partial content received");
                }
                const blob_1 = yield l.blob();
                const d = l.headers.get("content-length");
                if (d && parseInt(d, 10) !== blob_1.size) {
                  f({
                    report,
                    url,
                    success: false,
                    errorCode: 10004,
                    error: "Incomplete image data: expected "
                      .concat(d, " bytes, got ")
                      .concat(blob_1.size, " bytes"),
                    logId: logId_1,
                    traceId: traceId_1,
                    startTime,
                    retriesLeft,
                    maxRetry,
                  });
                  throw Error("Content length mismatch");
                }
                return {
                  blob: blob_1,
                  logId: logId_1,
                  traceId: traceId_1,
                  contentLength: d ? parseInt(d, 10) : 0,
                };
              })();
            })({
              url: e,
              report,
              startTime,
              retriesLeft,
              maxRetry: retry,
            });
            const _ = URL.createObjectURL(blob);
            const y = b();
            y.onload = () => {
              g(y, {
                originalUrl: e,
                currentSrc: _,
                blobSize: blob.size,
                contentLength,
                cacheHit: false,
                cacheSource: "network",
              });
              if (needRevoke) {
                URL.revokeObjectURL(_);
              }
              resolve(y);
              v.set(e, {
                promise: m,
                node: y,
                blob,
              });
              f({
                report,
                url: e,
                success: true,
                errorCode: 0,
                error: "",
                logId,
                traceId,
                startTime,
                retriesLeft,
                maxRetry: retry,
              });
            };
            y.onerror = () => {
              URL.revokeObjectURL(_);
              v.remove(e);
              resolve(null);
              f({
                report,
                url: e,
                success: false,
                errorCode: 10005,
                error: "Image element onerror",
                startTime,
                retriesLeft,
                maxRetry: retry,
              });
            };
            y.src = o.m(_, null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: true,
              bid: "cc_dreamina",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: false,
              escapeRule: "escape-report",
              reportUrl:
                "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
              htmlparserOptions: "{}",
              scmBranch: "-",
              scmName: "-",
              scmVersion: "-",
              webpackPluginVersion: "3.6.0",
              filename:
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hb%l5T$hSa%1q%jBaRmhT-0dKS$R-WmpNMHBx$ERKc2R*bFhaR3hNTW5oMldWZFJk$1JJ$*1oamJX%XhZM2M5%FE9PQ",
            });
          } catch (a) {
            if (retriesLeft > 0) {
              r(retriesLeft - 1);
            } else {
              v.remove(e);
              resolve(null);
              f({
                report,
                url: e,
                success: false,
                errorCode: 10006,
                error: "Retry failed",
                startTime,
                retriesLeft: retry,
                maxRetry: retry,
              });
            }
          }
        })();
      r(retry || 3);
    });
    v.set(e, {
      promise: m,
    });
    return m;
  })();
