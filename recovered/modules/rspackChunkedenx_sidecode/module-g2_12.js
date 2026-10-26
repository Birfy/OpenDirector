import $ from "./module-A_13.js";
import tt from "./module-eP_12.js";
import te from "./module-vT_14.js";
import tr from "./module-YR_12.js";
import tn from "./module-M_2_12.js";
import ti from "./module-O9_12.js";
import to from "./module-Y_13.js";
import ta from "./module-wO_13.js";
import ts from "./module-ng_13.js";
import tf from "./module-er_12.js";
import tu from "./module-zq_2_12.js";
import tc from "./module-x9_12.js";
import th from "./module-o_12.js";
import _td from "./module-b_12.js";
const _td_set = _td.set;
const tb = tr("JSON", "parse");
const tv = tr("JSON", "stringify");
const tg = tr("Object", "create");
const ty = tr("Object", "freeze");
const tm = ti("".charAt);
const tw = ti("".slice);
const tx = ti(/./.exec);
const t_ = ti([].push);
const tM = th();
const tM_length = tM.length;
const tA = "Unacceptable as raw JSON";
const tE = /^[\t\n\r ]$/;
$(
  {
    target: "JSON",
    stat: true,
    forced: !te,
  },
  {
    rawJSON: function (J) {
      const Z = ts(J);
      if (Z === "" || tx(tE, tm(Z, 0)) || tx(tE, tm(Z, Z.length - 1))) {
        throw SyntaxError(tA);
      }
      const Q = tb(Z);
      if (typeof Q === "object" && Q !== null) {
        throw SyntaxError(tA);
      }
      const $ = tg(null);
      _td_set($, {
        type: "RawJSON",
      });
      tf($, "rawJSON", Z);
      if (tt) {
        return ty($);
      }
      return $;
    },
  },
);
if (tv) {
  $(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: !te,
    },
    {
      stringify: function (J, Z, Q) {
        const $ = tc(Z);
        const tt = [];
        const te = tv(
          J,
          function (J, Z) {
            const Q = to($) ? tn($, this, String(J), Z) : Z;
            if (ta(Q)) {
              return tM + (t_(tt, Q.rawJSON) - 1);
            }
            return Q;
          },
          Q,
        );
        if (typeof te !== "string") {
          return te;
        }
        let tr = "";
        for (let ti = te.length, ts = 0; ts < ti; ts++) {
          const tf = tm(te, ts);
          if (tf === '"') {
            const th = tu(te, ++ts).end - 1;
            const td = tw(te, ts, th);
            tr +=
              tw(td, 0, tM_length) === tM
                ? tt[tw(td, tM_length)]
                : '"' + td + '"';
            ts = th;
          } else {
            tr += tf;
          }
        }
        return tr;
      },
    },
  );
}
