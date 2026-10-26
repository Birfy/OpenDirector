import a from "oa";
import r from "bk";
import o from "z8";
import i from "ED";
import s from "xm3";
import l from "waF";
import c from "wF";
import d from "gC";
import u from "n3";
import { D } from "./module-RUQ.js";
import m from "qa";
import v from "bT";
import h from "Qey";
import f from "hA6";
import x from "pB";
import _ from "TPX";
import g from "wGq";
import b from "dq";
const j = v.memo(function (e) {
  const { tooltipProps, children } = e;
  const i = m._(e, ["tooltipProps", "children"]);
  const { disabled } = i;
  const l = f.n();
  const c = x.v(l);
  const d = v.useMemo(() => {
    if (l == null ? undefined : l.trialInfo.isStrategyFreeTrial) {
      return {
        content: "".concat(
          h.Ay.t(
            "web_m10n_lip_sync_freetrial_button",
            {
              num: l.trialInfo.strategyFreeTrialTimes,
              number0: l.trialInfo.strategyFreeTrialTimes,
            },
            "{number0} free trials",
          ),
        ),
      };
    }
    if (c.enableSubmitTooltips) {
      return {
        onVisibleChange: c.onTooltipVisibleChange,
        content: o.jsx(_.S, {
          priceText: c.lowPriceTrialText,
        }),
      };
    }
    if ((l == null ? undefined : l.needVip) && !l.isVip) {
      return {
        content: h.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
      };
    }
  }, [l, c]);
  const tooltipProps_1 = v.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (d != null) {
      return d;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, d]);
  const children_1 = v.useMemo(() => {
    if (l) {
      return o.jsx(g.G, {});
    }
    return children;
  }, [children, l]);
  return o.jsx(
    b.F,
    r._(
      a._(
        {
          tooltipProps: tooltipProps_1,
        },
        i,
      ),
      {
        children: children_1,
      },
    ),
  );
});
export var T = i.PA(function (e) {
  const { musicGeneratorManager } = c.h(s.V);
  const {
    metadata: {
      submitButtonDisabled,
      submitButtonLoading,
      submitButtonTooltipProps,
    },
    data: { commercialSceneOptions },
    taskSubmissionManager: { submit },
  } = musicGeneratorManager;
  const onClick = D(submit);
  return o.jsx(d.I, {
    component: null,
    source: u.HH.ClickGenerate,
    children: o.jsx(l.r, {
      component: null,
      sceneOptions: commercialSceneOptions,
      isVipTooltipDisabled: true,
      children: o.jsx(
        j,
        r._(a._({}, e), {
          disabled: submitButtonDisabled,
          loading: submitButtonLoading,
          tooltipProps: submitButtonTooltipProps,
          onClick,
        }),
      ),
    }),
  });
});
