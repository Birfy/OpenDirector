import { C } from "./module-c3.js";
import { L } from "./module-Ux_2.js";
import { g } from "./module-Fo_2.js";
import { q } from "./module-emQ.js";
export var m = (e) => {
  var t;
  var r;
  var c;
  var l;
  var s;
  var d;
  var u;
  var f;
  var v = {
    user_trial_type: C.none,
    user_trial_days: 0,
    user_trial_price: -1,
  };
  if (e) {
    if (L(e) && g(e)) {
      return {
        user_trial_type: C.multiDiscount,
        user_trial_days:
          (t =
            e == null || (c = e.lowPriceTrialInfo) == null
              ? undefined
              : c.trialCycle) != null
            ? t
            : 0,
        user_trial_price:
          (r =
            e == null || (l = e.lowPriceTrialInfo) == null
              ? undefined
              : l.trialPrice) != null
            ? r
            : -1,
      };
    }
    if (q(e)) {
      return {
        user_trial_type: C.firstPeriodDiscount,
        user_trial_days: 0,
        user_trial_price: -1,
      };
    }
    if (L(e)) {
      return {
        user_trial_type: C.freeTrial,
        user_trial_days:
          (s =
            e == null || (u = e.lowPriceTrialInfo) == null
              ? undefined
              : u.trialCycle) != null
            ? s
            : 0,
        user_trial_price:
          (d =
            e == null || (f = e.lowPriceTrialInfo) == null
              ? undefined
              : f.trialPrice) != null
            ? d
            : -1,
      };
    }
    return v;
  }
  return v;
};
