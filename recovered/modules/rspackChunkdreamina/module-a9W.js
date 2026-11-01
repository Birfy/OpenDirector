import r from "oa";
import o from "bk";
import i from "z8";
import l from "bT";
import s from "Po";
import { QO } from "./module-mY_2.js";
import { A as A_1 } from "./module-Ww_2.js";
import { de, hY, vX, yf } from "./module-UbJ.js";
import { Wf } from "./module-uRn.js";
import p from "./module-vxz.js";
import { cy } from "./module-V9.js";
import { A as A_2 } from "./module-K7F.js";
import N from "RbS";
import { A as A_3 } from "./module-R8.js";
import $ from "UX";
import { A as A_4 } from "./module-TD_2.js";
import { A } from "./module-O5P.js";
import { A as A_5 } from "./module-a1x.js";
import { A as A_6 } from "./module-RpG.js";
import { A as A_7 } from "./module-k6B.js";
import { t as t_1 } from "./module-rT.js";
const f = function (e) {
  let { prefixCls, dayStartOfWeek, isWeek, CALENDAR_LOCALE, panel, innerMode } =
    e;
  let a = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  if (dayStartOfWeek === 0) {
    a.unshift("sunday");
  } else {
    a.push("sunday");
  }
  if (isWeek) {
    a.unshift("self");
  }
  let c =
    CALENDAR_LOCALE.week[panel || innerMode === "year" ? "short" : "long"];
  return i.jsx("div", {
    className: `${prefixCls}-week-list`,
    children: a.map((e) =>
      i.jsx(
        "div",
        {
          className: `${prefixCls}-week-list-item`,
          children: c[e],
        },
        e,
      ),
    ),
  });
};
function m(e, t) {
  if (e && cy(e)) {
    return e[t];
  }
}
function v(e) {
  let {
    prefixCls,
    mergedValue,
    rangeValues,
    hoverRangeValues,
    panel,
    isSameTime,
    innerMode,
  } = e;
  function a(time, t, n) {
    return (
      !!t &&
      !!n &&
      (isSameTime(time, t) ||
        isSameTime(time, n) ||
        time.isBetween(t, n, null, "[]"))
    );
  }
  return function (e, d) {
    let p = m(rangeValues, 0);
    let f = m(rangeValues, 1);
    let h = m(hoverRangeValues, 0);
    let v = m(hoverRangeValues, 1);
    let g = !e.isPrev && !e.isNext;
    let y = g && panel;
    let b = y && p && isSameTime(e.time, p);
    let x = y && f && isSameTime(e.time, f);
    let w = h && p && h.isBefore(p);
    let j = f && v && v.isAfter(f);
    let O = (w && b) || (j && x);
    let C = isSameTime(e.time, hY());
    if (!(panel || innerMode !== "year")) {
      C = hY().isSame(e.time, "date");
    }
    return A_1(`${prefixCls}-cell`, {
      [`${prefixCls}-cell-in-view`]: g,
      [`${prefixCls}-cell-today`]: C,
      [`${prefixCls}-cell-selected`]:
        mergedValue && isSameTime(e.time, mergedValue),
      [`${prefixCls}-cell-range-start`]: b,
      [`${prefixCls}-cell-range-end`]: x,
      [`${prefixCls}-cell-in-range`]: y && a(e.time, p, f),
      [`${prefixCls}-cell-in-range-near-hover`]: O,
      [`${prefixCls}-cell-hover-range-start`]: y && h && isSameTime(e.time, h),
      [`${prefixCls}-cell-hover-range-end`]: y && v && isSameTime(e.time, v),
      [`${prefixCls}-cell-hover-in-range`]: y && a(e.time, h, v),
      [`${prefixCls}-cell-disabled`]: d,
    });
  };
}
let g = (e) => ({
  year: e.year(),
  month: e.month() + 1,
  date: e.date(),
  day: e.day(),
  time: e,
});
function y(e, t) {
  let { dayStartOfWeek = 0, isWeek } = e;
  let l = {
    start: g(vX.startOf(t, "month")),
    end: g(vX.endOf(t, "month")),
    days: t.daysInMonth(),
  };
  let s = Wf(42).map(() => ({}));
  let a = dayStartOfWeek === 0 ? l.start.day : (l.start.day || 7) - 1;
  s[a] = o._(r._({}, l.start), {
    isCurrent: true,
  });
  for (let e = 0; e < a; e++) {
    s[a - e - 1] = o._(r._({}, g(vX.subtract(l.start.time, e + 1, "day"))), {
      isPrev: true,
    });
  }
  for (let e = 0; e < 42 - a - 1; e++) {
    s[a + e + 1] = o._(r._({}, g(vX.add(l.start.time, e + 1, "day"))), {
      isCurrent: e < l.days,
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
}
const b = function (e) {
  let {
    prefixCls,
    cell,
    value,
    pageData,
    mergedValue,
    isWeek,
    disabledDate,
    selectHandler,
    panel,
    innerMode,
    dateRender,
    onMouseEnterCell,
    onMouseLeaveCell,
    dateInnerContent,
    mergedPageShowDate,
    dayStartOfWeek,
    CALENDAR_LOCALE,
  } = e;
  let k = mergedPageShowDate.year();
  let A = v(
    o._(r._({}, e), {
      isSameTime: (e, t) => e.isSame(t, "day"),
    }),
  );
  let E = pageData;
  if (typeof value === "number") {
    E = y(e, yf(`${k}-${p.C(value + 1, 2, "0")}-01`));
  }
  return i.jsxs("div", {
    className: cell ? `${prefixCls}-month-cell` : `${prefixCls}-month`,
    children: [
      i.jsx(f, {
        prefixCls,
        dayStartOfWeek,
        isWeek,
        CALENDAR_LOCALE,
        panel,
        innerMode,
      }),
      i.jsx("div", {
        className: `${prefixCls}-month-cell-body`,
        children: E.map((e, n) =>
          i.jsx(
            "div",
            {
              className: A_1(`${prefixCls}-month-row`, {
                [`${prefixCls}-row-week`]: isWeek,
              }),
              children: e.map((e, n) => {
                if (e.time) {
                  let s =
                    typeof disabledDate === "function" && disabledDate(e.time);
                  let onClick = () => selectHandler(e.time, s);
                  let c = isWeek
                    ? {
                        onClick,
                      }
                    : {};
                  let u = isWeek
                    ? {}
                    : {
                        onClick,
                      };
                  return i.jsx(
                    "div",
                    o._(
                      r._(
                        {
                          className: A(e, s),
                          onMouseEnter: () =>
                            onMouseEnterCell && onMouseEnterCell(e.time, s),
                          onMouseLeave: () =>
                            onMouseLeaveCell && onMouseLeaveCell(e.time, s),
                        },
                        c,
                      ),
                      {
                        children: dateRender
                          ? l.cloneElement(dateRender(e.time), u)
                          : i.jsxs(
                              "div",
                              o._(
                                r._(
                                  {
                                    className: `${prefixCls}-date`,
                                  },
                                  u,
                                ),
                                {
                                  children: [
                                    i.jsx("div", {
                                      className: `${prefixCls}-date-value`,
                                      children: panel
                                        ? e.date
                                        : i.jsx("div", {
                                            className: `${prefixCls}-date-circle`,
                                            children: e.date,
                                          }),
                                    }),
                                    !panel &&
                                      innerMode !== "year" &&
                                      i.jsx("div", {
                                        className: `${prefixCls}-date-content`,
                                        children:
                                          dateInnerContent &&
                                          dateInnerContent(e.time),
                                      }),
                                  ],
                                },
                              ),
                            ),
                      },
                    ),
                    n,
                  );
                }
                if ("weekOfYear" in e) {
                  let r = mergedValue && mergedValue.year();
                  let o = mergedValue && mergedValue.month() + 1;
                  let l = mergedValue && mergedValue.week();
                  let s =
                    mergedValue &&
                    e.weekRows.find((e) => e.year === r && e.month === o) &&
                    l === e.weekOfYear;
                  return i.jsx(
                    "div",
                    {
                      className: A_1(
                        `${prefixCls}-cell`,
                        `${prefixCls}-cell-week`,
                        {
                          [`${prefixCls}-cell-selected-week`]: s,
                          [`${prefixCls}-cell-in-range`]: s,
                        },
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
            n,
          ),
        ),
      }),
    ],
  });
};
let x = [
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
].map((name, t) => ({
  name,
  value: t,
}));
let w = [, , ,];
for (let e = 0; e < 3; e++) {
  w[e] = x.slice(4 * e, 4 * (e + 1));
}
let j = [, , , ,];
for (let e = 0; e < 4; e++) {
  j[e] = x.slice(3 * e, 3 * (e + 1));
}
const O = function (e) {
  let {
    prefixCls,
    mergedPageShowDate,
    panel,
    onMouseEnterCell,
    disabledDate,
    monthRender,
    selectHandler,
    innerMode,
    CALENDAR_LOCALE,
  } = e;
  let g = v(
    o._(r._({}, e), {
      isSameTime: (e, t) => e.isSame(t, "month"),
    }),
  );
  let y = mergedPageShowDate.year();
  let x = panel ? j : w;
  return i.jsx("div", {
    className: `${prefixCls}-year`,
    children: x.map((n, v) =>
      i.jsx(
        "div",
        {
          className: `${prefixCls}-year-row`,
          children: n.map((n) => {
            let v = yf(`${y}-${p.C(n.value + 1, 2, "0")}-01`);
            let x = typeof disabledDate === "function" && disabledDate(v);
            let w = panel
              ? {
                  onClick: () => selectHandler(v, x),
                }
              : {};
            return i.jsx(
              "div",
              {
                className: g(
                  o._(r._({}, n), {
                    time: v,
                  }),
                  x,
                ),
                onMouseEnter: () => onMouseEnterCell && onMouseEnterCell(v, x),
                children: monthRender
                  ? l.cloneElement(monthRender(v), w)
                  : panel
                    ? i.jsx(
                        "div",
                        o._(
                          r._(
                            {
                              className: `${prefixCls}-date`,
                            },
                            w,
                          ),
                          {
                            children: i.jsx("div", {
                              className: `${prefixCls}-date-value`,
                              children: CALENDAR_LOCALE.month.short[n.name],
                            }),
                          },
                        ),
                      )
                    : i.jsxs("div", {
                        className: `${prefixCls}-month-with-days`,
                        children: [
                          i.jsx("div", {
                            className: `${prefixCls}-month-title`,
                            children: CALENDAR_LOCALE.month.long[n.name],
                          }),
                          i.jsx(
                            b,
                            o._(r._({}, e), {
                              cell: true,
                              value: n.value,
                              innerMode,
                            }),
                          ),
                        ],
                      }),
              },
              n.value,
            );
          }),
        },
        v,
      ),
    ),
  });
};
function getPopupContainer(e) {
  return e.parentElement;
}
const useComponent = function (e) {
  let {
    prefixCls,
    changePageShowDate,
    headerValueFormat,
    mergedPageShowDate,
    CALENDAR_LOCALE,
    move,
    innerMode,
    changeMode,
    headerType,
    onChangeYear,
    onChangeMonth,
    modes,
  } = e;
  let b = A_2();
  let x = cy(modes)
    ? modes.map((e) => ({
        label: CALENDAR_LOCALE.view[e],
        value: e,
      }))
    : [];
  let w = mergedPageShowDate.year();
  let j = mergedPageShowDate.month() + 1;
  let O = l.useMemo(() => {
    let e = [w];
    for (let t = 1; t <= 10; t++) {
      e.unshift(w - t);
    }
    for (let t = 1; t < 10; t++) {
      e.push(w + t);
    }
    return e;
  }, [w]);
  return i.jsxs("div", {
    className: `${prefixCls}-header`,
    children: [
      i.jsxs("div", {
        className: `${prefixCls}-header-left`,
        children: [
          headerType === "select"
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx(N.A, {
                    size: "small",
                    className: `${prefixCls}-header-value-year`,
                    value: w,
                    options: O,
                    onChange: onChangeYear,
                    getPopupContainer,
                  }),
                  innerMode === "month" &&
                    i.jsx(N.A, {
                      size: "small",
                      className: `${prefixCls}-header-value-month`,
                      value: j,
                      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                      onChange: onChangeMonth,
                      getPopupContainer,
                    }),
                ],
              })
            : i.jsxs(i.Fragment, {
                children: [
                  i.jsx(
                    "div",
                    o._(
                      r._(
                        {
                          className: `${prefixCls}-header-icon`,
                          role: "button",
                          tabIndex: 0,
                          onClick: () => changePageShowDate("prev", innerMode),
                        },
                        b({
                          onPressEnter: () =>
                            changePageShowDate("prev", innerMode),
                        }),
                      ),
                      {
                        children: i.jsx(A_4, {}),
                      },
                    ),
                  ),
                  i.jsx("div", {
                    className: `${prefixCls}-header-value`,
                    children: mergedPageShowDate.format(headerValueFormat),
                  }),
                  i.jsx(
                    "div",
                    o._(
                      r._(
                        {
                          role: "button",
                          tabIndex: 0,
                          className: `${prefixCls}-header-icon`,
                          onClick: () => changePageShowDate("next", innerMode),
                        },
                        b({
                          onPressEnter: () =>
                            changePageShowDate("next", innerMode),
                        }),
                      ),
                      {
                        children: i.jsx(A, {}),
                      },
                    ),
                  ),
                ],
              }),
          i.jsx(A_3, {
            size: "small",
            onClick: () => move(hY()),
            children: CALENDAR_LOCALE.today,
          }),
        ],
      }),
      i.jsx("div", {
        className: `${prefixCls}-header-right`,
        children: i.jsx($.A.Group, {
          size: "small",
          type: "button",
          options: x,
          onChange: changeMode,
          value: innerMode,
        }),
      }),
    ],
  });
};
const S = function (e) {
  let {
    prefixCls,
    changePageShowDate,
    headerValueFormat,
    mergedPageShowDate,
    innerMode,
    panelOperations,
  } = e;
  let a = (e) => !cy(panelOperations) || panelOperations.indexOf(e) > -1;
  let u = a("double-left");
  let d = a("left") && innerMode !== "year";
  let p = a("double-right");
  let f = a("right") && innerMode !== "year";
  let m = (e) =>
    A_1(`${prefixCls}-header-icon`, {
      [`${prefixCls}-header-icon-hidden`]: !e,
    });
  return i.jsxs("div", {
    className: `${prefixCls}-header`,
    children: [
      i.jsx("div", {
        className: m(u),
        onClick: () => u && changePageShowDate("prev", "year"),
        children: u && i.jsx(A_5, {}),
      }),
      i.jsx("div", {
        className: m(d),
        onClick: () => d && changePageShowDate("prev", "month"),
        children: d && i.jsx(A_4, {}),
      }),
      i.jsx("div", {
        className: `${prefixCls}-header-value`,
        children: mergedPageShowDate.format(headerValueFormat),
      }),
      i.jsx("div", {
        className: m(f),
        onClick: () => f && changePageShowDate("next", "month"),
        children: f && i.jsx(A, {}),
      }),
      i.jsx("div", {
        className: m(p),
        onClick: () => p && changePageShowDate("next", "year"),
        children: p && i.jsx(A_6, {}),
      }),
    ],
  });
};
let I = {
  dayStartOfWeek: 0,
  panelWidth: 265,
  defaultMode: "month",
  headerType: "button",
  modes: ["month", "year"],
};
function useZ(e) {
  let { getPrefixCls, locale, componentConfig, rtl } = l.useContext(QO);
  let f = A_7(
    e,
    I,
    componentConfig == null ? undefined : componentConfig.Calendar,
  );
  let {
    style,
    className,
    dayStartOfWeek,
    panel,
    locale: locale_1,
    panelWidth,
    panelTodayBtn,
    defaultPageShowDate,
    value,
    pageShowDate,
    defaultValue,
    mode,
    defaultMode,
    onChange,
    onPanelChange,
    headerRender,
    headerType,
    modes,
    panelOperations,
  } = f;
  let CALENDAR_LOCALE = s.A(locale.Calendar, locale_1);
  let prefixCls = getPrefixCls("calendar");
  let [L, setL] = l.useState(mode || defaultMode);
  let innerMode = mode || L;
  let Y =
    innerMode !== "month" && (innerMode !== "year" || panel)
      ? "YYYY-MM"
      : "YYYY-MM-DD";
  let [G, setG] = l.useState(de(value || defaultValue, Y));
  let [Z, setZ] = l.useState(de(defaultPageShowDate, Y) || G || hY());
  let q = de(pageShowDate, Y) || Z;
  let X = "value" in f ? de(value, Y) : G;
  let pageData = l.useMemo(
    () => y(f, q),
    [q.toString(), innerMode, dayStartOfWeek],
  );
  function ee(e) {
    setG(e);
    if (onChange) {
      onChange(e);
    }
    onChangePageDate(e);
  }
  function onChangePageDate(e) {
    setZ(e);
    if (onPanelChange) {
      onPanelChange(e);
    }
  }
  function selectHandler(e, t) {
    if (!t) {
      ee(e);
    }
  }
  let headerValueFormat = "";
  function eo(e) {
    setL(e);
  }
  if (innerMode === "month") {
    headerValueFormat = CALENDAR_LOCALE.formatMonth;
  } else if (innerMode === "year") {
    headerValueFormat = CALENDAR_LOCALE.formatYear;
  }
  let className_1 = A_1(
    prefixCls,
    innerMode === "month"
      ? `${prefixCls}-mode-month`
      : `${prefixCls}-mode-year`,
    {
      [`${prefixCls}-panel`]:
        panel && (innerMode === "month" || innerMode === "year"),
      [`${prefixCls}-rtl`]: rtl,
    },
    className,
  );
  let el = panel
    ? {
        width: panelWidth,
      }
    : {};
  let es = {
    prefixCls,
    changePageShowDate: function (e, t) {
      let n;
      if (e === "prev") {
        n = vX.subtract(q, 1, t);
      }
      if (e === "next") {
        n = vX.add(q, 1, t);
      }
      setZ(n);
      if (onPanelChange) {
        onPanelChange(n);
      }
    },
    headerValueFormat,
    mergedPageShowDate: q,
    modes,
    innerMode,
    panelOperations,
  };
  return i.jsxs(
    "div",
    o._(
      r._(
        {
          className: className_1,
          style: r._({}, style, el),
        },
        t_1(f),
      ),
      {
        children: [
          typeof headerRender === "function"
            ? headerRender({
                value: X,
                pageShowDate: q,
                onChangeMode: eo,
                onChange: ee,
                onChangePageDate,
              })
            : panel
              ? i.jsx(S, r._({}, es))
              : i.jsx(
                  useComponent,
                  o._(r._({}, es), {
                    CALENDAR_LOCALE,
                    move: ee,
                    innerMode,
                    changeMode: eo,
                    onChangeYear: function (e) {
                      let t = vX.set(q, "year", e);
                      setZ(t);
                      if (onPanelChange) {
                        onPanelChange(t);
                      }
                    },
                    onChangeMonth: function (e) {
                      let t = vX.set(q, "month", e - 1);
                      setZ(t);
                      if (onPanelChange) {
                        onPanelChange(t);
                      }
                    },
                    headerType,
                  }),
                ),
          innerMode === "month" &&
            i.jsx("div", {
              className: `${prefixCls}-body`,
              children: i.jsx(
                b,
                o._(r._({}, f), {
                  prefixCls,
                  pageData,
                  mergedValue: X,
                  innerMode,
                  selectHandler,
                  mergedPageShowDate: q,
                  CALENDAR_LOCALE,
                }),
              ),
            }),
          innerMode === "year" &&
            i.jsx("div", {
              className: `${prefixCls}-body`,
              children: i.jsx(
                O,
                o._(r._({}, f), {
                  prefixCls,
                  pageData,
                  mergedPageShowDate: q,
                  innerMode,
                  mergedValue: X,
                  selectHandler,
                  CALENDAR_LOCALE,
                }),
              ),
            }),
          panelTodayBtn &&
            panel &&
            i.jsx("div", {
              className: `${prefixCls}-footer-btn-wrapper`,
              children: CALENDAR_LOCALE.today,
            }),
        ],
      },
    ),
  );
}
useZ.displayName = "Calendar";
var V = useZ;
export { V as A };
