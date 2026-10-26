let i;
let s;
s = (i = require("./module-kV_2.js")).lib.WordArray;
i.enc.Base64 = {
  stringify: function (e) {
    const e_words = e.words;
    const e_sigBytes = e.sigBytes;
    const _map = this._map;
    e.clamp();
    const s = [];
    for (let a = 0; a < e_sigBytes; a += 3) {
      const n =
        (((e_words[a >>> 2] >>> (24 - (a % 4) * 8)) & 255) << 16) |
        (((e_words[(a + 1) >>> 2] >>> (24 - ((a + 1) % 4) * 8)) & 255) << 8) |
        ((e_words[(a + 2) >>> 2] >>> (24 - ((a + 2) % 4) * 8)) & 255);
      for (let c = 0; c < 4 && a + 0.75 * c < e_sigBytes; c++) {
        s.push(_map.charAt((n >>> (6 * (3 - c))) & 63));
      }
    }
    const o = _map.charAt(64);
    if (o) {
      while (s.length % 4) {
        s.push(o);
      }
    }
    return s.join("");
  },
  parse: function (e) {
    let e_length = e.length;
    const _map = this._map;
    let _reverseMap = this._reverseMap;
    if (!_reverseMap) {
      _reverseMap = this._reverseMap = [];
      for (let a = 0; a < _map.length; a++) {
        _reverseMap[_map.charCodeAt(a)] = a;
      }
    }
    const n = _map.charAt(64);
    if (n) {
      const c = e.indexOf(n);
      if (c !== -1) {
        e_length = c;
      }
    }
    const o = e;
    for (var f = e_length, x = _reverseMap, h = [], l = 0, d = 0; d < f; d++) {
      if (d % 4) {
        const p =
          (x[o.charCodeAt(d - 1)] << ((d % 4) * 2)) |
          (x[o.charCodeAt(d)] >>> (6 - (d % 4) * 2));
        h[l >>> 2] |= p << (24 - (l % 4) * 8);
        l++;
      }
    }
    return s.create(h, l);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
};
export default i.enc.Base64;
