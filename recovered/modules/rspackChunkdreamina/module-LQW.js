import { Buffer } from "./module-sTo.js";
import ee from "OZ";
export default (function () {
  class Z {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(Z) {
      const Q = {
        data: Z,
        next: null,
      };
      if (this.length > 0) {
        this.tail.next = Q;
      } else {
        this.head = Q;
      }
      this.tail = Q;
      ++this.length;
    }
    unshift(Z) {
      const Q = {
        data: Z,
        next: this.head,
      };
      if (this.length === 0) {
        this.tail = Q;
      }
      this.head = Q;
      ++this.length;
    }
    shift() {
      if (this.length !== 0) {
        const Z = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return Z;
      }
    }
    clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
    join(Z) {
      if (this.length === 0) {
        return "";
      }
      for (var Q = this.head, X = "" + Q.data; (Q = Q.next);) {
        X += Z + Q.data;
      }
      return X;
    }
    concat(Z) {
      if (this.length === 0) {
        return Buffer.alloc(0);
      }
      let Q;
      let X;
      const ee = Buffer.allocUnsafe(Z >>> 0);
      for (let et = this.head, er = 0; et;) {
        Q = et.data;
        X = er;
        Q.copy(ee, X);
        er += et.data.length;
        et = et.next;
      }
      return ee;
    }
  }
  return Z;
})();
if (ee && ee.inspect && ee.inspect.custom) {
  module.exports.prototype[ee.inspect.custom] = function () {
    const Z = ee.inspect({
      length: this.length,
    });
    return this.constructor.name + " " + Z;
  };
}
