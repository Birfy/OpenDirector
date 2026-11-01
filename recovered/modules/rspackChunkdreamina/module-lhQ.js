import s from "NY";
import n from "oa";
import r from "bk";
import o from "Kd";
import a from "XIc";
import v from "xi";
import { q } from "./module-yMU.js";
import { Gr, wU } from "./module-oL.js";
const l =
  '\nsyntax = "proto3";\npackage pbws;\n\nmessage WebSocketRequest {\n  string token = 1;\n  string appkey = 2;\n  string namespace = 3;\n  string version = 4;\n  string event = 5;\n  string payload = 6;\n  bytes data = 7;\n  string task_id = 8;\n  uint64 seq_id = 9;\n  string session_id = 10;\n}\n\nmessage WebSocketResponse {\n  string task_id = 1;\n  string message_id = 2;\n  string namespace = 3;\n  string event = 4;\n  int32 status_code = 5;\n  string status_text = 6;\n  string payload = 7;\n  bytes data = 8;\n  uint64 seq_id = 9;\n  string session_id = 10;\n  string log_id = 11;\n}\n';
let c = null;
let d = null;
function u(t) {
  let e;
  let i;
  let s;
  let n;
  let r;
  let o;
  let a;
  return {
    taskId: (e = t.taskId) != null ? e : t.task_id,
    messageId: (i = t.messageId) != null ? i : t.message_id,
    namespace: t.namespace,
    event: t.event,
    statusCode: (s = t.statusCode) != null ? s : t.status_code,
    statusText: (n = t.statusText) != null ? n : t.status_text,
    payload: t.payload,
    data: t.data,
    seqId: (r = t.seqId) != null ? r : t.seq_id,
    sessionId: (o = t.sessionId) != null ? o : t.session_id,
    logId: (a = t.logId) != null ? a : t.log_id,
  };
}
function h(t) {
  let e;
  let i;
  let s;
  let n;
  let r;
  let o;
  let d;
  let u;
  let h;
  if (!c) {
    c = a.parse(l).root.lookupType("pbws.WebSocketRequest");
  }
  const _ = c;
  const p = (e = t.payload) != null ? e : "";
  const v = (i = t.data) != null ? i : new Uint8Array(0);
  const m = {
    token: (s = t.token) != null ? s : "",
    appkey: (n = t.appkey) != null ? n : "",
    namespace: (r = t.namespace) != null ? r : "",
    version: (o = t.version) != null ? o : "",
    event: (d = t.event) != null ? d : "",
    payload: p,
    data: v,
    task_id: (u = t.task_id) != null ? u : "",
    session_id: (h = t.session_id) != null ? h : "",
  };
  if (t.seq_id !== undefined && t.seq_id !== null) {
    m.seq_id = t.seq_id;
  }
  const g = _.create(m);
  return _.encode(g).finish();
}
class _ {
  getState() {
    return this._state;
  }
  onTextResult(t) {
    this._onTextResult = t;
  }
  offTextResult() {
    this._onTextResult = null;
  }
  connect() {
    return s
      ._(function* () {
        let t;
        if (
          !(
            (this._state === "connected" &&
              ((t = this._ws) == null ? undefined : t.readyState) ===
                WebSocket.OPEN) ||
            this._connectionPrepared
          )
        ) {
          this._connectionPrepared = true;
          this._setState("prepared");
        }
      })
      .call(this);
  }
  _doConnect() {
    if (!this._connectPromise) {
      this._setState("connecting");
      this._handshakePhase = "start_task";
      this._taskId = "";
      this._seqId = 0;
      this._connectPromise = new Promise((resolve, reject) => {
        this._connectResolve = resolve;
        this._connectReject = reject;
        try {
          this._ws = new WebSocket(this._options.wsUrl);
          this._ws.binaryType = "arraybuffer";
        } catch (error) {
          this._setState("error");
          this._connectPromise = null;
          reject(error instanceof Error ? error : Error(String(error)));
          return;
        }
        var i;
        var s = (i = this._options.connectTimeout) != null ? i : 10000;
        this._connectTimer = setTimeout(() => {
          if (this._state === "connecting") {
            this._close();
            this._setState("error");
            this._connectPromise = null;
            this._connectTimer = null;
            this._emitError({
              code: -2,
              message: "WebSocket connection timeout",
            });
            reject(Error("WebSocket connection timeout"));
          }
        }, s);
        this._ws.onopen = () => {
          this._sendStartTask();
        };
        this._ws.onerror = () => {
          this._clearConnectTimer();
          this._setState("error");
          this._connectPromise = null;
          var t;
          var e = Error("WebSocket error");
          this._emitError({
            code: -1,
            message: "WebSocket error",
          });
          if ((t = this._connectReject) != null) {
            t.call(this, e);
          }
          this._connectReject = null;
        };
        this._ws.onclose = (t) => {
          this._clearConnectTimer();
          if (this._state === "connecting") {
            var e =
              t.code !== 1000 && (t.reason || t.code)
                ? "WebSocket closed (code: "
                    .concat(t.code)
                    .concat(t.reason ? ", reason: ".concat(t.reason) : "", ")")
                : "WebSocket closed before open";
            this._emitError({
              code: t.code,
              message: e,
              statusCode: t.code,
              statusText: t.reason,
            });
            this._rejectConnect(Error(e));
          }
          if (this._ws) {
            this._ws.onclose = () => undefined;
            this._ws.onerror = () => undefined;
            this._ws.onmessage = () => undefined;
            this._ws = null;
          }
          if (this._state !== "error") {
            this._setState("disconnected");
          }
          this._connectionPrepared = false;
          this._connectPromise = null;
          this._connectResolve = null;
          this._connectReject = null;
        };
        this._ws.onmessage = (t) => this._handleMessage(t);
      });
    }
    return this._connectPromise;
  }
  _clearConnectTimer() {
    if (this._connectTimer) {
      clearTimeout(this._connectTimer);
      this._connectTimer = null;
    }
  }
  _setState(t) {
    if (this._state !== t) {
      let e;
      let i;
      this._state = t;
      if ((e = (i = this._options).onStateChange) != null) {
        e.call(i, t);
      }
    }
  }
  _resolveConnect() {
    let t;
    let e;
    let i;
    this._clearConnectTimer();
    this._state = "connected";
    this._handshakePhase = "connected";
    this._connectPromise = null;
    if ((t = this._connectResolve) != null) {
      t.call(this);
    }
    this._connectResolve = null;
    this._connectReject = null;
    if ((e = (i = this._options).onStateChange) != null) {
      e.call(i, "connected");
    }
  }
  _rejectConnect(t, e) {
    let i;
    let s;
    let n;
    this._clearConnectTimer();
    this._state = "error";
    this._connectPromise = null;
    if (e) {
      this._emitError(e);
      t.asrError = e;
    }
    if ((i = this._connectReject) != null) {
      i.call(this, t);
    }
    this._connectReject = null;
    if ((s = (n = this._options).onStateChange) != null) {
      s.call(n, "error");
    }
  }
  _emitError(t) {
    let e;
    let i;
    if ((e = (i = this._options).onError) != null) {
      e.call(i, t);
    }
  }
  _buildASRError(code, message, i) {
    return {
      code,
      message,
      taskId: i.taskId,
      messageId: i.messageId,
      logId: i.logId,
      namespace: i.namespace,
      event: i.event,
      statusCode: i.statusCode,
      statusText: i.statusText,
    };
  }
  _sendStartTask() {
    let t;
    let e;
    const i = h({
      token: this._options.token,
      appkey: this._options.appkey,
      namespace:
        (t = this._options.namespace) != null ? t : "DoubaoASR_IMTwoPass",
      event: "StartTask",
    });
    if ((e = this._ws) != null) {
      e.send(i);
    }
    this._debug("[发送] StartTask, ".concat(i.length, " bytes"));
  }
  _sendStartSession() {
    let t;
    let e;
    const i = this._options.payload
      ? JSON.stringify(this._options.payload)
      : "{}";
    const s = h({
      token: this._options.token,
      appkey: this._options.appkey,
      namespace:
        (t = this._options.namespace) != null ? t : "DoubaoASR_IMTwoPass",
      event: "StartSession",
      payload: i,
      task_id: this._taskId,
    });
    if ((e = this._ws) != null) {
      e.send(s);
    }
    this._debug(
      "[发送] StartSession, taskId="
        .concat(this._taskId, ", ")
        .concat(s.length, " bytes"),
    );
  }
  _sendAudioChunk(t) {
    if (
      ((i = this._ws) == null ? undefined : i.readyState) === WebSocket.OPEN &&
      this._taskId
    ) {
      let e;
      var i;
      const s = t instanceof ArrayBuffer ? new Uint8Array(t) : t;
      this._seqId += 1;
      const n = h({
        token: this._options.token,
        appkey: this._options.appkey,
        namespace:
          (e = this._options.namespace) != null ? e : "DoubaoASR_IMTwoPass",
        event: "TaskRequest",
        task_id: this._taskId,
        data: s,
        seq_id: this._seqId,
      });
      this._ws.send(n);
      this._debug(
        "[发送] TaskRequest, seq="
          .concat(this._seqId, ", ")
          .concat(n.length, " bytes"),
      );
    }
  }
  sendAudio(t) {
    if (this._connectionPrepared) {
      if (this._state === "connecting") {
        this._audioQueue.push(t);
      } else if (this._state === "connected") {
        this._sendAudioChunk(t);
      } else {
        this._audioQueue.push(t);
        this._doConnect();
      }
    } else {
      this._debug("[sendAudio] 必须先调用 connect() 后才能 sendAudio()");
    }
  }
  _flushAudioQueue() {
    while (this._audioQueue.length > 0) {
      const t = this._audioQueue.shift();
      this._sendAudioChunk(t);
    }
  }
  disconnect(t) {
    let e;
    if (
      ((e = this._ws) == null ? undefined : e.readyState) !== WebSocket.OPEN
    ) {
      this._close();
      return Promise.resolve();
    }
    if (t == null ? undefined : t.force) {
      this._debug("[disconnect] 强制立即断开连接");
      this._close();
      return Promise.resolve();
    }
    if (!this._disconnectPromise) {
      this._disconnectStartTime = Date.now();
      this._debug("[disconnect] 开始断开，记录起始时间");
      this._disconnectPromise = new Promise((resolve) => {
        this._disconnectResolve = resolve;
        var e;
        var i;
        var s;
        var n = (e = this._options.disconnectTimeout) != null ? e : 5000;
        this._disconnectTimer = setTimeout(() => {
          var t =
            this._disconnectStartTime != null
              ? Date.now() - this._disconnectStartTime
              : 0;
          this._debug(
            "[disconnect] 等待 SessionFinished 或 TaskFinished 超时，强制关闭，距调用已耗时 ".concat(
              t,
              "ms",
            ),
          );
          this._resolveDisconnect();
        }, n);
        var r = {
          token: this._options.token,
          appkey: this._options.appkey,
          namespace:
            (i = this._options.namespace) != null ? i : "DoubaoASR_IMTwoPass",
          event: "FinishSession",
          task_id: this._taskId,
        };
        this._ws.send(h(r));
        this._debug("[发送] FinishSession");
        var o = {
          token: this._options.token,
          appkey: this._options.appkey,
          namespace:
            (s = this._options.namespace) != null ? s : "DoubaoASR_IMTwoPass",
          event: "FinishTask",
          task_id: this._taskId,
        };
        this._ws.send(h(o));
        this._debug("[发送] FinishTask");
      });
    }
    return this._disconnectPromise;
  }
  _resolveDisconnect() {
    let t;
    if (this._disconnectTimer) {
      clearTimeout(this._disconnectTimer);
      this._disconnectTimer = null;
    }
    this._disconnectPromise = null;
    this._disconnectStartTime = null;
    this._close();
    if ((t = this._disconnectResolve) != null) {
      t.call(this);
    }
    this._disconnectResolve = null;
  }
  _close() {
    let t;
    if (this._disconnectTimer) {
      clearTimeout(this._disconnectTimer);
      this._disconnectTimer = null;
    }
    this._disconnectPromise = null;
    if ((t = this._disconnectResolve) != null) {
      t.call(this);
    }
    this._disconnectResolve = null;
    this._disconnectStartTime = null;
    if (this._ws) {
      this._ws.onclose = () => undefined;
      this._ws.onerror = () => undefined;
      this._ws.onmessage = () => undefined;
      this._ws.close(1000, "client close");
      this._ws = null;
    }
    this._setState("disconnected");
    this._connectionPrepared = false;
  }
  _debug(t) {
    let e;
    let i;
    if ((e = (i = this._options).onDebugLog) != null) {
      e.call(i, "[".concat(_._DEBUG_PREFIX, "] ").concat(t));
    }
  }
  _handleMessage(t) {
    try {
      const e = t.data;
      if (e instanceof ArrayBuffer) {
        this._debug("[收到] 二进制 ".concat(e.byteLength, " bytes"));
        this._handleBinaryMessage(e);
      } else if (e instanceof Blob) {
        e.arrayBuffer().then((t) => {
          this._debug("[收到] Blob 转二进制 ".concat(t.byteLength, " bytes"));
          this._handleBinaryMessage(t);
        });
      } else if (typeof e === "string") {
        this._debug("[收到] 文本 ".concat(e.length, " chars"));
        const i = JSON.parse(e);
        this._handleResponse(i);
      }
    } catch (error) {
      this._debug(
        "[解析错误] ".concat(
          error instanceof Error ? error.message : String(error),
        ),
      );
    }
  }
  _handleBinaryMessage(t) {
    try {
      let e;
      let i;
      let s;
      if (!d) {
        d = a.parse(l).root.lookupType("pbws.WebSocketResponse");
      }
      e = d;
      i = t instanceof ArrayBuffer ? new Uint8Array(t) : t;
      s = e.decode(i);
      const n = u(
        e.toObject(s, {
          longs: String,
          enums: String,
        }),
      );
      this._debug("[解析] protobuf 成功, event=".concat(n.event));
      this._handleResponse(n);
    } catch (error) {
      this._debug(
        "[解析] protobuf 失败: ".concat(
          error instanceof Error ? error.message : String(error),
        ),
      );
      try {
        const r = new TextDecoder().decode(t);
        const o = JSON.parse(r);
        this._debug("[解析] JSON 成功, event=".concat(o.event));
        this._handleResponse(o);
      } catch (e) {
        const c = new TextDecoder().decode(new Uint8Array(t).slice(0, 50));
        this._debug("[解析] 全部失败, 预览: ".concat(c, "..."));
      }
    }
  }
  _handleResponse(t) {
    const e = u(t);
    const e_event = e.event;
    this._debug(
      "[解析数据] ".concat(
        JSON.stringify(
          r._(n._({}, e), {
            data:
              e.data instanceof Uint8Array
                ? "[Uint8Array ".concat(e.data.length, " bytes]")
                : e.data,
            payload: e.payload,
          }),
          null,
          2,
        ),
      ),
    );
    const s = () => {
      var e_payload = e.payload;
      if (!e_payload || typeof e_payload !== "string") {
        return {};
      }
      try {
        return JSON.parse(e_payload);
      } catch (t) {
        return {};
      }
    };
    if (this._state === "connecting") {
      if (e_event === "TaskStarted") {
        this._taskId = (o = e.taskId) != null ? o : "";
        this._handshakePhase = "start_session";
        this._debug(
          "[建连] ".concat(e_event, ", taskId=").concat(this._taskId),
        );
        this._sendStartSession();
        return;
      }
      if (e_event === "SessionStarted") {
        this._debug("[建连] SessionStarted");
        this._flushAudioQueue();
        this._resolveConnect();
        return;
      }
      if (
        e_event === "Error" ||
        e_event === "TaskFailed" ||
        e_event === "SessionFailed"
      ) {
        var o;
        let a;
        let l;
        let c;
        let d;
        let h;
        const _ = s();
        const p =
          (a =
            (l =
              (c = (d = _.message) != null ? d : _.msg) != null
                ? c
                : _.error) != null
              ? l
              : e.statusText) != null
            ? a
            : e_event;
        const v = this._buildASRError(
          (h = e.statusCode) != null ? h : -1,
          p,
          e,
        );
        this._rejectConnect(
          Error("ASR 建连失败 [".concat(e_event, "]: ").concat(p)),
          v,
        );
        return;
      }
    }
    if (
      this._state === "connected" &&
      (e_event === "Error" ||
        e_event === "TaskFailed" ||
        e_event === "SessionFailed")
    ) {
      let m;
      let g;
      let f;
      let y;
      let S;
      const w = s();
      const k =
        (m =
          (g =
            (f = (y = w.message) != null ? y : w.msg) != null ? f : w.error) !=
          null
            ? g
            : e.statusText) != null
          ? m
          : e_event;
      const T = this._buildASRError((S = e.statusCode) != null ? S : -1, k, e);
      this._emitError(T);
    }
    if (e.payload && this._onTextResult) {
      const b = s();
      const A = b.results;
      if (Array.isArray(A) && A.length > 0) {
        for (const C of A) {
          const text = (R = C == null ? undefined : C.text) != null ? R : "";
          if (text) {
            var R;
            let E;
            let P;
            let L;
            const isInterim =
              (E = C == null ? undefined : C.is_interim) != null
                ? E
                : !(
                    (P =
                      (L = C == null ? undefined : C.streamAsrFinish) != null
                        ? L
                        : C == null
                          ? undefined
                          : C.stream_asr_finish) != null && P
                  );
            this._onTextResult({
              text,
              startTime: C == null ? undefined : C.start_time,
              endTime: C == null ? undefined : C.end_time,
              isInterim,
              index: C == null ? undefined : C.index,
              type: isInterim ? "interim" : "final",
              taskId: e.taskId,
              messageId: e.messageId,
              logId: e.logId,
              payload: b,
            });
          }
        }
      }
    }
    if (
      e_event === "TaskFinished" ||
      e_event === "SessionFinished" ||
      e_event === "SessionFailed" ||
      e_event === "TaskRestarted"
    ) {
      this._debug("[收到] 会话结束 event=".concat(e_event));
    }
    if (this._disconnectPromise && this._disconnectStartTime != null) {
      const D = Date.now() - this._disconnectStartTime;
      if (e_event === "SessionFinished") {
        this._debug(
          "[disconnect] 收到 SessionFinished，距调用 disconnect 已耗时 ".concat(
            D,
            "ms，关闭连接",
          ),
        );
        this._resolveDisconnect();
      } else if (e_event === "TaskFinished") {
        this._debug(
          "[disconnect] 收到 TaskFinished，距调用 disconnect 已耗时 ".concat(
            D,
            "ms，关闭连接",
          ),
        );
        this._resolveDisconnect();
      }
    }
  }
  constructor(t) {
    var e;
    var i;
    this._ws = null;
    this._onTextResult = null;
    this._state = "disconnected";
    this._connectPromise = null;
    this._connectResolve = null;
    this._connectReject = null;
    this._connectTimer = null;
    this._taskId = "";
    this._handshakePhase = "start_task";
    this._seqId = 0;
    this._connectionPrepared = false;
    this._audioQueue = [];
    this._disconnectPromise = null;
    this._disconnectResolve = null;
    this._disconnectTimer = null;
    this._disconnectStartTime = null;
    this._options = r._(n._({}, t), {
      wsUrl: (e = t.wsUrl) != null ? e : o.a.ASR.wsUrl,
      namespace: (i = t.namespace) != null ? i : "DoubaoASR_IMTwoPass",
    });
  }
}
_._DEBUG_PREFIX = "lv-doubao-asr-sdk";
class p {
  init(t) {
    this.dispose();
    this._options = t;
    this._client = new _(t);
  }
  connect() {
    return s
      ._(function* () {
        if (!this._client) {
          throw Error("DoubaoASRSDK: must call init() before connect()");
        }
        return this._client.connect();
      })
      .call(this);
  }
  sendAudio(t) {
    if (!this._client) {
      throw Error("DoubaoASRSDK: must call init() before sendAudio()");
    }
    if (this._client.getState() === "disconnected") {
      throw Error("DoubaoASRSDK: must call connect() before sendAudio()");
    }
    this._client.sendAudio(t);
  }
  onTextResult(t) {
    if (!this._client) {
      throw Error("DoubaoASRSDK: must call init() before onTextResult()");
    }
    this._client.onTextResult(t);
  }
  offTextResult() {
    let t;
    if ((t = this._client) != null) {
      t.offTextResult();
    }
  }
  disconnect(t) {
    let e;
    let i;
    if (
      (e = (i = this._client) == null ? undefined : i.disconnect(t)) != null
    ) {
      return e;
    }
    return Promise.resolve();
  }
  getState() {
    let t;
    let e;
    if ((t = (e = this._client) == null ? undefined : e.getState()) != null) {
      return t;
    }
    return "disconnected";
  }
  dispose() {
    let t;
    if ((t = this._client) != null) {
      t.disconnect({
        force: true,
      });
    }
    this._client = null;
    this._options = null;
  }
  constructor() {
    this._client = null;
    this._options = null;
  }
}
let f = null;
let y = null;
class S {
  isAvailable() {
    return (
      typeof window !== "undefined" &&
      typeof WebSocket !== "undefined" &&
      typeof fetch === "function" &&
      this._isPcmPipelineSupported()
    );
  }
  start(t) {
    return s
      ._(function* () {
        let e;
        let i;
        const { audioCollector } = t;
        if (
          !this.isAvailable() ||
          !(audioCollector == null
            ? undefined
            : audioCollector.isPcmPipelineSupported())
        ) {
          throw wU.Unsupported;
        }
        this._resetSessionState();
        const o = yield audioCollector.getStream();
        if (this._stopRequested) {
          o.getTracks().forEach((t) => t.stop());
          this._emitEnd();
          return;
        }
        this._abortController = new AbortController();
        try {
          let a;
          let l;
          const [c, d] = yield Promise.all([
            ((a = this._abortController.signal),
            s._(function* () {
              let t;
              let e;
              let i;
              let s;
              let n;
              const r = Date.now();
              if (y && r < y.expiryTime) {
                return y.data;
              }
              const o = yield fetch("/mweb/v1/speech/asr_token", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                  scene: "agent",
                }),
                signal: a,
              });
              if (!o.ok) {
                throw Error("ASR token fetch failed");
              }
              const l = yield o.json();
              if (l.ret !== undefined && l.ret !== "0") {
                v.V.warn(
                  "[ASR Token]",
                  "ASR token 接口返回错误: ret=".concat(l.ret),
                );
                throw Gr(l.ret);
              }
              const token =
                (t = (i = l.data) == null ? undefined : i.token) != null
                  ? t
                  : l.token;
              const appkey =
                (e = (s = l.data) == null ? undefined : s.appkey) != null
                  ? e
                  : l.appkey;
              if (!token || !appkey) {
                throw Error("ASR token response incomplete");
              }
              const u = {
                token,
                appkey,
              };
              const h = (n = l.data) == null ? undefined : n.expire_at;
              y =
                typeof h === "number" && h > 0
                  ? {
                      data: u,
                      expiryTime: 1000 * h - 3600000,
                    }
                  : null;
              return u;
            })()),
            ((l = this._abortController.signal),
            s._(function* () {
              let t;
              let e;
              let i;
              let s;
              const r = Date.now();
              if (f && r < f.expiryTime) {
                return f.data;
              }
              try {
                i = yield fetch("/mweb/v1/speech/asr_hotwords", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify({
                    scene: "agent",
                  }),
                  signal: l,
                });
              } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                  throw error;
                }
                v.V.warn("[ASR Hotwords]", "热词接口请求异常:", error);
                throw wU.HotwordsFetchFailed;
              }
              if (!i.ok) {
                v.V.warn(
                  "[ASR Hotwords]",
                  "热词接口请求失败: "
                    .concat(i.status, " ")
                    .concat(i.statusText),
                );
                throw wU.HotwordsFetchFailed;
              }
              try {
                s = yield i.json();
              } catch (error) {
                v.V.warn("[ASR Hotwords]", "热词接口响应解析失败:", error);
                throw wU.HotwordsFetchFailed;
              }
              if (s.ret !== undefined && s.ret !== "0") {
                v.V.warn(
                  "[ASR Hotwords]",
                  "热词接口返回错误: ret=".concat(s.ret),
                );
                throw wU.HotwordsFetchFailed;
              }
              const hot_word_info =
                (t = s.data) == null ? undefined : t.hot_word_info;
              const modify_pair_info =
                (e = s.data) == null ? undefined : e.modify_pair_info;
              const c = n._(
                {},
                hot_word_info && {
                  hot_word_info,
                },
                modify_pair_info && {
                  modify_pair_info,
                },
              );
              f = {
                data: c,
                expiryTime: r + 86400000,
              };
              return c;
            })()).catch((t) => {
              if (t === wU.HotwordsFetchFailed) {
                return {};
              }
              throw t;
            }),
          ]);
          if (this._stopRequested) {
            return void this._emitEnd();
          }
          const u = new p();
          this._sdk = u;
          u.init(this._createInitOptions(c, d));
        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") {
            return;
          }
          throw typeof error === "string" ? error : wU.Unknown;
        }
        if (this._stopRequested) {
          if ((e = this._sdk) != null) {
            e.dispose();
          }
          this._sdk = null;
          this._emitEnd();
          return;
        }
        const _sdk = this._sdk;
        _sdk.onTextResult((t) => {
          if (!this._terminalEvent) {
            this._handleTextResult(t);
          }
        });
        try {
          yield _sdk.connect();
          if (this._stopRequested) {
            return void this._scheduleStop();
          }
          yield this._startAudioPipeline(audioCollector, o);
        } catch (error) {
          this._cleanupAudioPipeline();
          if ((i = this._sdk) != null) {
            i.dispose();
          }
          this._sdk = null;
          throw typeof error === "string" ? error : wU.Unknown;
        }
      })
      .call(this);
  }
  stop() {
    let t;
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "graceful";
    if (this._terminalEvent !== "error") {
      this._stopRequested = true;
      if ((t = this._abortController) != null) {
        t.abort();
      }
      this._abortController = null;
      this._cleanupAudioPipeline();
      if (e === "immediate") {
        return void this._stopImmediately();
      }
      if (!this._sdk) {
        return void this._emitEnd();
      }
      this._scheduleStop();
    }
  }
  _resetSessionState() {
    let t;
    let e;
    if ((t = this._abortController) != null) {
      t.abort();
    }
    this._abortController = null;
    this._clearStopTimer();
    this._cleanupAudioPipeline();
    if ((e = this._sdk) != null) {
      e.dispose();
    }
    this._sdk = null;
    this._segments = [];
    this._stopRequested = false;
    this._terminalEvent = null;
    this.lastTaskId = undefined;
    this.lastMessageId = undefined;
    this.lastLogId = undefined;
  }
  _createInitOptions(t, context) {
    const i = Object.keys(context).length > 0;
    return {
      token: t.token,
      appkey: t.appkey,
      namespace: "DoubaoASR_IMTwoPass",
      wsUrl: o.a.ASR.wsUrl,
      connectTimeout: 10000,
      payload: {
        extra: n._(
          {
            asr_text_post_process_type: "stream_post_process",
          },
          i && {
            context,
          },
        ),
      },
      onStateChange: (t) => {
        if (!(t !== "error" || this._stopRequested)) {
          this._emitError(wU.VoiceInputServerError);
        }
      },
      onError: (t) => {
        v.V.error("[SdkSpeechRecognitionProvider] ASR onError:", t);
        if (t.taskId) {
          this.lastTaskId = t.taskId;
        }
        if (t.messageId) {
          this.lastMessageId = t.messageId;
        }
        if (t.logId) {
          this.lastLogId = t.logId;
        }
        if (!this._stopRequested) {
          this._emitError(wU.VoiceInputServerError);
        }
      },
    };
  }
  _startAudioPipeline(t, e) {
    return s
      ._(function* () {
        const i = yield t.startPcmPipeline(e, (t) => {
          if (this._sdk && !this._stopRequested) {
            try {
              this._sdk.sendAudio(t);
            } catch (error) {
              v.V.error(
                "[SdkSpeechRecognitionProvider] sendAudio error:",
                error,
              );
              this._emitError(wU.VoiceInputServerError);
            }
          }
        });
        if (this._stopRequested || this._terminalEvent) {
          i.stop();
        } else {
          this._pcmPipelineHandle = i;
        }
      })
      .call(this);
  }
  _handleTextResult(t) {
    if (t.taskId) {
      this.lastTaskId = t.taskId;
    }
    if (t.messageId) {
      this.lastMessageId = t.messageId;
    }
    if (t.logId) {
      this.lastLogId = t.logId;
    }
    let e;
    const i = t.text.trim();
    if (i) {
      const s =
        t.type === "final"
          ? {
              final: i,
              interim: "",
            }
          : {
              final: "",
              interim: i,
            };
      for (
        var n = this._resolveSegmentSlot(t), r = [...this._segments];
        r.length <= n;
      ) {
        r.push({
          final: "",
          interim: "",
        });
      }
      r[n] = s;
      this._segments = r;
      if ((e = this.onTranscriptUpdate) != null) {
        e.call(this, q(this._segments));
      }
    }
  }
  _resolveSegmentSlot(t) {
    const { index } = t;
    if (typeof index === "number" && index >= 0 && !Number.isNaN(index)) {
      return Math.floor(index);
    }
    const i = this._segments[this._segments.length - 1];
    const s = !!(i && !i.final && i.interim);
    t.type;
    if (s) {
      return this._segments.length - 1;
    }
    return this._segments.length;
  }
  _scheduleStop() {
    if (!(this._stopTimer || this._terminalEvent)) {
      this._stopTimer = setTimeout(
        () =>
          s
            ._(function* () {
              let t;
              let e;
              this._stopTimer = null;
              try {
                yield (t = this._sdk) == null ? undefined : t.disconnect();
              } catch (t) {
              } finally {
                if ((e = this._sdk) != null) {
                  e.dispose();
                }
                this._sdk = null;
              }
              this._emitEnd();
            })
            .call(this),
        300,
      );
    }
  }
  _stopImmediately() {
    let t;
    this._clearStopTimer();
    if ((t = this._sdk) != null) {
      t.dispose();
    }
    this._sdk = null;
    this._emitEnd();
  }
  _cleanupAudioPipeline() {
    if (this._pcmPipelineHandle) {
      this._pcmPipelineHandle.stop();
      this._pcmPipelineHandle = null;
    }
  }
  _emitEnd() {
    let t;
    if (!this._terminalEvent) {
      this._terminalEvent = "end";
      if ((t = this.onEnd) != null) {
        t.call(this);
      }
    }
  }
  _emitError(t) {
    let e;
    let i;
    if (!this._terminalEvent) {
      this._terminalEvent = "error";
      this._clearStopTimer();
      this._cleanupAudioPipeline();
      if ((e = this._sdk) != null) {
        e.dispose();
      }
      this._sdk = null;
      if ((i = this.onError) != null) {
        i.call(this, t);
      }
    }
  }
  _clearStopTimer() {
    if (this._stopTimer) {
      clearTimeout(this._stopTimer);
      this._stopTimer = null;
    }
  }
  _isPcmPipelineSupported() {
    if (typeof window === "undefined") {
      return false;
    }
    let t;
    const e = window;
    return !!((t = e.AudioContext) != null ? t : e.webkitAudioContext);
  }
  constructor() {
    this._sdk = null;
    this._segments = [];
    this._pcmPipelineHandle = null;
    this._stopRequested = false;
    this._terminalEvent = null;
    this._stopTimer = null;
    this._abortController = null;
  }
}
class w {
  isAvailable() {
    return this._getSpeechRecognitionConstructor() !== undefined;
  }
  start(t) {
    return s
      ._(function* () {
        let e;
        const i = this._getSpeechRecognitionConstructor();
        if (!i) {
          throw Error("Web Speech API is not available");
        }
        this._segments = [];
        const s = new i();
        this._recognition = s;
        s.lang = (e = t.lang) != null ? e : navigator.language;
        s.continuous = true;
        s.interimResults = true;
        s.onresult = (t) => {
          for (
            var { resultIndex, results } = t, s = resultIndex;
            s < results.length;
            s += 1
          ) {
            var n = results[s];
            var r = n[0].transcript.trim();
            if (r) {
              var o = {
                final: n.isFinal ? r : "",
                interim: n.isFinal ? "" : r,
              };
              if (s < this._segments.length) {
                this._segments[s] = o;
              } else {
                this._segments.push(o);
              }
            }
          }
          var { onTranscriptUpdate } = this;
          if (onTranscriptUpdate) {
            onTranscriptUpdate(q(this._segments));
          }
        };
        s.onerror = (t) => {
          var { onError } = this;
          if (onError) {
            onError(this._mapSpeechErrorToCode(t.error));
          }
        };
        s.onend = () => {
          var { onEnd } = this;
          if (onEnd) {
            onEnd();
          }
        };
        s.start();
        return Promise.resolve();
      })
      .call(this);
  }
  stop() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "graceful";
    const _recognition = this._recognition;
    if (_recognition) {
      this._recognition = null;
      try {
        if (t === "immediate") {
          return void _recognition.abort();
        }
        _recognition.stop();
      } catch (t) {}
    }
  }
  _mapSpeechErrorToCode(t) {
    let e;
    if (
      (e = {
        "not-allowed": wU.NotAllowed,
        "service-not-allowed": wU.ServiceNotAllowed,
        "no-speech": wU.NoSpeech,
        "audio-capture": wU.AudioCapture,
        aborted: wU.Aborted,
      }[t]) != null
    ) {
      return e;
    }
    return wU.Unknown;
  }
  _getSpeechRecognitionConstructor() {
    let t;
    if (typeof window !== "undefined") {
      if ((t = window.SpeechRecognition) != null) {
        return t;
      }
      return window.webkitSpeechRecognition;
    }
  }
  constructor() {
    this._recognition = null;
    this._segments = [];
  }
}
function k() {
  const t = new S();
  if (t.isAvailable()) {
    return t;
  }
  const e = new w();
  if (e.isAvailable()) {
    return e;
  }
  return null;
}
export { k as n };
