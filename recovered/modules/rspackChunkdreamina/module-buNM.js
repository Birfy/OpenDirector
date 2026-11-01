import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import a from "Ed8";
import { A as A_1 } from "./module-Sc_2.js";
import { A as A_2 } from "./module-Ww_2.js";
import { AU, on } from "./module-a3_2.js";
import { Et, Gv, Kg, RI, Tn, b0, cy } from "./module-V9.js";
import { A as A_3 } from "./module-RwR.js";
import { QO } from "./module-mY_2.js";
import { A as A_4 } from "./module-vC_2.js";
import { A as A_5 } from "./module-K7F.js";
import { D } from "./module-kkV.js";
import { A as A_6 } from "./module-lA.js";
import { A } from "./module-k6B.js";
import { A as A_7 } from "./module-rfq.js";
const g = s.memo(function (e) {
  let {
    style,
    disabled,
    prefixCls,
    value,
    isActive,
    vertical,
    tooltipVisible,
    tooltipPosition,
    formatTooltip,
    getTooltipContainer,
    onMoving,
    onMoveEnd,
    onMoveBegin,
  } = e;
  let C = A_5();
  let [N, P] = A_4(false, {
    value: tooltipVisible,
  });
  let { getPrefixCls } = s.useContext(QO);
  let position = s.useMemo(
    () => tooltipPosition || (vertical ? "left" : "top"),
    [tooltipPosition, vertical],
  );
  let ARef = s.useRef(null);
  let ERef = s.useRef(false);
  let _Ref = s.useRef(false);
  let MRef = s.useRef(null);
  function onMouseLeave() {
    ERef.current = false;
    if (!_Ref.current) {
      R();
      ARef.current = setTimeout(() => {
        I(false);
      }, 200);
    }
  }
  function S(e) {
    _Ref.current = true;
    if (e.type === "touchstart") {
      e.clientY = e.touches[0].clientY;
      e.clientX = e.touches[0].clientX;
    }
    if (Tn(onMoving)) {
      onMoving(e.clientX, e.clientY);
    }
  }
  function D() {
    _Ref.current = false;
    R();
    AU(window, "mousemove", S);
    AU(window, "touchmove", S);
    AU(window, "mouseup", D);
    AU(window, "touchend", D);
    AU(window, "contextmenu", D);
    I(ERef.current);
    if (Tn(onMoveEnd)) {
      onMoveEnd();
    }
  }
  function R() {
    if (ARef.current) {
      clearTimeout(ARef.current);
      ARef.current = null;
    }
  }
  function I(t) {
    if (!_Ref.current) {
      P("tooltipVisible" in e ? tooltipVisible : t);
    }
  }
  function onMouseEnter() {
    ERef.current = true;
    R();
  }
  let V = s.useMemo(() => {
    if (Tn(formatTooltip)) {
      return formatTooltip(value);
    }
    return value;
  }, [formatTooltip, value]);
  s.useEffect(() => {
    if (MRef && MRef.current) {
      MRef.current.updatePopupPosition();
    }
  }, [value]);
  return l.jsx(A_3, {
    style: {
      maxWidth: 350,
    },
    classNames: "zoomInFadeOut",
    duration: {
      enter: 300,
      exit: 100,
    },
    showArrow: false,
    popupAlign: {
      left: 8,
      right: 8,
      top: 8,
      bottom: 8,
    },
    ref: MRef,
    popup: () => {
      let e;
      e = getPrefixCls("tooltip");
      return l.jsx("div", {
        className: A_2(
          `${e}-content`,
          `${e}-content-${position}`,
          `${prefixCls}-tooltip-content`,
        ),
        onMouseLeave,
        onMouseEnter,
        onClick: (e) => {
          e.stopPropagation();
        },
        children: l.jsx("div", {
          className: `${e}-content-inner`,
          children: V,
        }),
      });
    },
    popupVisible: N,
    disabled: tooltipVisible === false,
    getPopupContainer: getTooltipContainer,
    position,
    childrenPrefix: getPrefixCls("tooltip"),
    children: l.jsx(
      "div",
      r._(
        {
          className: A_2(`${prefixCls}-button`, {
            [`${prefixCls}-button-active`]: isActive,
          }),
          onMouseDown: function (e) {
            let t;
            e.stopPropagation();
            if (!disabled) {
              e.preventDefault();
              if ((t = document.activeElement) && t.blur) {
                t.blur();
              }
              if (Tn(onMoveBegin)) {
                onMoveBegin();
              }
              on(window, "mousemove", S);
              on(window, "touchmove", S);
              on(window, "mouseup", D);
              on(window, "touchend", D);
              on(window, "contextmenu", D);
            }
          },
          onMouseEnter: function () {
            ERef.current = true;
            R();
            if (!N) {
              ARef.current = setTimeout(() => {
                I(true);
              }, 50);
            }
          },
          onMouseLeave,
          style,
          role: "slider",
          "aria-valuemax": e.maxValue,
          "aria-valuemin": e.minValue,
          "aria-valuenow": value,
          "aria-disabled": !!disabled,
          tabIndex: disabled ? -1 : 0,
          "aria-valuetext": Kg(V) || Et(V) ? String(V) : undefined,
        },
        C({
          onArrowRight: (t) => {
            var n;
            t.preventDefault();
            if ((n = e.onArrowEvent) != null) {
              n.call(e, "addition");
            }
          },
          onArrowUp: (t) => {
            var n;
            t.preventDefault();
            if ((n = e.onArrowEvent) != null) {
              n.call(e, "addition");
            }
          },
          onArrowLeft: (t) => {
            var n;
            t.preventDefault();
            if ((n = e.onArrowEvent) != null) {
              n.call(e, "subtraction");
            }
          },
          onArrowDown: (t) => {
            var n;
            t.preventDefault();
            if ((n = e.onArrowEvent) != null) {
              n.call(e, "subtraction");
            }
          },
        }),
      ),
    ),
  });
});
function y(e) {
  return `${100 * e}%`;
}
function b(e, t) {
  let n = Number(e);
  t.sort((e, t) => e - t);
  return n >= t[0] && n <= t[1];
}
function x(e, intervalConfigs) {
  let n = intervalConfigs.find((t) => e >= t.begin && e <= t.end);
  if (n) {
    let { beginOffset, begin, end, endOffset } = n;
    let l = ((e, t) => {
      let n = Number(e);
      if (t && !isNaN(n)) {
        let [e, r] = t;
        return a.Qr(a.Rd(n, e), a.Rd(r, e));
      }
      return 0;
    })(e, [begin, end]);
    let s = a.Rd(endOffset, beginOffset);
    let c = a.Hn(l, s);
    return a.tY(beginOffset, c);
  }
}
const w = s.memo(function (e) {
  let { data = [], vertical, prefixCls, reverse, intervalConfigs } = e;
  if (data.length) {
    return l.jsx("div", {
      className: `${prefixCls}-marks`,
      children: data.map(({ key, content }) => {
        var a;
        var c;
        let u = y(x(Number(key), intervalConfigs));
        let d = null;
        if (Gv(content) && ((a = content.text) || a === 0)) {
          d = content.text;
        } else if (content || content === 0) {
          d = content;
        }
        return (
          ((c = d) || c === 0) &&
          l.jsx(
            "div",
            {
              className: `${prefixCls}-marks-text`,
              "aria-hidden": true,
              style: vertical
                ? {
                    [reverse ? "top" : "bottom"]: u,
                  }
                : {
                    [reverse ? "right" : "left"]: u,
                  },
              onMouseDown: (n) => {
                n.stopPropagation();
                if (Tn(e.onMouseDown)) {
                  e.onMouseDown(parseFloat(key));
                }
              },
              children: d,
            },
            key,
          )
        );
      }),
    });
  }
  return null;
});
const j = s.memo(function (e) {
  let {
    data = [],
    value = [],
    vertical,
    prefixCls,
    reverse,
    intervalConfigs,
  } = e;
  if (data.length) {
    return l.jsx("div", {
      className: `${prefixCls}-dots`,
      children: data.map(({ key, content }) => {
        let d = y(x(Number(key), intervalConfigs));
        return l.jsx(
          "div",
          {
            className: `${prefixCls}-dot-wrapper`,
            style: r._(
              {},
              vertical
                ? {
                    [reverse ? "top" : "bottom"]: d,
                  }
                : {
                    [reverse ? "right" : "left"]: d,
                  },
            ),
            onMouseDown: (n) => {
              n.stopPropagation();
              if (Tn(e.onMouseDown)) {
                e.onMouseDown(parseFloat(key));
              }
            },
            children:
              Gv(content) && content.dot
                ? content.dot
                : l.jsx("div", {
                    className: A_2(`${prefixCls}-dot`, {
                      [`${prefixCls}-dot-active`]: b(key, value),
                    }),
                  }),
          },
          key,
        );
      }),
    });
  }
  return null;
});
const N = s.memo(function (e) {
  let t;
  let n;
  let {
    value,
    range,
    min,
    max,
    step,
    disabled,
    prefixCls,
    onChange,
    extra = [],
  } = e;
  let g = {
    min,
    max,
    step,
    disabled,
  };
  let [y, setY] = s.useState(value);
  let xRef = s.useRef(value);
  let w = extra[0];
  let j = range ? extra[1] : extra[0];
  s.useEffect(() => {
    setY(value);
    xRef.current = value;
  }, [value]);
  let N = (e) => xRef.current.every((t, n) => t === e[n]);
  let P = (e) => {
    let t = (t) => {
      let n = e ? t[0] : t[1];
      if (w == null ? undefined : w.onChange) {
        if (w != null) {
          w.onChange(n);
        }
      }
      onChange(t);
    };
    return {
      onChange: (n, r) => {
        let o = ((e, t) => {
          let [n, r] = y;
          return [t ? e : n, t ? r : e];
        })(n, e);
        setY(o);
        if (r === D.arrow) {
          t(o);
          xRef.current = o;
        }
      },
      onBlur: () => {
        if (!N(y)) {
          t(y);
          xRef.current = y;
        }
      },
      onKeyDown: (e) => {
        let { key } = e;
        if (!(key !== "Enter" || N(y))) {
          t(y);
          xRef.current = y;
        }
      },
    };
  };
  return l.jsxs("div", {
    className: A_2(`${prefixCls}-input`, {
      [`${prefixCls}-input-group`]: range,
    }),
    children: [
      range && [
        s.createElement(
          A_6,
          r._(
            o._(
              r._(
                {
                  hideControl: true,
                },
                w,
                g,
              ),
              {
                value: (t = w == null ? undefined : w.value) != null ? t : y[0],
                key: 0,
                size: "small",
              },
            ),
            P(true),
          ),
        ),
        l.jsx(
          "div",
          {
            className: `${prefixCls}-input-range`,
            children: l.jsx("span", {
              className: `${prefixCls}-input-range-content`,
            }),
          },
          1,
        ),
      ],
      s.createElement(
        A_6,
        r._(
          o._(
            r._(
              {
                hideControl: true,
              },
              j,
              g,
            ),
            {
              key: 2,
              value: (n = j == null ? undefined : j.value) != null ? n : y[1],
              size: "small",
            },
          ),
          P(false),
        ),
      ),
    ],
  });
});
const P = s.memo(function (e) {
  let t;
  let n;
  let {
    value,
    range,
    min,
    max,
    step,
    disabled,
    prefixCls,
    onChange,
    extra = [],
  } = e;
  let g = {
    min,
    max,
    step,
    disabled,
  };
  let [y, setY] = s.useState(value);
  let x = extra[0];
  let w = range ? extra[1] : extra[0];
  s.useEffect(() => {
    setY(value);
  }, [value]);
  let j = (e) => {
    if (onChange != null) {
      onChange(e);
    }
  };
  return l.jsxs("div", {
    className: A_2(`${prefixCls}-input`, {
      [`${prefixCls}-input-group`]: range,
    }),
    onBlur: () => {
      setY([...value].sort((e, t) => e - t));
    },
    children: [
      range && [
        s.createElement(
          A_6,
          o._(
            r._(
              {
                hideControl: true,
              },
              x,
              g,
            ),
            {
              value: (t = x == null ? undefined : x.value) != null ? t : y[0],
              key: 0,
              size: "small",
              onChange: (e) => {
                j([e, y[1]]);
                if (x == null ? undefined : x.onChange) {
                  if (x != null) {
                    x.onChange(e);
                  }
                }
              },
            },
          ),
        ),
        l.jsx(
          "div",
          {
            className: `${prefixCls}-input-range`,
            children: l.jsx("span", {
              className: `${prefixCls}-input-range-content`,
            }),
          },
          1,
        ),
      ],
      s.createElement(
        A_6,
        o._(
          r._(
            {
              hideControl: true,
            },
            w,
            g,
          ),
          {
            key: 2,
            value: (n = w == null ? undefined : w.value) != null ? n : y[1],
            size: "small",
            onChange: (e) => {
              j([y[0], e]);
              if (w == null ? undefined : w.onChange) {
                if (w != null) {
                  w.onChange(e);
                }
              }
            },
          },
        ),
      ),
    ],
  });
});
const $ = s.memo(function (e) {
  let { min, max, value, prefixCls, vertical, reverse, intervalConfigs } = e;
  let p = new Map();
  let f = s.useMemo(() => {
    p.clear();
    intervalConfigs.forEach((e) =>
      ((e) => {
        let { step, begin, end } = e;
        let s = Math.floor((end - begin) / step);
        for (let e = 0; e <= s; e++) {
          let l = a.tY(e * step, begin);
          if (l <= min || l >= max) {
            continue;
          }
          let offset = y(x(l, intervalConfigs));
          p.set(offset, {
            offset,
            isActive: b(l, value),
          });
        }
      })(e),
    );
    return Array.from(p.values());
  }, [intervalConfigs]);
  return l.jsx("div", {
    className: `${prefixCls}-ticks`,
    children: f.map((e, t) =>
      l.jsx(
        "div",
        {
          className: A_2(`${prefixCls}-tick`, {
            [`${prefixCls}-tick-active`]: e.isActive,
          }),
          style: vertical
            ? {
                [reverse ? "top" : "bottom"]: e.offset,
              }
            : {
                [reverse ? "right" : "left"]: e.offset,
              },
        },
        t,
      ),
    ),
  });
});
const useK = (e) => {
  let { marks = {}, getIntervalConfig, max, min } = e;
  let { markIntervals, markList } = s.useMemo(() => {
    let e = Object.keys(marks)
      .filter((e) => Et(Number(e)) && Number(e) >= min && Number(e) <= max)
      .sort((e, t) => {
        if (Number(e) > Number(t)) {
          return 1;
        }
        return -1;
      });
    let markList_1 = e.map((e) => ({
      key: e,
      content: marks[e],
    }));
    let i = e.map((e) => Number(e));
    if (i.length === 0) {
      i = [min, max];
    } else {
      if (i[0] > min) {
        i.unshift(min);
        markList_1.unshift({
          key: `${min}`,
          content: "",
        });
      }
      if (i.slice(-1)[0] < max) {
        i.push(max);
        markList_1.push({
          key: `${max}`,
          content: "",
        });
      }
    }
    return {
      markIntervals: ((e) => {
        if (e.length < 2) {
          return [];
        }
        let t = [];
        for (let n = 1; n < e.length; n++) {
          let r = e[n - 1];
          let o = e[n];
          t.push([r, o]);
        }
        return t;
      })(i),
      markList: markList_1,
    };
  }, [marks, min, max]);
  return {
    intervalConfigs: s.useMemo(() => {
      if (!Tn(getIntervalConfig)) {
        return [
          {
            begin: min,
            end: max,
            step: e.step,
            beginOffset: 0,
            endOffset: 1,
            width: 1,
          },
        ];
      }
      let t = 1;
      let l = max - min;
      let s = markIntervals.map(([r, o], i) => {
        let s = (([t, r], o) => {
          let i = {
            step: e.step,
            width: 0,
          };
          let l = getIntervalConfig([t, r], o) || {};
          let { step } = l;
          let a = ((e) => {
            let t = parseFloat(e);
            let n = parseFloat(t > 1 ? (t / 100).toFixed(2) : t);
            if (!isNaN(n) && n >= 0 && n <= 1) {
              return n;
            }
          })(l.width);
          if (Et(step) && step) {
            i.step = step;
          }
          if (Et(a) && a) {
            i.width = a;
          }
          return i;
        })([r, o], i);
        let { width } = s;
        if (width) {
          width = Math.min(t, width);
          l -= o - r;
          t -= width;
        }
        return {
          width,
          step: s.step,
        };
      });
      if (s.every(({ width }) => width) && t) {
        let e = s[markIntervals.length - 1];
        e.width += t;
      }
      let a = [];
      markIntervals.forEach(([e, n], r) => {
        let { step, width } = s[r];
        let c = {
          begin: e,
          end: n,
          step,
          beginOffset: 0,
          endOffset: 0,
          width,
        };
        if (!c.width) {
          c.width = ((n - e) / l) * t;
        }
        let u = a.length - 1;
        if (a[u]) {
          c.beginOffset = a[u].endOffset;
        }
        c.endOffset = Math.min(1, c.beginOffset + c.width);
        a.push(c);
      });
      return a;
    }, [getIntervalConfig, markIntervals, max, min, e.step]),
    markList,
  };
};
const _ = s.memo(function (e) {
  let { centerOffset, prefixCls, vertical, reverse } = e;
  let i = `${100 * centerOffset}%`;
  return l.jsx("div", {
    className: A_2(`${prefixCls}-center-tick`),
    style: vertical
      ? {
          [reverse ? "top" : "bottom"]: i,
        }
      : {
          [reverse ? "right" : "left"]: i,
        },
  });
});
let M = {
  max: 100,
  min: 0,
  step: 1,
};
let T = s.forwardRef(function (e, ref) {
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let b = A(e, M, componentConfig == null ? undefined : componentConfig.Slider);
  let {
    className,
    style,
    tooltipVisible,
    tooltipPosition,
    disabled,
    min,
    max,
    range,
    step,
    showTicks,
    marks,
    onlyMarkValue,
    vertical,
    center,
    showInput,
    isInputDeferCommit,
    reverse,
    getIntervalConfig,
  } = b;
  let Z = i._(b, [
    "className",
    "style",
    "tooltipVisible",
    "tooltipPosition",
    "disabled",
    "min",
    "max",
    "range",
    "step",
    "showTicks",
    "marks",
    "onlyMarkValue",
    "vertical",
    "center",
    "showInput",
    "isInputDeferCommit",
    "reverse",
    "getIntervalConfig",
  ]);
  let Q = !!range;
  let q = Gv(range)
    ? r._({}, range)
    : {
        draggableBar: false,
      };
  let reverse_1 = rtl ? !reverse : reverse;
  let [J, setJ] = s.useState(false);
  let et = typeof center === "number";
  let { intervalConfigs, markList } = useK({
    min,
    max,
    onlyMarkValue,
    step,
    marks,
    getIntervalConfig,
  });
  let { getLegalValue, getLegalRangeValue, isLegalValue, getNextMarkValue } = ((
    e,
  ) => {
    let { isRange, min, max, onlyMarkValue, intervalConfigs, marks } = e;
    let c = s.useCallback(
      (e) => {
        let t;
        let { begin, step } = intervalConfigs.find(
          (t) => e >= t.begin && e <= t.end,
        );
        let o = Math.round((e - begin) / step);
        let l = ((t = `${step}`.split(".")[1]) && t.length) || 0;
        let s = parseFloat(a.Hn(step, o).toFixed(l));
        return a.tY(begin, s);
      },
      [intervalConfigs],
    );
    let u = s.useCallback(
      (e) => {
        if (!Gv(marks) || RI(marks)) {
          console.warn("marks must be an object when onlyMarkValue is true");
          return min;
        }
        if (marks[e]) {
          return e;
        }
        let t = Object.keys(marks);
        let r = t.map((t) => Math.abs(e - parseFloat(t)));
        return parseFloat(t[r.indexOf(Math.min.apply(null, r))]);
      },
      [marks, min],
    );
    let getLegalValue_1 = s.useCallback(
      (e) => {
        if (b0(e) || e <= min) {
          return min;
        }
        if (e >= max) {
          return max;
        }
        if (onlyMarkValue) {
          return u(e);
        }
        return c(e);
      },
      [u, c, max, min, onlyMarkValue],
    );
    let isLegalValue_1 = s.useCallback(
      (e) => getLegalValue_1(e) === e,
      [getLegalValue_1],
    );
    return {
      getLegalRangeValue: s.useCallback(
        (e) => {
          let [r, o] = [min, min];
          if (isRange) {
            if (cy(e)) {
              r = getLegalValue_1(e[0]);
              o = getLegalValue_1(e[1]);
            } else {
              console.error("value must be an array when range is true");
            }
          } else if (Et(e)) {
            o = getLegalValue_1(e);
          } else {
            console.error("value must be a number when range is false");
          }
          return [r, o];
        },
        [getLegalValue_1, isRange, min],
      ),
      getLegalValue: getLegalValue_1,
      isLegalValue: isLegalValue_1,
      getNextMarkValue: s.useCallback(
        (t, n) => {
          let r = n === "subtraction" ? -1 : 1;
          let o = a.tY(t, r * e.step);
          if (e.onlyMarkValue) {
            let n = Object.keys(e.marks);
            let i = n.findIndex((e) => Number(e) === t);
            o = n[i + r] !== undefined ? Number(n[i + r]) : t;
          }
          return o;
        },
        [e.marks, e.onlyMarkValue, e.step],
      ),
    };
  })({
    isRange: Q,
    min,
    max,
    onlyMarkValue,
    step,
    intervalConfigs,
    marks,
  });
  let [ea, ec] = A_4(Q ? [min, min] : min, {
    defaultValue: b.defaultValue,
    value: b.value,
  });
  let eu = getLegalRangeValue(ea);
  let edRef = s.useRef(eu);
  let [ep, ef] = eu;
  let ehRef = s.useRef(ep > ef);
  A_7(() => {
    edRef.current = getLegalRangeValue(ea);
  }, [ea, getLegalRangeValue]);
  if (ehRef.current) {
    [ep, ef] = [ef, ep];
  }
  let centerOffset = et ? (center - min) / (max - min) : undefined;
  let ev = x(ep, intervalConfigs);
  let eg = x(ef, intervalConfigs);
  let ey = showInput && !onlyMarkValue;
  let eb = s.useMemo(() => {
    if (ey) {
      if (isInputDeferCommit) {
        return N;
      }
      return P;
    }
    return null;
  }, [isInputDeferCommit, ey]);
  let extra = s.useMemo(() => {
    if (ey && (cy(showInput) || Gv(showInput))) {
      if (cy(showInput)) {
        return [...showInput];
      }
      return [r._({}, showInput), r._({}, showInput)];
    }
    return [];
  }, [ey, showInput]);
  let prefixCls = getPrefixCls("slider");
  let ejRef = s.useRef(null);
  let eORef = s.useRef({
    left: 0,
    height: 0,
    top: 0,
    width: 0,
  });
  let eCRef = s.useRef(false);
  let eNRef = s.useRef(0);
  function eP([e, t]) {
    if (e > t) {
      [e, t] = [t, e];
    }
    if (Q) {
      return [e, t];
    }
    return t;
  }
  function e$(e, t) {
    let [n, r] = ((e) => {
      let [t, n] = e;
      edRef.current = [(t = getLegalValue(t)), (n = getLegalValue(n))];
      return [t, n];
    })(e);
    let o = eP([n, r]);
    ec(o);
    if (t === "inputValueChange") {
      ehRef.current = n > r;
    } else {
      ehRef.current = false;
    }
    if (Tn(b.onChange)) {
      b.onChange(o, t);
    }
  }
  function ek() {
    if (Tn(b.onAfterChange)) {
      let e = eP(edRef.current);
      b.onAfterChange(e);
    }
  }
  function eA(e, t) {
    let { left, top, width, height } = eORef.current;
    let l = width;
    let s = reverse_1 ? left + width - e : e - left;
    if (vertical) {
      l = height;
      s = reverse_1 ? t - top : top + height - t;
    }
    if (l <= 0) {
      return 0;
    }
    let c = Math.max(a.Qr(s, l), 0);
    c = Math.min(1, c);
    let { begin, beginOffset, step, endOffset, end } = intervalConfigs.find(
      (e) => c >= e.beginOffset && c <= e.endOffset,
    );
    let m = Math.round(
      (((c - beginOffset) / (endOffset - beginOffset)) * (end - begin)) / step,
    );
    return a.tY(begin, a.Hn(m, step));
  }
  function eE(e) {
    if (vertical) {
      return {
        [reverse_1 ? "top" : "bottom"]: y(e),
      };
    }
    return {
      [reverse_1 ? "right" : "left"]: y(e),
    };
  }
  function e_() {
    let e = {
      getTooltipContainer: b.getTooltipContainer,
      formatTooltip: b.formatTooltip,
    };
    if ("tooltipPosition" in b) {
      e.tooltipPosition = tooltipPosition;
    }
    if ("tooltipVisible" in b) {
      e.tooltipVisible = tooltipVisible;
    }
    return e;
  }
  function onMoveBegin() {
    eORef.current = ejRef.current.getBoundingClientRect();
  }
  function onMouseDown(e) {
    if (disabled) {
      return;
    }
    let t = getLegalValue(e);
    if (Q && ef - t > t - ep) {
      e$([t, ef], "jumpToClick");
    } else {
      e$([ep, t], "jumpToClick");
    }
    ek();
  }
  function onMoveEnd() {
    eCRef.current = false;
    setJ(false);
    ek();
  }
  function eD(e) {
    let t = getLegalValue(eA(e.clientX, e.clientY)) - eNRef.current;
    let n = ep + t;
    let r = ef + t;
    if (isLegalValue(n) && isLegalValue(r)) {
      e$([n, r], "mousemove");
    }
  }
  function eR() {
    AU(window, "mousemove", eD);
    AU(window, "mouseup", eR);
    ek();
  }
  return l.jsx(
    "div",
    o._(
      r._(
        {},
        A_1(Z, [
          "defaultValue",
          "value",
          "onChange",
          "getTooltipContainer",
          "formatTooltip",
          "onAfterChange",
        ]),
      ),
      {
        className: A_2(
          prefixCls,
          {
            [`${prefixCls}-vertical`]: vertical,
            [`${prefixCls}-with-marks`]: marks,
            [`${prefixCls}-reverse`]: reverse_1,
            [`${prefixCls}-rtl`]: rtl,
          },
          className,
        ),
        style,
        ref,
        children: l.jsxs("div", {
          className: `${prefixCls}-wrapper`,
          children: [
            l.jsxs("div", {
              ref: ejRef,
              className: A_2(`${prefixCls}-road`, {
                [`${prefixCls}-road-disabled`]: disabled,
                [`${prefixCls}-road-vertical`]: vertical,
                [`${prefixCls}-road-active`]: !disabled && J,
                [`${prefixCls}-road-marks`]: markList.length > 0,
              }),
              onMouseDown: function (e) {
                onMoveBegin();
                let t = eA(e.clientX, e.clientY);
                if (
                  q.draggableBar &&
                  ((e) => {
                    let [t, n] = [ep, ef];
                    if (t > n) {
                      [t, n] = [n, t];
                    }
                    if (Q) {
                      return e >= t && e <= n;
                    }
                    return e <= n;
                  })(t)
                ) {
                  eNRef.current = getLegalValue(t);
                  on(window, "mousemove", eD);
                  on(window, "mouseup", eR);
                } else {
                  onMouseDown(t);
                }
              },
              children: [
                l.jsx("div", {
                  className: `${prefixCls}-bar`,
                  style: ((e, t) => {
                    let [n, r] = e;
                    if (typeof t === "number") {
                      n = t;
                    }
                    if (n > r) {
                      [n, r] = [r, n];
                    }
                    let o = y(n);
                    let i = y(1 - r);
                    if (vertical) {
                      return {
                        [reverse_1 ? "top" : "bottom"]: o,
                        [reverse_1 ? "bottom" : "top"]: i,
                      };
                    }
                    return {
                      [reverse_1 ? "right" : "left"]: o,
                      [reverse_1 ? "left" : "right"]: i,
                    };
                  })([ev, eg], centerOffset),
                }),
                showTicks &&
                  l.jsx($, {
                    intervalConfigs,
                    min,
                    max,
                    value: [ep, ef],
                    prefixCls,
                    vertical,
                    reverse: reverse_1,
                  }),
                et &&
                  l.jsx(_, {
                    centerOffset,
                    prefixCls,
                    vertical,
                    reverse: reverse_1,
                  }),
                l.jsx(j, {
                  data: markList,
                  intervalConfigs,
                  value: [ep, ef],
                  vertical,
                  prefixCls,
                  reverse: reverse_1,
                  onMouseDown,
                }),
                l.jsx(w, {
                  data: markList,
                  intervalConfigs,
                  vertical,
                  prefixCls,
                  reverse: reverse_1,
                  onMouseDown,
                }),
                Q &&
                  l.jsx(
                    g,
                    o._(
                      r._(
                        {
                          style: eE(ev),
                          isActive: J,
                          disabled,
                          prefixCls,
                          value: ep,
                          maxValue: max,
                          minValue: min,
                          vertical,
                        },
                        e_(),
                      ),
                      {
                        onMoveBegin,
                        onMoving: function (e, t) {
                          eCRef.current = true;
                          setJ(true);
                          e$([eA(e, t), ef], "mousemove");
                        },
                        onMoveEnd,
                        onArrowEvent: function (e) {
                          if (!disabled) {
                            e$([getNextMarkValue(ep, e), ef]);
                          }
                        },
                      },
                    ),
                  ),
                l.jsx(
                  g,
                  o._(
                    r._(
                      {
                        style: eE(eg),
                        disabled,
                        isActive: J,
                        prefixCls,
                        value: ef,
                        maxValue: max,
                        minValue: min,
                        vertical,
                      },
                      e_(),
                    ),
                    {
                      onMoveBegin,
                      onMoving: function (e, t) {
                        eCRef.current = true;
                        setJ(true);
                        e$([ep, eA(e, t)], "mousemove");
                      },
                      onMoveEnd,
                      onArrowEvent: function (e) {
                        if (!disabled) {
                          e$([ep, getNextMarkValue(ef, e)]);
                        }
                      },
                    },
                  ),
                ),
              ],
            }),
            ey &&
              l.jsx(eb, {
                min,
                max,
                step,
                value: [ep, ef],
                range: Q,
                disabled,
                prefixCls,
                onChange: function (e) {
                  e$(e, "inputValueChange");
                  ek();
                },
                extra,
              }),
          ],
        }),
      },
    ),
  );
});
T.displayName = "Slider";
var S = s.memo(T);
export { S as A };
