import $ from "./module-ULy.js";
import tt from "./module-yC_3.js";
import { Buffer } from "./module-s6_2_2.js";
const tr = [
  1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
  3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
  2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
  310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
  1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
  3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
  264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
  1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
  2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
  3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
  113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912,
  1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700,
  2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037,
  344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
  3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
  1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
  3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
  3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
  2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
  1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474,
  593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298,
  3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606,
  3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421,
  2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836,
  852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
  1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468,
  1816402316, 1246189591,
];
const tn = Array(160);
function ti() {
  this.init();
  this._w = tn;
  tt.call(this, 128, 112);
}
function to(J, Z) {
  return (
    ((J >>> 28) | (Z << 4)) ^ ((Z >>> 2) | (J << 30)) ^ ((Z >>> 7) | (J << 25))
  );
}
function ta(J, Z) {
  return (
    ((J >>> 14) | (Z << 18)) ^
    ((J >>> 18) | (Z << 14)) ^
    ((Z >>> 9) | (J << 23))
  );
}
function ts(J, Z) {
  return +(J >>> 0 < Z >>> 0);
}
$(ti, tt);
ti.prototype.init = function () {
  this._ah = 1779033703;
  this._bh = 3144134277;
  this._ch = 1013904242;
  this._dh = 2773480762;
  this._eh = 1359893119;
  this._fh = 2600822924;
  this._gh = 528734635;
  this._hh = 1541459225;
  this._al = 4089235720;
  this._bl = 2227873595;
  this._cl = 4271175723;
  this._dl = 1595750129;
  this._el = 2917565137;
  this._fl = 725511199;
  this._gl = 4215389547;
  this._hl = 327033209;
  return this;
};
ti.prototype._update = function (J) {
  const Z = this._w;
  let Q = 0 | this._ah;
  let $ = 0 | this._bh;
  let tt = 0 | this._ch;
  let te = 0 | this._dh;
  let tn = 0 | this._eh;
  let ti = 0 | this._fh;
  let tf = 0 | this._gh;
  let tu = 0 | this._hh;
  let tc = 0 | this._al;
  let th = 0 | this._bl;
  let td = 0 | this._cl;
  let tl = 0 | this._dl;
  let tp = 0 | this._el;
  let tb = 0 | this._fl;
  let tv = 0 | this._gl;
  let tg = 0 | this._hl;
  for (var ty = 0; ty < 32; ty += 2) {
    Z[ty] = J.readInt32BE(4 * ty);
    Z[ty + 1] = J.readInt32BE(4 * ty + 4);
  }
  for (; ty < 160; ty += 2) {
    let tm;
    let tw;
    let tx;
    let t_;
    let tM;
    let tS;
    let tA;
    let tE;
    let tk = Z[ty - 30];
    let tR = Z[ty - 30 + 1];
    const tI =
      (((tm = tk) >>> 1) | ((tw = tR) << 31)) ^
      ((tm >>> 8) | (tw << 24)) ^
      (tm >>> 7);
    const tO =
      (((tx = tR) >>> 1) | ((t_ = tk) << 31)) ^
      ((tx >>> 8) | (t_ << 24)) ^
      ((tx >>> 7) | (t_ << 25));
    tk = Z[ty - 4];
    tR = Z[ty - 4 + 1];
    const tT =
      (((tM = tk) >>> 19) | ((tS = tR) << 13)) ^
      ((tS >>> 29) | (tM << 3)) ^
      (tM >>> 6);
    const tB =
      (((tA = tR) >>> 19) | ((tE = tk) << 13)) ^
      ((tE >>> 29) | (tA << 3)) ^
      ((tA >>> 6) | (tE << 26));
    const tj = Z[ty - 14];
    const tC = Z[ty - 14 + 1];
    const tP = Z[ty - 32];
    const tL = Z[ty - 32 + 1];
    var tN = (tO + tC) | 0;
    var tU = (tI + tj + ts(tN, tO)) | 0;
    tU =
      ((tU = (tU + tT + ts((tN = (tN + tB) | 0), tB)) | 0) +
        tP +
        ts((tN = (tN + tL) | 0), tL)) |
      0;
    Z[ty] = tU;
    Z[ty + 1] = tN;
  }
  for (let tD = 0; tD < 160; tD += 2) {
    tU = Z[tD];
    tN = Z[tD + 1];
    let tF;
    let tq;
    let tz;
    let tH;
    let tV;
    let tW;
    let tK;
    let tY;
    let tX;
    let tG;
    const tJ = ((tF = Q) & (tq = $)) | (tt & (tF | tq));
    const tZ = ((tz = tc) & (tH = th)) | (td & (tz | tH));
    const tQ = to(Q, tc);
    const t$ = to(tc, Q);
    const t0 = ta(tn, tp);
    const t1 = ta(tp, tn);
    const t2 = tr[tD];
    const t6 = tr[tD + 1];
    tV = tn;
    tW = ti;
    const t3 = (tK = tf) ^ (tV & (tW ^ tK));
    tY = tp;
    tX = tb;
    const t4 = (tG = tv) ^ (tY & (tX ^ tG));
    let t8 = (tg + t1) | 0;
    let t5 = (tu + t0 + ts(t8, tg)) | 0;
    t5 =
      ((t5 =
        ((t5 = (t5 + t3 + ts((t8 = (t8 + t4) | 0), t4)) | 0) +
          t2 +
          ts((t8 = (t8 + t6) | 0), t6)) |
        0) +
        tU +
        ts((t8 = (t8 + tN) | 0), tN)) |
      0;
    const t9 = (t$ + tZ) | 0;
    const t7 = (tQ + tJ + ts(t9, t$)) | 0;
    tu = tf;
    tg = tv;
    tf = ti;
    tv = tb;
    ti = tn;
    tb = tp;
    tn = (te + t5 + ts((tp = (tl + t8) | 0), tl)) | 0;
    te = tt;
    tl = td;
    tt = $;
    td = th;
    $ = Q;
    th = tc;
    Q = (t5 + t7 + ts((tc = (t8 + t9) | 0), t8)) | 0;
  }
  this._al = (this._al + tc) | 0;
  this._bl = (this._bl + th) | 0;
  this._cl = (this._cl + td) | 0;
  this._dl = (this._dl + tl) | 0;
  this._el = (this._el + tp) | 0;
  this._fl = (this._fl + tb) | 0;
  this._gl = (this._gl + tv) | 0;
  this._hl = (this._hl + tg) | 0;
  this._ah = (this._ah + Q + ts(this._al, tc)) | 0;
  this._bh = (this._bh + $ + ts(this._bl, th)) | 0;
  this._ch = (this._ch + tt + ts(this._cl, td)) | 0;
  this._dh = (this._dh + te + ts(this._dl, tl)) | 0;
  this._eh = (this._eh + tn + ts(this._el, tp)) | 0;
  this._fh = (this._fh + ti + ts(this._fl, tb)) | 0;
  this._gh = (this._gh + tf + ts(this._gl, tv)) | 0;
  this._hh = (this._hh + tu + ts(this._hl, tg)) | 0;
};
ti.prototype._hash = function () {
  const J = Buffer.allocUnsafe(64);
  function Z(Z, Q, $) {
    J.writeInt32BE(Z, $);
    J.writeInt32BE(Q, $ + 4);
  }
  Z(this._ah, this._al, 0);
  Z(this._bh, this._bl, 8);
  Z(this._ch, this._cl, 16);
  Z(this._dh, this._dl, 24);
  Z(this._eh, this._el, 32);
  Z(this._fh, this._fl, 40);
  Z(this._gh, this._gl, 48);
  Z(this._hh, this._hl, 56);
  return J;
};
export default ti;
