import n from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import s from "bT";
import l from "wF";
import c from "Rl";
import u from "z7R";
import d from "L6W";
import * as M from "./module-mh.js";
import { U } from "./module-CFS.js";
import * as N from "./module-zAy.js";
import { n as n_1 } from "./module-IFB.js";
import { L } from "./module-Lo9.js";
export var v = s.memo(function (e) {
  const { children, sceneOptions } = e;
  const j = a._(e, ["children", "sceneOptions"]);
  const y = s.useCallback(
    (limitations) =>
      o.jsx(N.h, {
        component: j.component,
        limitations,
        children,
      }),
    [children, j.component],
  );
  const fallback = s.useMemo(() => y(U), [y]);
  const action = s.useMemo(() => {
    if (sceneOptions) {
      return n_1({
        sceneOptions,
        batchNumber: j.batchNumber,
        extraBenefits: j.extraBenefits,
        discount: j.discount,
      });
    }
  }, [sceneOptions, j.batchNumber, j.extraBenefits, j.discount]);
  if (!sceneOptions || !action) {
    return o.jsx(o.Fragment, {
      children,
    });
  }
  const benefitAmount = d.Ld(sceneOptions);
  return o.jsx(c.X, {
    fallback,
    serviceId: u.Ji,
    children: (e) => {
      var t;
      return o.jsx(l.Z, {
        instantiationService: e.containerService,
        children: o.jsx(M.o, {
          sceneOptions,
          children: o.jsx(
            L,
            r._(
              n._(
                {
                  action,
                  controller: e.commerceActionController,
                  scene: sceneOptions.scene,
                  benefitAmount,
                  batchNumber: sceneOptions.batchNumber,
                  sceneOptions,
                },
                j,
              ),
              {
                getTeamCreditRechargeContext:
                  (t = j.getTeamCreditRechargeContext) != null
                    ? t
                    : () => e.getTeamCreditRechargeContext(),
                children: (e) => y(e),
              },
            ),
          ),
        }),
      });
    },
  });
});
