import a from "oa";
import r from "bk";
import i from "z8";
import o from "bT";
import l from "ED";
import s from "xm3";
import c from "oZZ";
import u from "wF";
import d from "gC";
import m from "CaR";
import p from "n3";
import v from "RUQ";
import h from "qa";
import g from "Qey";
import f from "hA6";
import b from "pB";
import _ from "TPX";
import y from "wGq";
import x from "dq";
const k = o.memo(function (e) {
  const { tooltipProps, children, discountItemName, commercialSceneOptions } =
    e;
  const c = h._(e, [
    "tooltipProps",
    "children",
    "discountItemName",
    "commercialSceneOptions",
  ]);
  const { disabled } = c;
  const d = f.n();
  const m = b.v(d);
  const p = o.useMemo(() => {
    if (d == null ? undefined : d.trialInfo.isStrategyFreeTrial) {
      return {
        content: "".concat(
          g.Ay.t(
            "web_m10n_lip_sync_freetrial_button",
            {
              num: d.trialInfo.strategyFreeTrialTimes,
              number0: d.trialInfo.strategyFreeTrialTimes,
            },
            "{number0} free trials",
          ),
        ),
      };
    }
    if (m.enableSubmitTooltips) {
      return {
        onVisibleChange: m.onTooltipVisibleChange,
        content: i.jsx(_.S, {
          priceText: m.lowPriceTrialText,
          sceneOptions: commercialSceneOptions,
        }),
      };
    }
    if ((d == null ? undefined : d.needVip) && !d.isVip) {
      return {
        content: g.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
      };
    }
  }, [commercialSceneOptions, d, m]);
  const tooltipProps_1 = o.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (p != null) {
      return p;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, p]);
  const children_1 = o.useMemo(() => {
    if (d) {
      return i.jsx(y.G, {
        discountItemName,
      });
    }
    return children;
  }, [children, d, discountItemName]);
  return i.jsx(
    x.F,
    r._(a._({}, c), {
      tooltipProps: tooltipProps_1,
      children: children_1,
    }),
  );
});
export var t = l.PA(function (e) {
  const t = m.AN();
  const { actionCopyGeneratorManager } = u.h(s.V);
  const {
    metadata: { submitButtonDisabled, submitButtonTooltipProps, modelOptions },
    data: { commercialSceneOptions, modelKey },
    taskSubmissionManager: { submit },
  } = actionCopyGeneratorManager;
  const discountItemName = o.useMemo(() => {
    var e;
    if ((e = modelOptions.find((e) => e.value === modelKey)) == null) {
      return undefined;
    }
    return e.label;
  }, [modelOptions, modelKey]);
  const onClick = v.D(submit);
  return i.jsx(d.I, {
    component: null,
    source: p.HH.ClickGenerate,
    children: i.jsx(
      c.v,
      r._(a._({}, t), {
        component: null,
        sceneOptions: commercialSceneOptions,
        isVipTooltipDisabled: true,
        children: i.jsx(
          k,
          r._(a._({}, e), {
            commercialSceneOptions,
            disabled: submitButtonDisabled,
            discountItemName,
            tooltipProps: submitButtonTooltipProps,
            onClick,
          }),
        ),
      }),
    ),
  });
});
