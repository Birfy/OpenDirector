import { Buffer } from "./module-pH.js";
import _tn from "./module-rL_2_2.js";
function te(key) {
  const Z = ((J, Z) => {
    if (typeof J !== "object" || J === null) {
      return J;
    }
    const Q = J[Symbol.toPrimitive];
    if (Q !== undefined) {
      const $ = Q.call(J, Z || "default");
      if (typeof $ !== "object") {
        return $;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (Z === "string" ? String : Number)(J);
  })(key, "string");
  if (typeof Z === "symbol") {
    return Z;
  }
  return String(Z);
}
const _tn_inspect = _tn.inspect;
const key = (_tn_inspect && _tn_inspect.custom) || "inspect";
export default (() => {
  let J;
  function Z() {
    if (!(this instanceof Z)) {
      throw TypeError("Cannot call a class as a function");
    }
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  J = [
    {
      key: "push",
      value: function (J) {
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
      },
    },
    {
      key: "unshift",
      value: function (J) {
        const Z = {
          data: J,
          next: this.head,
        };
        if (this.length === 0) {
          this.tail = Z;
        }
        this.head = Z;
        ++this.length;
      },
    },
    {
      key: "shift",
      value: function () {
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
      value: function (J) {
        if (this.length === 0) {
          return "";
        }
        for (var Z = this.head, Q = "" + Z.data; (Z = Z.next);) {
          Q += J + Z.data;
        }
        return Q;
      },
    },
    {
      key: "concat",
      value: function (J) {
        if (this.length === 0) {
          return Buffer.alloc(0);
        }
        let Z;
        let Q;
        const $ = Buffer.allocUnsafe(J >>> 0);
        for (let tt = this.head, te = 0; tt;) {
          Z = tt.data;
          Q = te;
          Buffer.prototype.copy.call(Z, $, Q);
          te += tt.data.length;
          tt = tt.next;
        }
        return $;
      },
    },
    {
      key: "consume",
      value: function (J, Z) {
        let Q;
        if (J < this.head.data.length) {
          Q = this.head.data.slice(0, J);
          this.head.data = this.head.data.slice(J);
        } else {
          Q =
            J === this.head.data.length
              ? this.shift()
              : Z
                ? this._getString(J)
                : this._getBuffer(J);
        }
        return Q;
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
      value: function (J) {
        let head = this.head;
        let Q = 1;
        let Z_data = head.data;
        for (J -= Z_data.length; (head = head.next);) {
          const tt = head.data;
          const te = J > tt.length ? tt.length : J;
          if (te === tt.length) {
            Z_data += tt;
          } else {
            Z_data += tt.slice(0, J);
          }
          if ((J -= te) == 0) {
            if (te === tt.length) {
              ++Q;
              if (head.next) {
                this.head = head.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              this.head = head;
              head.data = tt.slice(te);
            }
            break;
          }
          ++Q;
        }
        this.length -= Q;
        return Z_data;
      },
    },
    {
      key: "_getBuffer",
      value: function (J) {
        const Z = Buffer.allocUnsafe(J);
        let head = this.head;
        let $ = 1;
        head.data.copy(Z);
        for (J -= head.data.length; (head = head.next);) {
          const tt = head.data;
          const te = J > tt.length ? tt.length : J;
          tt.copy(Z, Z.length - J, 0, te);
          if ((J -= te) == 0) {
            if (te === tt.length) {
              ++$;
              if (head.next) {
                this.head = head.next;
              } else {
                this.head = this.tail = null;
              }
            } else {
              this.head = head;
              head.data = tt.slice(te);
            }
            break;
          }
          ++$;
        }
        this.length -= $;
        return Z;
      },
    },
    {
      key,
      value: function (J, Z) {
        return _tn_inspect(this, {
          ...Z,
          depth: 0,
          customInspect: false,
        });
      },
    },
  ];
  ((J, Z) => {
    for (let Q = 0; Q < Z.length; Q++) {
      const $ = Z[Q];
      $.enumerable = $.enumerable || false;
      $.configurable = true;
      if ("value" in $) {
        $.writable = true;
      }
      Object.defineProperty(J, te($.key), $);
    }
  })(Z.prototype, J);
  Object.defineProperty(Z, "prototype", {
    writable: false,
  });
  return Z;
})();
