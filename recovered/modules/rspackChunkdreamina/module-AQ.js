import i from "./module-Hs_2.js";
import { Buffer } from "wS";
import { base, constants } from "./module-sG.js";
const base_1 = base;
const constants_der = constants.der;
function o(t) {
  this.enc = "der";
  this.name = t.name;
  this.entity = t;
  this.tree = new h();
  this.tree._init(t.body);
}
function h(t) {
  base_1.Node.call(this, "der", t);
}
function d(t) {
  if (t < 10) {
    return "0" + t;
  }
  return t;
}
export default o;
o.prototype.encode = function (t, e) {
  return this.tree._encode(t, e).join();
};
i(h, base_1.Node);
h.prototype._encodeComposite = function (t, e, r, i) {
  const n = ((t, e, r, i) => {
    let f;
    if (t === "seqof") {
      t = "seq";
    } else if (t === "setof") {
      t = "set";
    }
    if (constants_der.tagByName.hasOwnProperty(t)) {
      f = constants_der.tagByName[t];
    } else {
      if (typeof t !== "number" || (0 | t) !== t) {
        return i.error("Unknown tag: " + t);
      }
      f = t;
    }
    if (f >= 31) {
      return i.error("Multi-octet tag encoding unsupported");
    }
    if (!e) {
      f |= 32;
    }
    return (f |= constants_der.tagClassByName[r || "universal"] << 6);
  })(t, e, r, this.reporter);
  if (i.length < 128) {
    var a = new Buffer(2);
    a[0] = n;
    a[1] = i.length;
    return this._createEncoderBuffer([a, i]);
  }
  let o = 1;
  for (var h = i.length; h >= 256; h >>= 8) {
    o++;
  }
  var a = new Buffer(2 + o);
  a[0] = n;
  a[1] = 128 | o;
  for (var h = 1 + o, d = i.length; d > 0; h--, d >>= 8) {
    a[h] = 255 & d;
  }
  return this._createEncoderBuffer([a, i]);
};
h.prototype._encodeStr = function (t, e) {
  if (e === "bitstr") {
    return this._createEncoderBuffer([0 | t.unused, t.data]);
  }
  if (e === "bmpstr") {
    const r = new Buffer(2 * t.length);
    for (let i = 0; i < t.length; i++) {
      r.writeUInt16BE(t.charCodeAt(i), 2 * i);
    }
    return this._createEncoderBuffer(r);
  }
  if (e === "numstr") {
    if (this._isNumstr(t)) {
      return this._createEncoderBuffer(t);
    }
    return this.reporter.error(
      "Encoding of string type: numstr supports only digits and space",
    );
  }
  if (e === "printstr") {
    if (this._isPrintstr(t)) {
      return this._createEncoderBuffer(t);
    }
    return this.reporter.error(
      "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark",
    );
  }
  if (/str$/.test(e)) {
    return this._createEncoderBuffer(t);
  } else if (e === "objDesc") {
    return this._createEncoderBuffer(t);
  } else {
    return this.reporter.error(
      "Encoding of string type: " + e + " unsupported",
    );
  }
};
h.prototype._encodeObjid = function (t, e, r) {
  if (typeof t === "string") {
    if (!e) {
      return this.reporter.error("string objid given, but no values map found");
    }
    if (!e.hasOwnProperty(t)) {
      return this.reporter.error("objid not found in values map");
    }
    t = e[t].split(/[\s\.]+/g);
    for (var i = 0; i < t.length; i++) {
      t[i] |= 0;
    }
  } else if (Array.isArray(t)) {
    t = t.slice();
    for (var i = 0; i < t.length; i++) {
      t[i] |= 0;
    }
  }
  if (!Array.isArray(t)) {
    return this.reporter.error(
      "objid() should be either array or string, got: " + JSON.stringify(t),
    );
  }
  if (!r) {
    if (t[1] >= 40) {
      return this.reporter.error("Second objid identifier OOB");
    }
    t.splice(0, 2, 40 * t[0] + t[1]);
  }
  let n = 0;
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    for (n++; a >= 128; a >>= 7) {
      n++;
    }
  }
  const s = new Buffer(n);
  let o = s.length - 1;
  for (var i = t.length - 1; i >= 0; i--) {
    var a = t[i];
    for (s[o--] = 127 & a; (a >>= 7) > 0;) {
      s[o--] = 128 | (127 & a);
    }
  }
  return this._createEncoderBuffer(s);
};
h.prototype._encodeTime = function (t, e) {
  let r;
  const i = new Date(t);
  switch (e) {
    case "gentime":
      r = [
        d(i.getFullYear()),
        d(i.getUTCMonth() + 1),
        d(i.getUTCDate()),
        d(i.getUTCHours()),
        d(i.getUTCMinutes()),
        d(i.getUTCSeconds()),
        "Z",
      ].join("");
      break;
    case "utctime":
      r = [
        d(i.getFullYear() % 100),
        d(i.getUTCMonth() + 1),
        d(i.getUTCDate()),
        d(i.getUTCHours()),
        d(i.getUTCMinutes()),
        d(i.getUTCSeconds()),
        "Z",
      ].join("");
      break;
    default:
      this.reporter.error("Encoding " + e + " time is not supported yet");
  }
  return this._encodeStr(r, "octstr");
};
h.prototype._encodeNull = function () {
  return this._createEncoderBuffer("");
};
h.prototype._encodeInt = function (t, e) {
  if (typeof t === "string") {
    if (!e) {
      return this.reporter.error("String int or enum given, but no values map");
    }
    if (!e.hasOwnProperty(t)) {
      return this.reporter.error(
        "Values map doesn't contain: " + JSON.stringify(t),
      );
    }
    t = e[t];
  }
  if (typeof t !== "number" && !Buffer.isBuffer(t)) {
    const r = t.toArray();
    if (!t.sign && 128 & r[0]) {
      r.unshift(0);
    }
    t = new Buffer(r);
  }
  if (Buffer.isBuffer(t)) {
    var i = t.length;
    if (t.length === 0) {
      i++;
    }
    var n = new Buffer(i);
    t.copy(n);
    if (t.length === 0) {
      n[0] = 0;
    }
    return this._createEncoderBuffer(n);
  }
  if (t < 128) {
    return this._createEncoderBuffer(t);
  }
  if (t < 256) {
    return this._createEncoderBuffer([0, t]);
  }
  var i = 1;
  for (var a = t; a >= 256; a >>= 8) {
    i++;
  }
  var n = Array(i);
  for (var a = n.length - 1; a >= 0; a--) {
    n[a] = 255 & t;
    t >>= 8;
  }
  if (128 & n[0]) {
    n.unshift(0);
  }
  return this._createEncoderBuffer(new Buffer(n));
};
h.prototype._encodeBool = function (t) {
  return this._createEncoderBuffer(255 * !!t);
};
h.prototype._use = function (t, e) {
  if (typeof t === "function") {
    t = t(e);
  }
  return t._getEncoder("der").tree;
};
h.prototype._skipDefault = function (t, e, r) {
  let i;
  const _baseState = this._baseState;
  if (_baseState.default === null) {
    return false;
  }
  const n = t.join();
  if (_baseState.defaultBuffer === undefined) {
    _baseState.defaultBuffer = this._encodeValue(
      _baseState.default,
      e,
      r,
    ).join();
  }
  if (n.length !== _baseState.defaultBuffer.length) {
    return false;
  }
  for (i = 0; i < n.length; i++) {
    if (n[i] !== _baseState.defaultBuffer[i]) {
      return false;
    }
  }
  return true;
};
