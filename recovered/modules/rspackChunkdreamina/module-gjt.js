import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAAIEffectDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.aiEffectId = undefined;
    this.aiEffectName = undefined;
    this.aiEffectReqKey = undefined;
    this.aiEffectInputs = undefined;
    this.width = undefined;
    this.height = undefined;
    this.cutSameSeed = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAAIEffectDraftReq,
  "DAAIEffectDraftReq",
  undefined,
  [n],
  "ai_effect_draft_builder",
);
export class DAAIEffectDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    a = new o.AIEffectGenerateAbility();
    a.aiEffectID = e.aiEffectId;
    a.aiEffectName = e.aiEffectName;
    a.reqKey = e.aiEffectReqKey;
    a.width = (i = e.width) != null ? i : 0;
    a.height = (r = e.height) != null ? r : 0;
    a.seed = e.cutSameSeed;
    a.inputs = e.aiEffectInputs;
    let s = a;
    let d = new o.DAAIEffectBaseComponent();
    d.aigcGenerateType =
      (t = e.aigcGenType) != null ? t : o.DAAIGCGenerateType.aIEffectWorkImage;
    n = new o.AIEffectGenerateAbilities();
    n.generate = s;
    d.abilities = n;
    return d;
  }
  verifySelf(e, t) {
    if (e.componentList.length != 1) {
      t.appendError("AI 特效只能作为根节点存在");
    }
    return t;
  }
}
