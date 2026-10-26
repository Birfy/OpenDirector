import n from "oa";
import r from "bk";
import a from "Ut";
import { k } from "./module-Z6.js";
import { a as a_1 } from "./module-GfJ.js";
import { O } from "./module-Hf_3.js";
class d {
  convert() {
    let e;
    const t = new a.DAVideoGenerateAbilities();
    const i = new a.DAGenVideoAbility();
    const n = new a.DAText2VideoParams();
    const { input, taskPayload } = this._params;
    const { seed, videoAspectRatio, modelReqKey } = input;
    n.videoGenInputs = [
      k(input.videoGenInputs[0], {
        includeUnifiedEditSourceInfo:
          (taskPayload == null || (e = taskPayload.taskExtra) == null
            ? undefined
            : e.videoProcessType) === a.DAVideoProcessType.VideoEdit,
      }),
    ];
    n.seed = seed;
    n.modelReqKey = modelReqKey;
    n.priority = this._params.input.priority;
    if (videoAspectRatio) {
      n.videoAspectRatio = videoAspectRatio;
    }
    i.text2VideoParams = n;
    i.videoTaskExtra = a_1(
      taskPayload == null ? undefined : taskPayload.taskExtra,
    );
    t.genVideo = i;
    return t;
  }
  constructor(e) {
    this._params = e;
  }
}
export class H extends O {
  getComponent(e) {
    const t = new a.DAVideoBaseComponent();
    t.generateType = a.DAVideoGenerateType.genVideo;
    t.aigcMode = e.mode;
    t.abilities = new d(e).convert();
    t.processType = a.DAVideoProcessType.VideoGen;
    return t;
  }
  _getExtends(e) {
    const t = super._getExtends(e);
    return r._(n._({}, t), {
      turnId: this._params.turnId,
      conversationId: this._params.conversationId,
      infiniteCanvasExtend: this._params.infiniteCanvasExtend,
    });
  }
  constructor(e) {
    super(e);
    this._params = e;
  }
}
