import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAGenVideoDraftReq extends a.RTSDataClass {
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
    this.firstFrameImageInfo = undefined;
    this.endFrameImageInfo = undefined;
    this.targetVideoInfo = undefined;
    this.videoTaskExtra = undefined;
    this.vid = undefined;
    this.preTaskId = undefined;
    this.templateId = undefined;
    this.i2vOpt = undefined;
    this.multiFramesInfo = undefined;
    this.unifiedEditInput = undefined;
    this.longVideoInput = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAGenVideoDraftReq,
  "DAGenVideoDraftReq",
  undefined,
  [n],
  "gen_video_draft_builder",
);
export class DAGenVideoDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    let r;
    let n;
    let s;
    let d;
    let l;
    let c;
    let p;
    let u;
    let f;
    let v;
    let m;
    let h = new o.DAGenVideoAbility();
    h.videoTaskExtra = e.videoTaskExtra;
    h.videoRefParams = new o.DAVideoRefParam();
    f = new o.DAText2VideoParams();
    f.seed = a.Int.toInt64((t = e.seed) != null ? t : 0);
    f.modelReqKey = e.modelReqKey;
    f.videoAspectRatio = o.DAImageRatioTypeUtils.titleOfValue(
      (i = e.targetVideoInfo) == null ? undefined : i.ratioType,
    );
    f.videoGenInputs = [
      (((v = new o.DAVideoGenInput()).prompt = e.prompt),
      (v.lensMotionType =
        (r = e.targetVideoInfo) == null ? undefined : r.lensMotionType),
      (v.motionSpeed =
        (n = e.targetVideoInfo) == null ? undefined : n.motionSpeed),
      (v.durationMs =
        (s = e.targetVideoInfo) == null ? undefined : s.durationMs),
      (v.fps = (d = e.targetVideoInfo) == null ? undefined : d.fps),
      (v.resolution =
        (l = e.targetVideoInfo) == null ? undefined : l.resolution),
      (v.videoMode = (c = e.targetVideoInfo) == null ? undefined : c.videoMode),
      (v.endingControl =
        (p = e.targetVideoInfo) == null ? undefined : p.endingControl),
      (v.firstFrameImage = e.firstFrameImageInfo),
      (v.endFrameImage = e.endFrameImageInfo),
      (v.vid = e.vid),
      (v.preTaskId = e.preTaskId),
      (v.templateId = e.templateId),
      (v.i2vOpt = e.i2vOpt),
      (v.lensRecipeInput =
        (u = e.targetVideoInfo) == null ? undefined : u.lensRecipeInput),
      (v.multiFrames = e.multiFramesInfo),
      (v.longVideoInput = e.longVideoInput),
      e.longVideoInput === undefined &&
        (v.unifiedEditInput = e.unifiedEditInput),
      v),
    ];
    h.text2VideoParams = f;
    let g = new o.DAVideoBaseComponent();
    g.generateType = o.DAVideoGenerateType.genVideo;
    m = new o.DAVideoGenerateAbilities();
    m.genVideo = h;
    g.abilities = m;
    return g;
  }
}
