import r from "QWK";
import n from "kF";
import a from "Dm";
import o from "Kt";
import s from "xL";
class l extends n.v {
  constructor(...e) {
    super(...e);
    this.eventName = "ai_function_adjust_param";
  }
}
class d extends s.N {
  _validateParams(e) {
    a.F4(e.action, "[AiFunctionAdjustParamReporter] action is required");
    a.F4(
      e.function_name,
      "[AiFunctionAdjustParamReporter] function_name is required",
    );
    a.F4(e.page, "[AiFunctionAdjustParamReporter] page is required");
  }
  _getCollectorClass() {
    return l;
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
export function Q(e, t, action) {
  const page =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : "create";
  if (t.titleKey) {
    e.createInstance(d, {
      action,
      functionName: t.titleKey,
      page,
    }).report();
  }
}
d = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof AiFunctionAdjustParamParams === "undefined"
        ? Object
        : AiFunctionAdjustParamParams,
      o._ === undefined ? Object : o._,
    ]),
  ],
  d,
);
