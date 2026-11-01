import { Buffer } from "wS";
import f from "./module-cGB.js";
import c from "./module-kh_2.js";
import u from "Wt";
const n = new (require("sIO"))();
const a = new f(24);
const s = new f(11);
const o = new f(10);
const h = new f(3);
const d = new f(7);
function l(t, e) {
  e = e || "utf8";
  if (!Buffer.isBuffer(t)) {
    t = new Buffer(t, e);
  }
  this._pub = new f(t);
  return this;
}
function b(t, e) {
  e = e || "utf8";
  if (!Buffer.isBuffer(t)) {
    t = new Buffer(t, e);
  }
  this._priv = new f(t);
  return this;
}
export default m;
const p = {};
function m(t, e, r) {
  this.setGenerator(e);
  this.__prime = new f(t);
  this._prime = f.mont(this.__prime);
  this._primeLen = t.length;
  this._pub = undefined;
  this._priv = undefined;
  this._primeCode = undefined;
  if (r) {
    this.setPublicKey = l;
    this.setPrivateKey = b;
  } else {
    this._primeCode = 8;
  }
}
function v(t, e) {
  const r = new Buffer(t.toArray());
  if (e) {
    return r.toString(e);
  }
  return r;
}
Object.defineProperty(m.prototype, "verifyError", {
  enumerable: true,
  get: function () {
    if (typeof this._primeCode !== "number") {
      this._primeCode = ((t, e) => {
        let r;
        const i = e.toString("hex");
        const f = [i, t.toString(16)].join("_");
        if (f in p) {
          return p[f];
        }
        let u = 0;
        if (t.isEven() || !c.simpleSieve || !c.fermatTest(t) || !n.test(t)) {
          u += 1;
          if (i === "02" || i === "05") {
            u += 8;
          } else {
            u += 4;
          }
          p[f] = u;
          return u;
        }
        if (!n.test(t.shrn(1))) {
          u += 2;
        }
        switch (i) {
          case "02":
            if (t.mod(a).cmp(s)) {
              u += 8;
            }
            break;
          case "05":
            if ((r = t.mod(o)).cmp(h) && r.cmp(d)) {
              u += 8;
            }
            break;
          default:
            u += 4;
        }
        p[f] = u;
        return u;
      })(this.__prime, this.__gen);
    }
    return this._primeCode;
  },
});
m.prototype.generateKeys = function () {
  if (!this._priv) {
    this._priv = new f(u(this._primeLen));
  }
  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
  return this.getPublicKey();
};
m.prototype.computeSecret = function (t) {
  let e = new Buffer(
    (t = (t = new f(t)).toRed(this._prime))
      .redPow(this._priv)
      .fromRed()
      .toArray(),
  );
  const r = this.getPrime();
  if (e.length < r.length) {
    const n = new Buffer(r.length - e.length);
    n.fill(0);
    e = Buffer.concat([n, e]);
  }
  return e;
};
m.prototype.getPublicKey = function (t) {
  return v(this._pub, t);
};
m.prototype.getPrivateKey = function (t) {
  return v(this._priv, t);
};
m.prototype.getPrime = function (t) {
  return v(this.__prime, t);
};
m.prototype.getGenerator = function (t) {
  return v(this._gen, t);
};
m.prototype.setGenerator = function (t, e) {
  e = e || "utf8";
  if (!Buffer.isBuffer(t)) {
    t = new Buffer(t, e);
  }
  this.__gen = t;
  this._gen = new f(t);
  return this;
};
