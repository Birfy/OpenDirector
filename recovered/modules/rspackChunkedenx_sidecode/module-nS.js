import $ from "./module-ai.js";
import { assert, encode, toArray } from "./module-ty_2_2.js";
const assert_1 = assert;
class tr {
  constructor(J, Z) {
    if (J instanceof tr) {
      return J;
    }
    if (!this._importDER(J, Z)) {
      assert_1(J.r && J.s, "Signature without r or s");
      this.r = new $(J.r, 16);
      this.s = new $(J.s, 16);
      if (J.recoveryParam === undefined) {
        this.recoveryParam = null;
      } else {
        this.recoveryParam = J.recoveryParam;
      }
    }
  }
  _importDER(J, Z) {
    J = toArray(J, Z);
    const Q = new tn();
    if (J[Q.place++] !== 48) {
      return false;
    }
    const te = ti(J, Q);
    if (te === false || te + Q.place !== J.length || J[Q.place++] !== 2) {
      return false;
    }
    const tr = ti(J, Q);
    if (tr === false) {
      return false;
    }
    let to = J.slice(Q.place, tr + Q.place);
    Q.place += tr;
    if (J[Q.place++] !== 2) {
      return false;
    }
    const ta = ti(J, Q);
    if (ta === false || J.length !== ta + Q.place) {
      return false;
    }
    let ts = J.slice(Q.place, ta + Q.place);
    if (to[0] === 0) {
      if (!(128 & to[1])) {
        return false;
      } else {
        to = to.slice(1);
      }
    }
    if (ts[0] === 0) {
      if (!(128 & ts[1])) {
        return false;
      } else {
        ts = ts.slice(1);
      }
    }
    this.r = new $(to);
    this.s = new $(ts);
    this.recoveryParam = null;
    return true;
  }
  toDER(J) {
    let Z = this.r.toArray();
    let Q = this.s.toArray();
    if (128 & Z[0]) {
      Z = [0].concat(Z);
    }
    if (128 & Q[0]) {
      Q = [0].concat(Q);
    }
    Z = to(Z);
    for (Q = to(Q); !Q[0] && !(128 & Q[1]);) {
      Q = Q.slice(1);
    }
    let $ = [2];
    ta($, Z.length);
    ($ = $.concat(Z)).push(2);
    ta($, Q.length);
    const te = $.concat(Q);
    let tr = [48];
    ta(tr, te.length);
    tr = tr.concat(te);
    return encode(tr, J);
  }
}
function tn() {
  this.place = 0;
}
function ti(J, Z) {
  const Q = J[Z.place++];
  if (!(128 & Q)) {
    return Q;
  }
  const $ = 15 & Q;
  if ($ === 0 || $ > 4) {
    return false;
  }
  let tt = 0;
  for (var te = 0, tr = Z.place; te < $; te++, tr++) {
    tt <<= 8;
    tt |= J[tr];
    tt >>>= 0;
  }
  return !(tt <= 127) && ((Z.place = tr), tt);
}
function to(J) {
  for (var Z = 0, Q = J.length - 1; !J[Z] && !(128 & J[Z + 1]) && Z < Q;) {
    Z++;
  }
  if (Z === 0) {
    return J;
  }
  return J.slice(Z);
}
function ta(J, Z) {
  if (Z < 128) {
    return void J.push(Z);
  }
  let Q = 1 + ((Math.log(Z) / Math.LN2) >>> 3);
  for (J.push(128 | Q); --Q;) {
    J.push((Z >>> (Q << 3)) & 255);
  }
  J.push(Z);
}
export default tr;
