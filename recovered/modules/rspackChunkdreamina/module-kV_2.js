let i;
export default i ||
  ((e) => {
    if (typeof window !== "undefined" && window.crypto) {
      t = window.crypto;
    }
    if (typeof self !== "undefined" && self.crypto) {
      t = self.crypto;
    }
    if (typeof globalThis !== "undefined" && globalThis.crypto) {
      t = globalThis.crypto;
    }
    if (!t && typeof window !== "undefined" && window.msCrypto) {
      t = window.msCrypto;
    }
    if (!t && global !== undefined && global.crypto) {
      t = global.crypto;
    }
    if (!t) {
      try {
        t = require("inm");
      } catch (e) {}
    }
    var t;
    const i = () => {
      if (t) {
        if (typeof t.getRandomValues === "function") {
          try {
            return t.getRandomValues(new Uint32Array(1))[0];
          } catch (e) {}
        }
        if (typeof t.randomBytes === "function") {
          try {
            return t.randomBytes(4).readInt32LE();
          } catch (e) {}
        }
      }
      throw Error(
        "Native crypto module could not be used to get secure random number.",
      );
    };
    const s =
      Object.create ||
      (() => {
        function e() {}
        return function (t) {
          let r;
          e.prototype = t;
          r = new e();
          e.prototype = null;
          return r;
        };
      })();
    const a = {};
    const n = (a.lib = {});
    const c = (n.Base = {
      extend: function (e) {
        const t = s(this);
        if (e) {
          t.mixIn(e);
        }
        if (!(t.hasOwnProperty("init") && this.init !== t.init)) {
          t.init = function () {
            t.$super.init.apply(this, arguments);
          };
        }
        t.init.prototype = t;
        t.$super = this;
        return t;
      },
      create: function () {
        const e = this.extend();
        e.init.apply(e, arguments);
        return e;
      },
      init: function () {},
      mixIn: function (e) {
        for (const t in e) {
          if (e.hasOwnProperty(t)) {
            this[t] = e[t];
          }
        }
        if (e.hasOwnProperty("toString")) {
          this.toString = e.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      },
    });
    var o = (n.WordArray = c.extend({
      init: function (e, t) {
        e = this.words = e || [];
        if (t != undefined) {
          this.sigBytes = t;
        } else {
          this.sigBytes = 4 * e.length;
        }
      },
      toString: function (e) {
        return (e || x).stringify(this);
      },
      concat: function (e) {
        const words = this.words;
        const e_words = e.words;
        const sigBytes = this.sigBytes;
        const e_sigBytes = e.sigBytes;
        this.clamp();
        if (sigBytes % 4) {
          for (let a = 0; a < e_sigBytes; a++) {
            const n = (e_words[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
            words[(sigBytes + a) >>> 2] |= n << (24 - ((sigBytes + a) % 4) * 8);
          }
        } else {
          for (let c = 0; c < e_sigBytes; c += 4) {
            words[(sigBytes + c) >>> 2] = e_words[c >>> 2];
          }
        }
        this.sigBytes += e_sigBytes;
        return this;
      },
      clamp: function () {
        const words = this.words;
        const sigBytes = this.sigBytes;
        words[sigBytes >>> 2] &= 4294967295 << (32 - (sigBytes % 4) * 8);
        words.length = e.ceil(sigBytes / 4);
      },
      clone: function () {
        const e = c.clone.call(this);
        e.words = this.words.slice(0);
        return e;
      },
      random: function (e) {
        const t = [];
        for (let r = 0; r < e; r += 4) {
          t.push(i());
        }
        return new o.init(t, e);
      },
    }));
    const f = (a.enc = {});
    var x = (f.Hex = {
      stringify: function (e) {
        const e_words = e.words;
        for (var r = e.sigBytes, i = [], s = 0; s < r; s++) {
          const a = (e_words[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
          i.push((a >>> 4).toString(16));
          i.push((15 & a).toString(16));
        }
        return i.join("");
      },
      parse: function (e) {
        for (var t = e.length, r = [], i = 0; i < t; i += 2) {
          r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << (24 - (i % 8) * 4);
        }
        return new o.init(r, t / 2);
      },
    });
    const h = (f.Latin1 = {
      stringify: function (e) {
        const e_words = e.words;
        for (var r = e.sigBytes, i = [], s = 0; s < r; s++) {
          const a = (e_words[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
          i.push(String.fromCharCode(a));
        }
        return i.join("");
      },
      parse: function (e) {
        for (var t = e.length, r = [], i = 0; i < t; i++) {
          r[i >>> 2] |= (255 & e.charCodeAt(i)) << (24 - (i % 4) * 8);
        }
        return new o.init(r, t);
      },
    });
    const l = (f.Utf8 = {
      stringify: function (e) {
        try {
          return decodeURIComponent(escape(h.stringify(e)));
        } catch (e) {
          throw Error("Malformed UTF-8 data");
        }
      },
      parse: function (e) {
        return h.parse(unescape(encodeURIComponent(e)));
      },
    });
    const d = (n.BufferedBlockAlgorithm = c.extend({
      reset: function () {
        this._data = new o.init();
        this._nDataBytes = 0;
      },
      _append: function (e) {
        if (typeof e === "string") {
          e = l.parse(e);
        }
        this._data.concat(e);
        this._nDataBytes += e.sigBytes;
      },
      _process: function (t) {
        let r;
        const _data = this._data;
        const i_words = _data.words;
        const i_sigBytes = _data.sigBytes;
        const blockSize = this.blockSize;
        let c = i_sigBytes / (4 * blockSize);
        const f =
          (c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0)) *
          blockSize;
        const x = e.min(4 * f, i_sigBytes);
        if (f) {
          for (let h = 0; h < f; h += blockSize) {
            this._doProcessBlock(i_words, h);
          }
          r = i_words.splice(0, f);
          _data.sigBytes -= x;
        }
        return new o.init(r, x);
      },
      clone: function () {
        const e = c.clone.call(this);
        e._data = this._data.clone();
        return e;
      },
      _minBufferSize: 0,
    }));
    n.Hasher = d.extend({
      cfg: c.extend(),
      init: function (e) {
        this.cfg = this.cfg.extend(e);
        this.reset();
      },
      reset: function () {
        d.reset.call(this);
        this._doReset();
      },
      update: function (e) {
        this._append(e);
        this._process();
        return this;
      },
      finalize: function (e) {
        if (e) {
          this._append(e);
        }
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (e) {
        return function (t, r) {
          return new e.init(r).finalize(t);
        };
      },
      _createHmacHelper: function (e) {
        return function (t, r) {
          return new p.HMAC.init(e, r).finalize(t);
        };
      },
    });
    var p = (a.algo = {});
    return a;
  })(Math);
