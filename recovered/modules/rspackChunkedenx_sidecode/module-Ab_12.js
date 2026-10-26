import $ from "./module-ULy.js";
import { base, bignum, constants } from "./module-nj.js";
const base_1 = base;
const bignum_1 = bignum;
const constants_der = constants.der;
function ti(J) {
  this.enc = "der";
  this.name = J.name;
  this.entity = J;
  this.tree = new to();
  this.tree._init(J.body);
}
function to(J) {
  base_1.Node.call(this, "der", J);
}
function ta(J, Z) {
  let tag = J.readUInt8(Z);
  if (J.isError(tag)) {
    return tag;
  }
  const cls = constants_der.tagClass[tag >> 6];
  const primitive = (32 & tag) == 0;
  if ((31 & tag) == 31) {
    let te = tag;
    for (tag = 0; (128 & te) == 128;) {
      te = J.readUInt8(Z);
      if (J.isError(te)) {
        return te;
      }
      tag <<= 7;
      tag |= 127 & te;
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
function ts(J, primitive, Q) {
  let $ = J.readUInt8(Q);
  if (J.isError($)) {
    return $;
  }
  if (!primitive && $ === 128) {
    return null;
  }
  if ((128 & $) == 0) {
    return $;
  }
  const tt = 127 & $;
  if (tt > 4) {
    return J.error("length octect is too long");
  }
  $ = 0;
  for (let te = 0; te < tt; te++) {
    $ <<= 8;
    const tr = J.readUInt8(Q);
    if (J.isError(tr)) {
      return tr;
    }
    $ |= tr;
  }
  return $;
}
export default ti;
ti.prototype.decode = function (J, Z) {
  if (!(J instanceof base_1.DecoderBuffer)) {
    J = new base_1.DecoderBuffer(J, Z);
  }
  return this.tree._decode(J, Z);
};
$(to, base_1.Node);
to.prototype._peekTag = function (J, Z, Q) {
  if (J.isEmpty()) {
    return false;
  }
  const $ = J.save();
  const tt = ta(J, 'Failed to peek tag: "' + Z + '"');
  if (J.isError(tt)) {
    return tt;
  }
  J.restore($);
  return tt.tag === Z || tt.tagStr === Z || tt.tagStr + "of" === Z || Q;
};
to.prototype._decodeTag = function (J, Z, Q) {
  const $ = ta(J, 'Failed to decode tag of "' + Z + '"');
  if (J.isError($)) {
    return $;
  }
  let tt = ts(J, $.primitive, 'Failed to get length of "' + Z + '"');
  if (J.isError(tt)) {
    return tt;
  }
  if (!Q && $.tag !== Z && $.tagStr !== Z && $.tagStr + "of" !== Z) {
    return J.error('Failed to match tag: "' + Z + '"');
  }
  if ($.primitive || tt !== null) {
    return J.skip(tt, 'Failed to match body of: "' + Z + '"');
  }
  const te = J.save();
  const tr = this._skipUntilEnd(
    J,
    'Failed to skip indefinite length body: "' + this.tag + '"',
  );
  if (J.isError(tr)) {
    return tr;
  }
  tt = J.offset - te.offset;
  J.restore(te);
  return J.skip(tt, 'Failed to match body of: "' + Z + '"');
};
to.prototype._skipUntilEnd = function (J, Z) {
  while (true) {
    let Q;
    const $ = ta(J, Z);
    if (J.isError($)) {
      return $;
    }
    const tt = ts(J, $.primitive, Z);
    if (J.isError(tt)) {
      return tt;
    }
    Q = $.primitive || tt !== null ? J.skip(tt) : this._skipUntilEnd(J, Z);
    if (J.isError(Q)) {
      return Q;
    }
    if ($.tagStr === "end") {
      break;
    }
  }
};
to.prototype._decodeList = function (J, Z, Q, $) {
  const tt = [];
  while (!J.isEmpty()) {
    const te = this._peekTag(J, "end");
    if (J.isError(te)) {
      return te;
    }
    const tr = Q.decode(J, "der", $);
    if (J.isError(tr) && te) {
      break;
    }
    tt.push(tr);
  }
  return tt;
};
to.prototype._decodeStr = function (J, Z) {
  if (Z === "bitstr") {
    const unused = J.readUInt8();
    if (J.isError(unused)) {
      return unused;
    }
    return {
      unused,
      data: J.raw(),
    };
  }
  if (Z === "bmpstr") {
    const $ = J.raw();
    if ($.length % 2 == 1) {
      return J.error("Decoding of string type: bmpstr length mismatch");
    }
    let tt = "";
    for (let te = 0; te < $.length / 2; te++) {
      tt += String.fromCharCode($.readUInt16BE(2 * te));
    }
    return tt;
  }
  if (Z === "numstr") {
    const tr = J.raw().toString("ascii");
    if (this._isNumstr(tr)) {
      return tr;
    }
    return J.error("Decoding of string type: numstr unsupported characters");
  }
  if (Z === "octstr") {
    return J.raw();
  }
  if (Z === "objDesc") {
    return J.raw();
  } else if (Z === "printstr") {
    const tn = J.raw().toString("ascii");
    if (this._isPrintstr(tn)) {
      return tn;
    }
    return J.error("Decoding of string type: printstr unsupported characters");
  } else if (/str$/.test(Z)) {
    return J.raw().toString();
  } else {
    return J.error("Decoding of string type: " + Z + " unsupported");
  }
};
to.prototype._decodeObjid = function (J, Z, Q) {
  let $;
  const tt = [];
  let te = 0;
  while (!J.isEmpty()) {
    var tr = J.readUInt8();
    te <<= 7;
    te |= 127 & tr;
    if ((128 & tr) == 0) {
      tt.push(te);
      te = 0;
    }
  }
  if (128 & tr) {
    tt.push(te);
  }
  const tn = (tt[0] / 40) | 0;
  const ti = tt[0] % 40;
  $ = Q ? tt : [tn, ti].concat(tt.slice(1));
  if (Z) {
    let to = Z[$.join(" ")];
    if (to === undefined) {
      to = Z[$.join(".")];
    }
    if (to !== undefined) {
      $ = to;
    }
  }
  return $;
};
to.prototype._decodeTime = function (J, Z) {
  const Q = J.raw().toString();
  if (Z === "gentime") {
    var $ = 0 | Q.slice(0, 4);
    var tt = 0 | Q.slice(4, 6);
    var te = 0 | Q.slice(6, 8);
    var tr = 0 | Q.slice(8, 10);
    var tn = 0 | Q.slice(10, 12);
    var ti = 0 | Q.slice(12, 14);
  } else {
    if (Z !== "utctime") {
      return J.error("Decoding " + Z + " time is not supported yet");
    }
    var $ = 0 | Q.slice(0, 2);
    var tt = 0 | Q.slice(2, 4);
    var te = 0 | Q.slice(4, 6);
    var tr = 0 | Q.slice(6, 8);
    var tn = 0 | Q.slice(8, 10);
    var ti = 0 | Q.slice(10, 12);
    $ = $ < 70 ? 2000 + $ : 1900 + $;
  }
  return Date.UTC($, tt - 1, te, tr, tn, ti, 0);
};
to.prototype._decodeNull = function (J) {
  return null;
};
to.prototype._decodeBool = function (J) {
  const Z = J.readUInt8();
  if (J.isError(Z)) {
    return Z;
  }
  return Z !== 0;
};
to.prototype._decodeInt = function (J, Z) {
  let Q = new bignum_1(J.raw());
  if (Z) {
    Q = Z[Q.toString(10)] || Q;
  }
  return Q;
};
to.prototype._use = function (J, Z) {
  if (typeof J === "function") {
    J = J(Z);
  }
  return J._getDecoder("der").tree;
};
