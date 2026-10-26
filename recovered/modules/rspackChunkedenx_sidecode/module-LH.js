import { F } from "./module-abl.js";
let $;
const F_ERR_MISSING_ARGS = F.ERR_MISSING_ARGS;
const F_ERR_STREAM_DESTROYED = F.ERR_STREAM_DESTROYED;
function tn(J) {
  if (J) {
    throw J;
  }
}
function ti(J) {
  J();
}
function to(J, Z) {
  return J.pipe(Z);
}
export default function () {
  let J;
  let Z;
  for (var tt = arguments.length, ta = Array(tt), ts = 0; ts < tt; ts++) {
    ta[ts] = arguments[ts];
  }
  const tf =
    (J = ta).length && typeof J[J.length - 1] === "function" ? J.pop() : tn;
  if (Array.isArray(ta[0])) {
    ta = ta[0];
  }
  if (ta.length < 2) {
    throw new F_ERR_MISSING_ARGS("streams");
  }
  var tu = ta.map((J, tt) => {
    let writable;
    let tn;
    let to;
    let ts;
    let tc;
    let th;
    const readable = tt < ta.length - 1;
    writable = tt > 0;
    to = tn = function (J) {
      if (!Z) {
        Z = J;
      }
      if (J) {
        tu.forEach(ti);
      }
      if (!readable) {
        tu.forEach(ti);
        tf(Z);
      }
    };
    ts = false;
    tn = function () {
      if (!ts) {
        ts = true;
        to.apply(undefined, arguments);
      }
    };
    tc = false;
    J.on("close", function () {
      tc = true;
    });
    if ($ === undefined) {
      $ = require("./module-qm.js");
    }
    $(
      J,
      {
        readable,
        writable,
      },
      function (J) {
        if (J) {
          return tn(J);
        }
        tc = true;
        tn();
      },
    );
    th = false;
    return function (Z) {
      if (!tc && !th) {
        th = true;
        if (J.setHeader && typeof J.abort === "function") {
          return J.abort();
        }
        if (typeof J.destroy === "function") {
          return J.destroy();
        }
        tn(Z || new F_ERR_STREAM_DESTROYED("pipe"));
      }
    };
  });
  return ta.reduce(to);
}
