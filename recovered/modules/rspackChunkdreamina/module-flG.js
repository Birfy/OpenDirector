export default ((e) => {
  const WordArray = e.lib.WordArray;
  const e_enc = e.enc;
  function i(e) {
    return ((e << 8) & 4278255360) | ((e >>> 8) & 16711935);
  }
  e_enc.Utf16 = e_enc.Utf16BE = {
    stringify: function (e) {
      const e_words = e.words;
      for (var r = e.sigBytes, i = [], s = 0; s < r; s += 2) {
        const a = (e_words[s >>> 2] >>> (16 - (s % 4) * 8)) & 65535;
        i.push(String.fromCharCode(a));
      }
      return i.join("");
    },
    parse: function (e) {
      for (var r = e.length, i = [], s = 0; s < r; s++) {
        i[s >>> 1] |= e.charCodeAt(s) << (16 - (s % 2) * 16);
      }
      return WordArray.create(i, 2 * r);
    },
  };
  e_enc.Utf16LE = {
    stringify: function (e) {
      const e_words = e.words;
      for (var r = e.sigBytes, s = [], a = 0; a < r; a += 2) {
        const n = i((e_words[a >>> 2] >>> (16 - (a % 4) * 8)) & 65535);
        s.push(String.fromCharCode(n));
      }
      return s.join("");
    },
    parse: function (e) {
      for (var r = e.length, s = [], a = 0; a < r; a++) {
        s[a >>> 1] |= i(e.charCodeAt(a) << (16 - (a % 2) * 16));
      }
      return WordArray.create(s, 2 * r);
    },
  };
  return e.enc.Utf16;
})(require("./module-kV_2.js"));
