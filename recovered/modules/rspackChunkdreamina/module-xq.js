import o from "AB";
import r from "Tpe";
import a from "Tt0";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
import s from "./module-Rd.js";
s.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class TextToImageAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new a.DATextToImageDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let d;
    let l;
    let p = new a.DATextToImageDraftReq({
      aigcGenType: o.DAAIGCGenerateType.text2image,
      modelReqKey: (t = e.imageDraftReq) == null ? undefined : t.modelReqKey,
      prompt: (i = e.imageDraftReq) == null ? undefined : i.prompt,
      seed: s.Float64.toInt(Math.floor(2100000000 * Math.random())),
      sampleStrength: 0.5,
      targetImageInfo:
        (d = e.imageDraftReq) == null ? undefined : d.targetImageInfo,
      generateOption:
        r.DAImageGenerateOptionInfoUtil.convertToDAImageGenerateOption(
          (l = e.imageDraftReq) == null ? undefined : l.imageGenerateOption,
        ),
    });
    return DraftBuildReqConvertResult.buildSucceedResult(p);
  }
}
