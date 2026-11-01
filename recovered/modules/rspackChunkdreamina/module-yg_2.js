import a from "oa";
import o from "bk";
import i from "z8";
import r from "bT";
import l from "ED";
import s from "Qey";
import c from "xm3";
import u from "BV";
import d from "wF";
import m from "gC";
import p from "CaR";
import h from "n3";
import _ from "RUQ";
import g from "qa";
import v from "hA6";
import x from "pB";
import b from "TPX";
import j from "wGq";
import y from "dq";
const f = r.memo(function (e) {
  const { tooltipProps, children, renderCredits, discountItemName } = e;
  const u = g._(e, [
    "tooltipProps",
    "children",
    "renderCredits",
    "discountItemName",
  ]);
  const { disabled } = u;
  const m = v.n();
  const p = x.v(m);
  const h = r.useMemo(() => {
    var e;
    var n;
    var t;
    var num =
      (t = m == null ? undefined : m.trialInfo.unitCreditFreeTrialPieces) !=
      null
        ? t
        : 0;
    if (num > 0) {
      return {
        content:
          ((e = "限免".concat(num, " 张")),
          (n = s.Ay.t(
            "image_50_15k_limit_free",
            {
              num,
            },
            e,
          )) && n !== "image_50_15k_limit_free"
            ? n
            : e),
      };
    }
    if (m == null ? undefined : m.trialInfo.isStrategyFreeTrial) {
      return {
        content: "".concat(
          s.Ay.t(
            "web_m10n_lip_sync_freetrial_button",
            {
              num: m.trialInfo.strategyFreeTrialTimes,
              number0: m.trialInfo.strategyFreeTrialTimes,
            },
            "{number0} free trials",
          ),
        ),
      };
    }
    if (p.enableSubmitTooltips) {
      return {
        onVisibleChange: p.onTooltipVisibleChange,
        content: i.jsx(b.S, {
          priceText: p.lowPriceTrialText,
        }),
      };
    }
    if ((m == null ? undefined : m.needVip) && !m.isVip) {
      return {
        content: s.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
      };
    }
  }, [m, p]);
  const tooltipProps_1 = r.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (h != null) {
      return h;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, h]);
  const children_1 = r.useMemo(() => {
    if (m) {
      return i.jsx(j.G, {
        renderCredits,
        discountItemName,
      });
    }
    return children;
  }, [children, m, renderCredits, discountItemName]);
  return i.jsx(
    y.F,
    o._(
      a._(
        {
          tooltipProps: tooltipProps_1,
        },
        u,
      ),
      {
        children: children_1,
      },
    ),
  );
});
export var L = l.PA(function (e) {
  const n = p.AN();
  const { imageGeneratorManager } = d.h(c.V);
  const { data } = imageGeneratorManager;
  const {
    metadata: {
      submitButtonDisabled,
      submitButtonLoading,
      submitButtonTooltipProps,
      chargeByCount,
    },
    taskSubmissionManager: { submit },
  } = imageGeneratorManager;
  const { commercialSceneOptions, currentSelectedImageModel } = data;
  const renderCredits = r.useCallback(
    (e, n) => {
      if (!n) {
        return null;
      }
      var { benefitAmount } = n;
      if (chargeByCount) {
        return s.Ay.t(
          "dreamina_image4_count1",
          {
            num: benefitAmount ? e / benefitAmount : 0,
          },
          "{num}/image",
        ).replace(/\s*\/\s*/g, "/");
      }
      return e;
    },
    [chargeByCount],
  );
  const onClick = _.D(submit);
  return i.jsx(m.I, {
    component: null,
    source: h.HH.ClickGenerate,
    children: i.jsx(
      u.n,
      o._(a._({}, n), {
        component: null,
        sceneOptions: commercialSceneOptions,
        isVipTooltipDisabled: true,
        children: i.jsx(
          f,
          o._(a._({}, e), {
            disabled: submitButtonDisabled,
            loading: submitButtonLoading,
            tooltipProps: submitButtonTooltipProps,
            renderCredits,
            discountItemName:
              currentSelectedImageModel == null
                ? undefined
                : currentSelectedImageModel.name,
            onClick,
          }),
        ),
      }),
    ),
  });
});
