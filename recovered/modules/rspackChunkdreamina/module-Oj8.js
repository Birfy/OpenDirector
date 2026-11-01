import a from "TK";
import r from "rL";
import i from "VA";
import o from "wF";
import { J } from "./module-k3w.js";
import s from "z6W";
export function E(hasLogin) {
  const t = o.h(a.a);
  const [, n] = s.o({
    featureKey: r.bp.AUTH_REQ_PORTAL,
  });
  return J({
    hasLogin,
    authReqPortalStatus: n == null ? undefined : n.status,
    authReqPortalABVisible: t.abTestManager.getBooleanAbTestValue(
      i.ob.DreaminaIpExemption,
      false,
    ),
  });
}
