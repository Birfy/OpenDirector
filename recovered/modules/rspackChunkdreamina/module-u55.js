import r from "I3";
import { F } from "./module-M6d.js";
import { G } from "./module-vq.js";
import { Q } from "./module-WC_2.js";
function l(e) {
  return e === "optimized_prompt" || e === "optimized_prompt_edited";
}
export function W(e, t) {
  let i;
  let s;
  let u;
  let d;
  let c;
  let m;
  const p = {};
  const v = (c = t.originalInput) == null ? undefined : c.videoGenInputs[0];
  const f = ((e) => {
    const { promptEnhancementInfo } = e.taskExtra;
    if (promptEnhancementInfo) {
      const i = r.j(promptEnhancementInfo);
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
  let h = "";
  if (v == null ? undefined : v.unifiedEditInput) {
    h = G(v.unifiedEditInput);
  }
  if (!h) {
    h = (m = v == null ? undefined : v.prompt) != null ? m : "";
  }
  if (g) {
    h = g;
  }
  p.prompt = h;
  p.promptCnt = h.length;
  p.imagePromptCnt = Q(t);
  const y = g
    ? (i = f == null ? undefined : f.promptSource) != null
      ? i
      : "prompt_optimize"
    : undefined;
  const _ =
    (s = f == null ? undefined : f.promptType) != null
      ? s
      : t.taskExtra.promptType;
  const b = l(_) ? "prompt_optimize" : undefined;
  const I = y != null ? y : b;
  const promptSource = t.taskExtra.promptSource;
  p.promptSource = F(t)
    ? I != null
      ? I
      : "agent"
    : (u = I != null ? I : promptSource) != null
      ? u
      : "custom";
  p.promptType = _ != null ? _ : "original_prompt";
  p.peTaskId =
    (d = f == null ? undefined : f.peTaskId) != null ? d : t.taskExtra.peTaskId;
  e.setParams(p);
}
