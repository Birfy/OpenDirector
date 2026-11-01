import { Buffer } from "./module-pH.js";
import tt from "./module-ai.js";
import ts from "./module-CH.js";
import tf from "./module-qs_2_2.js";
const te = new (require("./module-dD.js"))();
const tr = new tt(24);
const tn = new tt(11);
const ti = new tt(10);
const to = new tt(3);
const ta = new tt(7);
function tu(J, Z) {
  Z = Z || "utf8";
  if (!Buffer.isBuffer(J)) {
    J = new Buffer(J, Z);
  }
  this._pub = new tt(J);
  return this;
}
function tc(J, Z) {
  Z = Z || "utf8";
  if (!Buffer.isBuffer(J)) {
    J = new Buffer(J, Z);
  }
  this._priv = new tt(J);
  return this;
}
export default td;
const th = {};
function td(J, Z, Q) {
  this.setGenerator(Z);
  this.__prime = new tt(J);
  this._prime = tt.mont(this.__prime);
  this._primeLen = J.length;
  this._pub = undefined;
  this._priv = undefined;
  this._primeCode = undefined;
  if (Q) {
    this.setPublicKey = tu;
    this.setPrivateKey = tc;
  } else {
    this._primeCode = 8;
  }
}
function tl(J, Z) {
  const Q = new Buffer(J.toArray());
  if (Z) {
    return Q.toString(Z);
  }
  return Q;
}
Object.defineProperty(td.prototype, "verifyError", {
  enumerable: true,
  get: function () {
    if (typeof this._primeCode !== "number") {
      this._primeCode = ((J, Z) => {
        let Q;
        const $ = Z.toString("hex");
        const tt = [$, J.toString(16)].join("_");
        if (tt in th) {
          return th[tt];
        }
        let tf = 0;
        if (J.isEven() || !ts.simpleSieve || !ts.fermatTest(J) || !te.test(J)) {
          tf += 1;
          if ($ === "02" || $ === "05") {
            tf += 8;
          } else {
            tf += 4;
          }
          th[tt] = tf;
          return tf;
        }
        if (!te.test(J.shrn(1))) {
          tf += 2;
        }
        switch ($) {
          case "02":
            if (J.mod(tr).cmp(tn)) {
              tf += 8;
            }
            break;
          case "05":
            if ((Q = J.mod(ti)).cmp(to) && Q.cmp(ta)) {
              tf += 8;
            }
            break;
          default:
            tf += 4;
        }
        th[tt] = tf;
        return tf;
      })(this.__prime, this.__gen);
    }
    return this._primeCode;
  },
});
td.prototype.generateKeys = function () {
  if (!this._priv) {
    this._priv = new tt(tf(this._primeLen));
  }
  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
  return this.getPublicKey();
};
td.prototype.computeSecret = function (J) {
  let Z = new Buffer(
    (J = (J = new tt(J)).toRed(this._prime))
      .redPow(this._priv)
      .fromRed()
      .toArray(),
  );
  const Q = this.getPrime();
  if (Z.length < Q.length) {
    const te = new Buffer(Q.length - Z.length);
    te.fill(0);
    Z = Buffer.concat([te, Z]);
  }
  return Z;
};
td.prototype.getPublicKey = function (J) {
  return tl(this._pub, J);
};
td.prototype.getPrivateKey = function (J) {
  return tl(this._priv, J);
};
td.prototype.getPrime = function (J) {
  return tl(this.__prime, J);
};
td.prototype.getGenerator = function (J) {
  return tl(this._gen, J);
};
td.prototype.setGenerator = function (J, Z) {
  Z = Z || "utf8";
  if (!Buffer.isBuffer(J)) {
    J = new Buffer(J, Z);
  }
  this.__gen = J;
  this._gen = new tt(J);
  return this;
};
