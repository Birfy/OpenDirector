import o from "VTK";
import r from "E9";
import {
  CreateAgentDraftResp,
  CreateAgentDraftRetCode,
} from "./module-Zl_2.js";
require("./module-Rd.js").getOrCreateInterface(
  "builder_draft_builder",
  "DADraftBuildReq",
);
export class IAgentDraftBuilder {
  buildDraft(e) {
    let t;
    let i;
    let n = this.convertAgentDraftReqToDraftBuildReq(e);
    let n_data = n.data;
    if (n_data === undefined) {
      return CreateAgentDraftResp.buildErrorRsp(
        CreateAgentDraftRetCode.convertDraftBuildQeqFailed,
        `req \u{8F6C}\u{6362}\u{5931}\u{8D25}\u{FF0C}msg=${n.msg} req=${(t = e.toJSONString()) != null ? t : "undefined"}`,
      );
    }
    n_data.aigcMode = e.aigcMode;
    i = new r.DADraftMetadata();
    i.createdPlatform = r.DADraftCreatedPlatform.SERVER;
    i.createdTimeInMs = Date.now().toString();
    i.creationAgentVersion = e.creationAgentVersion;
    n_data.metaData = i;
    let d = this.internalDraftBuilder().buildDraft(
      o.DAGenSource.NEW_GEN,
      n_data,
    );
    return CreateAgentDraftResp.buildSucceedRsp(d);
  }
}
export const DraftBuildReqConvertResult = class e {
  static buildSucceedResult(t) {
    return new e("", t);
  }
  static buildErrorResult(t) {
    return new e(t, undefined);
  }
  constructor(e, t) {
    this.msg = e;
    this.data = t;
  }
};
