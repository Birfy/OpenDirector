import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAVideoTemplateDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.templateId = undefined;
    this.videoTemplateItemId = undefined;
    this.imageInfo = undefined;
    this.modelReqKey = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAVideoTemplateDraftReq,
  "DAVideoTemplateDraftReq",
  undefined,
  [n],
  "video_template_draft_builder",
);
export class DAVideoTemplateDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n = new o.DAVideoGenInput();
    r = new o.DAVideoGenV2V();
    a = new o.DAVideoGenVideoTemplate();
    a.enable = true;
    a.videoTemplate = e.videoTemplateItemId;
    a.imageInfo = e.imageInfo;
    r.videoTemplate = a;
    n.v2vOpt = r;
    n.templateId = e.templateId;
    let s = new o.DAText2VideoParams();
    s.videoGenInputs = [n];
    s.modelReqKey = e.modelReqKey;
    let d = new o.DAVideoRefParam();
    d.generateType = o.DAAIGCGenerateType.videoTemplate;
    d.originHistoryId = (t = e.refInfo) == null ? undefined : t.originHistoryId;
    d.itemId = (i = e.refInfo) == null ? undefined : i.refItemId;
    let l = new o.DAGenVideoAbility();
    l.text2VideoParams = s;
    l.videoRefParams = d;
    let c = new o.DAVideoGenerateAbilities();
    c.genVideo = l;
    let p = new o.DAVideoBaseComponent();
    p.generateType = o.DAVideoGenerateType.videoTemplate;
    p.abilities = c;
    return p;
  }
}
