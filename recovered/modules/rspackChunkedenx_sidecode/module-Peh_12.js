import $ from "./module-A_13.js";
import tt from "./module-r9_12.js";
import te from "./module-J_13.js";
import tr from "./module-YR_12.js";
import tn from "./module-O9_12.js";
import ti from "./module-M_2_12.js";
import to from "./module-Y_13.js";
import ta from "./module-y_2_12.js";
import ts from "./module-EV_13.js";
import tf from "./module-D_2_12.js";
import tu from "./module-ng_13.js";
import tc from "./module-F4_13.js";
import th from "./module-er_12.js";
import td from "./module-X_13.js";
import tl from "./module-zq_2_12.js";
import tp from "./module-eZ_12.js";
const te_JSON = te.JSON;
const te_Number = te.Number;
const te_SyntaxError = te.SyntaxError;
const ty = te_JSON && te_JSON.parse;
const tm = tr("Object", "keys");
const tx = tn("".charAt);
const t_ = tn("".slice);
const tM = tn(/./.exec);
const tS = tn([].push);
const tA = /^\d$/;
const tE = /^[1-9]$/;
const tk = /^(?:-|\d)$/;
const tR = /^[\t\n\r ]$/;
const tI = (J, Z) => {
  const Q = new tj((J = tu(J)), 0);
  const $ = Q.parse();
  const $_value = $.value;
  const te = Q.skip(tR, $.end);
  if (te < J.length) {
    throw te_SyntaxError(
      'Unexpected extra character: "' +
        tx(J, te) +
        '" after the parsed data at: ' +
        te,
    );
  }
  if (to(Z)) {
    return tO(
      {
        "": $_value,
      },
      "",
      Z,
      $,
    );
  }
  return $_value;
};
var tO = (J, Z, Q, $) => {
  let tt;
  let te;
  let tr;
  let tn;
  let to;
  const tu = J[Z];
  const th = $ && tu === $.value;
  const td =
    th && typeof $.source === "string"
      ? {
          source: $.source,
        }
      : {};
  if (ta(tu)) {
    const tl = ts(tu);
    const tp = th ? $.nodes : tl ? [] : {};
    if (tl) {
      tt = tp.length;
      tr = tc(tu);
      for (tn = 0; tn < tr; tn++) {
        tT(tu, tn, tO(tu, "" + tn, Q, tn < tt ? tp[tn] : undefined));
      }
    } else {
      tr = tc((te = tm(tu)));
      for (tn = 0; tn < tr; tn++) {
        tT(tu, (to = te[tn]), tO(tu, to, Q, tf(tp, to) ? tp[to] : undefined));
      }
    }
  }
  return ti(Q, J, Z, tu, td);
};
var tT = (J, Z, Q) => {
  if (tt) {
    const $ = Object.getOwnPropertyDescriptor(J, Z);
    if ($ && !$.configurable) {
      return;
    }
  }
  if (Q === undefined) {
    delete J[Z];
  } else {
    th(J, Z, Q);
  }
};
const tB = function (J, Z, Q, $) {
  this.value = J;
  this.end = Z;
  this.source = Q;
  this.nodes = $;
};
var tj = function (J, Z) {
  this.source = J;
  this.index = Z;
};
tj.prototype = {
  fork: function (J) {
    return new tj(this.source, J);
  },
  parse: function () {
    const source = this.source;
    const Z = this.skip(tR, this.index);
    const Q = this.fork(Z);
    const $ = tx(source, Z);
    if (tM(tk, $)) {
      return Q.number();
    }
    switch ($) {
      case "{":
        return Q.object();
      case "[":
        return Q.array();
      case '"':
        return Q.string();
      case "t":
        return Q.keyword(true);
      case "f":
        return Q.keyword(false);
      case "n":
        return Q.keyword(null);
    }
    throw te_SyntaxError('Unexpected character: "' + $ + '" at: ' + Z);
  },
  node: function (J, Z, Q, $, tt) {
    return new tB(Z, $, J ? null : t_(this.source, Q, $), tt);
  },
  object: function () {
    for (
      var J = this.source, Z = this.index + 1, Q = false, $ = {}, tt = {};
      Z < J.length;
    ) {
      if (tx(J, (Z = this.until(['"', "}"], Z))) === "}" && !Q) {
        Z++;
        break;
      }
      let te = this.fork(Z).string();
      const tr = te.value;
      Z = te.end;
      Z = this.until([":"], Z) + 1;
      Z = this.skip(tR, Z);
      th(tt, tr, (te = this.fork(Z).parse()));
      th($, tr, te.value);
      const tn = tx(J, (Z = this.until([",", "}"], te.end)));
      if (tn === ",") {
        Q = true;
        Z++;
      } else if (tn === "}") {
        Z++;
        break;
      }
    }
    return this.node(1, $, this.index, Z, tt);
  },
  array: function () {
    for (
      var J = this.source, Z = this.index + 1, Q = false, $ = [], tt = [];
      Z < J.length;
    ) {
      if (tx(J, (Z = this.skip(tR, Z))) === "]" && !Q) {
        Z++;
        break;
      }
      const te = this.fork(Z).parse();
      tS(tt, te);
      tS($, te.value);
      if (tx(J, (Z = this.until([",", "]"], te.end))) === ",") {
        Q = true;
        Z++;
      } else if (tx(J, Z) === "]") {
        Z++;
        break;
      }
    }
    return this.node(1, $, this.index, Z, tt);
  },
  string: function () {
    const index = this.index;
    const Z = tl(this.source, this.index + 1);
    return this.node(0, Z.value, index, Z.end);
  },
  number: function () {
    const source = this.source;
    const index = this.index;
    let Q = index;
    if (tx(source, Q) === "-") {
      Q++;
    }
    if (tx(source, Q) === "0") {
      Q++;
    } else if (tM(tE, tx(source, Q))) {
      Q = this.skip(tA, ++Q);
    } else {
      throw te_SyntaxError("Failed to parse number at: " + Q);
    }
    if (tx(source, Q) === ".") {
      Q = this.skip(tA, ++Q);
    }
    if (
      (tx(source, Q) === "e" || tx(source, Q) === "E") &&
      ((tx(source, ++Q) === "+" || tx(source, Q) === "-") && Q++,
      Q === (Q = this.skip(tA, Q)))
    ) {
      throw te_SyntaxError("Failed to parse number's exponent value at: " + Q);
    }
    return this.node(0, te_Number(t_(source, index, Q)), index, Q);
  },
  keyword: function (J) {
    const Z = "" + J;
    const index = this.index;
    const $ = index + Z.length;
    if (t_(this.source, index, $) !== Z) {
      throw te_SyntaxError("Failed to parse value at: " + index);
    }
    return this.node(0, J, index, $);
  },
  skip: function (J, Z) {
    for (const Q = this.source; Z < Q.length && tM(J, tx(Q, Z)); Z++);
    return Z;
  },
  until: function (J, Z) {
    Z = this.skip(tR, Z);
    const Q = tx(this.source, Z);
    for (let $ = 0; $ < J.length; $++) {
      if (J[$] === Q) {
        return Z;
      }
    }
    throw te_SyntaxError('Unexpected character: "' + Q + '" at: ' + Z);
  },
};
const forced = td(function () {
  let J;
  const Z = "9007199254740993";
  ty(Z, function (Z, Q, $) {
    J = $.source;
  });
  return J !== Z;
});
const tP =
  tp &&
  !td(function () {
    return 1 / ty("-0 	") != -Infinity;
  });
$(
  {
    target: "JSON",
    stat: true,
    forced,
  },
  {
    parse: function (J, Z) {
      if (tP && !to(Z)) {
        return ty(J);
      }
      return tI(J, Z);
    },
  },
);
