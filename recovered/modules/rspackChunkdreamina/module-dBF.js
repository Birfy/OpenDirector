import { b } from "./module-PcP.js";
import s from "QWK";
import a from "mN";
import o from "Kt";
import r from "oa";
import l from "bk";
import c from "rL";
import d from "Z4";
import u from "Kpt";
import h from "lj";
import m from "Hny";
export { H as UiStaticConfig } from "./module-PcP.js";
class p {
  dispose() {}
  constructor(e, t, i) {
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
    this._betaConfigurationService = i;
    this._betaConfigurationService.onInit(() => {
      if (
        ((e) => {
          if (e) {
            i = e.getValue(c.bp.STORY_AGENT);
          } else {
            var t;
            var i;
            const n = m.m();
            i = n == null ? undefined : n[c.bp.STORY_AGENT];
          }
          return (
            (t =
              i && [c.zt.RELEASED, c.zt.BETA_AVAILABLE].includes(i.status)) !=
              null && t
          );
        })(this._betaConfigurationService)
      ) {
        this._dreaminaUiConfigurationService.registerConfig({
          [u.N.SideMenu]: [
            l._(r._({}, b), {
              onClick: () => {
                window.open("/ai-tool/action", "_blank");
              },
            }),
          ],
        });
      }
    });
    this._betaConfigurationService.init();
  }
}
p = s.Cg(
  [
    s.Qj(0, o._),
    s.Qj(1, h.K),
    s.Qj(2, d.o),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      h.K === undefined ? Object : h.K,
      d.o === undefined ? Object : d.o,
    ]),
  ],
  p,
);
class g {
  dispose() {
    this._instance.dispose();
  }
  constructor(e) {
    this._instance = e.createInstance(p);
  }
}
export var contribution = {
  id: "SiderMenuStoryAgent",
  ctor: (g = s.Cg(
    [
      s.Qj(0, o._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    g,
  )),
  instantiationPhase: a.J.Eager,
};
