import n from "./module-zge.js";
import i from "./module-sJv.js";
export default o;
(o.prototype = Object.create(n.prototype)).constructor = o;
function o() {
  n.call(this);
}
function s(e, t, r) {
  if (e.length < 40) {
    i.utf8.write(e, t, r);
  } else if (t.utf8Write) {
    t.utf8Write(e, r);
  } else {
    t.write(e, r);
  }
}
o._configure = function () {
  o.alloc = i._Buffer_allocUnsafe;
  o.writeBytesBuffer =
    i.Buffer &&
    i.Buffer.prototype instanceof Uint8Array &&
    i.Buffer.prototype.set.name === "set"
      ? function (e, t, r) {
          t.set(e, r);
        }
      : function (e, t, r) {
          if (e.copy) {
            e.copy(t, r, 0, e.length);
          } else {
            for (let n = 0; n < e.length;) {
              t[r++] = e[n++];
            }
          }
        };
};
o.prototype.bytes = function (e) {
  if (i.isString(e)) {
    e = i._Buffer_from(e, "base64");
  }
  const t = e.length >>> 0;
  this.uint32(t);
  if (t) {
    this._push(o.writeBytesBuffer, t, e);
  }
  return this;
};
o.prototype.string = function (e) {
  const t = i.Buffer.byteLength(e);
  this.uint32(t);
  if (t) {
    this._push(s, t, e);
  }
  return this;
};
o._configure();
