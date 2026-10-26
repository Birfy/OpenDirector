(function (t, e) {
  "use strict";
  function i(t, e) {
    if (!t) {
      throw Error(e || "Assertion failed");
    }
  }
  function f(t, e) {
    t.super_ = e;
    const r = function () {};
    r.prototype = e.prototype;
    t.prototype = new r();
    t.prototype.constructor = t;
  }
  class n {
    constructor(t, e, r) {
      if (n.isBN(t)) {
        return t;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (t !== null) {
        if (e === "le" || e === "be") {
          r = e;
          e = 10;
        }
        this._init(t || 0, e || 10, r || "be");
      }
    }
    static isBN(t) {
      return (
        t instanceof n ||
        (t !== null &&
          typeof t === "object" &&
          t.constructor.wordSize === n.wordSize &&
          Array.isArray(t.words))
      );
    }
    static max(t, e) {
      if (t.cmp(e) > 0) {
        return t;
      }
      return e;
    }
    static min(t, e) {
      if (t.cmp(e) < 0) {
        return t;
      }
      return e;
    }
    _init(t, e, r) {
      if (typeof t === "number") {
        return this._initNumber(t, e, r);
      }
      if (typeof t === "object") {
        return this._initArray(t, e, r);
      }
      if (e === "hex") {
        e = 16;
      }
      i(e === (0 | e) && e >= 2 && e <= 36);
      let f = 0;
      if ((t = t.toString().replace(/\s+/g, ""))[0] === "-") {
        f++;
        this.negative = 1;
      }
      if (f < t.length) {
        if (e === 16) {
          this._parseHex(t, f, r);
        } else {
          this._parseBase(t, e, f);
          if (r === "le") {
            this._initArray(this.toArray(), e, r);
          }
        }
      }
    }
    _initNumber(t, e, r) {
      if (t < 0) {
        this.negative = 1;
        t = -t;
      }
      if (t < 67108864) {
        this.words = [67108863 & t];
        this.length = 1;
      } else if (t < 4503599627370496) {
        this.words = [67108863 & t, (t / 67108864) & 67108863];
        this.length = 2;
      } else {
        i(t < 9007199254740992);
        this.words = [67108863 & t, (t / 67108864) & 67108863, 1];
        this.length = 3;
      }
      if (r === "le") {
        this._initArray(this.toArray(), e, r);
      }
    }
    _initArray(t, e, r) {
      i(typeof t.length === "number");
      if (t.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(t.length / 3);
      this.words = Array(this.length);
      let f;
      let n;
      for (var a = 0; a < this.length; a++) {
        this.words[a] = 0;
      }
      let s = 0;
      if (r === "be") {
        a = t.length - 1;
        for (f = 0; a >= 0; a -= 3) {
          n = t[a] | (t[a - 1] << 8) | (t[a - 2] << 16);
          this.words[f] |= (n << s) & 67108863;
          this.words[f + 1] = (n >>> (26 - s)) & 67108863;
          if ((s += 24) >= 26) {
            s -= 26;
            f++;
          }
        }
      } else if (r === "le") {
        a = 0;
        for (f = 0; a < t.length; a += 3) {
          n = t[a] | (t[a + 1] << 8) | (t[a + 2] << 16);
          this.words[f] |= (n << s) & 67108863;
          this.words[f + 1] = (n >>> (26 - s)) & 67108863;
          if ((s += 24) >= 26) {
            s -= 26;
            f++;
          }
        }
      }
      return this.strip();
    }
    _parseHex(t, e, r) {
      this.length = Math.ceil((t.length - e) / 6);
      this.words = Array(this.length);
      let i;
      for (var f = 0; f < this.length; f++) {
        this.words[f] = 0;
      }
      let n = 0;
      let a = 0;
      if (r === "be") {
        for (f = t.length - 1; f >= e; f -= 2) {
          i = s(t, e, f) << n;
          this.words[a] |= 67108863 & i;
          if (n >= 18) {
            n -= 18;
            a += 1;
            this.words[a] |= i >>> 26;
          } else {
            n += 8;
          }
        }
      } else {
        for (f = (t.length - e) % 2 == 0 ? e + 1 : e; f < t.length; f += 2) {
          i = s(t, e, f) << n;
          this.words[a] |= 67108863 & i;
          if (n >= 18) {
            n -= 18;
            a += 1;
            this.words[a] |= i >>> 26;
          } else {
            n += 8;
          }
        }
      }
      this.strip();
    }
    _parseBase(t, e, r) {
      this.words = [0];
      this.length = 1;
      let i = 0;
      for (var f = 1; f <= 67108863; f *= e) {
        i++;
      }
      i--;
      f = (f / e) | 0;
      const n = t.length - r;
      const a = n % i;
      for (var s = Math.min(n, n - a) + r, h = 0, d = r; d < s; d += i) {
        h = o(t, d, d + i, e);
        this.imuln(f);
        if (this.words[0] + h < 67108864) {
          this.words[0] += h;
        } else {
          this._iaddn(h);
        }
      }
      if (a !== 0) {
        let c = 1;
        h = o(t, d, t.length, e);
        for (d = 0; d < a; d++) {
          c *= e;
        }
        this.imuln(c);
        if (this.words[0] + h < 67108864) {
          this.words[0] += h;
        } else {
          this._iaddn(h);
        }
      }
      this.strip();
    }
    copy(t) {
      t.words = Array(this.length);
      for (let e = 0; e < this.length; e++) {
        t.words[e] = this.words[e];
      }
      t.length = this.length;
      t.negative = this.negative;
      t.red = this.red;
    }
    clone() {
      const t = new n(null);
      this.copy(t);
      return t;
    }
    _expand(t) {
      while (this.length < t) {
        this.words[this.length++] = 0;
      }
      return this;
    }
    strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    }
    _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    }
    inspect() {
      return `${(this.red ? "<BN-R: " : "<BN: ") + this.toString(16)}>`;
    }
    toString(t, e) {
      e = 0 | e || 1;
      if ((t = t || 10) === 16 || t === "hex") {
        var r = "";
        let f = 0;
        let n = 0;
        for (let a = 0; a < this.length; a++) {
          const s = this.words[a];
          const o = (((s << f) | n) & 16777215).toString(16);
          r =
            (n = (s >>> (24 - f)) & 16777215) != 0 || a !== this.length - 1
              ? d[6 - o.length] + o + r
              : o + r;
          if ((f += 2) >= 26) {
            f -= 26;
            a--;
          }
        }
        for (n !== 0 && (r = n.toString(16) + r); r.length % e != 0;) {
          r = "0" + r;
        }
        if (this.negative !== 0) {
          r = "-" + r;
        }
        return r;
      }
      if (t === (0 | t) && t >= 2 && t <= 36) {
        const h = c[t];
        const l = u[t];
        r = "";
        let b = this.clone();
        for (b.negative = 0; !b.isZero();) {
          const p = b.modn(l).toString(t);
          r = (b = b.idivn(l)).isZero() ? p + r : d[h - p.length] + p + r;
        }
        for (this.isZero() && (r = "0" + r); r.length % e != 0;) {
          r = "0" + r;
        }
        if (this.negative !== 0) {
          r = "-" + r;
        }
        return r;
      }
      i(false, "Base should be between 2 and 36");
    }
    toNumber() {
      let t = this.words[0];
      if (this.length === 2) {
        t += 67108864 * this.words[1];
      } else if (this.length === 3 && this.words[2] === 1) {
        t += 4503599627370496 + 67108864 * this.words[1];
      } else if (this.length > 2) {
        i(false, "Number can only safely store up to 53 bits");
      }
      if (this.negative !== 0) {
        return -t;
      }
      return t;
    }
    toJSON() {
      return this.toString(16);
    }
    toBuffer(t, e) {
      i(h !== undefined);
      return this.toArrayLike(h, t, e);
    }
    toArray(t, e) {
      return this.toArrayLike(Array, t, e);
    }
    toArrayLike(t, e, r) {
      let f;
      let n;
      const a = this.byteLength();
      const s = r || Math.max(1, a);
      i(a <= s, "byte array longer than desired length");
      i(s > 0, "Requested array length <= 0");
      this.strip();
      const o = new t(s);
      const h = this.clone();
      if (e === "le") {
        for (n = 0; !h.isZero(); n++) {
          f = h.andln(255);
          h.iushrn(8);
          o[n] = f;
        }
        for (; n < s; n++) {
          o[n] = 0;
        }
      } else {
        for (n = 0; n < s - a; n++) {
          o[n] = 0;
        }
        for (n = 0; !h.isZero(); n++) {
          f = h.andln(255);
          h.iushrn(8);
          o[s - n - 1] = f;
        }
      }
      return o;
    }
    _zeroBits(t) {
      if (t === 0) {
        return 26;
      }
      let e = t;
      let r = 0;
      if ((8191 & e) == 0) {
        r += 13;
        e >>>= 13;
      }
      if ((127 & e) == 0) {
        r += 7;
        e >>>= 7;
      }
      if ((15 & e) == 0) {
        r += 4;
        e >>>= 4;
      }
      if ((3 & e) == 0) {
        r += 2;
        e >>>= 2;
      }
      if ((1 & e) == 0) {
        r++;
      }
      return r;
    }
    bitLength() {
      const t = this.words[this.length - 1];
      const e = this._countBits(t);
      return (this.length - 1) * 26 + e;
    }
    zeroBits() {
      if (this.isZero()) {
        return 0;
      }
      let t = 0;
      for (let e = 0; e < this.length; e++) {
        const r = this._zeroBits(this.words[e]);
        t += r;
        if (r !== 26) {
          break;
        }
      }
      return t;
    }
    byteLength() {
      return Math.ceil(this.bitLength() / 8);
    }
    toTwos(t) {
      if (this.negative !== 0) {
        return this.abs().inotn(t).iaddn(1);
      }
      return this.clone();
    }
    fromTwos(t) {
      if (this.testn(t - 1)) {
        return this.notn(t).iaddn(1).ineg();
      }
      return this.clone();
    }
    isNeg() {
      return this.negative !== 0;
    }
    neg() {
      return this.clone().ineg();
    }
    ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    }
    iuor(t) {
      while (this.length < t.length) {
        this.words[this.length++] = 0;
      }
      for (let e = 0; e < t.length; e++) {
        this.words[e] = this.words[e] | t.words[e];
      }
      return this.strip();
    }
    ior(t) {
      i((this.negative | t.negative) == 0);
      return this.iuor(t);
    }
    or(t) {
      if (this.length > t.length) {
        return this.clone().ior(t);
      }
      return t.clone().ior(this);
    }
    uor(t) {
      if (this.length > t.length) {
        return this.clone().iuor(t);
      }
      return t.clone().iuor(this);
    }
    iuand(t) {
      let e;
      e = this.length > t.length ? t : this;
      for (let r = 0; r < e.length; r++) {
        this.words[r] = this.words[r] & t.words[r];
      }
      this.length = e.length;
      return this.strip();
    }
    iand(t) {
      i((this.negative | t.negative) == 0);
      return this.iuand(t);
    }
    and(t) {
      if (this.length > t.length) {
        return this.clone().iand(t);
      }
      return t.clone().iand(this);
    }
    uand(t) {
      if (this.length > t.length) {
        return this.clone().iuand(t);
      }
      return t.clone().iuand(this);
    }
    iuxor(t) {
      if (this.length > t.length) {
        e = this;
        r = t;
      } else {
        e = t;
        r = this;
      }
      var e;
      for (var r, i = 0; i < r.length; i++) {
        this.words[i] = e.words[i] ^ r.words[i];
      }
      if (this !== e) {
        for (; i < e.length; i++) {
          this.words[i] = e.words[i];
        }
      }
      this.length = e.length;
      return this.strip();
    }
    ixor(t) {
      i((this.negative | t.negative) == 0);
      return this.iuxor(t);
    }
    xor(t) {
      if (this.length > t.length) {
        return this.clone().ixor(t);
      }
      return t.clone().ixor(this);
    }
    uxor(t) {
      if (this.length > t.length) {
        return this.clone().iuxor(t);
      }
      return t.clone().iuxor(this);
    }
    inotn(t) {
      i(typeof t === "number" && t >= 0);
      let e = 0 | Math.ceil(t / 26);
      const r = t % 26;
      this._expand(e);
      if (r > 0) {
        e--;
      }
      for (var f = 0; f < e; f++) {
        this.words[f] = 67108863 & ~this.words[f];
      }
      if (r > 0) {
        this.words[f] = ~this.words[f] & (67108863 >> (26 - r));
      }
      return this.strip();
    }
    notn(t) {
      return this.clone().inotn(t);
    }
    setn(t, e) {
      i(typeof t === "number" && t >= 0);
      const r = (t / 26) | 0;
      const f = t % 26;
      this._expand(r + 1);
      if (e) {
        this.words[r] = this.words[r] | (1 << f);
      } else {
        this.words[r] = this.words[r] & ~(1 << f);
      }
      return this.strip();
    }
    iadd(t) {
      if (this.negative !== 0 && t.negative === 0) {
        this.negative = 0;
        e = this.isub(t);
        this.negative ^= 1;
        return this._normSign();
      }
      if (this.negative === 0 && t.negative !== 0) {
        t.negative = 0;
        e = this.isub(t);
        t.negative = 1;
        return e._normSign();
      }
      if (this.length > t.length) {
        r = this;
        i = t;
      } else {
        r = t;
        i = this;
      }
      var e;
      var r;
      let f = 0;
      for (var i, n = 0; n < i.length; n++) {
        e = (0 | r.words[n]) + (0 | i.words[n]) + f;
        this.words[n] = 67108863 & e;
        f = e >>> 26;
      }
      for (; f !== 0 && n < r.length; n++) {
        e = (0 | r.words[n]) + f;
        this.words[n] = 67108863 & e;
        f = e >>> 26;
      }
      this.length = r.length;
      if (f !== 0) {
        this.words[this.length] = f;
        this.length++;
      } else if (r !== this) {
        for (; n < r.length; n++) {
          this.words[n] = r.words[n];
        }
      }
      return this;
    }
    add(t) {
      let e;
      if (t.negative !== 0 && this.negative === 0) {
        t.negative = 0;
        e = this.sub(t);
        t.negative ^= 1;
        return e;
      }
      if (t.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        e = t.sub(this);
        this.negative = 1;
        return e;
      }
      if (this.length > t.length) {
        return this.clone().iadd(t);
      }
      return t.clone().iadd(this);
    }
    isub(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var e;
        var r;
        var i = this.iadd(t);
        t.negative = 1;
        return i._normSign();
      }
      if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(t);
        this.negative = 1;
        return this._normSign();
      }
      const f = this.cmp(t);
      if (f === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      if (f > 0) {
        e = this;
        r = t;
      } else {
        e = t;
        r = this;
      }
      let n = 0;
      for (var a = 0; a < r.length; a++) {
        n = (i = (0 | e.words[a]) - (0 | r.words[a]) + n) >> 26;
        this.words[a] = 67108863 & i;
      }
      for (; n !== 0 && a < e.length; a++) {
        n = (i = (0 | e.words[a]) + n) >> 26;
        this.words[a] = 67108863 & i;
      }
      if (n === 0 && a < e.length && e !== this) {
        for (; a < e.length; a++) {
          this.words[a] = e.words[a];
        }
      }
      this.length = Math.max(this.length, a);
      if (e !== this) {
        this.negative = 1;
      }
      return this.strip();
    }
    sub(t) {
      return this.clone().isub(t);
    }
    mulTo(t, e) {
      const r = this.length + t.length;
      if (this.length === 10 && t.length === 10) {
        return b(this, t, e);
      }
      if (r < 63) {
        return l(this, t, e);
      }
      if (r < 1024) {
        return ((t, e, r) => {
          r.negative = e.negative ^ t.negative;
          r.length = t.length + e.length;
          let i = 0;
          let f = 0;
          for (var n = 0; n < r.length - 1; n++) {
            let a = f;
            f = 0;
            let s = 67108863 & i;
            for (
              let o = Math.min(n, e.length - 1),
                h = Math.max(0, n - t.length + 1);
              h <= o;
              h++
            ) {
              const d = n - h;
              const c = (0 | t.words[d]) * (0 | e.words[h]);
              let u = 67108863 & c;
              a = (a + ((c / 67108864) | 0)) | 0;
              s = 67108863 & (u = (u + s) | 0);
              f += (a = (a + (u >>> 26)) | 0) >>> 26;
              a &= 67108863;
            }
            r.words[n] = s;
            i = a;
            a = f;
          }
          if (i !== 0) {
            r.words[n] = i;
          } else {
            r.length--;
          }
          return r.strip();
        })(this, t, e);
      }
      return p(this, t, e);
    }
    mul(t) {
      const e = new n(null);
      e.words = Array(this.length + t.length);
      return this.mulTo(t, e);
    }
    mulf(t) {
      const e = new n(null);
      e.words = Array(this.length + t.length);
      return p(this, t, e);
    }
    imul(t) {
      return this.clone().mulTo(t, this);
    }
    imuln(t) {
      i(typeof t === "number");
      i(t < 67108864);
      let e = 0;
      for (var r = 0; r < this.length; r++) {
        const f = (0 | this.words[r]) * t;
        const n = (67108863 & f) + (67108863 & e);
        e >>= 26;
        e += ((f / 67108864) | 0) + (n >>> 26);
        this.words[r] = 67108863 & n;
      }
      if (e !== 0) {
        this.words[r] = e;
        this.length++;
      }
      return this;
    }
    muln(t) {
      return this.clone().imuln(t);
    }
    sqr() {
      return this.mul(this);
    }
    isqr() {
      return this.imul(this.clone());
    }
    pow(t) {
      const e = ((t) => {
        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
          const i = (r / 26) | 0;
          const f = r % 26;
          e[r] = (t.words[i] & (1 << f)) >>> f;
        }
        return e;
      })(t);
      if (e.length === 0) {
        return new n(1);
      }
      for (var r = this, i = 0; i < e.length && e[i] === 0; i++, r = r.sqr());
      if (++i < e.length) {
        for (let f = r.sqr(); i < e.length; i++, f = f.sqr()) {
          if (e[i] !== 0) {
            r = r.mul(f);
          }
        }
      }
      return r;
    }
    iushln(t) {
      i(typeof t === "number" && t >= 0);
      let e;
      const r = t % 26;
      const f = (t - r) / 26;
      const n = (67108863 >>> (26 - r)) << (26 - r);
      if (r !== 0) {
        let a = 0;
        for (e = 0; e < this.length; e++) {
          const s = this.words[e] & n;
          const o = ((0 | this.words[e]) - s) << r;
          this.words[e] = o | a;
          a = s >>> (26 - r);
        }
        if (a) {
          this.words[e] = a;
          this.length++;
        }
      }
      if (f !== 0) {
        for (e = this.length - 1; e >= 0; e--) {
          this.words[e + f] = this.words[e];
        }
        for (e = 0; e < f; e++) {
          this.words[e] = 0;
        }
        this.length += f;
      }
      return this.strip();
    }
    ishln(t) {
      i(this.negative === 0);
      return this.iushln(t);
    }
    iushrn(t, e, r) {
      i(typeof t === "number" && t >= 0);
      let f = e ? (e - (e % 26)) / 26 : 0;
      const n = t % 26;
      const a = Math.min((t - n) / 26, this.length);
      const s = 67108863 ^ ((67108863 >>> n) << n);
      f -= a;
      f = Math.max(0, f);
      if (r) {
        for (var o = 0; o < a; o++) {
          r.words[o] = this.words[o];
        }
        r.length = a;
      }
      if (a === 0);
      else if (this.length > a) {
        this.length -= a;
        for (o = 0; o < this.length; o++) {
          this.words[o] = this.words[o + a];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      let h = 0;
      for (o = this.length - 1; o >= 0 && (h !== 0 || o >= f); o--) {
        const d = 0 | this.words[o];
        this.words[o] = (h << (26 - n)) | (d >>> n);
        h = d & s;
      }
      if (r && h !== 0) {
        r.words[r.length++] = h;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    }
    ishrn(t, e, r) {
      i(this.negative === 0);
      return this.iushrn(t, e, r);
    }
    shln(t) {
      return this.clone().ishln(t);
    }
    ushln(t) {
      return this.clone().iushln(t);
    }
    shrn(t) {
      return this.clone().ishrn(t);
    }
    ushrn(t) {
      return this.clone().iushrn(t);
    }
    testn(t) {
      i(typeof t === "number" && t >= 0);
      const e = t % 26;
      const r = (t - e) / 26;
      return !(this.length <= r) && !!(this.words[r] & (1 << e));
    }
    imaskn(t) {
      i(typeof t === "number" && t >= 0);
      const e = t % 26;
      let r = (t - e) / 26;
      i(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= r) {
        return this;
      }
      if (e !== 0) {
        r++;
      }
      this.length = Math.min(r, this.length);
      if (e !== 0) {
        this.words[this.length - 1] &= 67108863 ^ ((67108863 >>> e) << e);
      }
      return this.strip();
    }
    maskn(t) {
      return this.clone().imaskn(t);
    }
    iaddn(t) {
      i(typeof t === "number");
      i(t < 67108864);
      if (t < 0) {
        return this.isubn(-t);
      }
      if (this.negative !== 0) {
        if (this.length === 1 && (0 | this.words[0]) < t) {
          this.words[0] = t - (0 | this.words[0]);
          this.negative = 0;
        } else {
          this.negative = 0;
          this.isubn(t);
          this.negative = 1;
        }
        return this;
      }
      return this._iaddn(t);
    }
    _iaddn(t) {
      this.words[0] += t;
      for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) {
        this.words[e] -= 67108864;
        if (e === this.length - 1) {
          this.words[e + 1] = 1;
        } else {
          this.words[e + 1]++;
        }
      }
      this.length = Math.max(this.length, e + 1);
      return this;
    }
    isubn(t) {
      i(typeof t === "number");
      i(t < 67108864);
      if (t < 0) {
        return this.iaddn(-t);
      }
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(t);
        this.negative = 1;
        return this;
      }
      this.words[0] -= t;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (let e = 0; e < this.length && this.words[e] < 0; e++) {
          this.words[e] += 67108864;
          this.words[e + 1] -= 1;
        }
      }
      return this.strip();
    }
    addn(t) {
      return this.clone().iaddn(t);
    }
    subn(t) {
      return this.clone().isubn(t);
    }
    iabs() {
      this.negative = 0;
      return this;
    }
    abs() {
      return this.clone().iabs();
    }
    _ishlnsubmul(t, e, r) {
      let f;
      let n;
      const a = t.length + r;
      this._expand(a);
      let s = 0;
      for (f = 0; f < t.length; f++) {
        n = (0 | this.words[f + r]) + s;
        const o = (0 | t.words[f]) * e;
        n -= 67108863 & o;
        s = (n >> 26) - ((o / 67108864) | 0);
        this.words[f + r] = 67108863 & n;
      }
      for (; f < this.length - r; f++) {
        s = (n = (0 | this.words[f + r]) + s) >> 26;
        this.words[f + r] = 67108863 & n;
      }
      if (s === 0) {
        return this.strip();
      }
      i(s === -1);
      s = 0;
      for (f = 0; f < this.length; f++) {
        s = (n = -(0 | this.words[f]) + s) >> 26;
        this.words[f] = 67108863 & n;
      }
      this.negative = 1;
      return this.strip();
    }
    _wordDiv(t, e) {
      let r;
      let i = this.length - t.length;
      let f = this.clone();
      let a = t;
      let s = 0 | a.words[a.length - 1];
      if ((i = 26 - this._countBits(s)) != 0) {
        a = a.ushln(i);
        f.iushln(i);
        s = 0 | a.words[a.length - 1];
      }
      const o = f.length - a.length;
      if (e !== "mod") {
        r = new n(null);
        r.length = o + 1;
        r.words = Array(r.length);
        for (let h = 0; h < r.length; h++) {
          r.words[h] = 0;
        }
      }
      const d = f.clone()._ishlnsubmul(a, 1, o);
      if (d.negative === 0) {
        f = d;
        if (r) {
          r.words[o] = 1;
        }
      }
      for (let c = o - 1; c >= 0; c--) {
        let u =
          (0 | f.words[a.length + c]) * 67108864 +
          (0 | f.words[a.length + c - 1]);
        u = Math.min((u / s) | 0, 67108863);
        f._ishlnsubmul(a, u, c);
        while (f.negative !== 0) {
          u--;
          f.negative = 0;
          f._ishlnsubmul(a, 1, c);
          if (!f.isZero()) {
            f.negative ^= 1;
          }
        }
        if (r) {
          r.words[c] = u;
        }
      }
      if (r) {
        r.strip();
      }
      f.strip();
      if (e !== "div" && i !== 0) {
        f.iushrn(i);
      }
      return {
        div: r || null,
        mod: f,
      };
    }
    divmod(t, e, r) {
      let div;
      let a;
      let s;
      i(!t.isZero());
      if (this.isZero()) {
        return {
          div: new n(0),
          mod: new n(0),
        };
      }
      if (this.negative !== 0 && t.negative === 0) {
        s = this.neg().divmod(t, e);
        if (e !== "mod") {
          div = s.div.neg();
        }
        if (e !== "div") {
          a = s.mod.neg();
          if (r && a.negative !== 0) {
            a.iadd(t);
          }
        }
        return {
          div,
          mod: a,
        };
      }
      if (this.negative === 0 && t.negative !== 0) {
        s = this.divmod(t.neg(), e);
        if (e !== "mod") {
          div = s.div.neg();
        }
        return {
          div,
          mod: s.mod,
        };
      }
      if ((this.negative & t.negative) != 0) {
        s = this.neg().divmod(t.neg(), e);
        if (e !== "div") {
          a = s.mod.neg();
          if (r && a.negative !== 0) {
            a.isub(t);
          }
        }
        return {
          div: s.div,
          mod: a,
        };
      }
      if (t.length > this.length || this.cmp(t) < 0) {
        return {
          div: new n(0),
          mod: this,
        };
      }
      if (t.length === 1) {
        switch (e) {
          case "div":
            return {
              div: this.divn(t.words[0]),
              mod: null,
            };
          case "mod":
            return {
              div: null,
              mod: new n(this.modn(t.words[0])),
            };
          default:
            return {
              div: this.divn(t.words[0]),
              mod: new n(this.modn(t.words[0])),
            };
        }
      }
      return this._wordDiv(t, e);
    }
    div(t) {
      return this.divmod(t, "div", false).div;
    }
    mod(t) {
      return this.divmod(t, "mod", false).mod;
    }
    umod(t) {
      return this.divmod(t, "mod", true).mod;
    }
    divRound(t) {
      const e = this.divmod(t);
      if (e.mod.isZero()) {
        return e.div;
      }
      const r = e.div.negative !== 0 ? e.mod.isub(t) : e.mod;
      const i = t.ushrn(1);
      const f = t.andln(1);
      const n = r.cmp(i);
      if (n < 0 || (f === 1 && n === 0)) {
        return e.div;
      }
      if (e.div.negative !== 0) {
        return e.div.isubn(1);
      }
      return e.div.iaddn(1);
    }
    modn(t) {
      i(t <= 67108863);
      const e = 67108864 % t;
      let r = 0;
      for (let f = this.length - 1; f >= 0; f--) {
        r = (e * r + (0 | this.words[f])) % t;
      }
      return r;
    }
    idivn(t) {
      i(t <= 67108863);
      let e = 0;
      for (let r = this.length - 1; r >= 0; r--) {
        const f = (0 | this.words[r]) + 67108864 * e;
        this.words[r] = (f / t) | 0;
        e = f % t;
      }
      return this.strip();
    }
    divn(t) {
      return this.clone().idivn(t);
    }
    egcd(t) {
      i(t.negative === 0);
      i(!t.isZero());
      let e = this;
      const r = t.clone();
      e = e.negative !== 0 ? e.umod(t) : e.clone();
      const f = new n(1);
      const a = new n(0);
      const a_1 = new n(0);
      const b_1 = new n(1);
      let h = 0;
      while (e.isEven() && r.isEven()) {
        e.iushrn(1);
        r.iushrn(1);
        ++h;
      }
      const d = r.clone();
      const c = e.clone();
      while (!e.isZero()) {
        for (var u = 0, l = 1; (e.words[0] & l) == 0 && u < 26; ++u, l <<= 1);
        if (u > 0) {
          for (e.iushrn(u); u-- > 0;) {
            if (f.isOdd() || a.isOdd()) {
              f.iadd(d);
              a.isub(c);
            }
            f.iushrn(1);
            a.iushrn(1);
          }
        }
        for (var b = 0, p = 1; (r.words[0] & p) == 0 && b < 26; ++b, p <<= 1);
        if (b > 0) {
          for (r.iushrn(b); b-- > 0;) {
            if (a_1.isOdd() || b_1.isOdd()) {
              a_1.iadd(d);
              b_1.isub(c);
            }
            a_1.iushrn(1);
            b_1.iushrn(1);
          }
        }
        if (e.cmp(r) >= 0) {
          e.isub(r);
          f.isub(a_1);
          a.isub(b_1);
        } else {
          r.isub(e);
          a_1.isub(f);
          b_1.isub(a);
        }
      }
      return {
        a: a_1,
        b: b_1,
        gcd: r.iushln(h),
      };
    }
    _invmp(t) {
      i(t.negative === 0);
      i(!t.isZero());
      let e;
      let r = this;
      const f = t.clone();
      r = r.negative !== 0 ? r.umod(t) : r.clone();
      const a = new n(1);
      const s = new n(0);
      const o = f.clone();
      while (r.cmpn(1) > 0 && f.cmpn(1) > 0) {
        for (var h = 0, d = 1; (r.words[0] & d) == 0 && h < 26; ++h, d <<= 1);
        if (h > 0) {
          for (r.iushrn(h); h-- > 0;) {
            if (a.isOdd()) {
              a.iadd(o);
            }
            a.iushrn(1);
          }
        }
        for (var c = 0, u = 1; (f.words[0] & u) == 0 && c < 26; ++c, u <<= 1);
        if (c > 0) {
          for (f.iushrn(c); c-- > 0;) {
            if (s.isOdd()) {
              s.iadd(o);
            }
            s.iushrn(1);
          }
        }
        if (r.cmp(f) >= 0) {
          r.isub(f);
          a.isub(s);
        } else {
          f.isub(r);
          s.isub(a);
        }
      }
      if ((e = r.cmpn(1) === 0 ? a : s).cmpn(0) < 0) {
        e.iadd(t);
      }
      return e;
    }
    gcd(t) {
      if (this.isZero()) {
        return t.abs();
      }
      if (t.isZero()) {
        return this.abs();
      }
      let e = this.clone();
      let r = t.clone();
      e.negative = 0;
      r.negative = 0;
      for (var i = 0; e.isEven() && r.isEven(); i++) {
        e.iushrn(1);
        r.iushrn(1);
      }
      while (true) {
        while (e.isEven()) {
          e.iushrn(1);
        }
        while (r.isEven()) {
          r.iushrn(1);
        }
        const f = e.cmp(r);
        if (f < 0) {
          const n = e;
          e = r;
          r = n;
        } else if (f === 0 || r.cmpn(1) === 0) {
          break;
        }
        e.isub(r);
      }
      return r.iushln(i);
    }
    invm(t) {
      return this.egcd(t).a.umod(t);
    }
    isEven() {
      return (1 & this.words[0]) == 0;
    }
    isOdd() {
      return (1 & this.words[0]) == 1;
    }
    andln(t) {
      return this.words[0] & t;
    }
    bincn(t) {
      i(typeof t === "number");
      const e = t % 26;
      const r = (t - e) / 26;
      const f = 1 << e;
      if (this.length <= r) {
        this._expand(r + 1);
        this.words[r] |= f;
        return this;
      }
      for (var n = f, a = r; n !== 0 && a < this.length; a++) {
        let s = 0 | this.words[a];
        s += n;
        n = s >>> 26;
        s &= 67108863;
        this.words[a] = s;
      }
      if (n !== 0) {
        this.words[a] = n;
        this.length++;
      }
      return this;
    }
    isZero() {
      return this.length === 1 && this.words[0] === 0;
    }
    cmpn(t) {
      let e;
      const r = t < 0;
      if (this.negative !== 0 && !r) {
        return -1;
      }
      if (this.negative === 0 && r) {
        return 1;
      }
      this.strip();
      if (this.length > 1) {
        e = 1;
      } else {
        if (r) {
          t = -t;
        }
        i(t <= 67108863, "Number is too big");
        const f = 0 | this.words[0];
        e = f === t ? 0 : f < t ? -1 : 1;
      }
      if (this.negative !== 0) {
        return 0 | -e;
      }
      return e;
    }
    cmp(t) {
      if (this.negative !== 0 && t.negative === 0) {
        return -1;
      }
      if (this.negative === 0 && t.negative !== 0) {
        return 1;
      }
      const e = this.ucmp(t);
      if (this.negative !== 0) {
        return 0 | -e;
      }
      return e;
    }
    ucmp(t) {
      if (this.length > t.length) {
        return 1;
      }
      if (this.length < t.length) {
        return -1;
      }
      let e = 0;
      for (let r = this.length - 1; r >= 0; r--) {
        const i = 0 | this.words[r];
        const f = 0 | t.words[r];
        if (i !== f) {
          if (i < f) {
            e = -1;
          } else if (i > f) {
            e = 1;
          }
          break;
        }
      }
      return e;
    }
    gtn(t) {
      return this.cmpn(t) === 1;
    }
    gt(t) {
      return this.cmp(t) === 1;
    }
    gten(t) {
      return this.cmpn(t) >= 0;
    }
    gte(t) {
      return this.cmp(t) >= 0;
    }
    ltn(t) {
      return this.cmpn(t) === -1;
    }
    lt(t) {
      return this.cmp(t) === -1;
    }
    lten(t) {
      return this.cmpn(t) <= 0;
    }
    lte(t) {
      return this.cmp(t) <= 0;
    }
    eqn(t) {
      return this.cmpn(t) === 0;
    }
    eq(t) {
      return this.cmp(t) === 0;
    }
    static red(t) {
      return new x(t);
    }
    toRed(t) {
      i(!this.red, "Already a number in reduction context");
      i(this.negative === 0, "red works only with positives");
      return t.convertTo(this)._forceRed(t);
    }
    fromRed() {
      i(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    }
    _forceRed(t) {
      this.red = t;
      return this;
    }
    forceRed(t) {
      i(!this.red, "Already a number in reduction context");
      return this._forceRed(t);
    }
    redAdd(t) {
      i(this.red, "redAdd works only with red numbers");
      return this.red.add(this, t);
    }
    redIAdd(t) {
      i(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, t);
    }
    redSub(t) {
      i(this.red, "redSub works only with red numbers");
      return this.red.sub(this, t);
    }
    redISub(t) {
      i(this.red, "redISub works only with red numbers");
      return this.red.isub(this, t);
    }
    redShl(t) {
      i(this.red, "redShl works only with red numbers");
      return this.red.shl(this, t);
    }
    redMul(t) {
      i(this.red, "redMul works only with red numbers");
      this.red._verify2(this, t);
      return this.red.mul(this, t);
    }
    redIMul(t) {
      i(this.red, "redMul works only with red numbers");
      this.red._verify2(this, t);
      return this.red.imul(this, t);
    }
    redSqr() {
      i(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    }
    redISqr() {
      i(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    }
    redSqrt() {
      i(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    }
    redInvm() {
      i(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    }
    redNeg() {
      i(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    }
    redPow(t) {
      i(this.red && !t.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, t);
    }
    static _prime(t) {
      let e;
      if (v[t]) {
        return v[t];
      }
      if (t === "k256") {
        e = new y();
      } else if (t === "p224") {
        e = new M();
      } else if (t === "p192") {
        e = new w();
      } else if (t === "p25519") {
        e = new _();
      } else {
        throw Error("Unknown prime " + t);
      }
      v[t] = e;
      return e;
    }
    static mont(t) {
      return new S(t);
    }
  }
  if (typeof t === "object") {
    t.exports = n;
  } else {
    e.BN = n;
  }
  n.BN = n;
  n.wordSize = 26;
  try {
    h =
      typeof window !== "undefined" && window.Buffer !== undefined
        ? window.Buffer
        : require("./module-IDa.js").Buffer;
  } catch (t) {}
  function a(t, e) {
    const r = t.charCodeAt(e);
    if (r >= 65 && r <= 70) {
      return r - 55;
    }
    if (r >= 97 && r <= 102) {
      return r - 87;
    }
    return (r - 48) & 15;
  }
  function s(t, e, r) {
    let i = a(t, r);
    if (r - 1 >= e) {
      i |= a(t, r - 1) << 4;
    }
    return i;
  }
  function o(t, e, r, i) {
    let f = 0;
    for (let n = Math.min(t.length, r), a = e; a < n; a++) {
      const s = t.charCodeAt(a) - 48;
      f *= i;
      if (s >= 49) {
        f += s - 49 + 10;
      } else if (s >= 17) {
        f += s - 17 + 10;
      } else {
        f += s;
      }
    }
    return f;
  }
  var h;
  const d = [
    "",
    "0",
    "00",
    "000",
    "0000",
    "00000",
    "000000",
    "0000000",
    "00000000",
    "000000000",
    "0000000000",
    "00000000000",
    "000000000000",
    "0000000000000",
    "00000000000000",
    "000000000000000",
    "0000000000000000",
    "00000000000000000",
    "000000000000000000",
    "0000000000000000000",
    "00000000000000000000",
    "000000000000000000000",
    "0000000000000000000000",
    "00000000000000000000000",
    "000000000000000000000000",
    "0000000000000000000000000",
  ];
  const c = [
    0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ];
  const u = [
    0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343,
    7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000,
    28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
  ];
  function l(t, e, r) {
    r.negative = e.negative ^ t.negative;
    let i = (t.length + e.length) | 0;
    r.length = i;
    i = (i - 1) | 0;
    let f = 0 | t.words[0];
    let n = 0 | e.words[0];
    let a = f * n;
    const s = 67108863 & a;
    let o = (a / 67108864) | 0;
    r.words[0] = s;
    for (var h = 1; h < i; h++) {
      let d = o >>> 26;
      let c = 67108863 & o;
      for (
        let u = Math.min(h, e.length - 1), l = Math.max(0, h - t.length + 1);
        l <= u;
        l++
      ) {
        const b = (h - l) | 0;
        d +=
          ((a = (f = 0 | t.words[b]) * (n = 0 | e.words[l]) + c) / 67108864) |
          0;
        c = 67108863 & a;
      }
      r.words[h] = 0 | c;
      o = 0 | d;
    }
    if (o !== 0) {
      r.words[h] = 0 | o;
    } else {
      r.length--;
    }
    return r.strip();
  }
  if (Math.clz32) {
    n.prototype._countBits = function (t) {
      return 32 - Math.clz32(t);
    };
  } else {
    n.prototype._countBits = function (t) {
      let e = t;
      let r = 0;
      if (e >= 4096) {
        r += 13;
        e >>>= 13;
      }
      if (e >= 64) {
        r += 7;
        e >>>= 7;
      }
      if (e >= 8) {
        r += 4;
        e >>>= 4;
      }
      if (e >= 2) {
        r += 2;
        e >>>= 2;
      }
      return r + e;
    };
  }
  let b = function (t, e, r) {
    let i;
    let f;
    let n;
    const t_words = t.words;
    const e_words = e.words;
    const r_words = r.words;
    let h = 0;
    const d = 0 | t_words[0];
    const c = 8191 & d;
    const u = d >>> 13;
    const l = 0 | t_words[1];
    const b = 8191 & l;
    const p = l >>> 13;
    const m = 0 | t_words[2];
    const v = 8191 & m;
    const g = m >>> 13;
    const y = 0 | t_words[3];
    const M = 8191 & y;
    const w = y >>> 13;
    const _ = 0 | t_words[4];
    const x = 8191 & _;
    const S = _ >>> 13;
    const A = 0 | t_words[5];
    const k = 8191 & A;
    const B = A >>> 13;
    const E = 0 | t_words[6];
    const I = 8191 & E;
    const R = E >>> 13;
    const z = 0 | t_words[7];
    const q = 8191 & z;
    const L = z >>> 13;
    const C = 0 | t_words[8];
    const P = 8191 & C;
    const N = C >>> 13;
    const j = 0 | t_words[9];
    const O = 8191 & j;
    const T = j >>> 13;
    const U = 0 | e_words[0];
    const D = 8191 & U;
    const H = U >>> 13;
    const Z = 0 | e_words[1];
    const F = 8191 & Z;
    const K = Z >>> 13;
    const X = 0 | e_words[2];
    const J = 8191 & X;
    const G = X >>> 13;
    const V = 0 | e_words[3];
    const W = 8191 & V;
    const Y = V >>> 13;
    const Q = 0 | e_words[4];
    const $ = 8191 & Q;
    const tt = Q >>> 13;
    const te = 0 | e_words[5];
    const tr = 8191 & te;
    const ti = te >>> 13;
    const tf = 0 | e_words[6];
    const tn = 8191 & tf;
    const ta = tf >>> 13;
    const ts = 0 | e_words[7];
    const to = 8191 & ts;
    const th = ts >>> 13;
    const td = 0 | e_words[8];
    const tc = 8191 & td;
    const tu = td >>> 13;
    const tl = 0 | e_words[9];
    const tb = 8191 & tl;
    const tp = tl >>> 13;
    r.negative = t.negative ^ e.negative;
    r.length = 19;
    i = Math.imul(c, D);
    let tm =
      (((h + i) | 0) +
        ((8191 & (f = ((f = Math.imul(c, H)) + Math.imul(u, D)) | 0)) << 13)) |
      0;
    h = ((((n = Math.imul(u, H)) + (f >>> 13)) | 0) + (tm >>> 26)) | 0;
    tm &= 67108863;
    i = Math.imul(b, D);
    f = ((f = Math.imul(b, H)) + Math.imul(p, D)) | 0;
    n = Math.imul(p, H);
    i = (i + Math.imul(c, F)) | 0;
    let tv =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, K)) | 0) + Math.imul(u, F)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, K)) | 0) + (f >>> 13)) | 0) + (tv >>> 26)) | 0;
    tv &= 67108863;
    i = Math.imul(v, D);
    f = ((f = Math.imul(v, H)) + Math.imul(g, D)) | 0;
    n = Math.imul(g, H);
    i = (i + Math.imul(b, F)) | 0;
    f = ((f = (f + Math.imul(b, K)) | 0) + Math.imul(p, F)) | 0;
    n = (n + Math.imul(p, K)) | 0;
    i = (i + Math.imul(c, J)) | 0;
    let tg =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, G)) | 0) + Math.imul(u, J)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, G)) | 0) + (f >>> 13)) | 0) + (tg >>> 26)) | 0;
    tg &= 67108863;
    i = Math.imul(M, D);
    f = ((f = Math.imul(M, H)) + Math.imul(w, D)) | 0;
    n = Math.imul(w, H);
    i = (i + Math.imul(v, F)) | 0;
    f = ((f = (f + Math.imul(v, K)) | 0) + Math.imul(g, F)) | 0;
    n = (n + Math.imul(g, K)) | 0;
    i = (i + Math.imul(b, J)) | 0;
    f = ((f = (f + Math.imul(b, G)) | 0) + Math.imul(p, J)) | 0;
    n = (n + Math.imul(p, G)) | 0;
    i = (i + Math.imul(c, W)) | 0;
    let ty =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, Y)) | 0) + Math.imul(u, W)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, Y)) | 0) + (f >>> 13)) | 0) + (ty >>> 26)) | 0;
    ty &= 67108863;
    i = Math.imul(x, D);
    f = ((f = Math.imul(x, H)) + Math.imul(S, D)) | 0;
    n = Math.imul(S, H);
    i = (i + Math.imul(M, F)) | 0;
    f = ((f = (f + Math.imul(M, K)) | 0) + Math.imul(w, F)) | 0;
    n = (n + Math.imul(w, K)) | 0;
    i = (i + Math.imul(v, J)) | 0;
    f = ((f = (f + Math.imul(v, G)) | 0) + Math.imul(g, J)) | 0;
    n = (n + Math.imul(g, G)) | 0;
    i = (i + Math.imul(b, W)) | 0;
    f = ((f = (f + Math.imul(b, Y)) | 0) + Math.imul(p, W)) | 0;
    n = (n + Math.imul(p, Y)) | 0;
    i = (i + Math.imul(c, $)) | 0;
    let tM =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, tt)) | 0) + Math.imul(u, $)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, tt)) | 0) + (f >>> 13)) | 0) + (tM >>> 26)) | 0;
    tM &= 67108863;
    i = Math.imul(k, D);
    f = ((f = Math.imul(k, H)) + Math.imul(B, D)) | 0;
    n = Math.imul(B, H);
    i = (i + Math.imul(x, F)) | 0;
    f = ((f = (f + Math.imul(x, K)) | 0) + Math.imul(S, F)) | 0;
    n = (n + Math.imul(S, K)) | 0;
    i = (i + Math.imul(M, J)) | 0;
    f = ((f = (f + Math.imul(M, G)) | 0) + Math.imul(w, J)) | 0;
    n = (n + Math.imul(w, G)) | 0;
    i = (i + Math.imul(v, W)) | 0;
    f = ((f = (f + Math.imul(v, Y)) | 0) + Math.imul(g, W)) | 0;
    n = (n + Math.imul(g, Y)) | 0;
    i = (i + Math.imul(b, $)) | 0;
    f = ((f = (f + Math.imul(b, tt)) | 0) + Math.imul(p, $)) | 0;
    n = (n + Math.imul(p, tt)) | 0;
    i = (i + Math.imul(c, tr)) | 0;
    let tw =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, ti)) | 0) + Math.imul(u, tr)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, ti)) | 0) + (f >>> 13)) | 0) + (tw >>> 26)) | 0;
    tw &= 67108863;
    i = Math.imul(I, D);
    f = ((f = Math.imul(I, H)) + Math.imul(R, D)) | 0;
    n = Math.imul(R, H);
    i = (i + Math.imul(k, F)) | 0;
    f = ((f = (f + Math.imul(k, K)) | 0) + Math.imul(B, F)) | 0;
    n = (n + Math.imul(B, K)) | 0;
    i = (i + Math.imul(x, J)) | 0;
    f = ((f = (f + Math.imul(x, G)) | 0) + Math.imul(S, J)) | 0;
    n = (n + Math.imul(S, G)) | 0;
    i = (i + Math.imul(M, W)) | 0;
    f = ((f = (f + Math.imul(M, Y)) | 0) + Math.imul(w, W)) | 0;
    n = (n + Math.imul(w, Y)) | 0;
    i = (i + Math.imul(v, $)) | 0;
    f = ((f = (f + Math.imul(v, tt)) | 0) + Math.imul(g, $)) | 0;
    n = (n + Math.imul(g, tt)) | 0;
    i = (i + Math.imul(b, tr)) | 0;
    f = ((f = (f + Math.imul(b, ti)) | 0) + Math.imul(p, tr)) | 0;
    n = (n + Math.imul(p, ti)) | 0;
    i = (i + Math.imul(c, tn)) | 0;
    let t_ =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, ta)) | 0) + Math.imul(u, tn)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, ta)) | 0) + (f >>> 13)) | 0) + (t_ >>> 26)) | 0;
    t_ &= 67108863;
    i = Math.imul(q, D);
    f = ((f = Math.imul(q, H)) + Math.imul(L, D)) | 0;
    n = Math.imul(L, H);
    i = (i + Math.imul(I, F)) | 0;
    f = ((f = (f + Math.imul(I, K)) | 0) + Math.imul(R, F)) | 0;
    n = (n + Math.imul(R, K)) | 0;
    i = (i + Math.imul(k, J)) | 0;
    f = ((f = (f + Math.imul(k, G)) | 0) + Math.imul(B, J)) | 0;
    n = (n + Math.imul(B, G)) | 0;
    i = (i + Math.imul(x, W)) | 0;
    f = ((f = (f + Math.imul(x, Y)) | 0) + Math.imul(S, W)) | 0;
    n = (n + Math.imul(S, Y)) | 0;
    i = (i + Math.imul(M, $)) | 0;
    f = ((f = (f + Math.imul(M, tt)) | 0) + Math.imul(w, $)) | 0;
    n = (n + Math.imul(w, tt)) | 0;
    i = (i + Math.imul(v, tr)) | 0;
    f = ((f = (f + Math.imul(v, ti)) | 0) + Math.imul(g, tr)) | 0;
    n = (n + Math.imul(g, ti)) | 0;
    i = (i + Math.imul(b, tn)) | 0;
    f = ((f = (f + Math.imul(b, ta)) | 0) + Math.imul(p, tn)) | 0;
    n = (n + Math.imul(p, ta)) | 0;
    i = (i + Math.imul(c, to)) | 0;
    let tx =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, th)) | 0) + Math.imul(u, to)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, th)) | 0) + (f >>> 13)) | 0) + (tx >>> 26)) | 0;
    tx &= 67108863;
    i = Math.imul(P, D);
    f = ((f = Math.imul(P, H)) + Math.imul(N, D)) | 0;
    n = Math.imul(N, H);
    i = (i + Math.imul(q, F)) | 0;
    f = ((f = (f + Math.imul(q, K)) | 0) + Math.imul(L, F)) | 0;
    n = (n + Math.imul(L, K)) | 0;
    i = (i + Math.imul(I, J)) | 0;
    f = ((f = (f + Math.imul(I, G)) | 0) + Math.imul(R, J)) | 0;
    n = (n + Math.imul(R, G)) | 0;
    i = (i + Math.imul(k, W)) | 0;
    f = ((f = (f + Math.imul(k, Y)) | 0) + Math.imul(B, W)) | 0;
    n = (n + Math.imul(B, Y)) | 0;
    i = (i + Math.imul(x, $)) | 0;
    f = ((f = (f + Math.imul(x, tt)) | 0) + Math.imul(S, $)) | 0;
    n = (n + Math.imul(S, tt)) | 0;
    i = (i + Math.imul(M, tr)) | 0;
    f = ((f = (f + Math.imul(M, ti)) | 0) + Math.imul(w, tr)) | 0;
    n = (n + Math.imul(w, ti)) | 0;
    i = (i + Math.imul(v, tn)) | 0;
    f = ((f = (f + Math.imul(v, ta)) | 0) + Math.imul(g, tn)) | 0;
    n = (n + Math.imul(g, ta)) | 0;
    i = (i + Math.imul(b, to)) | 0;
    f = ((f = (f + Math.imul(b, th)) | 0) + Math.imul(p, to)) | 0;
    n = (n + Math.imul(p, th)) | 0;
    i = (i + Math.imul(c, tc)) | 0;
    let tS =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, tu)) | 0) + Math.imul(u, tc)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, tu)) | 0) + (f >>> 13)) | 0) + (tS >>> 26)) | 0;
    tS &= 67108863;
    i = Math.imul(O, D);
    f = ((f = Math.imul(O, H)) + Math.imul(T, D)) | 0;
    n = Math.imul(T, H);
    i = (i + Math.imul(P, F)) | 0;
    f = ((f = (f + Math.imul(P, K)) | 0) + Math.imul(N, F)) | 0;
    n = (n + Math.imul(N, K)) | 0;
    i = (i + Math.imul(q, J)) | 0;
    f = ((f = (f + Math.imul(q, G)) | 0) + Math.imul(L, J)) | 0;
    n = (n + Math.imul(L, G)) | 0;
    i = (i + Math.imul(I, W)) | 0;
    f = ((f = (f + Math.imul(I, Y)) | 0) + Math.imul(R, W)) | 0;
    n = (n + Math.imul(R, Y)) | 0;
    i = (i + Math.imul(k, $)) | 0;
    f = ((f = (f + Math.imul(k, tt)) | 0) + Math.imul(B, $)) | 0;
    n = (n + Math.imul(B, tt)) | 0;
    i = (i + Math.imul(x, tr)) | 0;
    f = ((f = (f + Math.imul(x, ti)) | 0) + Math.imul(S, tr)) | 0;
    n = (n + Math.imul(S, ti)) | 0;
    i = (i + Math.imul(M, tn)) | 0;
    f = ((f = (f + Math.imul(M, ta)) | 0) + Math.imul(w, tn)) | 0;
    n = (n + Math.imul(w, ta)) | 0;
    i = (i + Math.imul(v, to)) | 0;
    f = ((f = (f + Math.imul(v, th)) | 0) + Math.imul(g, to)) | 0;
    n = (n + Math.imul(g, th)) | 0;
    i = (i + Math.imul(b, tc)) | 0;
    f = ((f = (f + Math.imul(b, tu)) | 0) + Math.imul(p, tc)) | 0;
    n = (n + Math.imul(p, tu)) | 0;
    i = (i + Math.imul(c, tb)) | 0;
    let tA =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(c, tp)) | 0) + Math.imul(u, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(u, tp)) | 0) + (f >>> 13)) | 0) + (tA >>> 26)) | 0;
    tA &= 67108863;
    i = Math.imul(O, F);
    f = ((f = Math.imul(O, K)) + Math.imul(T, F)) | 0;
    n = Math.imul(T, K);
    i = (i + Math.imul(P, J)) | 0;
    f = ((f = (f + Math.imul(P, G)) | 0) + Math.imul(N, J)) | 0;
    n = (n + Math.imul(N, G)) | 0;
    i = (i + Math.imul(q, W)) | 0;
    f = ((f = (f + Math.imul(q, Y)) | 0) + Math.imul(L, W)) | 0;
    n = (n + Math.imul(L, Y)) | 0;
    i = (i + Math.imul(I, $)) | 0;
    f = ((f = (f + Math.imul(I, tt)) | 0) + Math.imul(R, $)) | 0;
    n = (n + Math.imul(R, tt)) | 0;
    i = (i + Math.imul(k, tr)) | 0;
    f = ((f = (f + Math.imul(k, ti)) | 0) + Math.imul(B, tr)) | 0;
    n = (n + Math.imul(B, ti)) | 0;
    i = (i + Math.imul(x, tn)) | 0;
    f = ((f = (f + Math.imul(x, ta)) | 0) + Math.imul(S, tn)) | 0;
    n = (n + Math.imul(S, ta)) | 0;
    i = (i + Math.imul(M, to)) | 0;
    f = ((f = (f + Math.imul(M, th)) | 0) + Math.imul(w, to)) | 0;
    n = (n + Math.imul(w, th)) | 0;
    i = (i + Math.imul(v, tc)) | 0;
    f = ((f = (f + Math.imul(v, tu)) | 0) + Math.imul(g, tc)) | 0;
    n = (n + Math.imul(g, tu)) | 0;
    i = (i + Math.imul(b, tb)) | 0;
    let tk =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(b, tp)) | 0) + Math.imul(p, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(p, tp)) | 0) + (f >>> 13)) | 0) + (tk >>> 26)) | 0;
    tk &= 67108863;
    i = Math.imul(O, J);
    f = ((f = Math.imul(O, G)) + Math.imul(T, J)) | 0;
    n = Math.imul(T, G);
    i = (i + Math.imul(P, W)) | 0;
    f = ((f = (f + Math.imul(P, Y)) | 0) + Math.imul(N, W)) | 0;
    n = (n + Math.imul(N, Y)) | 0;
    i = (i + Math.imul(q, $)) | 0;
    f = ((f = (f + Math.imul(q, tt)) | 0) + Math.imul(L, $)) | 0;
    n = (n + Math.imul(L, tt)) | 0;
    i = (i + Math.imul(I, tr)) | 0;
    f = ((f = (f + Math.imul(I, ti)) | 0) + Math.imul(R, tr)) | 0;
    n = (n + Math.imul(R, ti)) | 0;
    i = (i + Math.imul(k, tn)) | 0;
    f = ((f = (f + Math.imul(k, ta)) | 0) + Math.imul(B, tn)) | 0;
    n = (n + Math.imul(B, ta)) | 0;
    i = (i + Math.imul(x, to)) | 0;
    f = ((f = (f + Math.imul(x, th)) | 0) + Math.imul(S, to)) | 0;
    n = (n + Math.imul(S, th)) | 0;
    i = (i + Math.imul(M, tc)) | 0;
    f = ((f = (f + Math.imul(M, tu)) | 0) + Math.imul(w, tc)) | 0;
    n = (n + Math.imul(w, tu)) | 0;
    i = (i + Math.imul(v, tb)) | 0;
    let tB =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(v, tp)) | 0) + Math.imul(g, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(g, tp)) | 0) + (f >>> 13)) | 0) + (tB >>> 26)) | 0;
    tB &= 67108863;
    i = Math.imul(O, W);
    f = ((f = Math.imul(O, Y)) + Math.imul(T, W)) | 0;
    n = Math.imul(T, Y);
    i = (i + Math.imul(P, $)) | 0;
    f = ((f = (f + Math.imul(P, tt)) | 0) + Math.imul(N, $)) | 0;
    n = (n + Math.imul(N, tt)) | 0;
    i = (i + Math.imul(q, tr)) | 0;
    f = ((f = (f + Math.imul(q, ti)) | 0) + Math.imul(L, tr)) | 0;
    n = (n + Math.imul(L, ti)) | 0;
    i = (i + Math.imul(I, tn)) | 0;
    f = ((f = (f + Math.imul(I, ta)) | 0) + Math.imul(R, tn)) | 0;
    n = (n + Math.imul(R, ta)) | 0;
    i = (i + Math.imul(k, to)) | 0;
    f = ((f = (f + Math.imul(k, th)) | 0) + Math.imul(B, to)) | 0;
    n = (n + Math.imul(B, th)) | 0;
    i = (i + Math.imul(x, tc)) | 0;
    f = ((f = (f + Math.imul(x, tu)) | 0) + Math.imul(S, tc)) | 0;
    n = (n + Math.imul(S, tu)) | 0;
    i = (i + Math.imul(M, tb)) | 0;
    let tE =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(M, tp)) | 0) + Math.imul(w, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(w, tp)) | 0) + (f >>> 13)) | 0) + (tE >>> 26)) | 0;
    tE &= 67108863;
    i = Math.imul(O, $);
    f = ((f = Math.imul(O, tt)) + Math.imul(T, $)) | 0;
    n = Math.imul(T, tt);
    i = (i + Math.imul(P, tr)) | 0;
    f = ((f = (f + Math.imul(P, ti)) | 0) + Math.imul(N, tr)) | 0;
    n = (n + Math.imul(N, ti)) | 0;
    i = (i + Math.imul(q, tn)) | 0;
    f = ((f = (f + Math.imul(q, ta)) | 0) + Math.imul(L, tn)) | 0;
    n = (n + Math.imul(L, ta)) | 0;
    i = (i + Math.imul(I, to)) | 0;
    f = ((f = (f + Math.imul(I, th)) | 0) + Math.imul(R, to)) | 0;
    n = (n + Math.imul(R, th)) | 0;
    i = (i + Math.imul(k, tc)) | 0;
    f = ((f = (f + Math.imul(k, tu)) | 0) + Math.imul(B, tc)) | 0;
    n = (n + Math.imul(B, tu)) | 0;
    i = (i + Math.imul(x, tb)) | 0;
    let tI =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(x, tp)) | 0) + Math.imul(S, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(S, tp)) | 0) + (f >>> 13)) | 0) + (tI >>> 26)) | 0;
    tI &= 67108863;
    i = Math.imul(O, tr);
    f = ((f = Math.imul(O, ti)) + Math.imul(T, tr)) | 0;
    n = Math.imul(T, ti);
    i = (i + Math.imul(P, tn)) | 0;
    f = ((f = (f + Math.imul(P, ta)) | 0) + Math.imul(N, tn)) | 0;
    n = (n + Math.imul(N, ta)) | 0;
    i = (i + Math.imul(q, to)) | 0;
    f = ((f = (f + Math.imul(q, th)) | 0) + Math.imul(L, to)) | 0;
    n = (n + Math.imul(L, th)) | 0;
    i = (i + Math.imul(I, tc)) | 0;
    f = ((f = (f + Math.imul(I, tu)) | 0) + Math.imul(R, tc)) | 0;
    n = (n + Math.imul(R, tu)) | 0;
    i = (i + Math.imul(k, tb)) | 0;
    let tR =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(k, tp)) | 0) + Math.imul(B, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(B, tp)) | 0) + (f >>> 13)) | 0) + (tR >>> 26)) | 0;
    tR &= 67108863;
    i = Math.imul(O, tn);
    f = ((f = Math.imul(O, ta)) + Math.imul(T, tn)) | 0;
    n = Math.imul(T, ta);
    i = (i + Math.imul(P, to)) | 0;
    f = ((f = (f + Math.imul(P, th)) | 0) + Math.imul(N, to)) | 0;
    n = (n + Math.imul(N, th)) | 0;
    i = (i + Math.imul(q, tc)) | 0;
    f = ((f = (f + Math.imul(q, tu)) | 0) + Math.imul(L, tc)) | 0;
    n = (n + Math.imul(L, tu)) | 0;
    i = (i + Math.imul(I, tb)) | 0;
    let tz =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(I, tp)) | 0) + Math.imul(R, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(R, tp)) | 0) + (f >>> 13)) | 0) + (tz >>> 26)) | 0;
    tz &= 67108863;
    i = Math.imul(O, to);
    f = ((f = Math.imul(O, th)) + Math.imul(T, to)) | 0;
    n = Math.imul(T, th);
    i = (i + Math.imul(P, tc)) | 0;
    f = ((f = (f + Math.imul(P, tu)) | 0) + Math.imul(N, tc)) | 0;
    n = (n + Math.imul(N, tu)) | 0;
    i = (i + Math.imul(q, tb)) | 0;
    let tq =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(q, tp)) | 0) + Math.imul(L, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(L, tp)) | 0) + (f >>> 13)) | 0) + (tq >>> 26)) | 0;
    tq &= 67108863;
    i = Math.imul(O, tc);
    f = ((f = Math.imul(O, tu)) + Math.imul(T, tc)) | 0;
    n = Math.imul(T, tu);
    i = (i + Math.imul(P, tb)) | 0;
    let tL =
      (((h + i) | 0) +
        ((8191 &
          (f = ((f = (f + Math.imul(P, tp)) | 0) + Math.imul(N, tb)) | 0)) <<
          13)) |
      0;
    h =
      ((((n = (n + Math.imul(N, tp)) | 0) + (f >>> 13)) | 0) + (tL >>> 26)) | 0;
    tL &= 67108863;
    i = Math.imul(O, tb);
    let tC =
      (((h + i) | 0) +
        ((8191 & (f = ((f = Math.imul(O, tp)) + Math.imul(T, tb)) | 0)) <<
          13)) |
      0;
    h = ((((n = Math.imul(T, tp)) + (f >>> 13)) | 0) + (tC >>> 26)) | 0;
    tC &= 67108863;
    r_words[0] = tm;
    r_words[1] = tv;
    r_words[2] = tg;
    r_words[3] = ty;
    r_words[4] = tM;
    r_words[5] = tw;
    r_words[6] = t_;
    r_words[7] = tx;
    r_words[8] = tS;
    r_words[9] = tA;
    r_words[10] = tk;
    r_words[11] = tB;
    r_words[12] = tE;
    r_words[13] = tI;
    r_words[14] = tR;
    r_words[15] = tz;
    r_words[16] = tq;
    r_words[17] = tL;
    r_words[18] = tC;
    if (h !== 0) {
      r_words[19] = h;
      r.length++;
    }
    return r;
  };
  function p(t, e, r) {
    return new m().mulp(t, e, r);
  }
  class m {
    constructor(t, e) {
      this.x = t;
      this.y = e;
    }
    makeRBT(t) {
      const e = Array(t);
      const r = n.prototype._countBits(t) - 1;
      for (let i = 0; i < t; i++) {
        e[i] = this.revBin(i, r, t);
      }
      return e;
    }
    revBin(t, e, r) {
      if (t === 0 || t === r - 1) {
        return t;
      }
      let i = 0;
      for (let f = 0; f < e; f++) {
        i |= (1 & t) << (e - f - 1);
        t >>= 1;
      }
      return i;
    }
    permute(t, e, r, i, f, n) {
      for (let a = 0; a < n; a++) {
        i[a] = e[t[a]];
        f[a] = r[t[a]];
      }
    }
    transform(t, e, r, i, f, n) {
      this.permute(n, t, e, r, i, f);
      for (let a = 1; a < f; a <<= 1) {
        for (
          let s = a << 1,
            o = Math.cos((2 * Math.PI) / s),
            h = Math.sin((2 * Math.PI) / s),
            d = 0;
          d < f;
          d += s
        ) {
          let c = o;
          let u = h;
          for (let l = 0; l < a; l++) {
            const b = r[d + l];
            const p = i[d + l];
            let m = r[d + l + a];
            let v = i[d + l + a];
            let g = c * m - u * v;
            v = c * v + u * m;
            m = g;
            r[d + l] = b + m;
            i[d + l] = p + v;
            r[d + l + a] = b - m;
            i[d + l + a] = p - v;
            if (l !== s) {
              g = o * c - h * u;
              u = o * u + h * c;
              c = g;
            }
          }
        }
      }
    }
    guessLen13b(t, e) {
      let r = 1 | Math.max(e, t);
      const i = 1 & r;
      let f = 0;
      for (r = (r / 2) | 0; r; r >>>= 1) {
        f++;
      }
      return 1 << (f + 1 + i);
    }
    conjugate(t, e, r) {
      if (!(r <= 1)) {
        for (let i = 0; i < r / 2; i++) {
          let f = t[i];
          t[i] = t[r - i - 1];
          t[r - i - 1] = f;
          f = e[i];
          e[i] = -e[r - i - 1];
          e[r - i - 1] = -f;
        }
      }
    }
    normalize13b(t, e) {
      let r = 0;
      for (let i = 0; i < e / 2; i++) {
        const f =
          8192 * Math.round(t[2 * i + 1] / e) + Math.round(t[2 * i] / e) + r;
        t[i] = 67108863 & f;
        r = f < 67108864 ? 0 : (f / 67108864) | 0;
      }
      return t;
    }
    convert13b(t, e, r, f) {
      let n = 0;
      for (var a = 0; a < e; a++) {
        n += 0 | t[a];
        r[2 * a] = 8191 & n;
        n >>>= 13;
        r[2 * a + 1] = 8191 & n;
        n >>>= 13;
      }
      for (a = 2 * e; a < f; ++a) {
        r[a] = 0;
      }
      i(n === 0);
      i((-8192 & n) == 0);
    }
    stub(t) {
      const e = Array(t);
      for (let r = 0; r < t; r++) {
        e[r] = 0;
      }
      return e;
    }
    mulp(t, e, r) {
      const i = 2 * this.guessLen13b(t.length, e.length);
      const f = this.makeRBT(i);
      const n = this.stub(i);
      const a = Array(i);
      const s = Array(i);
      const o = Array(i);
      const h = Array(i);
      const d = Array(i);
      const c = Array(i);
      const r_words = r.words;
      r_words.length = i;
      this.convert13b(t.words, t.length, a, i);
      this.convert13b(e.words, e.length, h, i);
      this.transform(a, n, s, o, i, f);
      this.transform(h, n, d, c, i, f);
      for (let l = 0; l < i; l++) {
        const b = s[l] * d[l] - o[l] * c[l];
        o[l] = s[l] * c[l] + o[l] * d[l];
        s[l] = b;
      }
      this.conjugate(s, o, i);
      this.transform(s, o, r_words, n, i, f);
      this.conjugate(r_words, n, i);
      this.normalize13b(r_words, i);
      r.negative = t.negative ^ e.negative;
      r.length = t.length + e.length;
      return r.strip();
    }
  }
  if (!Math.imul) {
    b = l;
  }
  const v = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null,
  };
  function g(t, e) {
    this.name = t;
    this.p = new n(e, 16);
    this.n = this.p.bitLength();
    this.k = new n(1).iushln(this.n).isub(this.p);
    this.tmp = this._tmp();
  }
  function y() {
    g.call(
      this,
      "k256",
      "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    );
  }
  function M() {
    g.call(
      this,
      "p224",
      "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    );
  }
  function w() {
    g.call(
      this,
      "p192",
      "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    );
  }
  function _() {
    g.call(
      this,
      "25519",
      "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    );
  }
  function x(t) {
    if (typeof t === "string") {
      const e = n._prime(t);
      this.m = e.p;
      this.prime = e;
    } else {
      i(t.gtn(1), "modulus must be greater than 1");
      this.m = t;
      this.prime = null;
    }
  }
  function S(t) {
    x.call(this, t);
    this.shift = this.m.bitLength();
    if (this.shift % 26 != 0) {
      this.shift += 26 - (this.shift % 26);
    }
    this.r = new n(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);
    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  g.prototype._tmp = function () {
    const t = new n(null);
    t.words = Array(Math.ceil(this.n / 13));
    return t;
  };
  g.prototype.ireduce = function (t) {
    let e;
    let r = t;
    do {
      this.split(r, this.tmp);
      e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
    } while (e > this.n);
    const i = e < this.n ? -1 : r.ucmp(this.p);
    if (i === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (i > 0) {
      r.isub(this.p);
    } else if (r.strip !== undefined) {
      r.strip();
    } else {
      r._strip();
    }
    return r;
  };
  g.prototype.split = function (t, e) {
    t.iushrn(this.n, 0, e);
  };
  g.prototype.imulK = function (t) {
    return t.imul(this.k);
  };
  f(y, g);
  y.prototype.split = function (t, e) {
    for (var r = Math.min(t.length, 9), i = 0; i < r; i++) {
      e.words[i] = t.words[i];
    }
    e.length = r;
    if (t.length <= 9) {
      t.words[0] = 0;
      t.length = 1;
      return;
    }
    let f = t.words[9];
    e.words[e.length++] = 4194303 & f;
    for (i = 10; i < t.length; i++) {
      const n = 0 | t.words[i];
      t.words[i - 10] = ((4194303 & n) << 4) | (f >>> 22);
      f = n;
    }
    f >>>= 22;
    t.words[i - 10] = f;
    if (f === 0 && t.length > 10) {
      t.length -= 10;
    } else {
      t.length -= 9;
    }
  };
  y.prototype.imulK = function (t) {
    t.words[t.length] = 0;
    t.words[t.length + 1] = 0;
    t.length += 2;
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      const i = 0 | t.words[r];
      e += 977 * i;
      t.words[r] = 67108863 & e;
      e = 64 * i + ((e / 67108864) | 0);
    }
    if (t.words[t.length - 1] === 0) {
      t.length--;
      if (t.words[t.length - 1] === 0) {
        t.length--;
      }
    }
    return t;
  };
  f(M, g);
  f(w, g);
  f(_, g);
  _.prototype.imulK = function (t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      let i = (0 | t.words[r]) * 19 + e;
      const f = 67108863 & i;
      i >>>= 26;
      t.words[r] = f;
      e = i;
    }
    if (e !== 0) {
      t.words[t.length++] = e;
    }
    return t;
  };
  x.prototype._verify1 = function (t) {
    i(t.negative === 0, "red works only with positives");
    i(t.red, "red works only with red numbers");
  };
  x.prototype._verify2 = function (t, e) {
    i((t.negative | e.negative) == 0, "red works only with positives");
    i(t.red && t.red === e.red, "red works only with red numbers");
  };
  x.prototype.imod = function (t) {
    if (this.prime) {
      return this.prime.ireduce(t)._forceRed(this);
    }
    return t.umod(this.m)._forceRed(this);
  };
  x.prototype.neg = function (t) {
    if (t.isZero()) {
      return t.clone();
    }
    return this.m.sub(t)._forceRed(this);
  };
  x.prototype.add = function (t, e) {
    this._verify2(t, e);
    const r = t.add(e);
    if (r.cmp(this.m) >= 0) {
      r.isub(this.m);
    }
    return r._forceRed(this);
  };
  x.prototype.iadd = function (t, e) {
    this._verify2(t, e);
    const r = t.iadd(e);
    if (r.cmp(this.m) >= 0) {
      r.isub(this.m);
    }
    return r;
  };
  x.prototype.sub = function (t, e) {
    this._verify2(t, e);
    const r = t.sub(e);
    if (r.cmpn(0) < 0) {
      r.iadd(this.m);
    }
    return r._forceRed(this);
  };
  x.prototype.isub = function (t, e) {
    this._verify2(t, e);
    const r = t.isub(e);
    if (r.cmpn(0) < 0) {
      r.iadd(this.m);
    }
    return r;
  };
  x.prototype.shl = function (t, e) {
    this._verify1(t);
    return this.imod(t.ushln(e));
  };
  x.prototype.imul = function (t, e) {
    this._verify2(t, e);
    return this.imod(t.imul(e));
  };
  x.prototype.mul = function (t, e) {
    this._verify2(t, e);
    return this.imod(t.mul(e));
  };
  x.prototype.isqr = function (t) {
    return this.imul(t, t.clone());
  };
  x.prototype.sqr = function (t) {
    return this.mul(t, t);
  };
  x.prototype.sqrt = function (t) {
    if (t.isZero()) {
      return t.clone();
    }
    const e = this.m.andln(3);
    i(e % 2 == 1);
    if (e === 3) {
      const r = this.m.add(new n(1)).iushrn(2);
      return this.pow(t, r);
    }
    for (var f = this.m.subn(1), a = 0; !f.isZero() && f.andln(1) === 0;) {
      a++;
      f.iushrn(1);
    }
    i(!f.isZero());
    const s = new n(1).toRed(this);
    const o = s.redNeg();
    const h = this.m.subn(1).iushrn(1);
    let d = this.m.bitLength();
    for (d = new n(2 * d * d).toRed(this); this.pow(d, h).cmp(o) !== 0;) {
      d.redIAdd(o);
    }
    let c = this.pow(d, f);
    let u = this.pow(t, f.addn(1).iushrn(1));
    for (let l = this.pow(t, f), b = a; l.cmp(s) !== 0;) {
      for (var p = l, m = 0; p.cmp(s) !== 0; m++) {
        p = p.redSqr();
      }
      i(m < b);
      const v = this.pow(c, new n(1).iushln(b - m - 1));
      u = u.redMul(v);
      c = v.redSqr();
      l = l.redMul(c);
      b = m;
    }
    return u;
  };
  x.prototype.invm = function (t) {
    const e = t._invmp(this.m);
    if (e.negative !== 0) {
      e.negative = 0;
      return this.imod(e).redNeg();
    }
    return this.imod(e);
  };
  x.prototype.pow = function (t, e) {
    if (e.isZero()) {
      return new n(1).toRed(this);
    }
    if (e.cmpn(1) === 0) {
      return t.clone();
    }
    const r = Array(16);
    r[0] = new n(1).toRed(this);
    r[1] = t;
    for (var i = 2; i < r.length; i++) {
      r[i] = this.mul(r[i - 1], t);
    }
    let f = r[0];
    let a = 0;
    let s = 0;
    let o = e.bitLength() % 26;
    if (o === 0) {
      o = 26;
    }
    for (i = e.length - 1; i >= 0; i--) {
      const h = e.words[i];
      for (let d = o - 1; d >= 0; d--) {
        const c = (h >> d) & 1;
        if (f !== r[0]) {
          f = this.sqr(f);
        }
        if (c === 0 && a === 0) {
          s = 0;
          continue;
        }
        a <<= 1;
        a |= c;
        if (++s == 4 || (i === 0 && d === 0)) {
          f = this.mul(f, r[a]);
          s = 0;
          a = 0;
        }
      }
      o = 26;
    }
    return f;
  };
  x.prototype.convertTo = function (t) {
    const e = t.umod(this.m);
    if (e === t) {
      return e.clone();
    }
    return e;
  };
  x.prototype.convertFrom = function (t) {
    const e = t.clone();
    e.red = null;
    return e;
  };
  f(S, x);
  S.prototype.convertTo = function (t) {
    return this.imod(t.ushln(this.shift));
  };
  S.prototype.convertFrom = function (t) {
    const e = this.imod(t.mul(this.rinv));
    e.red = null;
    return e;
  };
  S.prototype.imul = function (t, e) {
    if (t.isZero() || e.isZero()) {
      t.words[0] = 0;
      t.length = 1;
      return t;
    }
    const r = t.imul(e);
    const i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    const f = r.isub(i).iushrn(this.shift);
    let n = f;
    if (f.cmp(this.m) >= 0) {
      n = f.isub(this.m);
    } else if (f.cmpn(0) < 0) {
      n = f.iadd(this.m);
    }
    return n._forceRed(this);
  };
  S.prototype.mul = function (t, e) {
    if (t.isZero() || e.isZero()) {
      return new n(0)._forceRed(this);
    }
    const r = t.mul(e);
    const i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    const f = r.isub(i).iushrn(this.shift);
    let a = f;
    if (f.cmp(this.m) >= 0) {
      a = f.isub(this.m);
    } else if (f.cmpn(0) < 0) {
      a = f.iadd(this.m);
    }
    return a._forceRed(this);
  };
  S.prototype.invm = function (t) {
    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
  };
})(module, this);
