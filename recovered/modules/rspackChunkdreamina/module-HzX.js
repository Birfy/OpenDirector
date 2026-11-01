import n from "Ut";
import r from "xi";
export class P {
  convert() {
    const e = this._getDraft();
    const extend = this._decorateExtends(this._getExtends(e));
    return {
      submitId: this._submitId,
      metricsExtra: this._metricsExtra,
      draftContent: e.toJSONString(),
      extend,
      action: this._action,
      historyId: this._historyId,
    };
  }
  _decorateExtends(e) {
    return e;
  }
  _getMetadata(e) {
    const t = new n.DADraftMetadata();
    t.createdPlatform = n.DADraftCreatedPlatform.WEB;
    t.createdTimeInMs = e.createTime;
    return t;
  }
  _getDraft() {
    const e = new n.DADraft();
    if (this._sourceDraftContent) {
      for (
        var t = (e) => {
            const t = i.componentList.find((t) => t.id === e);
            if (!t) {
              return "break";
            }
            r.unshift(t);
            a = t.parentId;
          },
          i = new n.DADraft(this._sourceDraftContent),
          r = [],
          a = i.mainComponentId,
          o = a;
        o && t(o) !== "break";
        o = a
      );
      if (this._isReplaceMain) {
        r.pop();
      }
      r.forEach((t) => {
        e.setMainComponent(t);
      });
    }
    e.setMainComponent(this._mainComponent);
    return e;
  }
  constructor(e) {
    this._submitId = e.submitId;
    this._templateId = e.templateId;
    this._workspaceId = e.workspaceId;
    this._sourceDraftContent = e.draftContent;
    this._action = e.action;
    this._historyId = e.historyId;
    this._infiniteCanvasExtend = e.infiniteCanvasExtend;
    this._isReplaceMain = e.isRegenerate;
    if (e.metricsExtra) {
      try {
        this._metricsExtra = JSON.stringify(e.metricsExtra);
      } catch (error) {
        r.V.error(
          "ParamsConverter: ".concat(
            this.constructor.name,
            " JSON.stringify error",
          ),
          error,
        );
      }
    }
    this._mainComponent = this.getComponent(e);
    this._mainComponent.metaData = this._getMetadata(e);
  }
}
