import a from "Ut";
import { L } from "./module-zp_2.js";
import { F } from "./module-bD_3.js";
export function Q(e) {
  if (L(e)) {
    return 1;
  }
  const t = (i = e.originalInput) == null ? undefined : i.videoGenInputs[0];
  if (!t) {
    return 0;
  }
  if (t.multiFrames) {
    return t.multiFrames.length;
  }
  if (t.unifiedEditInput) {
    var i;
    var o;
    var l;
    let d;
    const { materialList, metaList } = t.unifiedEditInput;
    const c =
      ((d = e.taskExtra.videoProcessType) != null ? d : e.lastProcessFlow) ===
      a.DAVideoProcessType.VideoEdit;
    const m = new Set(
      metaList
        .map((e) => {
          var t;
          if ((t = e.materialRef) == null) {
            return undefined;
          }
          return t.materialIdx;
        })
        .filter((e) => typeof e === "number"),
    );
    return (
      materialList.filter(
        (e, t) => e.materialType !== "subject" && (!c || m.has(t)),
      ).length + F(materialList)
    );
  }
  return (
    Number(!!((o = t.firstFrameImage) == null ? undefined : o.imageUrl)) +
    Number(!!((l = t.endFrameImage) == null ? undefined : l.imageUrl))
  );
}
