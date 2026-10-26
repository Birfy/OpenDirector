import _r from "fyk";
import _i from "i0l";
import l from "bT";
import u from "wnX";
import c from "rJ";
import { Ay as Ay_1 } from "./module-vYF.js";
import { Ay as Ay_2 } from "./module-D7t.js";
import f from "jW8";
const m = [
  "className",
  "itemStyle",
  "cascade",
  "cols",
  "rows",
  "data",
  "okText",
  "dismissText",
  "disabled",
  "clickable",
  "hideEmptyCols",
  "title",
  "visible",
  "value",
  "needBottomOffset",
  "onDismiss",
  "onOk",
  "onChange",
  "maskClosable",
  "onHide",
  "onPickerChange",
  "touchToStop",
  "gestureOutOfControl",
];
const v = l.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_itemStyle = e.itemStyle;
  const e_cascade = e.cascade;
  const cascade = e_cascade === undefined || e_cascade;
  const e_cols = e.cols;
  const cols = e_cols === undefined ? 3 : e_cols;
  const e_rows = e.rows;
  const rows = e_rows === undefined ? 5 : e_rows;
  const e_data = e.data;
  const e_okText = e.okText;
  const e_dismissText = e.dismissText;
  const e_disabled = e.disabled;
  const disabled = e_disabled !== undefined && e_disabled;
  const e_clickable = e.clickable;
  const clickable = e_clickable === undefined || e_clickable;
  const e_hideEmptyCols = e.hideEmptyCols;
  const hideEmptyCols = e_hideEmptyCols !== undefined && e_hideEmptyCols;
  const e_title = e.title;
  const I = e_title === undefined ? "" : e_title;
  const e_visible = e.visible;
  const visible = e_visible !== undefined && e_visible;
  const e_value = e.value;
  const e_needBottomOffset = e.needBottomOffset;
  const needBottomOffset =
    e_needBottomOffset !== undefined && e_needBottomOffset;
  const e_onDismiss = e.onDismiss;
  const e_onOk = e.onOk;
  const e_onChange = e.onChange;
  const e_maskClosable = e.maskClosable;
  const maskClosable = e_maskClosable !== undefined && e_maskClosable;
  const e_onHide = e.onHide;
  const e_onPickerChange = e.onPickerChange;
  const e_touchToStop = e.touchToStop;
  const e_gestureOutOfControl = e.gestureOutOfControl;
  const gestureOutOfControl =
    e_gestureOutOfControl === undefined || e_gestureOutOfControl;
  const J = _i(e, m);
  const j = f.SE(e_value);
  const URef = l.useRef(null);
  const XRef = l.useRef(null);
  function K() {
    if (e_onDismiss) {
      e_onDismiss();
    }
    if (e_onHide) {
      e_onHide("dismiss");
    }
  }
  l.useImperativeHandle(t, function () {
    return {
      dom: URef.current,
      getCellMovingStatus: function () {
        let e;
        return (
          ((e = XRef.current) == null ? undefined : e.getCellMovingStatus()) ||
          []
        );
      },
      getAllColumnValues: function () {
        let e;
        return (
          ((e = XRef.current) == null ? undefined : e.getAllColumnValues()) ||
          []
        );
      },
      getColumnValue: function (e) {
        let t;
        return (
          ((t = XRef.current) == null ? undefined : t.getColumnValue(e)) || ""
        );
      },
      updateLayout: function () {
        let e;
        if ((e = XRef.current) == null) {
          return undefined;
        }
        return e.updateLayout();
      },
      scrollToCurrentIndex: function () {
        let e;
        if ((e = XRef.current) == null) {
          return undefined;
        }
        return e.scrollToCurrentIndex();
      },
    };
  });
  const _ = function () {
    let e;
    if ((e = XRef.current) != null) {
      e.scrollToCurrentIndex();
    }
    u.dY(function () {
      let e;
      const t =
        ((e = XRef.current) == null ? undefined : e.getAllColumnValues()) ||
        j.current ||
        [];
      if (e_onOk) {
        e_onOk(t);
      }
      if (e_onChange) {
        e_onChange(t);
      }
      if (e_onHide) {
        e_onHide("confirm");
      }
    });
  };
  function Z() {
    if (visible && XRef.current) {
      XRef.current.updateLayout();
    }
  }
  f.VP(Z, [visible]);
  l.useEffect(
    function () {
      Z();
    },
    [visible],
  );
  return l.createElement(c.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    return l.createElement(
      Ay_1,
      _r(
        {
          visible,
          className: u.xF(e_className, e_prefixCls + "-picker all-border-box"),
          close: function () {
            if (e_onHide == null) {
              return undefined;
            }
            return e_onHide("mask");
          },
          direction: "bottom",
          maskClosable,
          needBottomOffset,
          gestureOutOfControl,
        },
        J,
      ),
      l.createElement(
        "div",
        {
          className: e_prefixCls + "-picker-wrap",
          ref: URef,
        },
        l.createElement(
          "div",
          {
            className: e_prefixCls + "-picker-header",
          },
          l.createElement(
            "div",
            {
              className: e_prefixCls + "-picker-header-btn left",
              onClick: K,
            },
            e_dismissText ||
              (e_locale == null ? undefined : e_locale.Picker.cancelText),
          ),
          l.createElement(
            "div",
            {
              className: e_prefixCls + "-picker-header-title",
            },
            I,
          ),
          l.createElement(
            "div",
            {
              className: e_prefixCls + "-picker-header-btn right",
              onClick: _,
            },
            e_okText || (e_locale == null ? undefined : e_locale.Picker.okText),
          ),
        ),
        l.createElement(Ay_2, {
          ref: XRef,
          data: e_data,
          cascade,
          cols,
          rows,
          disabled,
          value: e_value,
          onPickerChange: e_onPickerChange,
          itemStyle: e_itemStyle,
          clickable,
          hideEmptyCols,
          touchToStop: e_touchToStop,
        }),
      ),
    );
  });
});
export const Ay = u.DU(v, "Picker");
