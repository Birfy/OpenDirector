import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DANormalHdDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.imageRes = undefined;
    this.aiCameraAbility = undefined;
  }
}
a.initMetadataFor(
  "class",
  DANormalHdDraftReq,
  "DANormalHdDraftReq",
  undefined,
  [n],
  "hd_draft_builder",
);
export class DANormalHdDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    t = new o.DAImageNormalHDAbility();
    i = new o.DAPostEditParam();
    i.originImage = e.imageRes;
    t.posteditParam = i;
    let a = t;
    let n = new o.DAImageBaseComponent();
    n.generateType = o.DAImageGenerateType.normalHD;
    r = new o.DAImageGenerateAbilities();
    r.normalHD = a;
    n.abilities = r;
    n.aiCamera = e.aiCameraAbility;
    return n;
  }
}
