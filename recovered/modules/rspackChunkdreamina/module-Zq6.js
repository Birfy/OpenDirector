import a from "QWK";
import { jG } from "./module-o7_2.js";
import { _ } from "./module-Kt_2.js";
import { v } from "./module-A7.js";
import { Iv } from "./module-Dm.js";
import { v as v_1 } from "./module-Wrw.js";
class m {
  buildRunner(e) {
    let t;
    let r = this._getCaller(e);
    let a = ((t = this._registerByCaller.get(r)) != null ? t : [])
      .map((e) => {
        var t;
        if ((t = this._registerById.get(e)) == null) {
          return undefined;
        }
        return t.handler;
      })
      .filter((e) => e);
    if (e.handler) {
      a.push(e.handler);
    }
    return new v_1(
      a,
      {
        from: e.trigger,
        name: e.uiConfig.id,
        trigger: e.method,
      },
      e.uiConfig,
    );
  }
  use(e) {
    if (this._registerById.get(e.id)) {
      Iv("config had been existed");
    }
    this._registerById.set(e.id, e);
    e.triggerMethod.forEach((t) => {
      let r = this._getCaller({
        trigger: e.trigger,
        method: t,
      });
      if (!this._registerByCaller.has(r)) {
        this._registerByCaller.set(r, []);
      }
      this._registerByCaller.get(r).push(e.id);
    });
    this._onMiddlewareChange.fire({
      trigger: e.trigger,
      method: e.triggerMethod,
    });
    let t = e.freshTrigger(() => {
      this._onMiddlewareChange.fire({
        trigger: e.trigger,
        method: e.triggerMethod,
      });
    });
    this._disposeMap.set(e.id, t);
  }
  unUse(e) {
    let t = this._registerById.get(e);
    if (!t) {
      return;
    }
    t.triggerMethod.forEach((e) => {
      let r = this._getCaller({
        trigger: t.trigger,
        method: e,
      });
      if (!this._registerByCaller.has(r)) {
        return;
      }
      let a = this._registerByCaller.get(r);
      this._registerByCaller.set(
        r,
        a.filter((e) => e === t.id),
      );
    });
    this._onMiddlewareChange.fire({
      trigger: t.trigger,
      method: t.triggerMethod,
    });
    let r = this._disposeMap.get(e);
    if (r != null) {
      r.dispose();
    }
    this._disposeMap.delete(e);
  }
  _getCaller({ trigger, method }) {
    return `${trigger}-${method.toString()}`;
  }
  constructor() {
    this._registerById = new Map();
    this._registerByCaller = new Map();
    this._onMiddlewareChange = new v();
    this._disposeMap = new Map();
    this.onMiddlewareChange = this._onMiddlewareChange.event;
  }
}
export class x extends jG {
  get setting() {
    return this._setting;
  }
  registerConfig(e) {
    for (let t of Object.keys(e)) {
      this.uiManager[t].registerConfig(e[t]);
    }
  }
  useMiddleware(e) {
    return this.middleware.use(e);
  }
  _bootstrap() {
    this.middleware = this._containerService.createInstance(m);
    this._initAllManager();
  }
  constructor(e, t) {
    super();
    this._setting = e;
    this._containerService = t;
  }
}
x = a.Cg(
  [
    a.Qj(1, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ISetting === "undefined" ? Object : ISetting,
      _ === undefined ? Object : _,
    ]),
  ],
  x,
);
