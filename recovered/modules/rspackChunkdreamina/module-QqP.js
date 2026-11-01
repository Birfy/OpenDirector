import o from "bT";
import i from "JXb";
import l from "Uww";
import a from "usi";
import c from "ZKB";
import u from "UC";
import s from "olG";
import { A as A_1 } from "./module-puV.js";
import { A as A_2 } from "./module-Cu.js";
import d from "krC";
let r;
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const m = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
export const A = ((e) => {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    t.startTimer = function () {
      const t_props = t.props;
      const e_duration = t_props.duration;
      const e_onClose = t_props.onClose;
      const o = t_props.id;
      if (e_duration !== 0) {
        t.timer = window.setTimeout(function () {
          if (e_onClose) {
            e_onClose(o);
          }
          t.removeTimer();
        }, e_duration);
      }
    };
    t.removeTimer = function () {
      if (t.timer) {
        window.clearTimeout(t.timer);
        t.timer = null;
      }
    };
    t.onClose = function () {
      if (t.props.onClose) {
        t.props.onClose(t.props.id);
      }
    };
    t.renderIcon = function () {
      let e;
      const t_props = t.props;
      const n_showIcon = t_props.showIcon;
      const n_icon = t_props.icon;
      const n_type = t_props.type;
      const n_prefixCls = t_props.prefixCls;
      const n_iconPrefix = t_props.iconPrefix;
      if (n_icon) {
        e = n_icon;
      } else if (n_showIcon) {
        switch (n_type) {
          case "info":
            e = o.createElement(c.A, null);
            break;
          case "success":
            e = o.createElement(l.A, null);
            break;
          case "error":
            e = o.createElement(a.A, null);
            break;
          case "warning":
            e = o.createElement(u.A, null);
            break;
          case "loading":
            e = o.createElement(s.A, null);
        }
        e = o.createElement(
          d.V.Provider,
          {
            value: n_iconPrefix
              ? {
                  prefixCls: n_iconPrefix,
                }
              : {},
          },
          e,
        );
      }
      return o.createElement(
        "span",
        {
          className: n_prefixCls + "-icon",
        },
        e,
      );
    };
    t.onMouseEnter = function () {
      t.removeTimer();
    };
    t.onMouseLeave = function () {
      t.removeTimer();
      t.startTimer();
    };
    return t;
  }
  m(t, e);
  t.prototype.componentDidMount = function () {
    this.startTimer();
  };
  t.prototype.componentDidUpdate = function (e) {
    if (e.duration !== this.props.duration || this.props.update) {
      this.removeTimer();
      this.startTimer();
    }
  };
  t.prototype.componentWillUnmount = function () {
    this.removeTimer();
  };
  t.prototype.render = function () {
    const props = this.props;
    const t_title = props.title;
    const t_content = props.content;
    const t_showIcon = props.showIcon;
    const t_className = props.className;
    const t_style = props.style;
    const t_type = props.type;
    const t_btn = props.btn;
    const t_icon = props.icon;
    const t_prefixCls = props.prefixCls;
    const t_closable = props.closable;
    const t_noticeType = props.noticeType;
    const t_iconPrefix = props.iconPrefix;
    const t_rtl = props.rtl;
    const className = A_1(
      t_prefixCls,
      t_prefixCls + "-" + t_type,
      {
        [t_prefixCls + "-closable"]: t_closable,
        [t_prefixCls + "-rtl"]: t_rtl,
      },
      t_className,
    );
    let E = !("closable" in this.props) || t_closable;
    let C = t_showIcon;
    if (!(t_type !== "normal" || t_icon)) {
      C = false;
    }
    if (t_noticeType === "message") {
      E = t_closable;
      return o.createElement(
        "div",
        {
          style: {
            textAlign: "center",
          },
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
        },
        o.createElement(
          "div",
          {
            className,
            style: t_style,
            role: "alert",
          },
          C && this.renderIcon(),
          o.createElement(
            "span",
            {
              className: t_prefixCls + "-content",
            },
            t_content,
          ),
          E &&
            o.createElement(
              A_2,
              {
                prefix: t_prefixCls,
                className: t_prefixCls + "-close-btn",
                onClick: this.onClose,
              },
              o.createElement(i.A, null),
            ),
        ),
      );
    }
    if (t_noticeType === "notification") {
      return o.createElement(
        "div",
        {
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
        },
        o.createElement(
          "div",
          {
            className,
            style: t_style,
            role: "alert",
          },
          C &&
            o.createElement(
              "div",
              {
                className: t_prefixCls + "-left",
              },
              this.renderIcon(),
            ),
          o.createElement(
            "div",
            {
              className: t_prefixCls + "-right",
            },
            t_title &&
              o.createElement(
                "div",
                {
                  className: t_prefixCls + "-title",
                },
                t_title,
              ),
            o.createElement(
              "div",
              {
                className: t_prefixCls + "-content",
              },
              t_content,
            ),
            t_btn &&
              o.createElement(
                "div",
                {
                  className: t_prefixCls + "-btn-wrapper",
                },
                t_btn,
              ),
          ),
          E &&
            o.createElement(
              A_2,
              {
                prefix: t_prefixCls,
                className: t_prefixCls + "-close-btn",
                onClick: this.onClose,
              },
              o.createElement(
                d.V.Provider,
                {
                  value: t_iconPrefix
                    ? {
                        prefixCls: t_iconPrefix,
                      }
                    : {},
                },
                o.createElement(i.A, null),
              ),
            ),
        ),
      );
    }
  };
  t.defaultProps = {
    type: "info",
    showIcon: true,
    noticeType: "message",
    duration: 3000,
  };
  return t;
})(o.Component);
