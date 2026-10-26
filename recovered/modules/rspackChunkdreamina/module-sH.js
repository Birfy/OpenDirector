import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DACutoutDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.cutoutInfo = undefined;
  }
}
a.initMetadataFor(
  "class",
  DACutoutDraftReq,
  "DACutoutDraftReq",
  undefined,
  [n],
  "cutout_draft_builder",
);
export class DACutoutDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    let s = new o.DAImageUnifiedGenerateAbility();
    s.generateType = o.DAAIGCGenerateType.cutout;
    let d = new o.UnifiedAbility();
    let l = new o.AbilityParam();
    l.resource_list = [];
    let c = new o.ImageInputResource();
    c.resource_type = o.ResourceType.IMAGE;
    c.purpose = o.ResourcePurpose.ORIGINAL_IMAGE;
    let p = new o.ResourceContent();
    let u = new o.ImageContent();
    let f = new o.DAImageResource();
    f.name = "origin";
    f.uri = (t = e.cutoutInfo) == null ? undefined : t.originUri;
    p.image = u;
    u.image_content = f;
    c.content = p;
    if ((i = l.resource_list) != null) {
      i.push(c);
    }
    let v = new o.ImageInputResource();
    v.resource_type = o.ResourceType.IMAGE;
    v.purpose = o.ResourcePurpose.CUTOUT_IMAGE;
    let m = new o.ResourceContent();
    let h = new o.ImageContent();
    let g = new o.DAImageResource();
    g.name = "mask";
    g.uri = (r = e.cutoutInfo) == null ? undefined : r.cutoutUri;
    h.image_content = g;
    m.image = h;
    v.content = m;
    if ((a = l.resource_list) != null) {
      a.push(v);
    }
    s.unifiedAbilityList = [d];
    d.abilityParam = l;
    d.abilityCode = o.AbilityCode.Cutout;
    let y = new o.DAImageBaseComponent();
    y.generateType = o.DAImageGenerateType.unifiedGenerate;
    n = new o.DAImageGenerateAbilities();
    n.unifiedGenerate = s;
    y.abilities = n;
    return y;
  }
}
