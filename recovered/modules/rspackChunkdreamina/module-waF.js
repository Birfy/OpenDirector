import i from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import l from "bT";
import u from "wF";
import s from "Rl";
import d from "fF";
import c from "z7R";
import m from "mh";
import v from "CFS";
import p from "zAy";
import g from "IFB";
import f from "Lo9";
var h = l.memo(function (e) {
  const { children, sceneOptions } = e;
  const h = a._(e, ["children", "sceneOptions"]);
  const _ = l.useCallback(
    (limitations) =>
      o.jsx(p.h, {
        component: h.component,
        limitations,
        children,
      }),
    [children, h.component],
  );
  const fallback = l.useMemo(() => _(v.U), [_]);
  const action = l.useMemo(() => {
    if (sceneOptions) {
      return g.n({
        sceneOptions,
        batchNumber: h.batchNumber,
        extraBenefits: h.extraBenefits,
        discount: h.discount,
      });
    }
  }, [sceneOptions, h.batchNumber, h.extraBenefits, h.discount]);
  if (sceneOptions && action) {
    return o.jsx(s.X, {
      fallback,
      serviceId: c.Ji,
      children: (e) => {
        var t;
        var a;
        return o.jsx(u.Z, {
          instantiationService: e.containerService,
          children: o.jsx(m.o, {
            sceneOptions,
            children: o.jsx(
              f.L,
              r._(
                i._(
                  {
                    action,
                    controller: e.commerceActionController,
                    scene: sceneOptions.scene,
                    benefitAmount:
                      (t = sceneOptions.benefitAmount) != null ? t : d.Jl,
                    sceneOptions,
                  },
                  h,
                ),
                {
                  getTeamCreditRechargeContext:
                    (a = h.getTeamCreditRechargeContext) != null
                      ? a
                      : () => e.getTeamCreditRechargeContext(),
                  children: (e) => _(e),
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
export { h as r };
