import $ from "./module-qs_2_2.js";
import tt from "./module-ai.js";
export default tl;
tl.simpleSieve = th;
tl.fermatTest = td;
var te = new tt(24);
var tr = new (require("./module-dD.js"))();
var tn = new tt(1);
var ti = new tt(2);
var to = new tt(5);
new tt(16);
new tt(8);
var ta = new tt(10);
var ts = new tt(3);
new tt(7);
var tf = new tt(11);
var tu = new tt(4);
new tt(12);
var tc = null;
function th(J) {
  for (
    let Z = (() => {
        if (tc !== null) {
          return tc;
        }
        const J = [];
        J[0] = 2;
        let Z = 1;
        for (let Q = 3; Q < 1048576; Q += 2) {
          for (
            var $ = Math.ceil(Math.sqrt(Q)), tt = 0;
            tt < Z && J[tt] <= $ && Q % J[tt] != 0;
            tt++
          );
          if (!(Z !== tt && J[tt] <= $)) {
            J[Z++] = Q;
          }
        }
        tc = J;
        return J;
      })(),
      Q = 0;
    Q < Z.length;
    Q++
  ) {
    if (J.modn(Z[Q]) === 0) {
      if (J.cmpn(Z[Q]) !== 0) {
        return false;
      } else {
        break;
      }
    }
  }
  return true;
}
function td(J) {
  const Z = tt.mont(J);
  return ti.toRed(Z).redPow(J.subn(1)).fromRed().cmpn(1) === 0;
}
function tl(J, Z) {
  let Q;
  let tc;
  if (J < 16) {
    if (Z === 2 || Z === 5) {
      return new tt([140, 123]);
    } else {
      return new tt([140, 39]);
    }
  }
  for (Z = new tt(Z); ;) {
    for (Q = new tt($(Math.ceil(J / 8))); Q.bitLength() > J;) {
      Q.ishrn(1);
    }
    if (Q.isEven()) {
      Q.iadd(tn);
    }
    if (!Q.testn(1)) {
      Q.iadd(ti);
    }
    if (Z.cmp(ti)) {
      if (!Z.cmp(to)) {
        while (Q.mod(ta).cmp(ts)) {
          Q.iadd(tu);
        }
      }
    } else {
      while (Q.mod(te).cmp(tf)) {
        Q.iadd(tu);
      }
    }
    if (
      th((tc = Q.shrn(1))) &&
      th(Q) &&
      td(tc) &&
      td(Q) &&
      tr.test(tc) &&
      tr.test(Q)
    ) {
      return Q;
    }
  }
}
