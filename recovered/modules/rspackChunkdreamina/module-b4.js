import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAImageProHDDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.proHDInfo = undefined;
    this.originImage = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAImageProHDDraftReq,
  "DAImageProHDDraftReq",
  undefined,
  [n],
  "image_pro_hd_draft_builder",
);
export class DAImageProHDDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let d;
    n = new o.DAPostEditParam();
    n.originImage = e.originImage;
    let l = n;
    s = new o.DAImageProHDAbility();
    s.posteditParam = l;
    s.resolutionType = (t = e.proHDInfo) == null ? undefined : t.resolutionType;
    s.originalImageStrength =
      (i = e.proHDInfo) == null ? undefined : i.originalImageStrength;
    s.detailStrength = (r = e.proHDInfo) == null ? undefined : r.detailStrength;
    s.hdSceneType = (a = e.proHDInfo) == null ? undefined : a.hdSceneType;
    let c = s;
    let p = new o.DAImageBaseComponent();
    p.generateType = o.DAImageGenerateType.proHD;
    d = new o.DAImageGenerateAbilities();
    d.proHD = c;
    p.abilities = d;
    return p;
  }
}
