let i;
let o;
let r;
let a;
let n;
let s;
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.CondCast = undefined;
exports.Json = undefined;
exports.Int = undefined;
exports.UInt = undefined;
exports.Int32 = undefined;
exports.Int64 = undefined;
exports.Float = undefined;
exports.Float64 = undefined;
exports.RTSMangleKey = undefined;
exports.JSONObject = undefined;
exports.Serializable = undefined;
exports.serializable = undefined;
exports.serializableDecorate = undefined;
exports.isInterface = undefined;
exports.setInterfaces = undefined;
exports.initMetadataFor = undefined;
exports.getOrCreateInterface = undefined;
exports.readonlyMapOf = undefined;
exports.readonlySetOf = undefined;
exports.readonlyArrayOf = undefined;
exports.ForcedCast = undefined;
exports.SerializableWithCopy = undefined;
exports.RTSDataClass = undefined;
let d = (e, t) => {
  let i = [];
  return JSON.parse(
    (e = String(e).replace(
      /(?:"(?:(?=(\\?))\1.)*?"\s*:?|[0-9eE+.-]+|true|false|null)/g,
      (e) => {
        if (e.endsWith(":")) {
          return e;
        }
        if (e.startsWith('"')) {
          return (i.push(e) - 1).toString();
        }
        return `"${e}"`;
      },
    )),
    (e, source) => {
      switch (typeof source) {
        case "number":
          source = i[source];
        case "string":
          return t.call(this, e, JSON.parse(source), {
            source,
          });
      }
      return t.call(this, e, source, {});
    },
  );
};
let l = (e, t, i) => {
  if (
    typeof t === "number" &&
    t.toString() !== (i == null ? undefined : i.source)
  ) {
    return Number(i.source);
  }
  return t;
};
exports.CondCast = {
  toNumber(e, t = false) {
    if (e != null) {
      if (typeof e === "number") {
        return e;
      }
      if (t && typeof e === "bigint") {
        return Number(e);
      }
    }
  },
  toBigInt(e, t = false) {
    if (e != null) {
      if (typeof e === "bigint" || typeof e === "number") {
        return String(e);
      }
      if (typeof e === "string") {
        return e;
      }
    }
  },
  toString: (e) => {
    if (e != null && typeof e === "string") {
      return e;
    }
  },
  toBoolean: (e) => {
    if (e != null && typeof e === "boolean") {
      return e;
    }
  },
  toArray: (e) => {
    if (e != null && Array.isArray(e)) {
      return e;
    }
  },
  toNumberArray: (e) => {
    if (
      e != null &&
      Array.isArray(e) &&
      (e.length === 0 || typeof e[0] === "number")
    ) {
      return e;
    }
  },
  toBigIntArray: (e) => {
    if (
      e != null &&
      Array.isArray(e) &&
      (e.length === 0 || typeof e[0] === "bigint")
    ) {
      return e;
    }
  },
  toStringArray: (e) => {
    if (
      e != null &&
      Array.isArray(e) &&
      (e.length === 0 || typeof e[0] === "string")
    ) {
      return e;
    }
  },
  toBooleanArray: (e) => {
    if (
      e != null &&
      Array.isArray(e) &&
      (e.length === 0 || typeof e[0] === "boolean")
    ) {
      return e;
    }
  },
  toAny: (e) => {
    if (e != null) {
      return e;
    }
  },
  toClass: (e, t) => {
    if (e != null && e instanceof t) {
      return e;
    }
  },
  toFunction: (e) => {
    if (e != null && typeof e === "function") {
      return e;
    }
  },
  toInterface(e, t) {
    if (e != null) {
      if (v(e, t)) {
        return e;
      }
      return undefined;
    }
  },
  toInstanceOf(e, t) {
    if (e != null) {
      if (e instanceof t) {
        return e;
      }
      return undefined;
    }
  },
};
exports.Json = {
  parse(e, t) {
    if (t === undefined) {
      return d(e, l);
    }
    try {
      return d(e, l);
    } catch (error) {
      t(error);
    }
    return {};
  },
  stringify: (e) =>
    JSON.stringify(e, (e, t) => {
      if (t != null && typeof t === "bigint") {
        return `__RTS_BIGINT_BEGIN__${t.toString()}__RTS_BIGINT_END__`;
      }
      return t;
    }).replace(/"__RTS_BIGINT_BEGIN__(\d+)__RTS_BIGINT_END__"/g, "$1"),
  create: (e) => e,
  fromMap(e) {
    let t = {};
    for (let [i, o] of e) {
      t[i] = o;
    }
    return t;
  },
  toMutable: (e) => JSON.parse(JSON.stringify(e)),
  toImmutable: (e) => e,
  update: (e, t) => {
    Object.assign(e, t);
    return e;
  },
  has: function (e, t) {
    return e.hasOwnProperty(t);
  },
  get: function (e, t) {
    return e[t];
  },
  set: function (e, t, i) {
    e[t] = i;
  },
  keys: function (e) {
    return Object.keys(e);
  },
};
a = i || (i = {});
a[(a.DECIMAL = 10)] = "DECIMAL";
a[(a.HEX = 16)] = "HEX";
a[(a.OCTAL = 8)] = "OCTAL";
a[(a.BINARY = 2)] = "BINARY";
n = o || (o = {});
n[(n.UNKNOWN = 0)] = "UNKNOWN";
n[(n.INT_32 = 1)] = "INT_32";
n[(n.INT_64 = 2)] = "INT_64";
n[(n.FLOAT_32 = 3)] = "FLOAT_32";
n[(n.FLOAT_64 = 4)] = "FLOAT_64";
class p {
  constructor() {
    this.body = "";
    this.base = i.DECIMAL;
    this.explicitType = o.UNKNOWN;
  }
}
function u(e, t) {
  let i = new p();
  if (e.endsWith("i32") || e.endsWith("I32")) {
    i.body = e.slice(0, e.length - 3);
    i.explicitType = o.INT_32;
    return i;
  }
  if (e.endsWith("i64") || e.endsWith("I64")) {
    i.body = e.slice(0, e.length - 3);
    i.explicitType = o.INT_64;
    return i;
  }
  if (e.endsWith("f32") || e.endsWith("F32")) {
    i.body = e.slice(0, e.length - 3);
    i.explicitType = o.FLOAT_32;
    return i;
  }
  if (e.endsWith("f64") || e.endsWith("F64")) {
    i.body = e.slice(0, e.length - 3);
    i.explicitType = o.FLOAT_64;
    return i;
  }
  i.body = e;
  return i;
}
s = r || (r = {});
s[(s.PARSE = 0)] = "PARSE";
s[(s.FROM_STRING = 1)] = "FROM_STRING";
exports.Int = {
  MIN_VALUE: -2147483648,
  MAX_VALUE: 2147483647,
  parse: (e, a = 10) => {
    let n = u(e, r.PARSE);
    if (n.explicitType !== o.UNKNOWN || n.base !== i.DECIMAL) {
      return;
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.Int.MIN_VALUE ||
        s > exports.Int.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
  },
  fromString: (e, a = 10) => {
    let n = u(e, r.FROM_STRING);
    if (n.explicitType !== o.UNKNOWN || n.base !== i.DECIMAL) {
      throw Error(`invalid literal: ${e}`);
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.Int.MIN_VALUE ||
        s > exports.Int.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
    throw Error(`literal out of range: ${e}`);
  },
  fromUInt: (e) => e,
  fromInt32: (e) => e,
  fromInt64: (e) => Number(e),
  fromFloat: (e) => Math.trunc(e),
  fromFloat64: (e) => Math.trunc(e),
  toUInt: (e) => e >>> 0,
  toFloat: (e) => Math.fround(e),
  toFloat64: (e) => e,
  toInt32: (e) => e,
  toInt64: (e) => `${e}`,
};
exports.UInt = {
  MIN_VALUE: 0,
  MAX_VALUE: 4294967295,
  parse: (e, a = 10) => {
    let n = u(e, r.PARSE);
    if (n.explicitType !== o.UNKNOWN || n.base !== i.DECIMAL) {
      return;
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.UInt.MIN_VALUE ||
        s > exports.UInt.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
  },
  fromString: (e, a = 10) => {
    let n = u(e, r.FROM_STRING);
    if (n.explicitType !== o.UNKNOWN || n.base !== i.DECIMAL) {
      throw Error(`invalid literal: ${e}`);
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.UInt.MIN_VALUE ||
        s > exports.UInt.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
    throw Error(`literal out of range: ${e}`);
  },
  fromInt: (e) => e >>> 0,
  fromInt32: (e) => e >>> 0,
  fromFloat: (e) => Math.trunc(e) >>> 0,
  fromFloat64: (e) => Math.trunc(e) >>> 0,
  toFloat: (e) => Math.fround(e),
  toFloat64: (e) => e >>> 0,
  toInt: (e) => 0 | e,
  toInt32: (e) => 0 | e,
  toInt64: (e) => `${e}`,
};
exports.Int32 = {
  MIN_VALUE: -2147483648,
  MAX_VALUE: 2147483647,
  parse: (e, a = 10) => {
    let n = u(e, r.PARSE);
    if (
      (n.explicitType !== o.UNKNOWN && n.explicitType !== o.INT_32) ||
      n.base !== i.DECIMAL
    ) {
      return;
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.Int32.MIN_VALUE ||
        s > exports.Int32.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
  },
  fromString: (e, a = 10) => {
    let n = u(e, r.FROM_STRING);
    if (
      (n.explicitType !== o.UNKNOWN && n.explicitType !== o.INT_32) ||
      n.base !== i.DECIMAL
    ) {
      throw Error(`invalid literal: ${e}`);
    }
    let s = Number.parseInt(n.body, a != null ? a : 10);
    if (
      !(
        s < exports.Int32.MIN_VALUE ||
        s > exports.Int32.MAX_VALUE ||
        Number.isNaN(s)
      )
    ) {
      return s;
    }
    throw Error(`literal out of range: ${e}`);
  },
  fromInt: (e) => e,
  fromUInt: (e) => 0 | e,
  fromInt64: (e) => Number(e),
  fromFloat: (e) => Math.trunc(e),
  fromFloat64: (e) => Math.trunc(e),
  toFloat: (e) => Math.fround(e),
  toFloat64: (e) => e,
  toInt: (e) => e,
  toUInt: (e) => e >>> 0,
  toInt64: (e) => `${e}`,
};
exports.Int64 = {
  MIN_VALUE: "-9223372036854775808",
  MAX_VALUE: "9223372036854775807",
  parse: (e, t = 10) => e,
  fromString: (e, t = 10) => e,
  fromInt: (e) => String(e),
  fromUInt: (e) => String(e >>> 0),
  fromInt32: (e) => String(e),
  fromFloat: (e) => String(Math.trunc(e)),
  fromFloat64: (e) => String(Math.trunc(e)),
  toFloat: (e) => Math.fround(Number(e)),
  toFloat64: (e) => Number(e),
  toInt: (e) => 0 | Number(e),
  toUInt: (e) => Number(e) >>> 0,
  toInt32: (e) => 0 | Number(e),
};
exports.Float = {
  MAX_VALUE: 3.4028235e38,
  MIN_VALUE: 1.1754944e-38,
  parse: (e) => {
    let a = u(e, r.PARSE);
    if (
      (a.explicitType !== o.UNKNOWN && a.explicitType !== o.FLOAT_32) ||
      a.base !== i.DECIMAL
    ) {
      return;
    }
    let n = Number.parseFloat(a.body);
    if (n > exports.Float.MAX_VALUE) {
      return Infinity;
    }
    if (n < -exports.Float.MAX_VALUE) {
      return -Infinity;
    }
    if (Number.isNaN(n)) {
      return undefined;
    }
    return n;
  },
  fromString: (e) => {
    let a = u(e, r.FROM_STRING);
    if (
      (a.explicitType !== o.UNKNOWN && a.explicitType !== o.FLOAT_32) ||
      a.base !== i.DECIMAL
    ) {
      throw Error(`invalid literal: ${e}`);
    }
    let n = Number.parseFloat(a.body);
    if (n > exports.Float.MAX_VALUE) {
      return Infinity;
    }
    if (n < -exports.Float.MAX_VALUE) {
      return -Infinity;
    }
    if (!Number.isNaN(n)) {
      return n;
    }
    throw Error(`invalid literal: ${e}`);
  },
  fromInt: (e) => e,
  fromUInt: (e) => e,
  fromInt32: (e) => e,
  fromInt64: (e) => Number(e),
  fromFloat64: (e) => e,
  toInt: (e) => {
    if (e >= exports.Int.MAX_VALUE) {
      return exports.Int.MAX_VALUE;
    }
    if (e <= exports.Int.MIN_VALUE) {
      return exports.Int.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e);
  },
  toUInt: (e) => {
    if (e >= exports.UInt.MAX_VALUE) {
      return exports.UInt.MAX_VALUE;
    }
    if (e <= exports.UInt.MIN_VALUE) {
      return exports.UInt.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e) >>> 0;
  },
  toInt32: (e) => {
    if (e >= exports.Int32.MAX_VALUE) {
      return exports.Int32.MAX_VALUE;
    }
    if (e <= exports.Int32.MIN_VALUE) {
      return exports.Int32.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e);
  },
  toInt64: (e) => `${e}`,
  toFloat64: (e) => e,
  hashCode: (e) => e,
  isNaN: (e) => Number.isNaN(e),
  isFinite: (e) => Number.isFinite(e),
};
console.assert = function (e, t) {
  if (!e) {
    if (t !== undefined) {
      console.log("assert failed", t);
    }
    throw Error("RTS Assert failed");
  }
};
exports.Float64 = {
  MAX_VALUE: 1.7976931348623157e308,
  MIN_VALUE: 5e-324,
  EPSILON: 2.220446049250313e-16,
  NEGATIVE_INFINITY: -Infinity,
  POSITIVE_INFINITY: Infinity,
  MAX_SAFE_INTEGER: 9007199254740991,
  MIN_SAFE_INTEGER: -9007199254740991,
  isFinite: (e) => Number.isFinite(e),
  isInteger: (e) => Number.isFinite(e) && Math.trunc(e) === e,
  isNaN: (e) => Number.isNaN(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  parse: (e) => {
    let t = u(e, r.PARSE);
    if (
      (t.explicitType !== o.UNKNOWN && t.explicitType !== o.FLOAT_64) ||
      t.base !== i.DECIMAL
    ) {
      return;
    }
    let a = Number.parseFloat(t.body);
    if (!Number.isNaN(a)) {
      return a;
    }
  },
  fromString: (e) => {
    let t = u(e, r.FROM_STRING);
    if (
      (t.explicitType !== o.UNKNOWN && t.explicitType !== o.FLOAT_64) ||
      t.base !== i.DECIMAL
    ) {
      throw Error(`invalid literal: ${e}`);
    }
    let a = Number.parseFloat(t.body);
    if (!Number.isNaN(a)) {
      return a;
    }
    throw Error(`invalid literal: ${e}`);
  },
  fromInt: (e) => e,
  fromUInt: (e) => e,
  fromInt32: (e) => e,
  fromInt64: (e) => Number(e),
  fromFloat: (e) => e,
  toFloat: (e) => Math.fround(e),
  toInt: (e) => {
    if (e >= exports.Int.MAX_VALUE) {
      return exports.Int.MAX_VALUE;
    }
    if (e <= exports.Int.MIN_VALUE) {
      return exports.Int.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e);
  },
  toUInt: (e) => {
    if (e >= exports.UInt.MAX_VALUE) {
      return exports.UInt.MAX_VALUE;
    }
    if (e <= exports.UInt.MIN_VALUE) {
      return exports.UInt.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e) >>> 0;
  },
  toInt32: (e) => {
    if (e >= exports.Int32.MAX_VALUE) {
      return exports.Int32.MAX_VALUE;
    }
    if (e <= exports.Int32.MIN_VALUE) {
      return exports.Int32.MIN_VALUE;
    }
    if (Number.isNaN(e)) {
      return 0;
    }
    return Math.trunc(e);
  },
  toInt64: (e) => `${e}`,
  hashCode: (e) => e,
};
exports.RTSMangleKey = class {
  constructor(e) {
    this.key = e;
  }
};
class c {
  constructor(e = {}) {
    this.rawMap = e;
  }
  get(e) {
    let t = this.rawMap[e];
    if (t !== null) {
      return t;
    }
  }
  getInt(e) {
    let t = this.get(e);
    if (typeof t === "number") {
      return t;
    }
  }
  getInt64(e) {
    let t = this.get(e);
    if (typeof t === "number") {
      return `${t}`;
    }
    if (typeof t === "string") {
      return t;
    }
  }
  getDouble(e) {
    let t = this.get(e);
    if (typeof t === "number") {
      return t;
    }
  }
  getString(e) {
    let t = this.get(e);
    if (typeof t === "string") {
      return t;
    }
  }
  getBool(e) {
    let t = this.get(e);
    if (typeof t === "boolean") {
      return t;
    }
  }
  getObject(e) {
    let t = this.get(e);
    if (t instanceof Object && t !== null) {
      return new c(t);
    }
    if (t instanceof c) {
      return t;
    }
  }
}
exports.JSONObject = c;
class m {
  constructor(e, t) {
    this.jsonString = e;
    this.jsonObject = t;
    this.jsonMapKeys = {};
    this.jsonClazzInitializer = {};
    this.jsonMapTypes = {};
    this.jsonInited = false;
    this.rawData = new c({});
    this.removeRawData = false;
    this.removeUnknownFields = false;
    if (!this.jsonLastPropertyKey) {
      this.doInit();
    }
  }
  toPlainObject() {
    return this.toJSON();
  }
  setRemoveUnknownFieldsRecursive(e) {
    for (let t in ((this.removeUnknownFields = e),
    this.jsonMapKeys || (this.jsonMapKeys = {}),
    this.jsonMapKeys)) {
      let i = this.jsonMapTypes[t];
      let o = this[t];
      if (o === undefined) {
        continue;
      }
      let r = (t) => {
        if (t instanceof Array) {
          t.forEach((e) => r(e));
        } else if (t instanceof Object && t !== null && t instanceof m) {
          t.setRemoveUnknownFieldsRecursive(e);
        } else if (i === "Map" && t instanceof Map && t !== null) {
          t.forEach((e) => r(e));
        }
      };
      r(o);
    }
  }
  toJSON() {
    let e;
    let t = {};
    for (let i in (this.jsonMapKeys || (this.jsonMapKeys = {}),
    this.jsonMapKeys)) {
      let o = this.jsonMapKeys[i];
      let r = (e = this.jsonMapTypes) == null ? undefined : e[i];
      let a = this[i];
      if (a === undefined) {
        continue;
      }
      let n = (e) => {
        if (e instanceof Array) {
          return e.map((e) => n(e));
        }
        if (e instanceof Object && e !== null && e instanceof m) {
          return e.toJSON();
        }
        if (r === "Map" && e instanceof Map && e !== null) {
          let t = {};
          for (let [i, o] of e) {
            t[i] = n(o);
          }
          return t;
        }
        if (r === "int64") {
          if (isNaN(parseInt(e))) {
            return "";
          }
          return `Int64(${e})`;
        }
        if (e === null) {
          return;
        } else {
          return e;
        }
      };
      t[o] = n(a);
    }
    let i = this.afterToJSON();
    let o = (e, t) => {
      if (t instanceof Map) {
        t.forEach((i, r) => {
          e[r] = o({}, t.get(r));
        });
        return e;
      }
      return t;
    };
    t = o(t, i);
    if (this.removeUnknownFields === true) {
      return t;
    }
    let r = {};
    for (let e in this.jsonMapKeys) {
      r[this.jsonMapKeys[e]] = e;
    }
    for (let e in this.rawData.rawMap) {
      if (r[e] === undefined) {
        t[e] = this.rawData.rawMap[e];
      }
    }
    return t;
  }
  toJSONString() {
    try {
      return JSON.stringify(this.toJSON()).replace(/"Int64\((.*?)\)"/g, "$1");
    } catch (error) {
      console.error("RTSSerializable.toJSONString", error);
      return;
    }
  }
  doInit() {
    if (!this.jsonInited) {
      this.jsonInited = true;
      if (this.jsonString) {
        try {
          try {
            let e = this.jsonString
              .replace(/: ?(\b\d{11,}\b),/g, ': "$1",')
              .replace(/: ?(\b\d{11,}\b)/g, ': "$1"');
            this.rawData = new c(JSON.parse(e));
          } catch (e) {
            this.rawData = new c(JSON.parse(this.jsonString));
          }
          this.mapping();
          this.afterParse();
        } catch (error) {
          console.error("RTSSerializable.doInit", error, this.jsonString);
        }
      } else {
        if (this.jsonObject) {
          this.rawData = this.jsonObject;
          this.mapping();
          this.afterParse();
        } else {
          this.afterInit();
        }
      }
      if (this.removeRawData === true) {
        this.rawData.rawMap = {};
      }
    }
  }
  afterInit() {}
  afterParse() {}
  afterToJSON() {
    return new Map();
  }
  mapping() {
    if (this.jsonMapKeys) {
      for (let e in this.jsonMapKeys) {
        let t = this.jsonMapKeys[e];
        let i = this.rawData.rawMap[t];
        let o = this.jsonMapTypes[e];
        let r = this.jsonClazzInitializer[e];
        let a = (e, t, i) => {
          if (e instanceof Array) {
            return e.map((e) => a(e, t + 1, i));
          }
          if (t == 0 && o === "Map" && e instanceof Object && e !== null) {
            let o = new Map();
            for (let r in e) {
              let n = e[r];
              o.set(r, a(n, t + 1, i));
            }
            return o;
          }
          if (r) {
            if (!e) {
              return i;
            } else {
              let t = new c(e);
              return new (r())(undefined, t);
            }
          }
          if (o === "int64") {
            if (typeof e === "string") {
              return e;
            } else if (typeof e === "number") {
              return `${e}`;
            } else if (typeof e === "bigint") {
              return `${e}`;
            } else {
              return;
            }
          }
          if (e !== null) {
            return e;
          }
        };
        this[e] = a(i, 0, this[e]);
      }
    }
  }
}
function v(e, t) {
  let t_interfaces = t.interfaces;
  return (
    !!t_interfaces &&
    t_interfaces.size !== 0 &&
    ((e, t) => {
      if (e == null) {
        return false;
      }
      let e___proto__ = e.__proto__;
      let o =
        (e___proto__ ? e___proto__.interfaces : undefined) || e.interfaces;
      return !!o && o.has(t);
    })(e, Array.from(t_interfaces)[0])
  );
}
function g(e, t, i, o, r) {
  let a;
  if (o != null) {
    a = ((e) => {
      let t = new Set();
      for (let i of e) {
        let e = i.interfaces;
        if (e != null) {
          e.forEach((e) => {
            t.add(e);
          });
        }
      }
      return t;
    })(o);
  }
  if (t === "interface" && i) {
    let n;
    n = r || "unknown-module";
    let e = `${n || "unknown-module"}::${i || "Interface"}`;
    if (!a) {
      a = new Set();
    }
    a.add(e);
  }
  if (a) {
    if (t === "class" && typeof e === "function") {
      e.prototype.interfaces = a;
    } else {
      e.interfaces = a;
    }
  }
}
exports.Serializable = m;
exports.serializable = function (e, t, i) {
  return function (o, r) {
    o.jsonLastPropertyKey = r;
    Object.defineProperty(o, r, {
      get: function () {
        return this["$" + r];
      },
      set: function (o) {
        this.jsonMapKeys[r] = e;
        if (t) {
          this.jsonClazzInitializer[r] = t;
        }
        if (i) {
          this.jsonMapTypes[r] = i;
        }
        this["$" + r] = o;
        if (r === this.jsonLastPropertyKey) {
          this.doInit();
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
};
exports.serializableDecorate = function (e, t, i, o) {
  let r = o;
  if ((r = e[0](t, i, r) || r)) {
    Object.defineProperty(t, i, r);
  }
  return r;
};
exports.isInterface = v;
exports.setInterfaces = g;
exports.initMetadataFor = function (e, t, i, o, r, a) {
  g(t, e, i, r, a);
};
class f {
  static registerInterface(e, t) {
    f.registeredInterfaces.set(e, t);
  }
  static findInterface(e) {
    return f.registeredInterfaces.get(e);
  }
  static getOrCreateInterface(moduleId, t) {
    let i = `${moduleId}.${t}`;
    let o = f.findInterface(i);
    if (!o) {
      let r = {
        interfaces: new Set(),
        name: t,
        moduleId,
        __interfaceSymbol: true,
      };
      g(r, "interface", t, undefined, moduleId);
      o = r;
      f.registerInterface(i, o);
    }
    return o;
  }
}
f.registeredInterfaces = new Map();
exports.getOrCreateInterface = function (e, t) {
  return f.getOrCreateInterface(e, t);
};
exports.readonlyMapOf = function (e) {
  return new Map(e);
};
exports.readonlySetOf = function (e) {
  return new Set(e);
};
exports.readonlyArrayOf = function (e) {
  return e;
};
class y {
  static throwCastException(e, t) {
    throw Error(`${e === null ? "null" : typeof e} cannot be cast to ${t}`);
  }
  static toNumber(e, t = false) {
    if (e != null) {
      if (typeof e === "number") {
        return e;
      }
      if (t && typeof e === "bigint") {
        return Number(e);
      }
    }
    y.throwCastException(e, "number");
    return e;
  }
  static toBigInt(e, t = false) {
    if (e != null) {
      if (typeof e === "bigint" || typeof e === "number") {
        return String(e);
      }
      if (typeof e === "string") {
        return e;
      }
    }
    y.throwCastException(e, "string");
    return String(e);
  }
  static toString(e) {
    if (!(e != null && typeof e === "string")) {
      y.throwCastException(e, "string");
    }
    return e;
  }
  static toBoolean(e) {
    if (!(e != null && typeof e === "boolean")) {
      y.throwCastException(e, "boolean");
    }
    return e;
  }
  static toFunction(e) {
    if (!(e != null && typeof e === "function")) {
      y.throwCastException(e, "function");
    }
    return e;
  }
  static toJson(e) {
    if (e == null) {
      y.throwCastException(e, "Json");
    }
    return e;
  }
  static toAny(e) {
    if (e == null) {
      y.throwCastException(e, "any");
    }
    return e;
  }
  static toClass(e, t, i = false) {
    if (e == null) {
      if (i) {
        return;
      }
      y.throwCastException(e, t.name);
      return e;
    }
    if (!(e instanceof t)) {
      y.throwCastException(e, t.name);
    }
    return e;
  }
  static toInterface(e, t, i = false) {
    if (e == null) {
      if (i) {
        return;
      }
      y.throwCastException(e, t.name);
      return e;
    }
    if (!v(e, t)) {
      y.throwCastException(e, t.name);
    }
    return e;
  }
  static toInstanceOf(e, t) {
    if (!(e != null && e instanceof t)) {
      y.throwCastException(e, t.name);
    }
    return e;
  }
  static toNumberArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "number[]");
    }
    if (e.length > 0 && typeof e[0] !== "number") {
      y.throwCastException(e, "number[]");
    }
    return e;
  }
  static toBigIntArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "bigint[]");
    }
    if (e.length > 0 && typeof e[0] !== "bigint") {
      y.throwCastException(e, "bigint[]");
    }
    return e;
  }
  static toStringArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "string[]");
    }
    if (e.length > 0 && typeof e[0] !== "string") {
      y.throwCastException(e, "string[]");
    }
    return e;
  }
  static toBooleanArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "boolean[]");
    }
    if (e.length > 0 && typeof e[0] !== "boolean") {
      y.throwCastException(e, "boolean[]");
    }
    return e;
  }
  static toJsonArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "Json[]");
    }
    return e;
  }
  static toAnyArray(e) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, "any[]");
    }
    return e;
  }
  static toClassArray(e, t) {
    if (!Array.isArray(e)) {
      y.throwCastException(e, `${t.name}[]`);
    }
    if (!(!(e.length > 0) || e[0] instanceof t)) {
      y.throwCastException(e, `${t.name}[]`);
    }
    return e;
  }
  static toNumberThenToBigInt(e) {
    return String(y.toNumber(e));
  }
}
exports.ForcedCast = y;
exports.SerializableWithCopy = class extends m {
  copy(e) {
    let t = new this.constructor();
    Object.assign(t, this);
    if (typeof e === "object") {
      for (let i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          let o = e[i];
          t["$" + i] = o;
        }
      }
    }
    return t;
  }
};
exports.RTSDataClass = class e {
  constructor(e) {
    if (typeof e === "object") {
      for (let t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let i = e[t];
          let o = "$" + t;
          this[o] = i;
          Object.defineProperty(this, t, {
            get: function () {
              return this[o];
            },
            set: function (e) {
              if (this[o] === undefined) {
                this[o] = e;
              }
            },
            enumerable: true,
            configurable: true,
          });
        }
      }
    }
  }
  copy(e) {
    let t = {};
    for (let e in this) {
      if (e.indexOf("$") === 0) {
        t[e.substring(1)] = this[e];
      }
    }
    for (let i in e) {
      t[i] = e[i];
    }
    return new this.constructor(t);
  }
  equals(e) {
    if (e instanceof this.constructor) {
      for (let t in this) {
        if (Object.prototype.hasOwnProperty.call(this, t) && this[t] !== e[t]) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  toString() {
    let e = `${this.constructor.name}(`;
    for (let t in this) {
      if (Object.prototype.hasOwnProperty.call(this, t)) {
        let i = this[t];
        e += `${t}=${i},`;
      }
    }
    return e + ")";
  }
  toPlainObject() {
    let e = {};
    for (let t in this) {
      if (t.indexOf("$") === 0) {
        let i = this[t];
        e[t.substring(1)] = this.convertToJSON(i);
      }
    }
    return e;
  }
  convertToJSON(t) {
    if (t instanceof e || t instanceof m) {
      return t.toPlainObject();
    }
    if (Array.isArray(t)) {
      return t.map((e) => this.convertToJSON(e));
    }
    if (t instanceof Map) {
      let e = {};
      t.forEach((t, i) => {
        e[String(i)] = this.convertToJSON(t);
      });
      return e;
    }
    if (
      t !== null &&
      typeof t === "object" &&
      !(t instanceof Date) &&
      !(t instanceof RegExp)
    ) {
      let e = {};
      for (let i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e[i] = this.convertToJSON(t[i]);
        }
      }
      return e;
    }
    return t;
  }
};
