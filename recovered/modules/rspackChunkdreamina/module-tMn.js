import a from "oa";
import c from "bk";
import u from "z8";
import d from "bT";
import { A as A_8 } from "./module-Rn.js";
import { Et, Gv, b0 } from "./module-NnE_2.js";
import { A as A_1 } from "./module-WyQ.js";
import v from "rS";
import g from "zP7";
import { X } from "./module-bg.js";
import { A as A_2 } from "./module-uC_3.js";
import { A as A_3 } from "./module-Bt.js";
import { A as A_4 } from "./module-d1.js";
import { A as A_5 } from "./module-Yp.js";
import { A as A_6 } from "./module-GcM.js";
import { ub } from "./module-DpH.js";
import { V } from "./module-Mt_2.js";
import { A } from "./module-MA.js";
import { A as A_7 } from "./module-oO_3.js";
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
    let className = A_4(`${p}-wrapper`, `${p}-wrapper-${position}`, {
      [`${p}-wrapper-rtl`]: s,
    });
    return u.jsx("div", {
      className,
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
  let ref = d.createRef();
  let l = u.jsx(A_5, {
    ref,
  });
  let s = {};
  let p = {};
  ["info", "success", "warning", "error", "normal"].forEach((e) => {
    p[e] = (l) =>
      ((e) => {
        let l;
        let d;
        let id;
        if (ref.current) {
          let e = ref.current.getContextConfig();
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
          ref.current.addInstance(t);
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
let _ = {
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
let M = {
  locale: A_8,
  prefixCls: "lv",
  getPopupContainer: () => document.body,
  size: "default",
  renderEmpty: function (e) {
    return u.jsx(A_6, {});
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
let T = {};
export let QO = d.createContext(
  a._(
    {
      getPrefixCls: (e, t) => `${t || "lv"}-${e}`,
    },
    M,
  ),
);
export function Ay(e) {
  let t = A_7(e, M, T);
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
      Object.keys(_).forEach((t) => {
        if (theme[t]) {
          e.style.setProperty(_[t].default, h(theme[t], 0));
          if (!theme[`${t}Hover`]) {
            e.style.setProperty(_[t].hover, h(theme[t], 10));
          }
          if (!theme[`${t}Active`]) {
            e.style.setProperty(_[t].active, h(theme[t], -10));
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
  let value = c._(a._({}, A(t, ["children"])), {
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
export let TG = QO.Consumer;
