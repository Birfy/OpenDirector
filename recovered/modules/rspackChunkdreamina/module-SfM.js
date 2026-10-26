import r from "QWK";
import n from "kF";
import a from "Dm";
import o from "Kt";
import s from "xL";
class c extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_ai_function_banner";
  }
}
class l extends s.N {
  _validateParams(e) {
    a.F4(
      e.function_name,
      "[ClickAiFunctionBannerReporter] function_name is required",
    );
    a.F4(
      e.tool_item_id,
      "[ClickAiFunctionBannerReporter] tool_item_id is required",
    );
  }
  _getCollectorClass() {
    return c;
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(e, {
      immediately: true,
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
export { l as a };
l = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof ClickAiFunctionBannerParams === "undefined"
        ? Object
        : ClickAiFunctionBannerParams,
      o._ === undefined ? Object : o._,
    ]),
  ],
  l,
);
