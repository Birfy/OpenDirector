import o from "Ut";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
import { convertMergeVideoInput } from "./module-Ih.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class MergeVideoAgentDraftBuilder extends IAgentDraftBuilder {
  internalDraftBuilder() {
    return new o.DAMergeVideoDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let n = convertMergeVideoInput(
      (t = e.videoDraftReq) == null ? undefined : t.mergeVideoInput,
    );
    if (n.msg != undefined && n.msg != "") {
      return DraftBuildReqConvertResult.buildErrorResult(n.msg);
    }
    if (n.data === undefined) {
      return DraftBuildReqConvertResult.buildErrorResult(
        "mergeVideoInput is required",
      );
    }
    let s = new o.DAMergeVideoDraftReq({
      aigcGenType: o.DAAIGCGenerateType.mergeVideo,
      mergeVideoInput: n.data,
      refInfo: (i = e.videoDraftReq) == null ? undefined : i.refInfo,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(s);
  }
}
