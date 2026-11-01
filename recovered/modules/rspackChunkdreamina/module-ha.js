import n from "SR";
import r from "Rb";
import { i as i_1 } from "./module-AI_2.js";
import { d } from "./module-m5.js";
import { B } from "./module-aiI.js";
import { _ } from "./module-Pu.js";
import { o } from "./module-MFv.js";
import { u } from "./module-OGw.js";
import { I } from "./module-xXi.js";
import { k } from "./module-jR_2.js";
function m(e, createTime, toolResult) {
  let n;
  let r;
  let a;
  const o = k(e.commerce_info, toolResult);
  return {
    submitId: e.submit_id,
    resultCode: e.result_code,
    benefitTriplets:
      (r = e.commerce_info) == null || (n = r.triplets) == null
        ? undefined
        : n.map((e) => {
            var t;
            var i;
            var n;
            return {
              resourceType: (t = e.resource_type) != null ? t : "",
              resourceId: (i = e.resource_id) != null ? i : "",
              benefitType: (n = e.benefit_type) != null ? n : "",
            };
          }),
    submitCode: (a = e.submit_info) == null ? undefined : a.code,
    createTime,
    creditCount: o.creditCount,
    creditDisplayInfo: o.creditDisplayInfo,
  };
}
export function K(e) {
  const t = [];
  for (const i of e) {
    if (i instanceof n.NuroToolCallMessage) {
      if (_(i)) {
        continue;
      }
      const c = ((e) => {
        const t = o(e);
        if (t) {
          return t;
        }
        const i = I(e);
        if (i) {
          return i;
        }
        const n = u(e);
        if (n) {
          return n;
        }
        if (e.toolName === i_1.GenerateMultiModalToMarketingVideo) {
          let l;
          const submitId =
            (l = e.toolExtra) == null ? undefined : l.get("submit_id");
          let p = null;
          if (e.toolResult) {
            try {
              p = r.getInsertVideoResp(e.toolResult);
            } catch (e) {}
          }
          if (p == null ? undefined : p.submit_id) {
            return m(p, String(e.createTime), e.toolResult);
          }
          if (submitId) {
            return {
              submitId,
              createTime: String(e.createTime),
            };
          }
          return null;
        }
        if (!e.toolResult) {
          return null;
        }
        try {
          let f = null;
          if (d(e)) {
            f = r.getInsertImageToolResp(e.toolResult);
          } else if (B(e)) {
            f = r.getInsertVideoResp(e.toolResult);
          }
          if (f == null ? undefined : f.submit_id) {
            return m(f, String(e.createTime), e.toolResult);
          }
        } catch (e) {}
        return null;
      })(i);
      if (c) {
        t.push(c);
      }
    } else if (i instanceof n.NuroCanvasMessage) {
      const p = ((e) => {
        const t = [];
        if (!e.nodes) {
          return t;
        }
        for (const i of e.nodes) {
          if (i.toolResult) {
            try {
              let n = null;
              if (d(i)) {
                n = r.getInsertImageToolResp(i.toolResult);
              } else if (B(i)) {
                n = r.getInsertVideoResp(i.toolResult);
              }
              if (n == null ? undefined : n.submit_id) {
                t.push(m(n, String(i.createTime), i.toolResult));
              }
            } catch (e) {}
          }
        }
        return t;
      })(i);
      t.push(...p);
    }
  }
  return t;
}
