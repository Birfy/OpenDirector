import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAMergeVideoDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.mergeVideoInput = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAMergeVideoDraftReq,
  "DAMergeVideoDraftReq",
  undefined,
  [n],
  "merge_video_draft_builder",
);
export class DAMergeVideoDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t = new o.DAMergeVideoAbility();
    t.mergeVideoInput = e.mergeVideoInput;
    let i = new o.DAVideoGenerateAbilities();
    i.mergeVideo = t;
    let r = new o.DAVideoBaseComponent();
    r.generateType = o.DAVideoGenerateType.mergeVideo;
    r.abilities = i;
    return r;
  }
}
