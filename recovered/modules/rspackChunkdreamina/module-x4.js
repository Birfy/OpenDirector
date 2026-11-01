import { F } from "./module-bD.js";
export function C(e, t) {
  let i;
  let n;
  let a;
  let o;
  let l;
  let s;
  let u;
  const d = {};
  const { text2imageParams, blendImageInfo, prompt } = t;
  d.prompt =
    prompt != null
      ? prompt
      : text2imageParams == null
        ? undefined
        : text2imageParams.prompt;
  d.promptCnt =
    (i =
      (n = prompt == null ? undefined : prompt.length) != null
        ? n
        : (o = text2imageParams.prompt) == null
          ? undefined
          : o.length) != null
      ? i
      : 0;
  d.imagePromptCnt =
    ((a = blendImageInfo == null ? undefined : blendImageInfo.length) != null
      ? a
      : 0) + F((l = t.unifiedEditInput) == null ? undefined : l.materialList);
  d.promptSource =
    ((s = t.agenticMetricsExtra) == null ? undefined : s.promptSource) ||
    ((u = t.metricsExtra) == null ? undefined : u.promptSource) ||
    "custom";
  ((e, t) => {
    if (e.promptSource === "suggestion") {
      if (
        t.agenticMetricsExtra &&
        t.agenticMetricsExtra.prompt !==
          t.agenticMetricsExtra.generateSuggestionText
      ) {
        e.promptSource = "custom";
        return;
      }
      if (
        t.metricsExtra &&
        e.prompt !== t.metricsExtra.generateSuggestionText
      ) {
        e.promptSource = "custom";
      }
    }
  })(d, t);
  e.setParams(d);
}
