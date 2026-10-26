import n from "Rb";
import { k } from "./module-jR_2.js";
import { Lk } from "./module-jRK.js";
import { Ce } from "./module-zQ.js";
export function o(e) {
  if (!Lk(e)) {
    return null;
  }
  const t = (u = e.toolExtra) == null ? undefined : u.get("submit_id");
  const createTime = String(e.createTime);
  if (e.toolResult) {
    const s = Ce(e.toolResult);
    try {
      const l = n.getInsertImageToolResp(
        JSON.stringify((v = s == null ? undefined : s.data) != null ? v : {}),
      );
      const d = l.submit_id || t;
      if (d) {
        var u;
        var v;
        let c;
        let m;
        let p;
        let f;
        const g = k(l.commerce_info, e.toolResult);
        return {
          submitId: d,
          resultCode: l.result_code,
          benefitTriplets:
            (p = l.commerce_info) == null || (m = p.triplets) == null
              ? undefined
              : m.map((e) => {
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
            (c = s == null ? undefined : s.submitCode) != null
              ? c
              : (f = l.submit_info) == null
                ? undefined
                : f.code,
          createTime,
          creditCount: g.creditCount,
          creditDisplayInfo: g.creditDisplayInfo,
        };
      }
    } catch (e) {}
    const I = (s == null ? undefined : s.submitId) || t;
    if (I) {
      return {
        submitId: I,
        submitCode: s == null ? undefined : s.submitCode,
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
