import a from "I3";
import { F } from "./module-M6d_2.js";
import { G } from "./module-vq_2.js";
import { Q } from "./module-WC_3.js";
function l(e) {
  return e === "optimized_prompt" || e === "optimized_prompt_edited";
}
export function W(e, t) {
  let i;
  let d;
  let u;
  let s;
  let c;
  let m;
  const v = {};
  const p = (c = t.originalInput) == null ? undefined : c.videoGenInputs[0];
  const f = ((e) => {
    const { promptEnhancementInfo } = e.taskExtra;
    if (promptEnhancementInfo) {
      const i = a.j(promptEnhancementInfo);
      if (i && typeof i === "object") {
        return i;
      }
    }
  })(t);
  const g = ((e) => {
    if (e && (e.operationType === "accepted" || l(e.promptType))) {
      let t;
      const i = (t = e.finalPrompt) != null ? t : e.optimizedPrompt;
      if (i == null ? undefined : i.trim()) {
        return i;
      }
      return undefined;
    }
  })(f);
  let y = "";
  if (p == null ? undefined : p.unifiedEditInput) {
    y = G(p.unifiedEditInput);
  }
  if (!y) {
    y = (m = p == null ? undefined : p.prompt) != null ? m : "";
  }
  if (g) {
    y = g;
  }
  v.prompt = y;
  v.promptCnt = y.length;
  v.imagePromptCnt = Q(t);
  const I = g
    ? (i = f == null ? undefined : f.promptSource) != null
      ? i
      : "prompt_optimize"
    : undefined;
  const T =
    (d = f == null ? undefined : f.promptType) != null
      ? d
      : t.taskExtra.promptType;
  const P = l(T) ? "prompt_optimize" : undefined;
  const h = I != null ? I : P;
  const promptSource = t.taskExtra.promptSource;
  v.promptSource = F(t)
    ? h != null
      ? h
      : "agent"
    : (u = h != null ? h : promptSource) != null
      ? u
      : "custom";
  v.promptType = T != null ? T : "original_prompt";
  v.peTaskId =
    (s = f == null ? undefined : f.peTaskId) != null ? s : t.taskExtra.peTaskId;
  e.setParams(v);
}
