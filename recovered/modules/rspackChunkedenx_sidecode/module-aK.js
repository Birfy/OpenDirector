(function (J, Z) {
  "use strict";
  function $(J, Z) {
    if (!J) {
      throw Error(Z || "Assertion failed");
    }
  }
  function tt(J, Z) {
    J.super_ = Z;
    const Q = function () {};
    Q.prototype = Z.prototype;
    J.prototype = new Q();
    J.prototype.constructor = J;
  }
  class te {
    constructor(J, Z, Q) {
      if (te.isBN(J)) {
        return J;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (J !== null) {
        if (Z === "le" || Z === "be") {
          Q = Z;
          Z = 10;
        }
        this._init(J || 0, Z || 10, Q || "be");
      }
    }
    static isBN(J) {
      return (
        J instanceof te ||
        (J !== null &&
          typeof J === "object" &&
          J.constructor.wordSize === te.wordSize &&
          Array.isArray(J.words))
      );
    }
    static max(J, Z) {
      if (J.cmp(Z) > 0) {
        return J;
      }
      return Z;
    }
    static min(J, Z) {
      if (J.cmp(Z) < 0) {
        return J;
      }
      return Z;
    }
    _init(J, Z, Q) {
      if (typeof J === "number") {
        return this._initNumber(J, Z, Q);
      }
      if (typeof J === "object") {
        return this._initArray(J, Z, Q);
      }
      if (Z === "hex") {
        Z = 16;
      }
      $(Z === (0 | Z) && Z >= 2 && Z <= 36);
      let tt = 0;
      if ((J = J.toString().replace(/\s+/g, ""))[0] === "-") {
        tt++;
        this.negative = 1;
      }
      if (tt < J.length) {
        if (Z === 16) {
          this._parseHex(J, tt, Q);
        } else {
          this._parseBase(J, Z, tt);
          if (Q === "le") {
            this._initArray(this.toArray(), Z, Q);
          }
        }
      }
    }
    _initNumber(J, Z, Q) {
      if (J < 0) {
        this.negative = 1;
        J = -J;
      }
      if (J < 67108864) {
        this.words = [67108863 & J];
        this.length = 1;
      } else if (J < 4503599627370496) {
        this.words = [67108863 & J, (J / 67108864) & 67108863];
        this.length = 2;
      } else {
        $(J < 9007199254740992);
        this.words = [67108863 & J, (J / 67108864) & 67108863, 1];
        this.length = 3;
      }
      if (Q === "le") {
        this._initArray(this.toArray(), Z, Q);
      }
    }
    _initArray(J, Z, Q) {
      $(typeof J.length === "number");
      if (J.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(J.length / 3);
      this.words = Array(this.length);
      let tt;
      let te;
      for (var tr = 0; tr < this.length; tr++) {
        this.words[tr] = 0;
      }
      let tn = 0;
      if (Q === "be") {
        tr = J.length - 1;
        for (tt = 0; tr >= 0; tr -= 3) {
          te = J[tr] | (J[tr - 1] << 8) | (J[tr - 2] << 16);
          this.words[tt] |= (te << tn) & 67108863;
          this.words[tt + 1] = (te >>> (26 - tn)) & 67108863;
          if ((tn += 24) >= 26) {
            tn -= 26;
            tt++;
          }
        }
      } else if (Q === "le") {
        tr = 0;
        for (tt = 0; tr < J.length; tr += 3) {
          te = J[tr] | (J[tr + 1] << 8) | (J[tr + 2] << 16);
          this.words[tt] |= (te << tn) & 67108863;
          this.words[tt + 1] = (te >>> (26 - tn)) & 67108863;
          if ((tn += 24) >= 26) {
            tn -= 26;
            tt++;
          }
        }
      }
      return this._strip();
    }
    _parseHex(J, Z, Q) {
      this.length = Math.ceil((J.length - Z) / 6);
      this.words = Array(this.length);
      let $;
      for (var tt = 0; tt < this.length; tt++) {
        this.words[tt] = 0;
      }
      let te = 0;
      let tr = 0;
      if (Q === "be") {
        for (tt = J.length - 1; tt >= Z; tt -= 2) {
          $ = tn(J, Z, tt) << te;
          this.words[tr] |= 67108863 & $;
          if (te >= 18) {
            te -= 18;
            tr += 1;
            this.words[tr] |= $ >>> 26;
          } else {
            te += 8;
          }
        }
      } else {
        for (tt = (J.length - Z) % 2 == 0 ? Z + 1 : Z; tt < J.length; tt += 2) {
          $ = tn(J, Z, tt) << te;
          this.words[tr] |= 67108863 & $;
          if (te >= 18) {
            te -= 18;
            tr += 1;
            this.words[tr] |= $ >>> 26;
          } else {
            te += 8;
          }
        }
      }
      this._strip();
    }
    _parseBase(J, Z, Q) {
      this.words = [0];
      this.length = 1;
      let $ = 0;
      for (var tt = 1; tt <= 67108863; tt *= Z) {
        $++;
      }
      $--;
      tt = (tt / Z) | 0;
      const te = J.length - Q;
      const tr = te % $;
      for (
        var tn = Math.min(te, te - tr) + Q, to = 0, ta = Q;
        ta < tn;
        ta += $
      ) {
        to = ti(J, ta, ta + $, Z);
        this.imuln(tt);
        if (this.words[0] + to < 67108864) {
          this.words[0] += to;
        } else {
          this._iaddn(to);
        }
      }
      if (tr !== 0) {
        let ts = 1;
        to = ti(J, ta, J.length, Z);
        for (ta = 0; ta < tr; ta++) {
          ts *= Z;
        }
        this.imuln(ts);
        if (this.words[0] + to < 67108864) {
          this.words[0] += to;
        } else {
          this._iaddn(to);
        }
      }
      this._strip();
    }
    copy(J) {
      J.words = Array(this.length);
      for (let Z = 0; Z < this.length; Z++) {
        J.words[Z] = this.words[Z];
      }
      J.length = this.length;
      J.negative = this.negative;
      J.red = this.red;
    }
    _move(J) {
      to(J, this);
    }
    clone() {
      const J = new te(null);
      this.copy(J);
      return J;
    }
    _expand(J) {
      while (this.length < J) {
        this.words[this.length++] = 0;
      }
      return this;
    }
    _strip() {
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
    toString(J, Z) {
      Z = 0 | Z || 1;
      if ((J = J || 10) === 16 || J === "hex") {
        var Q = "";
        let tt = 0;
        let te = 0;
        for (let tr = 0; tr < this.length; tr++) {
          const tn = this.words[tr];
          const ti = (((tn << tt) | te) & 16777215).toString(16);
          te = (tn >>> (24 - tt)) & 16777215;
          if ((tt += 2) >= 26) {
            tt -= 26;
            tr--;
          }
          Q =
            te !== 0 || tr !== this.length - 1
              ? tf[6 - ti.length] + ti + Q
              : ti + Q;
        }
        for (te !== 0 && (Q = te.toString(16) + Q); Q.length % Z != 0;) {
          Q = "0" + Q;
        }
        if (this.negative !== 0) {
          Q = "-" + Q;
        }
        return Q;
      }
      if (J === (0 | J) && J >= 2 && J <= 36) {
        const to = tu[J];
        const ta = tc[J];
        Q = "";
        let ts = this.clone();
        for (ts.negative = 0; !ts.isZero();) {
          const th = ts.modrn(ta).toString(J);
          Q = (ts = ts.idivn(ta)).isZero()
            ? th + Q
            : tf[to - th.length] + th + Q;
        }
        for (this.isZero() && (Q = "0" + Q); Q.length % Z != 0;) {
          Q = "0" + Q;
        }
        if (this.negative !== 0) {
          Q = "-" + Q;
        }
        return Q;
      }
      $(false, "Base should be between 2 and 36");
    }
    toNumber() {
      let J = this.words[0];
      if (this.length === 2) {
        J += 67108864 * this.words[1];
      } else if (this.length === 3 && this.words[2] === 1) {
        J += 4503599627370496 + 67108864 * this.words[1];
      } else if (this.length > 2) {
        $(false, "Number can only safely store up to 53 bits");
      }
      if (this.negative !== 0) {
        return -J;
      }
      return J;
    }
    toJSON() {
      return this.toString(16, 2);
    }
    toArray(J, Z) {
      return this.toArrayLike(Array, J, Z);
    }
    toArrayLike(J, Z, Q) {
      this._strip();
      const tt = this.byteLength();
      const te = Q || Math.max(1, tt);
      $(tt <= te, "byte array longer than desired length");
      $(te > 0, "Requested array length <= 0");
      const tr = J.allocUnsafe ? J.allocUnsafe(te) : new J(te);
      this[`_toArrayLike${Z === "le" ? "LE" : "BE"}`](tr, tt);
      return tr;
    }
    _toArrayLikeLE(J, Z) {
      let Q = 0;
      let $ = 0;
      for (let tt = 0, te = 0; tt < this.length; tt++) {
        const tr = (this.words[tt] << te) | $;
        J[Q++] = 255 & tr;
        if (Q < J.length) {
          J[Q++] = (tr >> 8) & 255;
        }
        if (Q < J.length) {
          J[Q++] = (tr >> 16) & 255;
        }
        if (te === 6) {
          if (Q < J.length) {
            J[Q++] = (tr >> 24) & 255;
          }
          $ = 0;
          te = 0;
        } else {
          $ = tr >>> 24;
          te += 2;
        }
      }
      if (Q < J.length) {
        for (J[Q++] = $; Q < J.length;) {
          J[Q++] = 0;
        }
      }
    }
    _toArrayLikeBE(J, Z) {
      let Q = J.length - 1;
      let $ = 0;
      for (let tt = 0, te = 0; tt < this.length; tt++) {
        const tr = (this.words[tt] << te) | $;
        J[Q--] = 255 & tr;
        if (Q >= 0) {
          J[Q--] = (tr >> 8) & 255;
        }
        if (Q >= 0) {
          J[Q--] = (tr >> 16) & 255;
        }
        if (te === 6) {
          if (Q >= 0) {
            J[Q--] = (tr >> 24) & 255;
          }
          $ = 0;
          te = 0;
        } else {
          $ = tr >>> 24;
          te += 2;
        }
      }
      if (Q >= 0) {
        for (J[Q--] = $; Q >= 0;) {
          J[Q--] = 0;
        }
      }
    }
    _zeroBits(J) {
      if (J === 0) {
        return 26;
      }
      let Z = J;
      let Q = 0;
      if ((8191 & Z) == 0) {
        Q += 13;
        Z >>>= 13;
      }
      if ((127 & Z) == 0) {
        Q += 7;
        Z >>>= 7;
      }
      if ((15 & Z) == 0) {
        Q += 4;
        Z >>>= 4;
      }
      if ((3 & Z) == 0) {
        Q += 2;
        Z >>>= 2;
      }
      if ((1 & Z) == 0) {
        Q++;
      }
      return Q;
    }
    bitLength() {
      const J = this.words[this.length - 1];
      const Z = this._countBits(J);
      return (this.length - 1) * 26 + Z;
    }
    zeroBits() {
      if (this.isZero()) {
        return 0;
      }
      let J = 0;
      for (let Z = 0; Z < this.length; Z++) {
        const Q = this._zeroBits(this.words[Z]);
        J += Q;
        if (Q !== 26) {
          break;
        }
      }
      return J;
    }
    byteLength() {
      return Math.ceil(this.bitLength() / 8);
    }
    toTwos(J) {
      if (this.negative !== 0) {
        return this.abs().inotn(J).iaddn(1);
      }
      return this.clone();
    }
    fromTwos(J) {
      if (this.testn(J - 1)) {
        return this.notn(J).iaddn(1).ineg();
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
    iuor(J) {
      while (this.length < J.length) {
        this.words[this.length++] = 0;
      }
      for (let Z = 0; Z < J.length; Z++) {
        this.words[Z] = this.words[Z] | J.words[Z];
      }
      return this._strip();
    }
    ior(J) {
      $((this.negative | J.negative) == 0);
      return this.iuor(J);
    }
    or(J) {
      if (this.length > J.length) {
        return this.clone().ior(J);
      }
      return J.clone().ior(this);
    }
    uor(J) {
      if (this.length > J.length) {
        return this.clone().iuor(J);
      }
      return J.clone().iuor(this);
    }
    iuand(J) {
      let Z;
      Z = this.length > J.length ? J : this;
      for (let Q = 0; Q < Z.length; Q++) {
        this.words[Q] = this.words[Q] & J.words[Q];
      }
      this.length = Z.length;
      return this._strip();
    }
    iand(J) {
      $((this.negative | J.negative) == 0);
      return this.iuand(J);
    }
    and(J) {
      if (this.length > J.length) {
        return this.clone().iand(J);
      }
      return J.clone().iand(this);
    }
    uand(J) {
      if (this.length > J.length) {
        return this.clone().iuand(J);
      }
      return J.clone().iuand(this);
    }
    iuxor(J) {
      if (this.length > J.length) {
        Z = this;
        Q = J;
      } else {
        Z = J;
        Q = this;
      }
      var Z;
      for (var Q, $ = 0; $ < Q.length; $++) {
        this.words[$] = Z.words[$] ^ Q.words[$];
      }
      if (this !== Z) {
        for (; $ < Z.length; $++) {
          this.words[$] = Z.words[$];
        }
      }
      this.length = Z.length;
      return this._strip();
    }
    ixor(J) {
      $((this.negative | J.negative) == 0);
      return this.iuxor(J);
    }
    xor(J) {
      if (this.length > J.length) {
        return this.clone().ixor(J);
      }
      return J.clone().ixor(this);
    }
    uxor(J) {
      if (this.length > J.length) {
        return this.clone().iuxor(J);
      }
      return J.clone().iuxor(this);
    }
    inotn(J) {
      $(typeof J === "number" && J >= 0);
      let Z = 0 | Math.ceil(J / 26);
      const Q = J % 26;
      this._expand(Z);
      if (Q > 0) {
        Z--;
      }
      for (var tt = 0; tt < Z; tt++) {
        this.words[tt] = 67108863 & ~this.words[tt];
      }
      if (Q > 0) {
        this.words[tt] = ~this.words[tt] & (67108863 >> (26 - Q));
      }
      return this._strip();
    }
    notn(J) {
      return this.clone().inotn(J);
    }
    setn(J, Z) {
      $(typeof J === "number" && J >= 0);
      const Q = (J / 26) | 0;
      const tt = J % 26;
      this._expand(Q + 1);
      if (Z) {
        this.words[Q] = this.words[Q] | (1 << tt);
      } else {
        this.words[Q] = this.words[Q] & ~(1 << tt);
      }
      return this._strip();
    }
    iadd(J) {
      if (this.negative !== 0 && J.negative === 0) {
        this.negative = 0;
        Z = this.isub(J);
        this.negative ^= 1;
        return this._normSign();
      }
      if (this.negative === 0 && J.negative !== 0) {
        J.negative = 0;
        Z = this.isub(J);
        J.negative = 1;
        return Z._normSign();
      }
      if (this.length > J.length) {
        Q = this;
        $ = J;
      } else {
        Q = J;
        $ = this;
      }
      var Z;
      var Q;
      let tt = 0;
      for (var $, te = 0; te < $.length; te++) {
        Z = (0 | Q.words[te]) + (0 | $.words[te]) + tt;
        this.words[te] = 67108863 & Z;
        tt = Z >>> 26;
      }
      for (; tt !== 0 && te < Q.length; te++) {
        Z = (0 | Q.words[te]) + tt;
        this.words[te] = 67108863 & Z;
        tt = Z >>> 26;
      }
      this.length = Q.length;
      if (tt !== 0) {
        this.words[this.length] = tt;
        this.length++;
      } else if (Q !== this) {
        for (; te < Q.length; te++) {
          this.words[te] = Q.words[te];
        }
      }
      return this;
    }
    add(J) {
      let Z;
      if (J.negative !== 0 && this.negative === 0) {
        J.negative = 0;
        Z = this.sub(J);
        J.negative ^= 1;
        return Z;
      }
      if (J.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        Z = J.sub(this);
        this.negative = 1;
        return Z;
      }
      if (this.length > J.length) {
        return this.clone().iadd(J);
      }
      return J.clone().iadd(this);
    }
    isub(J) {
      if (J.negative !== 0) {
        J.negative = 0;
        var Z;
        var Q;
        var $ = this.iadd(J);
        J.negative = 1;
        return $._normSign();
      }
      if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(J);
        this.negative = 1;
        return this._normSign();
      }
      const tt = this.cmp(J);
      if (tt === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      if (tt > 0) {
        Z = this;
        Q = J;
      } else {
        Z = J;
        Q = this;
      }
      let te = 0;
      for (var tr = 0; tr < Q.length; tr++) {
        te = ($ = (0 | Z.words[tr]) - (0 | Q.words[tr]) + te) >> 26;
        this.words[tr] = 67108863 & $;
      }
      for (; te !== 0 && tr < Z.length; tr++) {
        te = ($ = (0 | Z.words[tr]) + te) >> 26;
        this.words[tr] = 67108863 & $;
      }
      if (te === 0 && tr < Z.length && Z !== this) {
        for (; tr < Z.length; tr++) {
          this.words[tr] = Z.words[tr];
        }
      }
      this.length = Math.max(this.length, tr);
      if (Z !== this) {
        this.negative = 1;
      }
      return this._strip();
    }
    sub(J) {
      return this.clone().isub(J);
    }
    mulTo(J, Z) {
      let Q;
      const $ = this.length + J.length;
      if (this.length === 10 && J.length === 10) {
        Q = td(this, J, Z);
      } else if ($ < 63) {
        Q = th(this, J, Z);
      } else {
        Q = tl(this, J, Z);
      }
      return Q;
    }
    mul(J) {
      const Z = new te(null);
      Z.words = Array(this.length + J.length);
      return this.mulTo(J, Z);
    }
    mulf(J) {
      const Z = new te(null);
      Z.words = Array(this.length + J.length);
      return tl(this, J, Z);
    }
    imul(J) {
      return this.clone().mulTo(J, this);
    }
    imuln(J) {
      const Z = J < 0;
      if (Z) {
        J = -J;
      }
      $(typeof J === "number");
      $(J < 67108864);
      let Q = 0;
      for (var tt = 0; tt < this.length; tt++) {
        const te = (0 | this.words[tt]) * J;
        const tr = (67108863 & te) + (67108863 & Q);
        Q >>= 26;
        Q += ((te / 67108864) | 0) + (tr >>> 26);
        this.words[tt] = 67108863 & tr;
      }
      if (Q !== 0) {
        this.words[tt] = Q;
        this.length++;
      }
      if (Z) {
        return this.ineg();
      }
      return this;
    }
    muln(J) {
      return this.clone().imuln(J);
    }
    sqr() {
      return this.mul(this);
    }
    isqr() {
      return this.imul(this.clone());
    }
    pow(J) {
      const Z = ((J) => {
        for (var Z = Array(J.bitLength()), Q = 0; Q < Z.length; Q++) {
          const $ = (Q / 26) | 0;
          const tt = Q % 26;
          Z[Q] = (J.words[$] >>> tt) & 1;
        }
        return Z;
      })(J);
      if (Z.length === 0) {
        return new te(1);
      }
      for (var Q = this, $ = 0; $ < Z.length && Z[$] === 0; $++, Q = Q.sqr());
      if (++$ < Z.length) {
        for (let tt = Q.sqr(); $ < Z.length; $++, tt = tt.sqr()) {
          if (Z[$] !== 0) {
            Q = Q.mul(tt);
          }
        }
      }
      return Q;
    }
    iushln(J) {
      $(typeof J === "number" && J >= 0);
      let Z;
      const Q = J % 26;
      const tt = (J - Q) / 26;
      const te = (67108863 >>> (26 - Q)) << (26 - Q);
      if (Q !== 0) {
        let tr = 0;
        for (Z = 0; Z < this.length; Z++) {
          const tn = this.words[Z] & te;
          const ti = ((0 | this.words[Z]) - tn) << Q;
          this.words[Z] = ti | tr;
          tr = tn >>> (26 - Q);
        }
        if (tr) {
          this.words[Z] = tr;
          this.length++;
        }
      }
      if (tt !== 0) {
        for (Z = this.length - 1; Z >= 0; Z--) {
          this.words[Z + tt] = this.words[Z];
        }
        for (Z = 0; Z < tt; Z++) {
          this.words[Z] = 0;
        }
        this.length += tt;
      }
      return this._strip();
    }
    ishln(J) {
      $(this.negative === 0);
      return this.iushln(J);
    }
    iushrn(J, Z, Q) {
      $(typeof J === "number" && J >= 0);
      let tt = Z ? (Z - (Z % 26)) / 26 : 0;
      const te = J % 26;
      const tr = Math.min((J - te) / 26, this.length);
      const tn = 67108863 ^ ((67108863 >>> te) << te);
      tt -= tr;
      tt = Math.max(0, tt);
      if (Q) {
        for (var ti = 0; ti < tr; ti++) {
          Q.words[ti] = this.words[ti];
        }
        Q.length = tr;
      }
      if (tr === 0);
      else if (this.length > tr) {
        this.length -= tr;
        for (ti = 0; ti < this.length; ti++) {
          this.words[ti] = this.words[ti + tr];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      let to = 0;
      for (ti = this.length - 1; ti >= 0 && (to !== 0 || ti >= tt); ti--) {
        const ta = 0 | this.words[ti];
        this.words[ti] = (to << (26 - te)) | (ta >>> te);
        to = ta & tn;
      }
      if (Q && to !== 0) {
        Q.words[Q.length++] = to;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this._strip();
    }
    ishrn(J, Z, Q) {
      $(this.negative === 0);
      return this.iushrn(J, Z, Q);
    }
    shln(J) {
      return this.clone().ishln(J);
    }
    ushln(J) {
      return this.clone().iushln(J);
    }
    shrn(J) {
      return this.clone().ishrn(J);
    }
    ushrn(J) {
      return this.clone().iushrn(J);
    }
    testn(J) {
      $(typeof J === "number" && J >= 0);
      const Z = J % 26;
      const Q = (J - Z) / 26;
      return !(this.length <= Q) && !!(this.words[Q] & (1 << Z));
    }
    imaskn(J) {
      $(typeof J === "number" && J >= 0);
      const Z = J % 26;
      let Q = (J - Z) / 26;
      $(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= Q) {
        return this;
      }
      if (Z !== 0) {
        Q++;
      }
      this.length = Math.min(Q, this.length);
      if (Z !== 0) {
        this.words[this.length - 1] &= 67108863 ^ ((67108863 >>> Z) << Z);
      }
      return this._strip();
    }
    maskn(J) {
      return this.clone().imaskn(J);
    }
    iaddn(J) {
      $(typeof J === "number");
      $(J < 67108864);
      if (J < 0) {
        return this.isubn(-J);
      }
      if (this.negative !== 0) {
        if (this.length === 1 && (0 | this.words[0]) <= J) {
          this.words[0] = J - (0 | this.words[0]);
          this.negative = 0;
        } else {
          this.negative = 0;
          this.isubn(J);
          this.negative = 1;
        }
        return this;
      }
      return this._iaddn(J);
    }
    _iaddn(J) {
      this.words[0] += J;
      for (var Z = 0; Z < this.length && this.words[Z] >= 67108864; Z++) {
        this.words[Z] -= 67108864;
        if (Z === this.length - 1) {
          this.words[Z + 1] = 1;
        } else {
          this.words[Z + 1]++;
        }
      }
      this.length = Math.max(this.length, Z + 1);
      return this;
    }
    isubn(J) {
      $(typeof J === "number");
      $(J < 67108864);
      if (J < 0) {
        return this.iaddn(-J);
      }
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(J);
        this.negative = 1;
        return this;
      }
      this.words[0] -= J;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (let Z = 0; Z < this.length && this.words[Z] < 0; Z++) {
          this.words[Z] += 67108864;
          this.words[Z + 1] -= 1;
        }
      }
      return this._strip();
    }
    addn(J) {
      return this.clone().iaddn(J);
    }
    subn(J) {
      return this.clone().isubn(J);
    }
    iabs() {
      this.negative = 0;
      return this;
    }
    abs() {
      return this.clone().iabs();
    }
    _ishlnsubmul(J, Z, Q) {
      let tt;
      let te;
      const tr = J.length + Q;
      this._expand(tr);
      let tn = 0;
      for (tt = 0; tt < J.length; tt++) {
        te = (0 | this.words[tt + Q]) + tn;
        const ti = (0 | J.words[tt]) * Z;
        te -= 67108863 & ti;
        tn = (te >> 26) - ((ti / 67108864) | 0);
        this.words[tt + Q] = 67108863 & te;
      }
      for (; tt < this.length - Q; tt++) {
        tn = (te = (0 | this.words[tt + Q]) + tn) >> 26;
        this.words[tt + Q] = 67108863 & te;
      }
      if (tn === 0) {
        return this._strip();
      }
      $(tn === -1);
      tn = 0;
      for (tt = 0; tt < this.length; tt++) {
        tn = (te = -(0 | this.words[tt]) + tn) >> 26;
        this.words[tt] = 67108863 & te;
      }
      this.negative = 1;
      return this._strip();
    }
    _wordDiv(J, Z) {
      let Q;
      let $ = this.length - J.length;
      let tt = this.clone();
      let tr = J;
      let tn = 0 | tr.words[tr.length - 1];
      if (($ = 26 - this._countBits(tn)) != 0) {
        tr = tr.ushln($);
        tt.iushln($);
        tn = 0 | tr.words[tr.length - 1];
      }
      const ti = tt.length - tr.length;
      if (Z !== "mod") {
        Q = new te(null);
        Q.length = ti + 1;
        Q.words = Array(Q.length);
        for (let to = 0; to < Q.length; to++) {
          Q.words[to] = 0;
        }
      }
      const ta = tt.clone()._ishlnsubmul(tr, 1, ti);
      if (ta.negative === 0) {
        tt = ta;
        if (Q) {
          Q.words[ti] = 1;
        }
      }
      for (let ts = ti - 1; ts >= 0; ts--) {
        let tf =
          (0 | tt.words[tr.length + ts]) * 67108864 +
          (0 | tt.words[tr.length + ts - 1]);
        tf = Math.min((tf / tn) | 0, 67108863);
        tt._ishlnsubmul(tr, tf, ts);
        while (tt.negative !== 0) {
          tf--;
          tt.negative = 0;
          tt._ishlnsubmul(tr, 1, ts);
          if (!tt.isZero()) {
            tt.negative ^= 1;
          }
        }
        if (Q) {
          Q.words[ts] = tf;
        }
      }
      if (Q) {
        Q._strip();
      }
      tt._strip();
      if (Z !== "div" && $ !== 0) {
        tt.iushrn($);
      }
      return {
        div: Q || null,
        mod: tt,
      };
    }
    divmod(J, Z, Q) {
      let div;
      let tr;
      let tn;
      $(!J.isZero());
      if (this.isZero()) {
        return {
          div: new te(0),
          mod: new te(0),
        };
      }
      if (this.negative !== 0 && J.negative === 0) {
        tn = this.neg().divmod(J, Z);
        if (Z !== "mod") {
          div = tn.div.neg();
        }
        if (Z !== "div") {
          tr = tn.mod.neg();
          if (Q && tr.negative !== 0) {
            tr.iadd(J);
          }
        }
        return {
          div,
          mod: tr,
        };
      }
      if (this.negative === 0 && J.negative !== 0) {
        tn = this.divmod(J.neg(), Z);
        if (Z !== "mod") {
          div = tn.div.neg();
        }
        return {
          div,
          mod: tn.mod,
        };
      }
      if ((this.negative & J.negative) != 0) {
        tn = this.neg().divmod(J.neg(), Z);
        if (Z !== "div") {
          tr = tn.mod.neg();
          if (Q && tr.negative !== 0) {
            tr.isub(J);
          }
        }
        return {
          div: tn.div,
          mod: tr,
        };
      }
      if (J.length > this.length || this.cmp(J) < 0) {
        return {
          div: new te(0),
          mod: this,
        };
      }
      if (J.length === 1) {
        switch (Z) {
          case "div":
            return {
              div: this.divn(J.words[0]),
              mod: null,
            };
          case "mod":
            return {
              div: null,
              mod: new te(this.modrn(J.words[0])),
            };
          default:
            return {
              div: this.divn(J.words[0]),
              mod: new te(this.modrn(J.words[0])),
            };
        }
      }
      return this._wordDiv(J, Z);
    }
    div(J) {
      return this.divmod(J, "div", false).div;
    }
    mod(J) {
      return this.divmod(J, "mod", false).mod;
    }
    umod(J) {
      return this.divmod(J, "mod", true).mod;
    }
    divRound(J) {
      const Z = this.divmod(J);
      if (Z.mod.isZero()) {
        return Z.div;
      }
      const Q = Z.div.negative !== 0 ? Z.mod.isub(J) : Z.mod;
      const $ = J.ushrn(1);
      const tt = J.andln(1);
      const te = Q.cmp($);
      if (te < 0 || (tt === 1 && te === 0)) {
        return Z.div;
      }
      if (Z.div.negative !== 0) {
        return Z.div.isubn(1);
      }
      return Z.div.iaddn(1);
    }
    modrn(J) {
      const Z = J < 0;
      if (Z) {
        J = -J;
      }
      $(J <= 67108863);
      const Q = 67108864 % J;
      let tt = 0;
      for (let te = this.length - 1; te >= 0; te--) {
        tt = (Q * tt + (0 | this.words[te])) % J;
      }
      if (Z) {
        return -tt;
      }
      return tt;
    }
    modn(J) {
      return this.modrn(J);
    }
    idivn(J) {
      const Z = J < 0;
      if (Z) {
        J = -J;
      }
      $(J <= 67108863);
      let Q = 0;
      for (let tt = this.length - 1; tt >= 0; tt--) {
        const te = (0 | this.words[tt]) + 67108864 * Q;
        this.words[tt] = (te / J) | 0;
        Q = te % J;
      }
      this._strip();
      if (Z) {
        return this.ineg();
      }
      return this;
    }
    divn(J) {
      return this.clone().idivn(J);
    }
    egcd(J) {
      $(J.negative === 0);
      $(!J.isZero());
      let Z = this;
      const Q = J.clone();
      Z = Z.negative !== 0 ? Z.umod(J) : Z.clone();
      const tt = new te(1);
      const tr = new te(0);
      const a = new te(0);
      const b = new te(1);
      let to = 0;
      while (Z.isEven() && Q.isEven()) {
        Z.iushrn(1);
        Q.iushrn(1);
        ++to;
      }
      const ta = Q.clone();
      const ts = Z.clone();
      while (!Z.isZero()) {
        for (
          var tf = 0, tu = 1;
          (Z.words[0] & tu) == 0 && tf < 26;
          ++tf, tu <<= 1
        );
        if (tf > 0) {
          for (Z.iushrn(tf); tf-- > 0;) {
            if (tt.isOdd() || tr.isOdd()) {
              tt.iadd(ta);
              tr.isub(ts);
            }
            tt.iushrn(1);
            tr.iushrn(1);
          }
        }
        for (
          var tc = 0, th = 1;
          (Q.words[0] & th) == 0 && tc < 26;
          ++tc, th <<= 1
        );
        if (tc > 0) {
          for (Q.iushrn(tc); tc-- > 0;) {
            if (a.isOdd() || b.isOdd()) {
              a.iadd(ta);
              b.isub(ts);
            }
            a.iushrn(1);
            b.iushrn(1);
          }
        }
        if (Z.cmp(Q) >= 0) {
          Z.isub(Q);
          tt.isub(a);
          tr.isub(b);
        } else {
          Q.isub(Z);
          a.isub(tt);
          b.isub(tr);
        }
      }
      return {
        a,
        b,
        gcd: Q.iushln(to),
      };
    }
    _invmp(J) {
      $(J.negative === 0);
      $(!J.isZero());
      let Z;
      let Q = this;
      const tt = J.clone();
      Q = Q.negative !== 0 ? Q.umod(J) : Q.clone();
      const tr = new te(1);
      const tn = new te(0);
      const ti = tt.clone();
      while (Q.cmpn(1) > 0 && tt.cmpn(1) > 0) {
        for (
          var to = 0, ta = 1;
          (Q.words[0] & ta) == 0 && to < 26;
          ++to, ta <<= 1
        );
        if (to > 0) {
          for (Q.iushrn(to); to-- > 0;) {
            if (tr.isOdd()) {
              tr.iadd(ti);
            }
            tr.iushrn(1);
          }
        }
        for (
          var ts = 0, tf = 1;
          (tt.words[0] & tf) == 0 && ts < 26;
          ++ts, tf <<= 1
        );
        if (ts > 0) {
          for (tt.iushrn(ts); ts-- > 0;) {
            if (tn.isOdd()) {
              tn.iadd(ti);
            }
            tn.iushrn(1);
          }
        }
        if (Q.cmp(tt) >= 0) {
          Q.isub(tt);
          tr.isub(tn);
        } else {
          tt.isub(Q);
          tn.isub(tr);
        }
      }
      if ((Z = Q.cmpn(1) === 0 ? tr : tn).cmpn(0) < 0) {
        Z.iadd(J);
      }
      return Z;
    }
    gcd(J) {
      if (this.isZero()) {
        return J.abs();
      }
      if (J.isZero()) {
        return this.abs();
      }
      let Z = this.clone();
      let Q = J.clone();
      Z.negative = 0;
      Q.negative = 0;
      for (var $ = 0; Z.isEven() && Q.isEven(); $++) {
        Z.iushrn(1);
        Q.iushrn(1);
      }
      while (true) {
        while (Z.isEven()) {
          Z.iushrn(1);
        }
        while (Q.isEven()) {
          Q.iushrn(1);
        }
        const tt = Z.cmp(Q);
        if (tt < 0) {
          const te = Z;
          Z = Q;
          Q = te;
        } else if (tt === 0 || Q.cmpn(1) === 0) {
          break;
        }
        Z.isub(Q);
      }
      return Q.iushln($);
    }
    invm(J) {
      return this.egcd(J).a.umod(J);
    }
    isEven() {
      return (1 & this.words[0]) == 0;
    }
    isOdd() {
      return (1 & this.words[0]) == 1;
    }
    andln(J) {
      return this.words[0] & J;
    }
    bincn(J) {
      $(typeof J === "number");
      const Z = J % 26;
      const Q = (J - Z) / 26;
      const tt = 1 << Z;
      if (this.length <= Q) {
        this._expand(Q + 1);
        this.words[Q] |= tt;
        return this;
      }
      for (var te = tt, tr = Q; te !== 0 && tr < this.length; tr++) {
        let tn = 0 | this.words[tr];
        tn += te;
        te = tn >>> 26;
        tn &= 67108863;
        this.words[tr] = tn;
      }
      if (te !== 0) {
        this.words[tr] = te;
        this.length++;
      }
      return this;
    }
    isZero() {
      return this.length === 1 && this.words[0] === 0;
    }
    cmpn(J) {
      let Z;
      const Q = J < 0;
      if (this.negative !== 0 && !Q) {
        return -1;
      }
      if (this.negative === 0 && Q) {
        return 1;
      }
      this._strip();
      if (this.length > 1) {
        Z = 1;
      } else {
        if (Q) {
          J = -J;
        }
        $(J <= 67108863, "Number is too big");
        const tt = 0 | this.words[0];
        Z = tt === J ? 0 : tt < J ? -1 : 1;
      }
      if (this.negative !== 0) {
        return 0 | -Z;
      }
      return Z;
    }
    cmp(J) {
      if (this.negative !== 0 && J.negative === 0) {
        return -1;
      }
      if (this.negative === 0 && J.negative !== 0) {
        return 1;
      }
      const Z = this.ucmp(J);
      if (this.negative !== 0) {
        return 0 | -Z;
      }
      return Z;
    }
    ucmp(J) {
      if (this.length > J.length) {
        return 1;
      }
      if (this.length < J.length) {
        return -1;
      }
      let Z = 0;
      for (let Q = this.length - 1; Q >= 0; Q--) {
        const $ = 0 | this.words[Q];
        const tt = 0 | J.words[Q];
        if ($ !== tt) {
          if ($ < tt) {
            Z = -1;
          } else if ($ > tt) {
            Z = 1;
          }
          break;
        }
      }
      return Z;
    }
    gtn(J) {
      return this.cmpn(J) === 1;
    }
    gt(J) {
      return this.cmp(J) === 1;
    }
    gten(J) {
      return this.cmpn(J) >= 0;
    }
    gte(J) {
      return this.cmp(J) >= 0;
    }
    ltn(J) {
      return this.cmpn(J) === -1;
    }
    lt(J) {
      return this.cmp(J) === -1;
    }
    lten(J) {
      return this.cmpn(J) <= 0;
    }
    lte(J) {
      return this.cmp(J) <= 0;
    }
    eqn(J) {
      return this.cmpn(J) === 0;
    }
    eq(J) {
      return this.cmp(J) === 0;
    }
    static red(J) {
      return new tx(J);
    }
    toRed(J) {
      $(!this.red, "Already a number in reduction context");
      $(this.negative === 0, "red works only with positives");
      return J.convertTo(this)._forceRed(J);
    }
    fromRed() {
      $(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    }
    _forceRed(J) {
      this.red = J;
      return this;
    }
    forceRed(J) {
      $(!this.red, "Already a number in reduction context");
      return this._forceRed(J);
    }
    redAdd(J) {
      $(this.red, "redAdd works only with red numbers");
      return this.red.add(this, J);
    }
    redIAdd(J) {
      $(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, J);
    }
    redSub(J) {
      $(this.red, "redSub works only with red numbers");
      return this.red.sub(this, J);
    }
    redISub(J) {
      $(this.red, "redISub works only with red numbers");
      return this.red.isub(this, J);
    }
    redShl(J) {
      $(this.red, "redShl works only with red numbers");
      return this.red.shl(this, J);
    }
    redMul(J) {
      $(this.red, "redMul works only with red numbers");
      this.red._verify2(this, J);
      return this.red.mul(this, J);
    }
    redIMul(J) {
      $(this.red, "redMul works only with red numbers");
      this.red._verify2(this, J);
      return this.red.imul(this, J);
    }
    redSqr() {
      $(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    }
    redISqr() {
      $(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    }
    redSqrt() {
      $(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    }
    redInvm() {
      $(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    }
    redNeg() {
      $(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    }
    redPow(J) {
      $(this.red && !J.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, J);
    }
    static _prime(J) {
      let Z;
      if (tb[J]) {
        return tb[J];
      }
      if (J === "k256") {
        Z = new tg();
      } else if (J === "p224") {
        Z = new ty();
      } else if (J === "p192") {
        Z = new tm();
      } else if (J === "p25519") {
        Z = new tw();
      } else {
        throw Error("Unknown prime " + J);
      }
      tb[J] = Z;
      return Z;
    }
    static mont(J) {
      return new t_(J);
    }
  }
  if (typeof J === "object") {
    J.exports = te;
  } else {
    Z.BN = te;
  }
  te.BN = te;
  te.wordSize = 26;
  try {
    ts =
      typeof window !== "undefined" && window.Buffer !== undefined
        ? window.Buffer
        : require("./module-J8.js").Buffer;
  } catch (J) {}
  function tr(J, Z) {
    const Q = J.charCodeAt(Z);
    if (Q >= 48 && Q <= 57) {
      return Q - 48;
    }
    if (Q >= 65 && Q <= 70) {
      return Q - 55;
    }
    if (Q >= 97 && Q <= 102) {
      return Q - 87;
    }
    $(false, "Invalid character in " + J);
  }
  function tn(J, Z, Q) {
    let $ = tr(J, Q);
    if (Q - 1 >= Z) {
      $ |= tr(J, Q - 1) << 4;
    }
    return $;
  }
  function ti(J, Z, Q, tt) {
    let te = 0;
    let tr = 0;
    for (let tn = Math.min(J.length, Q), ti = Z; ti < tn; ti++) {
      const to = J.charCodeAt(ti) - 48;
      te *= tt;
      tr = to >= 49 ? to - 49 + 10 : to >= 17 ? to - 17 + 10 : to;
      $(to >= 0 && tr < tt, "Invalid character");
      te += tr;
    }
    return te;
  }
  function to(J, Z) {
    J.words = Z.words;
    J.length = Z.length;
    J.negative = Z.negative;
    J.red = Z.red;
  }
  if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
    try {
      te.prototype[Symbol.for("nodejs.util.inspect.custom")] = ta;
    } catch (J) {
      te.prototype.inspect = ta;
    }
  } else {
    te.prototype.inspect = ta;
  }
  function ta() {
    return `${(this.red ? "<BN-R: " : "<BN: ") + this.toString(16)}>`;
  }
  var ts;
  const tf = [
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
  const tu = [
    0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ];
  const tc = [
    0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343,
    7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000,
    28629151, 33554432, 39135393, 45435424, 52521875, 60466176,
  ];
  function th(J, Z, Q) {
    Q.negative = Z.negative ^ J.negative;
    let $ = (J.length + Z.length) | 0;
    Q.length = $;
    $ = ($ - 1) | 0;
    let tt = 0 | J.words[0];
    let te = 0 | Z.words[0];
    let tr = tt * te;
    const tn = 67108863 & tr;
    let ti = (tr / 67108864) | 0;
    Q.words[0] = tn;
    for (var to = 1; to < $; to++) {
      let ta = ti >>> 26;
      let ts = 67108863 & ti;
      for (
        let tf = Math.min(to, Z.length - 1),
          tu = Math.max(0, to - J.length + 1);
        tu <= tf;
        tu++
      ) {
        const tc = (to - tu) | 0;
        ta +=
          ((tr = (tt = 0 | J.words[tc]) * (te = 0 | Z.words[tu]) + ts) /
            67108864) |
          0;
        ts = 67108863 & tr;
      }
      Q.words[to] = 0 | ts;
      ti = 0 | ta;
    }
    if (ti !== 0) {
      Q.words[to] = 0 | ti;
    } else {
      Q.length--;
    }
    return Q._strip();
  }
  if (ts) {
    te.prototype.toBuffer = function (J, Z) {
      return this.toArrayLike(ts, J, Z);
    };
  }
  if (Math.clz32) {
    te.prototype._countBits = function (J) {
      return 32 - Math.clz32(J);
    };
  } else {
    te.prototype._countBits = function (J) {
      let Z = J;
      let Q = 0;
      if (Z >= 4096) {
        Q += 13;
        Z >>>= 13;
      }
      if (Z >= 64) {
        Q += 7;
        Z >>>= 7;
      }
      if (Z >= 8) {
        Q += 4;
        Z >>>= 4;
      }
      if (Z >= 2) {
        Q += 2;
        Z >>>= 2;
      }
      return Q + Z;
    };
  }
  let td = function (J, Z, Q) {
    let $;
    let tt;
    let te;
    const J_words = J.words;
    const Z_words = Z.words;
    const Q_words = Q.words;
    let to = 0;
    const ta = 0 | J_words[0];
    const ts = 8191 & ta;
    const tf = ta >>> 13;
    const tu = 0 | J_words[1];
    const tc = 8191 & tu;
    const th = tu >>> 13;
    const td = 0 | J_words[2];
    const tl = 8191 & td;
    const tp = td >>> 13;
    const tb = 0 | J_words[3];
    const tv = 8191 & tb;
    const tg = tb >>> 13;
    const ty = 0 | J_words[4];
    const tm = 8191 & ty;
    const tw = ty >>> 13;
    const tx = 0 | J_words[5];
    const t_ = 8191 & tx;
    const tM = tx >>> 13;
    const tS = 0 | J_words[6];
    const tA = 8191 & tS;
    const tE = tS >>> 13;
    const tk = 0 | J_words[7];
    const tR = 8191 & tk;
    const tI = tk >>> 13;
    const tO = 0 | J_words[8];
    const tT = 8191 & tO;
    const tB = tO >>> 13;
    const tj = 0 | J_words[9];
    const tC = 8191 & tj;
    const tP = tj >>> 13;
    const tL = 0 | Z_words[0];
    const tN = 8191 & tL;
    const tU = tL >>> 13;
    const tD = 0 | Z_words[1];
    const tF = 8191 & tD;
    const tq = tD >>> 13;
    const tz = 0 | Z_words[2];
    const tH = 8191 & tz;
    const tV = tz >>> 13;
    const tW = 0 | Z_words[3];
    const tK = 8191 & tW;
    const tY = tW >>> 13;
    const tX = 0 | Z_words[4];
    const tG = 8191 & tX;
    const tJ = tX >>> 13;
    const tZ = 0 | Z_words[5];
    const tQ = 8191 & tZ;
    const t$ = tZ >>> 13;
    const t0 = 0 | Z_words[6];
    const t1 = 8191 & t0;
    const t2 = t0 >>> 13;
    const t6 = 0 | Z_words[7];
    const t3 = 8191 & t6;
    const t4 = t6 >>> 13;
    const t8 = 0 | Z_words[8];
    const t5 = 8191 & t8;
    const t9 = t8 >>> 13;
    const t7 = 0 | Z_words[9];
    const et = 8191 & t7;
    const ee = t7 >>> 13;
    Q.negative = J.negative ^ Z.negative;
    Q.length = 19;
    $ = Math.imul(ts, tN);
    let er =
      (((to + $) | 0) +
        ((8191 & (tt = ((tt = Math.imul(ts, tU)) + Math.imul(tf, tN)) | 0)) <<
          13)) |
      0;
    to = ((((te = Math.imul(tf, tU)) + (tt >>> 13)) | 0) + (er >>> 26)) | 0;
    er &= 67108863;
    $ = Math.imul(tc, tN);
    tt = ((tt = Math.imul(tc, tU)) + Math.imul(th, tN)) | 0;
    te = Math.imul(th, tU);
    $ = ($ + Math.imul(ts, tF)) | 0;
    let en =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, tq)) | 0) + Math.imul(tf, tF)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, tq)) | 0) + (tt >>> 13)) | 0) +
        (en >>> 26)) |
      0;
    en &= 67108863;
    $ = Math.imul(tl, tN);
    tt = ((tt = Math.imul(tl, tU)) + Math.imul(tp, tN)) | 0;
    te = Math.imul(tp, tU);
    $ = ($ + Math.imul(tc, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tc, tq)) | 0) + Math.imul(th, tF)) | 0;
    te = (te + Math.imul(th, tq)) | 0;
    $ = ($ + Math.imul(ts, tH)) | 0;
    let ei =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, tV)) | 0) + Math.imul(tf, tH)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, tV)) | 0) + (tt >>> 13)) | 0) +
        (ei >>> 26)) |
      0;
    ei &= 67108863;
    $ = Math.imul(tv, tN);
    tt = ((tt = Math.imul(tv, tU)) + Math.imul(tg, tN)) | 0;
    te = Math.imul(tg, tU);
    $ = ($ + Math.imul(tl, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tl, tq)) | 0) + Math.imul(tp, tF)) | 0;
    te = (te + Math.imul(tp, tq)) | 0;
    $ = ($ + Math.imul(tc, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tc, tV)) | 0) + Math.imul(th, tH)) | 0;
    te = (te + Math.imul(th, tV)) | 0;
    $ = ($ + Math.imul(ts, tK)) | 0;
    let eo =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, tY)) | 0) + Math.imul(tf, tK)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, tY)) | 0) + (tt >>> 13)) | 0) +
        (eo >>> 26)) |
      0;
    eo &= 67108863;
    $ = Math.imul(tm, tN);
    tt = ((tt = Math.imul(tm, tU)) + Math.imul(tw, tN)) | 0;
    te = Math.imul(tw, tU);
    $ = ($ + Math.imul(tv, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tv, tq)) | 0) + Math.imul(tg, tF)) | 0;
    te = (te + Math.imul(tg, tq)) | 0;
    $ = ($ + Math.imul(tl, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tl, tV)) | 0) + Math.imul(tp, tH)) | 0;
    te = (te + Math.imul(tp, tV)) | 0;
    $ = ($ + Math.imul(tc, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tc, tY)) | 0) + Math.imul(th, tK)) | 0;
    te = (te + Math.imul(th, tY)) | 0;
    $ = ($ + Math.imul(ts, tG)) | 0;
    let ea =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, tJ)) | 0) + Math.imul(tf, tG)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, tJ)) | 0) + (tt >>> 13)) | 0) +
        (ea >>> 26)) |
      0;
    ea &= 67108863;
    $ = Math.imul(t_, tN);
    tt = ((tt = Math.imul(t_, tU)) + Math.imul(tM, tN)) | 0;
    te = Math.imul(tM, tU);
    $ = ($ + Math.imul(tm, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tm, tq)) | 0) + Math.imul(tw, tF)) | 0;
    te = (te + Math.imul(tw, tq)) | 0;
    $ = ($ + Math.imul(tv, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tv, tV)) | 0) + Math.imul(tg, tH)) | 0;
    te = (te + Math.imul(tg, tV)) | 0;
    $ = ($ + Math.imul(tl, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tl, tY)) | 0) + Math.imul(tp, tK)) | 0;
    te = (te + Math.imul(tp, tY)) | 0;
    $ = ($ + Math.imul(tc, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tc, tJ)) | 0) + Math.imul(th, tG)) | 0;
    te = (te + Math.imul(th, tJ)) | 0;
    $ = ($ + Math.imul(ts, tQ)) | 0;
    let es =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, t$)) | 0) + Math.imul(tf, tQ)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, t$)) | 0) + (tt >>> 13)) | 0) +
        (es >>> 26)) |
      0;
    es &= 67108863;
    $ = Math.imul(tA, tN);
    tt = ((tt = Math.imul(tA, tU)) + Math.imul(tE, tN)) | 0;
    te = Math.imul(tE, tU);
    $ = ($ + Math.imul(t_, tF)) | 0;
    tt = ((tt = (tt + Math.imul(t_, tq)) | 0) + Math.imul(tM, tF)) | 0;
    te = (te + Math.imul(tM, tq)) | 0;
    $ = ($ + Math.imul(tm, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tm, tV)) | 0) + Math.imul(tw, tH)) | 0;
    te = (te + Math.imul(tw, tV)) | 0;
    $ = ($ + Math.imul(tv, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tv, tY)) | 0) + Math.imul(tg, tK)) | 0;
    te = (te + Math.imul(tg, tY)) | 0;
    $ = ($ + Math.imul(tl, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tl, tJ)) | 0) + Math.imul(tp, tG)) | 0;
    te = (te + Math.imul(tp, tJ)) | 0;
    $ = ($ + Math.imul(tc, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tc, t$)) | 0) + Math.imul(th, tQ)) | 0;
    te = (te + Math.imul(th, t$)) | 0;
    $ = ($ + Math.imul(ts, t1)) | 0;
    let ef =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, t2)) | 0) + Math.imul(tf, t1)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, t2)) | 0) + (tt >>> 13)) | 0) +
        (ef >>> 26)) |
      0;
    ef &= 67108863;
    $ = Math.imul(tR, tN);
    tt = ((tt = Math.imul(tR, tU)) + Math.imul(tI, tN)) | 0;
    te = Math.imul(tI, tU);
    $ = ($ + Math.imul(tA, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tA, tq)) | 0) + Math.imul(tE, tF)) | 0;
    te = (te + Math.imul(tE, tq)) | 0;
    $ = ($ + Math.imul(t_, tH)) | 0;
    tt = ((tt = (tt + Math.imul(t_, tV)) | 0) + Math.imul(tM, tH)) | 0;
    te = (te + Math.imul(tM, tV)) | 0;
    $ = ($ + Math.imul(tm, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tm, tY)) | 0) + Math.imul(tw, tK)) | 0;
    te = (te + Math.imul(tw, tY)) | 0;
    $ = ($ + Math.imul(tv, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tv, tJ)) | 0) + Math.imul(tg, tG)) | 0;
    te = (te + Math.imul(tg, tJ)) | 0;
    $ = ($ + Math.imul(tl, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tl, t$)) | 0) + Math.imul(tp, tQ)) | 0;
    te = (te + Math.imul(tp, t$)) | 0;
    $ = ($ + Math.imul(tc, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tc, t2)) | 0) + Math.imul(th, t1)) | 0;
    te = (te + Math.imul(th, t2)) | 0;
    $ = ($ + Math.imul(ts, t3)) | 0;
    let eu =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, t4)) | 0) + Math.imul(tf, t3)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, t4)) | 0) + (tt >>> 13)) | 0) +
        (eu >>> 26)) |
      0;
    eu &= 67108863;
    $ = Math.imul(tT, tN);
    tt = ((tt = Math.imul(tT, tU)) + Math.imul(tB, tN)) | 0;
    te = Math.imul(tB, tU);
    $ = ($ + Math.imul(tR, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tR, tq)) | 0) + Math.imul(tI, tF)) | 0;
    te = (te + Math.imul(tI, tq)) | 0;
    $ = ($ + Math.imul(tA, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tA, tV)) | 0) + Math.imul(tE, tH)) | 0;
    te = (te + Math.imul(tE, tV)) | 0;
    $ = ($ + Math.imul(t_, tK)) | 0;
    tt = ((tt = (tt + Math.imul(t_, tY)) | 0) + Math.imul(tM, tK)) | 0;
    te = (te + Math.imul(tM, tY)) | 0;
    $ = ($ + Math.imul(tm, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tm, tJ)) | 0) + Math.imul(tw, tG)) | 0;
    te = (te + Math.imul(tw, tJ)) | 0;
    $ = ($ + Math.imul(tv, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tv, t$)) | 0) + Math.imul(tg, tQ)) | 0;
    te = (te + Math.imul(tg, t$)) | 0;
    $ = ($ + Math.imul(tl, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tl, t2)) | 0) + Math.imul(tp, t1)) | 0;
    te = (te + Math.imul(tp, t2)) | 0;
    $ = ($ + Math.imul(tc, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tc, t4)) | 0) + Math.imul(th, t3)) | 0;
    te = (te + Math.imul(th, t4)) | 0;
    $ = ($ + Math.imul(ts, t5)) | 0;
    let ec =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, t9)) | 0) + Math.imul(tf, t5)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, t9)) | 0) + (tt >>> 13)) | 0) +
        (ec >>> 26)) |
      0;
    ec &= 67108863;
    $ = Math.imul(tC, tN);
    tt = ((tt = Math.imul(tC, tU)) + Math.imul(tP, tN)) | 0;
    te = Math.imul(tP, tU);
    $ = ($ + Math.imul(tT, tF)) | 0;
    tt = ((tt = (tt + Math.imul(tT, tq)) | 0) + Math.imul(tB, tF)) | 0;
    te = (te + Math.imul(tB, tq)) | 0;
    $ = ($ + Math.imul(tR, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tR, tV)) | 0) + Math.imul(tI, tH)) | 0;
    te = (te + Math.imul(tI, tV)) | 0;
    $ = ($ + Math.imul(tA, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tA, tY)) | 0) + Math.imul(tE, tK)) | 0;
    te = (te + Math.imul(tE, tY)) | 0;
    $ = ($ + Math.imul(t_, tG)) | 0;
    tt = ((tt = (tt + Math.imul(t_, tJ)) | 0) + Math.imul(tM, tG)) | 0;
    te = (te + Math.imul(tM, tJ)) | 0;
    $ = ($ + Math.imul(tm, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tm, t$)) | 0) + Math.imul(tw, tQ)) | 0;
    te = (te + Math.imul(tw, t$)) | 0;
    $ = ($ + Math.imul(tv, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tv, t2)) | 0) + Math.imul(tg, t1)) | 0;
    te = (te + Math.imul(tg, t2)) | 0;
    $ = ($ + Math.imul(tl, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tl, t4)) | 0) + Math.imul(tp, t3)) | 0;
    te = (te + Math.imul(tp, t4)) | 0;
    $ = ($ + Math.imul(tc, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tc, t9)) | 0) + Math.imul(th, t5)) | 0;
    te = (te + Math.imul(th, t9)) | 0;
    $ = ($ + Math.imul(ts, et)) | 0;
    let eh =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(ts, ee)) | 0) + Math.imul(tf, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tf, ee)) | 0) + (tt >>> 13)) | 0) +
        (eh >>> 26)) |
      0;
    eh &= 67108863;
    $ = Math.imul(tC, tF);
    tt = ((tt = Math.imul(tC, tq)) + Math.imul(tP, tF)) | 0;
    te = Math.imul(tP, tq);
    $ = ($ + Math.imul(tT, tH)) | 0;
    tt = ((tt = (tt + Math.imul(tT, tV)) | 0) + Math.imul(tB, tH)) | 0;
    te = (te + Math.imul(tB, tV)) | 0;
    $ = ($ + Math.imul(tR, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tR, tY)) | 0) + Math.imul(tI, tK)) | 0;
    te = (te + Math.imul(tI, tY)) | 0;
    $ = ($ + Math.imul(tA, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tA, tJ)) | 0) + Math.imul(tE, tG)) | 0;
    te = (te + Math.imul(tE, tJ)) | 0;
    $ = ($ + Math.imul(t_, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(t_, t$)) | 0) + Math.imul(tM, tQ)) | 0;
    te = (te + Math.imul(tM, t$)) | 0;
    $ = ($ + Math.imul(tm, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tm, t2)) | 0) + Math.imul(tw, t1)) | 0;
    te = (te + Math.imul(tw, t2)) | 0;
    $ = ($ + Math.imul(tv, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tv, t4)) | 0) + Math.imul(tg, t3)) | 0;
    te = (te + Math.imul(tg, t4)) | 0;
    $ = ($ + Math.imul(tl, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tl, t9)) | 0) + Math.imul(tp, t5)) | 0;
    te = (te + Math.imul(tp, t9)) | 0;
    $ = ($ + Math.imul(tc, et)) | 0;
    let ed =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tc, ee)) | 0) + Math.imul(th, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(th, ee)) | 0) + (tt >>> 13)) | 0) +
        (ed >>> 26)) |
      0;
    ed &= 67108863;
    $ = Math.imul(tC, tH);
    tt = ((tt = Math.imul(tC, tV)) + Math.imul(tP, tH)) | 0;
    te = Math.imul(tP, tV);
    $ = ($ + Math.imul(tT, tK)) | 0;
    tt = ((tt = (tt + Math.imul(tT, tY)) | 0) + Math.imul(tB, tK)) | 0;
    te = (te + Math.imul(tB, tY)) | 0;
    $ = ($ + Math.imul(tR, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tR, tJ)) | 0) + Math.imul(tI, tG)) | 0;
    te = (te + Math.imul(tI, tJ)) | 0;
    $ = ($ + Math.imul(tA, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tA, t$)) | 0) + Math.imul(tE, tQ)) | 0;
    te = (te + Math.imul(tE, t$)) | 0;
    $ = ($ + Math.imul(t_, t1)) | 0;
    tt = ((tt = (tt + Math.imul(t_, t2)) | 0) + Math.imul(tM, t1)) | 0;
    te = (te + Math.imul(tM, t2)) | 0;
    $ = ($ + Math.imul(tm, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tm, t4)) | 0) + Math.imul(tw, t3)) | 0;
    te = (te + Math.imul(tw, t4)) | 0;
    $ = ($ + Math.imul(tv, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tv, t9)) | 0) + Math.imul(tg, t5)) | 0;
    te = (te + Math.imul(tg, t9)) | 0;
    $ = ($ + Math.imul(tl, et)) | 0;
    let el =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tl, ee)) | 0) + Math.imul(tp, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tp, ee)) | 0) + (tt >>> 13)) | 0) +
        (el >>> 26)) |
      0;
    el &= 67108863;
    $ = Math.imul(tC, tK);
    tt = ((tt = Math.imul(tC, tY)) + Math.imul(tP, tK)) | 0;
    te = Math.imul(tP, tY);
    $ = ($ + Math.imul(tT, tG)) | 0;
    tt = ((tt = (tt + Math.imul(tT, tJ)) | 0) + Math.imul(tB, tG)) | 0;
    te = (te + Math.imul(tB, tJ)) | 0;
    $ = ($ + Math.imul(tR, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tR, t$)) | 0) + Math.imul(tI, tQ)) | 0;
    te = (te + Math.imul(tI, t$)) | 0;
    $ = ($ + Math.imul(tA, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tA, t2)) | 0) + Math.imul(tE, t1)) | 0;
    te = (te + Math.imul(tE, t2)) | 0;
    $ = ($ + Math.imul(t_, t3)) | 0;
    tt = ((tt = (tt + Math.imul(t_, t4)) | 0) + Math.imul(tM, t3)) | 0;
    te = (te + Math.imul(tM, t4)) | 0;
    $ = ($ + Math.imul(tm, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tm, t9)) | 0) + Math.imul(tw, t5)) | 0;
    te = (te + Math.imul(tw, t9)) | 0;
    $ = ($ + Math.imul(tv, et)) | 0;
    let ep =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tv, ee)) | 0) + Math.imul(tg, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tg, ee)) | 0) + (tt >>> 13)) | 0) +
        (ep >>> 26)) |
      0;
    ep &= 67108863;
    $ = Math.imul(tC, tG);
    tt = ((tt = Math.imul(tC, tJ)) + Math.imul(tP, tG)) | 0;
    te = Math.imul(tP, tJ);
    $ = ($ + Math.imul(tT, tQ)) | 0;
    tt = ((tt = (tt + Math.imul(tT, t$)) | 0) + Math.imul(tB, tQ)) | 0;
    te = (te + Math.imul(tB, t$)) | 0;
    $ = ($ + Math.imul(tR, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tR, t2)) | 0) + Math.imul(tI, t1)) | 0;
    te = (te + Math.imul(tI, t2)) | 0;
    $ = ($ + Math.imul(tA, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tA, t4)) | 0) + Math.imul(tE, t3)) | 0;
    te = (te + Math.imul(tE, t4)) | 0;
    $ = ($ + Math.imul(t_, t5)) | 0;
    tt = ((tt = (tt + Math.imul(t_, t9)) | 0) + Math.imul(tM, t5)) | 0;
    te = (te + Math.imul(tM, t9)) | 0;
    $ = ($ + Math.imul(tm, et)) | 0;
    let eb =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tm, ee)) | 0) + Math.imul(tw, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tw, ee)) | 0) + (tt >>> 13)) | 0) +
        (eb >>> 26)) |
      0;
    eb &= 67108863;
    $ = Math.imul(tC, tQ);
    tt = ((tt = Math.imul(tC, t$)) + Math.imul(tP, tQ)) | 0;
    te = Math.imul(tP, t$);
    $ = ($ + Math.imul(tT, t1)) | 0;
    tt = ((tt = (tt + Math.imul(tT, t2)) | 0) + Math.imul(tB, t1)) | 0;
    te = (te + Math.imul(tB, t2)) | 0;
    $ = ($ + Math.imul(tR, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tR, t4)) | 0) + Math.imul(tI, t3)) | 0;
    te = (te + Math.imul(tI, t4)) | 0;
    $ = ($ + Math.imul(tA, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tA, t9)) | 0) + Math.imul(tE, t5)) | 0;
    te = (te + Math.imul(tE, t9)) | 0;
    $ = ($ + Math.imul(t_, et)) | 0;
    let ev =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(t_, ee)) | 0) + Math.imul(tM, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tM, ee)) | 0) + (tt >>> 13)) | 0) +
        (ev >>> 26)) |
      0;
    ev &= 67108863;
    $ = Math.imul(tC, t1);
    tt = ((tt = Math.imul(tC, t2)) + Math.imul(tP, t1)) | 0;
    te = Math.imul(tP, t2);
    $ = ($ + Math.imul(tT, t3)) | 0;
    tt = ((tt = (tt + Math.imul(tT, t4)) | 0) + Math.imul(tB, t3)) | 0;
    te = (te + Math.imul(tB, t4)) | 0;
    $ = ($ + Math.imul(tR, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tR, t9)) | 0) + Math.imul(tI, t5)) | 0;
    te = (te + Math.imul(tI, t9)) | 0;
    $ = ($ + Math.imul(tA, et)) | 0;
    let eg =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tA, ee)) | 0) + Math.imul(tE, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tE, ee)) | 0) + (tt >>> 13)) | 0) +
        (eg >>> 26)) |
      0;
    eg &= 67108863;
    $ = Math.imul(tC, t3);
    tt = ((tt = Math.imul(tC, t4)) + Math.imul(tP, t3)) | 0;
    te = Math.imul(tP, t4);
    $ = ($ + Math.imul(tT, t5)) | 0;
    tt = ((tt = (tt + Math.imul(tT, t9)) | 0) + Math.imul(tB, t5)) | 0;
    te = (te + Math.imul(tB, t9)) | 0;
    $ = ($ + Math.imul(tR, et)) | 0;
    let ey =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tR, ee)) | 0) + Math.imul(tI, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tI, ee)) | 0) + (tt >>> 13)) | 0) +
        (ey >>> 26)) |
      0;
    ey &= 67108863;
    $ = Math.imul(tC, t5);
    tt = ((tt = Math.imul(tC, t9)) + Math.imul(tP, t5)) | 0;
    te = Math.imul(tP, t9);
    $ = ($ + Math.imul(tT, et)) | 0;
    let em =
      (((to + $) | 0) +
        ((8191 &
          (tt =
            ((tt = (tt + Math.imul(tT, ee)) | 0) + Math.imul(tB, et)) | 0)) <<
          13)) |
      0;
    to =
      ((((te = (te + Math.imul(tB, ee)) | 0) + (tt >>> 13)) | 0) +
        (em >>> 26)) |
      0;
    em &= 67108863;
    $ = Math.imul(tC, et);
    let ew =
      (((to + $) | 0) +
        ((8191 & (tt = ((tt = Math.imul(tC, ee)) + Math.imul(tP, et)) | 0)) <<
          13)) |
      0;
    to = ((((te = Math.imul(tP, ee)) + (tt >>> 13)) | 0) + (ew >>> 26)) | 0;
    ew &= 67108863;
    Q_words[0] = er;
    Q_words[1] = en;
    Q_words[2] = ei;
    Q_words[3] = eo;
    Q_words[4] = ea;
    Q_words[5] = es;
    Q_words[6] = ef;
    Q_words[7] = eu;
    Q_words[8] = ec;
    Q_words[9] = eh;
    Q_words[10] = ed;
    Q_words[11] = el;
    Q_words[12] = ep;
    Q_words[13] = eb;
    Q_words[14] = ev;
    Q_words[15] = eg;
    Q_words[16] = ey;
    Q_words[17] = em;
    Q_words[18] = ew;
    if (to !== 0) {
      Q_words[19] = to;
      Q.length++;
    }
    return Q;
  };
  function tl(J, Z, Q) {
    Q.negative = Z.negative ^ J.negative;
    Q.length = J.length + Z.length;
    let $ = 0;
    let tt = 0;
    for (var te = 0; te < Q.length - 1; te++) {
      let tr = tt;
      tt = 0;
      let tn = 67108863 & $;
      for (
        let ti = Math.min(te, Z.length - 1),
          to = Math.max(0, te - J.length + 1);
        to <= ti;
        to++
      ) {
        const ta = te - to;
        const ts = (0 | J.words[ta]) * (0 | Z.words[to]);
        let tf = 67108863 & ts;
        tr = (tr + ((ts / 67108864) | 0)) | 0;
        tn = 67108863 & (tf = (tf + tn) | 0);
        tt += (tr = (tr + (tf >>> 26)) | 0) >>> 26;
        tr &= 67108863;
      }
      Q.words[te] = tn;
      $ = tr;
      tr = tt;
    }
    if ($ !== 0) {
      Q.words[te] = $;
    } else {
      Q.length--;
    }
    return Q._strip();
  }
  class tp {
    constructor(J, Z) {
      this.x = J;
      this.y = Z;
    }
    makeRBT(J) {
      const Z = Array(J);
      const Q = te.prototype._countBits(J) - 1;
      for (let $ = 0; $ < J; $++) {
        Z[$] = this.revBin($, Q, J);
      }
      return Z;
    }
    revBin(J, Z, Q) {
      if (J === 0 || J === Q - 1) {
        return J;
      }
      let $ = 0;
      for (let tt = 0; tt < Z; tt++) {
        $ |= (1 & J) << (Z - tt - 1);
        J >>= 1;
      }
      return $;
    }
    permute(J, Z, Q, $, tt, te) {
      for (let tr = 0; tr < te; tr++) {
        $[tr] = Z[J[tr]];
        tt[tr] = Q[J[tr]];
      }
    }
    transform(J, Z, Q, $, tt, te) {
      this.permute(te, J, Z, Q, $, tt);
      for (let tr = 1; tr < tt; tr <<= 1) {
        for (
          let tn = tr << 1,
            ti = Math.cos((2 * Math.PI) / tn),
            to = Math.sin((2 * Math.PI) / tn),
            ta = 0;
          ta < tt;
          ta += tn
        ) {
          let ts = ti;
          let tf = to;
          for (let tu = 0; tu < tr; tu++) {
            const tc = Q[ta + tu];
            const th = $[ta + tu];
            let td = Q[ta + tu + tr];
            let tl = $[ta + tu + tr];
            let tp = ts * td - tf * tl;
            tl = ts * tl + tf * td;
            td = tp;
            Q[ta + tu] = tc + td;
            $[ta + tu] = th + tl;
            Q[ta + tu + tr] = tc - td;
            $[ta + tu + tr] = th - tl;
            if (tu !== tn) {
              tp = ti * ts - to * tf;
              tf = ti * tf + to * ts;
              ts = tp;
            }
          }
        }
      }
    }
    guessLen13b(J, Z) {
      let Q = 1 | Math.max(Z, J);
      const $ = 1 & Q;
      let tt = 0;
      for (Q = (Q / 2) | 0; Q; Q >>>= 1) {
        tt++;
      }
      return 1 << (tt + 1 + $);
    }
    conjugate(J, Z, Q) {
      if (!(Q <= 1)) {
        for (let $ = 0; $ < Q / 2; $++) {
          let tt = J[$];
          J[$] = J[Q - $ - 1];
          J[Q - $ - 1] = tt;
          tt = Z[$];
          Z[$] = -Z[Q - $ - 1];
          Z[Q - $ - 1] = -tt;
        }
      }
    }
    normalize13b(J, Z) {
      let Q = 0;
      for (let $ = 0; $ < Z / 2; $++) {
        const tt =
          8192 * Math.round(J[2 * $ + 1] / Z) + Math.round(J[2 * $] / Z) + Q;
        J[$] = 67108863 & tt;
        Q = tt < 67108864 ? 0 : (tt / 67108864) | 0;
      }
      return J;
    }
    convert13b(J, Z, Q, tt) {
      let te = 0;
      for (var tr = 0; tr < Z; tr++) {
        te += 0 | J[tr];
        Q[2 * tr] = 8191 & te;
        te >>>= 13;
        Q[2 * tr + 1] = 8191 & te;
        te >>>= 13;
      }
      for (tr = 2 * Z; tr < tt; ++tr) {
        Q[tr] = 0;
      }
      $(te === 0);
      $((-8192 & te) == 0);
    }
    stub(J) {
      const Z = Array(J);
      for (let Q = 0; Q < J; Q++) {
        Z[Q] = 0;
      }
      return Z;
    }
    mulp(J, Z, Q) {
      const $ = 2 * this.guessLen13b(J.length, Z.length);
      const tt = this.makeRBT($);
      const te = this.stub($);
      const tr = Array($);
      const tn = Array($);
      const ti = Array($);
      const to = Array($);
      const ta = Array($);
      const ts = Array($);
      const Q_words = Q.words;
      Q_words.length = $;
      this.convert13b(J.words, J.length, tr, $);
      this.convert13b(Z.words, Z.length, to, $);
      this.transform(tr, te, tn, ti, $, tt);
      this.transform(to, te, ta, ts, $, tt);
      for (let tu = 0; tu < $; tu++) {
        const tc = tn[tu] * ta[tu] - ti[tu] * ts[tu];
        ti[tu] = tn[tu] * ts[tu] + ti[tu] * ta[tu];
        tn[tu] = tc;
      }
      this.conjugate(tn, ti, $);
      this.transform(tn, ti, Q_words, te, $, tt);
      this.conjugate(Q_words, te, $);
      this.normalize13b(Q_words, $);
      Q.negative = J.negative ^ Z.negative;
      Q.length = J.length + Z.length;
      return Q._strip();
    }
  }
  if (!Math.imul) {
    td = th;
  }
  const tb = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null,
  };
  function tv(J, Z) {
    this.name = J;
    this.p = new te(Z, 16);
    this.n = this.p.bitLength();
    this.k = new te(1).iushln(this.n).isub(this.p);
    this.tmp = this._tmp();
  }
  function tg() {
    tv.call(
      this,
      "k256",
      "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    );
  }
  function ty() {
    tv.call(
      this,
      "p224",
      "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    );
  }
  function tm() {
    tv.call(
      this,
      "p192",
      "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    );
  }
  function tw() {
    tv.call(
      this,
      "25519",
      "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    );
  }
  function tx(J) {
    if (typeof J === "string") {
      const Z = te._prime(J);
      this.m = Z.p;
      this.prime = Z;
    } else {
      $(J.gtn(1), "modulus must be greater than 1");
      this.m = J;
      this.prime = null;
    }
  }
  function t_(J) {
    tx.call(this, J);
    this.shift = this.m.bitLength();
    if (this.shift % 26 != 0) {
      this.shift += 26 - (this.shift % 26);
    }
    this.r = new te(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);
    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  tv.prototype._tmp = function () {
    const J = new te(null);
    J.words = Array(Math.ceil(this.n / 13));
    return J;
  };
  tv.prototype.ireduce = function (J) {
    let Z;
    let Q = J;
    do {
      this.split(Q, this.tmp);
      Z = (Q = (Q = this.imulK(Q)).iadd(this.tmp)).bitLength();
    } while (Z > this.n);
    const $ = Z < this.n ? -1 : Q.ucmp(this.p);
    if ($ === 0) {
      Q.words[0] = 0;
      Q.length = 1;
    } else if ($ > 0) {
      Q.isub(this.p);
    } else if (Q.strip !== undefined) {
      Q.strip();
    } else {
      Q._strip();
    }
    return Q;
  };
  tv.prototype.split = function (J, Z) {
    J.iushrn(this.n, 0, Z);
  };
  tv.prototype.imulK = function (J) {
    return J.imul(this.k);
  };
  tt(tg, tv);
  tg.prototype.split = function (J, Z) {
    for (var Q = Math.min(J.length, 9), $ = 0; $ < Q; $++) {
      Z.words[$] = J.words[$];
    }
    Z.length = Q;
    if (J.length <= 9) {
      J.words[0] = 0;
      J.length = 1;
      return;
    }
    let tt = J.words[9];
    Z.words[Z.length++] = 4194303 & tt;
    for ($ = 10; $ < J.length; $++) {
      const te = 0 | J.words[$];
      J.words[$ - 10] = ((4194303 & te) << 4) | (tt >>> 22);
      tt = te;
    }
    tt >>>= 22;
    J.words[$ - 10] = tt;
    if (tt === 0 && J.length > 10) {
      J.length -= 10;
    } else {
      J.length -= 9;
    }
  };
  tg.prototype.imulK = function (J) {
    J.words[J.length] = 0;
    J.words[J.length + 1] = 0;
    J.length += 2;
    let Z = 0;
    for (let Q = 0; Q < J.length; Q++) {
      const $ = 0 | J.words[Q];
      Z += 977 * $;
      J.words[Q] = 67108863 & Z;
      Z = 64 * $ + ((Z / 67108864) | 0);
    }
    if (J.words[J.length - 1] === 0) {
      J.length--;
      if (J.words[J.length - 1] === 0) {
        J.length--;
      }
    }
    return J;
  };
  tt(ty, tv);
  tt(tm, tv);
  tt(tw, tv);
  tw.prototype.imulK = function (J) {
    let Z = 0;
    for (let Q = 0; Q < J.length; Q++) {
      let $ = (0 | J.words[Q]) * 19 + Z;
      const tt = 67108863 & $;
      $ >>>= 26;
      J.words[Q] = tt;
      Z = $;
    }
    if (Z !== 0) {
      J.words[J.length++] = Z;
    }
    return J;
  };
  tx.prototype._verify1 = function (J) {
    $(J.negative === 0, "red works only with positives");
    $(J.red, "red works only with red numbers");
  };
  tx.prototype._verify2 = function (J, Z) {
    $((J.negative | Z.negative) == 0, "red works only with positives");
    $(J.red && J.red === Z.red, "red works only with red numbers");
  };
  tx.prototype.imod = function (J) {
    if (this.prime) {
      return this.prime.ireduce(J)._forceRed(this);
    }
    to(J, J.umod(this.m)._forceRed(this));
    return J;
  };
  tx.prototype.neg = function (J) {
    if (J.isZero()) {
      return J.clone();
    }
    return this.m.sub(J)._forceRed(this);
  };
  tx.prototype.add = function (J, Z) {
    this._verify2(J, Z);
    const Q = J.add(Z);
    if (Q.cmp(this.m) >= 0) {
      Q.isub(this.m);
    }
    return Q._forceRed(this);
  };
  tx.prototype.iadd = function (J, Z) {
    this._verify2(J, Z);
    const Q = J.iadd(Z);
    if (Q.cmp(this.m) >= 0) {
      Q.isub(this.m);
    }
    return Q;
  };
  tx.prototype.sub = function (J, Z) {
    this._verify2(J, Z);
    const Q = J.sub(Z);
    if (Q.cmpn(0) < 0) {
      Q.iadd(this.m);
    }
    return Q._forceRed(this);
  };
  tx.prototype.isub = function (J, Z) {
    this._verify2(J, Z);
    const Q = J.isub(Z);
    if (Q.cmpn(0) < 0) {
      Q.iadd(this.m);
    }
    return Q;
  };
  tx.prototype.shl = function (J, Z) {
    this._verify1(J);
    return this.imod(J.ushln(Z));
  };
  tx.prototype.imul = function (J, Z) {
    this._verify2(J, Z);
    return this.imod(J.imul(Z));
  };
  tx.prototype.mul = function (J, Z) {
    this._verify2(J, Z);
    return this.imod(J.mul(Z));
  };
  tx.prototype.isqr = function (J) {
    return this.imul(J, J.clone());
  };
  tx.prototype.sqr = function (J) {
    return this.mul(J, J);
  };
  tx.prototype.sqrt = function (J) {
    if (J.isZero()) {
      return J.clone();
    }
    const Z = this.m.andln(3);
    $(Z % 2 == 1);
    if (Z === 3) {
      const Q = this.m.add(new te(1)).iushrn(2);
      return this.pow(J, Q);
    }
    for (var tt = this.m.subn(1), tr = 0; !tt.isZero() && tt.andln(1) === 0;) {
      tr++;
      tt.iushrn(1);
    }
    $(!tt.isZero());
    const tn = new te(1).toRed(this);
    const ti = tn.redNeg();
    const to = this.m.subn(1).iushrn(1);
    let ta = this.m.bitLength();
    for (
      ta = new te(2 * ta * ta).toRed(this);
      this.pow(ta, to).cmp(ti) !== 0;
    ) {
      ta.redIAdd(ti);
    }
    let ts = this.pow(ta, tt);
    let tf = this.pow(J, tt.addn(1).iushrn(1));
    for (let tu = this.pow(J, tt), tc = tr; tu.cmp(tn) !== 0;) {
      for (var th = tu, td = 0; th.cmp(tn) !== 0; td++) {
        th = th.redSqr();
      }
      $(td < tc);
      const tl = this.pow(ts, new te(1).iushln(tc - td - 1));
      tf = tf.redMul(tl);
      ts = tl.redSqr();
      tu = tu.redMul(ts);
      tc = td;
    }
    return tf;
  };
  tx.prototype.invm = function (J) {
    const Z = J._invmp(this.m);
    if (Z.negative !== 0) {
      Z.negative = 0;
      return this.imod(Z).redNeg();
    }
    return this.imod(Z);
  };
  tx.prototype.pow = function (J, Z) {
    if (Z.isZero()) {
      return new te(1).toRed(this);
    }
    if (Z.cmpn(1) === 0) {
      return J.clone();
    }
    const Q = Array(16);
    Q[0] = new te(1).toRed(this);
    Q[1] = J;
    for (var $ = 2; $ < Q.length; $++) {
      Q[$] = this.mul(Q[$ - 1], J);
    }
    let tt = Q[0];
    let tr = 0;
    let tn = 0;
    let ti = Z.bitLength() % 26;
    if (ti === 0) {
      ti = 26;
    }
    for ($ = Z.length - 1; $ >= 0; $--) {
      const to = Z.words[$];
      for (let ta = ti - 1; ta >= 0; ta--) {
        const ts = (to >> ta) & 1;
        if (tt !== Q[0]) {
          tt = this.sqr(tt);
        }
        if (ts === 0 && tr === 0) {
          tn = 0;
          continue;
        }
        tr <<= 1;
        tr |= ts;
        if (++tn == 4 || ($ === 0 && ta === 0)) {
          tt = this.mul(tt, Q[tr]);
          tn = 0;
          tr = 0;
        }
      }
      ti = 26;
    }
    return tt;
  };
  tx.prototype.convertTo = function (J) {
    const Z = J.umod(this.m);
    if (Z === J) {
      return Z.clone();
    }
    return Z;
  };
  tx.prototype.convertFrom = function (J) {
    const Z = J.clone();
    Z.red = null;
    return Z;
  };
  tt(t_, tx);
  t_.prototype.convertTo = function (J) {
    return this.imod(J.ushln(this.shift));
  };
  t_.prototype.convertFrom = function (J) {
    const Z = this.imod(J.mul(this.rinv));
    Z.red = null;
    return Z;
  };
  t_.prototype.imul = function (J, Z) {
    if (J.isZero() || Z.isZero()) {
      J.words[0] = 0;
      J.length = 1;
      return J;
    }
    const Q = J.imul(Z);
    const $ = Q.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    const tt = Q.isub($).iushrn(this.shift);
    let te = tt;
    if (tt.cmp(this.m) >= 0) {
      te = tt.isub(this.m);
    } else if (tt.cmpn(0) < 0) {
      te = tt.iadd(this.m);
    }
    return te._forceRed(this);
  };
  t_.prototype.mul = function (J, Z) {
    if (J.isZero() || Z.isZero()) {
      return new te(0)._forceRed(this);
    }
    const Q = J.mul(Z);
    const $ = Q.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    const tt = Q.isub($).iushrn(this.shift);
    let tr = tt;
    if (tt.cmp(this.m) >= 0) {
      tr = tt.isub(this.m);
    } else if (tt.cmpn(0) < 0) {
      tr = tt.iadd(this.m);
    }
    return tr._forceRed(this);
  };
  t_.prototype.invm = function (J) {
    return this.imod(J._invmp(this.m).mul(this.r2))._forceRed(this);
  };
})(module, this);
