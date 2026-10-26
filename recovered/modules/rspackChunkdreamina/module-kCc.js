import a from "NY";
import o from "oa";
import i from "bk";
import r from "z8";
import l from "bT";
import s from "ED";
import c from "xm3";
import u from "oZZ";
import d from "wF";
import m from "gC";
import p from "CaR";
import h from "n3";
import _ from "RUQ";
import g from "qa";
import v from "Qey";
import x from "hA6";
import b from "pB";
import j from "TPX";
import y from "wGq";
import f from "dq";
const M = l.memo(function (e) {
  const { tooltipProps, children, discountItemName, commercialSceneOptions } =
    e;
  const c = g._(e, [
    "tooltipProps",
    "children",
    "discountItemName",
    "commercialSceneOptions",
  ]);
  const { disabled } = c;
  const d = x.n();
  const m = b.v(d);
  const p = l.useMemo(() => {
    if (d == null ? undefined : d.trialInfo.isStrategyFreeTrial) {
      return {
        content: "".concat(
          v.Ay.t(
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
        content: r.jsx(j.S, {
          priceText: m.lowPriceTrialText,
          sceneOptions: commercialSceneOptions,
        }),
      };
    }
    if ((d == null ? undefined : d.needVip) && !d.isVip) {
      return {
        content: v.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
      };
    }
  }, [commercialSceneOptions, d, m]);
  const h = l.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (p != null) {
      return p;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, p]);
  const children_1 = l.useMemo(() => {
    if (d) {
      return r.jsx(y.G, {
        discountItemName,
      });
    }
    return children;
  }, [children, d, discountItemName]);
  return r.jsx(
    f.F,
    i._(
      o._(
        {
          tooltipProps: h,
        },
        c,
      ),
      {
        children: children_1,
      },
    ),
  );
});
var k = s.PA(function (e) {
  const n = p.AN();
  const { digitalHumanGeneratorManager } = d.h(c.V);
  const {
    metadata: {
      submitButtonDisabled,
      submitButtonLoading,
      submitButtonTooltipProps,
      modelOptions,
    },
    data: { commercialSceneOptions, modelKey },
    taskSubmissionManager: { submit },
    reportManager: { reportComplianceShow },
  } = digitalHumanGeneratorManager;
  const discountItemName = l.useMemo(() => {
    var e;
    if ((e = modelOptions.find((e) => e.value === modelKey)) == null) {
      return undefined;
    }
    return e.label;
  }, [modelOptions, modelKey]);
  const onVisibleChange = l.useCallback(
    (e) => {
      if (e && !submitButtonDisabled) {
        reportComplianceShow();
      }
    },
    [reportComplianceShow, submitButtonDisabled],
  );
  const A = l.useMemo(
    () =>
      i._(o._({}, submitButtonTooltipProps), {
        onVisibleChange,
      }),
    [submitButtonTooltipProps, onVisibleChange],
  );
  const T = _.D(submit);
  const onClick = l.useCallback(
    () =>
      a._(function* () {
        if (!submitButtonLoading) {
          yield T();
        }
      })(),
    [submitButtonLoading, T],
  );
  return r.jsx(m.I, {
    component: null,
    source: h.HH.ClickGenerate,
    children: r.jsx(
      u.v,
      i._(o._({}, n), {
        component: null,
        sceneOptions: commercialSceneOptions,
        isVipTooltipDisabled: true,
        children: r.jsx(
          M,
          i._(o._({}, e), {
            commercialSceneOptions,
            disabled: submitButtonDisabled,
            loading: submitButtonLoading,
            discountItemName,
            tooltipProps: A,
            onClick,
          }),
        ),
      }),
    ),
  });
});
export { k as j };
