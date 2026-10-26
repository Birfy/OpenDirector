import u from "bT";
import "tP";
import { Et, Gv, b0 } from "./module-Pl5.js";
import { A as A_1 } from "./module-sdc.js";
import m from "rS";
import v from "zP7";
import { X } from "./module-Z6D.js";
import { A as A_2 } from "./module-Us.js";
import { A as A_3 } from "./module-QqP.js";
import { A as A_4 } from "./module-puV.js";
import { A as A_5 } from "./module-iNu.js";
import A from "os";
import { A as A_6 } from "./module-Bd_2.js";
import { ub } from "./module-rF.js";
import F from "krC";
import { A as A_7 } from "./module-hn.js";
let r;
let o;
let i;
let l;
let a;
let c;
const Calendar = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日",
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月",
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月",
    },
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日",
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日",
    },
  },
};
function p(e, t) {
  const n = ((e) => {
    let t;
    let n;
    let r;
    const o = {
      r: ((t = []),
      (n = e.substr(1)),
      e.length === 3 && (n = e.replace(/(.)/g, "$1$1")),
      n.replace(/../g, (e) => {
        t.push(parseInt(e, 16));
      }),
      (r = {
        r: t[0],
        g: t[1],
        b: t[2],
        rgb: "rgb(" + t.join(",") + ")",
      })).r,
      g: r.g,
      b: r.b,
    };
    const i = ((e, t, n) => {
      let h;
      let s_1;
      const i = e / 255;
      const l = t / 255;
      const a = n / 255;
      const c = Math.max(i, l, a);
      const u = Math.min(i, l, a);
      const l_1 = (c + u) / 2;
      if (c === u) {
        h = 0;
        s_1 = 0;
      } else {
        const f = c - u;
        s_1 = l_1 > 0.5 ? f / (2 - c - u) : f / (c + u);
        switch (c) {
          case i:
            h = (l - a) / f + 6 * (l < a);
            break;
          case l:
            h = (a - i) / f + 2;
            break;
          case a:
            h = (i - l) / f + 4;
        }
        h /= 6;
      }
      return {
        h,
        s: s_1,
        l: l_1,
        hsl: `hsl(${360 * h}, ${100 * s_1}%, ${100 * l_1}%)`,
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
    const o = e[0] / 360;
    const i = e[1] / 100;
    const l = e[2] / 100;
    if (i === 0) {
      return [(r = 255 * l), r, r];
    }
    t = l < 0.5 ? l * (1 + i) : l + i - l * i;
    const a = 2 * l - t;
    const c = [0, 0, 0];
    for (let u = 0; u < 3; u++) {
      if ((n = o + -((1 / 3) * (u - 1))) < 0) {
        n++;
      }
      if (n > 1) {
        n--;
      }
      r =
        6 * n < 1
          ? a + (t - a) * 6 * n
          : 2 * n < 1
            ? t
            : 3 * n < 2
              ? a + (t - a) * (2 / 3 - n) * 6
              : a;
      c[u] = 255 * r;
    }
    return c;
  })([360 * n.h, 100 * n.s, 100 * n.l + +t]).join(",");
}
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
const C = (e, t) => {
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
let O = {};
const S = ((e) => {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    t.remove = function (n) {
      const r = t.state.notices.find((e) => e.id === n);
      if (r) {
        t.update({
          ...r,
          style: {
            ...r.style,
            opacity: 0,
          },
        });
      }
      setTimeout(() => {
        e.prototype.remove.call(t, n);
      }, 200);
    };
    return t;
  }
  C(t, e);
  t.prototype.render = function () {
    let classNames;
    const n = this;
    const notices = this.state.notices;
    const props = this.props;
    const o_prefixCls = props.prefixCls;
    const o_rtl = props.rtl;
    let position = this.state.position;
    const p = b0(o_rtl) ? c : o_rtl;
    if (b0(position)) {
      position = p ? "topLeft" : "topRight";
    }
    const iconPrefix = o_prefixCls || i;
    const h = iconPrefix ? iconPrefix + "-notification" : "arco-notification";
    classNames =
      position === "topLeft" || position === "bottomLeft"
        ? "slideNoticeLeft"
        : "slideNoticeRight";
    const y = A_4(h + "-wrapper", h + "-wrapper-" + position, {
      [h + "-wrapper-rtl"]: c,
    });
    return u.createElement(
      "div",
      {
        className: y,
      },
      u.createElement(
        m.A,
        {
          component: null,
        },
        notices.map((e) =>
          u.createElement(
            v.A,
            {
              key: e.id,
              timeout: {
                enter: 400,
                exit: 300,
              },
              classNames,
              onExit: function (e) {
                e.style.height = e.scrollHeight + "px";
              },
              onExiting: function (e) {
                e.style.height = 0;
              },
              onExited: function (t) {
                t.style.height = 0;
                if (e.onClose) {
                  e.onClose();
                }
              },
            },
            u.createElement(A_3, {
              ...e,
              onClose: n.remove,
              prefixCls: h,
              iconPrefix,
              noticeType: "notification",
              rtl: p,
            }),
          ),
        ),
      ),
    );
  };
  t.config = function (e = {}) {
    if (e.maxCount) {
      o = e.maxCount;
    }
    if (e.prefixCls) {
      i = e.prefixCls;
    }
    if (Et(e.duration)) {
      l = e.duration;
    }
    if (e.rtl) {
      c = e.rtl;
    }
    if (e.getContainer && e.getContainer() !== a) {
      a = e.getContainer();
      Object.values(O).forEach((e) => {
        const e_instance = e.instance;
        if (e_instance == null) {
          return undefined;
        }
        return e_instance.clear();
      });
      O = {};
    }
  };
  t.clear = function () {
    Object.values(O).forEach((e) => {
      const e_instance = e.instance;
      if (e_instance != null) {
        e_instance.clear();
      }
    });
  };
  t.remove = function (e) {
    Object.values(O).forEach((t) => {
      const t_instance = t.instance;
      if (t_instance != null) {
        t_instance.remove(e);
      }
    });
  };
  t.addInstance = function (e) {
    let e_position = e.position;
    if (b0(e.position)) {
      e_position = c ? "topLeft" : "topRight";
    }
    const r = {
      duration: l,
      ...e,
    };
    const i = O[e_position] || {};
    const i_instance = i.instance;
    const i_pending = i.pending;
    if (i_instance || i_pending) {
      const d = () => {
        const instance = (O[e_position] || {}).instance;
        const notices = instance.state.notices;
        if (notices.length >= o) {
          const i = notices[0];
          notices.shift();
          instance.add({
            ...r,
            id: i.id,
          });
        } else {
          instance.add(r);
        }
        return instance;
      };
      if (i_instance) {
        d();
      } else if (i_pending == null ? undefined : i_pending.then) {
        i_pending.then(() => {
          d();
          O[e_position].pending = null;
        });
      }
      return i_instance;
    }
    const m = document.createElement("div");
    (a || document.body).appendChild(m);
    O[e_position] = {};
    O[e_position].pending = new Promise((resolve) => {
      X(
        u.createElement(t, {
          ref: function (t) {
            O[e_position].instance = t;
            t.add(r);
            resolve(null);
            return t;
          },
        }),
        m,
      );
    });
    return O[e_position].instance;
  };
  return t;
})(A_2);
["info", "success", "error", "warning", "normal"].forEach((e) => {
  S[e] = function (t) {
    return S.addInstance({
      ...t,
      type: e,
    });
  };
});
S.useNotification = function (e = {}) {
  let t;
  const e_maxCount = e.maxCount;
  const e_duration = e.duration;
  const duration = e_duration === undefined ? 3000 : e_duration;
  const e_prefixCls = e.prefixCls;
  const l = u.createRef();
  const a = u.createElement(A_5, {
    ref: l,
  });
  const c = {};
  const s = {};
  ["info", "success", "warning", "error", "normal"].forEach((e) => {
    s[e] = function (r) {
      return ((e) => {
        if (l.current) {
          var r;
          var a;
          var id;
          const p = l.current.getContextConfig();
          a = p.rtl;
          r = p.prefixCls;
        }
        const prefixCls = e_prefixCls || r;
        let e_position = e.position;
        if (b0(e.position)) {
          e_position = a ? "topLeft" : "topRight";
        }
        const v = {
          duration,
          ...e,
        };
        if (c[e_position]) {
          const h = c[e_position].state.notices;
          if (h.length >= e_maxCount) {
            id = h[0].id;
            h.shift();
            c[e_position].add({
              ...v,
              id,
            });
          } else {
            id = c[e_position].add(v);
          }
        } else {
          t = u.createElement(P, {
            ref: function (e) {
              c[e_position] = e;
              if (c[e_position]) {
                id = c[e_position].add(v);
              }
            },
            prefixCls,
            rtl: a,
          });
          l.current.addInstance(t);
        }
        return c[e_position];
      })({
        ...r,
        type: e,
      });
    };
  });
  return [s, a];
};
var P = S;
const j = u.forwardRef(function (e, ref) {
  const n = u.useContext(QO);
  const n_getPrefixCls = n.getPrefixCls;
  const n_locale = n.locale;
  const n_componentConfig = n.componentConfig;
  const l = A_6(
    e,
    {},
    n_componentConfig == null ? undefined : n_componentConfig.Empty,
  );
  const { style, className, description, icon, imgSrc, ...rest } = l;
  const m = n_getPrefixCls("empty");
  const v = A_4(m, className);
  const noData = n_locale.Empty.noData;
  const alt = typeof description === "string" ? description : "empty";
  return u.createElement(
    "div",
    {
      ref,
      className: v,
      style,
      ...rest,
    },
    u.createElement(
      "div",
      {
        className: m + "-wrapper",
      },
      u.createElement(
        "div",
        {
          className: m + "-image",
        },
        imgSrc
          ? u.createElement("img", {
              alt,
              src: imgSrc,
            })
          : icon || u.createElement(A.A, null),
      ),
      u.createElement(
        "div",
        {
          className: m + "-description",
        },
        description || noData,
      ),
    ),
  );
});
j.displayName = "Empty";
const R = u.memo(j);
const V = {
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
const D = {
  locale: {
    locale: "zh-CN",
    dayjsLocale: "zh-cn",
    Calendar,
    DatePicker: {
      Calendar,
      placeholder: {
        date: "请选择日期",
        week: "请选择周",
        month: "请选择月份",
        year: "请选择年份",
        quarter: "请选择季度",
      },
      placeholders: {
        date: ["开始日期", "结束日期"],
        week: ["开始周", "结束周"],
        month: ["开始月份", "结束月份"],
        year: ["开始年份", "结束年份"],
        quarter: ["开始季度", "结束季度"],
      },
      selectTime: "选择时间",
      selectDate: "选择日期",
      today: "今天",
      now: "此刻",
      ok: "确定",
    },
    Drawer: {
      okText: "确定",
      cancelText: "取消",
    },
    Empty: {
      noData: "暂无数据",
    },
    Modal: {
      okText: "确定",
      cancelText: "取消",
    },
    Pagination: {
      goto: "前往",
      page: "页",
      countPerPage: "条/页",
      total: "共 {0} 条",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {0} 页",
      prevSomePages: "向前 {0} 页",
      nextSomePages: "向后 {0} 页",
      pageSize: "页码",
    },
    Popconfirm: {
      okText: "确定",
      cancelText: "取消",
    },
    Table: {
      okText: "确定",
      resetText: "重置",
      sortAscend: "点击升序",
      sortDescend: "点击降序",
      cancelSort: "取消排序",
    },
    TimePicker: {
      ok: "确定",
      placeholder: "请选择时间",
      placeholders: ["开始时间", "结束时间"],
      now: "此刻",
    },
    Progress: {
      success: "完成",
      error: "失败",
    },
    Upload: {
      start: "开始",
      cancel: "取消",
      delete: "删除",
      reupload: "点击重试",
      upload: "点击上传",
      preview: "预览",
      drag: "点击或拖拽文件到此处上传",
      dragHover: "释放文件并开始上传",
      error: "上传失败",
    },
    Typography: {
      copy: "复制",
      copied: "已复制",
      edit: "编辑",
      fold: "折叠",
      unfold: "展开",
    },
    Transfer: {
      resetText: "重置",
    },
    ImagePreview: {
      fullScreen: "全屏",
      rotateRight: "向右旋转",
      rotateLeft: "向左旋转",
      zoomIn: "放大",
      zoomOut: "缩小",
      originalSize: "原始尺寸",
    },
    Form: {
      validateMessages: {
        required: "#{field} 是必填项",
        type: {
          string: "#{field} 不是合法的文本类型",
          number: "#{field} 不是合法的数字类型",
          boolean: "#{field} 不是合法的布尔类型",
          array: "#{field} 不是合法的数组类型",
          object: "#{field} 不是合法的对象类型",
          url: "#{field} 不是合法的 url 地址",
          email: "#{field} 不是合法的邮箱地址",
          ip: "#{field} 不是合法的 IP 地址",
        },
        number: {
          min: "`#{value}` 小于最小值 `#{min}`",
          max: "`#{value}` 大于最大值 `#{max}`",
          equal: "`#{value}` 不等于 `#{equal}`",
          range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
          positive: "`#{value}` 不是正数",
          negative: "`#{value}` 不是负数",
        },
        array: {
          length: "`#{field}` 个数不等于 #{length}",
          minLength: "`#{field}` 个数最少为 #{minLength}",
          maxLength: "`#{field}` 个数最多为 #{maxLength}",
          includes: "#{field} 不包含 #{includes}",
          deepEqual: "#{field} 不等于 #{deepEqual}",
          empty: "`#{field}` 不是空数组",
        },
        string: {
          minLength: "字符数最少为 #{minLength}",
          maxLength: "字符数最多为 #{maxLength}",
          length: "字符数必须是 #{length}",
          match: "`#{value}` 不符合模式 #{pattern}",
          uppercase: "`#{value}` 必须全大写",
          lowercase: "`#{value}` 必须全小写",
        },
        object: {
          deepEqual: "`#{field}` 不等于期望值",
          hasKeys: "`#{field}` 不包含必须字段",
          empty: "`#{field}` 不是对象",
        },
        boolean: {
          true: "期望是 `true`",
          false: "期望是 `false`",
        },
      },
    },
  },
  prefixCls: "arco",
  getPopupContainer: function () {
    return document.body;
  },
  size: "default",
  renderEmpty: function (e) {
    return u.createElement(R, null);
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
const z = {};
export var QO = u.createContext({
  getPrefixCls: function (e, t) {
    return (t || "arco") + "-" + e;
  },
  ...D,
});
export function Ay(e) {
  const t = A_6(e, D, z);
  const t_theme = t.theme;
  const t_prefixCls = t.prefixCls;
  const t_children = t.children;
  const t_locale = t.locale;
  const t_rtl = t.rtl;
  const t_effectGlobalNotice = t.effectGlobalNotice;
  const c = t_effectGlobalNotice === undefined || t_effectGlobalNotice;
  u.useEffect(
    function () {
      if (t_theme && Gv(t_theme)) {
        const e = document.body;
        Object.keys(V).forEach((t) => {
          if (t_theme[t]) {
            e.style.setProperty(V[t].default, p(t_theme[t], 0));
            if (!t_theme[t + "Hover"]) {
              e.style.setProperty(V[t].hover, p(t_theme[t], 10));
            }
            if (!t_theme[t + "Active"]) {
              e.style.setProperty(V[t].active, p(t_theme[t], -10));
            }
          }
        });
      }
    },
    [t_theme],
  );
  u.useEffect(
    function () {
      if (c) {
        A_1.config({
          prefixCls: t_prefixCls,
          rtl: t_rtl,
        });
        P.config({
          prefixCls: t_prefixCls,
          rtl: t_rtl,
        });
      }
    },
    [t_prefixCls, t_rtl, c],
  );
  const value = {
    ...A_7(t, ["children"]),
    getPrefixCls: function (e, t) {
      return (t || t_prefixCls) + "-" + e;
    },
  };
  u.useEffect(
    function () {
      ub({
        locale: t_locale,
        prefixCls: t_prefixCls,
        rtl: t_rtl,
      });
    },
    [t_locale, t_prefixCls],
  );
  let m = t_children;
  if (t_prefixCls && t_prefixCls !== "arco") {
    m = u.createElement(
      F.V.Provider,
      {
        value: {
          prefixCls: t_prefixCls,
        },
      },
      t_children,
    );
  }
  return u.createElement(
    QO.Provider,
    {
      value,
    },
    m,
  );
}
Ay.ConfigContext = QO;
Ay.displayName = "ConfigProvider";
QO.Consumer;
