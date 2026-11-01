import i from "./module-Hs_2.js";
import { base, bignum, constants } from "./module-sG.js";
const base_1 = base;
const bignum_1 = bignum;
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
function d(t, e) {
  let tag = t.readUInt8(e);
  if (t.isError(tag)) {
    return tag;
  }
  const cls = constants_der.tagClass[tag >> 6];
  const primitive = (32 & tag) == 0;
  if ((31 & tag) == 31) {
    let n = tag;
    for (tag = 0; (128 & n) == 128;) {
      n = t.readUInt8(e);
      if (t.isError(n)) {
        return n;
      }
      tag <<= 7;
      tag |= 127 & n;
    }
  } else {
    tag &= 31;
  }
  const tagStr = constants_der.tag[tag];
  return {
    cls,
    primitive,
    tag,
    tagStr,
  };
}
function c(t, primitive, r) {
  let i = t.readUInt8(r);
  if (t.isError(i)) {
    return i;
  }
  if (!primitive && i === 128) {
    return null;
  }
  if ((128 & i) == 0) {
    return i;
  }
  const f = 127 & i;
  if (f > 4) {
    return t.error("length octect is too long");
  }
  i = 0;
  for (let n = 0; n < f; n++) {
    i <<= 8;
    const a = t.readUInt8(r);
    if (t.isError(a)) {
      return a;
    }
    i |= a;
  }
  return i;
}
export default o;
o.prototype.decode = function (t, e) {
  if (!(t instanceof base_1.DecoderBuffer)) {
    t = new base_1.DecoderBuffer(t, e);
  }
  return this.tree._decode(t, e);
};
i(h, base_1.Node);
h.prototype._peekTag = function (t, e, r) {
  if (t.isEmpty()) {
    return false;
  }
  const i = t.save();
  const f = d(t, 'Failed to peek tag: "' + e + '"');
  if (t.isError(f)) {
    return f;
  }
  t.restore(i);
  return f.tag === e || f.tagStr === e || f.tagStr + "of" === e || r;
};
h.prototype._decodeTag = function (t, e, r) {
  const i = d(t, 'Failed to decode tag of "' + e + '"');
  if (t.isError(i)) {
    return i;
  }
  let f = c(t, i.primitive, 'Failed to get length of "' + e + '"');
  if (t.isError(f)) {
    return f;
  }
  if (!r && i.tag !== e && i.tagStr !== e && i.tagStr + "of" !== e) {
    return t.error('Failed to match tag: "' + e + '"');
  }
  if (i.primitive || f !== null) {
    return t.skip(f, 'Failed to match body of: "' + e + '"');
  }
  const n = t.save();
  const a = this._skipUntilEnd(
    t,
    'Failed to skip indefinite length body: "' + this.tag + '"',
  );
  if (t.isError(a)) {
    return a;
  }
  f = t.offset - n.offset;
  t.restore(n);
  return t.skip(f, 'Failed to match body of: "' + e + '"');
};
h.prototype._skipUntilEnd = function (t, e) {
  while (true) {
    let r;
    const i = d(t, e);
    if (t.isError(i)) {
      return i;
    }
    const f = c(t, i.primitive, e);
    if (t.isError(f)) {
      return f;
    }
    r = i.primitive || f !== null ? t.skip(f) : this._skipUntilEnd(t, e);
    if (t.isError(r)) {
      return r;
    }
    if (i.tagStr === "end") {
      break;
    }
  }
};
h.prototype._decodeList = function (t, e, r, i) {
  const f = [];
  while (!t.isEmpty()) {
    const n = this._peekTag(t, "end");
    if (t.isError(n)) {
      return n;
    }
    const a = r.decode(t, "der", i);
    if (t.isError(a) && n) {
      break;
    }
    f.push(a);
  }
  return f;
};
h.prototype._decodeStr = function (t, e) {
  if (e === "bitstr") {
    const unused = t.readUInt8();
    if (t.isError(unused)) {
      return unused;
    }
    return {
      unused,
      data: t.raw(),
    };
  }
  if (e === "bmpstr") {
    const i = t.raw();
    if (i.length % 2 == 1) {
      return t.error("Decoding of string type: bmpstr length mismatch");
    }
    let f = "";
    for (let n = 0; n < i.length / 2; n++) {
      f += String.fromCharCode(i.readUInt16BE(2 * n));
    }
    return f;
  }
  if (e === "numstr") {
    const a = t.raw().toString("ascii");
    if (this._isNumstr(a)) {
      return a;
    }
    return t.error("Decoding of string type: numstr unsupported characters");
  }
  if (e === "octstr") {
    return t.raw();
  }
  if (e === "objDesc") {
    return t.raw();
  } else if (e === "printstr") {
    const s = t.raw().toString("ascii");
    if (this._isPrintstr(s)) {
      return s;
    }
    return t.error("Decoding of string type: printstr unsupported characters");
  } else if (/str$/.test(e)) {
    return t.raw().toString();
  } else {
    return t.error("Decoding of string type: " + e + " unsupported");
  }
};
h.prototype._decodeObjid = function (t, e, r) {
  let i;
  const f = [];
  let n = 0;
  while (!t.isEmpty()) {
    var a = t.readUInt8();
    n <<= 7;
    n |= 127 & a;
    if ((128 & a) == 0) {
      f.push(n);
      n = 0;
    }
  }
  if (128 & a) {
    f.push(n);
  }
  const s = (f[0] / 40) | 0;
  const o = f[0] % 40;
  i = r ? f : [s, o].concat(f.slice(1));
  if (e) {
    let h = e[i.join(" ")];
    if (h === undefined) {
      h = e[i.join(".")];
    }
    if (h !== undefined) {
      i = h;
    }
  }
  return i;
};
h.prototype._decodeTime = function (t, e) {
  const r = t.raw().toString();
  if (e === "gentime") {
    var i = 0 | r.slice(0, 4);
    var f = 0 | r.slice(4, 6);
    var n = 0 | r.slice(6, 8);
    var a = 0 | r.slice(8, 10);
    var s = 0 | r.slice(10, 12);
    var o = 0 | r.slice(12, 14);
  } else {
    if (e !== "utctime") {
      return t.error("Decoding " + e + " time is not supported yet");
    }
    var i = 0 | r.slice(0, 2);
    var f = 0 | r.slice(2, 4);
    var n = 0 | r.slice(4, 6);
    var a = 0 | r.slice(6, 8);
    var s = 0 | r.slice(8, 10);
    var o = 0 | r.slice(10, 12);
    i = i < 70 ? 2000 + i : 1900 + i;
  }
  return Date.UTC(i, f - 1, n, a, s, o, 0);
};
h.prototype._decodeNull = function (t) {
  return null;
};
h.prototype._decodeBool = function (t) {
  const e = t.readUInt8();
  if (t.isError(e)) {
    return e;
  }
  return e !== 0;
};
h.prototype._decodeInt = function (t, e) {
  let r = new bignum_1(t.raw());
  if (e) {
    r = e[r.toString(10)] || r;
  }
  return r;
};
h.prototype._use = function (t, e) {
  if (typeof t === "function") {
    t = t(e);
  }
  return t._getDecoder("der").tree;
};
