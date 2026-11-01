import i from "TnJ";
import f from "./module-Hs_2.js";
import {
  expand,
  ip,
  pc1,
  pc2,
  permute,
  r28shl,
  readUInt32BE,
  rip,
  substitute,
  writeUInt32BE,
} from "./module-k3.js";
import a from "./module-X9.js";
function s() {
  this.tmp = [, ,];
  this.keys = null;
}
function o(t) {
  a.call(this, t);
  const e = new s();
  this._desState = e;
  this.deriveKeys(e, t.key);
}
f(o, a);
export default o;
o.create = function (t) {
  return new o(t);
};
const h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
o.prototype.deriveKeys = function (t, e) {
  t.keys = Array(32);
  i.equal(e.length, this.blockSize, "Invalid key length");
  let r = readUInt32BE(e, 0);
  let f = readUInt32BE(e, 4);
  pc1(r, f, t.tmp, 0);
  r = t.tmp[0];
  f = t.tmp[1];
  for (let a = 0; a < t.keys.length; a += 2) {
    const s = h[a >>> 1];
    r = r28shl(r, s);
    f = r28shl(f, s);
    pc2(r, f, t.keys, a);
  }
};
o.prototype._update = function (t, e, r, i) {
  const _desState = this._desState;
  let a = readUInt32BE(t, e);
  let s = readUInt32BE(t, e + 4);
  ip(a, s, _desState.tmp, 0);
  a = _desState.tmp[0];
  s = _desState.tmp[1];
  if (this.type === "encrypt") {
    this._encrypt(_desState, a, s, _desState.tmp, 0);
  } else {
    this._decrypt(_desState, a, s, _desState.tmp, 0);
  }
  a = _desState.tmp[0];
  s = _desState.tmp[1];
  writeUInt32BE(r, a, i);
  writeUInt32BE(r, s, i + 4);
};
o.prototype._pad = function (t, e) {
  if (this.padding === false) {
    return false;
  }
  const r = t.length - e;
  for (let i = e; i < t.length; i++) {
    t[i] = r;
  }
  return true;
};
o.prototype._unpad = function (t) {
  if (this.padding === false) {
    return t;
  }
  const e = t[t.length - 1];
  for (let r = t.length - e; r < t.length; r++) {
    i.equal(t[r], e);
  }
  return t.slice(0, t.length - e);
};
o.prototype._encrypt = function (t, e, r, i, f) {
  let a = e;
  let s = r;
  for (let o = 0; o < t.keys.length; o += 2) {
    let h = t.keys[o];
    let d = t.keys[o + 1];
    expand(s, t.tmp, 0);
    h ^= t.tmp[0];
    d ^= t.tmp[1];
    const c = substitute(h, d);
    const u = permute(c);
    const l = s;
    s = (a ^ u) >>> 0;
    a = l;
  }
  rip(s, a, i, f);
};
o.prototype._decrypt = function (t, e, r, i, f) {
  let a = r;
  let s = e;
  for (let o = t.keys.length - 2; o >= 0; o -= 2) {
    let h = t.keys[o];
    let d = t.keys[o + 1];
    expand(a, t.tmp, 0);
    h ^= t.tmp[0];
    d ^= t.tmp[1];
    const c = substitute(h, d);
    const u = permute(c);
    const l = a;
    a = (s ^ u) >>> 0;
    s = l;
  }
  rip(a, s, i, f);
};
