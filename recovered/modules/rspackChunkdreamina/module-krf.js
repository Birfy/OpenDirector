import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DARemoveBackgroundDraftReq extends a.RTSDataClass {
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
  DARemoveBackgroundDraftReq,
  "DARemoveBackgroundDraftReq",
  undefined,
  [n],
  "remove_background_draft_builder",
);
export class DARemoveBackgroundDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let d = new o.DAImageUnifiedGenerateAbility();
    d.generateType = o.DAAIGCGenerateType.saliency_segmentation;
    let l = new o.UnifiedAbility();
    let c = new o.AbilityParam();
    c.resource_list = [];
    let p = new o.ImageInputResource();
    if (e.imageRes != undefined) {
      p.resource_type = o.ResourceType.IMAGE;
      p.purpose = o.ResourcePurpose.ORIGINAL_IMAGE;
      let t = new o.ResourceContent();
      let i = new o.ImageContent();
      i.image_content = e.imageRes;
      t.image = i;
      p.content = t;
    } else {
      p.resource_type = o.ResourceType.REFERENCE;
      p.purpose = o.ResourcePurpose.ORIGINAL_IMAGE;
      let n = new o.ResourceContent();
      let s = new o.ReferenceContent();
      s.history_id =
        (i = (t = e.refInfo) == null ? undefined : t.originHistoryId) == null
          ? undefined
          : i.toString();
      s.item_id =
        (a = (r = e.refInfo) == null ? undefined : r.refItemId) == null
          ? undefined
          : a.toString();
      n.ref = s;
      p.content = n;
    }
    if ((n = c.resource_list) != null) {
      n.push(p);
    }
    d.unifiedAbilityList = [l];
    l.abilityParam = c;
    l.abilityCode = o.AbilityCode.RmBackground;
    let u = new o.DAImageBaseComponent();
    u.generateType = o.DAImageGenerateType.unifiedGenerate;
    s = new o.DAImageGenerateAbilities();
    s.unifiedGenerate = d;
    u.abilities = s;
    u.aiCamera = e.aiCameraAbility;
    return u;
  }
}
