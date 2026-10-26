import r from "wnX";
import _i from "fyk";
import o from "bT";
import { Wb } from "./module-rJ.js";
const UContext = o.createContext({
  isFromGroup: false,
});
function c() {
  return o.createElement(
    "svg",
    {
      viewBox: "0 0 8 14",
      fill: "none",
      className: "arrow-icon-svg",
    },
    o.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.594858 1.24219C0.399596 1.43745 0.399596 1.75403 0.594859 1.94929L5.59905 6.95348L0.636039 11.9165C0.440776 12.1118 0.440776 12.4283 0.636038 12.6236L0.989592 12.9771C1.18485 13.1724 1.50144 13.1724 1.6967 12.9771L7.35355 7.3203C7.5296 7.14425 7.54692 6.86959 7.40553 6.67413C7.38216 6.62774 7.35111 6.58423 7.31237 6.54549L1.65552 0.888634C1.46026 0.693372 1.14367 0.693372 0.948411 0.888634L0.594858 1.24219Z",
    }),
  );
}
const s = o.forwardRef(function (e, t) {
  const e_className = e.className;
  const i = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_icon = e.icon;
  const e_label = e.label;
  const e_desc = e.desc;
  const e_text = e.text;
  const e_children = e.children;
  const e_showArrow = e.showArrow;
  const e_arrow = e.arrow;
  const e_prepend = e.prepend;
  const e_append = e.append;
  const e_bordered = e.bordered;
  const y = e_bordered === undefined || e_bordered;
  const e_onClick = e.onClick;
  const CRef = o.useRef(null);
  o.useImperativeHandle(t, function () {
    return {
      dom: CRef.current,
    };
  });
  return o.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return o.createElement(UContext.Consumer, null, function (e) {
      const e_isFromGroup = e.isFromGroup;
      return o.createElement(
        "div",
        {
          className: r.xF(
            e_prefixCls + "-cell",
            "all-border-box",
            {
              "without-group": !e_isFromGroup,
            },
            {
              bordered: y,
            },
            i,
          ),
          style: e_style,
          ref: CRef,
          onClick: function (e) {
            return e_onClick && e_onClick(e);
          },
        },
        e_prepend,
        o.createElement(
          "div",
          {
            className: r.xF(e_prefixCls + "-cell-inner", {
              "has-desc": e_desc,
            }),
          },
          e_icon
            ? o.createElement(
                "div",
                {
                  className: "cell-label-icon",
                },
                e_icon,
              )
            : null,
          e_label || e_desc
            ? o.createElement(
                "div",
                {
                  className: "cell-label",
                },
                o.createElement(
                  "div",
                  {
                    className: "cell-title",
                  },
                  e_label,
                ),
                e_desc
                  ? o.createElement(
                      "div",
                      {
                        className: "cell-desc",
                      },
                      e_desc,
                    )
                  : null,
              )
            : null,
          o.createElement(
            "div",
            {
              className: `cell-content ${e_label || e_desc ? "has-label" : ""}`,
            },
            e_text
              ? o.createElement(
                  "div",
                  {
                    className: "cell-text",
                  },
                  e_text,
                )
              : null,
            e_children,
          ),
          e_showArrow
            ? o.createElement(
                "div",
                {
                  className: "cell-arrow-icon",
                },
                e_arrow || o.createElement(c, null),
              )
            : null,
        ),
        e_append,
      );
    });
  });
});
const Group = o.forwardRef(function (e, t) {
  const e_className = e.className;
  const i = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_header = e.header;
  const e_footer = e.footer;
  const e_bordered = e.bordered;
  const m = e_bordered === undefined || e_bordered;
  const e_options = e.options;
  const e_children = e.children;
  const e_onClick = e.onClick;
  const ERef = o.useRef(null);
  function onClick(e) {
    if (e_onClick) {
      e_onClick(e);
    }
  }
  o.useImperativeHandle(t, function () {
    return {
      dom: ERef.current,
    };
  });
  return o.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return o.createElement(
      "div",
      {
        className: r.xF(e_prefixCls + "-cell-group", "all-border-box", i),
        ref: ERef,
        onClick,
        style: e_style,
      },
      e_header
        ? o.createElement(
            "div",
            {
              className: "cell-group-header",
            },
            e_header,
          )
        : null,
      o.createElement(
        "div",
        {
          className: r.xF("cell-group-body", {
            bordered: m,
          }),
        },
        o.createElement(
          UContext.Provider,
          {
            value: {
              isFromGroup: true,
            },
          },
          e_children,
          e_options &&
            e_options.map((e, key) =>
              o.createElement(
                s,
                _i(
                  {
                    key,
                  },
                  e,
                ),
              ),
            ),
        ),
      ),
      e_footer
        ? o.createElement(
            "div",
            {
              className: "cell-group-footer",
            },
            e_footer,
          )
        : null,
    );
  });
});
r.DU(s, {
  Group,
});
