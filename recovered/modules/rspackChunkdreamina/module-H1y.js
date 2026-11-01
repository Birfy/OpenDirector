import i from "NY";
import n from "oa";
import a from "bk";
import o from "bo";
import s from "Nbm";
import c from "MWC";
import l from "MK";
import d from "sIr";
let u = 0;
const p = () => {
  c.p.warning(
    l.Ay.t(
      "dre_m10n_purchase_credits_fail_toast",
      {},
      "Couldn’t purchase credits. Try again later. ",
    ),
  );
};
var m = (e) =>
  i._(function* () {
    const t = ++u;
    try {
      let r;
      const i = yield s.jz(o.p3(), e.containerService, {
        currentTeamId: e.targetTeamId,
      });
      if (t !== u) {
        return null;
      }
      const creditPriceList = i.ok
        ? [...((r = i.value.priceList) != null ? r : [])]
        : [];
      if (!i.ok || creditPriceList.length === 0) {
        p();
        return null;
      }
      return d.x(
        a._(n._({}, e), {
          creditScene: "team",
          creditPriceList,
        }),
      );
    } catch (e) {
      if (t === u) {
        p();
      }
      return null;
    }
  })();
export { m as c };
