import r from "oa";
import o from "bk";
import i from "z8";
import l from "bT";
import { A as A_1 } from "./module-RwR.js";
import a from "qa";
import { A as A_2 } from "./module-Sc_2.js";
import { oz, xy } from "./module-K6G.js";
import { QO } from "./module-mY_2.js";
import { A as A_3 } from "./module-mf_2.js";
import { A as A_4 } from "./module-aZD.js";
import { A as A_5 } from "./module-Ww_2.js";
import { Gv, W5, b0, cy } from "./module-V9.js";
import {
  Bh,
  YW,
  de,
  fn,
  hY,
  jw,
  lU,
  p as p_1,
  q0,
  vX,
  xT,
  yf,
} from "./module-UbJ.js";
import y from "fyk";
import "U4";
import { V as V_1 } from "./module-Tb.js";
import { A } from "./module-R8.js";
import { A as A_6 } from "./module-mtq.js";
import { A as A_7 } from "./module-k6B.js";
import { A as A_8 } from "./module-Ccf.js";
import { A as A_9 } from "./module-rfq.js";
import I from "vpF";
import { t as t_1 } from "./module-rT.js";
import Y from "Po";
import G from "./module-vxz.js";
import U from "Cs";
import X from "yI";
import { A as A_10 } from "./module-TD_2.js";
import { A as A_11 } from "./module-O5P.js";
import { A as A_12 } from "./module-a1x.js";
import { A as A_13 } from "./module-RpG.js";
import { Wf } from "./module-uRn.js";
const v = l.forwardRef(function (e, t) {
  const {
    style,
    className,
    prefixCls,
    allowClear,
    error,
    disabled,
    placeholder,
    format,
    size,
    onClear,
    editable,
    value,
    inputValue,
    onPressEnter,
    suffixIcon,
    onChange,
    popupVisible,
    isPlaceholder,
  } = e;
  const M = a._(e, [
    "style",
    "className",
    "prefixCls",
    "allowClear",
    "error",
    "disabled",
    "placeholder",
    "format",
    "size",
    "onClear",
    "editable",
    "value",
    "inputValue",
    "onPressEnter",
    "suffixIcon",
    "onChange",
    "popupVisible",
    "isPlaceholder",
  ]);
  let { getPrefixCls, size: size_1, locale, rtl } = l.useContext(QO);
  let IRef = l.useRef(null);
  l.useImperativeHandle(t, () => ({
    focus() {
      if (IRef.current && IRef.current.focus) {
        IRef.current.focus();
      }
    },
    blur() {
      if (IRef.current && IRef.current.blur) {
        IRef.current.blur();
      }
    },
  }));
  let z = "";
  if (inputValue !== undefined) {
    z = inputValue;
  } else if (value && !cy(value)) {
    z =
      typeof format === "function"
        ? format(value)
        : value.locale(locale.dayjsLocale).format(format);
  }
  let V = prefixCls || getPrefixCls("picker");
  let W = A_5(
    V,
    `${V}-size-${size || size_1}`,
    {
      [`${V}-focused`]: !!popupVisible,
      [`${V}-disabled`]: disabled,
      [`${V}-error`]: error,
      [`${V}-rtl`]: rtl,
    },
    className,
  );
  return i.jsxs(
    "div",
    o._(
      r._(
        {
          style,
          className: W,
        },
        A_2(M, ["onChange", "onPressEnter"]),
      ),
      {
        children: [
          i.jsx("div", {
            className: A_5(`${V}-input`, {
              [`${V}-input-placeholder`]: isPlaceholder,
            }),
            children: i.jsx(
              "input",
              r._(
                {
                  ref: IRef,
                  disabled,
                  placeholder,
                  className: `${V}-start-time`,
                  value: z,
                  onKeyDown: function (e) {
                    if ((e.keyCode || e.which) === xy.code && onPressEnter) {
                      onPressEnter();
                    }
                  },
                  onChange,
                },
                editable
                  ? {}
                  : {
                      readOnly: true,
                    },
              ),
            ),
          }),
          i.jsxs("div", {
            className: `${V}-suffix`,
            children: [
              allowClear &&
                z &&
                i.jsx(A_4, {
                  prefix: V,
                  onClick: onClear,
                  className: `${V}-clear-icon`,
                  children: i.jsx(A_3, {}),
                }),
              i.jsx("span", {
                className: `${V}-suffix-icon`,
                children: suffixIcon,
              }),
            ],
          }),
        ],
      },
    ),
  );
});
const N = l.forwardRef(function (e, t) {
  const prefixCls = l.useContext(V_1).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const s = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-calendar"),
  };
  if (e_spin) {
    s.className = "".concat(s.className, " ").concat(r, "-icon-loading");
  }
  delete s.spin;
  delete s.isIcon;
  return l.createElement(
    "svg",
    y(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      s,
    ),
    l.createElement("path", {
      d: "M7 22h34M14 5v8m20-8v8M8 41h32a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1Z",
    }),
  );
});
N.defaultProps = {
  isIcon: true,
};
N.displayName = "IconCalendar";
const k = l.forwardRef(function (e, t) {
  const prefixCls = l.useContext(V_1).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const s = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-calendar-clock"),
  };
  if (e_spin) {
    s.className = "".concat(s.className, " ").concat(r, "-icon-loading");
  }
  delete s.spin;
  delete s.isIcon;
  return l.createElement(
    "svg",
    y(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      s,
    ),
    l.createElement("path", {
      d: "M7 22h34V10a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h18M34 5v8M14 5v8",
    }),
    l.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      stroke: "none",
      strokeWidth: "none",
      d: "M36 44a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.5-9.75V29h-3v8.25H42v-3h-4.5Z",
      clipRule: "evenodd",
    }),
  );
});
k.defaultProps = {
  isIcon: true,
};
k.displayName = "IconCalendarClock";
const E = l.forwardRef(function (e, t) {
  let {
    prefixCls,
    shortcuts = [],
    onSelectNow,
    nowText,
    showNowBtn,
    showTime,
    onMouseEnterShortcut,
    onMouseLeaveShortcut,
  } = e;
  let d = cy(shortcuts) && shortcuts.length > 0;
  return i.jsxs("div", {
    ref: t,
    className: `${prefixCls}-shortcuts`,
    children: [
      showNowBtn &&
        showTime &&
        !d &&
        i.jsx(A, {
          size: "mini",
          onClick: onSelectNow,
          children: nowText,
        }),
      d &&
        shortcuts.map((t, n) =>
          i.jsx(
            A,
            {
              size: "mini",
              onMouseEnter: () => {
                if (onMouseEnterShortcut) {
                  onMouseEnterShortcut(t);
                }
              },
              onMouseLeave: () => {
                if (onMouseLeaveShortcut) {
                  onMouseLeaveShortcut(t);
                }
              },
              onClick: (n) =>
                ((t, n) => {
                  let { onSelectShortcut } = e;
                  if (onSelectShortcut) {
                    onSelectShortcut(t, n);
                  }
                })(t, n),
              children: t.text,
            },
            n,
          ),
        ),
    ],
  });
});
function M(e) {
  let {
    showTime,
    prefixCls,
    DATEPICKER_LOCALE,
    disabled,
    onClickConfirmBtn,
    onClickSelectTimeBtn,
    isTimePanel,
    onSelectNow,
    showNowBtn,
    shortcuts,
    onMouseEnterShortcut,
    onMouseLeaveShortcut,
    onSelectShortcut,
    extra,
    mode,
    shortcutsPlacementLeft,
  } = e;
  let b = cy(shortcuts) && shortcuts.length > 0;
  let x = showNowBtn && showTime && !b;
  return i.jsxs("div", {
    className: `${prefixCls}-footer`,
    children: [
      extra &&
        i.jsx("div", {
          className: `${prefixCls}-footer-extra-wrapper`,
          children: extra,
        }),
      !showTime &&
        showNowBtn &&
        mode === "date" &&
        i.jsx("div", {
          className: `${prefixCls}-footer-now-wrapper`,
          children: i.jsx(A_6, {
            onClick: onSelectNow,
            children: DATEPICKER_LOCALE.today,
          }),
        }),
      x || (b && !shortcutsPlacementLeft) || showTime
        ? i.jsxs("div", {
            className: `${prefixCls}-footer-btn-wrapper`,
            children: [
              shortcutsPlacementLeft
                ? i.jsx("div", {})
                : i.jsx(E, {
                    shortcuts,
                    prefixCls,
                    onSelectNow,
                    nowText: DATEPICKER_LOCALE.now,
                    showNowBtn,
                    onMouseEnterShortcut,
                    onMouseLeaveShortcut,
                    onSelectShortcut,
                    showTime,
                  }),
              showTime &&
                i.jsxs(i.Fragment, {
                  children: [
                    i.jsx(A, {
                      type: "text",
                      size: "mini",
                      onClick: onClickSelectTimeBtn,
                      className: isTimePanel
                        ? `${prefixCls}-btn-select-date`
                        : `${prefixCls}-btn-select-time`,
                      children: isTimePanel
                        ? DATEPICKER_LOCALE.selectDate
                        : DATEPICKER_LOCALE.selectTime,
                    }),
                    i.jsx(A, {
                      className: `${prefixCls}-btn-confirm`,
                      type: "primary",
                      size: "mini",
                      disabled,
                      onClick: onClickConfirmBtn,
                      children: DATEPICKER_LOCALE.ok,
                    }),
                  ],
                }),
            ],
          })
        : null,
    ],
  });
}
const SContext = l.createContext({});
function V(e) {
  if (e) {
    if (cy(e)) {
      if (W5(e[0]) && W5(e[1])) {
        return 2;
      }
      if (W5(e[0]) || W5(e[1])) {
        return 1;
      }
      return 0;
    }
    return 0;
  }
  return 0;
}
function W(dayjsLocale) {
  let t;
  let n;
  return (
    ((n = I.Ls) == null || (t = n[dayjsLocale]) == null
      ? undefined
      : t.weekStart) || 0
  );
}
function B(e, dayjsLocale) {
  if (e) {
    return e.locale(dayjsLocale);
  }
  return e;
}
let L = {
  allowClear: true,
  unmountOnExit: true,
  position: "bl",
  editable: true,
  showNowBtn: true,
};
const useF = (e) => {
  let { getPrefixCls, locale, size, componentConfig, rtl } = l.useContext(QO);
  if (rtl) {
    L.position = "br";
  }
  let f = A_7(
    e,
    L,
    componentConfig == null ? undefined : componentConfig.DatePicker,
  );
  let {
    allowClear,
    className,
    style,
    placeholder,
    getPopupContainer,
    disabled,
    position,
    error,
    unmountOnExit,
    editable,
    triggerProps,
    picker,
    shortcuts,
    onSelect,
    onVisibleChange,
    value,
    onChange,
    icons,
    disabledDate,
    showTime,
    showNowBtn,
    onSelectShortcut,
    extra,
    shortcutsPlacementLeft,
    onOk,
    defaultPickerValue,
    pickerValue,
    onPickerValueChange,
    triggerElement,
    utcOffset,
    timezone,
    panelRender,
  } = f;
  let ea = getPrefixCls("picker");
  let locale_DatePicker = locale.DatePicker;
  let eu = b0(f.dayStartOfWeek) ? W(locale.dayjsLocale) : f.dayStartOfWeek;
  let pickerType = picker.props.pickerType;
  let epRef = l.useRef(null);
  let efRef = l.useRef(null);
  let ehRef = l.useRef(null);
  let em = ((e) => {
    let t;
    let { format, picker, showTime } = e;
    switch (picker.props.pickerType) {
      case "date":
        t = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
        break;
      case "month":
        t = "YYYY-MM";
        break;
      case "year":
        t = "YYYY";
        break;
      case "week":
        t = "gggg-wo";
        break;
      case "quarter":
        t = "YYYY-[Q]Q";
        break;
      default:
        t = "YYYY-MM-DD";
    }
    if (format) {
      t = format;
    }
    return t;
  })(f);
  let ev = em;
  if (typeof ev === "function") {
    ev = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
  }
  let [eg, setEg] = l.useState(
    f.value
      ? de(f.value, ev, utcOffset, timezone)
      : de(f.defaultValue, ev, utcOffset, timezone),
  );
  let [eb, setEb] = l.useState(f.popupVisible);
  let [ew, setEw] = l.useState(false);
  let [eO, setEO] = l.useState();
  let eN = "popupVisible" in f ? f.popupVisible : eb;
  let eP = "value" in f ? de(value, ev, utcOffset, timezone) : eg;
  let e$ = eP || de(defaultPickerValue, ev) || hY();
  let [ek, setEk] = l.useState();
  let [eE, setEE] = l.useState();
  let [eM, setEM] = l.useState();
  let [eS, setES] = l.useState(e$);
  let eR = de(pickerValue, ev) || eS;
  let eI = eM || eE || eP;
  let [ez, setEz] = l.useState(pickerType);
  let eW =
    (Gv(showTime) &&
      de(
        showTime.defaultValue,
        showTime.format || "HH:mm:ss",
        utcOffset,
        timezone,
      )) ||
    hY(utcOffset, timezone);
  let timeValue = eI || eW;
  function eH() {
    if (epRef.current && epRef.current.blur) {
      epRef.current.blur();
    }
  }
  let eL = A_8(utcOffset);
  let eF = A_8(timezone);
  function eK(e) {
    if (onPickerValueChange) {
      onPickerValueChange(e.format(ev), e);
    }
  }
  function eY(e, t) {
    setEb(e);
    if (onVisibleChange) {
      onVisibleChange(e);
    }
    if (t) {
      t();
    }
  }
  function eG() {
    let e = B(eI, locale.dayjsLocale);
    eU();
    if (onOk) {
      onOk(e && e.format(ev), e);
    }
  }
  function eU() {
    setEg(eI);
    eQ(eI);
    eY(false);
  }
  function onSelect_1(e, t, r) {
    setEk(undefined);
    setEO(undefined);
    if (showTime) {
      let e = r ? t : p_1(t, timeValue);
      setEE(e);
      setES(e);
      let o = B(jw(e, utcOffset, timezone), locale.dayjsLocale);
      if (onSelect) {
        onSelect(o.format(ev), o);
      }
    } else {
      let e = B(
        jw(t, utcOffset, timezone).locale(locale.dayjsLocale),
        locale.dayjsLocale,
      );
      if (onSelect) {
        onSelect(e ? e.format(ev) : undefined, e);
      }
      setEg(t);
      eQ(t);
      eY(false);
    }
  }
  function eQ(e) {
    if (YW(e, eP)) {
      let t = B(jw(e, utcOffset, timezone), locale.dayjsLocale);
      if (onChange) {
        onChange(t ? t.format(ev) : undefined, t);
      }
    }
  }
  function eq(e, t) {
    let r = eI || hY(utcOffset, timezone);
    let o = p_1(r, t);
    setEE(o);
    let i = B(jw(o, utcOffset, timezone), locale.dayjsLocale);
    if (onSelect) {
      onSelect(i.format(ev), i);
    }
  }
  function eX(e, t, n = 1) {
    let r;
    if (e === "prev") {
      r = vX.subtract(eR, n, t);
    }
    if (e === "next") {
      r = vX.add(eR, n, t);
    }
    eK(r);
    setES(r);
  }
  function eJ(e = pickerType) {
    if (e === "date" || e === "week") {
      return {
        onPrev: () => eX("prev", "month"),
        onNext: () => eX("next", "month"),
        onSuperPrev: () => eX("prev", "year"),
        onSuperNext: () => eX("next", "year"),
      };
    }
    if (e === "month" || e === "quarter") {
      return {
        onSuperPrev: () => eX("prev", "year"),
        onSuperNext: () => eX("next", "year"),
      };
    }
    if (e === "year") {
      return {
        onSuperPrev: () => eX("prev", "year", 10),
        onSuperNext: () => eX("next", "year", 10),
      };
    }
  }
  function onSelectNow() {
    let e = B(hY(utcOffset, timezone), locale.dayjsLocale);
    eK(e);
    onSelect_1(e.format(ev), e, true);
  }
  function e1(e, t) {
    if (!t) {
      let t = showTime ? p_1(e, timeValue) : e;
      setEO(
        typeof em === "function"
          ? em(e)
          : t.locale(locale.dayjsLocale).format(ev),
      );
    }
  }
  function e2() {
    setEO(undefined);
  }
  function e4(e) {
    if (typeof e.value === "function" && W5(e.value())) {
      let t = de(e.value(), ev, utcOffset, timezone);
      setES(t);
      eK(t);
      setEM(t);
    }
  }
  function e5() {
    let e = eE || eP || hY(utcOffset, timezone);
    setEM(undefined);
    setES(e);
    eK(e);
  }
  function e7(e) {
    if (onSelectShortcut) {
      onSelectShortcut(e);
    }
    if (typeof e.value === "function" && W5(e.value())) {
      let t = de(e.value(), ev, utcOffset, timezone);
      setEg(t);
      eQ(t);
      eY(false);
    }
  }
  function e3() {
    setEw(!ew);
  }
  function e8(e) {
    let t = A_5(
      `${ea}-container`,
      {
        [`${ea}-panel-only`]: e,
        [`${ea}-container-shortcuts-placement-left`]:
          cy(shortcuts) && shortcutsPlacementLeft,
        [`${ea}-container-rtl`]: rtl,
      },
      e ? className : "",
    );
    let s = {
      prefixCls: ea,
      showTime,
      shortcuts,
      onSelectNow,
      showNowBtn,
      onMouseEnterShortcut: e4,
      onMouseLeaveShortcut: e5,
      onSelectShortcut: e7,
    };
    let a =
      (showTime && ez === "date") ||
      extra ||
      (cy(shortcuts) && shortcuts.length && !shortcutsPlacementLeft) ||
      (!showTime && ez === "date" && showNowBtn);
    let u = i.jsxs(i.Fragment, {
      children: [
        l.cloneElement(
          picker,
          o._(r._({}, A_2(f, ["style"]), eJ()), {
            getHeaderOperations: eJ,
            onSelect: onSelect_1,
            onTimePickerSelect: eq,
            onSelectNow,
            popupVisible: eN,
            format: ev,
            value: eI,
            pageShowDate: eR,
            localeName: locale.dayjsLocale,
            setPageShowDate: (e) => {
              setES(e);
              eK(e);
            },
            timeValue,
            isTimePanel: ew,
            panelMode: ez,
            setPanelMode: setEz,
            onMouseEnterCell: e1,
            onMouseLeaveCell: e2,
          }),
        ),
        a &&
          i.jsx(
            M,
            o._(r._({}, s), {
              DATEPICKER_LOCALE: locale_DatePicker,
              disabled: !eI,
              onClickConfirmBtn: eG,
              extra,
              mode: ez,
              shortcutsPlacementLeft,
              onClickSelectTimeBtn: e3,
              isTimePanel: ew,
            }),
          ),
      ],
    });
    let d = shortcutsPlacementLeft
      ? i.jsxs(i.Fragment, {
          children: [
            i.jsx(
              E,
              r._(
                {
                  ref: ehRef,
                },
                s,
              ),
            ),
            i.jsx("div", {
              ref: efRef,
              className: `${ea}-panel-wrapper`,
              children: u,
            }),
          ],
        })
      : u;
    let v = typeof panelRender === "function" ? panelRender(d) : d;
    return i.jsx("div", {
      className: t,
      onClick: () => {
        if (epRef.current && epRef.current.focus) {
          epRef.current.focus();
        }
      },
      style: e ? style : {},
      children: v,
    });
  }
  A_9(() => {
    if (eg && (eL !== utcOffset || timezone !== eF)) {
      let e = jw(eg, eL, eF);
      setEg(xT(e, utcOffset, timezone));
    }
  }, [utcOffset, eL, timezone, eF]);
  l.useEffect(() => {
    setEk(undefined);
    setEO(undefined);
    if (eN) {
      setES(e$);
      if (shortcutsPlacementLeft) {
        ehRef.current.style.maxHeight = `${efRef.current.clientHeight}px`;
      }
    } else {
      setEE(undefined);
      setEM(undefined);
      setTimeout(() => {
        setEw(false);
        setEz(pickerType);
        eH();
      }, 100);
    }
  }, [eN]);
  let e6 = f.size || size;
  let e9 =
    icons && icons.inputSuffix === null
      ? null
      : (icons && icons.inputSuffix) ||
        (showTime ? i.jsx(k, {}) : i.jsx(N, {}));
  return i.jsx(SContext.Provider, {
    value: {
      utcOffset,
      timezone,
      weekStart: eu,
    },
    children:
      triggerElement === null
        ? e8(true)
        : i.jsx(
            A_1,
            o._(
              r._(
                {
                  popup: e8,
                  trigger: "click",
                  clickToClose: false,
                  position,
                  disabled,
                  popupAlign: {
                    bottom: 4,
                  },
                  getPopupContainer,
                  onVisibleChange: function (e) {
                    if (e) {
                      eY(e, () => {
                        if (epRef.current && epRef.current.blur) {
                          epRef.current.focus();
                        }
                      });
                    } else {
                      eY(false);
                    }
                  },
                  popupVisible: eN,
                  classNames: "slideDynamicOrigin",
                  unmountOnExit,
                },
                triggerProps,
              ),
              {
                children:
                  triggerElement ||
                  i.jsx(
                    v,
                    o._(
                      r._({}, t_1(f), {
                        style,
                        className,
                        popupVisible: eN,
                        format: em,
                        disabled,
                        error,
                        size: e6,
                        onPressEnter: function () {
                          if (eI) {
                            eU();
                            eH();
                          } else if (eN) {
                            eY(false);
                          }
                        },
                        onClear: function (e) {
                          e.stopPropagation();
                          setEg(undefined);
                          setEE(undefined);
                          eQ(undefined);
                          if (f.onClear) {
                            f.onClear();
                          }
                        },
                        suffixIcon: e9,
                        editable: editable && typeof em !== "function",
                        allowClear,
                      }),
                      {
                        ref: epRef,
                        placeholder:
                          placeholder ||
                          locale_DatePicker.placeholder[pickerType],
                        popupVisible: eN,
                        value: eE || eP,
                        inputValue: eO || ek,
                        prefixCls: ea,
                        onChange: function (e) {
                          let value = e.target.value;
                          setEk(value);
                          if (!eN) {
                            eY(true);
                          }
                          if (
                            typeof value === "string" &&
                            yf(value, ev).format(ev) === value &&
                            (typeof disabledDate !== "function" ||
                              !disabledDate(yf(value, ev)))
                          ) {
                            let e = de(value, ev, utcOffset, timezone);
                            setEE(e);
                            setES(e);
                            setEk(undefined);
                          }
                        },
                        isPlaceholder: !!eO,
                      },
                    ),
                  ),
              },
            ),
          ),
  });
};
const K = l.forwardRef(function (e, t) {
  const {
    allowClear,
    error,
    style,
    className,
    disabled,
    placeholder = [],
    value = [],
    popupVisible,
    format,
    size,
    onClear,
    editable,
    inputValue,
    onPressEnter,
    onPressTab,
    onChange,
    separator,
    suffixIcon,
    changeFocusedInputIndex,
    focusedInputIndex,
    isPlaceholder,
  } = e;
  const D = a._(e, [
    "allowClear",
    "error",
    "style",
    "className",
    "disabled",
    "placeholder",
    "value",
    "popupVisible",
    "format",
    "size",
    "onClear",
    "editable",
    "inputValue",
    "onPressEnter",
    "onPressTab",
    "onChange",
    "separator",
    "suffixIcon",
    "changeFocusedInputIndex",
    "focusedInputIndex",
    "isPlaceholder",
  ]);
  let { getPrefixCls, size: size_1, locale, rtl } = l.useContext(QO);
  let WRef = l.useRef(null);
  let BRef = l.useRef(null);
  let H = cy(disabled) ? disabled[0] : disabled;
  let L = cy(disabled) ? disabled[1] : disabled;
  function onKeyDown(e) {
    let t = e.keyCode || e.which;
    if (t === xy.code && onPressEnter) {
      onPressEnter();
    }
    if (t === oz.code && onPressTab) {
      onPressTab(e);
    }
  }
  function onChange_1(e) {
    e.stopPropagation();
    if (onChange) {
      onChange(e);
    }
  }
  l.useImperativeHandle(t, () => ({
    focus(e) {
      let t =
        (typeof e === "number" ? e : focusedInputIndex) === 0 ? WRef : BRef;
      if (
        ((focusedInputIndex === 0 && !H) || (focusedInputIndex === 1 && !L)) &&
        t.current &&
        t.current.focus
      ) {
        t.current.focus();
      }
    },
    blur() {
      if (focusedInputIndex === 0 && WRef.current && WRef.current.blur) {
        WRef.current.blur();
      }
      if (focusedInputIndex === 1 && BRef.current && BRef.current.blur) {
        BRef.current.blur();
      }
    },
  }));
  let Y = getPrefixCls("picker");
  let G = A_5(
    Y,
    `${Y}-range`,
    `${Y}-size-${size || size_1}`,
    {
      [`${Y}-focused`]: !!popupVisible,
      [`${Y}-disabled`]: H && L,
      [`${Y}-error`]: error,
      [`${Y}-rtl`]: rtl,
    },
    className,
  );
  let U = (e) => {
    let t = value[e] ? value[e].locale(locale.dayjsLocale).format(format) : "";
    if (inputValue && e === focusedInputIndex) {
      return inputValue;
    }
    return t;
  };
  let Z = editable
    ? {}
    : {
        readOnly: true,
      };
  function Q(e) {
    return A_5(`${Y}-input`, {
      [`${Y}-input-active`]: focusedInputIndex === e,
      [`${Y}-input-placeholder`]: isPlaceholder && focusedInputIndex === e,
    });
  }
  return i.jsxs(
    "div",
    o._(
      r._(
        {
          style,
          className: G,
        },
        A_2(D, ["onChange", "onPressEnter"]),
      ),
      {
        children: [
          i.jsx("div", {
            className: Q(0),
            children: i.jsx(
              "input",
              r._(
                {
                  ref: WRef,
                  disabled: H,
                  placeholder: placeholder[0],
                  value: U(0),
                  onChange: onChange_1,
                  onKeyDown,
                  onClick: () =>
                    void (
                      focusedInputIndex !== 0 && changeFocusedInputIndex(0)
                    ),
                },
                Z,
              ),
            ),
          }),
          i.jsx("span", {
            className: `${Y}-separator`,
            children: separator || "-",
          }),
          i.jsx("div", {
            className: Q(1),
            children: i.jsx(
              "input",
              r._(
                {
                  ref: BRef,
                  disabled: L,
                  placeholder: placeholder[1],
                  value: U(1),
                  onChange: onChange_1,
                  onKeyDown,
                  onClick: () =>
                    void (
                      focusedInputIndex !== 1 && changeFocusedInputIndex(1)
                    ),
                },
                Z,
              ),
            ),
          }),
          i.jsxs("div", {
            className: `${Y}-suffix`,
            children: [
              allowClear &&
                value.length === 2 &&
                i.jsx(A_4, {
                  prefix: Y,
                  onClick: onClear,
                  className: `${Y}-clear-icon`,
                  children: i.jsx(A_3, {}),
                }),
              i.jsx("span", {
                className: `${Y}-suffix-icon`,
                children: suffixIcon,
              }),
            ],
          }),
        ],
      },
    ),
  );
});
function Z(format) {
  let t = [];
  let use12Hours = false;
  ["H", "h", "m", "s", "a", "A"].forEach((r) => {
    if (format.indexOf(r) !== -1) {
      t.push(r);
      if (r === "a" || r === "A") {
        use12Hours = true;
      }
    }
  });
  return {
    list: t,
    use12Hours,
  };
}
let Q = new Map();
function q(e, scrollTop, duration) {
  if (Q.get(e)) {
    cancelAnimationFrame(Q.get(e));
  }
  if (duration <= 0) {
    e.scrollTop = scrollTop;
  }
  Q.set(
    e,
    requestAnimationFrame(() => {
      new U.A({
        from: {
          scrollTop: e.scrollTop,
        },
        to: {
          scrollTop,
        },
        duration,
        onUpdate: (t) => {
          e.scrollTop = t.scrollTop;
        },
        easing: "quartInOut",
      }).start();
    }),
  );
}
function useJ(e) {
  let {
    prefixCls,
    list,
    value,
    onHandleSelect,
    unit,
    popupVisible,
    scrollSticky,
  } = e;
  let uRef = l.useRef(new Map());
  let dRef = l.useRef();
  let pRef = l.useRef();
  let fRef = l.useRef(0);
  let m = A_8(popupVisible);
  let vRef = l.useRef(dRef.current && dRef.current.scrollTop);
  l.useEffect(() => {
    let e = uRef.current.get(value);
    if (e && popupVisible && m) {
      q(dRef.current, e.offsetTop, 150);
      vRef.current = e.offsetTop;
    }
  }, [value]);
  l.useEffect(() => {
    if (popupVisible && popupVisible !== m) {
      let e = uRef.current.get(value);
      if (e) {
        q(dRef.current, e.offsetTop, 0);
        vRef.current = e.offsetTop;
      }
    }
  }, [popupVisible, m]);
  l.useEffect(() => {
    if (!(list.length <= 1)) {
      fRef.current =
        (pRef.current.clientHeight - dRef.current.clientHeight) /
        (list.length - 1);
    }
  }, [list.length]);
  let g = l.useCallback(
    X.A(() => {
      let e = (
        dRef.current.scrollTop - vRef.current > 0 ? Math.ceil : Math.floor
      )(dRef.current.scrollTop / fRef.current);
      if (e !== value && list[e] && !list[e].disabled) {
        onHandleSelect(list[e].value, unit);
      }
    }, 100),
    [onHandleSelect],
  );
  return i.jsx("div", {
    className: A_5(`${prefixCls}-list`),
    ref: dRef,
    onWheel: scrollSticky && g,
    children: i.jsx("ul", {
      ref: pRef,
      children: list.map((e) =>
        i.jsx(
          "li",
          {
            className: A_5(`${prefixCls}-cell`, {
              [`${prefixCls}-cell-disabled`]: e.disabled,
              [`${prefixCls}-cell-selected`]: e.selected,
            }),
            onClick: () => !e.disabled && onHandleSelect(e.value, unit),
            ref: (t) => {
              uRef.current.set(e.value, t);
            },
            children: i.jsx("div", {
              className: `${prefixCls}-cell-inner`,
              children: e.label,
            }),
          },
          e.value,
        ),
      ),
    }),
  });
}
const EeContext = l.createContext({});
let et = ["am", "pm"];
const useEn = function (e) {
  let t;
  let n;
  let s;
  let a;
  let c;
  let {
    format = "HH:mm:ss",
    onSelect,
    popupVisible,
    step = {},
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabledOptions,
    onConfirmValue,
    isRangePicker,
    confirmBtnDisabled,
    valueShow,
    setValueShow,
    extra,
    disableConfirm,
    hideFooter,
    showNowBtn = true,
    scrollSticky,
  } = e;
  let { getPrefixCls, locale } = l.useContext(QO);
  let S = getPrefixCls("timepicker");
  let { utcOffset, timezone } = l.useContext(EeContext);
  let I = de(valueShow, format);
  let z = I && I.hour() >= 12 ? "pm" : "am";
  let V = e.use12Hours || Z(e.format).use12Hours;
  let W = l.useCallback(
    (e) => {
      let t = step.hour || 1;
      let n = step.minute || 1;
      let r = step.second || 1;
      let o = [];
      if (e === "hour") {
        for (let e = 0; e < (V ? 12 : 24); e += t) {
          o.push(e);
        }
        if (V) {
          o[0] = 12;
        }
      }
      if (e === "minute") {
        for (let e = 0; e < 60; e += n) {
          o.push(e);
        }
      }
      if (e === "second") {
        for (let e = 0; e < 60; e += r) {
          o.push(e);
        }
      }
      return o;
    },
    [step.hour, step.minute, step.second, V],
  );
  let B = W("hour");
  let H = W("minute");
  let L = W("second");
  let F = I && I.hour();
  F = V && F > 12 ? F - 12 : F;
  if (V && F === 0 && z === "am") {
    F += 12;
  }
  let K = I && I.minute();
  let Y = I && I.second();
  let U = l.useCallback(
    (e) => {
      switch (e) {
        case "hour":
          if (typeof disabledHours === "function") {
            return G.C(
              B.find((e) => disabledHours().indexOf(e) === -1) || 0,
              2,
              "0",
            );
          }
          return G.C(B[0], 2, "0");
        case "minute":
          if (typeof disabledMinutes === "function") {
            return G.C(
              H.find((e) => disabledMinutes(F).indexOf(e) === -1) || 0,
              2,
              "0",
            );
          }
          return G.C(H[0], 2, "0");
        case "second":
          if (typeof disabledSeconds === "function") {
            return G.C(
              L.find((e) => disabledSeconds(F, K).indexOf(e) === -1) || 0,
              2,
              "0",
            );
          }
          return G.C(L[0], 2, "0");
        default:
          return "00";
      }
    },
    [B, H, L, disabledHours, disabledMinutes, disabledSeconds, F, K],
  );
  let Q = {
    prefixCls: S,
    onHandleSelect: function (e, t) {
      let n;
      let r = Z(format).list.indexOf("A") !== -1;
      let o = I || yf(`${U("hour")}:${U("minute")}:${U("second")}`, "HH:mm:ss");
      let i = o.hour();
      let l = o.minute();
      let s = o.second();
      let a = r ? z.toUpperCase() : z;
      let c = "HH:mm:ss";
      if (V) {
        c = r ? `${c} A` : `${c} a`;
      }
      if (V) {
        i = i > 12 ? i - 12 : i;
      }
      if (t === "hour") {
        n = yf(`${e}:${l}:${s} ${a}`, c, "en");
      }
      if (t === "minute") {
        n = yf(`${i}:${e}:${s} ${a}`, c, "en");
      }
      if (t === "second") {
        n = yf(`${i}:${l}:${e} ${a}`, c, "en");
      }
      if (t === "ampm") {
        n = yf(`${i}:${l}:${s} ${r ? e.toUpperCase() : e}`, c, "en");
      }
      n = yf(n, c).locale(yf.locale());
      if (onSelect) {
        onSelect(
          jw(n, utcOffset, timezone).format(format),
          jw(n, utcOffset, timezone),
        );
      }
      if (!isRangePicker) {
        if (setValueShow) {
          setValueShow(n);
        }
        if (disableConfirm) {
          onConfirmValue(n);
        }
      }
    },
    popupVisible,
    scrollSticky,
  };
  let { list } = Z(format);
  let X = A_5(S);
  let en =
    hideFooter ||
    (disableConfirm && isRangePicker) ||
    (!isRangePicker && disableConfirm && !showNowBtn);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: X,
        children: [
          (list.indexOf("H") !== -1 || list.indexOf("h") !== -1) &&
            ((t = (
              hideDisabledOptions && typeof disabledHours === "function"
                ? B.filter((e) => disabledHours().indexOf(e) === -1)
                : B
            ).map((e) => ({
              label: G.C(`${e}`, 2, "0"),
              value: e,
              selected: F !== undefined && F === e,
              disabled:
                typeof disabledHours === "function" &&
                disabledHours().indexOf(e) !== -1,
            }))),
            i.jsx(
              useJ,
              o._(r._({}, Q), {
                list: t,
                value: F,
                unit: "hour",
              }),
            )),
          list.indexOf("m") !== -1 &&
            ((n = (
              hideDisabledOptions && typeof disabledMinutes === "function"
                ? H.filter((e) => disabledMinutes(F).indexOf(e) === -1)
                : H
            ).map((e) => ({
              label: G.C(`${e}`, 2, "0"),
              value: e,
              selected: F !== undefined && K === e,
              disabled:
                typeof disabledMinutes === "function" &&
                disabledMinutes(F).indexOf(e) !== -1,
            }))),
            i.jsx(
              useJ,
              o._(r._({}, Q), {
                list: n,
                value: K,
                unit: "minute",
              }),
            )),
          list.indexOf("s") !== -1 &&
            ((s = (
              hideDisabledOptions && typeof disabledSeconds === "function"
                ? L.filter((e) => disabledSeconds(F, K).indexOf(e) === -1)
                : L
            ).map((e) => ({
              label: G.C(`${e}`, 2, "0"),
              value: e,
              selected: F !== undefined && Y === e,
              disabled:
                typeof disabledSeconds === "function" &&
                disabledSeconds(F, K).indexOf(e) !== -1,
            }))),
            i.jsx(
              useJ,
              o._(r._({}, Q), {
                list: s,
                value: Y,
                unit: "second",
              }),
            )),
          V &&
            ((a = Z(format).list.indexOf("A") !== -1),
            (c = et.map((e) => ({
              label: a ? e.toUpperCase() : e,
              value: e,
              selected: z === e,
            }))),
            i.jsx(
              useJ,
              o._(r._({}, Q), {
                list: c,
                value: z,
                unit: "ampm",
              }),
            )),
        ],
      }),
      extra &&
        i.jsx("div", {
          className: `${S}-footer-extra-wrapper`,
          children: extra,
        }),
      !en &&
        i.jsxs("div", {
          className: `${S}-footer-btn-wrapper`,
          children: [
            !isRangePicker && showNowBtn
              ? i.jsx(A, {
                  size: "mini",
                  onClick: function () {
                    let e = hY();
                    let t = hY(utcOffset, timezone);
                    if (onSelect) {
                      onSelect(e.format(format), e);
                    }
                    if (disableConfirm) {
                      onConfirmValue(t);
                    } else if (setValueShow) {
                      setValueShow(t);
                    }
                  },
                  children: locale.TimePicker.now,
                })
              : i.jsx("div", {}),
            !disableConfirm &&
              i.jsx(A, {
                type: "primary",
                size: "mini",
                onClick: function () {
                  if (I) {
                    onConfirmValue(I);
                  }
                },
                disabled: confirmBtnDisabled || !I,
                children: locale.TimePicker.ok,
              }),
          ],
        }),
    ],
  });
};
const es = function (e) {
  let {
    prefixCls,
    title,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    mode,
    value,
    onChangePanel,
    icons = {},
    rtl,
  } = e;
  let f = typeof onPrev === "function";
  let m = typeof onSuperPrev === "function";
  let v = typeof onNext === "function";
  let g = typeof onSuperNext === "function";
  let y = (e) =>
    A_5(`${prefixCls}-header-icon`, {
      [`${prefixCls}-header-icon-hidden`]: !e,
    });
  let b = icons.prevDouble === null;
  let x = icons.prev === null;
  let w = icons.next === null;
  let j = icons.nextDouble === null;
  return i.jsxs("div", {
    className: `${prefixCls}-header`,
    children: [
      !b &&
        i.jsx("div", {
          className: y(m),
          onClick: onSuperPrev,
          children:
            m &&
            (b
              ? null
              : icons.prevDouble || (rtl ? i.jsx(A_13, {}) : i.jsx(A_12, {}))),
        }),
      !x &&
        i.jsx("div", {
          className: y(f),
          onClick: onPrev,
          children:
            f &&
            (x
              ? null
              : icons.prev || (rtl ? i.jsx(A_11, {}) : i.jsx(A_10, {}))),
        }),
      i.jsx("div", {
        className: `${prefixCls}-header-value`,
        children:
          title ||
          (mode === "date" || mode === "week"
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx("span", {
                    className: `${prefixCls}-header-label`,
                    onClick: () => onChangePanel("year"),
                    children: value.format("YYYY"),
                  }),
                  "-",
                  i.jsx("span", {
                    className: `${prefixCls}-header-label`,
                    onClick: () => onChangePanel("month"),
                    children: value.format("MM"),
                  }),
                ],
              })
            : mode === "month" || mode === "quarter"
              ? i.jsx("span", {
                  className: `${prefixCls}-header-label`,
                  onClick: () => onChangePanel("year"),
                  children: value.format("YYYY"),
                })
              : undefined),
      }),
      !w &&
        i.jsx("div", {
          className: y(v),
          onClick: onNext,
          children:
            v &&
            (w
              ? null
              : icons.next || (rtl ? i.jsx(A_10, {}) : i.jsx(A_11, {}))),
        }),
      !j &&
        i.jsx("div", {
          className: y(g),
          onClick: onSuperNext,
          children:
            g &&
            (j
              ? null
              : icons.nextDouble || (rtl ? i.jsx(A_12, {}) : i.jsx(A_13, {}))),
        }),
    ],
  });
};
const ea = function (e) {
  let { prefixCls, weekStart, isWeek, CALENDAR_LOCALE } = e;
  let l = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  l = l.slice(weekStart).concat(l.slice(0, weekStart));
  if (isWeek) {
    l.unshift("");
  }
  let short = CALENDAR_LOCALE.week.short;
  return i.jsx("div", {
    className: `${prefixCls}-week-list`,
    children: l.map((e) =>
      i.jsx(
        "div",
        {
          className: `${prefixCls}-week-list-item`,
          children: e && short[e],
        },
        e,
      ),
    ),
  });
};
function ec(e, t) {
  if (e && cy(e)) {
    return e[t];
  }
}
const useEu = function (e) {
  let {
    prefixCls,
    isWeek,
    disabledDate,
    onSelectDate,
    dateRender,
    onMouseEnterCell,
    onMouseLeaveCell,
    CALENDAR_LOCALE,
    rows,
    showWeekList,
    isSameTime,
    format,
    mode,
    originMode,
  } = e;
  let { utcOffset, timezone, weekStart } = l.useContext(SContext);
  let C = ((e) => {
    let {
      prefixCls,
      value,
      rangeValues,
      valueShowHover,
      isSameTime,
      mode,
      hideNotInViewDates,
    } = e;
    let a = V(rangeValues);
    let c = V(valueShowHover);
    let u = a !== 2 && c === 2 ? q0(valueShowHover) : rangeValues;
    let d = a === 2 ? q0(valueShowHover) : [];
    function p(e, t, n) {
      if (t && n) {
        return isSameTime(e, t) || isSameTime(e, n) || e.isBetween(t, n, null);
      }
    }
    return function (e, o, a, c) {
      let f = ec(u, 0);
      let m = ec(u, 1);
      let v = ec(d, 0);
      let y = ec(d, 1);
      let b = !e.isPrev && !e.isNext;
      let x = value && isSameTime(e.time, value);
      let w = isSameTime(e.time, hY(a, c));
      let j = mode === "week" || b;
      function O(t) {
        return j && !o && t && isSameTime(e.time, t);
      }
      if (mode === "week") {
        w = hY(a, c).isSame(e.time, "date");
      }
      if (mode === "quarter") {
        w = hY(a, c).isSame(e.time, "quarter");
      }
      let C = O(f);
      let N = O(m);
      let P = O(ec(rangeValues, 0));
      let $ = O(ec(rangeValues, 1));
      let k = O(v);
      let A = O(y);
      let E = false;
      if (C) {
        E = v && f && v.isBefore(f) && p(f, v, y);
      } else if (N) {
        E = y && m && y.isAfter(m) && p(m, v, y);
      }
      let _ = false;
      if (k) {
        _ = v && f && f.isBefore(v) && p(v, f, m);
      } else if (A) {
        _ = y && m && m.isAfter(y) && p(y, f, m);
      }
      return A_5(`${prefixCls}-cell`, {
        [`${prefixCls}-cell-disabled`]: o,
        [`${prefixCls}-cell-hidden`]: hideNotInViewDates && !b,
        [`${prefixCls}-cell-in-view`]: b,
        [`${prefixCls}-cell-today`]: w && b,
        [`${prefixCls}-cell-selected`]: x || P || $,
        [`${prefixCls}-cell-range-start`]: C,
        [`${prefixCls}-cell-range-end`]: N,
        [`${prefixCls}-cell-in-range`]: j && !o && p(e.time, f, m),
        [`${prefixCls}-cell-hover-range-start`]: k,
        [`${prefixCls}-cell-hover-range-end`]: A,
        [`${prefixCls}-cell-hover-in-range`]: j && !o && p(e.time, v, y),
        [`${prefixCls}-cell-range-edge-in-hover-range`]: E,
        [`${prefixCls}-cell-hover-range-edge-in-range`]: _,
      });
    };
  })(
    o._(r._({}, e), {
      isSameTime,
    }),
  );
  return i.jsxs(i.Fragment, {
    children: [
      showWeekList &&
        i.jsx(ea, {
          prefixCls,
          weekStart,
          isWeek,
          CALENDAR_LOCALE,
        }),
      i.jsx("div", {
        className: `${prefixCls}-body`,
        children: rows.map((e, r) =>
          i.jsx(
            "div",
            {
              className: A_5(`${prefixCls}-row`, {
                [`${prefixCls}-row-week`]: isWeek,
              }),
              children: e.map((e, n) => {
                if (e.time) {
                  var r;
                  r = e.time;
                  let o =
                    typeof disabledDate === "function" &&
                    (originMode && originMode !== mode
                      ? disabledDate(r.startOf(mode)) &&
                        disabledDate(r.endOf(mode))
                      : disabledDate(r));
                  return i.jsx(
                    "div",
                    {
                      className: C(e, o, utcOffset, timezone),
                      onMouseEnter: () =>
                        onMouseEnterCell && onMouseEnterCell(e.time, o),
                      onMouseLeave: () =>
                        onMouseLeaveCell && onMouseLeaveCell(e.time, o),
                      onClick: () =>
                        !o && onSelectDate(e.time.format(format), e.time),
                      children: dateRender
                        ? l.cloneElement(dateRender(e.time))
                        : i.jsx("div", {
                            className: `${prefixCls}-date`,
                            children: i.jsx("div", {
                              className: `${prefixCls}-date-value`,
                              children: e.name,
                            }),
                          }),
                    },
                    n,
                  );
                }
                if ("weekOfYear" in e) {
                  return i.jsx(
                    "div",
                    {
                      className: A_5(
                        `${prefixCls}-cell`,
                        `${prefixCls}-cell-week`,
                      ),
                      children: i.jsx("div", {
                        className: `${prefixCls}-date`,
                        children: i.jsx("div", {
                          className: `${prefixCls}-date-value`,
                          children: e.weekOfYear,
                        }),
                      }),
                    },
                    n,
                  );
                }
              }),
            },
            r,
          ),
        ),
      }),
    ],
  });
};
function useEp(e) {
  let {
    pageShowDate,
    style,
    onMouseEnterCell,
    onMouseLeaveCell,
    dateRender,
    disabledDate,
    value,
    locale,
    isRangePicker,
    onSelect,
    rangeValues,
    onSuperPrev,
    onSuperNext,
    format,
    icons,
    originMode,
  } = e;
  let N = a._(e, [
    "pageShowDate",
    "style",
    "onMouseEnterCell",
    "onMouseLeaveCell",
    "dateRender",
    "disabledDate",
    "value",
    "locale",
    "isRangePicker",
    "onSelect",
    "rangeValues",
    "onSuperPrev",
    "onSuperNext",
    "format",
    "icons",
    "originMode",
  ]);
  let { locale: locale_1, getPrefixCls, rtl } = l.useContext(QO);
  let Calendar = Y.A(locale_1.DatePicker, locale).Calendar;
  let { utcOffset, timezone } = l.useContext(SContext);
  let M = getPrefixCls("panel-year");
  let T = A_5(M);
  let D =
    10 *
      Math.floor(
        (pageShowDate ? pageShowDate.year() : hY(utcOffset, timezone).year()) /
          10,
      ) -
    1;
  let R = Wf(3).map((e) => "");
  let I = Wf(4)
    .map((e) => R)
    .map((e, t) =>
      e.map((e, n) => ({
        name: D + 3 * t + n,
        time: yf(`${D + 3 * t + n}`, "YYYY").endOf("year"),
        isPrev: t === 0 && n === 0,
        isNext: t === 3 && n === 2,
      })),
    );
  return i.jsxs("div", {
    className: T,
    style,
    children: [
      i.jsx(
        es,
        r._(
          {
            prefixCls: getPrefixCls("picker"),
            icons,
            title: `${I[0][1].name} - ${I[3][2].name}`,
            rtl,
          },
          {
            onSuperPrev,
            onSuperNext,
          },
        ),
      ),
      i.jsx(
        useEu,
        o._(
          r._(
            {},
            N,
            isRangePicker
              ? {
                  rangeValues,
                }
              : {
                  value,
                },
          ),
          {
            prefixCls: getPrefixCls("picker"),
            rows: I,
            onSelectDate: onSelect,
            isSameTime: (e, t) => e.isSame(t, "year"),
            onMouseEnterCell,
            onMouseLeaveCell,
            dateRender,
            disabledDate,
            CALENDAR_LOCALE: Calendar,
            mode: "year",
            originMode,
            format,
          },
        ),
      ),
    ],
  });
}
function useEf(e) {
  let {
    pageShowDate,
    style,
    onMouseEnterCell,
    onMouseLeaveCell,
    dateRender,
    disabledDate,
    value,
    locale,
    isRangePicker,
    onSelect,
    rangeValues,
    onSuperPrev,
    onSuperNext,
    format,
    getHeaderOperations,
    setPageShowDate,
    icons,
    panelMode,
    originMode,
    setPanelMode,
  } = e;
  let A = a._(e, [
    "pageShowDate",
    "style",
    "onMouseEnterCell",
    "onMouseLeaveCell",
    "dateRender",
    "disabledDate",
    "value",
    "locale",
    "isRangePicker",
    "onSelect",
    "rangeValues",
    "onSuperPrev",
    "onSuperNext",
    "format",
    "getHeaderOperations",
    "setPageShowDate",
    "icons",
    "panelMode",
    "originMode",
    "setPanelMode",
  ]);
  let { locale: locale_1, getPrefixCls, rtl } = l.useContext(QO);
  let Calendar = Y.A(locale_1.DatePicker, locale).Calendar;
  let S = getPrefixCls("panel-month");
  let D = A_5(S);
  let R = pageShowDate.year();
  let I = l.useMemo(() => {
    let e = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].map((e, t) => ({
      name: Calendar.month.short[e],
      time: yf(`${R}-${G.C(t + 1, 2, "0")}`, "YYYY-MM").endOf("month"),
    }));
    let t = [, , , ,];
    for (let n = 0; n < 4; n++) {
      t[n] = e.slice(3 * n, 3 * (n + 1));
    }
    return t;
  }, [R, Calendar]);
  if (panelMode === "year") {
    return i.jsx(
      useEp,
      o._(r._({}, getHeaderOperations(panelMode)), {
        pageShowDate,
        onSelect: (e, t) => {
          setPanelMode("month");
          setPageShowDate(t);
        },
        disabledDate,
      }),
    );
  }
  return i.jsxs("div", {
    className: D,
    style,
    children: [
      i.jsx(
        es,
        o._(
          r._(
            {},
            {
              onSuperPrev,
              onSuperNext,
            },
          ),
          {
            icons,
            prefixCls: getPrefixCls("picker"),
            value: pageShowDate,
            mode: panelMode,
            onChangePanel: function (e) {
              setPanelMode(e);
            },
            rtl,
          },
        ),
      ),
      i.jsx(
        useEu,
        o._(
          r._(
            {},
            A,
            isRangePicker
              ? {
                  rangeValues,
                }
              : {
                  value,
                },
          ),
          {
            prefixCls: getPrefixCls("picker"),
            rows: I,
            onSelectDate: onSelect,
            isSameTime: (e, t) => e.isSame(t, "month"),
            onMouseEnterCell,
            onMouseLeaveCell,
            dateRender,
            disabledDate,
            CALENDAR_LOCALE: Calendar,
            mode: "month",
            originMode,
            format,
          },
        ),
      ),
    ],
  });
}
useEp.defaultProps = {
  pickerType: "year",
};
useEf.defaultProps = {
  pickerType: "month",
};
let eh = (time) => ({
  year: time.year(),
  month: time.month() + 1,
  day: time.day(),
  name: time.date(),
  time,
});
function useEm(e) {
  let t;
  let n;
  let {
    isWeek,
    popupVisible,
    format,
    pageShowDate,
    showTime,
    style,
    timepickerProps,
    onMouseEnterCell,
    onMouseLeaveCell,
    dateRender,
    disabledDate,
    disabledTime,
    value,
    rangeValues,
    locale,
    isRangePicker,
    onSelect,
    onTimePickerSelect,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    isSameTime,
    index,
    getHeaderOperations,
    setPageShowDate,
    timeValue,
    hideNotInViewDates,
    icons,
    isTimePanel,
    panelMode,
    setPanelMode,
  } = e;
  let G = a._(e, [
    "isWeek",
    "popupVisible",
    "format",
    "pageShowDate",
    "showTime",
    "style",
    "timepickerProps",
    "onMouseEnterCell",
    "onMouseLeaveCell",
    "dateRender",
    "disabledDate",
    "disabledTime",
    "value",
    "rangeValues",
    "locale",
    "isRangePicker",
    "onSelect",
    "onTimePickerSelect",
    "onPrev",
    "onNext",
    "onSuperPrev",
    "onSuperNext",
    "isSameTime",
    "index",
    "getHeaderOperations",
    "setPageShowDate",
    "timeValue",
    "hideNotInViewDates",
    "icons",
    "isTimePanel",
    "panelMode",
    "setPanelMode",
  ]);
  let { locale: locale_1, getPrefixCls, rtl } = l.useContext(QO);
  let { utcOffset, timezone, weekStart } = l.useContext(SContext);
  let ee = Y.A(locale_1.DatePicker, locale);
  let et = getPrefixCls(isWeek ? "panel-week" : "panel-date");
  let er = A_5(et);
  let eo = isRangePicker
    ? {
        rangeValues,
      }
    : {
        value,
      };
  let ei = (Gv(showTime) && showTime.format) || lU(format);
  let { dayjsLocale } = locale_1;
  let ea = l.useMemo(
    () =>
      ((e, t) => {
        let { dayStartOfWeek, isWeek } = e;
        let l = o._(r._({}, eh(vX.startOf(t, "month"))), {
          days: t.daysInMonth(),
        });
        let s = Wf(42).map(() => ({}));
        let a =
          l.day - dayStartOfWeek < 0
            ? 7 + (l.day - dayStartOfWeek)
            : l.day - dayStartOfWeek;
        s[a] = r._({}, l);
        for (let e = 0; e < a; e++) {
          s[a - e - 1] = o._(r._({}, eh(vX.subtract(l.time, e + 1, "day"))), {
            isPrev: true,
          });
        }
        for (let e = 0; e < 42 - a - 1; e++) {
          s[a + e + 1] = o._(r._({}, eh(vX.add(l.time, e + 1, "day"))), {
            isNext: e >= l.days - 1,
          });
        }
        let c = Wf(6).map(() => []);
        for (let e = 0; e < 6; e++) {
          c[e] = s.slice(7 * e, 7 * (e + 1));
          if (isWeek) {
            let t = c[e][0].time;
            let weekRows = [...c[e]];
            c[e].unshift({
              weekRows,
              weekOfYear: t.week(),
            });
          }
        }
        return c;
      })(
        o._(r._({}, e), {
          dayStartOfWeek: weekStart,
        }),
        pageShowDate.locale(dayjsLocale),
      ),
    [pageShowDate.toString(), weekStart, dayjsLocale],
  );
  t = isRangePicker
    ? typeof disabledTime === "function"
      ? disabledTime(rangeValues[index], index === 0 ? "start" : "end")
      : {}
    : typeof disabledTime === "function"
      ? disabledTime(de(value, format))
      : {};
  if (panelMode === "year") {
    return i.jsx(
      useEp,
      o._(r._({}, getHeaderOperations(panelMode)), {
        pageShowDate,
        onSelect: (e, t) => {
          setPanelMode("month");
          setPageShowDate(t);
        },
        disabledDate,
        originMode: "date",
      }),
    );
  }
  if (panelMode === "month") {
    return i.jsx(
      useEf,
      o._(r._({}, getHeaderOperations(panelMode)), {
        setPageShowDate,
        pageShowDate,
        panelMode,
        getHeaderOperations,
        onSelect: (e, t) => {
          setPanelMode("date");
          setPageShowDate(t);
        },
        disabledDate,
        originMode: "date",
        setPanelMode,
      }),
    );
  }
  return i.jsx("div", {
    className: er,
    style,
    children:
      showTime && isTimePanel
        ? ((n = Gv(showTime) ? showTime : {}),
          i.jsxs("div", {
            className: `${et}-timepicker`,
            children: [
              i.jsx("header", {
                className: `${et}-timepicker-title`,
                children: ee.selectTime,
              }),
              i.jsx(
                useEn,
                o._(r._({}, A_2(timepickerProps, ["disableConfirm"]), n, t), {
                  hideFooter: true,
                  format: ei,
                  valueShow: timeValue.format(ei),
                  onSelect: onTimePickerSelect,
                  popupVisible,
                  utcOffset,
                  timezone,
                }),
              ),
            ],
          }))
        : i.jsxs("div", {
            className: `${et}-inner`,
            children: [
              i.jsx(
                es,
                o._(
                  r._(
                    {},
                    {
                      onPrev,
                      onSuperPrev,
                      onNext,
                      onSuperNext,
                    },
                  ),
                  {
                    icons,
                    prefixCls: getPrefixCls("picker"),
                    value: pageShowDate,
                    mode: panelMode,
                    onChangePanel: function (e) {
                      setPanelMode(e);
                    },
                    rtl,
                  },
                ),
              ),
              i.jsx(
                useEu,
                o._(r._({}, G, eo), {
                  showWeekList: true,
                  isWeek,
                  prefixCls: getPrefixCls("picker"),
                  rows: ea,
                  isSameTime: isSameTime || ((e, t) => e.isSame(t, "day")),
                  onSelectDate: onSelect,
                  onMouseEnterCell,
                  onMouseLeaveCell,
                  dateRender,
                  disabledDate,
                  CALENDAR_LOCALE: ee.Calendar,
                  mode: isWeek ? "week" : "date",
                  format,
                  hideNotInViewDates,
                }),
              ),
            ],
          }),
  });
}
function useEv(e) {
  let {
    value,
    isRangePicker,
    rangeValues,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    localeName,
  } = e;
  let h = a._(e, [
    "value",
    "isRangePicker",
    "rangeValues",
    "onPrev",
    "onNext",
    "onSuperPrev",
    "onSuperNext",
    "localeName",
  ]);
  let { weekStart } = l.useContext(SContext);
  return i.jsx(
    useEm,
    o._(
      r._(
        {},
        h,
        isRangePicker
          ? {
              rangeValues,
            }
          : {
              value,
            },
        {
          onPrev,
          onNext,
          onSuperPrev,
          onSuperNext,
        },
      ),
      {
        isWeek: true,
        isSameTime: function (e, t) {
          return vX.isSameWeek(e, t, weekStart, localeName);
        },
        isRangePicker,
      },
    ),
  );
}
function useEg(e) {
  let {
    pageShowDate,
    style,
    onMouseEnterCell,
    onMouseLeaveCell,
    dateRender,
    disabledDate,
    value,
    locale,
    isRangePicker,
    onSelect,
    rangeValues,
    onSuperPrev,
    onSuperNext,
    format,
    getHeaderOperations,
    setPageShowDate,
    icons,
    panelMode,
    setPanelMode,
  } = e;
  let k = a._(e, [
    "pageShowDate",
    "style",
    "onMouseEnterCell",
    "onMouseLeaveCell",
    "dateRender",
    "disabledDate",
    "value",
    "locale",
    "isRangePicker",
    "onSelect",
    "rangeValues",
    "onSuperPrev",
    "onSuperNext",
    "format",
    "getHeaderOperations",
    "setPageShowDate",
    "icons",
    "panelMode",
    "setPanelMode",
  ]);
  let { locale: locale_1, getPrefixCls, rtl } = l.useContext(QO);
  let Calendar = Y.A(locale_1.DatePicker, locale).Calendar;
  let T = getPrefixCls("panel-quarter");
  let S = A_5(T);
  let D = pageShowDate.year();
  let R = [
    [1, 2, 3, 4].map((e) => ({
      name: `Q${e}`,
      time: yf(`${D}-${G.C((e - 1) * 3 + 1, 2, "0")}-01`),
    })),
  ];
  if (panelMode === "year") {
    return i.jsx(
      useEp,
      o._(r._({}, getHeaderOperations(panelMode)), {
        pageShowDate,
        onSelect: (e, t) => {
          setPanelMode("quarter");
          setPageShowDate(t);
        },
        disabledDate,
        originMode: "quarter",
      }),
    );
  }
  return i.jsxs("div", {
    className: S,
    style,
    children: [
      i.jsx(
        es,
        o._(
          r._(
            {},
            {
              onSuperPrev,
              onSuperNext,
            },
          ),
          {
            icons,
            prefixCls: getPrefixCls("picker"),
            value: pageShowDate,
            mode: panelMode,
            onChangePanel: function (e) {
              setPanelMode(e);
            },
            rtl,
          },
        ),
      ),
      i.jsx("div", {
        className: `${T}-wrapper`,
        children: i.jsx(
          useEu,
          o._(
            r._(
              {},
              k,
              isRangePicker
                ? {
                    rangeValues,
                  }
                : {
                    value,
                  },
            ),
            {
              prefixCls: getPrefixCls("picker"),
              rows: R,
              onSelectDate: onSelect,
              isSameTime: (e, t) => e.isSame(t, "month"),
              onMouseEnterCell,
              onMouseLeaveCell,
              dateRender,
              disabledDate,
              CALENDAR_LOCALE: Calendar,
              mode: "quarter",
              format,
            },
          ),
        ),
      }),
    ],
  });
}
function ey(e, t) {
  let n = [];
  for (let r = e; r < t; r++) {
    n.push(r);
  }
  return n;
}
function useEb(e) {
  let {
    mode = "date",
    showTime,
    disabledDate,
    disabledTime,
    format,
    dateRender,
    value,
    timeValues,
    icons,
    locale,
    pageShowDates,
    onMouseEnterCell,
    onMouseLeaveCell,
    onTimePickerSelect,
    onSelectPanel,
    onPrev,
    onSuperPrev,
    onNext,
    onSuperNext,
    localeName,
    popupVisible,
    timepickerProps,
    getHeaderOperations,
    setRangePageShowDates,
    disabledTimePickerIndex,
    hideNotInViewDates,
    isTimePanel,
    valueShowHover,
    panelModes,
    setPanelModes,
  } = e;
  let { getPrefixCls } = l.useContext(QO);
  let W = getPrefixCls("picker-range");
  let { utcOffset, timezone } = l.useContext(SContext);
  let L = pageShowDates[0] || hY(utcOffset, timezone);
  let F = pageShowDates[1] || hY(utcOffset, timezone);
  let K = {
    isRangePicker: true,
    rangeValues: de(value, format),
    onMouseEnterCell,
    onMouseLeaveCell,
    format,
    locale,
    disabledDate,
    onSelect: onSelectPanel,
    dateRender,
    getHeaderOperations,
    icons,
    valueShowHover,
  };
  let Y = {
    pageShowDate: L,
    panelMode: panelModes[0],
    setPanelMode: (e) => setPanelModes([e, panelModes[1]]),
  };
  let G = {
    pageShowDate: F,
    panelMode: panelModes[1],
    setPanelMode: (e) => setPanelModes([panelModes[0], e]),
  };
  return i.jsx("div", {
    className: W,
    children: i.jsxs("div", {
      className: `${W}-wrapper`,
      children: [
        (mode === "date" || mode === "week") &&
          (() => {
            let e = {
              onPrev,
              onSuperPrev,
            };
            let l = {
              onNext,
              onSuperNext,
            };
            let s = o._(r._({}, K), {
              localeName,
              popupVisible,
              timepickerProps,
              getHeaderOperations,
              hideNotInViewDates,
              isTimePanel,
            });
            if (mode === "week") {
              return i.jsxs(i.Fragment, {
                children: [
                  i.jsx(
                    useEv,
                    r._(
                      {
                        setPageShowDate: (e) =>
                          setRangePageShowDates([e, e], 0),
                      },
                      e,
                      s,
                      Y,
                    ),
                  ),
                  i.jsx(
                    useEv,
                    r._(
                      {
                        setPageShowDate: (e) =>
                          setRangePageShowDates([e, e], 1),
                      },
                      l,
                      s,
                      G,
                    ),
                  ),
                ],
              });
            }
            let c = {
              disabledTime,
              showTime,
            };
            let u = {};
            if (
              typeof disabledTimePickerIndex === "number" &&
              ((u.disabledTime = () => ({
                disabledHours: () => ey(0, 24),
                disabledMinutes: () => ey(0, 60),
                disabledSeconds: () => ey(0, 60),
              })),
              Gv(showTime))
            ) {
              let e = o._(r._({}, showTime), {
                defaultValue: undefined,
              });
              u.showTime = o._(r._({}, e), {
                hideDisabledOptions: false,
              });
            }
            return i.jsxs(i.Fragment, {
              children: [
                i.jsx(
                  useEm,
                  r._(
                    o._(
                      r._({}, e, s, c, disabledTimePickerIndex === 0 ? u : {}),
                      {
                        onTimePickerSelect: (e, t) => {
                          onTimePickerSelect(0, e, t);
                        },
                        index: 0,
                        setPageShowDate: (e) =>
                          setRangePageShowDates([e, e], 0),
                        timeValue: timeValues[0],
                      },
                    ),
                    Y,
                  ),
                ),
                i.jsx(
                  useEm,
                  r._(
                    o._(
                      r._({}, l, s, c, disabledTimePickerIndex === 1 ? u : {}),
                      {
                        onTimePickerSelect: (e, t) => {
                          onTimePickerSelect(1, e, t);
                        },
                        index: 1,
                        setPageShowDate: (e) =>
                          setRangePageShowDates([e, e], 1),
                        timeValue: timeValues[1],
                      },
                    ),
                    G,
                  ),
                ),
              ],
            });
          })(),
        mode === "month" &&
          i.jsxs(i.Fragment, {
            children: [
              i.jsx(
                useEf,
                r._(
                  {
                    setPageShowDate: (e) => setRangePageShowDates([e, e], 0),
                  },
                  {
                    onSuperPrev,
                  },
                  K,
                  Y,
                ),
              ),
              i.jsx(
                useEf,
                r._(
                  {
                    setPageShowDate: (e) => setRangePageShowDates([e, e], 1),
                  },
                  {
                    onSuperNext,
                  },
                  K,
                  G,
                ),
              ),
            ],
          }),
        mode === "year" &&
          i.jsxs(i.Fragment, {
            children: [
              i.jsx(
                useEp,
                o._(
                  r._(
                    {},
                    {
                      onSuperPrev,
                    },
                    K,
                  ),
                  {
                    pageShowDate: L,
                  },
                ),
              ),
              i.jsx(
                useEp,
                o._(
                  r._(
                    {},
                    {
                      onSuperNext,
                    },
                    K,
                  ),
                  {
                    pageShowDate: F,
                  },
                ),
              ),
            ],
          }),
        mode === "quarter" &&
          i.jsxs(i.Fragment, {
            children: [
              i.jsx(
                useEg,
                r._(
                  {
                    setPageShowDate: (e) => setRangePageShowDates([e, e], 0),
                  },
                  {
                    onSuperPrev,
                  },
                  K,
                  Y,
                ),
              ),
              i.jsx(
                useEg,
                r._(
                  {
                    setPageShowDate: (e) => setRangePageShowDates([e, e], 1),
                  },
                  {
                    onSuperNext,
                  },
                  K,
                  G,
                ),
              ),
            ],
          }),
      ],
    }),
  });
}
useEm.defaultProps = {
  pickerType: "date",
};
useEv.defaultProps = {
  pickerType: "week",
};
useEg.defaultProps = {
  pickerType: "quarter",
};
useEb.defaultProps = {
  pickerType: "range",
};
let ex = {
  allowClear: true,
  unmountOnExit: true,
  position: "bl",
  editable: true,
  mode: "date",
};
let useEw = (e) => {
  var t;
  var n;
  let a;
  let c;
  let { getPrefixCls, locale, size, componentConfig, rtl } = l.useContext(QO);
  if (rtl) {
    ex.position = "br";
  }
  let b = A_7(
    e,
    ex,
    componentConfig == null ? undefined : componentConfig.DatePicker,
  );
  let {
    allowClear,
    className,
    style,
    placeholder,
    getPopupContainer,
    disabled,
    position,
    error,
    unmountOnExit,
    editable,
    triggerProps,
    shortcuts,
    onSelect,
    onVisibleChange,
    value,
    onChange,
    icons,
    disabledDate,
    disabledTime,
    mode,
    showTime,
    onSelectShortcut,
    extra,
    shortcutsPlacementLeft,
    onOk,
    defaultPickerValue,
    pickerValue,
    panelRender,
    onPickerValueChange,
    triggerElement,
    clearRangeOnReselect,
    separator,
    utcOffset,
    timezone,
  } = b;
  let ef = getPrefixCls("picker-range");
  let eh = b0(b.dayStartOfWeek) ? W(locale.dayjsLocale) : b.dayStartOfWeek;
  let emRef = l.useRef(null);
  let evRef = l.useRef(null);
  let egRef = l.useRef(null);
  let eyRef = l.useRef(null);
  let ewRef = l.useRef(null);
  let ej = ((e) => {
    let t;
    let { format, showTime, mode } = e;
    switch (mode) {
      case "date":
        t = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
        break;
      case "month":
        t = "YYYY-MM";
        break;
      case "year":
        t = "YYYY";
        break;
      case "week":
        t = "YYYY-wo";
        break;
      case "quarter":
        t = "YYYY-[Q]Q";
        break;
      default:
        t = "YYYY-MM-DD";
    }
    if (format) {
      t = format;
    }
    return t;
  })(b);
  let eO = (() => {
    if (cy(disabled)) {
      if (disabled[0] && !disabled[1]) {
        return 1;
      }
      if (disabled[1] && !disabled[0]) {
        return 0;
      }
    }
  })();
  let eC = typeof eO === "number";
  let disabledTimePickerIndex = eC ? 1 ^ eO : undefined;
  let [eP, setEP] = l.useState(eC ? eO : 0);
  l.useEffect(() => {
    if (eC) {
      setEP(eO);
    }
  }, [disabled]);
  let ek = 1 ^ eP;
  let [eA, setEA] = l.useState();
  let [e_, setE_] = l.useState();
  let [eT, setET] = l.useState(
    (() => {
      let e;
      e = b.value
        ? de(b.value, ej, utcOffset, timezone)
        : de(b.defaultValue, ej, utcOffset, timezone);
      if (eC && (!e || (e && !e[ek]))) {
        let e = [];
        e[ek] = hY(utcOffset, timezone);
        return e;
      }
      return e;
    })(),
  );
  let [eD, setED] = l.useState();
  let [valueShowHover, setEI] = l.useState();
  let [eV, setEV] = l.useState();
  let [eB, setEB] = l.useState(b.popupVisible);
  let [eL, setEL] = l.useState([mode, mode]);
  let [eK, setEK] = l.useState(false);
  let eG = "popupVisible" in b ? b.popupVisible : eB;
  let eU = de(value, ej, utcOffset, timezone);
  let eZ = "value" in b ? eU : eT;
  let eQ = eV || eD || eZ || [];
  let eq = V(eD || eZ);
  let eXRef = l.useRef(true);
  let eJ = hY();
  let e0 = xT(eJ, utcOffset, timezone);
  a = [];
  c =
    Gv(showTime) && showTime.defaultValue
      ? de(
          showTime.defaultValue,
          showTime.format || "HH:mm:ss",
          utcOffset,
          timezone,
        )
      : [];
  a[0] = eQ[0] || c[0] || e0;
  a[1] = eQ[1] || c[1] || e0;
  let e1 = a;
  let e2 = eC
    ? (e) => {
        if (eO === 0) {
          return e.isAfter(eQ[1], mode);
        }
        return e.isBefore(eQ[0], mode);
      }
    : undefined;
  let e4 = triggerElement !== undefined;
  let e5 = e4 || clearRangeOnReselect;
  let e7 = eZ || de(defaultPickerValue, ej) || [eJ, eJ];
  let [e3, setE3] = l.useState(ti(e7));
  let pageShowDates = ti(de(pickerValue, ej, utcOffset, timezone)) || e3;
  let e9 = A_8(utcOffset);
  let te = A_8(timezone);
  A_9(() => {
    if (cy(eT) && (e9 !== utcOffset || timezone !== te)) {
      setET(
        eT.map((e) => jw(e, e9, te)).map((e) => xT(e, utcOffset, timezone)),
      );
    }
  }, [utcOffset, e9, timezone, te]);
  A_9(() => {
    setE3(ti(pageShowDates));
  }, [mode]);
  l.useEffect(() => {
    setEL([mode, mode]);
  }, [mode]);
  l.useEffect(() => {
    setE_(undefined);
    setEA(undefined);
    if (eG) {
      setEK(false);
      setEL([mode, mode]);
      setE3(ti(e7));
      setED(eZ);
      if (shortcutsPlacementLeft) {
        egRef.current.style.maxHeight = `${evRef.current.clientHeight}px`;
      }
    } else {
      setED(undefined);
      setEI(undefined);
      setEV(undefined);
      if (emRef.current && emRef.current.blur) {
        emRef.current.blur();
      }
    }
    eXRef.current = eG;
  }, [eG]);
  let tt = eU == null || (t = eU[0]) == null ? undefined : t.format(ej);
  let tn = eU == null || (n = eU[1]) == null ? undefined : n.format(ej);
  function setRangePageShowDates(e, t = eP) {
    let n = ti(e, t);
    setE3(n);
    to(n);
  }
  function to(e) {
    if (!tl([e[0], e3[0]], mode) && onPickerValueChange) {
      onPickerValueChange(
        cy(e) ? e.map((e) => e && e.format(ej)) : undefined,
        e,
      );
    }
  }
  function ti(e, t = eP) {
    let n = t === 0 || tl(e, mode);
    if (cy(e) && e.length < 2) {
      return ts(e[0] || hY(utcOffset, timezone), mode, "prev");
    }
    if (cy(e) && e.length === 2) {
      if (e[t]) {
        return ts(e[t], mode, n ? "prev" : "next");
      }
      return ts(
        e[+(t === 0)] || hY(utcOffset, timezone),
        mode,
        n && !e[+(t === 0)] ? "prev" : "next",
      );
    }
  }
  function tl(e, mode) {
    if (e && e.length === 2 && tC(e)) {
      return (
        ((mode === "date" || mode === "week") && e[0].isSame(e[1], "month")) ||
        ((mode === "month" || mode === "quarter") &&
          e[0].isSame(e[1], "year")) ||
        (mode === "year" &&
          Math.floor(e[0].year() / 10) === Math.floor(e[1].year() / 10))
      );
    }
  }
  function ts(e = hY(utcOffset, timezone), t = mode, n = "prev") {
    let r = n === "prev";
    switch (t) {
      case "date":
      case "week":
        if (r) {
          return [e, vX.add(e, 1, "month")];
        }
        return [vX.subtract(e, 1, "month"), e];
      case "month":
      case "quarter":
        if (r) {
          return [e, vX.add(e, 1, "year")];
        }
        return [vX.subtract(e, 1, "year"), e];
      case "year":
        if (r) {
          return [e, vX.add(e, 10, "year")];
        }
        return [vX.subtract(e, 10, "year"), e];
      default:
        return [];
    }
  }
  function ta(e) {
    if (emRef.current && emRef.current.focus) {
      emRef.current.focus(eC ? eO : e);
    }
  }
  function tc(e) {
    if (onVisibleChange) {
      onVisibleChange(e);
    }
    setEB(e);
  }
  function changeFocusedInputIndex(e, t) {
    setEA(undefined);
    setEP(e);
    if (eQ && eQ.length && !t) {
      let t = ti(eQ, e);
      setE3(t);
      to(t);
    }
  }
  function td(e) {
    let t = typeof e2 === "function" && e2(e);
    return (typeof disabledDate === "function" && disabledDate(e)) || t;
  }
  function tp(e) {
    return fn(e, ej) && !td(de(e, ej));
  }
  function tf(e) {
    if (Bh(eZ, e)) {
      let t = cy(e)
        ? e.map((e) => B(jw(e, utcOffset, timezone), locale.dayjsLocale))
        : undefined;
      if (onChange) {
        onChange(cy(t) ? t.map((e) => e && e.format(ej)) : undefined, t);
      }
    }
  }
  function th(e, t) {
    let n = e || eQ;
    if (!n || !n[0] || !n[1]) {
      return;
    }
    let r = q0(n);
    setET(r);
    tf(r);
    if (!(triggerElement === null || t)) {
      tc(false);
    }
  }
  function tm() {
    th();
    let e = eQ.map((e) => B(e, locale.dayjsLocale));
    if (onOk) {
      onOk(
        e.map((e) => e && e.format(ej)),
        e,
      );
    }
  }
  function tv() {
    switch (mode) {
      case "date":
      case "week":
        return "date";
      case "month":
        return "month";
      case "year":
        return "year";
      default:
        return;
    }
  }
  function tg(e) {
    if (eq !== 2) {
      return false;
    }
    let t = eD || eZ;
    return !!(
      (eP === 0 && e.isAfter(t[1], tv())) ||
      (eP === 1 && e.isBefore(t[0], tv()))
    );
  }
  function onSelectPanel(e, t) {
    let n = tg(t) && eXRef.current;
    let r = e5 && eq === 2 && !eC ? [] : [...eQ];
    let o = e4 ? +(eq !== 0 && eq !== 2) : eP;
    let i = showTime ? p_1(t, e1[o]) : t;
    if (n) {
      r[o] = i;
      r[1 ^ o] = undefined;
    } else {
      r[o] = i;
    }
    let l = q0(r);
    tx(l);
    setRangePageShowDates(l);
    setEA(undefined);
    setE_(undefined);
    let s = V(r);
    if (e5) {
      if (eq !== 0 && (eq !== 2 || eC)) {
        if (!showTime) {
          th(r);
        }
      } else if (e4) {
        setEP(1);
      } else {
        tw(true);
      }
    } else if (s <= 1) {
      tw(true);
    } else if (eq === 2 && eXRef.current && !eC) {
      eXRef.current = false;
      tw(true);
      if (!(showTime || n)) {
        th(r, true);
      }
    } else {
      eXRef.current = false;
      if (!(showTime || n)) {
        th(r);
      }
    }
  }
  function tb(e, t, n) {
    let r = cy(eQ) ? [...eQ] : [];
    let o = p_1(r[e] || hY(utcOffset, timezone), n);
    r[e] = o;
    tx(r);
  }
  function tx(e) {
    setED(e);
    setEI(undefined);
    let t = q0(e).map((e) => B(jw(e, utcOffset, timezone), locale.dayjsLocale));
    if (onSelect) {
      onSelect(
        t.map((e) => e && e.format(ej)),
        t,
        {
          type: eP === 1 ? "end" : "start",
        },
      );
    }
  }
  function tw(e) {
    changeFocusedInputIndex(ek, e);
    setTimeout(() => ta(ek));
  }
  function tj(e, t) {
    let n = [...(eQ || [])];
    let r = e5 ? eq === 1 : eq !== 0;
    if (!(t || !r || tg(e))) {
      n[eP] = p_1(e, e1[eP]);
      setEI(n);
      setEA(undefined);
    }
    if (!t) {
      setE_(
        (showTime ? p_1(e, e1[eP]) : e).locale(locale.dayjsLocale).format(ej),
      );
    }
  }
  function tO() {
    setEI(undefined);
    setE_(undefined);
  }
  function tC(e) {
    return e && cy(e) && e.length === 2 && W5(e[0]) && W5(e[1]);
  }
  function tN(e) {
    return tC(typeof e.value === "function" && e.value());
  }
  function tP() {
    clearTimeout(eyRef.current);
    clearTimeout(ewRef.current);
    eyRef.current = null;
    ewRef.current = null;
  }
  function t$(e) {
    tP();
    eyRef.current = setTimeout(() => {
      if (tN(e)) {
        let t = de(e.value(), ej, utcOffset, timezone);
        setEV(t);
        setRangePageShowDates(t);
      }
    }, 50);
  }
  function tk() {
    tP();
    ewRef.current = setTimeout(() => {
      setEV(undefined);
      setRangePageShowDates(
        eD || eZ || [hY(utcOffset, timezone), hY(utcOffset, timezone)],
      );
    }, 50);
  }
  function tA(e) {
    if (onSelectShortcut) {
      onSelectShortcut(e);
    }
    if (tN(e)) {
      th(de(e.value(), ej, utcOffset, timezone));
    }
  }
  function tE(e, t, n = 1) {
    let r = +(e !== "prev");
    let o = [...pageShowDates];
    if (e === "prev") {
      o[r] = vX.subtract(pageShowDates[r], n, t);
    }
    if (e === "next") {
      o[r] = vX.add(pageShowDates[r], n, t);
    }
    setRangePageShowDates((o = ts(o[r], mode, e)));
  }
  function t_(e = mode) {
    if (e === "date" || e === "week") {
      return {
        onPrev: () => tE("prev", "month"),
        onNext: () => tE("next", "month"),
        onSuperPrev: () => tE("prev", "year"),
        onSuperNext: () => tE("next", "year"),
      };
    }
    if (e === "month" || e === "quarter") {
      return {
        onSuperPrev: () => tE("prev", "year"),
        onSuperNext: () => tE("next", "year"),
      };
    }
    if (e === "year") {
      return {
        onSuperPrev: () => tE("prev", "year", 10),
        onSuperNext: () => tE("next", "year", 10),
      };
    }
  }
  function tM() {
    setEK(!eK);
  }
  function tT(e) {
    let t = A_5(
      `${ef}-container`,
      {
        [`${ef}-panel-only`]: e,
        [`${ef}-container-shortcuts-placement-left`]:
          cy(shortcuts) && shortcutsPlacementLeft,
        [`${ef}-container-rtl`]: rtl,
      },
      e ? className : "",
    );
    let n = {
      prefixCls: getPrefixCls("picker"),
      showTime,
      shortcuts,
      onMouseEnterShortcut: t$,
      onMouseLeaveShortcut: tk,
      onSelectShortcut: tA,
    };
    let l =
      (showTime && eL[0] === "date" && eL[1] === "date") ||
      extra ||
      (cy(shortcuts) && shortcuts.length && !shortcutsPlacementLeft);
    let s = i.jsxs(i.Fragment, {
      children: [
        i.jsx(
          useEb,
          o._(r._({}, b, t_()), {
            getHeaderOperations: t_,
            setRangePageShowDates,
            pageShowDates,
            value: eQ,
            format: ej,
            onSelectPanel,
            onMouseEnterCell: tj,
            onMouseLeaveCell: tO,
            disabledDate: (e) => td(e),
            disabledTime,
            mode,
            localeName: locale.dayjsLocale,
            showTime,
            timeValues: eV || e1,
            onTimePickerSelect: tb,
            popupVisible: eG,
            disabledTimePickerIndex,
            isTimePanel: eK,
            valueShowHover,
            panelModes: eL,
            setPanelModes: setEL,
          }),
        ),
        l &&
          i.jsx(
            M,
            o._(r._({}, n), {
              DATEPICKER_LOCALE: locale.DatePicker,
              disabled: !(cy(eQ) && eQ[0] && eQ[1]),
              onClickConfirmBtn: tm,
              extra,
              shortcutsPlacementLeft,
              onClickSelectTimeBtn: tM,
              isTimePanel: eK,
            }),
          ),
      ],
    });
    let a = shortcutsPlacementLeft
      ? i.jsxs(i.Fragment, {
          children: [
            i.jsx(
              E,
              r._(
                {
                  ref: egRef,
                },
                n,
              ),
            ),
            i.jsx("div", {
              ref: evRef,
              className: `${ef}-panel-wrapper`,
              children: s,
            }),
          ],
        })
      : s;
    let c = typeof panelRender === "function" ? panelRender(a) : a;
    return i.jsx("div", {
      className: t,
      onClick: () => ta(),
      style: e ? style : {},
      children: c,
    });
  }
  l.useEffect(() => {
    setED(undefined);
    setEI(undefined);
  }, [tt, tn]);
  let tS = b.size || size;
  let placeholder_1 = cy(placeholder)
    ? placeholder
    : locale.DatePicker.placeholders[mode];
  let tR =
    icons && icons.inputSuffix === null
      ? null
      : (icons && icons.inputSuffix) ||
        (showTime ? i.jsx(k, {}) : i.jsx(N, {}));
  let disabled_1 = cy(disabled) ? disabled[0] && disabled[1] : disabled;
  return i.jsx(SContext.Provider, {
    value: {
      utcOffset,
      timezone,
      weekStart: eh,
    },
    children:
      triggerElement === null
        ? tT(true)
        : i.jsx(
            A_1,
            o._(
              r._(
                {
                  popup: tT,
                  trigger: "click",
                  clickToClose: false,
                  position,
                  disabled: disabled_1,
                  popupAlign: {
                    bottom: 4,
                  },
                  getPopupContainer,
                  onVisibleChange: function (e) {
                    if (e) {
                      setTimeout(() => ta());
                      tc(e);
                    } else {
                      tc(false);
                    }
                  },
                  popupVisible: eG,
                  classNames: "slideDynamicOrigin",
                  unmountOnExit,
                },
                triggerProps,
              ),
              {
                children:
                  triggerElement ||
                  i.jsx(
                    K,
                    o._(
                      r._({}, t_1(b), {
                        style,
                        className,
                        popupVisible: eG,
                        format: ej,
                        disabled,
                        error,
                        size: tS,
                        onPressEnter: function () {
                          if (cy(eD) && eD.length) {
                            if (eA && !tp(eA)) {
                              setEA(undefined);
                            } else if (eq !== 2) {
                              tw();
                            } else if (eq === 2) {
                              th(eD);
                            }
                          } else if (eG) {
                            tc(false);
                          }
                        },
                        onClear: function (e) {
                          e.stopPropagation();
                          let t = [...eQ];
                          if (eC) {
                            t[eO] = undefined;
                          } else {
                            t = undefined;
                          }
                          setET(t);
                          setED(t);
                          tf(t);
                          if (b.onClear) {
                            b.onClear();
                          }
                        },
                        suffixIcon: tR,
                        editable,
                        allowClear,
                      }),
                      {
                        ref: emRef,
                        placeholder: placeholder_1,
                        value: eD || eZ,
                        onChange: function (e) {
                          let t = [...(eQ || [])];
                          let value = e.target.value;
                          setEA(value);
                          if (!eG) {
                            tc(true);
                          }
                          if (tp(value)) {
                            t[eP] = de(value, ej);
                            setED(t);
                            setRangePageShowDates(t);
                            setEA(undefined);
                          }
                        },
                        inputValue: e_ || eA,
                        changeFocusedInputIndex,
                        focusedInputIndex: eP,
                        isPlaceholder: !!e_,
                        separator,
                      },
                    ),
                  ),
              },
            ),
          ),
  });
};
function ej(picker, t) {
  let n;
  n = class extends l.Component {
    render() {
      return i.jsx(
        useF,
        o._(r._({}, this.props), {
          picker,
        }),
      );
    }
  };
  n.displayName = t;
  return n;
}
useEw.displayName = "RangePicker";
let eO = ej(i.jsx(useEm, {}), "DatePicker");
Object.assign(eO, {
  MonthPicker: ej(i.jsx(useEf, {}), "MonthPicker"),
  YearPicker: ej(i.jsx(useEp, {}), "YearPicker"),
  WeekPicker: ej(i.jsx(useEv, {}), "WeekPicker"),
  QuarterPicker: ej(i.jsx(useEg, {}), "QuarterPicker"),
  RangePicker: useEw,
});
var eC = eO;
export { eC as A };
