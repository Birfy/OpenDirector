import r from "NRL";
const a = (e, t, i) => {
  let r;
  if ((r = typeof t !== "symbol" ? t + "" : t) in e) {
    return Object.defineProperty(e, r, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: i,
    });
  }
  return (e[r] = i);
};
class s {
  constructor() {
    this.__handlers = [];
    if (window.ResizeObserver) {
      this.observer = new window.ResizeObserver((e) => {
        this.__trigger(e);
      });
    }
  }
  addObserver(target, t) {
    if (!this.observer) {
      return;
    }
    if (this.observer) {
      this.observer.observe(target);
    }
    let { __handlers } = this;
    let r = -1;
    for (let t = 0; t < __handlers.length; t++) {
      if (__handlers[t] && target === __handlers[t].target) {
        r = t;
      }
    }
    if (r > -1) {
      this.__handlers[r].handler.push(t);
    } else {
      this.__handlers.push({
        target,
        handler: [t],
      });
    }
  }
  unObserver(e) {
    let t = -1;
    this.__handlers.map((i, r) => {
      if (e === i.target) {
        t = r;
      }
    });
    if (this.observer) {
      this.observer.unobserve(e);
    }
    if (t > -1) {
      this.__handlers.splice(t, 1);
    }
  }
  destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = null;
    this.__handlers = [];
  }
  __runHandler(e, t) {
    let { __handlers } = this;
    for (let r = 0; r < __handlers.length; r++) {
      if (__handlers[r] && e === __handlers[r].target) {
        if (__handlers[r].handler) {
          __handlers[r].handler.forEach((i) => {
            try {
              i(e, t);
            } catch (error) {
              console.error(error);
            }
          });
        }
        break;
      }
    }
  }
  __trigger(e) {
    e.map((e) => {
      let e_contentRect = e.contentRect;
      this.__runHandler(e.target, e_contentRect);
    });
  }
}
let o = null;
let l = "change";
let h = "update";
let d = "error";
let u = [
  {
    code: 0,
    msg: "SUCCESS",
  },
  {
    code: 1,
    msg: "LOAD_ERROR",
    type: "LOAD_ERROR",
  },
  {
    code: 2,
    msg: "PARSER_ERROR",
    type: "PARSER_ERROR",
  },
  {
    code: 3,
    msg: "FORMAT_NOT_SUPPORTED",
    type: "FORMAT_NOT_SUPPORTED",
  },
  {
    code: 4,
    msg: "ID_OR_LANGUAGE_NOT_EXIST",
    type: "ID_OR_LANGUAGE_NOT_EXIST",
  },
  {
    code: 5,
    msg: "PARAMETERS_ERROR",
    type: "PARAMETERS_ERROR",
  },
  {
    code: 6,
    msg: "ABORT",
    type: "ABORT",
  },
  {
    code: 7,
    msg: "UNKNOWN",
    type: "UNKNOWN",
  },
  {
    code: 8,
    msg: "DATA_ERROR:subtitle.url is null",
    type: "DATA_ERROR",
  },
  {
    code: 9,
    msg: "DATA_ERROR:subtitle.url length is 0",
    type: "DATA_ERROR",
  },
];
class c extends Error {
  constructor(e, t, i, r) {
    if (!e) {
      e = u[t || 7].msg;
    }
    super(e);
    this.message = "";
    this.code = t || 7;
    this.message = e;
    this.type = u[t || 7].msg;
    this.orgError = i || null;
    this.data = r || null;
  }
}
function f(e, t = {}, i) {
  let r = {
    code: u[e].code,
    message: u[e].msg,
    id: "",
    language: "",
  };
  Object.keys(t).map((e) => {
    r[e] = t[e];
  });
  return r;
}
class g {
  constructor() {
    let e;
    let t;
    let i = new Promise((resolve, reject) => {
      e = resolve;
      t = reject;
    });
    i.resolve = function (t) {
      e(t);
      i.state = "fulfilled";
    };
    i.reject = function (e) {
      t(e);
      i.state = "rejected";
      i.isBreak = e === "DESTROYED";
    };
    i.state = "pending";
    return i;
  }
  resolve(e) {}
  reject(e) {}
}
function p(e, t) {
  if (!e) {
    return false;
  }
  if (e.classList) {
    return Array.prototype.some.call(e.classList, (e) => e === t);
  }
  {
    let i =
      e.className && typeof e.className === "object"
        ? e.getAttribute("class")
        : e.className;
    return i && !!i.match(RegExp("(\\s|^)" + t + "(\\s|$)"));
  }
}
function m(root, t) {
  if (root) {
    if (root.classList) {
      t.replace(/(^\s+|\s+$)/g, "")
        .split(/\s+/g)
        .forEach((t) => {
          if (t) {
            root.classList.add(t);
          }
        });
    } else if (!p(root, t)) {
      if (root.className && typeof root.className === "object") {
        root.setAttribute("class", root.getAttribute("class") + " " + t);
      } else {
        root.className += " " + t;
      }
    }
  }
}
function _(e) {
  let t = Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g);
  if (t) {
    return t[0];
  }
  return "";
}
function y(e = "div", t = "", i = {}, r = "") {
  let n = document.createElement(e);
  n.className = r;
  n.innerHTML = t;
  Object.keys(i).forEach((t) => {
    let r = i[t];
    if (e === "video" || e === "audio" || e === "live-video") {
      if (r) {
        n.setAttribute(t, r);
      }
    } else {
      n.setAttribute(t, r);
    }
  });
  return n;
}
function v(e) {
  return e && e instanceof window.HTMLMediaElement;
}
function T(url) {
  let t = [];
  if (url && _(url) === "String") {
    t.push({
      url: [url],
      index: 0,
      start: -1,
      end: -1,
    });
  } else if (_(url) === "Array") {
    if (url.length === 0) {
      return t;
    }
    if (_(url[0]) === "String") {
      t.push({
        url,
        index: 0,
        start: -1,
        end: -1,
      });
    } else {
      url.forEach((e, i) => {
        t.push({
          url: e.url || e.src || "",
          index: i,
          start: e.start || -1,
          end: e.end || -1,
        });
      });
    }
  }
  return t;
}
function b(e, list, i) {
  let t_length = list.length;
  if (t_length < 1) {
    return -1;
  }
  if (
    list[(i = i < 0 ? 0 : i >= t_length ? t_length - 1 : i)].start <= e &&
    e < list[i].end
  ) {
    return i;
  }
  {
    let n = list[i].end <= e ? i + 1 : 0;
    for (; n < t_length; n++) {
      if (list[n].start <= e && e < list[n].end) {
        return n;
      }
      if (
        (e > list[n].end && n + 1 < t_length && e < list[n + 1].start) ||
        (e > list[n].end && n + 1 >= t_length)
      ) {
        break;
      }
    }
    return -1;
  }
}
function S(e, list, i) {
  let t_length = list.length;
  if (t_length < 1) {
    return [];
  }
  let n = [];
  if ((i = i < 0 ? 0 : i >= t_length ? t_length - 1 : i) < t_length) {
    let a = list[i].end <= e ? i : 0;
    for (
      ;
      a < t_length &&
      (list[a].start <= e && e < list[a].end && n.push(a),
      !(e < list[a].start));
      a++
    );
  }
  return n;
}
function L(e, t) {
  return !!(
    (e.id && t.id && e.id === t.id) ||
    (e.language && t.language && e.language === t.language)
  );
}
let x = /^WEBVTT/;
let P = /^STYLE+$/;
let R = /^\:\:cue/;
let E = /^}+$/;
let C = /^\[Script Info\].*/;
let k = [
  /[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}/,
  /[0-9]{1,3}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}\.[0-9]{1,3}/,
  /[0-9]{1,2}\.[0-9]{1,3}-->[0-9]{1,2}\.[0-9]{1,3}/,
];
let I = /^Format:\s/;
let O = /^Style:\s/;
let D = /^Dialogue:\s/;
function w(e) {
  let e_length = e.length;
  switch (e_length) {
    case 3:
      return (
        ((60 * Number(e[0]) + Number(e[1])) * 60000 + 1000 * Number(e[2])) /
        1000
      );
    case 2:
      return (60 * Number(e[0]) * 1000 + 1000 * Number(e[1])) / 1000;
    default:
      return Number(e[0]);
  }
}
function M(e, t) {
  if (e >= 0 && e < t.length) {
    return t[e];
  }
  return "";
}
class N {
  static parseJson(e) {
    let t = [];
    let i = 0;
    for (let r = 0; r < e.length; r++) {
      if (i >= 50) {
        i = 0;
      }
      if (i === 0) {
        let i = {
          start: e[r].start,
          list: [e[r]],
          end: e[r].end,
        };
        t.push(i);
      } else {
        t[t.length - 1].list.push(e[r]);
        t[t.length - 1].end = e[r].end;
      }
      i++;
    }
    return t;
  }
  static parse(e, t) {
    let format = N.checkFormat(e);
    if (!format) {
      return void t(
        {
          format: "unknown",
        },
        new c("unknown_format", 3),
      );
    }
    try {
      let r = {
        list: [],
        styles: [],
      };
      if (format === "ass") {
        r = N.parseASS(e);
      } else if (format === "vtt") {
        r = N.parseVTT(e);
      }
      t({
        format,
        list: r.list,
        styles: r.styles,
      });
    } catch (error) {
      console.error(error);
      t(
        {
          format,
        },
        new c(`parse_error_${error.message}`, 2, error),
      );
    }
  }
  static parseASSItem(e = "", t = []) {
    let i = e.split(",");
    let r = {};
    let n = "";
    try {
      let e = i.length - t.length;
      n = (n =
        e > 0
          ? i.splice(t.length - 1, e + 1).join(",") + ""
          : i[i.length - 1] + "").replace(/\\n+/g, "");
      i[t.length - 1] = n;
      t.map((e, t) => {
        if (e === "end" || e === "start") {
          r[e] = w(i[t].split(":"));
        } else if (e === "text") {
          r[e] = [i[t]];
        } else if (e === "layer") {
          r[e] = [i[t]];
          r.textTag = [i[t]];
        } else if (e === "style") {
          r[e] = [i[t]];
        } else {
          r[e] = Number(i[t]) ? Number(i[t]) : i[t];
        }
      });
      return r;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
  static parseASS(e) {
    let t = e.split(`
`);
    let i = [];
    let r = 0;
    let n = 0;
    let a = [];
    let s = [];
    let o = null;
    while (r < t.length) {
      if (I.test(t[r])) {
        s = (s = t[r].replace(I, "").replace(/\s+/g, "").split(",")).map((e) =>
          e.toLocaleLowerCase(),
        );
      } else if (O.test(t[r])) {
        a.push(t[r].replace(O, "").replace(/\s+/g, ""));
      } else if (D.test(t[r])) {
        let e = N.parseASSItem(t[r].replace(D, ""), s);
        if (o && e.start === o.start && e.end === o.end) {
          try {
            let { text = [], textTag = [], style } = o;
            if (e.text.length > 0) {
              text.push(e.text[0]);
            }
            if (e.textTag.length > 0) {
              textTag.push(e.textTag[0]);
            }
            if (style) {
              style.push(e.style[0]);
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          o = e;
          let t = null;
          if (n % 50 == 0) {
            (t = {
              start: o.start,
              end: o.end,
              list: [],
            }).list.push(o);
            i.push(t);
          } else {
            t = i[i.length - 1];
            t.end = o.end;
            t.list.push(o);
          }
          n++;
        }
      }
      r++;
    }
    return {
      list: i,
      styles: [],
    };
  }
  static parseVTTStyle(e, t) {
    let i = e.split(":");
    if (i.length > 1) {
      let e = i[0].trim().split("-");
      let r = "";
      if (e.length > 1) {
        e.map((e, t) => {
          r += t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1);
        });
      } else {
        r = e[0];
      }
      t[r] = i[1].trim().replace(/;$/, "");
    }
    return t;
  }
  static parseVTT(e) {
    let t = (e = e.replace(x, "")).split(`
`);
    let i = [];
    let r = 0;
    let n = 0;
    let a = null;
    let s = false;
    let o = false;
    let l = null;
    let h = null;
    let styles = [];
    while (r < t.length) {
      let e = M(r, t).trim();
      if (!e || (s && /^(\-|\+)?\d+(\.\d+)?$/.test(e))) {
        s = !e;
      } else if (R.test(e) && P.test(M(r - 1, t).trim())) {
        o = true;
        let t = /\((.+?)\)/g.exec(e);
        h = t ? t[1] : "";
        l = "";
      } else if (o) {
        if (E.test(e)) {
          styles.push({
            key: h || "",
            style: l || "",
          });
          l = null;
          h = null;
          o = false;
        } else {
          l += e;
        }
      } else if (e) {
        s = false;
        let e = this.checkIsTime(t[r]);
        if (e) {
          let t = this.parseVttTime(e);
          if (!a || t.start !== a.start || t.end !== a.end) {
            a = {
              ...t,
              text: [],
              textTag: [],
            };
            a.text = [];
            a.textTag = [];
            let e = null;
            if (n % 50 == 0) {
              (e = {
                start: a.start,
                end: a.end,
                list: [],
              }).list.push(a);
              i.push(e);
            } else {
              e = i[i.length - 1];
              e.end = a.end;
              e.list.push(a);
            }
            n++;
          }
        } else if (a) {
          let { text, textTag } = a;
          let n = this.parseVttText(t[r]);
          text.push(n.text);
          textTag.push(n.tag);
        }
        s = false;
      }
      r++;
    }
    return {
      list: i,
      styles,
    };
  }
  static checkIsTime(e) {
    e = e.replace(/\s+/g, "");
    let t = 0;
    let i = null;
    while (t < k.length && !(i = k[t].exec(e))) {
      t++;
    }
    if (i) {
      return i[0];
    }
    return null;
  }
  static parseVttText(e) {
    let t = /^(<?.+?>)/g.exec(e);
    let i = "";
    let tag = "default";
    if (t) {
      tag = t[0].replace(/\<|\>|\&/g, "");
      let n = RegExp(`^<${tag}>(([\\s\\S])*?)</${tag}>$`).exec(e);
      if (n) {
        i = n[1];
      } else {
        i = e;
        tag = "";
      }
    } else {
      i = e;
    }
    let n = /<(\w+).(\w+)>/g;
    let a = n.exec(i);
    while (a && a.length > 2) {
      a = n.exec((i = i.replace(a[0], `<${a[1]} class="${a[2]}">`)));
    }
    return {
      tag,
      text: i.replace(/\\n+/g, "<br/>"),
    };
  }
  static parseVttTime(time) {
    let t = time.split("--\x3e");
    let i = 0;
    let r = 0;
    if (t.length === 2) {
      let e = t[0].split(":");
      let n = t[1].split(":");
      i = w(e);
      r = w(n);
    }
    return {
      start: i,
      end: r,
      time,
    };
  }
  static isVTT(e) {
    return x.test(e);
  }
  static isASS(e) {
    return C.test(e);
  }
  static checkFormat(e) {
    if (e) {
      if (x.test(e)) {
        return "vtt";
      }
      if (C.test(e)) {
        return "ass";
      }
      return "";
    }
    return "";
  }
}
function A(e, context, i) {
  let {
    url = "",
    method = "GET",
    type = "arraybuffer",
    timeout = 10000,
    data = {},
  } = e;
  let res = new window.XMLHttpRequest();
  let h = method.toUpperCase();
  let d = [];
  if (type) {
    res.responseType = type;
  }
  if (timeout) {
    res.timeout = timeout;
  }
  Object.keys(data).forEach((e) => {
    d.push(`k=${data[e]}`);
  });
  res.onload = () => {
    if (res.status === 200 || res.status === 206) {
      i({
        context,
        res,
        type: "success",
      });
    } else {
      i({
        context,
        res,
        type: "error",
        error: new c(
          ((e, t) => {
            let { status = "", statusText = "" } = e;
            return `${t}_${status}_${statusText}`;
          })(res, "response_error"),
          1,
        ),
      });
    }
  };
  res.onerror = (e) => {
    i({
      context,
      res,
      type: "error",
      error: new c("loaderror", 1),
    });
  };
  res.ontimeout = (e) => {
    i({
      context,
      res,
      type: "error",
      error: new c("timeout", 1),
    });
  };
  res.onabort = () => {
    i({
      context,
      res,
      type: "error",
      error: new c("abort", 1),
    });
  };
  if (h === "GET") {
    res.open(h, `${url}`);
    res.send();
  } else if (h === "post") {
    res.open(h, url);
    res.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    res.send(d.join("&"));
  } else {
    i({
      context,
      res,
      type: "error",
      error: new c(`xhr ${h} is not supported`, 1),
    });
    throw new c(`xhr ${h} is not supported`, 1);
  }
}
function B(e, t, i) {
  if (t === "json") {
    i({
      styles: [],
      list: N.parseJson(e),
      format: "json",
    });
  } else if (t === "string") {
    N.parse(e, i);
  }
}
function U(e, t, i) {
  let r = [];
  if (!i) {
    i = new g();
  }
  let url = (r = _(e) === "String" ? [e] : [...e]).shift() || "";
  let a = (e) => {
    let { res, error } = e;
    if (error) {
      if (r.length > 0) {
        A(
          {
            url: r.shift() || "",
            type: "text",
          },
          t,
          a,
        );
      } else {
        i.reject(error);
      }
    } else if (res) {
      let { response } = res;
      B(response, "string", (e, t) => {
        if (t) {
          i.reject(t);
        } else {
          i.resolve(e);
        }
      });
    }
  };
  A(
    {
      url,
      type: "text",
    },
    t,
    a,
  );
  return i;
}
let F = false;
class j extends r.A {
  constructor(e) {
    let t;
    let i;
    let r;
    let n;
    let s;
    let o;
    super();
    a(this, "_onPause", () => {
      this.stopRender();
    });
    a(this, "_onPlay", () => {
      if (this._curRenderTask.length > 0) {
        this.startRender(-1);
      }
    });
    a(this, "_onTimeupdate", () => {
      if (!this._isOpen) {
        return;
      }
      if (this.config.domRender) {
        let { videoWidth, videoHeight } = this.player.video
          ? this.player.video
          : this.player;
        if (!this._videoMeta.scale && videoWidth && videoHeight) {
          this._onResize(this.player.root);
        }
      }
      let e = this._getPlayerCurrentTime();
      if (!(Math.round(Math.abs(1000 * e - this._ctime)) < 200)) {
        this._ctime = 1000 * e;
        if (this.currentText && this.currentText.list) {
          if (this.config.updateMode === "live") {
            this._liveUpdate(e);
          } else {
            this._update(e);
          }
        }
      }
    });
    a(this, "_onResize", (e) => {
      let { _videoMeta, config } = this;
      if (config.domRender) {
        if (!(e && e instanceof window.Element)) {
          e = this.player.root;
        }
        if (this._iId) {
          window.clearTimeout(this._iId);
          this._iId = null;
        }
        if (!_videoMeta.scale) {
          if (!this.player.video) {
            return;
          }
          let { videoWidth, videoHeight } = this.player.video;
          if (!videoWidth || !videoHeight) {
            return;
          }
          _videoMeta.videoWidth = videoWidth;
          _videoMeta.videoHeight = videoHeight;
          _videoMeta.scale = parseInt((videoHeight / videoWidth) * 100, 10);
        }
        this.__startResize(e);
      }
    });
    a(this, "_onCoreEvents", (e) => {
      try {
        switch (e.eventName) {
          case "core.subtitlesegments":
            this._onSubtitleSegment(e.list || []);
            break;
          case "core.subtitleplaylist":
            this._onSubtitlePlaylist(e.list || []);
            break;
          case "core.seipayloadtime":
            this._onCoreSeiintime(e);
        }
      } catch (error) {
        console.error(error);
      }
    });
    a(this, "startRender", (e) => {
      if (e > 0 && this._renderIntervalId) {
        window.cancelAnimationFrame(this._renderIntervalId);
        this._renderIntervalId = -1;
      }
      if (!this.textTrack) {
        return;
      }
      let { _curRenderTask } = this;
      this._lastTimeStamp = new Date().getTime();
      let i = [];
      _curRenderTask.forEach((t, r) => {
        let { lastTime, wordList, interval, dom, ids } = t;
        if (
          e < 0 ||
          this._lastTimeStamp < 0 ||
          this._lastTimeStamp - lastTime >= interval
        ) {
          let e = wordList.shift();
          if (e) {
            dom.appendData(e);
          }
          t.lastTime = this._lastTimeStamp;
        }
        if (wordList.length < 1) {
          i.push({
            index: r,
            ids,
          });
        }
      });
      this._log(">>>>_renderByWords emptyArr", i.length, _curRenderTask.length);
      i.forEach((e) => {
        _curRenderTask.splice(e.index, 1);
        this._log(
          ">>>_renderByWords remove emptyArr",
          e.index,
          _curRenderTask.length,
        );
      });
      if (_curRenderTask.length > 0) {
        this._renderIntervalId = window.requestAnimationFrame(this.startRender);
      }
    });
    a(this, "destroy", () => {
      this.detachPlayer();
      this.removeAllListeners();
      this.player = null;
      this.textTrack = null;
      this._curRenderTask = [];
      this.stopRender();
    });
    t = navigator.userAgent;
    i = /(?:Windows Phone)/.test(t);
    r = /(?:SymbianOS)/.test(t) || i;
    n = /(?:Android)/.test(t);
    s = /(?:Firefox)/.test(t);
    o =
      /(?:iPad|PlayBook)/.test(t) ||
      (n && !/(?:Mobile)/.test(t)) ||
      (s && /(?:Tablet)/.test(t));
    F = (/(?:iPhone)/.test(t) && !o) || n || r || o;
    this.currentText = null;
    this.currentExtText = null;
    this.textTrack = [];
    this._cid = -1;
    this._gid = -1;
    this._cids = [];
    this._iId = null;
    this._iC = 0;
    this.player = null;
    this.root = null;
    this.config = {
      line: "double",
      bottom: 0,
      mode: "stroke",
      defaultOpen: false,
      baseSizeX: 49,
      baseSizeY: 28,
      minSize: 16,
      minMobileSize: 13,
      fitVideo: true,
      offsetBottom: 2,
      fontColor: "#fff",
      domRender: false,
      updateMode: "vod",
      renderMode: "",
      debugger: false,
    };
    this._ctime = 0;
    this._loadingTrack = {};
    this.seiTime = 0;
    this.lastSeiTime = 0;
    this._curTexts = [];
    this._curRenderTask = [];
    this._renderIntervalId = -1;
    this._lastTimeStamp = -1;
    Object.keys(this.config).map((t) => {
      if (e[t] !== undefined && e[t] !== null) {
        this.config[t] = e[t];
      }
    });
    this._isOpen = this.config.defaultOpen || false;
    this._videoMeta = {
      scale: 0,
      videoHeight: 0,
      videoWidth: 0,
      lwidth: 0,
      lheight: 0,
      vWidth: 0,
      vHeight: 0,
      vBottom: 0,
      vLeft: 0,
      marginBottom: 0,
    };
    if (e.subTitles && _(e.subTitles) === "Array") {
      if (e.player) {
        this.attachPlayer(e.player);
      }
      this.setSubTitles(e.subTitles, this.config.defaultOpen);
    }
  }
  get version() {
    return "0.2.17";
  }
  setSubTitles(e = [], t = false, i = true) {
    let isOpen = this._isOpen || t;
    if (i && this.innerRoot) {
      this.switchOff();
    }
    if (!e || e.length < 1) {
      this.switchOff();
    } else {
      this.currentText = null;
      this.textTrack = [];
      e.forEach((e) => {
        let t = {};
        Object.keys(e).map((i) => {
          t[i] = e[i];
        });
        t.url = T(t.url);
        if (t.isDefault) {
          this.currentText = t;
        }
        this.textTrack.push(t);
      });
      this._log("setSubTitles", isOpen, this.textTrack);
      if (isOpen) {
        if (!this.currentText) {
          this.currentText = this.textTrack[0];
        }
        this.switch().catch((e) => {
          this.emitError(e);
          this._log("[switch]", e);
        });
      }
      this._log(">>>this.currentText", isOpen, this.currentText);
      if (this.currentText) {
        this._loadTrack(this.currentText)
          .then((e) => {
            this.addStyles(e);
          })
          .catch((e) => {
            this.emitError(e);
            this._log("[_loadTrack] errorsss", e);
          });
      }
      this.emit("reset", {
        type: "reset",
        list: this.textTrack,
        isOpen,
      });
    }
  }
  updateSubTitle(e) {
    let t = -1;
    for (let i = 0; i < this.textTrack.length; i++) {
      if (L(e, this.textTrack[i])) {
        t = i;
        break;
      }
    }
    this._log("updateSubTitle", t, e);
    if (t > -1) {
      let i = L(this.currentText, this.textTrack[t]);
      this._log(
        "updateSubTitle",
        "_isCurrent",
        i,
        "this.isOpen",
        this.isOpen,
        this.currentText,
      );
      if (!i) {
        return;
      }
      let r = T(e.url);
      if (this.isOpen) {
        r.forEach((e) => {
          this.textTrack[t].url.push(e);
        });
        this._log("updateSubTitle _loadTrackUrls", this.textTrack[t]);
        this._loadTrackUrls(this.currentText, 2);
      } else {
        this.textTrack[t].url = r;
      }
    }
  }
  addStyles(e) {
    let { styles, format } = e;
    if (styles && format === "vtt") {
      styles.map((e) => {
        if (!e.key) {
          e.key = "xg-text-track-span";
        }
      });
      ((e, t = "") => {
        let i = "";
        e.map((e) => {
          i += ` ${t} ${e.key} {${e.style}}`;
        });
        let r = document.createElement("style");
        let n = document.head || document.getElementsByTagName("head")[0];
        r.type = "text/css";
        r.id = "ssss";
        if (r.styleSheet) {
          let e = function () {
            try {
              r.styleSheet.cssText = i;
            } catch {}
          };
          if (r.styleSheet.disabled) {
            setTimeout(e, 10);
          } else {
            e();
          }
        } else {
          let e = document.createTextNode(i);
          r.appendChild(e);
        }
        n.appendChild(r);
      })(styles, "xg-text-track");
    }
  }
  attachPlayer(e) {
    let t;
    let i;
    this._log("attachPlayer");
    if (!e || e === this.player) {
      return;
    }
    if (this.player) {
      this.detachPlayer();
    }
    let { fontColor, mode, fitVideo, domRender } = this.config;
    this.player = e;
    if (domRender) {
      this.root = document.createElement("xg-text-track");
      this.root.className = "xg-text-track";
      if (!this._isOpen) {
        m(this.root, "text-track-hide");
      }
      if (!fitVideo) {
        m(this.root, "text-track-no-fitvideo");
      }
      if (mode) {
        m(this.root, `text-track-${mode}`);
      }
      this.innerRoot = document.createElement("xg-text-track-inner");
      this.root.appendChild(this.innerRoot);
      if (fontColor) {
        this.root.style.color = fontColor;
      }
      if (this.currentText) {
        ["language", "id", "label"].map((e) => {
          this.root.setAttribute(`data-${e}`, this.currentText[e] || "");
        });
      }
      this.player.root.appendChild(this.root);
      t = e.root;
      i = this._onResize;
      if (!o) {
        o = new s();
      }
      o.addObserver(t, i);
    }
    if (v(e)) {
      e.addEventListener("timeupdate", this._onTimeupdate);
      e.addEventListener("pause", this._onPause);
      e.addEventListener("play", this._onPlay);
    } else {
      this.player.on("destroy", this.destroy);
      this.player.on("timeupdate", this._onTimeupdate);
      this.player.on("pause", this._onPause);
      this.player.on("play", this._onPlay);
      this.player.on("core_event", this._onCoreEvents);
    }
    if (this._isOpen) {
      this.switch().catch((e) => {
        this._log("[switch]", e);
      });
    }
  }
  detachPlayer() {
    let e;
    let { player, config } = this;
    if (player) {
      if (v(player)) {
        player.removeEventListener("timeupdate", this._onTimeupdate);
        player.removeEventListener("pause", this._onPause);
        player.removeEventListener("play", this._onPlay);
      } else {
        this.player.off("destroy", this.destroy);
        this.player.off("timeupdate", this._onTimeupdate);
        this.player.off("pause", this._onPause);
        this.player.off("play", this._onPlay);
        this.player.off("core_event", this._onCoreEvents);
      }
      if (config.domRender) {
        if (player.root) {
          e = player.root;
          this._onResize;
          if (o) {
            o.unObserver(e);
          }
          player.root.removeChild(this.root);
        }
        this.innerRoot = null;
        this.root = null;
      }
      this.player = null;
    }
  }
  switch(
    e = {
      id: "",
      language: "",
    },
  ) {
    this._log("switch", e);
    this._loadingTrack = e;
    return new Promise((resolve, reject) => {
      if (!e.id && !e.language) {
        if (this.currentText) {
          this._loadingTrack = {};
          this._updateCurrent(this.currentText);
          this.switchOn();
          resolve({
            message: "switch default subtitle success",
            code: 0,
          });
          return;
        } else {
          let e = new c("no default subtitle", 5);
          this.emitError(e);
          reject(e);
          return;
        }
      }
      if (this.currentText && L(e, this.currentText)) {
        this._loadingTrack = {};
        this._updateCurrent(this.currentText);
        this.switchOn();
        resolve(f(0));
      } else {
        let r = null;
        this.__removeByTime(this._curTexts, 0);
        for (let t = 0; t < this.textTrack.length; t++) {
          if (L(e, this.textTrack[t])) {
            r = this.textTrack[t];
            break;
          }
        }
        this._log("nextSubtitle", r);
        if (r) {
          this._emitPlayerSwitch(this.currentText, r);
          if (r.list) {
            this._loadingTrack = {};
            this._updateCurrent(r);
            this.switchOn();
            resolve(f(0));
          } else {
            this._log("this._loadTrack", r);
            this._updateCurrent(r);
            this._loadTrack(r)
              .then((n) => {
                this.addStyles(n);
                if (
                  this._loadingTrack.id === r.id ||
                  this._loadingTrack.language === n.language
                ) {
                  this._loadingTrack = {};
                  this._updateCurrent(n);
                  this.switchOn();
                  resolve(f(0));
                } else {
                  let t = new c(
                    `check _loadingTrack fail id: ${this._loadingTrack.id}  nextSubtitle:${n.id}`,
                    6,
                    null,
                    e,
                  );
                  this.emitError(t);
                  reject(t);
                }
              })
              .catch((e) => {
                this.emitError(e);
                reject(e);
              });
          }
        } else {
          let t = new c(
            `The is no subtitle with id:[{${e.id}}] or language:[${e.language}]`,
            4,
            null,
            e,
          );
          this.emitError(t);
          reject(t);
        }
      }
    });
  }
  switchExt(
    e = {
      id: "",
      language: "",
    },
  ) {
    return new Promise((resolve, reject) => {
      if (e.id || e.language) {
        let i = null;
        for (let t = 0; t < this.textTrack.length; t++) {
          if (L(e, this.textTrack[t])) {
            i = this.textTrack[t];
            break;
          }
        }
        if (i && !L(i, this.currentText)) {
          this._loadTrack(i)
            .then((e) => {
              this.currentExtText = e;
              resolve(f(0));
            })
            .catch((e) => {
              this.emitError(e);
            });
        }
      } else {
        this.currentExtText = null;
        resolve(f(0));
      }
    });
  }
  emitError(error) {
    this.emit(d, {
      type: d,
      error,
    });
  }
  switchOn() {
    this._log("switchOn");
    this._isOpen = true;
    this.show();
    let { id, language } = this.currentText;
    this.emit(l, {
      type: l,
      isOpen: true,
      id,
      language,
      texts: [],
    });
  }
  switchOff() {
    this._isOpen = false;
    this.hide();
    if (!this.currentText) {
      return;
    }
    let { id, language } = this.currentText;
    this.emit("off", {
      type: "off",
      id,
      language,
      texts: [],
      isOpen: false,
    });
  }
  get isOpen() {
    return this._isOpen;
  }
  _log(...e) {
    if (this.config.debugger) {
      console.log("[xgSubtitle]", ...e);
    }
  }
  _loadTrack(e) {
    this._log("_loadTrack", e.language, e);
    let t = new g();
    let i = "";
    let r = "";
    if (e.json) {
      i = "json";
      r = e.json;
    } else if (e.stringContent && (!e.url || e.url.length === 0)) {
      i = "string";
      r = e.stringContent;
    }
    if (r) {
      B(r, i, (i, r) => {
        if (r) {
          this.emitError(r);
          t.reject(r);
        } else {
          e.format = i.format;
          e.styles = i.styles;
          e.list = i.list;
          t.resolve(e);
        }
      });
      return t;
    }
    let n = [...e.url];
    if (n.length === 0) {
      t.resolve(e);
    } else {
      U(n.splice(0, 1)[0].url, e)
        .then((i) => {
          e.format = i.format;
          e.styles = i.styles;
          if (!e.list) {
            e.list = [];
          }
          this._pushList(e.list, i.list);
          if (n.length > 1) {
            this._loadTrackUrls(e, 2);
          }
          t.resolve(e);
        })
        .catch((e) => {
          t.reject(e);
        });
    }
    return t;
  }
  _emitPlayerSwitch(e, t) {
    if (e && this.config.updateMode === "live") {
      e.list = [];
      e.url = [];
    }
    let i = {
      lang: t.language,
      ...t,
    };
    this._log("emit subtile_switch ", t, i);
    this.emit(l, {
      type: l,
      error: null,
    });
  }
  _loadTrackUrls(e, t, i) {
    let length = e.url.length;
    let n = length > t ? e.url.splice(0, t) : e.url.splice(0, length);
    let n_length = n.length;
    this._log("_loadTrackUrls", e.language, length, n.length, n_length);
    n.forEach((t, r) => {
      U(
        {
          ...t,
        }.url,
        t,
      )
        .then((t) => {
          e.format = t.format;
          e.styles = t.format;
          if (!e.list) {
            e.list = [];
          }
          this._pushList(e.list, t.list);
          n_length--;
        })
        .catch((e) => {
          n_length--;
        })
        .finally((t) => {
          if (n_length === 0) {
            if (i) {
              i.resolve(e);
            }
            this._loadTrackUrls(e, 2);
          }
        });
    });
  }
  _freshUrl(
    e,
    t = {
      url: "",
    },
  ) {
    let i = -1;
    e.url.forEach((e, r) => {
      if (e.url === t.url) {
        i = r;
      }
    });
    if (i > -1) {
      e.url.splice(i, 1);
    }
  }
  _pushList(e, t) {
    let start = t[0].start;
    let end = t[t.length - 1].end;
    if (e.length === 0 || start >= e[e.length - 1].end) {
      t.forEach((t) => {
        e.push(t);
      });
    } else {
      let i = -1;
      for (let t = 0; t < e.length; t++) {
        if (e[t].start > end) {
          i = t;
          break;
        }
      }
      if (i > -1) {
        t.forEach((t, r) => {
          e.splice(i + r, 0, t);
        });
      }
    }
    return e;
  }
  _updateCurrent(e) {
    this.currentText = e;
    if (this.config.domRender && this.root) {
      ["language", "id", "label"].map((e) => {
        this.root.setAttribute(`data-${e}`, this.currentText[e] || "");
      });
      this.__remove(this._cids);
    }
    this._cids = [];
    this._gid = -1;
    this._cid = -1;
    this._curTexts = [];
    let t = this._getPlayerCurrentTime();
    if (t) {
      if (this.config.updateMode === "live") {
        this._liveUpdate(t);
      } else {
        this._update(t);
      }
    }
  }
  __loadAll() {
    this.textTrack.forEach((e) => {
      this._loadTrack(e);
    });
  }
  getDelCid(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r++) {
      if (!t.includes(e[r])) {
        i.push(e[r]);
      }
    }
    return i;
  }
  getNewCid(e, t) {
    let i = [];
    for (let r = 0; r < t.length; r++) {
      if (!e.includes(t[r])) {
        i.push(t[r]);
      }
    }
    return i;
  }
  _liveUpdate(e) {
    if (
      !this.currentText ||
      !this.currentText.list ||
      !this.currentText.list.length
    ) {
      return;
    }
    let t = [];
    let i = b(e, this.currentText.list, this._gid);
    if (i > -1) {
      t = S(e, this.currentText.list[i].list, this._cid);
    }
    this.__removeByTime(this._curTexts, e);
    this._log(
      "_liveUpdate",
      e,
      i,
      t,
      this.currentText.list[0].list[0].start,
      this.currentText.list[0].list[0].end,
    );
    if (t.length > 0) {
      let e = ((e, t, i) => {
        if (e.length === 0 || t < 0 || t > e.length - 1) {
          return [];
        }
        let list = e[t].list;
        if (i.length === 0) {
          return [];
        }
        let n = list.splice(i[0], i.length);
        if (t > 0) {
          e.splice(0, t);
        }
        if (list.length === 0) {
          e.splice(0, 1);
        }
        return n;
      })(this.currentText.list, i, t);
      let r = this._curTexts.length;
      let n = r > 0 ? this._curTexts[r - 1].index : 0;
      e.forEach((e, t) => {
        e.index = t + n;
        this._curTexts.push(e);
      });
      this.__render(e);
    }
    this.emit(h, this.getUpdateData(this._curTexts, 0, this.currentText));
  }
  _update(e) {
    if (
      !this.currentText ||
      !this.currentText.list ||
      !this.currentText.list.length
    ) {
      return;
    }
    let t = b(e, this.currentText.list, this._gid);
    let i = [];
    if (t > -1) {
      i = S(e, this.currentText.list[t].list, this._cid);
    }
    this._log(
      "update1",
      `currentTime:${e}`,
      t,
      this._gid,
      i,
      this._cids,
      this._cids.join(",") === i.join(","),
      t === this._gid,
    );
    if (i.length < 1) {
      if (this._cids.length > 0 && this.config.domRender) {
        this.__remove(this._cids);
      }
      this._cids = [];
      if (this._curTexts.length > 0) {
        this.emit(h, this.getUpdateData([], e, this.currentText));
      }
      this._curTexts = [];
      return;
    }
    if (this._cids.join("") === i.join("") && t === this._gid) {
      return;
    }
    this._gid = t;
    this._cid = i[0];
    let r = this.getDelCid(this._cids, i);
    let n = this.getNewCid(this._cids, i);
    this._cids = i;
    if (this.config.domRender) {
      this.__remove(r);
    }
    let a = [];
    n.map((e) => {
      let i = this.currentText.list[t].list[e];
      i.index = e;
      a.push(i);
    });
    if (this.currentExtText) {
      n.map((e) => {
        let i = this.currentText.list[t].list[e];
        i.index = e;
        a.push(i);
      });
    }
    this._log(
      "update",
      `currentTime:${e}`,
      a.length > 0 ? `start:${a[0].start} end:${a[0].end}` : "",
      `delCids:${r.length} newCids:${n.length}`,
    );
    this._curTexts = a;
    this.emit(h, this.getUpdateData(a, e, this.currentText));
    this.__render(a, e);
  }
  getUpdateData(texts, t, i) {
    let { id, language } = i;
    return {
      type: h,
      currentTime: 0 | t,
      id,
      language,
      texts,
      isOpen: this._isOpen,
    };
  }
  _getPlayerCurrentTime() {
    if (!this.player) {
      return 0;
    }
    let { currentTime } = this.player;
    return (
      parseInt(
        1000 * currentTime + 1000 * this.seiTime - 1000 * this.lastSeiTime,
        10,
      ) / 1000
    );
  }
  _onSubtitlePlaylist(e) {
    this._log("_onSubtitlePlaylist", e);
    let t = e.map((e) => ({
      label: e.name,
      language: e.lang,
      id: e.id,
      isDefault: e.default,
      url: [],
      mUrl: e.url,
    }));
    this.setSubTitles(t);
  }
  _onSubtitleSegment(e) {
    this._log(
      "_onSubtitleSegment",
      e.length,
      e[0].lang,
      e[0].sn,
      e[e.length - 1].sn,
      e[0].start,
      e[e.length - 1].end,
    );
    if (!e || e.length === 0) {
      return;
    }
    let t = {
      language: e[0].lang,
      url: e.map((e) => ({
        id: e.sn,
        url: e.url,
        duration: e.duration,
        start: e.start,
        end: e.end,
      })),
    };
    if (L(t, this.currentText)) {
      this.updateSubTitle(t);
    }
  }
  _onCoreSeiintime(e) {
    try {
      let t = e.time / 1000;
      this._log("_onCoreSeiintime sei", t, this.seiTime, this.lastSeiTime);
      this.seiTime = t;
      this.lastSeiTime = this.player ? this.player.currentTime : 0;
    } catch {}
  }
  resize(e, t) {
    let {
      baseSizeX,
      baseSizeY,
      minMobileSize,
      minSize,
      fitVideo,
      offsetBottom,
    } = this.config;
    let { scale } = this._videoMeta;
    this._videoMeta.lwidth = e;
    this._videoMeta.lheight = t;
    let vWidth;
    let vHeight = 0;
    if ((t / e) * 100 >= scale) {
      vHeight = parseInt(scale * e, 10) / 100;
      vWidth = e;
    } else {
      vHeight = t;
      vWidth = parseInt((t / scale) * 100, 10);
    }
    this._videoMeta.vWidth = vWidth;
    this._videoMeta.vHeight = vHeight;
    let u = 0;
    let fontSize = 0;
    fontSize =
      scale > 120
        ? parseInt(((u = baseSizeY) * vHeight) / 1080, 10)
        : parseInt(((u = baseSizeX) * vWidth) / 1920, 10);
    let f = F ? minMobileSize : minSize;
    let g = {
      fontSize: (fontSize = fontSize < f ? f : fontSize > u ? u : fontSize),
    };
    let vBottom = parseInt((t - vHeight) / 2, 10);
    let vLeft = parseInt((e - vWidth) / 2, 10);
    let marginBottom = parseInt(vHeight * offsetBottom, 10) / 100;
    this._videoMeta.vBottom = vBottom;
    this._videoMeta.vLeft = vLeft;
    this._videoMeta.marginBottom = marginBottom;
    if (fitVideo) {
      g.bottom = vBottom + marginBottom;
      g.left = g.right = vLeft;
    }
    Object.keys(g).map((e) => {
      this.root.style[e] = `${g[e]}px`;
    });
    this.emit("resize", {
      vLeft,
      vBottom,
      marginBottom,
      vWidth,
      vHeight,
      fontSize,
      scale,
    });
  }
  __startResize(e) {
    let t = e.getBoundingClientRect();
    let { _videoMeta } = this;
    let { width, height } = t;
    if (this._iId) {
      clearTimeout(this._iId);
      this._iId = null;
    }
    if (
      width > 0 &&
      height > 0 &&
      (width !== _videoMeta.lwidth || height !== _videoMeta.lheight)
    ) {
      this._iC = 0;
      this.resize(width, height);
    } else {
      if (this._iC >= 5) {
        this._iC = 0;
        return;
      }
      this._iC++;
      this._iId = setTimeout(() => {
        this.__startResize(e);
      }, 50);
    }
  }
  __removeByTime(e, t) {
    let i = [];
    for (let r = 0; r < e.length; r++) {
      if (!t || e[r].end < t) {
        i.push(r);
      }
    }
    if (i.length !== 0) {
      e.splice(i[0], i.length);
      if (this.config.domRender) {
        this.__remove(i);
      }
    }
  }
  __remove(e) {
    if (!e || e.length < 1) {
      return;
    }
    this._log(">>>>_renderByWords__remove", e);
    let children = this.innerRoot.children;
    let i = [];
    for (let r = 0; r < children.length; r++) {
      let n = Number(children[r].getAttribute("data-index"));
      if (e.includes(n)) {
        i.push(children[r]);
      }
    }
    i.map((e) => {
      this.innerRoot.removeChild(e);
    });
  }
  __render(e = []) {
    let { renderMode, domRender } = this.config;
    if (e.length > 0 && domRender) {
      e.forEach((e) => {
        let i = `text-track-${this.config.line}`;
        e.text.forEach((r, n) => {
          if (n > 0) {
            i += " text-track-deputy";
          }
          let a = {
            "data-start": e.start,
            "data-end": e.end,
            "data-index": e.index,
          };
          let s = y("xg-text-track-span", "", a, i);
          this.innerRoot.appendChild(s);
          if (renderMode === "step") {
            let t = y("xg-text-track-span", "", a, `${i} text-track-space`);
            this.innerRoot.appendChild(t);
            t.innerHTML = r;
            window.setTimeout(() => {
              this._renderByWords(s, n, e.start, e.end, r);
            }, 600);
          } else {
            s.innerHTML = r;
          }
        });
      });
    }
  }
  _renderByWords(e, ids, i, r, n) {
    let dom = document.createTextNode("");
    e.appendChild(dom);
    let wordList = ((e) => {
      let t = e.split("");
      let i = [];
      let r = false;
      for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (n !== null && n.trim() !== "" && /^[a-zA-Z]+$/.test(n)) {
          if (r) {
            let e = i.length - 1;
            i[e] = `${i[e]}${n}`;
          } else {
            i.push(n);
            r = true;
          }
        } else if (
          n.match(/^[ ]*$/) ||
          /[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]/.test(n) ||
          /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(
            n,
          )
        ) {
          r = false;
          let e = i.length - 1;
          i[e] = `${i[e]}${n}`;
        } else {
          r = false;
          i.push(n);
        }
      }
      return i;
    })(n);
    let o = this._getPlayerCurrentTime();
    let duration = parseInt((r - o) * 1000, 10);
    if (o >= r) {
      return;
    }
    if (i >= o) {
      o = i;
    }
    if (duration > 300) {
      duration -= 50;
    }
    let s_length = wordList.length;
    let d = {
      dom,
      ids,
      wordList,
      interval: duration / s_length,
      start: o,
      end: r,
      duration,
      lastTime: 0,
    };
    this._log(">>>>_renderByWords", duration, d);
    let { _curRenderTask } = this;
    let c = -1;
    for (let e = 0; e < _curRenderTask.length; e++) {
      if (_curRenderTask[e].ids === ids) {
        c = e;
        break;
      }
    }
    if (c > -1) {
      _curRenderTask.slice(c, 1);
    }
    _curRenderTask.push(d);
    this.startRender(-1);
  }
  stopRender() {
    if (this._renderIntervalId) {
      window.cancelAnimationFrame(this._renderIntervalId);
    }
  }
  show() {
    let e;
    let t;
    if (this.config.domRender) {
      e = this.root;
      t = "text-track-hide";
      if (e) {
        if (e.classList) {
          t.split(/\s+/g).forEach((t) => {
            e.classList.remove(t);
          });
        } else if (p(e, t)) {
          t.split(/\s+/g).forEach((t) => {
            let i = RegExp("(\\s|^)" + t + "(\\s|$)");
            if (e.className && typeof e.className === "object") {
              let t = e.getAttribute("class") || "";
              e.setAttribute("class", t.replace(i, " "));
            } else {
              e.className = e.className.replace(i, " ");
            }
          });
        }
      }
    }
  }
  hide() {
    if (this.config.domRender) {
      m(this.root, "text-track-hide");
      this.innerRoot.innerHTML = "";
    }
  }
  emit(e, t, ...i) {
    super.emit(e, t, ...i);
  }
  on(e, t, ...i) {
    super.on(e, t, ...i);
  }
  once(e, t, ...i) {
    super.once(e, t, ...i);
  }
  off(e, t, ...i) {
    super.off(e, t, ...i);
  }
  offAll() {
    super.removeAllListeners();
  }
  get marginBottom() {
    let { bottom, marginBottom } = this._videoMeta;
    if (this.config.fitVideo) {
      return bottom + marginBottom;
    }
    return marginBottom;
  }
}
export { j as A };
