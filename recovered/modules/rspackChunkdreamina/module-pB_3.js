import r from "bT";
import o from "F3";
import n from "Vw4";
import a from "NA";
import s from "wF";
import c from "Kt";
export var v = (e) => {
  var t = s.h(c._);
  var i = o.S();
  var { needCredits, lowPriceTrialPrice } = e != null ? e : {};
  var onTooltipVisibleChange = r.useCallback(
    (e) => {
      if (e) {
        n.sm(t, {
          action: n.uS.Show,
        });
      }
    },
    [t],
  );
  return r.useMemo(
    () => ({
      isLowPriceTrialPrice: !!lowPriceTrialPrice,
      lowPriceTrialText: a.o(lowPriceTrialPrice),
      enableSubmitTooltips:
        lowPriceTrialPrice && (needCredits != null ? needCredits : 0) > i,
      onTooltipVisibleChange,
    }),
    [lowPriceTrialPrice, needCredits, i, onTooltipVisibleChange],
  );
};
