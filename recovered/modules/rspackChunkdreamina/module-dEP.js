import r from "M8X";
import a from "SZS";
import n from "qnN";
import o from "Os";
import s from "lu4";
import d from "ELo";
export function z(e) {
  let t;
  let i;
  const {
    containerService,
    isRegenerate,
    targetAIGCData,
    action,
    originAIGCData,
    modelReqKey,
    generateCount,
  } = e;
  if (isRegenerate) {
    return s.C({
      feats:
        targetAIGCData == null || (t = targetAIGCData.modelInfo) == null
          ? undefined
          : t.feats,
      generateCount: n.EZ(generateCount) ? generateCount : a.qV,
    });
  }
  if (action === o.f.Continue) {
    return s.C({
      feats:
        originAIGCData == null || (i = originAIGCData.modelInfo) == null
          ? undefined
          : i.feats,
      generateCount: n.XT(
        originAIGCData == null ? undefined : originAIGCData.totalImageCount,
        originAIGCData == null ? undefined : originAIGCData.finishedImageCount,
      ),
    });
  }
  if (action !== undefined || !n.EZ(generateCount)) {
    return 1;
  }
  const v = r.cQ(containerService, d.B).getImageModelConfig(modelReqKey);
  return s.C({
    feats: v == null ? undefined : v.feats,
    generateCount,
  });
}
