import n from "Rb";
import { k } from "./module-jR_2.js";
import { d } from "./module-xN_3.js";
import { Ce } from "./module-zQ.js";
export function u(e) {
  if (!d(e)) {
    return null;
  }
  const t = (u = e.toolExtra) == null ? undefined : u.get("submit_id");
  const createTime = String(e.createTime);
  if (e.toolResult) {
    const s = Ce(e.toolResult);
    try {
      const l = n.getGenerateMediaToolResp(
        JSON.stringify((c = s == null ? undefined : s.data) != null ? c : {}),
      );
      const d = (m = l.submit_id) != null ? m : t;
      if (d) {
        var u;
        var v;
        var c;
        var m;
        let p;
        let f;
        let g;
        let I;
        const _ = k(l.commerce_info, e.toolResult);
        return {
          submitId: d,
          resultCode: l.result_code,
          benefitTriplets:
            (g = l.commerce_info) == null || (f = g.triplets) == null
              ? undefined
              : f.map((e) => {
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
            (p = s == null ? undefined : s.submitCode) != null
              ? p
              : (I = l.submit_info) == null
                ? undefined
                : I.code,
          createTime,
          creditCount: _.creditCount,
          creditDisplayInfo: _.creditDisplayInfo,
        };
      }
    } catch (e) {}
    const y = (v = s == null ? undefined : s.submitId) != null ? v : t;
    if (y) {
      return {
        submitId: y,
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
