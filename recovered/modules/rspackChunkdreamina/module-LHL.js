import "./module-Ow2.js";
let i;
let s;
let a;
let n;
let c;
let o;
let f;
let x;
let h;
let l;
let d;
let mode;
let padding;
let _;
let format;
let v;
let kdf;
let b;
i = require("./module-kV_2.js");
export default void (
  i.lib.Cipher ||
  ((a = (s = i.lib).Base),
  (n = s.WordArray),
  (c = s.BufferedBlockAlgorithm),
  (o = i.enc).Utf8,
  (f = o.Base64),
  (x = i.algo.EvpKDF),
  (h = s.Cipher =
    c.extend({
      cfg: a.extend(),
      createEncryptor: function (e, t) {
        return this.create(this._ENC_XFORM_MODE, e, t);
      },
      createDecryptor: function (e, t) {
        return this.create(this._DEC_XFORM_MODE, e, t);
      },
      init: function (e, t, r) {
        this.cfg = this.cfg.extend(r);
        this._xformMode = e;
        this._key = t;
        this.reset();
      },
      reset: function () {
        c.reset.call(this);
        this._doReset();
      },
      process: function (e) {
        this._append(e);
        return this._process();
      },
      finalize: function (e) {
        if (e) {
          this._append(e);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: (() => {
        function e(e) {
          if (typeof e === "string") {
            return b;
          }
          return v;
        }
        return function (t) {
          return {
            encrypt: function (r, i, s) {
              return e(i).encrypt(t, r, i, s);
            },
            decrypt: function (r, i, s) {
              return e(i).decrypt(t, r, i, s);
            },
          };
        };
      })(),
    })),
  (s.StreamCipher = h.extend({
    _doFinalize: function () {
      return this._process(true);
    },
    blockSize: 1,
  })),
  (l = i.mode = {}),
  (d = s.BlockCipherMode =
    a.extend({
      createEncryptor: function (e, t) {
        return this.Encryptor.create(e, t);
      },
      createDecryptor: function (e, t) {
        return this.Decryptor.create(e, t);
      },
      init: function (e, t) {
        this._cipher = e;
        this._iv = t;
      },
    })),
  (mode = l.CBC =
    (() => {
      const e = d.extend();
      function t(e, t, r) {
        let i;
        const _iv = this._iv;
        if (_iv) {
          i = _iv;
          this._iv = undefined;
        } else {
          i = this._prevBlock;
        }
        for (let a = 0; a < r; a++) {
          e[t + a] ^= i[a];
        }
      }
      e.Encryptor = e.extend({
        processBlock: function (e, r) {
          const _cipher = this._cipher;
          const i_blockSize = _cipher.blockSize;
          t.call(this, e, r, i_blockSize);
          _cipher.encryptBlock(e, r);
          this._prevBlock = e.slice(r, r + i_blockSize);
        },
      });
      e.Decryptor = e.extend({
        processBlock: function (e, r) {
          const _cipher = this._cipher;
          const i_blockSize = _cipher.blockSize;
          const a = e.slice(r, r + i_blockSize);
          _cipher.decryptBlock(e, r);
          t.call(this, e, r, i_blockSize);
          this._prevBlock = a;
        },
      });
      return e;
    })()),
  (padding = (i.pad = {}).Pkcs7 =
    {
      pad: function (e, t) {
        const r = 4 * t;
        for (
          var i = r - (e.sigBytes % r),
            s = (i << 24) | (i << 16) | (i << 8) | i,
            a = [],
            c = 0;
          c < i;
          c += 4
        ) {
          a.push(s);
        }
        const o = n.create(a, i);
        e.concat(o);
      },
      unpad: function (e) {
        const t = 255 & e.words[(e.sigBytes - 1) >>> 2];
        e.sigBytes -= t;
      },
    }),
  (s.BlockCipher = h.extend({
    cfg: h.cfg.extend({
      mode,
      padding,
    }),
    reset: function () {
      h.reset.call(this);
      let e;
      const cfg = this.cfg;
      const r = cfg.iv;
      const t_mode = cfg.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        e = t_mode.createEncryptor;
      } else {
        e = t_mode.createDecryptor;
        this._minBufferSize = 1;
      }
      if (this._mode && this._mode.__creator == e) {
        this._mode.init(this, r && r.words);
      } else {
        this._mode = e.call(t_mode, this, r && r.words);
        this._mode.__creator = e;
      }
    },
    _doProcessBlock: function (e, t) {
      this._mode.processBlock(e, t);
    },
    _doFinalize: function () {
      let e;
      const padding = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        padding.pad(this._data, this.blockSize);
        e = this._process(true);
      } else {
        e = this._process(true);
        padding.unpad(e);
      }
      return e;
    },
    blockSize: 4,
  })),
  (_ = s.CipherParams =
    a.extend({
      init: function (e) {
        this.mixIn(e);
      },
      toString: function (e) {
        return (e || this.formatter).stringify(this);
      },
    })),
  (format = (i.format = {}).OpenSSL =
    {
      stringify: function (e) {
        const e_ciphertext = e.ciphertext;
        const e_salt = e.salt;
        return (
          e_salt
            ? n
                .create([1398893684, 1701076831])
                .concat(e_salt)
                .concat(e_ciphertext)
            : e_ciphertext
        ).toString(f);
      },
      parse: function (e) {
        let t;
        const r = f.parse(e);
        const r_words = r.words;
        if (r_words[0] == 1398893684 && r_words[1] == 1701076831) {
          t = n.create(r_words.slice(2, 4));
          r_words.splice(0, 4);
          r.sigBytes -= 16;
        }
        return _.create({
          ciphertext: r,
          salt: t,
        });
      },
    }),
  (v = s.SerializableCipher =
    a.extend({
      cfg: a.extend({
        format,
      }),
      encrypt: function (algorithm, t, r, i) {
        i = this.cfg.extend(i);
        const s = algorithm.createEncryptor(r, i);
        const ciphertext = s.finalize(t);
        const s_cfg = s.cfg;
        return _.create({
          ciphertext,
          key: r,
          iv: s_cfg.iv,
          algorithm,
          mode: s_cfg.mode,
          padding: s_cfg.padding,
          blockSize: algorithm.blockSize,
          formatter: i.format,
        });
      },
      decrypt: function (e, t, r, i) {
        i = this.cfg.extend(i);
        t = this._parse(t, i.format);
        return e.createDecryptor(r, i).finalize(t.ciphertext);
      },
      _parse: function (e, t) {
        if (typeof e === "string") {
          return t.parse(e, this);
        }
        return e;
      },
    })),
  (kdf = (i.kdf = {}).OpenSSL =
    {
      execute: function (e, t, r, i) {
        if (!i) {
          i = n.random(8);
        }
        const s = x
          .create({
            keySize: t + r,
          })
          .compute(e, i);
        const iv = n.create(s.words.slice(t), 4 * r);
        s.sigBytes = 4 * t;
        return _.create({
          key: s,
          iv,
          salt: i,
        });
      },
    }),
  (b = s.PasswordBasedCipher =
    v.extend({
      cfg: v.cfg.extend({
        kdf,
      }),
      encrypt: function (e, t, r, i) {
        const s = (i = this.cfg.extend(i)).kdf.execute(r, e.keySize, e.ivSize);
        i.iv = s.iv;
        const a = v.encrypt.call(this, e, t, s.key, i);
        a.mixIn(s);
        return a;
      },
      decrypt: function (e, t, r, i) {
        i = this.cfg.extend(i);
        t = this._parse(t, i.format);
        const s = i.kdf.execute(r, e.keySize, e.ivSize, t.salt);
        i.iv = s.iv;
        return v.decrypt.call(this, e, t, s.key, i);
      },
    })))
);
