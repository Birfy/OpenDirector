import { cS } from "./module-tqk.js";
export class c extends cS {}
c.Encryptor = class extends c {
  processBlock(e, t) {
    let _cipher = this._cipher;
    let { blockSize } = _cipher;
    let _iv = this._iv;
    let _counter = this._counter;
    if (_iv) {
      this._counter = _iv.slice(0);
      _counter = this._counter;
      this._iv = undefined;
    }
    let n = _counter.slice(0);
    _cipher.encryptBlock(n, 0);
    _counter[blockSize - 1] = (_counter[blockSize - 1] + 1) | 0;
    for (let r = 0; r < blockSize; r += 1) {
      e[t + r] ^= n[r];
    }
  }
};
c.Decryptor = c.Encryptor;
