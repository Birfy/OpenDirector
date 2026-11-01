import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import d from "Qey";
import u from "yw";
import m from "Du8";
import p from "fX";
import { O } from "./module-d6Z.js";
import g from "hA6";
import v from "oJV";
import "Vx";
import _ from "Ix";
import x from "cO";
import * as w from "./module-zpN.js";
import * as y from "./module-xK4.js";
const className = "model-icon-QI6cTg";
const f = o.memo(function (e) {
  const { label, commercial } = e;
  const { statusVisible = true, statusProps } =
    commercial != null ? commercial : {};
  const limitations = g.n();
  const { compact } = o.useContext(m.R);
  if (compact) {
    return s.jsx(u.xqN, {
      size: 16,
      className,
    });
  }
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(u.xqN, {
        size: 16,
        className,
      }),
      s.jsx("span", {
        className: "model-label-zZCLJy",
        children:
          label != null
            ? label
            : d.Ay.t("web_generator_box_select_model_no_model", {}, "选择模型"),
      }),
      statusVisible
        ? s.jsx(
            v.X,
            n._(r._({}, statusProps), {
              limitations,
              freeTrialTipClassName: _l(
                "free-trial-tip-GbKPhF",
                statusProps == null
                  ? undefined
                  : statusProps.freeTrialTipClassName,
              ),
              vipIconClassName: _l(
                "vip-icon-cPsntt",
                statusProps == null ? undefined : statusProps.vipIconClassName,
              ),
            }),
          )
        : null,
    ],
  });
});
const k = "option-description-MI_Zxc";
const j = "option-cover-tk00Zf";
const N = o.memo(function (e) {
  const { option, className } = e;
  const l = i._(e, ["option", "className"]);
  const {
    label,
    disabled,
    extra: {
      coverUrl,
      iconUrl,
      activeCoverUrl,
      description,
      hoverDescription,
      tag,
      commercial,
    },
  } = option;
  const { statusVisible = true, statusProps } =
    commercial != null ? commercial : {};
  const E = g.n();
  const style = o.useMemo(
    () => ({
      "--model-select-option-icon-url": 'url("'.concat(iconUrl, '")'),
    }),
    [iconUrl],
  );
  const W = o.useMemo(() => {
    if (typeof description === "function") {
      return description(option);
    }
    return description;
  }, [description, option]);
  const z = o.useMemo(() => {
    if (typeof hoverDescription === "function") {
      return hoverDescription(option);
    }
    return hoverDescription;
  }, [hoverDescription, option]);
  return s.jsxs(
    "div",
    n._(
      r._(
        {
          className: _l("option-content-cz1qic", className, {
            "disabled-l21YXx": disabled,
          }),
        },
        l,
      ),
      {
        children: [
          s.jsxs("span", {
            className: _l("option-media-container-LSbs5c", {
              "option-icon-mode-N3vSKK": iconUrl,
            }),
            children: [
              activeCoverUrl &&
                s.jsx("img", {
                  className: _l(j, "active-uO7PMu"),
                  src: x.m(activeCoverUrl, null, {
                    logType: "js.href/src",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: true,
                    bid: "cc_dreamina",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: false,
                    escapeRule: "escape-report",
                    reportUrl:
                      "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                    htmlparserOptions: "{}",
                    scmBranch: "-",
                    scmName: "-",
                    scmVersion: "-",
                    webpackPluginVersion: "3.6.0",
                    filename:
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4Z*xwSFZuTk1XRT$zWWtk$2Ft%kRP$3BpTWp$d1ds-zFNRXh-Wkd4aWJWWj$X$mhTZ*1OcE1-%mlNbEpzWWtNe*$scFhlR3haTTF*MFlqTkNNR0Z-T1hWT$-wNTJZbT$T-kdKd$$-$mtTRTQw$1ZoS2Jt%ll%$DA9",
                  }),
                  alt: label,
                  crossOrigin: "anonymous",
                }),
              coverUrl &&
                s.jsx("img", {
                  className: j,
                  src: x.m(coverUrl, null, {
                    logType: "js.href/src",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: true,
                    bid: "cc_dreamina",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: false,
                    escapeRule: "escape-report",
                    reportUrl:
                      "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                    htmlparserOptions: "{}",
                    scmBranch: "-",
                    scmName: "-",
                    scmVersion: "-",
                    webpackPluginVersion: "3.6.0",
                    filename:
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4Z*xwSFZuTk1XRT$zWWtk$2Ft%kRP$3BpTWp$d1ds-zFNRXh-Wkd4aWJWWj$X$mhTZ*1OcE1-%mlNbEpzWWtNe*$scFhlR3haTTF*MFlqTkNNR0Z-T1hWT$-wNTJZbT$T-kdKd$$-$mtTRTQw$1ZoS2Jt%ll%$DA9",
                  }),
                  alt: label,
                  crossOrigin: "anonymous",
                }),
              iconUrl &&
                s.jsx("span", {
                  className: "option-icon-VEmn94",
                  style,
                  "aria-hidden": true,
                }),
            ],
          }),
          s.jsxs("div", {
            className: "option-main-_mZ4Fb",
            children: [
              s.jsxs("div", {
                className: "option-label-qEnKNm",
                children: [
                  label,
                  statusVisible && E
                    ? s.jsx(
                        v.X,
                        n._(r._({}, statusProps), {
                          limitations: E,
                        }),
                      )
                    : null,
                  tag
                    ? s.jsx(w.b, {
                        type: tag,
                      })
                    : null,
                ],
              }),
              s.jsxs("div", {
                className: "option-description-area-dusLHj",
                children: [
                  s.jsx(_.A, {
                    content: W,
                    checkOverflow: true,
                    disabled,
                    children: s.jsx(y.d, {
                      className: k,
                      children: W,
                    }),
                  }),
                  z
                    ? s.jsx(_.A, {
                        content: z,
                        checkOverflow: true,
                        disabled,
                        children: s.jsx(y.d, {
                          className: _l(k, "option-hover-description-OQup9T"),
                          children: z,
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      },
    ),
  );
});
export var W = o.memo(function (e) {
  const {
    triggerProps,
    arrowIcon,
    options = [],
    notFoundContent,
    optionCommonCommercialWrapperProps,
  } = e;
  const b = i._(e, [
    "triggerProps",
    "arrowIcon",
    "options",
    "notFoundContent",
    "optionCommonCommercialWrapperProps",
  ]);
  const { modeTabs } = o.useContext(m.R);
  const { value } = b;
  const w = o.useMemo(
    () => options.find((e) => e.value === value),
    [options, value],
  );
  const { label, extra = {} } = w != null ? w : {};
  const { source = "", commercial } = extra;
  const dropdownTitle = o.useMemo(
    () =>
      ""
        .concat(d.Ay.t("web_generator_box_select_model", {}, "选择模型："))
        .concat(label ? "".concat([label, source].join(" ")) : ""),
    [label, source],
  );
  const renderFormat = o.useCallback(
    () =>
      s.jsx(f, {
        label,
        commercial,
      }),
    [commercial, label],
  );
  const E = o.useMemo(
    () =>
      s.jsx("div", {
        className: "empty-content-dHgqo2",
        children: d.Ay.t("model_list_empty", {}, "暂无内容"),
      }),
    [],
  );
  const triggerProps_1 = o.useMemo(
    () =>
      n._(r._({}, triggerProps), {
        className: _l(
          "trigger-wc2vGe",
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  const options_1 = o.useMemo(
    () =>
      options.map((option) => {
        var t;
        return n._(r._({}, option), {
          label: s.jsx(
            p.h,
            n._(
              r._(
                {
                  component: null,
                  ignoreClickIntercept: true,
                  ignoreNeedCredits: true,
                  reportParam: {
                    interceptionTrigger: "model_selection",
                  },
                  sceneOptions:
                    (t = option.extra.commercial) == null
                      ? undefined
                      : t.sceneOptions,
                  disabled: option.disabled,
                },
                optionCommonCommercialWrapperProps,
              ),
              {
                children: s.jsx(N, {
                  option,
                }),
              },
            ),
          ),
        });
      }),
    [options, optionCommonCommercialWrapperProps],
  );
  return s.jsx(p.h, {
    component: null,
    ignoreClickIntercept: true,
    sceneOptions: commercial == null ? undefined : commercial.sceneOptions,
    children: s.jsx(
      O,
      n._(
        r._(
          {
            "aria-label": d.Ay.t("octo_director_stage_model", {}, "模型"),
            dropdownTitle,
            renderFormat,
          },
          b,
        ),
        {
          arrowIcon:
            arrowIcon === undefined && modeTabs ? s.jsx(u.rIS, {}) : arrowIcon,
          triggerProps: triggerProps_1,
          notFoundContent: notFoundContent != null ? notFoundContent : E,
          options: options_1,
        },
      ),
    ),
  });
});
