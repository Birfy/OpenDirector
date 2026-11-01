import a from "NY";
import r from "QWK";
import i from "Zqr";
import o from "st";
import l from "Kt";
import s from "E7";
import c from "yX1";
export class O {
  createChild(e) {
    return a
      ._(function* () {
        const registry = new o.L({
          checkDuplicate: true,
        });
        this._registerDynamicSharedServices(this._dynamicDependencyService);
        const lazyServiceRegister = i.A(c.X)(registry)(
          this._parentContainerService,
        );
        yield this._registerChildLevelServices(
          {
            registry,
            lazyServiceRegister,
          },
          e,
        );
        return this._dynamicDependencyService.createChild(
          registry.makeCollection(),
        );
      })
      .call(this);
  }
  constructor(e, t) {
    this._parentContainerService = e;
    this._dynamicDependencyService = t;
  }
}
O = r.Cg(
  [
    r.Qj(0, l._),
    r.Qj(1, s.L),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      s.L === undefined ? Object : s.L,
    ]),
  ],
  O,
);
