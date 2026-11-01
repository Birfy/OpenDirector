import n from "oa";
import r from "bk";
import a from "Jhy";
import o from "Ut";
import { P } from "./module-HzX.js";
import l from "d8m";
export class O extends P {
  _getDraft() {
    let e;
    let t;
    let i;
    let n;
    const r = super._getDraft();
    const a = r.findMainComponent();
    if (!(a instanceof o.DAVideoBaseComponent)) {
      return r;
    }
    const s = a.processType === o.DAVideoProcessType.VideoGen;
    for (const l of r.componentList) {
      if (l instanceof o.DAVideoBaseComponent) {
        for (const d of (e =
          (n = l.abilities) == null ||
          (i = n.genVideo) == null ||
          (t = i.text2VideoParams) == null
            ? undefined
            : t.videoGenInputs) != null
          ? e
          : []) {
          if (!(s && d.isDraft === true)) {
            d.isDraft = undefined;
          }
        }
      }
    }
    return r;
  }
  _getExtends(e) {
    const t = l.wD(e);
    return {
      rootModel: this._getRootModel(t),
      mVideoCommerceInfo: this._commerceInfo,
      template: this._templateId,
      workspaceId: this._workspaceId,
      infiniteCanvasExtend: this._infiniteCanvasExtend,
    };
  }
  _getRootModel(e) {
    if (e instanceof o.DAVideoBaseComponent) {
      let t;
      let i;
      let n;
      let r;
      let a;
      if (e.generateType === o.DAVideoGenerateType.lipSync) {
        if ((a = e.abilities) == null || (r = a.lipSync) == null) {
          return undefined;
        }
        return r.modelReqKey;
      }
      if (
        (n = e.abilities) == null ||
        (i = n.genVideo) == null ||
        (t = i.text2VideoParams) == null
      ) {
        return undefined;
      }
      return t.modelReqKey;
    }
  }
  constructor(e) {
    var t;
    var i;
    var o;
    super(
      r._(n._({}, e), {
        metricsExtra: a.A(
          (t = e.metricsExtra) != null ? t : {},
          (i = (o = e.taskPayload) == null ? undefined : o.taskExtra) != null
            ? i
            : {},
        ),
      }),
    );
    this._commerceInfo = e.commerceInfo;
  }
}
