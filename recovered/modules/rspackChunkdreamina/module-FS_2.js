import i from "QWK";
import r from "SI";
import a from "Dm";
import o from "M8X";
import l from "xi";
import u from "Kt";
import s from "kF";
import d from "z7R";
class c extends s.v {
  constructor(...e) {
    super(...e);
    this.eventName = "credit_strikethrough";
  }
}
export class q extends s.o {
  setUserSubscribeTypeFromVipService() {
    try {
      const e = o.cQ(this._containerService, d.jV);
      const t = e == null ? undefined : e.getInstanceSync();
      if (!t) {
        return;
      }
      const { currentVipLevel } = t.vipService;
      const i = r.PR[currentVipLevel];
      if (i !== "ultra" && i !== "teams") {
        this._params.userSubscribeType = i;
      }
    } catch (error) {
      l.V.error(
        "[CreditStrikethroughReporter] setUserSubscribeTypeFromVipService error:",
        error,
      );
    }
  }
  _validateParams(e) {
    ["action", "page"].forEach((t) => {
      a.F4(
        e[t],
        "[CreditStrikethroughReporter] ".concat(String(t), " is required"),
      );
    });
  }
  _getCollectorClass() {
    return c;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
export function O(e, page) {
  if (page) {
    const n = e.createInstance(q, {
      action: "show",
      page,
    });
    n.setUserSubscribeTypeFromVipService();
    n.report();
  }
}
q = i.Cg(
  [
    i.Qj(1, u._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      u._ === undefined ? Object : u._,
    ]),
  ],
  q,
);
