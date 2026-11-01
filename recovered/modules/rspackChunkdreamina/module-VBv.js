import i from "QWK";
import a from "Iv";
import n from "SI";
import { sq } from "./module-Com.js";
import s from "VN";
class c {
  getEventParams() {
    const {
      type,
      submitId,
      creditsDiff,
      status,
      isTriplets,
      title,
      needCredits,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      type,
      status,
      submit_id: submitId,
      credits_diff: creditsDiff,
      is_vip: +!!isVip,
      user_subscribe_type: n.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
      is_triplets: isTriplets ? "1" : "0",
      need_credits: needCredits == null ? undefined : needCredits.toString(),
      title,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "credits_sync_confirm";
  }
}
export function E(e, t) {
  sq(e, c, [t]);
}
c = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, a.sG),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      a.sG === undefined ? Object : a.sG,
    ]),
  ],
  c,
);
