import "./module-im3.js";
let i;
i = require("./module-kV_2.js");
(() => {
  const Hasher = i.lib.Hasher;
  const i_x64 = i.x64;
  const t_Word = i_x64.Word;
  const t_WordArray = i_x64.WordArray;
  const i_algo = i.algo;
  function n() {
    return t_Word.create.apply(t_Word, arguments);
  }
  const c = [
    n(1116352408, 3609767458),
    n(1899447441, 602891725),
    n(3049323471, 3964484399),
    n(3921009573, 2173295548),
    n(961987163, 4081628472),
    n(1508970993, 3053834265),
    n(2453635748, 2937671579),
    n(2870763221, 3664609560),
    n(3624381080, 2734883394),
    n(310598401, 1164996542),
    n(607225278, 1323610764),
    n(1426881987, 3590304994),
    n(1925078388, 4068182383),
    n(2162078206, 991336113),
    n(2614888103, 633803317),
    n(3248222580, 3479774868),
    n(3835390401, 2666613458),
    n(4022224774, 944711139),
    n(264347078, 2341262773),
    n(604807628, 2007800933),
    n(770255983, 1495990901),
    n(1249150122, 1856431235),
    n(1555081692, 3175218132),
    n(1996064986, 2198950837),
    n(2554220882, 3999719339),
    n(2821834349, 766784016),
    n(2952996808, 2566594879),
    n(3210313671, 3203337956),
    n(3336571891, 1034457026),
    n(3584528711, 2466948901),
    n(113926993, 3758326383),
    n(338241895, 168717936),
    n(666307205, 1188179964),
    n(773529912, 1546045734),
    n(1294757372, 1522805485),
    n(1396182291, 2643833823),
    n(1695183700, 2343527390),
    n(1986661051, 1014477480),
    n(2177026350, 1206759142),
    n(2456956037, 344077627),
    n(2730485921, 1290863460),
    n(2820302411, 3158454273),
    n(3259730800, 3505952657),
    n(3345764771, 106217008),
    n(3516065817, 3606008344),
    n(3600352804, 1432725776),
    n(4094571909, 1467031594),
    n(275423344, 851169720),
    n(430227734, 3100823752),
    n(506948616, 1363258195),
    n(659060556, 3750685593),
    n(883997877, 3785050280),
    n(958139571, 3318307427),
    n(1322822218, 3812723403),
    n(1537002063, 2003034995),
    n(1747873779, 3602036899),
    n(1955562222, 1575990012),
    n(2024104815, 1125592928),
    n(2227730452, 2716904306),
    n(2361852424, 442776044),
    n(2428436474, 593698344),
    n(2756734187, 3733110249),
    n(3204031479, 2999351573),
    n(3329325298, 3815920427),
    n(3391569614, 3928383900),
    n(3515267271, 566280711),
    n(3940187606, 3454069534),
    n(4118630271, 4000239992),
    n(116418474, 1914138554),
    n(174292421, 2731055270),
    n(289380356, 3203993006),
    n(460393269, 320620315),
    n(685471733, 587496836),
    n(852142971, 1086792851),
    n(1017036298, 365543100),
    n(1126000580, 2618297676),
    n(1288033470, 3409855158),
    n(1501505948, 4234509866),
    n(1607167915, 987167468),
    n(1816402316, 1246189591),
  ];
  const o = [];
  for (let f = 0; f < 80; f++) {
    o[f] = n();
  }
  const x = (i_algo.SHA512 = Hasher.extend({
    _doReset: function () {
      this._hash = new t_WordArray.init([
        new t_Word.init(1779033703, 4089235720),
        new t_Word.init(3144134277, 2227873595),
        new t_Word.init(1013904242, 4271175723),
        new t_Word.init(2773480762, 1595750129),
        new t_Word.init(1359893119, 2917565137),
        new t_Word.init(2600822924, 725511199),
        new t_Word.init(528734635, 4215389547),
        new t_Word.init(1541459225, 327033209),
      ]);
    },
    _doProcessBlock: function (e, t) {
      const words = this._hash.words;
      const i = words[0];
      const s = words[1];
      const a = words[2];
      const n = words[3];
      const f = words[4];
      const x = words[5];
      const h = words[6];
      const l = words[7];
      const i_high = i.high;
      let i_low = i.low;
      const s_high = s.high;
      let s_low = s.low;
      const a_high = a.high;
      let a_low = a.low;
      const n_high = n.high;
      let n_low = n.low;
      const f_high = f.high;
      let f_low = f.low;
      const x_high = x.high;
      let x_low = x.low;
      const h_high = h.high;
      let h_low = h.low;
      const l_high = l.high;
      let l_low = l.low;
      let D = i_high;
      let z = i_low;
      let E = s_high;
      let R = s_low;
      let O = a_high;
      let M = a_low;
      let P = n_high;
      let L = n_low;
      let F = f_high;
      let V = f_low;
      let I = x_high;
      let N = x_low;
      let U = h_high;
      let j = h_low;
      let K = l_high;
      let G = l_low;
      for (let W = 0; W < 80; W++) {
        let X;
        let T;
        const q = o[W];
        if (W < 16) {
          T = q.high = 0 | e[t + 2 * W];
          X = q.low = 0 | e[t + 2 * W + 1];
        } else {
          const Z = o[W - 15];
          const Y = Z.high;
          const Q = Z.low;
          const J =
            ((Y >>> 1) | (Q << 31)) ^ ((Y >>> 8) | (Q << 24)) ^ (Y >>> 7);
          const $ =
            ((Q >>> 1) | (Y << 31)) ^
            ((Q >>> 8) | (Y << 24)) ^
            ((Q >>> 7) | (Y << 25));
          const ee = o[W - 2];
          const et = ee.high;
          const er = ee.low;
          const ei =
            ((et >>> 19) | (er << 13)) ^ ((et << 3) | (er >>> 29)) ^ (et >>> 6);
          const es =
            ((er >>> 19) | (et << 13)) ^
            ((er << 3) | (et >>> 29)) ^
            ((er >>> 6) | (et << 26));
          const ea = o[W - 7];
          const en = ea.high;
          const ec = ea.low;
          const eo = o[W - 16];
          const ef = eo.high;
          const ex = eo.low;
          T = J + en + +((X = $ + ec) >>> 0 < $ >>> 0);
          X += es;
          T = T + ei + +(X >>> 0 < es >>> 0);
          X += ex;
          q.high = T = T + ef + +(X >>> 0 < ex >>> 0);
          q.low = X;
        }
        const eh = (F & I) ^ (~F & U);
        const el = (V & N) ^ (~V & j);
        const ed = (D & E) ^ (D & O) ^ (E & O);
        const ep = (z & R) ^ (z & M) ^ (R & M);
        const eu =
          ((D >>> 28) | (z << 4)) ^
          ((D << 30) | (z >>> 2)) ^
          ((D << 25) | (z >>> 7));
        const e_ =
          ((z >>> 28) | (D << 4)) ^
          ((z << 30) | (D >>> 2)) ^
          ((z << 25) | (D >>> 7));
        const ey =
          ((F >>> 14) | (V << 18)) ^
          ((F >>> 18) | (V << 14)) ^
          ((F << 23) | (V >>> 9));
        const ev =
          ((V >>> 14) | (F << 18)) ^
          ((V >>> 18) | (F << 14)) ^
          ((V << 23) | (F >>> 9));
        const eg = c[W];
        const eb = eg.high;
        const ek = eg.low;
        var eB = G + ev;
        var ew = K + ey + +(eB >>> 0 < G >>> 0);
        var eB = eB + el;
        var ew = ew + eh + +(eB >>> 0 < el >>> 0);
        var eB = eB + ek;
        var ew = ew + eb + +(eB >>> 0 < ek >>> 0);
        var eB = eB + X;
        var ew = ew + T + +(eB >>> 0 < X >>> 0);
        const em = e_ + ep;
        const eS = eu + ed + +(em >>> 0 < e_ >>> 0);
        K = U;
        G = j;
        U = I;
        j = N;
        I = F;
        N = V;
        F = (P + ew + +((V = (L + eB) | 0) >>> 0 < L >>> 0)) | 0;
        P = O;
        L = M;
        O = E;
        M = R;
        E = D;
        R = z;
        D = (ew + eS + +((z = (eB + em) | 0) >>> 0 < eB >>> 0)) | 0;
      }
      i_low = i.low = i_low + z;
      i.high = i_high + D + +(i_low >>> 0 < z >>> 0);
      s_low = s.low = s_low + R;
      s.high = s_high + E + +(s_low >>> 0 < R >>> 0);
      a_low = a.low = a_low + M;
      a.high = a_high + O + +(a_low >>> 0 < M >>> 0);
      n_low = n.low = n_low + L;
      n.high = n_high + P + +(n_low >>> 0 < L >>> 0);
      f_low = f.low = f_low + V;
      f.high = f_high + F + +(f_low >>> 0 < V >>> 0);
      x_low = x.low = x_low + N;
      x.high = x_high + I + +(x_low >>> 0 < N >>> 0);
      h_low = h.low = h_low + j;
      h.high = h_high + U + +(h_low >>> 0 < j >>> 0);
      l_low = l.low = l_low + G;
      l.high = l_high + K + +(l_low >>> 0 < G >>> 0);
    },
    _doFinalize: function () {
      const _data = this._data;
      const e_words = _data.words;
      const r = 8 * this._nDataBytes;
      const i = 8 * _data.sigBytes;
      e_words[i >>> 5] |= 128 << (24 - (i % 32));
      e_words[(((i + 128) >>> 10) << 5) + 30] = Math.floor(r / 4294967296);
      e_words[(((i + 128) >>> 10) << 5) + 31] = r;
      _data.sigBytes = 4 * e_words.length;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      const t = Hasher.clone.call(this);
      t._hash = this._hash.clone();
      return t;
    },
    blockSize: 32,
  }));
  i.SHA512 = Hasher._createHelper(x);
  i.HmacSHA512 = Hasher._createHmacHelper(x);
})();
export default i.SHA512;
