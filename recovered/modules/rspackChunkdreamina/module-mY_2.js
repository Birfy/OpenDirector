import a from "oa";
import c from "bk";
import u from "z8";
import d from "bT";
import { A as locale } from "./module-Vy_4.js";
import { Et, Gv, b0 } from "./module-V9.js";
import { A as A_1 } from "./module-cB_2.js";
import v from "rS";
import g from "zP7";
import { X } from "./module-Y5R.js";
import { A as A_2 } from "./module-AL.js";
import { A as A_3 } from "./module-OSv.js";
import { A as A_4 } from "./module-Ww_2.js";
import { A as A_5 } from "./module-Ru_5.js";
import P from "qa";
import $ from "fyk";
import "U4";
import { V } from "./module-Tb.js";
import { A as A_6 } from "./module-k6B.js";
import { ub } from "./module-pw_2.js";
import { A as A_7 } from "./module-Sc_2.js";
let r;
let o;
let duration;
let l;
let s;
function h(e, t) {
  let n = ((e) => {
    let t;
    let n;
    let r;
    t = [];
    n = e.substr(1);
    if (e.length === 3) {
      n = e.replace(/(.)/g, "$1$1");
    }
    n.replace(/../g, (e) => {
      t.push(parseInt(e, 16));
    });
    let o = {
      r: (r = {
        r: t[0],
        g: t[1],
        b: t[2],
        rgb: `rgb(${t.join(",")})`,
      }).r,
      g: r.g,
      b: r.b,
    };
    let i = ((e, t, n) => {
      let h_1;
      let s_1;
      let i = e / 255;
      let l = t / 255;
      let s = n / 255;
      let a = Math.max(i, l, s);
      let c = Math.min(i, l, s);
      let l_1 = (a + c) / 2;
      if (a === c) {
        h_1 = 0;
        s_1 = 0;
      } else {
        let e = a - c;
        s_1 = l_1 > 0.5 ? e / (2 - a - c) : e / (a + c);
        switch (a) {
          case i:
            h_1 = (l - s) / e + 6 * (l < s);
            break;
          case l:
            h_1 = (s - i) / e + 2;
            break;
          case s:
            h_1 = (i - l) / e + 4;
        }
        h_1 /= 6;
      }
      return {
        h: h_1,
        s: s_1,
        l: l_1,
        hsl: `hsl(${360 * h_1}, ${100 * s_1}%, ${100 * l_1}%)`,
      };
    })(o.r, o.g, o.b);
    return {
      h: i.h,
      s: i.s,
      l: i.l,
    };
  })(e);
  return ((e) => {
    let t;
    let n;
    let r;
    let o = e[0] / 360;
    let i = e[1] / 100;
    let l = e[2] / 100;
    if (i === 0) {
      return [(r = 255 * l), r, r];
    }
    t = l < 0.5 ? l * (1 + i) : l + i - l * i;
    let s = 2 * l - t;
    let a = [0, 0, 0];
    for (let e = 0; e < 3; e++) {
      if ((n = o + -((1 / 3) * (e - 1))) < 0) {
        n++;
      }
      if (n > 1) {
        n--;
      }
      r =
        6 * n < 1
          ? s + (t - s) * 6 * n
          : 2 * n < 1
            ? t
            : 3 * n < 2
              ? s + (t - s) * (2 / 3 - n) * 6
              : s;
      a[e] = 255 * r;
    }
    return a;
  })([
    360 * Number(n.h),
    100 * Number(n.s),
    100 * Number(n.l) + Number(t),
  ]).join(",");
}
let O = {};
class C extends A_2 {
  render() {
    let classNames;
    let { notices } = this.state;
    let { prefixCls, rtl } = this.props;
    let { position } = this.state;
    let l = b0(rtl) ? s : rtl;
    if (b0(position)) {
      position = l ? "topLeft" : "topRight";
    }
    let iconPrefix = prefixCls || o;
    let p = iconPrefix ? `${iconPrefix}-notification` : "lv-notification";
    classNames =
      position === "topLeft" || position === "bottomLeft"
        ? "slideNoticeLeft"
        : "slideNoticeRight";
    let h = A_4(`${p}-wrapper`, `${p}-wrapper-${position}`, {
      [`${p}-wrapper-rtl`]: s,
    });
    return u.jsx("div", {
      className: h,
      children: u.jsx(v.A, {
        component: null,
        children: notices.map((t) =>
          u.jsx(
            g.A,
            {
              timeout: {
                enter: 400,
                exit: 300,
              },
              classNames,
              onExit: (e) => {
                e.style.height = `${e.scrollHeight}px`;
              },
              onExiting: (e) => {
                e.style.height = 0;
              },
              onExited: (e) => {
                e.style.height = 0;
                if (t.onClose) {
                  t.onClose();
                }
              },
              children: u.jsx(
                A_3,
                c._(a._({}, t), {
                  onClose: this.remove,
                  prefixCls: p,
                  iconPrefix,
                  noticeType: "notification",
                  rtl: l,
                }),
              ),
            },
            t.id,
          ),
        ),
      }),
    });
  }
  constructor(...e) {
    super(...e);
    this.remove = (e) => {
      let t = this.state.notices.find((t) => t.id === e);
      if (t) {
        this.update(
          c._(a._({}, t), {
            style: c._(a._({}, t.style), {
              opacity: 0,
            }),
          }),
        );
      }
      setTimeout(() => {
        super.remove(e);
      }, 200);
    };
  }
}
C.config = (e = {}) => {
  if (e.maxCount) {
    r = e.maxCount;
  }
  if (e.prefixCls) {
    o = e.prefixCls;
  }
  if (Et(e.duration)) {
    duration = e.duration;
  }
  if (e.rtl) {
    s = e.rtl;
  }
  if (e.getContainer && e.getContainer() !== l) {
    l = e.getContainer();
    Object.keys(O).forEach((e) => O[e].clear());
    O = {};
  }
};
C.clear = () => {
  Object.keys(O).forEach((e) => {
    O[e].clear();
  });
};
C.remove = (e) => {
  Object.keys(O).forEach((t) => {
    O[t].remove(e);
  });
};
C.addInstance = (e) => {
  let { position } = e;
  if (b0(e.position)) {
    position = s ? "topLeft" : "topRight";
  }
  let n = a._(
    {
      duration,
    },
    e,
  );
  if (O[position]) {
    let { notices } = O[position].state;
    if (notices.length >= r) {
      let r = notices[0];
      notices.shift();
      O[position].add(
        c._(a._({}, n), {
          id: r.id,
        }),
      );
    } else {
      O[position].add(n);
    }
    return O[position];
  }
  let o = document.createElement("div");
  (l || document.body).appendChild(o);
  X(
    u.jsx(C, {
      ref: (e) => {
        O[position] = e;
        O[position].add(n);
        return O[position];
      },
    }),
    o,
  );
};
["info", "success", "error", "warning", "normal"].forEach((e) => {
  C[e] = (t) =>
    C.addInstance(
      c._(a._({}, t), {
        type: e,
      }),
    );
});
C.useNotification = function (e = {}) {
  let t;
  let { maxCount, duration = 3000, prefixCls } = e;
  let i = d.createRef();
  let l = u.jsx(A_5, {
    ref: i,
  });
  let s = {};
  let p = {};
  ["info", "success", "warning", "error", "normal"].forEach((e) => {
    p[e] = (l) =>
      ((e) => {
        let l;
        let d;
        let id;
        if (i.current) {
          let e = i.current.getContextConfig();
          d = e.rtl;
          l = e.prefixCls;
        }
        let prefixCls_1 = prefixCls || l;
        let { position } = e;
        if (b0(e.position)) {
          position = d ? "topLeft" : "topRight";
        }
        let v = a._(
          {
            duration,
          },
          e,
        );
        if (s[position]) {
          let { notices } = s[position].state;
          if (notices.length >= maxCount) {
            id = notices[0].id;
            notices.shift();
            s[position].add(
              c._(a._({}, v), {
                id,
              }),
            );
          } else {
            id = s[position].add(v);
          }
        } else {
          t = u.jsx(N, {
            ref: (e) => {
              s[position] = e;
              if (s[position]) {
                id = s[position].add(v);
              }
            },
            prefixCls: prefixCls_1,
            rtl: d,
          });
          i.current.addInstance(t);
        }
        return s[position];
      })(
        c._(a._({}, l), {
          type: e,
        }),
      );
  });
  return [p, l];
};
var N = C;
const S = d.forwardRef(function (e, t) {
  const prefixCls = d.useContext(V).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-empty-color"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return d.createElement(
    "svg",
    $(
      {
        fill: "none",
        viewBox: "0 0 48 48",
        stroke: "currentColor",
      },
      l,
    ),
    d.createElement("rect", {
      width: "35.825",
      height: "29.594",
      x: "11.269",
      y: "12.427",
      fill: "var(--lvv-color-main-02)",
      strokeWidth: "0",
      rx: "2",
      transform: "rotate(7.839 11.27 12.427)",
    }),
    d.createElement("path", {
      fill: "var(--lvv-color-text-secondary)",
      strokeWidth: "0",
      d: "M12.6 15h28.8c.424 0 .831.17 1.131.472.3.302.469.712.469 1.14v25.777c0 .427-.169.837-.469 1.14-.3.301-.707.471-1.131.471H12.6c-.424 0-.831-.17-1.131-.472a1.617 1.617 0 0 1-.469-1.14V16.612c0-.427.169-.837.469-1.14.3-.301.707-.471 1.131-.471Zm27.2 17.722h-5.466a8.043 8.043 0 0 1-2.95 3.52 7.962 7.962 0 0 1-8.768 0 8.043 8.043 0 0 1-2.95-3.52H14.2v8.056h25.6v-8.056Zm0-3.222V18.222H14.2V29.5h8a4.85 4.85 0 0 0 1.406 3.418A4.783 4.783 0 0 0 27 34.333c1.273 0 2.494-.509 3.394-1.415A4.85 4.85 0 0 0 31.8 29.5h8Z",
    }),
    d.createElement("path", {
      stroke: "var(--lvv-color-text-secondary)",
      d: "M40.3 32.722v-.5H34.006l-.13.301a7.544 7.544 0 0 1-2.768 3.301 7.462 7.462 0 0 1-8.216 0 7.544 7.544 0 0 1-2.768-3.3l-.13-.302H13.7v9.056h26.6v-8.556ZM11.823 43.176l-.352.35.352-.35a1.117 1.117 0 0 1-.323-.787V16.61c0-.296.117-.579.323-.787.207-.208.486-.324.777-.324h28.8c.29 0 .57.116.777.324.206.208.323.491.323.787V42.39c0 .296-.117.579-.323.787a1.095 1.095 0 0 1-.777.324H12.6c-.29 0-.57-.116-.777-.324ZM39.8 30h.5V17.722H13.7V30h8.023a5.348 5.348 0 0 0 1.528 3.27A5.283 5.283 0 0 0 27 34.833a5.283 5.283 0 0 0 3.749-1.563A5.348 5.348 0 0 0 32.277 30H39.8Z",
    }),
    d.createElement("path", {
      stroke: "var(--lvv-color-text-secondary)",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "m12.553 9.796-1.294-4.83M6.617 16.044l-4.83-1.294M20.509 9.617l2.113-4.532",
    }),
  );
});
S.defaultProps = {
  isIcon: true,
};
S.displayName = "IconEmptyColor";
let R = d.forwardRef(function (e, t) {
  let { getPrefixCls, locale, componentConfig } = d.useContext(QO);
  let i = A_6(
    e,
    {},
    componentConfig == null ? undefined : componentConfig.Empty,
  );
  let { style, className, description, icon, imgSrc } = i;
  let m = P._(i, ["style", "className", "description", "icon", "imgSrc"]);
  let v = getPrefixCls("empty");
  let g = A_4(v, className);
  let { noData } = locale.Empty;
  let alt = typeof description === "string" ? description : "empty";
  return u.jsx(
    "div",
    c._(
      a._(
        {
          ref: t,
          className: g,
          style,
        },
        m,
      ),
      {
        children: u.jsxs("div", {
          className: `${v}-wrapper`,
          children: [
            u.jsx("div", {
              className: `${v}-image`,
              children: imgSrc
                ? u.jsx("img", {
                    alt,
                    src: imgSrc,
                  })
                : icon || u.jsx(S, {}),
            }),
            u.jsx("div", {
              className: `${v}-description`,
              children: description || noData,
            }),
          ],
        }),
      },
    ),
  );
});
R.displayName = "Empty";
const I = d.memo(R);
let W = {
  primaryColor: {
    default: "--arcoblue-6",
    hover: "--arcoblue-5",
    active: "--arcoblue-7",
  },
  successColor: {
    default: "--green-6",
    hover: "--green-5",
    active: "--green-7",
  },
  infoColor: {
    default: "--arcoblue-6",
    hover: "--arcoblue-5",
    active: "--arcoblue-7",
  },
  warningColor: {
    default: "--orangered-6",
    hover: "--orangered-5",
    active: "--orangered-7",
  },
  dangerColor: {
    default: "--red-6",
    hover: "--red-5",
    active: "--red-7",
  },
};
let B = {
  locale,
  prefixCls: "lv",
  getPopupContainer: () => document.body,
  size: "default",
  renderEmpty: function (e) {
    return u.jsx(I, {});
  },
  focusLock: {
    modal: {
      autoFocus: true,
    },
    drawer: {
      autoFocus: true,
    },
  },
};
let H = {};
export let QO = d.createContext(
  a._(
    {
      getPrefixCls: (e, t) => `${t || "lv"}-${e}`,
    },
    B,
  ),
);
export function Ay(e) {
  let t = A_6(e, B, H);
  let {
    theme,
    prefixCls,
    children,
    locale,
    rtl,
    effectGlobalNotice = true,
  } = t;
  d.useEffect(() => {
    if (theme && Gv(theme)) {
      let e = document.body;
      Object.keys(W).forEach((t) => {
        if (theme[t]) {
          e.style.setProperty(W[t].default, h(theme[t], 0));
          if (!theme[`${t}Hover`]) {
            e.style.setProperty(W[t].hover, h(theme[t], 10));
          }
          if (!theme[`${t}Active`]) {
            e.style.setProperty(W[t].active, h(theme[t], -10));
          }
        }
      });
    }
  }, [theme]);
  d.useEffect(() => {
    if (effectGlobalNotice) {
      A_1.config({
        prefixCls,
        rtl,
      });
      N.config({
        prefixCls,
        rtl,
      });
    }
  }, [prefixCls, rtl, effectGlobalNotice]);
  let value = c._(a._({}, A_7(t, ["children"])), {
    getPrefixCls: function (e, t) {
      return `${t || prefixCls}-${e}`;
    },
  });
  d.useEffect(() => {
    ub({
      locale,
      prefixCls,
      rtl,
    });
  }, [locale, prefixCls]);
  let children_1 = children;
  if (prefixCls && prefixCls !== "lv") {
    children_1 = u.jsx(V.Provider, {
      value: {
        prefixCls,
      },
      children,
    });
  }
  return u.jsx(QO.Provider, {
    value,
    children: children_1,
  });
}
Ay.ConfigContext = QO;
Ay.displayName = "ConfigProvider";
QO.Consumer;
