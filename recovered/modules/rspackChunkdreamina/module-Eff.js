import o from "AB";
import r from "tlM";
import { AudioGenerateType } from "./module-gj.js";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class TextToMusicAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new r.DAAudioGenerateDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let e_audioDraftReq = e.audioDraftReq;
    if (e_audioDraftReq === undefined) {
      return DraftBuildReqConvertResult.buildErrorResult(
        "audioDraftReq is undefined",
      );
    }
    let t_prompt = e_audioDraftReq.prompt;
    if (t_prompt === undefined || t_prompt === "") {
      return DraftBuildReqConvertResult.buildErrorResult("prompt is empty");
    }
    let t_modelReqKey = e_audioDraftReq.modelReqKey;
    if (t_modelReqKey === undefined || t_modelReqKey === "") {
      return DraftBuildReqConvertResult.buildErrorResult(
        "modelReqKey is empty",
      );
    }
    let d = new r.DAAudioGenerateDraftReq({
      aigcGenType: o.DAAIGCGenerateType.text2Song,
      generateType: AudioGenerateType.GenerateSong,
      prompt: t_prompt,
      modelReqKey: t_modelReqKey,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(d);
  }
}
