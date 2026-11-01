import _r from "fyk";
import _a from "i0l";
import l from "bT";
import u from "wnX";
import { Wb, qm } from "./module-rJ.js";
import s from "M8U";
import d from "sQ";
import { Jg } from "./module-jW8.js";
const f = ["onOk", "okText"];
const v = ["onOk", "okText", "onCancel", "cancelText"];
const m = "ARCO_DIALOG";
const p = [
  "close",
  "children",
  "title",
  "footer",
  "footerType",
  "renderFooter",
  "footerCollapseCount",
  "titleAlign",
  "contentAlign",
  "className",
  "maskClass",
  "contentClass",
  "contentStyle",
  "contentTransitionType",
  "maskTransitionTimeout",
  "contentTransitionTimeout",
  "extra",
];
const g = l.forwardRef(function (e, t) {
  const n = Jg();
  const r = e.platform || n;
  const e_close = e.close;
  const close = e_close === undefined ? function () {} : e_close;
  const e_children = e.children;
  const e_title = e.title;
  const e_footer = e.footer;
  const g = e_footer === undefined ? [] : e_footer;
  const e_footerType = e.footerType;
  const b = e_footerType === undefined ? "grid" : e_footerType;
  const e_renderFooter = e.renderFooter;
  const e_footerCollapseCount = e.footerCollapseCount;
  const C = e_footerCollapseCount === undefined ? 3 : e_footerCollapseCount;
  const e_titleAlign = e.titleAlign;
  const w =
    e_titleAlign === undefined
      ? r === "android"
        ? "left"
        : "center"
      : e_titleAlign;
  const e_contentAlign = e.contentAlign;
  const T =
    e_contentAlign === undefined
      ? r === "android"
        ? "left"
        : "center"
      : e_contentAlign;
  const e_className = e.className;
  const e_maskClass = e.maskClass;
  const e_contentClass = e.contentClass;
  const e_contentStyle = e.contentStyle;
  const e_contentTransitionType = e.contentTransitionType;
  const contentTransitionType =
    e_contentTransitionType === undefined
      ? r === "android"
        ? "fade"
        : "fade-scale"
      : e_contentTransitionType;
  const e_maskTransitionTimeout = e.maskTransitionTimeout;
  const maskTransitionTimeout =
    e_maskTransitionTimeout === undefined ? 300 : e_maskTransitionTimeout;
  const e_contentTransitionTimeout = e.contentTransitionTimeout;
  const contentTransitionTimeout =
    e_contentTransitionTimeout === undefined ? 450 : e_contentTransitionTimeout;
  const e_extra = e.extra;
  const P = _a(e, p);
  const WRef = l.useRef(null);
  const HRef = l.useRef(null);
  l.useImperativeHandle(t, function () {
    let e;
    let t;
    let n;
    return {
      dom: ((e = WRef.current) == null ? undefined : e.dom) || null,
      mask: ((t = WRef.current) == null ? undefined : t.mask) || null,
      content: HRef.current,
      setCloseScene:
        ((n = WRef.current) == null ? undefined : n.setCloseScene) ||
        function () {},
    };
  });
  return l.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    const o = e_prefixCls + "-dialog";
    return l.createElement(
      s.Ay,
      _r(
        {
          close,
          className: u.xF(o, r, e_className),
          ref: WRef,
          maskClass: u.xF(o + "-mask", e_maskClass),
          contentTransitionType,
          contentClass: u.xF(o + "-container"),
          maskTransitionTimeout,
          contentTransitionTimeout,
        },
        P,
      ),
      l.createElement(
        "div",
        {
          className: u.xF(o + "-content", o + "-part", r, e_contentClass),
          style: e_contentStyle,
          ref: HRef,
        },
        e_title
          ? l.createElement(
              "div",
              {
                className: u.xF(
                  o + "-header",
                  o + "-part",
                  w,
                  r,
                  "system-" + n,
                  {
                    "only-title": !e_children,
                  },
                ),
              },
              e_title,
            )
          : null,
        e_children
          ? l.createElement(
              "div",
              {
                className: u.xF(o + "-body", o + "-part", T, r, {
                  "sub-title": !e_title,
                }),
              },
              e_children,
            )
          : null,
        e_renderFooter || g.length
          ? l.createElement(
              "div",
              {
                className: u.xF(o + "-footer", o + "-part", r, "type-" + b, {
                  collapsed: g.length >= C,
                }),
              },
              e_renderFooter
                ? e_renderFooter()
                : g.map((e, key) =>
                    l.createElement(
                      "div",
                      {
                        key,
                        className: u.xF(
                          "dialog-footer-button",
                          e.className,
                          "system-" + n,
                          {
                            disabled: e.disabled,
                          },
                        ),
                        onClick: function (t) {
                          t.preventDefault();
                          t.stopPropagation();
                          if (!e.disabled) {
                            const n = e.onClick ? e.onClick(t) : null;
                            if (n && typeof n !== "boolean") {
                              if (n && n.then) {
                                n.then((e) => !e && close(t));
                              }
                            } else if (!n) {
                              close(t);
                            }
                          }
                        },
                      },
                      typeof e.content === "function"
                        ? e.content(e_locale)
                        : e.content,
                    ),
                  ),
            )
          : null,
        e_extra ? l.createElement("section", null, e_extra) : null,
      ),
    );
  });
});
const E = qm(g);
u.DU(g, {
  alert: d.C(E, m, function (e) {
    const t = e || {};
    const t_onOk = t.onOk;
    const t_okText = t.okText;
    const a = _a(t, f);
    return _r(
      {
        footer: [
          {
            content:
              t_okText ||
              function (e) {
                return e.Dialog.okText;
              },
            className: "confirm",
            onClick: t_onOk,
          },
        ],
      },
      a,
    );
  }),
  confirm: d.C(E, m, function (e) {
    const t = e || {};
    const t_onOk = t.onOk;
    const t_okText = t.okText;
    const t_onCancel = t.onCancel;
    const t_cancelText = t.cancelText;
    const u = _a(t, v);
    return _r(
      {
        footer: [
          {
            content:
              t_cancelText ||
              function (e) {
                return e.Dialog.cancelText;
              },
            className: "cancel",
            onClick: t_onCancel,
          },
          {
            content:
              t_okText ||
              function (e) {
                return e.Dialog.okText;
              },
            className: "confirm",
            onClick: t_onOk,
          },
        ],
      },
      u,
    );
  }),
  open: d.h(E, m),
});
