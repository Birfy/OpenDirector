import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DATextToImageDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.modelReqKey = undefined;
    this.prompt = undefined;
    this.seed = undefined;
    this.sampleStrength = undefined;
    this.targetImageInfo = undefined;
    this.generateOption = undefined;
    this.agent = undefined;
  }
}
a.initMetadataFor(
  "class",
  DATextToImageDraftReq,
  "DATextToImageDraftReq",
  undefined,
  [n],
  "text_to_image_draft_builder",
);
export class DATextToImageDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n = new o.DAImageGenerateAbility();
    r = new o.DAGenCoreParam();
    r.model = e.modelReqKey;
    r.prompt = e.prompt;
    r.seed = e.seed;
    r.sampleStrength = e.sampleStrength;
    r.imageRatio = (t = e.targetImageInfo) == null ? undefined : t.ratioType;
    r.intelligentRatio =
      (i = e.targetImageInfo) == null ? undefined : i.intelligentRatio;
    r.largeImageInfo = o.DATargetImageInfoUtil.convertToDAReqImageInfo(
      e.targetImageInfo,
    );
    n.coreParam = r;
    let s = new o.DAImageBaseComponent();
    s.generateType = o.DAImageGenerateType.generate;
    s.agent = e.agent;
    a = new o.DAImageGenerateAbilities();
    a.generate = n;
    a.genOption = e.generateOption;
    s.abilities = a;
    return s;
  }
  verifySelf(e, t) {
    if (e.componentList.length != 1) {
      t.appendError("文生图只能作为根节点存在");
    }
    return t;
  }
}
