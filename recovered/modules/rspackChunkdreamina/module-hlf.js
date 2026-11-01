import i from "oa";
import a from "bk";
import n from "HzX";
export class b extends n.P {
  _getExtends() {
    return {
      mVideoCommerceInfoList: this._commerceInfoList,
      workspaceId: this._workspaceId,
    };
  }
  constructor(e) {
    var t;
    super(
      a._(i._({}, e), {
        metricsExtra: (t = e.metricsExtra) != null ? t : {},
      }),
    );
    this._commerceInfoList = e.commerceInfo ? [e.commerceInfo] : undefined;
  }
}
