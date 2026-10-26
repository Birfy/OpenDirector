import { EventEmitter } from "./module-pf.js";
export default tt;
function tt() {
  EventEmitter.call(this);
}
require("./module-ULy.js")(tt, EventEmitter);
tt.Readable = require("./module-Z9.js");
tt.Writable = require("./module-mP.js");
tt.Duplex = require("./module-zD_2_2.js");
tt.Transform = require("./module-Hf.js");
tt.PassThrough = require("./module-sxO.js");
tt.finished = require("./module-qm.js");
tt.pipeline = require("./module-LH.js");
tt.Stream = tt;
tt.prototype.pipe = function (J, Z) {
  const Q = this;
  function tt(Z) {
    if (J.writable && J.write(Z) === false && Q.pause) {
      Q.pause();
    }
  }
  function te() {
    if (Q.readable && Q.resume) {
      Q.resume();
    }
  }
  Q.on("data", tt);
  J.on("drain", te);
  if (!(J._isStdio || (Z && Z.end === false))) {
    Q.on("end", tn);
    Q.on("close", ti);
  }
  var tr = false;
  function tn() {
    if (!tr) {
      tr = true;
      J.end();
    }
  }
  function ti() {
    if (!tr) {
      tr = true;
      if (typeof J.destroy === "function") {
        J.destroy();
      }
    }
  }
  function to(J) {
    ta();
    if (EventEmitter.listenerCount(this, "error") === 0) {
      throw J;
    }
  }
  function ta() {
    Q.removeListener("data", tt);
    J.removeListener("drain", te);
    Q.removeListener("end", tn);
    Q.removeListener("close", ti);
    Q.removeListener("error", to);
    J.removeListener("error", to);
    Q.removeListener("end", ta);
    Q.removeListener("close", ta);
    J.removeListener("close", ta);
  }
  Q.on("error", to);
  J.on("error", to);
  Q.on("end", ta);
  Q.on("close", ta);
  J.on("close", ta);
  J.emit("pipe", Q);
  return J;
};
