const ERR_STREAM_PREMATURE_CLOSE =
  require("./module-Bwd.js").F.ERR_STREAM_PREMATURE_CLOSE;
function ee() {}
export default (function Z(Q, X, et) {
  if (typeof X === "function") {
    return Z(Q, null, X);
  }
  if (!X) {
    X = {};
  }
  er = et || ee;
  en = false;
  et = function () {
    if (!en) {
      en = true;
      for (var Z = arguments.length, Q = Array(Z), X = 0; X < Z; X++) {
        Q[X] = arguments[X];
      }
      er.apply(this, Q);
    }
  };
  var er;
  var en;
  let ei = X.readable || (X.readable !== false && Q.readable);
  let ea = X.writable || (X.writable !== false && Q.writable);
  const eo = function () {
    if (!Q.writable) {
      ef();
    }
  };
  let es = Q._writableState && Q._writableState.finished;
  var ef = function () {
    ea = false;
    es = true;
    if (!ei) {
      et.call(Q);
    }
  };
  let eu = Q._readableState && Q._readableState.endEmitted;
  const ec = function () {
    ei = false;
    eu = true;
    if (!ea) {
      et.call(Q);
    }
  };
  const eh = function (Z) {
    et.call(Q, Z);
  };
  const el = function () {
    let Z;
    if (ei && !eu) {
      if (!(Q._readableState && Q._readableState.ended)) {
        Z = new ERR_STREAM_PREMATURE_CLOSE();
      }
      return et.call(Q, Z);
    }
    if (ea && !es) {
      if (!(Q._writableState && Q._writableState.ended)) {
        Z = new ERR_STREAM_PREMATURE_CLOSE();
      }
      return et.call(Q, Z);
    }
  };
  const ed = function () {
    Q.req.on("finish", ef);
  };
  if (Q.setHeader && typeof Q.abort === "function") {
    Q.on("complete", ef);
    Q.on("abort", el);
    if (Q.req) {
      ed();
    } else {
      Q.on("request", ed);
    }
  } else if (ea && !Q._writableState) {
    Q.on("end", eo);
    Q.on("close", eo);
  }
  Q.on("end", ec);
  Q.on("finish", ef);
  if (X.error !== false) {
    Q.on("error", eh);
  }
  Q.on("close", el);
  return function () {
    Q.removeListener("complete", ef);
    Q.removeListener("abort", el);
    Q.removeListener("request", ed);
    if (Q.req) {
      Q.req.removeListener("finish", ef);
    }
    Q.removeListener("end", eo);
    Q.removeListener("close", eo);
    Q.removeListener("finish", ef);
    Q.removeListener("end", ec);
    Q.removeListener("error", eh);
    Q.removeListener("close", el);
  };
});
