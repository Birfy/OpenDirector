import n from "./module-osk.js";
import { mapKey } from "./module-kxL.js";
import o from "./module-Vva.js";
export default s;
((s.prototype = Object.create(n.prototype)).constructor = s).className =
  "MapField";
function s(e, t, r, i, s, a) {
  n.call(this, e, t, i, undefined, undefined, s, a);
  if (!o.isString(r)) {
    throw TypeError("keyType must be a string");
  }
  this.keyType = r;
  this.resolvedKeyType = null;
  this.map = true;
}
s.fromJSON = function (e, t) {
  return new s(e, t.id, t.keyType, t.type, t.options, t.comment);
};
s.prototype.toJSON = function (e) {
  const t = !!e && !!e.keepComments;
  return o.toObject([
    "keyType",
    this.keyType,
    "type",
    this.type,
    "id",
    this.id,
    "extend",
    this.extend,
    "options",
    this.options,
    "comment",
    t ? this.comment : undefined,
  ]);
};
s.prototype.resolve = function () {
  if (this.resolved) {
    return this;
  }
  if (mapKey[this.keyType] === undefined) {
    throw Error("invalid key type: " + this.keyType);
  }
  return n.prototype.resolve.call(this);
};
s.d = function (e, t, r) {
  if (typeof r === "function") {
    r = o.decorateType(r).name;
  } else if (r && typeof r === "object") {
    r = o.decorateEnum(r).name;
  }
  return function (n, i) {
    o.decorateType(n.constructor).add(new s(i, e, t, r));
  };
};
