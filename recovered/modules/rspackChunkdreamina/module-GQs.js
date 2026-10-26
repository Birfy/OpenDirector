import { P4, Rx, j6, n8, uk, xs } from "./module-Yx.js";
import { TA, sJ } from "./module-of2.js";
import { V } from "./module-Pst.js";
import { $f, Kx, _f } from "./module-hxD.js";
const i = (() => {
  function e() {
    xs(this, e);
  }
  return j6(e, null, [
    {
      key: "start",
      value: function (e) {
        if (
          !e ||
          !e.length ||
          (e.length === 1 && e.end(0) - e.start(0) < 0.000001) ||
          (e.length === 1 && e.start(0) < 0)
        ) {
          return 0;
        }
        return e.start(0);
      },
    },
    {
      key: "end",
      value: function (e) {
        if (
          !e ||
          !e.length ||
          (e.length === 1 && e.end(0) - e.start(0) < 0.000001)
        ) {
          return 0;
        }
        return e.end(e.length - 1);
      },
    },
    {
      key: "get",
      value: function (e) {
        if (e) {
          try {
            return e.buffered;
          } catch (e) {}
        }
      },
    },
    {
      key: "buffers",
      value: function (e, t) {
        if (!e || !e.length) {
          return [];
        }
        const r = [];
        for (let n = 0, i = e.length; n < i; n++) {
          const a = r.length;
          if (a && t) {
            const s = r[a - 1];
            const o = s[1];
            if (e.start(n) - o <= t) {
              const u = e.end(n);
              if (u > o) {
                s[1] = u;
              }
            } else {
              r.push([e.start(n), e.end(n)]);
            }
          } else {
            r.push([e.start(n), e.end(n)]);
          }
        }
        return r;
      },
    },
    {
      key: "totalLength",
      value: function (e) {
        if (e && e.length) {
          return e.reduce((acc, item) => acc + (item[1] - item[0]), 0);
        }
        return 0;
      },
    },
    {
      key: "info",
      value: function (t) {
        const currentTime =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        const n =
          arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        if (!t || !t.length) {
          return {
            start: 0,
            end: 0,
            buffers: [],
          };
        }
        let start = 0;
        let end = 0;
        let index = 0;
        let nextStart = 0;
        let nextEnd = 0;
        let prevStart = 0;
        let prevEnd = 0;
        const buffers = e.buffers(t, n);
        for (let d = 0, h = buffers.length; d < h; d++) {
          const buffer = buffers[d];
          if (currentTime + n >= buffer[0] && currentTime <= buffer[1]) {
            start = buffer[0];
            end = buffer[1];
            index = d;
          } else if (currentTime + n < buffer[0]) {
            nextStart = buffer[0];
            nextEnd = buffer[1];
            break;
          } else {
            if (currentTime + n > buffer[1]) {
              prevStart = buffer[0];
              prevEnd = buffer[1];
            }
          }
        }
        return {
          start,
          end,
          index,
          buffers,
          nextStart,
          nextEnd,
          prevStart,
          prevEnd,
          currentTime,
          behind: currentTime - start,
          remaining: end ? end - currentTime : 0,
          length: e.totalLength && e.totalLength(buffers),
        };
      },
    },
    {
      key: "isBuffered",
      value: function (t, r) {
        if (t) {
          const n = e.get(t);
          if (n != null && n.length) {
            for (let i = 0; i < n.length; i++) {
              if (r >= n.start(i) && r <= n.end(i)) {
                return true;
              }
            }
          }
        }
        return false;
      },
    },
  ]);
})();
function u() {
  const e =
    !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
  try {
    if (e && typeof ManagedMediaSource !== "undefined") {
      return ManagedMediaSource;
    }
    if (typeof MediaSource !== "undefined") {
      return MediaSource;
    }
    throw Error("MediaSource no defined");
  } catch (e) {}
}
function l(e) {
  return /ManagedMediaSource/gi.test(Object.prototype.toString.call(e));
}
const c = "updateDuration";
export var Ub = (() => {
  let e;
  let t;
  let r;
  let f;
  function d(e, t) {
    const r = this;
    xs(this, d);
    n8(this, "media", null);
    n8(this, "mediaSource", null);
    n8(this, "_openPromise", $f());
    n8(this, "_queue", Object.create(null));
    n8(this, "_sourceBuffer", Object.create(null));
    n8(this, "_mseFullFlag", {});
    n8(this, "_st", 0);
    n8(this, "_opst", 0);
    n8(this, "_logger", null);
    n8(this, "_config", null);
    n8(this, "_url", null);
    n8(this, "_onStartStreaming", function () {
      r._logger.debug("startstreaming");
    });
    n8(this, "_onEndStreaming", function () {
      r._logger.debug("endstreaming");
    });
    n8(this, "_onSBUpdateEnd", function (e) {
      const t = r._queue[e];
      if (t) {
        const n = t[0];
        if ((n == null ? undefined : n.opName) !== c) {
          t.shift();
        }
        if (n) {
          let i;
          let a;
          const s = _f() - r._opst;
          if (r.media) {
            r._logger.debug(
              "UpdateEnd(".concat(e, "/").concat(n.opName, ")"),
              Kx.stringify(
                ((e) => {
                  const t = [];
                  if (e instanceof TimeRanges) {
                    for (let r = 0; r < e.length; r++) {
                      t.push({
                        start: e.start(r),
                        end: e.end(r),
                      });
                    }
                  }
                  return t;
                })((a = r._sourceBuffer[e]) == null ? undefined : a.buffered),
              ),
              s,
              n.context,
            );
          }
          n.promise.resolve({
            name: n.opName,
            context: n.context,
            costtime: s,
          });
          const u = (i = n.context) == null ? undefined : i.callback;
          if (u && typeof u === "function") {
            u(n.context);
          }
          r._startQueue(e);
        }
      }
    });
    n8(this, "_onSBUpdateError", function (e, t) {
      const n = r._queue[e];
      if (n) {
        const i = n[0];
        if (i) {
          r._logger.error("UpdateError", e, i.opName, i.context);
          i.promise.reject(new TA(sJ.MEDIA, sJ.SUB_TYPES.MSE_APPEND_BUFFER, t));
        }
      }
    });
    this._config = Object.assign(d.getDefaultConfig(), t);
    if (e) {
      this.bindMedia(e);
    }
    this._logger = new V("MSE");
    if (this._config.openLog) {
      V.enable();
    }
  }
  return j6(
    d,
    [
      {
        key: "version",
        get: function () {
          return "3.0.28";
        },
      },
      {
        key: "isOpened",
        get: function () {
          let e;
          return (
            ((e = this.mediaSource) == null ? undefined : e.readyState) ===
            "open"
          );
        },
      },
      {
        key: "hasOpTasks",
        get: function () {
          const e = this;
          let t = false;
          Object.keys(this._queue).forEach((r) => {
            const n = e._queue[r];
            if (Array.isArray(n)) {
              if (!t) {
                t = n.length > 0;
              }
            }
          });
          return t;
        },
      },
      {
        key: "url",
        get: function () {
          return this._url;
        },
      },
      {
        key: "duration",
        get: function () {
          let e;
          return (
            ((e = this.mediaSource) == null ? undefined : e.duration) || -1
          );
        },
      },
      {
        key: "isEnded",
        get: function () {
          return !!this.mediaSource && this.mediaSource.readyState === "ended";
        },
      },
      {
        key: "streaming",
        get: function () {
          return !l(this.mediaSource) || this.mediaSource.streaming;
        },
      },
      {
        key: "handle",
        get: function () {
          let e;
          if ((e = this.mediaSource) == null) {
            return undefined;
          }
          return e.handle;
        },
      },
      {
        key: "liveEdge",
        get: function () {
          const e = this.bufferEnd("video");
          const t = this.bufferEnd("audio");
          if (e && t) {
            return Math.min(e, t);
          }
          return 0;
        },
      },
      {
        key: "videoMimeType",
        get: function () {
          let e;
          if ((e = this._sourceBuffer.video) == null) {
            return undefined;
          }
          return e.mimeType;
        },
      },
      {
        key: "isFull",
        value: function (e) {
          if (e) {
            return this._mseFullFlag[e];
          }
          return this._mseFullFlag[d.VIDEO];
        },
      },
      {
        key: "getBlobUrl",
        value: function () {
          if (!this._url) {
            this._url = URL.createObjectURL(this.mediaSource);
          }
          return this._url;
        },
      },
      {
        key: "updateDuration",
        value: function (e) {
          const t = this;
          const isReduceDuration =
            this.mediaSource && this.mediaSource.duration > e;
          if (this.mediaSource && this.mediaSource.duration > e) {
            let n = 0;
            Object.keys(this._sourceBuffer).forEach((e) => {
              try {
                n = Math.max(t.bufferEnd(e) || 0, n);
              } catch (e) {}
            });
            if (e < n) {
              return Promise.resolve();
            }
          }
          return this._enqueueBlockingOp(
            function () {
              if (t.isEnded) {
                t._logger.debug("setDuration but ended");
              } else if (t.mediaSource) {
                t.mediaSource.duration = e;
                t._logger.debug("setDuration", e);
              }
            },
            c,
            {
              isReduceDuration,
            },
          );
        },
      },
      {
        key: "init",
        value: function () {
          const e = this;
          const t = u(this._config.preferMMS);
          const r = (this.mediaSource = new t());
          this._st = _f();
          const n = function () {
            const t = _f() - e._st;
            e._logger.debug("sourceopen");
            r.removeEventListener("sourceopen", n);
            e._openPromise.resolve({
              costtime: t,
            });
          };
          r.addEventListener("sourceopen", n);
          if (l(r)) {
            r.addEventListener("startstreaming", this._onStartStreaming);
            r.addEventListener("endstreaming", this._onEndStreaming);
          }
          return this._openPromise;
        },
      },
      {
        key: "open",
        value: function () {
          const e = this;
          if (this._openPromise.used && !this.isOpened && this.mediaSource) {
            const t = this.mediaSource;
            const r = function () {
              const n = _f() - e._st;
              e._logger.debug("sourceopen", n);
              t.removeEventListener("sourceopen", r);
              e._openPromise.resolve({
                costtime: n,
              });
            };
            t.addEventListener("sourceopen", r);
            this._openPromise = $f();
          }
          return this._openPromise;
        },
      },
      {
        key: "bindMedia",
        value:
          ((e = Rx(
            P4().mark(function* e(t) {
              let r;
              let i;
              let a;
              let s;
              const c = this;
              for (
                ;
                this.mediaSource || this.media;
                t.disableRemotePlayback = a
              ) {
                yield this.unbindMedia();
                r = u(this._config.preferMMS);
                if (!(!t || !r)) {
                  continue;
                }
                throw Error("Param media or MediaSource does not exist");
                this.media = t;
                a = l((i = this.mediaSource = new r()));
                this._st = _f();
                s = function () {
                  const e = _f() - c._st;
                  c._logger.debug("sourceopen");
                  i.removeEventListener("sourceopen", s);
                  URL.revokeObjectURL(t.src);
                  c._openPromise.resolve({
                    costtime: e,
                  });
                };
                i.addEventListener("sourceopen", s);
                if (a) {
                  i.addEventListener("startstreaming", this._onStartStreaming);
                  i.addEventListener("endstreaming", this._onEndStreaming);
                }
                this._url = URL.createObjectURL(i);
                t.src = this._url;
              }
              return this._openPromise;
            }),
          )),
          function (t) {
            return e.apply(this, arguments);
          }),
      },
      {
        key: "unbindMedia",
        value:
          ((t = Rx(
            P4().mark(function* e() {
              let t;
              let r;
              let i;
              const a = this;
              if (!this._openPromise.used) {
                this._openPromise.resolve();
              }
              if ((t = this.mediaSource)) {
                Object.keys(this._queue).forEach((e) => {
                  const t = a._queue[e];
                  if (t) {
                    t.forEach((e) => {
                      let t;
                      let r;
                      if ((t = e.promise) == null || (r = t.resolve) == null) {
                        return undefined;
                      }
                      return r.call(t);
                    });
                  }
                });
                r = !!this.media && this.media.readyState >= 1;
                i = t.readyState === "open";
                if (r && i) {
                  try {
                    t.endOfStream();
                  } catch (e) {}
                }
                Object.keys(this._sourceBuffer).forEach((e) => {
                  try {
                    t.removeSourceBuffer(a._sourceBuffer[e]);
                  } catch (e) {}
                });
                if (l(t)) {
                  t.removeEventListener(
                    "startstreaming",
                    this._onStartStreaming,
                  );
                  t.removeEventListener("endstreaming", this._onEndStreaming);
                }
              }
              if (this.media) {
                this.media.disableRemotePlayback = false;
                this.media.removeAttribute("src");
                try {
                  this.media.load();
                } catch (e) {}
                this.media = null;
              }
              this.mediaSource = null;
              this._openPromise = $f();
              this._queue = Object.create(null);
              this._sourceBuffer = Object.create(null);
            }),
          )),
          function () {
            return t.apply(this, arguments);
          }),
      },
      {
        key: "unbind",
        value:
          ((r = Rx(
            P4().mark(function* e(t) {
              let r;
              const i = this;
              if (!this._openPromise.used) {
                this._openPromise.resolve();
              }
              if ((r = this.mediaSource)) {
                Object.keys(this._queue).forEach((e) => {
                  const t = i._queue[e];
                  if (t) {
                    t.forEach((e) => {
                      let t;
                      let r;
                      if ((t = e.promise) == null || (r = t.resolve) == null) {
                        return undefined;
                      }
                      return r.call(t);
                    });
                  }
                });
                if (t && this.isOpened) {
                  try {
                    r.endOfStream();
                  } catch (e) {}
                }
                Object.keys(this._sourceBuffer).forEach((e) => {
                  try {
                    r.removeSourceBuffer(i._sourceBuffer[e]);
                  } catch (e) {}
                });
              }
              if (l(r)) {
                r.removeEventListener("startstreaming", this._onStartStreaming);
                r.removeEventListener("endstreaming", this._onEndStreaming);
              }
              if (this._url) {
                URL.revokeObjectURL(this._url);
                this._url = "";
              }
              this.mediaSource = null;
              this._openPromise = $f();
              this._queue = Object.create(null);
              this._sourceBuffer = Object.create(null);
            }),
          )),
          function (e) {
            return r.apply(this, arguments);
          }),
      },
      {
        key: "createSource",
        value: function (e, t) {
          let r;
          if (!this._sourceBuffer[e] && this.mediaSource) {
            try {
              r = this._sourceBuffer[e] = this.mediaSource.addSourceBuffer(t);
            } catch (error) {
              throw new TA(sJ.MEDIA, sJ.SUB_TYPES.MSE_ADD_SB, error);
            }
            r.mimeType = t;
            r.addEventListener("updateend", this._onSBUpdateEnd.bind(this, e));
            r.addEventListener("error", this._onSBUpdateError.bind(this, e));
          }
        },
      },
      {
        key: "changeType",
        value: function (e, mimeType) {
          const r = this;
          const n = this._sourceBuffer[e];
          if (this.mediaSource && n && n.mimeType !== mimeType) {
            if (typeof n.changeType !== "function") {
              return Promise.reject(
                new TA(
                  sJ.MEDIA,
                  sJ.SUB_TYPES.MSE_CHANGE_TYPE,
                  Error("changeType is not a function"),
                ),
              );
            }
            return this._enqueueOp(
              e,
              function () {
                try {
                  n.changeType(mimeType);
                } catch (error) {
                  throw new TA(sJ.MEDIA, sJ.SUB_TYPES.MSE_CHANGE_TYPE, error);
                }
                n.mimeType = mimeType;
                r._onSBUpdateEnd(e);
              },
              "changeType",
              {
                mimeType,
              },
            );
          }
          return Promise.resolve();
        },
      },
      {
        key: "createOrChangeSource",
        value: function (e, t) {
          this.createSource(e, t);
          return this.changeType(e, t);
        },
      },
      {
        key: "append",
        value: function (e, t, r) {
          const n = this;
          if (t && t.byteLength && this._sourceBuffer[e]) {
            return this._enqueueOp(
              e,
              function () {
                let i;
                let a;
                if (n.mediaSource && ((i = n.media) == null || !i.error)) {
                  n._logger.debug("MSE APPEND START", r);
                  n._opst = _f();
                  if ((a = n._sourceBuffer[e]) != null) {
                    a.appendBuffer(t);
                  }
                }
              },
              "appendBuffer",
              r,
            );
          }
          return Promise.resolve();
        },
      },
      {
        key: "remove",
        value: function (e, t, r, n) {
          const i = this;
          let a = false;
          if (this._mseFullFlag[e]) {
            a = true;
          }
          return this._enqueueOp(
            e,
            function () {
              if (i.mediaSource && ((a = i.media) == null || !a.error)) {
                var a;
                const s = i._sourceBuffer[e];
                if (t >= r || !s) {
                  return void i._onSBUpdateEnd(e);
                }
                i._opst = _f();
                i._logger.debug("MSE REMOVE START", e, t, r, n);
                s.remove(t, r);
              }
            },
            "removeBuffer",
            n,
            a,
          );
        },
      },
      {
        key: "clearBuffer",
        value: function (e, t) {
          let r;
          const n = this;
          Object.keys(this._sourceBuffer).forEach((i) => {
            r = n.remove(i, e, t);
          });
          return r || Promise.resolve();
        },
      },
      {
        key: "clearAllBuffer",
        value: function () {
          let e;
          const t = this;
          Object.keys(this._sourceBuffer).forEach((r) => {
            const n = t._sourceBuffer[r];
            e = t.remove(r, 0, i.end(i.get(n)));
          });
          return e;
        },
      },
      {
        key: "clearOpQueues",
        value: function (e, t) {
          this._logger.debug("MSE clearOpQueue START");
          let r;
          const n = this._queue[e];
          if (t && n) {
            this._queue[e] = [];
            return;
          }
          if (n && n[e] && !(n.length < 5)) {
            const i = [];
            n.forEach((e) => {
              if (e.context && e.context.isinit) {
                i.push(e);
              }
            });
            this._queue[e] = n.slice(0, 2);
            if (i.length > 0) {
              (r = this._queue[e]).push.apply(r, i);
            }
          }
        },
      },
      {
        key: "endOfStream",
        value: function (e) {
          const t = this;
          if (this.mediaSource && this.mediaSource.readyState === "open") {
            return this._enqueueBlockingOp(function () {
              const t_mediaSource = t.mediaSource;
              if (t_mediaSource && t_mediaSource.readyState === "open") {
                t._logger.debug("MSE endOfStream START");
                if (e) {
                  t_mediaSource.endOfStream(e);
                } else {
                  t_mediaSource.endOfStream();
                }
              }
            }, "endOfStream");
          }
          return Promise.resolve();
        },
      },
      {
        key: "setLiveSeekableRange",
        value: function (e, t) {
          const mediaSource = this.mediaSource;
          if (
            !(
              e < 0 ||
              t < e ||
              mediaSource == null ||
              !mediaSource.setLiveSeekableRange ||
              mediaSource.readyState !== "open"
            )
          ) {
            mediaSource.setLiveSeekableRange(e, t);
          }
        },
      },
      {
        key: "getSourceBuffer",
        value: function (e) {
          return this._sourceBuffer[e];
        },
      },
      {
        key: "buffered",
        value: function (e) {
          return i.get(this._sourceBuffer[e]);
        },
      },
      {
        key: "bufferStart",
        value: function (e) {
          return i.start(this.buffered(e));
        },
      },
      {
        key: "bufferEnd",
        value: function (e) {
          return i.end(this.buffered(e));
        },
      },
      {
        key: "_enqueueOp",
        value: function (e, exec, r, n, i) {
          const a = this;
          if (!this.mediaSource) {
            return Promise.resolve();
          }
          const s = (this._queue[e] = this._queue[e] || []);
          const u = {
            exec,
            promise: $f(),
            opName: r,
            context: n,
          };
          if (i) {
            s.splice(0, 0, u);
            this._mseFullFlag[e] = false;
            this._startQueue(e);
          } else {
            s.push(u);
          }
          if (this.isOpened || this.isEnded) {
            if (s.length === 1) {
              this._startQueue(e);
            }
          } else {
            this._openPromise.then(() => {
              if (s.length === 1) {
                a._startQueue(e);
              }
            });
          }
          return u.promise;
        },
      },
      {
        key: "_enqueueBlockingOp",
        value:
          ((f = Rx(
            P4().mark(function e(t, r, i) {
              let a;
              let s;
              const u = this;
              return P4().wrap(
                function (e) {
                  while (true) {
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (this.mediaSource) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", Promise.resolve());
                      case 2:
                        if ((a = Object.keys(this._sourceBuffer)).length) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return", t());
                      case 5:
                        s = [];
                        a.forEach((e) => {
                          const t = u._queue[e];
                          const promise = $f();
                          s.push(promise);
                          t.push({
                            exec: function () {
                              promise.resolve();
                            },
                            promise,
                            opName: r,
                            context: i,
                          });
                          if (t.length === 1) {
                            u._startQueue(e);
                          }
                        });
                        return e.abrupt(
                          "return",
                          Promise.all(s).then(() => {
                            try {
                              return t();
                            } finally {
                              a.forEach((e) => {
                                const t = u._queue[e];
                                const r = u._sourceBuffer[e];
                                if (t != null) {
                                  t.shift();
                                }
                                if (!(r && r.updating)) {
                                  u._startQueue(e);
                                }
                              });
                            }
                          }),
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                  }
                },
                e,
                this,
              );
            }),
          )),
          function (e, t, r) {
            return f.apply(this, arguments);
          }),
      },
      {
        key: "_startQueue",
        value: function (e) {
          const t = this._queue[e];
          if (t) {
            const r = t[0];
            if (r && !this._mseFullFlag[e]) {
              try {
                r.exec();
              } catch (error) {
                if (
                  error &&
                  error.message &&
                  error.message.indexOf("SourceBuffer is full") >= 0
                ) {
                  this._mseFullFlag[e] = true;
                  if (r.context && uk(r.context) === "object") {
                    r.context.isFull = true;
                  }
                  this._logger.error(
                    "[MSE error],  context,",
                    r.context,
                    " ,name,",
                    r.opName,
                    ",err,SourceBuffer is full",
                  );
                  r.promise.reject(
                    new TA(sJ.MEDIA, sJ.SUB_TYPES.MSE_FULL, error),
                  );
                } else {
                  this._logger.error(error);
                  r.promise.reject(
                    error.constructor === TA
                      ? error
                      : new TA(sJ.MEDIA, sJ.SUB_TYPES.MSE_OTHER, error),
                  );
                  t.shift();
                  this._startQueue(e);
                }
              }
            }
          }
        },
      },
      {
        key: "setTimeoffset",
        value: function (e, t, r) {
          const n = this;
          return this._enqueueOp(
            e,
            function () {
              if (t < 0) {
                t += 0.001;
              }
              n._sourceBuffer[e].timestampOffset = t;
              n._onSBUpdateEnd(e);
            },
            "setTimeoffset",
            r,
          );
        },
      },
      {
        key: "abort",
        value: function (e, t) {
          const r = this;
          if (this.isOpened) {
            return this._enqueueOp(
              e,
              function () {
                r._sourceBuffer[e].abort();
                r._onSBUpdateEnd(e);
              },
              "abort",
              t,
            );
          }
          return Promise.resolve();
        },
      },
    ],
    [
      {
        key: "isSupported",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
          const t = u();
          if (!t) {
            return false;
          }
          try {
            return t.isTypeSupported(e);
          } catch (error) {
            this._logger.error(e, error);
            return false;
          }
        },
      },
      {
        key: "isMMSOnly",
        value: function () {
          return (
            typeof ManagedMediaSource !== "undefined" &&
            typeof MediaSource === "undefined"
          );
        },
      },
      {
        key: "getDefaultConfig",
        value: function () {
          return {
            openLog: false,
            preferMMS: false,
          };
        },
      },
    ],
  );
})();
n8(Ub, "VIDEO", "video");
n8(Ub, "AUDIO", "audio");
