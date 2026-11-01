import i from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import l from "bT";
import u from "wF";
import s from "Rl";
import d from "z7R";
import c from "mh";
import m from "CFS";
import v from "zAy";
import p from "IFB";
import g from "Lo9";
export var S = l.memo(function (e) {
  const { children, sceneOptions } = e;
  const f = a._(e, ["children", "sceneOptions"]);
  const h = l.useCallback(
    (limitations) =>
      o.jsx(v.h, {
        component: f.component,
        limitations,
        children,
      }),
    [children, f.component],
  );
  const fallback = l.useMemo(() => h(m.U), [h]);
  const action = l.useMemo(() => {
    if (sceneOptions) {
      return p.n({
        sceneOptions,
        batchNumber: f.batchNumber,
        extraBenefits: f.extraBenefits,
        discount: f.discount,
      });
    }
  }, [sceneOptions, f.batchNumber, f.extraBenefits, f.discount]);
  if (sceneOptions && action) {
    return o.jsx(s.X, {
      fallback,
      serviceId: d.Ji,
      children: (e) => {
        var t;
        return o.jsx(u.Z, {
          instantiationService: e.containerService,
          children: o.jsx(c.o, {
            sceneOptions,
            children: o.jsx(
              g.L,
              r._(
                i._(
                  {
                    action,
                    controller: e.commerceActionController,
                    scene: sceneOptions.scene,
                    benefitAmount: 1,
                    sceneOptions,
                  },
                  f,
                ),
                {
                  getTeamCreditRechargeContext:
                    (t = f.getTeamCreditRechargeContext) != null
                      ? t
                      : () => e.getTeamCreditRechargeContext(),
                  children: (e) => h(e),
                },
              ),
            ),
          }),
        });
      },
    });
  }
  return o.jsx(o.Fragment, {
    children,
  });
});
