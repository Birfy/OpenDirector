import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DASubtitleEraseDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.subtitleErase = undefined;
  }
}
a.initMetadataFor(
  "class",
  DASubtitleEraseDraftReq,
  "DASubtitleEraseDraftReq",
  undefined,
  [n],
  "subtitle_erase_draft_builder",
);
export class DASubtitleEraseDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t = new o.DAVideoGenerateAbilities();
    t.subtitleErase = e.subtitleErase;
    let i = new o.DAVideoBaseComponent();
    i.generateType = o.DAVideoGenerateType.subtitleErase;
    i.processType = o.DAVideoProcessType.SubtitleErase;
    i.abilities = t;
    return i;
  }
}
