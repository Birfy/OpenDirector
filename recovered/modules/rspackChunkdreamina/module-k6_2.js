import { $n, EL, KK, Qz, ob, p3 } from "./module-bo_3.js";
import { C4 } from "./module-Vj_2.js";
import { v as v_1 } from "./module-A7.js";
let a;
let o;
let i;
let n;
let c;
let l;
let m;
let s;
if (require.j == "wl4") var C = require("./module-K8.js");
const v = require("./module-Dm.js");
function _() {
  return Math.floor(4294967296 * Math.random())
    .toString(16)
    .padStart(8, "0");
}
a = c || (c = {});
a[(a.Discard = 1)] = "Discard";
a[(a.Database = 2)] = "Database";
a[(a.ReportMetrics = 4)] = "ReportMetrics";
a[(a.AlwaysReport = 8)] = "AlwaysReport";
o = l || (l = {});
o[(o.ChildOf = 0)] = "ChildOf";
o[(o.FollowsFrom = 1)] = "FollowsFrom";
i = m || (m = {});
i[(i.Master = 0)] = "Master";
i[(i.Slave = 1)] = "Slave";
class f {
  get spans() {
    return this._spans;
  }
  get hasError() {
    return this._hasError;
  }
  get hasClosed() {
    return this._hasClosed;
  }
  get duration() {
    return this._duration;
  }
  get consumeType() {
    return this._consumeType;
  }
  get processMap() {
    return this._processMap;
  }
  findSpanById(e) {
    return this._spans.find((t) => t.spanId === e);
  }
  addSpan(e) {
    this._spanIdKeys.add(e.spanId);
    this._spans.push(e);
    this._processMap.set(e.process.name, e.process);
  }
  commitSpan(e, t) {
    if (!this._spanIdKeys.has(e.spanId)) {
      this.addSpan(e);
    }
    if (e.hasError) {
      this._hasError = true;
    }
    this._consumeType |= t;
  }
  toJSON(e = true) {
    let errorCode;
    let process = [];
    for (let e of this._processMap.values()) {
      process.push(e.toJSON());
    }
    let spans = [];
    let o = this.hasError ? "" : undefined;
    let metrics = {};
    for (let r of this._spans) {
      if (e) {
        let e = r.toJSON();
        spans.push(e);
        if (r.hasError) {
          o += `|${e.error}`;
          if (errorCode === undefined) {
            ({ errorCode } = e);
          }
        }
      }
      Object.assign(metrics, r.exportMetrics());
    }
    return {
      traceName: `${this._spans[0].process.name}::${this._spans[0].operationName}`,
      traceId: this.traceId,
      spans,
      process,
      duration: this.duration,
      hasError: this.hasError,
      errors: o == null ? undefined : o.slice(1),
      errorCode,
      isTimeout: this._isTimeout,
      metrics,
    };
  }
  dispose() {
    if (this._hasError || this._consumeType & c.AlwaysReport) {
      I.reportTrace(this);
    } else {
      if (this._consumeType & c.Database) {
        I.saveTrace(this);
      }
      if (this._consumeType & c.ReportMetrics) {
        I.reportMetrics(this);
      }
    }
  }
  constructor(e) {
    this.traceId = e;
    this._spans = [];
    this._spanIdKeys = new Set();
    this._processMap = new Map();
    this._hasError = false;
    this._isTimeout = false;
    this._hasClosed = false;
    this._duration = -1;
    this._consumeType = c.Discard;
  }
}
class h extends f {
  setTimeout(e) {
    this._timeout = e;
  }
  isTimeout() {
    return Date.now() - this._startTime > this._timeout;
  }
  dispose() {
    if (!this._hasClosed) {
      this._hasError = true;
      this._isTimeout = true;
    }
    super.dispose();
  }
  commitSpan(e, t) {
    super.commitSpan(e, t);
    if (e.metrics && e.metrics.length > 0 && this._consumeType <= c.Database) {
      this._consumeType = this._consumeType | c.ReportMetrics;
    }
    if (e.root) {
      this._hasClosed = true;
      this._duration = e.duration;
      if (this.isTimeout()) {
        this._isTimeout = true;
        this._hasError = true;
      }
    }
  }
  constructor(e, t) {
    super(e);
    this._timeout = t;
    this.type = m.Master;
    this._startTime = Date.now();
  }
}
class S extends f {
  dispose() {
    super.dispose();
  }
  constructor(...e) {
    super(...e);
    this.type = m.Slave;
  }
}
class g {
  get(e) {
    let t = this._cache.get(e);
    if (t) {
      this._cache.delete(e);
      this._cache.set(e, t);
    }
    return t;
  }
  put(e, t) {
    if (this._cache.has(e)) {
      this._cache.delete(e);
    } else if (this._cache.size >= this._capacity) {
      let e = this._cache.keys().next().value;
      let t = this._cache.get(e);
      this._cache.delete(e);
      t.dispose();
    }
    this._cache.set(e, t);
  }
  remove(e) {
    let t = this._cache.get(e);
    if (t) {
      this._cache.delete(e);
      t.dispose();
    }
  }
  size() {
    return this._cache.size;
  }
  constructor(e) {
    this._capacity = e;
    this._cache = new Map();
  }
}
class y {
  bootstrap() {
    this._timer = setTimeout(this._tick, this._interval);
  }
  stop() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
  }
  constructor(e = 30000) {
    this._interval = e;
    this._onTick = new v_1();
    this._tick = () => {
      this._onTick.fire();
      this._timer = setTimeout(this._tick, this._interval);
    };
    this.onTick = this._onTick.event;
  }
}
class w {
  add(e) {
    if (e.type === m.Master) {
      this._masters.set(e.traceId, e);
    } else {
      this._cache.put(e.traceId, e);
    }
  }
  get(e) {
    if (this._masters.has(e)) {
      return this._masters.get(e);
    }
    return this._cache.get(e);
  }
  remove(e) {
    if (!this._masters.has(e)) {
      return;
    }
    let t = this._masters.get(e);
    this._masters.delete(e);
    if (t.hasError || t.consumeType > c.Discard) {
      t.dispose();
    } else {
      this._cache.put(e, t);
    }
  }
  clear() {
    this._cache = new g(100);
    this._masters.clear();
  }
  _checkTimeout() {
    let e = [];
    for (let t of this._masters.values()) {
      if (t.isTimeout()) {
        e.push(t);
      }
    }
    for (let t of e) {
      this._masters.delete(t.traceId);
      t.dispose();
    }
  }
  constructor() {
    this._cache = new g(100);
    this._masters = new Map();
    this._timer = new y();
    this._timer.bootstrap();
    C4(
      this._timer.onTick(() => {
        this._checkTimeout();
      }),
    );
  }
}
var I = new (class {
  registerReport(e) {
    this._report = e;
  }
  registerSaveInDatabase(e) {
    this._saveInDatabase = e;
  }
  newTrace(e, t) {
    let r = new h(e, t);
    this._store.add(r);
  }
  addSpan(e) {
    this._getOrCreateTrace(e).addSpan(e);
  }
  commitSpan(e, t) {
    let r = this._getOrCreateTrace(e);
    r.commitSpan(e, t);
    if (r.hasClosed) {
      this._store.remove(r.traceId);
    }
  }
  reportTrace(e) {
    let t;
    if ((t = this._report) != null) {
      t.call(this, e);
    }
  }
  registerReportMetrics(e) {
    this._reportMetrics = e;
  }
  saveTrace(e) {
    let t;
    if ((t = this._saveInDatabase) != null) {
      t.call(this, e);
    }
  }
  reportMetrics(e) {
    let t;
    if ((t = this._reportMetrics) != null) {
      t.call(this, e);
    }
  }
  getTrace(e) {
    return this._store.get(e);
  }
  reset() {
    this._store.clear();
    this._report = undefined;
    this._saveInDatabase = undefined;
    this._reportMetrics = undefined;
  }
  _createTrace(e) {
    let t = new S(e);
    this._store.add(t);
    return t;
  }
  _getOrCreateTrace(e) {
    let { traceId } = e;
    let r = this._store.get(traceId);
    if (!r) {
      r = this._createTrace(traceId);
    }
    return r;
  }
  constructor() {
    this._store = new w();
  }
})();
n = s || (s = {});
n[(n.String = 0)] = "String";
n[(n.Boolean = 1)] = "Boolean";
n[(n.Double = 2)] = "Double";
n[(n.Buffer = 3)] = "Buffer";
export var r9 = class e {
  static string(t, r) {
    let a = new e(t);
    a.vStr = r;
    a.valueType = 0;
    return a;
  }
  static bool(t, r) {
    let a = new e(t);
    a.vBool = r;
    a.valueType = 1;
    return a;
  }
  static double(t, r) {
    let a = new e(t);
    a.vDouble = r;
    a.valueType = 2;
    return a;
  }
  static buffer(t, r) {
    let a = new e(t);
    a.vBuffer = r;
    a.valueType = 3;
    return a;
  }
  toJSON() {
    switch (this.valueType) {
      case 0:
        return {
          [this.key]: this.vStr,
        };
      case 1:
        return {
          [this.key]: this.vBool,
        };
      case 2:
        return {
          [this.key]: this.vDouble,
        };
      case 3:
        return {
          [this.key]: ((e) => {
            let t = new Uint8Array(e);
            let r = "";
            for (let e of t) {
              r += String.fromCharCode(e);
            }
            return btoa(r);
          })(this.vBuffer),
        };
      default:
        v.DR(this.valueType);
    }
  }
  constructor(e) {
    this.key = e;
    this.valueType = 0;
    this.vStr = "";
    this.vBool = false;
    this.vDouble = 0;
  }
};
const j = class e {
  static get(t) {
    if (e._pool.has(t)) {
      return e._pool.get(t);
    }
    let r = new e(t);
    e._pool.set(t, r);
    return r;
  }
  toJSON() {
    return {
      name: this.name,
      tags: this.tags.map((e) => e.toJSON()),
    };
  }
  constructor(e, t = []) {
    this.name = e;
    this.tags = t;
  }
};
j._pool = new Map();
class k {
  toJSON() {
    return {
      refType: this.refType,
      spanId: this.spanId,
      traceId: this.traceId,
    };
  }
  constructor(e, t, r) {
    this.traceId = e;
    this.spanId = t;
    this.refType = r;
  }
}
class P {
  get traceId() {
    return this._spanContext.traceId;
  }
  get spanId() {
    return this._spanContext.spanId;
  }
  get shouldRecordArgs() {
    return this._spanContext.recordInOut;
  }
  get hasError() {
    return this._hasError;
  }
  get duration() {
    return this._duration;
  }
  get process() {
    return this._process;
  }
  get operationName() {
    return this._operationName;
  }
  get reference() {
    return this._reference;
  }
  get startTime() {
    return this._startTime;
  }
  get metrics() {
    return this._metrics;
  }
  linkParent(e, t = l.ChildOf) {
    this._reference = new k(this._spanContext.traceId, e, t);
  }
  addLink(e) {
    this._links.push(e);
  }
  addLinks(e) {
    this._links.push(...e);
  }
  setReferenceType(e) {
    if (this._reference) {
      this._reference.refType = e;
    }
  }
  setOperationName(e) {
    this._operationName = e;
  }
  addEvent(e) {
    this._tags.push(e);
  }
  addEvents(e) {
    this._tags.push(...e);
  }
  setSent(e) {
    try {
      let t = JSON.stringify(e);
      this._tags.push(r9.string("request", t.substring(0, 1000)));
    } catch (e) {
      return;
    }
  }
  setReceive(e) {
    try {
      let t = JSON.stringify(e);
      this._tags.push(r9.string("response", t.substring(0, 1000)));
    } catch (e) {
      return;
    }
  }
  addLog(fields) {
    this._logs.push({
      timestamp: Date.now(),
      fields,
    });
  }
  addMetrics(e) {
    this._metrics.push(...e);
  }
  markError(e) {
    let t;
    let r;
    let a;
    this._hasError = true;
    this._tags.push(r9.bool("error", true));
    if (e instanceof Error) {
      this._tags.push(r9.double("error_code", (t = e.code) != null ? t : -1));
      this._errorCode = String((r = e.code) != null ? r : -1);
      this._tags.push(r9.string("error_message", e.message));
      this._tags.push(r9.string("error_name", e.name));
      this._error = `${e.name}_${e.message}`;
      if (e.stack) {
        this._tags.push(r9.string("error_stack", e.stack));
      }
      if (e.cause) {
        this._tags.push(
          r9.string(
            "error_cause",
            typeof e.cause === "string" ? e.cause : JSON.stringify(e.cause),
          ),
        );
      }
    } else if (C.GC(e) && !e.ok) {
      this._tags.push(r9.double("error_code", e.code));
      this._errorCode = String((a = e.code) != null ? a : -1);
      this._tags.push(r9.string("error_message", e.msg));
      if (e.cause) {
        this._tags.push(r9.string("error_cause", e.toString()));
      }
      if (e.stack) {
        this._tags.push(r9.string("error_stack", e.stack));
      }
      this._error = `${e.code}_${e.msg}`;
    }
  }
  end() {
    this._duration = Date.now() - this._startTime;
    this._spanContext.commit(this);
  }
  toJSON() {
    let references = this._reference ? [this._reference.toJSON()] : [];
    if (this._links.length > 0) {
      this._links.forEach((t) =>
        references.push(
          new k(t.context.traceId, t.context.spanId, l.FollowsFrom).toJSON(),
        ),
      );
    }
    return {
      traceId: this._spanContext.traceId,
      spanId: this._spanContext.spanId,
      startTime: this._startTime,
      duration: this._duration,
      operationName: this._operationName,
      references,
      processName: this._process.name,
      tags: this._tags.map((e) => e.toJSON()),
      logs: this._logs.map((e) => ({
        timestamp: e.timestamp,
        fields: e.fields.map((e) => e.toJSON()),
      })),
      hasError: this._hasError,
      error: this._error,
      errorCode: this._errorCode,
    };
  }
  exportMetrics() {
    let e = {};
    let t = this._operationName ? `${this._operationName}.` : "";
    for (let r of this._metrics) {
      Object.entries(r.toJSON()).forEach(
        ([r, a]) => (e[`${this._process.name}.${t}${r}`] = a),
      );
    }
    return e;
  }
  constructor(e, t, r = false) {
    this._spanContext = e;
    this.root = r;
    this._links = [];
    this._startTime = Date.now();
    this._duration = -1;
    this._tags = [];
    this._logs = [];
    this._metrics = [];
    this._operationName = "";
    this._hasError = false;
    this._process = j.get(t);
  }
}
export var nd = "SPAN_CONTEXT";
const M = "SPAN_CONTEXT_CONSUME_TYPE";
const A = "SPAN_CONTEXT_TRACE_ID";
const D = "OUTTER_PRIMARY_SPANS";
const R = "SPAN_CONTEXT_SPAN_ID";
class E {
  get recordInOut() {
    let e;
    return (e = this.ctx.getValue("SPAN_CONTEXT_RECORD_IN_OUT")) != null && e;
  }
  get traceId() {
    return this.ctx.getValue(A);
  }
  get spanId() {
    return this.ctx.getValue(R);
  }
  get consumeType() {
    return this.ctx.getValue(M);
  }
  get timeout() {
    let e;
    if ((e = this.ctx.getValue("SPAN_CONTEXT_TIMEOUT")) != null) {
      return e;
    }
    return 600000;
  }
  newTrace() {
    I.newTrace(this.traceId, this.timeout);
  }
  add(e) {
    this._span = e;
    I.addSpan(e);
  }
  commit(e) {
    if (e.root && this.ctx.getValue(D)) {
      Promise.all(this.ctx.getValue(D)).then(() => {
        I.commitSpan(e, this.consumeType);
      });
    } else {
      I.commitSpan(e, this.consumeType);
    }
  }
  addLink(e) {
    this._span.addLink(e);
  }
  addEvent(e) {
    this._span.addEvent(e);
  }
  addEvents(...e) {
    this._span.addEvents(e);
  }
  addLog(...e) {
    this._span.addLog(e);
  }
  addMetrics(e) {
    this._span.addMetrics(e);
  }
  markError(e) {
    this._span.markError(e);
  }
  constructor(e) {
    this.ctx = e;
    this.ctx.setValue(R, Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    this.ctx.setValue(nd, this);
  }
}
const B = {
  [EL.Entry]: c.AlwaysReport,
  [EL.Event]: c.Discard,
  [EL.UserInput]: c.Discard,
  [EL.Task]: c.Discard,
};
export function uS(e, ...t) {
  let r;
  let a;
  r = (e) => {
    e.addEvents(...t);
  };
  return !!(a = e.getValue(nd)) && (r(a), true);
}
function L(e, t) {
  let r;
  let a;
  let o = e.getValue(nd);
  (a = e.background()).setValue(A, e.getValue(A));
  a.setValue(M, e.getValue(M));
  let i = new E(a);
  if (I.getTrace(o.traceId)) {
    r = new P(i, t);
  } else {
    i.newTrace();
    r = new P(i, t, true);
  }
  r.linkParent(o.spanId);
  i.add(r);
  return {
    spanContext: i,
    span: r,
  };
}
function F(e, t) {
  let r;
  r = B[e.type];
  if (e.getValue(M) !== undefined) {
    r = e.getValue(M);
  } else {
    e.setValue(M, r);
  }
  e.setValue(A, `${_()}${_()}${_()}${_()}`);
  let a = new E(e);
  a.newTrace();
  let o = new P(a, t, true);
  a.add(o);
  return {
    spanContext: a,
    span: o,
  };
}
function J(span, t) {
  if (C.GC(t) && !t.ok) {
    span.markError(t);
  }
  if (span.shouldRecordArgs) {
    span.setReceive(t);
  }
  span.end();
}
function O(span, t) {
  span.markError(t);
  span.end();
}
function Q(e, t, r, a) {
  let o = r.bind(t);
  let i = a != null ? a : r.name;
  return (...t) => {
    let r = t[0];
    if (!(r instanceof ob)) {
      return o(...t);
    }
    let { span, spanContext } = r.getValue(nd) ? L(r, e) : F(r, e);
    span.setOperationName(i);
    t[0] = spanContext.ctx;
    try {
      if (spanContext.recordInOut) {
        span.setSent(t);
      }
      let e = o(...t);
      if (e instanceof Promise) {
        span.setReferenceType(l.FollowsFrom);
        return new Promise((resolve, reject) => {
          e.then((e) => {
            J(span, e);
            resolve(e);
          })
            .catch((e) => {
              O(span, e);
              reject(e);
            })
            .finally(() => {
              span.setReferenceType(l.ChildOf);
            });
        });
      }
      J(span, e);
      return e;
    } catch (error) {
      O(span, error);
      throw error;
    }
  };
}
export function M2(e, t) {
  let r = Object.create(null);
  let a = new Proxy(r, {
    get(r, a) {
      if (a in r) {
        return r[a];
      }
      let o = t[a];
      if (typeof o !== "function") {
        return o;
      }
      let i = Q(e, t, o, a.toString());
      r[a] = i;
      return i;
    },
    set: (e, r, a) => {
      t[r] = a;
      return true;
    },
  });
  r.__origin__ = t;
  return a;
}
export function cx(e, t, r = []) {
  return (r, a, o) => {
    let o_value = o.value;
    o.value = function (...r) {
      return Q(e, this, o_value, t)(...r);
    };
    return o;
  };
}
export function Or(e, t, r) {
  return cx(e, r)(null, t.name, {
    value: t,
    writable: true,
    enumerable: false,
    configurable: true,
  }).value;
}
export function a5(e, t, r = "") {
  let { span, spanContext } = e.getValue(nd) ? L(e, t) : F(e, t);
  span.setOperationName(r);
  return {
    ctx: spanContext.ctx,
    span,
  };
}
export function RE(e, t) {
  let { contextType, processName, operationName } = t;
  let i = ((e) => {
    switch (e) {
      case EL.Entry:
        return Qz();
      case EL.Event:
        return KK();
      case EL.UserInput:
        return p3();
      case EL.Task:
      default:
        return $n();
    }
  })(contextType);
  return Q(processName, null, e, operationName)(i);
}
class H {
  static double(e, t) {
    return r9.double(e, t);
  }
  toJSON() {
    if (this.valueType === s.Double) {
      return {
        [this.key]: this.vDouble,
      };
    }
    v.DR(this.valueType);
  }
  constructor(e) {
    this.key = e;
    this.valueType = s.Double;
    this.vDouble = 0;
  }
}
H.double("fail", 1);
H.double("success", 1);
H.double("throughput", 1);
