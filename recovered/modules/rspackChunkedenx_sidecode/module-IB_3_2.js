import $ from "./module-ULy.js";
import tt from "./module-FVT.js";
import { Buffer } from "./module-s6_2_2.js";
const tr = Array(16);
function tn() {
  tt.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
function ti(J, Z) {
  return (J << Z) | (J >>> (32 - Z));
}
function to(J, Z, Q, $, tt, te, tr) {
  return (ti((J + ((Z & Q) | (~Z & $)) + tt + te) | 0, tr) + Z) | 0;
}
function ta(J, Z, Q, $, tt, te, tr) {
  return (ti((J + ((Z & $) | (Q & ~$)) + tt + te) | 0, tr) + Z) | 0;
}
function ts(J, Z, Q, $, tt, te, tr) {
  return (ti((J + (Z ^ Q ^ $) + tt + te) | 0, tr) + Z) | 0;
}
function tf(J, Z, Q, $, tt, te, tr) {
  return (ti((J + (Q ^ (Z | ~$)) + tt + te) | 0, tr) + Z) | 0;
}
$(tn, tt);
tn.prototype._update = function () {
  for (let J = 0; J < 16; ++J) {
    tr[J] = this._block.readInt32LE(4 * J);
  }
  let Z = this._a;
  let Q = this._b;
  let $ = this._c;
  let tt = this._d;
  Z = to(Z, Q, $, tt, tr[0], 3614090360, 7);
  tt = to(tt, Z, Q, $, tr[1], 3905402710, 12);
  $ = to($, tt, Z, Q, tr[2], 606105819, 17);
  Q = to(Q, $, tt, Z, tr[3], 3250441966, 22);
  Z = to(Z, Q, $, tt, tr[4], 4118548399, 7);
  tt = to(tt, Z, Q, $, tr[5], 1200080426, 12);
  $ = to($, tt, Z, Q, tr[6], 2821735955, 17);
  Q = to(Q, $, tt, Z, tr[7], 4249261313, 22);
  Z = to(Z, Q, $, tt, tr[8], 1770035416, 7);
  tt = to(tt, Z, Q, $, tr[9], 2336552879, 12);
  $ = to($, tt, Z, Q, tr[10], 4294925233, 17);
  Q = to(Q, $, tt, Z, tr[11], 2304563134, 22);
  Z = to(Z, Q, $, tt, tr[12], 1804603682, 7);
  tt = to(tt, Z, Q, $, tr[13], 4254626195, 12);
  $ = to($, tt, Z, Q, tr[14], 2792965006, 17);
  Q = to(Q, $, tt, Z, tr[15], 1236535329, 22);
  Z = ta(Z, Q, $, tt, tr[1], 4129170786, 5);
  tt = ta(tt, Z, Q, $, tr[6], 3225465664, 9);
  $ = ta($, tt, Z, Q, tr[11], 643717713, 14);
  Q = ta(Q, $, tt, Z, tr[0], 3921069994, 20);
  Z = ta(Z, Q, $, tt, tr[5], 3593408605, 5);
  tt = ta(tt, Z, Q, $, tr[10], 38016083, 9);
  $ = ta($, tt, Z, Q, tr[15], 3634488961, 14);
  Q = ta(Q, $, tt, Z, tr[4], 3889429448, 20);
  Z = ta(Z, Q, $, tt, tr[9], 568446438, 5);
  tt = ta(tt, Z, Q, $, tr[14], 3275163606, 9);
  $ = ta($, tt, Z, Q, tr[3], 4107603335, 14);
  Q = ta(Q, $, tt, Z, tr[8], 1163531501, 20);
  Z = ta(Z, Q, $, tt, tr[13], 2850285829, 5);
  tt = ta(tt, Z, Q, $, tr[2], 4243563512, 9);
  $ = ta($, tt, Z, Q, tr[7], 1735328473, 14);
  Q = ta(Q, $, tt, Z, tr[12], 2368359562, 20);
  Z = ts(Z, Q, $, tt, tr[5], 4294588738, 4);
  tt = ts(tt, Z, Q, $, tr[8], 2272392833, 11);
  $ = ts($, tt, Z, Q, tr[11], 1839030562, 16);
  Q = ts(Q, $, tt, Z, tr[14], 4259657740, 23);
  Z = ts(Z, Q, $, tt, tr[1], 2763975236, 4);
  tt = ts(tt, Z, Q, $, tr[4], 1272893353, 11);
  $ = ts($, tt, Z, Q, tr[7], 4139469664, 16);
  Q = ts(Q, $, tt, Z, tr[10], 3200236656, 23);
  Z = ts(Z, Q, $, tt, tr[13], 681279174, 4);
  tt = ts(tt, Z, Q, $, tr[0], 3936430074, 11);
  $ = ts($, tt, Z, Q, tr[3], 3572445317, 16);
  Q = ts(Q, $, tt, Z, tr[6], 76029189, 23);
  Z = ts(Z, Q, $, tt, tr[9], 3654602809, 4);
  tt = ts(tt, Z, Q, $, tr[12], 3873151461, 11);
  $ = ts($, tt, Z, Q, tr[15], 530742520, 16);
  Q = ts(Q, $, tt, Z, tr[2], 3299628645, 23);
  Z = tf(Z, Q, $, tt, tr[0], 4096336452, 6);
  tt = tf(tt, Z, Q, $, tr[7], 1126891415, 10);
  $ = tf($, tt, Z, Q, tr[14], 2878612391, 15);
  Q = tf(Q, $, tt, Z, tr[5], 4237533241, 21);
  Z = tf(Z, Q, $, tt, tr[12], 1700485571, 6);
  tt = tf(tt, Z, Q, $, tr[3], 2399980690, 10);
  $ = tf($, tt, Z, Q, tr[10], 4293915773, 15);
  Q = tf(Q, $, tt, Z, tr[1], 2240044497, 21);
  Z = tf(Z, Q, $, tt, tr[8], 1873313359, 6);
  tt = tf(tt, Z, Q, $, tr[15], 4264355552, 10);
  $ = tf($, tt, Z, Q, tr[6], 2734768916, 15);
  Q = tf(Q, $, tt, Z, tr[13], 1309151649, 21);
  Z = tf(Z, Q, $, tt, tr[4], 4149444226, 6);
  tt = tf(tt, Z, Q, $, tr[11], 3174756917, 10);
  $ = tf($, tt, Z, Q, tr[2], 718787259, 15);
  Q = tf(Q, $, tt, Z, tr[9], 3951481745, 21);
  this._a = (this._a + Z) | 0;
  this._b = (this._b + Q) | 0;
  this._c = (this._c + $) | 0;
  this._d = (this._d + tt) | 0;
};
tn.prototype._digest = function () {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  const J = Buffer.allocUnsafe(16);
  J.writeInt32LE(this._a, 0);
  J.writeInt32LE(this._b, 4);
  J.writeInt32LE(this._c, 8);
  J.writeInt32LE(this._d, 12);
  return J;
};
export default tn;
