import { Ve } from "./module-Q9p.js";
export function v(e) {
  let t;
  return (
    !!e.modelReqKey &&
    !!Ve({
      phase: "before_standard",
      modelReqKey: e.modelReqKey,
      resolution: (t = e.resolution) != null ? t : "",
      durationSeconds: e.durationSeconds,
    })
  );
}
