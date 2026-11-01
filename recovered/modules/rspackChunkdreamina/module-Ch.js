import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAPaintingDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.prompt = undefined;
    this.targetImageInfo = undefined;
    this.strength = undefined;
    this.refImageUri = undefined;
    this.maskUri = undefined;
    this.imageRes = undefined;
    this.aiCameraAbility = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAPaintingDraftReq,
  "DAPaintingDraftReq",
  undefined,
  [n],
  "painting_draft_builder",
);
export class DAPaintingDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let a;
    let n;
    let s;
    let d;
    a = new o.DAGenCoreParam();
    a.prompt = e.prompt;
    a.largeImageInfo = o.DATargetImageInfoUtil.convertToDAReqImageInfo(
      e.targetImageInfo,
    );
    if (e.aigcGenType === o.DAAIGCGenerateType.byteEditPainting) {
      a.strength = e.strength;
    }
    let l = a;
    n = new o.DAImagePaintingAbility();
    n.coreParam = l;
    s = new o.DAPostEditParam();
    s.originImage = e.imageRes;
    n.posteditParam = s;
    n.maskUri = e.maskUri;
    if (e.aigcGenType === o.DAAIGCGenerateType.byteEditPainting) {
      n.originUri = e.refImageUri;
    } else if (
      e.aigcGenType === o.DAAIGCGenerateType.imageFineTune ||
      e.aigcGenType === o.DAAIGCGenerateType.imageReconstruct ||
      e.aigcGenType === o.DAAIGCGenerateType.imageExtend
    ) {
      n.originUri = e.refImageUri;
      s.generateType =
        (t = e.aigcGenType) != null ? t : o.DAAIGCGenerateType.none;
      s.originHistoryId =
        (i = e.refInfo) == null ? undefined : i.originHistoryId;
      s.itemId = (r = e.refInfo) == null ? undefined : r.refItemId;
    }
    let c = n;
    let p = new o.DAImageBaseComponent();
    p.generateType = o.DAImageGenerateType.painting;
    d = new o.DAImageGenerateAbilities();
    d.painting = c;
    p.abilities = d;
    p.aiCamera = e.aiCameraAbility;
    return p;
  }
}
