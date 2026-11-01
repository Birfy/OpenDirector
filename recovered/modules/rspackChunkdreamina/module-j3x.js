import n from "./module-Bi.js";
import i from "./module-Vva.js";
export default o;
((o.prototype = Object.create(n.prototype)).constructor = o).className =
  "Method";
function o(e, t, r, o, s, a, l, u, f) {
  if (i.isObject(s)) {
    l = s;
    a = undefined;
    s = undefined;
  } else if (i.isObject(a)) {
    l = a;
    a = undefined;
  }
  if (!(t === undefined || i.isString(t))) {
    throw TypeError("type must be a string");
  }
  if (!i.isString(r)) {
    throw TypeError("requestType must be a string");
  }
  if (!i.isString(o)) {
    throw TypeError("responseType must be a string");
  }
  n.call(this, e, l);
  this.type = t || "rpc";
  this.requestType = r;
  this.requestStream = !!s || undefined;
  this.responseType = o;
  this.responseStream = !!a || undefined;
  this.resolvedRequestType = null;
  this.resolvedResponseType = null;
  this.comment = u;
  this.parsedOptions = f;
}
o.fromJSON = function (e, t) {
  return new o(
    e,
    t.type,
    t.requestType,
    t.responseType,
    t.requestStream,
    t.responseStream,
    t.options,
    t.comment,
    t.parsedOptions,
  );
};
o.prototype.toJSON = function (e) {
  const t = !!e && !!e.keepComments;
  return i.toObject([
    "type",
    (this.type !== "rpc" && this.type) || undefined,
    "requestType",
    this.requestType,
    "requestStream",
    this.requestStream,
    "responseType",
    this.responseType,
    "responseStream",
    this.responseStream,
    "options",
    this.options,
    "comment",
    t ? this.comment : undefined,
    "parsedOptions",
    this.parsedOptions,
  ]);
};
o.prototype.resolve = function () {
  if (this.resolved) {
    return this;
  }
  this.resolvedRequestType = this.parent.lookupType(this.requestType);
  this.resolvedResponseType = this.parent.lookupType(this.responseType);
  return n.prototype.resolve.call(this);
};
