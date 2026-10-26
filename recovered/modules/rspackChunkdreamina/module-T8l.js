export class C6 {
  static create(...e) {
    return new this(...e);
  }
  mixIn(e) {
    return Object.assign(this, e);
  }
  clone() {
    let e = new this.constructor();
    Object.assign(e, this);
    return e;
  }
}
export class id extends C6 {
  constructor(e = [], t = 4 * e.length) {
    super();
    let r = e;
    if (r instanceof ArrayBuffer) {
      r = new Uint8Array(r);
    }
    if (
      r instanceof Int8Array ||
      r instanceof Uint8ClampedArray ||
      r instanceof Int16Array ||
      r instanceof Uint16Array ||
      r instanceof Int32Array ||
      r instanceof Uint32Array ||
      r instanceof Float32Array ||
      r instanceof Float64Array
    ) {
      r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    }
    if (r instanceof Uint8Array) {
      let e = r.byteLength;
      let t = [];
      for (let i = 0; i < e; i += 1) {
        t[i >>> 2] |= r[i] << (24 - (i % 4) * 8);
      }
      this.words = t;
      this.sigBytes = e;
    } else {
      this.words = e;
      this.sigBytes = t;
    }
  }
  static random(e) {
    let t = [];
    let r = (e) => {
      let t = e;
      let r = 987654321;
      return () => {
        let e =
          (((r = (36969 * (65535 & r) + (r >> 16)) | 0) << 16) +
            (t = (18000 * (65535 & t) + (t >> 16)) | 0)) |
          0;
        e /= 4294967296;
        return (e += 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, s; i < e; i += 4) {
      let e = r(4294967296 * (s || Math.random()));
      s = 987654071 * e();
      t.push((4294967296 * e()) | 0);
    }
    return new id(t, e);
  }
  toString(e = _h) {
    return e.stringify(this);
  }
  concat(e) {
    let words = this.words;
    let e_words = e.words;
    let sigBytes = this.sigBytes;
    let e_sigBytes = e.sigBytes;
    this.clamp();
    if (sigBytes % 4) {
      for (let e = 0; e < e_sigBytes; e += 1) {
        let s = (e_words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
        words[(sigBytes + e) >>> 2] |= s << (24 - ((sigBytes + e) % 4) * 8);
      }
    } else {
      for (let e = 0; e < e_sigBytes; e += 4) {
        words[(sigBytes + e) >>> 2] = e_words[e >>> 2];
      }
    }
    this.sigBytes += e_sigBytes;
    return this;
  }
  clamp() {
    let { words, sigBytes } = this;
    words[sigBytes >>> 2] &= 4294967295 << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  }
  clone() {
    let e = super.clone.call(this);
    e.words = this.words.slice(0);
    return e;
  }
}
export let _h = {
  stringify(e) {
    let { words, sigBytes } = e;
    let i = [];
    for (let e = 0; e < sigBytes; e += 1) {
      let r = (words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
      i.push((r >>> 4).toString(16));
      i.push((15 & r).toString(16));
    }
    return i.join("");
  },
  parse(e) {
    let e_length = e.length;
    let r = [];
    for (let i = 0; i < e_length; i += 2) {
      r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << (24 - (i % 8) * 4);
    }
    return new id(r, e_length / 2);
  },
};
let n = {
  stringify(e) {
    let { words, sigBytes } = e;
    let i = [];
    for (let e = 0; e < sigBytes; e += 1) {
      let r = (words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255;
      i.push(String.fromCharCode(r));
    }
    return i.join("");
  },
  parse(e) {
    let e_length = e.length;
    let r = [];
    for (let i = 0; i < e_length; i += 1) {
      r[i >>> 2] |= (255 & e.charCodeAt(i)) << (24 - (i % 4) * 8);
    }
    return new id(r, e_length);
  },
};
let c = {
  stringify(e) {
    try {
      return decodeURIComponent(escape(n.stringify(e)));
    } catch (e) {
      throw Error("Malformed UTF-8 data");
    }
  },
  parse: (e) => n.parse(unescape(encodeURIComponent(e))),
};
export class IZ extends C6 {
  constructor() {
    super();
    this._minBufferSize = 0;
  }
  reset() {
    this._data = new id();
    this._nDataBytes = 0;
  }
  _append(e) {
    let t = e;
    if (typeof t === "string") {
      t = c.parse(t);
    }
    this._data.concat(t);
    this._nDataBytes += t.sigBytes;
  }
  _process(e) {
    let t;
    let { _data, blockSize } = this;
    let _data_words = _data.words;
    let _data_sigBytes = _data.sigBytes;
    let c = _data_sigBytes / (4 * blockSize);
    let o =
      (c = e ? Math.ceil(c) : Math.max((0 | c) - this._minBufferSize, 0)) *
      blockSize;
    let f = Math.min(4 * o, _data_sigBytes);
    if (o) {
      for (let e = 0; e < o; e += blockSize) {
        this._doProcessBlock(_data_words, e);
      }
      t = _data_words.splice(0, o);
      _data.sigBytes -= f;
    }
    return new id(t, f);
  }
  clone() {
    let e = super.clone.call(this);
    e._data = this._data.clone();
    return e;
  }
}
export class OP extends IZ {
  constructor(e) {
    super();
    this.blockSize = 16;
    this.cfg = Object.assign(new C6(), e);
    this.reset();
  }
  static _createHelper(e) {
    return (t, r) => new e(r).finalize(t);
  }
  static _createHmacHelper(e) {
    return (t, r) => new x(e, r).finalize(t);
  }
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  update(e) {
    this._append(e);
    this._process();
    return this;
  }
  finalize(e) {
    if (e) {
      this._append(e);
    }
    return this._doFinalize();
  }
}
class x extends C6 {
  constructor(e, t) {
    super();
    let r = new e();
    this._hasher = r;
    let i = t;
    if (typeof i === "string") {
      i = c.parse(i);
    }
    let s = r.blockSize;
    let a = 4 * s;
    if (i.sigBytes > a) {
      i = r.finalize(t);
    }
    i.clamp();
    let n = i.clone();
    this._oKey = n;
    let o = i.clone();
    this._iKey = o;
    let f = n.words;
    let x = o.words;
    for (let e = 0; e < s; e += 1) {
      f[e] ^= 1549556828;
      x[e] ^= 909522486;
    }
    n.sigBytes = a;
    o.sigBytes = a;
    this.reset();
  }
  reset() {
    let _hasher = this._hasher;
    _hasher.reset();
    _hasher.update(this._iKey);
  }
  update(e) {
    this._hasher.update(e);
    return this;
  }
  finalize(e) {
    let _hasher = this._hasher;
    let r = _hasher.finalize(e);
    _hasher.reset();
    return _hasher.finalize(this._oKey.clone().concat(r));
  }
}
