let i;
let s;
s = (i = require("./module-kV_2.js")).lib.WordArray;
i.enc.Base64url = {
  stringify: function (e, t = true) {
    const e_words = e.words;
    const e_sigBytes = e.sigBytes;
    const s = t ? this._safe_map : this._map;
    e.clamp();
    const a = [];
    for (let n = 0; n < e_sigBytes; n += 3) {
      const c =
        (((e_words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) << 16) |
        (((e_words[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) & 255) << 8) |
        ((e_words[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255);
      for (let o = 0; o < 4 && n + 0.75 * o < e_sigBytes; o++) {
        a.push(s.charAt((c >>> (6 * (3 - o))) & 63));
      }
    }
    const f = s.charAt(64);
    if (f) {
      while (a.length % 4) {
        a.push(f);
      }
    }
    return a.join("");
  },
  parse: function (e, t = true) {
    let e_length = e.length;
    const i = t ? this._safe_map : this._map;
    let _reverseMap = this._reverseMap;
    if (!_reverseMap) {
      _reverseMap = this._reverseMap = [];
      for (let n = 0; n < i.length; n++) {
        _reverseMap[i.charCodeAt(n)] = n;
      }
    }
    const c = i.charAt(64);
    if (c) {
      const o = e.indexOf(c);
      if (o !== -1) {
        e_length = o;
      }
    }
    const f = e;
    for (var x = e_length, h = _reverseMap, l = [], d = 0, p = 0; p < x; p++) {
      if (p % 4) {
        const u =
          (h[f.charCodeAt(p - 1)] << ((p % 4) * 2)) |
          (h[f.charCodeAt(p)] >>> (6 - (p % 4) * 2));
        l[d >>> 2] |= u << (24 - (d % 4) * 8);
        d++;
      }
    }
    return s.create(l, d);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
};
export default i.enc.Base64url;
