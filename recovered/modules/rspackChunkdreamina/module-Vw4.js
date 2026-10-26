import n from "oa";
import o from "QWK";
import s from "SI";
import c from "f0";
import u from "mU";
import { PQ } from "./module-Com.js";
import d from "VN";
import l from "oh";
export var uS = {
  Show: "show",
  Click: "click",
};
export var w4 = {
  CreditNotEnough: "credit_not_enough",
};
class v {
  getEventParams() {
    const { action } = this._params;
    const { currentVipLevel } = this._vipService;
    const { vipPriceList } = this._commercialGoodsService;
    const i = c.w(vipPriceList);
    return n._(
      {
        action,
        user_subscribe_type: s.PR[currentVipLevel],
        show_up_condition: "credit_not_enough",
      },
      u.m(i),
    );
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialGoodsService = r;
    this.eventName = "generate_button_bubble";
  }
}
export function sm(e, t) {
  PQ(e, v, [t]);
}
v = o.Cg(
  [
    o.Qj(1, d._),
    o.Qj(2, l.$),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      d._ === undefined ? Object : d._,
      l.$ === undefined ? Object : l.$,
    ]),
  ],
  v,
);
