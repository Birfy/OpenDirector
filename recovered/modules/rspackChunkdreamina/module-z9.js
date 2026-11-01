import i from "NY";
import a from "oa";
import n from "bk";
import o from "WA9";
const s = "apiLogs";
class m {
  recordResponse(e) {
    if (!this._terminal) {
      this._append({
        kind: "response",
        response: {
          bodyUsed: e.bodyUsed,
          headers: u(e.headers),
          ok: e.ok,
          redirected: e.redirected,
          status: e.status,
          statusText: e.statusText,
          type: e.type,
          url: e.url,
        },
      });
    }
  }
  recordChunk(chunk) {
    if (!this._terminal && chunk) {
      this._append({
        chunk,
        kind: "response_chunk",
      });
    }
  }
  complete() {
    const completionReason =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "completed";
    if (!this._terminal) {
      this._terminal = true;
      this._append({
        completionReason,
        kind: "complete",
      });
    }
  }
  recordError(e) {
    if (!this._terminal) {
      this._terminal = true;
      this._append({
        error: d(e),
        kind: "error",
      });
    }
  }
  _append(e) {
    this._sink.append(
      n._(a._({}, e), {
        endpoint: this._endpoint,
        requestId: this._requestId,
        sequence: this._sequence,
        timestamp: Date.now(),
      }),
    );
    this._sequence += 1;
  }
  constructor(e, t, r, i) {
    var a;
    var n;
    var o;
    var s;
    this._endpoint = e;
    this._requestId = t;
    this._sink = r;
    this._sequence = 0;
    this._terminal = false;
    this._append({
      kind: "request",
      request: {
        init: {
          body:
            typeof (o = (a = i.init).body) === "string"
              ? o
              : o instanceof URLSearchParams
                ? {
                    type: "URLSearchParams",
                    value: o.toString(),
                  }
                : o instanceof FormData
                  ? {
                      entries: Array.from(o.entries()),
                      type: "FormData",
                    }
                  : o == null
                    ? null
                    : o instanceof Blob ||
                        o instanceof ArrayBuffer ||
                        ArrayBuffer.isView(o)
                      ? o
                      : {
                          type: Object.prototype.toString.call(o),
                        },
          cache: a.cache,
          credentials: a.credentials,
          headers: u(a.headers),
          integrity: a.integrity,
          keepalive: a.keepalive,
          method: (n = a.method) != null ? n : "GET",
          mode: a.mode,
          redirect: a.redirect,
          referrer: a.referrer,
          referrerPolicy: a.referrerPolicy,
          signal: a.signal
            ? {
                aborted: a.signal.aborted,
                reason: (s = a.signal.reason) instanceof Error ? d(s) : s,
              }
            : undefined,
          window: a.window,
        },
        url: i.url,
      },
    });
  }
}
const l = new (class {
  append(e) {
    this._pendingRecords.push(e);
    if (this._pendingRecords.length >= 50) {
      this._flush();
    } else if (!this._flushTimer) {
      this._flushTimer = setTimeout(() => this._flush(), 100);
    }
  }
  _flush() {
    if (this._flushTimer) {
      clearTimeout(this._flushTimer);
      this._flushTimer = undefined;
    }
    if (this._pendingRecords.length !== 0) {
      const e = this._pendingRecords.splice(0, this._pendingRecords.length);
      this._writeTail = this._writeTail
        .catch(() => undefined)
        .then(() => this._write(e));
      this._writeTail.catch(() => undefined);
    }
  }
  readAll() {
    return i
      ._(function* () {
        this._flush();
        yield this._writeTail;
        const e = yield this._openDatabase();
        return new Promise((resolve, reject) => {
          var i = e.transaction(s, "readonly");
          var a = i.objectStore(s).getAll();
          var n = [];
          a.onsuccess = () => {
            n = a.result;
          };
          i.oncomplete = () => {
            resolve(
              n.sort(
                (e, t) =>
                  e.timestamp - t.timestamp ||
                  e.requestId.localeCompare(t.requestId) ||
                  e.sequence - t.sequence,
              ),
            );
          };
          i.onerror = () => reject(i.error);
          i.onabort = () => reject(i.error);
        });
      })
      .call(this);
  }
  _write(e) {
    return i
      ._(function* () {
        const t = yield this._openDatabase();
        yield new Promise((resolve, reject) => {
          var a;
          var n;
          var o;
          var m = t.transaction(s, "readwrite");
          var l = m.objectStore(s);
          a = l;
          n = Date.now() - 2592000000;
          o = a.index("timestamp").openCursor(IDBKeyRange.upperBound(n, true));
          o.onsuccess = () => {
            var o_result = o.result;
            if (o_result) {
              o_result.delete();
              o_result.continue();
            }
          };
          e.forEach((e) => l.add(e));
          m.oncomplete = () => resolve();
          m.onerror = () => reject(m.error);
          m.onabort = () => reject(m.error);
        });
      })
      .call(this);
  }
  _openDatabase() {
    if (!this._databasePromise) {
      this._databasePromise = new Promise((resolve, reject) => {
        if (typeof indexedDB === "undefined") {
          return void reject(Error("IndexedDB is not supported"));
        }
        var r = indexedDB.open("DreaminaAgentLog", 1);
        r.onupgradeneeded = () => {
          var r_result = r.result;
          if (!r_result.objectStoreNames.contains(s)) {
            var t = r_result.createObjectStore(s, {
              autoIncrement: true,
            });
            t.createIndex("requestId", "requestId");
            t.createIndex("endpoint", "endpoint");
            t.createIndex("timestamp", "timestamp");
            t.createIndex("requestIdSequence", ["requestId", "sequence"]);
          }
        };
        r.onsuccess = () => {
          var r_result = r.result;
          r_result.onversionchange = () => {
            r_result.close();
            this._databasePromise = undefined;
          };
          resolve(r_result);
        };
        r.onerror = () => reject(r.error);
        r.onblocked = () => reject(Error("IndexedDB open request was blocked"));
      }).catch((e) => {
        this._databasePromise = undefined;
        throw e;
      });
    }
    return this._databasePromise;
  }
  constructor() {
    this._pendingRecords = [];
    this._writeTail = Promise.resolve();
  }
})();
export function GU(e) {
  let t;
  let r;
  let i;
  const a =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;
  if (
    (() => {
      try {
        return (
          typeof localStorage !== "undefined" &&
          localStorage.getItem("enableAgentLog") !== null
        );
      } catch (e) {
        return false;
      }
    })()
  ) {
    const n =
      (t =
        (i = globalThis.crypto) == null || (r = i.randomUUID) == null
          ? undefined
          : r.call(i)) != null
        ? t
        : ""
            .concat(Date.now(), "-")
            .concat(Math.random().toString(16).slice(2));
    return new m(e.endpoint, n, a, e);
  }
}
function u(headers) {
  const t = [];
  new Headers(headers).forEach((e, r) => {
    t.push([r, e]);
  });
  return t;
}
function d(e) {
  if (e instanceof Error) {
    return {
      message: e.message,
      name: e.name,
    };
  }
  return {
    message: String(e),
    name: "Error",
  };
}
if (typeof window !== "undefined") {
  window.exportAgentApiLogs = function () {
    return i._(function* () {
      const e = yield l.readAll();
      const t = new Date().toISOString().replace(/[:.]/g, "-");
      o.W(
        new Blob(
          e.map((e) => "".concat(JSON.stringify(e), "\n")),
          {
            type: "application/x-ndjson",
          },
        ),
        `dreamina-agent-api-logs-`.concat(t),
        "jsonl",
      );
      return e.length;
    })();
  };
}
