import i from "oa";
import s from "bk";
import a from "M8X";
import n from "yMd";
import { M } from "./module-wSn.js";
import { B } from "./module-pk.js";
export function r(e, t) {
  let r;
  let c;
  let u;
  const { targetAIGCData, metricsExtra, submitId, input, isRegenerate } = t;
  const generateCount = a.cQ(e, M).updateGenerateCount(input);
  const enterFrom =
    (r =
      (c = metricsExtra == null ? undefined : metricsExtra.enterFrom) != null
        ? c
        : targetAIGCData == null || (u = targetAIGCData.metricsExtra) == null
          ? undefined
          : u.enterFrom) != null
      ? r
      : "click";
  const f = {
    promptSource: n.lY.Custom,
    generateCount,
    originItemId: "itemId" in input ? input.itemId : undefined,
  };
  const I = (e) => {
    if (e) {
      Object.keys(e).forEach((t) => {
        if (e[t] !== undefined) {
          Object.assign(f, {
            [t]: e[t],
          });
        }
      });
    }
  };
  I(targetAIGCData == null ? undefined : targetAIGCData.metricsExtra);
  I(metricsExtra);
  I(input.metricsExtra);
  const sceneOptions = B(
    targetAIGCData == null ? undefined : targetAIGCData.metricsExtra,
    input.metricsExtra,
  );
  return {
    metricsExtra: s._(i._({}, f), {
      generateCount,
      generateId: submitId,
      isRegenerate,
      enterFrom,
      sceneOptions,
    }),
  };
}
