import { join32, toArray } from "./module-ial.js";
import f from "TnJ";
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
  update(t, e) {
    t = toArray(t, e);
    if (this.pending) {
      this.pending = this.pending.concat(t);
    } else {
      this.pending = t;
    }
    this.pendingTotal += t.length;
    if (this.pending.length >= this._delta8) {
      const r = (t = this.pending).length % this._delta8;
      this.pending = t.slice(t.length - r, t.length);
      if (this.pending.length === 0) {
        this.pending = null;
      }
      t = join32(t, 0, t.length - r, this.endian);
      for (let f = 0; f < t.length; f += this._delta32) {
        this._update(t, f, f + this._delta32);
      }
    }
    return this;
  }
  digest(t) {
    this.update(this._pad());
    f(this.pending === null);
    return this._digest(t);
  }
  _pad() {
    let pendingTotal = this.pendingTotal;
    const _delta8 = this._delta8;
    const r = _delta8 - ((pendingTotal + this.padLength) % _delta8);
    const i = Array(r + this.padLength);
    i[0] = 128;
    for (var f = 1; f < r; f++) {
      i[f] = 0;
    }
    pendingTotal <<= 3;
    if (this.endian === "big") {
      for (var n = 8; n < this.padLength; n++) {
        i[f++] = 0;
      }
      i[f++] = 0;
      i[f++] = 0;
      i[f++] = 0;
      i[f++] = 0;
      i[f++] = (pendingTotal >>> 24) & 255;
      i[f++] = (pendingTotal >>> 16) & 255;
      i[f++] = (pendingTotal >>> 8) & 255;
      i[f++] = 255 & pendingTotal;
    } else {
      i[f++] = 255 & pendingTotal;
      i[f++] = (pendingTotal >>> 8) & 255;
      i[f++] = (pendingTotal >>> 16) & 255;
      i[f++] = (pendingTotal >>> 24) & 255;
      i[f++] = 0;
      i[f++] = 0;
      i[f++] = 0;
      i[f++] = 0;
      for (n = 8; n < this.padLength; n++) {
        i[f++] = 0;
      }
    }
    return i;
  }
}
