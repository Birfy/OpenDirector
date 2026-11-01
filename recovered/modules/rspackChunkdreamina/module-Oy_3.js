import a from "NY";
import o from "QWK";
import { P } from "./module-Ik.js";
import { _ } from "./module-Kt_2.js";
export class n {
  get loaded() {
    return !!this._instance;
  }
  preload() {
    this._getModule();
  }
  getInstance() {
    const e = this;
    return a._(function* () {
      yield e._sharedMutex.lock();
      try {
        if (e._instance) {
          return e._instance;
        }
        e._instance = yield e._makeInstance(...e._getStaticArguments());
        return e._instance;
      } finally {
        e._sharedMutex.unLock();
      }
    })();
  }
  _makeInstance(...e) {
    const t = this;
    return a._(function* () {
      let r = yield t._getModule();
      if (r.default) {
        return t._instantiationService.createInstance(r.default, ...e);
      }
      return t._instantiationService.createInstance(r, ...e);
    })();
  }
  _getStaticArguments() {
    return [];
  }
  constructor(e) {
    this._instantiationService = e;
    this._sharedMutex = new P();
  }
}
n = o.Cg(
  [
    o.Qj(0, _),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  n,
);
