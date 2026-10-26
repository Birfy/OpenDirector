import { EventEmitter } from "IpG";
export default ee;
function ee() {
  EventEmitter.call(this);
}
require("Hs")(ee, EventEmitter);
ee.Readable = require("./module-TSU.js");
ee.Writable = require("./module-Cg5.js");
ee.Duplex = require("./module-qd_2.js");
ee.Transform = require("./module-sE_2.js");
ee.PassThrough = require("./module-eT_2.js");
ee.finished = require("./module-P6e.js");
ee.pipeline = require("./module-IA_2.js");
ee.Stream = ee;
ee.prototype.pipe = function (Z, Q) {
  const X = this;
  function ee(Q) {
    if (Z.writable && Z.write(Q) === false && X.pause) {
      X.pause();
    }
  }
  function et() {
    if (X.readable && X.resume) {
      X.resume();
    }
  }
  X.on("data", ee);
  Z.on("drain", et);
  if (!(Z._isStdio || (Q && Q.end === false))) {
    X.on("end", en);
    X.on("close", ei);
  }
  var er = false;
  function en() {
    if (!er) {
      er = true;
      Z.end();
    }
  }
  function ei() {
    if (!er) {
      er = true;
      if (typeof Z.destroy === "function") {
        Z.destroy();
      }
    }
  }
  function ea(Z) {
    eo();
    if (EventEmitter.listenerCount(this, "error") === 0) {
      throw Z;
    }
  }
  function eo() {
    X.removeListener("data", ee);
    Z.removeListener("drain", et);
    X.removeListener("end", en);
    X.removeListener("close", ei);
    X.removeListener("error", ea);
    Z.removeListener("error", ea);
    X.removeListener("end", eo);
    X.removeListener("close", eo);
    Z.removeListener("close", eo);
  }
  X.on("error", ea);
  Z.on("error", ea);
  X.on("end", eo);
  X.on("close", eo);
  Z.on("close", eo);
  Z.emit("pipe", X);
  return Z;
};
