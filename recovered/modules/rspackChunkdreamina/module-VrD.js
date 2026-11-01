import _ from "NRL";
import * as M from "./module-pgv.js";
import et from "B6z";
import tD from "Xqd";
import iC from "pg9";
import iw from "Yfo";
function o(e, t, i) {
  t = u(t);
  return p(
    e,
    d() ? Reflect.construct(t, i || [], u(e).constructor) : t.apply(e, i),
  );
}
function s(e, t) {
  if (!(e instanceof t)) {
    throw TypeError("Cannot call a class as a function");
  }
}
function r(e, t) {
  for (let i = 0; i < t.length; i++) {
    const n = t[i];
    n.enumerable = n.enumerable || false;
    n.configurable = true;
    if ("value" in n) {
      n.writable = true;
    }
    Object.defineProperty(e, k(n.key), n);
  }
}
function a(e, t, i) {
  if (t) {
    r(e.prototype, t);
  }
  if (i) {
    r(e, i);
  }
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  return e;
}
function l(e, t, i) {
  if ((t = k(t)) in e) {
    Object.defineProperty(e, t, {
      value: i,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    e[t] = i;
  }
  return e;
}
function c() {
  return (c =
    typeof Reflect !== "undefined" && Reflect.get
      ? Reflect.get.bind()
      : function (e, t, i) {
          const n = ((e, t) => {
            while (!{}.hasOwnProperty.call(e, t) && (e = u(e)) !== null);
            return e;
          })(e, t);
          if (n) {
            const o = Object.getOwnPropertyDescriptor(n, t);
            if (o.get) {
              return o.get.call(arguments.length < 3 ? e : i);
            }
            return o.value;
          }
        }).apply(null, arguments);
}
function u(e) {
  return (u = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function h(e, t) {
  if (typeof t !== "function" && t !== null) {
    throw TypeError("Super expression must either be null or a function");
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(e, "prototype", {
    writable: false,
  });
  if (t) {
    v(e, t);
  }
}
function d() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (e) {}
  return (d = function () {
    return !!e;
  })();
}
function p(e, t) {
  if (t && (typeof t === "object" || typeof t === "function")) {
    return t;
  }
  if (t !== undefined) {
    throw TypeError("Derived constructors may only return object or undefined");
  }
  if (e === undefined) {
    throw ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return e;
}
function v(e, t) {
  return (v = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
function m(e, t, i, n) {
  const o = c(u(1 & n ? e.prototype : e), t, i);
  if (2 & n && typeof o === "function") {
    return function (e) {
      return o.apply(i, e);
    };
  }
  return o;
}
function k(e) {
  const t = ((e, t) => {
    if (typeof e !== "object" || !e) {
      return e;
    }
    const i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      const n = i.call(e, t || "default");
      if (typeof n !== "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  })(e, "string");
  if (typeof t === "symbol") {
    return t;
  }
  return t + "";
}
function C(e) {
  return (C =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          if (
            e &&
            typeof Symbol === "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
          ) {
            return "symbol";
          }
          return typeof e;
        })(e);
}
export { M as Events };
const T =
  typeof window !== "undefined" &&
  window.location &&
  window.location.href.indexOf("xgplayerdebugger=1") > -1;
const E = "%c[xgplayer]";
const b = {
  config: {
    debug: 3 * !!T,
  },
  logInfo: function (e) {
    let t;
    for (
      var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1;
      o < i;
      o++
    ) {
      n[o - 1] = arguments[o];
    }
    if (this.config.debug >= 3) {
      (t = console).log.apply(
        t,
        [E, "color: #525252; background-color: #90ee90;", e].concat(n),
      );
    }
  },
  logWarn: function (e) {
    let t;
    for (
      var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1;
      o < i;
      o++
    ) {
      n[o - 1] = arguments[o];
    }
    if (this.config.debug >= 1) {
      (t = console).warn.apply(
        t,
        [E, "color: #525252; background-color: yellow; ", e].concat(n),
      );
    }
  },
  logError: function (e) {
    if (!(this.config.debug < 1)) {
      let t;
      const i = this.config.debug >= 2 ? "trace" : "error";
      for (
        var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1;
        s < n;
        s++
      ) {
        o[s - 1] = arguments[s];
      }
      (t = console)[i].apply(
        t,
        [E, "color: #525252; background-color: red;", e].concat(o),
      );
    }
  },
};
const x = a(
  function e(t) {
    s(this, e);
    this.bufferedList = t;
  },
  [
    {
      key: "start",
      value: function (e) {
        return this.bufferedList[e].start;
      },
    },
    {
      key: "end",
      value: function (e) {
        return this.bufferedList[e].end;
      },
    },
    {
      key: "length",
      get: function () {
        return this.bufferedList.length;
      },
    },
  ],
);
export var Util = {};
function S(e) {
  const t = C(e);
  return e !== null && (t === "object" || t === "function");
}
Util.createDom = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const n =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  const o = document.createElement(e);
  o.className = n;
  o.innerHTML = t;
  Object.keys(i).forEach((t) => {
    const n = i[t];
    if (e === "video" || e === "audio" || e === "live-video") {
      if (n) {
        o.setAttribute(t, n);
      }
    } else {
      o.setAttribute(t, n);
    }
  });
  return o;
};
Util.createDomFromHtml = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  try {
    let n = document.createElement("div");
    n.innerHTML = e;
    let o = n.children;
    n = null;
    if (o.length > 0) {
      o = o[0];
      if (i) {
        Util.addClass(o, i);
      }
      if (t) {
        Object.keys(t).forEach((e) => {
          o.setAttribute(e, t[e]);
        });
      }
      return o;
    }
    return null;
  } catch (error) {
    b.logError("util.createDomFromHtml", error);
    return null;
  }
};
Util.hasClass = function (e, t) {
  if (!e || !t) {
    return false;
  }
  try {
    return Array.prototype.some.call(e.classList, function (e) {
      return e === t;
    });
  } catch (n) {
    const i =
      e.className && C(e.className) === "object"
        ? e.getAttribute("class")
        : e.className;
    return i && !!i.match(RegExp("(\\s|^)" + t + "(\\s|$)"));
  }
};
Util.addClass = function (e, t) {
  if (e && t) {
    try {
      t.replace(/(^\s+|\s+$)/g, "")
        .split(/\s+/g)
        .forEach((t) => {
          if (t) {
            e.classList.add(t);
          }
        });
    } catch (i) {
      if (!Util.hasClass(e, t)) {
        if (e.className && C(e.className) === "object") {
          e.setAttribute("class", e.getAttribute("class") + " " + t);
        } else {
          e.className += " " + t;
        }
      }
    }
  }
};
Util.removeClass = function (e, t) {
  if (e && t) {
    try {
      t.replace(/(^\s+|\s+$)/g, "")
        .split(/\s+/g)
        .forEach((t) => {
          if (t) {
            e.classList.remove(t);
          }
        });
    } catch (i) {
      if (Util.hasClass(e, t)) {
        t.split(/\s+/g).forEach((t) => {
          const i = RegExp("(\\s|^)" + t + "(\\s|$)");
          if (e.className && C(e.className) === "object") {
            e.setAttribute("class", e.getAttribute("class").replace(i, " "));
          } else {
            e.className = e.className.replace(i, " ");
          }
        });
      }
    }
  }
};
Util.toggleClass = function (e, t) {
  if (e) {
    t.split(/\s+/g).forEach((t) => {
      if (Util.hasClass(e, t)) {
        Util.removeClass(e, t);
      } else {
        Util.addClass(e, t);
      }
    });
  }
};
Util.classNames = function () {
  const e = arguments;
  const t = [];
  const i = (i) => {
    if (Util.typeOf(e[i]) === "String") {
      t.push(e[i]);
    } else if (Util.typeOf(e[i]) === "Object") {
      Object.keys(e[i]).map((n) => {
        if (e[i][n]) {
          t.push(n);
        }
      });
    }
  };
  for (let n = 0; n < arguments.length; n++) {
    i(n);
  }
  return t.join(" ");
};
Util.findDom = function () {
  let e;
  const t =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : document;
  const i = arguments.length > 1 ? arguments[1] : undefined;
  try {
    e = t.querySelector(i);
  } catch (error) {
    b.logError("util.findDom", error);
    if (i.indexOf("#") === 0) {
      e = t.getElementById(i.slice(1));
    }
  }
  return e;
};
Util.getCss = function (e, t) {
  if (e.currentStyle) {
    return e.currentStyle[t];
  }
  return document.defaultView.getComputedStyle(e, false)[t];
};
Util.padStart = function (e, t, i) {
  const n = String(i);
  const o = 0 | t;
  for (var s = Math.ceil(o / n.length), r = [], a = String(e); s--;) {
    r.push(n);
  }
  return r.join("").substring(0, o - a.length) + a;
};
Util.format = function (e) {
  if (window.isNaN(e)) {
    return "";
  }
  e = Math.round(e);
  const t = Util.padStart(Math.floor(e / 3600), 2, 0);
  const i = Util.padStart(Math.floor((e - 3600 * t) / 60), 2, 0);
  const n = Util.padStart(Math.floor(e - 3600 * t - 60 * i), 2, 0);
  return (t === "00" ? [i, n] : [t, i, n]).join(":");
};
Util.event = function (e) {
  if (e.touches) {
    const t = e.touches[0] || e.changedTouches[0];
    e.clientX = t.clientX || 0;
    e.clientY = t.clientY || 0;
    e.offsetX = t.pageX - t.target.offsetLeft;
    e.offsetY = t.pageY - t.target.offsetTop;
  }
  e._target = e.target || e.srcElement;
};
Util.typeOf = function (e) {
  return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0];
};
Util.deepCopy = function (e, t) {
  if (Util.typeOf(t) === "Object" && Util.typeOf(e) === "Object") {
    Object.keys(t).forEach((i) => {
      if (Util.typeOf(t[i]) !== "Object" || t[i] instanceof Node) {
        if (Util.typeOf(t[i]) === "Array") {
          e[i] = Util.typeOf(e[i]) === "Array" ? e[i].concat(t[i]) : t[i];
        } else {
          e[i] = t[i];
        }
      } else if (e[i] === undefined || e[i] === undefined) {
        e[i] = t[i];
      } else {
        Util.deepCopy(e[i], t[i]);
      }
    });
    return e;
  }
};
Util.deepMerge = function (e, t) {
  Object.keys(t).map((i) => {
    if (Util.typeOf(t[i]) === "Array" && Util.typeOf(e[i]) === "Array") {
      if (Util.typeOf(e[i]) === "Array") {
        let n;
        (n = e[i]).push.apply(n, [...t[i]]);
      }
    } else {
      if (
        Util.typeOf(e[i]) !== Util.typeOf(t[i]) ||
        e[i] === null ||
        Util.typeOf(e[i]) !== "Object" ||
        t[i] instanceof window.Node
      ) {
        if (t[i] !== null) {
          e[i] = t[i];
        }
      } else {
        Util.deepMerge(e[i], t[i]);
      }
    }
  });
  return e;
};
Util.getBgImage = function (e) {
  const backgroundImage = (e.currentStyle || window.getComputedStyle(e, null))
    .backgroundImage;
  if (!backgroundImage || backgroundImage === "none") {
    return "";
  }
  const i = document.createElement("a");
  i.href = backgroundImage.replace(/url\("|"\)/g, "");
  return i.href;
};
Util.copyDom = function (e) {
  if (!e || e.nodeType !== 1) {
    return "";
  }
  const t = document.createElement(e.tagName);
  Array.prototype.forEach.call(e.attributes, function (e) {
    t.setAttribute(e.name, e.value);
  });
  if (e.innerHTML) {
    t.innerHTML = e.innerHTML;
  }
  return t;
};
Util.setInterval = function (e, t, i, n) {
  if (!e._interval[t]) {
    e._interval[t] = window.setInterval(i.bind(e), n);
  }
};
Util.clearInterval = function (e, t) {
  clearInterval(e._interval[t]);
  e._interval[t] = null;
};
Util.setTimeout = function (e, t, i) {
  if (!e._timers) {
    e._timers = [];
  }
  var n = setTimeout(() => {
    t();
    Util.clearTimeout(e, n);
  }, i);
  e._timers.push(n);
  return n;
};
Util.clearTimeout = function (e, t) {
  const e__timers = e._timers;
  if (Util.typeOf(e__timers) === "Array") {
    for (let n = 0; n < e__timers.length; n++) {
      if (e__timers[n] === t) {
        e__timers.splice(n, 1);
        clearTimeout(t);
        break;
      }
    }
  } else {
    clearTimeout(t);
  }
};
Util.clearAllTimers = function (e) {
  const e__timers = e._timers;
  if (Util.typeOf(e__timers) === "Array") {
    e__timers.map((e) => {
      clearTimeout(e);
    });
    e._timerIds = [];
  }
};
Util.createImgBtn = function (e, t, i, n) {
  let o;
  let s;
  let r;
  const a = Util.createDom(
    "xg-".concat(e),
    "",
    {},
    "xgplayer-".concat(e, "-img"),
  );
  a.style.backgroundImage = 'url("'.concat(t, '")');
  if (i && n) {
    ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(
      (e) =>
        !(i.indexOf(e) > -1 && n.indexOf(e) > -1) ||
        ((o = parseFloat(i.slice(0, i.indexOf(e)).trim())),
        (s = parseFloat(n.slice(0, n.indexOf(e)).trim())),
        (r = e),
        false),
    );
    a.style.width = "".concat(o).concat(r);
    a.style.height = "".concat(s).concat(r);
    a.style.backgroundSize = "".concat(o).concat(r, " ").concat(s).concat(r);
    if (e === "start") {
      a.style.margin = `-${s / 2}`
        .concat(r, " auto auto -")
        .concat(o / 2)
        .concat(r);
    } else {
      a.style.margin = "auto 5px auto 5px";
    }
  }
  return a;
};
Util.Hex2RGBA = function (e, t) {
  const i = [];
  if (/^\#[0-9A-F]{3}$/i.test(e)) {
    let n = "#";
    e.replace(/[0-9A-F]/gi, (e) => {
      n += e + e;
    });
    e = n;
  }
  if (/^#[0-9A-F]{6}$/i.test(e)) {
    e.replace(/[0-9A-F]{2}/gi, (e) => {
      i.push(parseInt(e, 16));
    });
    return "rgba(".concat(i.join(","), ", ").concat(t, ")");
  }
  return "rgba(255, 255, 255, 0.1)";
};
Util.getFullScreenEl = function () {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};
Util.checkIsFunction = function (e) {
  return e && typeof e === "function";
};
Util.checkIsObject = function (e) {
  return e !== null && C(e) === "object";
};
Util.hide = function (e) {
  e.style.display = "none";
};
Util.show = function (e, t) {
  e.style.display = t || "block";
};
Util.isUndefined = function (e) {
  if (e == null) {
    return true;
  }
};
Util.isNotNull = function (e) {
  return e != null;
};
Util.setStyleFromCsstext = function (e, t) {
  if (t) {
    if (Util.typeOf(t) === "String") {
      t.replace(/\s+/g, "")
        .split(";")
        .map((t) => {
          if (t) {
            const i = t.split(":");
            if (i.length > 1) {
              e.style[i[0]] = i[1];
            }
          }
        });
    } else {
      Object.keys(t).map((i) => {
        e.style[i] = t[i];
      });
    }
  }
};
Util.filterStyleFromText = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : [
          "width",
          "height",
          "top",
          "left",
          "bottom",
          "right",
          "position",
          "z-index",
          "padding",
          "margin",
          "transform",
        ];
  const cssText = e.style.cssText;
  if (!cssText) {
    return {};
  }
  const n = cssText.replace(/\s+/g, "").split(";");
  const o = {};
  const s = {};
  n.map((e) => {
    if (e) {
      const i = e.split(":");
      if (i.length > 1) {
        if (
          ((e, t) => {
            for (let i = 0, n = t.length; i < n; i++) {
              if (e.indexOf(t[i]) > -1) {
                return true;
              }
            }
            return false;
          })(i[0], t)
        ) {
          o[i[0]] = i[1];
        } else {
          s[i[0]] = i[1];
        }
      }
    }
  });
  e.setAttribute("style", "");
  Object.keys(s).map((t) => {
    e.style[t] = s[t];
  });
  return o;
};
Util.getStyleFromCsstext = function (e) {
  const cssText = e.style.cssText;
  if (!cssText) {
    return {};
  }
  const i = cssText.replace(/\s+/g, "").split(";");
  const n = {};
  i.map((e) => {
    if (e) {
      const t = e.split(":");
      if (t.length > 1) {
        n[t[0]] = t[1];
      }
    }
  });
  return n;
};
Util.preloadImg = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : function () {};
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : function () {};
  if (e) {
    let n = new window.Image();
    n.onload = function (e) {
      n = null;
      if (t) {
        t(e);
      }
    };
    n.onerror = function (e) {
      n = null;
      if (i) {
        i(e);
      }
    };
    n.src = e;
  }
};
Util.stopPropagation = function (e) {
  if (e) {
    e.stopPropagation();
  }
};
Util.scrollTop = function () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};
Util.scrollLeft = function () {
  return (
    window.pageXOffset ||
    document.documentElement.scrollLeft ||
    document.body.scrollLeft ||
    0
  );
};
Util.checkTouchSupport = function () {
  return "ontouchstart" in window;
};
Util.getBuffered2 = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  const i = [];
  for (let n = 0; n < e.length; n++) {
    i.push({
      start: e.start(n) < 0.5 ? 0 : e.start(n),
      end: e.end(n),
    });
  }
  i.sort((e, t) => {
    const i = e.start - t.start;
    return i || t.end - e.end;
  });
  let o = [];
  if (t) {
    for (let s = 0; s < i.length; s++) {
      const r = o.length;
      if (r) {
        const a = o[r - 1].end;
        if (i[s].start - a < t) {
          if (i[s].end > a) {
            o[r - 1].end = i[s].end;
          }
        } else {
          o.push(i[s]);
        }
      } else {
        o.push(i[s]);
      }
    }
  } else {
    o = i;
  }
  return new x(o);
};
Util.getEventPos = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (e.touches && e.touches.length > 0) {
    e = e.touches[0];
  }
  return {
    x: e.x / t,
    y: e.y / t,
    clientX: e.clientX / t,
    clientY: e.clientY / t,
    offsetX: e.offsetX / t,
    offsetY: e.offsetY / t,
    pageX: e.pageX / t,
    pageY: e.pageY / t,
  };
};
Util.requestAnimationFrame = function (e) {
  const t =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  if (t) {
    return t(e);
  }
};
Util.getHostFromUrl = function (e) {
  if (Util.typeOf(e) !== "String") {
    return "";
  }
  const t = e.split("/");
  let i = "";
  if (t.length > 3 && t[2]) {
    i = t[2];
  }
  return i;
};
Util.cancelAnimationFrame = function (e) {
  const t =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.cancelRequestAnimationFrame;
  if (t) {
    t(e);
  }
};
Util.isMSE = function (e) {
  if (e.media) {
    e = e.media;
  }
  return (
    !!e &&
    e instanceof HTMLMediaElement &&
    (/^blob/.test(e.currentSrc) || /^blob/.test(e.src))
  );
};
Util.isBlob = function (e) {
  return typeof e === "string" && /^blob/.test(e);
};
Util.generateSessionId = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let t = new Date().getTime();
  try {
    e = parseInt(e);
  } catch (t) {
    e = 0;
  }
  t += e;
  if (window.performance && typeof window.performance.now === "function") {
    t += parseInt(window.performance.now());
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const i = ((t + 16 * Math.random()) % 16) | 0;
    t = Math.floor(t / 16);
    return (e === "x" ? i : (3 & i) | 8).toString(16);
  });
};
Util.createEvent = function (e) {
  let t;
  if (typeof window.Event === "function") {
    t = new Event(e);
  } else {
    (t = document.createEvent("Event")).initEvent(e, true, true);
  }
  return t;
};
Util.adjustTimeByDuration = function (e, t, i) {
  if (t && e && (e > t || (i && e < t))) {
    return t;
  }
  return e;
};
Util.createPositionBar = function (e, t) {
  const i = Util.createDom(
    "xg-bar",
    "",
    {
      "data-index": -1,
    },
    e,
  );
  t.appendChild(i);
  return i;
};
Util.getTransformStyle = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        };
  let t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const i = {
    scale: "".concat(e.scale || 1),
    translate: "".concat(e.x || 0, "%, ").concat(e.y || 0, "%"),
    rotate: "".concat(e.rotate || 0, "deg"),
  };
  Object.keys(i).forEach((e) => {
    const n = RegExp("".concat(e, "\\([^\\(]+\\)"), "g");
    const o = "".concat(e, "(").concat(i[e], ")");
    if (n.test(t)) {
      n.lastIndex = -1;
      t = t.replace(n, o);
    } else {
      t += "".concat(o, " ");
    }
  });
  return t;
};
Util.convertDeg = function (e) {
  if (Math.abs(e) <= 1) {
    return 360 * e;
  }
  return e % 360;
};
Util.getCurrentTimeByOffset = function (e, t) {
  let i = -1;
  if (!t || t.length < 0) {
    return e;
  }
  for (let n = 0; n < t.length; n++) {
    if (e <= t[n].duration) {
      i = n;
      break;
    }
  }
  if (i !== -1) {
    const o = t[i].start;
    if (i - 1 < 0) {
      return o + e;
    }
    return o + (e - t[i - 1].duration);
  }
  return e;
};
Util.getIndexByTime = function (e, t) {
  const t_length = t.length;
  let n = -1;
  if (t_length < 1) {
    return n;
  }
  if (e <= t[0].end || t_length < 2) {
    n = 0;
  } else if (e > t[t_length - 1].end) {
    n = t_length - 1;
  } else {
    for (let o = 1; o < t_length; o++) {
      if (e > t[o - 1].end && e <= t[o].end) {
        n = o;
        break;
      }
    }
  }
  return n;
};
Util.getOffsetCurrentTime = function (e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  let n = -1;
  if ((n = i >= 0 && i < t.length ? i : Util.getIndexByTime(e, t)) < 0) {
    return -1;
  }
  const t_length = t.length;
  const s = t[n];
  const s_start = s.start;
  const s_end = s.end;
  const s_cTime = s.cTime;
  const s_offset = s.offset;
  if (e < s_start) {
    return s_cTime;
  }
  if (e >= s_start && e <= s_end) {
    return e - s_offset;
  }
  if (e > s_end && n >= t_length - 1) {
    return s_end - s_offset;
  }
  return -1;
};
const I = /(Android)\s([\d.]+)/;
const P = /(Version)\/([\d.]+)/;
const A = [
  "avc1.42E01E, mp4a.40.2",
  "avc1.58A01E, mp4a.40.2",
  "avc1.4D401E, mp4a.40.2",
  "avc1.64001E, mp4a.40.2",
  "avc1.42E01E",
  "mp4v.20.8",
  "mp4v.20.8, mp4a.40.2",
  "mp4v.20.240, mp4a.40.2",
];
export var Sniffer = {
  get device() {
    if (Sniffer.os.isPc) {
      return "pc";
    }
    return "mobile";
  },
  get browser() {
    if (typeof navigator === "undefined") {
      return "";
    }
    const e = navigator.userAgent.toLowerCase();
    const t = {
      ie: /rv:([\d.]+)\) like gecko/,
      firefox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/,
    };
    return [].concat(Object.keys(t).filter((i) => t[i].test(e)))[0];
  },
  get os() {
    if (typeof navigator === "undefined") {
      return {};
    }
    const navigator_userAgent = navigator.userAgent;
    const isWindowsPhone = /(?:Windows Phone)/.test(navigator_userAgent);
    const isSymbian =
      /(?:SymbianOS)/.test(navigator_userAgent) || isWindowsPhone;
    const isAndroid = /(?:Android)/.test(navigator_userAgent);
    const isFireFox = /(?:Firefox)/.test(navigator_userAgent);
    const isIpad =
      /(?:iPad|PlayBook)/.test(navigator_userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isTablet =
      isIpad ||
      (isAndroid && !/(?:Mobile)/.test(navigator_userAgent)) ||
      (isFireFox && /(?:Tablet)/.test(navigator_userAgent));
    const isPhone = /(?:iPhone)/.test(navigator_userAgent) && !isTablet;
    return {
      isTablet,
      isPhone,
      isIpad,
      isIos: isPhone || isIpad,
      isAndroid,
      isPc: !isPhone && !isAndroid && !isSymbian && !isTablet,
      isSymbian,
      isWindowsPhone,
      isFireFox,
    };
  },
  get osVersion() {
    if (typeof navigator === "undefined") {
      return 0;
    }
    const navigator_userAgent = navigator.userAgent;
    let t = "";
    const i = (t = /(?:iPhone)|(?:iPad|PlayBook)/.test(navigator_userAgent)
      ? P
      : I)
      ? t.exec(navigator_userAgent)
      : [];
    if (i && i.length >= 3) {
      const n = i[2].split(".");
      if (n.length > 0) {
        return parseInt(n[0]);
      }
      return 0;
    }
    return 0;
  },
  get isWeixin() {
    return (
      !(typeof navigator === "undefined") &&
      !!/(micromessenger)\/([\d.]+)/.exec(
        navigator.userAgent.toLocaleLowerCase(),
      )
    );
  },
  isSupportMP4: function () {
    const e = {
      isSupport: false,
      mime: "",
    };
    if (typeof document === "undefined") {
      return e;
    }
    if (this.supportResult) {
      return this.supportResult;
    }
    let t = document.createElement("video");
    if (typeof t.canPlayType === "function") {
      A.map((i) => {
        if (
          t.canPlayType('video/mp4; codecs="'.concat(i, '"')) === "probably"
        ) {
          e.isSupport = true;
          e.mime += "||".concat(i);
        }
      });
    }
    this.supportResult = e;
    t = null;
    return e;
  },
  isMSESupport: function () {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
    if (typeof MediaSource === "undefined" || !MediaSource) {
      return false;
    }
    try {
      return MediaSource.isTypeSupported(e);
    } catch (error) {
      this._logger.error(e, error);
      return false;
    }
  },
  isHevcSupported: function () {
    return (
      !(typeof MediaSource === "undefined") &&
      !!MediaSource.isTypeSupported &&
      (MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') ||
        MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"'))
    );
  },
  probeConfigSupported: function (e) {
    const t = {
      supported: false,
      smooth: false,
      powerEfficient: false,
    };
    if (!e || typeof navigator === "undefined") {
      return Promise.resolve(t);
    }
    if (
      navigator.mediaCapabilities &&
      navigator.mediaCapabilities.decodingInfo
    ) {
      return navigator.mediaCapabilities.decodingInfo(e);
    }
    const i = e.video || {};
    const n = e.audio || {};
    try {
      const o = MediaSource.isTypeSupported(i.contentType);
      const s = MediaSource.isTypeSupported(n.contentType);
      return Promise.resolve({
        supported: o && s,
        smooth: false,
        powerEfficient: false,
      });
    } catch (e) {
      return Promise.resolve(t);
    }
  },
};
const playerVersion = "3.0.28";
const D = {
  1: "media",
  2: "media",
  3: "media",
  4: "media",
  5: "media",
  6: "media",
};
const O = {
  1: 5101,
  2: 5102,
  3: 5103,
  4: 5104,
  5: 5105,
  6: 5106,
};
export var Errors = a(function e(t) {
  const i =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          errorType: "",
          errorCode: 0,
          errorMessage: "",
          originError: "",
          ext: {},
          mediaError: null,
        };
  s(this, e);
  const n = t && t.i18n ? t.i18n.ERROR_TYPES : null;
  if (t.media) {
    const o = i.mediaError ? i.mediaError : t.media.error || {};
    const duration = t.duration;
    const currentTime = t.currentTime;
    const ended = t.ended;
    const c = t.src;
    const u = t.currentSrc;
    const h = t.media;
    const readyState = h.readyState;
    const networkState = h.networkState;
    let errorCode = i.errorCode || o.code;
    if (O[errorCode]) {
      errorCode = O[errorCode];
    }
    const p = {
      playerVersion,
      currentTime,
      duration,
      ended,
      readyState,
      networkState,
      src: c || u,
      errorType: i.errorType,
      errorCode,
      message: i.errorMessage || o.message,
      mediaError: o,
      originError: i.originError ? i.originError.stack : "",
      host: Util.getHostFromUrl(c || u),
    };
    if (i.ext) {
      Object.keys(i.ext).map((e) => {
        p[e] = i.ext[e];
      });
    }
    return p;
  }
  if (arguments.length > 1) {
    const v = {
      playerVersion,
      domain: document.domain,
    };
    const m = [
      "errorType",
      "currentTime",
      "duration",
      "networkState",
      "readyState",
      "src",
      "currentSrc",
      "ended",
      "errd",
      "errorCode",
      "mediaError",
    ];
    for (let y = 0; y < arguments.length; y++) {
      v[m[y]] = arguments[y];
    }
    v.ex = n ? (n[arguments[0]] || {}).msg : "";
    return v;
  }
});
function F(e, t) {
  if (this && this.emit) {
    if (e === "error") {
      this.errorHandler(e, t.error);
    } else {
      this.emit(e, t);
    }
  }
}
const H = ((e) => {
  function t(e) {
    s(this, t);
    i = o(this, t, [e]);
    i._hasStart = false;
    i._currentTime = 0;
    i._duration = 0;
    i._internalOp = {};
    i._lastMuted = false;
    i.vtype = "MP4";
    i._rate = -1;
    i.mediaConfig = {
      controls: false,
      autoplay: e.autoplay,
      playsinline: e.playsinline,
      "x5-playsinline": e.playsinline,
      "webkit-playsinline": e.playsinline,
      "x5-video-player-fullscreen":
        e["x5-video-player-fullscreen"] || e.x5VideoPlayerFullscreen,
      "x5-video-orientation": e["x5-video-orientation"] || e.x5VideoOrientation,
      airplay: e.airplay,
      "webkit-airplay": e.airplay,
      tabindex: 0 | e.tabindex,
      mediaType: e.mediaType || "video",
      "data-index": -1,
      ...e.videoConfig,
      ...e.videoAttributes,
    };
    var i;
    const n = e["x5-video-player-type"] || e.x5VideoPlayerType;
    if (Sniffer.isWeixin && Sniffer.os.isAndroid && n) {
      i.mediaConfig["x5-video-player-type"] = n;
      delete i.mediaConfig.playsinline;
      delete i.mediaConfig["webkit-playsinline"];
      delete i.mediaConfig["x5-playsinline"];
    }
    if (e.loop) {
      i.mediaConfig.loop = "loop";
    }
    if (
      e.autoplayMuted &&
      !Object.prototype.hasOwnProperty.call(i.mediaConfig, "muted")
    ) {
      i.mediaConfig.muted = true;
    }
    i.media = Util.createDom(i.mediaConfig.mediaType, "", i.mediaConfig, "");
    if (e.defaultPlaybackRate) {
      i.media.defaultPlaybackRate = i.media.playbackRate =
        e.defaultPlaybackRate;
    }
    if (Util.typeOf(e.volume) === "Number") {
      i.volume = e.volume;
    }
    if (e.autoplayMuted) {
      i.media.muted = true;
      i._lastMuted = true;
    }
    if (e.autoplay) {
      i.media.autoplay = true;
    }
    i._interval = {};
    i.mediaEventMiddleware = {};
    i.attachVideoEvents();
    return i;
  }
  h(t, e);
  return a(t, [
    {
      key: "setEventsMiddleware",
      value: function (e) {
        const t = this;
        Object.keys(e).map((i) => {
          t.mediaEventMiddleware[i] = e[i];
        });
      },
    },
    {
      key: "removeEventsMiddleware",
      value: function (e) {
        const t = this;
        Object.keys(e).map((e) => {
          delete t.mediaEventMiddleware[e];
        });
      },
    },
    {
      key: "attachVideoEvents",
      value: function () {
        const player = this;
        const t =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : this.media;
        if (!this._evHandlers) {
          this._evHandlers = M.VIDEO_EVENTS.map((eventName) => {
            const i = "on"
              .concat(eventName.charAt(0).toUpperCase())
              .concat(eventName.slice(1));
            if (typeof player[i] === "function") {
              player.on(eventName, player[i]);
            }
            return l({}, eventName, function (originalEvent, n) {
              const o = {
                player,
                eventName,
                originalEvent,
                detail: originalEvent.detail || {},
                timeStamp: originalEvent.timeStamp,
                currentTime: player.currentTime,
                duration: player.duration,
                paused: player.paused,
                ended: player.ended,
                isInternalOp: !!player._internalOp[originalEvent.type],
                muted: player.muted,
                volume: player.volume,
                host: Util.getHostFromUrl(player.currentSrc),
                vtype: player.vtype,
              };
              player.removeInnerOP(originalEvent.type);
              if (eventName === "timeupdate") {
                player._currentTime = player.media && player.media.currentTime;
              }
              if (eventName === "ratechange") {
                const s = player.media ? player.media.playbackRate : 0;
                if (s && player._rate === s) {
                  return;
                }
                player._rate = player.media && player.media.playbackRate;
              }
              if (eventName === "durationchange") {
                player._duration = player.media.duration;
              }
              if (eventName === "volumechange") {
                o.isMutedChange = player._lastMuted !== player.muted;
                player._lastMuted = player.muted;
              }
              if (eventName === "error") {
                o.error = n || player.video.error;
              }
              if (player.mediaEventMiddleware[eventName]) {
                const r = F.bind(player, eventName, o);
                try {
                  player.mediaEventMiddleware[eventName].call(player, o, r);
                } catch (error) {
                  F.call(player, eventName, o);
                  throw error;
                }
              } else {
                F.call(player, eventName, o);
              }
            });
          });
        }
        this._evHandlers.forEach((e) => {
          const i = Object.keys(e)[0];
          t.addEventListener(i, e[i], false);
        });
      },
    },
    {
      key: "detachVideoEvents",
      value: function () {
        const e = this;
        const t =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : this.media;
        this._evHandlers.forEach((e) => {
          const i = Object.keys(e)[0];
          t.removeEventListener(i, e[i], false);
        });
        this._evHandlers.forEach((t) => {
          const i = Object.keys(t)[0];
          const n = "on".concat(i.charAt(0).toUpperCase()).concat(i.slice(1));
          if (typeof e[n] === "function") {
            e.off(i, e[n]);
          }
        });
        this._evHandlers = null;
      },
    },
    {
      key: "_attachSourceEvents",
      value: function (e, t) {
        const i = this;
        e.removeAttribute("src");
        e.load();
        t.forEach((e, t) => {
          i.media.appendChild(
            Util.createDom("source", "", {
              src: "".concat(e.src),
              type: "".concat(e.type || ""),
              "data-index": t + 1,
            }),
          );
        });
        const e_children = e.children;
        if (e_children) {
          this._videoSourceCount = e_children.length;
          this._videoSourceIndex = e_children.length;
          this._vLoadeddata = function (e) {
            i.emit(M.SOURCE_SUCCESS, {
              src: e.target.currentSrc,
              host: Util.getHostFromUrl(e.target.currentSrc),
            });
          };
          let o = null;
          for (let s = 0; s < this._evHandlers.length; s++) {
            if (Object.keys(this._evHandlers[s])[0] === "error") {
              o = this._evHandlers[s];
              break;
            }
          }
          if (!this._sourceError) {
            this._sourceError = function (e) {
              const t = parseInt(e.target.getAttribute("data-index"), 10);
              i._videoSourceIndex--;
              if (i._videoSourceIndex === 0 || t >= i._videoSourceCount) {
                const n = {
                  code: 4,
                  message: "sources_load_error",
                };
                if (o) {
                  o.error(e, n);
                } else {
                  i.errorHandler("error", n);
                }
              }
              const s = D[4];
              i.emit(
                M.SOURCE_ERROR,
                new Errors(i, {
                  errorType: s,
                  errorCode: 4,
                  errorMessage: "sources_load_error",
                  mediaError: {
                    code: 4,
                    message: "sources_load_error",
                  },
                  src: e.target.src,
                }),
              );
            };
          }
          for (let r = 0; r < e_children.length; r++) {
            e_children[r].addEventListener("error", this._sourceError);
          }
          e.addEventListener("loadeddata", this._vLoadeddata);
        }
      },
    },
    {
      key: "_detachSourceEvents",
      value: function (e) {
        const e_children = e.children;
        if (e_children && e_children.length !== 0 && this._sourceError) {
          for (let i = 0; i < e_children.length; i++) {
            e_children[i].removeEventListener("error", this._sourceError);
          }
          while (e_children.length > 0) {
            e.removeChild(e_children[0]);
          }
          if (this._vLoadeddata) {
            e.removeEventListener("loadeddata", this._vLoadeddata);
          }
        }
      },
    },
    {
      key: "errorHandler",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : null;
        if (this.media && (this.media.error || t)) {
          let i = this.media.error || t;
          const n = i.code ? D[i.code] : "other";
          const o = i.message;
          if (!this.media.currentSrc) {
            i = {
              code: 6,
              message: "empty_src",
            };
          }
          this.emit(
            e,
            new Errors(this, {
              errorType: n,
              errorCode: i.code,
              errorMessage: i.message || "",
              mediaError: i,
            }),
          );
        }
      },
    },
    {
      key: "destroy",
      value: function () {
        if (this.media) {
          if (this.media.pause) {
            this.media.pause();
            this.media.muted = true;
          }
          this.media.removeAttribute("src");
          this.media.load();
        }
        this._currentTime = 0;
        this._duration = 0;
        this.mediaConfig = null;
        for (const e in this._interval) {
          if (Object.prototype.hasOwnProperty.call(this._interval, e)) {
            clearInterval(this._interval[e]);
            this._interval[e] = null;
          }
        }
        this.detachVideoEvents();
        this.media = null;
        this.mediaEventMiddleware = {};
        this.removeAllListeners();
      },
    },
    {
      key: "video",
      get: function () {
        return this.media;
      },
      set: function (e) {
        this.media = e;
      },
    },
    {
      key: "play",
      value: function () {
        if (this.media) {
          return this.media.play();
        }
        return null;
      },
    },
    {
      key: "pause",
      value: function () {
        if (this.media) {
          this.media.pause();
        }
      },
    },
    {
      key: "load",
      value: function () {
        if (this.media) {
          this.media.load();
        }
      },
    },
    {
      key: "canPlayType",
      value: function (e) {
        return !!this.media && this.media.canPlayType(e);
      },
    },
    {
      key: "getBufferedRange",
      value: function (e) {
        const t = [0, 0];
        if (!this.media) {
          return t;
        }
        if (!e) {
          e = this.media.buffered;
        }
        const currentTime = this.media.currentTime;
        if (e) {
          for (
            let n = 0, o = e.length;
            n < o &&
            ((t[0] = e.start(n)),
            (t[1] = e.end(n)),
            !(t[0] <= currentTime) || !(currentTime <= t[1]));
            n++
          );
        }
        if (t[0] - currentTime <= 0 && currentTime - t[1] <= 0) {
          return t;
        }
        return [0, 0];
      },
    },
    {
      key: "autoplay",
      get: function () {
        return !!this.media && this.media.autoplay;
      },
      set: function (e) {
        if (this.media) {
          this.media.autoplay = e;
        }
      },
    },
    {
      key: "buffered",
      get: function () {
        if (this.media) {
          return this.media.buffered;
        }
        return null;
      },
    },
    {
      key: "buffered2",
      get: function () {
        if (this.media && this.media.buffered) {
          return Util.getBuffered2(this.media.buffered);
        }
        return null;
      },
    },
    {
      key: "bufferedPoint",
      get: function () {
        const e = {
          start: 0,
          end: 0,
        };
        if (!this.media) {
          return e;
        }
        const buffered = this.media.buffered;
        if (!buffered || buffered.length === 0) {
          return e;
        }
        for (let i = 0; i < buffered.length; i++) {
          if (
            (buffered.start(i) <= this.currentTime ||
              buffered.start(i) < 0.1) &&
            buffered.end(i) >= this.currentTime
          ) {
            return {
              start: buffered.start(i),
              end: buffered.end(i),
            };
          }
        }
        return e;
      },
    },
    {
      key: "crossOrigin",
      get: function () {
        if (this.media) {
          return this.media.crossOrigin;
        }
        return "";
      },
      set: function (e) {
        if (this.media) {
          this.media.crossOrigin = e;
        }
      },
    },
    {
      key: "currentSrc",
      get: function () {
        if (this.media) {
          return this.media.currentSrc;
        }
        return "";
      },
      set: function (e) {
        if (this.media) {
          this.media.currentSrc = e;
        }
      },
    },
    {
      key: "currentTime",
      get: function () {
        if (this.media) {
          if (this.media.currentTime !== undefined) {
            return this.media.currentTime;
          }
          return this._currentTime;
        }
        return 0;
      },
      set: function (e) {
        if (this.media) {
          this.media.currentTime = e;
        }
      },
    },
    {
      key: "defaultMuted",
      get: function () {
        return !!this.media && this.media.defaultMuted;
      },
      set: function (e) {
        if (this.media) {
          this.media.defaultMuted = e;
        }
      },
    },
    {
      key: "duration",
      get: function () {
        return this._duration;
      },
    },
    {
      key: "ended",
      get: function () {
        return !!this.media && this.media.ended;
      },
    },
    {
      key: "error",
      get: function () {
        return this.media.error;
      },
    },
    {
      key: "errorNote",
      get: function () {
        if (this.media.error) {
          return [
            "MEDIA_ERR_ABORTED",
            "MEDIA_ERR_NETWORK",
            "MEDIA_ERR_DECODE",
            "MEDIA_ERR_SRC_NOT_SUPPORTED",
          ][this.media.error.code - 1];
        }
        return "";
      },
    },
    {
      key: "loop",
      get: function () {
        return !!this.media && this.media.loop;
      },
      set: function (e) {
        if (this.media) {
          this.media.loop = e;
        }
      },
    },
    {
      key: "muted",
      get: function () {
        return !!this.media && this.media.muted;
      },
      set: function (e) {
        if (this.media && this.media.muted !== e) {
          this._lastMuted = this.media.muted;
          this.media.muted = e;
        }
      },
    },
    {
      key: "networkState",
      get: function () {
        return this.media.networkState;
      },
    },
    {
      key: "paused",
      get: function () {
        return !this.media || this.media.paused;
      },
    },
    {
      key: "playbackRate",
      get: function () {
        if (this.media) {
          return this.media.playbackRate;
        }
        return 0;
      },
      set: function (e) {
        if (this.media && Infinity !== e) {
          this.media.defaultPlaybackRate = e;
          this.media.playbackRate = e;
        }
      },
    },
    {
      key: "played",
      get: function () {
        if (this.media) {
          return this.media.played;
        }
        return null;
      },
    },
    {
      key: "preload",
      get: function () {
        return !!this.media && this.media.preload;
      },
      set: function (e) {
        if (this.media) {
          this.media.preload = e;
        }
      },
    },
    {
      key: "readyState",
      get: function () {
        return this.media.readyState;
      },
    },
    {
      key: "seekable",
      get: function () {
        return !!this.media && this.media.seekable;
      },
    },
    {
      key: "seeking",
      get: function () {
        return !!this.media && this.media.seeking;
      },
    },
    {
      key: "src",
      get: function () {
        if (this.media) {
          return this.media.src;
        }
        return "";
      },
      set: function (e) {
        if (this.media) {
          this.emit(M.URL_CHANGE, e);
          this.emit(M.WAITING);
          this._currentTime = 0;
          this._duration = 0;
          if (Util.isMSE(this.media)) {
            return void this.onWaiting();
          }
          this._detachSourceEvents(this.media);
          if (Util.typeOf(e) === "Array") {
            this._attachSourceEvents(this.media, e);
          } else if (e) {
            this.media.src = e;
          } else {
            this.media.removeAttribute("src");
          }
          this.load();
        }
      },
    },
    {
      key: "volume",
      get: function () {
        if (this.media) {
          return this.media.volume;
        }
        return 0;
      },
      set: function (e) {
        if (Infinity !== e && this.media) {
          this.media.volume = e;
        }
      },
    },
    {
      key: "aspectRatio",
      get: function () {
        if (this.media) {
          return this.media.videoWidth / this.media.videoHeight;
        }
        return 0;
      },
    },
    {
      key: "addInnerOP",
      value: function (e) {
        this._internalOp[e] = true;
      },
    },
    {
      key: "removeInnerOP",
      value: function (e) {
        delete this._internalOp[e];
      },
    },
    {
      key: "emit",
      value: function (e, i) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), s = 2;
          s < n;
          s++
        ) {
          o[s - 2] = arguments[s];
        }
        m(t, "emit", this, 3)([e, i].concat(o));
      },
    },
    {
      key: "on",
      value: function (e, i) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), s = 2;
          s < n;
          s++
        ) {
          o[s - 2] = arguments[s];
        }
        m(t, "on", this, 3)([e, i].concat(o));
      },
    },
    {
      key: "once",
      value: function (e, i) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), s = 2;
          s < n;
          s++
        ) {
          o[s - 2] = arguments[s];
        }
        m(t, "once", this, 3)([e, i].concat(o));
      },
    },
    {
      key: "off",
      value: function (e, i) {
        for (
          var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), s = 2;
          s < n;
          s++
        ) {
          o[s - 2] = arguments[s];
        }
        m(t, "off", this, 3)([e, i].concat(o));
      },
    },
    {
      key: "offAll",
      value: function () {
        m(t, "removeAllListeners", this, 3)([]);
      },
    },
  ]);
})(_.A);
const U = a(
  function e() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : {
            name: "xgplayer",
            version: 1,
            db: null,
            ojstore: {
              name: "xg-m4a",
              keypath: "vid",
            },
          };
    s(this, e);
    this.indexedDB = window.indexedDB || window.webkitindexedDB;
    this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
    this.myDB = t;
  },
  [
    {
      key: "openDB",
      value: function (e) {
        const t = this;
        const i = this;
        const n = this.myDB.version || 1;
        const o = i.indexedDB.open(i.myDB.name, n);
        o.onerror = function (e) {};
        o.onsuccess = function (n) {
          t.myDB.db = n.target.result;
          e.call(i);
        };
        o.onupgradeneeded = function (e) {
          const result = e.target.result;
          e.target.transaction;
          if (!result.objectStoreNames.contains(i.myDB.ojstore.name)) {
            result.createObjectStore(i.myDB.ojstore.name, {
              keyPath: i.myDB.ojstore.keypath,
            });
          }
        };
      },
    },
    {
      key: "deletedb",
      value: function () {
        this.indexedDB.deleteDatabase(this.myDB.name);
      },
    },
    {
      key: "closeDB",
      value: function () {
        this.myDB.db.close();
      },
    },
    {
      key: "addData",
      value: function (e, t) {
        let i;
        const n = this.myDB.db.transaction(e, "readwrite").objectStore(e);
        for (let o = 0; o < t.length; o++) {
          i = n.add(t[o]);
          i.onerror = function () {};
          i.onsuccess = function () {};
        }
      },
    },
    {
      key: "putData",
      value: function (e, t) {
        let i;
        const n = this.myDB.db.transaction(e, "readwrite").objectStore(e);
        for (let o = 0; o < t.length; o++) {
          i = n.put(t[o]);
          i.onerror = function () {};
          i.onsuccess = function () {};
        }
      },
    },
    {
      key: "getDataByKey",
      value: function (e, t, i) {
        const n = this;
        const o = this.myDB.db
          .transaction(e, "readwrite")
          .objectStore(e)
          .get(t);
        o.onerror = function () {
          i.call(n, null);
        };
        o.onsuccess = function (e) {
          const result = e.target.result;
          i.call(n, result);
        };
      },
    },
    {
      key: "deleteData",
      value: function (e, t) {
        this.myDB.db.transaction(e, "readwrite").objectStore(e).delete(t);
      },
    },
    {
      key: "clearData",
      value: function (e) {
        this.myDB.db.transaction(e, "readwrite").objectStore(e).clear();
      },
    },
  ],
);
const B = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "mozfullscreenchange",
  "MSFullscreenChange",
];
const j = [
  "requestFullscreen",
  "webkitRequestFullscreen",
  "mozRequestFullScreen",
  "msRequestFullscreen",
];
const G = [
  "exitFullscreen",
  "webkitExitFullscreen",
  "mozCancelFullScreen",
  "msExitFullscreen",
];
const V = "data-xgplayerid";
function W(e, t, i) {
  for (
    var n = arguments.length, o = Array(n > 3 ? n - 3 : 0), s = 3;
    s < n;
    s++
  ) {
    o[s - 3] = arguments[s];
  }
  const r = t.call.apply(t, [e].concat(o));
  if (i && typeof i === "function") {
    if (r && r.then) {
      r.then(function () {
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) {
          n[o] = arguments[o];
        }
        i.call.apply(i, [e].concat(n));
      });
    } else {
      i.call.apply(i, [e].concat(o));
    }
  }
}
function Y(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : {
          pre: null,
          next: null,
        };
  if (!this.__hooks) {
    this.__hooks = {};
  }
  if (!this.__hooks[e]) {
    this.__hooks[e] = null;
  }
  return function () {
    const n = arguments;
    const o = this;
    if (i.pre) {
      try {
        (s = i.pre).call.apply(
          s,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      } catch (error) {
        error.message = "[pluginName: "
          .concat(this.pluginName, ":")
          .concat(e, ":pre error] >> ")
          .concat(error.message);
        throw error;
      }
    }
    if (this.__hooks && this.__hooks[e]) {
      try {
        var s;
        let r;
        const a = (r = this.__hooks[e]).call.apply(
          r,
          [this, this].concat(Array.prototype.slice.call(arguments)),
        );
        if (a) {
          if (a.then) {
            a.then((e) => {
              if (e !== false) {
                W.apply(undefined, [o, t, i.next, ...n]);
              }
            }).catch((e) => {
              throw e;
            });
          } else {
            W.apply(
              undefined,
              [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
            );
          }
        } else if (a === undefined) {
          W.apply(
            undefined,
            [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
          );
        }
      } catch (error) {
        error.message = "[pluginName: "
          .concat(this.pluginName, ":")
          .concat(e, "] >> ")
          .concat(error.message);
        throw error;
      }
    } else {
      W.apply(
        undefined,
        [this, t, i.next].concat(Array.prototype.slice.call(arguments)),
      );
    }
  }.bind(this);
}
function K(e, t) {
  const __hooks = this.__hooks;
  if (__hooks) {
    if (__hooks.hasOwnProperty(e)) {
      if (__hooks) {
        __hooks[e] = t;
      }
      return true;
    }
    console.warn("has no supported hook which name [".concat(e, "]"));
    return false;
  }
}
function z(e, t) {
  const __hooks = this.__hooks;
  if (__hooks) {
    delete __hooks[e];
  }
}
function X(e) {
  if (this.plugins && this.plugins[e.toLowerCase()]) {
    const t = this.plugins[e.toLowerCase()];
    for (
      var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1;
      o < i;
      o++
    ) {
      n[o - 1] = arguments[o];
    }
    return t.useHooks && t.useHooks.apply(t, n);
  }
}
function q(e) {
  if (this.plugins && this.plugins[e.toLowerCase()]) {
    const t = this.plugins[e.toLowerCase()];
    if (t) {
      for (
        var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1;
        o < i;
        o++
      ) {
        n[o - 1] = arguments[o];
      }
      return t.removeHooks && t.removeHooks.apply(t, n);
    }
  }
}
function Z(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  e.__hooks = {};
  if (t) {
    t.map((t) => {
      e.__hooks[t] = null;
    });
  }
  Object.defineProperty(e, "hooks", {
    get: function () {
      return (
        e.__hooks &&
        Object.keys(e.__hooks).map((t) => {
          if (e.__hooks[t]) {
            return t;
          }
        })
      );
    },
  });
}
function J(e) {
  e.__hooks = null;
}
function $(e, t, i) {
  for (
    var n = arguments.length, o = Array(n > 3 ? n - 3 : 0), s = 3;
    s < n;
    s++
  ) {
    o[s - 3] = arguments[s];
  }
  if (!e.__hooks || !e.__hooks[t]) {
    return i.call.apply(i, [e, e].concat(o));
  }
  let r;
  const a = (r = e.__hooks[t]).call.apply(r, [e, e].concat(o));
  if (a && a.then) {
    a.then((t) => {
      if (t === false) {
        return null;
      }
      return i.call.apply(i, [e, e].concat(o));
    }).catch((e) => {
      console.warn("[runHooks]".concat(t, " reject"), e.message);
    });
  } else if (a !== false) {
    return i.call.apply(i, [e, e].concat(o));
  }
}
function Q(pluginName, t) {
  b.logError(
    "["
      .concat(
        pluginName,
        "] event or callback cant be undefined or null when call ",
      )
      .concat(t),
  );
}
export var BasePlugin = a(
  function e(t) {
    s(this, e);
    if (Util.checkIsFunction(this.beforeCreate)) {
      this.beforeCreate(t);
    }
    Z(this);
    this.__args = t;
    this.__events = {};
    this.__onceEvents = {};
    this.config = t.config || {};
    this.player = null;
    this.playerConfig = {};
    this.pluginName = "";
    this.__init(t);
  },
  [
    {
      key: "beforeCreate",
      value: function (e) {},
    },
    {
      key: "afterCreate",
      value: function () {},
    },
    {
      key: "beforePlayerInit",
      value: function () {},
    },
    {
      key: "onPluginsReady",
      value: function () {},
    },
    {
      key: "afterPlayerInit",
      value: function () {},
    },
    {
      key: "destroy",
      value: function () {},
    },
    {
      key: "__init",
      value: function (e) {
        this.player = e.player;
        this.playerConfig = e.player && e.player.config;
        this.pluginName = e.pluginName
          ? e.pluginName.toLowerCase()
          : this.constructor.pluginName.toLowerCase();
        this.logger = e.player && e.player.logger;
      },
    },
    {
      key: "updateLang",
      value: function (e) {
        if (!e) {
          e = this.lang;
        }
      },
    },
    {
      key: "lang",
      get: function () {
        return this.player.lang;
      },
    },
    {
      key: "i18n",
      get: function () {
        return this.player.i18n;
      },
    },
    {
      key: "i18nKeys",
      get: function () {
        return this.player.i18nKeys;
      },
    },
    {
      key: "domEventType",
      get: function () {
        let e = Util.checkTouchSupport() ? "touch" : "mouse";
        if (
          this.playerConfig &&
          (this.playerConfig.domEventType === "touch" ||
            this.playerConfig.domEventType === "mouse")
        ) {
          e = this.playerConfig.domEventType;
        }
        return e;
      },
    },
    {
      key: "on",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            this.__events[e] = t;
            this.player.on(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((e) => {
              i.__events[e] = t;
              i.player.on(e, t);
            });
          }
        } else {
          Q(this.pluginName, "plugin.on(event, callback)");
        }
      },
    },
    {
      key: "once",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            this.__onceEvents[e] = t;
            this.player.once(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((n) => {
              i.__onceEvents[n] = t;
              i.player.once(e, t);
            });
          }
        } else {
          Q(this.pluginName, "plugin.once(event, callback)");
        }
      },
    },
    {
      key: "off",
      value: function (e, t) {
        const i = this;
        if (e && t && this.player) {
          if (typeof e === "string") {
            delete this.__events[e];
            this.player.off(e, t);
          } else if (Array.isArray(e)) {
            e.forEach((n) => {
              delete i.__events[e];
              i.player.off(n, t);
            });
          }
        } else {
          Q(this.pluginName, "plugin.off(event, callback)");
        }
      },
    },
    {
      key: "offAll",
      value: function () {
        const e = this;
        ["__events", "__onceEvents"].forEach((t) => {
          Object.keys(e[t]).forEach((i) => {
            if (e[t][i]) {
              e.off(i, e[t][i]);
            }
            if (i) {
              delete e[t][i];
            }
          });
        });
        this.__events = {};
        this.__onceEvents = {};
      },
    },
    {
      key: "emit",
      value: function (e) {
        let t;
        if (this.player) {
          for (
            var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1;
            o < i;
            o++
          ) {
            n[o - 1] = arguments[o];
          }
          (t = this.player).emit.apply(t, [e].concat(n));
        }
      },
    },
    {
      key: "emitUserAction",
      value: function (e, t) {
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        if (this.player) {
          const n = {
            ...i,
            pluginName: this.pluginName,
          };
          this.player.emitUserAction(e, t, n);
        }
      },
    },
    {
      key: "hook",
      value: function (e, t) {
        return Y.call.apply(
          Y,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "useHooks",
      value: function (e, t) {
        for (
          let i = arguments.length, n = Array(i > 2 ? i - 2 : 0), o = 2;
          o < i;
          o++
        ) {
          n[o - 2] = arguments[o];
        }
        return K.call.apply(
          K,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "removeHooks",
      value: function (e, t) {
        for (
          let i = arguments.length, n = Array(i > 2 ? i - 2 : 0), o = 2;
          o < i;
          o++
        ) {
          n[o - 2] = arguments[o];
        }
        return z.call.apply(
          z,
          [this].concat(Array.prototype.slice.call(arguments)),
        );
      },
    },
    {
      key: "registerPlugin",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "";
        if (this.player) {
          if (i) {
            t.pluginName = i;
          }
          return this.player.registerPlugin({
            plugin: e,
            options: t,
          });
        }
      },
    },
    {
      key: "getPlugin",
      value: function (e) {
        if (this.player) {
          return this.player.getPlugin(e);
        }
        return null;
      },
    },
    {
      key: "__destroy",
      value: function () {
        const e = this;
        const player = this.player;
        const pluginName = this.pluginName;
        this.offAll();
        Util.clearAllTimers(this);
        if (Util.checkIsFunction(this.destroy)) {
          this.destroy();
        }
        [
          "player",
          "playerConfig",
          "pluginName",
          "logger",
          "__args",
          "__hooks",
        ].map((t) => {
          e[t] = null;
        });
        player.unRegisterPlugin(pluginName);
        J(this);
      },
    },
  ],
  [
    {
      key: "defineGetterOrSetter",
      value: function (e, t) {
        for (const i in t) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            Object.defineProperty(e, i, t[i]);
          }
        }
      },
    },
    {
      key: "defaultConfig",
      get: function () {
        return {};
      },
    },
    {
      key: "pluginName",
      get: function () {
        return "pluginName";
      },
    },
  ],
);
const en = {
  CONTROLS: "controls",
  ROOT: "root",
};
const eo = {
  ROOT: "root",
  ROOT_LEFT: "rootLeft",
  ROOT_RIGHT: "rootRight",
  ROOT_TOP: "rootTop",
  CONTROLS_LEFT: "controlsLeft",
  CONTROLS_RIGTH: "controlsRight",
  CONTROLS_RIGHT: "controlsRight",
  CONTROLS_CENTER: "controlsCenter",
  CONTROLS: "controls",
};
const es = "xg-icon-disable";
function er(e) {
  return !!e && e.indexOf && /^(?:http|data:|\/)/.test(e);
}
function ea(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  const n =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const o =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  let s = null;
  if (e instanceof window.Element) {
    Util.addClass(e, i);
    Object.keys(n).map((t) => {
      e.setAttribute(t, n[t]);
    });
    return e;
  }
  if (er(e) || er(e.url)) {
    n.src = er(e) ? e : e.url || "";
    return (s = Util.createDom(e.tag || "img", "", n, "xg-img ".concat(i)));
  }
  if (typeof e === "function") {
    try {
      if ((s = e()) instanceof window.Element) {
        Util.addClass(s, i);
        Object.keys(n).map((e) => {
          s.setAttribute(e, n[e]);
        });
        return s;
      }
      b.logWarn(
        "warn>>icons."
          .concat(t, " in config of plugin named [")
          .concat(o, "] is a function mast return an Element Object"),
      );
      return null;
    } catch (error) {
      b.logError("Plugin named [".concat(o, "]:createIcon"), error);
      return null;
    }
  }
  if (typeof e === "string") {
    return Util.createDomFromHtml(e, n, i);
  }
  b.logWarn(
    "warn>>icons."
      .concat(t, " in config of plugin named [")
      .concat(o, "] is invalid"),
  );
  return null;
}
export var Plugin = ((e) => {
  function t() {
    let e;
    const i =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    s(this, t);
    e = o(this, t, [i]);
    e.__delegates = [];
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "__init",
        value: function (e) {
          m(t, "__init", this, 3)([e]);
          const e_root = e.root;
          let n = null;
          this.icons = {};
          this.root = null;
          this.parent = null;
          if (e.root) {
            o = this.registerIcons() || {};
            s = this;
            r = s.config.icons || s.playerConfig.icons;
            Object.keys(o).map((e) => {
              let t;
              let i;
              let n;
              let a;
              const l = o[e];
              let c = l && l.class ? l.class : "";
              let u = l && l.attr ? l.attr : {};
              let h = null;
              if (r && r[e]) {
                t = r[e];
                i = c;
                c =
                  C(t) === "object" && t.class && typeof t.class === "string"
                    ? "".concat(i, " ").concat(t.class)
                    : i;
                n = r[e];
                a = u;
                if (C(n) === "object" && n.attr && C(n.attr) === "object") {
                  Object.keys(n.attr).map((e) => {
                    a[e] = n.attr[e];
                  });
                }
                u = a;
                h = ea(r[e], e, c, u, s.pluginName);
              }
              if (!h && l) {
                h = ea(l.icon ? l.icon : l, u, c, {}, s.pluginName);
              }
              s.icons[e] = h;
            });
            this.langText = {};
            a = this.registerLanguageTexts() || {};
            l = this;
            Object.keys(a).map((e) => {
              Object.defineProperty(l.langText, e, {
                get: function () {
                  const l_lang = l.lang;
                  const l_i18n = l.i18n;
                  if (l_i18n[e]) {
                    return l_i18n[e];
                  }
                  return (a[e] && a[e][l_lang]) || "";
                },
              });
            });
            var o;
            var s;
            var r;
            var a;
            var l;
            let c = "";
            try {
              c = this.render();
            } catch (error) {
              b.logError("Plugin:".concat(this.pluginName, ":render"), error);
              throw Error(
                "Plugin:"
                  .concat(this.pluginName, ":render:")
                  .concat(error.message),
              );
            }
            if (c) {
              (n = t.insert(c, e_root, e.index)).setAttribute(
                "data-index",
                e.index,
              );
            } else {
              if (!e.tag) {
                return;
              }
              (n = Util.createDom(e.tag, "", e.attr, e.name)).setAttribute(
                "data-index",
                e.index,
              );
              e_root.appendChild(n);
            }
            this.root = n;
            this.parent = e_root;
            const u = this.config.attr || {};
            const h = this.config.style || {};
            this.setAttr(u);
            this.setStyle(h);
            if (this.config.index) {
              this.root.setAttribute("data-index", this.config.index);
            }
            this.__registerChildren();
          }
        },
      },
      {
        key: "__registerChildren",
        value: function () {
          const e = this;
          if (this.root) {
            this._children = [];
            const t = this.children();
            if (t && C(t) === "object" && Object.keys(t).length > 0) {
              Object.keys(t).map((i) => {
                let n;
                let o;
                const s = t[i];
                const r = {
                  root: e.root,
                };
                if (typeof s === "function") {
                  n = e.config[i] || {};
                  o = s;
                } else if (
                  C(s) === "object" &&
                  typeof s.plugin === "function"
                ) {
                  n = s.options
                    ? Util.deepCopy(e.config[i] || {}, s.options)
                    : e.config[i] || {};
                  o = s.plugin;
                }
                r.config = n;
                if (n.index !== undefined) {
                  r.index = n.index;
                }
                if (n.root) {
                  r.root = n.root;
                }
                e.registerPlugin(o, r, i);
              });
            }
          }
        },
      },
      {
        key: "updateLang",
        value: function (e) {
          if (!e) {
            e = this.lang;
          }
          const root = this.root;
          const i18n = this.i18n;
          const langText = this.langText;
          if (root) {
            (function e(t, i) {
              for (let n = 0; n < t.children.length; n++) {
                if (t.children[n].children.length > 0) {
                  e(t.children[n], i);
                } else {
                  i(t.children[n]);
                }
              }
            })(root, function (t) {
              const o = t.getAttribute && t.getAttribute("lang-key");
              if (o) {
                const s = i18n[o.toUpperCase()] || langText[o];
                if (s) {
                  t.innerHTML = typeof s === "function" ? s(e) : s;
                }
              }
            });
          }
        },
      },
      {
        key: "lang",
        get: function () {
          return this.player.lang;
        },
      },
      {
        key: "changeLangTextKey",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          const i = this.i18n || {};
          const langText = this.langText;
          if (e.setAttribute) {
            e.setAttribute("lang-key", t);
          }
          const o = i[t] || langText[t] || "";
          if (o) {
            e.innerHTML = o;
          }
        },
      },
      {
        key: "plugins",
        value: function () {
          return this._children;
        },
      },
      {
        key: "disable",
        value: function () {
          this.config.disable = true;
          Util.addClass(this.find(".xgplayer-icon"), es);
        },
      },
      {
        key: "enable",
        value: function () {
          this.config.disable = false;
          Util.removeClass(this.find(".xgplayer-icon"), es);
        },
      },
      {
        key: "children",
        value: function () {
          return {};
        },
      },
      {
        key: "registerPlugin",
        value: function (e) {
          const i =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          const n =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "";
          i.root = i.root || this.root;
          const o = m(t, "registerPlugin", this, 3)([e, i, n]);
          this._children.push(o);
          return o;
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {};
        },
      },
      {
        key: "registerLanguageTexts",
        value: function () {
          return {};
        },
      },
      {
        key: "find",
        value: function (e) {
          if (this.root) {
            return this.root.querySelector(e);
          }
        },
      },
      {
        key: "bind",
        value: function (e, i, n) {
          const o = this;
          if (arguments.length < 3 && typeof i === "function") {
            if (Array.isArray(e)) {
              e.forEach((e) => {
                o.bindEL(e, i);
              });
            } else {
              this.bindEL(e, i);
            }
          } else {
            const s = t.delegate.call(this, this.root, e, i, n);
            this.__delegates = this.__delegates.concat(s);
          }
        },
      },
      {
        key: "unbind",
        value: function (e, t) {
          const i = this;
          if (arguments.length < 3 && typeof t === "function") {
            if (Array.isArray(e)) {
              e.forEach((e) => {
                i.unbindEL(e, t);
              });
            } else {
              this.unbindEL(e, t);
            }
          } else {
            const n = "".concat(e, "_").concat(t);
            for (let o = 0; o < this.__delegates.length; o++) {
              if (this.__delegates[o].key === n) {
                this.__delegates[o].destroy();
                this.__delegates.splice(o, 1);
                break;
              }
            }
          }
        },
      },
      {
        key: "setStyle",
        value: function (e, t) {
          const i = this;
          if (this.root) {
            if (Util.typeOf(e) === "String") {
              return (this.root.style[e] = t);
            } else {
              if (Util.typeOf(e) === "Object") {
                Object.keys(e).map((t) => {
                  i.root.style[t] = e[t];
                });
              }
            }
          }
        },
      },
      {
        key: "setAttr",
        value: function (e, t) {
          const i = this;
          if (this.root) {
            if (Util.typeOf(e) === "String") {
              return this.root.setAttribute(e, t);
            } else {
              if (Util.typeOf(e) === "Object") {
                Object.keys(e).map((t) => {
                  i.root.setAttribute(t, e[t]);
                });
              }
            }
          }
        },
      },
      {
        key: "setHtml",
        value: function (e, t) {
          if (this.root) {
            this.root.innerHTML = e;
            if (typeof t === "function") {
              t();
            }
          }
        },
      },
      {
        key: "bindEL",
        value: function (e, t) {
          const i =
            arguments.length > 2 && arguments[2] !== undefined && arguments[2];
          if (
            this.root &&
            "on".concat(e) in this.root &&
            typeof t === "function"
          ) {
            this.root.addEventListener(e, t, i);
          }
        },
      },
      {
        key: "unbindEL",
        value: function (e, t) {
          const i =
            arguments.length > 2 && arguments[2] !== undefined && arguments[2];
          if (
            this.root &&
            "on".concat(e) in this.root &&
            typeof t === "function"
          ) {
            this.root.removeEventListener(e, t, i);
          }
        },
      },
      {
        key: "show",
        value: function (e) {
          if (
            this.root &&
            ((this.root.style.display = e !== undefined ? e : "block"),
            window
              .getComputedStyle(this.root, null)
              .getPropertyValue("display") === "none")
          ) {
            return (this.root.style.display = "block");
          }
        },
      },
      {
        key: "hide",
        value: function () {
          if (this.root) {
            this.root.style.display = "none";
          }
        },
      },
      {
        key: "appendChild",
        value: function (e, t) {
          if (!this.root) {
            return null;
          }
          if (arguments.length < 2 && arguments[0] instanceof window.Element) {
            return this.root.appendChild(arguments[0]);
          }
          if (!t || !(t instanceof window.Element)) {
            return null;
          }
          try {
            if (typeof e === "string") {
              return this.find(e).appendChild(t);
            }
            return e.appendChild(t);
          } catch (error) {
            b.logError("Plugin:appendChild", error);
            return null;
          }
        },
      },
      {
        key: "render",
        value: function () {
          return "";
        },
      },
      {
        key: "destroy",
        value: function () {},
      },
      {
        key: "__destroy",
        value: function () {
          const e = this;
          const player = this.player;
          this.__delegates.map((e) => {
            e.destroy();
          });
          this.__delegates = [];
          if (this._children instanceof Array) {
            this._children.map((e) => {
              player.unRegisterPlugin(e.pluginName);
            });
            this._children = null;
          }
          if (this.root) {
            if (this.root.hasOwnProperty("remove")) {
              this.root.remove();
            } else if (this.root.parentNode) {
              this.root.parentNode.removeChild(this.root);
            }
          }
          m(t, "__destroy", this, 3)([]);
          this.icons = {};
          ["root", "parent"].map((t) => {
            e[t] = null;
          });
        },
      },
    ],
    [
      {
        key: "insert",
        value: function (e, t) {
          const i =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          const length = t.children.length;
          const o = Number(i);
          const s = e instanceof window.Node;
          if (!length) {
            if (s) {
              t.appendChild(e);
            } else {
              t.insertAdjacentHTML("beforeend", e);
            }
            return t.children[t.children.length - 1];
          }
          for (var r = 0, a = null, l = ""; r < length; r++) {
            const c = Number((a = t.children[r]).getAttribute("data-index"));
            if (c >= o) {
              l = "beforebegin";
              break;
            }
            if (c < o) {
              l = "afterend";
            }
          }
          if (s) {
            if (l === "afterend") {
              t.appendChild(e);
            } else {
              t.insertBefore(e, a);
            }
          } else {
            a.insertAdjacentHTML(l, e);
          }
          if (l === "afterend") {
            return t.children[t.children.length - 1];
          }
          return t.children[r];
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {};
        },
      },
      {
        key: "delegate",
        value: function (e, t, i, n) {
          const o =
            arguments.length > 4 && arguments[4] !== undefined && arguments[4];
          const s = [];
          if (e instanceof window.Node && typeof n === "function") {
            if (Array.isArray(i)) {
              i.forEach((i) => {
                const r = et(e, t, i, n, o);
                r.key = "".concat(t, "_").concat(i);
                s.push(r);
              });
            } else {
              const r = et(e, t, i, n, o);
              r.key = "".concat(t, "_").concat(i);
              s.push(r);
            }
          }
          return s;
        },
      },
      {
        key: "ROOT_TYPES",
        get: function () {
          return en;
        },
      },
      {
        key: "POSITIONS",
        get: function () {
          return eo;
        },
      },
    ],
  );
})(BasePlugin);
const ec = a(
  function e() {
    const t = this;
    s(this, e);
    this.__trigger = function (e) {
      t.timeStamp = new Date().getTime();
      for (let i = 0; i < e.length; i++) {
        t.__runHandler(e[i].target);
      }
    };
    this.__handlers = [];
    this.timeStamp = 0;
    this.observer = null;
    if (window.ResizeObserver) {
      try {
        this.observer = new window.ResizeObserver(
          ((e, t) => {
            let leading = true;
            let trailing = true;
            if (typeof e !== "function") {
              throw TypeError("Expected a function");
            }
            if (S(t)) {
              leading = "leading" in t ? !!t.leading : leading;
              trailing = "trailing" in t ? !!t.trailing : trailing;
            }
            return ((e, t, i) => {
              let n;
              let o;
              let s;
              let r;
              let a;
              let l;
              let c = 0;
              let u = false;
              let h = false;
              let d = true;
              const f =
                !t &&
                t !== 0 &&
                typeof window.requestAnimationFrame === "function";
              if (typeof e !== "function") {
                throw TypeError("Expected a function");
              }
              function g(t) {
                const i = n;
                const s = o;
                o = undefined;
                n = undefined;
                c = t;
                return (r = e.apply(s, i));
              }
              function p(e, t) {
                if (f) {
                  window.cancelAnimationFrame(a);
                  return window.requestAnimationFrame(e);
                }
                return setTimeout(e, t);
              }
              function v(e) {
                const i = e - l;
                const n = e - c;
                return l === undefined || i >= t || i < 0 || (h && n >= s);
              }
              function m() {
                let e;
                let i;
                let n;
                const o = Date.now();
                if (v(o)) {
                  return y(o);
                }
                a = p(
                  m,
                  ((e = o - l),
                  (i = o - c),
                  (n = t - e),
                  h ? Math.min(n, s - i) : n),
                );
              }
              function y(e) {
                a = undefined;
                if (d && n) {
                  return g(e);
                }
                o = undefined;
                n = undefined;
                return r;
              }
              function k() {
                let e;
                const i = Date.now();
                const s = v(i);
                for (
                  var d = arguments.length, f = Array(d), y = 0;
                  y < d;
                  y++
                ) {
                  f[y] = arguments[y];
                }
                n = f;
                o = this;
                l = i;
                if (s) {
                  if (a === undefined) {
                    e = l;
                    c = l;
                    a = p(m, t);
                    if (u) {
                      return g(e);
                    }
                    return r;
                  }
                  if (h) {
                    a = p(m, t);
                    return g(l);
                  }
                }
                if (a === undefined) {
                  a = p(m, t);
                }
                return r;
              }
              t = +t || 0;
              if (S(i)) {
                u = !!i.leading;
                s = (h = "maxWait" in i) ? Math.max(+i.maxWait || 0, t) : s;
                d = "trailing" in i ? !!i.trailing : d;
              }
              k.cancel = function () {
                if (a !== undefined) {
                  ((e) => {
                    if (f) {
                      return window.cancelAnimationFrame(e);
                    }
                    clearTimeout(e);
                  })(a);
                }
                c = 0;
                a = undefined;
                o = undefined;
                l = undefined;
                n = undefined;
              };
              k.flush = function () {
                if (a === undefined) {
                  return r;
                }
                return y(Date.now());
              };
              k.pending = function () {
                return a !== undefined;
              };
              return k;
            })(e, 100, {
              leading,
              trailing,
              maxWait: 100,
            });
          })(this.__trigger, {
            trailing: true,
          }),
        );
        this.timeStamp = new Date().getTime();
      } catch (error) {
        console.error(error);
      }
    }
  },
  [
    {
      key: "addObserver",
      value: function (target, t) {
        if (this.observer) {
          if (this.observer) {
            this.observer.observe(target);
          }
          const playerId = target.getAttribute(V);
          for (var n = this.__handlers, o = -1, s = 0; s < n.length; s++) {
            if (n[s] && target === n[s].target) {
              o = s;
            }
          }
          if (o > -1) {
            this.__handlers[o].handler = t;
          } else {
            this.__handlers.push({
              target,
              handler: t,
              playerId,
            });
          }
        }
      },
    },
    {
      key: "unObserver",
      value: function (e) {
        let t = -1;
        this.__handlers.map((i, n) => {
          if (e === i.target) {
            t = n;
          }
        });
        try {
          if (this.observer) {
            this.observer.unobserve(e);
          }
        } catch (e) {}
        if (this.observer) {
          this.observer.unobserve(e);
        }
        if (t > -1) {
          this.__handlers.splice(t, 1);
        }
      },
    },
    {
      key: "destroyObserver",
      value: function () {
        if (this.observer) {
          this.observer.disconnect();
        }
        this.observer = null;
        this.__handlers = null;
      },
    },
    {
      key: "__runHandler",
      value: function (e) {
        for (let t = this.__handlers, i = 0; i < t.length; i++) {
          if (t[i] && e === t[i].target) {
            try {
              t[i].handler(e);
            } catch (error) {
              console.error(error);
            }
            return true;
          }
        }
        return false;
      },
    },
  ],
);
let eu = null;
const eh = {
  pluginGroup: {},
  init: function (e) {
    let t;
    let e__pluginInfoId = e._pluginInfoId;
    if (!e__pluginInfoId) {
      e._pluginInfoId = e__pluginInfoId = Util.generateSessionId();
    }
    if (!e.config.closeResizeObserver && e.root) {
      t = e.root;
      if (!eu) {
        eu = new ec();
      }
      eu.addObserver(t, function () {
        e.resize();
      });
    }
    this.pluginGroup[e__pluginInfoId] = {
      _originalOptions: e.config || {},
      _plugins: {},
    };
  },
  formatPluginInfo: function (e, t) {
    let PLUFGIN = null;
    let n = null;
    if (e.plugin && typeof e.plugin === "function") {
      PLUFGIN = e.plugin;
      n = e.options;
    } else {
      PLUFGIN = e;
      n = {};
    }
    if (t) {
      n.config = t || {};
    }
    return {
      PLUFGIN,
      options: n,
    };
  },
  checkPluginIfExits: function (e, t) {
    for (let i = 0; i < t.length; i++) {
      if (e.toLowerCase() === t[i].pluginName.toLowerCase()) {
        return true;
      }
    }
    return false;
  },
  getRootByConfig: function (e, t) {
    for (var i = Object.keys(t), n = null, o = 0; o < i.length; o++) {
      if (e.toLowerCase() === i[o].toLowerCase()) {
        n = t[i[o]];
        break;
      }
    }
    if (Util.typeOf(n) === "Object") {
      return {
        root: n.root,
        position: n.position,
      };
    }
    return {};
  },
  lazyRegister: function (e, t) {
    const i = this;
    const n = t.timeout || 1500;
    return Promise.race([
      t.loader().then((t) => {
        let n;
        n = t && t.__esModule ? t.default : t;
        i.register(e, n, t.options);
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(Error("timeout"));
        }, n);
      }),
    ]);
  },
  register: function (e, t) {
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (e && t && typeof t === "function" && t.prototype !== undefined) {
      const n = e._pluginInfoId;
      if (n && this.pluginGroup[n]) {
        if (!this.pluginGroup[n]._plugins) {
          this.pluginGroup[n]._plugins = {};
        }
        const o = this.pluginGroup[n]._plugins;
        const s = this.pluginGroup[n]._originalOptions;
        i.player = e;
        const r = i.pluginName || t.pluginName;
        if (!r) {
          throw Error("The property pluginName is necessary");
        }
        if (
          t.isSupported &&
          !t.isSupported(e.config.mediaType, e.config.codecType)
        ) {
          return void console.warn("not supported plugin [".concat(r, "]"));
        }
        if (!i.config) {
          i.config = {};
        }
        for (let a = Object.keys(s), l = 0; l < a.length; l++) {
          if (r.toLowerCase() === a[l].toLowerCase()) {
            const c = s[a[l]];
            if (Util.typeOf(c) === "Object") {
              i.config = {
                ...i.config,
                ...s[a[l]],
              };
            } else if (Util.typeOf(c) === "Boolean") {
              i.config.disable = !c;
            }
            break;
          }
        }
        if (t.defaultConfig) {
          Object.keys(t.defaultConfig).forEach((e) => {
            if (i.config[e] === undefined) {
              i.config[e] = t.defaultConfig[e];
            }
          });
        }
        if (i.root) {
          if (typeof i.root === "string") {
            i.root = e[i.root];
          }
        } else {
          i.root = e.root;
        }
        i.index = i.config.index || 0;
        try {
          if (o[r.toLowerCase()]) {
            this.unRegister(n, r.toLowerCase());
            console.warn(
              "the is one plugin with same pluginName [".concat(
                r,
                "] exist, destroy the old instance",
              ),
            );
          }
          const u = new t(i);
          o[r.toLowerCase()] = u;
          o[r.toLowerCase()].func = t;
          if (u && typeof u.afterCreate === "function") {
            u.afterCreate();
          }
          return u;
        } catch (error) {
          console.error(error);
          throw error;
        }
      }
    }
  },
  unRegister: function (e, t) {
    if (e._pluginInfoId) {
      e = e._pluginInfoId;
    }
    t = t.toLowerCase();
    try {
      const i = this.pluginGroup[e]._plugins[t];
      if (i) {
        if (i.pluginName) {
          i.__destroy();
        }
        delete this.pluginGroup[e]._plugins[t];
      }
    } catch (error) {
      console.error(
        "[unRegister:".concat(t, "] cgid:[").concat(e, "] error"),
        error,
      );
    }
  },
  deletePlugin: function (e, t) {
    const e__pluginInfoId = e._pluginInfoId;
    if (
      e__pluginInfoId &&
      this.pluginGroup[e__pluginInfoId] &&
      this.pluginGroup[e__pluginInfoId]._plugins
    ) {
      delete this.pluginGroup[e__pluginInfoId]._plugins[t];
    }
  },
  getPlugins: function (e) {
    const e__pluginInfoId = e._pluginInfoId;
    if (e__pluginInfoId && this.pluginGroup[e__pluginInfoId]) {
      return this.pluginGroup[e__pluginInfoId]._plugins;
    }
    return {};
  },
  findPlugin: function (e, t) {
    const e__pluginInfoId = e._pluginInfoId;
    if (!e__pluginInfoId || !this.pluginGroup[e__pluginInfoId]) {
      return null;
    }
    const n = t.toLowerCase();
    return this.pluginGroup[e__pluginInfoId]._plugins[n];
  },
  beforeInit: function (e) {
    const t = this;
    function i(e) {
      if (e && e.then) {
        return e;
      }
      return new Promise((resolve) => {
        resolve();
      });
    }
    return new Promise((resolve) => {
      if (t.pluginGroup) {
        return (
          e._loadingPlugins && e._loadingPlugins.length
            ? Promise.all(e._loadingPlugins)
            : Promise.resolve()
        ).then(() => {
          const e__pluginInfoId = e._pluginInfoId;
          if (!t.pluginGroup[e__pluginInfoId]) {
            return void resolve();
          }
          const _plugins = t.pluginGroup[e__pluginInfoId]._plugins;
          const r = [];
          Object.keys(_plugins).forEach((e) => {
            if (_plugins[e] && _plugins[e].beforePlayerInit) {
              try {
                const t = _plugins[e].beforePlayerInit();
                r.push(i(t));
              } catch (error) {
                r.push(i(null));
                throw error;
              }
            }
          });
          Promise.all([].concat(r))
            .then(() => {
              resolve();
            })
            .catch((e) => {
              console.error(e);
              resolve();
            });
        });
      }
    });
  },
  afterInit: function (e) {
    const e__pluginInfoId = e._pluginInfoId;
    if (e__pluginInfoId && this.pluginGroup[e__pluginInfoId]) {
      const i = this.pluginGroup[e__pluginInfoId]._plugins;
      Object.keys(i).forEach((e) => {
        if (i[e] && i[e].afterPlayerInit) {
          i[e].afterPlayerInit();
        }
      });
    }
  },
  setLang: function (e, t) {
    const t__pluginInfoId = t._pluginInfoId;
    if (t__pluginInfoId && this.pluginGroup[t__pluginInfoId]) {
      const n = this.pluginGroup[t__pluginInfoId]._plugins;
      Object.keys(n).forEach((t) => {
        if (n[t].updateLang) {
          n[t].updateLang(e);
        } else {
          try {
            n[t].lang = e;
          } catch (e) {
            console.warn("".concat(t, " setLang"));
          }
        }
      });
    }
  },
  reRender: function (e) {
    const t = this;
    const e__pluginInfoId = e._pluginInfoId;
    if (e__pluginInfoId && this.pluginGroup[e__pluginInfoId]) {
      const n = [];
      const o = this.pluginGroup[e__pluginInfoId]._plugins;
      Object.keys(o).forEach((e) => {
        if (e !== "controls" && o[e]) {
          n.push({
            plugin: o[e].func,
            options: o[e].__args,
          });
          t.unRegister(e__pluginInfoId, e);
        }
      });
      n.forEach((i) => {
        t.register(e, i.plugin, i.options);
      });
    }
  },
  onPluginsReady: function (e) {
    const e__pluginInfoId = e._pluginInfoId;
    if (e__pluginInfoId && this.pluginGroup[e__pluginInfoId]) {
      const i = this.pluginGroup[e__pluginInfoId]._plugins || {};
      Object.keys(i).forEach((e) => {
        if (i[e].onPluginsReady && typeof i[e].onPluginsReady === "function") {
          i[e].onPluginsReady();
        }
      });
    }
  },
  destroy: function (e) {
    const e__pluginInfoId = e._pluginInfoId;
    if (this.pluginGroup[e__pluginInfoId]) {
      if (e.root) {
        i = e.root;
        eu.unObserver(i, undefined);
      }
      var i;
      const n = this.pluginGroup[e__pluginInfoId]._plugins;
      for (let o = 0, s = Object.keys(n); o < s.length; o++) {
        const r = s[o];
        this.unRegister(e__pluginInfoId, r);
      }
      delete this.pluginGroup[e__pluginInfoId];
      delete e._pluginInfoId;
    }
  },
};
export var STATE_CLASS = {
  DEFAULT: "xgplayer",
  DEFAULT_SKIN: "xgplayer-skin-default",
  ENTER: "xgplayer-is-enter",
  PAUSED: "xgplayer-pause",
  PLAYING: "xgplayer-playing",
  ENDED: "xgplayer-ended",
  CANPLAY: "xgplayer-canplay",
  LOADING: "xgplayer-isloading",
  ERROR: "xgplayer-is-error",
  REPLAY: "xgplayer-replay",
  NO_START: "xgplayer-nostart",
  ACTIVE: "xgplayer-active",
  INACTIVE: "xgplayer-inactive",
  FULLSCREEN: "xgplayer-is-fullscreen",
  CSS_FULLSCREEN: "xgplayer-is-cssfullscreen",
  ROTATE_FULLSCREEN: "xgplayer-rotate-fullscreen",
  PARENT_ROTATE_FULLSCREEN: "xgplayer-rotate-parent",
  PARENT_FULLSCREEN: "xgplayer-fullscreen-parent",
  INNER_FULLSCREEN: "xgplayer-fullscreen-inner",
  NO_CONTROLS: "no-controls",
  FLEX_CONTROLS: "flex-controls",
  CONTROLS_FOLLOW: "controls-follow",
  CONTROLS_AUTOHIDE: "controls-autohide",
  TOP_BAR_AUTOHIDE: "top-bar-autohide",
  NOT_ALLOW_AUTOPLAY: "not-allow-autoplay",
  SEEKING: "seeking",
  PC: "xgplayer-pc",
  BUILTIN_CLASS: "xgplayer-built-in",
  MOBILE: "xgplayer-mobile",
  MINI: "xgplayer-mini",
};
function ef() {
  let e;
  return {
    id: "",
    el: null,
    isNoRoot: false,
    isCustomRoot: true,
    url: "",
    domEventType: "default",
    nullUrlStart: false,
    width: 600,
    height: 337.5,
    fluid: false,
    fitVideoSize: "fixed",
    videoFillMode: "auto",
    volume: 0.6,
    autoplay: false,
    autoplayMuted: false,
    loop: false,
    isLive: false,
    zoom: 1,
    videoInit: true,
    poster: "",
    isMobileSimulateMode: false,
    defaultPlaybackRate: 1,
    execBeforePluginsCall: null,
    allowSeekAfterEnded: true,
    enableContextmenu: true,
    closeVideoClick: false,
    closeVideoDblclick: false,
    closePlayerBlur: false,
    closeDelayBlur: false,
    leavePlayerTime: 3000,
    closePlayVideoFocus: false,
    closePauseVideoFocus: false,
    closeFocusVideoFocus: true,
    closeControlsBlur: true,
    topBarAutoHide: true,
    videoAttributes: {},
    startTime: 0,
    seekedStatus: "play",
    miniprogress: false,
    disableSwipeHandler: function () {},
    enableSwipeHandler: function () {},
    preProcessUrl: null,
    ignores: [],
    whitelist: [],
    inactive: 3000,
    lang:
      ((e = (
        document.documentElement.getAttribute("lang") ||
        navigator.language ||
        "zh-cn"
      ).toLocaleLowerCase()) === "zh-cn" && (e = "zh"),
      e),
    controls: true,
    marginControls: false,
    fullscreenTarget: null,
    screenShot: false,
    rotate: false,
    pip: false,
    download: false,
    mini: false,
    cssFullscreen: true,
    keyShortcut: true,
    presets: [],
    plugins: [],
    playbackRate: 1,
    definition: {
      list: [],
    },
    playsinline: true,
    customDuration: 0,
    timeOffset: 0,
    icons: {},
    i18n: [],
    tabindex: 0,
    thumbnail: null,
    videoConfig: {},
    isHideTips: false,
    minWaitDelay: 200,
    commonStyle: {
      progressColor: "",
      playedColor: "",
      cachedColor: "",
      sliderBtnStyle: {},
      volumeColor: "",
    },
  };
}
const eg = (e, t) => {
  let i;
  let n;
  const o =
    t.preset && t.options
      ? new t.preset(t.options, e.config)
      : new t({}, e.config);
  const o_plugins = o.plugins;
  const o_ignores = o.ignores;
  const o_icons = o.icons;
  const l = o_icons === undefined ? {} : o_icons;
  const o_i18n = o.i18n;
  const u = o_i18n === undefined ? [] : o_i18n;
  if (!e.config.plugins) {
    e.config.plugins = [];
  }
  if (!e.config.ignores) {
    e.config.ignores = [];
  }
  (i = e.config.plugins).push.apply(i, [
    ...(o_plugins === undefined ? [] : o_plugins),
  ]);
  (n = e.config.ignores).push.apply(n, [
    ...(o_ignores === undefined ? [] : o_ignores),
  ]);
  Object.keys(l).map((t) => {
    if (!e.config.icons[t]) {
      e.config.icons[t] = l[t];
    }
  });
  const h = e.config.i18n || [];
  u.push.apply(u, [...h]);
  e.config.i18n = u;
};
const ep = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onMouseEnter = function (t) {
      const e_player = e.player;
      if (e.playerConfig.closeControlsBlur) {
        e_player.focus({
          autoHide: false,
        });
      }
    };
    e.onMouseLeave = function (t) {
      e.player.focus();
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          if (!(e.config.mode || Sniffer.device !== "mobile")) {
            e.config.mode = "flex";
          }
          if (e.player.config.marginControls) {
            e.config.autoHide = false;
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          const config = this.config;
          const t_disable = config.disable;
          const t_height = config.height;
          const t_mode = config.mode;
          if (!t_disable) {
            if (t_mode === "flex") {
              this.player.addClass(STATE_CLASS.FLEX_CONTROLS);
            }
            const s = {
              height: "".concat(t_height, "px"),
            };
            Object.keys(s).map((t) => {
              e.root.style[t] = s[t];
            });
            this.left = this.find("xg-left-grid");
            this.center = this.find("xg-center-grid");
            this.right = this.find("xg-right-grid");
            this.innerRoot = this.find("xg-inner-controls");
            this.on(M.MINI_STATE_CHANGE, function (t) {
              if (t) {
                Util.addClass(e.root, "mini-controls");
              } else {
                Util.removeClass(e.root, "mini-controls");
              }
            });
            const r = this.playerConfig.isMobileSimulateMode;
            if (Sniffer.device !== "mobile" && r !== "mobile") {
              this.bind("mouseenter", this.onMouseEnter);
              this.bind("mouseleave", this.onMouseLeave);
            }
          }
        },
      },
      {
        key: "focus",
        value: function () {
          this.player.focus({
            autoHide: false,
          });
        },
      },
      {
        key: "focusAwhile",
        value: function () {
          this.player.focus({
            autoHide: true,
          });
        },
      },
      {
        key: "blur",
        value: function () {
          this.player.blur({
            ignorePaused: true,
          });
        },
      },
      {
        key: "recoverAutoHide",
        value: function () {
          if (this.config.autoHide) {
            Util.addClass(this.root, STATE_CLASS.CONTROLS_AUTOHIDE);
          }
        },
      },
      {
        key: "pauseAutoHide",
        value: function () {
          Util.removeClass(this.root, STATE_CLASS.CONTROLS_AUTOHIDE);
        },
      },
      {
        key: "show",
        value: function (e) {
          this.root.style.display = "";
          this.player.focus();
        },
      },
      {
        key: "hide",
        value: function () {
          this.root.style.display = "none";
        },
      },
      {
        key: "mode",
        get: function () {
          return this.config.mode;
        },
      },
      {
        key: "registerPlugin",
        value: function (e) {
          const i =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          const n = arguments.length > 2 ? arguments[2] : undefined;
          if (this.root) {
            const o = e.defaultConfig || {};
            if (!i.root) {
              switch (
                i.position
                  ? i.position
                  : i.config && i.config.position
                    ? i.config.position
                    : o.position
              ) {
                case eo.CONTROLS_LEFT:
                  i.root = this.left;
                  break;
                case eo.CONTROLS_RIGHT:
                  i.root = this.right;
                  break;
                case eo.CONTROLS_CENTER:
                  i.root = this.center;
                  break;
                case eo.CONTROLS:
                  i.root = this.root;
                  break;
                default:
                  i.root = this.left;
              }
              return m(t, "registerPlugin", this, 3)([e, i, n]);
            }
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          if (Sniffer.device !== "mobile") {
            this.unbind("mouseenter", this.onMouseEnter);
            this.unbind("mouseleave", this.onMouseLeave);
          }
        },
      },
      {
        key: "render",
        value: function () {
          const config = this.config;
          const e_mode = config.mode;
          const e_autoHide = config.autoHide;
          const e_initShow = config.initShow;
          if (!config.disable) {
            const o = Util.classNames(
              {
                "xgplayer-controls": true,
              },
              {
                "flex-controls": e_mode === "flex",
              },
              {
                "bottom-controls": e_mode === "bottom",
              },
              l({}, STATE_CLASS.CONTROLS_AUTOHIDE, e_autoHide),
              {
                "xgplayer-controls-initshow": e_initShow || !e_autoHide,
              },
            );
            return '<xg-controls class="'.concat(
              o,
              '" unselectable="on">\n    <xg-inner-controls class="xg-inner-controls xg-pos">\n      <xg-left-grid class="xg-left-grid">\n      </xg-left-grid>\n      <xg-center-grid class="xg-center-grid"></xg-center-grid>\n      <xg-right-grid class="xg-right-grid">\n      </xg-right-grid>\n    </xg-inner-controls>\n    </xg-controls>',
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "controls";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            disable: false,
            autoHide: true,
            mode: "",
            initShow: false,
          };
        },
      },
    ],
  );
})(Plugin);
const ev = {
  lang: {},
  langKeys: [],
  textKeys: [],
};
function em(e, t) {
  Object.keys(t).forEach((i) => {
    let n;
    const o = Util.typeOf(t[i]);
    const s = Util.typeOf(e[i]);
    switch (o) {
      case "Array":
        if (s !== "Array") {
          e[i] = [];
        }
        (n = e[i]).push.apply(n, [...t[i]]);
        break;
      case "Object":
        if (s !== "Object") {
          e[i] = {};
        }
        em(e[i], t[i]);
        break;
      default:
        e[i] = t[i];
    }
  });
  return e;
}
function ey() {
  Object.keys(ev.lang.en).map((e) => {
    ev.textKeys[e] = e;
  });
}
function use(e, t) {
  let e_LANG = e.LANG;
  if (!t) {
    t = ev;
  }
  if (t.lang) {
    const n = e.TEXT || {};
    if (e_LANG === "zh") {
      e_LANG = "zh-cn";
    }
    if (t.lang[e_LANG]) {
      em(t.lang[e_LANG], n);
    } else {
      t.langKeys.push(e_LANG);
      t.lang[e_LANG] = n;
    }
    ey();
  }
}
use({
  LANG: "en",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download error",
      },
      mse: {
        code: 2,
        msg: "stream append error",
      },
      parse: {
        code: 3,
        msg: "parsing error",
      },
      format: {
        code: 4,
        msg: "wrong format",
      },
      decoder: {
        code: 5,
        msg: "decoding error",
      },
      runtime: {
        code: 6,
        msg: "grammatical errors",
      },
      timeout: {
        code: 7,
        msg: "play timeout",
      },
      other: {
        code: 8,
        msg: "other errors",
      },
    },
    HAVE_NOTHING: "There is no information on whether audio/video is ready",
    HAVE_METADATA: "Audio/video metadata is ready ",
    HAVE_CURRENT_DATA:
      "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
    HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
    HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
    NETWORK_EMPTY: "Audio/video has not been initialized",
    NETWORK_IDLE:
      "Audio/video is active and has been selected for resources, but no network is used",
    NETWORK_LOADING: "The browser is downloading the data",
    NETWORK_NO_SOURCE: "No audio/video source was found",
    MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
    MEDIA_ERR_NETWORK: "An error occurred while downloading",
    MEDIA_ERR_DECODE: "An error occurred while decoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
    REPLAY: "Replay",
    ERROR: "Network is offline",
    PLAY_TIPS: "Play",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Play next",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Rotate",
    RELOAD_TIPS: "Reload",
    FULLSCREEN_TIPS: "Fullscreen",
    EXITFULLSCREEN_TIPS: "Exit fullscreen",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
    TEXTTRACK: "Caption",
    PIP: "PIP",
    SCREENSHOT: "Screenshot",
    LIVE: "LIVE",
    OFF: "Off",
    OPEN: "Open",
    MINI_DRAG: "Click and hold to drag",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Please Try",
    REFRESH: "Refresh",
    FORWARD: "forward",
    LIVE_TIP: "Live",
  },
});
export var I18N = {
  get textKeys() {
    return ev.textKeys;
  },
  get langKeys() {
    return ev.langKeys;
  },
  get lang() {
    const e = {};
    ev.langKeys.map((t) => {
      e[t] = ev.lang[t];
    });
    if (ev.lang["zh-cn"]) {
      e.zh = ev.lang["zh-cn"] || {};
    }
    return e;
  },
  extend: function (e, t) {
    let i = [];
    if (!t) {
      t = ev;
    }
    if (t.lang) {
      i =
        Util.typeOf(e) !== "Array"
          ? Object.keys(e).map((t) => ({
              LANG: t === "zh" ? "zh-cn" : t,
              TEXT: e[t],
            }))
          : e;
      const n = t.lang;
      i.map((e) => {
        if (e.LANG === "zh") {
          e.LANG = "zh-cn";
        }
        if (n[e.LANG]) {
          em(n[e.LANG] || {}, e.TEXT || {});
        } else {
          use(e, t);
        }
      });
      ey();
    }
  },
  use,
  init: function (pId) {
    let t;
    const i = {
      lang: {},
      langKeys: [],
      textKeys: {},
      pId,
    };
    em(i.lang, ev.lang);
    (t = i.langKeys).push.apply(t, [...ev.langKeys]);
    em(i.textKeys, ev.textKeys);
    return i;
  },
};
export var STATES = {
  INITIAL: 1,
  READY: 2,
  ATTACHING: 3,
  ATTACHED: 4,
  NOTALLOW: 5,
  RUNNING: 6,
  ENDED: 7,
  DESTROYED: 8,
};
const eT = [
  "ERROR",
  "INITIAL",
  "READY",
  "ATTACHING",
  "ATTACHED",
  "NOTALLOW",
  "RUNNING",
  "ENDED",
  "DESTROYED",
];
const eE = {};
let eb = null;
export var InstManager = ((e) => {
  function t() {
    s(this, t);
    return o(this, t, arguments);
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "add",
        value: function (e) {
          if (e) {
            eE[e.playerId] = e;
            if (Object.keys(eE).length === 1) {
              this.setActive(e.playerId, true);
            }
          }
        },
      },
      {
        key: "remove",
        value: function (e) {
          if (e) {
            e.isUserActive;
            delete eE[e.playerId];
          }
        },
      },
      {
        key: "_iterate",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          for (const i in eE) {
            if (Object.prototype.hasOwnProperty.call(eE, i)) {
              const n = eE[i];
              if (t) {
                if (e(n)) {
                  break;
                }
              } else {
                e(n);
              }
            }
          }
        },
      },
      {
        key: "forEach",
        value: function (e) {
          this._iterate(e);
        },
      },
      {
        key: "find",
        value: function (e) {
          let t = null;
          this._iterate(function (i) {
            const n = e(i);
            if (n) {
              t = i;
            }
            return n;
          }, true);
          return t;
        },
      },
      {
        key: "findAll",
        value: function (e) {
          const t = [];
          this._iterate(function (i) {
            if (e(i)) {
              t.push(i);
            }
          });
          return t;
        },
      },
      {
        key: "setActive",
        value: function (e) {
          const t =
            !(arguments.length > 1) ||
            arguments[1] === undefined ||
            arguments[1];
          if (eE[e]) {
            if (t) {
              this.forEach((t) => {
                if (e === t.playerId) {
                  t.isUserActive = true;
                  t.isInstNext = false;
                } else {
                  t.isUserActive = false;
                }
              });
            } else {
              eE[e].isUserActive = t;
            }
            return e;
          }
        },
      },
      {
        key: "getActiveId",
        value: function () {
          for (let e = Object.keys(eE), t = 0; t < e.length; t++) {
            const i = eE[e[t]];
            if (i && i.isUserActive) {
              return e[t];
            }
          }
          return null;
        },
      },
      {
        key: "setNext",
        value: function (e) {
          const t =
            !(arguments.length > 1) ||
            arguments[1] === undefined ||
            arguments[1];
          if (eE[e]) {
            if (t) {
              this.forEach((t) => {
                if (e === t.playerId) {
                  t.isUserActive = false;
                  t.isInstNext = true;
                } else {
                  t.isInstNext = false;
                }
              });
            } else {
              eE[e].isInstNext = t;
            }
            return e;
          }
        },
      },
    ],
    [
      {
        key: "getInstance",
        value: function () {
          if (!eb) {
            eb = new t();
          }
          return eb;
        },
      },
    ],
  );
})(_.b);
const ew = ["play", "pause", "replay", "retry"];
let eS = 0;
let eI = 0;
let eP = null;
export var SimplePlayer = ((e) => {
  function t(e) {
    s(this, t);
    let i;
    const n = Util.deepMerge(ef(), e);
    i = o(this, t, [n]);
    i.canPlayFunc = function () {
      if (i.config) {
        const e = i.config;
        const t = e.autoplay;
        const n = e.defaultPlaybackRate;
        b.logInfo("player", "canPlayFunc, startTime", i.__startTime);
        i._seekToStartTime();
        i.playbackRate = n;
        if (t || i._useAutoplay) {
          i.mediaPlay();
        }
        i.off(M.CANPLAY, i.canPlayFunc);
        i.removeClass(STATE_CLASS.ENTER);
      }
    };
    i.onFullscreenChange = function (e, t) {
      const n = () => {
        Util.setTimeout(
          i,
          function () {
            i.resize();
          },
          100,
        );
      };
      const o = Util.getFullScreenEl();
      if (i._fullActionFrom) {
        i._fullActionFrom = "";
      } else {
        i.emit(M.USER_ACTION, {
          eventType: "system",
          action: "switch_fullscreen",
          pluginName: "player",
          currentTime: i.currentTime,
          duration: i.duration,
          props: [
            {
              prop: "fullscreen",
              from: true,
              to: false,
            },
          ],
        });
      }
      const s = ((e, t, i) => {
        if (e) {
          const n = e.getAttribute(i);
          return (
            !!n && n === t && (e.tagName === "VIDEO" || e.tagName === "AUDIO")
          );
        }
      })(o, i.playerId, V);
      const r = !!o && !!o.shadowRoot;
      if (t || (o && (o === i._fullscreenEl || s)) || (r && i._fullscreenEl)) {
        n();
        if (!i.config.closeFocusVideoFocus) {
          i.media.focus();
        }
        i.fullscreen = true;
        i.changeFullStyle(i.root, o, STATE_CLASS.FULLSCREEN);
        i.emit(M.FULLSCREEN_CHANGE, true, i._fullScreenOffset);
        if (i.cssfullscreen) {
          i.exitCssFullscreen();
        }
      } else if (i.fullscreen) {
        n();
        const a = i._fullScreenOffset;
        if (i.config.needFullscreenScroll) {
          window.scrollTo(a.left, a.top);
          Util.setTimeout(
            i,
            function () {
              i.fullscreen = false;
              i._fullScreenOffset = null;
            },
            100,
          );
        } else {
          if (!i.config.closeFocusVideoFocus) {
            i.media.focus();
          }
          i.fullscreen = false;
          i._fullScreenOffset = null;
        }
        if (i.cssfullscreen) {
          i.removeClass(STATE_CLASS.FULLSCREEN);
        } else {
          let l = i._fullscreenEl;
          if (!l && (i.root.contains(e.target) || e.target === i.root)) {
            l = e.target;
          }
          i.recoverFullStyle(i.root, l, STATE_CLASS.FULLSCREEN);
        }
        i._fullscreenEl = null;
        i.emit(M.FULLSCREEN_CHANGE, false);
      }
    };
    i._onWebkitbeginfullscreen = function (e) {
      i._fullscreenEl = i.media;
      i.onFullscreenChange(e, true);
    };
    i._onWebkitendfullscreen = function (e) {
      i.onFullscreenChange(e, false);
    };
    Z(i, ew);
    i.config = n;
    i._pluginInfoId = Util.generateSessionId();
    i.logInfo = b.logInfo.bind(i);
    i.logWarn = b.logWarn.bind(i);
    i.logError = b.logError.bind(i);
    const defaultPreset = i.constructor.defaultPreset;
    const presets = i.config.presets;
    if (presets.length) {
      const c = presets.indexOf("default");
      if (c >= 0 && defaultPreset) {
        presets[c] = defaultPreset;
      }
    } else {
      if (defaultPreset) {
        presets.push(defaultPreset);
      }
    }
    i.userTimer = null;
    i.waitTimer = null;
    i.handleSource = true;
    i._state = STATES.INITIAL;
    i.isError = false;
    i._hasStart = false;
    i.isSeeking = false;
    i.isCanplay = false;
    i._useAutoplay = false;
    i.__startTime = -1;
    i.rotateDeg = 0;
    i.isActive = false;
    i.fullscreen = false;
    i.cssfullscreen = false;
    i.isRotateFullscreen = false;
    i._fullscreenEl = null;
    i.timeSegments = [];
    i._cssfullscreenEl = null;
    i.curDefinition = null;
    i._orgCss = "";
    i._fullScreenOffset = null;
    i._videoHeight = 0;
    i._videoWidth = 0;
    i.videoPos = {
      pi: 1,
      scale: 0,
      rotate: -1,
      x: 0,
      y: 0,
      h: -1,
      w: -1,
      vy: 0,
      vx: 0,
    };
    i.sizeInfo = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    };
    i._accPlayed = {
      t: 0,
      acc: 0,
      loopAcc: 0,
    };
    i._offsetInfo = {
      currentTime: -1,
      duration: -1,
    };
    i.innerContainer = null;
    i.controls = null;
    i.topBar = null;
    i.root = null;
    i.__i18n = I18N.init(i._pluginInfoId);
    if (
      Sniffer.os.isAndroid &&
      Sniffer.osVersion > 0 &&
      Sniffer.osVersion < 6
    ) {
      i.config.autoplay = false;
    }
    i.database = new U();
    i.isUserActive = false;
    i._onceSeekCanplay = null;
    i._isPauseBeforeSeek = 0;
    i.innerStates = {
      isActiveLocked: false,
    };
    i.instManager = eP;
    i._initMedia();
    const isNoRoot = i.config.isNoRoot;
    const h = !isNoRoot && i._initDOM();
    if (!isNoRoot && !h) {
      console.error(
        Error(
          "can't find the dom which id is ".concat(
            i.config.id,
            " or this.config.el does not exist",
          ),
        ),
      );
      return p(i);
    }
    const i_config = i.config;
    const d_definition = i_config.definition;
    const g = d_definition === undefined ? {} : d_definition;
    if (!i_config.url && g.list && g.list.length > 0) {
      let v = g.list.find(
        (e) => e.definition && e.definition === g.defaultDefinition,
      );
      if (!v) {
        g.defaultDefinition = g.list[0].definition;
        v = g.list[0];
      }
      i.config.url = v.url;
      i.curDefinition = v;
    }
    i._bindEvents();
    i._registerPresets();
    i._registerPlugins();
    eh.onPluginsReady(i);
    i.getInitDefinition();
    i.setState(STATES.READY);
    Util.setTimeout(
      i,
      function () {
        i.emit(M.READY);
      },
      0,
    );
    if (i.onReady) {
      i.onReady();
    }
    if (
      (i.config.videoInit || i.config.autoplay) &&
      (!i.hasStart || i.state < STATES.ATTACHED)
    ) {
      i.start();
    }
    return i;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "_initMedia",
        value: function () {
          const XgVideoProxy = this.constructor.XgVideoProxy;
          if (
            XgVideoProxy &&
            this.mediaConfig.mediaType === XgVideoProxy.mediaType
          ) {
            const t = this.innerContainer || this.root;
            this.detachVideoEvents(this.media);
            const i = new XgVideoProxy(t, this.config, this.mediaConfig);
            this.attachVideoEvents(i);
            this.media = i;
          }
          this.media.setAttribute(V, this.playerId);
        },
      },
      {
        key: "_initDOM",
        value: function () {
          let e;
          const t = this;
          const config = this.config;
          const n = config.id;
          const o = config.el;
          const i_isCustomRoot = config.isCustomRoot;
          const i_controls = config.controls;
          const i_autoplay = config.autoplay;
          const i_isMobileSimulateMode = config.isMobileSimulateMode;
          this.root = n ? document.getElementById(n) : null;
          if (!this.root) {
            if (o && o.nodeType === 1) {
              this.root = o;
            } else {
              if (i_isCustomRoot) {
                this.emit(
                  M.ERROR,
                  new Errors("use", this.config.vid, {
                    line: 32,
                    handle: "Constructor",
                    msg: "container id can't be empty",
                  }),
                );
                console.error("this.confg.id or this.config.el can't be empty");
                return false;
              }
              this.root = Util.createDom("div", "", {
                id: n,
                class: STATE_CLASS.BUILTIN_CLASS,
              });
            }
          }
          const c = ((e) => {
            for (let t = Object.keys(eE), i = 0; i < t.length; i++) {
              const n = eE[t[i]];
              if (n.root === e) {
                return n;
              }
            }
            return null;
          })(this.root);
          if (c) {
            b.logWarn(
              "The is an Player instance already exists in this.root, destroy it and reinitialize",
            );
            c.destroy();
          }
          this.root.setAttribute(V, this.playerId);
          if ((e = eP) != null) {
            e.add(this);
          }
          eh.init(this);
          this._initBaseDoms();
          const XgVideoProxy = this.constructor.XgVideoProxy;
          if (
            XgVideoProxy &&
            this.mediaConfig.mediaType === XgVideoProxy.mediaType
          ) {
            const h = this.innerContainer || this.root;
            this.detachVideoEvents(this.media);
            const d = new XgVideoProxy(h, this.config, this.mediaConfig);
            this.attachVideoEvents(d);
            this.media = d;
          }
          this.media.setAttribute(V, this.playerId);
          if (i_controls) {
            const root = i_controls.root || null;
            const g = eh.register(this, ep, {
              root,
            });
            this.controls = g;
          }
          const p =
            i_isMobileSimulateMode === "mobile" ? "mobile" : Sniffer.device;
          this.addClass(
            ""
              .concat(STATE_CLASS.DEFAULT, " ")
              .concat(STATE_CLASS.INACTIVE, " xgplayer-")
              .concat(p, " ")
              .concat(i_controls ? "" : STATE_CLASS.NO_CONTROLS),
          );
          if (i_autoplay) {
            this.addClass(STATE_CLASS.ENTER);
          } else {
            this.addClass(STATE_CLASS.NO_START);
          }
          if (this.config.fluid) {
            const v = this.config;
            let m = v.width;
            let y = v.height;
            if (typeof m !== "number" || typeof y !== "number") {
              m = 600;
              y = 337.5;
            }
            const k = {
              width: "100%",
              height: "0",
              "max-width": "100%",
              "padding-top": `${(100 * y) / m}%`,
            };
            Object.keys(k).forEach((e) => {
              t.root.style[e] = k[e];
            });
          } else {
            ["width", "height"].forEach((e) => {
              if (t.config[e]) {
                if (typeof t.config[e] !== "number") {
                  t.root.style[e] = t.config[e];
                } else {
                  t.root.style[e] = "".concat(t.config[e], "px");
                }
              }
            });
          }
          const C = this.root.getBoundingClientRect();
          const C_width = C.width;
          const C_height = C.height;
          const C_left = C.left;
          const C_top = C.top;
          this.sizeInfo.width = C_width;
          this.sizeInfo.height = C_height;
          this.sizeInfo.left = C_left;
          this.sizeInfo.top = C_top;
          return true;
        },
      },
      {
        key: "_initBaseDoms",
        value: function () {
          this.topBar = null;
          this.leftBar = null;
          this.rightBar = null;
          if (this.config.marginControls) {
            this.innerContainer = Util.createDom(
              "xg-video-container",
              "",
              {
                "data-index": -1,
              },
              "xg-video-container",
            );
            this.root.appendChild(this.innerContainer);
          }
        },
      },
      {
        key: "_bindEvents",
        value: function () {
          const e = this;
          ["focus", "blur"].forEach((t) => {
            e.on(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)]);
          });
          B.forEach((t) => {
            if (document) {
              document.addEventListener(t, e.onFullscreenChange);
            }
          });
          if (Sniffer.os.isIos) {
            this.media.addEventListener(
              "webkitbeginfullscreen",
              this._onWebkitbeginfullscreen,
            );
            this.media.addEventListener(
              "webkitendfullscreen",
              this._onWebkitendfullscreen,
            );
          }
          this.once(M.LOADED_DATA, this.resize);
          this.playFunc = function () {
            if (!e.config.closeFocusVideoFocus) {
              e.media.focus();
            }
          };
          this.once(M.PLAY, this.playFunc);
        },
      },
      {
        key: "_unbindEvents",
        value: function () {
          const e = this;
          if (this.root) {
            this.root.removeEventListener("mousemove", this.mousemoveFunc);
          }
          B.forEach((t) => {
            document.removeEventListener(t, e.onFullscreenChange);
          });
          if (this.playFunc) {
            this.off(M.PLAY, this.playFunc);
          }
          this.off(M.CANPLAY, this.canPlayFunc);
          this.media.removeEventListener(
            "webkitbeginfullscreen",
            this._onWebkitbeginfullscreen,
          );
          this.media.removeEventListener(
            "webkitendfullscreen",
            this._onWebkitendfullscreen,
          );
        },
      },
      {
        key: "_clearUserTimer",
        value: function () {
          if (this.userTimer) {
            Util.clearTimeout(this, this.userTimer);
            this.userTimer = null;
          }
        },
      },
      {
        key: "_startInit",
        value: function (e) {
          const t = this;
          if (this.media) {
            if (
              (!e ||
                e === "" ||
                (Util.typeOf(e) === "Array" && e.length === 0)) &&
              ((e = ""),
              this.emit(M.URL_NULL),
              b.logWarn(
                "config.url is null, please get url and run player._startInit(url)",
              ),
              this.config.nullUrlStart)
            ) {
              return;
            }
            if (this.handleSource) {
              this._detachSourceEvents(this.media);
              if (Util.typeOf(e) === "Array" && e.length > 0) {
                this._attachSourceEvents(this.media, e);
              } else if (this.media.src && this.media.src === e) {
                if (!e) {
                  this.media.removeAttribute("src");
                }
              } else {
                this.media.src = e;
              }
            }
            if (Util.typeOf(this.config.volume) === "Number") {
              this.volume = this.config.volume;
            }
            const i = this.innerContainer ? this.innerContainer : this.root;
            if (
              i &&
              this.media instanceof window.Element &&
              !i.contains(this.media)
            ) {
              i.insertBefore(this.media, i.firstChild);
            }
            const n = this.media.readyState;
            b.logInfo("_startInit readyState", n);
            if (this.config.autoplay) {
              if (!Util.isMSE(this.media)) {
                this.load();
              }
              if (Sniffer.os.isIpad || Sniffer.os.isPhone) {
                this.mediaPlay();
              }
            }
            const o = this.config.startTime;
            this.__startTime = o > 0 ? o : -1;
            this.config.startTime = 0;
            if (n >= 2 && this.duration > 0) {
              this.canPlayFunc();
            } else {
              this.on(M.CANPLAY, this.canPlayFunc);
            }
            if (!this.hasStart || this.state < STATES.ATTACHED) {
              eh.afterInit(this);
            }
            this.hasStart = true;
            this.setState(STATES.ATTACHED);
            Util.setTimeout(
              this,
              function () {
                t.emit(M.COMPLETE);
              },
              0,
            );
          }
        },
      },
      {
        key: "_registerPlugins",
        value: function () {
          const e = this;
          const t =
            !(arguments.length > 0) ||
            arguments[0] === undefined ||
            arguments[0];
          this._loadingPlugins = [];
          const i = this.config.ignores || [];
          const n = this.config.plugins || [];
          const o = this.config.i18n || [];
          if (t) {
            I18N.extend(o, this.__i18n);
          }
          const s = i.join("||").toLowerCase().split("||");
          const plugins = this.plugins;
          n.forEach((i) => {
            try {
              const n = i.plugin ? i.plugin.pluginName : i.pluginName;
              if (n && s.indexOf(n.toLowerCase()) > -1) {
                return null;
              }
              if (!t && plugins[n.toLowerCase()]) {
                return;
              }
              if (i.lazy && i.loader) {
                const o = eh.lazyRegister(e, i);
                if (i.forceBeforeInit) {
                  o.then(() => {
                    e._loadingPlugins.splice(e._loadingPlugins.indexOf(o), 1);
                  }).catch((t) => {
                    b.logError("_registerPlugins:loadingPlugin", t);
                    e._loadingPlugins.splice(e._loadingPlugins.indexOf(o), 1);
                  });
                  e._loadingPlugins.push(o);
                }
                return;
              }
              return e.registerPlugin(i);
            } catch (error) {
              b.logError("_registerPlugins:", error);
            }
          });
        },
      },
      {
        key: "_registerPresets",
        value: function () {
          const e = this;
          this.config.presets.forEach((t) => {
            eg(e, t);
          });
        },
      },
      {
        key: "_getRootByPosition",
        value: function (e) {
          let t = null;
          switch (e) {
            case eo.ROOT_RIGHT:
              if (!this.rightBar) {
                this.rightBar = Util.createPositionBar(
                  "xg-right-bar",
                  this.root,
                );
              }
              t = this.rightBar;
              break;
            case eo.ROOT_LEFT:
              if (!this.leftBar) {
                this.leftBar = Util.createPositionBar("xg-left-bar", this.root);
              }
              t = this.leftBar;
              break;
            case eo.ROOT_TOP:
              if (!this.topBar) {
                this.topBar = Util.createPositionBar("xg-top-bar", this.root);
                if (this.config.topBarAutoHide) {
                  Util.addClass(this.topBar, STATE_CLASS.TOP_BAR_AUTOHIDE);
                }
              }
              t = this.topBar;
              break;
            default:
              t = this.innerContainer || this.root;
          }
          return t;
        },
      },
      {
        key: "registerPlugin",
        value: function (e, t) {
          const i = eh.formatPluginInfo(e, t);
          const i_PLUFGIN = i.PLUFGIN;
          const i_options = i.options;
          const plugins = this.config.plugins;
          if (!eh.checkPluginIfExits(i_PLUFGIN.pluginName, plugins)) {
            plugins.push(i_PLUFGIN);
          }
          const r = eh.getRootByConfig(i_PLUFGIN.pluginName, this.config);
          if (r.root) {
            i_options.root = r.root;
          }
          if (r.position) {
            i_options.position = r.position;
          }
          const a = i_options.position
            ? i_options.position
            : (i_options.config && i_options.config.position) ||
              (i_PLUFGIN.defaultConfig && i_PLUFGIN.defaultConfig.position);
          if (
            !i_options.root &&
            typeof a === "string" &&
            a.indexOf("controls") > -1
          ) {
            return (
              this.controls &&
              this.controls.registerPlugin(
                i_PLUFGIN,
                i_options,
                i_PLUFGIN.pluginName,
              )
            );
          }
          if (!i_options.root) {
            i_options.root =
              i_PLUFGIN.pluginName === "controls"
                ? this.root
                : this._getRootByPosition(a);
          }
          return eh.register(this, i_PLUFGIN, i_options);
        },
      },
      {
        key: "deregister",
        value: function (e) {
          if (typeof e === "string") {
            eh.unRegister(this, e);
          } else if (e instanceof BasePlugin) {
            eh.unRegister(this, e.pluginName);
          }
        },
      },
      {
        key: "unRegisterPlugin",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined && arguments[1];
          this.deregister(e);
          if (t) {
            this.removePluginFromConfig(e);
          }
        },
      },
      {
        key: "removePluginFromConfig",
        value: function (e) {
          let t;
          if (typeof e === "string") {
            t = e;
          } else if (e instanceof BasePlugin) {
            t = e.pluginName;
          }
          if (t) {
            for (let i = this.config.plugins.length - 1; i > -1; i--) {
              if (
                this.config.plugins[i].pluginName.toLowerCase() ===
                t.toLowerCase()
              ) {
                this.config.plugins.splice(i, 1);
                break;
              }
            }
          }
        },
      },
      {
        key: "plugins",
        get: function () {
          return eh.getPlugins(this);
        },
      },
      {
        key: "getPlugin",
        value: function (e) {
          const t = eh.findPlugin(this, e);
          if (t && t.pluginName) {
            return t;
          }
          return null;
        },
      },
      {
        key: "addClass",
        value: function (e) {
          if (this.root) {
            if (!Util.hasClass(this.root, e)) {
              Util.addClass(this.root, e);
            }
          }
        },
      },
      {
        key: "removeClass",
        value: function (e) {
          if (this.root) {
            Util.removeClass(this.root, e);
          }
        },
      },
      {
        key: "hasClass",
        value: function (e) {
          if (this.root) {
            return Util.hasClass(this.root, e);
          }
        },
      },
      {
        key: "setAttribute",
        value: function (e, t) {
          if (this.root) {
            this.root.setAttribute(e, t);
          }
        },
      },
      {
        key: "removeAttribute",
        value: function (e, t) {
          if (this.root) {
            this.root.removeAttribute(e, t);
          }
        },
      },
      {
        key: "start",
        value: function (e) {
          const t = this;
          if (!(this.state > STATES.ATTACHING)) {
            if (!(e || this.config.url)) {
              this.getInitDefinition();
            }
            this.hasStart = true;
            this.setState(STATES.ATTACHING);
            this._registerPlugins(false);
            return eh
              .beforeInit(this)
              .then(() => {
                if (t.config) {
                  if (!e) {
                    e = t.url || t.config.url;
                  }
                  const i = t._preProcessUrl(e);
                  return t._startInit(i.url);
                }
              })
              .catch((e) => {
                e.fileName = "player";
                e.lineNumber = "236";
                b.logError("start:beforeInit:", e);
                throw e;
              });
          }
        },
      },
      {
        key: "switchURL",
        value: function (e, t) {
          const i = this;
          let n = e;
          if (Util.typeOf(e) === "Object") {
            n = e.url;
          }
          n = this._preProcessUrl(n).url;
          const currentTime = this.currentTime;
          this.__startTime = currentTime;
          const s = this.paused && !this.isError;
          this.src = n;
          return new Promise((resolve, reject) => {
            const o = function (e) {
              i.off("timeupdate", r);
              i.off("canplay", r);
              reject(e);
            };
            var r = function () {
              i._seekToStartTime();
              if (s) {
                i.pause();
              }
              i.off("error", o);
              resolve(true);
            };
            i.once("error", o);
            if (n) {
              if (Sniffer.os.isAndroid) {
                i.once("timeupdate", r);
              } else {
                i.once("canplay", r);
              }
              i.play();
            } else {
              i.errorHandler("error", {
                code: 6,
                message: "empty_src",
              });
            }
          });
        },
      },
      {
        key: "videoPlay",
        value: function () {
          this.mediaPlay();
        },
      },
      {
        key: "mediaPlay",
        value: function () {
          const e = this;
          if (!this.hasStart && this.state < STATES.ATTACHED) {
            this.removeClass(STATE_CLASS.NO_START);
            this.addClass(STATE_CLASS.ENTER);
            this.start();
            this._useAutoplay = true;
            return;
          }
          if (this.state < STATES.RUNNING) {
            this.removeClass(STATE_CLASS.NO_START);
            if (!this.isCanplay) {
              this.addClass(STATE_CLASS.ENTER);
            }
          }
          const i = m(t, "play", this, 3)([]);
          if (i !== undefined && i && i.then) {
            i.then(() => {
              e.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
              e.addClass(STATE_CLASS.PLAYING);
              if (e.state < STATES.RUNNING) {
                b.logInfo(">>>>playPromise.then");
                e.setState(STATES.RUNNING);
                e.emit(M.AUTOPLAY_STARTED);
              }
            }).catch((t) => {
              b.logWarn(">>>>playPromise.catch", t.name);
              if (e.media && e.media.error) {
                e.onError();
                e.removeClass(STATE_CLASS.ENTER);
                return;
              }
              if (t.name === "NotAllowedError") {
                e._errorTimer = Util.setTimeout(
                  e,
                  function () {
                    e._errorTimer = null;
                    e.emit(M.AUTOPLAY_PREVENTED);
                    e.addClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
                    e.removeClass(STATE_CLASS.ENTER);
                    e.pause();
                    e.setState(STATES.NOTALLOW);
                  },
                  0,
                );
              }
            });
          } else {
            b.logWarn("video.play not return promise");
            if (this.state < STATES.RUNNING) {
              this.setState(STATES.RUNNING);
              this.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
              this.removeClass(STATE_CLASS.NO_START);
              this.removeClass(STATE_CLASS.ENTER);
              this.addClass(STATE_CLASS.PLAYING);
              this.emit(M.AUTOPLAY_STARTED);
            }
          }
          return i;
        },
      },
      {
        key: "mediaPause",
        value: function () {
          m(t, "pause", this, 3)([]);
        },
      },
      {
        key: "videoPause",
        value: function () {
          m(t, "pause", this, 3)([]);
        },
      },
      {
        key: "play",
        value: function () {
          const e = this;
          this.removeClass(STATE_CLASS.PAUSED);
          return $(this, "play", function () {
            return e.mediaPlay();
          });
        },
      },
      {
        key: "pause",
        value: function () {
          const e = this;
          $(this, "pause", function () {
            m(t, "pause", e, 3)([]);
          });
        },
      },
      {
        key: "seek",
        value: function (e, t) {
          const i = this;
          if (!(!this.media || Number.isNaN(Number(e))) && this.hasStart) {
            const n = this.config;
            const o = n.isSeekedPlay;
            const s = n.seekedStatus;
            const r = t || (o ? "play" : s);
            e = e < 0 ? 0 : e > this.duration ? parseInt(this.duration, 10) : e;
            if (!this._isPauseBeforeSeek) {
              this._isPauseBeforeSeek = this.paused ? 2 : 1;
            }
            if (this._onceSeekCanplay) {
              this.off(M.SEEKED, this._onceSeekCanplay);
            }
            this._onceSeekCanplay = function () {
              i.removeClass(STATE_CLASS.ENTER);
              i.isSeeking = false;
              switch (r) {
                case "play":
                  i.play();
                  break;
                case "pause":
                  i.pause();
                  break;
                default:
                  if (i._isPauseBeforeSeek > 1 || i.paused) {
                    i.pause();
                  } else {
                    i.play();
                  }
              }
              i._isPauseBeforeSeek = 0;
              i._onceSeekCanplay = null;
            };
            this.once(M.SEEKED, this._onceSeekCanplay);
            if (this.state < STATES.RUNNING) {
              this.removeClass(STATE_CLASS.NO_START);
              this.currentTime = e;
              this.play();
            } else {
              this.currentTime = e;
            }
          }
        },
      },
      {
        key: "getInitDefinition",
        value: function () {
          const e = this;
          const config = this.config;
          const t_definition = config.definition;
          if (
            !config.url &&
            t_definition &&
            t_definition.list &&
            t_definition.list.length > 0 &&
            t_definition.defaultDefinition
          ) {
            t_definition.list.map((t) => {
              if (t.definition === t_definition.defaultDefinition) {
                e.config.url = t.url;
                e.curDefinition = t;
              }
            });
          }
        },
      },
      {
        key: "changeDefinition",
        value: function (e, from) {
          const i = this;
          const definition = this.config.definition;
          if (Array.isArray(definition == null ? undefined : definition.list)) {
            definition.list.forEach((t) => {
              if ((e == null ? undefined : e.definition) === t.definition) {
                i.curDefinition = t;
              }
            });
          }
          if (e != null && e.bitrate && typeof e.bitrate !== "number") {
            e.bitrate = parseInt(e.bitrate, 10) || 0;
          }
          this.emit(M.DEFINITION_CHANGE, {
            from,
            to: e,
          });
          if (!this.hasStart) {
            this.config.url = e.url;
            return;
          }
          const o = this.switchURL(e.url, {
            seamless:
              definition.seamless !== false &&
              typeof MediaSource !== "undefined" &&
              typeof MediaSource.isTypeSupported === "function",
            ...e,
          });
          if (o && o.then) {
            o.then(() => {
              i.emit(M.AFTER_DEFINITION_CHANGE, {
                from,
                to: e,
              });
            });
          } else {
            this.emit(M.AFTER_DEFINITION_CHANGE, {
              from,
              to: e,
            });
          }
        },
      },
      {
        key: "reload",
        value: function () {
          this.load();
          this.reloadFunc = function () {
            this.play();
          };
          this.once(M.LOADED_DATA, this.reloadFunc);
        },
      },
      {
        key: "resetState",
        value: function () {
          const e = this;
          const STATE_CLASS_NOT_ALLOW_AUTOPLAY = STATE_CLASS.NOT_ALLOW_AUTOPLAY;
          const STATE_CLASS_PLAYING = STATE_CLASS.PLAYING;
          const STATE_CLASS_NO_START = STATE_CLASS.NO_START;
          const STATE_CLASS_PAUSED = STATE_CLASS.PAUSED;
          const STATE_CLASS_REPLAY = STATE_CLASS.REPLAY;
          const STATE_CLASS_ENTER = STATE_CLASS.ENTER;
          const STATE_CLASS_ENDED = STATE_CLASS.ENDED;
          const STATE_CLASS_ERROR = STATE_CLASS.ERROR;
          const STATE_CLASS_LOADING = STATE_CLASS.LOADING;
          this.hasStart = false;
          this.isError = false;
          this._useAutoplay = false;
          this.mediaPause();
          this._accPlayed.acc = 0;
          this._accPlayed.t = 0;
          this._accPlayed.loopAcc = 0;
          [
            STATE_CLASS_NOT_ALLOW_AUTOPLAY,
            STATE_CLASS_PLAYING,
            STATE_CLASS_NO_START,
            STATE_CLASS_PAUSED,
            STATE_CLASS_REPLAY,
            STATE_CLASS_ENTER,
            STATE_CLASS_ENDED,
            STATE_CLASS_ERROR,
            STATE_CLASS_LOADING,
          ].forEach((t) => {
            e.removeClass(t);
          });
          this.addClass(STATE_CLASS.NO_START);
          this.emit(M.RESET);
        },
      },
      {
        key: "reset",
        value: function () {
          const e = this;
          const t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];
          const i = arguments.length > 1 ? arguments[1] : undefined;
          this.resetState();
          if (
            this.plugins &&
            (t.map((t) => {
              e.deregister(t);
            }),
            i)
          ) {
            const n = ef();
            Object.keys(this.config).keys(function (t) {
              if (
                e.config[t] !== "undefined" &&
                (t === "plugins" || t === "presets" || t === "el" || t === "id")
              ) {
                e.config[t] = n[t];
              }
            });
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          let e;
          const i = this;
          const innerContainer = this.innerContainer;
          const root = this.root;
          const media = this.media;
          if (media) {
            this.hasStart = false;
            this._useAutoplay = false;
            if (root) {
              root.removeAttribute(V);
            }
            this.updateAcc("destroy");
            this._unbindEvents();
            this._detachSourceEvents(this.media);
            Util.clearAllTimers(this);
            this.emit(M.DESTROY);
            if ((e = eP) != null) {
              e.remove(this);
            }
            eh.destroy(this);
            J(this);
            m(t, "destroy", this, 3)([]);
            if (this.fullscreen && this._fullscreenEl === root) {
              this.exitFullscreen();
            }
            if (innerContainer) {
              for (let r = innerContainer.children, a = 0; a < r.length; a++) {
                innerContainer.removeChild(r[a]);
              }
            }
            if (
              root &&
              !innerContainer &&
              media instanceof window.Node &&
              root.contains(media)
            ) {
              root.removeChild(media);
            }
            ["topBar", "leftBar", "rightBar", "innerContainer"].map((e) => {
              if (i[e]) {
                root.removeChild(i[e]);
              }
              i[e] = null;
            });
            const l = root ? root.className.split(" ") : [];
            const c = root && Util.hasClass(root, STATE_CLASS.BUILTIN_CLASS);
            if (l.length > 0) {
              root.className = l
                .filter((e) => e.indexOf("xgplayer") < 0)
                .join(" ");
            } else if (root) {
              root.className = "";
            }
            this.removeAttribute("data-xgfill");
            [
              "isSeeking",
              "isCanplay",
              "isActive",
              "cssfullscreen",
              "fullscreen",
            ].forEach((e) => {
              i[e] = false;
            });
            if (c && this.root.parentNode) {
              this.root.parentNode.removeChild(this.root);
            }
          }
        },
      },
      {
        key: "replay",
        value: function () {
          const e = this;
          this.removeClass(STATE_CLASS.ENDED);
          this.currentTime = 0;
          this.isSeeking = false;
          $(this, "replay", function () {
            e.once(M.SEEKED, function () {
              const t = e.mediaPlay();
              if (t && t.catch) {
                t.catch((e) => {
                  console.log(e);
                });
              }
            });
            e.emit(M.REPLAY);
            e.onPlay();
          });
        },
      },
      {
        key: "retry",
        value: function () {
          const e = this;
          this.removeClass(STATE_CLASS.ERROR);
          this.addClass(STATE_CLASS.LOADING);
          $(this, "retry", function () {
            const e_currentTime = e.currentTime;
            const url = e.config.url;
            const n = Util.isMSE(e.media)
              ? {
                  url,
                }
              : e._preProcessUrl(url);
            e.src = n.url;
            if (!e.config.isLive) {
              e.currentTime = e_currentTime;
            }
            e.once(M.CANPLAY, function () {
              e.mediaPlay();
            });
          });
        },
      },
      {
        key: "changeFullStyle",
        value: function (e, t, i, n) {
          if (e) {
            if (!n) {
              n = STATE_CLASS.PARENT_FULLSCREEN;
            }
            if (!this._orgCss) {
              this._orgCss = Util.filterStyleFromText(e);
            }
            Util.addClass(e, i);
            if (t && t !== e && !this._orgPCss) {
              this._orgPCss = Util.filterStyleFromText(t);
              Util.addClass(t, n);
              t.setAttribute(V, this.playerId);
            }
          }
        },
      },
      {
        key: "recoverFullStyle",
        value: function (e, t, i, n) {
          if (!n) {
            n = STATE_CLASS.PARENT_FULLSCREEN;
          }
          if (this._orgCss) {
            Util.setStyleFromCsstext(e, this._orgCss);
            this._orgCss = "";
          }
          Util.removeClass(e, i);
          if (t && t !== e && this._orgPCss) {
            Util.setStyleFromCsstext(t, this._orgPCss);
            this._orgPCss = "";
            Util.removeClass(t, n);
            t.removeAttribute(V);
          }
        },
      },
      {
        key: "getFullscreen",
        value: function () {
          let e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.config.fullscreenTarget;
          const root = this.root;
          const media = this.media;
          if (e === "video" || e === "media") {
            e = this[e];
          }
          if (!e) {
            e = root;
          }
          this._fullScreenOffset = {
            top: Util.scrollTop(),
            left: Util.scrollLeft(),
          };
          this._fullscreenEl = e;
          this._fullActionFrom = "get";
          if (Util.getFullScreenEl() === this._fullscreenEl) {
            this.onFullscreenChange();
            return Promise.resolve();
          }
          try {
            for (let n = 0; n < j.length; n++) {
              const o = j[n];
              if (e[o]) {
                const s =
                  o === "webkitRequestFullscreen"
                    ? e.webkitRequestFullscreen(
                        window.Element.ALLOW_KEYBOARD_INPUT,
                      )
                    : e[o]();
                if (s && s.then) {
                  return s;
                }
                return Promise.resolve();
              }
            }
            if (media.fullscreenEnabled || media.webkitSupportsFullscreen) {
              media.webkitEnterFullscreen();
              return Promise.resolve();
            }
            return Promise.reject(Error("call getFullscreen fail"));
          } catch (e) {
            return Promise.reject(Error("call getFullscreen fail"));
          }
        },
      },
      {
        key: "exitFullscreen",
        value: function (e) {
          if (this.isRotateFullscreen) {
            this.exitRotateFullscreen();
          }
          if (this._fullscreenEl || Util.getFullScreenEl()) {
            this.root;
            const t = this.media;
            this._fullActionFrom = "exit";
            try {
              for (let i = 0; i < G.length; i++) {
                const n = G[i];
                if (document[n]) {
                  const o = document[n]();
                  if (o && o.then) {
                    return o;
                  }
                  return Promise.resolve();
                }
              }
              if (t && t.webkitSupportsFullscreen) {
                t.webkitExitFullScreen();
                return Promise.resolve();
              }
              return Promise.reject(Error("call exitFullscreen fail"));
            } catch (e) {
              return Promise.reject(Error("call exitFullscreen fail"));
            }
          }
        },
      },
      {
        key: "getCssFullscreen",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.config.fullscreenTarget;
          if (this.isRotateFullscreen) {
            this.exitRotateFullscreen();
          } else if (this.fullscreen) {
            this.exitFullscreen();
          }
          const t = e
            ? ""
                .concat(STATE_CLASS.INNER_FULLSCREEN, " ")
                .concat(STATE_CLASS.CSS_FULLSCREEN)
            : STATE_CLASS.CSS_FULLSCREEN;
          this.changeFullStyle(this.root, e, t);
          const fullscreen = this.config.fullscreen;
          const n = fullscreen === undefined ? {} : fullscreen;
          if (
            n.useCssFullscreen === true ||
            (typeof n.useCssFullscreen === "function" && n.useCssFullscreen())
          ) {
            this.fullscreen = true;
            this.emit(M.FULLSCREEN_CHANGE, true);
          }
          this._cssfullscreenEl = e;
          this.cssfullscreen = true;
          this.emit(M.CSS_FULLSCREEN_CHANGE, true);
        },
      },
      {
        key: "exitCssFullscreen",
        value: function () {
          const e = this._cssfullscreenEl
            ? ""
                .concat(STATE_CLASS.INNER_FULLSCREEN, " ")
                .concat(STATE_CLASS.CSS_FULLSCREEN)
            : STATE_CLASS.CSS_FULLSCREEN;
          if (this.fullscreen) {
            const t = this.config.fullscreen;
            const i = t === undefined ? {} : t;
            if (
              i.useCssFullscreen === true ||
              (typeof i.useCssFullscreen === "function" && i.useCssFullscreen())
            ) {
              this.recoverFullStyle(this.root, this._cssfullscreenEl, e);
              this.fullscreen = false;
              this.emit(M.FULLSCREEN_CHANGE, false);
            } else {
              this.removeClass(e);
            }
          } else {
            this.recoverFullStyle(this.root, this._cssfullscreenEl, e);
          }
          this._cssfullscreenEl = null;
          this.cssfullscreen = false;
          this.emit(M.CSS_FULLSCREEN_CHANGE, false);
        },
      },
      {
        key: "getRotateFullscreen",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.config.fullscreenTarget;
          if (this.cssfullscreen) {
            this.exitCssFullscreen(e);
          }
          const t = e
            ? ""
                .concat(STATE_CLASS.INNER_FULLSCREEN, " ")
                .concat(STATE_CLASS.ROTATE_FULLSCREEN)
            : STATE_CLASS.ROTATE_FULLSCREEN;
          this._fullscreenEl = e || this.root;
          this.changeFullStyle(
            this.root,
            e,
            t,
            STATE_CLASS.PARENT_ROTATE_FULLSCREEN,
          );
          this.isRotateFullscreen = true;
          this.fullscreen = true;
          this.setRotateDeg(90);
          this._rootStyle = this.root.getAttribute("style");
          this.root.style.width = "".concat(window.innerHeight, "px");
          this.emit(M.FULLSCREEN_CHANGE, true);
        },
      },
      {
        key: "exitRotateFullscreen",
        value: function (e) {
          const t =
            this._fullscreenEl !== this.root
              ? ""
                  .concat(STATE_CLASS.INNER_FULLSCREEN, " ")
                  .concat(STATE_CLASS.ROTATE_FULLSCREEN)
              : STATE_CLASS.ROTATE_FULLSCREEN;
          this.recoverFullStyle(
            this.root,
            this._fullscreenEl,
            t,
            STATE_CLASS.PARENT_ROTATE_FULLSCREEN,
          );
          this.isRotateFullscreen = false;
          this.fullscreen = false;
          this.setRotateDeg(0);
          this.emit(M.FULLSCREEN_CHANGE, false);
          if (this._rootStyle) {
            this.root.style.style = this._rootStyle;
            this._rootStyle = false;
          }
        },
      },
      {
        key: "setRotateDeg",
        value: function (e) {
          if (window.orientation === 90 || window.orientation === -90) {
            this.rotateDeg = 0;
          } else {
            this.rotateDeg = e;
          }
        },
      },
      {
        key: "focus",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  autoHide: !this.config.closeDelayBlur,
                  delay: this.config.inactive,
                };
          if (this.isActive) {
            this.onFocus(e);
          } else {
            this.emit(M.PLAYER_FOCUS, {
              paused: this.paused,
              ended: this.ended,
              ...e,
            });
          }
        },
      },
      {
        key: "blur",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  ignorePaused: false,
                };
          if (this.isActive) {
            this._clearUserTimer();
            this.emit(M.PLAYER_BLUR, {
              paused: this.paused,
              ended: this.ended,
              ...e,
            });
          } else {
            this.onBlur(e);
          }
        },
      },
      {
        key: "onFocus",
        value: function () {
          const e = this;
          const t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  autoHide: true,
                  delay: 3000,
                };
          const innerStates = this.innerStates;
          this.isActive = true;
          this.removeClass(STATE_CLASS.INACTIVE);
          this._clearUserTimer();
          if (t.isLock !== undefined) {
            innerStates.isActiveLocked = t.isLock;
          }
          if (
            t.autoHide === false ||
            t.isLock === true ||
            innerStates.isActiveLocked
          ) {
            return void this._clearUserTimer();
          }
          const n = t && t.delay ? t.delay : this.config.inactive;
          this.userTimer = Util.setTimeout(
            this,
            function () {
              e.userTimer = null;
              e.blur();
            },
            n,
          );
        },
      },
      {
        key: "onBlur",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          const e_ignorePaused = e.ignorePaused;
          if (!this.innerStates.isActiveLocked) {
            const i = this.config.closePauseVideoFocus;
            this.isActive = false;
            if (
              (e_ignorePaused !== undefined && e_ignorePaused) ||
              i ||
              (!this.paused && !this.ended)
            ) {
              this.addClass(STATE_CLASS.INACTIVE);
            }
          }
        },
      },
      {
        key: "onEmptied",
        value: function () {
          this.updateAcc("emptied");
        },
      },
      {
        key: "onCanplay",
        value: function () {
          this.removeClass(STATE_CLASS.ENTER);
          this.removeClass(STATE_CLASS.ERROR);
          this.removeClass(STATE_CLASS.LOADING);
          this.isCanplay = true;
          if (this.waitTimer) {
            Util.clearTimeout(this, this.waitTimer);
          }
        },
      },
      {
        key: "onLoadeddata",
        value: function () {
          const e = this;
          this.isError = false;
          this.isSeeking = false;
          if (this.__startTime > 0) {
            if (this.duration > 0) {
              this._seekToStartTime();
            } else {
              this.once(M.DURATION_CHANGE, function () {
                e._seekToStartTime();
              });
            }
          }
        },
      },
      {
        key: "onLoadstart",
        value: function () {
          this.removeClass(STATE_CLASS.ERROR);
          this.isCanplay = false;
        },
      },
      {
        key: "onPlay",
        value: function () {
          if (this.state === STATES.ENDED) {
            this.setState(STATES.RUNNING);
          }
          this.removeClass(STATE_CLASS.PAUSED);
          if (this.ended) {
            this.removeClass(STATE_CLASS.ENDED);
          }
          if (!this.config.closePlayVideoFocus) {
            this.focus();
          }
        },
      },
      {
        key: "onPause",
        value: function () {
          this.addClass(STATE_CLASS.PAUSED);
          this.updateAcc("pause");
          if (!this.config.closePauseVideoFocus) {
            this._clearUserTimer();
            this.focus();
          }
        },
      },
      {
        key: "onEnded",
        value: function () {
          this.updateAcc("ended");
          this.addClass(STATE_CLASS.ENDED);
          this.setState(STATES.ENDED);
        },
      },
      {
        key: "onError",
        value: function () {
          this.isError = true;
          this.updateAcc("error");
          this.removeClass(STATE_CLASS.NOT_ALLOW_AUTOPLAY);
          this.removeClass(STATE_CLASS.NO_START);
          this.removeClass(STATE_CLASS.ENTER);
          this.removeClass(STATE_CLASS.LOADING);
          this.addClass(STATE_CLASS.ERROR);
        },
      },
      {
        key: "onSeeking",
        value: function () {
          if (!this.isSeeking) {
            this.updateAcc("seeking");
          }
          this.isSeeking = true;
          this.addClass(STATE_CLASS.SEEKING);
        },
      },
      {
        key: "onSeeked",
        value: function () {
          this.isSeeking = false;
          if (this.waitTimer) {
            Util.clearTimeout(this, this.waitTimer);
          }
          this.removeClass(STATE_CLASS.LOADING);
          this.removeClass(STATE_CLASS.SEEKING);
        },
      },
      {
        key: "onWaiting",
        value: function () {
          const e = this;
          if (this.waitTimer) {
            Util.clearTimeout(this, this.waitTimer);
          }
          this.updateAcc("waiting");
          this.waitTimer = Util.setTimeout(
            this,
            function () {
              e.addClass(STATE_CLASS.LOADING);
              e.emit(M.LOADING);
              Util.clearTimeout(e, e.waitTimer);
              e.waitTimer = null;
            },
            this.config.minWaitDelay,
          );
        },
      },
      {
        key: "onPlaying",
        value: function () {
          const e = this;
          this.isError = false;
          [
            STATE_CLASS.NO_START,
            STATE_CLASS.PAUSED,
            STATE_CLASS.ENDED,
            STATE_CLASS.ERROR,
            STATE_CLASS.REPLAY,
            STATE_CLASS.LOADING,
          ].forEach((t) => {
            e.removeClass(t);
          });
          if (!(this._accPlayed.t || this.paused || this.ended)) {
            this._accPlayed.t = new Date().getTime();
          }
        },
      },
      {
        key: "onTimeupdate",
        value: function () {
          if (!this._videoHeight && this.media.videoHeight) {
            this.resize();
          }
          if (
            (this.waitTimer || this.hasClass(STATE_CLASS.LOADING)) &&
            this.media.readyState > 2
          ) {
            this.removeClass(STATE_CLASS.LOADING);
            Util.clearTimeout(this, this.waitTimer);
            this.waitTimer = null;
          }
          if (!this.paused && this.state === STATES.NOTALLOW && this.duration) {
            this.setState(STATES.RUNNING);
            this.emit(M.AUTOPLAY_STARTED);
          }
          if (!(this._accPlayed.t || this.paused || this.ended)) {
            this._accPlayed.t = new Date().getTime();
          }
        },
      },
      {
        key: "onVolumechange",
        value: function () {
          if (Util.typeOf(this.config.volume) === "Number") {
            this.config.volume = this.volume;
          }
        },
      },
      {
        key: "onRatechange",
        value: function () {
          this.config.defaultPlaybackRate = this.playbackRate;
        },
      },
      {
        key: "emitUserAction",
        value: function (event, action, i) {
          if (this.media && action && event) {
            const n =
              Util.typeOf(event) === "String" ? event : event.type || "";
            if (i.props && Util.typeOf(i.props) !== "Array") {
              i.props = [i.props];
            }
            this.emit(M.USER_ACTION, {
              eventType: n,
              action,
              currentTime: this.currentTime,
              duration: this.duration,
              ended: this.ended,
              event,
              ...i,
            });
          }
        },
      },
      {
        key: "updateAcc",
        value: function (e) {
          if (this._accPlayed.t) {
            const t = new Date().getTime() - this._accPlayed.t;
            this._accPlayed.acc += t;
            this._accPlayed.t = 0;
            if (e === "ended" || this.ended) {
              this._accPlayed.loopAcc = this._accPlayed.acc;
            }
          }
        },
      },
      {
        key: "checkBuffer",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  startDiff: 0,
                  endDiff: 0,
                };
          const i = t || {};
          const i_startDiff = i.startDiff;
          const o = i_startDiff === undefined ? 0 : i_startDiff;
          const i_endDiff = i.endDiff;
          const r = i_endDiff === undefined ? 0 : i_endDiff;
          const buffered = this.media.buffered;
          if (!buffered || buffered.length === 0 || !this.duration) {
            return true;
          }
          const l = e || this.media.currentTime || 0.2;
          for (let c = buffered.length, u = 0; u < c; u++) {
            if (buffered.start(u) + o <= l && buffered.end(u) - r > l) {
              return true;
            }
          }
          return false;
        },
      },
      {
        key: "resizePosition",
        value: function () {
          const videoPos = this.videoPos;
          const t = videoPos.vy;
          const i = videoPos.vx;
          const n = videoPos.h;
          const o = videoPos.w;
          let rotate = this.videoPos.rotate;
          if (!(rotate < 0) || !(n < 0) || !(o < 0)) {
            let r = this.videoPos._pi;
            if (!r && this.media.videoHeight) {
              r = (this.media.videoWidth / this.media.videoHeight) * 100;
            }
            if (r) {
              this.videoPos.pi = r;
              const a = {
                rotate: (rotate = rotate < 0 ? 0 : rotate),
              };
              let l = 0;
              let c = 0;
              let u = 1;
              const h = Math.abs(rotate / 90);
              const d = this.root;
              const f = this.innerContainer;
              const g = d.offsetWidth;
              const p = f ? f.offsetHeight : d.offsetHeight;
              let v = p;
              let m = g;
              if (h % 2 == 0) {
                a.scale = u = n > 0 ? 100 / n : o > 0 ? 100 / o : 1;
                l = t > 0 ? (100 - n) / 2 - t : 0;
                a.y = h === 2 ? 0 - l : l;
                c = i > 0 ? (100 - o) / 2 - i : 0;
                a.x = h === 2 ? 0 - c : c;
                this.media.style.width = "".concat(m, "px");
                this.media.style.height = "".concat(v, "px");
              } else if (h % 2 == 1) {
                m = p;
                v = g;
                const y = p - g;
                c = (-y / 2 / m) * 100;
                a.x = h === 3 ? c + t / 2 : c - t / 2;
                l = (y / 2 / v) * 100;
                a.y = h === 3 ? l + i / 2 : l - i / 2;
                a.scale = u;
                this.media.style.width = "".concat(m, "px");
                this.media.style.height = "".concat(v, "px");
              }
              const k = Util.getTransformStyle(
                a,
                this.media.style.transform || this.media.style.webkitTransform,
              );
              this.media.style.transform = k;
              this.media.style.webkitTransform = k;
            }
          }
        },
      },
      {
        key: "position",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  h: 0,
                  y: 0,
                  x: 0,
                  w: 0,
                };
          if (this.media && e && e.h) {
            const t = this.videoPos;
            t.h = 100 * e.h || 0;
            t.w = 100 * e.w || 0;
            t.vx = 100 * e.x || 0;
            t.vy = 100 * e.y || 0;
            this.resizePosition();
          }
        },
      },
      {
        key: "setConfig",
        value: function (e) {
          const t = this;
          if (e) {
            Object.keys(e).map((i) => {
              if (i !== "plugins") {
                t.config[i] = e[i];
                const n = t.plugins[i.toLowerCase()];
                if (n && Util.typeOf(n.setConfig) === "Function") {
                  n.setConfig(e[i]);
                }
              }
            });
          }
        },
      },
      {
        key: "playNext",
        value: function (e) {
          const t = this;
          this.resetState();
          this.setConfig(e);
          this._currentTime = 0;
          this._duration = 0;
          $(this, "playnext", function () {
            t.start();
            t.emit(M.PLAYNEXT, e);
          });
        },
      },
      {
        key: "resize",
        value: function () {
          const e = this;
          if (this.media && this.root) {
            const t = this.root.getBoundingClientRect();
            this.sizeInfo.width = t.width;
            this.sizeInfo.height = t.height;
            this.sizeInfo.left = t.left;
            this.sizeInfo.top = t.top;
            const i = this.media;
            const n = i.videoWidth;
            const o = i.videoHeight;
            const s = this.config;
            const r = s.fitVideoSize;
            const a = s.videoFillMode;
            if (a === "fill" || a === "cover" || a === "contain") {
              this.setAttribute("data-xgfill", a);
            }
            if (o && n) {
              this._videoHeight = o;
              this._videoWidth = n;
              const l =
                this.controls && this.innerContainer
                  ? this.controls.root.getBoundingClientRect().height
                  : 0;
              const c = t.width;
              const u = t.height - l;
              const videoScale = parseInt((n / o) * 1000, 10);
              const d = parseInt((c / u) * 1000, 10);
              let f = c;
              let vHeight = u;
              const p = {};
              if ((r === "auto" && d > videoScale) || r === "fixWidth") {
                vHeight = (c / videoScale) * 1000;
                if (this.config.fluid) {
                  p.paddingTop = `${(100 * vHeight) / f}%`;
                } else {
                  p.height = `${vHeight + l}px`;
                }
              } else if (
                (r === "auto" && d < videoScale) ||
                r === "fixHeight"
              ) {
                f = (videoScale * u) / 1000;
                p.width = "".concat(f, "px");
              }
              if (!(this.fullscreen || this.cssfullscreen)) {
                Object.keys(p).forEach((t) => {
                  e.root.style[t] = p[t];
                });
              }
              if (
                (a === "fillHeight" && d < videoScale) ||
                (a === "fillWidth" && d > videoScale)
              ) {
                this.setAttribute("data-xgfill", "cover");
              }
              const v = {
                videoScale,
                vWidth: f,
                vHeight,
                cWidth: f,
                cHeight: vHeight + l,
              };
              this.resizePosition();
              this.emit(M.VIDEO_RESIZE, v);
            }
          }
        },
      },
      {
        key: "updateObjectPosition",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          if (this.media.updateObjectPosition) {
            this.media.updateObjectPosition(e, t);
          } else {
            this.media.style.objectPosition = `${100 * e}% ${100 * t}%`;
          }
        },
      },
      {
        key: "setState",
        value: function (e) {
          b.logInfo(
            "setState",
            "state from:".concat(eT[this.state], " to:").concat(eT[e]),
          );
          this._state = e;
        },
      },
      {
        key: "_preProcessUrl",
        value: function (e, t) {
          const config = this.config;
          const i_preProcessUrl = config.preProcessUrl;
          const o = {
            ...config.preProcessUrlOptions,
            ...t,
          };
          if (Util.isBlob(e) || typeof i_preProcessUrl !== "function") {
            return {
              url: e,
            };
          }
          return i_preProcessUrl(e, o);
        },
      },
      {
        key: "_seekToStartTime",
        value: function () {
          if (this.__startTime > 0 && this.duration > 0) {
            this.currentTime =
              this.__startTime > this.duration
                ? this.duration
                : this.__startTime;
            this.__startTime = -1;
          }
        },
      },
      {
        key: "state",
        get: function () {
          return this._state;
        },
      },
      {
        key: "isFullscreen",
        get: function () {
          return this.fullscreen;
        },
      },
      {
        key: "isCssfullScreen",
        get: function () {
          return this.cssfullscreen;
        },
      },
      {
        key: "hasStart",
        get: function () {
          return this._hasStart;
        },
        set: function (e) {
          if (typeof e === "boolean") {
            this._hasStart = e;
            if (e === false) {
              this.setState(STATES.READY);
            }
            this.emit("hasstart");
          }
        },
      },
      {
        key: "isPlaying",
        get: function () {
          return this._state === STATES.RUNNING || this._state === STATES.ENDED;
        },
        set: function (e) {
          if (e) {
            this.setState(STATES.RUNNING);
          } else if (this._state >= STATES.RUNNING) {
            this.setState(STATES.ATTACHED);
          }
        },
      },
      {
        key: "definitionList",
        get: function () {
          return (
            (this.config &&
              this.config.definition &&
              this.config.definition.list) ||
            []
          );
        },
        set: function (e) {
          const t = this;
          const definition = this.config.definition;
          let n = null;
          let o = null;
          definition.list = e;
          this.emit("resourceReady", e);
          e.forEach((e) => {
            let s;
            if (
              ((s = t.curDefinition) == null ? undefined : s.definition) ===
              e.definition
            ) {
              n = e;
            }
            if (definition.defaultDefinition === e.definition) {
              o = e;
            }
          });
          if (!o && e.length > 0) {
            o = e[0];
          }
          if (n) {
            this.changeDefinition(n);
          } else if (o) {
            this.changeDefinition(o);
          }
        },
      },
      {
        key: "videoFrameInfo",
        get: function () {
          const e = {
            total: 0,
            dropped: 0,
            corrupted: 0,
            droppedRate: 0,
            droppedDuration: 0,
          };
          if (!this.media || !this.media.getVideoPlaybackQuality) {
            return e;
          }
          const t = this.media.getVideoPlaybackQuality();
          e.dropped = t.droppedVideoFrames || 0;
          e.total = t.totalVideoFrames || 0;
          e.corrupted = t.corruptedVideoFrames || 0;
          if (e.total > 0) {
            e.droppedRate = (e.dropped / e.total) * 100;
            e.droppedDuration = parseInt(
              (this.cumulateTime / e.total) * e.dropped,
              0,
            );
          }
          return e;
        },
      },
      {
        key: "lang",
        get: function () {
          return this.config.lang;
        },
        set: function (e) {
          if (I18N.langKeys.filter((t) => t === e).length === 0 && e !== "zh") {
            console.error(
              "Sorry, set lang fail, because the language ["
                .concat(
                  e,
                  "] is not supported now, list of all supported languages is [",
                )
                .concat(I18N.langKeys.join(), "] "),
            );
          } else {
            this.config.lang = e;
            eh.setLang(e, this);
          }
        },
      },
      {
        key: "i18n",
        get: function () {
          let lang = this.config.lang;
          if (lang === "zh") {
            lang = "zh-cn";
          }
          return this.__i18n.lang[lang] || this.__i18n.lang.en;
        },
      },
      {
        key: "i18nKeys",
        get: function () {
          return this.__i18n.textKeys || {};
        },
      },
      {
        key: "version",
        get: function () {
          return playerVersion;
        },
      },
      {
        key: "playerId",
        get: function () {
          return this._pluginInfoId;
        },
      },
      {
        key: "url",
        get: function () {
          return this.__url || this.config.url;
        },
        set: function (e) {
          this.__url = e;
        },
      },
      {
        key: "poster",
        get: function () {
          if (this.plugins.poster) {
            return this.plugins.poster.config.poster;
          }
          return this.config.poster;
        },
        set: function (e) {
          if (this.plugins.poster) {
            this.plugins.poster.update(e);
          }
        },
      },
      {
        key: "readyState",
        get: function () {
          return m(t, "readyState", this, 1);
        },
      },
      {
        key: "error",
        get: function () {
          const e = m(t, "error", this, 1);
          return this.i18n[e] || e;
        },
      },
      {
        key: "networkState",
        get: function () {
          return m(t, "networkState", this, 1);
        },
      },
      {
        key: "fullscreenChanging",
        get: function () {
          return this._fullScreenOffset !== null;
        },
      },
      {
        key: "cumulateTime",
        get: function () {
          const _accPlayed = this._accPlayed;
          const e_acc = _accPlayed.acc;
          const i = _accPlayed.t;
          if (i) {
            return new Date().getTime() - i + e_acc;
          }
          return e_acc;
        },
      },
      {
        key: "zoom",
        get: function () {
          return this.config.zoom;
        },
        set: function (e) {
          this.config.zoom = e;
        },
      },
      {
        key: "videoRotateDeg",
        get: function () {
          return this.videoPos.rotate;
        },
        set: function (e) {
          if (
            (e = Util.convertDeg(e)) % 90 == 0 &&
            e !== this.videoPos.rotate
          ) {
            this.videoPos.rotate = e;
            this.resizePosition();
          }
        },
      },
      {
        key: "avgSpeed",
        get: function () {
          return eI;
        },
        set: function (e) {
          eI = e;
        },
      },
      {
        key: "realTimeSpeed",
        get: function () {
          return eS;
        },
        set: function (e) {
          eS = e;
        },
      },
      {
        key: "offsetCurrentTime",
        get: function () {
          if (this._offsetInfo.currentTime > -1) {
            return this._offsetInfo.currentTime;
          }
          return this.currentTime;
        },
        set: function (e) {
          this._offsetInfo.currentTime = e;
        },
      },
      {
        key: "offsetDuration",
        get: function () {
          if (this._offsetInfo.duration > -1) {
            return this._offsetInfo.duration;
          }
          return this.duration;
        },
        set: function (e) {
          this._offsetInfo.duration = e || 0;
        },
      },
      {
        key: "hook",
        value: function (e, t) {
          return Y.call.apply(
            Y,
            [this].concat(Array.prototype.slice.call(arguments)),
          );
        },
      },
      {
        key: "useHooks",
        value: function (e, t) {
          return K.call.apply(
            K,
            [this].concat(Array.prototype.slice.call(arguments)),
          );
        },
      },
      {
        key: "removeHooks",
        value: function (e, t) {
          return z.call.apply(
            z,
            [this].concat(Array.prototype.slice.call(arguments)),
          );
        },
      },
      {
        key: "usePluginHooks",
        value: function (e, t, i) {
          for (
            let n = arguments.length, o = Array(n > 3 ? n - 3 : 0), s = 3;
            s < n;
            s++
          ) {
            o[s - 3] = arguments[s];
          }
          return X.call.apply(
            X,
            [this].concat(Array.prototype.slice.call(arguments)),
          );
        },
      },
      {
        key: "removePluginHooks",
        value: function (e, t, i) {
          for (
            let n = arguments.length, o = Array(n > 3 ? n - 3 : 0), s = 3;
            s < n;
            s++
          ) {
            o[s - 3] = arguments[s];
          }
          return q.call.apply(
            q,
            [this].concat(Array.prototype.slice.call(arguments)),
          );
        },
      },
      {
        key: "setUserActive",
        value: function (e, t) {
          let i;
          if (typeof t === "boolean" && t !== this.muted) {
            this.addInnerOP("volumechange");
            if (Util.typeOf(t) === Boolean) {
              this.muted = t;
            }
          }
          if ((i = eP) != null) {
            i.setActive(this.playerId, e);
          }
        },
      },
    ],
    [
      {
        key: "version",
        get: function () {
          return playerVersion;
        },
      },
      {
        key: "debugger",
        get: function () {
          return b.config.debug;
        },
        set: function (e) {
          b.config.debug = e;
        },
      },
      {
        key: "instManager",
        get: function () {
          return eP;
        },
        set: function (e) {
          eP = e;
        },
      },
      {
        key: "getCurrentUserActivePlayerId",
        value: function () {
          let e;
          if ((e = eP) == null) {
            return undefined;
          }
          return e.getActiveId();
        },
      },
      {
        key: "setCurrentUserActive",
        value: function (e, t) {
          let i;
          if ((i = eP) != null) {
            i.setActive(e, t);
          }
        },
      },
      {
        key: "isHevcSupported",
        value: function () {
          return Sniffer.isHevcSupported();
        },
      },
      {
        key: "probeConfigSupported",
        value: function (e) {
          return Sniffer.probeConfigSupported(e);
        },
      },
      {
        key: "install",
        value: function (e, i) {
          if (!t.plugins) {
            t.plugins = {};
          }
          if (!t.plugins[e]) {
            t.plugins[e] = i;
          }
        },
      },
      {
        key: "use",
        value: function (e, i) {
          if (!t.plugins) {
            t.plugins = {};
          }
          t.plugins[e] = i;
        },
      },
    ],
  );
})(H);
function eL() {
  return new Date().getTime();
}
SimplePlayer.defaultPreset = null;
SimplePlayer.XgVideoProxy = null;
SimplePlayer.instManager = InstManager.getInstance();
const eR = "waitingStart";
const eD = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._onTimeupdate = function () {
      e._state.isTimeUpdate = true;
      if (e._state.autoplayStart) {
        b.logInfo("[xgLogger]".concat(e.player.playerId, " _onTimeupdate"));
        e._sendFF("onTimeupdate");
      }
    };
    e._onAutoplayStart = function () {
      b.logInfo("[xgLogger]".concat(e.player.playerId, " _onAutoplayStart"));
      e._state.autoplayStart = true;
      if (e.vt) {
        e._sendFF("onAutoplayStart");
      }
    };
    e._onReset = function () {
      e._state = {
        autoplayStart: false,
        isFFLoading: false,
        isTimeUpdate: false,
        isFFSend: false,
        isLs: false,
      };
      e.vt = 0;
      e.pt = 0;
      e.fvt = 0;
      e.newPointTime = eL();
      e.loadedCostTime = 0;
      e.startCostTime = 0;
      e._isSeeking = false;
      e.seekingStart = 0;
      e.waitingStart = 0;
      e.fixedWaitingStart = 0;
      e._isWaiting = false;
      if (e._waitTimer) {
        Util.clearTimeout(e, e._waitTimer);
      }
      if (e._waittTimer) {
        Util.clearTimeout(e, e._waittTimer);
      }
      e._waitTimer = null;
      e._waittTimer = null;
      e._waitType = 0;
    };
    e._onSeeking = function () {
      if (!e.seekingStart) {
        e.suspendWaitingStatus("seek");
        e.seekingStart = eL();
        e.emitLog("seekStart", {
          start: eL(),
        });
      }
    };
    e._onSeeked = function () {
      e.suspendSeekingStatus("seeked");
    };
    e._onWaitingLoadStart = function () {
      if (!(e._isWaiting || e.vt)) {
        e._isWaiting = true;
        e.waitingStart = eL();
        e.fixedWaitingStart = eL();
        e._waitType = 1;
        e.emitLog(eR, {
          fixedStart: e.fixedWaitingStart,
          start: e.waitingStart,
          type: 1,
          endType: "loadstart",
        });
      }
    };
    e._onWaiting = function () {
      if (!e._isWaiting && e.vt) {
        e._isWaiting = true;
        if (e.vt) {
          if (e.seekingStart) {
            e._waitType = 2;
          } else {
            e._waitType = 0;
          }
        } else {
          e._waitType = 1;
        }
        e.fixedWaitingStart = eL();
        e._waitTimer = Util.setTimeout(
          e,
          function () {
            if (e._isWaiting) {
              e.waitingStart = eL();
              Util.clearTimeout(e, e._waitTimer);
              e._waitTimer = null;
              e._startWaitTimeout();
              e.emitLog(eR, {
                fixedStart: e.fixedWaitingStart,
                start: e.waitingStart,
                type: e._waitType,
                endType: e._waitType === 2 ? "seek" : "playing",
              });
            }
          },
          200,
        );
      }
    };
    e._onError = function () {
      e.suspendSeekingStatus("error");
      e.suspendWaitingStatus("error");
    };
    e._onPlaying = function () {
      if (e._isWaiting) {
        e.suspendWaitingStatus("playing");
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          this._onReset();
          this._waitType = "firstFrame";
          this._initOnceEvents();
          this.newPointTime = eL();
          this.loadedCostTime = 0;
          this.startCostTime = 0;
          this.on(M.LOAD_START, function () {
            const e__state = e._state;
            const t_autoplayStart = e__state.autoplayStart;
            const t_isFFSend = e__state.isFFSend;
            e.startCostTime = eL() - e.newPointTime;
            b.logInfo(
              "[xgLogger]".concat(e.player.playerId, " LOAD_START"),
              "autoplayStart:"
                .concat(t_autoplayStart, " isFFSend:")
                .concat(t_isFFSend, " startCostTime:")
                .concat(e.startCostTime, " newPointTime")
                .concat(e.newPointTime),
            );
            if (!t_isFFSend) {
              if (!e__state.isLs) {
                e.emitLog("loadstart", {});
              }
              e__state.isLs = true;
              e__state.isTimeUpdate = false;
              e__state.isFFLoading = true;
              e.pt = eL();
              e.vt = 0;
              e.fvt = 0;
              e._initOnceEvents();
              e._onWaitingLoadStart();
            }
          });
          this.on(M.LOADED_DATA, function () {
            e.vt = eL();
            e.fvt = e.vt - e.pt;
            e.loadedCostTime = e.vt - e.newPointTime;
            const e__state = e._state;
            const t_isTimeUpdate = e__state.isTimeUpdate;
            const t_isFFSend = e__state.isFFSend;
            const t_autoplayStart = e__state.autoplayStart;
            b.logInfo(
              "[xgLogger]".concat(e.player.playerId, " LOADED_DATA"),
              "fvt:"
                .concat(e.fvt, " isTimeUpdate:")
                .concat(e._state.isTimeUpdate, " loadedCostTime:")
                .concat(e.loadedCostTime),
            );
            if (t_isTimeUpdate || t_autoplayStart) {
              e._sendFF("loadedData");
            }
            if (!t_isFFSend) {
              e.emitLog("loadeddata", {});
            }
            e.suspendWaitingStatus("loadeddata");
          });
          this.on(M.SEEKING, this._onSeeking);
          this.on(M.SEEKED, this._onSeeked);
          this.on(M.DESTROY, function () {
            e.endState("destroy");
          });
          this.on(M.URL_CHANGE, function () {
            e.endState("urlChange");
            b.logInfo("[xgLogger]".concat(e.player.playerId, " URL_CHANGE"));
            if (e._state.isFFSend) {
              e._onReset();
            }
          });
          this.on([M.PLAYING, M.CANPLAY], this._onPlaying);
          this.on(M.WAITING, this._onWaiting);
          this.on(M.ERROR, this._onError);
          this.on(M.RESET, function () {
            b.logInfo("[xgLogger]".concat(e.player.playerId, " RESET"));
            e.endState("reset");
            e._initOnceEvents();
            e._onReset();
          });
        },
      },
      {
        key: "_initOnceEvents",
        value: function () {
          this.off(M.AUTOPLAY_STARTED, this._onAutoplayStart);
          this.off(M.TIME_UPDATE, this._onTimeupdate);
          this.once(M.AUTOPLAY_STARTED, this._onAutoplayStart);
          this.once(M.TIME_UPDATE, this._onTimeupdate);
        },
      },
      {
        key: "_sendFF",
        value: function (e) {
          this.s = eL();
          const _state = this._state;
          const t_isFFLoading = _state.isFFLoading;
          const t_isFFSend = _state.isFFSend;
          b.logInfo(
            "[xgLogger]".concat(this.player.playerId, " _sendFF"),
            ""
              .concat(e, " fvt:")
              .concat(this.fvt, " isFFLoading:")
              .concat(t_isFFLoading, " !isFFSend:")
              .concat(!t_isFFSend),
          );
          if (this.vt > 0 && t_isFFLoading && !t_isFFSend) {
            b.logInfo(
              "[xgLogger]".concat(this.player.playerId, " emitLog_firstFrame"),
              e,
            );
            this._state.isFFLoading = false;
            this._state.isFFSend = true;
            this.emitLog("firstFrame", {
              fvt: this.fvt,
              costTime: this.fvt,
              vt: this.vt,
              startCostTime: this.startCostTime,
              loadedCostTime: this.loadedCostTime,
            });
          }
        },
      },
      {
        key: "_startWaitTimeout",
        value: function () {
          const e = this;
          if (this._waittTimer) {
            Util.clearTimeout(this, this._waittTimer);
          }
          this._waittTimer = Util.setTimeout(
            this,
            function () {
              e.suspendWaitingStatus("timeout");
              Util.clearTimeout(e, e._waittTimer);
              e._waittTimer = null;
            },
            this.config.waitTimeout,
          );
        },
      },
      {
        key: "endState",
        value: function (e) {
          this.suspendWaitingStatus(e);
          this.suspendSeekingStatus(e);
        },
      },
      {
        key: "suspendSeekingStatus",
        value: function (endType) {
          if (this.seekingStart) {
            const t = eL();
            const costTime = t - this.seekingStart;
            this.seekingStart = 0;
            this.emitLog("seekEnd", {
              end: t,
              costTime,
              endType,
            });
          }
        },
      },
      {
        key: "suspendWaitingStatus",
        value: function (e) {
          if (this._waitTimer) {
            Util.clearTimeout(this, this._waitTimer);
            this._waitTimer = null;
          }
          if (this._waittTimer) {
            Util.clearTimeout(this, this._waittTimer);
            this._waittTimer = null;
          }
          this._isWaiting = false;
          if (this.waitingStart) {
            const t = eL();
            const i = t - this.waitingStart;
            const n = t - this.fixedWaitingStart;
            const o = this.config.waitTimeout;
            this._isWaiting = false;
            this.waitingStart = 0;
            this.fixedWaitingStart = 0;
            this.emitLog("waitingEnd", {
              fixedCostTime: n > o ? o : n,
              costTime: i > o ? o : i,
              type: e === "loadeddata" ? 1 : this._waitType,
              endType: this._waitType === 2 ? "seek" : e,
            });
          }
        },
      },
      {
        key: "emitLog",
        value: function (e, t) {
          const player = this.player;
          this.emit(M.XGLOG, {
            t: eL(),
            host: Util.getHostFromUrl(player.currentSrc),
            vtype: player.vtype,
            eventType: e,
            currentTime: this.player.currentTime,
            readyState: player.video.readyState,
            networkState: player.video.networkState,
            ...t,
          });
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "xgLogger";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            waitTimeout: 10000,
          };
        },
      },
    ],
  );
})(Plugin);
function replay() {
  return new DOMParser().parseFromString(
    '<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" width="78" height="78">\n  <path fill="#fff" transform="translate(20, 20)" d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
class eN extends Plugin {
  registerIcons() {
    return {
      replay,
    };
  }
  afterCreate() {
    const e = this;
    if (this.root) {
      Plugin.insert(this.icons.replay, this.root, 0);
      this.__handleReplay = this.hook(
        "replayClick",
        function () {
          e.player.replay();
        },
        {
          pre: function (e) {
            e.preventDefault();
            e.stopPropagation();
          },
        },
      );
      this.bind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
      this.on(M.ENDED, function () {
        if (!e.playerConfig.loop) {
          Util.addClass(e.player.root, "replay");
        }
        if (!e.config.disable) {
          e.show();
          const t = e.root.querySelector("path");
          if (t) {
            const i = window.getComputedStyle(t).getPropertyValue("transform");
            if (typeof i === "string" && i.indexOf("none") > -1) {
              return null;
            }
            t.setAttribute("transform", i);
          }
        }
      });
      this.on(M.PLAY, function () {
        e.hide();
      });
    }
  }
  handleReplay(e) {
    e.preventDefault();
    e.stopPropagation();
    this.player.replay();
    Util.removeClass(this.player.root, "replay");
  }
  show(e) {
    if (!this.config.disable) {
      this.root.style.display = "flex";
    }
  }
  enable() {
    this.config.disable = false;
  }
  disable() {
    this.config.disable = true;
    this.hide();
  }
  destroy() {
    this.unbind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
  }
  render() {
    return '<xg-replay class="xgplayer-replay">\n      <xg-replay-txt class="xgplayer-replay-txt" lang-key="'
      .concat(this.i18nKeys.REPLAY, '">')
      .concat(this.i18n.REPLAY, "</xg-replay-txt>\n    </xg-replay>");
  }
  static get pluginName() {
    return "replay";
  }
  static get defaultConfig() {
    return {
      disable: false,
    };
  }
}
class eM extends Plugin {
  get isEndedShow() {
    return this.config.isEndedShow;
  }
  set isEndedShow(e) {
    this.config.isEndedShow = e;
  }
  hide() {
    Util.addClass(this.root, "hide");
  }
  show(e) {
    Util.removeClass(this.root, "hide");
  }
  beforeCreate(e) {
    if (typeof e.player.config.poster === "string") {
      e.config.poster = e.player.config.poster;
    }
  }
  afterCreate() {
    const e = this;
    this.on(M.ENDED, function () {
      if (e.isEndedShow) {
        Util.removeClass(e.root, "hide");
      }
    });
    if (this.config.hideCanplay) {
      this.once(M.TIME_UPDATE, function () {
        e.onTimeUpdate();
      });
      this.on(M.URL_CHANGE, function () {
        Util.removeClass(e.root, "hide");
        Util.addClass(e.root, "xg-showplay");
        e.once(M.TIME_UPDATE, function () {
          e.onTimeUpdate();
        });
      });
    } else {
      this.on(M.PLAY, function () {
        Util.addClass(e.root, "hide");
      });
    }
  }
  setConfig(e) {
    const t = this;
    Object.keys(e).forEach((i) => {
      t.config[i] = e[i];
    });
    const poster = this.config.poster;
    this.update(poster);
  }
  onTimeUpdate() {
    const e = this;
    if (this.player.currentTime) {
      Util.removeClass(this.root, "xg-showplay");
    } else {
      this.once(M.TIME_UPDATE, function () {
        e.onTimeUpdate();
      });
    }
  }
  update(e) {
    if (e) {
      this.config.poster = e;
      this.root.style.backgroundImage = "url(".concat(e, ")");
    }
  }
  getBgSize(e) {
    let t = "";
    switch (e) {
      case "cover":
        t = "cover";
        break;
      case "contain":
        t = "contain";
        break;
      case "fixHeight":
        t = "auto 100%";
        break;
      default:
        t = "";
    }
    if (t) {
      return "background-size: ".concat(t, ";");
    }
    return "";
  }
  render() {
    const config = this.config;
    const e_poster = config.poster;
    const e_hideCanplay = config.hideCanplay;
    const e_fillMode = config.fillMode;
    const e_notHidden = config.notHidden;
    const s = this.getBgSize(e_fillMode);
    const r = e_poster
      ? "background-image:url(".concat(e_poster, ");").concat(s)
      : s;
    return `<xg-poster class="xgplayer-poster ${e_notHidden ? "xg-not-hidden" : e_hideCanplay ? "xg-showplay" : ""}" style="`.concat(
      r,
      '">\n    </xg-poster>',
    );
  }
  static get pluginName() {
    return "poster";
  }
  static get defaultConfig() {
    return {
      isEndedShow: true,
      hideCanplay: false,
      notHidden: false,
      poster: "",
      fillMode: "fixWidth",
    };
  }
}
function eF() {
  return new DOMParser().parseFromString(
    '<svg class="play" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
function eH() {
  return new DOMParser().parseFromString(
    '<svg class="pause" xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="3 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const eU = {};
function eB(_animateId) {
  if (_animateId) {
    window.clearTimeout(_animateId);
  } else {
    Object.keys(eU).map((e) => {
      window.clearTimeout(eU[e].id);
      delete eU[e];
    });
  }
}
class ej extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.onPlayerReset = function () {
      i.autoPlayStart = false;
      const e = i.config.mode === "auto" ? "auto-hide" : "hide";
      i.setAttr("data-state", "play");
      Util.removeClass(i.root, e);
      i.show();
    };
    i.onAutoplayStart = function () {
      if (!i.autoPlayStart) {
        const e = i.config.mode === "auto" ? "auto-hide" : "hide";
        Util.addClass(i.root, e);
        i.autoPlayStart = true;
        i.onPlayPause("play");
      }
    };
    i.autoPlayStart = false;
    return i;
  }
  afterCreate() {
    const e = this;
    const player = this.player;
    const playerConfig = this.playerConfig;
    this.initIcons();
    this.once(M.READY, function () {
      if (playerConfig) {
        if (playerConfig.lang && playerConfig.lang === "en") {
          Util.addClass(player.root, "lang-is-en");
        } else if (playerConfig.lang === "jp") {
          Util.addClass(player.root, "lang-is-jp");
        }
      }
    });
    this.on(M.AUTOPLAY_STARTED, this.onAutoplayStart);
    if (!playerConfig.autoplay) {
      this.show();
    }
    this.on(M.AUTOPLAY_PREVENTED, function () {
      const t = e.config.mode === "auto" ? "auto-hide" : "hide";
      e.setAttr("data-state", "play");
      Util.removeClass(e.root, t);
      e.show();
    });
    this.on(M.PLAY, function () {
      e.onPlayPause("play");
    });
    this.on(M.PAUSE, function () {
      e.onPlayPause("pause");
    });
    this.on(M.RESET, function () {
      e.onPlayerReset();
    });
    this.clickHandler = this.hook("startClick", this.switchPausePlay, {
      pre: function (t) {
        if (t.cancelable) {
          t.preventDefault();
        }
        t.stopPropagation();
        const paused = e.player.paused;
        e.emitUserAction(t, "switch_play_pause", {
          props: "paused",
          from: paused,
          to: !paused,
        });
      },
    });
    this.bind(["click", "touchend"], this.clickHandler);
  }
  registerIcons() {
    return {
      startPlay: {
        icon: eF,
        class: "xg-icon-play",
      },
      startPause: {
        icon: eH,
        class: "xg-icon-pause",
      },
    };
  }
  initIcons() {
    const icons = this.icons;
    this.appendChild("xg-start-inner", icons.startPlay);
    this.appendChild("xg-start-inner", icons.startPause);
  }
  hide() {
    Util.addClass(this.root, "hide");
  }
  show(e) {
    Util.removeClass(this.root, "hide");
  }
  focusHide() {
    Util.addClass(this.root, "focus-hide");
  }
  recover() {
    Util.removeClass(this.root, "focus-hide");
  }
  switchStatus(e) {
    if (e) {
      this.setAttr("data-state", this.player.paused ? "pause" : "play");
    } else {
      this.setAttr("data-state", this.player.paused ? "play" : "pause");
    }
  }
  animate(e) {
    const t = this;
    this._animateId = (function (e, t) {
      const i =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : {
              start: null,
              end: null,
            };
      if (eU[e]) {
        window.clearTimeout(eU[e].id);
      }
      eU[e] = {};
      if (i.start) {
        i.start();
      }
      eU[e].id = window.setTimeout(function () {
        if (i.end) {
          i.end();
        }
        window.clearTimeout(eU[e].id);
        delete eU[e];
      }, t);
      return eU[e].id;
    })("pauseplay", 400, {
      start: function () {
        Util.addClass(t.root, "interact");
        t.show();
        t.switchStatus(true);
      },
      end: function () {
        Util.removeClass(t.root, "interact");
        if (!e) {
          t.hide();
        }
        t._animateId = null;
      },
    });
  }
  endAnimate() {
    Util.removeClass(this.root, "interact");
    eB(this._animateId);
    this._animateId = null;
  }
  switchPausePlay(e) {
    const player = this.player;
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    if (!(player.state < STATES.READY)) {
      if (this.player.paused || player.state !== STATES.RUNNING) {
        player.play();
      } else {
        player.pause();
      }
    }
  }
  onPlayPause(e) {
    const config = this.config;
    const player = this.player;
    if (player && !(player.state < STATES.RUNNING) && this.autoPlayStart) {
      if (config.mode === "show") {
        this.switchStatus();
        this.show();
        return;
      }
      if (config.mode === "auto") {
        return void this.switchStatus();
      }
      if (
        (config.isShowPause && player.paused && !player.ended) ||
        (config.isShowEnd && player.ended)
      ) {
        this.switchStatus();
        this.show();
        this.endAnimate();
        return;
      }
      if (config.disableAnimate) {
        this.switchStatus();
        this.hide();
        return;
      }
      if (e === "play") {
        if (this.autoPlayStart) {
          this.animate();
        } else {
          this.hide();
        }
      } else {
        if (!this.autoPlayStart || player.ended) {
          return;
        }
        this.animate();
      }
    }
  }
  destroy() {
    this.unbind(["click", "touchend"], this.clickHandler);
    eB(this._animateId);
  }
  render() {
    const e = this.playerConfig.autoplay
      ? this.config.mode === "auto"
        ? "auto-hide"
        : "hide"
      : "";
    return '\n    <xg-start class="xgplayer-start '.concat(
      e,
      '">\n    <xg-start-inner></xg-start-inner>\n    </xg-start>',
    );
  }
  static get pluginName() {
    return "start";
  }
  static get defaultConfig() {
    return {
      isShowPause: false,
      isShowEnd: false,
      disableAnimate: false,
      mode: "hide",
    };
  }
}
class eG extends Plugin {
  render() {
    const innerHtml = this.config.innerHtml;
    const t = Util.createDom("xg-enter", "", {}, "xgplayer-enter");
    if (innerHtml && innerHtml instanceof window.HTMLElement) {
      t.appendChild(innerHtml);
    } else if (innerHtml && typeof innerHtml === "string") {
      t.innerHTML = innerHtml;
    } else {
      let i = "";
      for (let n = 1; n <= 12; n++) {
        i += '<div class="xgplayer-enter-bar'.concat(n, '"></div>');
      }
      t.innerHTML = '<div class="xgplayer-enter-spinner">'.concat(i, "</div>");
    }
    return t;
  }
  static get pluginName() {
    return "enter";
  }
  static get defaultConfig() {
    return {
      innerHtml: "",
      logo: "",
    };
  }
}
function eV(e, t, isHideTips) {
  try {
    return ` <div class="xg-tips ${isHideTips ? "hide" : " "}" lang-key="`
      .concat(e.i18nKeys[t], '">\n    ')
      .concat(e.i18n[t], "\n    </div>");
  } catch (e) {
    return '<div class="xg-tips hide"></div>';
  }
}
class eW extends Plugin {
  afterCreate() {
    this.getMini = this.getMini.bind(this);
    this.exitMini = this.exitMini.bind(this);
    this.bind("click", this.getMini);
  }
  getMini() {
    if (this.config.onClick) {
      this.config.onClick();
    }
  }
  exitMini() {
    if (this.config.onClick) {
      this.config.onClick();
    }
  }
  destroy() {
    this.unbind(["click", "touchend"], this.getMini);
  }
  render() {
    const e = "MINISCREEN";
    return '\n      <xg-icon class="xgplayer-miniicon">\n      <div class="xgplayer-icon btn-text"><span class="icon-text" lang-key="'
      .concat(this.i18nKeys[e], '">')
      .concat(this.i18n[e], "</span></div>\n      </xg-icon>");
  }
  static get pluginName() {
    return "miniscreenIcon";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_RIGHT,
      index: 10,
    };
  }
}
function eY(e) {
  const t = parseFloat(e);
  return e.indexOf("%") === -1 && !Number.isNaN(t) && t;
}
const eK = [
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingBottom",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginBottom",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "borderBottomWidth",
];
const eK_length = eK.length;
function eX(e) {
  if (typeof e === "string") {
    e = document.querySelector(e);
  }
  if (e && C(e) === "object" && e.nodeType) {
    let t;
    t = e;
    const i = window.getComputedStyle(t);
    if (i.display === "none") {
      const n = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
      };
      for (let o = 0; o < eK_length; o++) {
        n[eK[o]] = 0;
      }
      return n;
    }
    const s = {};
    s.width = e.offsetWidth;
    s.height = e.offsetHeight;
    const r = (s.isBorderBox = i.boxSizing === "border-box");
    for (let a = 0; a < eK_length; a++) {
      const l = eK[a];
      const c = parseFloat(i[l]);
      s[l] = Number.isNaN(c) ? 0 : c;
    }
    const u = s.paddingLeft + s.paddingRight;
    const h = s.paddingTop + s.paddingBottom;
    const d = s.marginLeft + s.marginRight;
    const f = s.marginTop + s.marginBottom;
    const g = s.borderLeftWidth + s.borderRightWidth;
    const p = s.borderTopWidth + s.borderBottomWidth;
    const v = eY(i.width);
    if (v !== false) {
      s.width = v + (r ? 0 : u + g);
    }
    const m = eY(i.height);
    if (m !== false) {
      s.height = m + (r ? 0 : h + p);
    }
    s.innerWidth = s.width - (u + g);
    s.innerHeight = s.height - (h + p);
    s.outerWidth = s.width + d;
    s.outerHeight = s.height + f;
    return s;
  }
}
function eq(changedTouches, touchIdentifier) {
  for (let i = 0; i < changedTouches.length; i++) {
    const changedTouch = changedTouches[i];
    if (changedTouch.identifier === touchIdentifier) {
      return changedTouch;
    }
  }
}
const eZ = {
  mousedown: ["mousemove", "mouseup"],
  touchstart: ["touchmove", "touchend", "touchcancel"],
  pointerdown: ["pointermove", "pointerup", "pointercancel"],
};
const eJ = ((e) => {
  function t(e) {
    let i;
    const n =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    s(this, t);
    i = o(this, t);
    i.isEnabled = true;
    i.isDragging = false;
    i.isDown = false;
    i.position = {};
    i.downPoint = {};
    i.dragPoint = {
      x: 0,
      y: 0,
    };
    i.startPos = {
      x: 0,
      y: 0,
    };
    i._root = e instanceof Element ? e : document.querySelector(e);
    i._handlerDom =
      n.handle instanceof Element ? n.handle : document.querySelector(n.handle);
    if (i._root && i._handlerDom) {
      i._bindStartEvent();
      return i;
    }
    return p(i);
  }
  h(t, e);
  return a(t, [
    {
      key: "_bindStartEvent",
      value: function () {
        const e = this;
        if ("ontouchstart" in window) {
          this._startKey = "touchstart";
        } else {
          this._startKey = "mousedown";
        }
        this["on".concat(this._startKey)] =
          this["on".concat(this._startKey)].bind(this);
        this._handlerDom.addEventListener(
          this._startKey,
          this["on".concat(this._startKey)],
        );
        eZ[this._startKey].map((t) => {
          e["on".concat(t)] = e["on".concat(t)].bind(e);
        });
      },
    },
    {
      key: "_unbindStartEvent",
      value: function () {
        this._handlerDom.removeEventListener(
          this._startKey,
          this["on".concat(this._startKey)],
        );
      },
    },
    {
      key: "_bindPostStartEvents",
      value: function (e) {
        const t = this;
        if (e) {
          const i = eZ[this._startKey];
          i.map((e) => {
            window.addEventListener(e, t["on".concat(e)]);
          });
          this._boundPointerEvents = i;
        }
      },
    },
    {
      key: "_unbindPostStartEvents",
      value: function () {
        const e = this;
        if (this._boundPointerEvents) {
          this._boundPointerEvents.map((t) => {
            window.removeEventListener(t, e["on".concat(t)]);
          });
          delete this._boundPointerEvents;
        }
      },
    },
    {
      key: "enable",
      value: function () {
        this.isEnabled = true;
      },
    },
    {
      key: "disable",
      value: function () {
        this.isEnabled = false;
        if (this.isDragging) {
          this.onUp();
        }
      },
    },
    {
      key: "onDocUp",
      value: function (e) {
        this.onUp();
      },
    },
    {
      key: "animate",
      value: function () {
        const e = this;
        if (this.isDragging) {
          this.positionDrag();
          window.requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
    },
    {
      key: "positionDrag",
      value: function () {
        const e = "translate3d("
          .concat(this.dragPoint.x, "px, ")
          .concat(this.dragPoint.y, "px, 0)");
        this._root.style.transform = e;
        this._root.style.webKitTransform = e;
      },
    },
    {
      key: "setLeftTop",
      value: function () {
        this._root.style.left = this.position.x + "px";
        this._root.style.top = this.position.y + "px";
      },
    },
    {
      key: "onmousedown",
      value: function (e) {
        this.dragStart(e, e);
      },
    },
    {
      key: "onmousemove",
      value: function (e) {
        this.dragMove(e, e);
      },
    },
    {
      key: "onmouseup",
      value: function (e) {
        this.dragEnd(e, e);
      },
    },
    {
      key: "ontouchstart",
      value: function (e) {
        const t = e.changedTouches[0];
        this.dragStart(e, t);
        this.touchIdentifier =
          t.pointerId !== undefined ? t.pointerId : t.identifier;
        e.preventDefault();
      },
    },
    {
      key: "ontouchmove",
      value: function (e) {
        const t = eq(e.changedTouches, this.touchIdentifier);
        if (t) {
          this.dragMove(e, t);
        }
      },
    },
    {
      key: "ontouchend",
      value: function (e) {
        const t = eq(e.changedTouches, this.touchIdentifier);
        if (t) {
          this.dragEnd(e, t);
        }
        e.preventDefault();
      },
    },
    {
      key: "ontouchcancel",
      value: function (e) {
        const t = eq(e.changedTouches, this.touchIdentifier);
        if (t) {
          this.dragCancel(e, t);
        }
      },
    },
    {
      key: "dragStart",
      value: function (e, t) {
        if (this._root && !this.isDown && this.isEnabled) {
          this.downPoint = t;
          this.dragPoint.x = 0;
          this.dragPoint.y = 0;
          this._getPosition();
          const i = eX(this._root);
          this.startPos.x = this.position.x;
          this.startPos.y = this.position.y;
          this.startPos.maxY = window.innerHeight - i.height;
          this.startPos.maxX = window.innerWidth - i.width;
          this.setLeftTop();
          this.isDown = true;
          this._bindPostStartEvents(e);
        }
      },
    },
    {
      key: "dragRealStart",
      value: function (e, t) {
        this.isDragging = true;
        this.animate();
        this.emit("dragStart", this.startPos);
      },
    },
    {
      key: "dragEnd",
      value: function (e, t) {
        if (this._root) {
          this._unbindPostStartEvents();
          if (this.isDragging) {
            this._root.style.transform = "";
            this.setLeftTop();
            this.emit("dragEnded");
          }
          this.presetInfo();
        }
      },
    },
    {
      key: "_dragPointerMove",
      value: function (e, t) {
        const i = {
          x: t.pageX - this.downPoint.pageX,
          y: t.pageY - this.downPoint.pageY,
        };
        if (!this.isDragging && this.hasDragStarted(i)) {
          this.dragRealStart(e, t);
        }
        return i;
      },
    },
    {
      key: "dragMove",
      value: function (e, t) {
        e = e || window.event;
        if (this.isDown) {
          const i = this.startPos;
          const n = i.x;
          const o = i.y;
          const s = this._dragPointerMove(e, t);
          let r = s.x;
          let a = s.y;
          r = this.checkContain("x", r, n);
          a = this.checkContain("y", a, o);
          this.position.x = n + r;
          this.position.y = o + a;
          this.dragPoint.x = r;
          this.dragPoint.y = a;
          this.emit("dragMove", this.position);
        }
      },
    },
    {
      key: "dragCancel",
      value: function (e, t) {
        this.dragEnd(e, t);
      },
    },
    {
      key: "presetInfo",
      value: function () {
        this.isDragging = false;
        this.startPos = {
          x: 0,
          y: 0,
        };
        this.dragPoint = {
          x: 0,
          y: 0,
        };
        this.isDown = false;
      },
    },
    {
      key: "destroy",
      value: function () {
        this._unbindStartEvent();
        this._unbindPostStartEvents();
        if (this.isDragging) {
          this.dragEnd();
        }
        this.removeAllListeners();
        this._handlerDom = null;
      },
    },
    {
      key: "hasDragStarted",
      value: function (e) {
        return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
      },
    },
    {
      key: "checkContain",
      value: function (e, t, i) {
        if (t + i < 0) {
          return 0 - i;
        }
        if (e === "x" && t + i > this.startPos.maxX) {
          return this.startPos.maxX - i;
        }
        if (e === "y" && t + i > this.startPos.maxY) {
          return this.startPos.maxY - i;
        }
        return t;
      },
    },
    {
      key: "_getPosition",
      value: function () {
        const e = window.getComputedStyle(this._root);
        const t = this._getPositionCoord(e.left, "width");
        const i = this._getPositionCoord(e.top, "height");
        this.position.x = Number.isNaN(t) ? 0 : t;
        this.position.y = Number.isNaN(i) ? 0 : i;
        this._addTransformPosition(e);
      },
    },
    {
      key: "_addTransformPosition",
      value: function (e) {
        const e_transform = e.transform;
        if (e_transform.indexOf("matrix") === 0) {
          const i = e_transform.split(",");
          const n = e_transform.indexOf("matrix3d") === 0 ? 12 : 4;
          const o = parseInt(i[n], 10);
          const s = parseInt(i[n + 1], 10);
          this.position.x += o;
          this.position.y += s;
        }
      },
    },
    {
      key: "_getPositionCoord",
      value: function (e, t) {
        if (e.indexOf("%") !== -1) {
          const i = eX(this._root.parentNode);
          if (i) {
            return (parseFloat(e) / 100) * i[t];
          }
          return 0;
        }
        return parseInt(e, 10);
      },
    },
  ]);
})(_.A);
class e$ extends Plugin {
  constructor(e) {
    i = super(e);
    i.onCancelClick = function (e) {
      i.exitMini();
      i.isClose = true;
    };
    i.onCenterClick = function (e) {
      const i_player = i.player;
      if (i_player.paused) {
        i_player.play();
      } else {
        i_player.pause();
      }
    };
    i.onScroll = function (e) {
      if (
        !(
          (!window.scrollY && window.scrollY !== 0) ||
          Math.abs(window.scrollY - i.pos.scrollY) < 50
        )
      ) {
        let t = parseInt(Util.getCss(i.player.root, "height"));
        t += i.config.scrollTop;
        i.pos.scrollY = window.scrollY;
        if (window.scrollY > t + 5) {
          if (!(i.isMini || i.isClose)) {
            i.getMini();
          }
        } else if (window.scrollY <= t) {
          if (i.isMini) {
            i.exitMini();
          }
          i.isClose = false;
        }
      }
    };
    i.isMini = false;
    i.isClose = false;
    var i;
    var n = i.config;
    i.pos = {
      left: n.left < 0 ? window.innerWidth - n.width - 20 : n.left,
      top: n.top < 0 ? window.innerHeight - n.height - 20 : n.top,
      height: i.config.height,
      width: i.config.width,
      scrollY: window.scrollY || 0,
    };
    i.lastStyle = null;
    return i;
  }
  beforeCreate(e) {
    if (typeof e.player.config.mini === "boolean") {
      e.config.isShowIcon = e.player.config.mini;
    }
  }
  afterCreate() {
    const e = this;
    this.initIcons();
    this.on(M.PAUSE, function () {
      e.setAttr("data-state", "pause");
    });
    this.on(M.PLAY, function () {
      e.setAttr("data-state", "play");
    });
  }
  onPluginsReady() {
    const e = this;
    const player = this.player;
    if (!this.config.disable) {
      if (this.config.isShowIcon) {
        player.controls.registerPlugin(
          eW,
          {
            config: {
              onClick: function () {
                e.getMini();
              },
            },
          },
          eW.pluginName,
        );
      }
      const i = Util.checkTouchSupport() ? "touchend" : "click";
      this.bind(".mini-cancel-btn", i, this.onCancelClick);
      this.bind(".play-icon", i, this.onCenterClick);
      if (!this.config.disableDrag) {
        this._draggabilly = new eJ(this.player.root, {
          handle: this.root,
        });
      }
      if (this.config.isScrollSwitch) {
        window.addEventListener("scroll", this.onScroll);
      }
    }
  }
  registerIcons() {
    return {
      play: {
        icon: eF,
        class: "xg-icon-play",
      },
      pause: {
        icon: eH,
        class: "xg-icon-pause",
      },
    };
  }
  initIcons() {
    const icons = this.icons;
    this.appendChild(".play-icon", icons.play);
    this.appendChild(".play-icon", icons.pause);
  }
  getMini() {
    const e = this;
    if (!this.isMini) {
      const t = this.player;
      const i = this.playerConfig;
      const n = this.config.target || this.player.root;
      this.lastStyle = {};
      Util.addClass(t.root, "xgplayer-mini");
      ["width", "height", "top", "left"].map((t) => {
        e.lastStyle[t] = n.style[t];
        n.style[t] = "".concat(e.pos[t], "px");
      });
      if (i.fluid) {
        n.style["padding-top"] = "";
      }
      this.emit(M.MINI_STATE_CHANGE, true);
      t.isMini = this.isMini = true;
    }
  }
  exitMini() {
    const e = this;
    if (!this.isMini) {
      return false;
    }
    const player = this.player;
    const playerConfig = this.playerConfig;
    const n = this.config.target || this.player.root;
    Util.removeClass(player.root, "xgplayer-mini");
    if (this.lastStyle) {
      Object.keys(this.lastStyle).map((t) => {
        n.style[t] = e.lastStyle[t];
      });
    }
    this.lastStyle = null;
    if (playerConfig.fluid) {
      player.root.style.width = "100%";
      player.root.style.height = "0";
      player.root.style["padding-top"] =
        `${(100 * playerConfig.height) / playerConfig.width}%`;
    }
    this.emit(M.MINI_STATE_CHANGE, false);
    this.isMini = player.isMini = false;
  }
  destroy() {
    window.removeEventListener("scroll", this.onScroll);
    const e = Util.checkTouchSupport() ? "touchend" : "click";
    this.unbind(".mini-cancel-btn", e, this.onCancelClick);
    this.unbind(".play-icon", e, this.onCenterClick);
    if (this._draggabilly) {
      this._draggabilly.destroy();
    }
    this._draggabilly = null;
    this.exitMini();
  }
  render() {
    if (!this.config.disable) {
      return '\n      <xg-mini-layer class="xg-mini-layer">\n      <xg-mini-header class="xgplayer-mini-header">\n      '.concat(
        eV(this, "MINI_DRAG", this.playerConfig.isHideTips),
        '\n      </xg-mini-header>\n      <div class="mini-cancel-btn">\n        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n          <path fill="#fff" fill-rule="evenodd" d="M3.99 3.49a1 1 0 0 1 1.414 0L10 8.085l4.596-4.595a1 1 0 1 1 1.414 1.414L11.414 9.5l4.596 4.596a1 1 0 0 1 .084 1.32l-.084.094a1 1 0 0 1-1.414 0L10 10.914 5.404 15.51a1 1 0 0 1-1.414-1.414L8.585 9.5 3.99 4.904a1 1 0 0 1-.084-1.32z"></path>\n        </svg>\n      </div>\n      <div class="play-icon">\n      </div>\n      </xg-mini-layer>',
      );
    }
  }
  static get pluginName() {
    return "miniscreen";
  }
  static get defaultConfig() {
    return {
      index: 10,
      disable: false,
      width: 320,
      height: 180,
      left: -1,
      top: -1,
      isShowIcon: false,
      isScrollSwitch: false,
      scrollTop: 0,
      disableDrag: false,
    };
  }
}
const eQ = {
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mousemove: "onMouseMove",
};
const e0 = ["videoClick", "videoDbClick"];
const e1 = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onMouseMove = function (t) {
      const e_player = e.player;
      const e_playerConfig = e.playerConfig;
      if (!e_player.isActive) {
        e_player.focus({
          autoHide: !e_playerConfig.closeDelayBlur,
        });
        if (!e_playerConfig.closeFocusVideoFocus) {
          e_player.media.focus();
        }
      }
    };
    e.onMouseEnter = function (t) {
      const e_playerConfig = e.playerConfig;
      const e_player = e.player;
      if (!e_playerConfig.closeFocusVideoFocus) {
        e_player.media.focus();
      }
      if (e_playerConfig.closeDelayBlur) {
        e_player.focus({
          autoHide: false,
        });
      } else {
        e_player.focus();
      }
      e.emit(M.ENTER_PLAYER);
    };
    e.onMouseLeave = function (t) {
      const e_playerConfig = e.playerConfig;
      const i_closePlayerBlur = e_playerConfig.closePlayerBlur;
      const i_leavePlayerTime = e_playerConfig.leavePlayerTime;
      const i_closeDelayBlur = e_playerConfig.closeDelayBlur;
      if (!(i_closePlayerBlur || i_closeDelayBlur)) {
        if (i_leavePlayerTime) {
          e.player.focus({
            autoHide: true,
            delay: i_leavePlayerTime,
          });
        } else {
          e.player.blur({
            ignorePaused: true,
          });
        }
      }
      e.emit(M.LEAVE_PLAYER);
    };
    e.onVideoClick = function (t) {
      const e_player = e.player;
      const e_playerConfig = e.playerConfig;
      if (!(t.target && e_playerConfig.closeVideoClick)) {
        if (
          t.target === e_player.root ||
          t.target === e_player.media ||
          t.target === e_player.innerContainer ||
          t.target === e_player.media.__canvas
        ) {
          t.preventDefault();
          if (!e_playerConfig.closeVideoStopPropagation) {
            t.stopPropagation();
          }
          e._clickCount++;
          if (e.clickTimer) {
            clearTimeout(e.clickTimer);
            e.clickTimer = null;
          }
          e.clickTimer = setTimeout(() => {
            if (e._clickCount) {
              e._clickCount--;
              $(
                e,
                e0[0],
                function (t, i) {
                  e.switchPlayPause(i.e);
                },
                {
                  e: t,
                  paused: e_player.paused,
                },
              );
              clearTimeout(e.clickTimer);
              e.clickTimer = null;
            }
          }, 300);
        }
      }
    };
    e.onVideoDblClick = function (t) {
      const e_player = e.player;
      const e_playerConfig = e.playerConfig;
      if (
        !e_playerConfig.closeVideoDblclick &&
        t.target &&
        (t.target === e_player.media || t.target === e_player.media.__canvas)
      ) {
        if (!e_playerConfig.closeVideoClick && e._clickCount < 2) {
          e._clickCount = 0;
          return;
        }
        e._clickCount = 0;
        if (e.clickTimer) {
          clearTimeout(e.clickTimer);
          e.clickTimer = null;
        }
        t.preventDefault();
        t.stopPropagation();
        $(
          e,
          e0[1],
          function (t, n) {
            e.emitUserAction(n.e, "switch_fullscreen", {
              props: "fullscreen",
              from: e_player.fullscreen,
              to: !e_player.fullscreen,
            });
            if (e_player.fullscreen) {
              e_player.exitFullscreen();
            } else {
              e_player.getFullscreen();
            }
          },
          {
            e: t,
            fullscreen: e_player.fullscreen,
          },
        );
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          this._clickCount = 0;
          e0.map((t) => {
            e.__hooks[t] = null;
          });
          if (
            this.playerConfig.isMobileSimulateMode !== "mobile" &&
            (Sniffer.device !== "mobile" || Sniffer.os.isIpad)
          ) {
            this.initEvents();
          }
        },
      },
      {
        key: "initEvents",
        value: function () {
          const e = this;
          const player = this.player;
          const t_media = player.media;
          const t_root = player.root;
          const enableContextmenu = this.playerConfig.enableContextmenu;
          if (t_root) {
            t_root.addEventListener("click", this.onVideoClick, false);
          }
          if (t_root) {
            t_root.addEventListener("dblclick", this.onVideoDblClick, false);
          }
          if (t_root) {
            Object.keys(eQ).map((t) => {
              t_root.addEventListener(t, e[eQ[t]], false);
            });
          }
          if (!enableContextmenu && t_media) {
            t_media.addEventListener("contextmenu", this.onContextmenu, false);
          }
        },
      },
      {
        key: "switchPlayPause",
        value: function (e) {
          const player = this.player;
          this.emitUserAction(e, "switch_play_pause", {
            props: "paused",
            from: player.paused,
            to: !player.paused,
          });
          if (player.ended) {
            if (Infinity !== player.duration && player.duration > 0) {
              player.replay();
            }
          } else if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        },
      },
      {
        key: "onContextmenu",
        value: function (e) {
          if ((e = e || window.event).preventDefault) {
            e.preventDefault();
          }
          if (e.stopPropagation) {
            e.stopPropagation();
          } else {
            e.returnValue = false;
            e.cancelBubble = true;
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          const e = this;
          const player = this.player;
          const t_video = player.video;
          const t_root = player.root;
          if (this.clickTimer) {
            clearTimeout(this.clickTimer);
          }
          t_root.removeEventListener("click", this.onVideoClick, false);
          t_root.removeEventListener("dblclick", this.onVideoDblClick, false);
          t_video.removeEventListener("contextmenu", this.onContextmenu, false);
          Object.keys(eQ).map((t) => {
            t_root.removeEventListener(t, e[eQ[t]], false);
          });
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "pc";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {};
        },
      },
    ],
  );
})(BasePlugin);
const e2 = "pressend";
const e3 = {
  start: "touchstart",
  end: "touchend",
  move: "touchmove",
  cancel: "touchcancel",
};
const e5 = {
  start: "mousedown",
  end: "mouseup",
  move: "mousemove",
  cancel: "mouseleave",
};
function e4(touches) {
  if (touches && touches.length > 0) {
    return touches[touches.length - 1];
  }
  return null;
}
const e8 = a(
  function e(t) {
    const i = this;
    const n =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            eventType: "touch",
          };
    s(this, e);
    this.onTouchStart = function (e) {
      const i__pos = i._pos;
      const i_root = i.root;
      const o = e4(e.touches);
      i__pos.x = o ? parseInt(o.pageX, 10) : e.pageX;
      i__pos.y = o ? parseInt(o.pageX, 10) : e.pageX;
      i__pos.start = true;
      i.__setPress(e);
      i_root.addEventListener(i.events.end, i.onTouchEnd);
      i_root.addEventListener(i.events.cancel, i.onTouchCancel);
      i_root.addEventListener(i.events.move, i.onTouchMove);
      i.trigger("touchstart", e);
    };
    this.onTouchCancel = function (e) {
      i.onTouchEnd(e);
    };
    this.onTouchEnd = function (e) {
      const i__pos = i._pos;
      const i_root = i.root;
      i.__clearPress();
      i_root.removeEventListener(i.events.cancel, i.onTouchCancel);
      i_root.removeEventListener(i.events.end, i.onTouchEnd);
      i_root.removeEventListener(i.events.move, i.onTouchMove);
      e.moving = i__pos.moving;
      e.press = i__pos.press;
      if (i__pos.press) {
        i.trigger(e2, e);
      }
      i.trigger("touchend", e);
      if (!(i__pos.press || i__pos.moving)) {
        i.__setDb(e);
      }
      i__pos.press = false;
      i__pos.start = false;
      i__pos.moving = false;
    };
    this.onTouchMove = function (e) {
      const i__pos = i._pos;
      const i_config = i.config;
      const o = e4(e.touches);
      const s = o ? parseInt(o.pageX, 10) : e.pageX;
      const r = o ? parseInt(o.pageY, 10) : e.pageX;
      const a = s - i__pos.x;
      if (
        !(
          Math.abs(r - i__pos.y) < i_config.miniStep &&
          Math.abs(a) < i_config.miniStep
        )
      ) {
        i.__clearPress();
        if (i__pos.press) {
          i.trigger(e2, e);
        }
        i__pos.press = false;
        i__pos.moving = true;
        i.trigger("touchmove", e);
      }
    };
    this._pos = {
      moving: false,
      start: false,
      x: 0,
      y: 0,
    };
    this.config = {
      pressDelay: 600,
      dbClickDelay: 200,
      disablePress: false,
      disableDbClick: false,
      miniStep: 2,
      needPreventDefault: true,
    };
    Object.keys(n).map((e) => {
      i.config[e] = n[e];
    });
    this.root = t;
    this.events = n.eventType === "mouse" ? e5 : e3;
    this.pressIntrvalId = null;
    this.dbIntrvalId = null;
    this.__handlers = {};
    this._initEvent();
  },
  [
    {
      key: "_initEvent",
      value: function () {
        this.root.addEventListener(this.events.start, this.onTouchStart);
      },
    },
    {
      key: "__setPress",
      value: function (e) {
        const t = this;
        const config = this.config;
        if (this.pressIntrvalId) {
          this.__clearPress();
        }
        this.pressIntrvalId = setTimeout(() => {
          t.trigger("press", e);
          t._pos.press = true;
          t.__clearPress();
        }, config.pressDelay);
      },
    },
    {
      key: "__clearPress",
      value: function () {
        window.clearTimeout(this.pressIntrvalId);
        this.pressIntrvalId = null;
      },
    },
    {
      key: "__setDb",
      value: function (e) {
        const t = this;
        const config = this.config;
        if (this.dbIntrvalId) {
          this.__clearDb();
          this.trigger("doubleclick", e);
          return;
        }
        this.dbIntrvalId = setTimeout(() => {
          t.__clearDb();
          if (!(t._pos.start || t._pos.press || t._pos.moving)) {
            t.trigger("click", e);
          }
        }, config.dbClickDelay);
      },
    },
    {
      key: "__clearDb",
      value: function () {
        clearTimeout(this.dbIntrvalId);
        this.dbIntrvalId = null;
      },
    },
    {
      key: "on",
      value: function (e, t) {
        if (!this.__handlers[e]) {
          this.__handlers[e] = [];
        }
        this.__handlers[e].push(t);
      },
    },
    {
      key: "off",
      value: function (e, t) {
        if (this.__handlers[e]) {
          for (var i = this.__handlers[e], n = -1, o = 0; o < i.length; o++) {
            if (i[o] === t) {
              n = o;
              break;
            }
          }
          if (n >= 0) {
            this.__handlers[e].splice(n, 1);
          }
        }
      },
    },
    {
      key: "trigger",
      value: function (e, t) {
        if (this.__handlers[e]) {
          this.__handlers[e].map((i) => {
            try {
              i(t);
            } catch (error) {
              console.error("trigger>>:".concat(e), error);
            }
          });
        }
      },
    },
    {
      key: "destroy",
      value: function () {
        const e = this;
        const t = {
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart",
        };
        Object.keys(t).forEach((i) => {
          e.root.removeEventListener(i, e[t[i]]);
        });
      },
    },
  ],
);
function e6() {
  return new DOMParser().parseFromString(
    '<svg width="20" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink">\n  <path opacity="0.54"\n    d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z"\n    fill="white" />\n  <path transform="translate(5 0)" d="M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z" fill="white"/>\n</svg>',
    "image/svg+xml",
  ).firstChild;
}
const e7 = "auto";
const e9 = ["videoClick", "videoDbClick"];
class te extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.onTouchStart = function (e) {
      const i_player = i.player;
      const i_config = i.config;
      const i_pos = i.pos;
      const i_playerConfig = i.playerConfig;
      const r = i.getTouche(e);
      if (r && !i_config.disableGesture && i.duration > 0 && !i_player.ended) {
        i_pos.isStart = true;
        if (i.timer) {
          clearTimeout(i.timer);
        }
        if (Util.checkIsFunction(i_playerConfig.disableSwipeHandler)) {
          i_playerConfig.disableSwipeHandler();
        }
        i.find(".xg-dur").innerHTML = Util.format(i.duration);
        const a = i.root.getBoundingClientRect();
        if (i_player.rotateDeg === 90) {
          i_pos.top = a.left;
          i_pos.left = a.top;
          i_pos.width = a.height;
          i_pos.height = a.width;
        } else {
          i_pos.top = a.top;
          i_pos.left = a.left;
          i_pos.width = a.width;
          i_pos.height = a.height;
        }
        const l = parseInt(r.pageX - i_pos.left, 10);
        const c = parseInt(r.pageY - i_pos.top, 10);
        i_pos.x = i_player.rotateDeg === 90 ? c : l;
        i_pos.y = i_player.rotateDeg === 90 ? l : c;
        i_pos.scopeL = i_config.scopeL * i_pos.width;
        i_pos.scopeR = (1 - i_config.scopeR) * i_pos.width;
        i_pos.scopeM1 = (i_pos.width * (1 - i_config.scopeM)) / 2;
        i_pos.scopeM2 = i_pos.width - i_pos.scopeM1;
      }
    };
    i.onTouchMove = function (e) {
      const t = i.getTouche(e);
      const i_pos = i.pos;
      const i_config = i.config;
      const i_player = i.player;
      if (t && !i_config.disableGesture && i.duration && i_pos.isStart) {
        const r = i_config.miniMoveStep;
        const a = i_config.hideControlsActive;
        const l = parseInt(t.pageX - i_pos.left, 10);
        const c = parseInt(t.pageY - i_pos.top, 10);
        const u = i_player.rotateDeg === 90 ? c : l;
        const h = i_player.rotateDeg === 90 ? l : c;
        if (Math.abs(u - i_pos.x) > r || Math.abs(h - i_pos.y) > r) {
          const d = u - i_pos.x;
          const f = h - i_pos.y;
          let g = i_pos.scope;
          if (g === -1) {
            if ((g = i.checkScope(u, h, d, f, i_pos)) === 0) {
              if (a) {
                i_player.blur();
              } else {
                i_player.focus({
                  autoHide: false,
                });
              }
              if (!i_pos.time) {
                i_pos.time =
                  parseInt(1000 * i_player.currentTime, 10) +
                  1000 * i.timeOffset;
              }
            }
            i_pos.scope = g;
          }
          if (
            g === -1 ||
            (g > 0 && !i_config.gestureY) ||
            (g === 0 && !i_config.gestureX)
          ) {
            return;
          }
          i.executeMove(d, f, g, i_pos.width, i_pos.height);
          i_pos.x = u;
          i_pos.y = h;
        }
      }
    };
    i.onTouchEnd = function (e) {
      const i_player = i.player;
      const i_pos = i.pos;
      const i_playerConfig = i.playerConfig;
      setTimeout(() => {
        if (i_player.getPlugin("progress")) {
          i_player.getPlugin("progress").resetSeekState();
        }
      }, 10);
      if (i_pos.isStart) {
        if (i_pos.scope > -1 && e.cancelable) {
          e.preventDefault();
        }
        const s = i.config;
        const r = s.disableGesture;
        const a = s.gestureX;
        if (!r && a) {
          i.endLastMove(i_pos.scope);
        } else {
          i_pos.time = 0;
        }
        i_pos.scope = -1;
        i.resetPos();
        if (Util.checkIsFunction(i_playerConfig.enableSwipeHandler)) {
          i_playerConfig.enableSwipeHandler();
        }
        i.changeAction(e7);
      }
    };
    i.onRootTouchMove = function (e) {
      if (
        !i.config.disableGesture &&
        i.config.gestureX &&
        i.checkIsRootTarget(e)
      ) {
        e.stopPropagation();
        if (i.pos.isStart) {
          i.onTouchMove(e);
        } else {
          i.onTouchStart(e);
        }
      }
    };
    i.onRootTouchEnd = function (e) {
      if (i.pos.scope > -1) {
        i.onTouchEnd(e);
      }
    };
    i.pos = {
      isStart: false,
      x: 0,
      y: 0,
      time: 0,
      volume: 0,
      rate: 1,
      light: 0,
      width: 0,
      height: 0,
      scopeL: 0,
      scopeR: 0,
      scopeM1: 0,
      scopeM2: 0,
      scope: -1,
    };
    i.timer = null;
    return i;
  }
  get duration() {
    return this.playerConfig.customDuration || this.player.duration;
  }
  get timeOffset() {
    return this.playerConfig.timeOffset || 0;
  }
  registerIcons() {
    return {
      seekTipIcon: {
        icon: e6,
        class: "xg-seek-pre",
      },
    };
  }
  afterCreate() {
    const e = this;
    e9.map((t) => {
      e.__hooks[t] = null;
    });
    const playerConfig = this.playerConfig;
    const config = this.config;
    const player = this.player;
    if (playerConfig.closeVideoDblclick === true) {
      config.closedbClick = true;
    }
    this.resetPos();
    if (!Util.isUndefined(playerConfig.disableGesture)) {
      config.disableGesture = !!playerConfig.disableGesture;
    }
    this.appendChild(".xg-seek-icon", this.icons.seekTipIcon);
    this.xgMask = Util.createDom("xg-mask", "", {}, "xgmask");
    player.root.appendChild(this.xgMask);
    this.initCustomStyle();
    this.registerThumbnail();
    const o = this.domEventType === "mouse" ? "mouse" : "touch";
    this.touch = new e8(this.root, {
      eventType: o,
      needPreventDefault: !this.config.disableGesture,
    });
    this.root.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    player.root.addEventListener("touchmove", this.onRootTouchMove, true);
    player.root.addEventListener("touchend", this.onRootTouchEnd, true);
    player.root.addEventListener("touchcancel", this.onRootTouchEnd, true);
    const controls = this.player.controls;
    if (controls && controls.center) {
      controls.center.addEventListener("touchmove", this.onRootTouchMove, true);
      controls.center.addEventListener("touchend", this.onRootTouchEnd, true);
      controls.center.addEventListener(
        "touchcancel",
        this.onRootTouchEnd,
        true,
      );
    }
    this.on(M.DURATION_CHANGE, function () {
      const e_player = e.player;
      const e_config = e.config;
      if (1000 * e_player.duration < e_config.moveDuration) {
        e_config.moveDuration = 1000 * e_player.duration;
      }
    });
    this.on([M.CANPLAY, M.ENDED], function () {
      const e_pos = e.pos;
      const t_time = e_pos.time;
      if (!e_pos.isStart && t_time > 0) {
        e.pos.time = 0;
      }
    });
    const r = {
      touchstart: "onTouchStart",
      touchmove: "onTouchMove",
      touchend: "onTouchEnd",
      press: "onPress",
      pressend: "onPressEnd",
      click: "onClick",
      doubleclick: "onDbClick",
    };
    Object.keys(r).map((t) => {
      e.touch.on(t, function (i) {
        e[r[t]](i);
      });
    });
    if (!config.disableActive) {
      const a = player.plugins.progress;
      if (a) {
        a.addCallBack("dragmove", function (t) {
          e.activeSeekNote(t.currentTime, t.forward);
        });
        ["dragend", "click"].forEach((t) => {
          a.addCallBack(t, function () {
            e.changeAction(e7);
          });
        });
      }
    }
  }
  registerThumbnail() {
    const thumbnail = this.player.plugins.thumbnail;
    if (thumbnail && thumbnail.usable) {
      this.thumbnail = thumbnail.createThumbnail(null, "mobile-thumbnail");
      const t = this.find(".time-preview");
      t.insertBefore(this.thumbnail, t.children[0]);
    }
  }
  initCustomStyle() {
    const commonStyle = (this.playerConfig || {}).commonStyle;
    const e_playedColor = commonStyle.playedColor;
    const e_progressColor = commonStyle.progressColor;
    const e_timePreviewStyle = commonStyle.timePreviewStyle;
    const e_curTimeColor = commonStyle.curTimeColor;
    const e_durationColor = commonStyle.durationColor;
    if (e_playedColor) {
      this.find(".xg-curbar").style.backgroundColor = e_playedColor;
    }
    if (e_progressColor) {
      this.find(".xg-bar").style.backgroundColor = e_progressColor;
    }
    if (e_timePreviewStyle) {
      const r = this.find(".time-preview");
      Object.keys(e_timePreviewStyle).forEach((e) => {
        r.style[e] = e_timePreviewStyle[e];
      });
    }
    const a = e_curTimeColor || e_playedColor;
    if (a) {
      this.find(".xg-cur").style.color = a;
    }
    if (e_durationColor) {
      this.find(".xg-dur").style.color = e_durationColor;
    }
    if (this.config.disableTimeProgress) {
      Util.addClass(this.find(".xg-timebar"), "hide");
    }
  }
  resetPos() {
    const e = this;
    if (this.pos) {
      this.pos.isStart = false;
      this.pos.scope = -1;
      [
        "x",
        "y",
        "width",
        "height",
        "scopeL",
        "scopeR",
        "scopeM1",
        "scopeM2",
      ].map((t) => {
        e.pos[t] = 0;
      });
    } else {
      this.pos = {
        isStart: false,
        x: 0,
        y: 0,
        volume: 0,
        rate: 1,
        light: 0,
        width: 0,
        height: 0,
        scopeL: 0,
        scopeR: 0,
        scopeM1: 0,
        scopeM2: 0,
        scope: -1,
        time: 0,
      };
    }
  }
  changeAction(e) {
    const player = this.player;
    this.root.setAttribute("data-xg-action", e);
    const start = player.plugins.start;
    if (start) {
      start.recover();
    }
  }
  getTouche(e) {
    this.player.rotateDeg;
    const t =
      e.touches && e.touches.length > 0 ? e.touches[e.touches.length - 1] : e;
    return {
      pageX: t.pageX,
      pageY: t.pageY,
    };
  }
  checkScope(e, t, i, n, o) {
    const o_width = o.width;
    let r = -1;
    if (e < 0 || e > o_width) {
      return r;
    }
    const a = n === 0 ? Math.abs(i) : Math.abs(i / n);
    if (Math.abs(i) > 0 && a >= 1.73 && e > o.scopeM1 && e < o.scopeM2) {
      r = 0;
    } else if (Math.abs(i) === 0 || a <= 0.57) {
      r = e < o.scopeL ? 1 : e > o.scopeR ? 2 : 3;
    }
    return r;
  }
  executeMove(e, t, i, n, o) {
    switch (i) {
      case 0:
        this.updateTime((e / n) * this.config.scopeM);
        break;
      case 1:
        this.updateBrightness(t / o);
        break;
      case 2:
        if (!Sniffer.os.isIos) {
          this.updateVolume(t / o);
        }
    }
  }
  endLastMove(e) {
    const t = this;
    const pos = this.pos;
    const player = this.player;
    const config = this.config;
    const s = (pos.time - this.timeOffset) / 1000;
    if (e === 0) {
      player.seek(Number(s).toFixed(1));
      if (config.hideControlsEnd) {
        player.blur();
      } else {
        player.focus();
      }
      this.timer = setTimeout(() => {
        t.pos.time = 0;
      }, 500);
    }
    this.changeAction(e7);
  }
  checkIsRootTarget(e) {
    const t = this.player.plugins || {};
    return (
      !(t.progress && t.progress.root.contains(e.target)) &&
      ((t.start && t.start.root.contains(e.target)) ||
        (t.controls && t.controls.root.contains(e.target)))
    );
  }
  sendUseAction(e) {
    const paused = this.player.paused;
    this.emitUserAction(e, "switch_play_pause", {
      prop: "paused",
      from: paused,
      to: !paused,
    });
  }
  clickHandler(e) {
    const player = this.player;
    const config = this.config;
    const playerConfig = this.playerConfig;
    if (player.state < STATES.RUNNING) {
      if (!playerConfig.closeVideoClick) {
        this.sendUseAction(Util.createEvent("click"));
        player.play();
      }
      return;
    }
    if (!config.closedbClick || playerConfig.closeVideoClick) {
      if (player.isActive) {
        player.blur();
      } else {
        player.focus();
      }
    } else if (!playerConfig.closeVideoClick) {
      if (player.isActive || config.focusVideoClick) {
        this.sendUseAction(Util.createEvent("click"));
        this.switchPlayPause();
      }
      player.focus();
    }
  }
  dbClickHandler(e) {
    const config = this.config;
    const player = this.player;
    if (!config.closedbClick && player.state >= STATES.RUNNING) {
      this.sendUseAction(Util.createEvent("dblclick"));
      this.switchPlayPause();
    }
  }
  onClick(e) {
    const t = this;
    const player = this.player;
    $(
      this,
      e9[0],
      function (e, i) {
        t.clickHandler(i.e);
      },
      {
        e,
        paused: player.paused,
      },
    );
  }
  onDbClick(e) {
    const t = this;
    const player = this.player;
    $(
      this,
      e9[1],
      function (e, i) {
        t.dbClickHandler(i.e);
      },
      {
        e,
        paused: player.paused,
      },
    );
  }
  onPress(e) {
    const pos = this.pos;
    const config = this.config;
    const player = this.player;
    if (!config.disablePress) {
      pos.rate = this.player.playbackRate;
      this.emitUserAction("press", "change_rate", {
        prop: "playbackRate",
        from: player.playbackRate,
        to: config.pressRate,
      });
      player.playbackRate = config.pressRate;
      this.changeAction("playbackrate");
    }
  }
  onPressEnd(e) {
    const pos = this.pos;
    const config = this.config;
    const player = this.player;
    if (!config.disablePress) {
      this.emitUserAction("pressend", "change_rate", {
        prop: "playbackRate",
        from: player.playbackRate,
        to: pos.rate,
      });
      player.playbackRate = pos.rate;
      pos.rate = 1;
      this.changeAction(e7);
    }
  }
  updateTime(e) {
    const player = this.player;
    const config = this.config;
    const duration = this.player.duration;
    let o =
      parseInt((e = Number(e.toFixed(4))) * config.moveDuration, 10) +
      this.timeOffset;
    o += this.pos.time;
    o = o < 0 ? 0 : o > 1000 * duration ? 1000 * duration - 200 : o;
    if (player.getPlugin("time")) {
      player.getPlugin("time").updateTime(o / 1000);
    }
    if (player.getPlugin("progress")) {
      player
        .getPlugin("progress")
        .updatePercent(o / 1000 / this.duration, true);
    }
    this.activeSeekNote(o / 1000, e > 0);
    if (config.isTouchingSeek) {
      player.seek(Number((o - this.timeOffset) / 1000).toFixed(1));
    }
    this.pos.time = o;
  }
  updateVolume(e) {
    if (this.player.rotateDeg) {
      e = -e;
    }
    const player = this.player;
    const pos = this.pos;
    e = parseInt(100 * e, 10);
    pos.volume += e;
    if (!(Math.abs(pos.volume) < 10)) {
      let n = parseInt(10 * player.volume, 10) - parseInt(pos.volume / 10, 10);
      player.volume = (n = n > 10 ? 10 : n < 1 ? 0 : n) / 10;
      pos.volume = 0;
    }
  }
  updateBrightness(e) {
    const pos = this.pos;
    const config = this.config;
    const xgMask = this.xgMask;
    if (config.darkness) {
      if (this.player.rotateDeg) {
        e = -e;
      }
      let o = pos.light + 0.8 * e;
      o = o > config.maxDarkness ? config.maxDarkness : o < 0 ? 0 : o;
      if (xgMask) {
        xgMask.style.backgroundColor = "rgba(0,0,0,".concat(o, ")");
      }
      pos.light = o;
    }
  }
  activeSeekNote(e) {
    const t =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    const player = this.player;
    const config = this.config;
    const o = !(Infinity !== this.duration && this.duration > 0);
    if (e && typeof e === "number" && !o && !config.disableActive) {
      if (e < 0) {
        e = 0;
      } else if (e > player.duration) {
        e = player.duration - 0.2;
      }
      this.changeAction("seeking");
      const s = player.plugins.start;
      if (s) {
        s.focusHide();
      }
      this.find(".xg-dur").innerHTML = Util.format(this.duration);
      this.find(".xg-cur").innerHTML = Util.format(e);
      this.find(".xg-curbar").style.width = `${(e / this.duration) * 100}%`;
      if (t) {
        Util.removeClass(this.find(".xg-seek-show"), "xg-back");
      } else {
        Util.addClass(this.find(".xg-seek-show"), "xg-back");
      }
      this.updateThumbnails(e);
    }
  }
  updateThumbnails(e) {
    const thumbnail = this.player.plugins.thumbnail;
    if (thumbnail && thumbnail.usable && this.thumbnail) {
      thumbnail.update(this.thumbnail, e, 160, 90);
    }
  }
  switchPlayPause() {
    const player = this.player;
    if (player.state < STATES.ATTACHED) {
      return false;
    }
    if (!player.ended) {
      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
  }
  disableGesture() {
    this.config.disableGesture = false;
  }
  enableGesture() {
    this.config.disableGesture = true;
  }
  destroy() {
    const player = this.player;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.thumbnail = null;
    player.root.removeChild(this.xgMask);
    this.xgMask = null;
    if (this.touch) {
      this.touch.destroy();
    }
    this.touch = null;
    player.root.removeEventListener("touchmove", this.onRootTouchMove, true);
    player.root.removeEventListener("touchend", this.onRootTouchEnd, true);
    player.root.removeEventListener("touchcancel", this.onRootTouchEnd, true);
    const controls = this.player.controls;
    if (controls && controls.center) {
      controls.center.removeEventListener(
        "touchmove",
        this.onRootTouchMove,
        true,
      );
      controls.center.removeEventListener(
        "touchend",
        this.onRootTouchEnd,
        true,
      );
      controls.center.removeEventListener(
        "touchcancel",
        this.onRootTouchEnd,
        true,
      );
    }
  }
  render() {
    const e =
      this.config.gradient !== "normal"
        ? "gradient ".concat(this.config.gradient)
        : "gradient";
    return '\n     <xg-trigger class="trigger">\n     <div class="'
      .concat(
        e,
        '"></div>\n        <div class="time-preview">\n            <div class="xg-seek-show ',
      )
      .concat(
        this.config.disableSeekIcon ? " hide-seek-icon" : "",
        '">\n              <i class="xg-seek-icon"></i>\n              <span class="xg-cur">00:00</span>\n              <span class="xg-separator">/</span>\n              <span class="xg-dur">00:00</span>\n            </div>\n              <div class="xg-bar xg-timebar">\n                <div class="xg-curbar"></div>\n              </div>\n        </div>\n        <div class="xg-playbackrate xg-top-note">\n            <span><i>',
      )
      .concat(this.config.pressRate, "X</i>")
      .concat(
        this.i18n.FORWARD,
        "</span>\n        </div>\n     </xg-trigger>\n    ",
      );
  }
  static get pluginName() {
    return "mobile";
  }
  static get defaultConfig() {
    return {
      index: 0,
      disableGesture: false,
      gestureX: true,
      gestureY: true,
      gradient: "normal",
      isTouchingSeek: false,
      miniMoveStep: 5,
      miniYPer: 5,
      scopeL: 0.25,
      scopeR: 0.25,
      scopeM: 0.9,
      pressRate: 2,
      darkness: true,
      maxDarkness: 0.8,
      disableActive: false,
      disableTimeProgress: false,
      hideControlsActive: false,
      hideControlsEnd: false,
      moveDuration: 360000,
      closedbClick: false,
      disablePress: true,
      disableSeekIcon: false,
      focusVideoClick: false,
    };
  }
}
function tt(target) {
  const e_tagName = target.tagName;
  return (
    e_tagName === "INPUT" ||
    e_tagName === "TEXTAREA" ||
    !!target.isContentEditable
  );
}
const ti = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onBodyKeyDown = function (t) {
      if (e.player) {
        const i = t || window.event;
        const n = i.keyCode;
        const o = e._keyState;
        const s = e.player;
        const r = e.config;
        const a = r.disable;
        const l = r.disableBodyTrigger;
        const c = r.isIgnoreUserActive;
        if (
          a ||
          l ||
          !(s.isUserActive || c) ||
          tt(i.target) ||
          !e.checkIsVisible() ||
          i.metaKey ||
          i.altKey ||
          i.ctrlKey
        ) {
          o.isBodyKeyDown = false;
          return;
        }
        if (!(t.repeat || o.isKeyDown)) {
          if (
            (i.target === document.body ||
              (e.config.isGlobalTrigger && !tt(i.target))) &&
            e.checkCode(n, true)
          ) {
            o.isBodyKeyDown = true;
          }
          document.addEventListener("keyup", e.onBodyKeyUp);
        }
        if (o.isBodyKeyDown) {
          e.handleKeyDown(i);
        }
      }
    };
    e.onBodyKeyUp = function (t) {
      if (e.player) {
        document.removeEventListener("keyup", e.onBodyKeyUp);
        e.handleKeyUp(t);
      }
    };
    e.onKeydown = function (t) {
      if (e.player) {
        const i = t || window.event;
        const n = e._keyState;
        if (!i.repeat) {
          if (
            e.config.disable ||
            e.config.disableRootTrigger ||
            i.metaKey ||
            i.altKey ||
            i.ctrlKey
          ) {
            return;
          }
          if (
            i &&
            (i.keyCode === 37 || e.checkCode(i.keyCode)) &&
            (i.target === e.player.root ||
              i.target === e.player.video ||
              i.target === e.player.controls.el)
          ) {
            n.isKeyDown = true;
          }
          e.player.root.addEventListener("keyup", e.onKeyup);
        }
        if (n.isKeyDown) {
          e.handleKeyDown(i);
        }
      }
    };
    e.onKeyup = function (t) {
      if (e.player) {
        e.player.root.removeEventListener("keyup", e.onKeyup);
        e.handleKeyUp(t);
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "mergekeyCodeMap",
        value: function () {
          const e = this;
          const keyCodeMap = this.config.keyCodeMap;
          if (keyCodeMap) {
            Object.keys(keyCodeMap).map((i) => {
              if (e.keyCodeMap[i]) {
                [
                  "keyCode",
                  "action",
                  "disable",
                  "pressAction",
                  "disablePress",
                  "isBodyTarget",
                ].map((n) => {
                  if (keyCodeMap[i][n]) {
                    e.keyCodeMap[i][n] = keyCodeMap[i][n];
                  }
                });
              } else {
                e.keyCodeMap[i] = keyCodeMap[i];
              }
            });
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          this.config.disable = !this.playerConfig.keyShortcut;
          const e =
            typeof this.config.seekStep === "function"
              ? this.config.seekStep(this.player)
              : this.config.seekStep;
          if (e && typeof e === "number") {
            this.seekStep = e;
          }
          this.keyCodeMap = {
            space: {
              keyCode: 32,
              action: "playPause",
              disable: false,
              disablePress: false,
              noBodyTarget: false,
            },
            up: {
              keyCode: 38,
              action: "upVolume",
              disable: false,
              disablePress: false,
              noBodyTarget: true,
            },
            down: {
              keyCode: 40,
              action: "downVolume",
              disable: false,
              disablePress: false,
              noBodyTarget: true,
            },
            left: {
              keyCode: 37,
              action: "seekBack",
              disablePress: false,
              disable: false,
            },
            right: {
              keyCode: 39,
              action: "seek",
              pressAction: "changePlaybackRate",
              disablePress: false,
              disable: false,
            },
            esc: {
              keyCode: 27,
              action: "exitFullscreen",
              disablePress: true,
              disable: false,
            },
          };
          this.mergekeyCodeMap();
          this._keyState = {
            isKeyDown: false,
            isBodyKeyDown: false,
            isPress: false,
            tt: 0,
            playbackRate: 0,
          };
          const root = this.player.root;
          if (root) {
            root.addEventListener("keydown", this.onKeydown);
          }
          document.addEventListener("keydown", this.onBodyKeyDown);
        },
      },
      {
        key: "setConfig",
        value: function (e) {
          const t = this;
          Object.keys(e).forEach((i) => {
            t.config[i] = e[i];
          });
        },
      },
      {
        key: "checkIsVisible",
        value: function () {
          if (!this.config.checkVisible) {
            return true;
          }
          const e = this.player.root.getBoundingClientRect();
          const e_height = e.height;
          const e_top = e.top;
          const e_bottom = e.bottom;
          const window_innerHeight = window.innerHeight;
          return (
            (!(e_top < 0) || !(e_top < 0 - 0.9 * e_height)) &&
            (!(e_bottom > 0) ||
              !(e_bottom - window_innerHeight > 0.9 * e_height))
          );
        },
      },
      {
        key: "checkCode",
        value: function (e, t) {
          const i = this;
          let n = false;
          Object.keys(this.keyCodeMap).map((o) => {
            if (
              i.keyCodeMap[o] &&
              e === i.keyCodeMap[o].keyCode &&
              !i.keyCodeMap[o].disable
            ) {
              n = !t || (t && !i.keyCodeMap[o].noBodyTarget);
            }
          });
          return n;
        },
      },
      {
        key: "downVolume",
        value: function (e) {
          const player = this.player;
          if (!(player.volume <= 0)) {
            const i = parseFloat((player.volume - 0.1).toFixed(1));
            const n = {
              volume: {
                from: player.volume,
                to: i,
              },
            };
            this.emitUserAction(e, "change_volume", {
              props: n,
            });
            if (i >= 0) {
              player.volume = i;
            } else {
              player.volume = 0;
            }
          }
        },
      },
      {
        key: "upVolume",
        value: function (e) {
          const player = this.player;
          if (!(player.volume >= 1)) {
            const i = parseFloat((player.volume + 0.1).toFixed(1));
            const n = {
              volume: {
                from: player.volume,
                to: i,
              },
            };
            this.emitUserAction(e, "change_volume", {
              props: n,
            });
            if (i <= 1) {
              player.volume = i;
            } else {
              player.volume = 1;
            }
          }
        },
      },
      {
        key: "seek",
        value: function (e) {
          const player = this.player;
          const t_currentTime = player.currentTime;
          const t_offsetCurrentTime = player.offsetCurrentTime;
          const t_duration = player.duration;
          const t_offsetDuration = player.offsetDuration;
          const t_timeSegments = player.timeSegments;
          let a =
            t_offsetCurrentTime > -1 ? t_offsetCurrentTime : t_currentTime;
          const l = t_offsetDuration || t_duration;
          const c =
            e.repeat && this.seekStep >= 4
              ? parseInt(this.seekStep / 2, 10)
              : this.seekStep;
          if (a + c <= l) {
            a += c;
          } else {
            a = l;
          }
          const u = Util.getCurrentTimeByOffset(a, t_timeSegments);
          this.emitUserAction(e, "seek", {
            props: {
              currentTime: {
                from: t_currentTime,
                to: u,
              },
            },
          });
          this.player.currentTime = u;
        },
      },
      {
        key: "seekBack",
        value: function (e) {
          const player = this.player;
          const t_currentTime = player.currentTime;
          const t_offsetCurrentTime = player.offsetCurrentTime;
          const t_timeSegments = player.timeSegments;
          let s =
            (t_offsetCurrentTime > -1 ? t_offsetCurrentTime : t_currentTime) -
            (e.repeat ? parseInt(this.seekStep / 2, 10) : this.seekStep);
          if (s < 0) {
            s = 0;
          }
          const r = {
            currentTime: {
              from: t_currentTime,
              to: (s = Util.getCurrentTimeByOffset(s, t_timeSegments)),
            },
          };
          this.emitUserAction(e, "seek", {
            props: r,
          });
          this.player.currentTime = s;
        },
      },
      {
        key: "changePlaybackRate",
        value: function (e) {
          const _keyState = this._keyState;
          const config = this.config;
          const player = this.player;
          if (_keyState.playbackRate === 0) {
            _keyState.playbackRate = player.playbackRate;
            player.playbackRate = config.playbackRate;
          }
        },
      },
      {
        key: "playPause",
        value: function (e) {
          const player = this.player;
          if (player) {
            this.emitUserAction(e, "switch_play_pause");
            if (player.paused) {
              player.play();
            } else {
              player.pause();
            }
          }
        },
      },
      {
        key: "exitFullscreen",
        value: function (e) {
          const player = this.player;
          const t_fullscreen = player.fullscreen;
          const t_cssfullscreen = player.cssfullscreen;
          if (t_fullscreen) {
            this.emitUserAction("keyup", "switch_fullscreen", {
              prop: "fullscreen",
              from: t_fullscreen,
              to: !t_fullscreen,
            });
            player.exitFullscreen();
          }
          if (t_cssfullscreen) {
            this.emitUserAction("keyup", "switch_css_fullscreen", {
              prop: "cssfullscreen",
              from: t_cssfullscreen,
              to: !t_cssfullscreen,
            });
            player.exitCssFullscreen();
          }
        },
      },
      {
        key: "handleKeyDown",
        value: function (e) {
          const _keyState = this._keyState;
          if (e.repeat) {
            _keyState.isPress = true;
            const i = Date.now();
            if (i - _keyState.tt < 200) {
              return;
            }
            _keyState.tt = i;
          }
          this.handleKeyCode(e.keyCode, e, _keyState.isPress);
        },
      },
      {
        key: "handleKeyUp",
        value: function (e) {
          const _keyState = this._keyState;
          if (_keyState.playbackRate > 0) {
            this.player.playbackRate = _keyState.playbackRate;
            _keyState.playbackRate = 0;
          }
          _keyState.isKeyDown = false;
          _keyState.isPress = false;
          _keyState.tt = 0;
        },
      },
      {
        key: "handleKeyCode",
        value: function (e, t, isPress) {
          for (let n = Object.keys(this.keyCodeMap), o = 0; o < n.length; o++) {
            const s = this.keyCodeMap[n[o]];
            const r = s.action;
            const a = s.keyCode;
            const l = s.disable;
            const c = s.pressAction;
            const u = s.disablePress;
            if (a === e) {
              if (!l && !(isPress && u)) {
                const h = (isPress && c) || r;
                if (typeof h === "function") {
                  r(t, this.player, isPress);
                } else if (
                  typeof h === "string" &&
                  typeof this[h] === "function"
                ) {
                  this[h](t, this.player, isPress);
                }
                this.emit(M.SHORTCUT, {
                  key: n[o],
                  target: t.target,
                  isPress,
                  ...this.keyCodeMap[n[o]],
                });
              }
              t.preventDefault();
              t.returnValue = false;
              t.stopPropagation();
              break;
            }
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          this.player.root.removeEventListener("keydown", this.onKeydown);
          document.removeEventListener("keydown", this.onBodyKeyDown);
          this.player.root.removeEventListener("keyup", this.onKeyup);
          document.removeEventListener("keyup", this.onBodyKeyUp);
        },
      },
      {
        key: "disable",
        value: function () {
          this.config.disable = true;
        },
      },
      {
        key: "enable",
        value: function () {
          this.config.disable = false;
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "keyboard";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            seekStep: 10,
            checkVisible: false,
            disableBodyTrigger: false,
            disableRootTrigger: false,
            isGlobalTrigger: true,
            keyCodeMap: {},
            disable: false,
            playbackRate: 2,
            isIgnoreUserActive: true,
          };
        },
      },
    ],
  );
})(BasePlugin);
function loadingIcon() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-5 -5 110 110">\n  <path d="M100,50A50,50,0,1,1,50,0" stroke-width="5" stroke="#ddd" stroke-dasharray="236" fill="none"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
class to extends Plugin {
  registerIcons() {
    return {
      loadingIcon,
    };
  }
  afterCreate() {
    this.appendChild("xg-loading-inner", this.icons.loadingIcon);
  }
  render() {
    return '\n    <xg-loading class="xgplayer-loading">\n      <xg-loading-inner></xg-loading-inner>\n    </xg-loading>';
  }
  static get pluginName() {
    return "loading";
  }
  static get defaultConfig() {
    return {
      position: eo.ROOT,
    };
  }
}
const ts = [
  {
    tag: "xg-cache",
    className: "xgplayer-progress-cache",
    styleKey: "cachedColor",
  },
  {
    tag: "xg-played",
    className: "xgplayer-progress-played",
    styleKey: "playedColor",
  },
];
const tr = a(
  function e(t) {
    s(this, e);
    this.fragments = t.fragments || [];
    if (this.fragments.length === 0) {
      this.fragments.push({
        percent: 1,
      });
    }
    this._callBack = t.actionCallback;
    this.fragConfig = {
      fragFocusClass: t.fragFocusClass || "inner-focus-point",
      fragAutoFocus: !!t.fragAutoFocus,
      fragClass: t.fragClass || "",
    };
    this.style = t.style || {
      playedColor: "",
      cachedColor: "",
      progressColor: "",
    };
    this.duration = 0;
    this.cachedIndex = 0;
    this.playedIndex = 0;
    this.focusIndex = -1;
  },
  [
    {
      key: "updateDuration",
      value: function (e) {
        const t = this;
        this.duration = e;
        let i = 0;
        const fragments = this.fragments;
        this.fragments = fragments.map((e) => {
          e.start = parseInt(i, 10);
          e.end = parseInt(i + e.percent * t.duration, 10);
          e.duration = parseInt(e.percent * t.duration, 10);
          i += e.percent * t.duration;
          return e;
        });
      },
    },
    {
      key: "updateProgress",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "played";
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {
                newIndex: 0,
                curIndex: 0,
                millisecond: 0,
              };
        const progressList = this.progressList;
        const fragments = this.fragments;
        if (!(progressList.length < 1)) {
          const o = t.newIndex;
          const s = t.curIndex;
          const r = t.millisecond;
          if (o !== s) {
            progressList.map((t, i) => {
              if (i < o) {
                t[e].style.width = "100%";
              } else if (i > o) {
                t[e].style.width = 0;
              }
            });
          }
          const a = fragments[o];
          const l = r === 0 ? 0 : (r - a.start) / a.duration;
          progressList[o][e].style.width = l < 0 ? 0 : `${100 * l}%`;
        }
      },
    },
    {
      key: "updateFocus",
      value: function (e) {
        if (this.fragConfig.fragAutoFocus && !(this.fragments.length < 2)) {
          if (!e) {
            if (this.focusIndex > -1) {
              this.unHightLight(this.focusIndex);
              const t = {
                index: -1,
                preIndex: this.focusIndex,
                fragment: null,
              };
              if (this._callBack) {
                this._callBack(t);
              }
              this.focusIndex = -1;
            }
            return;
          }
          const index = this.findIndex(1000 * e.currentTime, this.focusIndex);
          if (index >= 0 && index !== this.focusIndex) {
            if (this.focusIndex > -1) {
              this.unHightLight(this.focusIndex);
            }
            this.setHightLight(index);
            const n = {
              index,
              preIndex: this.focusIndex,
              fragment: this.fragments[this.focusIndex],
            };
            this.focusIndex = index;
            if (this._callBack) {
              this._callBack(n);
            }
          }
        }
      },
    },
    {
      key: "update",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                cached: 0,
                played: 0,
              };
        const t = arguments.length > 1 ? arguments[1] : undefined;
        if (!this.duration || parseInt(1000 * t, 10) !== this.duration) {
          if (!t && t !== 0) {
            return;
          }
          this.updateDuration(parseInt(1000 * t, 10));
        }
        const playedIndex = this.playedIndex;
        const cachedIndex = this.cachedIndex;
        if (Util.typeOf(e.played) !== "Undefined") {
          const o = this.findIndex(1000 * e.played, playedIndex);
          if (o < 0) {
            return;
          }
          this.updateProgress("played", {
            newIndex: o,
            curIndex: playedIndex,
            millisecond: parseInt(1000 * e.played, 10),
          });
          this.playedIndex = o;
        }
        if (Util.typeOf(e.cached) !== "Undefined") {
          const s = this.findIndex(1000 * e.cached, cachedIndex);
          if (s < 0) {
            return;
          }
          this.updateProgress("cached", {
            newIndex: s,
            curIndex: cachedIndex,
            millisecond: parseInt(1000 * e.cached, 10),
          });
          this.cachedIndex = s;
        }
      },
    },
    {
      key: "findIndex",
      value: function (e, t) {
        const fragments = this.fragments;
        if (!fragments || fragments.length === 0) {
          return -1;
        }
        if (fragments.length === 1) {
          return 0;
        }
        if (
          t > -1 &&
          t < fragments.length &&
          e > fragments[t].start &&
          e < fragments[t].end
        ) {
          return t;
        }
        if (e > fragments[fragments.length - 1].start) {
          return fragments.length - 1;
        }
        for (let n = 0; n < fragments.length; n++) {
          if (e > fragments[n].start && e <= fragments[n].end) {
            t = n;
            break;
          }
        }
        return t;
      },
    },
    {
      key: "findHightLight",
      value: function () {
        for (let e = this.root.children, t = 0; t < e.length; t++) {
          if (Util.hasClass(e[t], this.fragConfig.fragFocusClass)) {
            return {
              dom: e[t],
              pos: e[t].getBoundingClientRect(),
            };
          }
        }
      },
    },
    {
      key: "findFragment",
      value: function (e) {
        const children = this.root.children;
        if (e < 0 || e >= children.length) {
          return null;
        }
        return {
          dom: children[e],
          pos: children[e].getBoundingClientRect(),
        };
      },
    },
    {
      key: "unHightLight",
      value: function () {
        for (let e = this.root.children, t = 0; t < e.length; t++) {
          Util.removeClass(e[t], this.fragConfig.fragFocusClass);
        }
      },
    },
    {
      key: "setHightLight",
      value: function (e) {
        const children = this.root.children;
        if (e < children.length) {
          Util.addClass(children[e], this.fragConfig.fragFocusClass);
          return {
            dom: children[e],
            pos: children[e].getBoundingClientRect(),
          };
        }
      },
    },
    {
      key: "destroy",
      value: function () {
        this.progressList = null;
        this.fragments = null;
        this.root.innerHTML = "";
      },
    },
    {
      key: "reset",
      value: function (e) {
        const t = this;
        Object.keys(this.fragConfig).forEach((i) => {
          if (e[i] !== undefined) {
            t.fragConfig[i] = e[i];
          }
        });
        if (e.fragments) {
          this.fragments =
            e.fragments.length === 0
              ? [
                  {
                    percent: 1,
                  },
                ]
              : e.fragments;
          this.updateDuration(this.duration);
          this.playedIndex = 0;
          this.cachedIndex = 0;
          if (this.root) {
            for (const i = this.root.children; i.length > 0;) {
              this.root.removeChild(i[0]);
            }
          }
          this.render();
        }
      },
    },
    {
      key: "render",
      value: function () {
        const e = this;
        const progressColor = this.style.progressColor;
        if (!this.root) {
          this.root = Util.createDom("xg-inners", "", {}, "progress-list");
        }
        if (this.fragments) {
          const i = this.fragConfig;
          const n = i.fragClass;
          const o = i.fragFocusClass;
          this.progressList = this.fragments.map((i) => {
            const s = Util.createDom(
              "xg-inner",
              "",
              {
                style: progressColor
                  ? "background:"
                      .concat(progressColor, "; flex: ")
                      .concat(i.percent)
                  : "flex: ".concat(i.percent),
              },
              ""
                .concat(i.isFocus ? o : "", " xgplayer-progress-inner ")
                .concat(n),
            );
            e.root.appendChild(s);
            ts.forEach((t) => {
              s.appendChild(
                Util.createDom(
                  t.tag,
                  "",
                  {
                    style: t.styleKey
                      ? "background: ".concat(e.style[t.styleKey], "; width:0;")
                      : "width:0;",
                  },
                  t.className,
                ),
              );
            });
            return {
              cached: s.children[0],
              played: s.children[1],
            };
          });
        }
        return this.root;
      },
    },
  ],
);
const ta = {
  POINT: "inner-focus-point",
  HIGHLIGHT: "inner-focus-highlight",
};
class tl extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.onMoveOnly = function (e, t) {
      const i_pos = i.pos;
      const i_config = i.config;
      const i_player = i.player;
      let r = t;
      if (e) {
        Util.event(e);
        const a = Util.getEventPos(e, i_player.zoom);
        const l = i_player.rotateDeg === 90 ? a.clientY : a.clientX;
        if (i_pos.moving && Math.abs(i_pos.x - l) < i_config.miniMoveStep) {
          return;
        }
        i_pos.moving = true;
        i_pos.x = l;
        r = i.computeTime(e, l);
      }
      i.triggerCallbacks("dragmove", r, e);
      i._updateInnerFocus(r);
    };
    i.onBodyClick = function (e) {
      if (i.pos.isLocked) {
        i.pos.isLocked = false;
        e.preventDefault();
        e.stopPropagation();
      }
    };
    i._mouseDownHandler = function (e, t) {
      i._state.time = t.currentTime;
      i.updateWidth(t.currentTime, t.seekTime, t.percent, 0);
      i._updateInnerFocus(t);
    };
    i._mouseUpHandler = function (e, t) {
      if (i.pos.moving) {
        i.updateWidth(t.currentTime, t.seekTime, t.percent, 2);
      }
    };
    i._mouseMoveHandler = function (e, t) {
      const i__state = i._state;
      const i_pos = i.pos;
      const i_config = i.config;
      const i_player = i.player;
      if (i__state.time < t.currentTime) {
        t.forward = true;
      } else {
        t.forward = false;
      }
      i__state.time = t.currentTime;
      if (i_pos.isDown && !i_pos.moving) {
        i_pos.moving = true;
        if (i_config.isPauseMoving) {
          i_player.pause();
        }
        i.triggerCallbacks("dragstart", t, e);
        i.emitUserAction("drag", "dragstart", t);
      }
      i.updateWidth(t.currentTime, t.seekTime, t.percent, 1);
      i.triggerCallbacks("dragmove", t, e);
      i._updateInnerFocus(t);
    };
    i.onMouseDown = function (e) {
      const i__state = i._state;
      const i_player = i.player;
      const i_pos = i.pos;
      const i_config = i.config;
      const i_playerConfig = i.playerConfig;
      const a = Util.getEventPos(e, i_player.zoom);
      const l = i_player.rotateDeg === 90 ? a.clientY : a.clientX;
      if (
        !i_player.isMini &&
        !i_config.closeMoveSeek &&
        (i_playerConfig.allowSeekAfterEnded || !i_player.ended)
      ) {
        if (!i_player.duration && !i_player.isPlaying) {
          return void i_player.play();
        }
        e.stopPropagation();
        i.focus();
        if (Util.checkIsFunction(i_playerConfig.disableSwipeHandler)) {
          i_playerConfig.disableSwipeHandler();
        }
        if (Util.checkIsFunction(i_config.onMoveStart)) {
          i_config.onMoveStart();
        }
        Util.event(e);
        i_pos.x = l;
        i_pos.isDown = true;
        i_pos.moving = false;
        i__state.prePlayTime = i_player.currentTime;
        i_player.focus({
          autoHide: false,
        });
        i.isProgressMoving = true;
        Util.addClass(i.progressBtn, "active");
        const c = i.computeTime(e, l);
        c.prePlayTime = i__state.prePlayTime;
        i._mouseDownHandlerHook(e, c);
        if (e.type === "touchstart") {
          i.root.addEventListener("touchmove", i.onMouseMove);
          i.root.addEventListener("touchend", i.onMouseUp);
          i.root.addEventListener("touchcancel", i.onMouseUp);
        } else {
          i.unbind("mousemove", i.onMoveOnly);
          document.addEventListener("mousemove", i.onMouseMove, false);
          document.addEventListener("mouseup", i.onMouseUp, false);
        }
        return true;
      }
    };
    i.onMouseUp = function (e) {
      const i_player = i.player;
      const i_config = i.config;
      const i_pos = i.pos;
      const i_playerConfig = i.playerConfig;
      const i__state = i._state;
      e.stopPropagation();
      e.preventDefault();
      if (Util.checkIsFunction(i_playerConfig.enableSwipeHandler)) {
        i_playerConfig.enableSwipeHandler();
      }
      if (Util.checkIsFunction(i_config.onMoveEnd)) {
        i_config.onMoveEnd();
      }
      Util.event(e);
      Util.removeClass(i.progressBtn, "active");
      const a = i.computeTime(e, i_pos.x);
      a.prePlayTime = i__state.prePlayTime;
      if (i_pos.moving) {
        i.triggerCallbacks("dragend", a, e);
        i.emitUserAction("drag", "dragend", a);
      } else {
        i.triggerCallbacks("click", a, e);
        i.emitUserAction("click", "click", a);
      }
      i._mouseUpHandlerHook(e, a);
      i_pos.moving = false;
      i_pos.isDown = false;
      i_pos.x = 0;
      i_pos.y = 0;
      i_pos.isLocked = true;
      i__state.prePlayTime = 0;
      i__state.time = 0;
      const e_type = e.type;
      if (e_type === "touchend" || e_type === "touchcancel") {
        i.root.removeEventListener("touchmove", i.onMouseMove);
        i.root.removeEventListener("touchend", i.onMouseUp);
        i.root.removeEventListener("touchcancel", i.onMouseUp);
        i.blur();
      } else {
        document.removeEventListener("mousemove", i.onMouseMove, false);
        document.removeEventListener("mouseup", i.onMouseUp, false);
        if (i_pos.isEnter) {
          if (i_playerConfig.isMobileSimulateMode !== "mobile") {
            i.bind("mousemove", i.onMoveOnly);
          }
        } else {
          i.onMouseLeave(e);
        }
      }
      Util.setTimeout(
        i,
        function () {
          i.resetSeekState();
        },
        1,
      );
      i_player.focus();
    };
    i.onMouseMove = function (e) {
      const i__state = i._state;
      const i_pos = i.pos;
      const i_player = i.player;
      const i_config = i.config;
      if (Util.checkTouchSupport()) {
        e.preventDefault();
      }
      Util.event(e);
      const r = Util.getEventPos(e, i_player.zoom);
      const a = i_player.rotateDeg === 90 ? r.clientY : r.clientX;
      const l = Math.abs(i_pos.x - a);
      if (
        (!i_pos.moving || !(l < i_config.miniMoveStep)) &&
        (i_pos.moving || !(l < i_config.miniStartStep))
      ) {
        i_pos.x = a;
        const c = i.computeTime(e, a);
        c.prePlayTime = i__state.prePlayTime;
        i._mouseMoveHandlerHook(e, c);
      }
    };
    i.onMouseOut = function (e) {
      i.triggerCallbacks("mouseout", null, e);
    };
    i.onMouseOver = function (e) {
      i.triggerCallbacks("mouseover", null, e);
    };
    i.onMouseEnter = function (e) {
      const i_player = i.player;
      const i_pos = i.pos;
      if (
        !i_pos.isDown &&
        !i_pos.isEnter &&
        !i_player.isMini &&
        (i_player.config.allowSeekAfterEnded || !i_player.ended)
      ) {
        i_pos.isEnter = true;
        i.bind("mousemove", i.onMoveOnly);
        i.bind("mouseleave", i.onMouseLeave);
        Util.event(e);
        const o = Util.getEventPos(e, i_player.zoom);
        const s = i_player.rotateDeg === 90 ? o.clientY : o.clientX;
        const r = i.computeTime(e, s);
        i.triggerCallbacks("mouseenter", r, e);
        i.focus();
      }
    };
    i.onMouseLeave = function (e) {
      i.triggerCallbacks("mouseleave", null, e);
      i.unlock();
      i._updateInnerFocus(null);
    };
    i.onVideoResize = function () {
      const i_pos = i.pos;
      const t = i_pos.x;
      const e_isDown = i_pos.isDown;
      if (i_pos.isEnter && !e_isDown) {
        const o = i.computeTime(null, t);
        i.onMoveOnly(null, o);
      }
    };
    i.useable = false;
    i.isProgressMoving = false;
    i.__dragCallBacks = [];
    i._state = {
      now: -1,
      direc: 0,
      time: 0,
      prePlayTime: -1,
    };
    i._disableBlur = false;
    return i;
  }
  get offsetDuration() {
    return (
      this.playerConfig.customDuration ||
      this.player.offsetDuration ||
      this.player.duration
    );
  }
  get duration() {
    return this.playerConfig.customDuration || this.player.duration;
  }
  get timeOffset() {
    return this.playerConfig.timeOffset || 0;
  }
  get currentTime() {
    const player = this.player;
    const e_offsetCurrentTime = player.offsetCurrentTime;
    const e_currentTime = player.currentTime;
    if (e_offsetCurrentTime >= 0) {
      return e_offsetCurrentTime;
    }
    return e_currentTime + this.timeOffset;
  }
  changeState() {
    const e =
      !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    this.useable = e;
  }
  show(e) {
    if (this.root) {
      this.root.style.display = "flex";
    }
  }
  _initInner() {
    const e = this;
    let fragments =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!(fragments && fragments.length !== 0)) {
      fragments = [
        {
          percent: 1,
        },
      ];
    }
    const n = {
      fragments,
      ...i,
      actionCallback: function (t) {
        e.emitUserAction("fragment_focus", "fragment_focus", t);
      },
    };
    if (this.innerList) {
      this.innerList.reset(n);
    } else {
      this.innerList = new tr(n);
      this.outer.insertBefore(this.innerList.render(), this.outer.children[0]);
      ["findHightLight", "unHightLight", "setHightLight", "findFragment"].map(
        (t) => {
          e[t] = e.innerList[t].bind(e.innerList);
        },
      );
    }
  }
  _updateInnerFocus(e) {
    if (this.innerList) {
      this.innerList.updateFocus(e);
    }
  }
  afterCreate() {
    const e = this;
    if (!this.config.disable && !this.playerConfig.isLive) {
      this.pos = {
        x: 0,
        y: 0,
        moving: false,
        isDown: false,
        isEnter: false,
        isLocked: false,
      };
      this.outer = this.find("xg-outer");
      const t = this.config;
      const fragFocusClass = t.fragFocusClass;
      const fragAutoFocus = t.fragAutoFocus;
      const fragClass = t.fragClass;
      this._initInner(this.config.fragments, {
        fragFocusClass,
        fragAutoFocus,
        fragClass,
        style: this.playerConfig.commonStyle || {},
      });
      if (Sniffer.device === "mobile") {
        this.config.isDragingSeek = false;
        this.isMobile = true;
      }
      this.progressBtn = this.find(".xgplayer-progress-btn");
      this.on(M.DURATION_CHANGE, function () {
        e.onMouseLeave();
      });
      this.on(M.TIME_UPDATE, function () {
        e.onTimeupdate();
      });
      this.on(M.SEEKED, function () {
        e.onTimeupdate();
        e.onCacheUpdate();
      });
      this.on(M.PROGRESS, function () {
        e.onCacheUpdate();
      });
      this.on(M.ENDED, function () {
        e.onCacheUpdate(true);
        e.onTimeupdate(true);
        e._state.now = 0;
      });
      this.on(M.EMPTIED, function () {
        e.onReset();
      });
      this.on(M.VIDEO_RESIZE, function () {
        e.onVideoResize();
      });
      this.bindDomEvents();
      this.initCustomStyle();
    }
  }
  setConfig(e) {
    const t = this;
    let i = null;
    Object.keys(e).forEach((n) => {
      t.config[n] = e[n];
      if (n === "fragments") {
        i = e[n];
      }
    });
    if (i) {
      this._initInner(i, e);
    }
  }
  initCustomStyle() {
    const sliderBtnStyle = (this.playerConfig || {}).commonStyle.sliderBtnStyle;
    const progressBtn = this.progressBtn;
    if (sliderBtnStyle) {
      if (typeof sliderBtnStyle === "string") {
        progressBtn.style.boxShadow = sliderBtnStyle;
      } else if (C(sliderBtnStyle) === "object") {
        Object.keys(sliderBtnStyle).map((i) => {
          progressBtn.style[i] = sliderBtnStyle[i];
        });
      }
    }
  }
  triggerCallbacks(e, t, i) {
    if (this.__dragCallBacks.length > 0) {
      this.__dragCallBacks.map((n) => {
        if (n && n.handler && n.type === e) {
          try {
            n.handler(t, i);
          } catch (error) {
            console.error(
              "[XGPLAYER][triggerCallbacks] ".concat(n, " error"),
              error,
            );
          }
        }
      });
    }
  }
  addCallBack(e, t) {
    if (t && typeof t === "function") {
      this.__dragCallBacks.push({
        type: e,
        handler: t,
      });
    }
  }
  removeCallBack(e, t) {
    const __dragCallBacks = this.__dragCallBacks;
    let n = -1;
    __dragCallBacks.map((i, o) => {
      if (i && i.type === e && i.handler === t) {
        n = o;
      }
    });
    if (n > -1) {
      __dragCallBacks.splice(n, 1);
    }
  }
  unlock() {
    const player = this.player;
    const pos = this.pos;
    pos.isEnter = false;
    pos.isLocked = false;
    if (!player.isMini) {
      this.unbind("mousemove", this.onMoveOnly);
      if (pos.isDown) {
        return void this.unbind("mouseleave", this.onMouseLeave);
      }
      this.blur();
    }
  }
  bindDomEvents() {
    const config = this.player.config;
    this._mouseDownHandlerHook = this.hook("dragstart", this._mouseDownHandler);
    this._mouseUpHandlerHook = this.hook("dragend", this._mouseUpHandler);
    this._mouseMoveHandlerHook = this.hook("drag", this._mouseMoveHandler);
    if (this.domEventType === "touch" || this.domEventType === "compatible") {
      this.root.addEventListener("touchstart", this.onMouseDown);
    }
    if (this.domEventType === "mouse" || this.domEventType === "compatible") {
      this.bind("mousedown", this.onMouseDown);
      if (config.isMobileSimulateMode !== "mobile") {
        this.bind("mouseenter", this.onMouseEnter);
      }
      this.bind("mouseover", this.onMouseOver);
      this.bind("mouseout", this.onMouseOut);
      this.player.root.addEventListener("click", this.onBodyClick, true);
    }
  }
  focus() {
    this.player.controls.pauseAutoHide();
    Util.addClass(this.root, "active");
  }
  blur() {
    if (!this._disableBlur) {
      this.player.controls.recoverAutoHide();
      Util.removeClass(this.root, "active");
    }
  }
  disableBlur() {
    this._disableBlur = true;
  }
  enableBlur() {
    this._disableBlur = false;
  }
  updateWidth(e, t, i, n) {
    const config = this.config;
    const player = this.player;
    if (!config.isCloseClickSeek || n !== 0) {
      const r = (t =
        t >= player.duration
          ? player.duration - config.endedDiff
          : Number(t).toFixed(1));
      this.updatePercent(i);
      this.updateTime(e);
      if (
        n !== 1 ||
        (config.isDragingSeek && player.config.mediaType !== "audio")
      ) {
        this._state.now = r;
        this._state.direc = r > player.currentTime ? 0 : 1;
        player.seek(r);
      }
    }
  }
  computeTime(e, t) {
    let i;
    let left;
    const player = this.player;
    const s = this.root.getBoundingClientRect();
    const s_width = s.width;
    const s_height = s.height;
    const s_top = s.top;
    const s_left = s.left;
    if (player.rotateDeg === 90) {
      i = s_height;
      left = s_top;
    } else {
      i = s_width;
      left = s_left;
    }
    let offset = t - left;
    let percent = (offset = offset > i ? i : offset < 0 ? 0 : offset) / i;
    const d =
      parseInt(
        (percent = percent < 0 ? 0 : percent > 1 ? 1 : percent) *
          this.offsetDuration *
          1000,
        10,
      ) / 1000;
    const seekTime = Util.getCurrentTimeByOffset(d, player.timeSegments);
    return {
      percent,
      currentTime: d,
      seekTime,
      offset,
      width: i,
      left,
      e,
    };
  }
  updateTime(e) {
    const player = this.player;
    const duration = this.duration;
    if (e > duration) {
      e = duration;
    } else if (e < 0) {
      e = 0;
    }
    const time = player.plugins.time;
    if (time) {
      time.updateTime(e);
    }
  }
  resetSeekState() {
    this.isProgressMoving = false;
    const time = this.player.plugins.time;
    if (time) {
      time.resetActive();
    }
  }
  updatePercent(e, t) {
    this.isProgressMoving = true;
    if (!this.config.disable) {
      e = e > 1 ? 1 : e < 0 ? 0 : e;
      this.progressBtn.style.left = `${100 * e}%`;
      this.innerList.update(
        {
          played: e * this.offsetDuration,
        },
        this.offsetDuration,
      );
      const i = this.player.plugins.miniprogress;
      if (i) {
        i.update(
          {
            played: e * this.offsetDuration,
          },
          this.offsetDuration,
        );
      }
    }
  }
  onTimeupdate(e) {
    const player = this.player;
    const _state = this._state;
    const offsetDuration = this.offsetDuration;
    if (
      (!player.isSeeking || !player.media.seeking) &&
      !this.isProgressMoving &&
      player.hasStart
    ) {
      if (_state.now > -1) {
        const o =
          parseInt(1000 * _state.now, 10) -
          parseInt(1000 * player.currentTime, 10);
        if (
          (_state.direc === 0 && o > 300) ||
          (_state.direc === 1 && o > -300)
        ) {
          _state.now = -1;
          return;
        }
        _state.now = -1;
      }
      let played = this.currentTime;
      played = Util.adjustTimeByDuration(played, offsetDuration, e);
      this.innerList.update(
        {
          played,
        },
        offsetDuration,
      );
      this.progressBtn.style.left = `${(played / offsetDuration) * 100}%`;
    }
  }
  onCacheUpdate(e) {
    const player = this.player;
    const duration = this.duration;
    if (player) {
      let cached = player.bufferedPoint.end;
      cached = Util.adjustTimeByDuration(cached, duration, e);
      this.innerList.update(
        {
          cached,
        },
        duration,
      );
    }
  }
  onReset() {
    this.innerList.update(
      {
        played: 0,
        cached: 0,
      },
      0,
    );
    this.progressBtn.style.left = "0%";
  }
  destroy() {
    const player = this.player;
    this.thumbnailPlugin = null;
    this.innerList.destroy();
    this.innerList = null;
    const domEventType = this.domEventType;
    if (domEventType === "touch" || domEventType === "compatible") {
      this.root.removeEventListener("touchstart", this.onMouseDown);
      this.root.removeEventListener("touchmove", this.onMouseMove);
      this.root.removeEventListener("touchend", this.onMouseUp);
      this.root.removeEventListener("touchcancel", this.onMouseUp);
    }
    if (domEventType === "mouse" || domEventType === "compatible") {
      this.unbind("mousedown", this.onMouseDown);
      this.unbind("mouseenter", this.onMouseEnter);
      this.unbind("mousemove", this.onMoveOnly);
      this.unbind("mouseleave", this.onMouseLeave);
      document.removeEventListener("mousemove", this.onMouseMove, false);
      document.removeEventListener("mouseup", this.onMouseUp, false);
      player.root.removeEventListener("click", this.onBodyClick, true);
    }
  }
  render() {
    if (!this.config.disable && !this.playerConfig.isLive) {
      const e = this.player.controls ? this.player.controls.config.mode : "";
      return `\n    <xg-progress class="xgplayer-progress ${e === "bottom" ? "xgplayer-progress-bottom" : ""}">\n      <xg-outer class="xgplayer-progress-outer">\n        <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n      </xg-outer>\n    </xg-progress>\n    `;
    }
  }
  static get pluginName() {
    return "progress";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_CENTER,
      index: 0,
      disable: false,
      isDragingSeek: true,
      closeMoveSeek: false,
      isPauseMoving: false,
      isCloseClickSeek: false,
      fragments: [
        {
          percent: 1,
        },
      ],
      fragFocusClass: ta.POINT,
      fragClass: "",
      fragAutoFocus: false,
      miniMoveStep: 5,
      miniStartStep: 2,
      onMoveStart: function () {},
      onMoveEnd: function () {},
      endedDiff: 0.2,
    };
  }
  static get FRAGMENT_FOCUS_CLASS() {
    return ta;
  }
}
const tc = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._onMouseenter = function (t) {
      e.emit("icon_mouseenter", {
        pluginName: e.pluginName,
      });
    };
    e._onMouseLeave = function (t) {
      e.emit("icon_mouseleave", {
        pluginName: e.pluginName,
      });
    };
    return e;
  }
  h(t, e);
  return a(t, [
    {
      key: "afterCreate",
      value: function () {
        this.bind("mouseenter", this._onMouseenter);
        this.bind("mouseleave", this._onMouseLeave);
        if (this.config.disable) {
          this.disable();
        }
      },
    },
    {
      key: "destroy",
      value: function () {
        this.unbind("mouseenter", this._onMouseenter);
        this.unbind("mouseleave", this._onMouseLeave);
      },
    },
  ]);
})(Plugin);
const tu = ((e) => {
  function t() {
    s(this, t);
    return o(this, t, arguments);
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          m(t, "afterCreate", this, 3)([]);
          const player = this.player;
          if (!this.config.disable) {
            this.initIcons();
            this.btnClick = this.btnClick.bind(this);
            this.bind(["touchend", "click"], this.btnClick);
            this.on([M.PAUSE, M.ERROR, M.EMPTIED], function () {
              e.animate(player.paused);
            });
            this.on(M.PLAY, function () {
              e.animate(player.paused);
            });
            this.animate(true);
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            play: {
              icon: eF,
              class: "xg-icon-play",
            },
            pause: {
              icon: eH,
              class: "xg-icon-pause",
            },
          };
        },
      },
      {
        key: "btnClick",
        value: function (e) {
          e.preventDefault();
          e.stopPropagation();
          const player = this.player;
          this.emitUserAction(e, "switch_play_pause", {
            prop: "paused",
            from: player.paused,
            to: !player.paused,
          });
          if (player.ended) {
            player.replay();
          } else if (player.paused) {
            player.play();
            this.animate(false);
          } else {
            player.pause();
            this.animate(true);
          }
          return false;
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          this.appendChild(".xgplayer-icon", icons.play);
          this.appendChild(".xgplayer-icon", icons.pause);
        },
      },
      {
        key: "animate",
        value: function (e) {
          if (this.player) {
            const t = this.i18nKeys;
            const i = this.find(".xg-tips");
            if (e) {
              this.setAttr("data-state", "pause");
              if (i) {
                this.changeLangTextKey(i, t.PLAY_TIPS);
              }
            } else {
              this.setAttr("data-state", "play");
              if (i) {
                this.changeLangTextKey(i, t.PAUSE_TIPS);
              }
            }
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(["touchend", "click"], this.btnClick);
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            return '<xg-icon class="xgplayer-play">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(
              eV(this, "PLAY_TIPS", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "play";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_LEFT,
            index: 0,
            disable: false,
          };
        },
      },
    ],
  );
})(tc);
function th() {
  return new DOMParser().parseFromString(
    '<svg width="32px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M11.2374369,14 L17.6187184,7.61871843 C17.9604272,7.27700968 17.9604272,6.72299032 17.6187184,6.38128157 C17.2770097,6.03957281 16.7229903,6.03957281 16.3812816,6.38128157 L9.38128157,13.3812816 C9.03957281,13.7229903 9.03957281,14.2770097 9.38128157,14.6187184 L16.3812816,21.6187184 C16.7229903,21.9604272 17.2770097,21.9604272 17.6187184,21.6187184 C17.9604272,21.2770097 17.9604272,20.7229903 17.6187184,20.3812816 L11.2374369,14 L11.2374369,14 Z" fill="#FFFFFF"></path>\n    </g>\n</svg>',
    "image/svg+xml",
  ).firstChild;
}
class td extends Plugin {
  afterCreate() {
    const e = this;
    this.initIcons();
    this.onClick = function (t) {
      t.preventDefault();
      t.stopPropagation();
      e.config.onClick(t);
    };
    this.bind(["click", "touchend"], this.onClick);
  }
  registerIcons() {
    return {
      screenBack: {
        icon: th,
        class: "xg-fullscreen-back",
      },
    };
  }
  initIcons() {
    const icons = this.icons;
    this.appendChild(this.root, icons.screenBack);
  }
  show() {
    Util.addClass(this.root, "show");
  }
  hide() {
    Util.removeClass(this.root, "show");
  }
  render() {
    return '<xg-icon class="xgplayer-back">\n    </xg-icon>';
  }
  static get pluginName() {
    return "topbackicon";
  }
  static get defaultConfig() {
    return {
      position: eo.ROOT_TOP,
      index: 0,
    };
  }
}
function tf() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
function tg() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="2 -4 28 40">\n  <path fill="#fff" transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const tp = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._onOrientationChange = function (t) {
      if (e.player.fullscreen && e.config.rotateFullscreen) {
        if (window.orientation === 90 || window.orientation === -90) {
          e.player.setRotateDeg(0);
        } else {
          e.player.setRotateDeg(90);
        }
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          m(t, "afterCreate", this, 3)([]);
          const config = this.config;
          const playerConfig = this.playerConfig;
          if (!config.disable) {
            if (config.target) {
              this.playerConfig.fullscreenTarget = this.config.target;
            }
            const o = Util.getFullScreenEl();
            if (playerConfig.fullscreenTarget === o) {
              this.player.getFullscreen().catch((e) => {});
            }
            this.initIcons();
            this.handleFullscreen = this.hook(
              "fullscreenChange",
              this.toggleFullScreen,
              {
                pre: function (t) {
                  const fullscreen = e.player.fullscreen;
                  e.emitUserAction(t, "switch_fullscreen", {
                    prop: "fullscreen",
                    from: fullscreen,
                    to: !fullscreen,
                  });
                },
              },
            );
            this.bind(
              ".xgplayer-fullscreen",
              ["touchend", "click"],
              this.handleFullscreen,
            );
            this.on(M.FULLSCREEN_CHANGE, function (t) {
              const i = e.find(".xg-tips");
              if (i) {
                e.changeLangTextKey(
                  i,
                  t
                    ? e.i18nKeys.EXITFULLSCREEN_TIPS
                    : e.i18nKeys.FULLSCREEN_TIPS,
                );
              }
              e.animate(t);
            });
            if (this.config.needBackIcon) {
              this.topBackIcon = this.player.registerPlugin({
                plugin: td,
                options: {
                  config: {
                    onClick: function (t) {
                      e.handleFullscreen(t);
                    },
                  },
                },
              });
            }
            if (Sniffer.device === "mobile") {
              window.addEventListener(
                "orientationchange",
                this._onOrientationChange,
              );
            }
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            fullscreen: {
              icon: tf,
              class: "xg-get-fullscreen",
            },
            exitFullscreen: {
              icon: tg,
              class: "xg-exit-fullscreen",
            },
          };
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(
            ".xgplayer-icon",
            Sniffer.device === "mobile" ? "touchend" : "click",
            this.handleFullscreen,
          );
          if (Sniffer.device === "mobile") {
            window.removeEventListener(
              "orientationchange",
              this._onOrientationChange,
            );
          }
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          this.appendChild(".xgplayer-icon", icons.fullscreen);
          this.appendChild(".xgplayer-icon", icons.exitFullscreen);
        },
      },
      {
        key: "toggleFullScreen",
        value: function (e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const player = this.player;
          const config = this.config;
          if (
            config.useCssFullscreen === true ||
            (typeof config.useCssFullscreen === "function" &&
              config.useCssFullscreen())
          ) {
            if (player.fullscreen) {
              player.exitCssFullscreen();
            } else {
              player.getCssFullscreen();
            }
            this.animate(player.fullscreen);
          } else if (config.rotateFullscreen) {
            if (player.fullscreen) {
              player.exitRotateFullscreen();
            } else {
              player.getRotateFullscreen();
            }
            this.animate(player.fullscreen);
          } else if (
            config.switchCallback &&
            typeof config.switchCallback === "function"
          ) {
            config.switchCallback(player.fullscreen);
          } else if (player.fullscreen) {
            player.exitFullscreen();
            if (config.useScreenOrientation) {
              this.unlockScreen();
            }
          } else {
            player.getFullscreen().catch((e) => {});
            if (config.useScreenOrientation && player.aspectRatio > 1) {
              this.lockScreen(config.lockOrientationType);
            }
          }
        },
      },
      {
        key: "animate",
        value: function (e) {
          if (e) {
            this.setAttr("data-state", "full");
          } else {
            this.setAttr("data-state", "normal");
          }
          if (this.topBackIcon) {
            if (e) {
              this.topBackIcon.show();
              this.hide();
            } else {
              this.topBackIcon.hide();
              this.show();
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            return '<xg-icon class="xgplayer-fullscreen">\n    <div class="xgplayer-icon">\n    </div>\n    '.concat(
              eV(this, "FULLSCREEN_TIPS", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
      {
        key: "lockScreen",
        value: function (e) {
          try {
            screen.orientation.lock(e).catch((e) => {});
          } catch (e) {}
        },
      },
      {
        key: "unlockScreen",
        value: function () {
          try {
            screen.orientation.unlock().catch((e) => {});
          } catch (e) {}
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "fullscreen";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 0,
            useCssFullscreen: false,
            rotateFullscreen: false,
            useScreenOrientation: false,
            lockOrientationType: "landscape",
            switchCallback: null,
            target: null,
            disable: false,
            needBackIcon: false,
          };
        },
      },
    ],
  );
})(tc);
class tv extends Plugin {
  constructor(e) {
    super(e);
    this.isActiving = false;
  }
  get duration() {
    const player = this.player;
    const e_offsetDuration = player.offsetDuration;
    const e_duration = player.duration;
    return this.playerConfig.customDuration || e_offsetDuration || e_duration;
  }
  get currentTime() {
    const player = this.player;
    const e_offsetCurrentTime = player.offsetCurrentTime;
    const e_currentTime = player.currentTime;
    if (e_offsetCurrentTime >= 0) {
      return e_offsetCurrentTime;
    }
    return e_currentTime;
  }
  get timeOffset() {
    return this.playerConfig.timeOffset || 0;
  }
  afterCreate() {
    const e = this;
    const mode = this.player.controls.config.mode;
    this.mode = mode === "flex" ? "flex" : "normal";
    if (!this.config.disable) {
      if (this.mode === "flex") {
        this.createCenterTime();
        this.root.style.display = "none";
      }
      this.durationDom = this.find(".time-duration");
      this.timeDom = this.find(".time-current");
      this.on([M.DURATION_CHANGE, M.SEEKED, M.TIME_UPDATE], function (t) {
        if (t.eventName === "durationchange") {
          e.isActiving = false;
        }
        e.onTimeUpdate();
      });
      this.on(M.ENDED, function () {
        e.onTimeUpdate(true);
      });
      this.on(M.EMPTIED, function () {
        e.onReset();
      });
    }
  }
  show(e) {
    if (this.mode === "flex") {
      if (this.centerCurDom) {
        this.centerCurDom.style.display = "block";
      }
      if (this.centerDurDom) {
        this.centerDurDom.style.display = "block";
      }
      return;
    }
    this.root.style.display = "block";
  }
  hide() {
    if (this.mode === "flex") {
      if (this.centerCurDom) {
        this.centerCurDom.style.display = "none";
      }
      if (this.centerDurDom) {
        this.centerDurDom.style.display = "none";
      }
      return;
    }
    this.root.style.display = "none";
  }
  onTimeUpdate(e) {
    const player = this.player;
    const config = this.config;
    const duration = this.duration;
    if (!config.disable && !this.isActiving && player.hasStart) {
      let o = this.currentTime + this.timeOffset;
      o = Util.adjustTimeByDuration(o, duration, e);
      if (this.mode === "flex") {
        this.centerCurDom.innerHTML = this.minWidthTime(Util.format(o));
        if (Infinity !== duration && duration > 0) {
          this.centerDurDom.innerHTML = Util.format(duration);
        }
      } else {
        this.timeDom.innerHTML = this.minWidthTime(Util.format(o));
        if (Infinity !== duration && duration > 0) {
          this.durationDom.innerHTML = Util.format(duration);
        }
      }
    }
  }
  onReset() {
    if (this.mode === "flex") {
      this.centerCurDom.innerHTML = this.minWidthTime(Util.format(0));
      this.centerDurDom.innerHTML = Util.format(0);
    } else {
      this.timeDom.innerHTML = this.minWidthTime(Util.format(0));
      this.durationDom.innerHTML = Util.format(0);
    }
  }
  createCenterTime() {
    const player = this.player;
    if (player.controls && player.controls.center) {
      const t = player.controls.center;
      this.centerCurDom = Util.createDom(
        "xg-icon",
        "00:00",
        {},
        "xgplayer-time xg-time-left",
      );
      this.centerDurDom = Util.createDom(
        "xg-icon",
        "00:00",
        {},
        "xgplayer-time xg-time-right",
      );
      if (t.children.length > 0) {
        t.insertBefore(this.centerCurDom, t.children[0]);
      } else {
        t.appendChild(this.centerCurDom);
      }
      t.appendChild(this.centerDurDom);
    }
  }
  afterPlayerInit() {
    const config = this.config;
    if (Infinity === this.duration || this.playerConfig.isLive) {
      Util.hide(this.durationDom);
      Util.hide(this.timeDom);
      Util.hide(this.find(".time-separator"));
      Util.show(this.find(".time-live-tag"));
    } else {
      Util.hide(this.find(".time-live-tag"));
    }
    if (config.hide) {
      this.hide();
    } else {
      this.show();
    }
  }
  changeLiveState(e) {
    if (e) {
      Util.hide(this.durationDom);
      Util.hide(this.timeDom);
      Util.hide(this.find(".time-separator"));
      Util.show(this.find(".time-live-tag"));
    } else {
      Util.hide(this.find(".time-live-tag"));
      Util.show(this.find(".time-separator"));
      Util.show(this.durationDom);
      Util.show(this.timeDom);
    }
  }
  updateTime(e) {
    this.isActiving = true;
    if ((e || e === 0) && !(e > this.duration)) {
      if (this.mode === "flex") {
        this.centerCurDom.innerHTML = this.minWidthTime(Util.format(e));
        return;
      }
      this.timeDom.innerHTML = this.minWidthTime(Util.format(e));
    }
  }
  minWidthTime(e) {
    return e
      .split(":")
      .map((e) => '<span class="time-min-width">'.concat(e, "</span>"))
      .join(":");
  }
  resetActive() {
    const e = this;
    const player = this.player;
    const i = function () {
      e.isActiving = false;
    };
    this.off(M.SEEKED, i);
    if (player.isSeeking && player.media.seeking) {
      this.once(M.SEEKED, i);
    } else {
      this.isActiving = false;
    }
  }
  destroy() {
    const center = this.player.controls.center;
    if (this.centerCurDom) {
      center.removeChild(this.centerCurDom);
    }
    this.centerCurDom = null;
    if (this.centerDurDom) {
      center.removeChild(this.centerDurDom);
    }
    this.centerDurDom = null;
  }
  render() {
    if (!this.config.disable) {
      return '<xg-icon class="xgplayer-time">\n    <span class="time-current">00:00</span>\n    <span class="time-separator">/</span>\n    <span class="time-duration">00:00</span>\n    <span class="time-live-tag">'.concat(
        this.i18n.LIVE_TIP,
        "</span>\n    </xg-icon>",
      );
    }
  }
  static get pluginName() {
    return "time";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_LEFT,
      index: 2,
      disable: false,
    };
  }
}
function tm(e, onRequestVideoFrameCallback) {
  if (e.requestVideoFrameCallback) {
    e.requestVideoFrameCallback(onRequestVideoFrameCallback);
  }
}
export var TimeSegmentsControls = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._onDurationChange = function () {
      e.updateSegments();
    };
    e._onLoadedData = function () {
      const e_player = e.player;
      const t_timeSegments = e_player.timeSegments;
      const t_media = e_player.media;
      const t_currentTime = e_player.currentTime;
      e.handlerCurrentTime(t_currentTime, t_timeSegments, "timeupdate");
      tm(t_media, e.onRequestVideoFrameCallback);
    };
    e._onUrlChange = function () {
      e.player.offsetDuration = -1;
      e.player.offsetCurrentTime = -1;
      e.curIndex = -1;
      e.curPos = null;
    };
    e._onceLoadedData = function () {
      const timeSegments = e.player.timeSegments;
      if (e._checkIfEnabled(timeSegments)) {
        const i = Util.getOffsetCurrentTime(0, timeSegments);
        e.player.offsetCurrentTime = i;
        e.changeIndex(0, timeSegments);
        if (e.curPos.start > 0) {
          e.player.currentTime = e.curPos.start;
        }
      }
    };
    e.onRequestVideoFrameCallback = function () {
      const e_player = e.player;
      const t_currentTime = e_player.currentTime;
      const t_timeSegments = e_player.timeSegments;
      const t_media = e_player.media;
      if (e._checkIfEnabled(t_timeSegments)) {
        e.handlerCurrentTime(
          t_currentTime,
          t_timeSegments,
          "requestVideoFrameCallback",
        );
        tm(t_media, e.onRequestVideoFrameCallback);
      }
    };
    e._onTimeupdate = function () {
      const e_player = e.player;
      const t_currentTime = e_player.currentTime;
      const t_timeSegments = e_player.timeSegments;
      if (e._checkIfEnabled(t_timeSegments)) {
        e.handlerCurrentTime(t_currentTime, t_timeSegments, "timeupdate");
      }
    };
    e._onSeeking = function () {
      const e_player = e.player;
      const t_currentTime = e_player.currentTime;
      const t_timeSegments = e_player.timeSegments;
      if (e._checkIfEnabled(t_timeSegments)) {
        if (t_currentTime < t_timeSegments[0].start) {
          e.player.currentTime = t_timeSegments[0].start;
        } else if (
          t_currentTime > t_timeSegments[t_timeSegments.length - 1].end
        ) {
          e.player.currentTime = t_timeSegments[t_timeSegments.length - 1].end;
        } else {
          const o = Util.getIndexByTime(t_currentTime, t_timeSegments);
          if (o >= 0) {
            const s = e.getSeekTime(
              t_currentTime,
              e.lastCurrentTime,
              o,
              t_timeSegments,
            );
            if (s >= 0) {
              e.player.currentTime = s;
            }
          }
        }
      }
    };
    e._onPlay = function () {
      const e_player = e.player;
      const t_currentTime = e_player.currentTime;
      const t_timeSegments = e_player.timeSegments;
      if (
        e._checkIfEnabled(t_timeSegments) &&
        t_currentTime >= t_timeSegments[t_timeSegments.length - 1].end
      ) {
        e.player.currentTime = t_timeSegments[0].start;
      }
      e.isOffsetEnded = false;
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          this.curIndex = -1;
          this.curPos = null;
          this.lastCurrentTime = 0;
          this.isOffsetEnded = false;
          this.updateSegments();
          this.on(M.DURATION_CHANGE, this._onDurationChange);
          this.on(M.URL_CHANGE, this._onUrlChange);
          this.on(M.LOADED_DATA, this._onLoadedData);
          this.on(M.TIME_UPDATE, this._onTimeupdate);
          this.on(M.SEEKING, this._onSeeking);
          this.on(M.PLAY, this._onPlay);
        },
      },
      {
        key: "setConfig",
        value: function (e) {
          const t = this;
          if (e) {
            const i = Object.keys(e);
            if (!(i.length < 1)) {
              i.forEach((i) => {
                t.config[i] = e[i];
              });
              this.updateSegments();
            }
          }
        },
      },
      {
        key: "updateSegments",
        value: function () {
          const config = this.config;
          const e_disable = config.disable;
          const e_segments = config.segments;
          const player = this.player;
          if (e_disable || !e_segments || e_segments.length === 0) {
            player.timeSegments = [];
            player.offsetDuration = -1;
            player.offsetCurrentTime = -1;
          } else {
            const o = this.formatTimeSegments(e_segments, player.duration);
            player.timeSegments = o;
            player.offsetDuration = o.length > 0 ? o[o.length - 1].duration : 0;
          }
          const player_1 = this.player;
          const s_currentTime = player_1.currentTime;
          const s_timeSegments = player_1.timeSegments;
          if (player_1.duration && !this._checkIfEnabled(s_timeSegments)) {
            this.handlerCurrentTime(s_currentTime, s_timeSegments);
          }
          this.player.emit("timesegments_change", {
            timeSegments: player.timeSegments,
          });
        },
      },
      {
        key: "formatTimeSegments",
        value: function (e, t) {
          const i = [];
          if (e) {
            e.sort((e, t) => e.start - t.start);
            e.forEach((e, n) => {
              const o = {};
              o.start = e.start < 0 ? 0 : e.start;
              o.end = t > 0 && e.end > t ? t : e.end;
              if (!(t > 0) || !(o.start > t)) {
                i.push(o);
                const s = o.end - o.start;
                if (n === 0) {
                  o.offset = e.start;
                  o.cTime = 0;
                  o.segDuration = s;
                  o.duration = s;
                } else {
                  const r = i[n - 1];
                  o.offset = r.offset + (o.start - r.end);
                  o.cTime = r.duration;
                  o.segDuration = s;
                  o.duration = r.duration + s;
                }
              }
            });
            return i;
          }
          return [];
        },
      },
      {
        key: "handlerCurrentTime",
        value: function (e, t, i) {
          const t_length = t.length;
          this.lastCurrentTime = e;
          const o = Util.getIndexByTime(e, t);
          if (o !== this.curIndex) {
            this.changeIndex(o, t);
          }
          const s = Util.getOffsetCurrentTime(e, t, o);
          this.player.offsetCurrentTime = s;
          if (this.curPos) {
            const r = this.curPos;
            const a = r.start;
            const l = r.end;
            if (e < a) {
              this.player.currentTime = a;
            } else if (e > l && o >= t_length - 1) {
              this.triggerCustomEnded(i);
            }
          }
        },
      },
      {
        key: "triggerCustomEnded",
        value: function (e) {
          if (!this.isOffsetEnded) {
            this.isOffsetEnded = true;
            if (this.playerConfig.loop) {
              const t = this.convertVideoTime(0);
              this.player.seek(t);
            } else {
              this.player.pause();
              this.player.emit("ended");
            }
          }
        },
      },
      {
        key: "convertVideoTime",
        value: function (e) {
          const timeSegments = this.player.timeSegments;
          if (this._checkIfEnabled(timeSegments)) {
            return Util.getCurrentTimeByOffset(e, timeSegments);
          }
          return e;
        },
      },
      {
        key: "getSeekTime",
        value: function (e, t, i, n) {
          let o = -1;
          const s = n[i];
          const s_start = s.start;
          const s_end = s.end;
          if (e < n[0].start) {
            return e;
          }
          if (e > n[n.length - 1].end) {
            return n[n.length - 1].end;
          }
          if (e >= s_start && e <= s_end) {
            return o;
          }
          const l = e - t;
          if (l < 0 && e < s_start) {
            return (o =
              i - 1 >= 0
                ? n[i - 1].end + l + (t > s_start ? t - s_start : 0)
                : 0);
          }
          return -1;
        },
      },
      {
        key: "_checkIfEnabled",
        value: function (e) {
          return !(!e || e.length < 1);
        },
      },
      {
        key: "changeIndex",
        value: function (e, t) {
          this.curIndex = e;
          if (e >= 0 && t.length > 0) {
            this.curPos = t[e];
          } else {
            this.curPos = null;
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "TimeSegmentsControls";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            disable: true,
            segments: [],
          };
        },
      },
    ],
  );
})(BasePlugin);
function tk() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
function tC() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
function t_() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 -10 28 40">\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path fill="#fff" transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const tT = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onBarMousedown = function (t) {
      const e_player = e.player;
      const n = e.find(".xgplayer-bar");
      Util.event(t);
      const o = n.getBoundingClientRect();
      const s = Util.getEventPos(t, e_player.zoom);
      const r = o.height - (s.clientY - o.top);
      s.h = r;
      s.barH = o.height;
      e.pos = s;
      if (!(r < -2)) {
        e.updateVolumePos(r, t);
        document.addEventListener("mouseup", e.onBarMouseUp);
        e._d.isStart = true;
        return false;
      }
    };
    e.onBarMouseMove = function (t) {
      const i = e._d;
      if (i.isStart) {
        const n = e.pos;
        const o = e.player;
        t.preventDefault();
        t.stopPropagation();
        Util.event(t);
        const s = Util.getEventPos(t, o.zoom);
        i.isMoving = true;
        const r = n.h - s.clientY + n.clientY;
        if (!(r > n.barH)) {
          e.updateVolumePos(r, t);
        }
      }
    };
    e.onBarMouseUp = function (t) {
      Util.event(t);
      document.removeEventListener("mouseup", e.onBarMouseUp);
      const i = e._d;
      i.isStart = false;
      i.isMoving = false;
    };
    e.onMouseenter = function (t) {
      e._d.isActive = true;
      e.focus();
      e.emit("icon_mouseenter", {
        pluginName: e.pluginName,
      });
    };
    e.onMouseleave = function (t) {
      e._d.isActive = false;
      e.unFocus(100, false, t);
      e.emit("icon_mouseleave", {
        pluginName: e.pluginName,
      });
    };
    e.onVolumeChange = function (t) {
      if (e.player) {
        const i = e.player;
        const n = i.muted;
        const o = i.volume;
        if (!e._d.isMoving) {
          e.find(".xgplayer-drag").style.height =
            n || o === 0 ? "4px" : `${100 * o}%`;
          if (e.config.showValueLabel) {
            e.updateVolumeValue();
          }
        }
        e.animate(n, o);
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "registerIcons",
        value: function () {
          return {
            volumeSmall: {
              icon: tC,
              class: "xg-volume-small",
            },
            volumeLarge: {
              icon: tk,
              class: "xg-volume",
            },
            volumeMuted: {
              icon: t_,
              class: "xg-volume-mute",
            },
          };
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          this._timerId = null;
          this._d = {
            isStart: false,
            isMoving: false,
            isActive: false,
          };
          if (!this.config.disable) {
            this.initIcons();
            const t = this.playerConfig;
            const i = t.commonStyle;
            const n = t.volume;
            if (i.volumeColor) {
              this.find(".xgplayer-drag").style.backgroundColor = i.volumeColor;
            }
            this.changeMutedHandler = this.hook(
              "mutedChange",
              function (t) {
                e.changeMuted(t);
              },
              {
                pre: function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                },
              },
            );
            this._onMouseenterHandler = this.hook(
              "mouseenter",
              this.onMouseenter,
            );
            this._onMouseleaveHandler = this.hook(
              "mouseleave",
              this.onMouseleave,
            );
            if (
              Sniffer.device !== "mobile" &&
              this.playerConfig.isMobileSimulateMode !== "mobile"
            ) {
              this.bind("mouseenter", this._onMouseenterHandler);
              this.bind(["blur", "mouseleave"], this._onMouseleaveHandler);
              this.bind(".xgplayer-slider", "mousedown", this.onBarMousedown);
              this.bind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
              this.bind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
            }
            this.bind(
              ".xgplayer-icon",
              ["touchend", "click"],
              this.changeMutedHandler,
            );
            this.on(M.VOLUME_CHANGE, this.onVolumeChange);
            this.once(M.LOADED_DATA, this.onVolumeChange);
            if (Util.typeOf(n) !== "Number") {
              this.player.volume = this.config.default;
            }
            this.onVolumeChange();
          }
        },
      },
      {
        key: "updateVolumePos",
        value: function (e, t) {
          const player = this.player;
          const n = this.find(".xgplayer-drag");
          const o = this.find(".xgplayer-bar");
          if (o && n) {
            const s = parseInt(
              (e / o.getBoundingClientRect().height) * 1000,
              10,
            );
            n.style.height = "".concat(e, "px");
            const to_1 = Math.max(Math.min(s / 1000, 1), 0);
            const a = {
              volume: {
                from: player.volume,
                to: to_1,
              },
            };
            if (player.muted) {
              a.muted = {
                from: true,
                to: false,
              };
            }
            this.emitUserAction(t, "change_volume", {
              muted: player.muted,
              volume: player.volume,
              props: a,
            });
            player.volume = Math.max(Math.min(s / 1000, 1), 0);
            if (player.muted) {
              player.muted = false;
            }
            if (this.config.showValueLabel) {
              this.updateVolumeValue();
            }
          }
        },
      },
      {
        key: "updateVolumeValue",
        value: function () {
          const player = this.player;
          const e_volume = player.volume;
          const e_muted = player.muted;
          const n = this.find(".xgplayer-value-label");
          const o = Math.max(Math.min(e_volume, 1), 0);
          n.innerText = e_muted ? 0 : Math.round(100 * o);
        },
      },
      {
        key: "focus",
        value: function () {
          this.player.focus({
            autoHide: false,
          });
          if (this._timerId) {
            Util.clearTimeout(this, this._timerId);
            this._timerId = null;
          }
          Util.addClass(this.root, "slide-show");
        },
      },
      {
        key: "unFocus",
        value: function () {
          const e = this;
          const t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 100;
          const i =
            !(arguments.length > 1) ||
            arguments[1] === undefined ||
            arguments[1];
          const n = arguments.length > 2 ? arguments[2] : undefined;
          const o = this._d;
          const player = this.player;
          if (!o.isActive) {
            if (this._timerId) {
              Util.clearTimeout(this, this._timerId);
              this._timerId = null;
            }
            this._timerId = Util.setTimeout(
              this,
              function () {
                if (!o.isActive) {
                  if (i) {
                    player.blur();
                  } else {
                    player.focus();
                  }
                  Util.removeClass(e.root, "slide-show");
                  if (o.isStart) {
                    e.onBarMouseUp(n);
                  }
                }
                e._timerId = null;
              },
              t,
            );
          }
        },
      },
      {
        key: "changeMuted",
        value: function (e) {
          if (e) {
            e.stopPropagation();
          }
          const player = this.player;
          if (this._d.isStart) {
            this.onBarMouseUp(e);
          }
          this.emitUserAction(e, "change_muted", {
            muted: player.muted,
            volume: player.volume,
            props: {
              muted: {
                from: player.muted,
                to: !player.muted,
              },
            },
          });
          if (player.volume > 0) {
            player.muted = !player.muted;
          }
          if (player.volume < 0.01) {
            player.volume = this.config.miniVolume;
          }
        },
      },
      {
        key: "animate",
        value: function (e, t) {
          if (e || t === 0) {
            this.setAttr("data-state", "mute");
          } else if (t < 0.5 && this.icons.volumeSmall) {
            this.setAttr("data-state", "small");
          } else {
            this.setAttr("data-state", "normal");
          }
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          this.appendChild(".xgplayer-icon", icons.volumeSmall);
          this.appendChild(".xgplayer-icon", icons.volumeLarge);
          this.appendChild(".xgplayer-icon", icons.volumeMuted);
        },
      },
      {
        key: "destroy",
        value: function () {
          if (this._timerId) {
            Util.clearTimeout(this, this._timerId);
            this._timerId = null;
          }
          this.unbind("mouseenter", this.onMouseenter);
          this.unbind(["blur", "mouseleave"], this.onMouseleave);
          this.unbind(".xgplayer-slider", "mousedown", this.onBarMousedown);
          this.unbind(".xgplayer-slider", "mousemove", this.onBarMouseMove);
          this.unbind(".xgplayer-slider", "mouseup", this.onBarMouseUp);
          document.removeEventListener("mouseup", this.onBarMouseUp);
          this.unbind(
            ".xgplayer-icon",
            Sniffer.device === "mobile" ? "touchend" : "click",
            this.changeMutedHandler,
          );
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            const e = this.config.default || this.player.volume;
            const t = this.config.showValueLabel;
            return '\n    <xg-icon class="xgplayer-volume" data-state="normal">\n      <div class="xgplayer-icon">\n      </div>\n      <xg-slider class="xgplayer-slider">\n        '
              .concat(
                t ? `<div class="xgplayer-value-label">${100 * e}</div>` : "",
                '\n        <div class="xgplayer-bar">\n          <xg-drag class="xgplayer-drag" style="height: ',
              )
              .concat(
                100 * e,
                '%"></xg-drag>\n        </div>\n      </xg-slider>\n    </xg-icon>',
              );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "volume";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 1,
            disable: false,
            showValueLabel: false,
            default: 0.6,
            miniVolume: 0.2,
          };
        },
      },
    ],
  );
})(Plugin);
function rotate() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-4 -6 40 40" fill="none">\n  <g>\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath>\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const tb = ((e) => {
  function t(e) {
    let i;
    s(this, t);
    i = o(this, t, [e]);
    i.rotateDeg = i.config.rotateDeg || 0;
    return i;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          if (!this.config.disable) {
            m(t, "afterCreate", this, 3)([]);
            this.appendChild(".xgplayer-icon", this.icons.rotate);
            this.onBtnClick = this.onBtnClick.bind(this);
            this.bind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
            this.on(M.VIDEO_RESIZE, function () {
              if (e.rotateDeg && e.config.innerRotate) {
                Util.setTimeout(
                  e,
                  function () {
                    e.updateRotateDeg(e.rotateDeg, e.config.innerRotate);
                  },
                  100,
                );
              }
            });
            const i = this.player.root;
            this.rootWidth = i.style.width || i.offsetWidth || i.clientWidth;
            this.rootHeight =
              i.style.height || i.offsetHeight || i.clientHeight;
            if (this.rotateDeg) {
              this.updateRotateDeg(this.rotateDeg, this.config.innerRotate);
            }
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(".xgplayer-icon", ["click", "touchend"], this.onBtnClick);
        },
      },
      {
        key: "onBtnClick",
        value: function (e) {
          e.preventDefault();
          e.stopPropagation();
          this.emitUserAction(e, "rotate");
          this.rotate(this.config.clockwise, this.config.innerRotate, 1);
        },
      },
      {
        key: "updateRotateDeg",
        value: function (e, t) {
          if (!e) {
            e = 0;
          }
          if (t) {
            this.player.videoRotateDeg = e;
            return;
          }
          const player = this.player;
          const rootWidth = this.rootWidth;
          const rootHeight = this.rootHeight;
          const i_root = player.root;
          const i_innerContainer = player.innerContainer;
          const i_media = player.media;
          const s_offsetWidth = i_root.offsetWidth;
          const c =
            i_innerContainer && t
              ? i_innerContainer.offsetHeight
              : i_root.offsetHeight;
          let u = rootWidth;
          let h = rootHeight;
          let d = 0;
          let f = 0;
          if (e === 0.75 || e === 0.25) {
            u = "".concat(c, "px");
            h = "".concat(s_offsetWidth, "px");
            d = -(c - s_offsetWidth) / 2;
            f = -(s_offsetWidth - c) / 2;
          }
          const g = "translate("
            .concat(d, "px,")
            .concat(f, "px) rotate(")
            .concat(e, "turn)");
          const p = {
            transformOrigin: "center center",
            transform: g,
            webKitTransform: g,
            height: h,
            width: u,
          };
          const v = t ? i_media : i_root;
          const m = t ? player.getPlugin("poster") : null;
          Object.keys(p).map((e) => {
            v.style[e] = p[e];
            if (m && m.root) {
              m.root.style[e] = p[e];
            }
          });
        },
      },
      {
        key: "rotate",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined && arguments[0];
          const t =
            !(arguments.length > 1) ||
            arguments[1] === undefined ||
            arguments[1];
          const i =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 1;
          const player = this.player;
          if (!this.rotateDeg) {
            this.rotateDeg = 0;
          }
          this.rotateDeg = (this.rotateDeg + 1 + 0.25 * (e ? 1 : -1) * i) % 1;
          this.updateRotateDeg(this.rotateDeg, t);
          player.emit(M.ROTATE, 360 * this.rotateDeg);
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            rotate,
          };
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            return '\n    <xg-icon class="xgplayer-rotate">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(
              eV(this, "ROTATE_TIPS", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "rotate";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 6,
            innerRotate: true,
            clockwise: false,
            rotateDeg: 0,
            disable: false,
          };
        },
      },
    ],
  );
})(tc);
function tx() {
  return new DOMParser().parseFromString(
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n</svg>',
    "image/svg+xml",
  ).firstChild;
}
function tw() {
  return new DOMParser().parseFromString(
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M16.5 4.3H3.5C3.38954 4.3 3.3 4.38954 3.3 4.5V15.5C3.3 15.6105 3.38954 15.7 3.5 15.7H8.50005L8.50006 17.5H3.5C2.39543 17.5 1.5 16.6046 1.5 15.5V4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H16.5C17.6046 2.5 18.5 3.39543 18.5 4.5V8.5H16.7V4.5C16.7 4.38954 16.6105 4.3 16.5 4.3ZM12 11.5C11.4477 11.5 11 11.9477 11 12.5L11 16.5C11 17.0523 11.4478 17.5 12 17.5H17.5C18.0523 17.5 18.5 17.0523 18.5 16.5L18.5 12.5C18.5 11.9477 18.0523 11.5 17.5 11.5H12Z"\n    fill="white" />\n  <path fill-rule="evenodd" clip-rule="evenodd"\n    d="M9.4998 7.7C9.77595 7.7 9.9998 7.47614 9.9998 7.2V6.5C9.9998 6.22386 9.77595 6 9.4998 6H5.5402L5.52754 6.00016H5.5C5.22386 6.00016 5 6.22401 5 6.50016V10.4598C5 10.7359 5.22386 10.9598 5.5 10.9598H6.2C6.47614 10.9598 6.7 10.7359 6.7 10.4598V8.83005L8.76983 10.9386C8.96327 11.1357 9.27984 11.1386 9.47691 10.9451L9.97645 10.4548C10.1735 10.2613 10.1764 9.94476 9.983 9.7477L7.97289 7.7H9.4998Z"\n    fill="white" />\n</svg>',
    "image/svg+xml",
  ).firstChild;
}
const tS = "picture-in-picture";
const tI = "inline";
const tP = "fullscreen";
const tA = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.switchPIP = function (t) {
      if (!e.isPIPAvailable()) {
        return false;
      }
      if (t.stopPropagation) {
        t.stopPropagation();
      }
      if (e.isPip) {
        e.exitPIP();
        e.emitUserAction(t, "change_pip", {
          props: "pip",
          from: true,
          to: false,
        });
        e.setAttr("data-state", "normal");
      } else if (e.player.media.readyState === 4) {
        e.requestPIP();
        e.emitUserAction(t, "change_pip", {
          props: "pip",
          from: false,
          to: true,
        });
        e.setAttr("data-state", "pip");
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          if (typeof e.player.config.pip === "boolean") {
            e.config.showIcon = e.player.config.pip;
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          if (this.isPIPAvailable()) {
            m(t, "afterCreate", this, 3)([]);
            this.pMode = tI;
            this.initPipEvents();
            if (this.config.showIcon) {
              this.initIcons();
            }
            this.once(M.COMPLETE, function () {
              if (e.config.showIcon) {
                Util.removeClass(e.find(".xgplayer-icon"), "xg-icon-disable");
                e.bind("click", e.switchPIP);
              }
            });
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            pipIcon: {
              icon: tx,
              class: "xg-get-pip",
            },
            pipIconExit: {
              icon: tw,
              class: "xg-exit-pip",
            },
          };
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          this.appendChild(".xgplayer-icon", icons.pipIcon);
          this.appendChild(".xgplayer-icon", icons.pipIconExit);
        },
      },
      {
        key: "initPipEvents",
        value: function () {
          const e = this;
          const player = this.player;
          this.leavePIPCallback = function () {
            const player_paused = player.paused;
            Util.setTimeout(
              e,
              function () {
                if (!player_paused) {
                  player.mediaPlay();
                }
              },
              0,
            );
            if (!player_paused) {
              player.mediaPlay();
            }
            e.setAttr("data-state", "normal");
            e.pipWindow = null;
            player.emit(M.PIP_CHANGE, false);
          };
          this.enterPIPCallback = function (t) {
            player.emit(M.PIP_CHANGE, true);
            if (t != null && t.pictureInPictureWindow) {
              e.pipWindow = t.pictureInPictureWindow;
            }
            e.setAttr("data-state", "pip");
          };
          this.onWebkitpresentationmodechanged = function (t) {
            const webkitPresentationMode = player.media.webkitPresentationMode;
            if (e.pMode === tP && webkitPresentationMode !== tP) {
              player.onFullscreenChange(null, false);
            }
            e.pMode = webkitPresentationMode;
            if (webkitPresentationMode === tS) {
              e.enterPIPCallback(t);
            } else if (webkitPresentationMode === tI) {
              e.leavePIPCallback(t);
            }
          };
          if (player.media) {
            player.media.addEventListener(
              "enterpictureinpicture",
              this.enterPIPCallback,
            );
            player.media.addEventListener(
              "leavepictureinpicture",
              this.leavePIPCallback,
            );
            if (t.checkWebkitSetPresentationMode(player.media)) {
              player.media.addEventListener(
                "webkitpresentationmodechanged",
                this.onWebkitpresentationmodechanged,
              );
            }
          }
        },
      },
      {
        key: "copyStyleIntoPiPWindow",
        value: function (e) {
          const t = [...document.styleSheets]
            .map((t) => {
              try {
                return [...t.cssRules].map((e) => e.cssText).join("");
              } catch (n) {
                const i = document.createElement("link");
                i.rel = "stylesheet";
                i.type = t.type;
                i.media = t.media;
                i.href = t.href;
                e.document.head.appendChild(i);
              }
              return "";
            })
            .filter(Boolean)
            .join("\n");
          const i = document.createElement("style");
          i.textContent = t;
          e.document.head.appendChild(i);
        },
      },
      {
        key: "requestPIP",
        value: function () {
          const e = this;
          const player = this.player;
          const playerConfig = this.playerConfig;
          const config = this.config;
          if (this.isPIPAvailable() && !this.isPip) {
            try {
              const s = playerConfig.poster;
              if (s) {
                player.media.poster =
                  Util.typeOf(s) === "String" ? s : s.poster;
              }
              if (config.preferDocument && this.isDocPIPAvailable()) {
                const r = {};
                if (config.width && config.height) {
                  r.width = config.width;
                  r.height = config.height;
                } else {
                  const a = player.root.getBoundingClientRect();
                  r.width = a.width;
                  r.height = a.height;
                }
                documentPictureInPicture.requestWindow(r).then((t) => {
                  const config_docPiPNode = config.docPiPNode;
                  const config_docPiPStyle = config.docPiPStyle;
                  e.enterPIPCallback();
                  const r = config_docPiPNode || player.root;
                  const r_parentElement = r.parentElement;
                  const r_previousSibling = r.previousSibling;
                  const r_nextSibling = r.nextSibling;
                  e.copyStyleIntoPiPWindow(t);
                  const u = document.createElement("style");
                  u.append("body{padding:0; margin:0;}");
                  if (config_docPiPStyle) {
                    let h = "";
                    if (typeof config_docPiPStyle === "string") {
                      h = config_docPiPStyle;
                    } else if (typeof config_docPiPStyle === "function") {
                      h = config_docPiPStyle.call(config);
                    }
                    if (h) {
                      u.append(h);
                    }
                  } else {
                    if (r === player.root) {
                      u.append(
                        "\n              .xgplayer{width: 100%!important; height: 100%!important;}\n            ",
                      );
                    }
                  }
                  t.document.head.append(u);
                  t.document.body.append(r);
                  t.addEventListener(
                    "pagehide",
                    function (t) {
                      if (r_parentElement) {
                        if (r_nextSibling) {
                          r_parentElement.insertBefore(r, r_nextSibling);
                        } else if (r_previousSibling) {
                          r_parentElement.insertBefore(
                            r,
                            r_previousSibling.nextSibling,
                          );
                        } else {
                          r_parentElement.appendChild(r);
                        }
                      }
                      e.leavePIPCallback();
                    },
                    {
                      once: true,
                    },
                  );
                });
              } else {
                if (t.checkWebkitSetPresentationMode(player.media)) {
                  player.media.webkitSetPresentationMode("picture-in-picture");
                } else {
                  player.media.requestPictureInPicture();
                }
              }
              return true;
            } catch (error) {
              console.error("requestPiP", error);
              return false;
            }
          }
        },
      },
      {
        key: "exitPIP",
        value: function () {
          let e;
          const player = this.player;
          try {
            if (this.isPIPAvailable() && this.isPip) {
              if (
                this.isDocPIPAvailable() &&
                (e = documentPictureInPicture) != null &&
                e.window
              ) {
                documentPictureInPicture.window.close();
              } else if (t.checkWebkitSetPresentationMode(player.media)) {
                player.media.webkitSetPresentationMode("inline");
              } else {
                document.exitPictureInPicture();
              }
            }
            return true;
          } catch (error) {
            console.error("exitPIP", error);
            return false;
          }
        },
      },
      {
        key: "isPip",
        get: function () {
          let e;
          const player = this.player;
          return (
            !!(
              this.isDocPIPAvailable() &&
              (e = documentPictureInPicture) != null &&
              e.window
            ) ||
            (document.pictureInPictureElement &&
              document.pictureInPictureElement === player.media) ||
            player.media.webkitPresentationMode === tS
          );
        },
      },
      {
        key: "isPIPAvailable",
        value: function () {
          const media = this.player.media;
          return (
            ((Util.typeOf(document.pictureInPictureEnabled) !== "Boolean" ||
              document.pictureInPictureEnabled) &&
              ((Util.typeOf(media.disablePictureInPicture) === "Boolean" &&
                !media.disablePictureInPicture) ||
                (media.webkitSupportsPresentationMode &&
                  Util.typeOf(media.webkitSetPresentationMode) ===
                    "Function"))) ||
            this.isDocPIPAvailable()
          );
        },
      },
      {
        key: "isDocPIPAvailable",
        value: function () {
          return (
            "documentPictureInPicture" in window &&
            /^(https|file)/.test(location.protocol)
          );
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          const player = this.player;
          player.media.removeEventListener(
            "enterpictureinpicture",
            this.enterPIPCallback,
          );
          player.media.removeEventListener(
            "leavepictureinpicture",
            this.leavePIPCallback,
          );
          if (t.checkWebkitSetPresentationMode(player.media)) {
            player.media.removeEventListener(
              "webkitpresentationmodechanged",
              this.onWebkitpresentationmodechanged,
            );
          }
          this.exitPIP();
          this.unbind("click", this.btnClick);
        },
      },
      {
        key: "render",
        value: function () {
          if (this.config.showIcon && this.isPIPAvailable()) {
            return '<xg-icon class="xgplayer-pip">\n      <div class="xgplayer-icon xg-icon-disable">\n      </div>\n      '.concat(
              eV(this, "PIP", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "pip";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 6,
            showIcon: false,
            preferDocument: false,
            width: undefined,
            height: undefined,
            docPiPNode: undefined,
            docPiPStyle: undefined,
          };
        },
      },
      {
        key: "checkWebkitSetPresentationMode",
        value: function (e) {
          return typeof e.webkitSetPresentationMode === "function";
        },
      },
    ],
  );
})(tc);
function playNext() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="10 0 24 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
class tR extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.playNext = function (e) {
      const i_player = i.player;
      e.preventDefault();
      e.stopPropagation();
      if (i.idx + 1 < i.config.urlList.length) {
        i.idx++;
        i.nextHandler(i.config.urlList[i.idx], i.idx);
        i_player.emit(M.PLAYNEXT, i.idx + 1);
      } else {
        i.nextHandler();
        i_player.emit(M.PLAYNEXT);
      }
    };
    i.idx = -1;
    return i;
  }
  afterCreate() {
    if (this.config.urlList && this.config.urlList.length !== 0) {
      this.appendChild(".xgplayer-icon", this.icons.playNext);
      this.initEvents();
    }
  }
  registerIcons() {
    return {
      playNext,
    };
  }
  initEvents() {
    this.nextHandler = this.hook("nextClick", this.changeSrc);
    const e = Sniffer.device === "mobile" ? "touchend" : "click";
    this.bind(e, this.playNext);
    this.show();
  }
  changeSrc(e) {
    const player = this.player;
    if (e) {
      player.pause();
      player.currentTime = 0;
      if (player.switchURL) {
        player.switchURL(e);
      } else {
        player.src = e;
      }
      player.config.url = e;
      player.play();
    }
  }
  destroy() {
    this.unbind(["touchend", "click"], this.playNext);
  }
  render() {
    if (this.config.urlList && this.config.urlList.length !== 0) {
      return '\n     <xg-icon class="xgplayer-playnext">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(
        eV(this, "PLAYNEXT_TIPS", this.playerConfig.isHideTips),
        "\n     </xg-icon>\n    ",
      );
    }
  }
  static get pluginName() {
    return "playNext";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_LEFT,
      index: 1,
      url: null,
      urlList: [],
    };
  }
}
function download() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const tM = ((e) => {
  function t(e) {
    let i;
    s(this, t);
    i = o(this, t, [e]);
    i.download = function (e) {
      if (!i.isLock) {
        i.emitUserAction(e, "download");
        const t = i.playerConfig.url;
        let n = "";
        if (Util.typeOf(t) === "String") {
          n = t;
        } else if (Util.typeOf(t) === "Array" && t.length > 0) {
          n = t[0].src;
        }
        const o = i.getAbsoluteURL(n);
        tD(o);
        i.isLock = true;
        i.timer = window.setTimeout(function () {
          i.isLock = false;
          window.clearTimeout(i.timer);
          i.timer = null;
        }, 300);
      }
    };
    i.timer = null;
    i.isLock = false;
    return i;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          m(t, "afterCreate", this, 3)([]);
          if (!this.config.disable) {
            this.appendChild(".xgplayer-icon", this.icons.download);
            this._handler = this.hook("click", this.download, {
              pre: function (e) {
                e.preventDefault();
                e.stopPropagation();
              },
            });
            this.bind(["click", "touchend"], this._handler);
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            download,
          };
        },
      },
      {
        key: "getAbsoluteURL",
        value: function (e) {
          if (!e.match(/^https?:\/\//)) {
            const t = document.createElement("div");
            t.innerHTML = '<a href="'.concat(e, '">x</a>');
            e = t.firstChild.href;
          }
          return e;
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(["click", "touchend"], this.download);
          window.clearTimeout(this.timer);
          this.timer = null;
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            return '<xg-icon class="xgplayer-download">\n   <div class="xgplayer-icon">\n   </div>\n   '.concat(
              eV(this, "DOWNLOAD_TIPS", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "download";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 3,
            disable: true,
          };
        },
      },
    ],
  );
})(tc);
const tF = ((e) => {
  function t() {
    s(this, t);
    return o(this, t, arguments);
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          if (typeof e.player.config.screenShot === "boolean") {
            e.config.disable = !e.player.config.screenShot;
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          m(t, "afterCreate", this, 3)([]);
          this.appendChild(".xgplayer-icon", this.icons.screenshotIcon);
          const config = this.config;
          this.initSize = function (t) {
            if (config.fitVideo) {
              config.width = t.vWidth;
              config.height = t.vHeight;
            }
          };
          this.once(M.VIDEO_RESIZE, this.initSize);
        },
      },
      {
        key: "onPluginsReady",
        value: function () {
          this.show();
          this.onClickBtn = this.onClickBtn.bind(this);
          this.bind(["click", "touchend"], this.onClickBtn);
        },
      },
      {
        key: "saveScreenShot",
        value: function (e, t) {
          let i;
          const n = document.createElement("a");
          n.href = e;
          n.download = t;
          try {
            if (typeof MouseEvent !== "undefined") {
              i = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              });
            } else {
              (i = document.createEvent("MouseEvents")).initMouseEvent(
                "click",
                true,
                false,
                window,
                0,
                0,
                0,
                0,
                0,
                false,
                false,
                false,
                false,
                0,
                null,
              );
            }
          } catch (error) {
            console.error("MouseEvent unsupported", error);
          }
          if (i) {
            n.dispatchEvent(i);
          }
        },
      },
      {
        key: "createCanvas",
        value: function (e, t) {
          const i = document.createElement("canvas");
          const n = i.getContext("2d");
          this.canvasCtx = n;
          this.canvas = i;
          i.width = e || this.config.width;
          i.height = t || this.config.height;
          n.imageSmoothingEnabled = true;
          if (n.imageSmoothingEnabled) {
            n.imageSmoothingQuality = "high";
          }
        },
      },
      {
        key: "onClickBtn",
        value: function (e) {
          const t = this;
          e.preventDefault();
          e.stopPropagation();
          this.emitUserAction(e, "shot");
          const config = this.config;
          this.shot(config.width, config.height).then((e) => {
            t.emit(M.SCREEN_SHOT, e);
            if (config.saveImg) {
              t.saveScreenShot(e, config.name + config.format);
            }
          });
        },
      },
      {
        key: "shot",
        value: function (e, t) {
          const i = this;
          const n =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {
                  quality: 0.92,
                  type: "image/png",
                };
          const config = this.config;
          const player = this.player;
          const r = n.quality || config.quality;
          const a = n.type || config.type;
          return new Promise((resolve, reject) => {
            let c = null;
            if (player.media.canvas) {
              c = player.media.canvas;
            } else {
              if (i.canvas) {
                i.canvas.width = e || config.width;
                i.canvas.height = t || config.height;
              } else {
                i.createCanvas(e, t);
              }
              c = i.canvas;
              let u;
              let h;
              let d;
              let f;
              const g = i.canvasCtx;
              const p = player.media.videoWidth / player.media.videoHeight;
              const v = c.width / c.height;
              const m = player.media.videoWidth;
              const y = player.media.videoHeight;
              if (p > v) {
                d = c.width;
                f = c.width / p;
                u = 0;
                h = Math.round((c.height - f) / 2);
              } else if (p === v) {
                d = c.width;
                f = c.height;
                u = 0;
                h = 0;
              } else if (p < v) {
                d = c.height * p;
                f = c.height;
                u = Math.round((c.width - d) / 2);
                h = 0;
              }
              g.drawImage(player.media, 0, 0, m, y, u, h, d, f);
            }
            let k = c.toDataURL(a, r).replace(a, "image/octet-stream");
            resolve(
              (k = k.replace(
                /^data:image\/[^;]+/,
                "data:application/octet-stream",
              )),
            );
          });
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            screenshotIcon: null,
          };
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(["click", "touchend"], this.onClickBtn);
          this.off(M.VIDEO_RESIZE, this.initSize);
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            const e = this.icons.screenshotIcon
              ? "xgplayer-icon"
              : "xgplayer-icon btn-text";
            const t = "SCREENSHOT";
            return '\n      <xg-icon class="xgplayer-shot">\n      <div class="'
              .concat(e, '">\n      ')
              .concat(
                this.icons.screenshotIcon
                  ? ""
                  : '<span lang-key="'
                      .concat(this.i18nKeys[t], '">')
                      .concat(this.i18n[t], "</span>"),
                "\n      </div>\n    </xg-icon>",
              );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "screenShot";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 5,
            quality: 0.92,
            type: "image/png",
            format: ".png",
            width: 600,
            height: 337,
            saveImg: true,
            fitVideo: true,
            disable: false,
            name: "screenshot",
          };
        },
      },
    ],
  );
})(tc);
const tH = a(
  function e(t) {
    s(this, e);
    this.config = t.config;
    this.parent = t.root;
    this.root = Util.createDom(
      "ul",
      "",
      {},
      "xg-options-list xg-list-slide-scroll ".concat(this.config.className),
    );
    t.root.appendChild(this.root);
    const maxHeight = this.config.maxHeight;
    if (maxHeight) {
      this.setStyle({
        maxHeight,
      });
    }
    this.onItemClick = this.onItemClick.bind(this);
    this.renderItemList();
    const n = this.config.domEventType === "touch" ? "touchend" : "click";
    this._delegates = Plugin.delegate.call(
      this,
      this.root,
      "li",
      n,
      this.onItemClick,
    );
  },
  [
    {
      key: "renderItemList",
      value: function (e) {
        const t = this;
        const config = this.config;
        const root = this.root;
        if (e) {
          config.data = e;
        } else {
          e = config.data;
        }
        if (config.style) {
          Object.keys(config.style).map((e) => {
            root.style[e] = config[e];
          });
        }
        if (e.length > 0) {
          this.attrKeys = Object.keys(e[0]);
        }
        this.root.innerHTML = "";
        e.map((e, i) => {
          const n = e.selected ? "option-item selected" : "option-item";
          e["data-index"] = i;
          t.root.appendChild(
            Util.createDom("li", "<span>".concat(e.showText, "</span>"), e, n),
          );
        });
      },
    },
    {
      key: "onItemClick",
      value: function (e) {
        if (!e.delegateTarget) {
          e.delegateTarget = e.target;
        }
        const e_delegateTarget = e.delegateTarget;
        if (e_delegateTarget && Util.hasClass(e_delegateTarget, "selected")) {
          return false;
        }
        const i =
          typeof this.config.onItemClick === "function"
            ? this.config.onItemClick
            : null;
        const n = this.root.querySelector(".selected");
        Util.addClass(e_delegateTarget, "selected");
        if (n) {
          Util.removeClass(n, "selected");
        }
        i(e, {
          from: n ? this.getAttrObj(n, this.attrKeys) : null,
          to: this.getAttrObj(e_delegateTarget, this.attrKeys),
        });
      },
    },
    {
      key: "getAttrObj",
      value: function (e, t) {
        if (!e || !t) {
          return {};
        }
        const i = {};
        t.map((t) => {
          i[t] = e.getAttribute(t);
        });
        const n = e.getAttribute("data-index");
        if (n) {
          i.index = Number(n);
        }
        return i;
      },
    },
    {
      key: "show",
      value: function () {
        Util.removeClass(this.root, "hide");
        Util.addClass(this.root, "active");
      },
    },
    {
      key: "hide",
      value: function () {
        Util.removeClass(this.root, "active");
        Util.addClass(this.root, "hide");
      },
    },
    {
      key: "setStyle",
      value: function (e) {
        const t = this;
        Object.keys(e).forEach((i) => {
          t.root.style[i] = e[i];
        });
      },
    },
    {
      key: "destroy",
      value: function () {
        if (this._delegates) {
          this._delegates.map((e) => {
            if (e.destroy) {
              e.destroy();
            }
          });
          this._delegates = null;
        }
        this.root.innerHTML = null;
        this.parent.removeChild(this.root);
        this.root = null;
      },
    },
  ],
);
const tU = "side";
const tB = "middle";
const tj = "click";
let tG = Sniffer.device === "mobile";
class tV extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.onEnter = function (e) {
      e.stopPropagation();
      i.emit("icon_mouseenter", {
        pluginName: i.pluginName,
      });
      i.switchActiveState(e);
    };
    i.switchActiveState = function (e) {
      e.stopPropagation();
      if (i.config.toggleMode === tj) {
        i.toggle(!i.isActive);
      } else {
        i.toggle(true);
      }
    };
    i.onLeave = function (e) {
      e.stopPropagation();
      i.emit("icon_mouseleave", {
        pluginName: i.pluginName,
      });
      if (i.config.listType !== tU && i.isActive) {
        i.toggle(false);
      }
    };
    i.onListEnter = function (e) {
      i.enterType = 2;
    };
    i.onListLeave = function (e) {
      i.enterType = 0;
      if (i.isActive) {
        i.toggle(false);
      }
    };
    i.isIcons = false;
    i.isActive = false;
    i.curValue = null;
    i.curIndex = 0;
    return i;
  }
  updateLang(e) {
    this.renderItemList(this.config.list, this.curIndex);
  }
  afterCreate() {
    const e = this;
    const config = this.config;
    this.initIcons();
    if (
      (tG = tG || this.domEventType === "touch") &&
      Sniffer.device === "mobile" &&
      config.listType === "default"
    ) {
      config.listType = tU;
    }
    if (config.hidePortrait) {
      Util.addClass(this.root, "portrait");
    }
    this.on([M.VIDEO_RESIZE, M.FULLSCREEN_CHANGE], function () {
      e._resizeList();
    });
    this.once(M.CANPLAY, function () {
      if (config.list && config.list.length > 0) {
        e.renderItemList(config.list);
        e.show();
      }
    });
    if (tG) {
      this.on(M.PLAYER_FOCUS, function () {
        if (e.isActive) {
          if (e.optionsList) {
            e.optionsList.hide();
          }
          e.isActive = false;
        }
      });
    }
    if (tG) {
      config.toggleMode = tj;
      this.activeEvent = "touchend";
    } else {
      this.activeEvent = config.toggleMode === tj ? "click" : "mouseenter";
    }
    if (config.toggleMode === tj) {
      this.bind(this.activeEvent, this.switchActiveState);
    } else {
      this.bind(this.activeEvent, this.onEnter);
      this.bind("mouseleave", this.onLeave);
    }
    if (this.isIcons) {
      this.bind("click", this.onIconClick);
    }
  }
  initIcons() {
    const e = this;
    const icons = this.icons;
    const i = Object.keys(icons);
    let n = false;
    if (i.length > 0) {
      i.forEach((i) => {
        e.appendChild(".xgplayer-icon", icons[i]);
        if (!n) {
          n = icons[i];
        }
      });
      this.isIcons = n;
    }
    if (!n) {
      this.appendChild(
        ".xgplayer-icon",
        Util.createDom("span", "", {}, "icon-text"),
      );
      Util.addClass(this.find(".xgplayer-icon"), "btn-text");
    }
  }
  show(e) {
    if (this.config.list && !(this.config.list.length < 2)) {
      Util.addClass(this.root, "show");
    }
  }
  hide() {
    Util.removeClass(this.root, "show");
  }
  getTextByLang(e, t, i) {
    if (e === undefined) {
      return "";
    }
    const list = this.config.list;
    if (!i) {
      i = this.player.lang;
    }
    t = !t || Util.isUndefined(e[t]) ? "text" : t;
    if (typeof e === "number") {
      e = list[e];
    }
    try {
      if (C(e[t]) === "object") {
        return e[t][i] || e[t].en;
      }
      return e[t];
    } catch (error) {
      console.warn(error);
      return "";
    }
  }
  toggle(e) {
    if (e !== this.isActive && !this.config.disable) {
      const t = this.player.controls;
      const i = this.config.listType;
      if (e) {
        if (i === tU) {
          t.blur();
        } else {
          t.focus();
        }
        if (this.optionsList) {
          this.optionsList.show();
        }
      } else {
        if (i === tU) {
          t.focus();
        } else {
          t.focusAwhile();
        }
        if (this.optionsList) {
          this.optionsList.hide();
        }
      }
      this.isActive = e;
    }
  }
  onItemClick(e, t) {
    e.stopPropagation();
    const config = this.config;
    const i_listType = config.listType;
    const i_list = config.list;
    this.curIndex = t.to.index;
    this.curItem = i_list[this.curIndex];
    this.changeCurrentText();
    if (this.config.isItemClickHide || tG || i_listType === tU) {
      this.toggle(false);
    }
  }
  onIconClick(e) {}
  changeCurrentText() {
    if (!this.isIcons) {
      const e = this.config.list;
      const t = this.curIndex < e.length ? this.curIndex : 0;
      const i = e[t];
      if (i) {
        this.find(".icon-text").innerHTML = this.getTextByLang(i, "iconText");
      }
    }
  }
  renderItemList(e, t) {
    let i;
    let n;
    const o = this;
    const config = this.config;
    const optionsList = this.optionsList;
    const player = this.player;
    if (typeof t === "number") {
      this.curIndex = t;
      this.curItem = config.list[t];
    }
    if (optionsList) {
      optionsList.renderItemList(e);
      this.changeCurrentText();
      return;
    }
    const l = {
      config: {
        data: e || [],
        className:
          ((i = config.listType),
          (n = config.position),
          i === tU
            ? n === eo.CONTROLS_LEFT
              ? "xg-side-list xg-left-side"
              : "xg-side-list xg-right-side"
            : ""),
        onItemClick: function (e, t) {
          o.onItemClick(e, t);
        },
        domEventType: tG ? "touch" : "mouse",
      },
      root:
        config.listType === tU
          ? player.innerContainer || player.root
          : this.root,
    };
    if (this.config.isShowIcon) {
      const c = this.player.root.getBoundingClientRect().height;
      const u = config.listType === tB ? c - 50 : c;
      if (u && config.heightLimit) {
        l.config.maxHeight = "".concat(u, "px");
      }
      this.optionsList = new tH(l);
      this.changeCurrentText();
      this.show();
    }
    this._resizeList();
  }
  _resizeList() {
    if (this.config.heightLimit) {
      const e = this.player.root.getBoundingClientRect().height;
      const t = this.config.listType === tB ? e - 50 : e;
      if (this.optionsList) {
        this.optionsList.setStyle({
          maxHeight: "".concat(t, "px"),
        });
      }
    }
  }
  destroy() {
    if (this.config.toggleMode === tj) {
      this.unbind(this.activeEvent, this.switchActiveState);
    } else {
      this.unbind(this.activeEvent, this.onEnter);
      this.unbind("mouseleave", this.onLeave);
    }
    if (this.isIcons) {
      this.unbind("click", this.onIconClick);
    }
    if (this.optionsList) {
      this.optionsList.destroy();
      this.optionsList = null;
    }
  }
  render() {
    if (this.config.isShowIcon) {
      return '<xg-icon class="xg-options-icon '.concat(
        this.config.className || "",
        '">\n    <div class="xgplayer-icon">\n    </div>\n   </xg-icon>',
      );
    }
  }
  static get pluginName() {
    return "optionsIcon";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_RIGHT,
      index: 100,
      list: [],
      listType: "default",
      listStyle: {},
      hidePortrait: true,
      isShowIcon: false,
      isItemClickHide: true,
      toggleMode: "hover",
      heightLimit: true,
    };
  }
}
const tW = ((e) => {
  function t(e) {
    let i;
    s(this, t);
    i = o(this, t, [e]);
    i.curTime = 0;
    i.isPaused = true;
    return i;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          const list = e.config.list;
          if (Array.isArray(list) && list.length > 0) {
            e.config.list = list.map((e) => {
              if (!e.text && e.name) {
                e.text = e.name;
              }
              if (!e.text) {
                e.text = e.definition;
              }
              return e;
            });
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          m(t, "afterCreate", this, 3)([]);
          this.on("resourceReady", function (t) {
            e.changeDefinitionList(t);
          });
          this.on(M.DEFINITION_CHANGE, function (t) {
            e.renderItemList(e.config.list, t.to);
          });
          if (this.player.definitionList.length < 2) {
            this.hide();
          }
        },
      },
      {
        key: "show",
        value: function (e) {
          if (this.config.list && !(this.config.list.length < 2)) {
            Util.addClass(this.root, "show");
          }
        },
      },
      {
        key: "initDefinition",
        value: function () {
          const config = this.config;
          const e_list = config.list;
          const e_defaultDefinition = config.defaultDefinition;
          if (e_list.length > 0) {
            let n = null;
            e_list.map((e) => {
              if (e.definition === e_defaultDefinition) {
                n = e;
              }
            });
            if (!n) {
              n = e_list[0];
            }
            this.changeDefinition(n);
          }
        },
      },
      {
        key: "renderItemList",
        value: function () {
          const e = this;
          const i =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.config.list || [];
          const n = arguments.length > 1 ? arguments[1] : undefined;
          const o =
            n && n.definition ? n.definition : this.config.defaultDefinition;
          if (n) {
            i.forEach((e) => {
              e.selected = false;
            });
          }
          let s = 0;
          const r = i.map((t, i) => {
            const n = {
              ...t,
              showText: e.getTextByLang(t) || t.definition,
              selected: false,
            };
            if (t.selected || (t.definition && t.definition == o)) {
              n.selected = true;
              s = i;
            }
            return n;
          });
          m(t, "renderItemList", this, 3)([r, s]);
        },
      },
      {
        key: "changeDefinitionList",
        value: function (e) {
          if (Array.isArray(e)) {
            this.config.list = e.map((e) => {
              if (!e.text && e.name) {
                e.text = e.name;
              }
              if (!e.text) {
                e.text = e.definition;
              }
              return e;
            });
            this.renderItemList();
            if (this.config.list.length < 2) {
              this.hide();
            } else {
              this.show();
            }
          }
        },
      },
      {
        key: "changeDefinition",
        value: function (e, t) {
          this.player.changeDefinition(e, t);
        },
      },
      {
        key: "onItemClick",
        value: function (e, i) {
          const definitionList = this.player.definitionList;
          m(t, "onItemClick", this, 3)(arguments);
          this.emitUserAction(e, "change_definition", {
            from: i.from,
            to: i.to,
          });
          for (let o = 0; o < definitionList.length; o++) {
            if (i.to && definitionList[o].definition === i.to.definition) {
              i.to.url = definitionList[o].url;
            }
            if (i.from && definitionList[o].definition === i.from.definition) {
              i.from.url = definitionList[o].url;
            }
          }
          this.player.changeDefinition(i.to, i.from);
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "definition";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            ...tV.defaultConfig,
            position: eo.CONTROLS_RIGHT,
            index: 3,
            list: [],
            defaultDefinition: "",
            disable: false,
            hidePortrait: false,
            className: "xgplayer-definition",
            isShowIcon: true,
          };
        },
      },
    ],
  );
})(tV);
const tY = ((e) => {
  function t(e) {
    let i;
    s(this, t);
    i = o(this, t, [e]);
    i.curRate = 1;
    return i;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          const playbackRate = e.player.config.playbackRate;
          const i = playbackRate
            ? Array.isArray(playbackRate)
              ? playbackRate
              : e.config.list
            : [];
          if (Array.isArray(i)) {
            e.config.list = i.map((rate) => {
              if (typeof rate === "number") {
                rate = {
                  rate,
                  text: "".concat(rate, "x"),
                };
              } else if (!rate.text && rate.rate) {
                rate.text = "".concat(rate.rate, "x");
              }
              return rate;
            });
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          m(t, "afterCreate", this, 3)([]);
          this.on(M.RATE_CHANGE, function () {
            if (e.curValue !== e.player.playbackRate) {
              e.renderItemList();
            }
          });
          this.renderItemList();
        },
      },
      {
        key: "show",
        value: function (e) {
          if (this.config.list && this.config.list.length !== 0) {
            m(t, "show", this, 3)([]);
          }
        },
      },
      {
        key: "onItemClick",
        value: function (e, i) {
          m(t, "onItemClick", this, 3)([e, i]);
          const n = Number(e.delegateTarget.getAttribute("rate"));
          if (!n || n === this.curValue) {
            return false;
          }
          const o = {
            playbackRate: {
              from: this.player.playbackRate,
              to: n,
            },
          };
          this.emitUserAction(e, "change_rate", {
            props: o,
          });
          this.curValue = n;
          this.player.playbackRate = n;
        },
      },
      {
        key: "renderItemList",
        value: function () {
          const e = this;
          const i = this.player.playbackRate || 1;
          this.curValue = i;
          let n = -1;
          const o = this.config.list.map((t, o) => {
            const s = {
              rate: t.rate,
            };
            if (s.rate === i) {
              s.selected = true;
              n = o;
            }
            s.showText = e.getTextByLang(t);
            return s;
          });
          m(t, "renderItemList", this, 3)([o, n]);
        },
      },
      {
        key: "changeCurrentText",
        value: function () {
          if (!this.isIcons) {
            const e = this.config.list;
            const t = this.curIndex < e.length ? this.curIndex : 0;
            const i = e[t];
            let n = "";
            n =
              !i || this.curIndex < 0
                ? "".concat(this.player.playbackRate, "x")
                : this.getTextByLang(i, "iconText");
            this.find(".icon-text").innerHTML = n;
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "playbackRate";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            ...tV.defaultConfig,
            position: eo.CONTROLS_RIGHT,
            index: 4,
            list: [2, 1.5, 1, 0.75, 0.5],
            className: "xgplayer-playbackrate",
            isShowIcon: true,
            hidePortrait: false,
          };
        },
      },
    ],
  );
})(tV);
function tK() {
  return new DOMParser().parseFromString(
    `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">
  <path fill="#fff" transform="scale(1.3, 1.3)" class='path_full' d="M9,10v1a.9.9,0,0,1-1,1,.9.9,0,0,1-1-1V9A.9.9,0,0,1,8,8h2a.9.9,0,0,1,1,1,.9.9,0,0,1-1,1Zm6,4V13a1,1,0,0,1,2,0v2a.9.9,0,0,1-1,1H14a1,1,0,0,1,0-2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>
</svg>
`,
    "image/svg+xml",
  ).firstChild;
}
function tz() {
  return new DOMParser().parseFromString(
    '<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">\n  <path fill="#fff" transform="scale(1.3, 1.3)" d="M9,10V9a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2a.9.9,0,0,1-1,1H8a.9.9,0,0,1-1-1,.9.9,0,0,1,1-1Zm6,4v1a1,1,0,0,1-2,0V13a.9.9,0,0,1,1-1h2a1,1,0,0,1,0,2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
const tX = ((e) => {
  function t() {
    s(this, t);
    return o(this, t, arguments);
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          if (typeof e.player.config.cssFullscreen === "boolean") {
            e.config.disable = !e.player.config.cssFullscreen;
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          m(t, "afterCreate", this, 3)([]);
          if (!this.config.disable) {
            if (this.config.target) {
              this.playerConfig.fullscreenTarget = this.config.target;
            }
            this.initIcons();
            this.on(M.CSS_FULLSCREEN_CHANGE, function (t) {
              e.animate(t);
            });
            this.btnClick = this.btnClick.bind(this);
            this.handleCssFullscreen = this.hook(
              "cssFullscreen_change",
              this.btnClick,
              {
                pre: function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                },
              },
            );
            this.bind(["click", "touchend"], this.handleCssFullscreen);
          }
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          const t = this.find(".xgplayer-icon");
          t.appendChild(icons.cssFullscreen);
          t.appendChild(icons.exitCssFullscreen);
        },
      },
      {
        key: "btnClick",
        value: function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isCssfullScreen = this.player.isCssfullScreen;
          this.emitUserAction(e, "switch_cssfullscreen", {
            cssfullscreen: isCssfullScreen,
          });
          if (isCssfullScreen) {
            this.player.exitCssFullscreen();
          } else {
            this.player.getCssFullscreen();
          }
        },
      },
      {
        key: "animate",
        value: function (e) {
          if (this.root) {
            if (e) {
              this.setAttr("data-state", "full");
            } else {
              this.setAttr("data-state", "normal");
            }
            this.switchTips(e);
          }
        },
      },
      {
        key: "switchTips",
        value: function (e) {
          const i18nKeys = this.i18nKeys;
          const i = this.find(".xg-tips");
          if (i) {
            this.changeLangTextKey(
              i,
              e ? i18nKeys.EXITCSSFULLSCREEN_TIPS : i18nKeys.CSSFULLSCREEN_TIPS,
            );
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            cssFullscreen: {
              icon: tK,
              class: "xg-get-cssfull",
            },
            exitCssFullscreen: {
              icon: tz,
              class: "xg-exit-cssfull",
            },
          };
        },
      },
      {
        key: "destroy",
        value: function () {
          m(t, "destroy", this, 3)([]);
          this.unbind(["click", "touchend"], this.btnClick);
        },
      },
      {
        key: "render",
        value: function () {
          if (!this.config.disable) {
            return `<xg-icon class='xgplayer-cssfullscreen'>
    <div class="xgplayer-icon">
    </div>
    `.concat(
              eV(this, "CSSFULLSCREEN_TIPS", this.playerConfig.isHideTips),
              "\n    </xg-icon>",
            );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "cssFullscreen";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            position: eo.CONTROLS_RIGHT,
            index: 1,
            disable: false,
            target: null,
          };
        },
      },
    ],
  );
})(tc);
class tq extends Plugin {
  afterCreate() {
    const e = this;
    this.clickHandler = this.hook("errorRetry", this.errorRetry, {
      pre: function (e) {
        e.preventDefault();
        e.stopPropagation();
      },
    });
    this.onError = this.hook("showError", this.handleError);
    this.bind(".xgplayer-error-refresh", "click", this.clickHandler);
    this.on(M.ERROR, function (t) {
      e.onError(t);
    });
  }
  errorRetry(e) {
    this.emitUserAction(e, "error_retry", {});
    this.player.retry();
  }
  handleError() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const player = this.player;
    if (this.root) {
      const i = e.errorType;
      let n = player.errorNote ? this.i18n[player.errorNote] : "";
      if (!n) {
        switch (i) {
          case "decoder":
            n = this.i18n.MEDIA_ERR_DECODE;
            break;
          case "network":
            n = this.i18n.MEDIA_ERR_NETWORK;
            break;
          default:
            n = this.i18n.MEDIA_ERR_SRC_NOT_SUPPORTED;
        }
      }
      this.find(".xgplayer-error-text").innerHTML = n;
      this.find(".xgplayer-error-tips").innerHTML = ""
        .concat(this.i18n.REFRESH_TIPS, '<span class="xgplayer-error-refresh">')
        .concat(this.i18n.REFRESH, "</span>");
    }
  }
  destroy() {
    this.unbind(".xgplayer-error-refresh", "click", this.clickHandler);
  }
  render() {
    return '<xg-error class="xgplayer-error">\n      <div class="xgplayer-errornote">\n       <span class="xgplayer-error-text"></span>\n       <span class="xgplayer-error-tips"><em class="xgplayer-error-refresh"></em></span>\n      </div>\n    </xg-error>';
  }
  static get pluginName() {
    return "error";
  }
}
class tZ extends Plugin {
  afterCreate() {
    const e = this;
    this.intervalId = 0;
    this.customConfig = null;
    this.bind(".highlight", ["click", "touchend"], function (t) {
      if (e.config.onClick || e.customOnClick) {
        t.preventDefault();
        t.stopPropagation();
        if (e.customOnClick) {
          e.customOnClick(t);
        } else {
          e.config.onClick(t);
        }
      }
    });
    this.player.showPrompt = function () {
      e.showPrompt.apply(e, arguments);
    };
    this.player.hidePrompt = function () {
      e.hide();
    };
  }
  setStyle(e) {
    const t = this;
    Object.keys(e).map((i) => {
      t.root.style[i] = e[i];
    });
  }
  showPrompt(e) {
    const t = this;
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const n =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : function () {};
    if (e) {
      this.customOnClick = n;
      const o = this.config.interval;
      if (this.intervalId) {
        clearTimeout(this.intervalId);
        this.intervalId = null;
      }
      Util.addClass(this.root, "show");
      if (i.mode === "arrow") {
        Util.addClass(this.root, "arrow");
      }
      if (typeof e === "string") {
        this.find(".xgplayer-prompt-detail").innerHTML = e;
      } else {
        this.find(".xgplayer-prompt-detail").innerHTML =
          "".concat(e.text || "") +
          "".concat(
            e.highlight
              ? '<i class="highlight">'.concat(e.highlight, "</i>")
              : "",
          );
      }
      if (i.style) {
        this.setStyle(i.style);
      }
      if (typeof i.autoHide === "boolean" ? i.autoHide : this.config.autoHide) {
        const s = i.interval || o;
        this.intervalId = setTimeout(() => {
          t.hide();
        }, s);
      }
    }
  }
  hide() {
    Util.removeClass(this.root, "show");
    Util.removeClass(this.root, "arrow");
    this.root.removeAttribute("style");
    this.customOnClick = null;
  }
  render() {
    return '<xg-prompt class="xgplayer-prompt '.concat(
      STATE_CLASS.CONTROLS_FOLLOW,
      '">\n    <span class="xgplayer-prompt-detail"></span>\n    </xg-prompt>',
    );
  }
  static get pluginName() {
    return "prompt";
  }
  static get defaultConfig() {
    return {
      interval: 3000,
      style: {},
      mode: "arrow",
      autoHide: true,
      detail: {
        text: "",
        highlight: "",
      },
      onClick: function () {},
    };
  }
}
const tJ = {
  time: 0,
  text: "",
  id: 1,
  duration: 1,
  color: "#fff",
  style: {},
  width: 6,
  height: 6,
};
function t$(e) {
  Object.keys(tJ).map((t) => {
    if (e[t] === undefined) {
      e[t] = tJ[t];
    }
  });
}
export function getOffSetISpot(e, t, i) {
  if (!i || i.length < 1) {
    return {
      time: e,
      duration: t,
    };
  }
  const n = Util.getOffsetCurrentTime(e, i);
  const o = Util.getOffsetCurrentTime(e + t, i);
  if (o <= n) {
    return null;
  }
  return {
    time: n,
    duration: o - n,
  };
}
export function getOffSetISpotList(e, t) {
  const i = [];
  e.forEach((e) => {
    const n = getOffSetISpot(e.time, e.duration, t);
    if (n) {
      i.push({
        time: n.time,
        duration: n.duration,
        id: e.id,
      });
    }
  });
  return i;
}
const t1 = {
  _updateDotDom: function (e, t) {
    if (t) {
      const i = getOffSetISpot(e.time, e.duration, this.player.timeSegments);
      if (i) {
        const n = this.calcuPosition(i.time, i.duration);
        if (n) {
          const o = e.style || {};
          o.left = "".concat(n.left, "%");
          o.width = "".concat(n.width, "%");
          t.setAttribute("data-text", e.text);
          t.setAttribute("data-time", e.time);
          if (n.isMini) {
            Util.addClass(t, "mini");
          } else {
            Util.removeClass(t, "mini");
          }
          Object.keys(o).map((e) => {
            t.style[e] = o[e];
          });
        }
      }
    }
  },
  initDots: function () {
    const e = this;
    this._ispots.map((t) => {
      e.createDot(t, false);
    });
    this.ispotsInit = true;
  },
  createDot: function (e) {
    const t =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    const progress = this.player.plugins.progress;
    if (
      progress &&
      (t && (t$(e), this._ispots.push(e)), this.ispotsInit || !t)
    ) {
      const n = getOffSetISpot(e.time, e.duration, this.player.timeSegments);
      if (n) {
        const o = this.calcuPosition(n.time, n.duration);
        if (o) {
          const s = e.style || {};
          s.left = "".concat(o.left, "%");
          s.width = "".concat(o.width, "%");
          let r = "xgspot_".concat(e.id, " xgplayer-spot");
          if (o.isMini) {
            r += " mini";
          }
          const a = e.template
            ? '<div class="xgplayer-spot-pop">'.concat(e.template, "</div>")
            : "";
          const l = Util.createDom(
            "xg-spot",
            a,
            {
              "data-text": e.text,
              "data-time": e.time,
              "data-id": e.id,
            },
            r,
          );
          Object.keys(s).map((e) => {
            l.style[e] = s[e];
          });
          if (progress.outer) {
            progress.outer.appendChild(l);
          }
          this.positionDot(l, e.id);
        }
      }
    }
  },
  findDot: function (e) {
    if (this.player.plugins.progress) {
      const t = this._ispots.filter((t, i) => t.id === e);
      if (t.length > 0) {
        return t[0];
      }
      return null;
    }
  },
  updateDot: function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const progress = this.player.plugins.progress;
    if (progress) {
      const n = this.findDot(e.id);
      if (n) {
        Object.keys(e).map((t) => {
          n[t] = e[t];
        });
      }
      if (this.ispotsInit) {
        const o = progress.find('xg-spot[data-id="'.concat(e.id, '"]'));
        if (o) {
          this._updateDotDom(e, o);
          if (t) {
            this.showDot(e.id);
          }
        }
      }
    }
  },
  deleteDot: function (e) {
    const _ispots = this._ispots;
    const progress = this.player.plugins.progress;
    if (progress) {
      const n = [];
      for (let o = 0; o < _ispots.length; o++) {
        if (_ispots[o].id === e) {
          n.push(o);
        }
      }
      const s = n.length;
      for (let r = s - 1; r >= 0; r--) {
        _ispots.splice(n[r], 1);
        if (this.ispotsInit) {
          const a = progress.find('xg-spot[data-id="'.concat(e, '"]'));
          if (a) {
            a.parentElement.removeChild(a);
          }
        }
      }
    }
  },
  deleteAllDots: function () {
    const progress = this.player.plugins.progress;
    if (progress) {
      if (!this.ispotsInit) {
        this._ispots = [];
        return;
      }
      const t = progress.root.getElementsByTagName("xg-spot");
      for (let i = t.length - 1; i >= 0; i--) {
        progress.outer.removeChild(t[i]);
      }
      this._ispots = [];
    }
  },
  updateAllDots: function () {
    const e = this;
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    const progress = this.player.plugins.progress;
    if (progress) {
      if (!this.ispotsInit) {
        this._ispots = t;
        return;
      }
      this._ispots = [];
      const n = progress.root.getElementsByTagName("xg-spot");
      const o = n.length;
      if (o > t.length) {
        for (let s = o - 1; s > t.length - 1; s--) {
          progress.outer.removeChild(n[s]);
        }
      }
      t.forEach((t, i) => {
        if (i < o) {
          n[i].setAttribute("data-id", "".concat(t.id));
          e._ispots.push(t);
          e.updateDot(t);
        } else {
          e.createDot(t);
        }
      });
    }
  },
  positionDots: function () {
    const e = this;
    const _ispots = this._ispots;
    const playerSize = this.playerSize;
    const sizeInfo = this.player.sizeInfo;
    const progress = this.player.plugins.progress;
    if (progress && sizeInfo.width !== playerSize.width) {
      playerSize.width = sizeInfo.width;
      playerSize.left = sizeInfo.left;
      _ispots.forEach((t) => {
        const i = progress.find('xg-spot[data-id="'.concat(t.id, '"]'));
        if (i) {
          e.positionDot(i, t.id);
        }
      });
    }
  },
  positionDot: function (e, t) {
    const i = Util.findDom(e, ".xgplayer-spot-pop");
    if (i) {
      const n = this.playerSize;
      const o = e.getBoundingClientRect();
      const s = i.getBoundingClientRect();
      const r = o.left - n.left;
      const a = n.width - r - o.width / 2;
      if (r < s.width / 2 || n.width < s.width) {
        const l = s.width / 2 - r;
        i.style.left = "".concat(l, "px");
      } else if (a < s.width / 2) {
        const c = a - s.width / 2 + o.width / 2;
        i.style.left = "".concat(c, "px");
      } else {
        i.style.left = "50%";
      }
    }
  },
  updateDuration: function () {
    const e = this;
    const progress = this.player.plugins.progress;
    if (progress) {
      this._ispots.forEach((i) => {
        const n = progress.find('xg-spot[data-id="'.concat(i.id, '"]'));
        e._updateDotDom(i, n);
      });
    }
  },
  getAllDotsDom: function () {
    const progress = this.player.plugins.progress;
    if (progress) {
      return progress.root.getElementsByTagName("xg-spot");
    }
    return [];
  },
  getDotDom: function (e) {
    const progress = this.player.plugins.progress;
    if (progress) {
      return progress.find('xg-spot[data-id="'.concat(e, '"]'));
    }
  },
};
const t2 = {
  dragmove: "onProgressMove",
  dragstart: "onProgressDragStart",
  dragend: "onProgressDragEnd",
  click: "onProgressClick",
  mouseover: "onProgressMouseOver",
  mouseenter: "onProgressMouseOver",
};
class t3 extends Plugin {
  constructor(e) {
    var i;
    i = super(e);
    i.onMousemove = function (e) {
      if (!i.config.disable) {
        if (
          Util.hasClass(e.target, "xg-spot-content") &&
          i.config.isHideThumbnailHover
        ) {
          return void i.player.plugins.progress.onMouseLeave(e);
        }
        if (i._state.f || Util.hasClass(e.target, "xg-spot-content")) {
          Util.event(e);
          e.stopPropagation();
        }
      }
    };
    i.onMousedown = function (e) {
      if (
        !i.config.disable &&
        (i._state.f || Util.hasClass(e.target, "xg-spot-content"))
      ) {
        Util.event(e);
        e.stopPropagation();
      }
    };
    i.onMouseup = function (e) {
      if (i.isDrag) {
        const t = i.player.plugins.progress;
        if (t && t.pos) {
          t.onMouseUp(e);
          if (!t.pos.isEnter) {
            t.onMouseLeave(e);
          }
        }
      }
    };
    i.onDotMouseLeave = function (e) {
      if (!i.config.disable) {
        i._curDot.removeEventListener("mouseleave", i.onDotMouseLeave);
        i.blurDot(e.target);
        i._curDot = null;
        const t = i.player.plugins.progress;
        if (t) {
          t.enableBlur();
        }
        i.show();
      }
    };
    i.onProgressMouseOver = function (e, t) {
      if (
        !i.config.disable &&
        Util.hasClass(t.target, "xgplayer-spot") &&
        !i._curDot
      ) {
        i._curDot = t.target;
        i.focusDot(t.target);
        if (i._curDot.children.length > 0) {
          i.hide();
        }
        const n = i.player.plugins.progress;
        if (n) {
          n.disableBlur();
        }
        i._curDot.addEventListener("mouseleave", i.onDotMouseLeave);
      }
    };
    i._ispots = [];
    i.videoPreview = null;
    i.videothumbnail = null;
    i.thumbnail = null;
    i.timeStr = "";
    i._state = {
      now: 0,
      f: false,
    };
    return i;
  }
  beforeCreate(e) {
    const progress = e.player.plugins.progress;
    if (progress) {
      e.root = progress.root;
    }
  }
  afterCreate() {
    let e;
    let t;
    let i;
    const n = this;
    this._curDot = null;
    this.handlerSpotClick = this.hook("spotClick", function (e, t) {
      if (t.seekTime) {
        n.player.seek(t.seekTime);
      }
    });
    this.transformTimeHook = this.hook("transformTime", function (e) {
      n.setTimeContent(Util.format(e));
    });
    e = this;
    t = e.config;
    i = e.player;
    Object.keys(t1).map((t) => {
      e[t] = t1[t].bind(e);
    });
    e._ispots = (i.config.progressDot || t.ispots || []).map((e) => {
      t$(e);
      return e;
    });
    e.ispotsInit = false;
    e.playerSize = {
      left: i.sizeInfo.left,
      width: i.sizeInfo.width,
    };
    e.on(M.DURATION_CHANGE, function () {
      if (e.ispotsInit) {
        e.updateDuration();
      } else {
        e.initDots();
      }
    });
    e.on("timesegments_change", function (t) {
      e.updateAllDots(e._ispots);
    });
    this.on(M.DURATION_CHANGE, function () {
      n.show();
    });
    if (this.config.disable) {
      this.disable();
    }
    this.extTextRoot = this.find(".xg-spot-ext-text");
  }
  setConfig(e) {
    const t = this;
    if (e) {
      Object.keys(e).map((i) => {
        t.config[i] = e[i];
      });
    }
  }
  onPluginsReady() {
    if (this.player.plugins.progress) {
      this.previewLine = this.find(".xg-spot-line");
      this.timePoint = this.find(".xgplayer-progress-point");
      this.timeText = this.find(".xg-spot-time");
      this.tipText = this.find(".spot-inner-text");
      this._hasThumnail = false;
      this.registerThumbnail();
      this.bindEvents();
    }
  }
  bindEvents() {
    const e = this;
    const progress = this.player.plugins.progress;
    if (
      progress &&
      (Object.keys(t2).map((i) => {
        e[t2[i]] = e[t2[i]].bind(e);
        progress.addCallBack(i, e[t2[i]]);
      }),
      Sniffer.device !== "mobile")
    ) {
      this.bind(".xg-spot-info", "mousemove", this.onMousemove);
      this.bind(".xg-spot-info", "mousedown", this.onMousedown);
      this.bind(".xg-spot-info", "mouseup", this.onMouseup);
      const i = this.hook("previewClick", function () {});
      this.handlerPreviewClick = function (t) {
        t.stopPropagation();
        i(parseInt(1000 * e._state.now, 10) / 1000, t);
      };
      this.bind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
    }
  }
  onProgressMove(e, t) {
    if (!this.config.disable && this.player.duration) {
      this.updatePosition(e.offset, e.width, e.currentTime, e.e);
    }
  }
  onProgressDragStart(e) {
    if (!this.config.disable && this.player.duration) {
      this.isDrag = true;
      if (this.videoPreview) {
        Util.addClass(this.videoPreview, "show");
      }
    }
  }
  onProgressDragEnd(e) {
    if (!this.config.disable && this.player.duration) {
      this.isDrag = false;
      if (this.videoPreview) {
        Util.removeClass(this.videoPreview, "show");
      }
    }
  }
  onProgressClick(e, t) {
    if (!this.config.disable && Util.hasClass(t.target, "xgplayer-spot")) {
      t.stopPropagation();
      t.preventDefault();
      ["time", "id", "text"].map((i) => {
        e[i] = t.target.getAttribute("data-".concat(i));
      });
      if (e.time) {
        e.time = Number(e.time);
      }
      this.handlerSpotClick(t, e);
    }
  }
  updateLinePos(e, t) {
    let i;
    const root = this.root;
    const previewLine = this.previewLine;
    const player = this.player;
    const config = this.config;
    const a = player.controls.mode === "flex";
    let width = root.getBoundingClientRect().width;
    if (width || !this._hasThumnail) {
      let c =
        e -
        (width =
          this._hasThumnail && width < config.width ? config.width : width) /
          2;
      if (c < 0 && !a) {
        c = 0;
        i = e - width / 2;
      } else if (c > t - width && !a) {
        i = c - (t - width);
        c = t - width;
      } else {
        i = 0;
      }
      if (i !== undefined) {
        previewLine.style.transform = "translateX(".concat(i.toFixed(2), "px)");
      }
      root.style.transform = "translateX(".concat(
        c.toFixed(2),
        "px) translateZ(0)",
      );
    }
  }
  updateTimeText(e) {
    const timeText = this.timeText;
    const timePoint = this.timePoint;
    timeText.innerHTML = e;
    if (!this.thumbnail) {
      timePoint.innerHTML = e;
    }
  }
  updatePosition(e, t, i, n) {
    const root = this.root;
    const config = this.config;
    const _state = this._state;
    if (root) {
      _state.now = i;
      this.transformTimeHook(i);
      const a = this.timeStr;
      if (n && n.target && Util.hasClass(n.target, "xgplayer-spot")) {
        this.showTips(n.target.getAttribute("data-text"), false, a);
        this.focusDot(n.target);
        _state.f = true;
        if (config.isFocusDots && _state.f) {
          _state.now = parseInt(n.target.getAttribute("data-time"), 10);
        }
      } else if (config.defaultText) {
        _state.f = false;
        this.showTips(config.defaultText, true, a);
      } else {
        _state.f = false;
        this.hideTips("");
      }
      this.updateTimeText(a);
      this.updateThumbnails(_state.now);
      this.updateLinePos(e, t);
    }
  }
  setTimeContent(e) {
    this.timeStr = e;
  }
  updateThumbnails(e) {
    const player = this.player;
    const videoPreview = this.videoPreview;
    const config = this.config;
    const thumbnail = player.plugins.thumbnail;
    if (thumbnail && thumbnail.usable) {
      if (this.thumbnail) {
        thumbnail.update(this.thumbnail, e, config.width, config.height);
      }
      const s = videoPreview && videoPreview.getBoundingClientRect();
      if (this.videothumbnail) {
        thumbnail.update(this.videothumbnail, e, s.width, s.height);
      }
    }
  }
  registerThumbnail() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (Sniffer.device !== "mobile") {
      const t = this.player;
      const i = this.config;
      const n = t.getPlugin("thumbnail");
      if (n) {
        n.setConfig(e);
      }
      if (!n || !n.usable || !i.isShowThumbnail) {
        return void Util.addClass(this.root, "short-line no-thumbnail");
      }
      Util.removeClass(this.root, "short-line no-thumbnail");
      if (i.mode === "short") {
        Util.addClass(this.root, "short-line");
      }
      this._hasThumnail = true;
      const o = this.find(".xg-spot-thumbnail");
      this.thumbnail = n.createThumbnail(o, "progress-thumbnail");
      if (i.isShowCoverPreview) {
        this.videoPreview = Util.createDom(
          "xg-video-preview",
          "",
          {},
          "xgvideo-preview",
        );
        t.root.appendChild(this.videoPreview);
        this.videothumbnail = n.createThumbnail(
          this.videoPreview,
          "xgvideo-thumbnail",
        );
      }
      this.updateThumbnails(0);
    }
  }
  calcuPosition(e, t) {
    const progress = this.player.plugins.progress;
    const offsetDuration = this.player.offsetDuration;
    const width = progress.root.getBoundingClientRect().width;
    if (e > offsetDuration) {
      return null;
    }
    if (e + t > offsetDuration) {
      t = offsetDuration - e;
    }
    return {
      left: (e / offsetDuration) * 100,
      width: (t / offsetDuration) * 100,
      isMini: t < (offsetDuration / width) * 6,
    };
  }
  showDot(e) {
    const t = this.findDot(e);
    if (t) {
      const i = this.root.getBoundingClientRect().width;
      const n = (t.time / this.player.duration) * i;
      this.updatePosition(n, i, t.time);
    }
  }
  focusDot(e, t) {
    if (e) {
      if (!t) {
        t = e.getAttribute("data-id");
      }
      Util.addClass(e, "active");
      this._activeDotId = t;
    }
  }
  blurDot(e) {
    if (!e) {
      const t = this._activeDotId;
      e = this.getDotDom(t);
    }
    if (e) {
      Util.removeClass(e, "active");
      this._activeDotId = null;
    }
  }
  showTips(e, t) {
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    Util.addClass(this.root, "no-timepoint");
    if (e) {
      Util.addClass(this.find(".xg-spot-content"), "show-text");
      if (t && this.config.mode === "production") {
        Util.addClass(this.root, "product");
        this.tipText.textContent = e;
      } else {
        Util.removeClass(this.root, "product");
        this.tipText.textContent = this._hasThumnail
          ? e
          : "".concat(i, " ").concat(e);
      }
    }
  }
  hideTips() {
    Util.removeClass(this.root, "no-timepoint");
    this.tipText.textContent = "";
    Util.removeClass(this.find(".xg-spot-content"), "show-text");
    Util.removeClass(this.root, "product");
  }
  hide() {
    Util.addClass(this.root, "hide");
  }
  show(e) {
    Util.removeClass(this.root, "hide");
  }
  enable() {
    const config = this.config;
    const playerConfig = this.playerConfig;
    this.config.disable = false;
    this.show();
    if (!this.thumbnail && config.isShowThumbnail) {
      this.registerThumbnail(playerConfig.thumbnail || {});
    }
  }
  disable() {
    this.config.disable = true;
    this.hide();
  }
  destroy() {
    const e = this;
    const progress = this.player.plugins.progress;
    if (progress) {
      Object.keys(t2).map((i) => {
        progress.removeCallBack(i, e[t2[i]]);
      });
    }
    this.videothumbnail = null;
    this.thumbnail = null;
    if (this.videoPreview) {
      this.player.root.removeChild(this.videoPreview);
    }
    this.unbind(".xg-spot-info", "mousemove", this.onMousemove);
    this.unbind(".xg-spot-info", "mousedown", this.onMousedown);
    this.unbind(".xg-spot-info", "mouseup", this.onMouseup);
    this.unbind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
  }
  render() {
    if (
      Sniffer.device === "mobile" ||
      this.playerConfig.isMobileSimulateMode === "mobile"
    ) {
      return "";
    }
    return `<div class="xg-spot-info hide ${this.config.mode === "short" ? "short-line" : ""}">\n      <div class="xg-spot-content">\n        <div class="xg-spot-thumbnail">\n          <span class="xg-spot-time"></span>\n        </div>\n        <div class="xg-spot-text"><span class="spot-inner-text"></span></div>\n      </div>\n      <div class="xgplayer-progress-point">00:00</div>\n      <div class="xg-spot-ext-text"></div>\n      <div class="xg-spot-line"></div>\n    </div>`;
  }
  static get pluginName() {
    return "progresspreview";
  }
  static get defaultConfig() {
    return {
      index: 1,
      miniWidth: 6,
      ispots: [],
      defaultText: "",
      isFocusDots: true,
      isHideThumbnailHover: true,
      isShowThumbnail: true,
      isShowCoverPreview: false,
      mode: "",
      disable: false,
      width: 160,
      height: 90,
    };
  }
}
class t5 extends Plugin {
  constructor(e) {
    super(e);
    this.ratio = 1;
    this.interval = null;
    this._preloadMark = {};
  }
  afterCreate() {
    const e = this;
    if (this.usable) {
      this.initThumbnail();
    }
    this.on([M.DURATION_CHANGE], function () {
      const e_config = e.config;
      const t_pic_num = e_config.pic_num;
      const t_interval = e_config.interval;
      if (e.usable) {
        e.interval =
          t_interval > 0
            ? t_interval
            : Math.round((1000 * e.player.duration) / t_pic_num) / 1000;
      }
    });
  }
  setConfig(e) {
    const t = this;
    if (e) {
      const i = Object.keys(e);
      if (!(i.length < 1)) {
        i.forEach((i) => {
          t.config[i] = e[i];
        });
        if (this.usable) {
          this.initThumbnail();
        }
      }
    }
  }
  get usable() {
    const config = this.config;
    const e_urls = config.urls;
    const e_pic_num = config.pic_num;
    return e_urls && e_urls.length > 0 && e_pic_num > 0;
  }
  initThumbnail() {
    const config = this.config;
    const e_width = config.width;
    const e_height = config.height;
    const e_pic_num = config.pic_num;
    const e_interval = config.interval;
    this.ratio = (e_width / e_height) * 100;
    this.interval = e_interval || Math.round(this.player.duration / e_pic_num);
    this._preloadMark = {};
  }
  getUrlByIndex(e) {
    if (e >= 0 && e < this.config.urls.length) {
      return this.config.urls[e];
    }
    return "";
  }
  preload(e) {
    const t = this;
    if (!this._preloadMark[e]) {
      const i = this.config.urls;
      const n = i.length;
      const o = [];
      if (e > 0) {
        o.push(e - 1);
      }
      o.push(e);
      if (e > 0 && e < n - 1) {
        o.push(e + 1);
      }
      o.map((e) => {
        if (!t._preloadMark[e] && e >= 0 && e < n) {
          t._preloadMark[e] = 1;
          Util.preloadImg(i[e], function () {
            t._preloadMark[e] = 2;
          });
        }
      });
    }
  }
  getPosition(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const config = this.config;
    const n_pic_num = config.pic_num;
    const n_row = config.row;
    const n_col = config.col;
    const n_width = config.width;
    const n_height = config.height;
    this.interval = Math.round(this.player.duration / n_pic_num);
    let c = Math.ceil(e / this.interval);
    const urlIndex =
      (c = c > n_pic_num ? n_pic_num : c) < n_row * n_col
        ? 0
        : Math.ceil(c / (n_row * n_col)) - 1;
    const h = c - n_col * n_row * urlIndex;
    const rowIndex = h > 0 ? Math.ceil(h / n_col) - 1 : 0;
    const colIndex = h > 0 ? h - rowIndex * n_col - 1 : 0;
    let g = 0;
    let p = 0;
    if (t && i) {
      if (t / i < n_width / n_height) {
        g = (n_width / n_height) * (p = i);
      } else {
        p = (g = t) / (n_width / n_height);
      }
    } else if (i) {
      if (!t) {
        p = i || n_height;
        g = (n_width / n_height) * p;
      }
    } else {
      p = (g = t || n_width) / (n_width / n_height);
    }
    const v = this.getUrlByIndex(urlIndex);
    return {
      urlIndex,
      rowIndex,
      colIndex,
      url: v,
      height: p,
      width: g,
      style: {
        backgroundImage: "url(".concat(v, ")"),
        backgroundSize: `${g * n_col}px auto`,
        backgroundPosition: `-${colIndex * g}px -${rowIndex * p}px`,
        width: "".concat(g, "px"),
        height: "".concat(p, "px"),
      },
    };
  }
  update(e, t) {
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const n =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    const o =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    const config = this.config;
    const s_pic_num = config.pic_num;
    const s_urls = config.urls;
    if (!(s_pic_num <= 0) && s_urls && s_urls.length !== 0) {
      const l = this.getPosition(t, i, n);
      this.preload(l.urlIndex);
      Object.keys(l.style).map((t) => {
        e.style[t] = l.style[t];
      });
      Object.keys(o).map((t) => {
        e.style[t] = o[t];
      });
    }
  }
  changeConfig() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setConfig(e);
  }
  createThumbnail(e, t) {
    const i = Util.createDom("xg-thumbnail", "", {}, "thumbnail ".concat(t));
    if (e) {
      e.appendChild(i);
    }
    return i;
  }
  static get pluginName() {
    return "thumbnail";
  }
  static get defaultConfig() {
    return {
      isShow: false,
      urls: [],
      pic_num: 0,
      col: 0,
      row: 0,
      height: 90,
      width: 160,
      scale: 1,
      className: "",
      hidePortrait: false,
    };
  }
}
function t4(e) {
  if (e) {
    return "background:".concat(e, ";");
  }
  return "";
}
const t8 = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onTimeupdate = function () {
      const ended = e.player.ended;
      const e_offsetDuration = e.offsetDuration;
      let e_currentTime = e.currentTime;
      e_currentTime = Util.adjustTimeByDuration(
        e_currentTime,
        e_offsetDuration,
        ended,
      );
      e.update(
        {
          played: e_currentTime,
        },
        e_offsetDuration,
      );
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "offsetDuration",
        get: function () {
          return (
            this.playerConfig.customDuration ||
            this.player.offsetDuration ||
            this.player.duration
          );
        },
      },
      {
        key: "currentTime",
        get: function () {
          const player = this.player;
          const e_offsetCurrentTime = player.offsetCurrentTime;
          const e_currentTime = player.currentTime;
          if (e_offsetCurrentTime >= 0) {
            return e_offsetCurrentTime;
          }
          return e_currentTime;
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          if (this.root) {
            this.on(M.TIME_UPDATE, this.onTimeupdate);
            this.on(M.EMPTIED, function () {
              e.reset();
            });
          }
        },
      },
      {
        key: "reset",
        value: function () {
          this.update(
            {
              played: 0,
              cached: 0,
            },
            0,
          );
        },
      },
      {
        key: "update",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  cached: 0,
                  played: 0,
                };
          const t = arguments.length > 1 ? arguments[1] : undefined;
          if (t && this.root) {
            if (e.cached) {
              this.find("xg-mini-progress-cache").style.width =
                `${(e.cached / t) * 100}%`;
            }
            if (e.played) {
              this.find("xg-mini-progress-played").style.width =
                `${(e.played / t) * 100}%`;
            }
          }
        },
      },
      {
        key: "render",
        value: function () {
          const playerConfig = this.playerConfig;
          const e_commonStyle = playerConfig.commonStyle;
          if (playerConfig.miniprogress) {
            const i = this.config;
            const n = i.mode;
            const o = i.height;
            const s = {
              cached: t4(e_commonStyle.cachedColor),
              played: t4(e_commonStyle.playedColor),
              progress: t4(e_commonStyle.progressColor),
              height: o > 0 && o !== 2 ? "height: ".concat(o, "px;") : "",
            };
            return `<xg-mini-progress class="xg-mini-progress ${n === "show" ? "xg-mini-progress-show" : ""}" style="`
              .concat(s.progress, " ")
              .concat(
                s.height,
                '">\n    <xg-mini-progress-cache class="xg-mini-progress-cache" style="',
              )
              .concat(
                s.cached,
                '"></xg-mini-progress-cache>\n    <xg-mini-progress-played class="xg-mini-progress-played" style="',
              )
              .concat(
                s.played,
                '"></xg-mini-progress-played>\n    </xg-mini-progress>',
              );
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "MiniProgress";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            mode: "auto",
            height: 2,
          };
        },
      },
    ],
  );
})(Plugin);
const t6 = "realtime";
const t7 = "firstframe";
const t9 = "poster";
let ie = null;
const it = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onLoadedData = function (t) {
      if (e.player) {
        e._frameCount = e.config.startFrameCount;
        e.stop();
        e.renderOnTimeupdate(t);
        e.off(M.TIME_UPDATE, e.renderOnTimeupdate);
        e.on(M.TIME_UPDATE, e.renderOnTimeupdate);
      }
    };
    e.onVisibilitychange = function (t) {
      if (document.visibilityState === "visible") {
        if (e._checkIfCanStart()) {
          e.start();
        }
      } else if (document.visibilityState === "hidden") {
        e.stop();
      }
    };
    e.renderOnTimeupdate = function (t) {
      if (e._frameCount > 0) {
        e.renderOnce();
        e._frameCount--;
      } else {
        e._isLoaded = true;
        e.off(M.TIME_UPDATE, e.renderOnTimeupdate);
        const i = e.config.startInterval;
        if (!e.player.paused && e._checkIfCanStart()) {
          e.start(0, i);
        }
      }
    };
    e.start = function (t, i) {
      const video = e.player.video;
      const o = (() => {
        try {
          return parseInt(window.performance.now(), 10);
        } catch (e) {
          return new Date().getTime();
        }
      })();
      const s = e.checkVideoIsSupport(video);
      if (s && e.canvasCtx) {
        if (!i) {
          i = e.interval;
        }
        e.stop();
        if (video.videoWidth && video.videoHeight) {
          e.videoPI =
            video.videoHeight > 0
              ? parseInt((video.videoWidth / video.videoHeight) * 100, 10)
              : 0;
          if (e.config.mode === t6) {
            if (video && video.videoWidth) {
              e.update(s, e.videoPI);
            }
            e.preTime = o;
          } else if (o - e.preTime >= i) {
            if (video && video.videoWidth) {
              e.update(s, e.videoPI);
            }
            e.preTime = o;
          }
        }
        e.frameId =
          e._loopType === "timer"
            ? Util.setTimeout(e, e.start, i)
            : Util.requestAnimationFrame(e.start);
      }
    };
    e.stop = function () {
      if (e.frameId) {
        if (e._loopType === "timer") {
          Util.clearTimeout(e, e.frameId);
        } else {
          Util.cancelAnimationFrame(e.frameId);
        }
        e.frameId = null;
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          if (this.playerConfig.dynamicBg === true) {
            this.config.disable = false;
          }
          if (!t.isSupport) {
            this.config.disable = true;
          }
          const config = this.config;
          const i_disable = config.disable;
          const i_mode = config.mode;
          const i_frameRate = config.frameRate;
          if (!i_disable) {
            this._pos = {
              width: 0,
              height: 0,
              rwidth: 0,
              rheight: 0,
              x: 0,
              y: 0,
              pi: 0,
            };
            this.isStart = false;
            this._isLoaded = false;
            this.videoPI = 0;
            this.preTime = 0;
            this.interval = parseInt(1000 / i_frameRate, 10);
            this.canvas = null;
            this.canvasCtx = null;
            this._frameCount = 0;
            this._loopType =
              this.config.mode !== t6 && this.interval >= 1000
                ? "timer"
                : "animation";
            this.once(M.COMPLETE, function () {
              if (e.player) {
                e.init();
                e.renderByPoster();
                if (!e.player.paused) {
                  e.start();
                }
              }
            });
            if (i_mode !== t9) {
              if (i_mode !== t7) {
                this.on(M.EMPTIED, function () {
                  e.stop();
                });
                this.on(M.PLAY, function () {
                  const startInterval = e.config.startInterval;
                  if (e._checkIfCanStart()) {
                    e.start(0, startInterval);
                  }
                });
                this.on(M.PAUSE, function () {
                  e.stop();
                });
              }
              this.on(M.LOADED_DATA, this.onLoadedData);
              this.on(M.LOAD_START, function () {
                e._isLoaded = false;
                e.stop();
              });
              document.addEventListener(
                "visibilitychange",
                this.onVisibilitychange,
              );
            }
          }
        },
      },
      {
        key: "setConfig",
        value: function (e) {
          const t = this;
          Object.keys(e).forEach((i) => {
            if (i === "root" && e[i] !== t.config[i]) {
              t.reRender(e[i]);
            } else if (i === "frameRate") {
              t.interval = parseInt(1000 / e[i], 10);
            } else if (i === "disable" && e[i]) {
              t.stop();
            }
            t.config[i] = e[i];
          });
        },
      },
      {
        key: "init",
        value: function (e) {
          const player = this.player;
          const config = this.config;
          this.canvasFilter = t.supportCanvasFilter();
          try {
            let o = e || config.root;
            if (!o) {
              o =
                (config.isInnerRender && player.innerContainer) || player.root;
            }
            o.insertAdjacentHTML(
              "afterbegin",
              '<div class="xgplayer-dynamic-bg" data-index="'.concat(
                config.index,
                '"><canvas>\n        </canvas><xgmask></xgmask></div>',
              ),
            );
            this.root = o.children[0];
            this.canvas = this.find("canvas");
            if (!this.canvasFilter) {
              this.canvas.style.filter = config.filter;
              this.canvas.style.webkitFilter = config.filter;
            }
            this.mask = this.find("xgmask");
            if (config.addMask) {
              this.mask.style.background = config.maskBg;
            }
            this.canvasCtx = this.canvas.getContext("2d");
          } catch (error) {
            b.logError("plugin:DynamicBg", error);
          }
        },
      },
      {
        key: "reRender",
        value: function (e) {
          if (this.config.disable || this.root) {
            this.stop();
            const t = this.root ? this.root.parentElement : null;
            if (t !== e) {
              t.removeChild(this.root);
            }
            if (!e) {
              this.root = null;
              return;
            }
            this.init(e);
            this.renderOnce();
            const i = this.config.startInterval;
            if (this._checkIfCanStart()) {
              this.start(0, i);
            }
          }
        },
      },
      {
        key: "checkVideoIsSupport",
        value: function (e) {
          if (!e) {
            return null;
          }
          const t =
            e && e instanceof window.HTMLVideoElement
              ? e
              : e.canvas
                ? e.canvas
                : e.flyVideo
                  ? e.flyVideo
                  : null;
          if (t && !(Sniffer.browser === "safari" && Util.isMSE(t))) {
            return t;
          }
          const i = t ? t.tagName.toLowerCase() : "";
          if (i === "canvas" || i === "img") {
            return t;
          }
          return null;
        },
      },
      {
        key: "renderByPoster",
        value: function () {
          const poster = this.playerConfig.poster;
          if (poster) {
            const t =
              Util.typeOf(poster) === "String"
                ? poster
                : Util.typeOf(poster.poster) === "String"
                  ? poster.poster
                  : null;
            this.updateImg(t);
          }
        },
      },
      {
        key: "_checkIfCanStart",
        value: function () {
          const mode = this.config.mode;
          return (
            this._isLoaded && !this.player.paused && mode !== t7 && mode !== t9
          );
        },
      },
      {
        key: "renderOnce",
        value: function () {
          const video = this.player.video;
          if (video.videoWidth && video.videoHeight) {
            this.videoPI = parseInt(
              (video.videoWidth / video.videoHeight) * 100,
              10,
            );
            const t = this.checkVideoIsSupport(video);
            if (t) {
              this.update(t, this.videoPI);
            }
          }
        },
      },
      {
        key: "updateImg",
        value: function (e) {
          const t = this;
          if (e) {
            const i = this.canvas.getBoundingClientRect();
            const n = i.width;
            const o = i.height;
            let s = new window.Image();
            s.onload = function () {
              if (t.canvas && !t.frameId && !t.isStart) {
                t.canvas.height = o;
                t.canvas.width = n;
                const e = parseInt((n / o) * 100, 10);
                t.update(s, e);
                s = null;
              }
            };
            s.src = e;
          }
        },
      },
      {
        key: "update",
        value: function (e, t) {
          if (this.canvas && this.canvasCtx && t) {
            try {
              const i = this._pos;
              const n = this.config;
              const o = this.canvas.getBoundingClientRect();
              const s = o.width;
              const r = o.height;
              if (s !== i.width || r !== i.height || i.pi !== t) {
                const a = parseInt((s / r) * 100, 10);
                i.pi = t;
                if (i.width !== s) {
                  i.width = this.canvas.width = s;
                }
                if (i.height !== r) {
                  i.height = this.canvas.height = r;
                }
                let l = r;
                let c = s;
                if (a < t) {
                  c = parseInt((r * t) / 100, 10);
                } else if (a > t) {
                  l = parseInt((100 * s) / t, 10);
                }
                i.rwidth = c * n.multiple;
                i.rheight = l * n.multiple;
                i.x = (s - i.rwidth) / 2;
                i.y = (r - i.rheight) / 2;
              }
              if (this.canvasFilter) {
                this.canvasCtx.filter = n.filter;
              }
              this.canvasCtx.drawImage(e, i.x, i.y, i.rwidth, i.rheight);
            } catch (error) {
              b.logError("plugin:DynamicBg", error);
            }
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          this.stop();
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilitychange,
          );
          this.canvasCtx = null;
          this.canvas = null;
        },
      },
      {
        key: "render",
        value: function () {
          return "";
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "dynamicBg";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            isInnerRender: false,
            disable: true,
            index: -1,
            mode: "framerate",
            frameRate: 10,
            filter: "blur(50px)",
            startFrameCount: 2,
            startInterval: 0,
            addMask: true,
            multiple: 1.2,
            maskBg: "rgba(0,0,0,0.7)",
          };
        },
      },
      {
        key: "isSupport",
        get: function () {
          if (typeof ie === "boolean") {
            return ie;
          }
          return (ie = (() => {
            try {
              if (document.createElement("canvas").getContext) {
                return true;
              }
              return false;
            } catch (e) {
              return false;
            }
          })());
        },
      },
      {
        key: "supportCanvasFilter",
        value: function () {
          return Sniffer.browser !== "safari" && Sniffer.browser !== "firefox";
        },
      },
    ],
  );
})(Plugin);
export var langZhCn = {
  LANG: "zh-cn",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "视频下载错误",
      },
      mse: {
        code: 2,
        msg: "流追加错误",
      },
      parse: {
        code: 3,
        msg: "解析错误",
      },
      format: {
        code: 4,
        msg: "格式错误",
      },
      decoder: {
        code: 5,
        msg: "解码错误",
      },
      runtime: {
        code: 6,
        msg: "语法错误",
      },
      timeout: {
        code: 7,
        msg: "播放超时",
      },
      other: {
        code: 8,
        msg: "其他错误",
      },
    },
    HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
    HAVE_METADATA: "音频/视频的元数据已就绪",
    HAVE_CURRENT_DATA:
      "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
    HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
    HAVE_ENOUGH_DATA: "可用数据足以开始播放",
    NETWORK_EMPTY: "音频/视频尚未初始化",
    NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
    NETWORK_LOADING: "浏览器正在下载数据",
    NETWORK_NO_SOURCE: "未找到音频/视频来源",
    MEDIA_ERR_ABORTED: "取回过程被用户中止",
    MEDIA_ERR_NETWORK: "网络错误",
    MEDIA_ERR_DECODE: "解码错误",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
    REPLAY: "重播",
    ERROR: "网络连接似乎出现了问题",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暂停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下载",
    ROTATE_TIPS: "旋转",
    RELOAD_TIPS: "重新载入",
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "进入样式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出样式全屏",
    TEXTTRACK: "字幕",
    PIP: "画中画",
    SCREENSHOT: "截图",
    LIVE: "正在直播",
    OFF: "关闭",
    OPEN: "开启",
    MINI_DRAG: "点击按住可拖动视频",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "请试试",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播",
  },
};
const io = "info";
const M_STATS_EVENTS = M.STATS_EVENTS;
const ir = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._recordUserActions = function (t) {
      const i = e._getTime();
      const n = {
        ...t,
        msg: t.msg || t.action,
      };
      e._stats[io].push({
        type: "userAction",
        ...i,
        payload: n,
      });
    };
    e._onReset = function () {
      e.reset();
    };
    e._recordInfo = function (t) {
      e.info(t);
    };
    e._downloadStats = function () {
      const t = new Blob([JSON.stringify(e.getStats())], {
        type: "application/json",
      });
      const i = window.URL.createObjectURL(t);
      const n = document.createElement("a");
      n.style.display = "none";
      n.href = i;
      n.download = "player.txt";
      n.disabled = false;
      n.click();
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "_getTime",
        value: function () {
          return {
            timestamp: Date.now(),
            timeFormat: new Date().toISOString(),
          };
        },
      },
      {
        key: "afterCreate",
        value: function () {
          this.reset();
          this.on(M.USER_ACTION, this._recordUserActions);
          this.on(M_STATS_EVENTS.STATS_INFO, this._recordInfo);
          this.on(M_STATS_EVENTS.STATS_DOWNLOAD, this._downloadStats);
          this.on(M_STATS_EVENTS.STATS_RESET, this._onReset);
        },
      },
      {
        key: "destroy",
        value: function () {
          this.offAll();
        },
      },
      {
        key: "downloadStats",
        value: function () {
          this._downloadStats();
        },
      },
      {
        key: "info",
        value: function (e) {
          if (e.profile) {
            this._infoProfile(e);
          } else {
            this._info(e);
          }
        },
      },
      {
        key: "_info",
        value: function (e) {
          const t = this._getTime();
          this._stats[io].push({
            ...t,
            payload: e,
          });
        },
      },
      {
        key: "_infoProfile",
        value: function (e) {
          if (e && e.startMs) {
            const t = {
              cat: "function",
              dur: Date.now() - e.startMs,
              name: e.name || e.msg,
              ph: "X",
              pid: 0,
              tid: 0,
              ts: e.startMs,
              profile: true,
              ...e,
            };
            this._info(t);
          } else {
            console.warn("infoProfile need object data, include startMs");
          }
        },
      },
      {
        key: "reset",
        value: function () {
          this._stats = l(l({}, io, []), "media", {});
        },
      },
      {
        key: "getStats",
        value: function () {
          for (
            var e = this.player.media, buffered = [], i = 0;
            i < e.buffered.length;
            i++
          ) {
            buffered.push({
              start: e.buffered.start(i),
              end: e.buffered.end(i),
            });
          }
          const n = {
            currentTime: e.currentTime,
            readyState: e.readyState,
            buffered,
            paused: e.paused,
            ended: e.ended,
          };
          this._stats.media = n;
          return {
            raw: this._stats,
            timestat: this._getTimeStats(),
            profile: this._getProfile(),
          };
        },
      },
      {
        key: "_getTimeStats",
        value: function () {
          return this._stats[io].map((e) => {
            const data = e.payload.data;
            let i = "";
            try {
              if (data instanceof Error) {
                i = data.msg;
              } else if (data !== undefined) {
                i = JSON.stringify(data);
              }
            } catch (error) {
              console.log("err", error);
            }
            return "["
              .concat(e.timeFormat, "] : ")
              .concat(e.payload.msg, " ")
              .concat(i, " ");
          });
        },
      },
      {
        key: "_getProfile",
        value: function () {
          const e = {
            traceEvents: [],
          };
          this._stats[io].forEach((t) => {
            if (t.payload.profile) {
              e.traceEvents.push(t.payload);
            }
          });
          return e;
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "stats";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {};
        },
      },
    ],
  );
})(BasePlugin);
const ia = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onGapJump = function () {
      const e_player = e.player;
      const e_config = e.config;
      if (e_player.media.readyState === HTMLMediaElement.HAVE_NOTHING) {
        return;
      }
      if (e_player.media.seeking) {
        if (!e.seekingEventReceived) {
          return;
        }
      } else {
        e.seekingEventReceived = false;
      }
      if (
        e_player.media.paused &&
        e_player.media.currentTime !== 0 &&
        e.hasPlayed
      ) {
        return;
      }
      const buffered = e_player.media.buffered;
      const s = e_config.smallGapLimit || 0.5;
      const r = e_config.gapDetectionThreshold || 0.3;
      const currentTime = e_player.media.currentTime;
      const l = e._getIndex(buffered, currentTime, r);
      if (l !== null && l !== 0) {
        const c = buffered.start(l) + 0.1;
        if (!(c > e_player.media.duration)) {
          const u = c - currentTime;
          if (!(u < t.BROWSER_GAP_TOLERANCE) && u <= s) {
            if (e_config.useGapJump !== false) {
              e_player.media.currentTime = e.isSafari ? c + 0.1 : c;
            }
            if (e.player) {
              e.player.emit("detectGap");
            }
            if (c !== 0.08 && e_player) {
              e_player.emit("log", {
                type: "oneevent",
                end_type: "gap",
                vid: e_player.config.vid,
                ext: {
                  video_postion: Math.floor(1000 * c),
                },
              });
            }
          }
        }
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          if (this.config.useGapJump !== false) {
            this.hasPlayed = false;
            this.seekingEventReceived = false;
            this.isSafari =
              /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
              !/Chrome/.test(navigator.userAgent) &&
              !/BlackBerry/.test(navigator.platform);
            this.on(M.WAITING, this.onGapJump);
            this.on(M.PLAY, function () {
              e.hasPlayed = true;
            });
            this.on(M.SEEKING, function () {
              e.seekingEventReceived = true;
            });
          }
        },
      },
      {
        key: "_getIndex",
        value: function (e, t, i) {
          if (
            !e ||
            !e.length ||
            (e.length === 1 && e.end(0) - e.start(0) < 0.000001)
          ) {
            return null;
          }
          for (
            var n = this._getBuffered(e), o = null, s = 0;
            s < n.length;
            s++
          ) {
            if (n[s].start > t && (s === 0 || n[s - 1].end - t <= i)) {
              o = s;
              break;
            }
          }
          return o;
        },
      },
      {
        key: "_getBuffered",
        value: function (e) {
          if (!e) {
            return [];
          }
          const t = [];
          for (let i = 0; i < e.length; i++) {
            t.push({
              start: e.start(i),
              end: e.end(i),
            });
          }
          return t;
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "gapJump";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            useGapJump: false,
            smallGapLimit: 0.5,
            gapDetectionThreshold: 0.3,
          };
        },
      },
    ],
  );
})(Plugin);
ia.BROWSER_GAP_TOLERANCE = 0.001;
const il = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onWaiting = function () {
      const e_config = e.config;
      if (
        !(
          e.jumpCnt > e_config.jumpCntMax ||
          e.timer ||
          e_config.useWaitingTimeoutJump === false
        )
      ) {
        e.timer = setTimeout(e.onJump, 1000 * e_config.waitingTime);
      }
    };
    e.onJump = function () {
      const e_player = e.player;
      const e_config = e.config;
      clearTimeout(e.timer);
      e.timer = null;
      if (
        !(e.jumpCnt > e_config.jumpCntMax) &&
        e_config.useWaitingTimeoutJump !== false &&
        (!e_player.media.paused ||
          e_player.media.currentTime === 0 ||
          !e.hasPlayed)
      ) {
        e.jumpSize = e_config.jumpSize * (e.jumpCnt + 1);
        if (e.jumpCnt === e_config.jumpSize && e.jumpSize < 6) {
          e.jumpSize = 6;
        }
        const n = e_player.currentTime + e.jumpSize;
        if (!(n > e_player.media.duration)) {
          e.jumpCnt++;
          e_player.currentTime = n;
        }
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const e = this;
          const config = this.config;
          const t_useWaitingTimeoutJump = config.useWaitingTimeoutJump;
          const t_jumpSize = config.jumpSize;
          if (t_useWaitingTimeoutJump !== false) {
            this.hasPlayed = false;
            this.jumpCnt = 0;
            this.timer = null;
            this.jumpSize = t_jumpSize;
            this.on(M.WAITING, this.onWaiting);
            this.on([M.PLAYING, M.CANPLAY], function () {
              clearTimeout(e.timer);
              e.timer = null;
              e.jumpSize = e.config.jumpSize;
            });
            this.on(M.PLAY, function () {
              e.hasPlayed = true;
            });
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "waitingTimeoutJump";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            useWaitingTimeoutJump: false,
            waitingTime: 15,
            jumpSize: 2,
            jumpCntMax: 4,
          };
        },
      },
    ],
  );
})(Plugin);
const ic = ["cdn"];
const iu = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.getSpeed = function () {
      const t =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : "cdn";
      if (
        !e.speedListCache ||
        !e.speedListCache[t] ||
        e.speedListCache[t].length <= 0
      ) {
        return 0;
      }
      let i = 0;
      e.speedListCache[t].map((e) => {
        i += e;
      });
      return Math.floor(i / e.speedListCache[t].length);
    };
    e.startTimer = function () {
      if (!Util.isMSE(e.player.video)) {
        e.initSpeedList();
        e.cnt = 0;
        e.timer = setTimeout(e.testSpeed, e.config.testTimeStep);
      }
    };
    e.initSpeedList = function () {
      e.speedListCache = {};
      ic.forEach((t) => {
        e.speedListCache[t] = [];
      });
    };
    e._onRealSpeedChange = function (t) {
      if (t.speed) {
        e.appendList(t.speed, t.type || "cdn");
      }
    };
    e.testSpeed = function () {
      clearTimeout(e.timer);
      e.timer = null;
      if (e.player && e.config.openSpeed) {
        const t = e.config;
        const i = t.url;
        const n = t.loadSize;
        const o = t.testCnt;
        const s = t.testTimeStep;
        const r =
          i + (i.indexOf("?") < 0 ? "?testst=" : "&testst=") + Date.now();
        if (!(e.cnt >= o)) {
          e.cnt++;
          try {
            const a = new Date().getTime();
            let l = null;
            const c = new XMLHttpRequest();
            e.xhr = c;
            c.open("GET", r);
            const u = {};
            const h = Math.floor(10 * Math.random());
            u.Range = "bytes=" + h + "-" + (n + h);
            if (u) {
              Object.keys(u).forEach((e) => {
                c.setRequestHeader(e, u[e]);
              });
            }
            c.onreadystatechange = function () {
              if (c.readyState === 4) {
                e.xhr = null;
                l = new Date().getTime();
                const t = (c.getResponseHeader("Content-Length") / 1024) * 8;
                const i = Math.round((1000 * t) / (l - a));
                e.appendList(i);
                e.timer = setTimeout(e.testSpeed, s);
              }
            };
            c.send();
          } catch (error) {
            console.error(error);
          }
        }
      }
    };
    e.appendList = function (t) {
      const i =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : "cdn";
      if (e.speedListCache && e.speedListCache[i]) {
        const n = e.config.saveSpeedMax;
        if (e.speedListCache[i].length >= n) {
          e.speedListCache[i].shift();
        }
        e.speedListCache[i].push(t);
        const o = e.player;
        if (o) {
          if (i === "cdn") {
            o.realTimeSpeed = t;
          } else {
            o[e.getSpeedName("realTime", i)] = t;
          }
        }
        e.updateSpeed(i);
      }
    };
    e.updateSpeed = function () {
      const t =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : "cdn";
      const speed = e.getSpeed(t);
      const e_player = e.player;
      if (e_player) {
        if (t === "cdn") {
          if (!(e_player.avgSpeed && speed === e_player.avgSpeed)) {
            e_player.avgSpeed = speed;
            e_player.emit(M.DOWNLOAD_SPEED_CHANGE, {
              speed,
              realTimeSpeed: e_player.realTimeSpeed,
            });
          }
        } else {
          const o = e.getSpeedName("avg", t);
          if (!(e_player[o] && speed === e_player[o])) {
            e_player[o] = speed;
            e_player.emit(M.DOWNLOAD_SPEED_CHANGE, {
              speed,
              realTimeSpeed: e_player.realTimeSpeed,
            });
          }
        }
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const config = this.config;
          const e_openSpeed = config.openSpeed;
          const e_addSpeedTypeList = config.addSpeedTypeList;
          if (
            (e_addSpeedTypeList == null
              ? undefined
              : e_addSpeedTypeList.length) > 0
          ) {
            ic.push.apply(ic, [...e_addSpeedTypeList]);
          }
          this.initSpeedList();
          this.on("real_time_speed", this._onRealSpeedChange);
          this.timer = null;
          this.cnt = 0;
          this.xhr = null;
          if (e_openSpeed) {
            this.on([M.LOADED_DATA, M.REPLAY], this.startTimer);
          }
        },
      },
      {
        key: "getSpeedName",
        value: function (e, t) {
          return e + "Speed" + t.toUpperCase();
        },
      },
      {
        key: "openSpeed",
        get: function () {
          return this.config.openSpeed;
        },
        set: function (e) {
          this.config.openSpeed = e;
          if (!e && this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
            return;
          }
          if (this.config.openSpeed) {
            if (this.timer) {
              return;
            }
            this.timer = setTimeout(this.testSpeed, this.config.testTimeStep);
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          const e = this;
          this.off("real_time_speed", this._onRealSpeedChange);
          this.off([M.LOADED_DATA, M.REPLAY], this.startTimer);
          ic.forEach((t) => {
            if (e.speedListCache && e.speedListCache[t]) {
              e.speedListCache[t] = [];
            }
          });
          if (this.speedListCache) {
            this.speedListCache = {};
          }
          clearTimeout(this.timer);
          this.timer = null;
          if (this.xhr && this.xhr.readyState !== 4) {
            if (this.xhr.cancel) {
              this.xhr.cancel();
            }
            this.xhr = null;
          }
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "testspeed";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            openSpeed: false,
            testCnt: 3,
            loadSize: 204800,
            testTimeStep: 3000,
            url: "",
            saveSpeedMax: 5,
            addSpeedTypeList: [],
          };
        },
      },
    ],
  );
})(Plugin);
class ih extends Plugin {
  afterCreate() {
    const e = this;
    const player = this.player;
    const config = this.config;
    const n = player.media || player.video;
    this.timer = null;
    this._lastDecodedFrames = 0;
    this._currentStuckCount = 0;
    this._lastCheckPoint = null;
    this._payload = [];
    if (!config.disabled) {
      if (n.getVideoPlaybackQuality) {
        this.on(M.PLAY, function () {
          e._startTick();
        });
        this.on(M.PAUSE, function () {
          e._stopTick();
        });
        this.on(M.ENDED, function () {
          e._stopTick();
        });
        this.on(M.EMPTIED, function () {
          e._stopTick();
        });
      }
    }
  }
  _startTick() {
    const e = this;
    this._stopTick();
    this._timer = setTimeout(() => {
      e._checkDecodeFPS();
      e._startTick();
    }, this.config.tick);
  }
  _stopTick() {
    clearTimeout(this._timer);
    this._timer = null;
  }
  _checkBuffer(e, t) {
    let enoughBuffer = false;
    const n = [];
    for (let o = 0; o < t.length; o++) {
      const start = t.start(o);
      const r = t.end(o);
      n.push({
        start,
        end: r,
      });
      if (start <= e && e <= r - 1) {
        enoughBuffer = true;
        break;
      }
    }
    return {
      enoughBuffer,
      buffers: n,
    };
  }
  _checkStuck(
    curDecodedFrames,
    totalVideoFrames,
    droppedVideoFrames,
    checkInterval,
  ) {
    const o = this.player.media || this.player.video;
    const document_hidden = document.hidden;
    const o_paused = o.paused;
    const o_readyState = o.readyState;
    const o_currentTime = o.currentTime;
    const o_buffered = o.buffered;
    if (!document_hidden && !o_paused && !(o_readyState < 4)) {
      const u = this._checkBuffer(o_currentTime, o_buffered);
      const h = u.enoughBuffer;
      const buffers = u.buffers;
      if (h) {
        if (curDecodedFrames <= this.config.reportFrame) {
          this._currentStuckCount++;
          this._payload.push({
            currentTime: o_currentTime,
            buffers,
            curDecodedFrames,
            totalVideoFrames,
            droppedVideoFrames,
            checkInterval,
          });
          if (this._currentStuckCount >= this.config.stuckCount) {
            this.emit(M.FPS_STUCK, this._payload);
            this._reset();
          }
        } else {
          this._reset();
        }
      }
    }
  }
  _reset() {
    this._payload = [];
    this._currentStuckCount = 0;
  }
  _checkDecodeFPS() {
    const e = this.player.media || this.player.video;
    if (e) {
      const t = e.getVideoPlaybackQuality();
      const i = t.totalVideoFrames;
      const n = t.droppedVideoFrames;
      const o = performance.now();
      if (i && this._lastCheckPoint) {
        const s = i - this._lastDecodedFrames;
        const r = o - this._lastCheckPoint;
        this._checkStuck(s, i, n, r);
      }
      this._lastDecodedFrames = i;
      this._lastCheckPoint = o;
    }
  }
  destroy() {
    this._stopTick();
  }
  static get pluginName() {
    return "FpsDetect";
  }
  static get defaultConfig() {
    return {
      disabled: false,
      tick: 1000,
      stuckCount: 3,
      reportFrame: 0,
    };
  }
}
I18N.use(langZhCn);
export var DefaultPreset = a(function e(t, i) {
  s(this, e);
  let n;
  let o;
  let r;
  const a = i && i.isMobileSimulateMode === "mobile";
  const l = [].concat(i.isLive ? [] : [TimeSegmentsControls, tl, t8, t3, tv], [
    tu,
    tp,
    tb,
    tR,
    tW,
    tY,
    tM,
    tF,
    tT,
    tA,
  ]);
  const c = [eN, eM, ej, to, eG, tq, tZ, t5, e$];
  this.plugins = [ir, eD].concat([...l], c, [ia, il]);
  const u = a ? "mobile" : Sniffer.device;
  switch (u) {
    case "pc":
      (n = this.plugins).push.apply(n, [ti, e1, tX, iu, ih]);
      break;
    case "mobile":
      (o = this.plugins).push.apply(o, [te]);
      break;
    default:
      (r = this.plugins).push.apply(r, [ti, e1, tX]);
  }
  if (Sniffer.os.isIpad || u === "pc") {
    this.plugins.push(it);
  }
  if (Sniffer.os.isIpad) {
    this.plugins.push(e1);
  }
  this.ignores = [];
  this.i18n = [];
});
class ig extends SimplePlayer {}
export { ig as default };
ig.defaultPreset = DefaultPreset;
ig.Util = Util;
ig.Sniffer = Sniffer;
ig.Errors = Errors;
ig.Events = M;
ig.Plugin = Plugin;
ig.BasePlugin = BasePlugin;
ig.I18N = I18N;
ig.STATE_CLASS = STATE_CLASS;
ig.InstManager = InstManager;
export var DefaultPresetEn = a(function e(t, i) {
  s(this, e);
  let n;
  let o;
  let r;
  const a = i && i.isMobileSimulateMode === "mobile";
  const l = [].concat(i.isLive ? [] : [tl, t8, t3, tv], [
    tu,
    tp,
    tb,
    tR,
    tW,
    tY,
    tM,
    tF,
    tT,
    tA,
  ]);
  const c = [eN, eM, ej, to, eG, tq, tZ, t5, e$];
  this.plugins = [ir, eD].concat([...l], c, [ia, il]);
  const u = a ? "mobile" : Sniffer.device;
  switch (u) {
    case "pc":
      (n = this.plugins).push.apply(n, [ti, e1, tX, iu, ih]);
      break;
    case "mobile":
      (o = this.plugins).push.apply(o, [te]);
      break;
    default:
      (r = this.plugins).push.apply(r, [ti, e1, tX]);
  }
  if (Sniffer.os.isIpad || u === "pc") {
    this.plugins.push(it);
  }
  this.ignores = [];
  this.i18n = [];
});
export var LivePreset = a(function e() {
  s(this, e);
  let t;
  let i;
  const n = [tu, tp, tv, tT, tb, tW, tY, tX, tA];
  this.plugins = [eM, ej, to, eG, tq].concat(n);
  switch (Sniffer.device) {
    case "pc":
      (t = this.plugins).push.apply(t, [ti, e1]);
      break;
    case "mobile":
      this.plugins.push(te);
      break;
    default:
      (i = this.plugins).push.apply(i, [ti, e1]);
  }
  this.ignores = [];
  this.i18n = [langZhCn];
});
export var MobilePreset = a(function e() {
  s(this, e);
  const t = [te, tl, tu, tp, tv, tb, tR, tW, tY, tM, tF, tT, tA];
  const i = [eN, eM, ej, to, eG, tq, tZ, t5, t8];
  this.plugins = [eD].concat(t, i);
  this.ignores = [];
  this.i18n = [langZhCn];
});
export var langZhHk = {
  LANG: "zh-hk",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "視頻下載錯誤",
      },
      mse: {
        code: 2,
        msg: "劉追加錯誤",
      },
      parse: {
        code: 3,
        msg: "解析錯誤",
      },
      format: {
        code: 4,
        msg: "格式錯誤",
      },
      decoder: {
        code: 5,
        msg: "解碼錯誤",
      },
      runtime: {
        code: 6,
        msg: "語法錯誤",
      },
      timeout: {
        code: 7,
        msg: "播放超時",
      },
      other: {
        code: 8,
        msg: "其他錯誤",
      },
    },
    HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息",
    HAVE_METADATA: "音頻/視頻的元數據已就緒",
    HAVE_CURRENT_DATA:
      "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下壹幀/毫秒",
    HAVE_FUTURE_DATA: "當前及至少下壹幀的數據是可用的",
    HAVE_ENOUGH_DATA: "可用數據足以開始播放",
    NETWORK_EMPTY: "音頻/視頻尚未初始化",
    NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網絡",
    NETWORK_LOADING: "瀏覽器正在下載數據",
    NETWORK_NO_SOURCE: "未找到音頻/視頻來源",
    MEDIA_ERR_ABORTED: "取回過程被用戶中止",
    MEDIA_ERR_NETWORK: "下載錯誤",
    MEDIA_ERR_DECODE: "解碼錯誤",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音頻/視頻格式",
    REPLAY: "重播",
    ERROR: "網絡連接似乎出現了問題",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暫停",
    PLAYNEXT_TIPS: "下壹集",
    DOWNLOAD_TIPS: "下載",
    ROTATE_TIPS: "旋轉",
    RELOAD_TIPS: "重新載入",
    FULLSCREEN_TIPS: "進入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "進入樣式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出樣式全屏",
    TEXTTRACK: "字幕",
    PIP: "畫中畫",
    SCREENSHOT: "截圖",
    LIVE: "正在直播",
    OFF: "關閉",
    OPEN: "開啟",
    MINI_DRAG: "點擊按住可拖動視頻",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "請試試",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播",
  },
};
export var langJp = {
  LANG: "jp",
  TEXT: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "ビデオダウンロードエラー",
      },
      mse: {
        code: 2,
        msg: "ストリーム追加エラー",
      },
      parse: {
        code: 3,
        msg: "解析エラー",
      },
      format: {
        code: 4,
        msg: "間違ったフォーマット",
      },
      decoder: {
        code: 5,
        msg: "デコードエラー",
      },
      runtime: {
        code: 6,
        msg: "文法エラー",
      },
      timeout: {
        code: 7,
        msg: "再生タイムアウト",
      },
      other: {
        code: 8,
        msg: "その他のエラー",
      },
    },
    HAVE_NOTHING: "オーディオ/ビデオが準備できているか情報がありません",
    HAVE_METADATA: "オーディオ/ビデオのメタデータは準備できています",
    HAVE_CURRENT_DATA:
      "現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません",
    HAVE_FUTURE_DATA: "現在、少なくとも次のフレームのデータが利用可能です",
    HAVE_ENOUGH_DATA: "利用可能なデータは再生を開始するのに十分です",
    NETWORK_EMPTY: "オーディオ/ビデオが初期化されていません",
    NETWORK_IDLE:
      "オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません",
    NETWORK_LOADING: "ブラウザーはデータをダウンロードしています",
    NETWORK_NO_SOURCE: "オーディオ/ビデオ のソースが見つかりません",
    MEDIA_ERR_ABORTED: "ユーザーによってフェッチプロセスが中止されました",
    MEDIA_ERR_NETWORK: "ダウンロード中にエラーが発生しました",
    MEDIA_ERR_DECODE: "デコード中にエラーが発生しました",
    MEDIA_ERR_SRC_NOT_SUPPORTED:
      "オーディオ/ビデオ の形式がサポートされていません",
    REPLAY: "リプレイ",
    ERROR: "ネットワークの接続に問題が発生しました",
    PLAY_TIPS: "プレイ",
    PAUSE_TIPS: "一時停止",
    PLAYNEXT_TIPS: "次をプレイ",
    DOWNLOAD_TIPS: "ダウンロード",
    ROTATE_TIPS: "回転",
    RELOAD_TIPS: "再読み込み",
    FULLSCREEN_TIPS: "フルスクリーン",
    EXITFULLSCREEN_TIPS: "フルスクリーンを終了",
    CSSFULLSCREEN_TIPS: "シアターモード",
    EXITCSSFULLSCREEN_TIPS: "シアターモードを終了",
    TEXTTRACK: "字幕",
    PIP: "ミニプレーヤー",
    SCREENSHOT: "スクリーンショット",
    LIVE: "生放送",
    OFF: "オフ",
    OPEN: "開いた",
    MINI_DRAG: "ボタンを押して働画をドラッグする",
    MINISCREEN: "小さな画面",
    REFRESH: "リフレッシュ",
    REFRESH_TIPS: "してみてください",
    FORWARD: "早送り",
    LIVE_TIP: "生放送",
  },
};
export class DanmuPanel extends Plugin {
  constructor(e) {
    super(e);
    this.set = {
      speed: 1,
      area: {},
      opacity: 1,
      fonSize: "middle",
    };
  }
  afterCreate() {
    if (Sniffer.device === "mobile") {
      this.activeEvent = "click";
    } else {
      this.activeEvent = "mouseenter";
    }
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.bind(this.activeEvent, this.onToggle);
    this.bind("mouseleave", this.onToggle);
    this.appendChild(
      ".xgplayer-panel-icon",
      new DOMParser().parseFromString(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -11 40 40" width="40" height="40">\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>\n</svg>\n',
        "image/svg+xml",
      ).firstChild,
    );
  }
  onStateChange(e) {
    if (this.config.onChangeSet) {
      this.config.onChangeSet(this.set);
    }
  }
  onToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (Util.hasClass(this.root, "slider-show")) {
      Util.removeClass(this.root, "slider-show");
    } else {
      Util.addClass(this.root, "slider-show");
    }
  }
  destroy() {
    this.unbind(["click", "touchend"], this.onStateChange);
  }
  render() {
    return '\n      <xg-icon class="xgplayer-panel">\n          <xg-panel-icon class="xgplayer-panel-icon">\n          </xg-panel-icon>\n          <xg-panel-slider class="xgplayer-panel-slider">\n            <xg-hidemode class="xgplayer-hidemode">\n              <p class="xgplayer-hidemode-font">屏蔽类型</p>\n              <ul class="xgplayer-hidemode-radio">\n                <li class="xgplayer-hidemode-scroll" id="false">滚动</li><li class="xgplayer-hidemode-top" id="false">顶部</li><li class="xgplayer-hidemode-bottom" id="false">底部</li><li class="xgplayer-hidemode-color" id="false">色彩</li>\n              </ul>\n            </xg-hidemode>\n            <xg-transparency class="xgplayer-transparency">\n              <span>不透明度</span>\n              <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n            </xg-transparency>\n            <xg-showarea class="xgplayer-showarea">\n              <div class="xgplayer-showarea-name">显示区域</div>\n              <div class="xgplayer-showarea-control">\n                <div class="xgplayer-showarea-control-up">\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                  <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                </div>\n                <div class="xgplayer-showarea-control-down">\n                  <div class="xgplayer-showarea-control-down-dots">\n                    <span class="xgplayer-showarea-onequarters-dot"></span>\n                    <span class="xgplayer-showarea-twoquarters-dot"></span>\n                    <span class="xgplayer-showarea-threequarters-dot"></span>\n                    <span class="xgplayer-showarea-full-dot"></span>\n                  </div>\n                  <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                </div>\n              </div>\n            </xg-showarea>\n            <xg-danmuspeed class="xgplayer-danmuspeed">\n              <div class="xgplayer-danmuspeed-name">弹幕速度</div>\n              <div class="xgplayer-danmuspeed-control">\n                <div class="xgplayer-danmuspeed-control-up">\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">慢</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">中</span>\n                  <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">快</span>\n                </div>\n                <div class="xgplayer-danmuspeed-control-down">\n                  <div class="xgplayer-danmuspeed-control-down-dots">\n                    <span class="xgplayer-danmuspeed-small-dot"></span>\n                    <span class="xgplayer-danmuspeed-middle-dot"></span>\n                    <span class="xgplayer-danmuspeed-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                </div>\n              </div>\n            </xg-danmuspeed>\n            <xg-danmufont class="xgplayer-danmufont">\n              <div class="xgplayer-danmufont-name">字体大小</div>\n              <div class="xgplayer-danmufont-control">\n                <div class="xgplayer-danmufont-control-up">\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">小</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">中</span>\n                  <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">大</span>\n                </div>\n                <div class="xgplayer-danmufont-control-down">\n                  <div class="xgplayer-danmufont-control-down-dots">\n                    <span class="xgplayer-danmufont-small-dot"></span>\n                    <span class="xgplayer-danmufont-middle-dot"></span>\n                    <span class="xgplayer-danmufont-large-dot"></span>\n                  </div>\n                  <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                </div>\n              </div>\n            </xg-danmufont>\n          </xg-panel-slider>\n      </xg-icon>';
  }
  static get pluginName() {
    return "danmuPanel";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_RIGHT,
      index: 11,
      onChangeSet: function (e) {
        console.log("DanmuPanel:".concat(e));
      },
      speed: 1,
      area: {},
      opacity: 1,
      fonSize: "middle",
    };
  }
}
const iE =
  '<dk-switch class="danmu-switch">\n<span class="txt">弹</span>\n</dk-switch>';
export class DanmuIcon extends Plugin {
  afterCreate() {
    this.initIcons();
    this.onStateChange = this.onStateChange.bind(this);
    this.bind(["click", "touchend"], this.onStateChange);
  }
  registerIcons() {
    return {
      openDanmu: {
        icon: iE,
        class: "danmu-switch-open",
      },
      closeDanmu: {
        icon: iE,
        class: "danmu-switch-closed",
      },
    };
  }
  switchState(e) {
    if (e) {
      this.setAttr("data-state", "active");
    } else {
      this.setAttr("data-state", "normal");
    }
    this.switchTips(e);
  }
  initIcons() {
    const icons = this.icons;
    const t = this.find(".xgplayer-icon");
    t.appendChild(icons.openDanmu);
    t.appendChild(icons.closeDanmu);
  }
  switchTips(e) {
    const t = this.find(".xg-tips");
    if (t) {
      this.changeLangTextKey(t, e ? "OFF" : "OPEN");
    }
  }
  onStateChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const t = this.root.getAttribute("data-state") === "active";
    this.switchState(!t);
    if (this.config.onSwitch) {
      this.config.onSwitch(e, !t);
    }
  }
  destroy() {
    this.unbind(["click", "touchend"], this.getMini);
  }
  render() {
    return '\n    <xg-icon class="danmu-icon">\n      <div class="xgplayer-icon">\n      </div>\n      '.concat(
      eV(this, "OPEN", this.playerConfig.isHideTips),
      "\n    </xg-icon>",
    );
  }
  static get pluginName() {
    return "danmuIcon";
  }
  static get defaultConfig() {
    return {
      position: eo.CONTROLS_RIGHT,
      index: 11,
      onSwitch: function (e, t) {},
    };
  }
}
export class Danmu extends Plugin {
  constructor(e) {
    super(e);
    this.danmujs = null;
    this.danmuPanel = null;
    this.isOpen = false;
    this.seekCost = 0;
    this.intervalId = 0;
    this.isUseClose = false;
  }
  afterCreate() {
    const e = this;
    if (this.playerConfig.isLive) {
      this.config.isLive = true;
    }
    this.initDanmu();
    this.registerExtIcons();
    this.once(M.TIME_UPDATE, function () {
      if (e.config.defaultOpen && !e.isUseClose) {
        e.start();
      }
    });
    this.on(M.PAUSE, function () {
      if (e.isOpen && e.danmujs) {
        e.danmujs.pause();
      }
    });
    this.on(M.PLAY, function () {
      if (e.isOpen && e.danmujs) {
        e.danmujs.play();
      }
    });
    this.on(M.SEEKING, function () {
      e.seekCost = window.performance.now();
      if (!e.config.isLive && e.danmujs) {
        e.danmujs.stop();
      }
    });
    this.on(M.VIDEO_RESIZE, function () {
      e.resize();
    });
    this.on(M.SEEKED, function () {
      if (e.danmujs && e.isOpen) {
        if (e.intervalId) {
          Util.clearTimeout(e, e.intervalId);
          e.intervalId = null;
        }
        if (window.performance.now() - e.seekCost > 300) {
          e.danmujs.start();
        } else {
          e.intervalId = Util.setTimeout(
            e,
            function () {
              e.danmujs.start();
              e.intervalId = null;
            },
            300,
          );
        }
      }
    });
  }
  onPluginsReady() {
    const e = this.player.plugins.pc;
    if (e) {
      if (e.onVideoDblClick) {
        this.bind("dblclick", e.onVideoDblClick);
      }
      if (e.onVideoClick) {
        this.bind("click", e.onVideoClick);
      }
    }
  }
  initDanmu() {
    const player = this.player;
    const config = this.config;
    const config_1 = this.config;
    const i_channelSize = config_1.channelSize;
    const i_fontSize = config_1.fontSize;
    const i_opacity = config_1.opacity;
    const i_mouseControl = config_1.mouseControl;
    const i_mouseControlPause = config_1.mouseControlPause;
    const i_area = config_1.area;
    const i_defaultOff = config_1.defaultOff;
    const u = {
      container: this.root,
      player: player.media,
      comments: this.config.comments,
      live: config.isLive,
      defaultOff: i_defaultOff,
      area: i_area,
      mouseControl: i_mouseControl,
      mouseControlPause: i_mouseControlPause,
    };
    if (config.ext) {
      Object.keys(config.ext).map((e) => {
        u[e] = config.ext[e];
      });
    }
    const h = new iC(u);
    this.danmujs = h;
    player.danmu = h;
    this.setFontSize(i_fontSize, i_channelSize);
    this.setArea(i_area);
    this.resize();
    if (i_opacity !== 1) {
      this.setOpacity(i_opacity);
    }
  }
  registerExtIcons() {
    const e = this;
    const player = this.player;
    const config = this.config;
    if (config.panel && player.controls) {
      this.danmuPanel = player.controls.registerPlugin(
        DanmuPanel,
        {
          config: {
            onChangeset: function (t) {
              e.changeSet(t);
            },
          },
        },
        DanmuPanel.pluginName,
      );
    }
    const i_switchConfig = config.switchConfig;
    if (!config.closeDefaultBtn && player.controls) {
      const o = {
        config: {
          onSwitch: function (t, i) {
            e.onSwitch(t, i);
          },
        },
      };
      Object.keys(i_switchConfig).map((e) => {
        o.config[e] = i_switchConfig[e];
      });
      this.danmuButton = player.controls.registerPlugin(
        DanmuIcon,
        o,
        DanmuIcon.pluginName,
      );
      if (this.config.defaultOpen) {
        this.danmuButton.switchState(true);
      }
    }
  }
  changeSet(e) {}
  onSwitch(e, t) {
    this.emitUserAction(e, "switch_danmu", {
      prop: "isOpen",
      from: !t,
      to: t,
    });
    if (t) {
      this.start();
    } else {
      this.stop();
    }
  }
  start() {
    const e = this;
    if (!this.isOpen && this.danmujs) {
      this.isUseClose = false;
      this.show();
      this.resize();
      Util.setTimeout(
        this,
        function () {
          e.danmujs.start();
          if (e.player.paused) {
            e.danmujs.pause();
          }
          e.isOpen = true;
        },
        0,
      );
    }
  }
  stop() {
    this.isUseClose = true;
    if (this.isOpen && this.danmujs) {
      this.danmujs.stop();
      if (this.config.isLive) {
        this.clear();
      }
      this.isOpen = false;
      this.hide();
    }
  }
  clear() {
    if (this.danmujs) {
      this.danmujs.clear();
    }
  }
  setCommentLike(e, t) {
    if (this.danmujs) {
      this.danmujs.setCommentLike(e, t);
    }
  }
  setCommentDuration(e, t) {
    if (this.danmujs) {
      this.danmujs.setCommentDuration(e, t);
    }
  }
  setAllDuration(e, t) {
    if (this.danmujs) {
      this.danmujs.setAllDuration(e, t);
    }
  }
  setCommentID(e, t) {
    if (this.danmujs) {
      this.danmujs.setCommentID(e, t);
    }
  }
  hideMode(e) {
    if (this.danmujs) {
      this.danmujs.hide(e);
    }
  }
  showMode(e) {
    if (this.danmujs) {
      this.danmujs.show(e);
    }
  }
  setArea(e) {
    if (this.danmujs) {
      this.danmujs.setArea(e);
    }
  }
  setOpacity(e) {
    if (this.danmujs) {
      this.danmujs.setOpacity(e);
    }
  }
  setFontSize(e, t) {
    if (this.danmujs) {
      this.danmujs.setFontSize(e, t);
    }
  }
  resize() {
    if (this.danmujs) {
      this.danmujs.resize();
    }
  }
  sendComment(e) {
    if (this.danmujs) {
      this.danmujs.sendComment(e);
    }
  }
  updateComments(e, t) {
    if (this.danmujs) {
      this.danmujs.updateComments(e, t);
    }
  }
  hideIcon() {
    if (this.danmuButton) {
      this.danmuButton.hide();
    }
  }
  showIcon() {
    if (this.danmuButton) {
      this.danmuButton.show();
    }
  }
  destroy() {
    this.danmujs.stop();
    this.danmujs.destroy();
    this.danmujs = null;
    this.player.danmu = null;
    const danmuButton = this.danmuButton;
    const danmuPanel = this.danmuPanel;
    if (this.danmuButton && this.danmuButton.root && danmuButton.__destroy) {
      danmuButton.__destroy();
    }
    if (this.danmuPanel && this.danmuPanel.root && danmuPanel.__destroy) {
      danmuPanel.__destroy();
    }
    this.danmuButton = null;
    this.danmuPanel = null;
  }
  render() {
    return '<xg-danmu class="xgplayer-danmu">\n    </xg-danmu>';
  }
  static get pluginName() {
    return "danmu";
  }
  static get defaultConfig() {
    return {
      comments: [],
      area: {
        start: 0,
        end: 1,
      },
      closeDefaultBtn: false,
      defaultOff: false,
      panel: false,
      panelConfig: {},
      switchConfig: {},
      defaultOpen: true,
      isLive: false,
      channelSize: 24,
      fontSize: 14,
      opacity: 1,
      mouseControl: false,
      mouseControlPause: false,
      ext: {},
      style: {},
    };
  }
}
class iS extends _.A {
  constructor(e) {
    var i;
    i = super();
    i._onChange = function (e) {
      const textTracks = i._media.textTracks;
      if (textTracks && textTracks.length !== 0) {
        const n = [];
        const o = [];
        let s = -1;
        for (let r = 0; r < textTracks.length; r++) {
          const textTrack = textTracks[r];
          if (textTrack.kind === "subtitles") {
            n.push({
              id: textTrack.id || textTrack.language,
              language: textTrack.language,
              text: textTrack.label,
              isDefault: textTrack.mode === "showing",
            });
            if (s === -1 && textTrack.mode === "showing") {
              s = r;
            }
            o.push(textTrack.language);
          }
        }
        if (o.join("|") !== i._languages) {
          i._languages = o.join("|");
          i.emit("reset", {
            list: n,
            isOpen: s > -1,
          });
        } else if (s === -1) {
          i.emit("off");
        } else if (i.curIndex !== s) {
          i.emit("change", n[s]);
        }
        i.curIndex = s;
      }
    };
    i._media = e;
    i._list = [];
    i._languages = "";
    i.curIndex = -1;
    i._init();
    return i;
  }
  _init() {
    this._media.textTracks.addEventListener("change", this._onChange);
  }
  switch(e) {
    for (let t = this._media.textTracks, i = 0; i < t.length; i++) {
      const n = t[i];
      if (n.language === e.language) {
        n.mode = "showing";
      } else if (n.mode === "showing") {
        n.mode = "disabled";
      }
    }
  }
  switchOff() {
    for (let e = this._media.textTracks, t = 0; t < e.length; t++) {
      e[t].mode = "disabled";
    }
    this.curIndex = -1;
  }
  destroy() {
    this._media.textTracks.removeEventListener("change", this._onChange);
    this._media = null;
    this._list = [];
    this._languages = "";
    this.curIndex = -1;
  }
}
const iI = "text-close";
function iP(e) {
  let t = -1;
  e.forEach((e, i) => {
    if (!(e.id || e.language)) {
      e.id = i;
    }
    e.id = String(e.id);
    if (!e.url) {
      e.url = e.src;
    }
    if (!e.text) {
      e.text = e.label;
    }
    if (!e.language) {
      e.language = e.srclang;
    }
    if (e.isDefault === undefined) {
      e.isDefault = e.default || false;
    }
    if (e.isDefault || e.default) {
      if (t < 0) {
        t = i;
      } else {
        e.isDefault = e.default = false;
      }
    }
  });
  return t;
}
export var TextTrack = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e._onOff = function () {
      e.switchOffSubtitle();
    };
    e._onChange = function (t) {
      const i = e.getSubTitleIndex(e.config.list, t);
      if (!(i < 0)) {
        e.updateCurItem(i, t);
      }
    };
    e._onListReset = function (t) {
      e.updateList(t);
    };
    e.clickSwitch = function (t, i) {
      const n = i.type === "close" || i.type === iI;
      if (e.subTitles) {
        if (n) {
          e.subTitles.switchOff();
        } else {
          e.switchSubTitle({
            language: i.language,
            id: i.id,
          });
        }
      }
    };
    e.onIconClick = function (t) {
      if (e.curItem) {
        e.subTitles.switchOff();
      } else {
        e.switchOnSubtitle(t);
      }
    };
    e.onPlayerFocus = function (t) {
      if (e.subTitles && e.config.style.follow) {
        e.rePosition();
      }
    };
    e.onPlayerBlur = function (t) {
      if (
        e.subTitles &&
        e.config.style.follow &&
        !e.playerConfig.marginControls &&
        e.subTitles.root
      ) {
        e.subTitles.root.style.transform = "translate(0, 0)";
      }
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "beforeCreate",
        value: function (e) {
          const t = e.player.config.texttrack || e.player.config.textTrack;
          if (Util.typeOf(t) === "Array") {
            e.config.list = t;
          }
        },
      },
      {
        key: "afterCreate",
        value: function () {
          const config = this.config;
          const e_list = config.list;
          const e_mode = config.mode;
          const o = iP(e_list);
          m(t, "afterCreate", this, 3)([]);
          this.curIndex = -1;
          this.lastIndex = -1;
          this.curItem = null;
          this._nativeTracks = null;
          this.handlerClickSwitch = this.hook(
            "subtitle_change",
            this.clickSwitch,
          );
          if (e_mode === "native") {
            this._initNativeSubtitle();
          } else if (o >= 0) {
            this._initExtSubTitle(o);
          }
        },
      },
      {
        key: "_initNativeSubtitle",
        value: function () {
          const player = this.player;
          if (!player._subTitles) {
            player._subTitles = new iS(player.media);
          }
          this.subTitles = player._subTitles;
          this.subTitles.on("off", this._onOff);
          this.subTitles.on("change", this._onChange);
          this.subTitles.on("reset", this._onListReset);
        },
      },
      {
        key: "_initExtSubTitle",
        value: function (e) {
          const config = this.config;
          const t_list = config.list;
          const t_style = config.style;
          const t_isDefaultOpen = config.isDefaultOpen;
          const t_updateMode = config.updateMode;
          const t_renderMode = config.renderMode;
          if (t_isDefaultOpen && e < 0 && t_list.length > 0) {
            e = 0;
            t_list[0].isDefault = true;
          }
          const a = {
            subTitles: t_list,
            defaultOpen: t_isDefaultOpen,
            updateMode: t_updateMode,
            renderMode: t_renderMode,
            debugger: this.config.debugger,
            domRender: true,
          };
          Object.keys(t_style).map((e) => {
            a[e] = t_style[e];
          });
          if (!this.playerConfig.marginControls && this.player.controls.root) {
            this.on(M.PLAYER_FOCUS, this.onPlayerFocus);
            this.on(M.PLAYER_BLUR, this.onPlayerBlur);
          }
          const player = this.player;
          if (player._subTitles) {
            if (player._subTitles._isOpen) {
              e = this.getSubTitleIndex(
                this.config.list,
                player._subTitles.currentText,
              );
            }
          } else {
            player._subTitles = new iw.A(a);
            player._subTitles.attachPlayer(this.player);
          }
          this.subTitles = player._subTitles;
          this.subTitles.on("off", this._onOff);
          this.subTitles.on("change", this._onChange);
          this.subTitles.on("reset", this._onListReset);
          if (t_style.follow && this.subTitles.root) {
            Util.addClass(this.subTitles.root, "follow-control");
          }
          this._renderList(t_list, t_isDefaultOpen, e);
        },
      },
      {
        key: "_renderList",
        value: function (e, t, i) {
          if (e && e.length !== 0) {
            if (t) {
              e[(i = i < 0 ? 0 : i)].isDefault = true;
              this.curIndex = i;
              this.curItem = e[i];
              this.switchIconState(true);
            } else {
              this.switchIconState(false);
            }
            if (this.player.isCanplay && e.length > 0) {
              this.renderItemList(e);
              this.show();
            }
          }
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            textTrackOpen: {
              icon: "",
              class: "xg-texttrak-open",
            },
            textTrackClose: {
              icon: "",
              class: "xg-texttrak-close",
            },
          };
        },
      },
      {
        key: "show",
        value: function (e) {
          if (this.config.list && !(this.config.list.length < 1)) {
            Util.addClass(this.root, "show");
          }
        },
      },
      {
        key: "getSubTitleIndex",
        value: function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  id: "",
                  language: "",
                };
          let i = -1;
          if (t && (t.id || t.language)) {
            e.forEach((e, n) => {
              let o;
              let s;
              o = Util.isNotNull(e.id) && Util.isNotNull(t.id) && e.id === t.id;
              s =
                Util.isNotNull(e.language) &&
                Util.isNotNull(t.language) &&
                e.language === t.language;
              if (o || s) {
                i = n;
              }
            });
          }
          return i;
        },
      },
      {
        key: "updateSubtitles",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : [];
          const t =
            !(arguments.length > 1) ||
            arguments[1] === undefined ||
            arguments[1];
          if (e) {
            this.updateList({
              list: e,
            });
            if (this.subTitles) {
              this.subTitles.setSubTitles(
                this.config.list,
                this.curIndex > -1,
                t,
              );
            }
          }
        },
      },
      {
        key: "updateList",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          if (e.list) {
            const t = [];
            e.list.forEach((e) => {
              t.push(e);
            });
            const i = iP(t);
            if (e.isOpen) {
              this.curIndex = i;
              this.curItem = i > -1 ? t[i] : null;
            } else {
              this.curIndex = -1;
              this.curItem = null;
            }
            this.config.list = t;
            if (t.length > 0) {
              this.show();
            } else {
              this.switchOffSubtitle();
              this.hide();
            }
            this.renderItemList();
          }
        },
      },
      {
        key: "switchSubTitle",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {
                  id: "",
                  language: "",
                };
          this.switchIconState(true);
          if (!(this.getSubTitleIndex(this.config.list, e) < 0)) {
            this.subTitles.switch(e).catch((e) => {});
          }
        },
      },
      {
        key: "switchOffSubtitle",
        value: function (e) {
          this.emit("subtitle_change", {
            off: true,
            isListUpdate: false,
            list: [],
          });
          this.lastIndex = this.curIndex;
          this.curIndex = -1;
          this.curItem = null;
          this.switchIconState(false);
          this.renderItemList();
        },
      },
      {
        key: "switchOnSubtitle",
        value: function () {
          const e = this.config.list[this.lastIndex > -1 ? this.lastIndex : 0];
          this.switchIconState(true);
          this.switchSubTitle(e);
        },
      },
      {
        key: "switchIconState",
        value: function (e) {
          this.setAttr("data-state", e ? "open" : "close");
        },
      },
      {
        key: "onItemClick",
        value: function (e, i) {
          const e_delegateTarget = e.delegateTarget;
          const language = e_delegateTarget.getAttribute("language");
          const id = e_delegateTarget.getAttribute("data-id");
          const r = e_delegateTarget.getAttribute("data-type");
          m(t, "onItemClick", this, 3)(arguments);
          this.handlerClickSwitch(e, {
            language,
            id,
            type: r,
          });
        },
      },
      {
        key: "changeCurrentText",
        value: function () {
          if (!this.isIcons) {
            const e = this.config;
            const t = e.list;
            const i = e.closeText;
            const n = this.curIndex;
            if (n - 1 < 0) {
              this.find(".icon-text").innerHTML = this.getTextByLang(
                i,
                "iconText",
              );
            } else if (n - 1 < t.length) {
              const o = t[n - 1];
              if (!o) {
                return;
              }
              this.find(".icon-text").innerHTML = this.getTextByLang(
                o,
                "iconText",
              );
            }
          }
        },
      },
      {
        key: "updateCurItem",
        value: function (e, t) {
          this.curIndex = e;
          this.curItem = this.config.list[e - 1];
          this.renderItemList();
          this.emit("subtitle_change", {
            off: false,
            isListUpdate: false,
            list: [],
            ...t,
          });
        },
      },
      {
        key: "renderItemList",
        value: function () {
          const e = this;
          const config = this.config;
          const i_list = config.list;
          const i_closeText = config.closeText;
          const i_needCloseText = config.needCloseText;
          const r = [];
          let curIndex = this.curIndex;
          const curIndex_1 = this.curIndex;
          if (i_needCloseText) {
            r.push({
              showText: this.getTextByLang(i_closeText),
              "data-type": iI,
              selected: this.curIndex === -1,
            });
            curIndex++;
          }
          i_list.map((t, i) => {
            const n = {
              language: t.language || t.srclang || "",
              "data-id": t.id || "",
            };
            n.selected = e.curIndex === i;
            n.showText = e.getTextByLang(t);
            r.push(n);
          });
          m(t, "renderItemList", this, 3)([r, curIndex]);
          this.curIndex = curIndex_1;
          this.curItem = i_list[curIndex_1];
        },
      },
      {
        key: "rePosition",
        value: function () {
          const fitVideo = this.config.style.fitVideo;
          const t =
            0 - this.player.controls.root.getBoundingClientRect().height;
          if (!fitVideo) {
            this.subTitles.root.style.transform = "translate(0, ".concat(
              t,
              "px)",
            );
            return;
          }
          const player = this.player;
          const i_video = player.video;
          const o = player.root.getBoundingClientRect();
          const o_height = o.height;
          const o_width = o.width;
          let a =
            (parseInt((i_video.videoHeight / i_video.videoWidth) * 100, 10) *
              o_width) /
            100;
          if (a > o_height) {
            a = o_height;
          }
          const l = (o_height - a) / 2 - t;
          if (l < 0) {
            this.subTitles.root.style.transform = "translate(0, ".concat(
              l,
              "px)",
            );
          }
        },
      },
      {
        key: "destroy",
        value: function () {
          if (this.subTitles) {
            this.subTitles.destroy();
            this.subTitles = null;
          }
          m(t, "destroy", this, 3)([]);
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "texttrack";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            ...tV.defaultConfig,
            position: eo.CONTROLS_RIGHT,
            index: 6,
            list: [],
            isDefaultOpen: true,
            style: {
              follow: true,
              mode: "stroke",
              followBottom: 50,
              fitVideo: true,
              offsetBottom: 2,
              baseSizeX: 49,
              baseSizeY: 28,
              minSize: 16,
              minMobileSize: 13,
              line: "double",
              fontColor: "#fff",
            },
            closeText: {
              text: "不开启",
              iconText: "字幕",
            },
            needCloseText: true,
            className: "xgplayer-texttrack",
            hidePortrait: false,
            isShowIcon: true,
            renderMode: "normal",
            mode: "external",
            debugger: false,
          };
        },
      },
    ],
  );
})(tV);
const iL = a(
  function e() {
    s(this, e);
    this.timeID = null;
    this.func = null;
  },
  [
    {
      key: "repeat",
      value: function (e, t) {
        const i = this;
        if (this.func === null) {
          this.func = e;
        }
        if (this.func === e) {
          this.timeID = setTimeout(() => {
            e();
            i.repeat(e, t);
          }, t);
        }
      },
    },
    {
      key: "clear",
      value: function () {
        clearTimeout(this.timeID);
      },
    },
  ],
);
function iR() {
  return new DOMParser().parseFromString(
    '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="11.8438" cy="11.9238" r="3.5" stroke="#009995" stroke-width="1.2" stroke-linejoin="bevel"/>\n<path d="M14.5234 14.5293L15.9984 15.9993" stroke="#009995" stroke-width="1.2" stroke-linejoin="bevel"/>\n<path d="M5.57422 8.57422V5.57422H8.57422" stroke="#009995" stroke-width="1.2"/>\n<path d="M8.57422 18.4238L5.57422 18.4238L5.57422 15.4238" stroke="#009995" stroke-width="1.2"/>\n<path d="M15.4238 5.57422L18.4238 5.57422L18.4238 8.57422" stroke="#009995" stroke-width="1.2"/>\n<path d="M18.4238 15.4238L18.4238 18.4238L15.4238 18.4238" stroke="#009995" stroke-width="1.2"/>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
function iD() {
  return new DOMParser().parseFromString(
    '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="11.8438" cy="11.9238" r="3.5" stroke="white" stroke-width="1.2" stroke-linejoin="bevel"/>\n<path d="M14.5234 14.5293L15.9984 15.9993" stroke="white" stroke-width="1.2" stroke-linejoin="bevel"/>\n<path d="M5.57422 8.57422V5.57422H8.57422" stroke="white" stroke-width="1.2"/>\n<path d="M8.57422 18.4238L5.57422 18.4238L5.57422 15.4238" stroke="white" stroke-width="1.2"/>\n<path d="M15.4238 5.57422L18.4238 5.57422L18.4238 8.57422" stroke="white" stroke-width="1.2"/>\n<path d="M18.4238 15.4238L18.4238 18.4238L15.4238 18.4238" stroke="white" stroke-width="1.2"/>\n</svg>\n',
    "image/svg+xml",
  ).firstChild;
}
export var Magnifier = ((e) => {
  function t() {
    let e;
    s(this, t);
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    e = o(this, t, [].concat(n));
    e.onMouseMove = function (t) {
      if (e.isOpen) {
        e.position(t);
      }
    };
    e.onLeavePlayer = function (t) {
      e.isEnter = false;
      e.hideTool();
    };
    e.onEnterPlayer = function (t) {
      e.isEnter = true;
      if (e.isOpen) {
        e.showTool();
      }
    };
    e.handleIconSwitch = function () {
      e.switchMagnifier();
      const t = e.isOpen ? "open" : "off";
      e.setAttr("data-state", t);
    };
    return e;
  }
  h(t, e);
  return a(
    t,
    [
      {
        key: "afterCreate",
        value: function () {
          const config = this.config;
          this.renderRoot = Util.createDom("div", "", {}, "magnifier-root");
          (this.player.innerContainer || this.player.root).appendChild(
            this.renderRoot,
          );
          this.canvas = document.createElement("canvas");
          this.renderRoot.appendChild(this.canvas);
          Util.addClass(this.canvas, "magnifier-canvas");
          this.canvasCtx = this.canvas.getContext("2d");
          this.canvas.width = config.magnifierWidth || 200;
          this.canvas.height = config.magnifierHeight || 120;
          this.ratio = config.magnifierRatio || 1;
          this.isOpen = false;
          this.isEnter = false;
          this.contentY = 0;
          this.contentX = 0;
          this.initIcons();
          this.bindEvents();
        },
      },
      {
        key: "bindEvents",
        value: function () {
          this.player.root.addEventListener("mousemove", this.onMouseMove);
          this.player.on(M.ENTER_PLAYER, this.onEnterPlayer);
          this.player.on(M.LEAVE_PLAYER, this.onLeavePlayer);
          this.bind(["click", "touchend"], this.handleIconSwitch);
        },
      },
      {
        key: "unbindEvents",
        value: function () {
          this.player.root.removeEventListener("mousemove", this.onMouseMove);
          this.unbind(["click", "touchend"], this.handleIconSwitch);
        },
      },
      {
        key: "hideTool",
        value: function () {
          this.renderRoot.style.display = "none";
        },
      },
      {
        key: "showTool",
        value: function () {
          if (
            window
              .getComputedStyle(this.renderRoot, null)
              .getPropertyValue("display") === "none"
          ) {
            return (this.renderRoot.style.display = "block");
          }
        },
      },
      {
        key: "position",
        value: function (e) {
          const t = this.player.root.getBoundingClientRect();
          const width = this.canvas.width;
          const height = this.canvas.height;
          const o = e.pageX - t.left;
          const s = e.pageY - t.top;
          const t_width = t.width;
          const t_height = t.height;
          this.canvas.style.left = `${(o > 0 ? (o < t_width ? o - width / 2 : t_width - width / 2) : -width / 2) + t.left - t.left}px`;
          this.canvas.style.top = `${(s > 0 ? (s < t_height ? s - height / 2 : t_height - height / 2) : -height / 2) + t.top - t.top}px`;
          this.contentX = o;
          this.contentY = s;
        },
      },
      {
        key: "switchMagnifier",
        value: function () {
          if (this.isOpen) {
            this.stopRender();
            this.hideTool();
          } else {
            if (this.isEnter) {
              this.showTool();
            }
            this.startRender();
          }
          this.isOpen = !this.isOpen;
        },
      },
      {
        key: "startRender",
        value: function () {
          const e = this;
          const config = this.config;
          const t_magnifierWidth = config.magnifierWidth;
          const t_magnifierHeight = config.magnifierHeight;
          const t_interval = config.interval;
          const canvas = this.canvas;
          canvas.width = t_magnifierWidth;
          canvas.height = t_magnifierHeight;
          if (!this.videoTimer) {
            this.videoTimer = new iL();
            this.videoTimer.repeat(function () {
              e.update();
            }, t_interval);
          }
        },
      },
      {
        key: "stopRender",
        value: function () {
          if (this.videoTimer) {
            this.videoTimer.clear();
            this.videoTimer = null;
          }
        },
      },
      {
        key: "update",
        value: function () {
          const player = this.player;
          const e_media = player.media;
          const t_videoWidth = e_media.videoWidth;
          const t_videoHeight = e_media.videoHeight;
          const width = this.canvas.width;
          const height = this.canvas.height;
          this.canvasCtx.fillRect(0, 0, width, height);
          const r = player.root.getBoundingClientRect();
          const a =
            ((this.contentX - width / 2 / this.ratio) * t_videoWidth) / r.width;
          const l =
            ((this.contentY - height / 2 / this.ratio) * t_videoHeight) /
            r.height;
          const c = ((width / this.ratio) * t_videoWidth) / r.width;
          const u = ((height / this.ratio) * t_videoHeight) / r.height;
          let h = a > 0 ? c : c + a;
          let d = l > 0 ? u : u + l;
          if (r.width < this.contentX + width / 4 / this.ratio) {
            h =
              c -
              ((this.contentX + width / 4 / this.ratio - r.width) *
                t_videoWidth) /
                r.width;
          }
          if (r.height < this.contentY + height / 4 / this.ratio) {
            d =
              u -
              ((this.contentY + height / 4 / this.ratio - r.height) *
                t_videoHeight) /
                r.height;
          }
          const f = a > 0 ? 0 : width / 2 - this.contentX * this.ratio;
          const g = l > 0 ? 0 : width / 2 - this.contentY * this.ratio;
          const p =
            a > 0 ? width : width - (width / 2 - this.contentX * this.ratio);
          const v =
            l > 0 ? height : height - (height / 2 - this.contentY * this.ratio);
          this.canvasCtx.drawImage(
            player.media,
            a > 0 ? a : 0,
            l > 0 ? l : 0,
            h,
            d,
            f < 0 ? 0 : f,
            g < 0 ? 0 : g,
            p > 0 ? p : 0,
            v > 0 ? v : 0,
          );
        },
      },
      {
        key: "initIcons",
        value: function () {
          const icons = this.icons;
          const t = this.find(".xgplayer-icon");
          t.appendChild(icons.magnifierOpen);
          t.appendChild(icons.magnifierOff);
          this.setAttr("data-state", "off");
        },
      },
      {
        key: "registerIcons",
        value: function () {
          return {
            magnifierOpen: {
              icon: iR,
              class: "xg-magnifier-open",
            },
            magnifierOff: {
              icon: iD,
              class: "xg-magnifier-off",
            },
          };
        },
      },
      {
        key: "destroy",
        value: function () {
          if (this.videoTimer) {
            this.videoTimer.clear();
            this.videoTimer = null;
          }
          this.unbindEvents();
          (this.player.innerContainer || this.player.root).removeChild(
            this.renderRoot,
          );
        },
      },
      {
        key: "render",
        value: function () {
          return `<xg-icon class='xgplayer-magnifier'>
    <div class="xgplayer-icon">
    </div>
    </xg-icon>`;
        },
      },
    ],
    [
      {
        key: "pluginName",
        get: function () {
          return "magnifier";
        },
      },
      {
        key: "defaultConfig",
        get: function () {
          return {
            disable: true,
            magnifierWidth: 200,
            magnifierHeight: 200,
            magnifierRatio: 2,
            interval: 100,
            index: 2,
            position: eo.CONTROLS_RIGHT,
          };
        },
      },
    ],
  );
})(Plugin);
export class HeatMap extends Plugin {
  constructor(e) {
    super(e);
    this.canvasHeight = 0;
    this.canvasWidth = 0;
    this.width = 0;
    this.height = 0;
    this.dataFloatLen = 2;
    this.xData = [];
    this.yData = [];
    this.yMax = 0;
    this._duration = 0;
    this.curData = [];
  }
  afterPlayerInit() {
    if (!this.root) {
      this.createRoot();
      this.reset();
    }
  }
  afterCreate() {
    const e = this;
    this.on(M.VIDEO_RESIZE, function () {
      e.resize();
    });
    this.on(M.DURATION_CHANGE, function () {
      e._duration = e.player.duration;
      e.reset();
    });
  }
  setConfig(e) {
    const t = this;
    Object.keys(e).forEach((i) => {
      t.config[i] = e[i];
    });
    this.reset();
  }
  reset() {
    const data = this.config.data;
    this.setData(data);
    this.resize();
  }
  createRoot() {
    if (!this.root) {
      const e = this.config.mode;
      const t = this.player.plugins.progress.root;
      const i = Util.createDom(
        "div",
        "",
        {},
        `xg-heatmap ${e === "activeShow" ? "xg-heatmap-active-show" : "xg-heatmap-normal"}`,
      );
      const n = t.children.length > 0 ? t.children[0] : null;
      t.insertBefore(i, n);
      this.root = i;
      const o = Util.createDom("canvas", "", {}, "xg-heatmap-canvas");
      this.root.appendChild(o);
      this.root.style.height = "".concat(this.config.height, "px");
      this.canvas = o;
    }
  }
  resize() {
    const dpi = this.config.dpi;
    const t = this.root.getBoundingClientRect();
    const t_width = t.width;
    const t_height = t.height;
    if (t_width !== this.width || t_height * dpi !== this.height) {
      this.width = t_width;
      this.height = t_height;
      this.canvas.width = this.canvasWidth = t_width * dpi;
      this.canvas.height = this.canvasHeight = t_height * dpi;
      this.yMax = 0;
      if (this.curData.length) {
        this.setData();
        this.drawLinePath();
      }
    }
  }
  formatData(e, t, score) {
    const n = [];
    if (e.length < 1) {
      return n;
    }
    const o = parseInt(1000 * t, 10);
    if (Util.typeOf(e[0]) === "Object" && e[0].time !== undefined) {
      if (!o) {
        return n;
      }
      let s = 1;
      let r = 0;
      e.forEach((e) => {
        const t = parseInt(1000 * e.time, 10);
        if (r && (s < 0 || e.time - r < s)) {
          s = e.time - r;
        }
        r = e.time;
        n.push({
          ...e,
          percent: t / o,
        });
      });
      const a = n[0].time;
      if (a > 0) {
        (a - s > 0 ? [a - s, 0] : [0]).forEach((e) => {
          const t = parseInt(1000 * e, 10);
          n.unshift({
            time: e,
            score,
            percent: t / o,
          });
        });
      }
      const l = n[n.length - 1];
      if (t - l.time > s) {
        [l.time + s, t].forEach((e) => {
          const t = parseInt(1000 * e, 10);
          n.push({
            time: e,
            score,
            percent: t / o,
          });
        });
      }
    } else {
      e.forEach((e) => {
        n.push(e);
      });
    }
    return n;
  }
  _getX(e, t, i, n) {
    if (i.percent !== undefined) {
      return this.fixFloat(n * i.percent, this.dataFloatLen);
    }
    return this.fixFloat((e - 1) * t, this.dataFloatLen);
  }
  _getY(e, t, i) {
    const config = this.config;
    const n_maxValue = config.maxValue;
    const n_minValue = config.minValue;
    let r = n_minValue;
    r =
      1 -
      (r =
        Math.max(
          (r = Math.min((r = e.score !== undefined ? e.score : e), n_maxValue)),
          n_minValue,
        ) / t);
    return (r = this.fixFloat(r * i, this.dataFloatLen));
  }
  setData(e) {
    const config = this.config;
    const t_maxValue = config.maxValue;
    const t_minValue = config.minValue;
    const t_maxLength = config.maxLength;
    if (e && e.length) {
      this.curData = this.formatData(e, this._duration, t_minValue);
    }
    if (!((e = this.curData).length < 1)) {
      this.xData = [];
      this.yData = [];
      this.yMax = 0;
      const s = t_maxValue - t_minValue;
      const r = this.canvasHeight;
      let a = e.length;
      const l =
        a > t_maxLength ? this.fixFloat(a / t_maxLength, this.dataFloatLen) : 1;
      a = parseInt(a / l);
      let c = this.canvasWidth / (a - 1);
      if (!Number.isNaN((c = this.fixFloat(c, this.dataFloatLen)))) {
        let u = parseInt(this.fixFloat(l - 1, 0));
        for (let h = 0; h < a;) {
          const d = this._getX(h, c, e[u], this.canvasWidth);
          this.xData.push(d);
          const f = this._getY(e[u], s, r);
          this.yMax = Math.max(this.yMax, r - f);
          this.yData.push(f);
          h++;
          u = parseInt(this.fixFloat(h * l, 0));
        }
      }
    }
  }
  _getFillStyle(e) {
    const config = this.config;
    const t_gradient = config.gradient;
    const t_gradientColors = config.gradientColors;
    let t_fillStyle = config.fillStyle;
    if (t_gradient && t_gradient.length === 4) {
      const s = e.createLinearGradient(
        t_gradient[0],
        t_gradient[1],
        t_gradient[2],
        t_gradient[3],
      );
      if (t_gradientColors.length < 2) {
        console.warn(this.pluginName, "渐变颜色配置gradientColors异常");
      } else {
        t_gradientColors.forEach((e) => {
          s.addColorStop(e.start, e.color);
        });
        t_fillStyle = s;
      }
    }
    return t_fillStyle;
  }
  drawLinePath() {
    this.clearCanvas();
    let e;
    let t;
    const i = this.canvas.getContext("2d");
    const xData = this.xData;
    const yData = this.yData;
    let s = 0;
    const config = this.config;
    const r_lineWidth = config.lineWidth;
    const r_alpha = config.alpha;
    const r_strokeStyle = config.strokeStyle;
    const u = this._getFillStyle(i);
    i.beginPath();
    i.lineWidth = r_lineWidth;
    i.globalAlpha = r_alpha;
    i.strokeStyle = r_strokeStyle || u;
    i.fillStyle = u;
    i.moveTo(0, this.canvasHeight);
    e = xData[s];
    for (t = yData[s]; e !== undefined && t !== undefined;) {
      i.lineTo(e, t);
      e = xData[++s];
      t = yData[s];
    }
    i.lineTo(this.canvasWidth, this.canvasHeight);
    i.closePath();
    i.stroke();
    i.fill();
  }
  clearCanvas() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }
  fixFloat(e, t) {
    if (typeof e === "number") {
      return parseFloat(e.toFixed(t));
    }
    return 0 / 0;
  }
  render() {
    return "";
  }
  static get pluginName() {
    return "heatmap";
  }
  static get defaultConfig() {
    return {
      lineWidth: 0,
      dpi: 2,
      alpha: 0.7,
      gradient: [],
      gradientColors: [],
      strokeStyle: "",
      fillColor: "#FA1F41",
      height: 20,
      data: [],
      maxValue: 100,
      minValue: 0,
      maxLength: 400,
      mode: "activeShow",
    };
  }
}
