import r from "NY";
import s from "QWK";
import n from "Kpt";
import o from "lj";
import a from "o7";
import u from "Kt";
import l from "Egb";
export class b extends a.jG {
  dispose() {
    let e;
    let t;
    this._containerDisposed = true;
    if ((e = this._instance) != null) {
      e.dispose();
    }
    if ((t = this._childContainerService) != null) {
      t.dispose();
    }
    super.dispose();
  }
  createContainerFactory(e) {
    return e.createInstance(this.ChildContainerFactory);
  }
  createControllerInstance(e) {
    return e.createInstance(this.ControllerConstructor);
  }
  onContainerLoading() {}
  onContainerLoadError(e) {
    return false;
  }
  _bootstrap() {
    return r
      ._(function* () {
        let e;
        let t;
        this.onContainerLoading();
        try {
          t = yield this._childContainerFactory.createChild();
        } catch (error) {
          if (this._containerDisposed || this.onContainerLoadError(error)) {
            return;
          }
          throw error;
        }
        if (this._containerDisposed) {
          t.dispose();
        } else {
          this._childContainerService = t;
          this._instance = this.createControllerInstance(
            this._childContainerService,
          );
          if (
            ((e = this._dreaminaUiConfigurationService.getRouteConfigByPath(
              this._dreaminaUiConfigurationService.currentRoutePath || "",
            )) == null
              ? undefined
              : e.id) === this.routeId ||
            this.needBootstrapWhenContributionInit
          ) {
            this.bootstrap(this._instance);
          }
          this._dreaminaUiConfigurationService.registerConfig({
            [n.N.PageRoute]: [
              {
                id: this.routeId,
                path: l.ph[this.routeId],
                onActiveChange: (e) => {
                  if (e.active) {
                    this.bootstrap(this._instance);
                  }
                },
              },
            ],
          });
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
    this._containerDisposed = false;
    this._childContainerFactory = this.createContainerFactory(e);
    this._bootstrap();
  }
}
b = s.Cg(
  [
    s.Qj(0, u._),
    s.Qj(1, o.K),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      u._ === undefined ? Object : u._,
      o.K === undefined ? Object : o.K,
    ]),
  ],
  b,
);
