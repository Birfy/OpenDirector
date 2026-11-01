import r from "z8";
import o from "bT";
import { A } from "./module-O3.js";
import { A as A_1 } from "./module-F6U.js";
import { A as A_2 } from "./module-Gqi.js";
import { A as A_3 } from "./module-eA_2.js";
import { A as A_4 } from "./module-hl_2.js";
import { A as A_5 } from "./module-fk_4.js";
import { A as A_6 } from "./module-d1.js";
import { A as A_7 } from "./module-feV.js";
import { V } from "./module-Mt_2.js";
class h extends o.Component {
  componentDidMount() {
    this.startTimer();
  }
  componentDidUpdate(e) {
    if (e.duration !== this.props.duration || this.props.update) {
      this.removeTimer();
      this.startTimer();
    }
  }
  componentWillUnmount() {
    this.removeTimer();
  }
  render() {
    let {
      title,
      content,
      showIcon,
      className,
      style,
      type,
      btn,
      icon,
      prefixCls,
      closable,
      noticeType,
      iconPrefix,
      rtl,
    } = this.props;
    let className_1 = A_6(
      prefixCls,
      `${prefixCls}-${type}`,
      {
        [`${prefixCls}-closable`]: closable,
        [`${prefixCls}-rtl`]: rtl,
      },
      className,
    );
    let b = !("closable" in this.props) || closable;
    let x = showIcon;
    if (!(type !== "normal" || icon)) {
      x = false;
    }
    if (noticeType === "message") {
      b = closable;
      return r.jsx("div", {
        style: {
          textAlign: "center",
        },
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: r.jsxs("div", {
          className: className_1,
          style,
          role: "alert",
          children: [
            x && this.renderIcon(),
            r.jsx("span", {
              className: `${prefixCls}-content`,
              children: content,
            }),
            b &&
              r.jsx(A_7, {
                prefix: prefixCls,
                className: `${prefixCls}-close-btn`,
                onClick: this.onClose,
                children: r.jsx(A_4, {}),
              }),
          ],
        }),
      });
    }
    if (noticeType === "notification") {
      return r.jsx("div", {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        children: r.jsxs("div", {
          className: className_1,
          style,
          role: "alert",
          children: [
            x &&
              r.jsx("div", {
                className: `${prefixCls}-left`,
                children: this.renderIcon(),
              }),
            r.jsxs("div", {
              className: `${prefixCls}-right`,
              children: [
                title &&
                  r.jsx("div", {
                    className: `${prefixCls}-title`,
                    children: title,
                  }),
                r.jsx("div", {
                  className: `${prefixCls}-content`,
                  children: content,
                }),
                btn &&
                  r.jsx("div", {
                    className: `${prefixCls}-btn-wrapper`,
                    children: btn,
                  }),
              ],
            }),
            b &&
              r.jsx(A_7, {
                prefix: prefixCls,
                className: `${prefixCls}-close-btn`,
                onClick: this.onClose,
                children: r.jsx(V.Provider, {
                  value: iconPrefix
                    ? {
                        prefixCls: iconPrefix,
                      }
                    : {},
                  children: r.jsx(A_4, {}),
                }),
              }),
          ],
        }),
      });
    }
  }
  constructor(...e) {
    super(...e);
    this.startTimer = () => {
      let { duration, onClose, id } = this.props;
      if (duration !== 0) {
        this.timer = window.setTimeout(() => {
          if (onClose) {
            onClose(id);
          }
          this.removeTimer();
        }, duration);
      }
    };
    this.removeTimer = () => {
      if (this.timer) {
        window.clearTimeout(this.timer);
        this.timer = null;
      }
    };
    this.onClose = () => {
      if (this.props.onClose) {
        this.props.onClose(this.props.id);
      }
    };
    this.renderIcon = () => {
      let children;
      let { showIcon, icon, type, prefixCls, iconPrefix } = this.props;
      if (icon) {
        children = icon;
      } else if (showIcon) {
        switch (type) {
          case "info":
            children = r.jsx(A, {});
            break;
          case "success":
            children = r.jsx(A_3, {});
            break;
          case "error":
            children = r.jsx(A_1, {});
            break;
          case "warning":
            children = r.jsx(A_2, {});
            break;
          case "loading":
            children = r.jsx(A_5, {});
        }
        children = r.jsx(V.Provider, {
          value: iconPrefix
            ? {
                prefixCls: iconPrefix,
              }
            : {},
          children: r.jsx("div", {
            style: {
              color: type !== "loading" ? "transparent" : undefined,
            },
            children,
          }),
        });
      }
      return r.jsx("span", {
        className: `${prefixCls}-icon`,
        children,
      });
    };
    this.onMouseEnter = () => {
      this.removeTimer();
    };
    this.onMouseLeave = () => {
      this.startTimer();
    };
  }
}
h.defaultProps = {
  type: "info",
  showIcon: true,
  noticeType: "message",
  duration: 3000,
};
var m = h;
export { m as A };
