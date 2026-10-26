import $ from "Hs";
import ee from "pd";
import { Buffer } from "./module-b58.js";
const er = Array(16);
function en() {
  ee.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
function ei(Z, Q) {
  return (Z << Q) | (Z >>> (32 - Q));
}
function ea(Z, Q, X, $, ee, et, er) {
  return (ei((Z + ((Q & X) | (~Q & $)) + ee + et) | 0, er) + Q) | 0;
}
function eo(Z, Q, X, $, ee, et, er) {
  return (ei((Z + ((Q & $) | (X & ~$)) + ee + et) | 0, er) + Q) | 0;
}
function es(Z, Q, X, $, ee, et, er) {
  return (ei((Z + (Q ^ X ^ $) + ee + et) | 0, er) + Q) | 0;
}
function ef(Z, Q, X, $, ee, et, er) {
  return (ei((Z + (X ^ (Q | ~$)) + ee + et) | 0, er) + Q) | 0;
}
$(en, ee);
en.prototype._update = function () {
  for (let Z = 0; Z < 16; ++Z) {
    er[Z] = this._block.readInt32LE(4 * Z);
  }
  let Q = this._a;
  let X = this._b;
  let $ = this._c;
  let ee = this._d;
  Q = ea(Q, X, $, ee, er[0], 3614090360, 7);
  ee = ea(ee, Q, X, $, er[1], 3905402710, 12);
  $ = ea($, ee, Q, X, er[2], 606105819, 17);
  X = ea(X, $, ee, Q, er[3], 3250441966, 22);
  Q = ea(Q, X, $, ee, er[4], 4118548399, 7);
  ee = ea(ee, Q, X, $, er[5], 1200080426, 12);
  $ = ea($, ee, Q, X, er[6], 2821735955, 17);
  X = ea(X, $, ee, Q, er[7], 4249261313, 22);
  Q = ea(Q, X, $, ee, er[8], 1770035416, 7);
  ee = ea(ee, Q, X, $, er[9], 2336552879, 12);
  $ = ea($, ee, Q, X, er[10], 4294925233, 17);
  X = ea(X, $, ee, Q, er[11], 2304563134, 22);
  Q = ea(Q, X, $, ee, er[12], 1804603682, 7);
  ee = ea(ee, Q, X, $, er[13], 4254626195, 12);
  $ = ea($, ee, Q, X, er[14], 2792965006, 17);
  X = ea(X, $, ee, Q, er[15], 1236535329, 22);
  Q = eo(Q, X, $, ee, er[1], 4129170786, 5);
  ee = eo(ee, Q, X, $, er[6], 3225465664, 9);
  $ = eo($, ee, Q, X, er[11], 643717713, 14);
  X = eo(X, $, ee, Q, er[0], 3921069994, 20);
  Q = eo(Q, X, $, ee, er[5], 3593408605, 5);
  ee = eo(ee, Q, X, $, er[10], 38016083, 9);
  $ = eo($, ee, Q, X, er[15], 3634488961, 14);
  X = eo(X, $, ee, Q, er[4], 3889429448, 20);
  Q = eo(Q, X, $, ee, er[9], 568446438, 5);
  ee = eo(ee, Q, X, $, er[14], 3275163606, 9);
  $ = eo($, ee, Q, X, er[3], 4107603335, 14);
  X = eo(X, $, ee, Q, er[8], 1163531501, 20);
  Q = eo(Q, X, $, ee, er[13], 2850285829, 5);
  ee = eo(ee, Q, X, $, er[2], 4243563512, 9);
  $ = eo($, ee, Q, X, er[7], 1735328473, 14);
  X = eo(X, $, ee, Q, er[12], 2368359562, 20);
  Q = es(Q, X, $, ee, er[5], 4294588738, 4);
  ee = es(ee, Q, X, $, er[8], 2272392833, 11);
  $ = es($, ee, Q, X, er[11], 1839030562, 16);
  X = es(X, $, ee, Q, er[14], 4259657740, 23);
  Q = es(Q, X, $, ee, er[1], 2763975236, 4);
  ee = es(ee, Q, X, $, er[4], 1272893353, 11);
  $ = es($, ee, Q, X, er[7], 4139469664, 16);
  X = es(X, $, ee, Q, er[10], 3200236656, 23);
  Q = es(Q, X, $, ee, er[13], 681279174, 4);
  ee = es(ee, Q, X, $, er[0], 3936430074, 11);
  $ = es($, ee, Q, X, er[3], 3572445317, 16);
  X = es(X, $, ee, Q, er[6], 76029189, 23);
  Q = es(Q, X, $, ee, er[9], 3654602809, 4);
  ee = es(ee, Q, X, $, er[12], 3873151461, 11);
  $ = es($, ee, Q, X, er[15], 530742520, 16);
  X = es(X, $, ee, Q, er[2], 3299628645, 23);
  Q = ef(Q, X, $, ee, er[0], 4096336452, 6);
  ee = ef(ee, Q, X, $, er[7], 1126891415, 10);
  $ = ef($, ee, Q, X, er[14], 2878612391, 15);
  X = ef(X, $, ee, Q, er[5], 4237533241, 21);
  Q = ef(Q, X, $, ee, er[12], 1700485571, 6);
  ee = ef(ee, Q, X, $, er[3], 2399980690, 10);
  $ = ef($, ee, Q, X, er[10], 4293915773, 15);
  X = ef(X, $, ee, Q, er[1], 2240044497, 21);
  Q = ef(Q, X, $, ee, er[8], 1873313359, 6);
  ee = ef(ee, Q, X, $, er[15], 4264355552, 10);
  $ = ef($, ee, Q, X, er[6], 2734768916, 15);
  X = ef(X, $, ee, Q, er[13], 1309151649, 21);
  Q = ef(Q, X, $, ee, er[4], 4149444226, 6);
  ee = ef(ee, Q, X, $, er[11], 3174756917, 10);
  $ = ef($, ee, Q, X, er[2], 718787259, 15);
  X = ef(X, $, ee, Q, er[9], 3951481745, 21);
  this._a = (this._a + Q) | 0;
  this._b = (this._b + X) | 0;
  this._c = (this._c + $) | 0;
  this._d = (this._d + ee) | 0;
};
en.prototype._digest = function () {
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
  const Z = Buffer.allocUnsafe(16);
  Z.writeInt32LE(this._a, 0);
  Z.writeInt32LE(this._b, 4);
  Z.writeInt32LE(this._c, 8);
  Z.writeInt32LE(this._d, 12);
  return Z;
};
export default en;
