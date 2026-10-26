import n from "Rb";
import { k } from "./module-jR_2.js";
import { A } from "./module-Y0_2.js";
import { NO } from "./module-cks.js";
import { Ce } from "./module-zQ.js";
export function I(e) {
  if (!NO(e) && !A(e)) {
    return null;
  }
  const t = (v = e.toolExtra) == null ? undefined : v.get("submit_id");
  const createTime = String(e.createTime);
  if (e.toolResult) {
    const l = Ce(e.toolResult);
    try {
      const d = n.getInsertVideoResp(
        JSON.stringify((c = l == null ? undefined : l.data) != null ? c : {}),
      );
      const u = d.submit_id || t;
      if (u) {
        var v;
        var c;
        let m;
        let p;
        let f;
        let g;
        const I = k(d.commerce_info, e.toolResult);
        return {
          submitId: u,
          resultCode: d.result_code,
          benefitTriplets:
            (f = d.commerce_info) == null || (p = f.triplets) == null
              ? undefined
              : p.map((e) => {
                  var t;
                  var i;
                  var n;
                  return {
                    resourceType: (t = e.resource_type) != null ? t : "",
                    resourceId: (i = e.resource_id) != null ? i : "",
                    benefitType: (n = e.benefit_type) != null ? n : "",
                  };
                }),
          submitCode:
            (m = l == null ? undefined : l.submitCode) != null
              ? m
              : (g = d.submit_info) == null
                ? undefined
                : g.code,
          createTime,
          creditCount: I.creditCount,
          creditDisplayInfo: I.creditDisplayInfo,
        };
      }
    } catch (e) {}
    const _ = (l == null ? undefined : l.submitId) || t;
    if (_) {
      return {
        submitId: _,
        submitCode: l == null ? undefined : l.submitCode,
        createTime,
      };
    }
  }
  if (t) {
    return {
      submitId: t,
      createTime,
    };
  }
  return null;
}
