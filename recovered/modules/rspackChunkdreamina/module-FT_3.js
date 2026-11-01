import { Buffer } from "wS";
import { inspect } from "rLu";
function et(key) {
  const Q = ((Z, Q) => {
    if (typeof Z !== "object" || Z === null) {
      return Z;
    }
    const X = Z[Symbol.toPrimitive];
    if (X !== undefined) {
      const $ = X.call(Z, Q || "default");
      if (typeof $ !== "object") {
        return $;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (Q === "string" ? String : Number)(Z);
  })(key, "string");
  if (typeof Q === "symbol") {
    return Q;
  }
  return String(Q);
}
const key = (inspect && inspect.custom) || "inspect";
export default (() => {
  let Z;
  function Q() {
    if (!(this instanceof Q)) {
      throw TypeError("Cannot call a class as a function");
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  Z = [
    {
      key: "push",
      value: function (Z) {
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
      },
    },
    {
      key: "unshift",
      value: function (Z) {
        const Q = {
          data: Z,
          next: this.head,
        };
        if (this.length === 0) {
          this.tail = Q;
        }
        this.head = Q;
        ++this.length;
      },
    },
    {
      key: "shift",
      value: function () {
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
      },
    },
    {
      key: "clear",
      value: function () {
        this.head = this.tail = null;
        this.length = 0;
      },
    },
    {
      key: "join",
      value: function (Z) {
        if (this.length === 0) {
          return "";
        }
        for (var Q = this.head, X = "" + Q.data; (Q = Q.next);) {
          X += Z + Q.data;
        }
        return X;
      },
    },
    {
      key: "concat",
      value: function (Z) {
        if (this.length === 0) {
          return Buffer.alloc(0);
        }
        let Q;
        let X;
        const $ = Buffer.allocUnsafe(Z >>> 0);
        for (let ee = this.head, et = 0; ee;) {
          Q = ee.data;
          X = et;
          Buffer.prototype.copy.call(Q, $, X);
          et += ee.data.length;
          ee = ee.next;
        }
        return $;
      },
    },
    {
      key: "consume",
      value: function (Z, Q) {
        let X;
        if (Z < this.head.data.length) {
          X = this.head.data.slice(0, Z);
          this.head.data = this.head.data.slice(Z);
        } else {
          X =
            Z === this.head.data.length
              ? this.shift()
              : Q
                ? this._getString(Z)
                : this._getBuffer(Z);
        }
        return X;
      },
    },
    {
      key: "first",
      value: function () {
        return this.head.data;
      },
    },
    {
      key: "_getString",
      value: function (Z) {
        let head = this.head;
        let X = 1;
        let Q_data = head.data;
        for (Z -= Q_data.length; (head = head.next);) {
          const ee = head.data;
          const et = Z > ee.length ? ee.length : Z;
          if (et === ee.length) {
            Q_data += ee;
          } else {
            Q_data += ee.slice(0, Z);
          }
          if ((Z -= et) == 0) {
            if (et === ee.length) {
              ++X;
              if (head.next) {
                this.head = head.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              this.head = head;
              head.data = ee.slice(et);
            }
            break;
          }
          ++X;
        }
        this.length -= X;
        return Q_data;
      },
    },
    {
      key: "_getBuffer",
      value: function (Z) {
        const Q = Buffer.allocUnsafe(Z);
        let head = this.head;
        let $ = 1;
        head.data.copy(Q);
        for (Z -= head.data.length; (head = head.next);) {
          const ee = head.data;
          const et = Z > ee.length ? ee.length : Z;
          ee.copy(Q, Q.length - Z, 0, et);
          if ((Z -= et) == 0) {
            if (et === ee.length) {
              ++$;
              if (head.next) {
                this.head = head.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              this.head = head;
              head.data = ee.slice(et);
            }
            break;
          }
          ++$;
        }
        this.length -= $;
        return Q;
      },
    },
    {
      key,
      value: function (Z, Q) {
        return inspect(this, {
          ...Q,
          depth: 0,
          customInspect: false,
        });
      },
    },
  ];
  ((Z, Q) => {
    for (let X = 0; X < Q.length; X++) {
      const $ = Q[X];
      $.enumerable = $.enumerable || false;
      $.configurable = true;
      if ("value" in $) {
        $.writable = true;
      }
      Object.defineProperty(Z, et($.key), $);
    }
  })(Q.prototype, Z);
  Object.defineProperty(Q, "prototype", {
    writable: false,
  });
  return Q;
})();
