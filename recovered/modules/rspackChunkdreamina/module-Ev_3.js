let i;
let n = false;
let r = false;
let o = false;
let s = false;
let l = false;
let d = false;
let _ = false;
let u = false;
let c = false;
if (typeof navigator === "object") {
  n = (i = navigator.userAgent).indexOf("Windows") >= 0;
  s =
    (i.indexOf("Macintosh") >= 0 ||
      i.indexOf("iPad") >= 0 ||
      i.indexOf("iPhone") >= 0) &&
    !!navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 0;
  o = i.indexOf("Linux") >= 0;
  l = i.indexOf("Mobi") >= 0;
  d = i.indexOf("iPad") >= 0;
  r = !l && i.indexOf("Macintosh") >= 0;
  _ = /firefox/i.test(i);
  u = /chrome/i.test(i);
  c = /^((?!chrome|android).)*safari/i.test(i);
}
export var uF = n;
export var cX = r;
export var j9 = o;
export var un = s;
export var bh = d;
export var Fr = l;
export var H8 = u;
export var gm = _;
export var nr = c;
