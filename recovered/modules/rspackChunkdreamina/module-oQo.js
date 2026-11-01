import r from "NY";
import s from "QWK";
import i from "Zqr";
import n from "st";
import d from "M8X";
import o from "Ik";
import u from "Kt";
import l from "E7";
import c from "yX1";
class h {
  createFeatureService() {
    return r
      ._(function* () {
        yield this._sharedMutex.lock();
        try {
          const registry = new n.L({
            checkDuplicate: true,
          });
          const lazyServiceRegister = i.A(c.X)()(registry)(
            this._parentContainerService,
          );
          this._registerDynamicSharedServices(this._dynamicDependencyService);
          yield this._registerChildLevelServices({
            registry,
            lazyServiceRegister,
          });
          const a = this._dynamicDependencyService.createChild(
            registry.makeCollection(),
          );
          yield this._execFlow(a);
          this._instance = d.cQ(a, this._serviceId);
          return this._instance;
        } finally {
          this._sharedMutex.unLock();
        }
      })
      .call(this);
  }
  constructor(e, t, a) {
    this._props = e;
    this._parentContainerService = t;
    this._dynamicDependencyService = a;
    this._sharedMutex = new o.P();
  }
}
export { h };
h = s.Cg(
  [
    s.Qj(1, u._),
    s.Qj(2, l.L),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof P === "undefined" ? Object : P,
      u._ === undefined ? Object : u._,
      l.L === undefined ? Object : l.L,
    ]),
  ],
  h,
);
