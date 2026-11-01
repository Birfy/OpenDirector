import o from "s8";
import r from "sbO";
import a from "Ut";
import {
  DraftBuildReqConvertResult,
  IAgentDraftBuilder,
} from "./module-t5w.js";
import { convertMergeVideoInput } from "./module-Ih.js";
import { convertUnifiedEditInputAgentToDraft } from "./module-TS_2.js";
import l from "./module-Rd.js";
l.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class GenVideoAgentDraftBuilder extends IAgentDraftBuilder {
  constructor() {
    super(...arguments);
    this._mergeVideoMode = false;
  }
  internalDraftBuilder() {
    if (this._mergeVideoMode) {
      return new a.DAMergeVideoDraftBuilder();
    }
    return new a.DAGenVideoDraftBuilder();
  }
  convertAgentDraftReqToDraftBuildReq(e) {
    let t;
    let i;
    let p;
    let u;
    let c;
    let m;
    let v;
    let g;
    let f;
    let y;
    let firstFrameImageInfo;
    let endFrameImageInfo;
    let multiFramesInfo;
    this._mergeVideoMode = false;
    if (
      ((t = e.videoDraftReq) == null ? undefined : t.firstFrameImageUri) !=
      undefined
    ) {
      firstFrameImageInfo = new a.DAImageResource();
      firstFrameImageInfo.uri = e.videoDraftReq.firstFrameImageUri;
      firstFrameImageInfo.sourceFrom = a.DAResourceSourceFrom.upload;
    }
    if (
      ((i = e.videoDraftReq) == null ? undefined : i.endFrameImageUri) !=
      undefined
    ) {
      endFrameImageInfo = new a.DAImageResource();
      endFrameImageInfo.uri = e.videoDraftReq.endFrameImageUri;
      endFrameImageInfo.sourceFrom = a.DAResourceSourceFrom.upload;
    }
    if (
      ((p = e.videoDraftReq) == null ? undefined : p.multiFrameInfos) !=
      undefined
    ) {
      multiFramesInfo = o.DAMultiFrameInfoUtil.convertToDAMultiFrames(
        e.videoDraftReq.multiFrameInfos,
      );
    }
    let A = convertUnifiedEditInputAgentToDraft(
      (u = e.videoDraftReq) == null ? undefined : u.unifiedEditInput,
    );
    if (A.msg != undefined && A.msg != "") {
      return DraftBuildReqConvertResult.buildErrorResult(A.msg);
    }
    let b = convertMergeVideoInput(
      (c = e.videoDraftReq) == null ? undefined : c.mergeVideoInput,
    );
    if (b.msg != undefined && b.msg != "") {
      return DraftBuildReqConvertResult.buildErrorResult(b.msg);
    }
    if (b.data != undefined) {
      this._mergeVideoMode = true;
      let t = new a.DAMergeVideoDraftReq({
        aigcGenType: a.DAAIGCGenerateType.mergeVideo,
        mergeVideoInput: b.data,
        refInfo: (m = e.videoDraftReq) == null ? undefined : m.refInfo,
      });
      return DraftBuildReqConvertResult.buildSucceedResult(t);
    }
    let D = new r.DAGenVideoDraftReq({
      aigcGenType: a.DAAIGCGenerateType.text2Video,
      seed: l.Float64.toInt(Math.floor(2100000000 * Math.random())),
      modelReqKey: (v = e.videoDraftReq) == null ? undefined : v.modelReqKey,
      prompt: (g = e.videoDraftReq) == null ? undefined : g.prompt,
      refInfo: (f = e.videoDraftReq) == null ? undefined : f.refInfo,
      targetVideoInfo:
        (y = e.videoDraftReq) == null ? undefined : y.targetVideoInfo,
      firstFrameImageInfo,
      endFrameImageInfo,
      multiFramesInfo,
      unifiedEditInput: A.data,
    });
    return DraftBuildReqConvertResult.buildSucceedResult(D);
  }
}
