import i from "Wt";
import f from "./module-cGB.js";
export default v;
v.simpleSieve = p;
v.fermatTest = m;
var n = new f(24);
var a = new (require("sIO"))();
var s = new f(1);
var o = new f(2);
var h = new f(5);
new f(16);
new f(8);
var d = new f(10);
var c = new f(3);
new f(7);
var u = new f(11);
var l = new f(4);
new f(12);
var b = null;
function p(t) {
  for (
    let e = (() => {
        if (b !== null) {
          return b;
        }
        const t = [];
        t[0] = 2;
        let e = 1;
        for (let r = 3; r < 1048576; r += 2) {
          for (
            var i = Math.ceil(Math.sqrt(r)), f = 0;
            f < e && t[f] <= i && r % t[f] != 0;
            f++
          );
          if (!(e !== f && t[f] <= i)) {
            t[e++] = r;
          }
        }
        b = t;
        return t;
      })(),
      r = 0;
    r < e.length;
    r++
  ) {
    if (t.modn(e[r]) === 0) {
      if (t.cmpn(e[r]) !== 0) {
        return false;
      } else {
        break;
      }
    }
  }
  return true;
}
function m(t) {
  const e = f.mont(t);
  return o.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1) === 0;
}
function v(t, e) {
  let r;
  let b;
  if (t < 16) {
    if (e === 2 || e === 5) {
      return new f([140, 123]);
    } else {
      return new f([140, 39]);
    }
  }
  for (e = new f(e); ;) {
    for (r = new f(i(Math.ceil(t / 8))); r.bitLength() > t;) {
      r.ishrn(1);
    }
    if (r.isEven()) {
      r.iadd(s);
    }
    if (!r.testn(1)) {
      r.iadd(o);
    }
    if (e.cmp(o)) {
      if (!e.cmp(h)) {
        while (r.mod(d).cmp(c)) {
          r.iadd(l);
        }
      }
    } else {
      while (r.mod(n).cmp(u)) {
        r.iadd(l);
      }
    }
    if (p((b = r.shrn(1))) && p(r) && m(b) && m(r) && a.test(b) && a.test(r)) {
      return r;
    }
  }
}
