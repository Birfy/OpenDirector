import i from "MK";
import { X } from "./module-wb.js";
export var o = (e) => {
  if (!e) {
    return i.Ay.t("dre_m10n_sub_btn_upgrade", {}, "Upgrade");
  }
  var { lowPriceTrialInfo, currencyTips, currencyCode } = e;
  var { trialPrice } = lowPriceTrialInfo;
  var price = X(currencyCode, currencyTips, trialPrice, true);
  return i.Ay.t(
    "free_trial_normal_des",
    {
      price,
    },
    "{price}元试用7天会员",
  );
};
export var I = (e) => {
  if (!e) {
    return i.Ay.t("dre_m10n_sub_btn_upgrade", {}, "Upgrade");
  }
  var { lowPriceTrialInfo, currencyTips, currencyCode } = e;
  var { trialPrice } = lowPriceTrialInfo;
  var c = X(currencyCode, currencyTips, trialPrice, true);
  return i.Ay.t(
    "web_m10n_subscribe_low_price",
    {
      lowPrice: c,
      price: c,
    },
    "{lowPrice}元会员",
  );
};
