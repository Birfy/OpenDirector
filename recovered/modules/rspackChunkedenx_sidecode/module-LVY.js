import { join32, toArray } from "./module-IMF.js";
import tt from "./module-fn_2.js";
export class BlockHash {
  constructor() {
    this.pending = null;
    this.pendingTotal = 0;
    this.blockSize = this.constructor.blockSize;
    this.outSize = this.constructor.outSize;
    this.hmacStrength = this.constructor.hmacStrength;
    this.padLength = this.constructor.padLength / 8;
    this.endian = "big";
    this._delta8 = this.blockSize / 8;
    this._delta32 = this.blockSize / 32;
  }
  update(J, Z) {
    J = toArray(J, Z);
    if (this.pending) {
      this.pending = this.pending.concat(J);
    } else {
      this.pending = J;
    }
    this.pendingTotal += J.length;
    if (this.pending.length >= this._delta8) {
      const Q = (J = this.pending).length % this._delta8;
      this.pending = J.slice(J.length - Q, J.length);
      if (this.pending.length === 0) {
        this.pending = null;
      }
      J = join32(J, 0, J.length - Q, this.endian);
      for (let tt = 0; tt < J.length; tt += this._delta32) {
        this._update(J, tt, tt + this._delta32);
      }
    }
    return this;
  }
  digest(J) {
    this.update(this._pad());
    tt(this.pending === null);
    return this._digest(J);
  }
  _pad() {
    let pendingTotal = this.pendingTotal;
    const _delta8 = this._delta8;
    const Q = _delta8 - ((pendingTotal + this.padLength) % _delta8);
    const $ = Array(Q + this.padLength);
    $[0] = 128;
    for (var tt = 1; tt < Q; tt++) {
      $[tt] = 0;
    }
    pendingTotal <<= 3;
    if (this.endian === "big") {
      for (var te = 8; te < this.padLength; te++) {
        $[tt++] = 0;
      }
      $[tt++] = 0;
      $[tt++] = 0;
      $[tt++] = 0;
      $[tt++] = 0;
      $[tt++] = (pendingTotal >>> 24) & 255;
      $[tt++] = (pendingTotal >>> 16) & 255;
      $[tt++] = (pendingTotal >>> 8) & 255;
      $[tt++] = 255 & pendingTotal;
    } else {
      $[tt++] = 255 & pendingTotal;
      $[tt++] = (pendingTotal >>> 8) & 255;
      $[tt++] = (pendingTotal >>> 16) & 255;
      $[tt++] = (pendingTotal >>> 24) & 255;
      $[tt++] = 0;
      $[tt++] = 0;
      $[tt++] = 0;
      $[tt++] = 0;
      for (te = 8; te < this.padLength; te++) {
        $[tt++] = 0;
      }
    }
    return $;
  }
}
