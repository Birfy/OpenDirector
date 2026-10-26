import _r from "fyk";
import i from "bT";
import a from "wnX";
import l from "rJ";
import c from "jW8";
function u(e) {
  let t;
  const e_prefixCls = e.prefixCls;
  const e_onValueChange = e.onValueChange;
  const e_children = e.children;
  const e_itemHeight = e.itemHeight;
  const e_selectedValue = e.selectedValue;
  const e_data = e.data;
  function c() {
    return (e_data || []).map((e, t) => {
      const n = e_selectedValue == null ? undefined : e_selectedValue[t];
      return (
        (n ? (e || []).find((e) => e.value === n) : undefined) ||
        (e == null ? undefined : e[0])
      );
    });
  }
  return i.createElement(
    "div",
    {
      className: e_prefixCls + "-multi",
      style: {
        lineHeight: e_itemHeight + "px",
      },
    },
    ((t = c().map((e) => {
      if (e == null) {
        return undefined;
      }
      return e.value;
    })),
    i.Children.map(e_children, function (e, index) {
      return i.cloneElement(e, {
        onValueChange: function (value, changedData) {
          let o;
          let i;
          let a;
          let l;
          let u;
          let s;
          let d;
          i = (o = {
            index,
            value,
            callback: e_onValueChange,
            changedData,
          }).index;
          a = o.value;
          l = o.changedData;
          u = o.callback;
          s = c().concat();
          s[i] = l;
          d = s.map((e) => {
            if (e == null) {
              return undefined;
            }
            return e.value;
          });
          d[i] = a;
          if (u) {
            u(d, i, s);
          }
        },
        selectedValue: t[index],
      });
    })),
  );
}
const s = i.forwardRef(function (e, t) {
  const e_prefixCls = e.prefixCls;
  const e_style = e.style;
  const e_data = e.data;
  const e_clickable = e.clickable;
  const e_itemHeight = e.itemHeight;
  const e_wrapperHeight = e.wrapperHeight;
  const e_selectedValue = e.selectedValue;
  const e_onValueChange = e.onValueChange;
  const e_disabled = e.disabled;
  const e_hideEmptyCols = e.hideEmptyCols;
  const e_rows = e.rows;
  const g = e_rows === undefined ? 5 : e_rows;
  const e_touchToStop = e.touchToStop;
  const y = e_touchToStop !== undefined && e_touchToStop;
  const x = c.pK("");
  const transitionDuration = x[0];
  const b = x[1];
  const w = i.useState("");
  const transitionTimingFunction = w[0];
  const N = w[1];
  const T = c.pK(0);
  const R = T[0];
  const S = T[1];
  const I = c.pK(e_selectedValue);
  const L = I[0];
  const M = I[1];
  const A = c.oq(0);
  const F = A[0];
  const B = A[1];
  const O = A[2];
  const DRef = i.useRef(0);
  const WRef = i.useRef(0);
  const HRef = i.useRef(0);
  const VRef = i.useRef(0);
  const PRef = i.useRef(0);
  const zRef = i.useRef(false);
  const qRef = i.useRef(null);
  const YRef = i.useRef(null);
  const GRef = i.useRef("normal");
  const J = Math.max(g % 2 == 0 ? g + 1 : g, 3);
  const jRef = i.useRef(false);
  const URef = i.useRef(false);
  const XRef = i.useRef();
  const KRef = i.useRef(null);
  const _ = i.useMemo(
    function () {
      return c.yx(
        _r(
          {
            transform: "translate3d(0px, " + (F || 0) + "px, 0px)",
          },
          transitionDuration
            ? {
                transitionDuration,
              }
            : {},
          {
            transitionTimingFunction,
            paddingBottom: `${((J - 1) / 2) * e_itemHeight}px`,
            paddingTop: `${((J - 1) / 2) * e_itemHeight}px`,
          },
        ),
      );
    },
    [transitionDuration, F, transitionTimingFunction, e_itemHeight, J],
  );
  function Z(e) {
    if (R !== e) {
      S(Math.max(e, 0));
      const t = e_data[e];
      const n = t == null ? undefined : t.value;
      if (n !== L) {
        M(n);
        if (e_onValueChange) {
          e_onValueChange(n, t);
        }
      }
    }
  }
  function Q(e, t = 0, n = function () {}) {
    let r;
    let o;
    let i;
    let a;
    r = -1 * e * e_itemHeight;
    if ((o = t) === undefined) {
      o = 0;
    }
    if ((i = n) === undefined) {
      i = function () {};
    }
    b(o ? o + "ms" : "");
    O(r);
    if (HRef.current) {
      clearTimeout(HRef.current);
    }
    a = function () {
      XRef.current = undefined;
      GRef.current = "normal";
      b("");
      i();
    };
    XRef.current = a;
    HRef.current = window.setTimeout(a, o);
  }
  function $(e, t = 0) {
    Q(e, t, function () {
      Z(e);
    });
  }
  const ee = i.useCallback(
    function (e) {
      if (!e_disabled) {
        jRef.current = false;
        GRef.current = "moving";
        const t = e.touches[0].screenX;
        const n = e.touches[0].screenY;
        WRef.current = Date.now();
        zRef.current = true;
        qRef.current = null;
        VRef.current = t;
        PRef.current = n;
        DRef.current = B.current;
      }
    },
    [e_disabled],
  );
  const et = i.useCallback(
    function (e) {
      if (!e_disabled && zRef.current) {
        jRef.current = true;
        const t = DRef.current;
        const n = e.touches[0].screenX;
        const r = e.touches[0].screenY;
        const o = n - VRef.current;
        const i = r - PRef.current;
        if (qRef.current === null) {
          qRef.current = Math.abs(o) > Math.abs(i);
        }
        if (!qRef.current) {
          if (e.cancelable) {
            e.preventDefault();
          }
          const a = -1 * (e_data.length - 1) * e_itemHeight;
          O((t >= 0 && i > 0) || (t <= a && i < 0) ? t + i / 4 : t + i);
        }
      }
    },
    [e_data.length, e_disabled, e_itemHeight],
  );
  function en() {
    if (KRef.current) {
      clearTimeout(KRef.current);
    }
    KRef.current = null;
    GRef.current = "normal";
    const DRef_current = DRef.current;
    if (jRef.current && F !== DRef_current) {
      zRef.current = false;
      const t = Date.now();
      const n = (e_data.length + J - 1) * e_itemHeight;
      const r = t - WRef.current;
      const o = Math.abs(F - DRef_current);
      if (r < 300 && o > 90) {
        let i;
        let a;
        let u;
        let c;
        let f;
        let destination;
        i = e_wrapperHeight - n;
        u = "noBounce";
        c = e_wrapperHeight / 6;
        f = F - DRef_current;
        if (
          (destination =
            F + ((2 * Math.abs(f)) / r / 0.003) * (f < 0 ? -1 : 1)) < i
        ) {
          u = (a = i - destination) > 300 ? "strongBounce" : "weekBounce";
          destination = Math.max(i - c, i - a / 5);
        } else if (destination > 0) {
          u = (a = destination - 0) > 300 ? "strongBounce" : "weekBounce";
          destination = Math.min(0 + c, 0 + a / 5);
        }
        const v = {
          destination,
          duration: {
            noBounce: 400,
            weekBounce: 100,
            strongBounce: 75,
          }[u],
          bezier: {
            noBounce: "cubic-bezier(.17, .89, .45, 1)",
            weekBounce: "cubic-bezier(.25, .46, .45, .94)",
            strongBounce: "cubic-bezier(.25, .46, .45, .94)",
          }[u],
        };
        const p = Math.max(
          0,
          Math.min(
            e_data.length - 1,
            Math.round((-1 * v.destination) / e_itemHeight),
          ),
        );
        N(v.bezier);
        GRef.current = "scrolling";
        Q(p, v.duration, function () {
          Z(p);
        });
      } else {
        $(
          Math.max(
            0,
            Math.min(e_data.length - 1, Math.round((-1 * F) / e_itemHeight)),
          ),
          200,
        );
      }
    }
  }
  function er() {
    if (YRef.current) {
      const e = window.getComputedStyle(YRef.current);
      const t =
        Number(
          (e.transform || e.webkitTransform || "")
            .replace(/matrix\((.*?)\)/, "$1")
            .split(/,\s*/)
            .slice(-1)[0],
        ) || 0;
      $(
        Math.max(
          0,
          Math.min(e_data.length - 1, Math.round((-1 * t) / e_itemHeight)),
        ),
        0,
      );
    }
  }
  function getCurrentCellValue() {
    let e;
    if ((e = e_data[R]) == null) {
      return undefined;
    }
    return e.value;
  }
  i.useEffect(function () {
    return function () {
      const HRef_current = HRef.current;
      if (XRef.current != null) {
        XRef.current();
      }
      if (HRef_current) {
        clearTimeout(HRef_current);
      }
    };
  }, []);
  i.useEffect(
    function () {
      if (YRef.current) {
        YRef.current.addEventListener("touchstart", ee);
        YRef.current.addEventListener("touchmove", et);
      }
      return function () {
        if (YRef.current) {
          YRef.current.removeEventListener("touchstart", ee);
          YRef.current.removeEventListener("touchmove", et);
        }
      };
    },
    [ee, et],
  );
  i.useLayoutEffect(
    function () {
      if ("selectedValue" in e) {
        const t = e_data.findIndex((e) => e.value === e_selectedValue);
        S(Math.max(t, 0));
        if (t >= 0) {
          $(t);
        }
      }
    },
    [e_selectedValue, e_itemHeight, e_data],
  );
  i.useImperativeHandle(t, function () {
    return {
      movingStatus: GRef.current,
      scrollToCurrentIndex: er,
      getCurrentCellValue,
    };
  });
  if (!e_hideEmptyCols || (e_data && e_data.length)) {
    return i.createElement(
      "div",
      {
        className: e_prefixCls + "-column",
      },
      i.createElement(
        "div",
        {
          className: e_prefixCls + "-column-item-wrap",
          style: _,
          ref: YRef,
          onTouchStart: function () {
            if (y !== false) {
              URef.current = false;
              KRef.current = window.setTimeout(
                function () {
                  if (!jRef.current) {
                    URef.current = true;
                    er();
                  }
                },
                y === true ? 100 : y,
              );
            }
          },
          onTouchEnd: en,
          onTouchCancel: en,
          "aria-disabled": e_disabled,
        },
        e_data.map((e, t) => {
          const l = Math.abs(t - R);
          return i.createElement(
            "div",
            {
              "aria-label": t === R ? "" + e.value : "",
              key: t + "_" + e.value,
              className: a.xF(e_prefixCls + "-column-item", {
                selected: t === R,
                ["selected-neighbor-" + l]: l && l <= Math.floor(J / 2),
              }),
              style: e_style,
              onClick: function () {
                if (
                  e_clickable &&
                  !e_disabled &&
                  (y === false || !URef.current)
                ) {
                  $(t, 200);
                }
              },
            },
            e.label,
          );
        }),
      ),
    );
  }
  return null;
});
const d = i.forwardRef(function (e, t) {
  const e_prefixCls = e.prefixCls;
  const e_itemStyle = e.itemStyle;
  const e_cols = e.cols;
  const e_data = e.data;
  const e_disabled = e.disabled;
  const e_clickable = e.clickable;
  const e_itemHeight = e.itemHeight;
  const e_wrapperHeight = e.wrapperHeight;
  const e_rows = e.rows;
  const e_hideEmptyCols = e.hideEmptyCols;
  const e_onValueChange = e.onValueChange;
  const e_selectedValue = e.selectedValue;
  const C = e_selectedValue === undefined ? [] : e_selectedValue;
  const e_touchToStop = e.touchToStop;
  const xRef = i.useRef([]);
  function E() {
    return xRef.current.map((e) => e.movingStatus);
  }
  function b() {
    xRef.current.forEach((e) => e.scrollToCurrentIndex());
  }
  function getAllCellsValue() {
    return xRef.current.map((e) => e.getCurrentCellValue());
  }
  i.useImperativeHandle(t, function () {
    return {
      getCellMovingStatus: E,
      scrollToCurrentIndex: b,
      getAllCellsValue,
    };
  });
  const k = i.useMemo(
    function () {
      const e = a
        .G6(
          e_data,
          function (e, t) {
            return e.value === (C == null ? undefined : C[t]);
          },
          {
            fallbackChildIndex: 0,
          },
        )
        .map((e) => e.children);
      const t = e_cols - e.length;
      if (t > 0) {
        for (let n = 0; n < t; n++) {
          e.push([]);
        }
      }
      e.length = e_cols - 1;
      e.unshift(e_data);
      return e;
    },
    [e_data, C],
  );
  return i.createElement(
    u,
    {
      prefixCls: e_prefixCls + "-picker",
      data: k,
      selectedValue: C,
      itemHeight: e_itemHeight,
      onValueChange: function (e, t, n) {
        let r;
        let i = a.G6(e_data, function (n, r) {
          return r <= t && n.value === e[r];
        })[t];
        for (r = t + 1; r < e_cols && i && i.children; r++) {
          i = i.children[0];
          e[r] = i.value;
          n[r] = i;
        }
        e.length = r;
        n.length = r;
        if (e_onValueChange != null) {
          e_onValueChange(e, t, n);
        }
      },
    },
    k.map((e, t) =>
      i.createElement(s, {
        key: t + "_picker_cell_cascader",
        data: e || [],
        style: e_itemStyle,
        prefixCls: e_prefixCls + "-picker",
        clickable: e_clickable,
        itemHeight: e_itemHeight,
        wrapperHeight: e_wrapperHeight,
        disabled: e_disabled,
        rows: e_rows,
        hideEmptyCols: e_hideEmptyCols,
        ref: function (e) {
          return e && (xRef.current[t] = e);
        },
        touchToStop: e_touchToStop,
      }),
    ),
  );
});
const f = i.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_itemStyle = e.itemStyle;
  const e_cascade = e.cascade;
  const m = e_cascade === undefined || e_cascade;
  const e_cols = e.cols;
  const cols = e_cols === undefined ? 3 : e_cols;
  const e_rows = e.rows;
  const rows = e_rows === undefined ? 5 : e_rows;
  const e_data = e.data;
  const e_disabled = e.disabled;
  const disabled = e_disabled !== undefined && e_disabled;
  const e_clickable = e.clickable;
  const clickable = e_clickable === undefined || e_clickable;
  const e_value = e.value;
  const e_hideEmptyCols = e.hideEmptyCols;
  const hideEmptyCols = e_hideEmptyCols !== undefined && e_hideEmptyCols;
  const e_onPickerChange = e.onPickerChange;
  const e_touchToStop = e.touchToStop;
  const touchToStop = e_touchToStop !== undefined && e_touchToStop;
  const I = i.useState(0);
  const itemHeight = I[0];
  const M = I[1];
  const A = i.useState(0);
  const wrapperHeight = A[0];
  const B = A[1];
  const O = c.pK(e_value);
  const selectedValue = O[0];
  const W = O[1];
  const HRef = i.useRef(null);
  const VRef = i.useRef(null);
  const PRef = i.useRef(null);
  const zRef = i.useRef([]);
  const qRef = i.useRef(null);
  const Y = i.useMemo(
    function () {
      if (e_itemStyle != null && e_itemStyle.height) {
        return {
          height: e_itemStyle.height,
        };
      }
      return {};
    },
    [e_itemStyle],
  );
  const G = i.useMemo(
    function () {
      let e;
      return (e =
        e_data && Array.isArray(e_data[0])
          ? typeof e_data[0][0] === "string" || typeof e_data[0][0] === "number"
            ? e_data.map((e) =>
                e.map((e) => ({
                  label: e,
                  value: e,
                })),
              )
            : e_data
          : [e_data]);
    },
    [e_data],
  );
  const getAllColumnValues = function () {
    let e;
    return (
      m
        ? ((e = qRef.current) == null ? undefined : e.getAllCellsValue()) || []
        : zRef.current.map((e) => e.getCurrentCellValue())
    ).filter((e) => e !== undefined);
  };
  function getColumnValue(e = 0) {
    return getAllColumnValues()[e];
  }
  function U() {
    let e;
    if (m) {
      return (
        ((e = qRef.current) == null ? undefined : e.getCellMovingStatus()) || []
      );
    }
    return zRef.current.map((e) => e.movingStatus);
  }
  function X() {
    if (m) {
      let e;
      if ((e = qRef.current) != null) {
        e.scrollToCurrentIndex();
      }
      return;
    }
    zRef.current.forEach((e) => e.scrollToCurrentIndex());
  }
  function onValueChange(e, t, n) {
    W(e);
    if (e_onPickerChange) {
      e_onPickerChange(e, t, n);
    }
  }
  i.useImperativeHandle(t, function () {
    return {
      dom: VRef.current,
      getCellMovingStatus: U,
      getAllColumnValues,
      getColumnValue,
      updateLayout,
      resetValue,
      scrollToCurrentIndex: X,
    };
  });
  i.useEffect(
    function () {
      W(e_value);
    },
    [e_value],
  );
  var _ = i.useCallback(
    function () {
      if (HRef && HRef.current) {
        B(HRef.current.offsetHeight);
      }
    },
    [HRef, B],
  );
  var Z = () => {
    if (PRef.current) {
      M(PRef.current.getBoundingClientRect().height);
    }
  };
  function updateLayout() {
    _();
    Z();
  }
  function resetValue() {
    W(e_value);
  }
  i.useEffect(function () {
    updateLayout();
  }, []);
  const ee = _r(
    {
      height: itemHeight + "px",
    },
    e_itemStyle,
  );
  return i.createElement(l.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return i.createElement(
      "div",
      {
        className: e_prefixCls + "-picker-view all-border-box " + r,
        style: {
          height: `${itemHeight * rows}px`,
        },
        ref: HRef,
      },
      m
        ? i.createElement(d, {
            prefixCls: e_prefixCls || "",
            cols,
            itemStyle: ee,
            data: e_data,
            selectedValue,
            onValueChange,
            clickable,
            itemHeight,
            wrapperHeight,
            disabled,
            rows,
            hideEmptyCols,
            ref: qRef,
            touchToStop,
          })
        : i.createElement(
            u,
            {
              prefixCls: e_prefixCls + "-picker",
              data: G,
              itemHeight,
              selectedValue,
              onValueChange,
            },
            G.map((data, n) =>
              i.createElement(s, {
                key: n + "_picker_cell_normal",
                data,
                style: ee,
                prefixCls: e_prefixCls + "-picker",
                clickable,
                itemHeight,
                wrapperHeight,
                disabled,
                rows,
                hideEmptyCols,
                ref: function (e) {
                  return e && (zRef.current[n] = e);
                },
                touchToStop,
              }),
            ),
          ),
      i.createElement(
        "div",
        {
          className: e_prefixCls + "-picker-selection",
        },
        i.createElement("div", {
          className:
            e_prefixCls +
            "-picker-selection-mask " +
            e_prefixCls +
            "-picker-selection-mask-top",
        }),
        i.createElement("div", {
          ref: PRef,
          className: e_prefixCls + "-picker-selection-bar",
          style: Y,
        }),
        i.createElement("div", {
          className:
            e_prefixCls +
            "-picker-selection-mask " +
            e_prefixCls +
            "-picker-selection-mask-bottom",
        }),
      ),
    );
  });
});
export var Ay = a.DU(f, "PickerView");
