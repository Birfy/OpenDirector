import a from "NY";
import r from "oa";
import o from "bk";
import i from "z8";
import s from "ED";
import l from "xm3";
import c from "oZZ";
import d from "wF";
import u from "xi";
import p from "gC";
import m from "CaR";
import v from "n3";
import { D } from "./module-RUQ.js";
import f from "qa";
import x from "bT";
import _ from "Qey";
import g from "LD";
import b from "hA6";
import j from "pB";
import y from "TPX";
import k from "Sg";
import M from "wGq";
import A from "dq";
const C = s.PA(function (e) {
  let t;
  let n;
  let a;
  const { model, commercialSceneOptions, tooltipProps, children } = e;
  const u = f._(e, [
    "model",
    "commercialSceneOptions",
    "tooltipProps",
    "children",
  ]);
  const { disabled } = u;
  const m =
    ((t =
      model == null ||
      (a = model.commercialConfig) == null ||
      (n = a.resolutionPriceConfigs) == null
        ? undefined
        : n.length) != null
      ? t
      : 0) > 0;
  const v = g.v({
    modelReqKey: commercialSceneOptions.modelReqKey,
    resolution: commercialSceneOptions.resolution,
    videoDuration: commercialSceneOptions.videoDuration,
  });
  const h = b.n();
  const C = j.v(h);
  const w = x.useMemo(() => {
    if (h == null ? undefined : h.trialInfo.isStrategyFreeTrial) {
      if (v) {
        return {
          content: "".concat(
            _.Ay.t(
              "m10n_hover_charge_rule_sd2_freetrial",
              {
                num: h.trialInfo.strategyFreeTrialTimes,
                number0: h.trialInfo.strategyFreeTrialTimes,
              },
              "5s 及以下可用限免，当前剩余 {number0} 次",
            ),
          ),
        };
      }
      return {
        content: "".concat(
          _.Ay.t(
            "web_m10n_lip_sync_freetrial_button",
            {
              num: h.trialInfo.strategyFreeTrialTimes,
              number0: h.trialInfo.strategyFreeTrialTimes,
            },
            "{number0} free trials",
          ),
        ),
      };
    }
    if (C.enableSubmitTooltips) {
      return {
        onVisibleChange: C.onTooltipVisibleChange,
        content: i.jsx(y.S, {
          priceText: C.lowPriceTrialText,
        }),
      };
    }
    if (
      (h == null ? undefined : h.needVip) &&
      !h.isVip &&
      !h.trialInfo.isStrategyFreeTrial
    ) {
      switch (h.reason) {
        case "model":
          if (model) {
            var string0 = model.name || "model";
            return {
              content: _.Ay.t(
                "web_new_model_vip_only_toast",
                {
                  string0,
                },
                "升级以使用「{string0}」",
              ),
            };
          }
          break;
        case "resolution":
          var t = k.N({
            model,
            resolution: commercialSceneOptions.resolution,
          });
          if (!t) {
            break;
          }
          return {
            content: _.Ay.t(
              "web_dre_m10n_subscription_page_tooltips",
              {
                string0: t,
              },
              "升级以使用「{string0}」功能",
            ),
          };
        default:
          return {
            content: _.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
          };
      }
    }
  }, [h, model, C, v, commercialSceneOptions.resolution]);
  const tooltipProps_1 = x.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (w != null) {
      return w;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, w]);
  const children_1 = x.useMemo(() => {
    if (h) {
      if (m) {
        return i.jsx(M.G, {
          discountItemName: model == null ? undefined : model.name,
          tooltipContent: _.Ay.t(
            "m10n_hover_charge_rule_sd2",
            {},
            "按秒计价，seedance 2.0/fast输入参考视频时长计入总时长",
          ),
        });
      }
      return i.jsx(M.G, {
        discountItemName: model == null ? undefined : model.name,
      });
    }
    return children;
  }, [children, h, m, model == null ? undefined : model.name]);
  return i.jsx(
    A.F,
    o._(
      r._(
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
export var Z = s.PA(function (e) {
  const t = m.AN();
  const { videoGeneratorManager } = d.h(l.V);
  const {
    metadata: {
      submitButtonDisabled,
      submitButtonLoading,
      submitButtonTooltipProps,
    },
    data: { commercialSceneOptions, model },
    taskSubmissionManager: { submit },
  } = videoGeneratorManager;
  const j = D(submit);
  return i.jsx(p.I, {
    component: null,
    source: v.HH.ClickGenerate,
    children: i.jsx(
      c.v,
      o._(r._({}, t), {
        component: null,
        sceneOptions: commercialSceneOptions,
        isVipTooltipDisabled: true,
        children: i.jsx(
          C,
          o._(r._({}, e), {
            commercialSceneOptions,
            model,
            disabled: submitButtonDisabled,
            loading: submitButtonLoading,
            tooltipProps: submitButtonTooltipProps,
            onClick: (e) =>
              a._(function* () {
                const submit_trigger = e.isTrusted
                  ? "button_click"
                  : "programmatic_click";
                u.V.warn(
                  "[VideoGeneratorSubmitButton] submit ".concat(
                    JSON.stringify({
                      submit_trigger,
                      isTrusted: e.isTrusted,
                      detail: e.detail,
                    }),
                  ),
                );
                yield j();
              })(),
          }),
        ),
      }),
    ),
  });
});
