import r from "NY";
import n from "QWK";
import a from "z7R";
import o from "xi";
import s from "./module-Ye_3.js";
export class Y {
  queryIntroDialogResourcePosition() {
    return r
      ._(function* () {
        try {
          const e =
            yield this._dreaminaCommercialFeatureLoaderService.getInstance();
          const t =
            yield e.commercialResourcePositionDataService.queryResourcePosition(
              {
                resourceKeys: [s.M],
              },
            );
          if (t.ok) {
            return t.value;
          }
          return undefined;
        } catch (error) {
          o.V.warn("[IntroDialog][VIMO] resource position request failed", {
            resourceKey: s.M,
            error,
          });
          return;
        }
      })
      .call(this);
  }
  constructor(e) {
    this._dreaminaCommercialFeatureLoaderService = e;
  }
}
Y = n.Cg(
  [
    n.Qj(0, a.jV),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [a.jV === undefined ? Object : a.jV]),
  ],
  Y,
);
