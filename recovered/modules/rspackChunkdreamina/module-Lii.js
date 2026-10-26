import i from "oa";
import s from "bk";
import { B } from "./module-pk.js";
export function y(e) {
  let t;
  let r;
  const { targetMetricsExtra, metricsExtra, input, isRegenerate } = e;
  const enterFrom =
    (t =
      (r = metricsExtra == null ? undefined : metricsExtra.enterFrom) != null
        ? r
        : targetMetricsExtra == null
          ? undefined
          : targetMetricsExtra.enterFrom) != null
      ? t
      : "click";
  const l = {
    isAiLyric: false,
    lyricCnt: 0,
    isRandomInspiration: false,
  };
  const _ = (e) => {
    if (e) {
      Object.keys(e).forEach((t) => {
        if (e[t] !== undefined) {
          Object.assign(l, {
            [t]: e[t],
          });
        }
      });
    }
  };
  _(targetMetricsExtra);
  _(metricsExtra);
  _(input.metricsExtra);
  const sceneOptions = B(targetMetricsExtra, input.metricsExtra);
  return {
    metricsExtra: s._(i._({}, l), {
      isRegenerate,
      enterFrom,
      sceneOptions,
    }),
  };
}
