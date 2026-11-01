import { C6, IZ, OP, id } from "./module-T8l.js";
let s = {
  stringify(e) {
    let { words, sigBytes } = e;
    let _map = this._map;
    e.clamp();
    let s = [];
    for (let e = 0; e < sigBytes; e += 3) {
      let a =
        (((words[e >>> 2] >>> (24 - (e % 4) * 8)) & 255) << 16) |
        (((words[(e + 1) >>> 2] >>> (24 - ((e + 1) % 4) * 8)) & 255) << 8) |
        ((words[(e + 2) >>> 2] >>> (24 - ((e + 2) % 4) * 8)) & 255);
      for (let t = 0; t < 4 && e + 0.75 * t < sigBytes; t += 1) {
        s.push(_map.charAt((a >>> (6 * (3 - t))) & 63));
      }
    }
    let a = _map.charAt(64);
    if (a) {
      while (s.length % 4) {
        s.push(a);
      }
    }
    return s.join("");
  },
  parse(e) {
    let e_length = e.length;
    let _map = this._map;
    let _reverseMap = this._reverseMap;
    if (!_reverseMap) {
      this._reverseMap = [];
      _reverseMap = this._reverseMap;
      for (let e = 0; e < _map.length; e += 1) {
        _reverseMap[_map.charCodeAt(e)] = e;
      }
    }
    let a = _map.charAt(64);
    if (a) {
      let r = e.indexOf(a);
      if (r !== -1) {
        e_length = r;
      }
    }
    const n = e;
    const c = e_length;
    const o = _reverseMap;
    let f = [];
    let x = 0;
    for (let e = 0; e < c; e += 1) {
      if (e % 4) {
        let t =
          (o[n.charCodeAt(e - 1)] << ((e % 4) * 2)) |
          (o[n.charCodeAt(e)] >>> (6 - (e % 4) * 2));
        f[x >>> 2] |= t << (24 - (x % 4) * 8);
        x += 1;
      }
    }
    return id.create(f, x);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
};
let a = [];
for (let e = 0; e < 64; e += 1) {
  a[e] = (4294967296 * Math.abs(Math.sin(e + 1))) | 0;
}
let n = (e, t, r, i, s, a, n) => {
  let c = e + ((t & r) | (~t & i)) + s + n;
  return ((c << a) | (c >>> (32 - a))) + t;
};
let c = (e, t, r, i, s, a, n) => {
  let c = e + ((t & i) | (r & ~i)) + s + n;
  return ((c << a) | (c >>> (32 - a))) + t;
};
let o = (e, t, r, i, s, a, n) => {
  let c = e + (t ^ r ^ i) + s + n;
  return ((c << a) | (c >>> (32 - a))) + t;
};
let f = (e, t, r, i, s, a, n) => {
  let c = e + (r ^ (t | ~i)) + s + n;
  return ((c << a) | (c >>> (32 - a))) + t;
};
class x extends OP {
  _doReset() {
    this._hash = new id([1732584193, 4023233417, 2562383102, 271733878]);
  }
  _doProcessBlock(e, t) {
    for (let r = 0; r < 16; r += 1) {
      let i = t + r;
      let s = e[i];
      e[i] =
        (((s << 8) | (s >>> 24)) & 16711935) |
        (((s << 24) | (s >>> 8)) & 4278255360);
    }
    let words = this._hash.words;
    let i = e[t + 0];
    let s = e[t + 1];
    let x = e[t + 2];
    let h = e[t + 3];
    let l = e[t + 4];
    let d = e[t + 5];
    let p = e[t + 6];
    let u = e[t + 7];
    let _ = e[t + 8];
    let y = e[t + 9];
    let v = e[t + 10];
    let g = e[t + 11];
    let b = e[t + 12];
    let k = e[t + 13];
    let B = e[t + 14];
    let w = e[t + 15];
    let m = words[0];
    let S = words[1];
    let C = words[2];
    let H = words[3];
    m = n(m, S, C, H, i, 7, a[0]);
    H = n(H, m, S, C, s, 12, a[1]);
    C = n(C, H, m, S, x, 17, a[2]);
    S = n(S, C, H, m, h, 22, a[3]);
    m = n(m, S, C, H, l, 7, a[4]);
    H = n(H, m, S, C, d, 12, a[5]);
    C = n(C, H, m, S, p, 17, a[6]);
    S = n(S, C, H, m, u, 22, a[7]);
    m = n(m, S, C, H, _, 7, a[8]);
    H = n(H, m, S, C, y, 12, a[9]);
    C = n(C, H, m, S, v, 17, a[10]);
    S = n(S, C, H, m, g, 22, a[11]);
    m = n(m, S, C, H, b, 7, a[12]);
    H = n(H, m, S, C, k, 12, a[13]);
    C = n(C, H, m, S, B, 17, a[14]);
    S = n(S, C, H, m, w, 22, a[15]);
    m = c(m, S, C, H, s, 5, a[16]);
    H = c(H, m, S, C, p, 9, a[17]);
    C = c(C, H, m, S, g, 14, a[18]);
    S = c(S, C, H, m, i, 20, a[19]);
    m = c(m, S, C, H, d, 5, a[20]);
    H = c(H, m, S, C, v, 9, a[21]);
    C = c(C, H, m, S, w, 14, a[22]);
    S = c(S, C, H, m, l, 20, a[23]);
    m = c(m, S, C, H, y, 5, a[24]);
    H = c(H, m, S, C, B, 9, a[25]);
    C = c(C, H, m, S, h, 14, a[26]);
    S = c(S, C, H, m, _, 20, a[27]);
    m = c(m, S, C, H, k, 5, a[28]);
    H = c(H, m, S, C, x, 9, a[29]);
    C = c(C, H, m, S, u, 14, a[30]);
    S = c(S, C, H, m, b, 20, a[31]);
    m = o(m, S, C, H, d, 4, a[32]);
    H = o(H, m, S, C, _, 11, a[33]);
    C = o(C, H, m, S, g, 16, a[34]);
    S = o(S, C, H, m, B, 23, a[35]);
    m = o(m, S, C, H, s, 4, a[36]);
    H = o(H, m, S, C, l, 11, a[37]);
    C = o(C, H, m, S, u, 16, a[38]);
    S = o(S, C, H, m, v, 23, a[39]);
    m = o(m, S, C, H, k, 4, a[40]);
    H = o(H, m, S, C, i, 11, a[41]);
    C = o(C, H, m, S, h, 16, a[42]);
    S = o(S, C, H, m, p, 23, a[43]);
    m = o(m, S, C, H, y, 4, a[44]);
    H = o(H, m, S, C, b, 11, a[45]);
    C = o(C, H, m, S, w, 16, a[46]);
    S = o(S, C, H, m, x, 23, a[47]);
    m = f(m, S, C, H, i, 6, a[48]);
    H = f(H, m, S, C, u, 10, a[49]);
    C = f(C, H, m, S, B, 15, a[50]);
    S = f(S, C, H, m, d, 21, a[51]);
    m = f(m, S, C, H, b, 6, a[52]);
    H = f(H, m, S, C, h, 10, a[53]);
    C = f(C, H, m, S, v, 15, a[54]);
    S = f(S, C, H, m, s, 21, a[55]);
    m = f(m, S, C, H, _, 6, a[56]);
    H = f(H, m, S, C, w, 10, a[57]);
    C = f(C, H, m, S, p, 15, a[58]);
    S = f(S, C, H, m, k, 21, a[59]);
    m = f(m, S, C, H, l, 6, a[60]);
    H = f(H, m, S, C, g, 10, a[61]);
    C = f(C, H, m, S, x, 15, a[62]);
    S = f(S, C, H, m, y, 21, a[63]);
    words[0] = (words[0] + m) | 0;
    words[1] = (words[1] + S) | 0;
    words[2] = (words[2] + C) | 0;
    words[3] = (words[3] + H) | 0;
  }
  _doFinalize() {
    let _data = this._data;
    let e_words = _data.words;
    let r = 8 * this._nDataBytes;
    let i = 8 * _data.sigBytes;
    e_words[i >>> 5] |= 128 << (24 - (i % 32));
    let s = Math.floor(r / 4294967296);
    e_words[(((i + 64) >>> 9) << 4) + 15] =
      (((s << 8) | (s >>> 24)) & 16711935) |
      (((s << 24) | (s >>> 8)) & 4278255360);
    e_words[(((i + 64) >>> 9) << 4) + 14] =
      (((r << 8) | (r >>> 24)) & 16711935) |
      (((r << 24) | (r >>> 8)) & 4278255360);
    _data.sigBytes = (e_words.length + 1) * 4;
    this._process();
    let _hash = this._hash;
    let a_words = _hash.words;
    for (let e = 0; e < 4; e += 1) {
      let t = a_words[e];
      a_words[e] =
        (((t << 8) | (t >>> 24)) & 16711935) |
        (((t << 24) | (t >>> 8)) & 4278255360);
    }
    return _hash;
  }
  clone() {
    let e = super.clone.call(this);
    e._hash = this._hash.clone();
    return e;
  }
}
OP._createHelper(x);
OP._createHmacHelper(x);
class h extends C6 {
  constructor(e) {
    super();
    this.cfg = Object.assign(
      new C6(),
      {
        keySize: 4,
        hasher: x,
        iterations: 1,
      },
      e,
    );
  }
  compute(e, t) {
    let r;
    let { cfg } = this;
    let a = cfg.hasher.create();
    let n = id.create();
    let n_words = n.words;
    let { keySize, iterations } = cfg;
    while (n_words.length < keySize) {
      if (r) {
        a.update(r);
      }
      r = a.update(e).finalize(t);
      a.reset();
      for (let e = 1; e < iterations; e += 1) {
        r = a.finalize(r);
        a.reset();
      }
      n.concat(r);
    }
    n.sigBytes = 4 * keySize;
    return n;
  }
}
class l extends IZ {
  constructor(e, t, r) {
    super();
    this.cfg = Object.assign(new C6(), r);
    this._xformMode = e;
    this._key = t;
    this.reset();
  }
  static createEncryptor(e, t) {
    return this.create(this._ENC_XFORM_MODE, e, t);
  }
  static createDecryptor(e, t) {
    return this.create(this._DEC_XFORM_MODE, e, t);
  }
  static _createHelper(e) {
    let t = (e) => {
      if (typeof e === "string") {
        return b;
      }
      return g;
    };
    return {
      encrypt: (r, i, s) => t(i).encrypt(e, r, i, s),
      decrypt: (r, i, s) => t(i).decrypt(e, r, i, s),
    };
  }
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  process(e) {
    this._append(e);
    return this._process();
  }
  finalize(e) {
    if (e) {
      this._append(e);
    }
    return this._doFinalize();
  }
}
l._ENC_XFORM_MODE = 1;
l._DEC_XFORM_MODE = 2;
l.keySize = 4;
l.ivSize = 4;
export class cS extends C6 {
  constructor(e, t) {
    super();
    this._cipher = e;
    this._iv = t;
  }
  static createEncryptor(e, t) {
    return this.Encryptor.create(e, t);
  }
  static createDecryptor(e, t) {
    return this.Decryptor.create(e, t);
  }
}
function p(e, t, r) {
  let i;
  let _iv = this._iv;
  if (_iv) {
    i = _iv;
    this._iv = undefined;
  } else {
    i = this._prevBlock;
  }
  for (let s = 0; s < r; s += 1) {
    e[t + s] ^= i[s];
  }
}
class u extends cS {}
u.Encryptor = class extends u {
  processBlock(e, t) {
    let _cipher = this._cipher;
    let { blockSize } = _cipher;
    p.call(this, e, t, blockSize);
    _cipher.encryptBlock(e, t);
    this._prevBlock = e.slice(t, t + blockSize);
  }
};
u.Decryptor = class extends u {
  processBlock(e, t) {
    let _cipher = this._cipher;
    let { blockSize } = _cipher;
    let s = e.slice(t, t + blockSize);
    _cipher.decryptBlock(e, t);
    p.call(this, e, t, blockSize);
    this._prevBlock = s;
  }
};
let padding = {
  pad(e, t) {
    let r = 4 * t;
    let s = r - (e.sigBytes % r);
    let a = (s << 24) | (s << 16) | (s << 8) | s;
    let n = [];
    for (let e = 0; e < s; e += 4) {
      n.push(a);
    }
    let c = id.create(n, s);
    e.concat(c);
  },
  unpad(e) {
    let t = 255 & e.words[(e.sigBytes - 1) >>> 2];
    e.sigBytes -= t;
  },
};
export class vf extends l {
  constructor(e, t, r) {
    super(e, t, {
      mode: u,
      padding,
      ...r,
    });
    this.blockSize = 4;
  }
  reset() {
    let e;
    super.reset.call(this);
    let { cfg } = this;
    let { iv, mode } = cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      e = mode.createEncryptor;
    } else {
      e = mode.createDecryptor;
      this._minBufferSize = 1;
    }
    this._mode = e.call(mode, this, iv && iv.words);
    this._mode.__creator = e;
  }
  _doProcessBlock(e, t) {
    this._mode.processBlock(e, t);
  }
  _doFinalize() {
    let e;
    let { padding } = this.cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      padding.pad(this._data, this.blockSize);
      e = this._process(true);
    } else {
      e = this._process(true);
      padding.unpad(e);
    }
    return e;
  }
}
export class UV extends C6 {
  constructor(e) {
    super();
    this.mixIn(e);
  }
  toString(e) {
    return (e || this.formatter).stringify(this);
  }
}
class g extends C6 {
  static encrypt(algorithm, t, r, s) {
    let a = Object.assign(new C6(), this.cfg, s);
    let n = algorithm.createEncryptor(r, a);
    let ciphertext = n.finalize(t);
    let n_cfg = n.cfg;
    return UV.create({
      ciphertext,
      key: r,
      iv: n_cfg.iv,
      algorithm,
      mode: n_cfg.mode,
      padding: n_cfg.padding,
      blockSize: n.blockSize,
      formatter: a.format,
    });
  }
  static decrypt(e, t, r, s) {
    let a = t;
    let n = Object.assign(new C6(), this.cfg, s);
    a = this._parse(a, n.format);
    return e.createDecryptor(r, n).finalize(a.ciphertext);
  }
  static _parse(e, t) {
    if (typeof e === "string") {
      return t.parse(e, this);
    }
    return e;
  }
}
g.cfg = Object.assign(new C6(), {
  format: {
    stringify(e) {
      let { ciphertext, salt } = e;
      return (
        salt
          ? id.create([1398893684, 1701076831]).concat(salt).concat(ciphertext)
          : ciphertext
      ).toString(s);
    },
    parse(e) {
      let t;
      let r = s.parse(e);
      let r_words = r.words;
      if (r_words[0] === 1398893684 && r_words[1] === 1701076831) {
        t = id.create(r_words.slice(2, 4));
        r_words.splice(0, 4);
        r.sigBytes -= 16;
      }
      return UV.create({
        ciphertext: r,
        salt: t,
      });
    },
  },
});
class b extends g {
  static encrypt(e, t, r, s) {
    let a = Object.assign(new C6(), this.cfg, s);
    let n = a.kdf.execute(r, e.keySize, e.ivSize);
    a.iv = n.iv;
    let c = g.encrypt.call(this, e, t, n.key, a);
    c.mixIn(n);
    return c;
  }
  static decrypt(e, t, r, s) {
    let a = t;
    let n = Object.assign(new C6(), this.cfg, s);
    a = this._parse(a, n.format);
    let c = n.kdf.execute(r, e.keySize, e.ivSize, a.salt);
    n.iv = c.iv;
    return g.decrypt.call(this, e, a, c.key, n);
  }
}
b.cfg = Object.assign(g.cfg, {
  kdf: {
    execute(e, t, r, s) {
      let a = s;
      if (!a) {
        a = id.random(8);
      }
      let n = h
        .create({
          keySize: t + r,
        })
        .compute(e, a);
      let iv = id.create(n.words.slice(t), 4 * r);
      n.sigBytes = 4 * t;
      return UV.create({
        key: n,
        iv,
        salt: a,
      });
    },
  },
});
