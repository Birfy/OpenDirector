import { Buffer } from "./module-Um.js";
import tt from "./module-OZ.js";
export default (function () {
  class J {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(J) {
      const Z = {
        data: J,
        next: null,
      };
      if (this.length > 0) {
        this.tail.next = Z;
      } else {
        this.head = Z;
      }
      this.tail = Z;
      ++this.length;
    }
    unshift(J) {
      const Z = {
        data: J,
        next: this.head,
      };
      if (this.length === 0) {
        this.tail = Z;
      }
      this.head = Z;
      ++this.length;
    }
    shift() {
      if (this.length !== 0) {
        const J = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return J;
      }
    }
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
    join(J) {
      if (this.length === 0) {
        return "";
      }
      for (var Z = this.head, Q = "" + Z.data; (Z = Z.next);) {
        Q += J + Z.data;
      }
      return Q;
    }
    concat(J) {
      if (this.length === 0) {
        return Buffer.alloc(0);
      }
      let Z;
      let Q;
      const tt = Buffer.allocUnsafe(J >>> 0);
      for (let te = this.head, tr = 0; te;) {
        Z = te.data;
        Q = tr;
        Z.copy(tt, Q);
        tr += te.data.length;
        te = te.next;
      }
      return tt;
    }
  }
  return J;
})();
if (tt && tt.inspect && tt.inspect.custom) {
  module.exports.prototype[tt.inspect.custom] = function () {
    const J = tt.inspect({
      length: this.length,
    });
    return this.constructor.name + " " + J;
  };
}
