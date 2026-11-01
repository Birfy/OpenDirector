import n from "qa";
import { o as o_1 } from "./module-YB_2.js";
import o from "Ut";
export function X(e) {
  let t;
  const { videoDraft, resources = [], aigcImage } = e;
  if (
    (aigcImage == null ? undefined : aigcImage.commonAttr) &&
    aigcImage.itemId
  ) {
    const d =
      (t = aigcImage.aigcImageParams) == null ? undefined : t.text2imageParams;
    const u = videoDraft
      ? ((e) => {
          const t = new o.DADraft();
          const i = (
            typeof e === "string" ? new o.DADraft(e) : e
          ).componentList.find((e) => e instanceof o.DAImageBaseComponent);
          if (i) {
            t.setMainComponent(i);
            return t;
          }
        })(videoDraft)
      : undefined;
    const m = new o_1(u, resources);
    const s = m.textToImageParams(d);
    const { modelConfig } = s;
    const text2imageParams = n._(s, ["modelConfig"]);
    const blendImageInfo = m.blendImageInfo({
      aigcImageParams: aigcImage.aigcImageParams,
      commonAttr: aigcImage.commonAttr,
    });
    return {
      id: aigcImage.itemId,
      text2imageParams,
      blendImageInfo,
      modelConfig,
    };
  }
}
