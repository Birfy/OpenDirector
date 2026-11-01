import $ from "Hs";
import ee from "./module-n7.js";
import { Buffer } from "./module-b58.js";
const er = [
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
const en = Array(160);
function ei() {
  this.init();
  this._w = en;
  ee.call(this, 128, 112);
}
function ea(Z, Q) {
  return (
    ((Z >>> 28) | (Q << 4)) ^ ((Q >>> 2) | (Z << 30)) ^ ((Q >>> 7) | (Z << 25))
  );
}
function eo(Z, Q) {
  return (
    ((Z >>> 14) | (Q << 18)) ^
    ((Z >>> 18) | (Q << 14)) ^
    ((Q >>> 9) | (Z << 23))
  );
}
function es(Z, Q) {
  return +(Z >>> 0 < Q >>> 0);
}
$(ei, ee);
ei.prototype.init = function () {
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
ei.prototype._update = function (Z) {
  const Q = this._w;
  let X = 0 | this._ah;
  let $ = 0 | this._bh;
  let ee = 0 | this._ch;
  let et = 0 | this._dh;
  let en = 0 | this._eh;
  let ei = 0 | this._fh;
  let ef = 0 | this._gh;
  let eu = 0 | this._hh;
  let ec = 0 | this._al;
  let eh = 0 | this._bl;
  let el = 0 | this._cl;
  let ed = 0 | this._dl;
  let ep = 0 | this._el;
  let eb = 0 | this._fl;
  let eg = 0 | this._gl;
  let ey = 0 | this._hl;
  for (var ev = 0; ev < 32; ev += 2) {
    Q[ev] = Z.readInt32BE(4 * ev);
    Q[ev + 1] = Z.readInt32BE(4 * ev + 4);
  }
  for (; ev < 160; ev += 2) {
    let e_;
    let ew;
    let em;
    let ex;
    let eS;
    let eE;
    let ek;
    let eT;
    let eR = Q[ev - 30];
    let eA = Q[ev - 30 + 1];
    const ej =
      (((e_ = eR) >>> 1) | ((ew = eA) << 31)) ^
      ((e_ >>> 8) | (ew << 24)) ^
      (e_ >>> 7);
    const eC =
      (((em = eA) >>> 1) | ((ex = eR) << 31)) ^
      ((em >>> 8) | (ex << 24)) ^
      ((em >>> 7) | (ex << 25));
    eR = Q[ev - 4];
    eA = Q[ev - 4 + 1];
    const eI =
      (((eS = eR) >>> 19) | ((eE = eA) << 13)) ^
      ((eE >>> 29) | (eS << 3)) ^
      (eS >>> 6);
    const eM =
      (((ek = eA) >>> 19) | ((eT = eR) << 13)) ^
      ((eT >>> 29) | (ek << 3)) ^
      ((ek >>> 6) | (eT << 26));
    const eO = Q[ev - 14];
    const eP = Q[ev - 14 + 1];
    const eB = Q[ev - 32];
    const eL = Q[ev - 32 + 1];
    var eN = (eC + eP) | 0;
    var eD = (ej + eO + es(eN, eC)) | 0;
    eD =
      ((eD = (eD + eI + es((eN = (eN + eM) | 0), eM)) | 0) +
        eB +
        es((eN = (eN + eL) | 0), eL)) |
      0;
    Q[ev] = eD;
    Q[ev + 1] = eN;
  }
  for (let eU = 0; eU < 160; eU += 2) {
    eD = Q[eU];
    eN = Q[eU + 1];
    let eq;
    let eF;
    let eK;
    let eW;
    let eH;
    let eV;
    let ez;
    let eG;
    let eY;
    let eJ;
    const eZ = ((eq = X) & (eF = $)) | (ee & (eq | eF));
    const eQ = ((eK = ec) & (eW = eh)) | (el & (eK | eW));
    const eX = ea(X, ec);
    const e$ = ea(ec, X);
    const e0 = eo(en, ep);
    const e1 = eo(ep, en);
    const e2 = er[eU];
    const e4 = er[eU + 1];
    eH = en;
    eV = ei;
    const e6 = (ez = ef) ^ (eH & (eV ^ ez));
    eG = ep;
    eY = eb;
    const e3 = (eJ = eg) ^ (eG & (eY ^ eJ));
    let e8 = (ey + e1) | 0;
    let e5 = (eu + e0 + es(e8, ey)) | 0;
    e5 =
      ((e5 =
        ((e5 = (e5 + e6 + es((e8 = (e8 + e3) | 0), e3)) | 0) +
          e2 +
          es((e8 = (e8 + e4) | 0), e4)) |
        0) +
        eD +
        es((e8 = (e8 + eN) | 0), eN)) |
      0;
    const e7 = (e$ + eQ) | 0;
    const e9 = (eX + eZ + es(e7, e$)) | 0;
    eu = ef;
    ey = eg;
    ef = ei;
    eg = eb;
    ei = en;
    eb = ep;
    en = (et + e5 + es((ep = (ed + e8) | 0), ed)) | 0;
    et = ee;
    ed = el;
    ee = $;
    el = eh;
    $ = X;
    eh = ec;
    X = (e5 + e9 + es((ec = (e8 + e7) | 0), e8)) | 0;
  }
  this._al = (this._al + ec) | 0;
  this._bl = (this._bl + eh) | 0;
  this._cl = (this._cl + el) | 0;
  this._dl = (this._dl + ed) | 0;
  this._el = (this._el + ep) | 0;
  this._fl = (this._fl + eb) | 0;
  this._gl = (this._gl + eg) | 0;
  this._hl = (this._hl + ey) | 0;
  this._ah = (this._ah + X + es(this._al, ec)) | 0;
  this._bh = (this._bh + $ + es(this._bl, eh)) | 0;
  this._ch = (this._ch + ee + es(this._cl, el)) | 0;
  this._dh = (this._dh + et + es(this._dl, ed)) | 0;
  this._eh = (this._eh + en + es(this._el, ep)) | 0;
  this._fh = (this._fh + ei + es(this._fl, eb)) | 0;
  this._gh = (this._gh + ef + es(this._gl, eg)) | 0;
  this._hh = (this._hh + eu + es(this._hl, ey)) | 0;
};
ei.prototype._hash = function () {
  const Z = Buffer.allocUnsafe(64);
  function Q(Q, X, $) {
    Z.writeInt32BE(Q, $);
    Z.writeInt32BE(X, $ + 4);
  }
  Q(this._ah, this._al, 0);
  Q(this._bh, this._bl, 8);
  Q(this._ch, this._cl, 16);
  Q(this._dh, this._dl, 24);
  Q(this._eh, this._el, 32);
  Q(this._fh, this._fl, 40);
  Q(this._gh, this._gl, 48);
  Q(this._hh, this._hl, 56);
  return Z;
};
export default ei;
