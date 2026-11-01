import i from "z8";
import r from "bT";
import _a from "xb";
import l from "Qey";
import u from "ex6";
const s = "free-trial-tip-G_X4h5";
const d = "free-trial-pieces-SD7f_3";
const c = "image_50_15k_limit_free";
const m = "tag_free_label";
const v = "m10n_dm_flash_agent_indicator";
export var X = r.memo(function (e) {
  let t;
  let n;
  let r;
  let a;
  let p;
  let g;
  let f;
  let h;
  let _;
  const { limitations, vipIconClassName = "", freeTrialTipClassName = "" } = e;
  const x =
    (f =
      limitations == null
        ? undefined
        : limitations.trialInfo.unitCreditFreeTrialPieces) != null
      ? f
      : 0;
  const T = !!(limitations == null
    ? undefined
    : limitations.trialInfo.isUnlimitedUnitCreditFreeTrial);
  const num =
    (h = e.freeTrialPieces) != null
      ? h
      : e.showUnitCreditFreeTrialForVip &&
          (limitations == null ? undefined : limitations.isVip)
        ? x
        : 0;
  const w =
    T &&
    (e.showUnlimitedUnitCreditFreeTrial ||
      (e.showUnitCreditFreeTrialForVip &&
        (limitations == null ? undefined : limitations.isVip)));
  const C =
    (_ =
      limitations == null
        ? undefined
        : limitations.trialInfo.strategyFreeTrialTimes) != null
      ? _
      : 0;
  const freeUnitsPerUse =
    limitations == null
      ? undefined
      : limitations.trialInfo.freeTrialDurationSeconds;
  const k =
    limitations == null
      ? undefined
      : limitations.trialInfo.creditTrialAvailableTimes;
  const N = (limitations == null ? undefined : limitations.needVip)
    ? i.jsx(u.z, {
        size: 14,
        className: vipIconClassName,
        level: limitations.needMinVipLevel,
      })
    : null;
  if (limitations == null ? undefined : limitations.trialInfo.isCreditTrial) {
    return i.jsxs(i.Fragment, {
      children: [
        N,
        i.jsx("span", {
          className: _a(s, "credit-trial-tip-XLUUjn", freeTrialTipClassName),
          children:
            k === undefined
              ? l.Ay.t("web_m10n_model_try_tag", {}, "试用")
              : l.Ay.t(
                  "web_m10n_model_use_count_tag",
                  {
                    num: k,
                    number0: k,
                  },
                  "试用".concat(k, "次"),
                ),
        }),
      ],
    });
  }
  if (w) {
    return i.jsx("span", {
      className: _a(s, d, freeTrialTipClassName),
      children: ((t = "限免"), (n = l.Ay.t(m, {}, t)) && n !== m ? n : t),
    });
  }
  if (num > 0) {
    return i.jsx("span", {
      className: _a(s, d, freeTrialTipClassName),
      children:
        ((r = "限免".concat(num, " 张")),
        (a = l.Ay.t(
          c,
          {
            num,
          },
          r,
        )) && a !== c
          ? a
          : r),
    });
  }
  if (x > 0 || T) {
    return null;
  }
  if (C > 0) {
    return i.jsxs(i.Fragment, {
      children: [
        N,
        i.jsx("span", {
          className: _a(s, freeTrialTipClassName),
          children: freeUnitsPerUse
            ? ((p = "Free "
                .concat(freeUnitsPerUse, "s videos: ")
                .concat(C, " left")),
              (g = l.Ay.t(
                v,
                {
                  num: C,
                  remainingCount: C,
                  freeUnitsPerUse,
                },
                p,
              )) && g !== v
                ? g
                : p)
            : l.Ay.t(
                "dre_m10n_lip_sync_freetrial_button",
                {
                  num: C,
                  number0: C,
                },
                "限免".concat(C, "次"),
              ),
        }),
      ],
    });
  }
  return N;
});
