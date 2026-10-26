import n from "./module-sJv.js";
export default i;
function i(e, t, r) {
  if (typeof e !== "function") {
    throw TypeError("rpcImpl must be a function");
  }
  n.EventEmitter.call(this);
  this.rpcImpl = e;
  this.requestDelimited = !!t;
  this.responseDelimited = !!r;
}
(i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i;
i.prototype.rpcCall = function e(t, r, i, o, s) {
  if (!o) {
    throw TypeError("request must be specified");
  }
  const a = this;
  if (!s) {
    return n.asPromise(e, a, t, r, i, o);
  }
  if (!a.rpcImpl) {
    return void setTimeout(() => {
      s(Error("already ended"));
    }, 0);
  }
  try {
    return a.rpcImpl(
      t,
      r[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(),
      function (e, r) {
        if (e) {
          a.emit("error", e, t);
          return s(e);
        }
        if (r === null) {
          return void a.end(true);
        }
        if (!(r instanceof i)) {
          try {
            r = i[a.responseDelimited ? "decodeDelimited" : "decode"](r);
          } catch (error) {
            a.emit("error", error, t);
            return s(error);
          }
        }
        a.emit("data", r, t);
        return s(null, r);
      },
    );
  } catch (error) {
    a.emit("error", error, t);
    setTimeout(() => {
      s(error);
    }, 0);
    return;
  }
};
i.prototype.end = function (e) {
  if (this.rpcImpl) {
    if (!e) {
      this.rpcImpl(null, null, null);
    }
    this.rpcImpl = null;
    this.emit("end").off();
  }
  return this;
};
