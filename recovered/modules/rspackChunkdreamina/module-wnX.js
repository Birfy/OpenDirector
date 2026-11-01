import Q from "gx";
let r;
let i;
export var vb;
const toString = Object.prototype.toString;
export function cy(t) {
  return toString.call(t) === "[object Array]";
}
export function Gv(t) {
  return toString.call(t) === "[object Object]";
}
export function EK(t, e) {
  return e.indexOf(t) !== -1;
}
function l(t) {
  return t == null || t === "";
}
function h(t) {
  return (
    Object.prototype.toString.call(t).toLowerCase() === "[object function]"
  );
}
function d(t, e) {
  if (
    typeof t !== "object" ||
    typeof e !== "object" ||
    t === null ||
    e === null
  ) {
    return t === e;
  }
  if (h(t) && h(e)) {
    return t === e || t.toString() === e.toString();
  }
  if (Object.keys(t).length !== Object.keys(e).length) {
    return false;
  }
  for (const n in t) {
    if (!d(t[n], e[n])) {
      return false;
    }
  }
  return true;
}
export function xF() {
  const t = [];
  for (let e = 0; e < arguments.length; e++) {
    t[e] = arguments[e];
  }
  for (var n = t.length, r = [], i = 0; i < n; i++) {
    ((e) => {
      const n = t[e];
      if (n) {
        if (toString.call(n) === "[object String]") {
          r.push(n);
        } else if (cy(n)) {
          r = r.concat(n);
        } else if (Gv(n)) {
          Object.keys(n).forEach((t) => {
            if (n[t]) {
              r.push(t);
            }
          });
        } else {
          throw Error(
            "[classnames] Arguments must be one of string/array/object. Current value: " +
              (JSON.stringify(n) || String(n)),
          );
        }
      }
    })(i);
  }
  return r.join(" ");
}
const m = typeof Float32Array === "function";
function p(t, e, n) {
  return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
}
function v(t, e, n) {
  return 3 * (1 - 3 * n + 3 * e) * t * t + 2 * (3 * n - 6 * e) * t + 3 * e;
}
function g(t) {
  return t;
}
function y(t, e, n, r) {
  if (!(t >= 0 && t <= 1 && n >= 0 && n <= 1)) {
    throw Error("bezier x values must be in [0, 1] range");
  }
  if (t === e && n === r) {
    return g;
  }
  const i = m ? new Float32Array(11) : Array(11);
  for (let o = 0; o < 11; ++o) {
    i[o] = p(0.1 * o, t, n);
  }
  return function (o) {
    if (o === 0 || o === 1) {
      return o;
    }
    return p(
      ((e) => {
        let r = 0;
        for (var o = 1; o !== 10 && i[o] <= e; ++o) {
          r += 0.1;
        }
        const a = r + ((e - i[--o]) / (i[o + 1] - i[o])) * 0.1;
        const s = v(a, t, n);
        if (s >= 0.001) {
          let u = a;
          for (let c = 0; c < 4; ++c) {
            const l = v(u, t, n);
            if (l === 0) {
              break;
            }
            const h = p(u, t, n) - e;
            u -= h / l;
          }
          return u;
        }
        if (s === 0) {
          return a;
        }
        return ((t, e, n, r, i) => {
          let o;
          let a;
          let s = 0;
          do {
            if ((o = p((a = e + (n - e) / 2), r, i) - t) > 0) {
              n = a;
            } else {
              e = a;
            }
          } while (Math.abs(o) > 1e-7 && ++s < 10);
          return a;
        })(e, r, r + 0.1, t, n);
      })(o),
      e,
      r,
    );
  };
}
function b(t) {
  if (t.cancelable) {
    t.preventDefault();
  }
}
export function gC(
  t = function () {
    return document.body;
  },
  e,
  n,
) {
  const r = t();
  if (r) {
    r.style.overflow = "hidden";
    r.style.touchAction = "none";
    (e ? window : r).addEventListener("touchmove", n || b, {
      passive: false,
      capture: true,
    });
  }
}
export function ic(
  t = function () {
    return document.body;
  },
  e,
  n,
) {
  const r = t();
  if (r) {
    r.style.overflow = "";
    r.style.touchAction = "";
    (e ? window : r).removeEventListener("touchmove", n || b, {
      capture: true,
    });
  }
}
export function c5(t, e) {
  if (!t || !e) {
    return false;
  }
  if (t.contains) {
    return t.contains(e);
  }
  for (let n = e; n;) {
    if (t === n) {
      return true;
    }
    n = n.parentNode;
  }
  return false;
}
export function T7(t) {
  try {
    return requestAnimationFrame(t);
  } catch (e) {
    return setTimeout(t, 17);
  }
}
export function YU(t, e, n, r = 300, i = [0.34, 0.69, 0.1, 1], o = "to") {
  const a = o === "by" ? t + e : e;
  const s = Date.now();
  const u = function () {
    const e = (Date.now() - s) / r;
    if (e > 1) {
      n(a);
    } else {
      n(t + (a - t) * y.apply(undefined, i)(e));
      T7(u);
    }
  };
  T7(u);
}
export function NJ(t, e) {
  const child =
    document.querySelector("#" + t) || document.createElement("div");
  child.id = t;
  const container = e && e() ? e() : document.body;
  container.appendChild(child);
  return {
    child,
    container,
  };
}
export function Nz(t) {
  if (t && t.parentNode) {
    t.parentNode.removeChild(t);
  }
}
export function Ks(t) {
  const e = t ? t() : undefined;
  if (typeof e === "string") {
    return document.querySelector(e);
  }
  return e;
}
export function JC(t) {
  const e = t ? t() : window;
  if (e === document.body) {
    return window;
  }
  return e;
}
export function Z3(t, e) {
  const n = e ? e() : window;
  if (!n) {
    return 0;
  }
  if (n === window || n === document) {
    const r = {
      clientHeight: "innerHeight",
      clientWidth: "innerWidth",
    }[t];
    const i = document.documentElement[t];
    if (r && window[r] && i) {
      return Math.min(window[r], i);
    }
    return i || document.body[t];
  }
  if (n === document.body) {
    return document.body[t] || document.documentElement[t];
  }
  return n[t];
}
export function nS(t) {
  let containerRect = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    width: 0,
  };
  if (!t) {
    return {
      isGlobal: false,
      scrollEle: t,
      containerRect,
    };
  }
  const n = t === window ? document.documentElement : t;
  const isGlobal = n === document.documentElement || n === document.body;
  containerRect = isGlobal
    ? {
        top: 0,
        left: 0,
        bottom: window.innerHeight,
        right: window.innerWidth,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : n.getBoundingClientRect();
  return {
    isGlobal,
    scrollEle: n,
    containerRect,
  };
}
const N = {};
export function Jz(t) {
  const e = N[t];
  if (e) {
    document.documentElement.removeChild(e);
    delete N[t];
  }
}
export function mR(t, e) {
  if (e && Object.keys(e).length) {
    let n;
    let r;
    n =
      ":root {" +
      Object.keys(e)
        .map((t) => "--" + t + ": " + e[t] + ";")
        .join("\n") +
      "}";
    Jz(t);
    r = document.createElement("style");
    r.innerHTML = n;
    document.documentElement.appendChild(r);
    N[t] = r;
  }
}
export function $k(t, e) {
  const n = window.getComputedStyle(t)[e];
  if (/ms$/.test(n)) {
    return Number(n.replace("ms", "")) || 0;
  }
  if (/s$/.test(n)) {
    return 1000 * (Number(n.replace("s", "")) || 0);
  }
  return 0;
}
export function mm(t) {
  try {
    return window.getComputedStyle(t);
  } catch (t) {
    return {};
  }
}
export function DU(t, e, n) {
  if (typeof e === "string") {
    t.displayName = e;
    if (n && Object.keys(n).length) {
      Object.keys(n).forEach((e) => {
        t[e] = n[e];
      });
    }
  } else {
    Object.keys(e).forEach((n) => {
      t[n] = e[n];
    });
  }
  return t;
}
export function S5() {
  try {
    const t = navigator.userAgent;
    const e = t.indexOf("Android") > -1 || t.indexOf("Linux") > -1;
    const n = t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (e || n) {
      if (e) {
        return "android";
      }
      return "ios";
    }
    return "pc";
  } catch (t) {
    return "";
  }
}
const k = "%s 不是 %s 类型";
export var q = {
  locale: "zh-CN",
  LoadMore: {
    loadMoreText: "加载更多",
    loadingText: "正在努力加载中...",
    prepareText: "上拉/点击加载更多",
    noDataText: "没有更多数据了",
    failLoadText: "加载失败，点击重试",
    prepareScrollText: "上拉",
    prepareClickText: "点击",
  },
  Picker: {
    okText: "确认",
    cancelText: "取消",
  },
  Tag: {
    addTag: "添加标签",
  },
  Dialog: {
    okText: "确认",
    cancelText: "取消",
  },
  SwipeLoad: {
    normalText: "更多",
    activeText: "释放查看",
  },
  PullRefresh: {
    loadingText: "加载中...",
    pullingText: "下拉即可刷新",
    finishText: "刷新成功",
    loosingText: "释放即可刷新",
  },
  DropdownMenu: {
    select: "请选择",
  },
  Pagination: {
    previousPage: "上一页",
    nextPage: "下一页",
  },
  Image: {
    loadError: "重试",
  },
  ImagePicker: {
    loadError: "加载失败",
  },
  SearchBar: {
    placeholder: "请输入要查询的内容",
    cancelBtn: "取消",
  },
  Stepper: {
    minusButtonName: "减少",
    addButtonName: "增加",
  },
  Keyboard: {
    confirm: "完成",
  },
  Form: {
    required: "%s 为必填项",
    type: {
      email: k,
      url: k,
      string: k,
      number: k,
      array: k,
      object: k,
      boolean: k,
    },
    number: {
      min: "`%s` 小于 `%s`",
      max: "`%s` 大于 `%s`",
      equal: "`%s` 不等于 `%s`",
      range: "`%s` 不在 `%s ~ %s` 范围中 ",
      positive: "`%s` 不是正数",
      negative: "`%s`不是负数",
    },
    string: {
      max: "%s 超过 %s 个字符",
      min: "%s 少于 %s 个字符",
      len: "%s 字符个数应为 %s",
      match: "`%s` 不匹配 %s 模式",
      uppercase: "%s 需全为大写字符",
      lowercase: "%s 需全为小写字符",
      whitespace: "%s 不能为连续空格",
    },
    array: {
      max: "%s 数组长度大于 %s",
      min: "%s 数组长度小于 %s",
      len: "%s 数组长度需为 %s",
      includes: "%s 不包含 %s",
      deepEqual: "%s 不完全等于 %s",
    },
    object: {
      deepEqual: "%s 不完全等于 %s",
      hasKeys: "%s 不包含必要字段 %s",
    },
    boolean: {
      equal: "%s 不等于 `%s`",
    },
  },
  NavBar: {
    backBtnAriaLabel: "返回",
  },
};
export class ZI {
  constructor(t, e) {
    this.date = new Date(t);
    this.utc = e;
  }
  getFullYear() {
    if (this.utc) {
      return this.date.getUTCFullYear();
    }
    return this.date.getFullYear();
  }
  getMonth() {
    if (this.utc) {
      return this.date.getUTCMonth();
    }
    return this.date.getMonth();
  }
  getDate() {
    if (this.utc) {
      return this.date.getUTCDate();
    }
    return this.date.getDate();
  }
  getHours() {
    if (this.utc) {
      return this.date.getUTCHours();
    }
    return this.date.getHours();
  }
  getMinutes() {
    if (this.utc) {
      return this.date.getUTCMinutes();
    }
    return this.date.getMinutes();
  }
  getSeconds() {
    if (this.utc) {
      return this.date.getUTCSeconds();
    }
    return this.date.getSeconds();
  }
  setFullYear() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCFullYear.apply(t, n);
    }
    return (e = this.date).setFullYear.apply(e, n);
  }
  setMonth() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCMonth.apply(t, n);
    }
    return (e = this.date).setMonth.apply(e, n);
  }
  setDate() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCDate.apply(t, n);
    }
    return (e = this.date).setDate.apply(e, n);
  }
  setHours() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCHours.apply(t, n);
    }
    return (e = this.date).setHours.apply(e, n);
  }
  setMinutes() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCMinutes.apply(t, n);
    }
    return (e = this.date).setMinutes.apply(e, n);
  }
  setSeconds() {
    let t;
    let e;
    const n = [];
    for (let r = 0; r < arguments.length; r++) {
      n[r] = arguments[r];
    }
    if (this.utc) {
      return (t = this.date).setUTCSeconds.apply(t, n);
    }
    return (e = this.date).setSeconds.apply(e, n);
  }
  getTime() {
    return this.date.getTime();
  }
}
r = vb || (vb = {});
r.Number = "number";
r.String = "string";
r.Array = "array";
r.Boolean = "boolean";
r.Object = "object";
r.Custom = "custom";
const P = "%s is not a %s type";
const z = {
  required: "%s is required",
  type: {
    email: P,
    url: P,
    string: P,
    number: P,
    array: P,
    object: P,
    boolean: P,
  },
  number: {
    min: "`%s` is not greater than `%s`",
    max: "`%s` is not less than `%s`",
    equal: "`%s` is not equal to `%s`",
    range: "`%s` is not in range `%s ~ %s`",
    positive: "`%s` is not a positive number",
    negative: "`%s` is not a negative number",
  },
  string: {
    max: "%s cannot be longer than %s characters",
    min: "%s must be at least %s characters",
    len: "%s must be exactly %s characters",
    match: "`%s` does not match the pattern %s",
    uppercase: "%s must be all uppercased",
    lowercase: "%s must be all lowercased",
    whitespace: "%s cannot be string of whitespace",
  },
  array: {
    max: "%s cannot be greater than %s in length",
    min: "%s cannot be less than %s in length",
    len: "%s must be exactly %s in length",
    includes: "%s is not includes %s",
    deepEqual: "%s is not deep equal with%s",
  },
  object: {
    deepEqual: "%s is not deep equal with %s",
    hasKeys: "%s does not contain required fields %s",
  },
  boolean: {
    equal: "%s is not equal to `%s`",
  },
};
const V = (curValidMsgTemplate, e, n) => {
  const r = e.split(".");
  let i = P;
  if (r[0] in curValidMsgTemplate) {
    const o = curValidMsgTemplate[r[0]];
    i =
      Object.prototype.toString.call(o).toLowerCase() === "[object object]" &&
      r.length > 1 &&
      r[1] in curValidMsgTemplate[r[0]]
        ? o[r[1]]
        : o;
  }
  let a = 0;
  return i.replace(/%s/g, (t) => {
    if (a < n.length) {
      return n[a++];
    }
    return t;
  });
};
i = function (t, e) {
  return (i =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (t, e) {
        t.__proto__ = e;
      }) ||
    function (t, e) {
      for (const n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
};
const U = (t, e) => {
  function n() {
    this.constructor = t;
  }
  i(t, e);
  t.prototype =
    e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
};
const G = (() => {
  function t(t, e, n) {
    this.value = t;
    let r;
    const { message, ...rest } = e;
    this.message = (message === undefined ? "" : message) || "";
    this.type = e.type || vb.String;
    this.error = {
      value: t,
      message: [],
      errorTypes: [],
    };
    this.field = n.field || "";
    this.rule = rest;
    this.validateRules = [];
    this.curValidMsgTemplate =
      ((r = n.validateMessage) &&
        Object.keys(z).forEach((t) => {
          const e = z[t];
          const n = r == null ? undefined : r[t];
          z[t] = Gv(e)
            ? {
                ...e,
                ...n,
              }
            : n || e;
        }),
      z);
  }
  t.prototype.isRequired = function () {
    let t;
    return (
      !(
        l(this.value) ||
        (cy((t = this.value)) && !(t == null ? undefined : t.length))
      ) ||
      ((this.error.message = [
        this.message || V(this.curValidMsgTemplate, "required", [this.field]),
      ]),
      (this.error.errorTypes = ["required"]),
      false)
    );
  };
  t.prototype.addError = function (t, e) {
    let n;
    if (e) {
      this.error.errorTypes.push(t);
      if ((n = this.error.message) != null) {
        n.push(e);
      }
    }
  };
  t.prototype.dealError = function (t, e) {
    let n;
    const e_errTemplate = e.errTemplate;
    const e_values = e.values;
    if (t) {
      const o =
        this.message || V(this.curValidMsgTemplate, e_errTemplate, e_values);
      this.error.errorTypes.push(e_errTemplate);
      if ((n = this.error.message) != null) {
        n.push(o);
      }
      return o;
    }
    return "";
  };
  t.prototype.getErrors = function () {
    return this.error;
  };
  return t;
})();
const K = ((t) => {
  function e(e, n, r) {
    const i = t.call(this, e, n, r) || this;
    i.validateRules = ["min", "max", "equal", "positive", "negative"];
    return i;
  }
  U(e, t);
  e.prototype.min = function (t) {
    this.dealError(!l(this.value) && this.value < t, {
      errTemplate: "number.min",
      values: [this.field, "" + t],
    });
  };
  e.prototype.max = function (t) {
    this.dealError(!l(this.value) && this.value > t, {
      errTemplate: "number.max",
      values: [this.field, "" + t],
    });
  };
  e.prototype.equal = function (t) {
    return this.dealError(!l(this.value) && this.value !== t, {
      errTemplate: "number.equal",
      values: [this.field, "" + t],
    });
  };
  e.prototype.positive = function () {
    return this.dealError(!l(this.value) && this.value < 0, {
      errTemplate: "number.positive",
      values: [this.field],
    });
  };
  e.prototype.negative = function () {
    return this.dealError(!l(this.value) && this.value > 0, {
      errTemplate: "number.negative",
      values: [this.field],
    });
  };
  return e;
})(G);
const Z = ((t) => {
  function e(e, n, r) {
    const i = t.call(this, e, n, r) || this;
    i.validateRules = [
      "min",
      "max",
      "len",
      "match",
      "uppercase",
      "lowercase",
      "whitespace",
    ];
    return i;
  }
  U(e, t);
  e.prototype.min = function (t) {
    return this.dealError(!l(this.value) && this.value.length < t, {
      errTemplate: "string.min",
      values: [this.field, "" + t],
    });
  };
  e.prototype.max = function (t) {
    return this.dealError(!l(this.value) && this.value.length > t, {
      errTemplate: "string.max",
      values: [this.field, "" + t],
    });
  };
  e.prototype.len = function (t) {
    return this.dealError(!l(this.value) && this.value !== t, {
      errTemplate: "string.equal",
      values: [this.field, "" + t],
    });
  };
  e.prototype.match = function (t) {
    const e = new RegExp(t);
    return this.dealError(!l(this.value) && !e.test(this.value), {
      errTemplate: "string.match",
      values: [this.field, t],
    });
  };
  e.prototype.uppercase = function (t) {
    const e = (this.value || "").toLocaleUpperCase() === this.value;
    return this.dealError(!l(this.value) && e !== t, {
      errTemplate: "string.uppercase",
      values: [this.field],
    });
  };
  e.prototype.lowercase = function (t) {
    const e = (this.value || "").toLocaleLowerCase() === this.value;
    return this.dealError(!l(this.value) && e !== t, {
      errTemplate: "string.lowercase",
      values: [this.field],
    });
  };
  e.prototype.whitespace = function () {
    return this.dealError(!l(this.value) && l(this.value.trim()), {
      errTemplate: "string.whitespace",
      values: [this.field],
    });
  };
  return e;
})(G);
const J = ((t) => {
  function e(e, n, r) {
    const i = t.call(this, e, n, r) || this;
    i.validateRules = ["min", "max", "deepEqual", "includes"];
    return i;
  }
  U(e, t);
  e.prototype.min = function (t) {
    return this.dealError(!l(this.value) && this.value.length < t, {
      errTemplate: "array.min",
      values: [this.field, "" + t],
    });
  };
  e.prototype.max = function (t) {
    return this.dealError(!l(this.value) && this.value.length > t, {
      errTemplate: "array.max",
      values: [this.field, "" + t],
    });
  };
  e.prototype.deepEqual = function (t) {
    return this.dealError(!d(this.value, t), {
      errTemplate: "array.equal",
      values: [this.field, "" + JSON.stringify(t)],
    });
  };
  e.prototype.includes = function (t) {
    const e = this;
    return this.dealError(
      t.some((t) => !e.value.includes(t)),
      {
        errTemplate: "array.includes",
        values: [this.field, "" + JSON.stringify(t)],
      },
    );
  };
  return e;
})(G);
const W = ((t) => {
  function e(e, n, r) {
    const i = t.call(this, e, n, r) || this;
    i.validateRules = ["deepEqual", "hasKeys"];
    return i;
  }
  U(e, t);
  e.prototype.deepEqual = function (t) {
    return this.dealError(!d(this.value, t), {
      errTemplate: "object.deepEqual",
      values: [this.field, "" + JSON.stringify(t)],
    });
  };
  e.prototype.hasKeys = function (t) {
    const e = l(this.value) ? [] : Object.keys(this.value);
    return this.dealError(!l(this.value) && t.some((t) => !e.includes(t)), {
      errTemplate: "object.hasKeys",
      values: [this.field, "" + JSON.stringify(t)],
    });
  };
  return e;
})(G);
const $ = ((t) => {
  function e(e, n, r) {
    return t.call(this, e, n, r) || this;
  }
  U(e, t);
  e.prototype.validator = function (t) {
    const e = this;
    if (t) {
      return new Promise((resolve) => {
        const r = t(e.value, function (t = "") {
          return e.addError("custom", t || "");
        });
        if (r && (r == null ? undefined : r.then)) {
          r.then(() => resolve(e.getErrors()));
        } else {
          resolve(e.getErrors());
        }
      });
    }
    return null;
  };
  return e;
})(G);
const te = function () {
  let t = 0;
  for (var e = 0, n = arguments.length; e < n; e++) {
    t += arguments[e].length;
  }
  const r = Array(t);
  let i = 0;
  for (var e = 0; e < n; e++) {
    const o = arguments[e];
    for (let a = 0, s = o.length; a < s; a++, i++) {
      r[i] = o[a];
    }
  }
  return r;
};
export class Dr {
  constructor(t, e) {
    this.rules = t;
    this.options = {
      first: true,
      ...(e || {}),
    };
  }
  createValidatorGroup(t, e, field) {
    let r;
    const i = {
      field,
      validateMessage:
        (r = this.options) == null ? undefined : r.validateMessages,
    };
    return {
      number: new K(t, e, i),
      array: new J(t, e, i),
      string: new Z(t, e, i),
      object: new W(t, e, i),
      custom: new $(t, e, i),
    };
  }
  getSingleValidateGroup(t, e, n) {
    const r = (e == null ? undefined : e.type) || "string";
    const i = [];
    const o = this.createValidatorGroup(t, e, n);
    const a = r in o ? o[r] : null;
    if (e.required) {
      i.push(
        new Q.Promise(function (t) {
          o.string.isRequired();
          const n = o.string.getErrors();
          t({
            ...n,
            validateLevel: (e == null ? undefined : e.validateLevel) || "error",
          });
        }),
      );
    }
    if (a) {
      Object.keys(e).map((t) => {
        if (t === "validator") {
          const n = e.validator
            ? o.custom.validator(e.validator || null)
            : null;
          if (n) {
            i.push(n);
          }
          return;
        }
        if (a.validateRules.includes(t)) {
          i.push(
            new Q.Promise(function (n) {
              if (a.validateRules.includes(t)) {
                a[t](e[t]);
              }
              const r = a.getErrors();
              n({
                ...r,
                validateLevel:
                  (e == null ? undefined : e.validateLevel) || "error",
              });
            }),
          );
        }
      });
    }
    return i;
  }
  singleValidate(t) {
    const e = this;
    let n = 0;
    return new Q.Promise(function (r) {
      const i = (o) => {
        o.then((o) => {
          let a;
          if (
            e.options.first &&
            ((a = o.message || []) == null ? undefined : a.length) > 0
          ) {
            return r(o);
          }
          if (n < t.length - 1) {
            i(t[++n]);
          } else {
            r({});
          }
        });
      };
      i(t[n]);
    });
  }
  validate(t, e) {
    const n = this;
    const r = [];
    const i = [];
    if (this.rules) {
      Object.keys(this.rules).forEach((e) => {
        let o = [];
        if (cy(n.rules[e])) {
          for (let a = 0; a < n.rules[e].length; a++) {
            const u = n.rules[e][a];
            o = te(o, n.getSingleValidateGroup(t[e], u, e));
          }
        }
        if (o.length) {
          r.push(n.singleValidate(o));
          i.push(e);
        }
      });
    }
    if (r.length > 0) {
      Q.Promise.all(r).then((t) => {
        const n = t.reduce((acc, item, index) => {
          if (!(i[index] in acc)) {
            acc[i[index]] = [];
          }
          acc[i[index]].push(item);
          return acc;
        }, {});
        if (e) {
          e(n);
        }
      });
    } else if (e) {
      e({});
    }
  }
}
export function G6(t, e, n) {
  n = n || {};
  n.childrenKeyName = n.childrenKeyName || "children";
  let r = t || [];
  const i = [];
  let o = 0;
  do {
    let a = r.find((t) => e(t, o));
    if (!(a || n.fallbackChildIndex === undefined)) {
      a = r[n.fallbackChildIndex];
    }
    if (!a) {
      break;
    }
    i.push(a);
    r = a[n.childrenKeyName] || [];
    o += 1;
  } while (r.length > 0);
  return i;
}
export function dY(t) {
  setTimeout(t, 20);
}
