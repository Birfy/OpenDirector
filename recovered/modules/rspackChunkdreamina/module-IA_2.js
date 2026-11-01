import { F } from "./module-Bwd.js";
let $;
const F_ERR_MISSING_ARGS = F.ERR_MISSING_ARGS;
const F_ERR_STREAM_DESTROYED = F.ERR_STREAM_DESTROYED;
function en(Z) {
  if (Z) {
    throw Z;
  }
}
function ei(Z) {
  Z();
}
function ea(Z, Q) {
  return Z.pipe(Q);
}
export default function () {
  let Z;
  let Q;
  for (var ee = arguments.length, eo = Array(ee), es = 0; es < ee; es++) {
    eo[es] = arguments[es];
  }
  const ef =
    (Z = eo).length && typeof Z[Z.length - 1] === "function" ? Z.pop() : en;
  if (Array.isArray(eo[0])) {
    eo = eo[0];
  }
  if (eo.length < 2) {
    throw new F_ERR_MISSING_ARGS("streams");
  }
  var eu = eo.map((Z, ee) => {
    let writable;
    let en;
    let ea;
    let es;
    let ec;
    let eh;
    const readable = ee < eo.length - 1;
    writable = ee > 0;
    ea = en = function (Z) {
      if (!Q) {
        Q = Z;
      }
      if (Z) {
        eu.forEach(ei);
      }
      if (!readable) {
        eu.forEach(ei);
        ef(Q);
      }
    };
    es = false;
    en = function () {
      if (!es) {
        es = true;
        ea.apply(undefined, arguments);
      }
    };
    ec = false;
    Z.on("close", function () {
      ec = true;
    });
    if ($ === undefined) {
      $ = require("./module-P6e.js");
    }
    $(
      Z,
      {
        readable,
        writable,
      },
      function (Z) {
        if (Z) {
          return en(Z);
        }
        ec = true;
        en();
      },
    );
    eh = false;
    return function (Q) {
      if (!ec && !eh) {
        eh = true;
        if (Z.setHeader && typeof Z.abort === "function") {
          return Z.abort();
        }
        if (typeof Z.destroy === "function") {
          return Z.destroy();
        }
        en(Q || new F_ERR_STREAM_DESTROYED("pipe"));
      }
    };
  });
  return eo.reduce(ea);
}
