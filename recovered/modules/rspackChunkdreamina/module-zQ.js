import n from "SR";
import { S } from "./module-hqG.js";
import { Lk } from "./module-jRK.js";
import { d as d_1 } from "./module-xN_3.js";
import { A } from "./module-Y0_2.js";
import { NO } from "./module-cks.js";
function d(e) {
  if (e && typeof e === "object" && !Array.isArray(e)) {
    return e;
  }
}
function u(e) {
  try {
    return d(typeof e === "string" ? JSON.parse(e) : e);
  } catch (e) {
    return;
  }
}
function v(e) {
  if (typeof e === "number" || (typeof e === "string" && e.trim())) {
    const t = Number(e);
    if (Number.isFinite(t)) {
      return t;
    }
    return undefined;
  }
}
export function Ce(e) {
  let t;
  const i = u(e);
  if (i) {
    const n = u(i.data);
    const r = d(n == null ? undefined : n.data);
    const ret = v(n == null ? undefined : n.ret);
    const submitCode = v(
      (t = d(r == null ? undefined : r.submit_info)) == null
        ? undefined
        : t.code,
    );
    const s = r == null ? undefined : r.submit_id;
    const l = r == null ? undefined : r.history_id;
    return {
      data: r,
      submitId: typeof s === "string" && s ? s : undefined,
      historyId: typeof l === "string" && l ? l : undefined,
      submitCode,
      ret,
      hasExplicitFailure:
        (typeof i.errmsg === "string" && !!i.errmsg.trim()) ||
        (ret !== undefined && ret !== 0 && ret !== 1020) ||
        (submitCode !== undefined && submitCode !== 0 && submitCode !== -1),
    };
  }
}
export function JL(e) {
  if (
    e instanceof n.NuroToolCallMessage &&
    (Lk(e) || NO(e) || A(e) || d_1(e))
  ) {
    return Ce(e.toolResult);
  }
}
export function y4(e) {
  const t = new Set();
  const i = new Set();
  for (const a of e) {
    const o = JL(a);
    if (o && a instanceof n.NuroToolCallMessage) {
      if (o.hasExplicitFailure) {
        for (const s of [o.submitId, S(a, "submit_id")]) {
          if (s) {
            t.add(s);
          }
        }
      } else {
        if (o.submitId) {
          i.add(o.submitId);
        }
      }
    }
  }
  for (const l of i) {
    t.delete(l);
  }
  return t;
}
