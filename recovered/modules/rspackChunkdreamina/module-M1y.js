import n from "./module-XuH.js";
import i from "./module-sJv.js";
export default o;
(o.prototype = Object.create(n.prototype)).constructor = o;
function o(e) {
  n.call(this, e);
}
o._configure = function () {
  if (i.Buffer) {
    o.prototype._slice = i.Buffer.prototype.slice;
  }
};
o.prototype.string = function () {
  const e = this.uint32();
  if (this.buf.utf8Slice) {
    return this.buf.utf8Slice(
      this.pos,
      (this.pos = Math.min(this.pos + e, this.len)),
    );
  }
  return this.buf.toString(
    "utf-8",
    this.pos,
    (this.pos = Math.min(this.pos + e, this.len)),
  );
};
o._configure();
