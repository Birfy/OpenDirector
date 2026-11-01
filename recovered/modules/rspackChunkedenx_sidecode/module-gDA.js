import $ from "./module-ULy.js";
import { Buffer } from "./module-pH.js";
import { base, constants } from "./module-nj.js";
const base_1 = base;
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
function ta(J) {
  if (J < 10) {
    return "0" + J;
  }
  return J;
}
export default ti;
ti.prototype.encode = function (J, Z) {
  return this.tree._encode(J, Z).join();
};
$(to, base_1.Node);
to.prototype._encodeComposite = function (J, Z, Q, $) {
  const te = ((J, Z, Q, $) => {
    let tt;
    if (J === "seqof") {
      J = "seq";
    } else if (J === "setof") {
      J = "set";
    }
    if (constants_der.tagByName.hasOwnProperty(J)) {
      tt = constants_der.tagByName[J];
    } else {
      if (typeof J !== "number" || (0 | J) !== J) {
        return $.error("Unknown tag: " + J);
      }
      tt = J;
    }
    if (tt >= 31) {
      return $.error("Multi-octet tag encoding unsupported");
    }
    if (!Z) {
      tt |= 32;
    }
    return (tt |= constants_der.tagClassByName[Q || "universal"] << 6);
  })(J, Z, Q, this.reporter);
  if ($.length < 128) {
    var tr = new Buffer(2);
    tr[0] = te;
    tr[1] = $.length;
    return this._createEncoderBuffer([tr, $]);
  }
  let ti = 1;
  for (var to = $.length; to >= 256; to >>= 8) {
    ti++;
  }
  var tr = new Buffer(2 + ti);
  tr[0] = te;
  tr[1] = 128 | ti;
  for (var to = 1 + ti, ta = $.length; ta > 0; to--, ta >>= 8) {
    tr[to] = 255 & ta;
  }
  return this._createEncoderBuffer([tr, $]);
};
to.prototype._encodeStr = function (J, Z) {
  if (Z === "bitstr") {
    return this._createEncoderBuffer([0 | J.unused, J.data]);
  }
  if (Z === "bmpstr") {
    const Q = new Buffer(2 * J.length);
    for (let $ = 0; $ < J.length; $++) {
      Q.writeUInt16BE(J.charCodeAt($), 2 * $);
    }
    return this._createEncoderBuffer(Q);
  }
  if (Z === "numstr") {
    if (this._isNumstr(J)) {
      return this._createEncoderBuffer(J);
    }
    return this.reporter.error(
      "Encoding of string type: numstr supports only digits and space",
    );
  }
  if (Z === "printstr") {
    if (this._isPrintstr(J)) {
      return this._createEncoderBuffer(J);
    }
    return this.reporter.error(
      "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark",
    );
  }
  if (/str$/.test(Z)) {
    return this._createEncoderBuffer(J);
  } else if (Z === "objDesc") {
    return this._createEncoderBuffer(J);
  } else {
    return this.reporter.error(
      "Encoding of string type: " + Z + " unsupported",
    );
  }
};
to.prototype._encodeObjid = function (J, Z, Q) {
  if (typeof J === "string") {
    if (!Z) {
      return this.reporter.error("string objid given, but no values map found");
    }
    if (!Z.hasOwnProperty(J)) {
      return this.reporter.error("objid not found in values map");
    }
    J = Z[J].split(/[\s\.]+/g);
    for (var $ = 0; $ < J.length; $++) {
      J[$] |= 0;
    }
  } else if (Array.isArray(J)) {
    J = J.slice();
    for (var $ = 0; $ < J.length; $++) {
      J[$] |= 0;
    }
  }
  if (!Array.isArray(J)) {
    return this.reporter.error(
      "objid() should be either array or string, got: " + JSON.stringify(J),
    );
  }
  if (!Q) {
    if (J[1] >= 40) {
      return this.reporter.error("Second objid identifier OOB");
    }
    J.splice(0, 2, 40 * J[0] + J[1]);
  }
  let te = 0;
  for (var $ = 0; $ < J.length; $++) {
    var tr = J[$];
    for (te++; tr >= 128; tr >>= 7) {
      te++;
    }
  }
  const tn = new Buffer(te);
  let ti = tn.length - 1;
  for (var $ = J.length - 1; $ >= 0; $--) {
    var tr = J[$];
    for (tn[ti--] = 127 & tr; (tr >>= 7) > 0;) {
      tn[ti--] = 128 | (127 & tr);
    }
  }
  return this._createEncoderBuffer(tn);
};
to.prototype._encodeTime = function (J, Z) {
  let Q;
  const $ = new Date(J);
  switch (Z) {
    case "gentime":
      Q = [
        ta($.getFullYear()),
        ta($.getUTCMonth() + 1),
        ta($.getUTCDate()),
        ta($.getUTCHours()),
        ta($.getUTCMinutes()),
        ta($.getUTCSeconds()),
        "Z",
      ].join("");
      break;
    case "utctime":
      Q = [
        ta($.getFullYear() % 100),
        ta($.getUTCMonth() + 1),
        ta($.getUTCDate()),
        ta($.getUTCHours()),
        ta($.getUTCMinutes()),
        ta($.getUTCSeconds()),
        "Z",
      ].join("");
      break;
    default:
      this.reporter.error("Encoding " + Z + " time is not supported yet");
  }
  return this._encodeStr(Q, "octstr");
};
to.prototype._encodeNull = function () {
  return this._createEncoderBuffer("");
};
to.prototype._encodeInt = function (J, Z) {
  if (typeof J === "string") {
    if (!Z) {
      return this.reporter.error("String int or enum given, but no values map");
    }
    if (!Z.hasOwnProperty(J)) {
      return this.reporter.error(
        "Values map doesn't contain: " + JSON.stringify(J),
      );
    }
    J = Z[J];
  }
  if (typeof J !== "number" && !Buffer.isBuffer(J)) {
    const Q = J.toArray();
    if (!J.sign && 128 & Q[0]) {
      Q.unshift(0);
    }
    J = new Buffer(Q);
  }
  if (Buffer.isBuffer(J)) {
    var $ = J.length;
    if (J.length === 0) {
      $++;
    }
    var te = new Buffer($);
    J.copy(te);
    if (J.length === 0) {
      te[0] = 0;
    }
    return this._createEncoderBuffer(te);
  }
  if (J < 128) {
    return this._createEncoderBuffer(J);
  }
  if (J < 256) {
    return this._createEncoderBuffer([0, J]);
  }
  var $ = 1;
  for (var tr = J; tr >= 256; tr >>= 8) {
    $++;
  }
  var te = Array($);
  for (var tr = te.length - 1; tr >= 0; tr--) {
    te[tr] = 255 & J;
    J >>= 8;
  }
  if (128 & te[0]) {
    te.unshift(0);
  }
  return this._createEncoderBuffer(new Buffer(te));
};
to.prototype._encodeBool = function (J) {
  return this._createEncoderBuffer(255 * !!J);
};
to.prototype._use = function (J, Z) {
  if (typeof J === "function") {
    J = J(Z);
  }
  return J._getEncoder("der").tree;
};
to.prototype._skipDefault = function (J, Z, Q) {
  let $;
  const _baseState = this._baseState;
  if (_baseState.default === null) {
    return false;
  }
  const te = J.join();
  if (_baseState.defaultBuffer === undefined) {
    _baseState.defaultBuffer = this._encodeValue(
      _baseState.default,
      Z,
      Q,
    ).join();
  }
  if (te.length !== _baseState.defaultBuffer.length) {
    return false;
  }
  for ($ = 0; $ < te.length; $++) {
    if (te[$] !== _baseState.defaultBuffer[$]) {
      return false;
    }
  }
  return true;
};
