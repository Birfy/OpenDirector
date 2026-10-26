import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAImageToImageDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.modelReqKey = undefined;
    this.prompt = undefined;
    this.sampleStrength = undefined;
    this.targetImageInfo = undefined;
    this.promptPlaceholderInfoList = undefined;
    this.blendItemList = undefined;
    this.aiCameraAbility = undefined;
    this.genOption = undefined;
    this.unifiedEditInput = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAImageToImageDraftReq,
  "DAImageToImageDraftReq",
  undefined,
  [n],
  "image_to_image_draft_builder",
);
export class DAImageToImageDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    r = new o.DAGenCoreParam();
    r.model = e.modelReqKey;
    r.prompt = e.prompt;
    r.sampleStrength = e.sampleStrength;
    r.imageRatio = (t = e.targetImageInfo) == null ? undefined : t.ratioType;
    r.intelligentRatio =
      (i = e.targetImageInfo) == null ? undefined : i.intelligentRatio;
    r.largeImageInfo = o.DATargetImageInfoUtil.convertToDAReqImageInfo(
      e.targetImageInfo,
    );
    let s = r;
    a = new o.DAImageBlendAbility();
    a.coreParam = s;
    a.abilityList = e.blendItemList;
    a.promptPlaceholderInfoList = e.promptPlaceholderInfoList;
    a.posteditParam = new o.DAPostEditParam();
    a.unifiedEditInput = e.unifiedEditInput;
    let d = a;
    let l = new o.DAImageBaseComponent();
    l.generateType = o.DAImageGenerateType.blend;
    n = new o.DAImageGenerateAbilities();
    n.blend = d;
    n.genOption = e.genOption;
    l.abilities = n;
    l.aiCamera = e.aiCameraAbility;
    return l;
  }
}
