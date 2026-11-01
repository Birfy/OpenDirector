import a from "QWK";
import { _ } from "./module-Kt_2.js";
import { J } from "./module-mN.js";
import { V } from "./module-kBz.js";
import { jG } from "./module-o7_2.js";
export class r extends jG {
  register(e, t) {
    if (e.instantiationPhase === J.Eager) {
      this._safeCreate(e);
      if (t != null) {
        t(this._instances.get(e.id));
      }
    }
    if (e.instantiationPhase === J.Idle) {
      let r = V(() => {
        this._safeCreate(e);
        this._pending.delete(e.id);
        if (t != null) {
          t(this._instances.get(e.id));
        }
      });
      this._pending.set(e.id, r);
    }
  }
  registerInstance(e, t) {
    if (this._instances.has(e)) {
      console.error("duplicate register contribution: ", e);
    } else {
      this._instances.set(e, t);
    }
  }
  dispose() {
    for (let [, e] of this._instances) {
      e.dispose();
    }
    for (let [, e] of this._pending) {
      e.dispose();
    }
    super.dispose();
  }
  _safeCreate(e) {
    let t;
    if (this._instances.has(e.id)) {
      return void console.error("duplicate register contribution: ", e.id);
    }
    let r = (t = e.staticArguments) != null ? t : [];
    this._createInstance(e, r);
  }
  _createInstance(e, t) {
    let r = this._instantiationService.createInstance(e.ctor, ...t);
    this._instances.set(e.id, r);
  }
  constructor(e) {
    super();
    this._instantiationService = e;
    this._instances = new Map();
    this._pending = new Map();
  }
}
r = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  r,
);
