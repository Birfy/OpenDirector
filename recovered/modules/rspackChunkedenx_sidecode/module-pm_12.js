import "./module-PC_12.js";
import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-M_2_12.js";
import tr from "./module-O9_12.js";
import tn from "./module-r9_12.js";
import ti from "./module-BZO_12.js";
import to from "./module-vE_12.js";
import ta from "./module-I_13.js";
import ts from "./module-dFV_12.js";
import tf from "./module-HZ_12.js";
import tu from "./module-L7_12.js";
import tc from "./module-b_12.js";
import th from "./module-A2_13.js";
import td from "./module-Y_13.js";
import tl from "./module-D_2_12.js";
import tp from "./module-WG_2_12.js";
import tb from "./module-S9_12.js";
import tv from "./module-d_13.js";
import tg from "./module-y_2_12.js";
import ty from "./module-ng_13.js";
import tm from "./module-Za_12.js";
import tw from "./module-w_13.js";
import tx from "./module-wz_13.js";
import t_ from "./module-Qn_13.js";
import tM from "./module-eXf_12.js";
import tS from "./module-lN_12.js";
import tA from "./module-ze_13.js";
const tE = tS("iterator");
const tk = "URLSearchParams";
const tR = tk + "Iterator";
const tc_set = tc.set;
const getState = tc.getterFor(tk);
const tT = tc.getterFor(tR);
const tj = (J) => {
  if (!tn) {
    return tt[J];
  }
  const Z = Object.getOwnPropertyDescriptor(tt, J);
  return Z && Z.value;
};
const tC = tj("fetch");
const tP = tj("Request");
const tL = tj("Headers");
const tN = tP && tP.prototype;
const tU = tL && tL.prototype;
const tt_RegExp = tt.RegExp;
const tt_TypeError = tt.TypeError;
const tt_decodeURIComponent = tt.decodeURIComponent;
const tt_encodeURIComponent = tt.encodeURIComponent;
const tH = tr("".charAt);
const tV = tr([].join);
const tW = tr([].push);
const tK = tr("".replace);
const tY = tr([].shift);
const tX = tr([].splice);
const tG = tr("".split);
const tJ = tr("".slice);
const tZ = /\+/g;
const tQ = [, , , ,];
const t$ = function (J) {
  try {
    return tt_decodeURIComponent(J);
  } catch (Z) {
    return J;
  }
};
const t0 = (J) => {
  let Z;
  let Q = tK(J, tZ, " ");
  let $ = 4;
  try {
    return tt_decodeURIComponent(Q);
  } catch (J) {
    while ($) {
      Q = tK(
        Q,
        tQ[(Z = $--) - 1] ||
          (tQ[Z - 1] = tt_RegExp("((?:%[\\da-f]{2}){" + Z + "})", "gi")),
        t$,
      );
    }
    return Q;
  }
};
const t1 = /[!'()~]|%20/g;
const t2 = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
};
const t6 = function (J) {
  return t2[J];
};
const t3 = (J) => tK(tt_encodeURIComponent(J), t1, t6);
const t4 = tu(
  function (J, kind) {
    tc_set(this, {
      type: tR,
      iterator: tx(getState(J).entries),
      kind,
    });
  },
  "Iterator",
  function () {
    const J = tT(this);
    const J_kind = J.kind;
    const Q = J.iterator.next();
    const Q_value = Q.value;
    if (!Q.done) {
      Q.value =
        J_kind === "keys"
          ? Q_value.key
          : J_kind === "values"
            ? Q_value.value
            : [Q_value.key, Q_value.value];
    }
    return Q;
  },
  true,
);
const t8 = function (J) {
  this.entries = [];
  this.url = null;
  if (J !== undefined) {
    if (tg(J)) {
      this.parseObject(J);
    } else {
      this.parseQuery(
        typeof J === "string" ? (tH(J, 0) === "?" ? tJ(J, 1) : J) : ty(J),
      );
    }
  }
};
t8.prototype = {
  type: tk,
  bindURL: function (J) {
    this.url = J;
    this.update();
  },
  parseObject: function (J) {
    let Z;
    let Q;
    let $;
    let tt;
    let tr;
    let tn;
    let ti;
    const to = t_(J);
    if (to) {
      for (Q = (Z = tx(J, to)).next; !($ = te(Q, Z)).done;) {
        if (
          (tn = te((tr = (tt = tx(tv($.value))).next), tt)).done ||
          (ti = te(tr, tt)).done ||
          !te(tr, tt).done
        ) {
          throw tt_TypeError("Expected sequence with length 2");
        }
        tW(this.entries, {
          key: ty(tn.value),
          value: ty(ti.value),
        });
      }
    } else {
      for (const ta in J) {
        if (tl(J, ta)) {
          tW(this.entries, {
            key: ta,
            value: ty(J[ta]),
          });
        }
      }
    }
  },
  parseQuery: function (J) {
    if (J) {
      let Z;
      let Q;
      for (let $ = tG(J, "&"), tt = 0; tt < $.length;) {
        if ((Z = $[tt++]).length) {
          Q = tG(Z, "=");
          tW(this.entries, {
            key: t0(tY(Q)),
            value: t0(tV(Q, "=")),
          });
        }
      }
    }
  },
  serialize: function () {
    let J;
    for (var Z = this.entries, Q = [], $ = 0; $ < Z.length;) {
      tW(Q, t3((J = Z[$++]).key) + "=" + t3(J.value));
    }
    return tV(Q, "&");
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) {
      this.url.update();
    }
  },
};
const URLSearchParams = function () {
  th(this, t5_prototype);
  const J = arguments.length > 0 ? arguments[0] : undefined;
  const Z = tc_set(this, new t8(J));
  if (!tn) {
    this.size = Z.entries.length;
  }
};
var t5_prototype = URLSearchParams.prototype;
ts(
  t5_prototype,
  {
    append: function (J, Z) {
      const Q = getState(this);
      tM(arguments.length, 2);
      tW(Q.entries, {
        key: ty(J),
        value: ty(Z),
      });
      if (!tn) {
        this.length++;
      }
      Q.updateURL();
    },
    delete: function (J) {
      const Z = getState(this);
      const Q = tM(arguments.length, 1);
      for (
        var $ = Z.entries,
          tt = ty(J),
          te = Q < 2 ? undefined : arguments[1],
          tr = te === undefined ? te : ty(te),
          ti = 0;
        ti < $.length;
      ) {
        const to = $[ti];
        if (to.key === tt && (tr === undefined || to.value === tr)) {
          tX($, ti, 1);
          if (tr !== undefined) {
            break;
          }
        } else {
          ti++;
        }
      }
      if (!tn) {
        this.size = $.length;
      }
      Z.updateURL();
    },
    get: function (J) {
      const entries = getState(this).entries;
      tM(arguments.length, 1);
      const Q = ty(J);
      for (let $ = 0; $ < entries.length; $++) {
        if (entries[$].key === Q) {
          return entries[$].value;
        }
      }
      return null;
    },
    getAll: function (J) {
      const entries = getState(this).entries;
      tM(arguments.length, 1);
      const Q = ty(J);
      const $ = [];
      for (let tt = 0; tt < entries.length; tt++) {
        if (entries[tt].key === Q) {
          tW($, entries[tt].value);
        }
      }
      return $;
    },
    has: function (J) {
      for (
        let Z = getState(this).entries,
          Q = tM(arguments.length, 1),
          $ = ty(J),
          tt = Q < 2 ? undefined : arguments[1],
          te = tt === undefined ? tt : ty(tt),
          tr = 0;
        tr < Z.length;
      ) {
        const tn = Z[tr++];
        if (tn.key === $ && (te === undefined || tn.value === te)) {
          return true;
        }
      }
      return false;
    },
    set: function (J, Z) {
      let Q;
      const $ = getState(this);
      tM(arguments.length, 1);
      for (
        var tt = $.entries, te = false, tr = ty(J), ti = ty(Z), to = 0;
        to < tt.length;
        to++
      ) {
        if ((Q = tt[to]).key === tr) {
          if (te) {
            tX(tt, to--, 1);
          } else {
            te = true;
            Q.value = ti;
          }
        }
      }
      if (!te) {
        tW(tt, {
          key: tr,
          value: ti,
        });
      }
      if (!tn) {
        this.size = tt.length;
      }
      $.updateURL();
    },
    sort: function () {
      const J = getState(this);
      tA(J.entries, function (J, Z) {
        if (J.key > Z.key) {
          return 1;
        }
        return -1;
      });
      J.updateURL();
    },
    forEach: function (J) {
      let Z;
      for (
        let Q = getState(this).entries,
          $ = tp(J, arguments.length > 1 ? arguments[1] : undefined),
          tt = 0;
        tt < Q.length;
      ) {
        $((Z = Q[tt++]).value, Z.key, this);
      }
    },
    keys: function () {
      return new t4(this, "keys");
    },
    values: function () {
      return new t4(this, "values");
    },
    entries: function () {
      return new t4(this, "entries");
    },
  },
  {
    enumerable: true,
  },
);
to(t5_prototype, tE, t5_prototype.entries, {
  name: "entries",
});
to(
  t5_prototype,
  "toString",
  function () {
    return getState(this).serialize();
  },
  {
    enumerable: true,
  },
);
if (tn) {
  ta(t5_prototype, "size", {
    get: function () {
      return getState(this).entries.length;
    },
    configurable: true,
    enumerable: true,
  });
}
tf(URLSearchParams, tk);
$(
  {
    global: true,
    constructor: true,
    forced: !ti,
  },
  {
    URLSearchParams,
  },
);
if (!ti && td(tL)) {
  const t7 = tr(tU.has);
  const et = tr(tU.set);
  const ee = (J) => {
    if (tg(J)) {
      let Z;
      const Q = J.body;
      if (tb(Q) === tk) {
        if (
          !t7((Z = J.headers ? new tL(J.headers) : new tL()), "content-type")
        ) {
          et(
            Z,
            "content-type",
            "application/x-www-form-urlencoded;charset=UTF-8",
          );
        }
        return tm(J, {
          body: tw(0, ty(Q)),
          headers: tw(0, Z),
        });
      }
    }
    return J;
  };
  if (td(tC)) {
    $(
      {
        global: true,
        enumerable: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        fetch: function (J) {
          return tC(J, arguments.length > 1 ? ee(arguments[1]) : {});
        },
      },
    );
  }
  if (td(tP)) {
    const Request = function (J) {
      th(this, tN);
      return new tP(J, arguments.length > 1 ? ee(arguments[1]) : {});
    };
    tN.constructor = Request;
    Request.prototype = tN;
    $(
      {
        global: true,
        constructor: true,
        dontCallGetSet: true,
        forced: true,
      },
      {
        Request,
      },
    );
  }
}
export default {
  URLSearchParams,
  getState,
};
