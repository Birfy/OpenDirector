const ERR_STREAM_PREMATURE_CLOSE =
  require("./module-abl.js").F.ERR_STREAM_PREMATURE_CLOSE;
function tt() {}
export default (function J(Z, Q, te) {
  if (typeof Q === "function") {
    return J(Z, null, Q);
  }
  if (!Q) {
    Q = {};
  }
  tr = te || tt;
  tn = false;
  te = function () {
    if (!tn) {
      tn = true;
      for (var J = arguments.length, Z = Array(J), Q = 0; Q < J; Q++) {
        Z[Q] = arguments[Q];
      }
      tr.apply(this, Z);
    }
  };
  var tr;
  var tn;
  let ti = Q.readable || (Q.readable !== false && Z.readable);
  let to = Q.writable || (Q.writable !== false && Z.writable);
  const ta = function () {
    if (!Z.writable) {
      tf();
    }
  };
  let ts = Z._writableState && Z._writableState.finished;
  var tf = function () {
    to = false;
    ts = true;
    if (!ti) {
      te.call(Z);
    }
  };
  let tu = Z._readableState && Z._readableState.endEmitted;
  const tc = function () {
    ti = false;
    tu = true;
    if (!to) {
      te.call(Z);
    }
  };
  const th = function (J) {
    te.call(Z, J);
  };
  const td = function () {
    let J;
    if (ti && !tu) {
      if (!(Z._readableState && Z._readableState.ended)) {
        J = new ERR_STREAM_PREMATURE_CLOSE();
      }
      return te.call(Z, J);
    }
    if (to && !ts) {
      if (!(Z._writableState && Z._writableState.ended)) {
        J = new ERR_STREAM_PREMATURE_CLOSE();
      }
      return te.call(Z, J);
    }
  };
  const tl = function () {
    Z.req.on("finish", tf);
  };
  if (Z.setHeader && typeof Z.abort === "function") {
    Z.on("complete", tf);
    Z.on("abort", td);
    if (Z.req) {
      tl();
    } else {
      Z.on("request", tl);
    }
  } else if (to && !Z._writableState) {
    Z.on("end", ta);
    Z.on("close", ta);
  }
  Z.on("end", tc);
  Z.on("finish", tf);
  if (Q.error !== false) {
    Z.on("error", th);
  }
  Z.on("close", td);
  return function () {
    Z.removeListener("complete", tf);
    Z.removeListener("abort", td);
    Z.removeListener("request", tl);
    if (Z.req) {
      Z.req.removeListener("finish", tf);
    }
    Z.removeListener("end", ta);
    Z.removeListener("close", ta);
    Z.removeListener("finish", tf);
    Z.removeListener("end", tc);
    Z.removeListener("error", th);
    Z.removeListener("close", td);
  };
});
