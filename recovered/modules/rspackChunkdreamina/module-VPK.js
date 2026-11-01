import a from "VNX";
import o from "bT";
import i from "z8";
if (require.j == "wl4") var n = require("I7V");
if (require.j == "wl4") var c = require("ki");
if (require.j == "wl4") var l = require("L4p");
if (require.j == "wl4") var m = require("h45");
if (require.j == "wl4") var s = require("AK3");
if (require.j == "wl4") var d = require("olf");
if (require.j == "wl4") var u = require("gei");
if (require.j == "wl4") var p = require("k7J");
if (require.j == "wl4") var C = require("WyQ");
if (require.j == "wl4") var v = require("nSO");
if (require.j == "wl4") var _ = require("LdK");
if (require.j == "wl4") var f = require("Iq4");
if (require.j == "wl4") var h = require("A8U");
if (require.j == "wl4") var S = require("M6");
if (require.j == "wl4") var g = require("tZ");
if (require.j == "wl4") var y = require("yvP");
if (require.j == "wl4") var w = require("b2");
if (require.j == "wl4") var I = require("fDN");
if (require.j == "wl4") var b = require("Tyo");
if (require.j == "wl4") var j = require("nmc");
if (require.j == "wl4") var k = require("AD");
const P = require("Pg");
const x = require("ppy");
const M = require("./module-tvS.js");
if (require.j == "wl4") var A = require("./module-wF.js");
const DContext = o.createContext({});
function R(...e) {
  let t = new Set();
  for (let r of e) {
    if (r) {
      for (let e of Object.keys(r)) {
        t.add(e);
      }
    }
  }
  let r = {};
  for (let o of t) {
    let t = a.A(...e.map((e) => e?.[o]));
    if (t) {
      r[o] = t;
    }
  }
  return r;
}
function useE({ classes, children }) {
  let r = o.useContext(DContext);
  let a = o.useMemo(() => {
    if (classes) {
      return R(r, classes);
    }
    return r;
  }, [r, classes]);
  return i.jsx(DContext.Provider, {
    value: a,
    children,
  });
}
function useB() {
  return o.useContext(DContext);
}
const N =
  require.j == "wl4"
    ? {
        CommerceTabs_wrap: "index_module_CommerceTabs_wrap7",
        CommerceTabs_navbar: "index_module_CommerceTabs_navbar6",
        CommerceTabs_item: "index_module_CommerceTabs_item7",
        CommerceTabs_label: "index_module_CommerceTabs_label5",
      }
    : null;
const LContext = o.createContext(null);
function useF(e) {
  let t = o.useContext(LContext);
  if (!t) {
    throw Error(`${e} must be used within CommerceTabsRoot`);
  }
  return t;
}
const J =
  require.j == "wl4"
    ? [
        "CommerceTabs_wrap",
        "CommerceTabs_navbar",
        "CommerceTabs_item",
        "CommerceTabs_active",
        "CommerceTabs_label",
        "CommerceTabs_discount",
      ]
    : null;
function useO({
  value,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  activationMode = "automatic",
  disabled = false,
  children,
}) {
  let [m, s] = ((e) => {
    let { value, defaultValue, onChange } = e;
    let [i, setI] = o.useState(defaultValue);
    let c = value !== undefined;
    return [
      c ? value : i,
      o.useCallback(
        (e) => {
          if (!c) {
            setI(e);
          }
          onChange?.(e);
        },
        [c, onChange],
      ),
    ];
  })({
    value,
    defaultValue,
    onChange: onValueChange,
  });
  let d = o.useMemo(
    () => ({
      value: m,
      setValue: s,
      orientation,
      activationMode,
      disabled,
    }),
    [m, s, orientation, activationMode, disabled],
  );
  return i.jsx(LContext.Provider, {
    value: d,
    children,
  });
}
function useQ({ className, children, onKeyDown, ...rest }) {
  let { orientation, activationMode, setValue, disabled } =
    useF("CommerceTabsList");
  let sRef = o.useRef(null);
  return i.jsx("div", {
    ...rest,
    ref: sRef,
    className,
    role: "tablist",
    "data-orientation": orientation,
    "data-disabled": disabled ? "" : undefined,
    onKeyDown: (e) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) {
        return;
      }
      let t = orientation === "horizontal";
      let a = t ? "ArrowLeft" : "ArrowUp";
      let o = t ? "ArrowRight" : "ArrowDown";
      if (![a, o, "Home", "End"].includes(e.key)) {
        return;
      }
      let sRef_current = sRef.current;
      if (!sRef_current) {
        return;
      }
      let m = Array.from(
        sRef_current.querySelectorAll("[data-commerce-tabs-trigger]"),
      ).filter((e) => !e.hasAttribute("data-disabled") && !e.disabled);
      if (m.length === 0) {
        return;
      }
      let document_activeElement = document.activeElement;
      let u = m.findIndex((e) => e === document_activeElement);
      if (u < 0) {
        u = 0;
      }
      let p =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? m.length - 1
            : e.key === a
              ? (u - 1 + m.length) % m.length
              : e.key === o
                ? (u + 1) % m.length
                : u;
      let C = m[p];
      C?.focus();
      if (activationMode === "automatic") {
        let e = C?.getAttribute("data-value");
        if (e) {
          setValue(e);
        }
      }
      e.preventDefault();
    },
    children,
  });
}
function W({ value, className, disabled, onClick, ...rest }) {
  let {
    value: value_1,
    setValue,
    disabled: disabled_1,
    orientation,
  } = useF("CommerceTabsTrigger");
  let s = disabled_1 || !!disabled;
  let d = !!value_1 && value_1 === value;
  return i.jsx("button", {
    ...rest,
    type: rest.type ?? "button",
    role: "tab",
    disabled: s,
    className,
    "data-commerce-tabs-trigger": true,
    "data-value": value,
    "data-state": d ? "active" : "inactive",
    "data-disabled": s ? "" : undefined,
    "data-orientation": orientation,
    onClick: (t) => {
      onClick?.(t);
      if (!(t.defaultPrevented || s)) {
        setValue(value);
      }
    },
  });
}
function useU({
  tabs,
  activeTab,
  defaultActiveTab,
  onChange,
  className,
  classes,
}) {
  let m = R(N, useB(), classes);
  let s = tabs ?? [];
  let [d, setD] = o.useState();
  let p = o.useMemo(() => defaultActiveTab ?? s[0]?.key, [defaultActiveTab, s]);
  let C = activeTab ?? d ?? p;
  let onValueChange = o.useCallback(
    (e) => {
      if (activeTab === undefined) {
        setD(e);
      }
      onChange?.(e);
    },
    [activeTab, onChange],
  );
  if (s.length <= 1) {
    return null;
  }
  return i.jsx(useO, {
    value: C,
    onValueChange,
    children: i.jsx("div", {
      className: a.A(m?.CommerceTabs_wrap, className),
      "data-component": "CommerceTabs",
      "data-slot": "CommerceTabs_wrap",
      "data-slots": J.join(","),
      children: i.jsx(useQ, {
        className: m?.CommerceTabs_navbar,
        "data-slot": "CommerceTabs_navbar",
        children: s.map((e) => {
          let t = !!C && e.key === C;
          return i.jsx(
            W,
            {
              value: e.key,
              className: a.A(m?.CommerceTabs_item, t && m?.CommerceTabs_active),
              disabled: e.disabled,
              "data-slot": "CommerceTabs_item",
              children: i.jsxs("span", {
                className: m?.CommerceTabs_label,
                "data-slot": "CommerceTabs_label",
                children: [
                  e.label,
                  e.discount
                    ? i.jsx("span", {
                        className: m?.CommerceTabs_discount,
                        "data-slot": "CommerceTabs_discount",
                        children: e.discount,
                      })
                    : null,
                ],
              }),
            },
            e.key,
          );
        }),
      }),
    }),
  });
}
function q(e, t) {
  let r = {};
  for (let o of new Set([...Object.keys(e ?? {}), ...Object.keys(t ?? {})])) {
    let i = a.A(e?.[o], t?.[o]);
    if (i) {
      r[o] = i;
    }
  }
  return r;
}
const G = "index_module_DreaminaCommerceBridge";
const V =
  require.j == "wl4"
    ? {
        CommerceTabs_wrap: "index_module_CommerceTabs_wrap8",
        CommerceTabs_navbar: "index_module_CommerceTabs_navbar7",
        CommerceTabs_item: "index_module_CommerceTabs_item5",
        CommerceTabs_active: "index_module_CommerceTabs_active3",
        CommerceTabs_label: "index_module_CommerceTabs_label6",
        CommerceTabs_discount: "index_module_CommerceTabs_discount5",
      }
    : null;
export function wQ({ classes, className, ...rest }) {
  let o = q(V, classes);
  return i.jsx(useE, {
    classes: o,
    children: i.jsx(useU, {
      ...rest,
      className: a.A(G, className),
    }),
  });
}
const z = {
  CommercePriceCard_card: "index_module_CommercePriceCard_card5",
  CommercePriceCard_highlighted: "index_module_CommercePriceCard_highlighted",
  CommercePriceCard_banner: "index_module_CommercePriceCard_banner5",
  CommercePriceCard_content: "index_module_CommercePriceCard_content5",
  CommercePriceCard_highlightBenefits:
    "index_module_CommercePriceCard_highlightBenefits5",
  CommercePriceCard_highlightBenefitsTitle:
    "index_module_CommercePriceCard_highlightBenefitsTitle",
  CommercePriceCard_highlightBenefitItem:
    "index_module_CommercePriceCard_highlightBenefitItem5",
  CommercePriceCard_highlightBenefitHeader:
    "index_module_CommercePriceCard_highlightBenefitHeader5",
  CommercePriceCard_highlightBenefitTitle:
    "index_module_CommercePriceCard_highlightBenefitTitle5",
  CommercePriceCard_highlightBenefitTitleText:
    "index_module_CommercePriceCard_highlightBenefitTitleText",
  CommercePriceCard_highlightBenefitTag:
    "index_module_CommercePriceCard_highlightBenefitTag5",
  CommercePriceCard_highlightBenefitDescription:
    "index_module_CommercePriceCard_highlightBenefitDescription5",
  CommercePriceCard_highlightBenefitDescriptionText:
    "index_module_CommercePriceCard_highlightBenefitDescriptionText",
  CommercePriceCard_highlightBenefitDescriptions:
    "index_module_CommercePriceCard_highlightBenefitDescriptions3",
  CommercePriceCard_highlightBenefitInfoIcon:
    "index_module_CommercePriceCard_highlightBenefitInfoIcon4",
  CommercePriceCard_priceInfo: "index_module_CommercePriceCard_priceInfo5",
  CommercePriceCard_quantityTotalRow:
    "index_module_CommercePriceCard_quantityTotalRow3",
  CommercePriceCard_quantity: "index_module_CommercePriceCard_quantity3",
  CommercePriceCard_unitPrice: "index_module_CommercePriceCard_unitPrice",
  CommercePriceCard_totalPrice: "index_module_CommercePriceCard_totalPrice",
  CommercePriceCard_summary: "index_module_CommercePriceCard_summary3",
  CommercePriceCard_priceDetail: "index_module_CommercePriceCard_priceDetail3",
  CommercePriceCard_summaryRow: "index_module_CommercePriceCard_summaryRow3",
  CommercePriceCard_priceDetailLabel:
    "index_module_CommercePriceCard_priceDetailLabel3",
  CommercePriceCard_summaryLabel:
    "index_module_CommercePriceCard_summaryLabel3",
  CommercePriceCard_priceDetailValue:
    "index_module_CommercePriceCard_priceDetailValue3",
  CommercePriceCard_summaryValue:
    "index_module_CommercePriceCard_summaryValue3",
  CommercePriceText_root: "index_module_CommercePriceText_root7",
  CommercePriceText_currency: "index_module_CommercePriceText_currency5",
  CommercePriceText_price: "index_module_CommercePriceText_price5",
  CommerceProductText_root: "index_module_CommerceProductText_root7",
  CommerceProductText_headerTop: "index_module_CommerceProductText_headerTop7",
  CommerceProductText_title: "index_module_CommerceProductText_title5",
  CommerceProductText_tag: "index_module_CommerceProductText_tag7",
  CommerceProductText_priorityTag:
    "index_module_CommerceProductText_priorityTag5",
  CommerceCreditRate_badge: "index_module_CommerceCreditRate_badge5",
  CommerceCreditRate_badgeIcon: "index_module_CommerceCreditRate_badgeIcon4",
  CommercePriceText_original: "index_module_CommercePriceText_original5",
  CommercePriceText_cycle: "index_module_CommercePriceText_cycle5",
  CommercePriceText_additions: "index_module_CommercePriceText_additions7",
  CommercePriceCard_body: "index_module_CommercePriceCard_body5",
  CommercePriceCard_description: "index_module_CommercePriceCard_description3",
  CommerceCreditRate_creditGrid: "index_module_CommerceCreditRate_creditGrid7",
  CommerceCreditRate_creditItem: "index_module_CommerceCreditRate_creditItem5",
  CommerceCreditRate_creditInfo: "index_module_CommerceCreditRate_creditInfo7",
  CommerceCreditRate_creditIcon: "index_module_CommerceCreditRate_creditIcon3",
  CommerceCreditRate_creditUnit: "index_module_CommerceCreditRate_creditUnit5",
  CommerceCreditText_unit: "index_module_CommerceCreditText_unit5",
  CommerceCreditRate_creditLabel:
    "index_module_CommerceCreditRate_creditLabel3",
  CommerceCreditText_root: "index_module_CommerceCreditText_root5",
  CommerceCreditRate_creditValue:
    "index_module_CommerceCreditRate_creditValue3",
  CommerceSubscribeButton_container:
    "index_module_CommerceSubscribeButton_container7",
  CommerceSubscribeButton_ctaButton:
    "index_module_CommerceSubscribeButton_ctaButton7",
  CommercePriceCard_secondaryCta:
    "index_module_CommercePriceCard_secondaryCta5",
  CommerceSubscribeButton_freeTrial:
    "index_module_CommerceSubscribeButton_freeTrial5",
  CommerceBenefitList_benefitsSection:
    "index_module_CommerceBenefitList_benefitsSection7",
  CommerceBenefitList_benefitsTitle:
    "index_module_CommerceBenefitList_benefitsTitle3",
  CommerceBenefitList_group: "index_module_CommerceBenefitList_group7",
  CommerceBenefitList_groupTitle: "index_module_CommerceBenefitList_groupTitle",
  CommerceBenefitList_benefitsList:
    "index_module_CommerceBenefitList_benefitsList7",
  CommerceBenefitList_benefitItem:
    "index_module_CommerceBenefitList_benefitItem7",
  CommerceBenefitList_benefitIcon:
    "index_module_CommerceBenefitList_benefitIcon5",
  CommerceBenefitList_benefitInfoIcon:
    "index_module_CommerceBenefitList_benefitInfoIcon5",
  CommerceBenefitList_benefitContent:
    "index_module_CommerceBenefitList_benefitContent5",
  CommerceBenefitList_benefitText:
    "index_module_CommerceBenefitList_benefitText7",
  CommerceBenefitList_benefitTextStrong:
    "index_module_CommerceBenefitList_benefitTextStrong",
  CommerceBenefitList_benefitLink:
    "index_module_CommerceBenefitList_benefitLink3",
  CommerceBenefitList_benefitLinkIcon:
    "index_module_CommerceBenefitList_benefitLinkIcon3",
  CommerceBenefitList_benefitTag:
    "index_module_CommerceBenefitList_benefitTag5",
  CommerceBenefitList_benefitTagOrange:
    "index_module_CommerceBenefitList_benefitTagOrange",
  CommerceBenefitList_benefitTagSuper:
    "index_module_CommerceBenefitList_benefitTagSuper",
  CommerceBenefitList_benefitTagGray:
    "index_module_CommerceBenefitList_benefitTagGray",
  CommercePriceSlider_wrapper: "index_module_CommercePriceSlider_wrapper5",
  CommercePriceSlider_container: "index_module_CommercePriceSlider_container5",
  CommercePriceSlider_labels: "index_module_CommercePriceSlider_labels5",
  CommercePriceSlider_label: "index_module_CommercePriceSlider_label5",
  CommercePriceSlider_trackWrapper:
    "index_module_CommercePriceSlider_trackWrapper5",
  CommercePriceSlider_track: "index_module_CommercePriceSlider_track5",
  CommercePriceSlider_road: "index_module_CommercePriceSlider_road5",
  CommercePriceSlider_bar: "index_module_CommercePriceSlider_bar5",
  CommercePriceSlider_thumbRail: "index_module_CommercePriceSlider_thumbRail3",
  CommercePriceSlider_thumb: "index_module_CommercePriceSlider_thumb5",
  CommerceCreditText_value: "index_module_CommerceCreditText_value3",
};
const $ =
  require.j == "wl4"
    ? {
        CommerceQuantityStepper_root:
          "index_module_CommerceQuantityStepper_root6",
        CommerceQuantityStepper_label:
          "index_module_CommerceQuantityStepper_label6",
        CommerceQuantityStepper_control:
          "index_module_CommerceQuantityStepper_control6",
        CommerceQuantityStepper_decreaseButton:
          "index_module_CommerceQuantityStepper_decreaseButton6",
        CommerceQuantityStepper_increaseButton:
          "index_module_CommerceQuantityStepper_increaseButton6",
        CommerceQuantityStepper_decreaseButtonTooltip:
          "index_module_CommerceQuantityStepper_decreaseButtonTooltip5",
        CommerceQuantityStepper_increaseButtonTooltip:
          "index_module_CommerceQuantityStepper_increaseButtonTooltip5",
        CommerceQuantityStepper_decreaseIcon:
          "index_module_CommerceQuantityStepper_decreaseIcon6",
        CommerceQuantityStepper_increaseIcon:
          "index_module_CommerceQuantityStepper_increaseIcon6",
        CommerceQuantityStepper_value:
          "index_module_CommerceQuantityStepper_value6",
      }
    : null;
const K =
  require.j == "wl4"
    ? [
        "CommerceQuantityStepper_root",
        "CommerceQuantityStepper_label",
        "CommerceQuantityStepper_control",
        "CommerceQuantityStepper_decreaseButtonTooltip",
        "CommerceQuantityStepper_decreaseButton",
        "CommerceQuantityStepper_decreaseIcon",
        "CommerceQuantityStepper_value",
        "CommerceQuantityStepper_increaseButtonTooltip",
        "CommerceQuantityStepper_increaseButton",
        "CommerceQuantityStepper_increaseIcon",
      ]
    : null;
function Y({ children, className, content, disabled, showArrow, slot }) {
  let l = i.jsx("span", {
    className,
    "data-slot": slot,
    "data-disabled": disabled ? "" : undefined,
    children,
  });
  if (
    disabled &&
    content != null &&
    typeof content !== "boolean" &&
    content !== ""
  ) {
    return i.jsx(n.A, {
      content,
      position: "top",
      showArrow,
      children: l,
    });
  }
  return l;
}
function Z(e, t, r) {
  let a = e[t + r];
  if (a && !a.disabled) {
    return a;
  }
}
function X(e, t) {
  return (t === "first" ? e : [...e].reverse()).find((e) => !e.disabled);
}
function useEe({
  label,
  value,
  options,
  readOnly,
  disabled,
  tooltip,
  tooltipShowArrow = true,
  decreaseDisabledTooltip,
  increaseDisabledTooltip,
  decreaseAriaLabel = "Decrease quantity",
  increaseAriaLabel = "Increase quantity",
  inputAriaLabel = "Quantity",
  onClick,
  onChange,
  className,
  classes,
}) {
  let w = R($, useB(), classes);
  let I = o.useMemo(
    () => [...options].sort((e, t) => e.value - t.value),
    [options],
  );
  let b = I.findIndex((e) => e.value === value);
  let j = b >= 0 ? I[b] : undefined;
  let k = !!disabled || !!readOnly || I.length <= 1;
  let P = b >= 0 ? Z(I, b, -1) : undefined;
  let x = b >= 0 ? Z(I, b, 1) : X(I, "first");
  let M = X(I, "first");
  let A = X(I, "last");
  let D = k || !P;
  let E = k || !x;
  let N = o.useCallback(
    (e) => {
      if (!(!e || disabled || readOnly)) {
        onChange?.(e.value, e);
      }
    },
    [disabled, onChange, readOnly],
  );
  let onClick_1 = o.useCallback(
    (e) => {
      var t;
      if (
        !(
          disabled ||
          readOnly ||
          ((t = e.target) instanceof Element &&
            t.closest(
              '[data-slot="CommerceQuantityStepper_decreaseButtonTooltip"],[data-slot="CommerceQuantityStepper_decreaseButton"],[data-slot="CommerceQuantityStepper_increaseButtonTooltip"],[data-slot="CommerceQuantityStepper_increaseButton"]',
            ) !== null)
        )
      ) {
        onClick?.();
      }
    },
    [disabled, onClick, readOnly],
  );
  let F = o.useCallback(
    (e) => {
      if (!disabled && !readOnly) {
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
          N(P);
          e.preventDefault();
          return;
        }
        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
          N(x);
          e.preventDefault();
          return;
        }
        if (e.key === "Home") {
          N(M);
          e.preventDefault();
          return;
        }
        if (e.key === "End") {
          N(A);
          e.preventDefault();
        }
      }
    },
    [disabled, A, M, x, P, readOnly, N],
  );
  let J = i.jsxs("div", {
    className: a.A(w.CommerceQuantityStepper_root, className),
    "data-component": "CommerceQuantityStepper",
    "data-slot": "CommerceQuantityStepper_root",
    "data-slots": K.join(","),
    "data-disabled": disabled ? "" : undefined,
    "data-readonly": readOnly ? "" : undefined,
    onClick: onClick_1,
    children: [
      label
        ? i.jsx("span", {
            className: w.CommerceQuantityStepper_label,
            "data-slot": "CommerceQuantityStepper_label",
            children: label,
          })
        : null,
      i.jsxs("div", {
        className: w.CommerceQuantityStepper_control,
        "data-slot": "CommerceQuantityStepper_control",
        children: [
          Y({
            className: w.CommerceQuantityStepper_decreaseButtonTooltip,
            content: decreaseDisabledTooltip,
            disabled: D,
            showArrow: tooltipShowArrow,
            slot: "CommerceQuantityStepper_decreaseButtonTooltip",
            children: i.jsx("button", {
              type: "button",
              className: w.CommerceQuantityStepper_decreaseButton,
              "data-slot": "CommerceQuantityStepper_decreaseButton",
              disabled: D,
              "aria-label": decreaseAriaLabel,
              onClick: () => N(P),
              children: i.jsx(v.A, {
                className: w.CommerceQuantityStepper_decreaseIcon,
                "data-slot": "CommerceQuantityStepper_decreaseIcon",
                "aria-hidden": "true",
                focusable: "false",
              }),
            }),
          }),
          i.jsx("span", {
            className: w.CommerceQuantityStepper_value,
            "data-slot": "CommerceQuantityStepper_value",
            role: "spinbutton",
            tabIndex: k ? undefined : 0,
            "aria-label": inputAriaLabel,
            "aria-valuenow": j?.value ?? value,
            "aria-valuemin": M?.value,
            "aria-valuemax": A?.value,
            "aria-valuetext":
              typeof j?.label === "string" || typeof j?.label === "number"
                ? String(j.label)
                : String(j?.value ?? value ?? ""),
            "aria-readonly": !!k || undefined,
            "aria-disabled": !!disabled || undefined,
            onKeyDown: F,
            children:
              j?.label != null ? j.label : String(j?.value ?? value ?? ""),
          }),
          Y({
            className: w.CommerceQuantityStepper_increaseButtonTooltip,
            content: increaseDisabledTooltip,
            disabled: E,
            showArrow: tooltipShowArrow,
            slot: "CommerceQuantityStepper_increaseButtonTooltip",
            children: i.jsx("button", {
              type: "button",
              className: w.CommerceQuantityStepper_increaseButton,
              "data-slot": "CommerceQuantityStepper_increaseButton",
              disabled: E,
              "aria-label": increaseAriaLabel,
              onClick: () => N(x),
              children: i.jsx(_.A, {
                className: w.CommerceQuantityStepper_increaseIcon,
                "data-slot": "CommerceQuantityStepper_increaseIcon",
                "aria-hidden": "true",
                focusable: "false",
              }),
            }),
          }),
        ],
      }),
    ],
  });
  if (tooltip) {
    return i.jsx(n.A, {
      content: tooltip,
      position: "top",
      showArrow: tooltipShowArrow,
      children: J,
    });
  }
  return J;
}
const et = {
  CommerceQuantityStepper_root: "index_module_CommerceQuantityStepper_root5",
  CommerceQuantityStepper_label: "index_module_CommerceQuantityStepper_label5",
  CommerceQuantityStepper_control:
    "index_module_CommerceQuantityStepper_control5",
  CommerceQuantityStepper_decreaseButton:
    "index_module_CommerceQuantityStepper_decreaseButton5",
  CommerceQuantityStepper_increaseButton:
    "index_module_CommerceQuantityStepper_increaseButton5",
  CommerceQuantityStepper_decreaseButtonTooltip:
    "index_module_CommerceQuantityStepper_decreaseButtonTooltip6",
  CommerceQuantityStepper_increaseButtonTooltip:
    "index_module_CommerceQuantityStepper_increaseButtonTooltip6",
  CommerceQuantityStepper_decreaseIcon:
    "index_module_CommerceQuantityStepper_decreaseIcon5",
  CommerceQuantityStepper_increaseIcon:
    "index_module_CommerceQuantityStepper_increaseIcon5",
  CommerceQuantityStepper_value: "index_module_CommerceQuantityStepper_value5",
};
const er =
  require.j == "wl4"
    ? {
        CommerceBenefitList_benefitsSection:
          "index_module_CommerceBenefitList_benefitsSection8",
        CommerceBenefitList_group: "index_module_CommerceBenefitList_group8",
        CommerceBenefitList_benefitsList:
          "index_module_CommerceBenefitList_benefitsList8",
        CommerceBenefitList_benefitItem:
          "index_module_CommerceBenefitList_benefitItem8",
        CommerceBenefitList_benefitIcon:
          "index_module_CommerceBenefitList_benefitIcon6",
        CommerceBenefitList_benefitContent:
          "index_module_CommerceBenefitList_benefitContent6",
        CommerceBenefitList_benefitText:
          "index_module_CommerceBenefitList_benefitText8",
        CommerceBenefitList_benefitInfoIcon:
          "index_module_CommerceBenefitList_benefitInfoIcon6",
        CommerceBenefitList_benefitLink:
          "index_module_CommerceBenefitList_benefitLink4",
        CommerceBenefitList_benefitLinkIcon:
          "index_module_CommerceBenefitList_benefitLinkIcon4",
        CommerceBenefitList_benefitTag:
          "index_module_CommerceBenefitList_benefitTag6",
      }
    : null;
const ea =
  require.j == "wl4"
    ? [
        "CommerceBenefitList_benefitsSection",
        "CommerceBenefitList_benefitsTitle",
        "CommerceBenefitList_benefitsList",
        "CommerceBenefitList_group",
        "CommerceBenefitList_groupTitle",
        "CommerceBenefitList_benefitItem",
        "CommerceBenefitList_benefitIcon",
        "CommerceBenefitList_benefitInfoIcon",
        "CommerceBenefitList_benefitContent",
        "CommerceBenefitList_benefitText",
        "CommerceBenefitList_benefitTextStrong",
        "CommerceBenefitList_benefitLink",
        "CommerceBenefitList_benefitLinkIcon",
        "CommerceBenefitList_benefitTag",
        "CommerceBenefitList_benefitTagOrange",
        "CommerceBenefitList_benefitTagSuper",
        "CommerceBenefitList_benefitTagGray",
      ]
    : null;
function eo(e, t) {
  let r = e.tag?.variant
    ? e.tag.variant === "orange"
      ? t?.CommerceBenefitList_benefitTagOrange
      : e.tag.variant === "super"
        ? t?.CommerceBenefitList_benefitTagSuper
        : t?.CommerceBenefitList_benefitTagGray
    : undefined;
  return i.jsxs(
    "li",
    {
      className: t?.CommerceBenefitList_benefitItem,
      "data-slot": "CommerceBenefitList_benefitItem",
      children: [
        i.jsx(f.A, {
          size: 14,
          className: t?.CommerceBenefitList_benefitIcon,
          "data-slot": "CommerceBenefitList_benefitIcon",
        }),
        i.jsxs("span", {
          className: t?.CommerceBenefitList_benefitContent,
          "data-slot": "CommerceBenefitList_benefitContent",
          children: [
            i.jsx("span", {
              className: a.A(
                t?.CommerceBenefitList_benefitText,
                e.strong && t?.CommerceBenefitList_benefitTextStrong,
              ),
              "data-slot": "CommerceBenefitList_benefitText",
              "data-strong": e.strong ? "" : undefined,
              children: e.text,
            }),
            e.tooltip
              ? i.jsx(n.A, {
                  content: e.tooltip,
                  position: "top",
                  children: i.jsx(h.A, {
                    size: 14,
                    className: t?.CommerceBenefitList_benefitInfoIcon,
                    "data-slot": "CommerceBenefitList_benefitInfoIcon",
                  }),
                })
              : null,
            e.link
              ? i.jsxs("a", {
                  href: e.link.href,
                  target: e.link.target,
                  rel:
                    e.link.rel ??
                    (e.link.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined),
                  className: t?.CommerceBenefitList_benefitLink,
                  "data-slot": "CommerceBenefitList_benefitLink",
                  children: [
                    e.link.text,
                    e.link.showExternalIcon
                      ? i.jsx(S.A, {
                          size: 14,
                          "aria-hidden": "true",
                          className: t?.CommerceBenefitList_benefitLinkIcon,
                          "data-slot": "CommerceBenefitList_benefitLinkIcon",
                        })
                      : null,
                  ],
                })
              : null,
          ],
        }),
        e.tag
          ? i.jsx("span", {
              className: a.A(t?.CommerceBenefitList_benefitTag, r),
              "data-slot": "CommerceBenefitList_benefitTag",
              "data-variant": e.tag.variant ?? "orange",
              children: e.tag.text,
            })
          : null,
      ],
    },
    e.key,
  );
}
function ei({
  title,
  header,
  benefits,
  benefitGroups,
  showGroupDivider = false,
  alignOffsets,
  className,
  classes,
}) {
  let s = R(er, useB(), classes);
  let d = !!(benefitGroups && benefitGroups.length > 0);
  let u = !!(benefits && benefits.length > 0);
  let p = !!header;
  if (!d && !u && !p) {
    return null;
  }
  let C = !!(title && (d || u));
  return i.jsxs("div", {
    className: a.A(s?.CommerceBenefitList_benefitsSection, className),
    "data-component": "CommerceBenefitList",
    "data-slot": "CommerceBenefitList_benefitsSection",
    "data-slots": ea.join(","),
    "data-show-group-divider": showGroupDivider ? "" : undefined,
    children: [
      header,
      C
        ? i.jsx("div", {
            className: s?.CommerceBenefitList_benefitsTitle,
            "data-slot": "CommerceBenefitList_benefitsTitle",
            children: title,
          })
        : null,
      d
        ? benefitGroups.map((e, t) => {
            let r = t > 0 ? (alignOffsets?.groupSeparator ?? 0) : 0;
            let a =
              r > 0
                ? {
                    "--commerce-benefit-list-group-align-offset": `${r}px`,
                  }
                : undefined;
            return i.jsxs(
              "div",
              {
                className: s?.CommerceBenefitList_group,
                "data-slot": "CommerceBenefitList_group",
                "data-group-index": t,
                "data-align-anchor":
                  t > 0 ? "CommerceBenefitList_groupSeparator" : undefined,
                style: a,
                children: [
                  e.title
                    ? i.jsx("div", {
                        className: s?.CommerceBenefitList_groupTitle,
                        "data-slot": "CommerceBenefitList_groupTitle",
                        children: e.title,
                      })
                    : null,
                  i.jsx("ul", {
                    className: s?.CommerceBenefitList_benefitsList,
                    "data-slot": "CommerceBenefitList_benefitsList",
                    children: e.items.map((e) => eo(e, s)),
                  }),
                ],
              },
              e.key,
            );
          })
        : null,
      u
        ? i.jsx("ul", {
            className: s?.CommerceBenefitList_benefitsList,
            "data-slot": "CommerceBenefitList_benefitsList",
            children: benefits.map((e) => eo(e, s)),
          })
        : null,
    ],
  });
}
const en =
  require.j == "wl4"
    ? {
        CommerceCreditRate_creditGrid:
          "index_module_CommerceCreditRate_creditGrid8",
        CommerceCreditRate_creditItem:
          "index_module_CommerceCreditRate_creditItem6",
        CommerceCreditRate_creditIcon:
          "index_module_CommerceCreditRate_creditIcon4",
        CommerceCreditRate_creditInfo:
          "index_module_CommerceCreditRate_creditInfo8",
        CommerceCreditRate_badge: "index_module_CommerceCreditRate_badge6",
        CommerceCreditRate_badgeIcon:
          "index_module_CommerceCreditRate_badgeIcon3",
      }
    : null;
const ec =
  require.j == "wl4"
    ? {
        CommerceCreditText_root: "index_module_CommerceCreditText_root6",
      }
    : null;
const el =
  require.j == "wl4"
    ? [
        "CommerceCreditText_root",
        "CommerceCreditText_unit",
        "CommerceCreditText_value",
      ]
    : null;
function em({ value, unit, placement = "suffix", className, classes }) {
  let c = R(ec, useB(), classes);
  let l = unit
    ? i.jsx("span", {
        className: c?.CommerceCreditText_unit,
        "data-slot": "CommerceCreditText_unit",
        children: unit,
      })
    : null;
  let m = i.jsx("span", {
    className: c?.CommerceCreditText_value,
    "data-slot": "CommerceCreditText_value",
    children: value,
  });
  return i.jsxs("span", {
    className: a.A(c?.CommerceCreditText_root, className),
    "data-component": "CommerceCreditText",
    "data-slot": "CommerceCreditText_root",
    "data-slots": el.join(","),
    "data-placement": placement,
    children: [
      placement === "prefix" ? l : null,
      m,
      placement === "suffix" ? l : null,
    ],
  });
}
const es =
  require.j == "wl4"
    ? [
        "CommerceCreditRate_creditGrid",
        "CommerceCreditRate_creditItem",
        "CommerceCreditRate_creditIcon",
        "CommerceCreditRate_creditLabel",
        "CommerceCreditRate_creditValue",
        "CommerceCreditRate_creditUnit",
        "CommerceCreditRate_creditInfo",
        "CommerceCreditRate_badge",
        "CommerceCreditRate_badgeIcon",
      ]
    : null;
function ed({ metrics, badge, texts, className, classes }) {
  let c = R(en, useB(), classes);
  if (!metrics?.creditAmountMonthly || !metrics?.creditAmountRate) {
    return null;
  }
  let l = texts?.creditTextPlacement ?? "suffix";
  let placement = texts?.equalToCreditTextPlacement ?? l;
  let s = badge?.text
    ? i.jsxs("span", {
        className: c?.CommerceCreditRate_badge,
        "data-slot": "CommerceCreditRate_badge",
        children: [
          badge.text,
          badge.amount
            ? i.jsxs("span", {
                className: c?.CommerceCreditRate_badgeIcon,
                "data-slot": "CommerceCreditRate_badgeIcon",
                children: [badge.icon ?? metrics.icon, badge.amount],
              })
            : null,
        ],
      })
    : null;
  if (metrics.mode === "compact") {
    return i.jsxs("div", {
      className: a.A(c?.CommerceCreditRate_creditGrid, className),
      "data-component": "CommerceCreditRate",
      "data-slot": "CommerceCreditRate_creditGrid",
      "data-slots": es.join(","),
      "data-mode": "compact",
      children: [
        i.jsxs("div", {
          className: c?.CommerceCreditRate_creditItem,
          "data-slot": "CommerceCreditRate_creditItem",
          children: [
            metrics.icon
              ? i.jsx("span", {
                  className: c?.CommerceCreditRate_creditIcon,
                  "data-slot": "CommerceCreditRate_creditIcon",
                  children: metrics.icon,
                })
              : null,
            i.jsx("div", {
              className: c?.CommerceCreditRate_creditInfo,
              "data-slot": "CommerceCreditRate_creditInfo",
              children: i.jsx(em, {
                value: metrics.creditAmountMonthly,
                unit: texts?.monthlyUnit,
                placement: l,
                classes: c,
              }),
            }),
            s,
          ],
        }),
        i.jsx("div", {
          className: c?.CommerceCreditRate_creditItem,
          "data-slot": "CommerceCreditRate_creditItem",
          children: metrics.exchangeText
            ? i.jsx("span", {
                className: c?.CommerceCreditRate_creditLabel,
                "data-slot": "CommerceCreditRate_creditLabel",
                children: metrics.exchangeText,
              })
            : i.jsxs("div", {
                className: c?.CommerceCreditRate_creditInfo,
                "data-slot": "CommerceCreditRate_creditInfo",
                children: [
                  i.jsxs("span", {
                    className: c?.CommerceCreditRate_creditValue,
                    "data-slot": "CommerceCreditRate_creditValue",
                    children: [
                      texts?.equalToLabel ?? "",
                      metrics.currency,
                      texts?.equalToValue ?? "1",
                      "=",
                    ],
                  }),
                  i.jsx(em, {
                    value: metrics.creditAmountRate,
                    unit: texts?.equalToUnit,
                    placement,
                    classes: c,
                  }),
                ],
              }),
        }),
      ],
    });
  }
  return i.jsxs("div", {
    className: a.A(c?.CommerceCreditRate_creditGrid, className),
    "data-component": "CommerceCreditRate",
    "data-slot": "CommerceCreditRate_creditGrid",
    "data-slots": es.join(","),
    children: [
      i.jsxs("div", {
        className: c?.CommerceCreditRate_creditItem,
        "data-slot": "CommerceCreditRate_creditItem",
        children: [
          i.jsx("span", {
            className: c?.CommerceCreditRate_creditLabel,
            "data-slot": "CommerceCreditRate_creditLabel",
            children: texts?.monthlyLabel,
          }),
          i.jsx("div", {
            className: c?.CommerceCreditRate_creditInfo,
            "data-slot": "CommerceCreditRate_creditInfo",
            children: i.jsx(em, {
              value: metrics.creditAmountMonthly,
              unit: texts?.monthlyUnit,
              placement: l,
              classes: c,
            }),
          }),
          s,
        ],
      }),
      i.jsxs("div", {
        className: c?.CommerceCreditRate_creditItem,
        "data-slot": "CommerceCreditRate_creditItem",
        children: [
          i.jsx("span", {
            className: c?.CommerceCreditRate_creditLabel,
            "data-slot": "CommerceCreditRate_creditLabel",
            children: texts?.equalToLabel,
          }),
          i.jsxs("div", {
            className: c?.CommerceCreditRate_creditInfo,
            "data-slot": "CommerceCreditRate_creditInfo",
            children: [
              i.jsxs("span", {
                className: c?.CommerceCreditRate_creditValue,
                "data-slot": "CommerceCreditRate_creditValue",
                children: [metrics.currency, texts?.equalToValue ?? "1", "="],
              }),
              i.jsx(em, {
                value: metrics.creditAmountRate,
                unit: texts?.equalToUnit,
                placement,
                classes: c,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const eu =
  require.j == "wl4"
    ? {
        enabled: true,
        duration: 2000,
        easing: "linear",
        respectReducedMotion: true,
      }
    : null;
const ep =
  require.j == "wl4"
    ? `
  .number__inner {
    padding-bottom: 0;
  }
`
    : null;
const eC =
  require.j == "wl4"
    ? `
  .digit__num,
  .number .symbol__value,
  [part~="left"] .symbol__value {
    text-decoration-line: line-through;
    text-decoration-color: currentColor;
  }
`
    : null;
const ev =
  require.j == "wl4"
    ? `
  [part~="right"] {
    display: block;
  }
`
    : null;
const e_ =
  require.j == "wl4"
    ? `
  [part~="left"],
  [part~="number"] {
    opacity: 0;
  }
`
    : null;
function ef(e) {
  if (typeof e !== "string" && typeof e !== "number") {
    return null;
  }
  let t = String(e).trim().replace(/,/g, "");
  if (!/^-?\d+(\.\d+)?$/.test(t)) {
    return null;
  }
  let r = Number(t);
  if (Number.isFinite(r)) {
    return {
      value: r,
      decimalPlaces: t.includes(".") ? (t.split(".")[1]?.length ?? 0) : 0,
    };
  }
  return null;
}
function eh(e, animation) {
  return animation.enabled && !animation.format && !!ef(e);
}
function eT(e) {
  if (typeof e === "string" || typeof e === "number") {
    return String(e);
  }
}
function eS(e) {
  if (typeof e === "string" || typeof e === "number") {
    return String(e).length;
  }
  return 0;
}
function eg(e) {
  if (typeof e !== "string" && typeof e !== "number") {
    return e;
  }
  let t = String(e).trim();
  if (!/^-?\d[\d,]*(\.\d+)?$/.test(t)) {
    return e;
  }
  let r = t.startsWith("-") ? "-" : "";
  let [a, o] = (r ? t.slice(1) : t).replace(/,/g, "").split(".");
  let i = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${r}${i}${o != null ? `.${o}` : ""}`;
}
function ey(e, t, r) {
  if (!e || e.querySelector(`[${t}]`)) {
    return;
  }
  let a = document.createElement("style");
  a.setAttribute(t, "");
  a.textContent = r;
  e.appendChild(a);
}
function useEw({
  lineThrough,
  hideValue,
  stackedSuffix,
  onAnimationsStart,
  onAnimationsFinish,
  ...rest
}) {
  let lRef = o.useRef(null);
  let [m, setM] = o.useState(!!hideValue);
  o.useEffect(() => {
    ey(lRef.current?.shadowRoot, "data-commerce-price-text", ep);
  }, []);
  o.useEffect(() => {
    if (lineThrough) {
      ey(lRef.current?.shadowRoot, "data-commerce-line-through", eC);
    }
  }, [lineThrough]);
  o.useEffect(() => {
    if (stackedSuffix) {
      ey(lRef.current?.shadowRoot, "data-commerce-stacked-suffix", ev);
    }
  }, [stackedSuffix]);
  o.useEffect(() => {
    ((e, t, r, a) => {
      if (a) {
        return ey(e, t, r);
      }
      e?.querySelectorAll(`[${t}]`).forEach((e) => {
        e.remove();
      });
    })(lRef.current?.shadowRoot, "data-commerce-hide-value", e_, m);
  }, [m]);
  o.useEffect(() => {
    if (!hideValue) {
      setM(false);
    }
  }, [hideValue]);
  return i.jsx(P.Ay, {
    ref: lRef,
    onAnimationsStart: (e) => {
      if (!hideValue) {
        setM(false);
      }
      onAnimationsStart?.(e);
    },
    onAnimationsFinish: (e) => {
      if (hideValue) {
        setM(true);
      }
      onAnimationsFinish?.(e);
    },
    ...rest,
  });
}
function eI({
  amount,
  grouping,
  animation,
  prefix,
  suffix,
  lineThrough,
  hideValue,
  stackedSuffix,
}) {
  let maximumFractionDigits;
  let s = ef(amount);
  if (!animation.enabled || !s) {
    if (grouping) {
      return eg(amount);
    }
    return amount;
  }
  if (animation.format) {
    return animation.format(s.value);
  }
  let easing = ((e) => {
    if (typeof e !== "function") {
      if (Array.isArray(e)) {
        return `cubic-bezier(${e.join(",")})`;
      }
      return e;
    }
  })(animation.easing);
  let u = {
    duration: animation.duration,
    ...(easing
      ? {
          easing,
        }
      : {}),
  };
  let stackedSuffix_1 =
    stackedSuffix ?? ((lineThrough || hideValue) && !!suffix);
  return i.jsx(useEw, {
    value: s.value,
    format: {
      useGrouping: grouping,
      minimumFractionDigits: (maximumFractionDigits =
        animation.precision ?? s.decimalPlaces),
      maximumFractionDigits,
    },
    prefix,
    suffix,
    lineThrough,
    hideValue,
    stackedSuffix: stackedSuffix_1,
    transformTiming: u,
    spinTiming: u,
    opacityTiming: u,
    respectMotionPreference: animation.respectReducedMotion,
    willChange: true,
  });
}
function eb(layout) {
  if (layout === "horizontal") {
    return layout;
  }
}
function ej({
  price,
  classes,
  layout,
  originalAmount,
  shouldRenderExternalOriginalCurrency,
  originalUsesNumberFlow,
}) {
  return i.jsxs("span", {
    className: classes.CommercePriceText_original,
    "data-slot": "CommercePriceText_original",
    "data-layout": eb(layout),
    "data-number-flow": originalUsesNumberFlow ? "" : undefined,
    children: [
      shouldRenderExternalOriginalCurrency && price.currency,
      originalAmount,
    ],
  });
}
function ek({ price, classes, layout }) {
  return i.jsx("span", {
    className: classes.CommercePriceText_currency,
    "data-slot": "CommercePriceText_currency",
    "data-layout": eb(layout),
    children: price.currency,
  });
}
function eP({ classes, layout, amount }) {
  return i.jsx("span", {
    className: classes.CommercePriceText_price,
    "data-slot": "CommercePriceText_price",
    "data-layout": eb(layout),
    children: amount,
  });
}
function ex({ price, classes, layout, cyclePrefix }) {
  return i.jsxs("span", {
    className: classes.CommercePriceText_cycle,
    "data-slot": "CommercePriceText_cycle",
    "data-layout": eb(layout),
    children: [cyclePrefix, price.cycle],
  });
}
function eM(e) {
  let { shouldRenderOriginalAmount, shouldRenderExternalCycle } = e;
  if (shouldRenderOriginalAmount || shouldRenderExternalCycle) {
    return i.jsxs("div", {
      className: e.classes.CommercePriceText_additions,
      "data-slot": "CommercePriceText_additions",
      children: [
        shouldRenderOriginalAmount &&
          i.jsx(ej, {
            ...e,
          }),
        shouldRenderExternalCycle &&
          i.jsx(ex, {
            ...e,
          }),
      ],
    });
  }
  return null;
}
function eA(e) {
  let {
    originalPlacement,
    shouldRenderOriginalAmount,
    shouldRenderExternalCurrency,
    shouldRenderExternalCycle,
  } = e;
  let n = originalPlacement === "after-cycle";
  return i.jsxs(i.Fragment, {
    children: [
      !n &&
        shouldRenderOriginalAmount &&
        i.jsx(ej, {
          ...e,
        }),
      shouldRenderExternalCurrency &&
        i.jsx(ek, {
          ...e,
        }),
      i.jsx(eP, {
        ...e,
      }),
      shouldRenderExternalCycle &&
        i.jsx(ex, {
          ...e,
        }),
      n &&
        shouldRenderOriginalAmount &&
        i.jsx(ej, {
          ...e,
        }),
    ],
  });
}
function eD(e) {
  let { classes, shouldRenderExternalCurrency } = e;
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: classes.CommercePriceText_main,
        "data-slot": "CommercePriceText_main",
        children: [
          shouldRenderExternalCurrency &&
            i.jsx(ek, {
              ...e,
            }),
          i.jsx(eP, {
            ...e,
          }),
        ],
      }),
      i.jsx(eM, {
        ...e,
      }),
    ],
  });
}
function eR(e) {
  if (e.layout === "horizontal") {
    return i.jsx(eA, {
      ...e,
    });
  }
  return i.jsx(eD, {
    ...e,
  });
}
const eE = [
  "CommercePriceText_root",
  "CommercePriceText_currency",
  "CommercePriceText_price",
  "CommercePriceText_additions",
  "CommercePriceText_original",
  "CommercePriceText_cycle",
  "CommercePriceText_main",
];
const eB =
  require.j == "wl4"
    ? {
        CommercePriceText_root: "index_module_CommercePriceText_root8",
        CommercePriceText_main: "index_module_CommercePriceText_main3",
        CommercePriceText_additions:
          "index_module_CommercePriceText_additions8",
      }
    : null;
function useEN({
  price,
  layout = "overlap",
  originalPlacement = "before-price",
  animation,
  grouping = false,
  autolayoutThreshold = 7,
  longPriceThreshold = 8,
  className,
  classes,
}) {
  let u = R(eB, useB(), classes);
  let animation_1 = o.useMemo(() => {
    if (animation && animation !== "none") {
      if (animation === true || animation === "number") {
        return eu;
      }
      if (typeof animation === "object") {
        return {
          ...eu,
          ...animation,
          enabled: animation.enabled !== false,
        };
      }
      return {
        ...eu,
        enabled: false,
      };
    }
    return {
      ...eu,
      enabled: false,
    };
  }, [animation]);
  let cyclePrefix = price.cyclePrefix ?? "/";
  let v = eT(price.currency);
  let _ = eT(price.cycle);
  let f = eT(cyclePrefix);
  let h = grouping ? eg(price.amount) : price.amount;
  let S = grouping ? eg(price.originalAmount) : price.originalAmount;
  let amountLength = eS(h);
  let layout_1 = (({
    layout,
    amountLength,
    originalLength,
    autolayoutThreshold,
  }) => {
    if (layout !== "autolayout") {
      return layout;
    }
    if (
      amountLength > autolayoutThreshold ||
      originalLength > autolayoutThreshold
    ) {
      return "overlap";
    }
    return "horizontal";
  })({
    layout,
    amountLength,
    originalLength: eS(S),
    autolayoutThreshold,
  });
  let w = !!price.originalAmount && price.originalAmount !== price.amount;
  let I = eh(price.amount, animation_1);
  let b = eh(price.originalAmount, animation_1);
  let j =
    !w &&
    animation_1.enabled &&
    !animation_1.format &&
    layout_1 === "overlap" &&
    !!_ &&
    f != null;
  let originalUsesNumberFlow = b || j;
  let x = I && v ? v : undefined;
  let M = w && originalUsesNumberFlow && v ? v : undefined;
  let A =
    I && layout_1 === "horizontal" && _ && f != null ? `${f}${_}` : undefined;
  let D =
    originalUsesNumberFlow && layout_1 === "overlap" && _ && f != null
      ? `${f}${_}`
      : undefined;
  let amount = eI({
    amount: price.amount,
    grouping,
    animation: animation_1,
    prefix: x,
    suffix: A,
  });
  let originalAmount = eI({
    amount: w ? price.originalAmount : 0,
    grouping,
    animation: animation_1,
    prefix: M,
    suffix: D,
    lineThrough: w,
    hideValue: !w && !!D,
  });
  let L = !!price.cycle;
  let F = !!price.currency;
  let shouldRenderExternalOriginalCurrency = w && F && !M;
  let O = I || originalUsesNumberFlow;
  let Q = amountLength > longPriceThreshold;
  let W = i.jsx(eR, {
    price,
    classes: u,
    layout: layout_1,
    amount,
    originalAmount,
    cyclePrefix,
    hasOriginal: w,
    shouldRenderOriginalAmount: w || !!D,
    shouldRenderExternalCurrency: F && !x,
    shouldRenderExternalOriginalCurrency,
    shouldRenderExternalCycle: L && !A && !D,
    originalUsesNumberFlow,
    originalPlacement,
  });
  return i.jsx("div", {
    className: a.A(u.CommercePriceText_root, className),
    "data-component": "CommercePriceText",
    "data-slot": "CommercePriceText_root",
    "data-slots": eE.join(","),
    "data-layout": layout_1,
    "data-has-currency": F ? "" : undefined,
    "data-has-original": w ? "" : undefined,
    "data-has-cycle": L ? "" : undefined,
    "data-long-price": Q ? "" : undefined,
    children: O
      ? i.jsx(P.rO, {
          children: W,
        })
      : W,
  });
}
const eL =
  require.j == "wl4"
    ? {
        CommercePriceSlider_wrapper:
          "index_module_CommercePriceSlider_wrapper6",
        CommercePriceSlider_container:
          "index_module_CommercePriceSlider_container6",
        CommercePriceSlider_labels: "index_module_CommercePriceSlider_labels6",
        CommercePriceSlider_label: "index_module_CommercePriceSlider_label6",
        CommercePriceSlider_trackWrapper:
          "index_module_CommercePriceSlider_trackWrapper6",
        CommercePriceSlider_track: "index_module_CommercePriceSlider_track6",
        CommercePriceSlider_road: "index_module_CommercePriceSlider_road6",
        CommercePriceSlider_bar: "index_module_CommercePriceSlider_bar6",
        CommercePriceSlider_thumbRail:
          "index_module_CommercePriceSlider_thumbRail4",
        CommercePriceSlider_thumb: "index_module_CommercePriceSlider_thumb6",
      }
    : null;
const eF = require.j == "wl4" ? 8 : null;
const eJ = (e, t) => Math.min(Math.max(e, 0), t);
const eO =
  require.j == "wl4"
    ? [
        "CommercePriceSlider_wrapper",
        "CommercePriceSlider_container",
        "CommercePriceSlider_labels",
        "CommercePriceSlider_label",
        "CommercePriceSlider_activeLabel",
        "CommercePriceSlider_trackWrapper",
        "CommercePriceSlider_track",
        "CommercePriceSlider_road",
        "CommercePriceSlider_bar",
        "CommercePriceSlider_thumbRail",
        "CommercePriceSlider_thumb",
      ]
    : null;
function useEQ({ options, value, onChange, invisible, className, classes }) {
  let m = R(eL, useB(), classes);
  let sRef = o.useRef(null);
  let dRef = o.useRef(false);
  let uRef = o.useRef(null);
  let [p, setP] = o.useState(false);
  let vRef = o.useRef(options);
  vRef.current = options;
  let _Ref = o.useRef(value);
  _Ref.current = value;
  let fRef = o.useRef(onChange);
  fRef.current = onChange;
  let h = Math.max(options.length - 1, 0);
  let SRef = o.useRef(h);
  SRef.current = h;
  let g = eJ(
    options.findIndex((e) => e.key === value),
    h,
  );
  let yRef = o.useRef(g);
  yRef.current = g;
  let w = h > 0 ? (g / h) * 100 : 0;
  let I = options[g]?.label;
  let b =
    typeof I === "string" || typeof I === "number" ? String(I) : undefined;
  let j = o.useCallback((e) => {
    let vRef_current = vRef.current;
    let SRef_current = SRef.current;
    let _Ref_current = _Ref.current;
    let o = vRef_current[eJ(e, SRef_current)];
    if (o && o.key !== _Ref_current) {
      fRef.current(o.key);
    }
  }, []);
  let k = o.useCallback((clientX) => {
    let sRef_current = sRef.current;
    if (!sRef_current) {
      return yRef.current;
    }
    let r = sRef_current.getBoundingClientRect();
    return (({
      clientX,
      trackLeft,
      trackWidth,
      totalSteps,
      thumbSize = 16,
    }) => {
      let i = Math.max(totalSteps, 0);
      let n = trackWidth - thumbSize;
      if (n <= 0) {
        return {
          index: 0,
          progress: 0,
        };
      }
      let c = Math.min(
        Math.max((clientX - trackLeft - thumbSize / 2) / n, 0),
        1,
      );
      let progress = Number((100 * c).toFixed(6));
      return {
        index: eJ(Math.round(c * i), i),
        progress,
      };
    })({
      clientX,
      trackLeft: r.left,
      trackWidth: r.width,
      totalSteps: SRef.current,
    }).index;
  }, []);
  let P = o.useCallback(
    (e) => {
      j(k(e));
    },
    [j, k],
  );
  let x = o.useCallback(() => {
    uRef.current = null;
    dRef.current = false;
    setP(false);
  }, []);
  let onPointerDown = o.useCallback(
    (e) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture?.(e.pointerId);
      uRef.current = e.pointerId;
      dRef.current = true;
      setP(true);
      P(e.clientX);
    },
    [P],
  );
  let onPointerMove = o.useCallback(
    (e) => {
      if (
        dRef.current &&
        (uRef.current === null || e.pointerId === uRef.current)
      ) {
        e.preventDefault();
        P(e.clientX);
      }
    },
    [P],
  );
  let D = o.useCallback(
    (e) => {
      if (uRef.current === null || e.pointerId === uRef.current) {
        if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
        x();
      }
    },
    [x],
  );
  o.useEffect(() => {
    if (!p) {
      return;
    }
    let e = (e) => {
      if (uRef.current === null || e.pointerId === uRef.current) {
        e.preventDefault();
        P(e.clientX);
      }
    };
    let t = (e) => {
      if (uRef.current === null || e.pointerId === uRef.current) {
        x();
      }
    };
    window.addEventListener("pointermove", e, {
      passive: false,
    });
    window.addEventListener("pointerup", t);
    window.addEventListener("pointercancel", t);
    return () => {
      window.removeEventListener("pointermove", e);
      window.removeEventListener("pointerup", t);
      window.removeEventListener("pointercancel", t);
    };
  }, [p, x, P]);
  let E = o.useCallback(
    (e) => {
      if (
        ![
          "ArrowLeft",
          "ArrowDown",
          "ArrowRight",
          "ArrowUp",
          "Home",
          "End",
        ].includes(e.key)
      ) {
        return;
      }
      e.preventDefault();
      if (e.key === "Home") {
        return void j(0);
      }
      if (e.key === "End") {
        return void j(SRef.current);
      }
      let t = e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 1;
      j(yRef.current + t);
    },
    [j],
  );
  let N = {
    width: `${w}%`,
  };
  let L = (e) => `calc(${eF}px + (${e} / 100) * (100% - 16px))`;
  let left = L(w);
  if (invisible) {
    return i.jsx("div", {
      className: a.A(m?.CommercePriceSlider_wrapper, className),
      "data-component": "CommercePriceSlider",
      "data-slot": "CommercePriceSlider_wrapper",
      "data-slots": eO.join(","),
      style: {
        visibility: "hidden",
      },
      children: i.jsxs("div", {
        className: m?.CommercePriceSlider_container,
        "data-slot": "CommercePriceSlider_container",
        children: [
          i.jsx("div", {
            className: m?.CommercePriceSlider_labels,
            "data-slot": "CommercePriceSlider_labels",
            children: i.jsx("span", {
              className: m?.CommercePriceSlider_label,
              "data-slot": "CommercePriceSlider_label",
              children: "\xa0",
            }),
          }),
          i.jsx("div", {
            className: m?.CommercePriceSlider_trackWrapper,
            "data-slot": "CommercePriceSlider_trackWrapper",
            children: i.jsx("div", {
              className: m?.CommercePriceSlider_track,
              "data-slot": "CommercePriceSlider_track",
            }),
          }),
        ],
      }),
    });
  }
  if (h <= 0) {
    return null;
  }
  return i.jsx("div", {
    className: a.A(m?.CommercePriceSlider_wrapper, className),
    "data-component": "CommercePriceSlider",
    "data-slot": "CommercePriceSlider_wrapper",
    "data-slots": eO.join(","),
    children: i.jsxs("div", {
      className: m?.CommercePriceSlider_container,
      "data-slot": "CommercePriceSlider_container",
      children: [
        i.jsx("div", {
          className: m?.CommercePriceSlider_labels,
          "data-slot": "CommercePriceSlider_labels",
          children: options.map((e, t) => {
            let o = t === g;
            let n = (t / h) * 100;
            let c = {
              ...(t === 0
                ? {
                    left: 0,
                    transform: "translateX(0)",
                  }
                : t === h
                  ? {
                      right: 0,
                      transform: "translateX(0)",
                    }
                  : {
                      left: L(n),
                      transform: "translateX(-50%)",
                    }),
            };
            return i.jsx(
              "span",
              {
                className: a.A(
                  m?.CommercePriceSlider_label,
                  o && m?.CommercePriceSlider_activeLabel,
                ),
                "data-slot": "CommercePriceSlider_label",
                style: c,
                onClick: (t) => {
                  t.stopPropagation();
                  onChange(e.key);
                },
                children: e.label,
              },
              e.key,
            );
          }),
        }),
        i.jsx("div", {
          className: m?.CommercePriceSlider_trackWrapper,
          "data-slot": "CommercePriceSlider_trackWrapper",
          children: i.jsx("div", {
            className: m?.CommercePriceSlider_track,
            "data-slot": "CommercePriceSlider_track",
            children: i.jsxs("div", {
              ref: sRef,
              className: a.A(
                m?.CommercePriceSlider_road,
                p && m?.CommercePriceSlider_roadActive,
              ),
              "data-slot": "CommercePriceSlider_road",
              role: "presentation",
              onPointerDown,
              onPointerMove,
              onPointerUp: D,
              onPointerCancel: D,
              children: [
                i.jsx("div", {
                  className: m?.CommercePriceSlider_bar,
                  "data-slot": "CommercePriceSlider_bar",
                  style: N,
                }),
                i.jsx("button", {
                  type: "button",
                  className: a.A(
                    m?.CommercePriceSlider_thumb,
                    p && m?.CommercePriceSlider_thumbActive,
                  ),
                  "data-slot": "CommercePriceSlider_thumb",
                  style: {
                    left,
                  },
                  role: "slider",
                  "aria-valuemin": 0,
                  "aria-valuemax": h,
                  "aria-valuenow": g,
                  "aria-valuetext": b,
                  onKeyDown: E,
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
const eW =
  require.j == "wl4"
    ? {
        CommerceProductText_root: "index_module_CommerceProductText_root8",
        CommerceProductText_headerTop:
          "index_module_CommerceProductText_headerTop8",
        CommerceProductText_title: "index_module_CommerceProductText_title6",
        CommerceProductText_tags: "index_module_CommerceProductText_tags3",
        CommerceProductText_priorityTag:
          "index_module_CommerceProductText_priorityTag6",
        CommerceProductText_tag: "index_module_CommerceProductText_tag8",
      }
    : null;
const eU =
  require.j == "wl4"
    ? [
        "CommerceProductText_root",
        "CommerceProductText_headerTop",
        "CommerceProductText_title",
        "CommerceProductText_tag",
        "CommerceProductText_tags",
        "CommerceProductText_priorityTag",
        "CommerceProductText_slogan",
      ]
    : null;
function eq({ title, tag, priorityTag, slogan, className, classes }) {
  let l = R(eW, useB(), classes);
  return i.jsxs("div", {
    className: a.A(l?.CommerceProductText_root, className),
    "data-component": "CommerceProductText",
    "data-slot": "CommerceProductText_root",
    "data-slots": eU.join(","),
    children: [
      i.jsxs("div", {
        className: l?.CommerceProductText_headerTop,
        "data-slot": "CommerceProductText_headerTop",
        children: [
          i.jsx("span", {
            className: l?.CommerceProductText_title,
            "data-slot": "CommerceProductText_title",
            children: title,
          }),
          priorityTag || tag
            ? i.jsxs("span", {
                className: l?.CommerceProductText_tags,
                "data-slot": "CommerceProductText_tags",
                children: [
                  priorityTag
                    ? i.jsx("span", {
                        className: l?.CommerceProductText_priorityTag,
                        "data-slot": "CommerceProductText_priorityTag",
                        children: priorityTag,
                      })
                    : null,
                  tag
                    ? i.jsx("span", {
                        className: l?.CommerceProductText_tag,
                        "data-slot": "CommerceProductText_tag",
                        children: tag,
                      })
                    : null,
                ],
              })
            : null,
        ],
      }),
      slogan
        ? i.jsx("div", {
            className: l?.CommerceProductText_slogan,
            "data-slot": "CommerceProductText_slogan",
            children: slogan,
          })
        : i.jsx("div", {
            className: l?.CommerceProductText_slogan,
            "data-slot": "CommerceProductText_slogan",
          }),
    ],
  });
}
const eG =
  require.j == "wl4"
    ? [
        "CommerceDrawer_drawer",
        "CommerceDrawer_closeButton",
        "CommerceDrawer_content",
        "CommerceDrawer_header",
        "CommerceDrawer_title",
        "CommerceDrawer_tips",
        "CommerceDrawer_navbar",
        "CommerceDrawer_loading",
        "CommerceDrawer_body",
      ]
    : null;
function eV({
  visible,
  onClose,
  afterOpen,
  closeButtonClassName,
  loading,
  children,
  height = "calc(100vh - 52px)",
  className,
  classes,
}) {
  let u = R(useB(), classes);
  return i.jsxs(c.A, {
    visible,
    onCancel: onClose,
    afterOpen,
    "data-component": "CommerceDrawer",
    "data-slot": "CommerceDrawer_drawer",
    "data-slots": eG.join(","),
    "data-state": visible ? "open" : "closed",
    placement: "bottom",
    height,
    closable: false,
    maskClosable: true,
    footer: null,
    className: a.A(u?.CommerceDrawer_drawer, className),
    headerStyle: {
      display: "none",
    },
    children: [
      i.jsx("button", {
        type: "button",
        "data-slot": "CommerceDrawer_closeButton",
        className: a.A(u?.CommerceDrawer_closeButton, closeButtonClassName),
        onClick: onClose,
        children: i.jsx(g.A, {
          size: 20,
        }),
      }),
      i.jsx("div", {
        className: u?.CommerceDrawer_content,
        "data-slot": "CommerceDrawer_content",
        "data-state": visible ? "open" : "closed",
        children: loading
          ? i.jsx("div", {
              className: u?.CommerceDrawer_loading,
              "data-slot": "CommerceDrawer_loading",
              children: i.jsx("h1", {
                children: "Hello world",
              }),
            })
          : i.jsx("div", {
              className: u?.CommerceDrawer_body,
              "data-slot": "CommerceDrawer_body",
              children,
            }),
      }),
    ],
  });
}
const eH =
  require.j == "wl4"
    ? {
        CommerceSubscribeButton_container:
          "index_module_CommerceSubscribeButton_container8",
        CommerceSubscribeButton_ctaButton:
          "index_module_CommerceSubscribeButton_ctaButton8",
      }
    : null;
const ez =
  require.j == "wl4"
    ? [
        "CommerceSubscribeButton_container",
        "CommerceSubscribeButton_ctaButton",
        "CommerceSubscribeButton_freeTrial",
      ]
    : null;
function e$({
  text,
  disabled,
  onClick,
  enableFreeTrial,
  freeTrialText,
  onFreeTrialChange,
  alignFreeTrialPlaceholder,
  buttonStyle,
  buttonClassName,
  className,
  classes,
}) {
  let C = R(eH, useB(), classes);
  let v =
    typeof enableFreeTrial === "boolean" ||
    freeTrialText != null ||
    onFreeTrialChange != null;
  return i.jsxs("div", {
    className: C?.CommerceSubscribeButton_container,
    "data-component": "CommerceSubscribeButton",
    "data-slots": ez.join(","),
    children: [
      i.jsx("button", {
        type: "button",
        className: a.A(
          C?.CommerceSubscribeButton_ctaButton,
          buttonClassName,
          className,
        ),
        style: buttonStyle,
        onClick,
        disabled,
        "data-slot": "CommerceSubscribeButton_ctaButton",
        "data-disabled": disabled ? "" : undefined,
        children: text,
      }),
      v || alignFreeTrialPlaceholder
        ? i.jsx("div", {
            className: C?.CommerceSubscribeButton_freeTrial,
            "data-slot": "CommerceSubscribeButton_freeTrial",
            children: v
              ? i.jsx(l.A, {
                  size: "small",
                  checked: !!enableFreeTrial,
                  onChange: onFreeTrialChange,
                  children: freeTrialText,
                })
              : null,
          })
        : null,
    ],
  });
}
const eK =
  require.j == "wl4"
    ? {
        CommerceTooltip_timeout: "index_module_CommerceTooltip_timeout3",
      }
    : null;
function useEY({ timeout, className, children, onVisibleChange, ...rest }) {
  let mRef = o.useRef();
  let sRef = o.useRef(onVisibleChange);
  let [popupVisible, setPopupVisible] = o.useState(false);
  o.useEffect(() => {
    sRef.current = onVisibleChange;
  }, [onVisibleChange]);
  o.useEffect(() => {
    if (timeout && rest.content) {
      setPopupVisible(true);
      if (mRef.current) {
        clearTimeout(mRef.current);
      }
      mRef.current = setTimeout(() => {
        setPopupVisible(false);
        mRef.current = undefined;
      }, timeout);
      return () => {
        if (mRef.current) {
          clearTimeout(mRef.current);
        }
      };
    }
  }, [timeout, rest.content]);
  if (timeout) {
    return i.jsx(n.A, {
      ...rest,
      className: a.A(eK.CommerceTooltip_timeout, className),
      popupVisible,
      showArrow: rest.showArrow ?? true,
      triggerProps: {
        popupAlign: {
          bottom: 4,
        },
        ...rest.triggerProps,
      },
      onVisibleChange: (e) => {
        if (!e && mRef.current) {
          clearTimeout(mRef.current);
          mRef.current = undefined;
        }
        setPopupVisible(e);
        sRef.current?.(e);
      },
      children,
    });
  }
  return i.jsx(n.A, {
    ...rest,
    className,
    onVisibleChange,
    children,
  });
}
const eZ =
  require.j == "wl4"
    ? {
        CommercePriceCard_card: "index_module_CommercePriceCard_card6",
        CommercePriceCard_banner: "index_module_CommercePriceCard_banner6",
        CommercePriceCard_content: "index_module_CommercePriceCard_content6",
        CommercePriceCard_priceInfo:
          "index_module_CommercePriceCard_priceInfo6",
        CommercePriceCard_body: "index_module_CommercePriceCard_body6",
        CommercePriceCard_quantityTotalRow:
          "index_module_CommercePriceCard_quantityTotalRow4",
        CommercePriceCard_quantity: "index_module_CommercePriceCard_quantity4",
        CommercePriceCard_priceDetail:
          "index_module_CommercePriceCard_priceDetail4",
        CommercePriceCard_priceDetailLabel:
          "index_module_CommercePriceCard_priceDetailLabel4",
        CommercePriceCard_priceDetailValue:
          "index_module_CommercePriceCard_priceDetailValue4",
        CommercePriceCard_summary: "index_module_CommercePriceCard_summary4",
        CommercePriceCard_summaryRow:
          "index_module_CommercePriceCard_summaryRow4",
        CommercePriceCard_summaryLabel:
          "index_module_CommercePriceCard_summaryLabel4",
        CommercePriceCard_summaryValue:
          "index_module_CommercePriceCard_summaryValue4",
        CommercePriceCard_secondaryCta:
          "index_module_CommercePriceCard_secondaryCta6",
        CommercePriceCard_highlightBenefits:
          "index_module_CommercePriceCard_highlightBenefits6",
        CommercePriceCard_highlightBenefitItem:
          "index_module_CommercePriceCard_highlightBenefitItem6",
        CommercePriceCard_highlightBenefitHeader:
          "index_module_CommercePriceCard_highlightBenefitHeader6",
        CommercePriceCard_highlightBenefitDescription:
          "index_module_CommercePriceCard_highlightBenefitDescription6",
        CommercePriceCard_highlightBenefitDescriptions:
          "index_module_CommercePriceCard_highlightBenefitDescriptions4",
        CommercePriceCard_highlightBenefitTitle:
          "index_module_CommercePriceCard_highlightBenefitTitle6",
        CommercePriceCard_highlightBenefitTag:
          "index_module_CommercePriceCard_highlightBenefitTag6",
        CommercePriceCard_highlightBenefitInfoIcon:
          "index_module_CommercePriceCard_highlightBenefitInfoIcon3",
        CommerceProductText_root: "index_module_CommerceProductText_root9",
        CommerceProductText_headerTop:
          "index_module_CommerceProductText_headerTop9",
        CommerceProductText_tag: "index_module_CommerceProductText_tag9",
        CommerceCreditRate_creditGrid:
          "index_module_CommerceCreditRate_creditGrid9",
        CommerceCreditRate_creditInfo:
          "index_module_CommerceCreditRate_creditInfo9",
        CommerceCreditRate_creditUnit:
          "index_module_CommerceCreditRate_creditUnit6",
        CommerceCreditText_unit: "index_module_CommerceCreditText_unit6",
        CommerceSubscribeButton_container:
          "index_module_CommerceSubscribeButton_container9",
        CommerceSubscribeButton_ctaButton:
          "index_module_CommerceSubscribeButton_ctaButton9",
        CommerceSubscribeButton_freeTrial:
          "index_module_CommerceSubscribeButton_freeTrial6",
        CommerceBenefitList_benefitsSection:
          "index_module_CommerceBenefitList_benefitsSection9",
        CommerceBenefitList_group: "index_module_CommerceBenefitList_group9",
        CommerceBenefitList_benefitsList:
          "index_module_CommerceBenefitList_benefitsList9",
        CommerceBenefitList_benefitItem:
          "index_module_CommerceBenefitList_benefitItem9",
        CommerceBenefitList_benefitContent:
          "index_module_CommerceBenefitList_benefitContent7",
        CommerceBenefitList_benefitText:
          "index_module_CommerceBenefitList_benefitText9",
        CommerceBenefitList_benefitTag:
          "index_module_CommerceBenefitList_benefitTag7",
      }
    : null;
const eX =
  require.j == "wl4"
    ? [
        "CommercePriceCard_card",
        "CommercePriceCard_highlighted",
        "CommercePriceCard_banner",
        "CommercePriceCard_content",
        "CommercePriceCard_body",
        "CommercePriceCard_description",
        "CommercePriceCard_priceInfo",
        "CommercePriceCard_quantityTotalRow",
        "CommercePriceCard_quantity",
        "CommercePriceCard_unitPrice",
        "CommercePriceCard_totalPrice",
        "CommercePriceCard_priceDetail",
        "CommercePriceCard_priceDetailLabel",
        "CommercePriceCard_priceDetailValue",
        "CommercePriceCard_summary",
        "CommercePriceCard_summaryRow",
        "CommercePriceCard_summaryLabel",
        "CommercePriceCard_summaryValue",
        "CommercePriceCard_secondaryCta",
        "CommercePriceCard_highlightBenefits",
        "CommercePriceCard_highlightBenefitsTitle",
        "CommercePriceCard_highlightBenefitItem",
        "CommercePriceCard_highlightBenefitHeader",
        "CommercePriceCard_highlightBenefitTitle",
        "CommercePriceCard_highlightBenefitTag",
        "CommercePriceCard_highlightBenefitDescriptions",
        "CommercePriceCard_highlightBenefitDescription",
        "CommercePriceCard_highlightBenefitInfoIcon",
      ]
    : null;
function e0({ slot, label, price, loading, classes }) {
  return i.jsxs("div", {
    className: a.A(classes.CommercePriceCard_priceDetail, classes[slot]),
    "data-slot": slot,
    "data-loading": loading ? "" : undefined,
    "aria-busy": !!loading || undefined,
    children: [
      label
        ? i.jsx("span", {
            className: classes.CommercePriceCard_priceDetailLabel,
            "data-slot": "CommercePriceCard_priceDetailLabel",
            children: label,
          })
        : null,
      i.jsx("span", {
        className: classes.CommercePriceCard_priceDetailValue,
        "data-slot": "CommercePriceCard_priceDetailValue",
        children: i.jsx(useEN, {
          price,
          layout: "horizontal",
          classes,
        }),
      }),
    ],
  });
}
function useE4({
  variant,
  model,
  texts,
  alignFreeTrialPlaceholder,
  showBenefitGroupDivider = false,
  showPriceSlider = true,
  bodyAlignBaseMargin = 28,
  alignOffsets,
  onAlignmentChangeRequest,
  className,
  classes,
}) {
  let v = useB();
  let _ = o.useMemo(
    () =>
      Object.fromEntries(
        Array.from(
          new Set([
            ...Object.keys(eZ),
            ...Object.keys(v),
            ...Object.keys(classes ?? {}),
          ]),
        ).map((e) => [e, a.A(eZ[e], v?.[e], classes?.[e])]),
      ),
    [v, classes],
  );
  let f = alignOffsets?.price ?? 0;
  let S = alignOffsets?.body ?? 0;
  let g = alignOffsets?.cta ?? 0;
  let groupSeparator = alignOffsets?.benefitGroupSeparator ?? 0;
  let w = model.variants ?? [];
  let I = o.useMemo(() => variant === "plan" && w.length > 1, [variant, w]);
  let [b, setB] = o.useState();
  let kRef = o.useRef(null);
  o.useEffect(
    () => () => {
      if (kRef.current !== null) {
        window.cancelAnimationFrame(kRef.current);
      }
    },
    [],
  );
  let P = () => {
    if (onAlignmentChangeRequest) {
      if (kRef.current !== null) {
        window.cancelAnimationFrame(kRef.current);
      }
      kRef.current = window.requestAnimationFrame(() => {
        kRef.current = null;
        onAlignmentChangeRequest();
      });
    }
  };
  let x = o.useMemo(() => {
    if (I) {
      return (
        model.activeVariantKey ??
        b ??
        model.defaultActiveVariantKey ??
        w[0]?.key
      );
    }
  }, [I, model.activeVariantKey, model.defaultActiveVariantKey, b, w]);
  let M = o.useMemo(() => {
    var e;
    if (I) {
      if ((e = x == null ? w[0] : (w.find((e) => e.key === x) ?? w[0]))) {
        return {
          ...model,
          productId: e.productId ?? model.productId,
          level: e.level ?? model.level,
          title: e.title ?? model.title,
          benefitTitle: e.benefitTitle ?? model.benefitTitle,
          slogan: e.slogan ?? model.slogan,
          tag: e.tag ?? model.tag,
          priorityTag: e.priorityTag ?? model.priorityTag,
          banner: e.banner ?? model.banner,
          tooltip: e.tooltip ?? model.tooltip,
          price: e.price ?? model.price,
          priceLayout: e.priceLayout ?? model.priceLayout,
          priceOriginalPlacement:
            e.priceOriginalPlacement ?? model.priceOriginalPlacement,
          priceAnimation: e.priceAnimation ?? model.priceAnimation,
          priceGrouping: e.priceGrouping ?? model.priceGrouping,
          description: e.description ?? model.description,
          alignKey: e.alignKey ?? model.alignKey,
          quantity: e.quantity ?? model.quantity,
          unitPrice: e.unitPrice ?? model.unitPrice,
          totalPrice: e.totalPrice ?? model.totalPrice,
          summaryRows: e.summaryRows ?? model.summaryRows,
          calculating: e.calculating ?? model.calculating,
          metrics: e.metrics ?? model.metrics,
          benefits: e.benefits ?? model.benefits,
          benefitGroups: e.benefitGroups ?? model.benefitGroups,
          highlightBenefitTitle:
            e.highlightBenefitTitle ?? model.highlightBenefitTitle,
          highlightBenefits: e.highlightBenefits ?? model.highlightBenefits,
          cta: e.cta ?? model.cta,
          secondaryCta: e.secondaryCta ?? model.secondaryCta,
          highlighted: e.highlighted ?? model.highlighted,
          cardStyle: e.cardStyle ?? model.cardStyle,
          contentStyle: e.contentStyle ?? model.contentStyle,
          bannerStyle: e.bannerStyle ?? model.bannerStyle,
        };
      }
      return model;
    }
    return model;
  }, [x, I, model, w]);
  let A = !!(M.quantity && M.totalPrice);
  let D = M.quantity
    ? i.jsx("div", {
        className: _.CommercePriceCard_quantity,
        "data-slot": "CommercePriceCard_quantity",
        children: i.jsx(useEe, {
          ...M.quantity,
          onChange: (e, t) => {
            M.quantity?.onChange?.(e, t);
            P();
          },
          classes: _,
        }),
      })
    : null;
  let R = M.totalPrice
    ? e0({
        slot: "CommercePriceCard_totalPrice",
        label: M.totalPrice.label,
        price: M.totalPrice.price,
        loading: M.totalPrice.loading || M.calculating,
        classes: _,
      })
    : null;
  let E = i.jsxs("div", {
    className: a.A(
      _.CommercePriceCard_card,
      M.highlighted && _.CommercePriceCard_highlighted,
      className,
    ),
    "data-component": "CommercePriceCard",
    "data-slot": "CommercePriceCard_card",
    "data-slots": eX.join(","),
    "data-variant": variant,
    "data-has-banner": M.banner ? "" : undefined,
    "data-highlighted": M.highlighted ? "" : undefined,
    style: M.cardStyle,
    children: [
      M.banner
        ? i.jsx("div", {
            className: _.CommercePriceCard_banner,
            "data-slot": "CommercePriceCard_banner",
            style: M.bannerStyle,
            children: M.banner,
          })
        : null,
      i.jsxs("div", {
        className: _.CommercePriceCard_content,
        "data-slot": "CommercePriceCard_content",
        style: M.contentStyle,
        children: [
          i.jsx(eq, {
            title: M.title,
            tag: M.tag,
            priorityTag: M.priorityTag,
            slogan: M.slogan,
            classes: _,
          }),
          i.jsxs("div", {
            className: _.CommercePriceCard_priceInfo,
            "data-slot": "CommercePriceCard_priceInfo",
            style:
              f > 0
                ? {
                    marginTop: f,
                  }
                : undefined,
            children: [
              i.jsx(useEN, {
                price: M.price,
                layout: M.priceLayout,
                originalPlacement: M.priceOriginalPlacement,
                animation: M.priceAnimation,
                grouping: M.priceGrouping,
                classes: _,
              }),
              M.description
                ? i.jsx("p", {
                    className: _.CommercePriceCard_description,
                    "data-slot": "CommercePriceCard_description",
                    children: M.description,
                  })
                : null,
            ],
          }),
          i.jsxs("div", {
            className: _.CommercePriceCard_body,
            "data-slot": "CommercePriceCard_body",
            children: [
              i.jsx("div", {
                "data-slot": "CommercePriceCard_bodyAlignContainer",
                style: {
                  marginTop: bodyAlignBaseMargin + S,
                },
                children: showPriceSlider
                  ? i.jsx(useEQ, {
                      options: w,
                      value: x ?? "",
                      onChange: (e) => {
                        if (model.activeVariantKey === undefined) {
                          setB(e);
                        }
                        model.onVariantChange?.(e);
                        P();
                      },
                      invisible: !I || !x,
                      classes: _,
                    })
                  : null,
              }),
              A
                ? i.jsxs("div", {
                    className: _.CommercePriceCard_quantityTotalRow,
                    "data-slot": "CommercePriceCard_quantityTotalRow",
                    children: [D, R],
                  })
                : D,
              M.unitPrice
                ? e0({
                    slot: "CommercePriceCard_unitPrice",
                    label: M.unitPrice.label,
                    price: M.unitPrice.price,
                    loading: M.calculating,
                    classes: _,
                  })
                : null,
              A ? null : R,
              M.summaryRows?.length
                ? i.jsx("div", {
                    className: _.CommercePriceCard_summary,
                    "data-slot": "CommercePriceCard_summary",
                    children: M.summaryRows.map((e) =>
                      i.jsxs(
                        "div",
                        {
                          className: _.CommercePriceCard_summaryRow,
                          "data-slot": "CommercePriceCard_summaryRow",
                          "data-loading": e.loading ? "" : undefined,
                          "aria-busy": !!e.loading || undefined,
                          children: [
                            i.jsx("span", {
                              className: _.CommercePriceCard_summaryLabel,
                              "data-slot": "CommercePriceCard_summaryLabel",
                              children: e.label,
                            }),
                            i.jsx("span", {
                              className: _.CommercePriceCard_summaryValue,
                              "data-slot": "CommercePriceCard_summaryValue",
                              children: e.value,
                            }),
                          ],
                        },
                        e.key,
                      ),
                    ),
                  })
                : null,
              i.jsx(ed, {
                metrics: M.metrics,
                badge: M.creditBadge,
                texts: texts?.creditRate,
                classes: _,
              }),
              i.jsx("div", {
                "data-slot": "CommercePriceCard_ctaAlignContainer",
                style:
                  g > 0
                    ? {
                        marginTop: g,
                      }
                    : undefined,
                children: i.jsx(e$, {
                  text: M.cta.text,
                  disabled: M.cta.disabled,
                  onClick: M.cta.onClick,
                  enableFreeTrial: M.cta.enableFreeTrial,
                  freeTrialText: M.cta.freeTrialText,
                  onFreeTrialChange: M.cta.onFreeTrialChange,
                  alignFreeTrialPlaceholder,
                  buttonStyle: M.cta.buttonStyle,
                  buttonClassName: M.cta.buttonClassName,
                  classes: _,
                }),
              }),
              M.secondaryCta?.mode === "text"
                ? i.jsx("div", {
                    className: _.CommercePriceCard_secondaryCta,
                    "data-slot": "CommercePriceCard_secondaryCta",
                    "data-mode": "text",
                    children: M.secondaryCta.text,
                  })
                : M.secondaryCta
                  ? i.jsx("button", {
                      type: "button",
                      className: _.CommercePriceCard_secondaryCta,
                      "data-slot": "CommercePriceCard_secondaryCta",
                      "data-mode": M.secondaryCta.mode ?? "button",
                      onClick: M.secondaryCta.onClick,
                      children: M.secondaryCta.text,
                    })
                  : null,
              i.jsx(ei, {
                title: M.benefitTitle ?? texts?.benefitTitle,
                header:
                  M.highlightBenefitTitle || M.highlightBenefits?.length
                    ? i.jsxs("div", {
                        className: _.CommercePriceCard_highlightBenefits,
                        "data-slot": "CommercePriceCard_highlightBenefits",
                        children: [
                          M.highlightBenefitTitle
                            ? i.jsx("div", {
                                className:
                                  _.CommercePriceCard_highlightBenefitsTitle,
                                "data-slot":
                                  "CommercePriceCard_highlightBenefitsTitle",
                                children: M.highlightBenefitTitle,
                              })
                            : null,
                          M.highlightBenefits?.map((e) => {
                            let color;
                            color =
                              typeof e.titleStyle?.color === "string"
                                ? e.titleStyle.color
                                : undefined;
                            return i.jsxs(
                              "div",
                              {
                                className:
                                  _.CommercePriceCard_highlightBenefitItem,
                                "data-slot":
                                  "CommercePriceCard_highlightBenefitItem",
                                style: e.itemStyle,
                                children: [
                                  i.jsxs("div", {
                                    className:
                                      _.CommercePriceCard_highlightBenefitHeader,
                                    "data-slot":
                                      "CommercePriceCard_highlightBenefitHeader",
                                    children: [
                                      e.title
                                        ? i.jsxs("span", {
                                            className:
                                              _.CommercePriceCard_highlightBenefitTitle,
                                            "data-slot":
                                              "CommercePriceCard_highlightBenefitTitle",
                                            style: e.titleStyle,
                                            children: [
                                              e.title,
                                              e.tooltip
                                                ? i.jsx(n.A, {
                                                    content: e.tooltip,
                                                    position: "top",
                                                    children: i.jsx(h.A, {
                                                      size: 14,
                                                      color,
                                                      className:
                                                        _.CommercePriceCard_highlightBenefitInfoIcon,
                                                      "data-slot":
                                                        "CommercePriceCard_highlightBenefitInfoIcon",
                                                    }),
                                                  })
                                                : null,
                                            ],
                                          })
                                        : null,
                                      e.tag
                                        ? i.jsx("span", {
                                            className:
                                              _.CommercePriceCard_highlightBenefitTag,
                                            "data-slot":
                                              "CommercePriceCard_highlightBenefitTag",
                                            style: e.tagStyle,
                                            children: e.tag,
                                          })
                                        : null,
                                    ],
                                  }),
                                  e.description || e.descriptionSecondary
                                    ? i.jsxs("div", {
                                        className:
                                          _.CommercePriceCard_highlightBenefitDescriptions,
                                        "data-slot":
                                          "CommercePriceCard_highlightBenefitDescriptions",
                                        children: [
                                          e.description
                                            ? i.jsx("div", {
                                                className:
                                                  _.CommercePriceCard_highlightBenefitDescription,
                                                "data-slot":
                                                  "CommercePriceCard_highlightBenefitDescription",
                                                style: e.descriptionStyle,
                                                children: i.jsx("span", {
                                                  children: e.description,
                                                }),
                                              })
                                            : null,
                                          e.descriptionSecondary
                                            ? i.jsx("div", {
                                                className:
                                                  _.CommercePriceCard_highlightBenefitDescription,
                                                "data-slot":
                                                  "CommercePriceCard_highlightBenefitDescription",
                                                style: e.descriptionStyle,
                                                children: i.jsx("span", {
                                                  children:
                                                    e.descriptionSecondary,
                                                }),
                                              })
                                            : null,
                                        ],
                                      })
                                    : null,
                                ],
                              },
                              e.key,
                            );
                          }),
                        ],
                      })
                    : null,
                benefits: M.benefits,
                benefitGroups: M.benefitGroups,
                showGroupDivider: showBenefitGroupDivider,
                alignOffsets: {
                  groupSeparator,
                },
                classes: _,
              }),
            ],
          }),
        ],
      }),
    ],
  });
  if (M.tooltip?.content) {
    return i.jsx(useEY, {
      ...M.tooltip,
      children: E,
    });
  }
  return E;
}
const e1 =
  require.j == "wl4"
    ? typeof window === "undefined"
      ? o.useEffect
      : o.useLayoutEffect
    : null;
function e5({ content, className }) {
  let { ref, isOverflowing } = ((e) => {
    let tRef = o.useRef(null);
    let [isOverflowing_1, setIsOverflowing] = o.useState(false);
    e1(() => {
      let tRef_current = tRef.current;
      if (!tRef_current) {
        return;
      }
      let r = () => {
        setIsOverflowing(
          tRef_current.scrollHeight > tRef_current.clientHeight + 1 ||
            tRef_current.scrollWidth > tRef_current.clientWidth + 1,
        );
      };
      r();
      if (typeof ResizeObserver === "undefined") {
        window.addEventListener("resize", r);
        return () => window.removeEventListener("resize", r);
      }
      let o = new ResizeObserver(r);
      o.observe(tRef_current);
      return () => o.disconnect();
    }, [e]);
    return {
      ref: tRef,
      isOverflowing: isOverflowing_1,
    };
  })(content);
  return i.jsx(n.A, {
    content: isOverflowing ? content : undefined,
    position: "top",
    children: i.jsx("span", {
      ref,
      className,
      children: content,
    }),
  });
}
function e6(e) {
  let t;
  let r;
  t = e.description;
  r = e.descriptionSecondary;
  let a =
    t && r
      ? i.jsxs(i.Fragment, {
          children: [t, " ", r],
        })
      : t || r;
  if (e.title || a) {
    return {
      ...e,
      title: e.title
        ? i.jsx(e5, {
            content: e.title,
            className: z.CommercePriceCard_highlightBenefitTitleText,
          })
        : e.title,
      description: a
        ? i.jsx(e5, {
            content: a,
            className: z.CommercePriceCard_highlightBenefitDescriptionText,
          })
        : a,
      descriptionSecondary: undefined,
    };
  }
  return e;
}
function e3(e) {
  if (e.highlightBenefits?.length) {
    return {
      ...e,
      highlightBenefits: e.highlightBenefits.map(e6),
    };
  }
  return e;
}
const e2 = {
  ...et,
  ...z,
};
const e9 = {};
for (let e of [...eE]) {
  if (z[e]) {
    e9[e] = z[e];
  }
}
const e7 =
  require.j == "wl4"
    ? typeof window === "undefined"
      ? o.useEffect
      : o.useLayoutEffect
    : null;
function e8(e) {
  let t = {};
  e.forEach((e) => {
    t[e] = {};
  });
  return t;
}
const te =
  require.j == "wl4"
    ? {
        CommercePriceCardList_container:
          "index_module_CommercePriceCardList_container6",
        CommercePriceCardList_compact:
          "index_module_CommercePriceCardList_compact5",
      }
    : null;
const tt =
  require.j == "wl4"
    ? [
        "CommercePriceCardList_container",
        "CommercePriceCardList_compact",
        "CommercePriceCardList_rowHasBanner",
      ]
    : null;
const tr =
  require.j == "wl4"
    ? [
        {
          name: "price",
          selector: '[data-slot="CommercePriceCard_priceInfo"]',
        },
        {
          name: "body",
          selector: '[data-slot="CommerceCreditRate_creditGrid"]',
        },
        {
          name: "cta",
          selector: '[data-slot="CommercePriceCard_ctaAlignContainer"]',
        },
      ]
    : null;
const ta =
  require.j == "wl4"
    ? {
        name: "benefitGroupSeparator",
        selector: '[data-align-anchor="CommerceBenefitList_groupSeparator"]',
      }
    : null;
function getId(e) {
  return e.alignKey || e.level || e.id;
}
function useTi({
  plans,
  layout = "horizontal",
  texts,
  autoalign = false,
  showBenefitGroupDivider = false,
  showPriceSlider,
  bodyAlignBaseMargin,
  className,
  classes,
}) {
  let u = useB();
  let p = o.useMemo(
    () =>
      Object.fromEntries(
        Array.from(
          new Set([
            ...Object.keys(te),
            ...Object.keys(u),
            ...Object.keys(classes ?? {}),
          ]),
        ).map((e) => [e, a.A(te[e], u?.[e], classes?.[e])]),
      ),
    [u, classes],
  );
  let alignFreeTrialPlaceholder = o.useMemo(
    () =>
      plans.some(
        (e) =>
          typeof e.cta?.enableFreeTrial === "boolean" ||
          e.cta?.freeTrialText != null ||
          e.cta?.onFreeTrialChange != null,
      ),
    [plans],
  );
  let plans_length = plans.length;
  let enabled = !!autoalign;
  let f =
    typeof autoalign !== "object" ||
    !autoalign.exclude?.includes("benefitGroupSeperator");
  let h =
    enabled && f && plans.every((e) => (e.benefitGroups?.length ?? 0) > 1);
  let S = plans.slice(0, 2).some((e) => !!e.banner);
  let { containerRef, offsets, updateAlignment } = (({
    items,
    getId,
    anchors,
    cardSelector,
    enabled,
  }) => {
    let nRef = o.useRef(null);
    let cRef = o.useRef();
    let lRef = o.useRef(getId);
    let mRef = o.useRef(anchors);
    let sRef = o.useRef({});
    let [d, setD] = o.useState({});
    lRef.current = getId;
    mRef.current = anchors;
    let p = o.useMemo(
      () => items.map((e) => lRef.current(e)).join("\x01"),
      [items],
    );
    let C = o.useMemo(
      () => anchors.map((e) => `${e.name}\0${e.selector}`).join("\x01"),
      [anchors],
    );
    let v = o.useMemo(() => anchors.map((e) => e.name), [C]);
    let _ = o.useCallback(() => {
      let t;
      let nRef_current = nRef.current;
      if (!nRef_current) {
        return;
      }
      let top = nRef_current.getBoundingClientRect().top;
      let i = Array.from(nRef_current.querySelectorAll(cardSelector));
      let sRef_current = sRef.current;
      let mRef_current = mRef.current;
      let p = items
        .map((e, t) => {
          let r = lRef.current(e);
          let a = i[t];
          if (!a) {
            return null;
          }
          let n = mRef_current.map((e) => a.querySelector(e.selector));
          if (n.every((e) => !e)) {
            return null;
          }
          let m = Number.parseFloat(window.getComputedStyle(a).marginTop) || 0;
          let cardTop = a.getBoundingClientRect().top - top - m;
          let u = n.map((e) => {
            if (e) {
              return e.getBoundingClientRect().top - top;
            }
            return null;
          });
          let naturalTops = mRef_current.map((e, t) => {
            if (u[t] == null) {
              return null;
            }
            let a = 0;
            for (let e = 0; e <= t; e++) {
              a += sRef_current[mRef_current[e].name]?.[r] || 0;
            }
            return u[t] - a;
          });
          return {
            id: r,
            cardTop,
            naturalTops,
          };
        })
        .filter((e) => e != null);
      let C =
        p.length > 1
          ? ((t = []),
            p.forEach((e) => {
              let r = t.find((t) => Math.abs(t.top - e.cardTop) <= 2);
              if (r) {
                r.items.push(e);
              } else {
                t.push({
                  top: e.cardTop,
                  items: [e],
                });
              }
            }),
            t.reduce((acc, item) => {
              let r = {};
              v.forEach((e, a) => {
                let o = item.items.filter((e) => e.naturalTops[a] != null);
                let i = {};
                item.items.forEach((e) => {
                  i[e.id] = 0;
                });
                if (o.length === 0) {
                  r[e] = i;
                  return;
                }
                let n = Math.max(
                  ...o.map((e) => {
                    let t = 0;
                    for (let o = 0; o < a; o++) {
                      t += r[v[o]]?.[e.id] || 0;
                    }
                    return e.naturalTops[a] + t;
                  }),
                );
                o.forEach((e) => {
                  let t = 0;
                  for (let o = 0; o < a; o++) {
                    t += r[v[o]]?.[e.id] || 0;
                  }
                  let o = n - (e.naturalTops[a] + t);
                  i[e.id] = o > 0.5 ? o : 0;
                });
                r[e] = i;
              });
              v.forEach((t) => {
                acc[t] = {
                  ...acc[t],
                  ...r[t],
                };
              });
              return acc;
            }, e8(v)))
          : e8(v);
      setD((e) => {
        let t = false;
        let r = {
          ...e,
        };
        v.forEach((a) => {
          var o;
          var i;
          let n;
          let c;
          o = C[a] || {};
          i = e[a] || {};
          n = Object.keys(o);
          c = Object.keys(i);
          if (
            !(
              n.length === c.length &&
              n.every((e) => Math.abs((o[e] || 0) - (i[e] || 0)) <= 0.5)
            )
          ) {
            r[a] = C[a];
            t = true;
          }
        });
        if (t) {
          sRef.current = r;
          return r;
        }
        return e;
      });
    }, [items, cardSelector, v]);
    let updateAlignment_1 = o.useCallback(() => {
      if (typeof window !== "undefined") {
        if (cRef.current != null) {
          window.cancelAnimationFrame(cRef.current);
        }
        cRef.current = window.requestAnimationFrame(() => {
          cRef.current = undefined;
          _();
        });
      }
    }, [_]);
    o.useEffect(() => {
      sRef.current = d;
    }, [d]);
    e7(() => {
      if (!enabled) {
        let e = e8(v);
        sRef.current = e;
        setD((t) => {
          if (
            Object.keys(t).some(
              (e) => !v.includes(e) || Object.keys(t[e] || {}).length > 0,
            )
          ) {
            return e;
          }
          return t;
        });
        return;
      }
      if (cRef.current != null) {
        window.cancelAnimationFrame(cRef.current);
        cRef.current = undefined;
      }
      _();
      let nRef_current = nRef.current;
      if (!nRef_current || typeof ResizeObserver === "undefined") {
        window.addEventListener("resize", updateAlignment_1);
        return () => {
          window.removeEventListener("resize", updateAlignment_1);
          if (cRef.current != null) {
            window.cancelAnimationFrame(cRef.current);
          }
        };
      }
      let t = new ResizeObserver(updateAlignment_1);
      t.observe(nRef_current);
      Array.from(nRef_current.querySelectorAll(cardSelector)).forEach((e) =>
        t.observe(e),
      );
      return () => {
        t.disconnect();
        if (cRef.current != null) {
          window.cancelAnimationFrame(cRef.current);
        }
      };
    }, [enabled, p, v, C, cardSelector, _, updateAlignment_1]);
    return {
      containerRef: nRef,
      offsets: d,
      updateAlignment: updateAlignment_1,
    };
  })({
    items: plans,
    getId,
    anchors: o.useMemo(() => {
      if (h) {
        return [...tr, ta];
      }
      return tr;
    }, [h]),
    cardSelector: '[data-component="CommercePriceCard"]',
    enabled,
  });
  let I = offsets.price ?? {};
  let b = offsets.body ?? {};
  let j = offsets.cta ?? {};
  let k = offsets.benefitGroupSeparator ?? {};
  return i.jsx("div", {
    ref: containerRef,
    className: a.A(
      p.CommercePriceCardList_container,
      layout === "horizontal" &&
        plans_length > 0 &&
        plans_length < 4 &&
        p.CommercePriceCardList_compact,
      className,
    ),
    "data-component": "CommercePriceCardList",
    "data-slot": "CommercePriceCardList_container",
    "data-slots": tt.join(","),
    "data-layout": layout,
    "data-first-row-banner-state": S ? "present" : "none",
    children: plans.map((model, a) => {
      let o = model.level?.toLowerCase() === "free";
      let n = getId(model);
      let s = 2 * Math.floor(a / 2);
      let d = plans.slice(s, s + 2).some((e) => !!e.banner);
      return i.jsx(
        useE4,
        {
          variant: o ? "free" : "plan",
          model,
          texts,
          className: d ? p.CommercePriceCardList_rowHasBanner : undefined,
          alignFreeTrialPlaceholder,
          showBenefitGroupDivider,
          showPriceSlider,
          bodyAlignBaseMargin,
          alignOffsets: enabled
            ? {
                price: I[n] ?? 0,
                body: b[n] ?? 0,
                cta: j[n] ?? 0,
                benefitGroupSeparator: k[n] ?? 0,
              }
            : undefined,
          onAlignmentChangeRequest: enabled ? updateAlignment : undefined,
          classes: p,
        },
        model.level,
      );
    }),
  });
}
const tn = {
  ...e2,
  CommercePriceCardList_container:
    "index_module_CommercePriceCardList_container5",
  CommercePriceCard: "index_module_CommercePriceCard",
  CommercePriceCardList_compact: "index_module_CommercePriceCardList_compact6",
  CommercePriceCardList_rowHasBanner:
    "index_module_CommercePriceCardList_rowHasBanner",
};
export function xA({ classes, className, ...rest }) {
  let n = q(tn, classes);
  let plans = o.useMemo(
    () =>
      rest.plans.map((e) => {
        let t;
        t = e3(e);
        if (t.variants?.length) {
          return {
            ...t,
            variants: t.variants.map((e) => e3(e)),
          };
        }
        return t;
      }),
    [rest.plans],
  );
  return i.jsx(useE, {
    classes: n,
    children: i.jsx(useTi, {
      ...rest,
      plans,
      className: a.A(G, className),
    }),
  });
}
const tl =
  require.j == "wl4"
    ? {
        CommerceFeatureMatrix_root: "index_module_CommerceFeatureMatrix_root3",
        CommerceFeatureMatrix_tableWrapper:
          "index_module_CommerceFeatureMatrix_tableWrapper6",
        CommerceFeatureMatrix_table:
          "index_module_CommerceFeatureMatrix_table5",
        CommerceFeatureMatrix_headerPlanCell:
          "index_module_CommerceFeatureMatrix_headerPlanCell6",
        CommerceFeatureMatrix_headerCornerCell:
          "index_module_CommerceFeatureMatrix_headerCornerCell6",
        CommerceFeatureMatrix_featureCell:
          "index_module_CommerceFeatureMatrix_featureCell5",
        CommerceFeatureMatrix_valueCell:
          "index_module_CommerceFeatureMatrix_valueCell6",
        CommerceFeatureMatrix_groupCell:
          "index_module_CommerceFeatureMatrix_groupCell6",
        CommerceFeatureMatrix_planHead:
          "index_module_CommerceFeatureMatrix_planHead5",
        CommerceFeatureMatrix_planNameRow:
          "index_module_CommerceFeatureMatrix_planNameRow5",
        CommerceFeatureMatrix_planTag:
          "index_module_CommerceFeatureMatrix_planTag5",
        CommerceFeatureMatrix_planPriceRow:
          "index_module_CommerceFeatureMatrix_planPriceRow5",
        CommerceFeatureMatrix_planPriceWrap:
          "index_module_CommerceFeatureMatrix_planPriceWrap5",
        CommerceFeatureMatrix_planCta:
          "index_module_CommerceFeatureMatrix_planCta4",
        CommerceFeatureMatrix_featureTooltipIcon:
          "index_module_CommerceFeatureMatrix_featureTooltipIcon5",
      }
    : null;
const tm =
  require.j == "wl4"
    ? [
        "CommerceFeatureMatrix_root",
        "CommerceFeatureMatrix_tableWrapper",
        "CommerceFeatureMatrix_table",
        "CommerceFeatureMatrix_header",
        "CommerceFeatureMatrix_headerRow",
        "CommerceFeatureMatrix_headerCornerCell",
        "CommerceFeatureMatrix_headerPlanCell",
        "CommerceFeatureMatrix_planHead",
        "CommerceFeatureMatrix_planNameRow",
        "CommerceFeatureMatrix_planName",
        "CommerceFeatureMatrix_planTag",
        "CommerceFeatureMatrix_planSubtitle",
        "CommerceFeatureMatrix_planPriceRow",
        "CommerceFeatureMatrix_planPriceWrap",
        "CommerceFeatureMatrix_planOriginalPrice",
        "CommerceFeatureMatrix_planPrice",
        "CommerceFeatureMatrix_planPriceDetail",
        "CommerceFeatureMatrix_planCta",
        "CommerceFeatureMatrix_groupRow",
        "CommerceFeatureMatrix_groupCell",
        "CommerceFeatureMatrix_groupHeaderCell",
        "CommerceFeatureMatrix_row",
        "CommerceFeatureMatrix_featureCell",
        "CommerceFeatureMatrix_featureTitle",
        "CommerceFeatureMatrix_featureTooltipIcon",
        "CommerceFeatureMatrix_valueCell",
        "CommerceFeatureMatrix_valueText",
        "CommerceFeatureMatrix_valueHighlight",
        "CommerceFeatureMatrix_yesIcon",
        "CommerceFeatureMatrix_noIcon",
      ]
    : null;
function ts({ cell, classes }) {
  let r = R(tl, useB(), classes);
  if (cell.type === "enabled") {
    return i.jsx(m.A, {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      className: r?.CommerceFeatureMatrix_yesIcon,
      "data-slot": "CommerceFeatureMatrix_yesIcon",
      "aria-hidden": "true",
      focusable: "false",
      children: i.jsx("path", {
        d: "M13.3536 4.35355L6.5 11.2071L2.64645 7.35355",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
      }),
    });
  }
  if (cell.type === "disabled") {
    return "-";
  }
  return i.jsx("span", {
    className: a.A(
      r?.CommerceFeatureMatrix_valueText,
      cell.highlight && r?.CommerceFeatureMatrix_valueHighlight,
    ),
    "data-slot": "CommerceFeatureMatrix_valueText",
    children: cell.text,
  });
}
function td({ plan, classes }) {
  let r = R(tl, useB(), classes);
  let a = plan.ctaText
    ? i.jsx("button", {
        type: "button",
        className: r?.CommerceFeatureMatrix_planCta,
        "data-slot": "CommerceFeatureMatrix_planCta",
        "data-loading": plan.ctaLoading ? "" : undefined,
        disabled: plan.ctaDisabled || plan.ctaLoading,
        "data-disabled": plan.ctaDisabled || plan.ctaLoading ? "" : undefined,
        "aria-busy": !!plan.ctaLoading || undefined,
        onClick: plan.onCtaClick,
        children: plan.ctaText,
      })
    : null;
  return i.jsx("th", {
    scope: "col",
    className: r?.CommerceFeatureMatrix_headerPlanCell,
    "data-slot": "CommerceFeatureMatrix_headerPlanCell",
    "data-plan-highlight": plan.highlight ? "" : undefined,
    children: i.jsxs("div", {
      className: r?.CommerceFeatureMatrix_planHead,
      "data-slot": "CommerceFeatureMatrix_planHead",
      children: [
        i.jsxs("div", {
          className: r?.CommerceFeatureMatrix_planNameRow,
          "data-slot": "CommerceFeatureMatrix_planNameRow",
          children: [
            i.jsx("span", {
              className: r?.CommerceFeatureMatrix_planName,
              "data-slot": "CommerceFeatureMatrix_planName",
              children: plan.planName,
            }),
            plan.tag
              ? i.jsx("span", {
                  className: r?.CommerceFeatureMatrix_planTag,
                  style: plan.tagStyle,
                  "data-slot": "CommerceFeatureMatrix_planTag",
                  children: plan.tag,
                })
              : null,
          ],
        }),
        plan.subtitle
          ? i.jsx("div", {
              className: r?.CommerceFeatureMatrix_planSubtitle,
              "data-slot": "CommerceFeatureMatrix_planSubtitle",
              children: plan.subtitle,
            })
          : null,
        plan.price || plan.originalPrice || plan.priceDetail
          ? i.jsxs("div", {
              className: r?.CommerceFeatureMatrix_planPriceRow,
              "data-slot": "CommerceFeatureMatrix_planPriceRow",
              children: [
                plan.price || plan.originalPrice
                  ? i.jsx("div", {
                      className: r?.CommerceFeatureMatrix_planPriceWrap,
                      "data-slot": "CommerceFeatureMatrix_planPriceWrap",
                      children: i.jsx(useEN, {
                        price: plan.price,
                        classes: r,
                        layout: "overlap",
                      }),
                    })
                  : null,
                plan.priceDetail
                  ? i.jsx("div", {
                      className: r?.CommerceFeatureMatrix_planPriceDetail,
                      "data-slot": "CommerceFeatureMatrix_planPriceDetail",
                      children: plan.priceDetail,
                    })
                  : null,
              ],
            })
          : null,
        a,
      ],
    }),
  });
}
function tu({ plans, cornerTitle, classes }) {
  let a = R(tl, useB(), classes);
  return i.jsxs("tr", {
    className: a?.CommerceFeatureMatrix_headerRow,
    "data-slot": "CommerceFeatureMatrix_headerRow",
    children: [
      i.jsx("th", {
        scope: "col",
        className: a?.CommerceFeatureMatrix_headerCornerCell,
        "data-slot": "CommerceFeatureMatrix_headerCornerCell",
        children: cornerTitle,
      }),
      plans.map((plan) =>
        i.jsx(
          td,
          {
            plan,
            classes: a,
          },
          plan.key,
        ),
      ),
    ],
  });
}
function tp({ row, plans, texts, classes }) {
  let o = R(tl, useB(), classes);
  let c = ((e, t, text) => {
    if (e.length === t) {
      return e;
    }
    let a = e.slice(0, t);
    while (a.length < t) {
      a.push({
        type: "text",
        text,
      });
    }
    return a;
  })(row.cells, plans.length, texts?.emptyCellText);
  return i.jsxs("tr", {
    className: o?.CommerceFeatureMatrix_row,
    "data-slot": "CommerceFeatureMatrix_row",
    children: [
      i.jsxs("th", {
        scope: "row",
        className: o?.CommerceFeatureMatrix_featureCell,
        "data-slot": "CommerceFeatureMatrix_featureCell",
        children: [
          i.jsx("span", {
            className: o?.CommerceFeatureMatrix_featureTitle,
            "data-slot": "CommerceFeatureMatrix_featureTitle",
            children: row.featureTitle,
          }),
          row.tooltip
            ? i.jsx(n.A, {
                content: row.tooltip,
                position: "top",
                children: i.jsx(h.A, {
                  size: 14,
                  className: o?.CommerceFeatureMatrix_featureTooltipIcon,
                  "data-slot": "CommerceFeatureMatrix_featureTooltipIcon",
                }),
              })
            : null,
        ],
      }),
      c.map((cell, a) => {
        let n = plans[a];
        let c = cell.type === "text" && !!cell.highlight;
        return i.jsx(
          "td",
          {
            className: o?.CommerceFeatureMatrix_valueCell,
            "data-slot": "CommerceFeatureMatrix_valueCell",
            "data-plan-highlight": n.highlight ? "" : undefined,
            "data-value-highlight": c ? "" : undefined,
            children: i.jsx(ts, {
              cell,
              classes: o,
            }),
          },
          `${row.key}_${n.key}`,
        );
      }),
    ],
  });
}
function tC({ group, plans, texts, classes }) {
  let c = R(tl, useB(), classes);
  return i.jsxs(o.Fragment, {
    children: [
      i.jsx("tr", {
        className: c?.CommerceFeatureMatrix_groupRow,
        "data-slot": "CommerceFeatureMatrix_groupRow",
        children: i.jsx("th", {
          className: a.A(
            c?.CommerceFeatureMatrix_groupCell,
            c?.CommerceFeatureMatrix_groupHeaderCell,
          ),
          "data-slot": "CommerceFeatureMatrix_groupHeaderCell",
          colSpan: plans.length + 1,
          scope: "colgroup",
          children: group.title,
        }),
      }),
      group.rows.map((row) =>
        i.jsx(
          tp,
          {
            row,
            plans,
            texts,
            classes: c,
          },
          row.key,
        ),
      ),
    ],
  });
}
function tv({ groups, plans, texts, classes }) {
  let o = R(tl, useB(), classes);
  return i.jsx("tbody", {
    children: groups.map((group) =>
      i.jsx(
        tC,
        {
          group,
          plans,
          texts,
          classes: o,
        },
        group.key,
      ),
    ),
  });
}
const t_ =
  require.j == "wl4"
    ? {
        CommercePriceCompare_root: "index_module_CommercePriceCompare_root5",
        CommercePriceCompare_matrixWrap:
          "index_module_CommercePriceCompare_matrixWrap6",
        CommercePriceCompare_tabsWrap:
          "index_module_CommercePriceCompare_tabsWrap5",
      }
    : null;
const tf =
  require.j == "wl4"
    ? [
        "CommercePriceCompare_root",
        "CommercePriceCompare_title",
        "CommercePriceCompare_tabsWrap",
        "CommercePriceCompare_matrixWrap",
      ]
    : null;
function useTh({
  title,
  tabs,
  activeTab,
  onTabChange,
  cornerTitle,
  matrix,
  texts,
  className,
  classes,
}) {
  let u = useB();
  let p = o.useMemo(
    () =>
      Object.fromEntries(
        Array.from(
          new Set([
            ...Object.keys(t_),
            ...Object.keys(u),
            ...Object.keys(classes ?? {}),
          ]),
        ).map((e) => [e, a.A(t_[e], u?.[e], classes?.[e])]),
      ),
    [u, classes],
  );
  return i.jsx("section", {
    className: a.A(p.CommercePriceCompare_root, className),
    "data-component": "CommercePriceCompare",
    "data-slot": "CommercePriceCompare_root",
    "data-slots": tf.join(","),
    children: i.jsxs("div", {
      className: p.CommercePriceCompare_matrixWrap,
      "data-slot": "CommercePriceCompare_matrixWrap",
      children: [
        title
          ? i.jsx("h2", {
              className: p.CommercePriceCompare_title,
              "data-slot": "CommercePriceCompare_title",
              children: title,
            })
          : null,
        tabs?.length
          ? i.jsx("div", {
              className: p.CommercePriceCompare_tabsWrap,
              "data-slot": "CommercePriceCompare_tabsWrap",
              children: i.jsx(useU, {
                tabs,
                activeTab,
                onChange: onTabChange ?? (() => undefined),
                classes: p,
              }),
            })
          : null,
        i.jsx("div", {
          className: a.A(p.CommerceFeatureMatrix_root),
          "data-component": "CommerceFeatureMatrix",
          "data-slot": "CommerceFeatureMatrix_root",
          "data-slots": tm.join(","),
          children: i.jsx("div", {
            className: p.CommerceFeatureMatrix_tableWrapper,
            "data-slot": "CommerceFeatureMatrix_tableWrapper",
            children: i.jsxs("table", {
              className: p.CommerceFeatureMatrix_table,
              "data-slot": "CommerceFeatureMatrix_table",
              children: [
                i.jsx("thead", {
                  className: p.CommerceFeatureMatrix_header,
                  "data-slot": "CommerceFeatureMatrix_header",
                  children: i.jsx(tu, {
                    cornerTitle,
                    plans: matrix.plans,
                    classes: p,
                  }),
                }),
                i.jsx(tv, {
                  groups: matrix.groups,
                  plans: matrix.plans,
                  texts,
                  classes: p,
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
const tT =
  require.j == "wl4"
    ? {
        CommercePriceCompare_root: "index_module_CommercePriceCompare_root6",
        CommercePriceCompare_matrixWrap:
          "index_module_CommercePriceCompare_matrixWrap5",
        CommercePriceCompare_title: "index_module_CommercePriceCompare_title3",
        CommercePriceCompare_tabsWrap:
          "index_module_CommercePriceCompare_tabsWrap6",
        CommerceTabs_wrap: "index_module_CommerceTabs_wrap9",
        CommerceTabs_navbar: "index_module_CommerceTabs_navbar5",
        CommerceTabs_item: "index_module_CommerceTabs_item6",
        CommerceTabs_active: "index_module_CommerceTabs_active4",
        CommerceTabs_label: "index_module_CommerceTabs_label7",
        CommerceTabs_discount: "index_module_CommerceTabs_discount6",
        CommerceFeatureMatrix_root: "index_module_CommerceFeatureMatrix_root4",
        CommerceFeatureMatrix_tableWrapper:
          "index_module_CommerceFeatureMatrix_tableWrapper5",
        CommerceFeatureMatrix_table:
          "index_module_CommerceFeatureMatrix_table6",
        CommerceFeatureMatrix_header:
          "index_module_CommerceFeatureMatrix_header3",
        CommerceFeatureMatrix_headerCornerCell:
          "index_module_CommerceFeatureMatrix_headerCornerCell5",
        CommerceFeatureMatrix_headerPlanCell:
          "index_module_CommerceFeatureMatrix_headerPlanCell5",
        CommerceFeatureMatrix_planHead:
          "index_module_CommerceFeatureMatrix_planHead6",
        CommerceFeatureMatrix_planNameRow:
          "index_module_CommerceFeatureMatrix_planNameRow6",
        CommerceFeatureMatrix_planName:
          "index_module_CommerceFeatureMatrix_planName3",
        CommerceFeatureMatrix_planTag:
          "index_module_CommerceFeatureMatrix_planTag6",
        CommerceFeatureMatrix_planSubtitle:
          "index_module_CommerceFeatureMatrix_planSubtitle3",
        CommerceFeatureMatrix_planPriceDetail:
          "index_module_CommerceFeatureMatrix_planPriceDetail3",
        CommerceFeatureMatrix_planPriceRow:
          "index_module_CommerceFeatureMatrix_planPriceRow6",
        CommerceFeatureMatrix_planPriceWrap:
          "index_module_CommerceFeatureMatrix_planPriceWrap6",
        CommerceFeatureMatrix_planCta:
          "index_module_CommerceFeatureMatrix_planCta3",
        CommerceFeatureMatrix_groupRow:
          "index_module_CommerceFeatureMatrix_groupRow3",
        CommerceFeatureMatrix_groupCell:
          "index_module_CommerceFeatureMatrix_groupCell5",
        CommerceFeatureMatrix_groupHeaderCell:
          "index_module_CommerceFeatureMatrix_groupHeaderCell",
        CommerceFeatureMatrix_row: "index_module_CommerceFeatureMatrix_row3",
        CommerceFeatureMatrix_featureCell:
          "index_module_CommerceFeatureMatrix_featureCell6",
        CommerceFeatureMatrix_valueCell:
          "index_module_CommerceFeatureMatrix_valueCell5",
        CommerceFeatureMatrix_featureTitle:
          "index_module_CommerceFeatureMatrix_featureTitle3",
        CommerceFeatureMatrix_featureTooltipIcon:
          "index_module_CommerceFeatureMatrix_featureTooltipIcon6",
        CommerceFeatureMatrix_valueText:
          "index_module_CommerceFeatureMatrix_valueText3",
        CommerceFeatureMatrix_valueHighlight:
          "index_module_CommerceFeatureMatrix_valueHighlight3",
        CommerceFeatureMatrix_yesIcon:
          "index_module_CommerceFeatureMatrix_yesIcon3",
        CommerceFeatureMatrix_noIcon:
          "index_module_CommerceFeatureMatrix_noIcon3",
        CommercePriceText_root: "index_module_CommercePriceText_root9",
        CommercePriceText_price: "index_module_CommercePriceText_price6",
        CommercePriceText_currency: "index_module_CommercePriceText_currency6",
        CommercePriceText_additions:
          "index_module_CommercePriceText_additions9",
        CommercePriceText_original: "index_module_CommercePriceText_original6",
        CommercePriceText_cycle: "index_module_CommercePriceText_cycle6",
      }
    : null;
function tS(e) {
  return e != null && e !== "";
}
export function C3({ classes, className, matrix, ...rest }) {
  let c = q(tT, classes);
  let matrix_1 = o.useMemo(
    () => ({
      ...matrix,
      plans: matrix.plans.map((e) => {
        var t;
        if ((t = e.tagStyle) && (tS(t.backgroundColor) || tS(t.background))) {
          return e;
        }
        return {
          ...e,
          tag: undefined,
          tagStyle: undefined,
        };
      }),
    }),
    [matrix],
  );
  return i.jsx(useE, {
    classes: c,
    children: i.jsx(useTh, {
      ...rest,
      matrix: matrix_1,
      className: a.A(G, className),
    }),
  });
}
const ty =
  require.j == "wl4"
    ? {
        CommerceDrawer_drawer: "index_module_CommerceDrawer_drawer3",
        CommerceDrawer_content: "index_module_CommerceDrawer_content3",
        CommerceDrawer_header: "index_module_CommerceDrawer_header3",
        CommerceDrawer_title: "index_module_CommerceDrawer_title3",
        CommerceDrawer_tips: "index_module_CommerceDrawer_tips3",
        CommerceDrawer_navbar: "index_module_CommerceDrawer_navbar3",
        CommerceDrawer_loading: "index_module_CommerceDrawer_loading3",
        CommerceDrawer_body: "index_module_CommerceDrawer_body3",
        CommerceDrawer_closeButton: "index_module_CommerceDrawer_closeButton3",
      }
    : null;
export function HO({ classes, className, ...rest }) {
  let o = q(ty, classes);
  return i.jsx(useE, {
    classes: o,
    children: i.jsx(eV, {
      ...rest,
      className: a.A(G, className),
    }),
  });
}
const tI =
  require.j == "wl4"
    ? {
        CommerceEnterpriseLeadFormModal_content:
          "index_module_CommerceEnterpriseLeadFormModal_content8",
        CommerceEnterpriseLeadFormModal_header:
          "index_module_CommerceEnterpriseLeadFormModal_header7",
        CommerceEnterpriseLeadFormModal_title:
          "index_module_CommerceEnterpriseLeadFormModal_title8",
        CommerceEnterpriseLeadFormModal_description:
          "index_module_CommerceEnterpriseLeadFormModal_description8",
        CommerceEnterpriseLeadFormModal_closeButton:
          "index_module_CommerceEnterpriseLeadFormModal_closeButton9",
        CommerceEnterpriseLeadFormModal_appealActionButton:
          "index_module_CommerceEnterpriseLeadFormModal_appealActionButton5",
        CommerceEnterpriseLeadFormModal_cancelButton:
          "index_module_CommerceEnterpriseLeadFormModal_cancelButton9",
        CommerceEnterpriseLeadFormModal_submitButton:
          "index_module_CommerceEnterpriseLeadFormModal_submitButton9",
        CommerceEnterpriseLeadFormModal_form:
          "index_module_CommerceEnterpriseLeadFormModal_form8",
        CommerceEnterpriseLeadFormModal_field:
          "index_module_CommerceEnterpriseLeadFormModal_field9",
        CommerceEnterpriseLeadFormModal_fields:
          "index_module_CommerceEnterpriseLeadFormModal_fields8",
        CommerceEnterpriseLeadFormModal_label:
          "index_module_CommerceEnterpriseLeadFormModal_label8",
        CommerceEnterpriseLeadFormModal_requiredMark:
          "index_module_CommerceEnterpriseLeadFormModal_requiredMark7",
        CommerceEnterpriseLeadFormModal_control:
          "index_module_CommerceEnterpriseLeadFormModal_control9",
        CommerceEnterpriseLeadFormModal_options:
          "index_module_CommerceEnterpriseLeadFormModal_options5",
        CommerceEnterpriseLeadFormModal_option:
          "index_module_CommerceEnterpriseLeadFormModal_option6",
        CommerceEnterpriseLeadFormModal_optionControl:
          "index_module_CommerceEnterpriseLeadFormModal_optionControl6",
        CommerceEnterpriseLeadFormModal_textareaWrapper:
          "index_module_CommerceEnterpriseLeadFormModal_textareaWrapper6",
        CommerceEnterpriseLeadFormModal_wordLimit:
          "index_module_CommerceEnterpriseLeadFormModal_wordLimit6",
        CommerceEnterpriseLeadFormModal_error:
          "index_module_CommerceEnterpriseLeadFormModal_error9",
        CommerceEnterpriseLeadFormModal_footer:
          "index_module_CommerceEnterpriseLeadFormModal_footer6",
        CommerceEnterpriseLeadFormModal_agreement:
          "index_module_CommerceEnterpriseLeadFormModal_agreement8",
        CommerceEnterpriseLeadFormModal_agreementText:
          "index_module_CommerceEnterpriseLeadFormModal_agreementText8",
        CommerceEnterpriseLeadFormModal_actions:
          "index_module_CommerceEnterpriseLeadFormModal_actions8",
      }
    : null;
const tb =
  require.j == "wl4"
    ? [
        "CommerceEnterpriseLeadFormModal_modal",
        "CommerceEnterpriseLeadFormModal_content",
        "CommerceEnterpriseLeadFormModal_header",
        "CommerceEnterpriseLeadFormModal_title",
        "CommerceEnterpriseLeadFormModal_description",
        "CommerceEnterpriseLeadFormModal_closeButton",
        "CommerceEnterpriseLeadFormModal_form",
        "CommerceEnterpriseLeadFormModal_fields",
        "CommerceEnterpriseLeadFormModal_field",
        "CommerceEnterpriseLeadFormModal_label",
        "CommerceEnterpriseLeadFormModal_requiredMark",
        "CommerceEnterpriseLeadFormModal_control",
        "CommerceEnterpriseLeadFormModal_options",
        "CommerceEnterpriseLeadFormModal_option",
        "CommerceEnterpriseLeadFormModal_optionControl",
        "CommerceEnterpriseLeadFormModal_textareaWrapper",
        "CommerceEnterpriseLeadFormModal_appealActionButton",
        "CommerceEnterpriseLeadFormModal_wordLimit",
        "CommerceEnterpriseLeadFormModal_error",
        "CommerceEnterpriseLeadFormModal_footer",
        "CommerceEnterpriseLeadFormModal_agreement",
        "CommerceEnterpriseLeadFormModal_agreementText",
        "CommerceEnterpriseLeadFormModal_actions",
        "CommerceEnterpriseLeadFormModal_cancelButton",
        "CommerceEnterpriseLeadFormModal_submitButton",
      ]
    : null;
const tj =
  require.j == "wl4"
    ? [
        "companyName",
        "industry",
        "peopleCountIndex",
        "appeal",
        "userName",
        "mobile",
      ]
    : null;
const tk =
  require.j == "wl4"
    ? [
        "companyName",
        "industry",
        "peopleCountIndex",
        "appeal",
        "userName",
        "mobile",
      ]
    : null;
function useTP({
  visible,
  value,
  copy,
  industryOptions,
  peopleCountOptions,
  submitLoading,
  submitDisabled,
  agreementChecked,
  modalWidth = 560,
  fieldOrder = tk,
  requiredFields = tj,
  displayOptionsInline = false,
  companyNameMaxLength,
  userNameMaxLength,
  appealMaxLength,
  showAppealWordLimit = false,
  appealAutoSize = {
    minRows: 3,
    maxRows: 5,
  },
  onAppealAction,
  onAgreementChange,
  onAgreementRequired,
  onChange,
  onSubmit,
  onClose,
  className,
  classes,
}) {
  let [E, setE] = o.useState(false);
  let [L, setL] = o.useState(false);
  let checked = agreementChecked ?? L;
  let O = o.useId();
  let Q = useB();
  let W = o.useMemo(
    () =>
      Object.fromEntries(
        Array.from(
          new Set([
            ...Object.keys(tI),
            ...Object.keys(Q),
            ...Object.keys(classes ?? {}),
          ]),
        ).map((e) => [e, a.A(tI[e], Q?.[e], classes?.[e])]),
      ),
    [Q, classes],
  );
  let U = o.useMemo(
    () =>
      new Set(
        requiredFields.filter((e) => {
          var r;
          if (typeof (r = value[e]) === "string") {
            return r.trim().length === 0;
          }
          return r == null;
        }),
      ),
    [requiredFields, value],
  );
  o.useEffect(() => {
    if (!visible) {
      setE(false);
      setL(false);
    }
  }, [visible]);
  let q = (e, r) => {
    onChange({
      ...value,
      [e]: r,
    });
  };
  let G = (e) => {
    let t = copy[e]?.requiredErrorText;
    if (E && U.has(e) && t != null) {
      return i.jsx("div", {
        className: W.CommerceEnterpriseLeadFormModal_error,
        "data-slot": "CommerceEnterpriseLeadFormModal_error",
        role: "alert",
        children: t,
      });
    }
    return null;
  };
  let V = (e, t, htmlFor, id) =>
    i.jsxs("label", {
      id,
      className: W.CommerceEnterpriseLeadFormModal_label,
      "data-slot": "CommerceEnterpriseLeadFormModal_label",
      htmlFor,
      children: [
        t.label,
        requiredFields.includes(e)
          ? i.jsx("span", {
              className: W.CommerceEnterpriseLeadFormModal_requiredMark,
              "data-slot": "CommerceEnterpriseLeadFormModal_requiredMark",
              "aria-hidden": "true",
              children: "*",
            })
          : null,
      ],
    });
  let H = (e, a) => {
    let o = copy[e];
    let n = `${O}-${e}`;
    return i.jsxs(
      "div",
      {
        className: W.CommerceEnterpriseLeadFormModal_field,
        "data-slot": "CommerceEnterpriseLeadFormModal_field",
        "data-field": e,
        children: [
          V(e, o, undefined, displayOptionsInline ? `${n}-label` : undefined),
          displayOptionsInline
            ? i.jsx("div", {
                id: n,
                className: W.CommerceEnterpriseLeadFormModal_options,
                "data-slot": "CommerceEnterpriseLeadFormModal_options",
                role: "radiogroup",
                "aria-labelledby": `${n}-label`,
                "aria-invalid": E && U.has(e),
                children: a.map((r) =>
                  i.jsxs(
                    "label",
                    {
                      className: W.CommerceEnterpriseLeadFormModal_option,
                      "data-slot": "CommerceEnterpriseLeadFormModal_option",
                      children: [
                        i.jsx("input", {
                          className:
                            W.CommerceEnterpriseLeadFormModal_optionControl,
                          "data-slot":
                            "CommerceEnterpriseLeadFormModal_optionControl",
                          type: "radio",
                          name: n,
                          value: r.value,
                          checked: value[e] === r.value,
                          onChange: () => q(e, r.value),
                        }),
                        i.jsx("span", {
                          children: r.label,
                        }),
                      ],
                    },
                    r.value,
                  ),
                ),
              })
            : i.jsx(d.A, {
                className: W.CommerceEnterpriseLeadFormModal_control,
                "data-slot": "CommerceEnterpriseLeadFormModal_control",
                value: value[e] ?? undefined,
                placeholder: o.placeholder,
                options: a,
                error: E && U.has(e),
                onChange: (t) => q(e, Number(t)),
              }),
          G(e),
        ],
      },
      e,
    );
  };
  let z = i.jsxs("div", {
    className: W.CommerceEnterpriseLeadFormModal_actions,
    "data-slot": "CommerceEnterpriseLeadFormModal_actions",
    children: [
      copy.cancelText
        ? i.jsx("button", {
            type: "button",
            className: W.CommerceEnterpriseLeadFormModal_cancelButton,
            "data-slot": "CommerceEnterpriseLeadFormModal_cancelButton",
            onClick: onClose,
            children: copy.cancelText,
          })
        : null,
      i.jsx("button", {
        type: "submit",
        className: W.CommerceEnterpriseLeadFormModal_submitButton,
        "data-slot": "CommerceEnterpriseLeadFormModal_submitButton",
        disabled: submitDisabled || submitLoading,
        children: copy.submitText,
      }),
    ],
  });
  return i.jsx(u.A, {
    visible,
    onCancel: onClose,
    "data-component": "CommerceEnterpriseLeadFormModal",
    "data-slot": "CommerceEnterpriseLeadFormModal_modal",
    "data-slots": tb.join(","),
    "data-state": visible ? "open" : "closed",
    footer: null,
    closable: false,
    maskClosable: true,
    className: a.A(W.CommerceEnterpriseLeadFormModal_modal, className),
    style: {
      width: modalWidth,
      maxWidth: "calc(100vw - 32px)",
    },
    unmountOnExit: true,
    children: i.jsxs("div", {
      className: W.CommerceEnterpriseLeadFormModal_content,
      "data-slot": "CommerceEnterpriseLeadFormModal_content",
      "data-state": visible ? "open" : "closed",
      children: [
        i.jsxs("div", {
          className: W.CommerceEnterpriseLeadFormModal_header,
          "data-slot": "CommerceEnterpriseLeadFormModal_header",
          children: [
            i.jsx("h3", {
              className: W.CommerceEnterpriseLeadFormModal_title,
              "data-slot": "CommerceEnterpriseLeadFormModal_title",
              children: copy.title,
            }),
            i.jsx("button", {
              type: "button",
              className: W.CommerceEnterpriseLeadFormModal_closeButton,
              "data-slot": "CommerceEnterpriseLeadFormModal_closeButton",
              "aria-label": copy.closeAriaLabel ?? "Close",
              onClick: onClose,
              children: i.jsx(g.A, {
                size: 20,
                "aria-hidden": "true",
              }),
            }),
          ],
        }),
        copy.description
          ? i.jsx("div", {
              className: W.CommerceEnterpriseLeadFormModal_description,
              "data-slot": "CommerceEnterpriseLeadFormModal_description",
              children: copy.description,
            })
          : null,
        i.jsxs("form", {
          className: W.CommerceEnterpriseLeadFormModal_form,
          "data-slot": "CommerceEnterpriseLeadFormModal_form",
          onSubmit: (e) => {
            e.preventDefault();
            setE(true);
            if (!(U.size > 0) && !submitDisabled && !submitLoading) {
              if (copy.agreementText != null && !checked) {
                return void onAgreementRequired?.();
              }
              onSubmit(value);
            }
          },
          children: [
            i.jsx("div", {
              className: W.CommerceEnterpriseLeadFormModal_fields,
              "data-slot": "CommerceEnterpriseLeadFormModal_fields",
              children: fieldOrder.map((e) => {
                switch (e) {
                  case "companyName":
                  case "email":
                  case "userName":
                  case "mobile":
                    let a = copy[e];
                    if (!a) {
                      return null;
                    }
                    let o = `${O}-${e}`;
                    return i.jsxs(
                      "div",
                      {
                        className: W.CommerceEnterpriseLeadFormModal_field,
                        "data-slot": "CommerceEnterpriseLeadFormModal_field",
                        "data-field": e,
                        children: [
                          V(e, a, o),
                          i.jsx(s.A, {
                            id: o,
                            className:
                              W.CommerceEnterpriseLeadFormModal_control,
                            "data-slot":
                              "CommerceEnterpriseLeadFormModal_control",
                            value: value[e] ?? "",
                            placeholder: a.placeholder,
                            error: E && U.has(e),
                            maxLength:
                              e === "companyName"
                                ? companyNameMaxLength
                                : e === "userName"
                                  ? userNameMaxLength
                                  : undefined,
                            inputMode: e === "mobile" ? "tel" : undefined,
                            type: e === "email" ? "email" : undefined,
                            autoComplete:
                              e === "companyName"
                                ? "organization"
                                : e === "email"
                                  ? "email"
                                  : e === "mobile"
                                    ? "tel"
                                    : "name",
                            onChange: (t) => q(e, t),
                          }),
                          G(e),
                        ],
                      },
                      e,
                    );
                  case "industry":
                    return H(e, industryOptions);
                  case "peopleCountIndex":
                    return H(e, peopleCountOptions);
                  case "appeal":
                    let l;
                    l = `${O}-appeal`;
                    return i.jsxs(
                      "div",
                      {
                        className: W.CommerceEnterpriseLeadFormModal_field,
                        "data-slot": "CommerceEnterpriseLeadFormModal_field",
                        "data-field": "appeal",
                        children: [
                          V("appeal", copy.appeal, l),
                          i.jsxs("div", {
                            className:
                              W.CommerceEnterpriseLeadFormModal_textareaWrapper,
                            "data-slot":
                              "CommerceEnterpriseLeadFormModal_textareaWrapper",
                            children: [
                              i.jsx(s.A.TextArea, {
                                id: l,
                                className:
                                  W.CommerceEnterpriseLeadFormModal_control,
                                "data-slot":
                                  "CommerceEnterpriseLeadFormModal_control",
                                value: value.appeal,
                                placeholder: copy.appeal.placeholder,
                                error: E && U.has("appeal"),
                                maxLength: appealMaxLength,
                                autoSize: appealAutoSize,
                                onChange: (e) => q("appeal", e),
                              }),
                              copy.appealActionText
                                ? i.jsx("button", {
                                    type: "button",
                                    className:
                                      W.CommerceEnterpriseLeadFormModal_appealActionButton,
                                    "data-slot":
                                      "CommerceEnterpriseLeadFormModal_appealActionButton",
                                    onClick: onAppealAction,
                                    children: copy.appealActionText,
                                  })
                                : null,
                              showAppealWordLimit && appealMaxLength
                                ? i.jsxs("span", {
                                    className:
                                      W.CommerceEnterpriseLeadFormModal_wordLimit,
                                    "data-slot":
                                      "CommerceEnterpriseLeadFormModal_wordLimit",
                                    "aria-live": "polite",
                                    children: [
                                      value.appeal.length,
                                      "/",
                                      appealMaxLength,
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          G("appeal"),
                        ],
                      },
                      "appeal",
                    );
                  default:
                    return null;
                }
              }),
            }),
            copy.agreementText != null
              ? i.jsxs("div", {
                  className: W.CommerceEnterpriseLeadFormModal_footer,
                  "data-slot": "CommerceEnterpriseLeadFormModal_footer",
                  children: [
                    i.jsx(l.A, {
                      className: W.CommerceEnterpriseLeadFormModal_agreement,
                      "data-slot": "CommerceEnterpriseLeadFormModal_agreement",
                      checked,
                      onChange: (e) => {
                        if (agreementChecked === undefined) {
                          setL(e);
                        }
                        onAgreementChange?.(e);
                      },
                      children: i.jsx("span", {
                        className:
                          W.CommerceEnterpriseLeadFormModal_agreementText,
                        "data-slot":
                          "CommerceEnterpriseLeadFormModal_agreementText",
                        children: copy.agreementText,
                      }),
                    }),
                    z,
                  ],
                })
              : z,
          ],
        }),
      ],
    }),
  });
}
const tx =
  require.j == "wl4"
    ? [
        {
          value: 1,
          label: "影视传媒",
        },
        {
          value: 2,
          label: "广告营销",
        },
        {
          value: 3,
          label: "MCN机构",
        },
        {
          value: 4,
          label: "教育培训",
        },
        {
          value: 5,
          label: "消费业",
        },
        {
          value: 6,
          label: "制造业",
        },
        {
          value: 7,
          label: "金融",
        },
        {
          value: 8,
          label: "科技",
        },
        {
          value: 9,
          label: "电商",
        },
        {
          value: 99,
          label: "其他",
        },
      ]
    : null;
const tM =
  require.j == "wl4"
    ? [
        {
          value: 16,
          label: "21-30",
        },
        {
          value: 17,
          label: "30-50",
        },
        {
          value: 18,
          label: "50-100",
        },
        {
          value: 19,
          label: "100-200",
        },
        {
          value: 20,
          label: "200 以上",
        },
      ]
    : null;
const tA =
  require.j == "wl4"
    ? {
        title: "商务咨询",
        companyName: {
          label: "公司名称",
          placeholder: "请输入公司名称（限30字以内）",
          requiredErrorText: "公司名称不能为空",
        },
        industry: {
          label: "所属行业",
          requiredErrorText: "所属行业不能为空",
        },
        peopleCountIndex: {
          label: "使用人数",
          requiredErrorText: "使用人数不能为空",
        },
        appeal: {
          label: "需求描述",
          placeholder: "请简要描述您的使用场景、主要需求以及期望达成的效果",
        },
        userName: {
          label: "联系人",
          placeholder: "请输入联系人姓名",
          requiredErrorText: "联系人不能为空",
        },
        mobile: {
          label: "手机号",
          placeholder: "请输入手机号",
          requiredErrorText: "手机号不能为空",
        },
        cancelText: "取消",
        submitText: "提交",
        closeAriaLabel: "关闭",
      }
    : null;
const tD =
  require.j == "wl4"
    ? [
        "userName",
        "mobile",
        "companyName",
        "industry",
        "peopleCountIndex",
        "appeal",
      ]
    : null;
const tR =
  require.j == "wl4"
    ? ["userName", "mobile", "companyName", "industry", "peopleCountIndex"]
    : null;
const tE = q(
  {
    CommerceEnterpriseLeadFormModal_modal:
      "index_module_CommerceEnterpriseLeadFormModal_modal6",
    CommerceEnterpriseLeadFormModal_content:
      "index_module_CommerceEnterpriseLeadFormModal_content9",
    CommerceEnterpriseLeadFormModal_header:
      "index_module_CommerceEnterpriseLeadFormModal_header8",
    CommerceEnterpriseLeadFormModal_title:
      "index_module_CommerceEnterpriseLeadFormModal_title9",
    CommerceEnterpriseLeadFormModal_description:
      "index_module_CommerceEnterpriseLeadFormModal_description9",
    CommerceEnterpriseLeadFormModal_closeButton:
      "index_module_CommerceEnterpriseLeadFormModal_closeButton8",
    CommerceEnterpriseLeadFormModal_form:
      "index_module_CommerceEnterpriseLeadFormModal_form9",
    CommerceEnterpriseLeadFormModal_fields:
      "index_module_CommerceEnterpriseLeadFormModal_fields9",
    CommerceEnterpriseLeadFormModal_label:
      "index_module_CommerceEnterpriseLeadFormModal_label9",
    CommerceEnterpriseLeadFormModal_requiredMark:
      "index_module_CommerceEnterpriseLeadFormModal_requiredMark8",
    CommerceEnterpriseLeadFormModal_control:
      "index_module_CommerceEnterpriseLeadFormModal_control8",
    CommerceEnterpriseLeadFormModal_error:
      "index_module_CommerceEnterpriseLeadFormModal_error7",
    CommerceEnterpriseLeadFormModal_field:
      "index_module_CommerceEnterpriseLeadFormModal_field8",
    CommerceEnterpriseLeadFormModal_agreement:
      "index_module_CommerceEnterpriseLeadFormModal_agreement9",
    CommerceEnterpriseLeadFormModal_agreementText:
      "index_module_CommerceEnterpriseLeadFormModal_agreementText9",
    CommerceEnterpriseLeadFormModal_actions:
      "index_module_CommerceEnterpriseLeadFormModal_actions9",
    CommerceEnterpriseLeadFormModal_cancelButton:
      "index_module_CommerceEnterpriseLeadFormModal_cancelButton8",
    CommerceEnterpriseLeadFormModal_submitButton:
      "index_module_CommerceEnterpriseLeadFormModal_submitButton8",
  },
  {
    CommerceEnterpriseLeadFormModal_modal:
      "index_module_CommerceEnterpriseLeadFormModal_modal5",
    CommerceEnterpriseLeadFormModal_content:
      "index_module_CommerceEnterpriseLeadFormModal_content7",
    CommerceEnterpriseLeadFormModal_header:
      "index_module_CommerceEnterpriseLeadFormModal_header9",
    CommerceEnterpriseLeadFormModal_title:
      "index_module_CommerceEnterpriseLeadFormModal_title7",
    CommerceEnterpriseLeadFormModal_description:
      "index_module_CommerceEnterpriseLeadFormModal_description7",
    CommerceEnterpriseLeadFormModal_closeButton:
      "index_module_CommerceEnterpriseLeadFormModal_closeButton7",
    CommerceEnterpriseLeadFormModal_form:
      "index_module_CommerceEnterpriseLeadFormModal_form7",
    CommerceEnterpriseLeadFormModal_fields:
      "index_module_CommerceEnterpriseLeadFormModal_fields7",
    CommerceEnterpriseLeadFormModal_field:
      "index_module_CommerceEnterpriseLeadFormModal_field7",
    CommerceEnterpriseLeadFormModal_label:
      "index_module_CommerceEnterpriseLeadFormModal_label7",
    CommerceEnterpriseLeadFormModal_requiredMark:
      "index_module_CommerceEnterpriseLeadFormModal_requiredMark9",
    CommerceEnterpriseLeadFormModal_control:
      "index_module_CommerceEnterpriseLeadFormModal_control7",
    CommerceEnterpriseLeadFormModal_options:
      "index_module_CommerceEnterpriseLeadFormModal_options6",
    CommerceEnterpriseLeadFormModal_option:
      "index_module_CommerceEnterpriseLeadFormModal_option5",
    CommerceEnterpriseLeadFormModal_optionControl:
      "index_module_CommerceEnterpriseLeadFormModal_optionControl5",
    CommerceEnterpriseLeadFormModal_textareaWrapper:
      "index_module_CommerceEnterpriseLeadFormModal_textareaWrapper5",
    CommerceEnterpriseLeadFormModal_wordLimit:
      "index_module_CommerceEnterpriseLeadFormModal_wordLimit5",
    CommerceEnterpriseLeadFormModal_error:
      "index_module_CommerceEnterpriseLeadFormModal_error8",
    CommerceEnterpriseLeadFormModal_footer:
      "index_module_CommerceEnterpriseLeadFormModal_footer5",
    CommerceEnterpriseLeadFormModal_agreement:
      "index_module_CommerceEnterpriseLeadFormModal_agreement7",
    CommerceEnterpriseLeadFormModal_agreementText:
      "index_module_CommerceEnterpriseLeadFormModal_agreementText7",
    CommerceEnterpriseLeadFormModal_actions:
      "index_module_CommerceEnterpriseLeadFormModal_actions7",
    CommerceEnterpriseLeadFormModal_cancelButton:
      "index_module_CommerceEnterpriseLeadFormModal_cancelButton7",
    CommerceEnterpriseLeadFormModal_submitButton:
      "index_module_CommerceEnterpriseLeadFormModal_submitButton7",
  },
);
export function gW({
  classes,
  className,
  copy = tA,
  industryOptions = tx,
  peopleCountOptions = tM,
  modalWidth = 720,
  fieldOrder = tD,
  requiredFields = tR,
  displayOptionsInline = true,
  companyNameMaxLength = 30,
  userNameMaxLength = 10,
  appealMaxLength = 100,
  showAppealWordLimit = true,
  appealAutoSize = false,
  ...rest
}) {
  let f = q(tE, classes);
  return i.jsx(useE, {
    classes: f,
    children: i.jsx(useTP, {
      ...rest,
      copy,
      industryOptions,
      peopleCountOptions,
      modalWidth,
      fieldOrder,
      requiredFields,
      displayOptionsInline,
      companyNameMaxLength,
      userNameMaxLength,
      appealMaxLength,
      showAppealWordLimit,
      appealAutoSize,
      className: a.A(G, className),
    }),
  });
}
function tN(e) {
  return e.ariaLabel ?? (typeof e.label === "string" ? e.label : undefined);
}
function tL(e, t) {
  let r = i.jsxs(
    "button",
    {
      type: "button",
      className: t.className,
      "data-slot": t.slot,
      "data-variant": e.variant ?? t.fallbackVariant ?? "secondary",
      "data-disabled": e.disabled ? "" : undefined,
      "aria-label": tN(e),
      disabled: e.disabled,
      onClick: e.onClick,
      children: [
        e.icon,
        i.jsx("span", {
          children: e.label,
        }),
      ],
    },
    `${e.key}-button`,
  );
  let a = e.reason
    ? i.jsx(
        "span",
        {
          className: t.reasonClassName,
          "data-slot": t.reasonSlot,
          children: e.reason,
        },
        `${e.key}-reason`,
      )
    : null;
  if (t.wrap) {
    return t.wrap(r, a);
  }
  return i.jsxs(
    "span",
    {
      children: [r, a],
    },
    e.key,
  );
}
const tF =
  require.j == "wl4"
    ? {
        CommerceTeamActionConfirmModal_root:
          "index_module_CommerceTeamActionConfirmModal_root6",
        CommerceTeamActionConfirmModal_panel:
          "index_module_CommerceTeamActionConfirmModal_panel6",
        CommerceTeamActionConfirmModal_header:
          "index_module_CommerceTeamActionConfirmModal_header5",
        CommerceTeamActionConfirmModal_titleGroup:
          "index_module_CommerceTeamActionConfirmModal_titleGroup6",
        CommerceTeamActionConfirmModal_details:
          "index_module_CommerceTeamActionConfirmModal_details5",
        CommerceTeamActionConfirmModal_actions:
          "index_module_CommerceTeamActionConfirmModal_actions6",
        CommerceTeamActionConfirmModal_actionWrap:
          "index_module_CommerceTeamActionConfirmModal_actionWrap5",
        CommerceTeamActionConfirmModal_closeButton:
          "index_module_CommerceTeamActionConfirmModal_closeButton6",
        CommerceTeamActionConfirmModal_actionButton:
          "index_module_CommerceTeamActionConfirmModal_actionButton6",
      }
    : null;
const tJ =
  require.j == "wl4"
    ? [
        "CommerceTeamActionConfirmModal_modal",
        "CommerceTeamActionConfirmModal_root",
        "CommerceTeamActionConfirmModal_panel",
        "CommerceTeamActionConfirmModal_header",
        "CommerceTeamActionConfirmModal_titleGroup",
        "CommerceTeamActionConfirmModal_title",
        "CommerceTeamActionConfirmModal_description",
        "CommerceTeamActionConfirmModal_closeButton",
        "CommerceTeamActionConfirmModal_details",
        "CommerceTeamActionConfirmModal_detail",
        "CommerceTeamActionConfirmModal_actions",
        "CommerceTeamActionConfirmModal_actionWrap",
        "CommerceTeamActionConfirmModal_actionButton",
        "CommerceTeamActionConfirmModal_actionReason",
      ]
    : null;
function useTO({
  open = true,
  tone = "default",
  layout = "default",
  title,
  description,
  details,
  confirmAction,
  cancelAction,
  closeAction,
  children,
  className,
  classes,
}) {
  let _ = useB();
  let f = o.useMemo(() => R(tF, _, classes), [_, classes]);
  let h = [cancelAction, confirmAction].filter(Boolean);
  let S = a.A(f.CommerceTeamActionConfirmModal_modal, className);
  if (open) {
    return i.jsx(u.A, {
      visible: open,
      onCancel: closeAction?.onClick ?? cancelAction?.onClick,
      "data-component": "CommerceTeamActionConfirmModal",
      "data-slot": "CommerceTeamActionConfirmModal_modal",
      "data-slots": tJ.join(","),
      "data-layout": layout,
      "data-tone": tone,
      footer: null,
      maskClosable: true,
      closable: false,
      focusLock: true,
      autoFocus: true,
      escToExit: true,
      ariaModal: true,
      unmountOnExit: true,
      className: S,
      wrapClassName: S,
      style: {
        width: "auto",
        maxWidth: "90vw",
      },
      children: i.jsx("section", {
        className: a.A(f.CommerceTeamActionConfirmModal_root, className),
        "data-component": "CommerceTeamActionConfirmModal",
        "data-slot": "CommerceTeamActionConfirmModal_root",
        "data-slots": tJ.join(","),
        "data-layout": layout,
        "data-tone": tone,
        children: i.jsxs("div", {
          className: f.CommerceTeamActionConfirmModal_panel,
          "data-slot": "CommerceTeamActionConfirmModal_panel",
          children: [
            i.jsxs("header", {
              className: f.CommerceTeamActionConfirmModal_header,
              "data-slot": "CommerceTeamActionConfirmModal_header",
              children: [
                i.jsxs("div", {
                  className: f.CommerceTeamActionConfirmModal_titleGroup,
                  "data-slot": "CommerceTeamActionConfirmModal_titleGroup",
                  children: [
                    title
                      ? i.jsx("h2", {
                          className: f.CommerceTeamActionConfirmModal_title,
                          "data-slot": "CommerceTeamActionConfirmModal_title",
                          children: title,
                        })
                      : null,
                    description
                      ? i.jsx("div", {
                          className:
                            f.CommerceTeamActionConfirmModal_description,
                          "data-slot":
                            "CommerceTeamActionConfirmModal_description",
                          children: description,
                        })
                      : null,
                  ],
                }),
                closeAction
                  ? i.jsxs("button", {
                      type: "button",
                      className: f.CommerceTeamActionConfirmModal_closeButton,
                      "data-slot": "CommerceTeamActionConfirmModal_closeButton",
                      "aria-label": tN(closeAction),
                      disabled: closeAction.disabled,
                      onClick: closeAction.onClick,
                      children: [
                        closeAction.icon,
                        i.jsx("span", {
                          children: closeAction.label,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            details?.length
              ? i.jsx("div", {
                  className: f.CommerceTeamActionConfirmModal_details,
                  "data-slot": "CommerceTeamActionConfirmModal_details",
                  children: details.map((e, t) =>
                    i.jsx(
                      "div",
                      {
                        className: f.CommerceTeamActionConfirmModal_detail,
                        "data-slot": "CommerceTeamActionConfirmModal_detail",
                        children: e,
                      },
                      t,
                    ),
                  ),
                })
              : null,
            children,
            h.length
              ? i.jsx("div", {
                  className: f.CommerceTeamActionConfirmModal_actions,
                  "data-slot": "CommerceTeamActionConfirmModal_actions",
                  children: h.map((e) =>
                    tL(e, {
                      className: f.CommerceTeamActionConfirmModal_actionButton,
                      reasonClassName:
                        f.CommerceTeamActionConfirmModal_actionReason,
                      slot: "CommerceTeamActionConfirmModal_actionButton",
                      reasonSlot: "CommerceTeamActionConfirmModal_actionReason",
                      fallbackVariant:
                        e === confirmAction ? "primary" : "secondary",
                      wrap: (t, r) =>
                        i.jsxs(
                          "span",
                          {
                            className:
                              f.CommerceTeamActionConfirmModal_actionWrap,
                            "data-slot":
                              "CommerceTeamActionConfirmModal_actionWrap",
                            children: [t, r],
                          },
                          e.key,
                        ),
                    }),
                  ),
                })
              : null,
          ],
        }),
      }),
    });
  }
  return null;
}
const tQ =
  require.j == "wl4"
    ? {
        root: "index_module_root3",
        text: "index_module_text3",
        image: "index_module_image3",
      }
    : null;
const tW =
  require.j == "wl4"
    ? [
        "CommerceTeamAvatar_root",
        "CommerceTeamAvatar_image",
        "CommerceTeamAvatar_text",
      ]
    : null;
function tU(e) {
  let t = e?.trim();
  if (!t) {
    return;
  }
  let r = t.match(
    /^(?:fill|background|background-image)\s*:\s*([\s\S]*?)\s*;?\s*$/i,
  );
  return r?.[1]?.trim() || t;
}
function useTq({
  avatarSlot,
  avatarUrl,
  avatarCrossOrigin,
  avatarAlt,
  avatarText,
  avatarColor,
  avatar,
  teamName,
  size,
  fontSize,
  slot = "CommerceTeamAvatar_root",
  imageSlot = "CommerceTeamAvatar_image",
  textSlot = "CommerceTeamAvatar_text",
  ariaHidden,
  className,
  classes,
  style,
}) {
  let g;
  let y;
  let w;
  let I = useB();
  let b = o.useMemo(() => R(tQ, I, classes), [I, classes]);
  if (avatarSlot) {
    return avatarSlot;
  }
  g = teamName;
  let j =
    (y = avatarText) != null
      ? y
      : typeof g === "string"
        ? ((w = g.trim()),
          typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"
            ? Array.from(
                new Intl.Segmenter(undefined, {
                  granularity: "grapheme",
                }).segment(w),
                ({ segment }) => segment,
              )[0]
            : Array.from(w)[0])
        : undefined;
  let background = tU(avatarColor ?? avatar);
  let P = ((e) => {
    if (e != null) {
      if (typeof e === "number") {
        return `${e}px`;
      }
      return e;
    }
  })(size);
  let x =
    background || P || fontSize != null || style
      ? {
          ...(background
            ? {
                background,
              }
            : undefined),
          ...(P
            ? {
                width: P,
                height: P,
              }
            : undefined),
          ...(fontSize != null
            ? {
                fontSize,
              }
            : undefined),
          ...style,
        }
      : undefined;
  return i.jsx("span", {
    className: a.A(b.CommerceTeamAvatar_root, className),
    "data-component": "CommerceTeamAvatar",
    "data-slot": slot,
    "data-slots": tW.join(","),
    style: x,
    "aria-hidden": ariaHidden ?? (!avatarUrl || undefined),
    children: avatarUrl
      ? i.jsx("img", {
          className: b.CommerceTeamAvatar_image,
          "data-slot": imageSlot,
          src: avatarUrl,
          crossOrigin: avatarCrossOrigin,
          alt: avatarAlt ?? "",
        })
      : j != null
        ? i.jsx("span", {
            className: b.CommerceTeamAvatar_text,
            "data-slot": textSlot,
            children: j,
          })
        : null,
  });
}
const tG =
  require.j == "wl4"
    ? {
        CommerceTeamStatusBlock_root:
          "index_module_CommerceTeamStatusBlock_root6",
        CommerceTeamStatusBlock_icon:
          "index_module_CommerceTeamStatusBlock_icon5",
        CommerceTeamStatusBlock_content:
          "index_module_CommerceTeamStatusBlock_content5",
        CommerceTeamStatusBlock_actions:
          "index_module_CommerceTeamStatusBlock_actions5",
        CommerceTeamStatusBlock_title:
          "index_module_CommerceTeamStatusBlock_title6",
        CommerceTeamStatusBlock_description:
          "index_module_CommerceTeamStatusBlock_description5",
        CommerceTeamStatusBlock_actionReason:
          "index_module_CommerceTeamStatusBlock_actionReason5",
        CommerceTeamStatusBlock_actionButton:
          "index_module_CommerceTeamStatusBlock_actionButton6",
      }
    : null;
const tV =
  require.j == "wl4"
    ? [
        "CommerceTeamStatusBlock_root",
        "CommerceTeamStatusBlock_icon",
        "CommerceTeamStatusBlock_content",
        "CommerceTeamStatusBlock_title",
        "CommerceTeamStatusBlock_description",
        "CommerceTeamStatusBlock_actions",
        "CommerceTeamStatusBlock_actionButton",
        "CommerceTeamStatusBlock_actionReason",
      ]
    : null;
function useTH({
  state,
  title,
  description,
  icon,
  actions,
  contentSlot,
  children,
  className,
  classes,
}) {
  let u = useB();
  let p = o.useMemo(() => R(tG, u, classes), [u, classes]);
  return i.jsxs("section", {
    className: a.A(p.CommerceTeamStatusBlock_root, className),
    "data-component": "CommerceTeamStatusBlock",
    "data-slot": "CommerceTeamStatusBlock_root",
    "data-slots": tV.join(","),
    "data-state": state,
    "aria-live": state === "loading" ? "polite" : undefined,
    children: [
      icon
        ? i.jsx("div", {
            className: p.CommerceTeamStatusBlock_icon,
            "data-slot": "CommerceTeamStatusBlock_icon",
            "aria-hidden": "true",
            children: icon,
          })
        : null,
      i.jsxs("div", {
        className: p.CommerceTeamStatusBlock_content,
        "data-slot": "CommerceTeamStatusBlock_content",
        children: [
          title
            ? i.jsx("div", {
                className: p.CommerceTeamStatusBlock_title,
                "data-slot": "CommerceTeamStatusBlock_title",
                children: title,
              })
            : null,
          description
            ? i.jsx("div", {
                className: p.CommerceTeamStatusBlock_description,
                "data-slot": "CommerceTeamStatusBlock_description",
                children: description,
              })
            : null,
          contentSlot,
          children,
        ],
      }),
      actions?.length
        ? i.jsx("div", {
            className: p.CommerceTeamStatusBlock_actions,
            "data-slot": "CommerceTeamStatusBlock_actions",
            children: actions.map((e) =>
              i.jsxs(
                "span",
                {
                  children: [
                    i.jsxs("button", {
                      type: "button",
                      className: p.CommerceTeamStatusBlock_actionButton,
                      "data-slot": "CommerceTeamStatusBlock_actionButton",
                      "data-variant": e.variant ?? "secondary",
                      "data-disabled": e.disabled ? "" : undefined,
                      "aria-label": e.ariaLabel,
                      disabled: e.disabled,
                      onClick: e.onClick,
                      children: [
                        e.icon,
                        i.jsx("span", {
                          children: e.label,
                        }),
                      ],
                    }),
                    e.reason
                      ? i.jsx("span", {
                          className: p.CommerceTeamStatusBlock_actionReason,
                          "data-slot": "CommerceTeamStatusBlock_actionReason",
                          children: e.reason,
                        })
                      : null,
                  ],
                },
                e.key,
              ),
            ),
          })
        : null,
    ],
  });
}
function useTz({
  slotPrefix,
  currentPage,
  totalPages,
  supportsPageJump,
  canGoPrevious,
  canGoNext,
  disabled,
  classes,
  texts,
  onPageChange,
}) {
  let [u, setU] = o.useState(String(currentPage));
  let CRef = o.useRef(false);
  let v = !!(disabled || !onPageChange);
  o.useEffect(() => {
    setU(String(currentPage));
  }, [currentPage]);
  return i.jsxs("div", {
    className: classes.pager,
    "data-slot": `${slotPrefix}_pager`,
    role: "navigation",
    children: [
      i.jsx("button", {
        type: "button",
        className: classes.button,
        "data-slot": `${slotPrefix}_pagerButton`,
        "data-direction": "prev",
        "aria-label": texts?.prev,
        disabled: v || !canGoPrevious,
        onClick: () => onPageChange?.(currentPage - 1),
        children: i.jsx(y.A, {
          size: 16,
          strokeWidth: 2,
          "aria-hidden": "true",
        }),
      }),
      i.jsx("span", {
        className: classes.label,
        "data-slot": `${slotPrefix}_pagerLabel`,
        "aria-live": "polite",
        children: supportsPageJump
          ? i.jsxs(i.Fragment, {
              children: [
                i.jsx("input", {
                  className: classes.input,
                  "data-slot": `${slotPrefix}_pagerInput`,
                  type: "text",
                  inputMode: "numeric",
                  "aria-label": texts?.jumpLabel,
                  style: {
                    width: `${Math.max(u.length, 1)}ch`,
                  },
                  value: u,
                  disabled: v,
                  onChange: (e) => setU(e.target.value.replace(/[^0-9]/g, "")),
                  onFocus: (e) => e.target.select(),
                  onBlur: () => {
                    if (CRef.current) {
                      CRef.current = false;
                      return;
                    }
                    (() => {
                      if (v || totalPages === undefined) {
                        return setU(String(currentPage));
                      }
                      let e = Number.parseInt(u, 10);
                      if (!Number.isNaN(e)) {
                        let a = Math.min(Math.max(e, 1), totalPages);
                        if (a !== currentPage) {
                          onPageChange?.(a);
                        }
                      }
                      setU(String(currentPage));
                    })();
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      e.currentTarget.blur();
                    } else if (e.key === "Escape") {
                      CRef.current = true;
                      setU(String(currentPage));
                      e.currentTarget.blur();
                    }
                  },
                }),
                i.jsxs("span", {
                  className: classes.total,
                  "data-slot": `${slotPrefix}_pagerTotal`,
                  children: ["/", totalPages],
                }),
              ],
            })
          : i.jsxs(i.Fragment, {
              children: [
                i.jsx("span", {
                  className: classes.current,
                  "data-slot": `${slotPrefix}_pagerCurrent`,
                  "aria-label": texts?.currentPageLabel,
                  children: currentPage,
                }),
                totalPages === undefined
                  ? null
                  : i.jsxs("span", {
                      className: classes.total,
                      "data-slot": `${slotPrefix}_pagerTotal`,
                      children: ["/", totalPages],
                    }),
              ],
            }),
      }),
      i.jsx("button", {
        type: "button",
        className: classes.button,
        "data-slot": `${slotPrefix}_pagerButton`,
        "data-direction": "next",
        "aria-label": texts?.next,
        disabled: v || !canGoNext,
        onClick: () => onPageChange?.(currentPage + 1),
        children: i.jsx(w.A, {
          size: 16,
          strokeWidth: 2,
          "aria-hidden": "true",
        }),
      }),
    ],
  });
}
function t$(e) {
  let pageSize =
    e.pageSize && e.pageSize > 0 ? Math.max(1, Math.floor(e.pageSize)) : 20;
  let r = e.mode === "local" ? e.itemCount : e.total;
  let totalPages =
    r === undefined ? undefined : Math.max(1, Math.ceil(r / pageSize));
  let o = Math.max(1, Math.floor(e.currentPage));
  let currentPage =
    e.mode === "local" && totalPages !== undefined
      ? Math.min(o, totalPages)
      : o;
  return {
    mode: e.mode,
    currentPage,
    pageSize,
    totalPages,
    showPager: r === undefined ? currentPage > 1 || !!e.hasMore : r > pageSize,
    canGoPrevious: currentPage > 1,
    canGoNext:
      e.mode === "controlled"
        ? (e.hasMore ?? (totalPages !== undefined && currentPage < totalPages))
        : totalPages !== undefined && currentPage < totalPages,
    supportsPageJump: e.mode === "local" && totalPages !== undefined,
  };
}
function tK(e, t) {
  if (t.mode === "controlled") {
    return e;
  }
  let r = (t.currentPage - 1) * t.pageSize;
  return e.slice(r, r + t.pageSize);
}
const tY =
  require.j == "wl4"
    ? {
        CommerceTeamAuditPanel_root:
          "index_module_CommerceTeamAuditPanel_root5",
        CommerceTeamAuditPanel_table:
          "index_module_CommerceTeamAuditPanel_table5",
        CommerceTeamAuditPanel_header:
          "index_module_CommerceTeamAuditPanel_header6",
        CommerceTeamAuditPanel_row: "index_module_CommerceTeamAuditPanel_row6",
        CommerceTeamAuditPanel_cell:
          "index_module_CommerceTeamAuditPanel_cell6",
        CommerceTeamAuditPanel_user:
          "index_module_CommerceTeamAuditPanel_user5",
        CommerceTeamAuditPanel_userAvatar:
          "index_module_CommerceTeamAuditPanel_userAvatar5",
        CommerceTeamAuditPanel_userBody:
          "index_module_CommerceTeamAuditPanel_userBody5",
        CommerceTeamAuditPanel_userNameRow:
          "index_module_CommerceTeamAuditPanel_userNameRow5",
        CommerceTeamAuditPanel_actions:
          "index_module_CommerceTeamAuditPanel_actions6",
        CommerceTeamAuditPanel_actionWrap:
          "index_module_CommerceTeamAuditPanel_actionWrap6",
        CommerceTeamAuditPanel_statusRegion:
          "index_module_CommerceTeamAuditPanel_statusRegion3",
        CommerceTeamAuditPanel_userAvatarImage:
          "index_module_CommerceTeamAuditPanel_userAvatarImage3",
        CommerceTeamAuditPanel_userName:
          "index_module_CommerceTeamAuditPanel_userName6",
        CommerceTeamAuditPanel_userDescription:
          "index_module_CommerceTeamAuditPanel_userDescription5",
        CommerceTeamAuditPanel_userMeta:
          "index_module_CommerceTeamAuditPanel_userMeta5",
        CommerceTeamAuditPanel_statusText:
          "index_module_CommerceTeamAuditPanel_statusText6",
        CommerceTeamAuditPanel_actionReason:
          "index_module_CommerceTeamAuditPanel_actionReason5",
        CommerceTeamAuditPanel_actionButton:
          "index_module_CommerceTeamAuditPanel_actionButton6",
        CommerceTeamAuditPanel_pager:
          "index_module_CommerceTeamAuditPanel_pager5",
        CommerceTeamAuditPanel_pagerButton:
          "index_module_CommerceTeamAuditPanel_pagerButton6",
        CommerceTeamAuditPanel_pagerLabel:
          "index_module_CommerceTeamAuditPanel_pagerLabel6",
        CommerceTeamAuditPanel_pagerTotal:
          "index_module_CommerceTeamAuditPanel_pagerTotal5",
        CommerceTeamAuditPanel_pagerCurrent:
          "index_module_CommerceTeamAuditPanel_pagerCurrent5",
        CommerceTeamAuditPanel_pagerInput:
          "index_module_CommerceTeamAuditPanel_pagerInput6",
      }
    : null;
const tZ =
  require.j == "wl4"
    ? [
        "CommerceTeamAuditPanel_root",
        "CommerceTeamAuditPanel_table",
        "CommerceTeamAuditPanel_header",
        "CommerceTeamAuditPanel_headerCell",
        "CommerceTeamAuditPanel_row",
        "CommerceTeamAuditPanel_cell",
        "CommerceTeamAuditPanel_user",
        "CommerceTeamAuditPanel_userAvatar",
        "CommerceTeamAuditPanel_userAvatarImage",
        "CommerceTeamAuditPanel_userAvatarText",
        "CommerceTeamAuditPanel_userBody",
        "CommerceTeamAuditPanel_userNameRow",
        "CommerceTeamAuditPanel_userName",
        "CommerceTeamAuditPanel_userBadge",
        "CommerceTeamAuditPanel_userDescription",
        "CommerceTeamAuditPanel_userMeta",
        "CommerceTeamAuditPanel_appliedAt",
        "CommerceTeamAuditPanel_statusText",
        "CommerceTeamAuditPanel_actions",
        "CommerceTeamAuditPanel_actionWrap",
        "CommerceTeamAuditPanel_actionButton",
        "CommerceTeamAuditPanel_actionReason",
        "CommerceTeamAuditPanel_rowSlot",
        "CommerceTeamAuditPanel_statusRegion",
        "CommerceTeamAuditPanel_pager",
        "CommerceTeamAuditPanel_pagerButton",
        "CommerceTeamAuditPanel_pagerLabel",
        "CommerceTeamAuditPanel_pagerInput",
        "CommerceTeamAuditPanel_pagerTotal",
        "CommerceTeamAuditPanel_pagerCurrent",
      ]
    : null;
const tX =
  require.j == "wl4"
    ? {
        user: "minmax(0, 2fr)",
        appliedAt: "minmax(0, 1fr)",
        status: "minmax(0, 0.8fr)",
        actions: "minmax(0, 1fr)",
      }
    : null;
function t0(e) {
  return e != null && e !== false;
}
function t4(e, t, r, o) {
  return i.jsx(
    "div",
    {
      className: a.A(r.CommerceTeamAuditPanel_cell, o),
      "data-slot": "CommerceTeamAuditPanel_cell",
      "data-column": e,
      role: "cell",
      children: t,
    },
    e,
  );
}
function useT1({
  approvals,
  loading,
  status,
  columnLabels,
  emptySlot,
  avatarCrossOrigin,
  pageSize = 20,
  currentPage,
  total,
  hasMore,
  pagerTexts,
  onPageChange,
  className,
  classes,
  statusBlockClasses,
}) {
  let h = useB();
  let S = o.useMemo(() => R(tY, h, classes), [h, classes]);
  let [g, setG] = o.useState(1);
  let w = currentPage !== undefined;
  let I = t$({
    mode: w ? "controlled" : "local",
    itemCount: approvals.length,
    currentPage: currentPage ?? g,
    pageSize,
    total,
    hasMore,
  });
  o.useEffect(() => {
    if (!(w || g === I.currentPage)) {
      setG(I.currentPage);
    }
  }, [w, g, I.currentPage]);
  let b = tK(approvals, I);
  let j = !!(loading && (!w || !approvals.length));
  let k = loading
    ? "loading"
    : (status?.state ?? (approvals.length ? "ready" : "empty"));
  let P =
    j || status || (!approvals.length && emptySlot)
      ? (status ?? {
          state: j ? "loading" : "empty",
          contentSlot: emptySlot,
        })
      : null;
  let x = [
    "user",
    "appliedAt",
    ...(t0(columnLabels?.status) || approvals.some((e) => t0(e.statusLabel))
      ? ["status"]
      : []),
    ...(t0(columnLabels?.actions) || approvals.some((e) => e.actions?.length)
      ? ["actions"]
      : []),
  ];
  let M = {
    gridTemplateColumns: x.map((e) => tX[e]).join(" "),
  };
  let A = x.join(",");
  return i.jsxs("section", {
    className: a.A(S.CommerceTeamAuditPanel_root, className),
    "data-component": "CommerceTeamAuditPanel",
    "data-slot": "CommerceTeamAuditPanel_root",
    "data-slots": tZ.join(","),
    "data-state": k,
    children: [
      P
        ? i.jsx("div", {
            className: S.CommerceTeamAuditPanel_statusRegion,
            "data-slot": "CommerceTeamAuditPanel_statusRegion",
            children: i.jsx(useTH, {
              ...P,
              classes: statusBlockClasses,
            }),
          })
        : i.jsxs("div", {
            className: S.CommerceTeamAuditPanel_table,
            "data-slot": "CommerceTeamAuditPanel_table",
            role: "table",
            children: [
              i.jsx("div", {
                className: S.CommerceTeamAuditPanel_header,
                "data-slot": "CommerceTeamAuditPanel_header",
                "data-columns": A,
                role: "row",
                style: M,
                children: x.map((e) => {
                  var t;
                  t = columnLabels?.[e];
                  return i.jsx(
                    "div",
                    {
                      className: a.A(
                        S.CommerceTeamAuditPanel_headerCell,
                        S.CommerceTeamAuditPanel_cell,
                      ),
                      "data-slot": "CommerceTeamAuditPanel_headerCell",
                      "data-column": e,
                      role: "columnheader",
                      children: t,
                    },
                    e,
                  );
                }),
              }),
              b.map((e) =>
                i.jsxs(
                  "div",
                  {
                    className: S.CommerceTeamAuditPanel_row,
                    "data-slot": "CommerceTeamAuditPanel_row",
                    "data-columns": A,
                    "data-status": e.status,
                    role: "row",
                    style: M,
                    children: [
                      x.map((t) =>
                        ((e, t, r, a) => {
                          switch (e) {
                            case "user":
                              let o;
                              return t4(
                                "user",
                                ((o = t.user),
                                i.jsxs("div", {
                                  className: r.CommerceTeamAuditPanel_user,
                                  "data-slot": "CommerceTeamAuditPanel_user",
                                  children: [
                                    ((e, t, r) => {
                                      if (e.avatarSlot) {
                                        return e.avatarSlot;
                                      }
                                      let a = e.avatarColor
                                        ? {
                                            backgroundColor: e.avatarColor,
                                          }
                                        : undefined;
                                      return i.jsx("span", {
                                        className:
                                          t.CommerceTeamAuditPanel_userAvatar,
                                        "data-slot":
                                          "CommerceTeamAuditPanel_userAvatar",
                                        style: a,
                                        "aria-hidden": e.avatarUrl
                                          ? undefined
                                          : "true",
                                        children: e.avatarUrl
                                          ? i.jsx("img", {
                                              className:
                                                t.CommerceTeamAuditPanel_userAvatarImage,
                                              "data-slot":
                                                "CommerceTeamAuditPanel_userAvatarImage",
                                              src: e.avatarUrl,
                                              crossOrigin:
                                                e.avatarCrossOrigin ?? r,
                                              alt: e.avatarAlt ?? "",
                                            })
                                          : i.jsx("span", {
                                              className:
                                                t.CommerceTeamAuditPanel_userAvatarText,
                                              "data-slot":
                                                "CommerceTeamAuditPanel_userAvatarText",
                                              children: e.avatarText,
                                            }),
                                      });
                                    })(o, r, a),
                                    i.jsxs("span", {
                                      className:
                                        r.CommerceTeamAuditPanel_userBody,
                                      "data-slot":
                                        "CommerceTeamAuditPanel_userBody",
                                      children: [
                                        i.jsxs("span", {
                                          className:
                                            r.CommerceTeamAuditPanel_userNameRow,
                                          "data-slot":
                                            "CommerceTeamAuditPanel_userNameRow",
                                          children: [
                                            i.jsx("span", {
                                              className:
                                                r.CommerceTeamAuditPanel_userName,
                                              "data-slot":
                                                "CommerceTeamAuditPanel_userName",
                                              children: o.name,
                                            }),
                                            o.badge
                                              ? i.jsx("span", {
                                                  className:
                                                    r.CommerceTeamAuditPanel_userBadge,
                                                  "data-slot":
                                                    "CommerceTeamAuditPanel_userBadge",
                                                  children: o.badge,
                                                })
                                              : null,
                                          ],
                                        }),
                                        o.description
                                          ? i.jsx("span", {
                                              className:
                                                r.CommerceTeamAuditPanel_userDescription,
                                              "data-slot":
                                                "CommerceTeamAuditPanel_userDescription",
                                              children: o.description,
                                            })
                                          : null,
                                        o.meta
                                          ? i.jsx("span", {
                                              className:
                                                r.CommerceTeamAuditPanel_userMeta,
                                              "data-slot":
                                                "CommerceTeamAuditPanel_userMeta",
                                              children: o.meta,
                                            })
                                          : null,
                                      ],
                                    }),
                                  ],
                                })),
                                r,
                              );
                            case "appliedAt":
                              return t4(
                                "appliedAt",
                                t.appliedAtText,
                                r,
                                r.CommerceTeamAuditPanel_appliedAt,
                              );
                            case "status":
                              return t4(
                                "status",
                                i.jsx("span", {
                                  className:
                                    r.CommerceTeamAuditPanel_statusText,
                                  "data-slot":
                                    "CommerceTeamAuditPanel_statusText",
                                  "data-status": t.status,
                                  children: t.statusLabel,
                                }),
                                r,
                              );
                            case "actions":
                              return t4(
                                "actions",
                                i.jsx("div", {
                                  className: r.CommerceTeamAuditPanel_actions,
                                  "data-slot": "CommerceTeamAuditPanel_actions",
                                  children: t.actions?.map((e) =>
                                    tL(e, {
                                      className:
                                        r.CommerceTeamAuditPanel_actionButton,
                                      reasonClassName:
                                        r.CommerceTeamAuditPanel_actionReason,
                                      slot: "CommerceTeamAuditPanel_actionButton",
                                      reasonSlot:
                                        "CommerceTeamAuditPanel_actionReason",
                                      wrap: (t, a) =>
                                        i.jsxs(
                                          "span",
                                          {
                                            className:
                                              r.CommerceTeamAuditPanel_actionWrap,
                                            "data-slot":
                                              "CommerceTeamAuditPanel_actionWrap",
                                            children: [t, a],
                                          },
                                          e.key,
                                        ),
                                    }),
                                  ),
                                }),
                                r,
                              );
                            default:
                              return null;
                          }
                        })(t, e, S, avatarCrossOrigin),
                      ),
                      e.rowSlot
                        ? i.jsx("div", {
                            className: S.CommerceTeamAuditPanel_rowSlot,
                            "data-slot": "CommerceTeamAuditPanel_rowSlot",
                            children: e.rowSlot,
                          })
                        : null,
                    ],
                  },
                  e.key,
                ),
              ),
            ],
          }),
      !P && I.showPager
        ? i.jsx(useTz, {
            slotPrefix: "CommerceTeamAuditPanel",
            currentPage: I.currentPage,
            totalPages: I.totalPages,
            supportsPageJump: I.supportsPageJump,
            canGoPrevious: I.canGoPrevious,
            canGoNext: I.canGoNext,
            disabled: loading,
            classes: {
              pager: S.CommerceTeamAuditPanel_pager,
              button: S.CommerceTeamAuditPanel_pagerButton,
              label: S.CommerceTeamAuditPanel_pagerLabel,
              input: S.CommerceTeamAuditPanel_pagerInput,
              total: S.CommerceTeamAuditPanel_pagerTotal,
              current: S.CommerceTeamAuditPanel_pagerCurrent,
            },
            texts: pagerTexts,
            onPageChange: (e) => {
              if (!loading) {
                if (w) {
                  return void onPageChange?.(e);
                }
                setG(e);
              }
            },
          })
        : null,
    ],
  });
}
const t5 =
  require.j == "wl4"
    ? {
        CommerceTeamCreditAdjustmentPanel_root:
          "index_module_CommerceTeamCreditAdjustmentPanel_root5",
        CommerceTeamCreditAdjustmentPanel_table:
          "index_module_CommerceTeamCreditAdjustmentPanel_table5",
        CommerceTeamCreditAdjustmentPanel_header:
          "index_module_CommerceTeamCreditAdjustmentPanel_header5",
        CommerceTeamCreditAdjustmentPanel_row:
          "index_module_CommerceTeamCreditAdjustmentPanel_row5",
        CommerceTeamCreditAdjustmentPanel_cell:
          "index_module_CommerceTeamCreditAdjustmentPanel_cell5",
        CommerceTeamCreditAdjustmentPanel_user:
          "index_module_CommerceTeamCreditAdjustmentPanel_user5",
        CommerceTeamCreditAdjustmentPanel_userAvatar:
          "index_module_CommerceTeamCreditAdjustmentPanel_userAvatar5",
        CommerceTeamCreditAdjustmentPanel_userBody:
          "index_module_CommerceTeamCreditAdjustmentPanel_userBody5",
        CommerceTeamCreditAdjustmentPanel_headerInfo:
          "index_module_CommerceTeamCreditAdjustmentPanel_headerInfo5",
        CommerceTeamCreditAdjustmentPanel_field:
          "index_module_CommerceTeamCreditAdjustmentPanel_field6",
        CommerceTeamCreditAdjustmentPanel_inputControl:
          "index_module_CommerceTeamCreditAdjustmentPanel_inputControl6",
        CommerceTeamCreditAdjustmentPanel_stepper:
          "index_module_CommerceTeamCreditAdjustmentPanel_stepper6",
        CommerceTeamCreditAdjustmentPanel_actions:
          "index_module_CommerceTeamCreditAdjustmentPanel_actions5",
        CommerceTeamCreditAdjustmentPanel_actionWrap:
          "index_module_CommerceTeamCreditAdjustmentPanel_actionWrap5",
        CommerceTeamCreditAdjustmentPanel_statusRegion:
          "index_module_CommerceTeamCreditAdjustmentPanel_statusRegion5",
        CommerceTeamCreditAdjustmentPanel_headerInfoButton:
          "index_module_CommerceTeamCreditAdjustmentPanel_headerInfoButton5",
        CommerceTeamCreditAdjustmentPanel_stepperButton:
          "index_module_CommerceTeamCreditAdjustmentPanel_stepperButton5",
        CommerceTeamCreditAdjustmentPanel_userAvatarImage:
          "index_module_CommerceTeamCreditAdjustmentPanel_userAvatarImage5",
        CommerceTeamCreditAdjustmentPanel_userName:
          "index_module_CommerceTeamCreditAdjustmentPanel_userName5",
        CommerceTeamCreditAdjustmentPanel_userDescription:
          "index_module_CommerceTeamCreditAdjustmentPanel_userDescription5",
        CommerceTeamCreditAdjustmentPanel_fieldError:
          "index_module_CommerceTeamCreditAdjustmentPanel_fieldError5",
        CommerceTeamCreditAdjustmentPanel_actionReason:
          "index_module_CommerceTeamCreditAdjustmentPanel_actionReason5",
        CommerceTeamCreditAdjustmentPanel_actionButton:
          "index_module_CommerceTeamCreditAdjustmentPanel_actionButton6",
        CommerceTeamCreditAdjustmentPanel_headerInfoTooltip:
          "index_module_CommerceTeamCreditAdjustmentPanel_headerInfoTooltip5",
        CommerceTeamCreditAdjustmentPanel_input:
          "index_module_CommerceTeamCreditAdjustmentPanel_input5",
        CommerceTeamCreditAdjustmentPanel_inputSuffix:
          "index_module_CommerceTeamCreditAdjustmentPanel_inputSuffix5",
        CommerceTeamCreditAdjustmentPanel_actionPlaceholder:
          "index_module_CommerceTeamCreditAdjustmentPanel_actionPlaceholder5",
        CommerceTeamCreditAdjustmentPanel_stepperIcon:
          "index_module_CommerceTeamCreditAdjustmentPanel_stepperIcon5",
        CommerceTeamCreditAdjustmentPanel_actionDivider:
          "index_module_CommerceTeamCreditAdjustmentPanel_actionDivider5",
        CommerceTeamCreditAdjustmentPanel_rowSlot:
          "index_module_CommerceTeamCreditAdjustmentPanel_rowSlot3",
      }
    : null;
const t6 =
  require.j == "wl4"
    ? [
        "CommerceTeamCreditAdjustmentPanel_root",
        "CommerceTeamCreditAdjustmentPanel_table",
        "CommerceTeamCreditAdjustmentPanel_header",
        "CommerceTeamCreditAdjustmentPanel_headerCell",
        "CommerceTeamCreditAdjustmentPanel_headerLabel",
        "CommerceTeamCreditAdjustmentPanel_headerInfo",
        "CommerceTeamCreditAdjustmentPanel_headerInfoButton",
        "CommerceTeamCreditAdjustmentPanel_headerInfoTooltip",
        "CommerceTeamCreditAdjustmentPanel_row",
        "CommerceTeamCreditAdjustmentPanel_cell",
        "CommerceTeamCreditAdjustmentPanel_user",
        "CommerceTeamCreditAdjustmentPanel_userAvatar",
        "CommerceTeamCreditAdjustmentPanel_userAvatarImage",
        "CommerceTeamCreditAdjustmentPanel_userAvatarText",
        "CommerceTeamCreditAdjustmentPanel_userBody",
        "CommerceTeamCreditAdjustmentPanel_userName",
        "CommerceTeamCreditAdjustmentPanel_userDescription",
        "CommerceTeamCreditAdjustmentPanel_role",
        "CommerceTeamCreditAdjustmentPanel_consumed",
        "CommerceTeamCreditAdjustmentPanel_beforeBalance",
        "CommerceTeamCreditAdjustmentPanel_field",
        "CommerceTeamCreditAdjustmentPanel_inputControl",
        "CommerceTeamCreditAdjustmentPanel_input",
        "CommerceTeamCreditAdjustmentPanel_inputSuffix",
        "CommerceTeamCreditAdjustmentPanel_fieldError",
        "CommerceTeamCreditAdjustmentPanel_stepper",
        "CommerceTeamCreditAdjustmentPanel_stepperButton",
        "CommerceTeamCreditAdjustmentPanel_stepperIcon",
        "CommerceTeamCreditAdjustmentPanel_actions",
        "CommerceTeamCreditAdjustmentPanel_actionWrap",
        "CommerceTeamCreditAdjustmentPanel_actionDivider",
        "CommerceTeamCreditAdjustmentPanel_actionButton",
        "CommerceTeamCreditAdjustmentPanel_actionReason",
        "CommerceTeamCreditAdjustmentPanel_actionPlaceholder",
        "CommerceTeamCreditAdjustmentPanel_rowSlot",
        "CommerceTeamCreditAdjustmentPanel_statusRegion",
      ]
    : null;
function t3(e) {
  return e != null && e !== false;
}
function t2(e, t, ref) {
  return i.jsxs(
    "span",
    {
      className: t.CommerceTeamCreditAdjustmentPanel_actionWrap,
      "data-slot": "CommerceTeamCreditAdjustmentPanel_actionWrap",
      children: [
        i.jsxs("button", {
          ref,
          type: "button",
          className: t.CommerceTeamCreditAdjustmentPanel_actionButton,
          "data-slot": "CommerceTeamCreditAdjustmentPanel_actionButton",
          "data-variant": e.variant ?? "link",
          "data-disabled": e.disabled ? "" : undefined,
          "aria-label": tN(e),
          disabled: e.disabled,
          onClick: e.onClick,
          children: [
            e.icon,
            i.jsx("span", {
              children: e.label,
            }),
          ],
        }),
        e.reason
          ? i.jsx("span", {
              className: t.CommerceTeamCreditAdjustmentPanel_actionReason,
              "data-slot": "CommerceTeamCreditAdjustmentPanel_actionReason",
              children: e.reason,
            })
          : null,
      ],
    },
    e.key,
  );
}
function useT9({
  field,
  fieldName,
  record,
  autoFocus,
  classes,
  decreaseAriaLabel,
  increaseAriaLabel,
  onChange,
  onStep,
  onKeyDown,
}) {
  let u = o.useId();
  let p = field.invalid ?? t3(field.error);
  let field_numericValue = field.numericValue;
  let f = (t) => {
    if (field_numericValue === undefined) {
      return undefined;
    }
    return ((e, t = -Infinity, r = Infinity) => Math.min(Math.max(e, t), r))(
      field_numericValue + 100 * t,
      field.min,
      field.max,
    );
  };
  let h = f(-1);
  let S = f(1);
  let g =
    field.disabled || !onStep || h === undefined || h === field_numericValue;
  let y =
    field.disabled || !onStep || S === undefined || S === field_numericValue;
  let w = field.disabled || !onChange;
  let I = i.jsx("input", {
    autoFocus,
    type: "text",
    inputMode: fieldName === "afterBalance" ? "numeric" : "text",
    className: classes.CommerceTeamCreditAdjustmentPanel_input,
    "data-slot": "CommerceTeamCreditAdjustmentPanel_input",
    "data-field": fieldName,
    value: field.value,
    placeholder:
      field.value === "" && field_numericValue !== undefined
        ? String(field_numericValue)
        : undefined,
    disabled: w,
    "aria-label": field.ariaLabel,
    "aria-invalid": p || undefined,
    "aria-describedby": t3(field.error) ? u : undefined,
    onFocus: () => {
      if (
        fieldName === "delta" &&
        field.value === "0" &&
        field_numericValue === 0
      ) {
        onChange?.("", record);
      }
    },
    onChange: (e) => onChange?.(e.target.value, record),
    onKeyDown,
  });
  let b = i.jsxs("span", {
    className: classes.CommerceTeamCreditAdjustmentPanel_inputControl,
    "data-slot": "CommerceTeamCreditAdjustmentPanel_inputControl",
    children: [
      I,
      t3(field.suffix)
        ? i.jsx("span", {
            className: classes.CommerceTeamCreditAdjustmentPanel_inputSuffix,
            "data-slot": "CommerceTeamCreditAdjustmentPanel_inputSuffix",
            children: field.suffix,
          })
        : null,
    ],
  });
  return i.jsxs("div", {
    className: classes.CommerceTeamCreditAdjustmentPanel_field,
    "data-slot": "CommerceTeamCreditAdjustmentPanel_field",
    "data-field": fieldName,
    "data-invalid": p ? "" : undefined,
    children: [
      fieldName === "delta"
        ? i.jsxs("div", {
            className: classes.CommerceTeamCreditAdjustmentPanel_stepper,
            "data-slot": "CommerceTeamCreditAdjustmentPanel_stepper",
            children: [
              i.jsx("button", {
                type: "button",
                className:
                  classes.CommerceTeamCreditAdjustmentPanel_stepperButton,
                "data-slot": "CommerceTeamCreditAdjustmentPanel_stepperButton",
                "aria-label": decreaseAriaLabel,
                disabled: g,
                onClick: () => {
                  if (h !== undefined) {
                    onStep?.(h, -1, record);
                  }
                },
                children: i.jsx(v.A, {
                  className:
                    classes.CommerceTeamCreditAdjustmentPanel_stepperIcon,
                  "data-slot": "CommerceTeamCreditAdjustmentPanel_stepperIcon",
                  "aria-hidden": "true",
                }),
              }),
              b,
              i.jsx("button", {
                type: "button",
                className:
                  classes.CommerceTeamCreditAdjustmentPanel_stepperButton,
                "data-slot": "CommerceTeamCreditAdjustmentPanel_stepperButton",
                "aria-label": increaseAriaLabel,
                disabled: y,
                onClick: () => {
                  if (S !== undefined) {
                    onStep?.(S, 1, record);
                  }
                },
                children: i.jsx(_.A, {
                  className:
                    classes.CommerceTeamCreditAdjustmentPanel_stepperIcon,
                  "data-slot": "CommerceTeamCreditAdjustmentPanel_stepperIcon",
                  "aria-hidden": "true",
                }),
              }),
            ],
          })
        : b,
      t3(field.error)
        ? i.jsx("span", {
            id: u,
            className: classes.CommerceTeamCreditAdjustmentPanel_fieldError,
            "data-slot": "CommerceTeamCreditAdjustmentPanel_fieldError",
            role: field.showInlineError === false ? undefined : "alert",
            "data-inline":
              field.showInlineError === false ? "false" : undefined,
            children: field.error,
          })
        : null,
    ],
  });
}
const t7 =
  require.j == "wl4"
    ? [
        "user",
        "role",
        "consumed",
        "beforeBalance",
        "afterBalance",
        "delta",
        "actions",
      ]
    : null;
function useT8({
  records,
  columnLabels,
  columns = t7,
  columnInfo,
  editingRow,
  editingRows,
  loading,
  status,
  emptySlot,
  emptyActionsText = "-",
  avatarCrossOrigin,
  decreaseAriaLabel = "Decrease by 100",
  increaseAriaLabel = "Increase by 100",
  onAfterBalanceChange,
  onDeltaChange,
  onDeltaStep,
  className,
  classes,
  statusBlockClasses,
}) {
  let I = useB();
  let b = o.useMemo(() => R(t5, I, classes), [I, classes]);
  let jRef = o.useRef(new Map());
  let kRef = o.useRef(editingRow?.key ?? null);
  let P = o.useMemo(
    () => new Map((editingRows ?? []).map((e) => [String(e.key), e])),
    [editingRows],
  );
  o.useEffect(() => {
    let kRef_current = kRef.current;
    let t = editingRow?.key ?? null;
    kRef.current = t;
    if (kRef_current !== null && t === null) {
      jRef.current.get(String(kRef_current))?.focus();
    }
  }, [editingRow?.key]);
  let x = loading
    ? "loading"
    : (status?.state ?? (records.length ? "ready" : "empty"));
  let M = columns.join(",");
  let A =
    M === "user,role,consumed,beforeBalance,actions" ||
    M === "user,role,consumed,beforeBalance,afterBalance,delta,actions";
  let gridTemplateColumns = o.useMemo(
    () =>
      columns
        .map((e) => {
          switch (e) {
            case "user":
              return "minmax(0, 0.86fr)";
            case "actions":
              return "minmax(0, 1.1fr)";
            default:
              return "minmax(0, 1fr)";
          }
        })
        .join(" "),
    [columns],
  );
  let E =
    loading || status || (!records.length && emptySlot)
      ? (status ?? {
          state: loading ? "loading" : "empty",
          contentSlot: emptySlot,
        })
      : null;
  let N = {
    role: b.CommerceTeamCreditAdjustmentPanel_role,
    consumed: b.CommerceTeamCreditAdjustmentPanel_consumed,
    beforeBalance: b.CommerceTeamCreditAdjustmentPanel_beforeBalance,
    actions: b.CommerceTeamCreditAdjustmentPanel_actions,
  };
  return i.jsx("section", {
    className: a.A(b.CommerceTeamCreditAdjustmentPanel_root, className),
    "data-component": "CommerceTeamCreditAdjustmentPanel",
    "data-slot": "CommerceTeamCreditAdjustmentPanel_root",
    "data-slots": t6.join(","),
    "data-state": x,
    "aria-busy": loading || undefined,
    children: E
      ? i.jsx("div", {
          className: b.CommerceTeamCreditAdjustmentPanel_statusRegion,
          "data-slot": "CommerceTeamCreditAdjustmentPanel_statusRegion",
          children: i.jsx(useTH, {
            ...E,
            classes: statusBlockClasses,
          }),
        })
      : i.jsxs("div", {
          className: b.CommerceTeamCreditAdjustmentPanel_table,
          "data-slot": "CommerceTeamCreditAdjustmentPanel_table",
          role: "table",
          children: [
            i.jsx("div", {
              className: b.CommerceTeamCreditAdjustmentPanel_header,
              "data-slot": "CommerceTeamCreditAdjustmentPanel_header",
              "data-columns": M,
              role: "row",
              style: A
                ? undefined
                : {
                    gridTemplateColumns,
                  },
              children: columns.map((e) => {
                var r;
                let o;
                return i.jsxs(
                  "div",
                  {
                    className: a.A(
                      b.CommerceTeamCreditAdjustmentPanel_headerCell,
                      b.CommerceTeamCreditAdjustmentPanel_cell,
                    ),
                    "data-slot": "CommerceTeamCreditAdjustmentPanel_headerCell",
                    "data-column": e,
                    role: "columnheader",
                    children: [
                      i.jsx("span", {
                        className:
                          b.CommerceTeamCreditAdjustmentPanel_headerLabel,
                        "data-slot":
                          "CommerceTeamCreditAdjustmentPanel_headerLabel",
                        children: columnLabels[e],
                      }),
                      columnInfo?.[e]
                        ? ((r = columnInfo[e]),
                          (o =
                            r.id ??
                            `commerce-team-credit-adjustment-${e}-info`),
                          i.jsxs("span", {
                            className:
                              b.CommerceTeamCreditAdjustmentPanel_headerInfo,
                            "data-slot":
                              "CommerceTeamCreditAdjustmentPanel_headerInfo",
                            children: [
                              i.jsx("button", {
                                type: "button",
                                className:
                                  b.CommerceTeamCreditAdjustmentPanel_headerInfoButton,
                                "data-slot":
                                  "CommerceTeamCreditAdjustmentPanel_headerInfoButton",
                                "aria-label": r.ariaLabel,
                                "aria-describedby": o,
                                children:
                                  r.icon ??
                                  i.jsx(h.A, {
                                    size: 16,
                                    strokeWidth: 1.8,
                                    "aria-hidden": "true",
                                  }),
                              }),
                              i.jsx("span", {
                                id: o,
                                className:
                                  b.CommerceTeamCreditAdjustmentPanel_headerInfoTooltip,
                                "data-slot":
                                  "CommerceTeamCreditAdjustmentPanel_headerInfoTooltip",
                                role: "tooltip",
                                children: r.content,
                              }),
                            ],
                          }))
                        : null,
                    ],
                  },
                  e,
                );
              }),
            }),
            records.map((record) => {
              var t;
              let o;
              let n =
                P.get(String(record.key)) ??
                (editingRow?.key === record.key ? editingRow : undefined);
              let l = !!n;
              let m = (e) => {
                if (e.key === "Escape") {
                  e.preventDefault();
                  n?.cancelAction.onClick?.();
                } else if (!(e.key !== "Enter" || n?.confirmAction.disabled)) {
                  e.preventDefault();
                  n?.confirmAction.onClick?.();
                }
              };
              let s = {
                user:
                  ((t = record.user),
                  (o =
                    t.avatarSlot ??
                    i.jsx("span", {
                      className: b.CommerceTeamCreditAdjustmentPanel_userAvatar,
                      "data-slot":
                        "CommerceTeamCreditAdjustmentPanel_userAvatar",
                      style: t.avatarColor
                        ? {
                            backgroundColor: t.avatarColor,
                          }
                        : undefined,
                      "aria-hidden": t.avatarUrl ? undefined : "true",
                      children: t.avatarUrl
                        ? i.jsx("img", {
                            className:
                              b.CommerceTeamCreditAdjustmentPanel_userAvatarImage,
                            "data-slot":
                              "CommerceTeamCreditAdjustmentPanel_userAvatarImage",
                            src: t.avatarUrl,
                            crossOrigin:
                              t.avatarCrossOrigin ?? avatarCrossOrigin,
                            alt: t.avatarAlt ?? "",
                          })
                        : i.jsx("span", {
                            className:
                              b.CommerceTeamCreditAdjustmentPanel_userAvatarText,
                            "data-slot":
                              "CommerceTeamCreditAdjustmentPanel_userAvatarText",
                            children: t.avatarText,
                          }),
                    })),
                  i.jsxs("div", {
                    className: b.CommerceTeamCreditAdjustmentPanel_user,
                    "data-slot": "CommerceTeamCreditAdjustmentPanel_user",
                    children: [
                      o,
                      i.jsxs("span", {
                        className: b.CommerceTeamCreditAdjustmentPanel_userBody,
                        "data-slot":
                          "CommerceTeamCreditAdjustmentPanel_userBody",
                        children: [
                          i.jsx("span", {
                            className:
                              b.CommerceTeamCreditAdjustmentPanel_userName,
                            "data-slot":
                              "CommerceTeamCreditAdjustmentPanel_userName",
                            children: t.name,
                          }),
                          t.description
                            ? i.jsx("span", {
                                className:
                                  b.CommerceTeamCreditAdjustmentPanel_userDescription,
                                "data-slot":
                                  "CommerceTeamCreditAdjustmentPanel_userDescription",
                                children: t.description,
                              })
                            : null,
                        ],
                      }),
                    ],
                  })),
                role: record.roleText,
                consumed: record.consumedText,
                beforeBalance: record.beforeBalanceText,
                afterBalance: n
                  ? i.jsx(useT9, {
                      field: n.afterBalance,
                      fieldName: "afterBalance",
                      record,
                      autoFocus:
                        n.autoFocusField !== false &&
                        n.autoFocusField !== "delta",
                      classes: b,
                      decreaseAriaLabel,
                      increaseAriaLabel,
                      onChange: onAfterBalanceChange,
                      onKeyDown: m,
                    })
                  : record.afterBalanceText,
                delta: n
                  ? i.jsx(useT9, {
                      field: n.delta,
                      fieldName: "delta",
                      record,
                      autoFocus: n.autoFocusField === "delta",
                      classes: b,
                      decreaseAriaLabel,
                      increaseAriaLabel,
                      onChange: onDeltaChange,
                      onStep: onDeltaStep,
                      onKeyDown: m,
                    })
                  : record.deltaText,
                actions: n
                  ? i.jsxs(i.Fragment, {
                      children: [
                        t2(n.confirmAction, b),
                        n.showCancelAction !== false
                          ? i.jsxs(i.Fragment, {
                              children: [
                                i.jsx("span", {
                                  "aria-hidden": "true",
                                  className:
                                    b.CommerceTeamCreditAdjustmentPanel_actionDivider,
                                  "data-slot":
                                    "CommerceTeamCreditAdjustmentPanel_actionDivider",
                                }),
                                t2(
                                  {
                                    ...n.cancelAction,
                                    variant:
                                      n.cancelAction.variant ?? "secondary",
                                  },
                                  b,
                                ),
                              ],
                            })
                          : null,
                      ],
                    })
                  : record.editAction
                    ? t2(record.editAction, b, (t) => {
                        let r = String(record.key);
                        if (t) {
                          jRef.current.set(r, t);
                        } else {
                          jRef.current.delete(r);
                        }
                      })
                    : t3(record.disabledReason)
                      ? i.jsx("span", {
                          className:
                            b.CommerceTeamCreditAdjustmentPanel_actionReason,
                          "data-slot":
                            "CommerceTeamCreditAdjustmentPanel_actionReason",
                          children: record.disabledReason,
                        })
                      : t3(emptyActionsText)
                        ? i.jsx("span", {
                            className:
                              b.CommerceTeamCreditAdjustmentPanel_actionPlaceholder,
                            "data-slot":
                              "CommerceTeamCreditAdjustmentPanel_actionPlaceholder",
                            children: emptyActionsText,
                          })
                        : null,
              };
              return i.jsxs(
                "div",
                {
                  className: b.CommerceTeamCreditAdjustmentPanel_row,
                  "data-slot": "CommerceTeamCreditAdjustmentPanel_row",
                  "data-columns": M,
                  "data-state": l ? "editing" : undefined,
                  role: "row",
                  style: A
                    ? undefined
                    : {
                        gridTemplateColumns,
                      },
                  children: [
                    columns.map((e) =>
                      i.jsx(
                        "div",
                        {
                          className: a.A(
                            b.CommerceTeamCreditAdjustmentPanel_cell,
                            N[e],
                          ),
                          "data-slot": "CommerceTeamCreditAdjustmentPanel_cell",
                          "data-column": e,
                          role: "cell",
                          children: s[e],
                        },
                        e,
                      ),
                    ),
                    record.rowSlot
                      ? i.jsx("div", {
                          className:
                            b.CommerceTeamCreditAdjustmentPanel_rowSlot,
                          "data-slot":
                            "CommerceTeamCreditAdjustmentPanel_rowSlot",
                          children: record.rowSlot,
                        })
                      : null,
                  ],
                },
                record.key,
              );
            }),
          ],
        }),
  });
}
const re =
  require.j == "wl4"
    ? {
        CommerceTeamCreditOverviewContent_root:
          "index_module_CommerceTeamCreditOverviewContent_root6",
        CommerceTeamCreditOverviewContent_ring:
          "index_module_CommerceTeamCreditOverviewContent_ring5",
        CommerceTeamCreditOverviewContent_ringText:
          "index_module_CommerceTeamCreditOverviewContent_ringText3",
        CommerceTeamCreditOverviewContent_details:
          "index_module_CommerceTeamCreditOverviewContent_details5",
        CommerceTeamCreditOverviewContent_total:
          "index_module_CommerceTeamCreditOverviewContent_total3",
        CommerceTeamCreditOverviewContent_totalLabelGroup:
          "index_module_CommerceTeamCreditOverviewContent_totalLabelGroup5",
        CommerceTeamCreditOverviewContent_totalInfo:
          "index_module_CommerceTeamCreditOverviewContent_totalInfo5",
        CommerceTeamCreditOverviewContent_metrics:
          "index_module_CommerceTeamCreditOverviewContent_metrics5",
        CommerceTeamCreditOverviewContent_metric:
          "index_module_CommerceTeamCreditOverviewContent_metric5",
        CommerceTeamCreditOverviewContent_status:
          "index_module_CommerceTeamCreditOverviewContent_status5",
        CommerceTeamCreditOverviewContent_ringSvg:
          "index_module_CommerceTeamCreditOverviewContent_ringSvg3",
        CommerceTeamCreditOverviewContent_ringSegment:
          "index_module_CommerceTeamCreditOverviewContent_ringSegment6",
        CommerceTeamCreditOverviewContent_ringTooltip:
          "index_module_CommerceTeamCreditOverviewContent_ringTooltip5",
        CommerceTeamCreditOverviewContent_ringTooltipRow:
          "index_module_CommerceTeamCreditOverviewContent_ringTooltipRow5",
        CommerceTeamCreditOverviewContent_ringTooltipMarker:
          "index_module_CommerceTeamCreditOverviewContent_ringTooltipMarker6",
        CommerceTeamCreditOverviewContent_ringTooltipLabel:
          "index_module_CommerceTeamCreditOverviewContent_ringTooltipLabel3",
        CommerceTeamCreditOverviewContent_totalInfoButton:
          "index_module_CommerceTeamCreditOverviewContent_totalInfoButton5",
        CommerceTeamCreditOverviewContent_totalInfoTooltip:
          "index_module_CommerceTeamCreditOverviewContent_totalInfoTooltip6",
        CommerceTeamCreditOverviewContent_metricMarker:
          "index_module_CommerceTeamCreditOverviewContent_metricMarker6",
      }
    : null;
const rt =
  require.j == "wl4"
    ? [
        "CommerceTeamCreditOverviewContent_root",
        "CommerceTeamCreditOverviewContent_ring",
        "CommerceTeamCreditOverviewContent_ringSvg",
        "CommerceTeamCreditOverviewContent_ringTrack",
        "CommerceTeamCreditOverviewContent_ringValue",
        "CommerceTeamCreditOverviewContent_ringSegment",
        "CommerceTeamCreditOverviewContent_ringText",
        "CommerceTeamCreditOverviewContent_ringValueText",
        "CommerceTeamCreditOverviewContent_ringLabel",
        "CommerceTeamCreditOverviewContent_ringTooltip",
        "CommerceTeamCreditOverviewContent_ringTooltipRow",
        "CommerceTeamCreditOverviewContent_ringTooltipMarker",
        "CommerceTeamCreditOverviewContent_ringTooltipLabel",
        "CommerceTeamCreditOverviewContent_ringTooltipValue",
        "CommerceTeamCreditOverviewContent_details",
        "CommerceTeamCreditOverviewContent_total",
        "CommerceTeamCreditOverviewContent_totalLabelGroup",
        "CommerceTeamCreditOverviewContent_totalLabel",
        "CommerceTeamCreditOverviewContent_totalValue",
        "CommerceTeamCreditOverviewContent_totalInfo",
        "CommerceTeamCreditOverviewContent_totalInfoButton",
        "CommerceTeamCreditOverviewContent_totalInfoTooltip",
        "CommerceTeamCreditOverviewContent_metrics",
        "CommerceTeamCreditOverviewContent_metric",
        "CommerceTeamCreditOverviewContent_metricMarker",
        "CommerceTeamCreditOverviewContent_metricLabel",
        "CommerceTeamCreditOverviewContent_metricValue",
        "CommerceTeamCreditOverviewContent_status",
      ]
    : null;
function rr(e, t) {
  let r = (e) => {
    let t = (e / 100) * Math.PI * 2;
    return `${44 + 37.5 * Math.sin(t)} ${44 - 37.5 * Math.cos(t)}`;
  };
  if (t - e >= 100) {
    return `M ${r(0)} A 37.5 37.5 0 1 1 ${r(50)} A 37.5 37.5 0 1 1 ${r(0)} Z`;
  }
  return `M ${r(e)} A 37.5 37.5 0 ${+(t - e > 50)} 1 ${r(t)}`;
}
function ra(e, t, r) {
  return i.jsxs("div", {
    className: t.CommerceTeamCreditOverviewContent_metric,
    "data-slot": "CommerceTeamCreditOverviewContent_metric",
    "data-missing": e.value == null ? "" : undefined,
    children: [
      i.jsx("span", {
        className: t.CommerceTeamCreditOverviewContent_metricMarker,
        "data-slot": "CommerceTeamCreditOverviewContent_metricMarker",
        "data-kind": r,
        "aria-hidden": "true",
        children: e.markerSlot,
      }),
      i.jsx("span", {
        className: t.CommerceTeamCreditOverviewContent_metricLabel,
        "data-slot": "CommerceTeamCreditOverviewContent_metricLabel",
        children: e.label,
      }),
      i.jsx("span", {
        className: t.CommerceTeamCreditOverviewContent_metricValue,
        "data-slot": "CommerceTeamCreditOverviewContent_metricValue",
        children: e.valueText,
      }),
    ],
  });
}
function useRo({
  total,
  allocatable,
  allocated,
  consumed,
  segments,
  ratio,
  loading,
  empty,
  loadingSlot,
  emptySlot,
  className,
  classes,
}) {
  let v = useB();
  let _ = o.useMemo(() => R(re, v, classes), [v, classes]);
  let f = ratio.value == null;
  let S = ratio.value ?? 0;
  let g = o.useId();
  let [y, setY] = o.useState(null);
  let I =
    segments && consumed && allocated
      ? [
          {
            kind: "consumed",
            metric: consumed,
            percentage: segments.consumed,
          },
          {
            kind: "allocated",
            metric: allocated,
            percentage: segments.allocated,
          },
          {
            kind: "allocatable",
            metric: allocatable,
            percentage: segments.allocatable,
          },
        ]
      : [];
  let b = [...I].reverse();
  let j = 0;
  return i.jsx("div", {
    className: a.A(_.CommerceTeamCreditOverviewContent_root, className),
    "data-component": "CommerceTeamCreditOverviewContent",
    "data-slot": "CommerceTeamCreditOverviewContent_root",
    "data-slots": rt.join(","),
    "data-state": loading ? "loading" : empty ? "empty" : "ready",
    "aria-busy": loading || undefined,
    children: empty
      ? i.jsx("div", {
          className: _.CommerceTeamCreditOverviewContent_status,
          "data-slot": "CommerceTeamCreditOverviewContent_status",
          children: emptySlot,
        })
      : loading && loadingSlot
        ? i.jsx("div", {
            className: _.CommerceTeamCreditOverviewContent_status,
            "data-slot": "CommerceTeamCreditOverviewContent_status",
            children: loadingSlot,
          })
        : i.jsxs(i.Fragment, {
            children: [
              i.jsxs("div", {
                className: _.CommerceTeamCreditOverviewContent_ring,
                "data-slot": "CommerceTeamCreditOverviewContent_ring",
                "data-missing": f ? "" : undefined,
                children: [
                  i.jsxs("svg", {
                    className: _.CommerceTeamCreditOverviewContent_ringSvg,
                    "data-slot": "CommerceTeamCreditOverviewContent_ringSvg",
                    viewBox: "0 0 88 88",
                    role: "progressbar",
                    "aria-label": ratio.accessibleText,
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": f ? undefined : S,
                    "aria-describedby": I.length ? g : undefined,
                    tabIndex: 0,
                    children: [
                      i.jsx("circle", {
                        className:
                          _.CommerceTeamCreditOverviewContent_ringTrack,
                        "data-slot":
                          "CommerceTeamCreditOverviewContent_ringTrack",
                        cx: 44,
                        cy: 44,
                        r: 37.5,
                        pathLength: "100",
                        fill: "none",
                        "aria-hidden": "true",
                      }),
                      I.length
                        ? I.map(({ kind, metric, percentage }) => {
                            let a = Math.min(Math.max(j, 0), 100);
                            let o = Math.min(
                              Math.max((j += percentage), a),
                              100,
                            );
                            if (o > a) {
                              return i.jsx(
                                "path",
                                {
                                  className:
                                    _.CommerceTeamCreditOverviewContent_ringSegment,
                                  "data-slot":
                                    "CommerceTeamCreditOverviewContent_ringSegment",
                                  "data-kind": kind,
                                  d: rr(a, o),
                                  fill: "none",
                                  role: "img",
                                  "aria-label":
                                    metric.accessibleText ??
                                    `${typeof metric.label === "string" ? metric.label : ""} ${metric.value ?? ""}`,
                                  tabIndex: 0,
                                  onMouseEnter: () => setY(kind),
                                  onMouseLeave: () => setY(null),
                                  onFocus: () => setY(kind),
                                  onBlur: () => setY(null),
                                },
                                kind,
                              );
                            }
                            return null;
                          })
                        : !f &&
                          S > 0 &&
                          i.jsx("path", {
                            className:
                              _.CommerceTeamCreditOverviewContent_ringValue,
                            "data-slot":
                              "CommerceTeamCreditOverviewContent_ringValue",
                            d: rr(0, Math.min(S, 100)),
                            fill: "none",
                            "aria-hidden": "true",
                          }),
                    ],
                  }),
                  i.jsxs("span", {
                    className: _.CommerceTeamCreditOverviewContent_ringText,
                    "data-slot": "CommerceTeamCreditOverviewContent_ringText",
                    "aria-hidden": "true",
                    children: [
                      i.jsx("span", {
                        className:
                          _.CommerceTeamCreditOverviewContent_ringValueText,
                        "data-slot":
                          "CommerceTeamCreditOverviewContent_ringValueText",
                        children: ratio.valueText,
                      }),
                      i.jsx("span", {
                        className:
                          _.CommerceTeamCreditOverviewContent_ringLabel,
                        "data-slot":
                          "CommerceTeamCreditOverviewContent_ringLabel",
                        children: ratio.label,
                      }),
                    ],
                  }),
                  I.length
                    ? i.jsx("div", {
                        id: g,
                        className:
                          _.CommerceTeamCreditOverviewContent_ringTooltip,
                        "data-slot":
                          "CommerceTeamCreditOverviewContent_ringTooltip",
                        role: "tooltip",
                        children: b
                          .filter(({ kind }) => !y || y === kind)
                          .map(({ kind, metric }) =>
                            i.jsxs(
                              "div",
                              {
                                className:
                                  _.CommerceTeamCreditOverviewContent_ringTooltipRow,
                                "data-slot":
                                  "CommerceTeamCreditOverviewContent_ringTooltipRow",
                                children: [
                                  i.jsx("span", {
                                    className:
                                      _.CommerceTeamCreditOverviewContent_ringTooltipMarker,
                                    "data-slot":
                                      "CommerceTeamCreditOverviewContent_ringTooltipMarker",
                                    "data-kind": kind,
                                    "aria-hidden": "true",
                                  }),
                                  i.jsx("span", {
                                    className:
                                      _.CommerceTeamCreditOverviewContent_ringTooltipLabel,
                                    "data-slot":
                                      "CommerceTeamCreditOverviewContent_ringTooltipLabel",
                                    children: metric.label,
                                  }),
                                  i.jsx("span", {
                                    className:
                                      _.CommerceTeamCreditOverviewContent_ringTooltipValue,
                                    "data-slot":
                                      "CommerceTeamCreditOverviewContent_ringTooltipValue",
                                    children:
                                      metric.tooltipValueText ??
                                      metric.valueText,
                                  }),
                                ],
                              },
                              kind,
                            ),
                          ),
                      })
                    : null,
                ],
              }),
              i.jsxs("div", {
                className: _.CommerceTeamCreditOverviewContent_details,
                "data-slot": "CommerceTeamCreditOverviewContent_details",
                children: [
                  i.jsx("div", {
                    className: _.CommerceTeamCreditOverviewContent_total,
                    "data-slot": "CommerceTeamCreditOverviewContent_total",
                    "data-missing": total.value == null ? "" : undefined,
                    children: i.jsxs("span", {
                      className:
                        _.CommerceTeamCreditOverviewContent_totalLabelGroup,
                      "data-slot":
                        "CommerceTeamCreditOverviewContent_totalLabelGroup",
                      children: [
                        i.jsx("span", {
                          className:
                            _.CommerceTeamCreditOverviewContent_totalLabel,
                          "data-slot":
                            "CommerceTeamCreditOverviewContent_totalLabel",
                          children: total.label,
                        }),
                        i.jsx("span", {
                          className:
                            _.CommerceTeamCreditOverviewContent_totalValue,
                          "data-slot":
                            "CommerceTeamCreditOverviewContent_totalValue",
                          children: total.valueText,
                        }),
                        ((e, t) => {
                          if (!e) {
                            return null;
                          }
                          let r =
                            e.id ?? "commerce-team-credit-overview-total-info";
                          return i.jsxs("span", {
                            className:
                              t.CommerceTeamCreditOverviewContent_totalInfo,
                            "data-slot":
                              "CommerceTeamCreditOverviewContent_totalInfo",
                            children: [
                              i.jsx("button", {
                                type: "button",
                                className:
                                  t.CommerceTeamCreditOverviewContent_totalInfoButton,
                                "data-slot":
                                  "CommerceTeamCreditOverviewContent_totalInfoButton",
                                "aria-label": e.ariaLabel,
                                "aria-describedby": r,
                                children:
                                  e.icon ??
                                  i.jsx(h.A, {
                                    size: 16,
                                    strokeWidth: 1.8,
                                    "aria-hidden": "true",
                                  }),
                              }),
                              i.jsx("span", {
                                id: r,
                                className:
                                  t.CommerceTeamCreditOverviewContent_totalInfoTooltip,
                                "data-slot":
                                  "CommerceTeamCreditOverviewContent_totalInfoTooltip",
                                role: "tooltip",
                                children: e.content,
                              }),
                            ],
                          });
                        })(total.info, _),
                      ],
                    }),
                  }),
                  i.jsxs("div", {
                    className: _.CommerceTeamCreditOverviewContent_metrics,
                    "data-slot": "CommerceTeamCreditOverviewContent_metrics",
                    children: [
                      ra(allocatable, _, "allocatable"),
                      allocated ? ra(allocated, _, "allocated") : null,
                    ],
                  }),
                ],
              }),
            ],
          }),
  });
}
const ri =
  require.j == "wl4"
    ? {
        CommerceTeamInviteDialog_root:
          "index_module_CommerceTeamInviteDialog_root6",
        CommerceTeamInviteDialog_panel:
          "index_module_CommerceTeamInviteDialog_panel6",
        CommerceTeamInviteDialog_header:
          "index_module_CommerceTeamInviteDialog_header5",
        CommerceTeamInviteDialog_titleGroup:
          "index_module_CommerceTeamInviteDialog_titleGroup5",
        CommerceTeamInviteDialog_seat:
          "index_module_CommerceTeamInviteDialog_seat6",
        CommerceTeamInviteDialog_seatHeader:
          "index_module_CommerceTeamInviteDialog_seatHeader5",
        CommerceTeamInviteDialog_seatProgress:
          "index_module_CommerceTeamInviteDialog_seatProgress5",
        CommerceTeamInviteDialog_linkRow:
          "index_module_CommerceTeamInviteDialog_linkRow6",
        CommerceTeamInviteDialog_linkField:
          "index_module_CommerceTeamInviteDialog_linkField5",
        CommerceTeamInviteDialog_linkMain:
          "index_module_CommerceTeamInviteDialog_linkMain5",
        CommerceTeamInviteDialog_actions:
          "index_module_CommerceTeamInviteDialog_actions5",
        CommerceTeamInviteDialog_actionWrap:
          "index_module_CommerceTeamInviteDialog_actionWrap5",
        CommerceTeamInviteDialog_statusRegion:
          "index_module_CommerceTeamInviteDialog_statusRegion3",
        CommerceTeamInviteDialog_footer:
          "index_module_CommerceTeamInviteDialog_footer5",
        CommerceTeamInviteDialog_seatAction:
          "index_module_CommerceTeamInviteDialog_seatAction6",
        CommerceTeamInviteDialog_closeButton:
          "index_module_CommerceTeamInviteDialog_closeButton6",
        CommerceTeamInviteDialog_actionButton:
          "index_module_CommerceTeamInviteDialog_actionButton6",
        CommerceTeamInviteDialog_linkValue:
          "index_module_CommerceTeamInviteDialog_linkValue6",
        CommerceTeamInviteDialog_seatProgressBar:
          "index_module_CommerceTeamInviteDialog_seatProgressBar6",
      }
    : null;
const rn =
  require.j == "wl4"
    ? [
        "CommerceTeamInviteDialog_modal",
        "CommerceTeamInviteDialog_root",
        "CommerceTeamInviteDialog_panel",
        "CommerceTeamInviteDialog_header",
        "CommerceTeamInviteDialog_titleGroup",
        "CommerceTeamInviteDialog_title",
        "CommerceTeamInviteDialog_description",
        "CommerceTeamInviteDialog_closeButton",
        "CommerceTeamInviteDialog_seat",
        "CommerceTeamInviteDialog_seatHeader",
        "CommerceTeamInviteDialog_seatText",
        "CommerceTeamInviteDialog_seatMeta",
        "CommerceTeamInviteDialog_seatAction",
        "CommerceTeamInviteDialog_seatProgress",
        "CommerceTeamInviteDialog_seatProgressBar",
        "CommerceTeamInviteDialog_linkRow",
        "CommerceTeamInviteDialog_linkField",
        "CommerceTeamInviteDialog_linkMain",
        "CommerceTeamInviteDialog_linkLabel",
        "CommerceTeamInviteDialog_linkValue",
        "CommerceTeamInviteDialog_actions",
        "CommerceTeamInviteDialog_actionWrap",
        "CommerceTeamInviteDialog_actionButton",
        "CommerceTeamInviteDialog_actionReason",
        "CommerceTeamInviteDialog_statusRegion",
        "CommerceTeamInviteDialog_footer",
      ]
    : null;
function useRc({
  open = true,
  title,
  description,
  seat,
  linkLabel,
  inviteLink,
  copyAction,
  refreshAction,
  increaseSeatAction,
  closeAction,
  status,
  footerSlot,
  className,
  classes,
  statusBlockClasses,
}) {
  let S = useB();
  let g = o.useMemo(() => R(ri, S, classes), [S, classes]);
  let y = ((e) => {
    if (e?.total && !(e.total <= 0) && e.used != null) {
      return Math.max(0, Math.min(100, (e.used / e.total) * 100));
    }
  })(seat);
  let w = y != null;
  let I = w
    ? {
        width: `${y}%`,
      }
    : undefined;
  let b =
    status?.state ??
    (seat?.total && seat.used != null && seat.used >= seat.total
      ? "seat-full"
      : "ready");
  let j = [
    refreshAction,
    seat ? undefined : increaseSeatAction,
    inviteLink == null ? copyAction : undefined,
  ].filter(Boolean);
  let k = a.A(g.CommerceTeamInviteDialog_modal, className);
  if (open) {
    return i.jsx(u.A, {
      visible: open,
      onCancel: closeAction?.onClick,
      "data-component": "CommerceTeamInviteDialog",
      "data-slot": "CommerceTeamInviteDialog_modal",
      "data-slots": rn.join(","),
      "data-state": b,
      footer: null,
      maskClosable: true,
      closable: false,
      focusLock: true,
      autoFocus: true,
      escToExit: true,
      ariaModal: true,
      unmountOnExit: true,
      className: k,
      wrapClassName: k,
      style: {
        width: "auto",
        maxWidth: "90vw",
      },
      children: i.jsx("section", {
        className: a.A(g.CommerceTeamInviteDialog_root, className),
        "data-component": "CommerceTeamInviteDialog",
        "data-slot": "CommerceTeamInviteDialog_root",
        "data-slots": rn.join(","),
        "data-state": b,
        children: i.jsxs("div", {
          className: g.CommerceTeamInviteDialog_panel,
          "data-slot": "CommerceTeamInviteDialog_panel",
          children: [
            i.jsxs("header", {
              className: g.CommerceTeamInviteDialog_header,
              "data-slot": "CommerceTeamInviteDialog_header",
              children: [
                i.jsxs("div", {
                  className: g.CommerceTeamInviteDialog_titleGroup,
                  "data-slot": "CommerceTeamInviteDialog_titleGroup",
                  children: [
                    title
                      ? i.jsx("h2", {
                          className: g.CommerceTeamInviteDialog_title,
                          "data-slot": "CommerceTeamInviteDialog_title",
                          children: title,
                        })
                      : null,
                    description
                      ? i.jsx("div", {
                          className: g.CommerceTeamInviteDialog_description,
                          "data-slot": "CommerceTeamInviteDialog_description",
                          children: description,
                        })
                      : null,
                  ],
                }),
                closeAction
                  ? i.jsxs("button", {
                      type: "button",
                      className: g.CommerceTeamInviteDialog_closeButton,
                      "data-slot": "CommerceTeamInviteDialog_closeButton",
                      "aria-label": tN(closeAction),
                      disabled: closeAction.disabled,
                      onClick: closeAction.onClick,
                      children: [
                        closeAction.icon,
                        i.jsx("span", {
                          children: closeAction.label,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            status
              ? i.jsx("div", {
                  className: g.CommerceTeamInviteDialog_statusRegion,
                  "data-slot": "CommerceTeamInviteDialog_statusRegion",
                  children: i.jsx(useTH, {
                    ...status,
                    classes: statusBlockClasses,
                  }),
                })
              : null,
            seat
              ? i.jsxs("div", {
                  className: g.CommerceTeamInviteDialog_seat,
                  "data-slot": "CommerceTeamInviteDialog_seat",
                  children: [
                    i.jsxs("div", {
                      className: g.CommerceTeamInviteDialog_seatHeader,
                      "data-slot": "CommerceTeamInviteDialog_seatHeader",
                      children: [
                        i.jsx("span", {
                          className: g.CommerceTeamInviteDialog_seatText,
                          "data-slot": "CommerceTeamInviteDialog_seatText",
                          children: seat.availableText,
                        }),
                        increaseSeatAction
                          ? tL(increaseSeatAction, {
                              className: g.CommerceTeamInviteDialog_seatAction,
                              slot: "CommerceTeamInviteDialog_seatAction",
                              fallbackVariant: "link",
                            })
                          : seat.progressLabel
                            ? i.jsx("span", {
                                className: g.CommerceTeamInviteDialog_seatMeta,
                                "data-slot":
                                  "CommerceTeamInviteDialog_seatMeta",
                                children: seat.progressLabel,
                              })
                            : null,
                      ],
                    }),
                    w
                      ? i.jsx("div", {
                          className: g.CommerceTeamInviteDialog_seatProgress,
                          "data-slot": "CommerceTeamInviteDialog_seatProgress",
                          role: "progressbar",
                          "aria-valuemin": 0,
                          "aria-valuemax": seat.total,
                          "aria-valuenow": seat.used,
                          children: i.jsx("span", {
                            className:
                              g.CommerceTeamInviteDialog_seatProgressBar,
                            "data-slot":
                              "CommerceTeamInviteDialog_seatProgressBar",
                            style: I,
                          }),
                        })
                      : null,
                    seat.description
                      ? i.jsx("div", {
                          className: g.CommerceTeamInviteDialog_seatMeta,
                          "data-slot": "CommerceTeamInviteDialog_seatMeta",
                          children: seat.description,
                        })
                      : null,
                  ],
                })
              : null,
            inviteLink != null
              ? i.jsxs("div", {
                  className: g.CommerceTeamInviteDialog_linkRow,
                  "data-slot": "CommerceTeamInviteDialog_linkRow",
                  children: [
                    i.jsx("div", {
                      className: g.CommerceTeamInviteDialog_linkField,
                      "data-slot": "CommerceTeamInviteDialog_linkField",
                      children: i.jsxs("div", {
                        className: g.CommerceTeamInviteDialog_linkMain,
                        "data-slot": "CommerceTeamInviteDialog_linkMain",
                        children: [
                          linkLabel
                            ? i.jsx("div", {
                                className: g.CommerceTeamInviteDialog_linkLabel,
                                "data-slot":
                                  "CommerceTeamInviteDialog_linkLabel",
                                children: linkLabel,
                              })
                            : null,
                          i.jsx("div", {
                            className: g.CommerceTeamInviteDialog_linkValue,
                            "data-slot": "CommerceTeamInviteDialog_linkValue",
                            children: inviteLink,
                          }),
                        ],
                      }),
                    }),
                    copyAction
                      ? tL(copyAction, {
                          className: g.CommerceTeamInviteDialog_actionButton,
                          reasonClassName:
                            g.CommerceTeamInviteDialog_actionReason,
                          slot: "CommerceTeamInviteDialog_actionButton",
                          reasonSlot: "CommerceTeamInviteDialog_actionReason",
                          fallbackVariant: "primary",
                          wrap: (e, t) =>
                            i.jsxs(
                              "span",
                              {
                                className:
                                  g.CommerceTeamInviteDialog_actionWrap,
                                "data-slot":
                                  "CommerceTeamInviteDialog_actionWrap",
                                children: [e, t],
                              },
                              copyAction.key,
                            ),
                        })
                      : null,
                  ],
                })
              : null,
            j.length
              ? i.jsx("div", {
                  className: g.CommerceTeamInviteDialog_actions,
                  "data-slot": "CommerceTeamInviteDialog_actions",
                  children: j.map((e) =>
                    tL(e, {
                      className: g.CommerceTeamInviteDialog_actionButton,
                      reasonClassName: g.CommerceTeamInviteDialog_actionReason,
                      slot: "CommerceTeamInviteDialog_actionButton",
                      reasonSlot: "CommerceTeamInviteDialog_actionReason",
                      wrap: (t, r) =>
                        i.jsxs(
                          "span",
                          {
                            className: g.CommerceTeamInviteDialog_actionWrap,
                            "data-slot": "CommerceTeamInviteDialog_actionWrap",
                            children: [t, r],
                          },
                          e.key,
                        ),
                    }),
                  ),
                })
              : null,
            footerSlot
              ? i.jsx("footer", {
                  className: g.CommerceTeamInviteDialog_footer,
                  "data-slot": "CommerceTeamInviteDialog_footer",
                  children: footerSlot,
                })
              : null,
          ],
        }),
      }),
    });
  }
  return null;
}
const rl =
  require.j == "wl4"
    ? {
        CommerceTeamInviteJoinCard_root:
          "index_module_CommerceTeamInviteJoinCard_root5",
        CommerceTeamInviteJoinCard_header:
          "index_module_CommerceTeamInviteJoinCard_header5",
        CommerceTeamInviteJoinCard_titleRow:
          "index_module_CommerceTeamInviteJoinCard_titleRow5",
        CommerceTeamInviteJoinCard_team:
          "index_module_CommerceTeamInviteJoinCard_team5",
        CommerceTeamInviteJoinCard_avatar:
          "index_module_CommerceTeamInviteJoinCard_avatar5",
        CommerceTeamInviteJoinCard_teamBody:
          "index_module_CommerceTeamInviteJoinCard_teamBody5",
        CommerceTeamInviteJoinCard_actions:
          "index_module_CommerceTeamInviteJoinCard_actions5",
        CommerceTeamInviteJoinCard_actionWrap:
          "index_module_CommerceTeamInviteJoinCard_actionWrap3",
        CommerceTeamInviteJoinCard_title:
          "index_module_CommerceTeamInviteJoinCard_title5",
        CommerceTeamInviteJoinCard_teamName:
          "index_module_CommerceTeamInviteJoinCard_teamName5",
        CommerceTeamInviteJoinCard_teamRole:
          "index_module_CommerceTeamInviteJoinCard_teamRole5",
        CommerceTeamInviteJoinCard_actionReason:
          "index_module_CommerceTeamInviteJoinCard_actionReason3",
        CommerceTeamInviteJoinCard_closeButton:
          "index_module_CommerceTeamInviteJoinCard_closeButton6",
        CommerceTeamInviteJoinCard_actionButton:
          "index_module_CommerceTeamInviteJoinCard_actionButton6",
        CommerceTeamInviteJoinCard_avatarImage:
          "index_module_CommerceTeamInviteJoinCard_avatarImage3",
      }
    : null;
const rm =
  require.j == "wl4"
    ? [
        "CommerceTeamInviteJoinCard_modal",
        "CommerceTeamInviteJoinCard_root",
        "CommerceTeamInviteJoinCard_header",
        "CommerceTeamInviteJoinCard_titleRow",
        "CommerceTeamInviteJoinCard_title",
        "CommerceTeamInviteJoinCard_closeButton",
        "CommerceTeamInviteJoinCard_team",
        "CommerceTeamInviteJoinCard_avatar",
        "CommerceTeamInviteJoinCard_avatarImage",
        "CommerceTeamInviteJoinCard_avatarText",
        "CommerceTeamInviteJoinCard_teamBody",
        "CommerceTeamInviteJoinCard_teamName",
        "CommerceTeamInviteJoinCard_teamRole",
        "CommerceTeamInviteJoinCard_actions",
        "CommerceTeamInviteJoinCard_actionWrap",
        "CommerceTeamInviteJoinCard_actionButton",
        "CommerceTeamInviteJoinCard_actionReason",
      ]
    : null;
function useRs({
  open = true,
  joinState = "ready",
  title,
  teamName,
  role,
  avatarSlot,
  avatarUrl,
  avatarCrossOrigin,
  avatarAlt,
  avatarText,
  avatar,
  avatarColor,
  closeAction,
  joinAction,
  joinButtonTexts,
  className,
  classes,
}) {
  let y = useB();
  let w = o.useMemo(() => R(rl, y, classes), [y, classes]);
  let label = (({ joinAction, joinButtonTexts, joinState }) =>
    joinAction?.label ?? joinButtonTexts?.[joinState ?? "ready"])({
    joinAction,
    joinButtonTexts,
    joinState,
  });
  let b =
    joinAction && label != null
      ? {
          ...joinAction,
          label,
          disabled: joinState === "pending" || joinAction.disabled,
        }
      : undefined;
  let j = a.A(w.CommerceTeamInviteJoinCard_modal, className);
  if (open) {
    return i.jsx(u.A, {
      visible: open,
      onCancel: closeAction?.onClick,
      "data-component": "CommerceTeamInviteJoinCard",
      "data-slot": "CommerceTeamInviteJoinCard_modal",
      "data-slots": rm.join(","),
      "data-join-state": joinState,
      footer: null,
      maskClosable: true,
      closable: false,
      focusLock: true,
      autoFocus: true,
      escToExit: true,
      ariaModal: true,
      unmountOnExit: true,
      className: j,
      wrapClassName: j,
      style: {
        width: "auto",
        maxWidth: "90vw",
      },
      children: i.jsxs("section", {
        className: a.A(w.CommerceTeamInviteJoinCard_root, className),
        "data-component": "CommerceTeamInviteJoinCard",
        "data-slot": "CommerceTeamInviteJoinCard_root",
        "data-slots": rm.join(","),
        "data-join-state": joinState,
        children: [
          i.jsxs("header", {
            className: w.CommerceTeamInviteJoinCard_header,
            "data-slot": "CommerceTeamInviteJoinCard_header",
            children: [
              i.jsxs("div", {
                className: w.CommerceTeamInviteJoinCard_titleRow,
                "data-slot": "CommerceTeamInviteJoinCard_titleRow",
                children: [
                  title
                    ? i.jsx("h2", {
                        className: w.CommerceTeamInviteJoinCard_title,
                        "data-slot": "CommerceTeamInviteJoinCard_title",
                        children: title,
                      })
                    : null,
                  closeAction
                    ? i.jsxs("button", {
                        type: "button",
                        className: w.CommerceTeamInviteJoinCard_closeButton,
                        "data-slot": "CommerceTeamInviteJoinCard_closeButton",
                        "aria-label":
                          closeAction.ariaLabel ??
                          (typeof closeAction.label === "string"
                            ? closeAction.label
                            : undefined),
                        disabled: closeAction.disabled,
                        onClick: closeAction.onClick,
                        children: [
                          closeAction.icon,
                          i.jsx("span", {
                            children: closeAction.label,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              i.jsxs("div", {
                className: w.CommerceTeamInviteJoinCard_team,
                "data-slot": "CommerceTeamInviteJoinCard_team",
                children: [
                  i.jsx(useTq, {
                    avatarSlot,
                    avatarUrl,
                    avatarCrossOrigin,
                    avatarAlt,
                    avatarText,
                    avatarColor: tU(avatarColor ?? avatar),
                    teamName,
                    slot: "CommerceTeamInviteJoinCard_avatar",
                    imageSlot: "CommerceTeamInviteJoinCard_avatarImage",
                    textSlot: "CommerceTeamInviteJoinCard_avatarText",
                    classes: {
                      CommerceTeamAvatar_root:
                        w.CommerceTeamInviteJoinCard_avatar,
                      CommerceTeamAvatar_image:
                        w.CommerceTeamInviteJoinCard_avatarImage,
                      CommerceTeamAvatar_text:
                        w.CommerceTeamInviteJoinCard_avatarText,
                    },
                  }),
                  i.jsxs("span", {
                    className: w.CommerceTeamInviteJoinCard_teamBody,
                    "data-slot": "CommerceTeamInviteJoinCard_teamBody",
                    children: [
                      teamName
                        ? i.jsx("span", {
                            className: w.CommerceTeamInviteJoinCard_teamName,
                            "data-slot": "CommerceTeamInviteJoinCard_teamName",
                            children: teamName,
                          })
                        : null,
                      role
                        ? i.jsx("span", {
                            className: w.CommerceTeamInviteJoinCard_teamRole,
                            "data-slot": "CommerceTeamInviteJoinCard_teamRole",
                            children: role,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          }),
          b
            ? i.jsx("div", {
                className: w.CommerceTeamInviteJoinCard_actions,
                "data-slot": "CommerceTeamInviteJoinCard_actions",
                children: tL(b, {
                  className: w.CommerceTeamInviteJoinCard_actionButton,
                  reasonClassName: w.CommerceTeamInviteJoinCard_actionReason,
                  slot: "CommerceTeamInviteJoinCard_actionButton",
                  reasonSlot: "CommerceTeamInviteJoinCard_actionReason",
                  fallbackVariant: "primary",
                  wrap: (e, t) =>
                    i.jsxs("span", {
                      className: w.CommerceTeamInviteJoinCard_actionWrap,
                      "data-slot": "CommerceTeamInviteJoinCard_actionWrap",
                      children: [e, t],
                    }),
                }),
              })
            : null,
        ],
      }),
    });
  }
  return null;
}
const rd =
  require.j == "wl4"
    ? {
        CommerceTeamManageSurface_root:
          "index_module_CommerceTeamManageSurface_root5",
        CommerceTeamManageSurface_shell:
          "index_module_CommerceTeamManageSurface_shell5",
        CommerceTeamManageSurface_header:
          "index_module_CommerceTeamManageSurface_header5",
        CommerceTeamManageSurface_headerMain:
          "index_module_CommerceTeamManageSurface_headerMain5",
        CommerceTeamManageSurface_titleGroup:
          "index_module_CommerceTeamManageSurface_titleGroup5",
        CommerceTeamManageSurface_titleRow:
          "index_module_CommerceTeamManageSurface_titleRow3",
        CommerceTeamManageSurface_headerActions:
          "index_module_CommerceTeamManageSurface_headerActions6",
        CommerceTeamManageSurface_overview:
          "index_module_CommerceTeamManageSurface_overview5",
        CommerceTeamManageSurface_toolbar:
          "index_module_CommerceTeamManageSurface_toolbar6",
        CommerceTeamManageSurface_tabs:
          "index_module_CommerceTeamManageSurface_tabs5",
        CommerceTeamManageSurface_body:
          "index_module_CommerceTeamManageSurface_body5",
        CommerceTeamManageSurface_statusRegion:
          "index_module_CommerceTeamManageSurface_statusRegion5",
        CommerceTeamManageSurface_content:
          "index_module_CommerceTeamManageSurface_content5",
        CommerceTeamManageSurface_actionButton:
          "index_module_CommerceTeamManageSurface_actionButton6",
        CommerceTeamManageSurface_tabButton:
          "index_module_CommerceTeamManageSurface_tabButton6",
      }
    : null;
const ru =
  require.j == "wl4"
    ? [
        "CommerceTeamManageSurface_root",
        "CommerceTeamManageSurface_shell",
        "CommerceTeamManageSurface_header",
        "CommerceTeamManageSurface_headerMain",
        "CommerceTeamManageSurface_titleGroup",
        "CommerceTeamManageSurface_eyebrow",
        "CommerceTeamManageSurface_titleRow",
        "CommerceTeamManageSurface_title",
        "CommerceTeamManageSurface_description",
        "CommerceTeamManageSurface_headerActions",
        "CommerceTeamManageSurface_actionButton",
        "CommerceTeamManageSurface_overview",
        "CommerceTeamManageSurface_toolbar",
        "CommerceTeamManageSurface_tabs",
        "CommerceTeamManageSurface_tabButton",
        "CommerceTeamManageSurface_tabLabel",
        "CommerceTeamManageSurface_tabBadge",
        "CommerceTeamManageSurface_body",
        "CommerceTeamManageSurface_statusRegion",
        "CommerceTeamManageSurface_content",
      ]
    : null;
function rp(e, t, r) {
  return i.jsxs(
    "button",
    {
      type: "button",
      className: t.CommerceTeamManageSurface_actionButton,
      "data-slot": "CommerceTeamManageSurface_actionButton",
      "data-variant": e.variant ?? r,
      "data-disabled": e.disabled ? "" : undefined,
      "aria-label": e.ariaLabel,
      disabled: e.disabled,
      onClick: e.onClick,
      children: [
        e.icon,
        i.jsx("span", {
          children: e.label,
        }),
      ],
    },
    e.key,
  );
}
function useRC({
  title,
  description,
  eyebrow,
  overviewSlot,
  tabs,
  activeTabKey,
  onTabChange,
  primaryAction,
  secondaryActions,
  status,
  children,
  contentSlot,
  className,
  classes,
  statusBlockClasses,
}) {
  let h;
  let S = useB();
  let g = o.useMemo(() => R(rd, S, classes), [S, classes]);
  let y = activeTabKey ?? tabs?.find((e) => !e.disabled)?.key ?? tabs?.[0]?.key;
  let w = !!tabs?.length;
  let I = status?.state === "seat-full";
  let b = I ? null : status;
  let j =
    I && primaryAction
      ? {
          ...primaryAction,
          disabled: true,
        }
      : primaryAction;
  let k = w ? undefined : j;
  return i.jsx("section", {
    className: a.A(g.CommerceTeamManageSurface_root, className),
    "data-component": "CommerceTeamManageSurface",
    "data-slot": "CommerceTeamManageSurface_root",
    "data-slots": ru.join(","),
    "data-state": status?.state ?? "ready",
    children: i.jsxs("div", {
      className: g.CommerceTeamManageSurface_shell,
      "data-slot": "CommerceTeamManageSurface_shell",
      children: [
        i.jsxs("header", {
          className: g.CommerceTeamManageSurface_header,
          "data-slot": "CommerceTeamManageSurface_header",
          children: [
            i.jsx("div", {
              className: g.CommerceTeamManageSurface_headerMain,
              "data-slot": "CommerceTeamManageSurface_headerMain",
              children: i.jsxs("div", {
                className: g.CommerceTeamManageSurface_titleGroup,
                "data-slot": "CommerceTeamManageSurface_titleGroup",
                children: [
                  eyebrow
                    ? i.jsx("div", {
                        className: g.CommerceTeamManageSurface_eyebrow,
                        "data-slot": "CommerceTeamManageSurface_eyebrow",
                        children: eyebrow,
                      })
                    : null,
                  i.jsx("div", {
                    className: g.CommerceTeamManageSurface_titleRow,
                    "data-slot": "CommerceTeamManageSurface_titleRow",
                    children: title
                      ? i.jsx("h2", {
                          className: g.CommerceTeamManageSurface_title,
                          "data-slot": "CommerceTeamManageSurface_title",
                          children: title,
                        })
                      : null,
                  }),
                  description
                    ? i.jsx("div", {
                        className: g.CommerceTeamManageSurface_description,
                        "data-slot": "CommerceTeamManageSurface_description",
                        children: description,
                      })
                    : null,
                ],
              }),
            }),
            secondaryActions?.length || k
              ? i.jsxs("div", {
                  className: g.CommerceTeamManageSurface_headerActions,
                  "data-slot": "CommerceTeamManageSurface_headerActions",
                  children: [
                    secondaryActions?.map((e) => rp(e, g, "secondary")),
                    k ? rp(k, g, "primary") : null,
                  ],
                })
              : null,
          ],
        }),
        overviewSlot
          ? i.jsx("div", {
              className: g.CommerceTeamManageSurface_overview,
              "data-slot": "CommerceTeamManageSurface_overview",
              children: overviewSlot,
            })
          : null,
        w
          ? i.jsxs("div", {
              className: g.CommerceTeamManageSurface_toolbar,
              "data-slot": "CommerceTeamManageSurface_toolbar",
              children: [
                ((h = tabs ?? []),
                i.jsx("div", {
                  className: g.CommerceTeamManageSurface_tabs,
                  "data-slot": "CommerceTeamManageSurface_tabs",
                  role: "tablist",
                  children: h.map((e) => {
                    let t = e.key === y;
                    return i.jsxs(
                      "button",
                      {
                        type: "button",
                        className: g.CommerceTeamManageSurface_tabButton,
                        "data-slot": "CommerceTeamManageSurface_tabButton",
                        "data-state": t ? "active" : "inactive",
                        role: "tab",
                        "aria-selected": t,
                        disabled: e.disabled,
                        onClick: () => {
                          if (!e.disabled) {
                            onTabChange?.(e.key, e);
                          }
                        },
                        children: [
                          i.jsx("span", {
                            className: g.CommerceTeamManageSurface_tabLabel,
                            "data-slot": "CommerceTeamManageSurface_tabLabel",
                            children: e.label,
                          }),
                          e.badge
                            ? i.jsx("span", {
                                className: g.CommerceTeamManageSurface_tabBadge,
                                "data-slot":
                                  "CommerceTeamManageSurface_tabBadge",
                                children: e.badge,
                              })
                            : null,
                        ],
                      },
                      e.key,
                    );
                  }),
                })),
                j ? rp(j, g, "primary") : null,
              ],
            })
          : null,
        i.jsx("div", {
          className: g.CommerceTeamManageSurface_body,
          "data-slot": "CommerceTeamManageSurface_body",
          children: b
            ? i.jsx("div", {
                className: g.CommerceTeamManageSurface_statusRegion,
                "data-slot": "CommerceTeamManageSurface_statusRegion",
                children: i.jsx(useTH, {
                  ...b,
                  classes: statusBlockClasses,
                }),
              })
            : i.jsx("div", {
                className: g.CommerceTeamManageSurface_content,
                "data-slot": "CommerceTeamManageSurface_content",
                children: contentSlot ?? children,
              }),
        }),
      ],
    }),
  });
}
const rv =
  require.j == "wl4"
    ? {
        CommerceTeamMemberPanel_root:
          "index_module_CommerceTeamMemberPanel_root5",
        CommerceTeamMemberPanel_table:
          "index_module_CommerceTeamMemberPanel_table6",
        CommerceTeamMemberPanel_header:
          "index_module_CommerceTeamMemberPanel_header6",
        CommerceTeamMemberPanel_row:
          "index_module_CommerceTeamMemberPanel_row6",
        CommerceTeamMemberPanel_cell:
          "index_module_CommerceTeamMemberPanel_cell6",
        CommerceTeamMemberPanel_user:
          "index_module_CommerceTeamMemberPanel_user5",
        CommerceTeamMemberPanel_userAvatar:
          "index_module_CommerceTeamMemberPanel_userAvatar5",
        CommerceTeamMemberPanel_userBody:
          "index_module_CommerceTeamMemberPanel_userBody5",
        CommerceTeamMemberPanel_userNameRow:
          "index_module_CommerceTeamMemberPanel_userNameRow5",
        CommerceTeamMemberPanel_role:
          "index_module_CommerceTeamMemberPanel_role5",
        CommerceTeamMemberPanel_actions:
          "index_module_CommerceTeamMemberPanel_actions5",
        CommerceTeamMemberPanel_actionWrap:
          "index_module_CommerceTeamMemberPanel_actionWrap6",
        CommerceTeamMemberPanel_statusRegion:
          "index_module_CommerceTeamMemberPanel_statusRegion3",
        CommerceTeamMemberPanel_actionPlaceholder:
          "index_module_CommerceTeamMemberPanel_actionPlaceholder3",
        CommerceTeamMemberPanel_userAvatarImage:
          "index_module_CommerceTeamMemberPanel_userAvatarImage3",
        CommerceTeamMemberPanel_userName:
          "index_module_CommerceTeamMemberPanel_userName6",
        CommerceTeamMemberPanel_userDescription:
          "index_module_CommerceTeamMemberPanel_userDescription5",
        CommerceTeamMemberPanel_userMeta:
          "index_module_CommerceTeamMemberPanel_userMeta5",
        CommerceTeamMemberPanel_roleText:
          "index_module_CommerceTeamMemberPanel_roleText6",
        CommerceTeamMemberPanel_actionReason:
          "index_module_CommerceTeamMemberPanel_actionReason5",
        CommerceTeamMemberPanel_roleSelect:
          "index_module_CommerceTeamMemberPanel_roleSelect5",
        CommerceTeamMemberPanel_actionButton:
          "index_module_CommerceTeamMemberPanel_actionButton6",
        CommerceTeamMemberPanel_roleOption:
          "index_module_CommerceTeamMemberPanel_roleOption6",
        CommerceTeamMemberPanel_roleMenu:
          "index_module_CommerceTeamMemberPanel_roleMenu5",
        CommerceTeamMemberPanel_roleOptionCheck:
          "index_module_CommerceTeamMemberPanel_roleOptionCheck5",
        CommerceTeamMemberPanel_headerInfo:
          "index_module_CommerceTeamMemberPanel_headerInfo6",
        CommerceTeamMemberPanel_headerInfoButton:
          "index_module_CommerceTeamMemberPanel_headerInfoButton5",
        CommerceTeamMemberPanel_headerInfoTooltip:
          "index_module_CommerceTeamMemberPanel_headerInfoTooltip6",
        CommerceTeamMemberPanel_pager:
          "index_module_CommerceTeamMemberPanel_pager5",
        CommerceTeamMemberPanel_pagerButton:
          "index_module_CommerceTeamMemberPanel_pagerButton6",
        CommerceTeamMemberPanel_pagerLabel:
          "index_module_CommerceTeamMemberPanel_pagerLabel6",
        CommerceTeamMemberPanel_pagerInput:
          "index_module_CommerceTeamMemberPanel_pagerInput6",
        CommerceTeamMemberPanel_pagerTotal:
          "index_module_CommerceTeamMemberPanel_pagerTotal5",
        CommerceTeamMemberPanel_pagerCurrent:
          "index_module_CommerceTeamMemberPanel_pagerCurrent5",
      }
    : null;
const r_ =
  require.j == "wl4"
    ? {
        CommerceTeamProfileEditDialog_root:
          "index_module_CommerceTeamProfileEditDialog_root6",
        CommerceTeamProfileEditDialog_panel:
          "index_module_CommerceTeamProfileEditDialog_panel6",
        CommerceTeamProfileEditDialog_header:
          "index_module_CommerceTeamProfileEditDialog_header5",
        CommerceTeamProfileEditDialog_titleGroup:
          "index_module_CommerceTeamProfileEditDialog_titleGroup6",
        CommerceTeamProfileEditDialog_form:
          "index_module_CommerceTeamProfileEditDialog_form6",
        CommerceTeamProfileEditDialog_field:
          "index_module_CommerceTeamProfileEditDialog_field6",
        CommerceTeamProfileEditDialog_avatarRow:
          "index_module_CommerceTeamProfileEditDialog_avatarRow6",
        CommerceTeamProfileEditDialog_colorField:
          "index_module_CommerceTeamProfileEditDialog_colorField5",
        CommerceTeamProfileEditDialog_avatarPreview:
          "index_module_CommerceTeamProfileEditDialog_avatarPreview5",
        CommerceTeamProfileEditDialog_colorGrid:
          "index_module_CommerceTeamProfileEditDialog_colorGrid6",
        CommerceTeamProfileEditDialog_colorOption:
          "index_module_CommerceTeamProfileEditDialog_colorOption6",
        CommerceTeamProfileEditDialog_actions:
          "index_module_CommerceTeamProfileEditDialog_actions6",
        CommerceTeamProfileEditDialog_actionWrap:
          "index_module_CommerceTeamProfileEditDialog_actionWrap5",
        CommerceTeamProfileEditDialog_nameCounter:
          "index_module_CommerceTeamProfileEditDialog_nameCounter6",
        CommerceTeamProfileEditDialog_colorSwatch:
          "index_module_CommerceTeamProfileEditDialog_colorSwatch6",
        CommerceTeamProfileEditDialog_closeButton:
          "index_module_CommerceTeamProfileEditDialog_closeButton6",
        CommerceTeamProfileEditDialog_actionButton:
          "index_module_CommerceTeamProfileEditDialog_actionButton6",
        CommerceTeamProfileEditDialog_nameInput:
          "index_module_CommerceTeamProfileEditDialog_nameInput6",
      }
    : null;
const rf =
  require.j == "wl4"
    ? [
        "CommerceTeamProfileEditDialog_modal",
        "CommerceTeamProfileEditDialog_root",
        "CommerceTeamProfileEditDialog_panel",
        "CommerceTeamProfileEditDialog_header",
        "CommerceTeamProfileEditDialog_titleGroup",
        "CommerceTeamProfileEditDialog_title",
        "CommerceTeamProfileEditDialog_description",
        "CommerceTeamProfileEditDialog_closeButton",
        "CommerceTeamProfileEditDialog_form",
        "CommerceTeamProfileEditDialog_field",
        "CommerceTeamProfileEditDialog_label",
        "CommerceTeamProfileEditDialog_nameInput",
        "CommerceTeamProfileEditDialog_nameCounter",
        "CommerceTeamProfileEditDialog_error",
        "CommerceTeamProfileEditDialog_avatarRow",
        "CommerceTeamProfileEditDialog_avatarPreview",
        "CommerceTeamProfileEditDialog_colorField",
        "CommerceTeamProfileEditDialog_colorGrid",
        "CommerceTeamProfileEditDialog_colorOption",
        "CommerceTeamProfileEditDialog_colorSwatch",
        "CommerceTeamProfileEditDialog_colorLabel",
        "CommerceTeamProfileEditDialog_actions",
        "CommerceTeamProfileEditDialog_actionWrap",
        "CommerceTeamProfileEditDialog_actionButton",
        "CommerceTeamProfileEditDialog_actionReason",
      ]
    : null;
function useRh({
  open = true,
  title,
  description,
  nameLabel,
  nameValue,
  namePlaceholder,
  nameMaxLength,
  nameError,
  avatarText,
  colorLabel,
  selectedColorKey,
  colorOptions,
  texts,
  saveAction,
  disableSaveWhenNameEmpty = true,
  cancelAction,
  closeAction,
  onNameChange,
  onColorChange,
  className,
  classes,
}) {
  let j = useB();
  let k = o.useId();
  let P = o.useMemo(() => R(r_, j, classes), [j, classes]);
  let x = o.useMemo(
    () =>
      colorOptions?.map((e, t) => {
        if (typeof e === "string") {
          return {
            key: e,
            label: texts?.colorOptionLabel?.(t, e),
            color: e,
          };
        }
        return e;
      }),
    [colorOptions, texts],
  );
  let M = x?.find((e) => e.key === selectedColorKey);
  let A = nameValue ?? "";
  let A_length = A.length;
  let E =
    typeof nameMaxLength === "number"
      ? (texts?.nameCounterLabel?.(A_length, nameMaxLength) ??
        `${A_length}/${nameMaxLength}`)
      : null;
  let N = !A.trim();
  let L = saveAction
    ? {
        ...saveAction,
        disabled: saveAction.disabled || (disableSaveWhenNameEmpty && N),
      }
    : undefined;
  let F = [cancelAction, L].filter(Boolean);
  let J = a.A(P.CommerceTeamProfileEditDialog_modal, className);
  if (open) {
    return i.jsx(u.A, {
      visible: open,
      onCancel: closeAction?.onClick ?? cancelAction?.onClick,
      "data-component": "CommerceTeamProfileEditDialog",
      "data-slot": "CommerceTeamProfileEditDialog_modal",
      "data-slots": rf.join(","),
      footer: null,
      maskClosable: true,
      closable: false,
      focusLock: true,
      autoFocus: true,
      escToExit: true,
      ariaModal: true,
      unmountOnExit: true,
      className: J,
      wrapClassName: J,
      style: {
        width: "auto",
        maxWidth: "90vw",
      },
      children: i.jsx("section", {
        className: a.A(P.CommerceTeamProfileEditDialog_root, className),
        "data-component": "CommerceTeamProfileEditDialog",
        "data-slot": "CommerceTeamProfileEditDialog_root",
        "data-slots": rf.join(","),
        children: i.jsxs("div", {
          className: P.CommerceTeamProfileEditDialog_panel,
          "data-slot": "CommerceTeamProfileEditDialog_panel",
          children: [
            i.jsxs("header", {
              className: P.CommerceTeamProfileEditDialog_header,
              "data-slot": "CommerceTeamProfileEditDialog_header",
              children: [
                i.jsxs("div", {
                  className: P.CommerceTeamProfileEditDialog_titleGroup,
                  "data-slot": "CommerceTeamProfileEditDialog_titleGroup",
                  children: [
                    title
                      ? i.jsx("h2", {
                          className: P.CommerceTeamProfileEditDialog_title,
                          "data-slot": "CommerceTeamProfileEditDialog_title",
                          children: title,
                        })
                      : null,
                    description
                      ? i.jsx("div", {
                          className:
                            P.CommerceTeamProfileEditDialog_description,
                          "data-slot":
                            "CommerceTeamProfileEditDialog_description",
                          children: description,
                        })
                      : null,
                  ],
                }),
                closeAction
                  ? i.jsxs("button", {
                      type: "button",
                      className: P.CommerceTeamProfileEditDialog_closeButton,
                      "data-slot": "CommerceTeamProfileEditDialog_closeButton",
                      "aria-label": tN(closeAction),
                      disabled: closeAction.disabled,
                      onClick: closeAction.onClick,
                      children: [
                        closeAction.icon,
                        i.jsx("span", {
                          children: closeAction.label,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            i.jsxs("div", {
              className: P.CommerceTeamProfileEditDialog_form,
              "data-slot": "CommerceTeamProfileEditDialog_form",
              children: [
                i.jsx("div", {
                  className: P.CommerceTeamProfileEditDialog_avatarRow,
                  "data-slot": "CommerceTeamProfileEditDialog_avatarRow",
                  children: i.jsx(useTq, {
                    avatarText,
                    avatarColor: M?.color,
                    teamName: A,
                    slot: "CommerceTeamProfileEditDialog_avatarPreview",
                    classes: {
                      CommerceTeamAvatar_root:
                        P.CommerceTeamProfileEditDialog_avatarPreview,
                    },
                    ariaHidden: true,
                  }),
                }),
                i.jsxs("label", {
                  className: P.CommerceTeamProfileEditDialog_field,
                  "data-slot": "CommerceTeamProfileEditDialog_field",
                  children: [
                    nameLabel
                      ? i.jsx("span", {
                          className: P.CommerceTeamProfileEditDialog_label,
                          "data-slot": "CommerceTeamProfileEditDialog_label",
                          children: nameLabel,
                        })
                      : null,
                    i.jsx("input", {
                      className: P.CommerceTeamProfileEditDialog_nameInput,
                      "data-slot": "CommerceTeamProfileEditDialog_nameInput",
                      value: A,
                      placeholder: namePlaceholder,
                      maxLength: nameMaxLength,
                      "aria-invalid": !!nameError,
                      "aria-describedby": nameError ? k : undefined,
                      readOnly: !onNameChange,
                      onChange: onNameChange
                        ? (e) => onNameChange(e.target.value)
                        : undefined,
                    }),
                    E != null
                      ? i.jsx("span", {
                          className:
                            P.CommerceTeamProfileEditDialog_nameCounter,
                          "data-slot":
                            "CommerceTeamProfileEditDialog_nameCounter",
                          children: E,
                        })
                      : null,
                  ],
                }),
                nameError
                  ? i.jsx("div", {
                      id: k,
                      className: P.CommerceTeamProfileEditDialog_error,
                      "data-slot": "CommerceTeamProfileEditDialog_error",
                      children: nameError,
                    })
                  : null,
                x?.length
                  ? i.jsxs("div", {
                      className: P.CommerceTeamProfileEditDialog_colorField,
                      "data-slot": "CommerceTeamProfileEditDialog_colorField",
                      children: [
                        colorLabel
                          ? i.jsx("span", {
                              className: P.CommerceTeamProfileEditDialog_label,
                              "data-slot":
                                "CommerceTeamProfileEditDialog_label",
                              children: colorLabel,
                            })
                          : null,
                        i.jsx("div", {
                          className: P.CommerceTeamProfileEditDialog_colorGrid,
                          "data-slot":
                            "CommerceTeamProfileEditDialog_colorGrid",
                          children: x.map((e) =>
                            i.jsxs(
                              "button",
                              {
                                type: "button",
                                className:
                                  P.CommerceTeamProfileEditDialog_colorOption,
                                "data-slot":
                                  "CommerceTeamProfileEditDialog_colorOption",
                                "data-state":
                                  e.key === selectedColorKey
                                    ? "active"
                                    : "inactive",
                                disabled: e.disabled,
                                onClick: () => onColorChange?.(e.key, e),
                                children: [
                                  i.jsx("span", {
                                    className:
                                      P.CommerceTeamProfileEditDialog_colorSwatch,
                                    "data-slot":
                                      "CommerceTeamProfileEditDialog_colorSwatch",
                                    style: {
                                      background: e.color,
                                    },
                                    "aria-hidden": "true",
                                  }),
                                  e.label != null
                                    ? i.jsx("span", {
                                        className:
                                          P.CommerceTeamProfileEditDialog_colorLabel,
                                        "data-slot":
                                          "CommerceTeamProfileEditDialog_colorLabel",
                                        children: e.label,
                                      })
                                    : null,
                                ],
                              },
                              e.key,
                            ),
                          ),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            F.length
              ? i.jsx("div", {
                  className: P.CommerceTeamProfileEditDialog_actions,
                  "data-slot": "CommerceTeamProfileEditDialog_actions",
                  children: F.map((e) =>
                    tL(e, {
                      className: P.CommerceTeamProfileEditDialog_actionButton,
                      reasonClassName:
                        P.CommerceTeamProfileEditDialog_actionReason,
                      slot: "CommerceTeamProfileEditDialog_actionButton",
                      reasonSlot: "CommerceTeamProfileEditDialog_actionReason",
                      fallbackVariant: e === L ? "primary" : "secondary",
                      wrap: (t, r) =>
                        i.jsxs(
                          "span",
                          {
                            className:
                              P.CommerceTeamProfileEditDialog_actionWrap,
                            "data-slot":
                              "CommerceTeamProfileEditDialog_actionWrap",
                            children: [t, r],
                          },
                          e.key,
                        ),
                    }),
                  ),
                })
              : null,
          ],
        }),
      }),
    });
  }
  return null;
}
const rT =
  require.j == "wl4"
    ? [
        "CommerceTeamMemberPanel_root",
        "CommerceTeamMemberPanel_table",
        "CommerceTeamMemberPanel_header",
        "CommerceTeamMemberPanel_headerCell",
        "CommerceTeamMemberPanel_headerLabel",
        "CommerceTeamMemberPanel_headerInfo",
        "CommerceTeamMemberPanel_headerInfoButton",
        "CommerceTeamMemberPanel_headerInfoTooltip",
        "CommerceTeamMemberPanel_row",
        "CommerceTeamMemberPanel_cell",
        "CommerceTeamMemberPanel_user",
        "CommerceTeamMemberPanel_userAvatar",
        "CommerceTeamMemberPanel_userAvatarImage",
        "CommerceTeamMemberPanel_userAvatarText",
        "CommerceTeamMemberPanel_userBody",
        "CommerceTeamMemberPanel_userNameRow",
        "CommerceTeamMemberPanel_userName",
        "CommerceTeamMemberPanel_userBadge",
        "CommerceTeamMemberPanel_userDescription",
        "CommerceTeamMemberPanel_userMeta",
        "CommerceTeamMemberPanel_role",
        "CommerceTeamMemberPanel_roleText",
        "CommerceTeamMemberPanel_roleSelect",
        "CommerceTeamMemberPanel_roleMenu",
        "CommerceTeamMemberPanel_roleOption",
        "CommerceTeamMemberPanel_roleOptionCheck",
        "CommerceTeamMemberPanel_credit",
        "CommerceTeamMemberPanel_joinedAt",
        "CommerceTeamMemberPanel_actions",
        "CommerceTeamMemberPanel_actionWrap",
        "CommerceTeamMemberPanel_actionButton",
        "CommerceTeamMemberPanel_actionPlaceholder",
        "CommerceTeamMemberPanel_actionReason",
        "CommerceTeamMemberPanel_rowSlot",
        "CommerceTeamMemberPanel_statusRegion",
        "CommerceTeamMemberPanel_pager",
        "CommerceTeamMemberPanel_pagerButton",
        "CommerceTeamMemberPanel_pagerLabel",
        "CommerceTeamMemberPanel_pagerInput",
        "CommerceTeamMemberPanel_pagerTotal",
        "CommerceTeamMemberPanel_pagerCurrent",
      ]
    : null;
const rS =
  require.j == "wl4"
    ? {
        user: "minmax(0, 2.2fr)",
        role: "minmax(0, 1.4fr)",
        consumed: "minmax(0, 1.1fr)",
        remaining: "minmax(0, 1.3fr)",
        total: "minmax(0, 1.1fr)",
        joinedAt: "minmax(0, 1.7fr)",
        actions: "minmax(0, 1.3fr)",
      }
    : null;
function rg(e) {
  return e != null && e !== false;
}
function useRy({ member, classes, roleSelectLabel, onRoleChange }) {
  let [n, setN] = o.useState(false);
  let l = o.useId();
  let mRef = o.useRef(null);
  let sRef = o.useRef(null);
  o.useEffect(() => {
    if (!n) {
      return;
    }
    let e = (e) => {
      let e_target = e.target;
      if (
        !(
          !e_target ||
          mRef.current?.contains(e_target) ||
          sRef.current?.contains(e_target)
        )
      ) {
        setN(false);
      }
    };
    document.addEventListener("pointerdown", e);
    return () => {
      document.removeEventListener("pointerdown", e);
    };
  }, [n]);
  if (member.roleOptions?.length) {
    let o = member.roleOptions.find((t) => t.role === member.role);
    let d = o?.label ?? member.roleLabel ?? member.role;
    return i.jsxs(i.Fragment, {
      children: [
        i.jsx("button", {
          ref: mRef,
          type: "button",
          className: classes.CommerceTeamMemberPanel_roleSelect,
          "data-slot": "CommerceTeamMemberPanel_roleSelect",
          "aria-label": roleSelectLabel,
          "aria-haspopup": "listbox",
          "aria-expanded": n,
          "aria-controls": l,
          disabled: !onRoleChange,
          onClick: () => setN((e) => !e),
          onKeyDown: (e) => {
            if (e.key === "Escape") {
              setN(false);
            } else if (
              e.key === "ArrowDown" ||
              e.key === "Enter" ||
              e.key === " "
            ) {
              e.preventDefault();
              setN(true);
            }
          },
          children: d,
        }),
        i.jsx("div", {
          ref: sRef,
          id: l,
          className: classes.CommerceTeamMemberPanel_roleMenu,
          "data-slot": "CommerceTeamMemberPanel_roleMenu",
          role: "listbox",
          hidden: !n,
          "aria-label": roleSelectLabel,
          children: member.roleOptions.map((r) =>
            i.jsxs(
              "button",
              {
                type: "button",
                className: classes.CommerceTeamMemberPanel_roleOption,
                "data-slot": "CommerceTeamMemberPanel_roleOption",
                "data-state": r.role === member.role ? "active" : undefined,
                role: "option",
                "aria-selected": r.role === member.role,
                disabled: !onRoleChange || r.disabled,
                onClick: () => {
                  if (onRoleChange && !r.disabled) {
                    if (r.role !== member.role) {
                      onRoleChange(member.key, r.role, member);
                    }
                    setN(false);
                  }
                },
                onKeyDown: (e) => {
                  if (e.key === "Escape") {
                    setN(false);
                    mRef.current?.focus();
                  }
                },
                children: [
                  i.jsx("span", {
                    children: r.label,
                  }),
                  r.role === member.role
                    ? i.jsx(f.A, {
                        size: 16,
                        strokeWidth: 1.5,
                        className:
                          classes.CommerceTeamMemberPanel_roleOptionCheck,
                        "data-slot": "CommerceTeamMemberPanel_roleOptionCheck",
                        "aria-hidden": "true",
                      })
                    : null,
                ],
              },
              r.role,
            ),
          ),
        }),
      ],
    });
  }
  return i.jsx("span", {
    className: classes.CommerceTeamMemberPanel_roleText,
    "data-slot": "CommerceTeamMemberPanel_roleText",
    children: member.roleLabel,
  });
}
function rw(e, t, r, o) {
  return i.jsx(
    "div",
    {
      className: a.A(r.CommerceTeamMemberPanel_cell, o),
      "data-slot": "CommerceTeamMemberPanel_cell",
      "data-column": e,
      role: "cell",
      children: t,
    },
    e,
  );
}
function useRI({
  members,
  loading,
  status,
  columnLabels,
  columnInfo,
  emptySlot,
  emptyActionsText = "-",
  avatarCrossOrigin,
  roleSelectLabel,
  pageSize = 20,
  currentPage,
  total,
  hasMore,
  pagerTexts,
  onPageChange,
  onRoleChange,
  className,
  classes,
  statusBlockClasses,
}) {
  let I = useB();
  let b = o.useMemo(() => R(rv, I, classes), [I, classes]);
  let [j, setJ] = o.useState(1);
  let P = currentPage !== undefined;
  let x = t$({
    mode: P ? "controlled" : "local",
    itemCount: members.length,
    currentPage: currentPage ?? j,
    pageSize,
    total,
    hasMore,
  });
  o.useEffect(() => {
    if (!(P || j === x.currentPage)) {
      setJ(x.currentPage);
    }
  }, [P, j, x.currentPage]);
  let M = tK(members, x);
  let A = !!(loading && (!P || !members.length));
  let D = loading
    ? "loading"
    : (status?.state ?? (members.length ? "ready" : "empty"));
  let E =
    A || status || (!members.length && emptySlot)
      ? (status ?? {
          state: A ? "loading" : "empty",
          contentSlot: emptySlot,
        })
      : null;
  let N = [
    "user",
    "role",
    ...(rg(columnLabels?.consumed) ||
    members.some((e) => rg(e.consumedCreditText))
      ? ["consumed"]
      : []),
    ...(rg(columnLabels?.remaining) ||
    members.some((e) => rg(e.remainingCreditText))
      ? ["remaining"]
      : []),
    ...(rg(columnLabels?.total) || members.some((e) => rg(e.totalCreditText))
      ? ["total"]
      : []),
    "joinedAt",
    ...(rg(columnLabels?.actions) || members.some((e) => e.actions?.length)
      ? ["actions"]
      : []),
  ];
  let L = {
    gridTemplateColumns: N.map((e) => rS[e]).join(" "),
  };
  let F = N.join(",");
  return i.jsxs("section", {
    className: a.A(b.CommerceTeamMemberPanel_root, className),
    "data-component": "CommerceTeamMemberPanel",
    "data-slot": "CommerceTeamMemberPanel_root",
    "data-slots": rT.join(","),
    "data-state": D,
    children: [
      E
        ? i.jsx("div", {
            className: b.CommerceTeamMemberPanel_statusRegion,
            "data-slot": "CommerceTeamMemberPanel_statusRegion",
            children: i.jsx(useTH, {
              ...E,
              classes: statusBlockClasses,
            }),
          })
        : i.jsxs("div", {
            className: b.CommerceTeamMemberPanel_table,
            "data-slot": "CommerceTeamMemberPanel_table",
            role: "table",
            children: [
              i.jsx("div", {
                className: b.CommerceTeamMemberPanel_header,
                "data-slot": "CommerceTeamMemberPanel_header",
                "data-columns": F,
                role: "row",
                style: L,
                children: N.map((e) => {
                  var t;
                  var r;
                  let o;
                  t = columnLabels?.[e];
                  r = columnInfo?.[e];
                  return i.jsxs(
                    "div",
                    {
                      className: a.A(
                        b.CommerceTeamMemberPanel_headerCell,
                        b.CommerceTeamMemberPanel_cell,
                      ),
                      "data-slot": "CommerceTeamMemberPanel_headerCell",
                      "data-column": e,
                      role: "columnheader",
                      children: [
                        i.jsx("span", {
                          className: b.CommerceTeamMemberPanel_headerLabel,
                          "data-slot": "CommerceTeamMemberPanel_headerLabel",
                          children: t,
                        }),
                        r
                          ? ((o =
                              r.id ?? `commerce-team-member-${e}-info-tooltip`),
                            i.jsxs("span", {
                              className: b.CommerceTeamMemberPanel_headerInfo,
                              "data-slot": "CommerceTeamMemberPanel_headerInfo",
                              children: [
                                i.jsx("button", {
                                  type: "button",
                                  className:
                                    b.CommerceTeamMemberPanel_headerInfoButton,
                                  "data-slot":
                                    "CommerceTeamMemberPanel_headerInfoButton",
                                  "aria-label": r.ariaLabel,
                                  "aria-describedby": o,
                                  children:
                                    r.icon ??
                                    i.jsx(h.A, {
                                      size: 16,
                                      strokeWidth: 1.8,
                                      "aria-hidden": "true",
                                    }),
                                }),
                                i.jsx("span", {
                                  id: o,
                                  className:
                                    b.CommerceTeamMemberPanel_headerInfoTooltip,
                                  "data-slot":
                                    "CommerceTeamMemberPanel_headerInfoTooltip",
                                  role: "tooltip",
                                  children: r.content,
                                }),
                              ],
                            }))
                          : null,
                      ],
                    },
                    e,
                  );
                }),
              }),
              M.map((e) =>
                i.jsxs(
                  "div",
                  {
                    className: b.CommerceTeamMemberPanel_row,
                    "data-slot": "CommerceTeamMemberPanel_row",
                    "data-columns": F,
                    "data-role": e.role,
                    "data-disabled": e.disabledReason ? "" : undefined,
                    role: "row",
                    style: L,
                    children: [
                      N.map((t) =>
                        ((
                          e,
                          member,
                          r,
                          roleSelectLabel_1,
                          onRoleChange_1,
                          n,
                          c,
                        ) => {
                          switch (e) {
                            case "user":
                              let l;
                              return rw(
                                "user",
                                ((l = member.user),
                                i.jsxs("div", {
                                  className: r.CommerceTeamMemberPanel_user,
                                  "data-slot": "CommerceTeamMemberPanel_user",
                                  children: [
                                    ((e, t, r) => {
                                      if (e.avatarSlot) {
                                        return e.avatarSlot;
                                      }
                                      let a = e.avatarColor
                                        ? {
                                            backgroundColor: e.avatarColor,
                                          }
                                        : undefined;
                                      return i.jsx("span", {
                                        className:
                                          t.CommerceTeamMemberPanel_userAvatar,
                                        "data-slot":
                                          "CommerceTeamMemberPanel_userAvatar",
                                        style: a,
                                        "aria-hidden": e.avatarUrl
                                          ? undefined
                                          : "true",
                                        children: e.avatarUrl
                                          ? i.jsx("img", {
                                              className:
                                                t.CommerceTeamMemberPanel_userAvatarImage,
                                              "data-slot":
                                                "CommerceTeamMemberPanel_userAvatarImage",
                                              src: e.avatarUrl,
                                              crossOrigin:
                                                e.avatarCrossOrigin ?? r,
                                              alt: e.avatarAlt ?? "",
                                            })
                                          : i.jsx("span", {
                                              className:
                                                t.CommerceTeamMemberPanel_userAvatarText,
                                              "data-slot":
                                                "CommerceTeamMemberPanel_userAvatarText",
                                              children: e.avatarText,
                                            }),
                                      });
                                    })(l, r, c),
                                    i.jsxs("span", {
                                      className:
                                        r.CommerceTeamMemberPanel_userBody,
                                      "data-slot":
                                        "CommerceTeamMemberPanel_userBody",
                                      children: [
                                        i.jsxs("span", {
                                          className:
                                            r.CommerceTeamMemberPanel_userNameRow,
                                          "data-slot":
                                            "CommerceTeamMemberPanel_userNameRow",
                                          children: [
                                            i.jsx("span", {
                                              className:
                                                r.CommerceTeamMemberPanel_userName,
                                              "data-slot":
                                                "CommerceTeamMemberPanel_userName",
                                              children: l.name,
                                            }),
                                            l.badge
                                              ? i.jsx("span", {
                                                  className:
                                                    r.CommerceTeamMemberPanel_userBadge,
                                                  "data-slot":
                                                    "CommerceTeamMemberPanel_userBadge",
                                                  children: l.badge,
                                                })
                                              : null,
                                          ],
                                        }),
                                        l.description
                                          ? i.jsx("span", {
                                              className:
                                                r.CommerceTeamMemberPanel_userDescription,
                                              "data-slot":
                                                "CommerceTeamMemberPanel_userDescription",
                                              children: l.description,
                                            })
                                          : null,
                                        l.meta
                                          ? i.jsx("span", {
                                              className:
                                                r.CommerceTeamMemberPanel_userMeta,
                                              "data-slot":
                                                "CommerceTeamMemberPanel_userMeta",
                                              children: l.meta,
                                            })
                                          : null,
                                      ],
                                    }),
                                  ],
                                })),
                                r,
                              );
                            case "role":
                              return rw(
                                "role",
                                i.jsx("div", {
                                  className: r.CommerceTeamMemberPanel_role,
                                  "data-slot": "CommerceTeamMemberPanel_role",
                                  children: i.jsx(useRy, {
                                    member,
                                    classes: r,
                                    roleSelectLabel: roleSelectLabel_1,
                                    onRoleChange: onRoleChange_1,
                                  }),
                                }),
                                r,
                              );
                            case "consumed":
                              return rw(
                                "consumed",
                                member.consumedCreditText,
                                r,
                                r.CommerceTeamMemberPanel_credit,
                              );
                            case "remaining":
                              return rw(
                                "remaining",
                                member.remainingCreditText,
                                r,
                                r.CommerceTeamMemberPanel_credit,
                              );
                            case "total":
                              return rw(
                                "total",
                                member.totalCreditText,
                                r,
                                r.CommerceTeamMemberPanel_credit,
                              );
                            case "joinedAt":
                              return rw(
                                "joinedAt",
                                member.joinedAtText,
                                r,
                                r.CommerceTeamMemberPanel_joinedAt,
                              );
                            case "actions":
                              return rw(
                                "actions",
                                i.jsx("div", {
                                  className: r.CommerceTeamMemberPanel_actions,
                                  "data-slot":
                                    "CommerceTeamMemberPanel_actions",
                                  children: member.actions?.length
                                    ? member.actions.map((e) =>
                                        tL(e, {
                                          className:
                                            r.CommerceTeamMemberPanel_actionButton,
                                          reasonClassName:
                                            r.CommerceTeamMemberPanel_actionReason,
                                          slot: "CommerceTeamMemberPanel_actionButton",
                                          reasonSlot:
                                            "CommerceTeamMemberPanel_actionReason",
                                          fallbackVariant: "link",
                                          wrap: (t, a) =>
                                            i.jsxs(
                                              "span",
                                              {
                                                className:
                                                  r.CommerceTeamMemberPanel_actionWrap,
                                                "data-slot":
                                                  "CommerceTeamMemberPanel_actionWrap",
                                                children: [t, a],
                                              },
                                              e.key,
                                            ),
                                        }),
                                      )
                                    : rg(n)
                                      ? i.jsx("span", {
                                          className:
                                            r.CommerceTeamMemberPanel_actionPlaceholder,
                                          "data-slot":
                                            "CommerceTeamMemberPanel_actionPlaceholder",
                                          children: n,
                                        })
                                      : null,
                                }),
                                r,
                              );
                            default:
                              return null;
                          }
                        })(
                          t,
                          e,
                          b,
                          roleSelectLabel,
                          onRoleChange,
                          emptyActionsText,
                          avatarCrossOrigin,
                        ),
                      ),
                      e.rowSlot
                        ? i.jsx("div", {
                            className: b.CommerceTeamMemberPanel_rowSlot,
                            "data-slot": "CommerceTeamMemberPanel_rowSlot",
                            children: e.rowSlot,
                          })
                        : null,
                    ],
                  },
                  e.key,
                ),
              ),
            ],
          }),
      !E && x.showPager
        ? i.jsx(useTz, {
            slotPrefix: "CommerceTeamMemberPanel",
            currentPage: x.currentPage,
            totalPages: x.totalPages,
            supportsPageJump: x.supportsPageJump,
            canGoPrevious: x.canGoPrevious,
            canGoNext: x.canGoNext,
            disabled: loading,
            classes: {
              pager: b.CommerceTeamMemberPanel_pager,
              button: b.CommerceTeamMemberPanel_pagerButton,
              label: b.CommerceTeamMemberPanel_pagerLabel,
              input: b.CommerceTeamMemberPanel_pagerInput,
              total: b.CommerceTeamMemberPanel_pagerTotal,
              current: b.CommerceTeamMemberPanel_pagerCurrent,
            },
            texts: pagerTexts,
            onPageChange: (e) => {
              if (!loading) {
                if (P) {
                  return void onPageChange?.(e);
                }
                setJ(e);
              }
            },
          })
        : null,
    ],
  });
}
const rb =
  require.j == "wl4"
    ? {
        CommerceTeamOverviewCards_root:
          "index_module_CommerceTeamOverviewCards_root5",
        CommerceTeamOverviewCards_card:
          "index_module_CommerceTeamOverviewCards_card6",
        CommerceTeamOverviewCards_body:
          "index_module_CommerceTeamOverviewCards_body5",
        CommerceTeamOverviewCards_header:
          "index_module_CommerceTeamOverviewCards_header5",
        CommerceTeamOverviewCards_titleGroup:
          "index_module_CommerceTeamOverviewCards_titleGroup5",
        CommerceTeamOverviewCards_title:
          "index_module_CommerceTeamOverviewCards_title6",
        CommerceTeamOverviewCards_info:
          "index_module_CommerceTeamOverviewCards_info5",
        CommerceTeamOverviewCards_actions:
          "index_module_CommerceTeamOverviewCards_actions5",
        CommerceTeamOverviewCards_actionWrap:
          "index_module_CommerceTeamOverviewCards_actionWrap5",
        CommerceTeamOverviewCards_value:
          "index_module_CommerceTeamOverviewCards_value6",
        CommerceTeamOverviewCards_infoButton:
          "index_module_CommerceTeamOverviewCards_infoButton5",
        CommerceTeamOverviewCards_actionButton:
          "index_module_CommerceTeamOverviewCards_actionButton5",
        CommerceTeamOverviewCards_infoTooltip:
          "index_module_CommerceTeamOverviewCards_infoTooltip6",
      }
    : null;
const rj =
  require.j == "wl4"
    ? [
        "CommerceTeamOverviewCards_root",
        "CommerceTeamOverviewCards_card",
        "CommerceTeamOverviewCards_body",
        "CommerceTeamOverviewCards_header",
        "CommerceTeamOverviewCards_titleGroup",
        "CommerceTeamOverviewCards_title",
        "CommerceTeamOverviewCards_badge",
        "CommerceTeamOverviewCards_info",
        "CommerceTeamOverviewCards_infoButton",
        "CommerceTeamOverviewCards_infoTooltip",
        "CommerceTeamOverviewCards_actions",
        "CommerceTeamOverviewCards_actionWrap",
        "CommerceTeamOverviewCards_actionButton",
        "CommerceTeamOverviewCards_actionReason",
        "CommerceTeamOverviewCards_actionSeparator",
        "CommerceTeamOverviewCards_value",
        "CommerceTeamOverviewCards_disabledReason",
        "CommerceTeamOverviewCards_content",
      ]
    : null;
function useRk({ items, className, classes }) {
  let n = useB();
  let c = o.useMemo(() => R(rb, n, classes), [n, classes]);
  return i.jsx("div", {
    className: a.A(c.CommerceTeamOverviewCards_root, className),
    "data-component": "CommerceTeamOverviewCards",
    "data-slot": "CommerceTeamOverviewCards_root",
    "data-slots": rj.join(","),
    children: items.map((e) => {
      let t;
      return i.jsx(
        "section",
        {
          className: c.CommerceTeamOverviewCards_card,
          "data-slot": "CommerceTeamOverviewCards_card",
          "data-size": e.size ?? "regular",
          "data-value-tone": e.valueTone ?? "default",
          "data-disabled": e.disabled ? "" : undefined,
          "aria-disabled": e.disabled || undefined,
          children: i.jsxs("div", {
            className: c.CommerceTeamOverviewCards_body,
            "data-slot": "CommerceTeamOverviewCards_body",
            children: [
              i.jsxs("header", {
                className: c.CommerceTeamOverviewCards_header,
                "data-slot": "CommerceTeamOverviewCards_header",
                children: [
                  i.jsxs("div", {
                    className: c.CommerceTeamOverviewCards_titleGroup,
                    "data-slot": "CommerceTeamOverviewCards_titleGroup",
                    children: [
                      i.jsx("h3", {
                        className: c.CommerceTeamOverviewCards_title,
                        "data-slot": "CommerceTeamOverviewCards_title",
                        children: e.title,
                      }),
                      e.badge
                        ? i.jsx("span", {
                            className: c.CommerceTeamOverviewCards_badge,
                            "data-slot": "CommerceTeamOverviewCards_badge",
                            children: e.badge,
                          })
                        : null,
                      ((e, t) => {
                        if (!e.info) {
                          return null;
                        }
                        let r =
                          e.info?.id ??
                          `commerce-team-overview-${String(e.key)}-info-tooltip`;
                        return i.jsxs("span", {
                          className: t.CommerceTeamOverviewCards_info,
                          "data-slot": "CommerceTeamOverviewCards_info",
                          children: [
                            i.jsx("button", {
                              type: "button",
                              className: t.CommerceTeamOverviewCards_infoButton,
                              "data-slot":
                                "CommerceTeamOverviewCards_infoButton",
                              "aria-label": e.info.ariaLabel,
                              "aria-describedby": r,
                              children:
                                e.info.icon ??
                                i.jsx(h.A, {
                                  size: 16,
                                  strokeWidth: 1.8,
                                  "aria-hidden": "true",
                                }),
                            }),
                            i.jsx("span", {
                              id: r,
                              className:
                                t.CommerceTeamOverviewCards_infoTooltip,
                              "data-slot":
                                "CommerceTeamOverviewCards_infoTooltip",
                              role: "tooltip",
                              children: e.info.content,
                            }),
                          ],
                        });
                      })(e, c),
                    ],
                  }),
                  (t = e.actions ?? []).length
                    ? i.jsx("div", {
                        className: c.CommerceTeamOverviewCards_actions,
                        "data-slot": "CommerceTeamOverviewCards_actions",
                        children: t.map((t, r) =>
                          i.jsxs(
                            "span",
                            {
                              className: c.CommerceTeamOverviewCards_actionWrap,
                              "data-slot":
                                "CommerceTeamOverviewCards_actionWrap",
                              children: [
                                r > 0
                                  ? i.jsx("span", {
                                      className:
                                        c.CommerceTeamOverviewCards_actionSeparator,
                                      "data-slot":
                                        "CommerceTeamOverviewCards_actionSeparator",
                                      "aria-hidden": "true",
                                    })
                                  : null,
                                tL(
                                  {
                                    ...t,
                                    disabled: e.disabled || t.disabled,
                                  },
                                  {
                                    className:
                                      c.CommerceTeamOverviewCards_actionButton,
                                    reasonClassName:
                                      c.CommerceTeamOverviewCards_actionReason,
                                    slot: "CommerceTeamOverviewCards_actionButton",
                                    reasonSlot:
                                      "CommerceTeamOverviewCards_actionReason",
                                    fallbackVariant: "link",
                                  },
                                ),
                              ],
                            },
                            t.key,
                          ),
                        ),
                      })
                    : null,
                ],
              }),
              e.value != null
                ? i.jsx("div", {
                    className: c.CommerceTeamOverviewCards_value,
                    "data-slot": "CommerceTeamOverviewCards_value",
                    children: e.value,
                  })
                : null,
              e.disabledReason
                ? i.jsx("div", {
                    className: c.CommerceTeamOverviewCards_disabledReason,
                    "data-slot": "CommerceTeamOverviewCards_disabledReason",
                    children: e.disabledReason,
                  })
                : null,
              e.contentSlot
                ? i.jsx("div", {
                    className: c.CommerceTeamOverviewCards_content,
                    "data-slot": "CommerceTeamOverviewCards_content",
                    children: e.contentSlot,
                  })
                : null,
            ],
          }),
        },
        e.key,
      );
    }),
  });
}
const rP = {
  CommerceTeamInviteDialog_modal:
    "index_module_CommerceTeamInviteDialog_modal3",
  CommerceTeamProfileEditDialog_modal:
    "index_module_CommerceTeamProfileEditDialog_modal3",
  CommerceTeamActionConfirmModal_modal:
    "index_module_CommerceTeamActionConfirmModal_modal3",
  CommerceTeamInviteJoinCard_modal:
    "index_module_CommerceTeamInviteJoinCard_modal3",
  CommerceTeamManageSurface_root:
    "index_module_CommerceTeamManageSurface_root6",
  CommerceTeamManageSurface_shell:
    "index_module_CommerceTeamManageSurface_shell6",
  CommerceTeamManageSurface_header:
    "index_module_CommerceTeamManageSurface_header6",
  CommerceTeamManageSurface_headerMain:
    "index_module_CommerceTeamManageSurface_headerMain6",
  CommerceTeamManageSurface_titleGroup:
    "index_module_CommerceTeamManageSurface_titleGroup6",
  CommerceTeamManageSurface_body:
    "index_module_CommerceTeamManageSurface_body6",
  CommerceTeamManageSurface_content:
    "index_module_CommerceTeamManageSurface_content6",
  CommerceTeamManageSurface_eyebrow:
    "index_module_CommerceTeamManageSurface_eyebrow3",
  CommerceTeamManageSurface_title:
    "index_module_CommerceTeamManageSurface_title3",
  CommerceTeamAvatar_root: "index_module_CommerceTeamAvatar_root3",
  CommerceTeamAvatar_text: "index_module_CommerceTeamAvatar_text3",
  CommerceTeamAvatar_image: "index_module_CommerceTeamAvatar_image3",
  CommerceTeamManageSurface_titleAvatar:
    "index_module_CommerceTeamManageSurface_titleAvatar3",
  CommerceTeamManageSurface_titleDetails:
    "index_module_CommerceTeamManageSurface_titleDetails",
  CommerceTeamManageSurface_description:
    "index_module_CommerceTeamManageSurface_description3",
  CommerceTeamManageSurface_headerActions:
    "index_module_CommerceTeamManageSurface_headerActions5",
  CommerceTeamManageSurface_toolbar:
    "index_module_CommerceTeamManageSurface_toolbar5",
  CommerceTeamManageSurface_actionButton:
    "index_module_CommerceTeamManageSurface_actionButton5",
  CommerceTeamManageSurface_tabButton:
    "index_module_CommerceTeamManageSurface_tabButton5",
  CommerceTeamStatusBlock_actionButton:
    "index_module_CommerceTeamStatusBlock_actionButton5",
  CommerceTeamManageSurface_overview:
    "index_module_CommerceTeamManageSurface_overview6",
  CommerceTeamOverviewCards_root:
    "index_module_CommerceTeamOverviewCards_root6",
  CommerceTeamOverviewCards_card:
    "index_module_CommerceTeamOverviewCards_card5",
  CommerceTeamOverviewCards_body:
    "index_module_CommerceTeamOverviewCards_body6",
  CommerceTeamOverviewCards_disabledReason:
    "index_module_CommerceTeamOverviewCards_disabledReason3",
  CommerceTeamOverviewCards_header:
    "index_module_CommerceTeamOverviewCards_header6",
  CommerceTeamOverviewCards_titleGroup:
    "index_module_CommerceTeamOverviewCards_titleGroup6",
  CommerceTeamOverviewCards_title:
    "index_module_CommerceTeamOverviewCards_title5",
  CommerceTeamOverviewCards_badge:
    "index_module_CommerceTeamOverviewCards_badge3",
  CommerceTeamOverviewCards_infoButton:
    "index_module_CommerceTeamOverviewCards_infoButton6",
  CommerceTeamOverviewCards_info:
    "index_module_CommerceTeamOverviewCards_info6",
  CommerceTeamOverviewCards_infoTooltip:
    "index_module_CommerceTeamOverviewCards_infoTooltip5",
  CommerceTeamOverviewCards_actions:
    "index_module_CommerceTeamOverviewCards_actions6",
  CommerceTeamOverviewCards_actionWrap:
    "index_module_CommerceTeamOverviewCards_actionWrap6",
  CommerceTeamOverviewCards_actionSeparator:
    "index_module_CommerceTeamOverviewCards_actionSeparator3",
  CommerceTeamOverviewCards_actionButton:
    "index_module_CommerceTeamOverviewCards_actionButton6",
  CommerceTeamOverviewCards_actionReason:
    "index_module_CommerceTeamOverviewCards_actionReason3",
  CommerceTeamOverviewCards_value:
    "index_module_CommerceTeamOverviewCards_value5",
  CommerceTeamManageSurface_tabs:
    "index_module_CommerceTeamManageSurface_tabs6",
  CommerceTeamManageSurface_tabBadge:
    "index_module_CommerceTeamManageSurface_tabBadge3",
  CommerceTeamSpaceSwitcher_optionBadge:
    "index_module_CommerceTeamSpaceSwitcher_optionBadge3",
  CommerceTeamManageSurface_statusRegion:
    "index_module_CommerceTeamManageSurface_statusRegion6",
  CommerceTeamSpaceSwitcher_root:
    "index_module_CommerceTeamSpaceSwitcher_root6",
  CommerceTeamSpaceSwitcher_label:
    "index_module_CommerceTeamSpaceSwitcher_label3",
  CommerceTeamSpaceSwitcher_viewport:
    "index_module_CommerceTeamSpaceSwitcher_viewport5",
  CommerceTeamSpaceSwitcher_option:
    "index_module_CommerceTeamSpaceSwitcher_option5",
  CommerceTeamSpaceSwitcher_optionAvatar:
    "index_module_CommerceTeamSpaceSwitcher_optionAvatar6",
  CommerceTeamSpaceSwitcher_optionAvatarImage:
    "index_module_CommerceTeamSpaceSwitcher_optionAvatarImage6",
  CommerceTeamSpaceSwitcher_optionBody:
    "index_module_CommerceTeamSpaceSwitcher_optionBody6",
  CommerceTeamSpaceSwitcher_optionNameRow:
    "index_module_CommerceTeamSpaceSwitcher_optionNameRow6",
  CommerceTeamSpaceSwitcher_optionName:
    "index_module_CommerceTeamSpaceSwitcher_optionName6",
  CommerceTeamSpaceSwitcher_optionDescription:
    "index_module_CommerceTeamSpaceSwitcher_optionDescription6",
  CommerceTeamSpaceSwitcher_optionMeta:
    "index_module_CommerceTeamSpaceSwitcher_optionMeta6",
  CommerceTeamSpaceSwitcher_empty:
    "index_module_CommerceTeamSpaceSwitcher_empty6",
  CommerceTeamStatusBlock_root: "index_module_CommerceTeamStatusBlock_root5",
  CommerceTeamStatusBlock_icon: "index_module_CommerceTeamStatusBlock_icon6",
  CommerceTeamStatusBlock_content:
    "index_module_CommerceTeamStatusBlock_content6",
  CommerceTeamStatusBlock_title: "index_module_CommerceTeamStatusBlock_title5",
  CommerceTeamStatusBlock_description:
    "index_module_CommerceTeamStatusBlock_description6",
  CommerceTeamStatusBlock_actionReason:
    "index_module_CommerceTeamStatusBlock_actionReason6",
  CommerceTeamStatusBlock_actions:
    "index_module_CommerceTeamStatusBlock_actions6",
  CommerceTeamMemberPanel_root: "index_module_CommerceTeamMemberPanel_root6",
  CommerceTeamAuditPanel_root: "index_module_CommerceTeamAuditPanel_root6",
  CommerceTeamCreditPanel_root: "index_module_CommerceTeamCreditPanel_root6",
  CommerceTeamInviteDialog_root: "index_module_CommerceTeamInviteDialog_root5",
  CommerceTeamProfileEditDialog_root:
    "index_module_CommerceTeamProfileEditDialog_root5",
  CommerceTeamActionConfirmModal_root:
    "index_module_CommerceTeamActionConfirmModal_root5",
  CommerceTeamMemberPanel_table: "index_module_CommerceTeamMemberPanel_table5",
  CommerceTeamAuditPanel_table: "index_module_CommerceTeamAuditPanel_table6",
  CommerceTeamAuditPanel_statusRegion:
    "index_module_CommerceTeamAuditPanel_statusRegion4",
  CommerceTeamAuditPanel_emptyStatusBlock:
    "index_module_CommerceTeamAuditPanel_emptyStatusBlock",
  CommerceTeamAuditPanel_emptyStatusBlockContent:
    "index_module_CommerceTeamAuditPanel_emptyStatusBlockContent",
  CommerceTeamMemberPanel_header:
    "index_module_CommerceTeamMemberPanel_header5",
  CommerceTeamAuditPanel_header: "index_module_CommerceTeamAuditPanel_header5",
  CommerceTeamMemberPanel_row: "index_module_CommerceTeamMemberPanel_row5",
  CommerceTeamAuditPanel_row: "index_module_CommerceTeamAuditPanel_row5",
  CommerceTeamCreditPanel_record:
    "index_module_CommerceTeamCreditPanel_record5",
  CommerceTeamMemberPanel_cell: "index_module_CommerceTeamMemberPanel_cell5",
  CommerceTeamMemberPanel_headerCell:
    "index_module_CommerceTeamMemberPanel_headerCell3",
  CommerceTeamAuditPanel_cell: "index_module_CommerceTeamAuditPanel_cell5",
  CommerceTeamAuditPanel_headerCell:
    "index_module_CommerceTeamAuditPanel_headerCell3",
  CommerceTeamMemberPanel_headerInfoButton:
    "index_module_CommerceTeamMemberPanel_headerInfoButton6",
  CommerceTeamMemberPanel_headerInfo:
    "index_module_CommerceTeamMemberPanel_headerInfo5",
  CommerceTeamMemberPanel_headerInfoTooltip:
    "index_module_CommerceTeamMemberPanel_headerInfoTooltip5",
  CommerceTeamMemberPanel_user: "index_module_CommerceTeamMemberPanel_user6",
  CommerceTeamAuditPanel_user: "index_module_CommerceTeamAuditPanel_user6",
  CommerceTeamMemberPanel_userAvatar:
    "index_module_CommerceTeamMemberPanel_userAvatar6",
  CommerceTeamAuditPanel_userAvatar:
    "index_module_CommerceTeamAuditPanel_userAvatar6",
  CommerceTeamProfileEditDialog_avatarPreview:
    "index_module_CommerceTeamProfileEditDialog_avatarPreview6",
  CommerceTeamMemberPanel_userBody:
    "index_module_CommerceTeamMemberPanel_userBody6",
  CommerceTeamAuditPanel_userBody:
    "index_module_CommerceTeamAuditPanel_userBody6",
  CommerceTeamMemberPanel_userNameRow:
    "index_module_CommerceTeamMemberPanel_userNameRow6",
  CommerceTeamAuditPanel_userNameRow:
    "index_module_CommerceTeamAuditPanel_userNameRow6",
  CommerceTeamMemberPanel_userName:
    "index_module_CommerceTeamMemberPanel_userName5",
  CommerceTeamAuditPanel_userName:
    "index_module_CommerceTeamAuditPanel_userName5",
  CommerceTeamMemberPanel_userDescription:
    "index_module_CommerceTeamMemberPanel_userDescription6",
  CommerceTeamMemberPanel_userMeta:
    "index_module_CommerceTeamMemberPanel_userMeta6",
  CommerceTeamMemberPanel_joinedAt:
    "index_module_CommerceTeamMemberPanel_joinedAt3",
  CommerceTeamAuditPanel_userDescription:
    "index_module_CommerceTeamAuditPanel_userDescription6",
  CommerceTeamAuditPanel_userMeta:
    "index_module_CommerceTeamAuditPanel_userMeta6",
  CommerceTeamAuditPanel_appliedAt:
    "index_module_CommerceTeamAuditPanel_appliedAt3",
  CommerceTeamCreditPanel_description:
    "index_module_CommerceTeamCreditPanel_description3",
  CommerceTeamCreditPanel_metricDescription:
    "index_module_CommerceTeamCreditPanel_metricDescription3",
  CommerceTeamCreditPanel_recordDescription:
    "index_module_CommerceTeamCreditPanel_recordDescription6",
  CommerceTeamCreditPanel_recordMeta:
    "index_module_CommerceTeamCreditPanel_recordMeta6",
  CommerceTeamInviteDialog_description:
    "index_module_CommerceTeamInviteDialog_description3",
  CommerceTeamInviteDialog_seatMeta:
    "index_module_CommerceTeamInviteDialog_seatMeta3",
  CommerceTeamInviteDialog_footer:
    "index_module_CommerceTeamInviteDialog_footer6",
  CommerceTeamProfileEditDialog_description:
    "index_module_CommerceTeamProfileEditDialog_description3",
  CommerceTeamActionConfirmModal_description:
    "index_module_CommerceTeamActionConfirmModal_description3",
  CommerceTeamActionConfirmModal_detail:
    "index_module_CommerceTeamActionConfirmModal_detail3",
  CommerceTeamMemberPanel_actionReason:
    "index_module_CommerceTeamMemberPanel_actionReason6",
  CommerceTeamAuditPanel_actionReason:
    "index_module_CommerceTeamAuditPanel_actionReason6",
  CommerceTeamInviteDialog_actionReason:
    "index_module_CommerceTeamInviteDialog_actionReason3",
  CommerceTeamProfileEditDialog_actionReason:
    "index_module_CommerceTeamProfileEditDialog_actionReason3",
  CommerceTeamActionConfirmModal_actionReason:
    "index_module_CommerceTeamActionConfirmModal_actionReason3",
  CommerceTeamMemberPanel_userBadge:
    "index_module_CommerceTeamMemberPanel_userBadge3",
  CommerceTeamAuditPanel_userBadge:
    "index_module_CommerceTeamAuditPanel_userBadge3",
  CommerceTeamAuditPanel_statusText:
    "index_module_CommerceTeamAuditPanel_statusText5",
  CommerceTeamMemberPanel_role: "index_module_CommerceTeamMemberPanel_role6",
  CommerceTeamAuditPanel_actions:
    "index_module_CommerceTeamAuditPanel_actions5",
  CommerceTeamMemberPanel_actions:
    "index_module_CommerceTeamMemberPanel_actions6",
  CommerceTeamInviteDialog_actions:
    "index_module_CommerceTeamInviteDialog_actions6",
  CommerceTeamProfileEditDialog_actions:
    "index_module_CommerceTeamProfileEditDialog_actions5",
  CommerceTeamActionConfirmModal_actions:
    "index_module_CommerceTeamActionConfirmModal_actions5",
  CommerceTeamMemberPanel_actionPlaceholder:
    "index_module_CommerceTeamMemberPanel_actionPlaceholder4",
  CommerceTeamMemberPanel_actionWrap:
    "index_module_CommerceTeamMemberPanel_actionWrap5",
  CommerceTeamAuditPanel_actionWrap:
    "index_module_CommerceTeamAuditPanel_actionWrap5",
  CommerceTeamMemberPanel_roleSelect:
    "index_module_CommerceTeamMemberPanel_roleSelect6",
  CommerceTeamProfileEditDialog_nameInput:
    "index_module_CommerceTeamProfileEditDialog_nameInput5",
  CommerceTeamMemberPanel_roleMenu:
    "index_module_CommerceTeamMemberPanel_roleMenu6",
  CommerceTeamMemberPanel_roleOption:
    "index_module_CommerceTeamMemberPanel_roleOption5",
  CommerceTeamMemberPanel_roleOptionCheck:
    "index_module_CommerceTeamMemberPanel_roleOptionCheck6",
  CommerceTeamMemberPanel_pager: "index_module_CommerceTeamMemberPanel_pager6",
  CommerceTeamAuditPanel_pager: "index_module_CommerceTeamAuditPanel_pager6",
  CommerceTeamMemberPanel_pagerButton:
    "index_module_CommerceTeamMemberPanel_pagerButton5",
  CommerceTeamMemberPanel_pagerLabel:
    "index_module_CommerceTeamMemberPanel_pagerLabel5",
  CommerceTeamAuditPanel_pagerButton:
    "index_module_CommerceTeamAuditPanel_pagerButton5",
  CommerceTeamAuditPanel_pagerLabel:
    "index_module_CommerceTeamAuditPanel_pagerLabel5",
  CommerceTeamMemberPanel_pagerInput:
    "index_module_CommerceTeamMemberPanel_pagerInput5",
  CommerceTeamAuditPanel_pagerInput:
    "index_module_CommerceTeamAuditPanel_pagerInput5",
  CommerceTeamMemberPanel_pagerTotal:
    "index_module_CommerceTeamMemberPanel_pagerTotal6",
  CommerceTeamMemberPanel_pagerCurrent:
    "index_module_CommerceTeamMemberPanel_pagerCurrent6",
  CommerceTeamAuditPanel_pagerTotal:
    "index_module_CommerceTeamAuditPanel_pagerTotal6",
  CommerceTeamAuditPanel_pagerCurrent:
    "index_module_CommerceTeamAuditPanel_pagerCurrent6",
  CommerceTeamMemberPanel_roleText:
    "index_module_CommerceTeamMemberPanel_roleText5",
  CommerceTeamMemberPanel_credit:
    "index_module_CommerceTeamMemberPanel_credit3",
  CommerceTeamCreditPanel_title: "index_module_CommerceTeamCreditPanel_title3",
  CommerceTeamCreditPanel_metricValue:
    "index_module_CommerceTeamCreditPanel_metricValue3",
  CommerceTeamCreditPanel_recordTitle:
    "index_module_CommerceTeamCreditPanel_recordTitle6",
  CommerceTeamMemberPanel_actionButton:
    "index_module_CommerceTeamMemberPanel_actionButton5",
  CommerceTeamAuditPanel_actionButton:
    "index_module_CommerceTeamAuditPanel_actionButton5",
  CommerceTeamCreditPanel_actionButton:
    "index_module_CommerceTeamCreditPanel_actionButton5",
  CommerceTeamInviteDialog_actionButton:
    "index_module_CommerceTeamInviteDialog_actionButton5",
  CommerceTeamProfileEditDialog_actionButton:
    "index_module_CommerceTeamProfileEditDialog_actionButton5",
  CommerceTeamActionConfirmModal_actionButton:
    "index_module_CommerceTeamActionConfirmModal_actionButton5",
  CommerceTeamInviteDialog_closeButton:
    "index_module_CommerceTeamInviteDialog_closeButton5",
  CommerceTeamProfileEditDialog_closeButton:
    "index_module_CommerceTeamProfileEditDialog_closeButton5",
  CommerceTeamActionConfirmModal_closeButton:
    "index_module_CommerceTeamActionConfirmModal_closeButton5",
  CommerceTeamProfileEditDialog_colorOption:
    "index_module_CommerceTeamProfileEditDialog_colorOption5",
  CommerceTeamInviteDialog_panel:
    "index_module_CommerceTeamInviteDialog_panel5",
  CommerceTeamProfileEditDialog_panel:
    "index_module_CommerceTeamProfileEditDialog_panel5",
  CommerceTeamActionConfirmModal_panel:
    "index_module_CommerceTeamActionConfirmModal_panel5",
  CommerceTeamInviteDialog_title:
    "index_module_CommerceTeamInviteDialog_title3",
  CommerceTeamProfileEditDialog_title:
    "index_module_CommerceTeamProfileEditDialog_title3",
  CommerceTeamActionConfirmModal_title:
    "index_module_CommerceTeamActionConfirmModal_title3",
  CommerceTeamInviteDialog_titleGroup:
    "index_module_CommerceTeamInviteDialog_titleGroup6",
  CommerceTeamProfileEditDialog_titleGroup:
    "index_module_CommerceTeamProfileEditDialog_titleGroup5",
  CommerceTeamActionConfirmModal_titleGroup:
    "index_module_CommerceTeamActionConfirmModal_titleGroup5",
  CommerceTeamInviteDialog_seat: "index_module_CommerceTeamInviteDialog_seat5",
  CommerceTeamInviteDialog_linkMain:
    "index_module_CommerceTeamInviteDialog_linkMain6",
  CommerceTeamProfileEditDialog_form:
    "index_module_CommerceTeamProfileEditDialog_form5",
  CommerceTeamProfileEditDialog_field:
    "index_module_CommerceTeamProfileEditDialog_field5",
  CommerceTeamActionConfirmModal_details:
    "index_module_CommerceTeamActionConfirmModal_details6",
  CommerceTeamInviteDialog_linkField:
    "index_module_CommerceTeamInviteDialog_linkField6",
  CommerceTeamInviteDialog_seatText:
    "index_module_CommerceTeamInviteDialog_seatText3",
  CommerceTeamInviteDialog_linkLabel:
    "index_module_CommerceTeamInviteDialog_linkLabel3",
  CommerceTeamProfileEditDialog_label:
    "index_module_CommerceTeamProfileEditDialog_label3",
  CommerceTeamInviteDialog_seatProgress:
    "index_module_CommerceTeamInviteDialog_seatProgress6",
  CommerceTeamInviteDialog_seatProgressBar:
    "index_module_CommerceTeamInviteDialog_seatProgressBar5",
  CommerceTeamInviteDialog_linkValue:
    "index_module_CommerceTeamInviteDialog_linkValue5",
  CommerceTeamProfileEditDialog_avatarRow:
    "index_module_CommerceTeamProfileEditDialog_avatarRow5",
  CommerceTeamProfileEditDialog_colorGrid:
    "index_module_CommerceTeamProfileEditDialog_colorGrid5",
  CommerceTeamProfileEditDialog_colorSwatch:
    "index_module_CommerceTeamProfileEditDialog_colorSwatch5",
  CommerceTeamProfileEditDialog_error:
    "index_module_CommerceTeamProfileEditDialog_error3",
  CommerceTeamCreditPanel_actions:
    "index_module_CommerceTeamCreditPanel_actions6",
  CommerceTeamCreditPanel_statusRegion:
    "index_module_CommerceTeamCreditPanel_statusRegion6",
  CommerceTeamCreditPanel_header:
    "index_module_CommerceTeamCreditPanel_header6",
  CommerceTeamCreditPanel_metrics:
    "index_module_CommerceTeamCreditPanel_metrics6",
  CommerceTeamCreditPanel_metric:
    "index_module_CommerceTeamCreditPanel_metric6",
  CommerceTeamCreditPanel_metricLabel:
    "index_module_CommerceTeamCreditPanel_metricLabel3",
  CommerceTeamCreditPanel_list: "index_module_CommerceTeamCreditPanel_list6",
  CommerceTeamCreditPanel_recordMain:
    "index_module_CommerceTeamCreditPanel_recordMain6",
  CommerceTeamCreditPanel_recordAmount:
    "index_module_CommerceTeamCreditPanel_recordAmount3",
  CommerceTeamInviteDialog_header:
    "index_module_CommerceTeamInviteDialog_header6",
  CommerceTeamProfileEditDialog_header:
    "index_module_CommerceTeamProfileEditDialog_header6",
  CommerceTeamActionConfirmModal_header:
    "index_module_CommerceTeamActionConfirmModal_header6",
  CommerceTeamActionConfirmModal_actionWrap:
    "index_module_CommerceTeamActionConfirmModal_actionWrap6",
  CommerceTeamInviteDialog_seatHeader:
    "index_module_CommerceTeamInviteDialog_seatHeader6",
  CommerceTeamInviteDialog_seatAction:
    "index_module_CommerceTeamInviteDialog_seatAction5",
  CommerceTeamInviteDialog_linkRow:
    "index_module_CommerceTeamInviteDialog_linkRow5",
  CommerceTeamInviteDialog_actionWrap:
    "index_module_CommerceTeamInviteDialog_actionWrap6",
  CommerceTeamProfileEditDialog_nameCounter:
    "index_module_CommerceTeamProfileEditDialog_nameCounter5",
  CommerceTeamProfileEditDialog_colorField:
    "index_module_CommerceTeamProfileEditDialog_colorField6",
  CommerceTeamProfileEditDialog_colorLabel:
    "index_module_CommerceTeamProfileEditDialog_colorLabel3",
  CommerceTeamProfileEditDialog_actionWrap:
    "index_module_CommerceTeamProfileEditDialog_actionWrap6",
  CommerceTeamInviteJoinCard_root:
    "index_module_CommerceTeamInviteJoinCard_root6",
  CommerceTeamInviteJoinCard_header:
    "index_module_CommerceTeamInviteJoinCard_header6",
  CommerceTeamInviteJoinCard_titleRow:
    "index_module_CommerceTeamInviteJoinCard_titleRow6",
  CommerceTeamInviteJoinCard_title:
    "index_module_CommerceTeamInviteJoinCard_title6",
  CommerceTeamInviteJoinCard_closeButton:
    "index_module_CommerceTeamInviteJoinCard_closeButton5",
  CommerceTeamInviteJoinCard_team:
    "index_module_CommerceTeamInviteJoinCard_team6",
  CommerceTeamInviteJoinCard_avatar:
    "index_module_CommerceTeamInviteJoinCard_avatar6",
  CommerceTeamInviteJoinCard_teamBody:
    "index_module_CommerceTeamInviteJoinCard_teamBody6",
  CommerceTeamInviteJoinCard_teamName:
    "index_module_CommerceTeamInviteJoinCard_teamName6",
  CommerceTeamInviteJoinCard_teamRole:
    "index_module_CommerceTeamInviteJoinCard_teamRole6",
  CommerceTeamInviteJoinCard_actions:
    "index_module_CommerceTeamInviteJoinCard_actions6",
  CommerceTeamInviteJoinCard_actionButton:
    "index_module_CommerceTeamInviteJoinCard_actionButton5",
  CommerceTeamCreditAdjustmentPanel_root:
    "index_module_CommerceTeamCreditAdjustmentPanel_root6",
  CommerceTeamCreditOverviewContent_root:
    "index_module_CommerceTeamCreditOverviewContent_root5",
  CommerceTeamCreditAdjustmentPanel_table:
    "index_module_CommerceTeamCreditAdjustmentPanel_table6",
  CommerceTeamCreditAdjustmentPanel_header:
    "index_module_CommerceTeamCreditAdjustmentPanel_header6",
  CommerceTeamCreditAdjustmentPanel_row:
    "index_module_CommerceTeamCreditAdjustmentPanel_row6",
  CommerceTeamCreditAdjustmentPanel_cell:
    "index_module_CommerceTeamCreditAdjustmentPanel_cell6",
  CommerceTeamCreditAdjustmentPanel_headerCell:
    "index_module_CommerceTeamCreditAdjustmentPanel_headerCell3",
  CommerceTeamCreditAdjustmentPanel_user:
    "index_module_CommerceTeamCreditAdjustmentPanel_user6",
  CommerceTeamCreditAdjustmentPanel_userAvatar:
    "index_module_CommerceTeamCreditAdjustmentPanel_userAvatar6",
  CommerceTeamCreditAdjustmentPanel_userAvatarImage:
    "index_module_CommerceTeamCreditAdjustmentPanel_userAvatarImage6",
  CommerceTeamCreditAdjustmentPanel_userBody:
    "index_module_CommerceTeamCreditAdjustmentPanel_userBody6",
  CommerceTeamCreditAdjustmentPanel_userName:
    "index_module_CommerceTeamCreditAdjustmentPanel_userName6",
  CommerceTeamCreditAdjustmentPanel_userDescription:
    "index_module_CommerceTeamCreditAdjustmentPanel_userDescription6",
  CommerceTeamCreditAdjustmentPanel_consumed:
    "index_module_CommerceTeamCreditAdjustmentPanel_consumed3",
  CommerceTeamCreditAdjustmentPanel_beforeBalance:
    "index_module_CommerceTeamCreditAdjustmentPanel_beforeBalance3",
  CommerceTeamCreditAdjustmentPanel_field:
    "index_module_CommerceTeamCreditAdjustmentPanel_field5",
  CommerceTeamCreditAdjustmentPanel_inputControl:
    "index_module_CommerceTeamCreditAdjustmentPanel_inputControl5",
  CommerceTeamCreditAdjustmentPanel_stepper:
    "index_module_CommerceTeamCreditAdjustmentPanel_stepper5",
  CommerceTeamCreditAdjustmentPanel_input:
    "index_module_CommerceTeamCreditAdjustmentPanel_input6",
  CommerceTeamCreditAdjustmentPanel_inputSuffix:
    "index_module_CommerceTeamCreditAdjustmentPanel_inputSuffix6",
  CommerceTeamCreditAdjustmentPanel_stepperButton:
    "index_module_CommerceTeamCreditAdjustmentPanel_stepperButton6",
  CommerceTeamCreditAdjustmentPanel_stepperIcon:
    "index_module_CommerceTeamCreditAdjustmentPanel_stepperIcon6",
  CommerceTeamCreditAdjustmentPanel_fieldError:
    "index_module_CommerceTeamCreditAdjustmentPanel_fieldError6",
  CommerceTeamCreditAdjustmentPanel_actions:
    "index_module_CommerceTeamCreditAdjustmentPanel_actions6",
  CommerceTeamCreditAdjustmentPanel_actionWrap:
    "index_module_CommerceTeamCreditAdjustmentPanel_actionWrap6",
  CommerceTeamCreditAdjustmentPanel_actionDivider:
    "index_module_CommerceTeamCreditAdjustmentPanel_actionDivider6",
  CommerceTeamCreditAdjustmentPanel_actionButton:
    "index_module_CommerceTeamCreditAdjustmentPanel_actionButton5",
  CommerceTeamCreditAdjustmentPanel_actionReason:
    "index_module_CommerceTeamCreditAdjustmentPanel_actionReason6",
  CommerceTeamCreditAdjustmentPanel_actionPlaceholder:
    "index_module_CommerceTeamCreditAdjustmentPanel_actionPlaceholder6",
  CommerceTeamCreditAdjustmentPanel_headerInfoButton:
    "index_module_CommerceTeamCreditAdjustmentPanel_headerInfoButton6",
  CommerceTeamCreditOverviewContent_totalInfoButton:
    "index_module_CommerceTeamCreditOverviewContent_totalInfoButton6",
  CommerceTeamCreditAdjustmentPanel_headerInfoTooltip:
    "index_module_CommerceTeamCreditAdjustmentPanel_headerInfoTooltip6",
  CommerceTeamCreditOverviewContent_totalInfoTooltip:
    "index_module_CommerceTeamCreditOverviewContent_totalInfoTooltip5",
  CommerceTeamCreditAdjustmentPanel_headerInfo:
    "index_module_CommerceTeamCreditAdjustmentPanel_headerInfo6",
  CommerceTeamCreditOverviewContent_totalInfo:
    "index_module_CommerceTeamCreditOverviewContent_totalInfo6",
  CommerceTeamCreditAdjustmentPanel_statusRegion:
    "index_module_CommerceTeamCreditAdjustmentPanel_statusRegion6",
  CommerceTeamCreditOverviewContent_status:
    "index_module_CommerceTeamCreditOverviewContent_status6",
  CommerceTeamCreditOverviewContent_ring:
    "index_module_CommerceTeamCreditOverviewContent_ring6",
  CommerceTeamCreditOverviewContent_ringTrack:
    "index_module_CommerceTeamCreditOverviewContent_ringTrack3",
  CommerceTeamCreditOverviewContent_ringValue:
    "index_module_CommerceTeamCreditOverviewContent_ringValue3",
  CommerceTeamCreditOverviewContent_ringSegment:
    "index_module_CommerceTeamCreditOverviewContent_ringSegment5",
  CommerceTeamCreditOverviewContent_ringTooltip:
    "index_module_CommerceTeamCreditOverviewContent_ringTooltip6",
  CommerceTeamCreditOverviewContent_ringTooltipRow:
    "index_module_CommerceTeamCreditOverviewContent_ringTooltipRow6",
  CommerceTeamCreditOverviewContent_ringTooltipMarker:
    "index_module_CommerceTeamCreditOverviewContent_ringTooltipMarker5",
  CommerceTeamCreditOverviewContent_ringTooltipValue:
    "index_module_CommerceTeamCreditOverviewContent_ringTooltipValue3",
  CommerceTeamCreditOverviewContent_ringValueText:
    "index_module_CommerceTeamCreditOverviewContent_ringValueText3",
  CommerceTeamCreditOverviewContent_ringLabel:
    "index_module_CommerceTeamCreditOverviewContent_ringLabel3",
  CommerceTeamCreditOverviewContent_details:
    "index_module_CommerceTeamCreditOverviewContent_details6",
  CommerceTeamCreditOverviewContent_totalLabelGroup:
    "index_module_CommerceTeamCreditOverviewContent_totalLabelGroup6",
  CommerceTeamCreditOverviewContent_totalLabel:
    "index_module_CommerceTeamCreditOverviewContent_totalLabel3",
  CommerceTeamCreditOverviewContent_totalValue:
    "index_module_CommerceTeamCreditOverviewContent_totalValue3",
  CommerceTeamCreditOverviewContent_metrics:
    "index_module_CommerceTeamCreditOverviewContent_metrics6",
  CommerceTeamCreditOverviewContent_metric:
    "index_module_CommerceTeamCreditOverviewContent_metric6",
  CommerceTeamCreditOverviewContent_metricMarker:
    "index_module_CommerceTeamCreditOverviewContent_metricMarker5",
  CommerceTeamCreditOverviewContent_metricLabel:
    "index_module_CommerceTeamCreditOverviewContent_metricLabel3",
  CommerceTeamCreditOverviewContent_metricValue:
    "index_module_CommerceTeamCreditOverviewContent_metricValue3",
};
export function $z(e) {
  return i.jsx("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    ...e,
    children: i.jsx("path", {
      d: "M5.6224 0.394531C5.99059 0.394531 6.28906 0.693008 6.28906 1.0612C6.28906 1.42939 5.99059 1.72786 5.6224 1.72786H3.33333C2.22876 1.72786 1.33333 2.6233 1.33333 3.72786V9.65755C1.33333 10.7621 2.22877 11.6576 3.33333 11.6576H9.26302C10.3676 11.6576 11.263 10.7621 11.263 9.65755V7.33333C11.263 6.96514 11.5615 6.66667 11.9297 6.66667C12.2979 6.66667 12.5964 6.96514 12.5964 7.33333V9.65755C12.5964 11.4985 11.104 12.9909 9.26302 12.9909H3.33333L3.16211 12.987C1.40073 12.8979 0 11.4411 0 9.65755V3.72786C0 1.88692 1.49238 0.394531 3.33333 0.394531H5.6224ZM10.9635 0C11.2251 0 11.4843 0.0516239 11.7259 0.151693C11.9676 0.251795 12.1874 0.398366 12.3724 0.583333C12.5574 0.7683 12.7039 0.988148 12.804 1.22982C12.9041 1.47145 12.9557 1.73065 12.9557 1.99219C12.9557 2.2536 12.904 2.51238 12.804 2.75391C12.7039 2.99555 12.5573 3.21544 12.3724 3.40039L6.84245 8.93034C6.75702 9.01577 6.64975 9.07616 6.53255 9.10547L4.03385 9.73047C3.5456 9.85253 3.1032 9.41013 3.22526 8.92188L3.85026 6.42318C3.87957 6.30597 3.93996 6.19871 4.02539 6.11328L9.55534 0.583333C9.92883 0.209874 10.4354 7.20691e-05 10.9635 0ZM10.9635 1.33333C10.789 1.33341 10.6215 1.40263 10.498 1.52604L5.09831 6.92513L4.78776 8.16732L6.02995 7.85677L11.4297 2.45768C11.4908 2.39658 11.5392 2.32395 11.5723 2.24414C11.6053 2.16432 11.6224 2.07858 11.6224 1.99219C11.6224 1.9057 11.6054 1.81949 11.5723 1.73958C11.5392 1.65978 11.4908 1.58713 11.4297 1.52604C11.3686 1.46495 11.2959 1.41656 11.2161 1.38346C11.1362 1.35037 11.05 1.33333 10.9635 1.33333Z",
      fill: "#536471",
      fillOpacity: "0.64",
    }),
  });
}
function rM(e) {
  return i.jsx("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    style: {
      color:
        "var(--commerce-text-color-accent, var(--brand-main-default, #008ee5))",
    },
    ...e,
    children: i.jsx("path", {
      d: "M10.5794 6.59777C10.5769 6.4234 10.4563 6.27331 10.2812 6.23039C7.93728 5.65455 6.6909 4.27062 6.28805 1.26855C6.28731 1.26291 6.28609 1.25726 6.28486 1.25187C6.26791 1.11012 6.1473 1 6.00065 1C5.85401 1 5.7334 1.10987 5.71645 1.25187C5.71522 1.25751 5.71399 1.26291 5.71325 1.26855C5.31041 4.27062 4.06403 5.65455 1.72014 6.23039C1.54524 6.27307 1.42463 6.4234 1.42193 6.59777V6.61396C1.41874 6.79888 1.54795 6.96344 1.73463 7.01224C3.38508 7.44142 5.16032 8.44792 5.68427 10.0229C5.7275 10.1529 5.85057 10.2446 5.99132 10.25C5.99427 10.25 6.0063 10.25 6.0095 10.25C6.15049 10.2446 6.27331 10.1529 6.31655 10.0229C6.84049 8.44792 8.61573 7.44142 10.2662 7.01224C10.4531 6.96344 10.5823 6.79888 10.5791 6.61396V6.59777H10.5794Z",
      fill: "currentColor",
    }),
  });
}
function rA() {
  return i.jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    children: i.jsx("path", {
      d: "M7.99967 14.667C11.6816 14.667 14.6663 11.6822 14.6663 8.00033C14.6663 4.31843 11.6816 1.33366 7.99967 1.33366C4.31778 1.33366 1.33301 4.31843 1.33301 8.00033C1.33301 11.6822 4.31778 14.667 7.99967 14.667ZM7.99967 13.3337C5.05416 13.3337 2.66634 10.9458 2.66634 8.00033C2.66634 5.05481 5.05416 2.66699 7.99967 2.66699C10.9452 2.66699 13.333 5.05481 13.333 8.00033C13.333 10.9458 10.9452 13.3337 7.99967 13.3337ZM7.99967 6.46712C8.4415 6.46712 8.7998 6.10882 8.7998 5.66699C8.7998 5.22516 8.4415 4.86686 7.99967 4.86686C7.55785 4.86686 7.19954 5.22516 7.19954 5.66699C7.19954 6.10882 7.55785 6.46712 7.99967 6.46712ZM7.99967 11.2673C8.44146 11.2673 8.79973 10.9089 8.7998 10.4671V8.06738C8.7998 7.62555 8.4415 7.26725 7.99967 7.26725C7.55785 7.26725 7.19954 7.62555 7.19954 8.06738V10.4671C7.19962 10.9089 7.55789 11.2673 7.99967 11.2673Z",
      fill: "#536471",
      fillOpacity: "0.36",
    }),
  });
}
const rD = require.j == "wl4" ? rP : null;
const rR = require.j == "wl4" ? rP : null;
const rE = require.j == "wl4" ? rP : null;
const rB =
  require.j == "wl4"
    ? {
        colorOptionLabel: (e) => `\u5934\u50CF\u989C\u8272 ${e + 1}`,
      }
    : null;
const rN =
  require.j == "wl4"
    ? {
        title: "编辑空间信息",
        nameLabel: "团队名称",
        namePlaceholder: "输入文本",
        colorLabel: "头像颜色",
      }
    : null;
const rL = {
  CommerceTeamStatusBlock_content:
    rP.CommerceTeamAuditPanel_emptyStatusBlockContent,
  CommerceTeamStatusBlock_root: rP.CommerceTeamAuditPanel_emptyStatusBlock,
};
const rF =
  require.j == "wl4"
    ? {
        ready: "加入团队",
        "login-required": "登陆后加入",
        pending: "已申请，待管理员审核",
      }
    : null;
const rJ =
  require.j == "wl4"
    ? {
        prev: "上一页",
        next: "下一页",
        jumpLabel: "跳转到指定页",
        currentPageLabel: "当前页",
      }
    : null;
const rO = "anonymous";
function rQ() {
  return i.jsx(g.A, {
    size: 20,
    strokeWidth: 2,
    "aria-hidden": "true",
  });
}
function rW(closeAction) {
  if (closeAction) {
    return {
      ...closeAction,
      ariaLabel:
        closeAction.ariaLabel ??
        (typeof closeAction.label === "string" ? closeAction.label : "关闭"),
      icon: closeAction.icon ?? rQ(),
    };
  }
}
export function zw({ classes, className, ...rest }) {
  let o = q(rP, classes);
  return i.jsx(useE, {
    classes: rP,
    children: i.jsx(useRC, {
      ...rest,
      classes: o,
      className: a.A(G, className),
    }),
  });
}
export function _V({ classes, className, avatarCrossOrigin = rO, ...rest }) {
  let n = q(rE, classes);
  return i.jsx(useE, {
    classes: rP,
    children: i.jsx(useTq, {
      ...rest,
      avatarCrossOrigin,
      classes: n,
      className: a.A(G, className),
    }),
  });
}
export function kI({ classes, className, ...rest }) {
  let o = q(rP, classes);
  return i.jsx(useE, {
    classes: o,
    children: i.jsx(useTH, {
      ...rest,
      className: a.A(G, className),
    }),
  });
}
export function F2({
  classes,
  className,
  avatarCrossOrigin = rO,
  pagerTexts,
  columnInfo,
  ...rest
}) {
  let l = q(rP, classes);
  return i.jsx(useE, {
    classes: l,
    children: i.jsx(useRI, {
      ...rest,
      avatarCrossOrigin,
      columnInfo: ((e) => {
        if (e) {
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => {
              if (t) {
                return [
                  e,
                  {
                    ...t,
                    icon: t.icon ?? i.jsx(rA, {}),
                  },
                ];
              }
              return [e, t];
            }),
          );
        }
      })(columnInfo),
      pagerTexts: {
        ...rJ,
        ...pagerTexts,
      },
      className: a.A(G, className),
    }),
  });
}
export function iG({
  classes,
  className,
  statusBlockClasses,
  avatarCrossOrigin = rO,
  pagerTexts,
  ...rest
}) {
  let l = q(rP, classes);
  let statusBlockClasses_1 = q(rL, statusBlockClasses);
  return i.jsx(useE, {
    classes: l,
    children: i.jsx(useT1, {
      ...rest,
      avatarCrossOrigin,
      statusBlockClasses: statusBlockClasses_1,
      pagerTexts: {
        ...rJ,
        ...pagerTexts,
      },
      className: a.A(G, className),
    }),
  });
}
export function Dz({
  classes,
  className,
  columnInfo,
  avatarCrossOrigin = rO,
  ...rest
}) {
  let c = q(rD, classes);
  return i.jsx(useE, {
    classes: c,
    children: i.jsx(useT8, {
      ...rest,
      avatarCrossOrigin,
      columnInfo: ((e) => {
        if (e) {
          return Object.fromEntries(
            Object.entries(e).map(([e, t]) => [
              e,
              t
                ? {
                    ...t,
                    icon: t.icon ?? i.jsx(rA, {}),
                  }
                : t,
            ]),
          );
        }
      })(columnInfo),
      className: a.A(G, className),
    }),
  });
}
export function Im({ classes, className, total, ...rest }) {
  let n = (e) => {
    let tooltipValueText =
      e.tooltipValueText ??
      (e.value === null || e.value === undefined
        ? e.valueText
        : i.jsxs(i.Fragment, {
            children: [i.jsx(rM, {}), e.valueText],
          }));
    return {
      ...e,
      tooltipValueText,
    };
  };
  let c = q(rR, classes);
  let total_1 = total.info
    ? {
        ...total,
        info: {
          ...total.info,
          icon: total.info.icon ?? i.jsx(rA, {}),
        },
      }
    : total;
  return i.jsx(useE, {
    classes: c,
    children: i.jsx(useRo, {
      ...rest,
      allocatable: n(rest.allocatable),
      allocated: rest.allocated ? n(rest.allocated) : undefined,
      consumed: rest.consumed ? n(rest.consumed) : undefined,
      total: total_1,
      classes: c,
      className: a.A(G, className),
    }),
  });
}
export function yR({ classes, className, closeAction, ...rest }) {
  let n = q(rP, classes);
  let c = rW(closeAction);
  if (rest.open === false) {
    return null;
  }
  return i.jsx(useE, {
    classes: n,
    children: i.jsx(useRc, {
      ...rest,
      closeAction: c,
      className: a.A(G, className),
    }),
  });
}
export function Cw({
  classes,
  className,
  avatarCrossOrigin = rO,
  userName,
  inviterName,
  role,
  avatar,
  avatarColor,
  avatar_color,
  closeAction,
  joinAction,
  joinButtonTexts,
  ...rest
}) {
  let v;
  let _ = q(rP, classes);
  let f = {
    key: "close",
    label: "关闭",
    ariaLabel: "关闭",
    icon: rQ(),
  };
  let h =
    closeAction === null
      ? undefined
      : {
          ...f,
          ...(closeAction ?? {}),
          icon: closeAction?.icon ?? f.icon,
        };
  let joinAction_1 =
    joinAction === null
      ? undefined
      : {
          key: "join",
          ...(joinAction ?? {}),
        };
  return i.jsx(useE, {
    classes: _,
    children: i.jsx(useRs, {
      ...rest,
      avatarCrossOrigin,
      title: (v = userName ?? inviterName)
        ? i.jsxs(i.Fragment, {
            children: [v, " - 邀请你加入团队空间"],
          })
        : "邀请你加入团队空间",
      role: role ?? "协作者",
      avatarColor:
        avatarColor ??
        avatar_color ??
        avatar ??
        "linear-gradient(135deg, #5acaee 0%, #3174dc 100%), linear-gradient(135deg, #98da69 0%, #faccb4 100%)",
      closeAction: h,
      joinAction: joinAction_1,
      joinButtonTexts: {
        ...rF,
        ...joinButtonTexts,
      },
      className: a.A(G, className),
    }),
  });
}
export function Dc({ classes, className, items, ...rest }) {
  let n = q(rP, classes);
  return i.jsx(useE, {
    classes: n,
    children: i.jsx(useRk, {
      ...rest,
      items: items.map((e) => {
        if (e.info) {
          return {
            ...e,
            info: {
              ...e.info,
              icon: e.info.icon ?? i.jsx(rA, {}),
            },
          };
        }
        return e;
      }),
      className: a.A(G, className),
    }),
  });
}
function rX({
  classes,
  className,
  closeAction,
  texts,
  title,
  nameLabel,
  namePlaceholder,
  nameMaxLength,
  colorLabel,
  disableSaveWhenNameEmpty,
  ...rest
}) {
  let p = q(rP, classes);
  let C = rW(closeAction);
  if (rest.open === false) {
    return null;
  }
  return i.jsx(useE, {
    classes: p,
    children: i.jsx(useRh, {
      ...rest,
      title: title ?? rN.title,
      nameLabel: nameLabel ?? rN.nameLabel,
      namePlaceholder: namePlaceholder ?? rN.namePlaceholder,
      nameMaxLength: nameMaxLength ?? 14,
      colorLabel: colorLabel ?? rN.colorLabel,
      disableSaveWhenNameEmpty: disableSaveWhenNameEmpty ?? false,
      closeAction: C,
      texts: {
        ...rB,
        ...texts,
      },
      className: a.A(G, className),
    }),
  });
}
export { rX as eM };
export function wX({ classes, className, closeAction, ...rest }) {
  let n = q(rP, classes);
  let c = rW(closeAction);
  if (rest.open === false) {
    return null;
  }
  return i.jsx(useE, {
    classes: n,
    children: i.jsx(useTO, {
      ...rest,
      closeAction: c,
      className: a.A(G, className),
    }),
  });
}
const r4 =
  require.j == "wl4"
    ? {
        CommerceQuantityCheckoutModal_content:
          "index_module_CommerceQuantityCheckoutModal_content6",
        CommerceQuantityCheckoutModal_header:
          "index_module_CommerceQuantityCheckoutModal_header6",
        CommerceQuantityCheckoutModal_title:
          "index_module_CommerceQuantityCheckoutModal_title6",
        CommerceQuantityCheckoutModal_profile:
          "index_module_CommerceQuantityCheckoutModal_profile6",
        CommerceQuantityCheckoutModal_profileAvatar:
          "index_module_CommerceQuantityCheckoutModal_profileAvatar6",
        CommerceQuantityCheckoutModal_profileContent:
          "index_module_CommerceQuantityCheckoutModal_profileContent6",
        CommerceQuantityCheckoutModal_profileTitleRow:
          "index_module_CommerceQuantityCheckoutModal_profileTitleRow6",
        CommerceQuantityCheckoutModal_profileMetaRow:
          "index_module_CommerceQuantityCheckoutModal_profileMetaRow6",
        CommerceQuantityCheckoutModal_profileTitle:
          "index_module_CommerceQuantityCheckoutModal_profileTitle6",
        CommerceQuantityCheckoutModal_profileSubtitle:
          "index_module_CommerceQuantityCheckoutModal_profileSubtitle6",
        CommerceQuantityCheckoutModal_profileMeta:
          "index_module_CommerceQuantityCheckoutModal_profileMeta6",
        CommerceQuantityCheckoutModal_currentQuantityLabel:
          "index_module_CommerceQuantityCheckoutModal_currentQuantityLabel6",
        CommerceQuantityCheckoutModal_currentQuantityValue:
          "index_module_CommerceQuantityCheckoutModal_currentQuantityValue6",
        CommerceQuantityCheckoutModal_profileBadge:
          "index_module_CommerceQuantityCheckoutModal_profileBadge6",
        CommerceQuantityCheckoutModal_headerAside:
          "index_module_CommerceQuantityCheckoutModal_headerAside6",
        CommerceQuantityCheckoutModal_currentQuantity:
          "index_module_CommerceQuantityCheckoutModal_currentQuantity6",
        CommerceQuantityCheckoutModal_closeButton:
          "index_module_CommerceQuantityCheckoutModal_closeButton6",
        CommerceQuantityCheckoutModal_closeIcon:
          "index_module_CommerceQuantityCheckoutModal_closeIcon6",
        CommerceQuantityCheckoutModal_main:
          "index_module_CommerceQuantityCheckoutModal_main6",
        CommerceQuantityCheckoutModal_checkoutContent:
          "index_module_CommerceQuantityCheckoutModal_checkoutContent6",
        CommerceQuantityCheckoutModal_purchase:
          "index_module_CommerceQuantityCheckoutModal_purchase6",
        CommerceQuantityCheckoutModal_purchaseTitle:
          "index_module_CommerceQuantityCheckoutModal_purchaseTitle6",
        CommerceQuantityCheckoutModal_body:
          "index_module_CommerceQuantityCheckoutModal_body6",
        CommerceQuantityCheckoutModal_infoRows:
          "index_module_CommerceQuantityCheckoutModal_infoRows6",
        CommerceQuantityCheckoutModal_summaryRows:
          "index_module_CommerceQuantityCheckoutModal_summaryRows6",
        CommerceQuantityCheckoutModal_infoRow:
          "index_module_CommerceQuantityCheckoutModal_infoRow6",
        CommerceQuantityCheckoutModal_summaryRow:
          "index_module_CommerceQuantityCheckoutModal_summaryRow6",
        CommerceQuantityCheckoutModal_infoLabel:
          "index_module_CommerceQuantityCheckoutModal_infoLabel6",
        CommerceQuantityCheckoutModal_infoValue:
          "index_module_CommerceQuantityCheckoutModal_infoValue6",
        CommerceQuantityCheckoutModal_summaryLabel:
          "index_module_CommerceQuantityCheckoutModal_summaryLabel6",
        CommerceQuantityCheckoutModal_summaryValue:
          "index_module_CommerceQuantityCheckoutModal_summaryValue6",
        CommerceQuantityCheckoutModal_quantity:
          "index_module_CommerceQuantityCheckoutModal_quantity6",
        CommerceQuantityCheckoutModal_actions:
          "index_module_CommerceQuantityCheckoutModal_actions6",
        CommerceQuantityCheckoutModal_cancelButton:
          "index_module_CommerceQuantityCheckoutModal_cancelButton6",
        CommerceQuantityCheckoutModal_confirmButton:
          "index_module_CommerceQuantityCheckoutModal_confirmButton6",
        CommerceQuantityCheckoutModal_paymentDivider:
          "index_module_CommerceQuantityCheckoutModal_paymentDivider6",
        CommerceQuantityCheckoutModal_payment:
          "index_module_CommerceQuantityCheckoutModal_payment6",
        CommerceQuantityCheckoutModal_qrArea:
          "index_module_CommerceQuantityCheckoutModal_qrArea6",
        CommerceQuantityCheckoutModal_qrImage:
          "index_module_CommerceQuantityCheckoutModal_qrImage6",
        CommerceQuantityCheckoutModal_qrPlaceholder:
          "index_module_CommerceQuantityCheckoutModal_qrPlaceholder6",
        CommerceQuantityCheckoutModal_qrLoading:
          "index_module_CommerceQuantityCheckoutModal_qrLoading6",
        CommerceQuantityCheckoutModal_qrError:
          "index_module_CommerceQuantityCheckoutModal_qrError6",
        CommerceQuantityCheckoutModal_qrLoadingText:
          "index_module_CommerceQuantityCheckoutModal_qrLoadingText6",
        CommerceQuantityCheckoutModal_qrErrorText:
          "index_module_CommerceQuantityCheckoutModal_qrErrorText6",
        CommerceQuantityCheckoutModal_qrReloadButton:
          "index_module_CommerceQuantityCheckoutModal_qrReloadButton6",
        CommerceQuantityCheckoutModal_agreement:
          "index_module_CommerceQuantityCheckoutModal_agreement6",
        CommerceQuantityCheckoutModal_agreementLink:
          "index_module_CommerceQuantityCheckoutModal_agreementLink6",
        CommerceQuantityCheckoutModal_paymentAgreement:
          "index_module_CommerceQuantityCheckoutModal_paymentAgreement6",
        CommerceQuantityCheckoutModal_paymentAgreementLink:
          "index_module_CommerceQuantityCheckoutModal_paymentAgreementLink6",
        CommerceQuantityCheckoutModal_scanHint:
          "index_module_CommerceQuantityCheckoutModal_scanHint6",
        CommerceQuantityCheckoutModal_paymentMethods:
          "index_module_CommerceQuantityCheckoutModal_paymentMethods6",
        CommerceQuantityCheckoutModal_paymentMethodIcon:
          "index_module_CommerceQuantityCheckoutModal_paymentMethodIcon5",
        CommerceQuantityCheckoutModal_notice:
          "index_module_CommerceQuantityCheckoutModal_notice6",
        CommerceQuantityCheckoutModal_state:
          "index_module_CommerceQuantityCheckoutModal_state4",
        CommerceQuantityCheckoutModal_loadingIcon:
          "index_module_CommerceQuantityCheckoutModal_loadingIcon3",
        CommerceQuantityCheckoutModal_loadingIconSpin:
          "index_module_CommerceQuantityCheckoutModal_loadingIconSpin3",
        CommerceQuantityCheckoutModal_errorCard:
          "index_module_CommerceQuantityCheckoutModal_errorCard4",
        CommerceQuantityCheckoutModal_errorMessage:
          "index_module_CommerceQuantityCheckoutModal_errorMessage4",
        CommerceQuantityCheckoutModal_retryButton:
          "index_module_CommerceQuantityCheckoutModal_retryButton4",
      }
    : null;
const r1 =
  require.j == "wl4"
    ? [
        "CommerceQuantityCheckoutModal_modal",
        "CommerceQuantityCheckoutModal_content",
        "CommerceQuantityCheckoutModal_header",
        "CommerceQuantityCheckoutModal_title",
        "CommerceQuantityCheckoutModal_profile",
        "CommerceQuantityCheckoutModal_profileAvatar",
        "CommerceQuantityCheckoutModal_profileContent",
        "CommerceQuantityCheckoutModal_profileTitleRow",
        "CommerceQuantityCheckoutModal_profileTitle",
        "CommerceQuantityCheckoutModal_profileBadge",
        "CommerceQuantityCheckoutModal_profileMetaRow",
        "CommerceQuantityCheckoutModal_profileSubtitle",
        "CommerceQuantityCheckoutModal_profileMeta",
        "CommerceQuantityCheckoutModal_headerAside",
        "CommerceQuantityCheckoutModal_currentQuantity",
        "CommerceQuantityCheckoutModal_currentQuantityLabel",
        "CommerceQuantityCheckoutModal_currentQuantityValue",
        "CommerceQuantityCheckoutModal_closeButton",
        "CommerceQuantityCheckoutModal_closeIcon",
        "CommerceQuantityCheckoutModal_main",
        "CommerceQuantityCheckoutModal_checkoutContent",
        "CommerceQuantityCheckoutModal_purchase",
        "CommerceQuantityCheckoutModal_purchaseTitle",
        "CommerceQuantityCheckoutModal_body",
        "CommerceQuantityCheckoutModal_infoRows",
        "CommerceQuantityCheckoutModal_infoRow",
        "CommerceQuantityCheckoutModal_infoLabel",
        "CommerceQuantityCheckoutModal_infoValue",
        "CommerceQuantityCheckoutModal_quantity",
        "CommerceQuantityCheckoutModal_summaryRows",
        "CommerceQuantityCheckoutModal_summaryRow",
        "CommerceQuantityCheckoutModal_summaryLabel",
        "CommerceQuantityCheckoutModal_summaryValue",
        "CommerceQuantityCheckoutModal_actions",
        "CommerceQuantityCheckoutModal_cancelButton",
        "CommerceQuantityCheckoutModal_confirmButton",
        "CommerceQuantityCheckoutModal_payment",
        "CommerceQuantityCheckoutModal_paymentDivider",
        "CommerceQuantityCheckoutModal_qrArea",
        "CommerceQuantityCheckoutModal_qrImage",
        "CommerceQuantityCheckoutModal_qrPlaceholder",
        "CommerceQuantityCheckoutModal_qrLoading",
        "CommerceQuantityCheckoutModal_qrLoadingText",
        "CommerceQuantityCheckoutModal_qrError",
        "CommerceQuantityCheckoutModal_qrErrorText",
        "CommerceQuantityCheckoutModal_qrReloadButton",
        "CommerceQuantityCheckoutModal_agreement",
        "CommerceQuantityCheckoutModal_agreementLink",
        "CommerceQuantityCheckoutModal_paymentAgreement",
        "CommerceQuantityCheckoutModal_paymentAgreementLink",
        "CommerceQuantityCheckoutModal_scanHint",
        "CommerceQuantityCheckoutModal_paymentMethods",
        "CommerceQuantityCheckoutModal_paymentMethodIcon",
        "CommerceQuantityCheckoutModal_notice",
        "CommerceQuantityCheckoutModal_state",
        "CommerceQuantityCheckoutModal_loadingIcon",
        "CommerceQuantityCheckoutModal_errorCard",
        "CommerceQuantityCheckoutModal_errorMessage",
        "CommerceQuantityCheckoutModal_retryButton",
      ]
    : null;
function r5({
  rows,
  groupSlot,
  rowSlot,
  labelSlot,
  valueSlot,
  groupClassName,
  rowClassName,
  labelClassName,
  valueClassName,
}) {
  if (rows?.length) {
    return i.jsx("div", {
      className: groupClassName,
      "data-slot": groupSlot,
      children: r6({
        rows,
        rowSlot,
        labelSlot,
        valueSlot,
        rowClassName,
        labelClassName,
        valueClassName,
      }),
    });
  }
  return null;
}
function r6({
  rows,
  rowSlot,
  labelSlot,
  valueSlot,
  rowClassName,
  labelClassName,
  valueClassName,
}) {
  if (rows?.length) {
    return rows.map((e) =>
      i.jsxs(
        "div",
        {
          className: rowClassName,
          "data-slot": rowSlot,
          "data-loading": e.loading ? "" : undefined,
          "aria-busy": !!e.loading || undefined,
          children: [
            i.jsx("span", {
              className: labelClassName,
              "data-slot": labelSlot,
              children: e.label,
            }),
            i.jsx("span", {
              className: valueClassName,
              "data-slot": valueSlot,
              children: e.value,
            }),
          ],
        },
        e.key,
      ),
    );
  }
  return null;
}
function r3({ className }) {
  return i.jsx("svg", {
    className,
    "data-slot": "CommerceQuantityCheckoutModal_closeIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: i.jsx("path", {
      d: "M11.8486 2.90232C11.9788 2.77216 12.1901 2.77218 12.3203 2.90232L13.0976 3.67966C13.2277 3.80984 13.2278 4.02118 13.0976 4.15134L9.24898 7.99997L13.0976 11.8486C13.2278 11.9788 13.2278 12.1901 13.0976 12.3203L12.3203 13.0976C12.1901 13.2277 11.9787 13.2278 11.8486 13.0976L7.99996 9.249L4.15132 13.0976C4.02116 13.2278 3.80982 13.2278 3.67964 13.0976L2.9023 12.3203C2.77216 12.1901 2.77214 11.9788 2.9023 11.8486L6.75093 7.99997L2.9023 4.15134C2.77216 4.0212 2.77223 3.80985 2.9023 3.67966L3.67964 2.90232C3.80982 2.77214 4.02115 2.77214 4.15132 2.90232L7.99996 6.75095L11.8486 2.90232Z",
      fill: "currentColor",
    }),
  });
}
function r2() {
  return i.jsx("svg", {
    width: "3",
    height: "172",
    viewBox: "0 0 3 172",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: i.jsx("path", {
      d: "M7.51836e-06 0L4.16909e-06 82.6224L3.00001 86L4.2235e-06 89.3776L8.74228e-07 172",
      stroke: "black",
      strokeOpacity: "0.07",
      strokeWidth: "0.5",
    }),
  });
}
function r9({ href, linkText, className, slot }) {
  if (linkText) {
    if (href) {
      return i.jsx("a", {
        className,
        "data-slot": slot,
        href,
        target: "_blank",
        rel: "noreferrer",
        children: linkText,
      });
    }
    return i.jsx("span", {
      className,
      "data-slot": slot,
      children: linkText,
    });
  }
  return null;
}
function r7({ className }) {
  return i.jsx("svg", {
    className,
    "data-slot": "CommerceQuantityCheckoutModal_loadingIcon",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: i.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2801 15.684C12.0289 16.406 10.5744 16.695 9.14224 16.5062C7.71006 16.3174 6.3802 15.6613 5.3589 14.6397C4.33759 13.618 3.68191 12.288 3.49354 10.8557C3.30518 9.42349 3.59465 7.96912 4.31706 6.71816C5.03948 5.4672 6.15447 4.48956 7.48913 3.93685C8.82378 3.38414 10.3035 3.28725 11.6988 3.6612C13.0942 4.03516 14.3271 4.85906 15.2065 6.00514C16.0859 7.15122 16.5625 8.55543 16.5625 10C16.5625 10.5178 16.9822 10.9375 17.5 10.9375C18.0178 10.9375 18.4375 10.5178 18.4375 10C18.4375 8.1427 17.8247 6.33728 16.6941 4.86375C15.5634 3.39022 13.9782 2.33092 12.1842 1.85012C10.3902 1.36932 8.48772 1.49389 6.77173 2.20452C5.05575 2.91514 3.62219 4.17211 2.69336 5.78049C1.76454 7.38887 1.39237 9.25877 1.63455 11.1002C1.87674 12.9417 2.71975 14.6518 4.03286 15.9653C5.34597 17.2788 7.05579 18.1224 8.89716 18.3651C10.7385 18.6079 12.6086 18.2363 14.2172 17.308C14.6657 17.0492 14.8194 16.4759 14.5606 16.0274C14.3019 15.5789 13.7285 15.4252 13.2801 15.684Z",
      fill: "currentColor",
    }),
  });
}
function useR8({
  visible,
  status = "ready",
  title,
  profile,
  currentQuantity,
  infoRows,
  quantity,
  summaryRows,
  payment,
  noticeSlot,
  confirmText,
  confirmDisabled,
  confirmLoading,
  loadingIconSlot,
  errorMessage,
  retryText,
  onCancel,
  onConfirm,
  onRetry,
  className,
  classes,
}) {
  let k = useB();
  let P = o.useMemo(() => R(r4, k, classes), [k, classes]);
  if (!visible) {
    return null;
  }
  let x = !!confirmDisabled || !!confirmLoading;
  let M = status !== "ready";
  let A = !!(profile || currentQuantity || payment || noticeSlot);
  let D = !!retryText && !!onRetry;
  let E = payment?.paymentMethods ?? [];
  let N = E.length > 0 && payment?.showPaymentMethods !== false;
  let L = payment
    ? (payment.qrCodeStatus ?? (payment.qrCodeUrl ? "ready" : "idle"))
    : "idle";
  let F = L === "ready" && !!payment?.qrCodeUrl;
  let J = !!payment?.scanHint;
  let O = !!payment && L === "idle";
  let Q = !!(payment?.onReloadQrCode && payment.qrReloadText);
  let W = !!(
    payment?.agreementLinkText && payment.showPaymentAgreement !== false
  );
  let U = A
    ? i.jsx("button", {
        type: "button",
        className: P.CommerceQuantityCheckoutModal_closeButton,
        "data-slot": "CommerceQuantityCheckoutModal_closeButton",
        "aria-label": "Close",
        onClick: onCancel,
        children: i.jsx(r3, {
          className: P.CommerceQuantityCheckoutModal_closeIcon,
        }),
      })
    : null;
  let q =
    status === "error"
      ? i.jsx("button", {
          type: "button",
          className: P.CommerceQuantityCheckoutModal_closeButton,
          "data-slot": "CommerceQuantityCheckoutModal_closeButton",
          "aria-label": "Close",
          onClick: onCancel,
          children: i.jsx(r3, {
            className: P.CommerceQuantityCheckoutModal_closeIcon,
          }),
        })
      : null;
  let G = r5({
    rows: infoRows,
    groupSlot: "CommerceQuantityCheckoutModal_infoRows",
    rowSlot: "CommerceQuantityCheckoutModal_infoRow",
    labelSlot: "CommerceQuantityCheckoutModal_infoLabel",
    valueSlot: "CommerceQuantityCheckoutModal_infoValue",
    groupClassName: P.CommerceQuantityCheckoutModal_infoRows,
    rowClassName: P.CommerceQuantityCheckoutModal_infoRow,
    labelClassName: P.CommerceQuantityCheckoutModal_infoLabel,
    valueClassName: P.CommerceQuantityCheckoutModal_infoValue,
  });
  let V = i.jsx("div", {
    className: P.CommerceQuantityCheckoutModal_quantity,
    "data-slot": "CommerceQuantityCheckoutModal_quantity",
    children: i.jsx(useEe, {
      ...quantity,
      classes: P,
    }),
  });
  let H = r5({
    rows: summaryRows,
    groupSlot: "CommerceQuantityCheckoutModal_summaryRows",
    rowSlot: "CommerceQuantityCheckoutModal_summaryRow",
    labelSlot: "CommerceQuantityCheckoutModal_summaryLabel",
    valueSlot: "CommerceQuantityCheckoutModal_summaryValue",
    groupClassName: P.CommerceQuantityCheckoutModal_summaryRows,
    rowClassName: P.CommerceQuantityCheckoutModal_summaryRow,
    labelClassName: P.CommerceQuantityCheckoutModal_summaryLabel,
    valueClassName: P.CommerceQuantityCheckoutModal_summaryValue,
  });
  let z = r6({
    rows: summaryRows,
    rowSlot: "CommerceQuantityCheckoutModal_summaryRow",
    labelSlot: "CommerceQuantityCheckoutModal_summaryLabel",
    valueSlot: "CommerceQuantityCheckoutModal_summaryValue",
    rowClassName: P.CommerceQuantityCheckoutModal_summaryRow,
    labelClassName: P.CommerceQuantityCheckoutModal_summaryLabel,
    valueClassName: P.CommerceQuantityCheckoutModal_summaryValue,
  });
  let $ = i.jsxs(i.Fragment, {
    children: [G, V, H],
  });
  let K = noticeSlot
    ? i.jsx("div", {
        className: P.CommerceQuantityCheckoutModal_notice,
        "data-slot": "CommerceQuantityCheckoutModal_notice",
        children: noticeSlot,
      })
    : null;
  let Y = payment
    ? i.jsxs(i.Fragment, {
        children: [
          i.jsx("div", {
            className: P.CommerceQuantityCheckoutModal_paymentDivider,
            "data-slot": "CommerceQuantityCheckoutModal_paymentDivider",
            children: i.jsx(r2, {}),
          }),
          i.jsxs("div", {
            className: P.CommerceQuantityCheckoutModal_payment,
            "data-slot": "CommerceQuantityCheckoutModal_payment",
            "data-state": F ? "ready" : L,
            children: [
              i.jsxs("div", {
                className: P.CommerceQuantityCheckoutModal_qrArea,
                "data-slot": "CommerceQuantityCheckoutModal_qrArea",
                "data-state": F ? "ready" : L,
                "aria-busy": L === "loading" || undefined,
                children: [
                  F
                    ? i.jsx("img", {
                        src: payment.qrCodeUrl,
                        alt: payment.qrImageAlt ?? "",
                        className: P.CommerceQuantityCheckoutModal_qrImage,
                        "data-slot": "CommerceQuantityCheckoutModal_qrImage",
                      })
                    : null,
                  L === "loading"
                    ? i.jsxs("div", {
                        className: P.CommerceQuantityCheckoutModal_qrLoading,
                        "data-slot": "CommerceQuantityCheckoutModal_qrLoading",
                        children: [
                          i.jsx(p.A, {}),
                          payment.qrLoadingText
                            ? i.jsx("div", {
                                className:
                                  P.CommerceQuantityCheckoutModal_qrLoadingText,
                                "data-slot":
                                  "CommerceQuantityCheckoutModal_qrLoadingText",
                                children: payment.qrLoadingText,
                              })
                            : null,
                        ],
                      })
                    : null,
                  L === "failed"
                    ? i.jsxs("div", {
                        className: P.CommerceQuantityCheckoutModal_qrError,
                        "data-slot": "CommerceQuantityCheckoutModal_qrError",
                        children: [
                          payment.qrErrorText
                            ? i.jsx("div", {
                                className:
                                  P.CommerceQuantityCheckoutModal_qrErrorText,
                                "data-slot":
                                  "CommerceQuantityCheckoutModal_qrErrorText",
                                children: payment.qrErrorText,
                              })
                            : null,
                          Q
                            ? i.jsx("button", {
                                type: "button",
                                className:
                                  P.CommerceQuantityCheckoutModal_qrReloadButton,
                                "data-slot":
                                  "CommerceQuantityCheckoutModal_qrReloadButton",
                                onClick: payment.onReloadQrCode,
                                children: payment.qrReloadText,
                              })
                            : null,
                        ],
                      })
                    : null,
                  L === "idle"
                    ? i.jsxs("div", {
                        className:
                          P.CommerceQuantityCheckoutModal_qrPlaceholder,
                        "data-slot":
                          "CommerceQuantityCheckoutModal_qrPlaceholder",
                        children: [
                          i.jsxs("div", {
                            className:
                              P.CommerceQuantityCheckoutModal_agreement,
                            "data-slot":
                              "CommerceQuantityCheckoutModal_agreement",
                            children: [
                              payment.agreementText
                                ? i.jsx("span", {
                                    children: payment.agreementText,
                                  })
                                : null,
                              i.jsx(r9, {
                                href: payment.agreementHref,
                                linkText: payment.agreementLinkText,
                                className:
                                  P.CommerceQuantityCheckoutModal_agreementLink,
                                slot: "CommerceQuantityCheckoutModal_agreementLink",
                              }),
                            ],
                          }),
                          O
                            ? i.jsx("button", {
                                type: "button",
                                className:
                                  P.CommerceQuantityCheckoutModal_confirmButton,
                                "data-slot":
                                  "CommerceQuantityCheckoutModal_confirmButton",
                                disabled: x,
                                "data-disabled": x ? "" : undefined,
                                "data-loading": confirmLoading ? "" : undefined,
                                "aria-busy": !!confirmLoading || undefined,
                                onClick: onConfirm,
                                children: confirmText,
                              })
                            : null,
                        ],
                      })
                    : null,
                ],
              }),
              J || N
                ? i.jsxs("div", {
                    className: P.CommerceQuantityCheckoutModal_scanHint,
                    "data-slot": "CommerceQuantityCheckoutModal_scanHint",
                    children: [
                      J
                        ? i.jsx("span", {
                            children: payment.scanHint,
                          })
                        : null,
                      N
                        ? i.jsx("span", {
                            className:
                              P.CommerceQuantityCheckoutModal_paymentMethods,
                            "data-slot":
                              "CommerceQuantityCheckoutModal_paymentMethods",
                            children: E.map((e) =>
                              i.jsx(
                                "span",
                                {
                                  className:
                                    P.CommerceQuantityCheckoutModal_paymentMethodIcon,
                                  "data-slot":
                                    "CommerceQuantityCheckoutModal_paymentMethodIcon",
                                  "data-method": e.key,
                                  role: e.ariaLabel ? "img" : undefined,
                                  "aria-label": e.ariaLabel,
                                  children: e.icon,
                                },
                                e.key,
                              ),
                            ),
                          })
                        : null,
                    ],
                  })
                : null,
              W
                ? i.jsx("div", {
                    className: P.CommerceQuantityCheckoutModal_paymentAgreement,
                    "data-slot":
                      "CommerceQuantityCheckoutModal_paymentAgreement",
                    children: i.jsx(r9, {
                      href: payment.agreementHref,
                      linkText: payment.agreementLinkText,
                      className:
                        P.CommerceQuantityCheckoutModal_paymentAgreementLink,
                      slot: "CommerceQuantityCheckoutModal_paymentAgreementLink",
                    }),
                  })
                : null,
            ],
          }),
        ],
      })
    : null;
  let Z = M
    ? i.jsxs("div", {
        className: P.CommerceQuantityCheckoutModal_state,
        "data-slot": "CommerceQuantityCheckoutModal_state",
        "data-status": status,
        "aria-busy": status === "loading" || undefined,
        children: [
          q,
          status === "loading"
            ? (loadingIconSlot ??
              i.jsx(r7, {
                className: P.CommerceQuantityCheckoutModal_loadingIcon,
              }))
            : null,
          status === "error"
            ? i.jsxs("div", {
                className: P.CommerceQuantityCheckoutModal_errorCard,
                "data-slot": "CommerceQuantityCheckoutModal_errorCard",
                children: [
                  errorMessage
                    ? i.jsx("div", {
                        className: P.CommerceQuantityCheckoutModal_errorMessage,
                        "data-slot":
                          "CommerceQuantityCheckoutModal_errorMessage",
                        children: errorMessage,
                      })
                    : null,
                  D
                    ? i.jsx("button", {
                        type: "button",
                        className: P.CommerceQuantityCheckoutModal_retryButton,
                        "data-slot":
                          "CommerceQuantityCheckoutModal_retryButton",
                        onClick: onRetry,
                        children: retryText,
                      })
                    : null,
                ],
              })
            : null,
        ],
      })
    : null;
  return i.jsx(u.A, {
    visible,
    onCancel,
    "data-component": "CommerceQuantityCheckoutModal",
    "data-slot": "CommerceQuantityCheckoutModal_modal",
    "data-slots": r1.join(","),
    "data-state": visible ? "open" : "closed",
    "data-status": status,
    footer: null,
    maskClosable: true,
    closable: !A && !M,
    className: a.A(P.CommerceQuantityCheckoutModal_modal, className),
    style: {
      width: M ? 720 : A ? 712 : 520,
      minWidth: M ? 720 : undefined,
      minHeight: M ? 426 : undefined,
      maxWidth: "90vw",
    },
    unmountOnExit: true,
    children: i.jsx("div", {
      className: P.CommerceQuantityCheckoutModal_content,
      "data-slot": "CommerceQuantityCheckoutModal_content",
      "data-layout": M ? "state" : A ? "checkout" : "default",
      "data-status": status,
      children:
        Z ??
        i.jsxs(i.Fragment, {
          children: [
            i.jsxs("div", {
              className: P.CommerceQuantityCheckoutModal_header,
              "data-slot": "CommerceQuantityCheckoutModal_header",
              children: [
                profile
                  ? i.jsxs("div", {
                      className: P.CommerceQuantityCheckoutModal_profile,
                      "data-slot": "CommerceQuantityCheckoutModal_profile",
                      children: [
                        profile.avatarSlot
                          ? i.jsx("div", {
                              className:
                                P.CommerceQuantityCheckoutModal_profileAvatar,
                              "data-slot":
                                "CommerceQuantityCheckoutModal_profileAvatar",
                              children: profile.avatarSlot,
                            })
                          : null,
                        i.jsxs("div", {
                          className:
                            P.CommerceQuantityCheckoutModal_profileContent,
                          "data-slot":
                            "CommerceQuantityCheckoutModal_profileContent",
                          children: [
                            i.jsxs("div", {
                              className:
                                P.CommerceQuantityCheckoutModal_profileTitleRow,
                              "data-slot":
                                "CommerceQuantityCheckoutModal_profileTitleRow",
                              children: [
                                i.jsx("div", {
                                  className:
                                    P.CommerceQuantityCheckoutModal_profileTitle,
                                  "data-slot":
                                    "CommerceQuantityCheckoutModal_profileTitle",
                                  children: profile.title,
                                }),
                                profile.badgeSlot
                                  ? i.jsx("div", {
                                      className:
                                        P.CommerceQuantityCheckoutModal_profileBadge,
                                      "data-slot":
                                        "CommerceQuantityCheckoutModal_profileBadge",
                                      children: profile.badgeSlot,
                                    })
                                  : null,
                              ],
                            }),
                            profile.subtitle || profile.metaSlot
                              ? i.jsxs("div", {
                                  className:
                                    P.CommerceQuantityCheckoutModal_profileMetaRow,
                                  "data-slot":
                                    "CommerceQuantityCheckoutModal_profileMetaRow",
                                  children: [
                                    profile.subtitle
                                      ? i.jsx("div", {
                                          className:
                                            P.CommerceQuantityCheckoutModal_profileSubtitle,
                                          "data-slot":
                                            "CommerceQuantityCheckoutModal_profileSubtitle",
                                          children: profile.subtitle,
                                        })
                                      : null,
                                    profile.metaSlot
                                      ? i.jsx("div", {
                                          className:
                                            P.CommerceQuantityCheckoutModal_profileMeta,
                                          "data-slot":
                                            "CommerceQuantityCheckoutModal_profileMeta",
                                          children: profile.metaSlot,
                                        })
                                      : null,
                                  ],
                                })
                              : null,
                          ],
                        }),
                      ],
                    })
                  : i.jsx("h3", {
                      className: P.CommerceQuantityCheckoutModal_title,
                      "data-slot": "CommerceQuantityCheckoutModal_title",
                      children: title,
                    }),
                currentQuantity || U
                  ? i.jsxs("div", {
                      className: P.CommerceQuantityCheckoutModal_headerAside,
                      "data-slot": "CommerceQuantityCheckoutModal_headerAside",
                      children: [
                        currentQuantity
                          ? i.jsxs("div", {
                              className:
                                P.CommerceQuantityCheckoutModal_currentQuantity,
                              "data-slot":
                                "CommerceQuantityCheckoutModal_currentQuantity",
                              children: [
                                i.jsx("span", {
                                  className:
                                    P.CommerceQuantityCheckoutModal_currentQuantityLabel,
                                  "data-slot":
                                    "CommerceQuantityCheckoutModal_currentQuantityLabel",
                                  children: currentQuantity.label,
                                }),
                                i.jsx("span", {
                                  className:
                                    P.CommerceQuantityCheckoutModal_currentQuantityValue,
                                  "data-slot":
                                    "CommerceQuantityCheckoutModal_currentQuantityValue",
                                  children: currentQuantity.value,
                                }),
                              ],
                            })
                          : null,
                        U,
                      ],
                    })
                  : null,
              ],
            }),
            A
              ? i.jsx("div", {
                  className: P.CommerceQuantityCheckoutModal_main,
                  "data-slot": "CommerceQuantityCheckoutModal_main",
                  children: i.jsxs("div", {
                    className: P.CommerceQuantityCheckoutModal_checkoutContent,
                    "data-slot":
                      "CommerceQuantityCheckoutModal_checkoutContent",
                    children: [
                      i.jsxs("div", {
                        className: P.CommerceQuantityCheckoutModal_purchase,
                        "data-slot": "CommerceQuantityCheckoutModal_purchase",
                        children: [
                          i.jsxs("div", {
                            className: P.CommerceQuantityCheckoutModal_body,
                            "data-slot": "CommerceQuantityCheckoutModal_body",
                            children: [
                              i.jsx("h3", {
                                className:
                                  P.CommerceQuantityCheckoutModal_purchaseTitle,
                                "data-slot":
                                  "CommerceQuantityCheckoutModal_purchaseTitle",
                                children: title,
                              }),
                              G,
                              V,
                              z,
                            ],
                          }),
                          K,
                        ],
                      }),
                      Y,
                    ],
                  }),
                })
              : i.jsxs("div", {
                  className: P.CommerceQuantityCheckoutModal_body,
                  "data-slot": "CommerceQuantityCheckoutModal_body",
                  children: [$, K],
                }),
          ],
        }),
    }),
  });
}
const ae = {
  ...et,
  CommerceQuantityCheckoutModal_modal:
    "index_module_CommerceQuantityCheckoutModal_modal3",
  CommerceQuantityCheckoutModal_content:
    "index_module_CommerceQuantityCheckoutModal_content5",
  CommerceQuantityCheckoutModal_state:
    "index_module_CommerceQuantityCheckoutModal_state3",
  CommerceQuantityCheckoutModal_loadingIcon:
    "index_module_CommerceQuantityCheckoutModal_loadingIcon4",
  CommerceQuantityCheckoutModal_closeButton:
    "index_module_CommerceQuantityCheckoutModal_closeButton5",
  CommerceQuantityCheckoutModal_errorCard:
    "index_module_CommerceQuantityCheckoutModal_errorCard3",
  CommerceQuantityCheckoutModal_errorMessage:
    "index_module_CommerceQuantityCheckoutModal_errorMessage3",
  CommerceQuantityCheckoutModal_retryButton:
    "index_module_CommerceQuantityCheckoutModal_retryButton3",
  CommerceQuantityCheckoutModal_header:
    "index_module_CommerceQuantityCheckoutModal_header5",
  CommerceQuantityCheckoutModal_title:
    "index_module_CommerceQuantityCheckoutModal_title5",
  CommerceQuantityCheckoutModal_profile:
    "index_module_CommerceQuantityCheckoutModal_profile5",
  CommerceQuantityCheckoutModal_profileAvatar:
    "index_module_CommerceQuantityCheckoutModal_profileAvatar5",
  CommerceQuantityCheckoutModal_profileContent:
    "index_module_CommerceQuantityCheckoutModal_profileContent5",
  CommerceQuantityCheckoutModal_profileTitleRow:
    "index_module_CommerceQuantityCheckoutModal_profileTitleRow5",
  CommerceQuantityCheckoutModal_profileTitle:
    "index_module_CommerceQuantityCheckoutModal_profileTitle5",
  CommerceQuantityCheckoutModal_profileBadge:
    "index_module_CommerceQuantityCheckoutModal_profileBadge5",
  CommerceQuantityCheckoutModal_profileMetaRow:
    "index_module_CommerceQuantityCheckoutModal_profileMetaRow5",
  CommerceQuantityCheckoutModal_profileSubtitle:
    "index_module_CommerceQuantityCheckoutModal_profileSubtitle5",
  CommerceQuantityCheckoutModal_profileMeta:
    "index_module_CommerceQuantityCheckoutModal_profileMeta5",
  CommerceQuantityCheckoutModal_headerAside:
    "index_module_CommerceQuantityCheckoutModal_headerAside5",
  CommerceQuantityCheckoutModal_currentQuantity:
    "index_module_CommerceQuantityCheckoutModal_currentQuantity5",
  CommerceQuantityCheckoutModal_currentQuantityLabel:
    "index_module_CommerceQuantityCheckoutModal_currentQuantityLabel5",
  CommerceQuantityCheckoutModal_currentQuantityValue:
    "index_module_CommerceQuantityCheckoutModal_currentQuantityValue5",
  CommerceQuantityCheckoutModal_closeIcon:
    "index_module_CommerceQuantityCheckoutModal_closeIcon5",
  CommerceQuantityCheckoutModal_main:
    "index_module_CommerceQuantityCheckoutModal_main5",
  CommerceQuantityCheckoutModal_checkoutContent:
    "index_module_CommerceQuantityCheckoutModal_checkoutContent5",
  CommerceQuantityCheckoutModal_purchase:
    "index_module_CommerceQuantityCheckoutModal_purchase5",
  CommerceQuantityCheckoutModal_purchaseTitle:
    "index_module_CommerceQuantityCheckoutModal_purchaseTitle5",
  CommerceQuantityCheckoutModal_body:
    "index_module_CommerceQuantityCheckoutModal_body5",
  CommerceQuantityCheckoutModal_infoRows:
    "index_module_CommerceQuantityCheckoutModal_infoRows5",
  CommerceQuantityCheckoutModal_summaryRows:
    "index_module_CommerceQuantityCheckoutModal_summaryRows5",
  CommerceQuantityCheckoutModal_infoRow:
    "index_module_CommerceQuantityCheckoutModal_infoRow5",
  CommerceQuantityCheckoutModal_summaryRow:
    "index_module_CommerceQuantityCheckoutModal_summaryRow5",
  CommerceQuantityCheckoutModal_infoLabel:
    "index_module_CommerceQuantityCheckoutModal_infoLabel5",
  CommerceQuantityCheckoutModal_summaryLabel:
    "index_module_CommerceQuantityCheckoutModal_summaryLabel5",
  CommerceQuantityCheckoutModal_infoValue:
    "index_module_CommerceQuantityCheckoutModal_infoValue5",
  CommerceQuantityCheckoutModal_summaryValue:
    "index_module_CommerceQuantityCheckoutModal_summaryValue5",
  CommerceQuantityCheckoutModal_quantity:
    "index_module_CommerceQuantityCheckoutModal_quantity5",
  CommerceQuantityCheckoutModal_actions:
    "index_module_CommerceQuantityCheckoutModal_actions5",
  CommerceQuantityCheckoutModal_cancelButton:
    "index_module_CommerceQuantityCheckoutModal_cancelButton5",
  CommerceQuantityCheckoutModal_confirmButton:
    "index_module_CommerceQuantityCheckoutModal_confirmButton5",
  CommerceQuantityCheckoutModal_paymentDivider:
    "index_module_CommerceQuantityCheckoutModal_paymentDivider5",
  CommerceQuantityCheckoutModal_payment:
    "index_module_CommerceQuantityCheckoutModal_payment5",
  CommerceQuantityCheckoutModal_qrArea:
    "index_module_CommerceQuantityCheckoutModal_qrArea5",
  CommerceQuantityCheckoutModal_qrImage:
    "index_module_CommerceQuantityCheckoutModal_qrImage5",
  CommerceQuantityCheckoutModal_qrPlaceholder:
    "index_module_CommerceQuantityCheckoutModal_qrPlaceholder5",
  CommerceQuantityCheckoutModal_qrLoading:
    "index_module_CommerceQuantityCheckoutModal_qrLoading5",
  CommerceQuantityCheckoutModal_qrError:
    "index_module_CommerceQuantityCheckoutModal_qrError5",
  CommerceQuantityCheckoutModal_qrLoadingText:
    "index_module_CommerceQuantityCheckoutModal_qrLoadingText5",
  CommerceQuantityCheckoutModal_qrErrorText:
    "index_module_CommerceQuantityCheckoutModal_qrErrorText5",
  CommerceQuantityCheckoutModal_qrReloadButton:
    "index_module_CommerceQuantityCheckoutModal_qrReloadButton5",
  CommerceQuantityCheckoutModal_agreement:
    "index_module_CommerceQuantityCheckoutModal_agreement5",
  CommerceQuantityCheckoutModal_agreementLink:
    "index_module_CommerceQuantityCheckoutModal_agreementLink5",
  CommerceQuantityCheckoutModal_scanHint:
    "index_module_CommerceQuantityCheckoutModal_scanHint5",
  CommerceQuantityCheckoutModal_paymentMethods:
    "index_module_CommerceQuantityCheckoutModal_paymentMethods5",
  CommerceQuantityCheckoutModal_paymentMethodIcon:
    "index_module_CommerceQuantityCheckoutModal_paymentMethodIcon6",
  CommerceQuantityCheckoutModal_paymentAgreement:
    "index_module_CommerceQuantityCheckoutModal_paymentAgreement5",
  CommerceQuantityCheckoutModal_paymentAgreementLink:
    "index_module_CommerceQuantityCheckoutModal_paymentAgreementLink5",
  CommerceQuantityCheckoutModal_notice:
    "index_module_CommerceQuantityCheckoutModal_notice5",
};
export function MN({
  classes,
  className,
  status = "ready",
  payment,
  errorMessage,
  retryText,
  ...rest
}) {
  let m = q(ae, classes);
  return i.jsx(useE, {
    classes: m,
    children: i.jsx(useR8, {
      ...rest,
      status,
      errorMessage:
        status === "error"
          ? (errorMessage ?? "网络异常，请重试")
          : errorMessage,
      retryText: status === "error" ? (retryText ?? "重试") : retryText,
      payment: payment
        ? {
            qrLoadingText: "二维码加载中",
            qrErrorText: "二维码加载失败",
            qrReloadText: "重新加载",
            ...payment,
          }
        : undefined,
      className: a.A(G, className),
    }),
  });
}
const ar =
  require.j == "wl4"
    ? {
        CommerceMiniSubscribeModal_content:
          "index_module_CommerceMiniSubscribeModal_content6",
        CommerceMiniSubscribeModal_close:
          "index_module_CommerceMiniSubscribeModal_close5",
        CommerceMiniSubscribeModal_hero:
          "index_module_CommerceMiniSubscribeModal_hero5",
        CommerceMiniSubscribeModal_heroDetails:
          "index_module_CommerceMiniSubscribeModal_heroDetails5",
        CommerceMiniSubscribeModal_media:
          "index_module_CommerceMiniSubscribeModal_media5",
        CommerceMiniSubscribeModal_benefits:
          "index_module_CommerceMiniSubscribeModal_benefits5",
        CommerceMiniSubscribeModal_benefit:
          "index_module_CommerceMiniSubscribeModal_benefit5",
        CommerceMiniSubscribeModal_main:
          "index_module_CommerceMiniSubscribeModal_main5",
        CommerceMiniSubscribeModal_tabs:
          "index_module_CommerceMiniSubscribeModal_tabs5",
        CommerceMiniSubscribeModal_tab:
          "index_module_CommerceMiniSubscribeModal_tab5",
        CommerceMiniSubscribeModal_plans:
          "index_module_CommerceMiniSubscribeModal_plans6",
        CommerceMiniSubscribeModal_planSelect:
          "index_module_CommerceMiniSubscribeModal_planSelect6",
        CommerceMiniSubscribeModal_planHeading:
          "index_module_CommerceMiniSubscribeModal_planHeading5",
        CommerceMiniSubscribeModal_variants:
          "index_module_CommerceMiniSubscribeModal_variants5",
        CommerceMiniSubscribeModal_variant:
          "index_module_CommerceMiniSubscribeModal_variant5",
        CommerceMiniSubscribeModal_footer:
          "index_module_CommerceMiniSubscribeModal_footer5",
        CommerceMiniSubscribeModal_cta:
          "index_module_CommerceMiniSubscribeModal_cta5",
        CommerceMiniSubscribeModal_allPlans:
          "index_module_CommerceMiniSubscribeModal_allPlans5",
        CommerceMiniSubscribeModal_state:
          "index_module_CommerceMiniSubscribeModal_state5",
        CommerceMiniSubscribeModal_planDetails:
          "index_module_CommerceMiniSubscribeModal_planDetails5",
        CommerceMiniSubscribeModal_metrics:
          "index_module_CommerceMiniSubscribeModal_metrics5",
        CommerceMiniSubscribeModal_plan:
          "index_module_CommerceMiniSubscribeModal_plan6",
        CommerceMiniSubscribeModal_planTitleRow:
          "index_module_CommerceMiniSubscribeModal_planTitleRow5",
      }
    : null;
const aa = [
  "modal",
  "content",
  "close",
  "hero",
  "heroDetails",
  "heroTitle",
  "heroDescription",
  "media",
  "benefits",
  "benefit",
  "benefitTag",
  "tooltip",
  "main",
  "header",
  "title",
  "subtitle",
  "tabs",
  "tab",
  "plans",
  "plan",
  "planSelect",
  "planHeading",
  "planDetails",
  "metrics",
  "planTitle",
  "planTitleRow",
  "activityBadge",
  "price",
  "credits",
  "creditRate",
  "variants",
  "variant",
  "footer",
  "cta",
  "description",
  "allPlans",
  "state",
].map((e) => `CommerceMiniSubscribeModal_${e}`);
function useAo(e) {
  let t = R(ar, useB(), e.classes);
  let r = (e) => ({
    className: t[`CommerceMiniSubscribeModal_${e}`],
    "data-slot": `CommerceMiniSubscribeModal_${e}`,
  });
  let n = o.useId();
  let c = e.plans.find((t) => t.id === e.selectedPlanId);
  let l = e.loading || !!e.error;
  let m = l || e.cta.loading;
  let sRef = o.useRef(null);
  let dRef = o.useRef(false);
  o.useEffect(() => {
    if (!e.visible || l) {
      dRef.current = false;
      return;
    }
    let sRef_current = sRef.current;
    let r = sRef_current?.querySelector('[data-selected="true"]');
    if (!sRef_current || !r) {
      return;
    }
    let a = sRef_current.getBoundingClientRect();
    let o = r.getBoundingClientRect();
    let t_scrollTop = sRef_current.scrollTop;
    let n = t_scrollTop;
    if (o.top < a.top + 8) {
      n += o.top - a.top - 8;
    } else if (o.bottom > a.bottom - 8) {
      n += o.bottom - a.bottom + 8;
    }
    n = Math.max(
      0,
      Math.min(n, sRef_current.scrollHeight - sRef_current.clientHeight),
    );
    let c = window.matchMedia("(prefers-reduced-motion: reduce)");
    let m = dRef.current && !c.matches;
    dRef.current = true;
    if (!m) {
      sRef_current.scrollTop = n;
      return;
    }
    let u = 0;
    let p = performance.now();
    let C = (e) => {
      let r = Math.min((e - p) / 460, 1);
      sRef_current.scrollTop =
        t_scrollTop + (n - t_scrollTop) * (1 - (1 - r) ** 5);
      if (r < 1) {
        u = requestAnimationFrame(C);
      }
    };
    let v = () => cancelAnimationFrame(u);
    let _ = () => {
      v();
      sRef_current.scrollTop = n;
    };
    if (Math.abs(n - t_scrollTop) > 1) {
      u = requestAnimationFrame(C);
    }
    sRef_current.addEventListener("wheel", v, {
      passive: true,
    });
    sRef_current.addEventListener("touchstart", v, {
      passive: true,
    });
    sRef_current.addEventListener("pointerdown", v);
    sRef_current.addEventListener("keydown", v);
    c.addEventListener("change", _);
    return () => {
      v();
      sRef_current.removeEventListener("wheel", v);
      sRef_current.removeEventListener("touchstart", v);
      sRef_current.removeEventListener("pointerdown", v);
      sRef_current.removeEventListener("keydown", v);
      c.removeEventListener("change", _);
    };
  }, [e.visible, e.selectedPlanId, e.activeTab, l]);
  return i.jsx(u.A, {
    visible: e.visible,
    onCancel: e.onClose,
    footer: null,
    closable: false,
    maskClosable: false,
    unmountOnExit: true,
    focusLock: true,
    autoFocus: true,
    modalRender: (e) => {
      if (o.isValidElement(e)) {
        return o.cloneElement(e, {
          "aria-labelledby": n,
        });
      }
      return e;
    },
    style: {
      width: 932,
      maxWidth: "calc(100vw - 32px)",
    },
    className: a.A(t.CommerceMiniSubscribeModal_modal, e.className),
    "data-component": "CommerceMiniSubscribeModal",
    "data-slots": aa.join(","),
    children: i.jsxs("div", {
      ...r("content"),
      "aria-labelledby": n,
      tabIndex: 0,
      "data-autofocus": true,
      "aria-busy": e.loading || undefined,
      children: [
        i.jsx("button", {
          ...r("close"),
          type: "button",
          "aria-label": e.closeLabel,
          onClick: e.onClose,
          children: i.jsx(g.A, {
            size: 16,
            strokeWidth: 1.5,
            "aria-hidden": "true",
          }),
        }),
        i.jsx("section", {
          ...r("hero"),
          children:
            c &&
            !l &&
            i.jsxs(i.Fragment, {
              children: [
                c.media &&
                  i.jsx("div", {
                    ...r("media"),
                    children: c.media,
                  }),
                i.jsxs("div", {
                  ...r("heroDetails"),
                  children: [
                    i.jsx("h2", {
                      ...r("heroTitle"),
                      children: c.title,
                    }),
                    c.description &&
                      i.jsx("div", {
                        ...r("heroDescription"),
                        children: c.description,
                      }),
                    !!c.benefits?.length &&
                      i.jsx("ul", {
                        ...r("benefits"),
                        children: c.benefits?.map((e) =>
                          i.jsxs(
                            "li",
                            {
                              ...r("benefit"),
                              children: [
                                i.jsx(f.A, {
                                  size: 12,
                                  "aria-hidden": "true",
                                }),
                                i.jsx("span", {
                                  children: e.text,
                                }),
                                e.tooltip &&
                                  i.jsx(useEY, {
                                    ...r("tooltip"),
                                    content: e.tooltip,
                                    trigger: ["hover", "focus"],
                                    children: i.jsx("button", {
                                      type: "button",
                                      "aria-label":
                                        typeof e.text === "string"
                                          ? e.text
                                          : undefined,
                                      children: i.jsx(h.A, {
                                        size: 12,
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                  }),
                                e.tag &&
                                  i.jsx("span", {
                                    ...r("benefitTag"),
                                    children: e.tag.text,
                                  }),
                              ],
                            },
                            e.key,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
        }),
        i.jsxs("section", {
          ...r("main"),
          children: [
            i.jsxs("header", {
              ...r("header"),
              children: [
                i.jsx("h2", {
                  ...r("title"),
                  id: n,
                  children: e.title,
                }),
                e.subtitle &&
                  i.jsx("div", {
                    ...r("subtitle"),
                    children: e.subtitle,
                  }),
              ],
            }),
            i.jsx("div", {
              ...r("tabs"),
              role: "group",
              style: {
                "--mini-option-count": e.tabs.length,
                "--mini-selected-index": e.tabs.findIndex(
                  (t) => t.key === e.activeTab,
                ),
              },
              "data-has-selection": e.tabs.some((t) => t.key === e.activeTab),
              children: e.tabs.map((t) =>
                i.jsx(
                  "button",
                  {
                    type: "button",
                    ...r("tab"),
                    "aria-pressed": t.key === e.activeTab,
                    disabled: t.disabled || m,
                    onClick: () => e.onTabChange(t.key),
                    children: t.label,
                  },
                  t.key,
                ),
              ),
            }),
            i.jsx("div", {
              ...r("plans"),
              ref: sRef,
              children: e.loading
                ? i.jsxs("div", {
                    ...r("state"),
                    role: "status",
                    children: [i.jsx(p.A, {}), e.loadingText],
                  })
                : e.error
                  ? i.jsxs("div", {
                      ...r("state"),
                      role: "alert",
                      children: [
                        e.error,
                        e.onRetry &&
                          i.jsx("button", {
                            type: "button",
                            onClick: e.onRetry,
                            children: e.retryText,
                          }),
                      ],
                    })
                  : e.plans.map((a) =>
                      i.jsxs(
                        "div",
                        {
                          ...r("plan"),
                          "data-selected": a.id === e.selectedPlanId,
                          "data-has-variants": (a.variants?.length ?? 0) > 1,
                          "data-activity-border":
                            (a.id === e.selectedPlanId &&
                              !!a.activityDecoration?.borderColor) ||
                            undefined,
                          style:
                            a.id === e.selectedPlanId
                              ? {
                                  background:
                                    a.activityDecoration?.background ||
                                    undefined,
                                  ...(a.activityDecoration?.borderColor
                                    ? {
                                        "--commerce-border-color-brand":
                                          a.activityDecoration.borderColor,
                                        borderColor: "transparent",
                                        boxShadow: "none",
                                      }
                                    : {}),
                                }
                              : undefined,
                          children: [
                            i.jsx("button", {
                              type: "button",
                              ...r("planSelect"),
                              "aria-pressed": a.id === e.selectedPlanId,
                              disabled: a.disabled || m,
                              onClick: () => e.onPlanChange(a.id),
                              children: i.jsxs("div", {
                                ...r("planHeading"),
                                children: [
                                  i.jsxs("div", {
                                    ...r("planDetails"),
                                    children: [
                                      i.jsxs("div", {
                                        ...r("planTitleRow"),
                                        children: [
                                          i.jsx("span", {
                                            ...r("planTitle"),
                                            children: a.title,
                                          }),
                                          a.activityDecoration?.badge?.text &&
                                            i.jsx("span", {
                                              ...r("activityBadge"),
                                              style:
                                                a.activityDecoration.badge
                                                  .style,
                                              children:
                                                a.activityDecoration.badge.text,
                                            }),
                                        ],
                                      }),
                                      i.jsxs("div", {
                                        ...r("metrics"),
                                        children: [
                                          a.credits &&
                                            i.jsx("span", {
                                              ...r("credits"),
                                              children: a.credits,
                                            }),
                                          a.creditRate &&
                                            i.jsx("span", {
                                              ...r("creditRate"),
                                              children: a.creditRate,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsx(useEN, {
                                    price: a.price,
                                    layout: "overlap",
                                    animation: false,
                                    className:
                                      t.CommerceMiniSubscribeModal_price,
                                  }),
                                ],
                              }),
                            }),
                            (a.variants?.length ?? 0) > 1 &&
                              i.jsx("div", {
                                ...r("variants"),
                                role: "group",
                                style: {
                                  "--mini-option-count": a.variants?.length,
                                  "--mini-selected-index":
                                    a.variants?.findIndex(
                                      (e) => e.key === a.activeVariantKey,
                                    ),
                                },
                                "data-has-selection": a.variants?.some(
                                  (e) => e.key === a.activeVariantKey,
                                ),
                                children: a.variants?.map((t) =>
                                  i.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      ...r("variant"),
                                      disabled:
                                        a.disabled ||
                                        t.disabled ||
                                        m ||
                                        !e.onVariantChange,
                                      "aria-pressed":
                                        t.key === a.activeVariantKey,
                                      onClick: () =>
                                        e.onVariantChange?.(a.id, t.key),
                                      children: t.label,
                                    },
                                    t.key,
                                  ),
                                ),
                              }),
                          ],
                        },
                        a.id,
                      ),
                    ),
            }),
            i.jsxs("footer", {
              ...r("footer"),
              children: [
                i.jsxs("button", {
                  ...r("cta"),
                  type: "button",
                  disabled:
                    l || !c || c.disabled || e.cta.disabled || e.cta.loading,
                  onClick: e.cta.onClick,
                  "aria-busy": e.cta.loading || undefined,
                  children: [
                    e.cta.loading && i.jsx(p.A, {}),
                    i.jsx("span", {
                      children: e.cta.text,
                    }),
                    e.cta.description &&
                      i.jsx("span", {
                        ...r("description"),
                        children: e.cta.description,
                      }),
                  ],
                }),
                e.onViewAllPlans &&
                  i.jsx("button", {
                    ...r("allPlans"),
                    type: "button",
                    disabled: e.cta.loading,
                    onClick: e.onViewAllPlans,
                    children: e.allPlansText,
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const ai =
  require.j == "wl4"
    ? {
        DreaminaMiniSubscribeTheme: "theme_module_DreaminaMiniSubscribeTheme",
      }
    : null;
const an = q(
  {
    CommerceMiniSubscribeModal_modal:
      "index_module_CommerceMiniSubscribeModal_modal3",
    CommerceMiniSubscribeModal_content:
      "index_module_CommerceMiniSubscribeModal_content5",
    CommerceMiniSubscribeModal_close:
      "index_module_CommerceMiniSubscribeModal_close6",
    CommerceMiniSubscribeModal_hero:
      "index_module_CommerceMiniSubscribeModal_hero6",
    CommerceMiniSubscribeModal_heroDetails:
      "index_module_CommerceMiniSubscribeModal_heroDetails6",
    CommerceMiniSubscribeModal_heroTitle:
      "index_module_CommerceMiniSubscribeModal_heroTitle3",
    CommerceMiniSubscribeModal_heroDescription:
      "index_module_CommerceMiniSubscribeModal_heroDescription3",
    CommerceMiniSubscribeModal_media:
      "index_module_CommerceMiniSubscribeModal_media6",
    CommerceMiniSubscribeModal_benefits:
      "index_module_CommerceMiniSubscribeModal_benefits6",
    CommerceMiniSubscribeModal_benefit:
      "index_module_CommerceMiniSubscribeModal_benefit6",
    CommerceMiniSubscribeModal_benefitTag:
      "index_module_CommerceMiniSubscribeModal_benefitTag3",
    CommerceMiniSubscribeModal_main:
      "index_module_CommerceMiniSubscribeModal_main6",
    CommerceMiniSubscribeModal_header:
      "index_module_CommerceMiniSubscribeModal_header3",
    CommerceMiniSubscribeModal_title:
      "index_module_CommerceMiniSubscribeModal_title3",
    CommerceMiniSubscribeModal_subtitle:
      "index_module_CommerceMiniSubscribeModal_subtitle3",
    CommerceMiniSubscribeModal_tabs:
      "index_module_CommerceMiniSubscribeModal_tabs6",
    CommerceMiniSubscribeModal_tab:
      "index_module_CommerceMiniSubscribeModal_tab6",
    CommerceMiniSubscribeModal_plans:
      "index_module_CommerceMiniSubscribeModal_plans5",
    CommerceMiniSubscribeModal_plan:
      "index_module_CommerceMiniSubscribeModal_plan5",
    CommerceMiniSubscribeModal_planSelect:
      "index_module_CommerceMiniSubscribeModal_planSelect5",
    CommerceMiniSubscribeModal_planTitle:
      "index_module_CommerceMiniSubscribeModal_planTitle3",
    CommerceMiniSubscribeModal_planHeading:
      "index_module_CommerceMiniSubscribeModal_planHeading6",
    CommerceMiniSubscribeModal_planDetails:
      "index_module_CommerceMiniSubscribeModal_planDetails6",
    CommerceMiniSubscribeModal_metrics:
      "index_module_CommerceMiniSubscribeModal_metrics6",
    CommerceMiniSubscribeModal_price:
      "index_module_CommerceMiniSubscribeModal_price3",
    CommerceMiniSubscribeModal_credits:
      "index_module_CommerceMiniSubscribeModal_credits3",
    CommerceMiniSubscribeModal_creditRate:
      "index_module_CommerceMiniSubscribeModal_creditRate3",
    CommerceMiniSubscribeModal_variants:
      "index_module_CommerceMiniSubscribeModal_variants6",
    CommerceMiniSubscribeModal_variant:
      "index_module_CommerceMiniSubscribeModal_variant6",
    CommerceMiniSubscribeModal_footer:
      "index_module_CommerceMiniSubscribeModal_footer6",
    CommerceMiniSubscribeModal_cta:
      "index_module_CommerceMiniSubscribeModal_cta6",
    CommerceMiniSubscribeModal_description:
      "index_module_CommerceMiniSubscribeModal_description3",
    CommerceMiniSubscribeModal_allPlans:
      "index_module_CommerceMiniSubscribeModal_allPlans6",
    CommerceMiniSubscribeModal_state:
      "index_module_CommerceMiniSubscribeModal_state6",
    CommerceMiniSubscribeModal_activityBadge:
      "index_module_CommerceMiniSubscribeModal_activityBadge3",
    CommerceMiniSubscribeModal_planTitleRow:
      "index_module_CommerceMiniSubscribeModal_planTitleRow6",
  },
  {
    CommerceMiniSubscribeModal_tooltip: "lv-theme-force_light",
  },
);
export function Yt({
  className,
  classes,
  closeLabel = "关闭",
  allPlansText = "查看全部计划",
  retryText = "重试",
  loadingText = "加载中",
  ...rest
}) {
  return i.jsx(useAo, {
    ...rest,
    closeLabel,
    allPlansText,
    retryText,
    loadingText,
    classes: q(an, classes),
    className: a.A(
      "lv-theme-force_light",
      G,
      ai.DreaminaMiniSubscribeTheme,
      className,
    ),
  });
}
function al({
  product,
  variant,
  selected,
  disabled,
  radioName,
  ariaDescribedbyId,
  onSelect,
  creditIcon,
  classes,
  className,
}) {
  let u = variant === "promotion" || !!product.badgeText;
  let p = variant === "promotion" || !!product.hintText;
  let C =
    product.pricePrefixText &&
    product.priceText.startsWith(product.pricePrefixText)
      ? product.pricePrefixText
      : undefined;
  return i.jsxs("label", {
    className: a.A(classes.CommerceCreditProductSelector_card, className),
    "data-component": "CommerceCreditProductCell",
    "data-slot": "CommerceCreditProductSelector_card",
    "data-variant": variant,
    "data-selected": selected,
    "data-disabled": disabled,
    children: [
      i.jsx("input", {
        className: classes.CommerceCreditProductSelector_input,
        "data-slot": "CommerceCreditProductSelector_input",
        type: "radio",
        name: radioName,
        value: product.id,
        checked: selected,
        disabled,
        "aria-describedby": ariaDescribedbyId,
        onChange: () => onSelect(product.id),
        onKeyDown: (t) => {
          if (t.key === "Enter") {
            t.preventDefault();
            if (!(disabled || selected)) {
              onSelect(product.id);
            }
          }
        },
      }),
      u &&
        i.jsx("span", {
          className: classes.CommerceCreditProductSelector_cardHeader,
          "data-slot": "CommerceCreditProductSelector_cardHeader",
          children:
            product.badgeText &&
            i.jsx("span", {
              className: classes.CommerceCreditProductSelector_badge,
              "data-slot": "CommerceCreditProductSelector_badge",
              children: product.badgeText,
            }),
        }),
      i.jsxs("span", {
        className: classes.CommerceCreditProductSelector_body,
        "data-slot": "CommerceCreditProductSelector_body",
        children: [
          i.jsxs("span", {
            className: classes.CommerceCreditProductSelector_credits,
            "data-slot": "CommerceCreditProductSelector_credits",
            children: [
              i.jsx("span", {
                className: classes.CommerceCreditProductSelector_icon,
                "data-slot": "CommerceCreditProductSelector_icon",
                "aria-hidden": "true",
                children: creditIcon,
              }),
              i.jsx("span", {
                children: product.creditsText,
              }),
            ],
          }),
          i.jsxs("span", {
            className: classes.CommerceCreditProductSelector_priceRow,
            "data-slot": "CommerceCreditProductSelector_priceRow",
            children: [
              i.jsxs("span", {
                className: classes.CommerceCreditProductSelector_price,
                "data-slot": "CommerceCreditProductSelector_price",
                children: [
                  C &&
                    i.jsx("span", {
                      className:
                        classes.CommerceCreditProductSelector_pricePrefix,
                      "data-slot": "CommerceCreditProductSelector_pricePrefix",
                      children: C,
                    }),
                  C ? product.priceText.slice(C.length) : product.priceText,
                ],
              }),
              product.originalPriceText &&
                i.jsx("del", {
                  className:
                    classes.CommerceCreditProductSelector_originalPrice,
                  "data-slot": "CommerceCreditProductSelector_originalPrice",
                  children: product.originalPriceText,
                }),
            ],
          }),
        ],
      }),
      p &&
        i.jsx("span", {
          className: classes.CommerceCreditProductSelector_footer,
          "data-slot": "CommerceCreditProductSelector_footer",
          children:
            product.hintText &&
            i.jsx("span", {
              className: classes.CommerceCreditProductSelector_hint,
              "data-slot": "CommerceCreditProductSelector_hint",
              children: product.hintText,
            }),
        }),
    ],
  });
}
al.displayName = "CommerceCreditProductCell";
const am = {
  CommerceCreditProductSelector_root:
    "index_module_CommerceCreditProductSelector_root3",
  CommerceCreditProductSelector_group:
    "index_module_CommerceCreditProductSelector_group4",
  CommerceCreditProductSelector_grid:
    "index_module_CommerceCreditProductSelector_grid3",
  CommerceCreditProductSelector_card:
    "index_module_CommerceCreditProductSelector_card4",
  CommerceCreditProductSelector_input:
    "index_module_CommerceCreditProductSelector_input3",
  CommerceCreditProductSelector_cardHeader:
    "index_module_CommerceCreditProductSelector_cardHeader3",
  CommerceCreditProductSelector_body:
    "index_module_CommerceCreditProductSelector_body4",
  CommerceCreditProductSelector_credits:
    "index_module_CommerceCreditProductSelector_credits4",
  CommerceCreditProductSelector_icon:
    "index_module_CommerceCreditProductSelector_icon3",
  CommerceCreditProductSelector_priceRow:
    "index_module_CommerceCreditProductSelector_priceRow4",
  CommerceCreditProductSelector_footer:
    "index_module_CommerceCreditProductSelector_footer3",
};
function useAs({
  groups,
  selectedProductId,
  onSelectProduct,
  presentation,
  ariaLabel,
  disabled = false,
  className,
  classes,
  creditIcons,
}) {
  let radioName = o.useId();
  let p = R(am, useB(), classes);
  return i.jsx("div", {
    className: a.A(p.CommerceCreditProductSelector_root, className),
    "data-component": "CommerceCreditProductSelector",
    "data-slot": "CommerceCreditProductSelector_root",
    "data-presentation": presentation,
    role: "radiogroup",
    "aria-label": ariaLabel,
    "aria-disabled": disabled || undefined,
    children: groups.map((e, a) => {
      if (e.items.length === 0) {
        return null;
      }
      let o = `${radioName}-description-${a}`;
      return i.jsxs(
        "section",
        {
          className: p.CommerceCreditProductSelector_group,
          "data-slot": "CommerceCreditProductSelector_group",
          "data-variant": e.variant,
          children: [
            (e.title || e.description) &&
              i.jsxs("div", {
                className: p.CommerceCreditProductSelector_heading,
                "data-slot": "CommerceCreditProductSelector_heading",
                children: [
                  e.title &&
                    i.jsx("span", {
                      className: p.CommerceCreditProductSelector_title,
                      "data-slot": "CommerceCreditProductSelector_title",
                      children: e.title,
                    }),
                  e.description &&
                    i.jsx("span", {
                      id: o,
                      className: p.CommerceCreditProductSelector_description,
                      "data-slot": "CommerceCreditProductSelector_description",
                      children: e.description,
                    }),
                ],
              }),
            i.jsx("div", {
              className: p.CommerceCreditProductSelector_grid,
              "data-slot": "CommerceCreditProductSelector_grid",
              "data-variant": e.variant,
              "data-columns": e.columns,
              children: e.items.map((product) => {
                let n = disabled || product.disabled === true;
                let selected = product.id === selectedProductId;
                return i.jsx(
                  al,
                  {
                    product,
                    variant: e.variant,
                    selected,
                    disabled: n,
                    radioName,
                    ariaDescribedbyId: e.description ? o : undefined,
                    onSelect: onSelectProduct,
                    creditIcon:
                      creditIcons?.[e.variant] ?? creditIcons?.standard,
                    classes: p,
                  },
                  product.id,
                );
              }),
            }),
          ],
        },
        e.id,
      );
    }),
  });
}
useAs.displayName = "CommerceCreditProductSelector";
const ad = {
  CommerceCreditProductSelector_root:
    "index_module_CommerceCreditProductSelector_root4",
  CommerceCreditProductSelector_heading:
    "index_module_CommerceCreditProductSelector_heading2",
  CommerceCreditProductSelector_title:
    "index_module_CommerceCreditProductSelector_title2",
  CommerceCreditProductSelector_group:
    "index_module_CommerceCreditProductSelector_group3",
  CommerceCreditProductSelector_grid:
    "index_module_CommerceCreditProductSelector_grid4",
  CommerceCreditProductSelector_card:
    "index_module_CommerceCreditProductSelector_card3",
  CommerceCreditProductSelector_body:
    "index_module_CommerceCreditProductSelector_body3",
  CommerceCreditProductSelector_credits:
    "index_module_CommerceCreditProductSelector_credits3",
  CommerceCreditProductSelector_cardHeader:
    "index_module_CommerceCreditProductSelector_cardHeader4",
  CommerceCreditProductSelector_badge:
    "index_module_CommerceCreditProductSelector_badge2",
  CommerceCreditProductSelector_icon:
    "index_module_CommerceCreditProductSelector_icon4",
  CommerceCreditProductSelector_priceRow:
    "index_module_CommerceCreditProductSelector_priceRow3",
  CommerceCreditProductSelector_pricePrefix:
    "index_module_CommerceCreditProductSelector_pricePrefix",
  CommerceCreditProductSelector_originalPrice:
    "index_module_CommerceCreditProductSelector_originalPrice2",
  CommerceCreditProductSelector_footer:
    "index_module_CommerceCreditProductSelector_footer4",
  CommerceCreditProductSelector_hint:
    "index_module_CommerceCreditProductSelector_hint2",
};
const au = i.jsx("svg", {
  width: "1em",
  height: "1em",
  viewBox: "0 0 25 24",
  fill: "none",
  "aria-hidden": "true",
  children: i.jsx("path", {
    d: "M22.044 12.695a.77.77 0 0 0-.596-.734c-4.688-1.152-7.18-3.92-7.986-9.924a.358.358 0 0 0-.006-.033.573.573 0 0 0-1.137 0l-.007.033c-.805 6.004-3.298 8.772-7.986 9.924a.77.77 0 0 0-.596.734v.033a.82.82 0 0 0 .625.796c3.3.859 6.851 2.872 7.9 6.022.086.26.332.443.613.454h.037a.673.673 0 0 0 .614-.454c1.048-3.15 4.598-5.163 7.9-6.021a.82.82 0 0 0 .625-.797v-.033Z",
    fill: "currentColor",
  }),
});
export function pZ({ className, classes, creditIcons, ...rest }) {
  return i.jsx(useAs, {
    ...rest,
    className: a.A(G, className),
    classes: q(ad, classes),
    creditIcons: {
      standard: au,
      promotion: au,
      ...creditIcons,
    },
  });
}
pZ.displayName = "CommerceCreditProductSelector";
const aC =
  require.j == "wl4"
    ? {
        CommerceCorporatePaymentModal_modal:
          "index_module_CommerceCorporatePaymentModal_modal2",
        CommerceCorporatePaymentModal_content:
          "index_module_CommerceCorporatePaymentModal_content2",
        CommerceCorporatePaymentModal_header:
          "index_module_CommerceCorporatePaymentModal_header2",
        CommerceCorporatePaymentModal_title:
          "index_module_CommerceCorporatePaymentModal_title2",
        CommerceCorporatePaymentModal_closeButton:
          "index_module_CommerceCorporatePaymentModal_closeButton2",
        CommerceCorporatePaymentModal_copyButton:
          "index_module_CommerceCorporatePaymentModal_copyButton2",
        CommerceCorporatePaymentModal_waitingLink:
          "index_module_CommerceCorporatePaymentModal_waitingLink2",
        CommerceCorporatePaymentModal_primaryButton:
          "index_module_CommerceCorporatePaymentModal_primaryButton2",
        CommerceCorporatePaymentModal_secondaryButton:
          "index_module_CommerceCorporatePaymentModal_secondaryButton2",
        CommerceCorporatePaymentModal_countdown:
          "index_module_CommerceCorporatePaymentModal_countdown2",
        CommerceCorporatePaymentModal_body:
          "index_module_CommerceCorporatePaymentModal_body2",
        CommerceCorporatePaymentModal_accountCard:
          "index_module_CommerceCorporatePaymentModal_accountCard2",
        CommerceCorporatePaymentModal_accountContent:
          "index_module_CommerceCorporatePaymentModal_accountContent2",
        CommerceCorporatePaymentModal_accountOverlay:
          "index_module_CommerceCorporatePaymentModal_accountOverlay2",
        CommerceCorporatePaymentModal_accountHeader:
          "index_module_CommerceCorporatePaymentModal_accountHeader2",
        CommerceCorporatePaymentModal_accountTitle:
          "index_module_CommerceCorporatePaymentModal_accountTitle2",
        CommerceCorporatePaymentModal_accountSubtitle:
          "index_module_CommerceCorporatePaymentModal_accountSubtitle2",
        CommerceCorporatePaymentModal_accountRows:
          "index_module_CommerceCorporatePaymentModal_accountRows2",
        CommerceCorporatePaymentModal_accountRow:
          "index_module_CommerceCorporatePaymentModal_accountRow2",
        CommerceCorporatePaymentModal_accountLabel:
          "index_module_CommerceCorporatePaymentModal_accountLabel2",
        CommerceCorporatePaymentModal_accountValue:
          "index_module_CommerceCorporatePaymentModal_accountValue2",
        CommerceCorporatePaymentModal_amountValue:
          "index_module_CommerceCorporatePaymentModal_amountValue2",
        CommerceCorporatePaymentModal_instructions:
          "index_module_CommerceCorporatePaymentModal_instructions2",
        CommerceCorporatePaymentModal_instruction:
          "index_module_CommerceCorporatePaymentModal_instruction2",
        CommerceCorporatePaymentModal_orderSummary:
          "index_module_CommerceCorporatePaymentModal_orderSummary2",
        CommerceCorporatePaymentModal_productName:
          "index_module_CommerceCorporatePaymentModal_productName2",
        CommerceCorporatePaymentModal_orderExpirationValue:
          "index_module_CommerceCorporatePaymentModal_orderExpirationValue2",
        CommerceCorporatePaymentModal_orderSummaryDivider:
          "index_module_CommerceCorporatePaymentModal_orderSummaryDivider2",
        CommerceCorporatePaymentModal_orderExpiration:
          "index_module_CommerceCorporatePaymentModal_orderExpiration2",
        CommerceCorporatePaymentModal_orderExpirationLabel:
          "index_module_CommerceCorporatePaymentModal_orderExpirationLabel2",
        CommerceCorporatePaymentModal_detailsFooter:
          "index_module_CommerceCorporatePaymentModal_detailsFooter2",
        CommerceCorporatePaymentModal_actions:
          "index_module_CommerceCorporatePaymentModal_actions2",
        CommerceCorporatePaymentModal_state:
          "index_module_CommerceCorporatePaymentModal_state2",
        CommerceCorporatePaymentModal_stateIcon:
          "index_module_CommerceCorporatePaymentModal_stateIcon2",
        CommerceCorporatePaymentModal_stateDescription:
          "index_module_CommerceCorporatePaymentModal_stateDescription2",
        CommerceCorporatePaymentModal_waitingAccountAction:
          "index_module_CommerceCorporatePaymentModal_waitingAccountAction2",
      }
    : null;
const av =
  require.j == "wl4"
    ? [
        "CommerceCorporatePaymentModal_modal",
        "CommerceCorporatePaymentModal_content",
        "CommerceCorporatePaymentModal_header",
        "CommerceCorporatePaymentModal_title",
        "CommerceCorporatePaymentModal_closeButton",
        "CommerceCorporatePaymentModal_countdown",
        "CommerceCorporatePaymentModal_body",
        "CommerceCorporatePaymentModal_state",
        "CommerceCorporatePaymentModal_stateIcon",
        "CommerceCorporatePaymentModal_stateDescription",
        "CommerceCorporatePaymentModal_waitingAccountAction",
        "CommerceCorporatePaymentModal_waitingLink",
        "CommerceCorporatePaymentModal_accountCard",
        "CommerceCorporatePaymentModal_accountContent",
        "CommerceCorporatePaymentModal_accountOverlay",
        "CommerceCorporatePaymentModal_accountHeader",
        "CommerceCorporatePaymentModal_accountTitle",
        "CommerceCorporatePaymentModal_accountSubtitle",
        "CommerceCorporatePaymentModal_accountRows",
        "CommerceCorporatePaymentModal_accountRow",
        "CommerceCorporatePaymentModal_accountLabel",
        "CommerceCorporatePaymentModal_accountValue",
        "CommerceCorporatePaymentModal_copyButton",
        "CommerceCorporatePaymentModal_amountValue",
        "CommerceCorporatePaymentModal_instructions",
        "CommerceCorporatePaymentModal_instruction",
        "CommerceCorporatePaymentModal_orderSummary",
        "CommerceCorporatePaymentModal_productName",
        "CommerceCorporatePaymentModal_orderSummaryDivider",
        "CommerceCorporatePaymentModal_orderExpiration",
        "CommerceCorporatePaymentModal_orderExpirationLabel",
        "CommerceCorporatePaymentModal_orderExpirationValue",
        "CommerceCorporatePaymentModal_detailsFooter",
        "CommerceCorporatePaymentModal_actions",
        "CommerceCorporatePaymentModal_primaryButton",
        "CommerceCorporatePaymentModal_secondaryButton",
      ]
    : null;
function a_(e) {
  return String(e).padStart(2, "0");
}
function af(e) {
  let t = new Date(1000 * e);
  return `${t.getFullYear()}/${a_(t.getMonth() + 1)}/${a_(t.getDate())} ${a_(t.getHours())}:${a_(t.getMinutes())}:${a_(t.getSeconds())}`;
}
function useAh({
  visible,
  view,
  transferMode,
  progress,
  remainingSeconds,
  expired = false,
  querying = false,
  closedReason,
  productName,
  texts,
  formatAmount,
  formatCloseTime = af,
  detailsFooterSlot,
  accountOverlaySlot,
  onConfirm,
  onRetry,
  onViewAccount,
  onAcknowledge,
  onCopy,
  onClose,
  className,
  classes,
}) {
  let N;
  let L;
  let F;
  let J;
  let O;
  let Q = useB();
  let W = o.useMemo(() => R(aC, Q, classes), [Q, classes]);
  let URef = o.useRef(null);
  if (!visible) {
    return null;
  }
  let q =
    view === "transfer"
      ? expired
        ? texts.expiredTitle
        : transferMode === "supplement"
          ? texts.supplementTitle
          : texts.paymentTitle
      : view === "waiting"
        ? texts.waitingTitle
        : view === "closed"
          ? texts.closedTitle
          : view === "error"
            ? texts.errorTitle
            : texts.loadingTitle;
  let G = (e, t, r = {}) => {
    let o;
    let n;
    return i.jsxs("div", {
      className: W.CommerceCorporatePaymentModal_accountRow,
      "data-slot": "CommerceCorporatePaymentModal_accountRow",
      children: [
        i.jsx("div", {
          className: W.CommerceCorporatePaymentModal_accountLabel,
          "data-slot": "CommerceCorporatePaymentModal_accountLabel",
          children: e,
        }),
        i.jsx("div", {
          className: a.A(
            W.CommerceCorporatePaymentModal_accountValue,
            r.amount && W.CommerceCorporatePaymentModal_amountValue,
          ),
          "data-slot": r.amount
            ? "CommerceCorporatePaymentModal_amountValue"
            : "CommerceCorporatePaymentModal_accountValue",
          children:
            r.copyField && r.copyValue
              ? ((o = r.copyField),
                (n = r.copyValue),
                i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("span", {
                      children: n,
                    }),
                    i.jsx("button", {
                      type: "button",
                      className: W.CommerceCorporatePaymentModal_copyButton,
                      "data-slot": "CommerceCorporatePaymentModal_copyButton",
                      "aria-label": texts.copyAriaLabel,
                      onClick: () => onCopy(o, n),
                      children: i.jsx(I.A, {
                        size: 14,
                        "aria-hidden": "true",
                      }),
                    }),
                  ],
                }))
              : t,
        }),
      ],
    });
  };
  return i.jsx(u.A, {
    visible,
    onCancel: onClose,
    footer: null,
    closable: false,
    maskClosable: false,
    escToExit: false,
    backspaceToExit: false,
    focusLock: true,
    autoFocus: false,
    afterOpen: () => URef.current?.focus(),
    unmountOnExit: true,
    className: a.A(W.CommerceCorporatePaymentModal_modal, className),
    style: {
      width: view === "transfer" ? 600 : view === "waiting" ? 480 : 540,
      maxWidth: "calc(100vw - 32px)",
    },
    children: i.jsxs("div", {
      ref: URef,
      tabIndex: -1,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === "Escape" || e.key === "Backspace") {
          e.stopPropagation();
        }
      },
      className: W.CommerceCorporatePaymentModal_content,
      "data-component": "CommerceCorporatePaymentModal",
      "data-slot": "CommerceCorporatePaymentModal_content",
      "data-slots": av.join(","),
      "data-view": view,
      "data-mode": transferMode,
      "data-expired": expired ? "true" : "false",
      children: [
        i.jsxs("div", {
          className: W.CommerceCorporatePaymentModal_header,
          "data-slot": "CommerceCorporatePaymentModal_header",
          children: [
            i.jsx("div", {
              className: W.CommerceCorporatePaymentModal_title,
              "data-slot": "CommerceCorporatePaymentModal_title",
              role: "heading",
              "aria-level": 2,
              children: q,
            }),
            view !== "waiting"
              ? i.jsx("button", {
                  type: "button",
                  className: W.CommerceCorporatePaymentModal_closeButton,
                  "data-slot": "CommerceCorporatePaymentModal_closeButton",
                  "aria-label": texts.closeAriaLabel,
                  onClick: onClose,
                  children: i.jsx(g.A, {
                    size: 18,
                    "aria-hidden": "true",
                  }),
                })
              : null,
            view === "transfer"
              ? i.jsxs("div", {
                  className: W.CommerceCorporatePaymentModal_countdown,
                  "data-slot": "CommerceCorporatePaymentModal_countdown",
                  children: [
                    i.jsx(k.A, {
                      size: 14,
                      "aria-hidden": "true",
                    }),
                    i.jsxs("span", {
                      children: [
                        texts.countdownPrefix,
                        " ",
                        ((N = texts.dayUnit),
                        (F = Math.floor(
                          (L = Math.max(0, Math.floor(remainingSeconds))) /
                            86400,
                        )),
                        (J = Math.floor((L % 86400) / 3600)),
                        (O = Math.floor((L % 3600) / 60)),
                        i.jsxs(i.Fragment, {
                          children: [
                            F > 0
                              ? i.jsxs(i.Fragment, {
                                  children: [F, N, " "],
                                })
                              : null,
                            a_(J),
                            ":",
                            a_(O),
                            ":",
                            a_(L % 60),
                          ],
                        })),
                        "，",
                        texts.countdownSuffix,
                      ],
                    }),
                  ],
                })
              : null,
          ],
        }),
        i.jsx("div", {
          className: W.CommerceCorporatePaymentModal_body,
          "data-slot": "CommerceCorporatePaymentModal_body",
          children:
            view === "loading"
              ? i.jsxs("div", {
                  className: W.CommerceCorporatePaymentModal_state,
                  "data-slot": "CommerceCorporatePaymentModal_state",
                  "data-state": "loading",
                  children: [
                    i.jsx(p.A, {}),
                    texts.loadingDescription
                      ? i.jsx("div", {
                          className:
                            W.CommerceCorporatePaymentModal_stateDescription,
                          "data-slot":
                            "CommerceCorporatePaymentModal_stateDescription",
                          children: texts.loadingDescription,
                        })
                      : null,
                  ],
                })
              : view === "waiting"
                ? i.jsxs("div", {
                    className: W.CommerceCorporatePaymentModal_state,
                    "data-slot": "CommerceCorporatePaymentModal_state",
                    "data-state": "waiting",
                    children: [
                      i.jsx("div", {
                        className:
                          W.CommerceCorporatePaymentModal_stateDescription,
                        "data-slot":
                          "CommerceCorporatePaymentModal_stateDescription",
                        children: texts.waitingDescription,
                      }),
                      i.jsxs("div", {
                        className:
                          W.CommerceCorporatePaymentModal_waitingAccountAction,
                        "data-slot":
                          "CommerceCorporatePaymentModal_waitingAccountAction",
                        children: [
                          texts.waitingAccountPrompt
                            ? i.jsx("span", {
                                children: texts.waitingAccountPrompt,
                              })
                            : null,
                          i.jsxs("button", {
                            type: "button",
                            className:
                              W.CommerceCorporatePaymentModal_waitingLink,
                            "data-slot":
                              "CommerceCorporatePaymentModal_waitingLink",
                            onClick: onViewAccount,
                            children: [
                              texts.viewAccountText,
                              i.jsx(w.A, {
                                size: 14,
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: W.CommerceCorporatePaymentModal_actions,
                        "data-slot": "CommerceCorporatePaymentModal_actions",
                        children: i.jsx("button", {
                          type: "button",
                          className:
                            W.CommerceCorporatePaymentModal_primaryButton,
                          "data-slot":
                            "CommerceCorporatePaymentModal_primaryButton",
                          onClick: onAcknowledge,
                          children: texts.acknowledgeText,
                        }),
                      }),
                    ],
                  })
                : view === "closed"
                  ? i.jsxs("div", {
                      className: W.CommerceCorporatePaymentModal_state,
                      "data-slot": "CommerceCorporatePaymentModal_state",
                      "data-state": "closed",
                      children: [
                        i.jsx(b.A, {
                          size: 40,
                          className: W.CommerceCorporatePaymentModal_stateIcon,
                          "data-slot":
                            "CommerceCorporatePaymentModal_stateIcon",
                          "aria-hidden": "true",
                        }),
                        i.jsx("div", {
                          className:
                            W.CommerceCorporatePaymentModal_stateDescription,
                          "data-slot":
                            "CommerceCorporatePaymentModal_stateDescription",
                          children: closedReason ?? texts.closedDescription,
                        }),
                        i.jsx("div", {
                          className: W.CommerceCorporatePaymentModal_actions,
                          "data-slot": "CommerceCorporatePaymentModal_actions",
                          children: i.jsx("button", {
                            type: "button",
                            className:
                              W.CommerceCorporatePaymentModal_primaryButton,
                            "data-slot":
                              "CommerceCorporatePaymentModal_primaryButton",
                            onClick: onClose,
                            children: texts.acknowledgeText,
                          }),
                        }),
                      ],
                    })
                  : view === "error"
                    ? i.jsxs("div", {
                        className: W.CommerceCorporatePaymentModal_state,
                        "data-slot": "CommerceCorporatePaymentModal_state",
                        "data-state": "error",
                        role: "alert",
                        children: [
                          i.jsx(j.A, {
                            size: 40,
                            className:
                              W.CommerceCorporatePaymentModal_stateIcon,
                            "data-slot":
                              "CommerceCorporatePaymentModal_stateIcon",
                            "aria-hidden": "true",
                          }),
                          i.jsx("div", {
                            className:
                              W.CommerceCorporatePaymentModal_stateDescription,
                            "data-slot":
                              "CommerceCorporatePaymentModal_stateDescription",
                            children: texts.errorDescription,
                          }),
                          i.jsx("div", {
                            className: W.CommerceCorporatePaymentModal_actions,
                            "data-slot":
                              "CommerceCorporatePaymentModal_actions",
                            children: i.jsx("button", {
                              type: "button",
                              className:
                                W.CommerceCorporatePaymentModal_primaryButton,
                              "data-slot":
                                "CommerceCorporatePaymentModal_primaryButton",
                              onClick: onRetry,
                              children: texts.retryText,
                            }),
                          }),
                        ],
                      })
                    : progress
                      ? i.jsxs(i.Fragment, {
                          children: [
                            i.jsxs("div", {
                              className:
                                W.CommerceCorporatePaymentModal_accountCard,
                              "data-slot":
                                "CommerceCorporatePaymentModal_accountCard",
                              "data-overlay-visible": accountOverlaySlot
                                ? "true"
                                : "false",
                              children: [
                                i.jsxs("div", {
                                  className:
                                    W.CommerceCorporatePaymentModal_accountContent,
                                  "data-slot":
                                    "CommerceCorporatePaymentModal_accountContent",
                                  "aria-hidden":
                                    !!accountOverlaySlot || undefined,
                                  children: [
                                    i.jsxs("div", {
                                      className:
                                        W.CommerceCorporatePaymentModal_accountHeader,
                                      "data-slot":
                                        "CommerceCorporatePaymentModal_accountHeader",
                                      children: [
                                        i.jsx("div", {
                                          className:
                                            W.CommerceCorporatePaymentModal_accountTitle,
                                          "data-slot":
                                            "CommerceCorporatePaymentModal_accountTitle",
                                          children: texts.accountTitle,
                                        }),
                                        i.jsx("div", {
                                          className:
                                            W.CommerceCorporatePaymentModal_accountSubtitle,
                                          "data-slot":
                                            "CommerceCorporatePaymentModal_accountSubtitle",
                                          children: texts.accountSubtitle,
                                        }),
                                      ],
                                    }),
                                    i.jsxs("div", {
                                      className:
                                        W.CommerceCorporatePaymentModal_accountRows,
                                      "data-slot":
                                        "CommerceCorporatePaymentModal_accountRows",
                                      children: [
                                        G(
                                          texts.payeeNameLabel,
                                          progress.payeeName,
                                          {
                                            copyField: "payee_name",
                                            copyValue: progress.payeeName,
                                          },
                                        ),
                                        G(
                                          texts.payeeBankLabel,
                                          progress.payeeBank,
                                          {
                                            copyField: "payee_bank",
                                            copyValue: progress.payeeBank,
                                          },
                                        ),
                                        G(
                                          texts.payeeAccountNoLabel,
                                          progress.payeeAccountNo,
                                          {
                                            copyField: "payee_account_no",
                                            copyValue: progress.payeeAccountNo,
                                          },
                                        ),
                                        G(
                                          texts.payableAmountLabel,
                                          formatAmount(
                                            progress.payableAmount,
                                            progress.currency,
                                          ),
                                          {
                                            amount: true,
                                          },
                                        ),
                                        transferMode === "supplement"
                                          ? G(
                                              texts.paidAmountLabel,
                                              formatAmount(
                                                progress.paidAmount,
                                                progress.currency,
                                              ),
                                              {
                                                amount: true,
                                              },
                                            )
                                          : null,
                                        transferMode === "supplement"
                                          ? G(
                                              texts.diffAmountLabel,
                                              formatAmount(
                                                progress.diffAmount,
                                                progress.currency,
                                              ),
                                              {
                                                amount: true,
                                              },
                                            )
                                          : null,
                                      ],
                                    }),
                                    texts.instructions.length > 0
                                      ? i.jsx("ol", {
                                          className:
                                            W.CommerceCorporatePaymentModal_instructions,
                                          "data-slot":
                                            "CommerceCorporatePaymentModal_instructions",
                                          children: texts.instructions.map(
                                            (e, t) =>
                                              i.jsx(
                                                "li",
                                                {
                                                  className:
                                                    W.CommerceCorporatePaymentModal_instruction,
                                                  "data-slot":
                                                    "CommerceCorporatePaymentModal_instruction",
                                                  children: e,
                                                },
                                                t,
                                              ),
                                          ),
                                        })
                                      : null,
                                    i.jsxs("div", {
                                      className:
                                        W.CommerceCorporatePaymentModal_orderSummary,
                                      "data-slot":
                                        "CommerceCorporatePaymentModal_orderSummary",
                                      children: [
                                        productName
                                          ? i.jsxs(i.Fragment, {
                                              children: [
                                                i.jsx("div", {
                                                  className:
                                                    W.CommerceCorporatePaymentModal_productName,
                                                  "data-slot":
                                                    "CommerceCorporatePaymentModal_productName",
                                                  children: productName,
                                                }),
                                                i.jsx("span", {
                                                  className:
                                                    W.CommerceCorporatePaymentModal_orderSummaryDivider,
                                                  "data-slot":
                                                    "CommerceCorporatePaymentModal_orderSummaryDivider",
                                                  "aria-hidden": "true",
                                                }),
                                              ],
                                            })
                                          : null,
                                        i.jsxs("div", {
                                          className:
                                            W.CommerceCorporatePaymentModal_orderExpiration,
                                          "data-slot":
                                            "CommerceCorporatePaymentModal_orderExpiration",
                                          children: [
                                            i.jsx("span", {
                                              className:
                                                W.CommerceCorporatePaymentModal_orderExpirationLabel,
                                              "data-slot":
                                                "CommerceCorporatePaymentModal_orderExpirationLabel",
                                              children:
                                                texts.orderExpirationLabel,
                                            }),
                                            i.jsx("span", {
                                              className:
                                                W.CommerceCorporatePaymentModal_orderExpirationValue,
                                              "data-slot":
                                                "CommerceCorporatePaymentModal_orderExpirationValue",
                                              children: formatCloseTime(
                                                progress.closeTime,
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                accountOverlaySlot
                                  ? i.jsx("div", {
                                      className:
                                        W.CommerceCorporatePaymentModal_accountOverlay,
                                      "data-slot":
                                        "CommerceCorporatePaymentModal_accountOverlay",
                                      children: accountOverlaySlot,
                                    })
                                  : null,
                              ],
                            }),
                            detailsFooterSlot
                              ? i.jsx("div", {
                                  className:
                                    W.CommerceCorporatePaymentModal_detailsFooter,
                                  "data-slot":
                                    "CommerceCorporatePaymentModal_detailsFooter",
                                  children: detailsFooterSlot,
                                })
                              : null,
                            i.jsx("div", {
                              className:
                                W.CommerceCorporatePaymentModal_actions,
                              "data-slot":
                                "CommerceCorporatePaymentModal_actions",
                              children: i.jsx("button", {
                                type: "button",
                                className:
                                  W.CommerceCorporatePaymentModal_primaryButton,
                                "data-slot":
                                  "CommerceCorporatePaymentModal_primaryButton",
                                disabled: querying || expired,
                                "aria-busy": querying,
                                onClick: onConfirm,
                                children: querying
                                  ? texts.queryingText
                                  : texts.confirmText,
                              }),
                            }),
                          ],
                        })
                      : null,
        }),
      ],
    }),
  });
}
const aT =
  require.j == "wl4"
    ? {
        CommerceCorporatePaymentPhoneBinding_panel:
          "index_module_CommerceCorporatePaymentPhoneBinding_panel4",
        CommerceCorporatePaymentPhoneBinding_fields:
          "index_module_CommerceCorporatePaymentPhoneBinding_fields4",
        CommerceCorporatePaymentPhoneBinding_successNotice:
          "index_module_CommerceCorporatePaymentPhoneBinding_successNotice4",
        CommerceCorporatePaymentPhoneBinding_state:
          "index_module_CommerceCorporatePaymentPhoneBinding_state3",
        CommerceCorporatePaymentPhoneBinding_bound:
          "index_module_CommerceCorporatePaymentPhoneBinding_bound3",
        CommerceCorporatePaymentPhoneBinding_codeControl:
          "index_module_CommerceCorporatePaymentPhoneBinding_codeControl4",
        CommerceCorporatePaymentPhoneBinding_phoneInput:
          "index_module_CommerceCorporatePaymentPhoneBinding_phoneInput4",
        CommerceCorporatePaymentPhoneBinding_codeInput:
          "index_module_CommerceCorporatePaymentPhoneBinding_codeInput3",
        CommerceCorporatePaymentPhoneBinding_retryButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_retryButton3",
        CommerceCorporatePaymentPhoneBinding_changeButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_changeButton3",
        CommerceCorporatePaymentPhoneBinding_sendButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_sendButton3",
        CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton3",
      }
    : null;
const aS =
  require.j == "wl4"
    ? [
        "CommerceCorporatePaymentPhoneBinding_panel",
        "CommerceCorporatePaymentPhoneBinding_title",
        "CommerceCorporatePaymentPhoneBinding_state",
        "CommerceCorporatePaymentPhoneBinding_queryText",
        "CommerceCorporatePaymentPhoneBinding_retryButton",
        "CommerceCorporatePaymentPhoneBinding_bound",
        "CommerceCorporatePaymentPhoneBinding_boundDescription",
        "CommerceCorporatePaymentPhoneBinding_changeButton",
        "CommerceCorporatePaymentPhoneBinding_fields",
        "CommerceCorporatePaymentPhoneBinding_phoneInput",
        "CommerceCorporatePaymentPhoneBinding_codeControl",
        "CommerceCorporatePaymentPhoneBinding_codeInput",
        "CommerceCorporatePaymentPhoneBinding_sendButton",
        "CommerceCorporatePaymentPhoneBinding_status",
        "CommerceCorporatePaymentPhoneBinding_error",
        "CommerceCorporatePaymentPhoneBinding_successNotice",
        "CommerceCorporatePaymentPhoneBinding_successTitle",
        "CommerceCorporatePaymentPhoneBinding_successDescription",
        "CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton",
      ]
    : null;
function useAg(classes) {
  let t = useB();
  return o.useMemo(() => R(aT, t, classes), [t, classes]);
}
function ay({
  view,
  phone,
  code,
  maskedPhone,
  canUpdate = true,
  sending = false,
  binding = false,
  resendRemainingSeconds = 0,
  phoneInvalid = false,
  codeInvalid = false,
  errorMessage,
  texts,
  onPhoneChange,
  onCodeChange,
  onCodeBlur,
  onSendCode,
  onRetryQuery,
  onStartEditing,
  className,
  classes,
}) {
  let w = useAg(classes);
  let I = view === "unbound" || view === "editing";
  let b =
    phoneInvalid ||
    phone.length !== 11 ||
    sending ||
    binding ||
    resendRemainingSeconds > 0;
  let j = sending
    ? texts.sendingCodeText
    : resendRemainingSeconds > 0
      ? texts.resendCodeText(resendRemainingSeconds)
      : texts.sendCodeText;
  return i.jsxs("section", {
    className: a.A(w.CommerceCorporatePaymentPhoneBinding_panel, className),
    "data-component": "CommerceCorporatePaymentPhoneBindingPanel",
    "data-slot": "CommerceCorporatePaymentPhoneBinding_panel",
    "data-slots": aS.join(","),
    "data-view": view,
    children: [
      i.jsx("div", {
        className: w.CommerceCorporatePaymentPhoneBinding_title,
        "data-slot": "CommerceCorporatePaymentPhoneBinding_title",
        children: texts.title,
      }),
      view === "querying"
        ? i.jsx("div", {
            className: w.CommerceCorporatePaymentPhoneBinding_state,
            "data-slot": "CommerceCorporatePaymentPhoneBinding_state",
            "aria-live": "polite",
            children: i.jsx("span", {
              className: w.CommerceCorporatePaymentPhoneBinding_queryText,
              "data-slot": "CommerceCorporatePaymentPhoneBinding_queryText",
              children: texts.queryingText,
            }),
          })
        : null,
      view === "query_error"
        ? i.jsxs("div", {
            className: w.CommerceCorporatePaymentPhoneBinding_state,
            "data-slot": "CommerceCorporatePaymentPhoneBinding_state",
            role: "alert",
            children: [
              i.jsx("span", {
                className: w.CommerceCorporatePaymentPhoneBinding_queryText,
                "data-slot": "CommerceCorporatePaymentPhoneBinding_queryText",
                children: texts.queryErrorText,
              }),
              i.jsx("button", {
                type: "button",
                className: w.CommerceCorporatePaymentPhoneBinding_retryButton,
                "data-slot": "CommerceCorporatePaymentPhoneBinding_retryButton",
                onClick: onRetryQuery,
                children: texts.retryText,
              }),
            ],
          })
        : null,
      view === "bound"
        ? i.jsxs("div", {
            className: w.CommerceCorporatePaymentPhoneBinding_bound,
            "data-slot": "CommerceCorporatePaymentPhoneBinding_bound",
            children: [
              i.jsx("span", {
                className:
                  w.CommerceCorporatePaymentPhoneBinding_boundDescription,
                "data-slot":
                  "CommerceCorporatePaymentPhoneBinding_boundDescription",
                children: texts.boundDescription(maskedPhone ?? ""),
              }),
              canUpdate
                ? i.jsx("button", {
                    type: "button",
                    className:
                      w.CommerceCorporatePaymentPhoneBinding_changeButton,
                    "data-slot":
                      "CommerceCorporatePaymentPhoneBinding_changeButton",
                    onClick: onStartEditing,
                    children: texts.changePhoneText,
                  })
                : null,
            ],
          })
        : null,
      I
        ? i.jsxs("div", {
            className: w.CommerceCorporatePaymentPhoneBinding_fields,
            "data-slot": "CommerceCorporatePaymentPhoneBinding_fields",
            children: [
              i.jsx("input", {
                type: "tel",
                inputMode: "numeric",
                autoComplete: "tel",
                maxLength: 11,
                value: phone,
                placeholder: texts.phonePlaceholder,
                "aria-label": texts.phoneAriaLabel,
                "aria-invalid": phoneInvalid,
                disabled: binding,
                className: w.CommerceCorporatePaymentPhoneBinding_phoneInput,
                "data-slot": "CommerceCorporatePaymentPhoneBinding_phoneInput",
                "data-invalid": phoneInvalid ? "true" : "false",
                onChange: (e) => {
                  onPhoneChange(e.currentTarget.value);
                },
              }),
              i.jsxs("div", {
                className: w.CommerceCorporatePaymentPhoneBinding_codeControl,
                "data-slot": "CommerceCorporatePaymentPhoneBinding_codeControl",
                "data-invalid": codeInvalid ? "true" : "false",
                children: [
                  i.jsx("input", {
                    type: "text",
                    inputMode: "numeric",
                    autoComplete: "one-time-code",
                    maxLength: 6,
                    value: code,
                    placeholder: texts.codePlaceholder,
                    "aria-label": texts.codeAriaLabel,
                    "aria-invalid": codeInvalid,
                    disabled: binding,
                    className: w.CommerceCorporatePaymentPhoneBinding_codeInput,
                    "data-slot":
                      "CommerceCorporatePaymentPhoneBinding_codeInput",
                    onChange: (e) => {
                      onCodeChange(e.currentTarget.value);
                    },
                    onBlur: onCodeBlur,
                  }),
                  i.jsx("button", {
                    type: "button",
                    className:
                      w.CommerceCorporatePaymentPhoneBinding_sendButton,
                    "data-slot":
                      "CommerceCorporatePaymentPhoneBinding_sendButton",
                    disabled: b,
                    "aria-busy": sending,
                    onClick: onSendCode,
                    children: j,
                  }),
                ],
              }),
              binding
                ? i.jsx("div", {
                    className: w.CommerceCorporatePaymentPhoneBinding_status,
                    "data-slot": "CommerceCorporatePaymentPhoneBinding_status",
                    "aria-live": "polite",
                    children: texts.bindingText,
                  })
                : errorMessage
                  ? i.jsx("div", {
                      className: w.CommerceCorporatePaymentPhoneBinding_error,
                      "data-slot": "CommerceCorporatePaymentPhoneBinding_error",
                      role: "alert",
                      children: errorMessage,
                    })
                  : null,
            ],
          })
        : null,
    ],
  });
}
function useAw({
  title,
  description,
  acknowledgeText,
  onAcknowledge,
  className,
  classes,
}) {
  let m = useAg(classes);
  let s = o.useId();
  return i.jsxs("section", {
    className: a.A(
      m.CommerceCorporatePaymentPhoneBinding_successNotice,
      className,
    ),
    "data-component": "CommerceCorporatePaymentPhoneBindingSuccessNotice",
    "data-slot": "CommerceCorporatePaymentPhoneBinding_successNotice",
    role: "dialog",
    "aria-labelledby": s,
    onKeyDown: (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
      }
    },
    children: [
      i.jsx("div", {
        id: s,
        className: m.CommerceCorporatePaymentPhoneBinding_successTitle,
        "data-slot": "CommerceCorporatePaymentPhoneBinding_successTitle",
        children: title,
      }),
      i.jsx("div", {
        className: m.CommerceCorporatePaymentPhoneBinding_successDescription,
        "data-slot": "CommerceCorporatePaymentPhoneBinding_successDescription",
        children: description,
      }),
      i.jsx("button", {
        type: "button",
        autoFocus: true,
        className:
          m.CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton,
        "data-slot":
          "CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton",
        onClick: onAcknowledge,
        children: acknowledgeText,
      }),
    ],
  });
}
function aI(error) {
  return {
    binding: false,
    error,
    reconcilingBind: false,
  };
}
const ab = /^1[3-9]\d{9}$/;
function aj(e) {
  return ab.test(e);
}
function ak(e) {
  return /^\d{6}$/.test(e);
}
function aP(resendDeadline, t) {
  if (resendDeadline) {
    return Math.max(0, Math.ceil((resendDeadline - t) / 1000));
  }
  return 0;
}
const ax =
  require.j == "wl4"
    ? {
        view: "loading",
        transferMode: "payment",
        querying: false,
      }
    : null;
function aM(e) {
  return typeof e === "string" && e.trim().length > 0;
}
function aA(e) {
  return typeof e === "number" && Number.isFinite(e);
}
function aD() {
  return Error("Invalid corporate payment trade response");
}
function aR(e) {
  if (e.progress.payStatus === 2) {
    return "supplement";
  }
  return "payment";
}
function aE(e, t, r) {
  let a;
  if (
    !aM(e?.orderId) ||
    (e.orderStatus !== "active" &&
      e.orderStatus !== "success" &&
      e.orderStatus !== "closed")
  ) {
    throw aD();
  }
  if (e.orderStatus === "closed") {
    return {
      kind: "state",
      state: {
        view: "closed",
        transferMode: "payment",
        querying: false,
        trade: e,
      },
      notifyOrderReady: false,
    };
  }
  if (e.orderStatus === "success" || e.progress?.payStatus === 3) {
    return {
      kind: "success",
      trade: e,
    };
  }
  if (
    !(
      (a = e.progress) &&
      aA(a.payStatus) &&
      aM(a.payeeName) &&
      aM(a.payeeBank) &&
      aM(a.payeeAccountNo) &&
      aA(a.payableAmount) &&
      aA(a.paidAmount) &&
      aA(a.diffAmount) &&
      aM(a.currency) &&
      aA(a.closeTime)
    ) ||
    !(a.closeTime > 0)
  ) {
    throw aD();
  }
  let o = e.progress.closeTime <= r;
  if (t !== "confirm" || o || e.progress.payStatus === 2) {
    return {
      kind: "state",
      state: {
        view: "transfer",
        transferMode: aR(e),
        querying: false,
        trade: e,
      },
      notifyOrderReady: t === "initial" || !o,
    };
  }
  return {
    kind: "state",
    state: {
      view: "waiting",
      transferMode: "payment",
      querying: false,
      trade: e,
    },
    notifyOrderReady: true,
  };
}
function aB(e) {
  return e.view === "transfer";
}
const aN =
  require.j == "wl4"
    ? {
        view: "querying",
        phone: "",
        code: "",
        canUpdate: true,
        phoneTouched: false,
        codeRequested: false,
        codeValidationRequested: false,
        sending: false,
        binding: false,
        reconcilingBind: false,
        successNoticeVisible: false,
      }
    : null;
function aL(e) {
  if (!e.bound || !e.maskedPhone?.trim()) {
    throw Error("Invalid phone binding response");
  }
  return {
    view: "bound",
    maskedPhone: e.maskedPhone,
    canUpdate: e.canUpdate !== false,
  };
}
var aF = M.u1("commerce-corporate-payment-context-service");
export { aF as U };
function aJ(e) {
  if (typeof e === "string") {
    return e;
  }
  return "";
}
function aO(e, t) {
  let r;
  let e_cj_corporate_payment_result = e.cj_corporate_payment_result;
  let o =
    e_cj_corporate_payment_result?.progress ?? e.corporate_payment_progress;
  return {
    orderId: aJ(e.order_id) || t || "",
    orderStatus: ["SUCCESS", "SHIPPED", "PAID", "FULFILLED"].includes(
      (r = String(e.order_status ?? "").toUpperCase()),
    )
      ? "success"
      : [
            "CLOSED",
            "CANCEL",
            "CANCELED",
            "CANCELLED",
            "EXPIRED",
            "TIMEOUT",
          ].includes(r)
        ? "closed"
        : "active",
    productId: aJ(e.product_id) || aJ(e.sku_info?.product_id) || undefined,
    productName: aJ(e.sku_info?.display_name) || undefined,
    progress: {
      payStatus: o?.pay_status ?? 0,
      payeeName: aJ(e_cj_corporate_payment_result?.payee_name),
      payeeBank: aJ(e_cj_corporate_payment_result?.payee_bank),
      payeeAccountNo: aJ(e_cj_corporate_payment_result?.payee_account_no),
      payableAmount: o?.payable_amount ?? 0,
      paidAmount: o?.paid_amount ?? 0,
      diffAmount: o?.diff_amount ?? 0,
      currency: o?.currency ?? "",
      closeTime: o?.close_time ?? 0,
    },
    closedReason: aJ(e.closed_reason) || undefined,
  };
}
function aQ(e) {
  if (
    (typeof e === "string" && e.trim()) ||
    (typeof e === "number" && Number.isFinite(e))
  ) {
    return e;
  }
}
function aW(e, t) {
  let { progress } = e;
  return {
    orderId: e.orderId,
    orderStatus: e.orderStatus,
    payStatus: progress.payStatus,
    transferMode: progress.payStatus === 2 ? "supplement" : "payment",
    productId: e.productId ?? t,
    productName: e.productName,
    receivingAccount: progress.payeeAccountNo,
    displayAmount:
      progress.payStatus === 2 ? progress.diffAmount : progress.payableAmount,
    orderAmount: progress.payableAmount,
  };
}
function aU(e, currency) {
  try {
    return new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(e / 100);
  } catch {
    return `${currency} ${(e / 100).toFixed(2)}`;
  }
}
function aq(e, t) {
  let r = ((e) => {
    switch (e) {
      case "send":
        return "sendCodeErrorText";
      case "code_incorrect":
        return "codeIncorrectText";
      case "code_expired":
      case "scope_mismatch":
        return "codeExpiredText";
      case "bind":
      case "invalid_input":
      case "forbidden":
      case "rate_limited":
      case "conflict":
      case "dependency_unavailable":
      case "unknown":
        return "bindErrorText";
      default:
        return;
    }
  })(e);
  if (r) {
    return t[r];
  }
}
async function aG(e) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    return void (await navigator.clipboard.writeText(e));
  }
  if (typeof document === "undefined") {
    throw Error("Clipboard is unavailable");
  }
  let t = document.createElement("textarea");
  t.value = e;
  t.readOnly = true;
  t.style.position = "fixed";
  t.style.opacity = "0";
  document.body.appendChild(t);
  t.select();
  try {
    if (!document.execCommand("copy")) {
      throw Error("Clipboard copy failed");
    }
  } finally {
    t.remove();
  }
}
function useAV({
  visible,
  orderId,
  product,
  texts,
  productName,
  formatAmount = aU,
  formatCloseTime,
  detailsFooterSlot,
  phoneBinding,
  initTradeParams,
  tracking,
  onOrderReady,
  onSuccess,
  onEvent,
  onError,
  onClose,
  className,
  classes,
}) {
  let y;
  let w;
  let I;
  let b;
  y = A.h(x.lZ);
  w = A.h(aF);
  I = o.useRef(product);
  b = o.useRef(initTradeParams);
  I.current = product;
  b.current = initTradeParams;
  let service = o.useMemo(
    () => ({
      initTrade: async () =>
        aO(
          await y.initTrade(
            ((app_id, t, r) => {
              if (!Number.isInteger(app_id) || app_id <= 0) {
                throw Error("Corporate payment requires a positive app id");
              }
              if (!t?.productId.trim() || !t.pmsTrade.trim()) {
                throw Error("Corporate payment product is required");
              }
              let { consumablesInfo } = t;
              if (
                consumablesInfo &&
                (!consumablesInfo.consumablesType.trim() ||
                  !consumablesInfo.consumablesId.trim())
              ) {
                throw Error("Corporate payment consumables info is invalid");
              }
              if (r) {
                return {
                  ...r,
                  base_info: {
                    ...r.base_info,
                    trade_ver: "v2",
                  },
                  trade_info: {
                    ...r.trade_info,
                    pay_channel: "corporate_payment",
                  },
                };
              }
              return {
                base_info: {
                  app_id,
                  trade_ver: "v2",
                },
                trade_info: {
                  trade_type: "consumables",
                  pay_channel: "corporate_payment",
                },
                product_infos: [
                  {
                    product_id: t.productId,
                    pms_trade: t.pmsTrade,
                    ...(consumablesInfo
                      ? {
                          consumables_info: {
                            consumables_type: consumablesInfo.consumablesType,
                            consumables_id: consumablesInfo.consumablesId,
                          },
                        }
                      : {}),
                  },
                ],
              };
            })(w.getAppId(), I.current, b.current),
          ),
        ),
      queryTrade: async (e) =>
        aO(
          await y.queryTrade(
            ((e, order_id) => {
              let user_id = e.trim();
              if (!user_id) {
                throw Error("Corporate payment requires a logged-in user");
              }
              return {
                user_id,
                trade_ver: "v2",
                order_id,
              };
            })(w.getUserId(), e),
          ),
          e,
        ),
    }),
    [y, w],
  );
  let kRef = o.useRef(orderId);
  let PRef = o.useRef(product);
  let MRef = o.useRef(tracking);
  let DRef = o.useRef(onEvent);
  let RRef = o.useRef();
  let ERef = o.useRef(false);
  let BRef = o.useRef();
  let NRef = o.useRef();
  let LRef = o.useRef(false);
  let FRef = o.useRef(phoneBinding?.texts);
  kRef.current = orderId;
  PRef.current = product;
  MRef.current = tracking;
  DRef.current = onEvent;
  FRef.current = phoneBinding?.texts;
  let J = o.useCallback((e) => {
    DRef.current?.({
      ...MRef.current,
      productId: PRef.current?.productId,
      orderId: kRef.current,
      ...e,
    });
  }, []);
  o.useEffect(() => {
    if (!visible) {
      ERef.current = false;
      BRef.current = undefined;
      RRef.current = undefined;
      NRef.current = undefined;
      LRef.current = false;
      return;
    }
    if (!ERef.current) {
      ERef.current = true;
      J({
        type: "modal_show",
      });
    }
  }, [J, visible]);
  let onError_1 = (e, phase) => {
    J({
      type: "request_error",
      phase,
      errorCode: (function e(t, r = new Set()) {
        if (typeof t !== "object" || t === null || r.has(t)) {
          return;
        }
        r.add(t);
        let a =
          aQ(t.code) ??
          aQ(t.errorCode) ??
          aQ(t.error_code) ??
          aQ(t.ret) ??
          ((e) => {
            if (typeof e === "string") {
              return /\bret=([^,\s]+)/.exec(e)?.[1];
            }
          })(t.message);
        if (a !== undefined) {
          return a;
        }
        for (let a of [t.cause, t.response, t.data]) {
          let t = e(a, r);
          if (t !== undefined) {
            return t;
          }
        }
      })(e),
      ...(RRef.current ? aW(RRef.current, PRef.current?.productId) : {}),
    });
    onError?.(e, phase);
  };
  let Q = (({
    visible,
    orderId,
    requestKey,
    service,
    onOrderReady,
    onSuccess,
    onError,
    onConfirmError,
  }) => {
    let [m, setM] = o.useState(ax);
    let [d, setD] = o.useState(() => Date.now());
    let pRef = o.useRef(0);
    let CRef = o.useRef(false);
    let vRef = o.useRef(false);
    let _Ref = o.useRef(visible);
    let fRef = o.useRef(orderId);
    let hRef = o.useRef(service);
    let SRef = o.useRef(onOrderReady);
    let gRef = o.useRef(onSuccess);
    let yRef = o.useRef(onError);
    let wRef = o.useRef(onConfirmError);
    _Ref.current = visible;
    fRef.current = orderId;
    hRef.current = service;
    SRef.current = onOrderReady;
    gRef.current = onSuccess;
    yRef.current = onError;
    wRef.current = onConfirmError;
    let I = o.useCallback((e) => _Ref.current && pRef.current === e, []);
    let b = o.useCallback((e, t) => {
      yRef.current?.(e, t);
    }, []);
    let j = o.useCallback((e) => {
      vRef.current = false;
      pRef.current += 1;
      setM((t) => {
        if (aB(t)) {
          return {
            ...t,
            querying: false,
            trade: e,
          };
        }
        return t;
      });
      gRef.current?.(e);
    }, []);
    let k = o.useCallback(
      (e) => {
        if (e.kind === "success") {
          j(e.trade);
        } else {
          vRef.current = false;
          setM(e.state);
          if (e.notifyOrderReady) {
            SRef.current?.(e.state.trade);
          }
        }
      },
      [j],
    );
    let retry = o.useCallback(async () => {
      let e;
      if (CRef.current) {
        return;
      }
      CRef.current = true;
      let t = ++pRef.current;
      let fRef_current = fRef.current;
      let errorPhase = fRef_current ? "query" : "init";
      setM(ax);
      setD(Date.now());
      try {
        let a = fRef_current
          ? await hRef.current.queryTrade(fRef_current)
          : await hRef.current.initTrade();
        if (!I(t)) {
          return;
        }
        let o = Date.now();
        setD(o);
        e = aE(a, "initial", o / 1000);
      } catch (error) {
        if (!I(t)) {
          return;
        }
        CRef.current = false;
        setM({
          view: "error",
          transferMode: "payment",
          querying: false,
          errorPhase,
        });
        b(error, errorPhase);
        return;
      }
      CRef.current = false;
      k(e);
    }, [k, I, b]);
    o.useEffect(() => {
      if (!visible) {
        pRef.current += 1;
        CRef.current = false;
        vRef.current = false;
        setM(ax);
        return;
      }
      retry();
      return () => {
        pRef.current += 1;
        CRef.current = false;
        vRef.current = false;
      };
    }, [retry, orderId, requestKey, visible]);
    let remainingSeconds = o.useMemo(() => {
      let e = m.trade?.progress?.closeTime;
      if (e) {
        return Math.max(0, Math.ceil(e - d / 1000));
      }
      return 0;
    }, [d, m.trade?.progress?.closeTime]);
    o.useEffect(() => {
      if (!visible || m.view !== "transfer" || !m.trade?.progress) {
        return;
      }
      setD(Date.now());
      let closeTime = m.trade.progress.closeTime;
      let r = window.setInterval(() => {
        let e = Date.now();
        setD(e);
        if (e / 1000 >= closeTime) {
          window.clearInterval(r);
        }
      }, 1000);
      return () => window.clearInterval(r);
    }, [m.trade?.progress?.closeTime, m.view, visible]);
    let isExpired = !!(
      m.view === "transfer" &&
      m.trade?.progress?.closeTime &&
      remainingSeconds === 0
    );
    let confirmTransfer = o.useCallback(async () => {
      if (!aB(m) || isExpired || vRef.current) {
        return;
      }
      vRef.current = true;
      let e = ++pRef.current;
      setM((e) => {
        if (aB(e)) {
          return {
            ...e,
            querying: true,
          };
        }
        return e;
      });
      try {
        let t = await hRef.current.queryTrade(m.trade.orderId);
        if (!I(e)) {
          return;
        }
        let r = Date.now();
        setD(r);
        k(aE(t, "confirm", r / 1000));
      } catch (error) {
        if (!I(e)) {
          return;
        }
        vRef.current = false;
        setM((e) => {
          if (aB(e)) {
            return {
              ...e,
              querying: false,
            };
          }
          return e;
        });
        b(error, "confirm");
        wRef.current?.(error);
      }
    }, [k, I, isExpired, b, m]);
    let showTransferDetails = o.useCallback(() => {
      setD(Date.now());
      setM((e) => {
        if (e.view !== "waiting") {
          return e;
        }
        return {
          ...e,
          view: "transfer",
          transferMode: aR(e.trade),
          querying: false,
        };
      });
    }, []);
    let cancel = o.useCallback(() => {
      pRef.current += 1;
      CRef.current = false;
      vRef.current = false;
    }, []);
    return {
      ...m,
      remainingSeconds,
      isExpired,
      retry,
      confirmTransfer,
      showTransferDetails,
      cancel,
    };
  })({
    visible,
    orderId,
    requestKey: `${orderId ?? ""}:${product?.productId ?? ""}:${product?.pmsTrade ?? ""}`,
    service,
    onOrderReady: (e) => {
      RRef.current = e;
      J({
        type: "order_ready",
        ...aW(e, PRef.current?.productId),
      });
      onOrderReady?.(e);
    },
    onSuccess: (e) => {
      RRef.current = e;
      J({
        type: "success",
        ...aW(e, PRef.current?.productId),
      });
      C.A.success({
        content: texts.successMessage,
      });
      try {
        onSuccess?.(e);
      } finally {
        onClose();
      }
    },
    onError: onError_1,
    onConfirmError: () => {
      C.A.error({
        content: texts.queryErrorMessage,
      });
    },
  });
  let W = (({ visible, service, onCodeSent, onError }) => {
    let i;
    let [n, setN] = o.useState(aN);
    let [l, setL] = o.useState(() => Date.now());
    let sRef = o.useRef(0);
    let dRef = o.useRef(n);
    let uRef = o.useRef(false);
    let pRef = o.useRef(false);
    let CRef = o.useRef();
    let vRef = o.useRef();
    let _Ref = o.useRef(visible);
    let fRef = o.useRef(service);
    let hRef = o.useRef(onCodeSent);
    let SRef = o.useRef(onError);
    _Ref.current = visible;
    fRef.current = service;
    hRef.current = onCodeSent;
    SRef.current = onError;
    dRef.current = n;
    let g = o.useCallback((e) => _Ref.current && sRef.current === e, []);
    let y = o.useCallback(() => {
      sRef.current += 1;
      uRef.current = false;
      pRef.current = false;
      CRef.current = undefined;
      vRef.current = undefined;
      setL(Date.now());
      setN(aN);
    }, []);
    let w = o.useCallback(
      async (successNoticeVisible = false) => {
        let fRef_current = fRef.current;
        if (!_Ref.current || !fRef_current) {
          return;
        }
        let r = ++sRef.current;
        let dRef_current = dRef.current;
        let o = successNoticeVisible
          ? (vRef.current ?? {
              attemptedPhone: dRef_current.phone,
            })
          : undefined;
        vRef.current = o;
        uRef.current = false;
        pRef.current = false;
        if (successNoticeVisible) {
          setN((e) => ({
            ...e,
            binding: true,
            error: undefined,
            reconcilingBind: true,
          }));
        } else {
          CRef.current = undefined;
          setN({
            ...aN,
            view: "querying",
          });
        }
        try {
          let a = await fRef_current.queryBinding();
          if (!g(r)) {
            return;
          }
          if (a.bound) {
            let t =
              !successNoticeVisible ||
              ((e) => {
                if (!e.bound || !aj(e.attemptedPhone)) {
                  return false;
                }
                let t = `${e.attemptedPhone.slice(0, 3)}****${e.attemptedPhone.slice(-4)}`;
                return e.maskedPhone?.trim() === t;
              })({
                bound: a.bound,
                maskedPhone: a.maskedPhone,
                attemptedPhone: o?.attemptedPhone ?? "",
              });
            vRef.current = undefined;
            if (!t) {
              return void setN((e) => ({
                ...e,
                canUpdate: a.canUpdate !== false,
                ...aI("bind"),
              }));
            }
            setN({
              ...aN,
              ...aL(a),
              successNoticeVisible,
            });
            return;
          }
          vRef.current = undefined;
          if (successNoticeVisible) {
            setN((e) => ({
              ...e,
              canUpdate: a.canUpdate !== false,
              ...aI("bind"),
            }));
          } else {
            setN({
              ...aN,
              view: "unbound",
              canUpdate: a.canUpdate !== false,
            });
          }
        } catch (error) {
          if (!g(r)) {
            return;
          }
          vRef.current = undefined;
          if (successNoticeVisible) {
            setN((e) => ({
              ...e,
              ...aI("bind"),
            }));
          } else {
            setN({
              ...aN,
              view: "query_error",
            });
          }
          SRef.current?.(error, "phone_binding_query");
        }
      },
      [g],
    );
    o.useEffect(() => {
      if (visible && service) {
        w();
        return () => {
          sRef.current += 1;
          uRef.current = false;
          pRef.current = false;
          vRef.current = undefined;
        };
      }
      y();
    }, [w, y, service, visible]);
    let resendRemainingSeconds = o.useMemo(
      () => aP(n.resendDeadline, l),
      [l, n.resendDeadline],
    );
    o.useEffect(() => {
      if (!visible || resendRemainingSeconds <= 0) {
        return;
      }
      let t = window.setInterval(() => setL(Date.now()), 1000);
      return () => window.clearInterval(t);
    }, [resendRemainingSeconds, visible]);
    let changePhone = o.useCallback((e) => {
      let phone = e.replace(/\D/g, "").slice(0, 11);
      sRef.current += 1;
      uRef.current = false;
      pRef.current = false;
      CRef.current = undefined;
      vRef.current = undefined;
      setN((e) => ({
        ...e,
        phone,
        code: "",
        verificationId: undefined,
        resendDeadline: undefined,
        phoneTouched: true,
        codeRequested: false,
        codeValidationRequested: false,
        sending: false,
        binding: false,
        error: undefined,
        successNoticeVisible: false,
      }));
    }, []);
    let changeCode = o.useCallback((e) => {
      let code = e.replace(/\D/g, "").slice(0, 6);
      setN((e) => ({
        ...e,
        code,
        codeValidationRequested: false,
        error:
          e.error === "code_incorrect" ||
          e.error === "code_expired" ||
          e.error === "scope_mismatch" ||
          e.error === "bind"
            ? undefined
            : e.error,
      }));
    }, []);
    let sendCode = o.useCallback(async () => {
      let fRef_current = fRef.current;
      if (!fRef_current) {
        return;
      }
      let dRef_current = dRef.current;
      let t_phone = dRef_current.phone;
      let sending =
        aj(t_phone) &&
        !uRef.current &&
        !pRef.current &&
        aP(dRef_current.resendDeadline, Date.now()) === 0;
      setN((e) => ({
        ...e,
        phoneTouched: true,
        sending,
        error: sending ? undefined : e.error,
      }));
      if (!sending) {
        return;
      }
      uRef.current = true;
      let o = ++sRef.current;
      try {
        let t = await fRef_current.sendCode({
          phone: t_phone,
        });
        if (!g(o)) {
          return;
        }
        if (
          !t.verificationId?.trim() ||
          t.codeLength !== 6 ||
          !Number.isFinite(t.resendAfterSeconds)
        ) {
          throw Error("Invalid send code response");
        }
        let resendDeadline =
          Date.now() + 1000 * Math.max(0, t.resendAfterSeconds);
        CRef.current = undefined;
        uRef.current = false;
        setL(Date.now());
        setN((e) => ({
          ...e,
          code: "",
          verificationId: t.verificationId,
          resendDeadline,
          codeRequested: true,
          codeValidationRequested: false,
          sending: false,
          binding: false,
          error: undefined,
        }));
        hRef.current?.();
      } catch (error) {
        if (!g(o)) {
          return;
        }
        uRef.current = false;
        setN((e) => ({
          ...e,
          sending: false,
          error: "send",
        }));
        SRef.current?.(error, "phone_binding_send_code");
      }
    }, [g]);
    let P = o.useCallback(
      async (e, smsCode, verificationId) => {
        let fRef_current = fRef.current;
        if (!fRef_current || pRef.current) {
          return;
        }
        let o = `${verificationId}:${e}:${smsCode}`;
        if (CRef.current === o) {
          return;
        }
        CRef.current = o;
        pRef.current = true;
        let i = ++sRef.current;
        setN((e) => ({
          ...e,
          binding: true,
          error: undefined,
        }));
        try {
          let o = await fRef_current.bindPhone({
            phone: e,
            smsCode,
            verificationId,
          });
          if (!g(i)) {
            return;
          }
          let n = aL(o);
          pRef.current = false;
          setN({
            ...aN,
            ...n,
            successNoticeVisible: true,
          });
        } catch (error) {
          if (!g(i)) {
            return;
          }
          pRef.current = false;
          let t = ((e) => {
            if (!e || typeof e !== "object") {
              return "unknown";
            }
            let e_reason = e.reason;
            switch (e_reason) {
              case "invalid_input":
              case "forbidden":
              case "rate_limited":
              case "code_incorrect":
              case "code_expired":
              case "scope_mismatch":
              case "conflict":
              case "dependency_unavailable":
                return e_reason;
              default:
                return "unknown";
            }
          })(error);
          if (
            t === "conflict" ||
            t === "dependency_unavailable" ||
            t === "unknown"
          ) {
            vRef.current = {
              attemptedPhone: e,
            };
            SRef.current?.(error, "phone_binding_bind");
            w(true);
            return;
          }
          setN((e) => ({
            ...e,
            ...aI(t),
          }));
          SRef.current?.(error, "phone_binding_bind");
        }
      },
      [g, w],
    );
    o.useEffect(() => {
      if (n.verificationId && !n.binding && aj(n.phone) && ak(n.code)) {
        P(n.phone, n.code, n.verificationId);
      }
    }, [P, n.binding, n.code, n.phone, n.verificationId]);
    let startEditing = o.useCallback(() => {
      sRef.current += 1;
      uRef.current = false;
      pRef.current = false;
      CRef.current = undefined;
      vRef.current = undefined;
      setN((e) => ({
        ...aN,
        view: "editing",
        maskedPhone: e.maskedPhone,
        canUpdate: e.canUpdate,
      }));
    }, []);
    let validateCode = o.useCallback(() => {
      setN((e) => ({
        ...e,
        codeValidationRequested: true,
      }));
    }, []);
    let acknowledgeSuccess = o.useCallback(() => {
      setN((e) => ({
        ...e,
        successNoticeVisible: false,
      }));
    }, []);
    let n_error = n.error;
    let phoneInvalid = n.phoneTouched && !aj(n.phone);
    let codeInvalid =
      n.codeRequested &&
      ((i = n.code), n.codeValidationRequested && i.length > 0 && !ak(i));
    return {
      ...n,
      errorReason: n_error,
      phoneInvalid,
      codeInvalid,
      resendRemainingSeconds,
      retryQuery: () => w(dRef.current.reconcilingBind),
      changePhone,
      changeCode,
      validateCode,
      sendCode,
      startEditing,
      acknowledgeSuccess,
      cancel: y,
    };
  })({
    visible,
    service: phoneBinding?.service,
    onCodeSent: () => {
      if (phoneBinding) {
        C.A.success({
          content: phoneBinding.texts.codeSentMessage,
        });
      }
    },
    onError: onError_1,
  });
  let W_errorReason = W.errorReason;
  let q = ((e) => {
    if (e) {
      if (e === "send") {
        return "inline";
      }
      return "toast";
    }
  })(W_errorReason);
  o.useEffect(() => {
    if (!visible || q !== "toast") {
      return;
    }
    let FRef_current = FRef.current;
    if (!FRef_current) {
      return;
    }
    let r = aq(W_errorReason, FRef_current);
    if (r !== undefined) {
      C.A.warning({
        content: r,
      });
    }
  }, [q, W_errorReason, visible]);
  o.useEffect(() => {
    if (!visible) {
      NRef.current = undefined;
      return;
    }
    if (
      Q.view === "transfer" &&
      Q.trade &&
      (LRef.current || NRef.current !== Q.trade)
    ) {
      J({
        type: "transfer_show",
        showReason: LRef.current ? "pending_return" : "initial",
        ...aW(Q.trade, PRef.current?.productId),
      });
      NRef.current = Q.trade;
      LRef.current = false;
    }
  }, [J, Q.trade, Q.view, visible]);
  o.useEffect(() => {
    let Q_trade = Q.trade;
    if (visible && Q.isExpired && Q_trade && BRef.current !== Q_trade.orderId) {
      BRef.current = Q_trade.orderId;
      J({
        type: "expired",
        ...aW(Q_trade, PRef.current?.productId),
      });
    }
  }, [J, Q.isExpired, Q.trade, visible]);
  let G = () => {
    J({
      type: "close_click",
      ...(Q.trade ? aW(Q.trade, PRef.current?.productId) : {}),
    });
    Q.cancel();
    W.cancel();
    onClose();
  };
  let onCopy = async (copyField, t) => {
    J({
      type: "copy_click",
      copyField,
      ...(Q.trade ? aW(Q.trade, PRef.current?.productId) : {}),
    });
    try {
      await aG(t);
      C.A.success({
        content: texts.copySuccessMessage,
      });
    } catch {
      C.A.error({
        content: texts.copyErrorMessage,
      });
    }
  };
  let errorMessage = (() => {
    if (!phoneBinding || q === "toast") {
      return;
    }
    let e = aq(W_errorReason, phoneBinding.texts);
    if (e !== undefined) {
      return e;
    }
    if (W.phoneInvalid) {
      return phoneBinding.texts.phoneFormatErrorText;
    }
    if (W.codeInvalid) {
      return phoneBinding.texts.codeLengthErrorText;
    }
  })();
  let z = phoneBinding
    ? i.jsx(ay, {
        view: W.view,
        phone: W.phone,
        code: W.code,
        maskedPhone: W.maskedPhone,
        canUpdate: W.canUpdate,
        sending: W.sending,
        binding: W.binding,
        resendRemainingSeconds: W.resendRemainingSeconds,
        phoneInvalid: W.phoneInvalid,
        codeInvalid: W.codeInvalid,
        errorMessage,
        texts: phoneBinding.texts,
        onPhoneChange: W.changePhone,
        onCodeChange: W.changeCode,
        onCodeBlur: W.validateCode,
        onSendCode: () => void W.sendCode(),
        onRetryQuery: () => void W.retryQuery(),
        onStartEditing: W.startEditing,
        classes,
      })
    : null;
  let detailsFooterSlot_1 =
    z || detailsFooterSlot
      ? i.jsxs(i.Fragment, {
          children: [z, detailsFooterSlot],
        })
      : undefined;
  let accountOverlaySlot =
    phoneBinding && W.successNoticeVisible
      ? i.jsx(useAw, {
          title: phoneBinding.texts.successTitle,
          description: phoneBinding.texts.successDescription,
          acknowledgeText: phoneBinding.texts.successAcknowledgeText,
          onAcknowledge: W.acknowledgeSuccess,
          classes,
        })
      : undefined;
  return i.jsx(useAh, {
    visible,
    view: Q.view,
    transferMode: Q.transferMode,
    progress: Q.trade?.progress,
    remainingSeconds: Q.remainingSeconds,
    expired: Q.isExpired,
    querying: Q.querying,
    closedReason: Q.trade?.closedReason,
    productName:
      Q.trade?.productName ?? productName ?? tracking?.productDisplayName,
    texts,
    formatAmount,
    formatCloseTime,
    detailsFooterSlot: detailsFooterSlot_1,
    accountOverlaySlot,
    onConfirm: () => {
      if (!Q.isExpired) {
        J({
          type: "confirm_click",
          ...(Q.trade ? aW(Q.trade, PRef.current?.productId) : {}),
        });
        Q.confirmTransfer();
      }
    },
    onRetry: () => {
      J({
        type: "retry_click",
        phase: orderId ? "query" : "init",
      });
      Q.retry();
    },
    onViewAccount: () => {
      LRef.current = true;
      Q.showTransferDetails();
    },
    onAcknowledge: G,
    onCopy,
    onClose: G,
    className,
    classes,
  });
}
const aH =
  require.j == "wl4"
    ? {
        CommerceSharedBridge: "index_module_CommerceSharedBridge2",
      }
    : null;
const az = {
  CommerceCorporatePayment_orderManagementText:
    "index_module_CommerceCorporatePayment_orderManagementText2",
  CommerceCorporatePaymentPhoneBinding_panel:
    "index_module_CommerceCorporatePaymentPhoneBinding_panel5",
  CommerceCorporatePaymentPhoneBinding_title:
    "index_module_CommerceCorporatePaymentPhoneBinding_title2",
  CommerceCorporatePaymentPhoneBinding_state:
    "index_module_CommerceCorporatePaymentPhoneBinding_state4",
  CommerceCorporatePaymentPhoneBinding_bound:
    "index_module_CommerceCorporatePaymentPhoneBinding_bound4",
  CommerceCorporatePaymentPhoneBinding_queryText:
    "index_module_CommerceCorporatePaymentPhoneBinding_queryText2",
  CommerceCorporatePaymentPhoneBinding_boundDescription:
    "index_module_CommerceCorporatePaymentPhoneBinding_boundDescription2",
  CommerceCorporatePaymentPhoneBinding_retryButton:
    "index_module_CommerceCorporatePaymentPhoneBinding_retryButton4",
  CommerceCorporatePaymentPhoneBinding_changeButton:
    "index_module_CommerceCorporatePaymentPhoneBinding_changeButton4",
  CommerceCorporatePaymentPhoneBinding_fields:
    "index_module_CommerceCorporatePaymentPhoneBinding_fields3",
  CommerceCorporatePaymentPhoneBinding_phoneInput:
    "index_module_CommerceCorporatePaymentPhoneBinding_phoneInput3",
  CommerceCorporatePaymentPhoneBinding_codeControl:
    "index_module_CommerceCorporatePaymentPhoneBinding_codeControl3",
  CommerceCorporatePaymentPhoneBinding_codeInput:
    "index_module_CommerceCorporatePaymentPhoneBinding_codeInput4",
  CommerceCorporatePaymentPhoneBinding_sendButton:
    "index_module_CommerceCorporatePaymentPhoneBinding_sendButton4",
  CommerceCorporatePaymentPhoneBinding_status:
    "index_module_CommerceCorporatePaymentPhoneBinding_status2",
  CommerceCorporatePaymentPhoneBinding_error:
    "index_module_CommerceCorporatePaymentPhoneBinding_error2",
  CommerceCorporatePaymentPhoneBinding_successNotice:
    "index_module_CommerceCorporatePaymentPhoneBinding_successNotice3",
  CommerceCorporatePaymentPhoneBinding_successTitle:
    "index_module_CommerceCorporatePaymentPhoneBinding_successTitle2",
  CommerceCorporatePaymentPhoneBinding_successDescription:
    "index_module_CommerceCorporatePaymentPhoneBinding_successDescription2",
  CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton:
    "index_module_CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton4",
};
function a$(e = "订单管理") {
  return o.createElement(
    o.Fragment,
    null,
    "款项到账后，我们会自动更新订单并开通服务。跨行转账通常需要约 2 小时，节假日或大额转账可能更久。您无需停留在此页面。到账后，我们会通过短信通知你。您也可以前往 ",
    o.createElement(
      "span",
      {
        className: az.CommerceCorporatePayment_orderManagementText,
      },
      `\u300C${e}\u300D`,
    ),
    " 查看最新进度。请勿重复转账。",
  );
}
function aK(e = "订单管理") {
  return o.createElement(
    o.Fragment,
    null,
    "您无需停留在此页面。到账后，我们会通过短信通知你。您也可以前往 ",
    o.createElement(
      "span",
      {
        className: az.CommerceCorporatePayment_orderManagementText,
      },
      `\u300C${e}\u300D`,
    ),
    " 查看最新进度。请勿重复转账。",
  );
}
const aY = {
  title: "订单到账后短信通知我",
  queryingText: "正在查询通知手机号…",
  queryErrorText: "获取通知手机号功能异常，请重试",
  retryText: "重试",
  phonePlaceholder: "请输入手机号",
  phoneAriaLabel: "通知手机号",
  codePlaceholder: "请输入验证码",
  codeAriaLabel: "短信验证码",
  sendCodeText: "发送验证码",
  sendingCodeText: "正在发送…",
  resendCodeText: (e) => `${e}s\u540E\u91CD\u53D1`,
  boundDescription: (e) => `\u53D1\u9001\u901A\u77E5\u5230 ${e}`,
  changePhoneText: "更换通知手机号",
  phoneFormatErrorText: "请输入正确的11位手机号",
  codeLengthErrorText: "请输入6位验证码",
  sendCodeErrorText: "验证码发送失败，请稍后重试",
  bindErrorText: "手机号绑定失败，请稍后重试",
  codeIncorrectText: "验证码错误，请重新输入",
  codeExpiredText: "验证码已失效，请重新获取",
  bindingText: "正在验证…",
  codeSentMessage: "验证码已发送",
  successTitle: "我们会短信通知你到账情况",
  successDescription: aK(),
  successAcknowledgeText: "我已知晓",
};
const aZ = {
  loadingTitle: "获取收款信息",
  loadingDescription: "正在获取对公转账订单，请稍候…",
  paymentTitle: "对公汇款",
  supplementTitle: "对公补款",
  expiredTitle: "订单取消",
  countdownPrefix: "剩余时间",
  countdownSuffix: "超时订单将自动取消",
  dayUnit: "天",
  accountTitle: "单次汇款账户",
  accountSubtitle: "该收款账户仅对本订单有效。",
  payeeNameLabel: "收款户名",
  payeeBankLabel: "开户银行",
  payeeAccountNoLabel: "专属收款账号",
  payableAmountLabel: "应付金额",
  paidAmountLabel: "已到账金额",
  diffAmountLabel: "待补金额",
  orderExpirationLabel: "订单有效期至",
  instructions: [
    [
      "1. ",
      o.createElement(
        "u",
        {
          key: "emphasis",
        },
        "仅接受对公转账",
      ),
      "，转账金额必须与应付金额完全一致，建议一次性付清",
    ],
    "2. 跨行转账2小时内到账，节假日或大额可能延迟，请耐心等待服务开通",
    "3. 对公转账订单不支持客服或自助退款，请仔细核对转账信息",
    "4. 对公转账涉及的手续费视银行而定，需自行承担",
    [
      "5. 如需开具专票，请使用开票单位的对公账户转账，",
      o.createElement(
        "u",
        {
          key: "emphasis",
        },
        "专票抬头不支持修改",
      ),
    ],
  ],
  confirmText: "我已完成转账",
  queryingText: "正在查询到账状态…",
  waitingTitle: "等待到账",
  waitingDescription: a$(),
  waitingAccountPrompt: "还没完成汇款？",
  viewAccountText: "再次查看收款信息",
  acknowledgeText: "我知道了",
  closedTitle: "订单已取消",
  closedDescription: "该订单已超时取消，如需继续购买，请重新发起下单。",
  errorTitle: "获取失败",
  errorDescription: "暂时无法获取收款信息，请稍后重试。",
  retryText: "重新加载",
  successMessage: "支付成功",
  queryErrorMessage: "查单失败，请重试",
  copySuccessMessage: "已复制",
  copyErrorMessage: "复制失败，请重试",
  closeAriaLabel: "关闭",
  copyAriaLabel: "复制",
};
function useAX({
  orderManagementText,
  texts,
  phoneBinding,
  className,
  classes,
  ...rest
}) {
  let texts_1 = o.useMemo(() => {
    let r = Object.fromEntries(
      Object.entries(texts ?? {}).filter(([, e]) => e !== undefined),
    );
    return {
      ...aZ,
      ...(orderManagementText
        ? {
            waitingDescription: a$(orderManagementText),
          }
        : {}),
      ...r,
    };
  }, [orderManagementText, texts]);
  let phoneBinding_1 = o.useMemo(() => {
    if (!phoneBinding) {
      return;
    }
    let t = Object.fromEntries(
      Object.entries(phoneBinding.texts ?? {}).filter(
        ([, e]) => e !== undefined,
      ),
    );
    return {
      service: phoneBinding.service,
      texts: {
        ...aY,
        ...(orderManagementText
          ? {
              successDescription: aK(orderManagementText),
            }
          : {}),
        ...t,
      },
    };
  }, [orderManagementText, phoneBinding]);
  let d = {
    ...rest,
    texts: texts_1,
    phoneBinding: phoneBinding_1,
    className: a.A(aH.CommerceSharedBridge, className),
    classes: q(az, classes),
  };
  return i.jsx(useAV, {
    ...d,
  });
}
const a0 =
  require.j == "wl4"
    ? {
        CommerceCorporatePaymentModal_content:
          "index_module_CommerceCorporatePaymentModal_content3",
        CommerceCorporatePaymentPhoneBinding_panel:
          "index_module_CommerceCorporatePaymentPhoneBinding_panel3",
        CommerceCorporatePaymentPhoneBinding_phoneInput:
          "index_module_CommerceCorporatePaymentPhoneBinding_phoneInput5",
        CommerceCorporatePaymentPhoneBinding_codeInput:
          "index_module_CommerceCorporatePaymentPhoneBinding_codeInput5",
        CommerceCorporatePaymentPhoneBinding_retryButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_retryButton5",
        CommerceCorporatePaymentPhoneBinding_changeButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_changeButton5",
        CommerceCorporatePaymentPhoneBinding_sendButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_sendButton5",
        CommerceCorporatePaymentPhoneBinding_successNotice:
          "index_module_CommerceCorporatePaymentPhoneBinding_successNotice5",
        CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton:
          "index_module_CommerceCorporatePaymentPhoneBinding_successAcknowledgeButton5",
      }
    : null;
const a4 = require.j == "wl4" ? a0 : null;
export function zr({ classes, className, ...rest }) {
  return i.jsx(useAX, {
    ...rest,
    className: a.A(G, className),
    classes: q(a4, classes),
  });
}
