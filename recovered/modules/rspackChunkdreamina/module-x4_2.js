import { F } from "./module-bD_3.js";
export function C(e, t) {
  let i;
  let n;
  let r;
  let o;
  let l;
  let d;
  let u;
  const s = {};
  const { text2imageParams, blendImageInfo, prompt } = t;
  s.prompt =
    prompt != null
      ? prompt
      : text2imageParams == null
        ? undefined
        : text2imageParams.prompt;
  s.promptCnt =
    (i =
      (n = prompt == null ? undefined : prompt.length) != null
        ? n
        : (o = text2imageParams.prompt) == null
          ? undefined
          : o.length) != null
      ? i
      : 0;
  s.imagePromptCnt =
    ((r = blendImageInfo == null ? undefined : blendImageInfo.length) != null
      ? r
      : 0) + F((l = t.unifiedEditInput) == null ? undefined : l.materialList);
  s.promptSource =
    ((d = t.agenticMetricsExtra) == null ? undefined : d.promptSource) ||
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
  })(s, t);
  e.setParams(s);
}
