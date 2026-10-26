if (require.j == "wl4") {
  var a;
  var o;
  var i = require("./module-Dm.js");
}
if (require.j == "wl4") var n = require("./module-A7.js");
if (require.j == "wl4") var c = require("./module-LTY.js");
if (require.j == "wl4") var l = require("./module-tA_4.js");
function m(e, t) {
  return true;
}
a = o || (o = {});
a[(a.Async = 0)] = "Async";
a[(a.Sync = 1)] = "Sync";
export class g {
  get currentPhase() {
    return this._currentPhase;
  }
  get event() {
    if (!this._globalEmitter) {
      this._globalEmitter = new n.v();
    }
    return this._globalEmitter.event;
  }
  get whenPhase() {
    if (!this._phaseEvent) {
      this._phaseEvent = (e, t) => {
        if (this._currentPhase === e) {
          return this._shortcutEvent(this._currentPhase)(t);
        }
        if (!this._phaseEmitterMap.has(e)) {
          this._setPhaseEmitter(e);
        }
        return this._phaseEmitterMap.get(e).fn(t);
      };
    }
    return this._phaseEvent;
  }
  when(e) {
    if (this._currentPhase === e) {
      return this._shortcutEvent(e);
    }
    if (!this._phaseEmitterMap.has(e)) {
      this._setPhaseEmitter(e);
    }
    return this._phaseEmitterMap.get(e).fn;
  }
  dispose() {
    let e;
    for (let [e, t] of this._phaseEmitterMap) {
      t.emitter.dispose();
    }
    if ((e = this._globalEmitter) != null) {
      e.dispose();
    }
  }
  setPhase(e) {
    let t;
    let r;
    if (this._currentPhase === e) {
      l.V.warn(`duplicate set phase: ${e}.`);
    } else {
      i.X3(this._phaseChecker(this._currentPhase, e));
      this._currentPhase = e;
      if ((t = this._phaseEmitterMap.get(e)) != null) {
        t.emitter.fire();
      }
      if ((r = this._globalEmitter) != null) {
        r.fire(e);
      }
    }
  }
  fire(e) {
    this.setPhase(e);
  }
  _setPhaseEmitter(e) {
    let emitter = new n.v(this._options);
    this._phaseEmitterMap.set(e, {
      emitter,
      fn: (r) => {
        if (this._currentPhase === e) {
          return this._shortcutEvent(this._currentPhase)(r);
        }
        return emitter.event(r);
      },
    });
  }
  constructor(e, t = {}, r = m, a) {
    var o;
    var i;
    this._currentPhase = e;
    this._phaseChecker = r;
    this._options = a;
    this._phaseEmitterMap = new Map();
    this._phaseChecker = (o = t.checker) != null ? o : m;
    let n = (i = t.shortcutEventMode) != null ? i : 0;
    this._shortcutEvent = n === 0 ? c.j : c.E;
  }
}
