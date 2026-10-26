import _r from "fyk";
import _a from "i0l";
import l from "bT";
import u from "wnX";
import { Wb, qm } from "./module-rJ.js";
import s from "vYF";
import d from "sQ";
const f = [
  "className",
  "items",
  "cancelText",
  "close",
  "title",
  "subTitle",
  "needBottomOffset",
];
const v = l.forwardRef(function (e, t) {
  const e_className = e.className;
  const r = e_className === undefined ? "" : e_className;
  const e_items = e.items;
  const e_cancelText = e.cancelText;
  const e_close = e.close;
  const e_title = e.title;
  const e_subTitle = e.subTitle;
  const e_needBottomOffset = e.needBottomOffset;
  const needBottomOffset =
    e_needBottomOffset === undefined || e_needBottomOffset;
  const E = _a(e, f);
  const bRef = l.useRef(null);
  l.useImperativeHandle(t, function () {
    return bRef.current;
  });
  return l.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return l.createElement(
      s.Ay,
      _r(
        {
          ref: bRef,
          className: u.xF(e_prefixCls + "-action-sheet", r),
          contentClass: e_prefixCls + "-action-sheet-content",
          close: e_close,
          direction: "bottom",
          needBottomOffset,
        },
        E,
      ),
      e_title || e_subTitle
        ? l.createElement(
            "div",
            {
              className: e_prefixCls + "-action-sheet-header",
            },
            e_title
              ? l.createElement(
                  "div",
                  {
                    className: e_prefixCls + "-action-sheet-title",
                  },
                  e_title,
                )
              : null,
            e_subTitle
              ? l.createElement(
                  "div",
                  {
                    className: e_prefixCls + "-action-sheet-sub-title",
                  },
                  e_subTitle,
                )
              : null,
          )
        : null,
      l.createElement(
        "div",
        {
          className: e_prefixCls + "-action-sheet-list",
        },
        (e_items || []).map((e, key) =>
          l.createElement(
            "div",
            {
              className: u.xF(
                e_prefixCls + "-action-sheet-item",
                e.className,
                e.status || "normal",
              ),
              key,
              style: e.style,
              onClick: function (t) {
                t.stopPropagation();
                if (e.status !== "disabled") {
                  const n = e.onClick ? e.onClick(t) : null;
                  if (n && typeof n !== "boolean") {
                    if (n && n.then) {
                      n.then(
                        (e) => !e && (e_close == null ? undefined : e_close(t)),
                      );
                    }
                  } else if (!(n || e_close == null)) {
                    e_close(t);
                  }
                }
              },
            },
            e.content,
          ),
        ),
      ),
      e_cancelText
        ? l.createElement(
            "div",
            {
              className: e_prefixCls + "-action-sheet-item cancel-item",
              onClick: function (e) {
                e.stopPropagation();
                if (e_close != null) {
                  e_close(e);
                }
              },
            },
            e_cancelText,
          )
        : null,
    );
  });
});
const m = qm(v);
u.DU(v, {
  open: d.h(m, "ARCO_ACTION_SHEET"),
});
