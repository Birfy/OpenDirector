let i;
let o;
let r = function (e, t) {
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
function s(e, t) {
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
}
let a = function (e, t) {
  return (a =
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
function l(e, t, n, i) {
  return new (n || (n = Promise))(function (o, r) {
    function s(e) {
      try {
        c(i.next(e));
      } catch (error) {
        r(error);
      }
    }
    function a(e) {
      try {
        c(i.throw(e));
      } catch (error) {
        r(error);
      }
    }
    function c(e) {
      let t;
      if (e.done) {
        o(e.value);
      } else {
        ((t = e.value) instanceof n
          ? t
          : new n(function (e) {
              e(t);
            })
        ).then(s, a);
      }
    }
    c((i = i.apply(e, t || [])).next());
  });
}
function u(e, t) {
  let n;
  let i;
  let o;
  let r;
  let s = {
    label: 0,
    sent: function () {
      if (1 & o[0]) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: [],
  };
  r = {
    next: a(0),
    throw: a(1),
    return: a(2),
  };
  if (typeof Symbol === "function") {
    r[Symbol.iterator] = function () {
      return this;
    };
  }
  return r;
  function a(a) {
    return function (c) {
      let l = [a, c];
      if (n) {
        throw TypeError("Generator is already executing.");
      }
      while ((r && ((r = 0), l[0] && (s = 0)), s)) {
        try {
          n = 1;
          if (
            i &&
            (o =
              2 & l[0]
                ? i.return
                : l[0]
                  ? i.throw || ((o = i.return) && o.call(i), 0)
                  : i.next) &&
            !(o = o.call(i, l[1])).done
          ) {
            return o;
          }
          i = 0;
          if (o) {
            l = [2 & l[0], o.value];
          }
          switch (l[0]) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              s.label++;
              return {
                value: l[1],
                done: false,
              };
            case 5:
              s.label++;
              i = l[1];
              l = [0];
              continue;
            case 7:
              l = s.ops.pop();
              s.trys.pop();
              continue;
            default:
              if (
                !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                (l[0] === 6 || l[0] === 2)
              ) {
                s = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                s.label = l[1];
                break;
              }
              if (l[0] === 6 && s.label < o[1]) {
                s.label = o[1];
                o = l;
                break;
              }
              if (o && s.label < o[2]) {
                s.label = o[2];
                s.ops.push(l);
                break;
              }
              if (o[2]) {
                s.ops.pop();
              }
              s.trys.pop();
              continue;
          }
          l = t.call(e, s);
        } catch (error) {
          l = [6, error];
          i = 0;
        } finally {
          o = 0;
          n = 0;
        }
      }
      if (5 & l[0]) {
        throw l[1];
      }
      return {
        value: l[0] ? l[1] : undefined,
        done: true,
      };
    };
  }
}
const p = ((e) => {
  if (typeof e !== "function" && e !== null) {
    throw TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  }
  function t() {
    this.constructor = n;
  }
  function n(t, n, i) {
    const o = e.call(this, n) || this;
    o.code = t;
    o.message = n;
    o.originError = i;
    o.name = "StarlingError";
    o.code = t;
    o.message = n;
    o.originError = i;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(o, o.constructor);
    }
    return o;
  }
  a(n, e);
  n.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
  return n;
})(Error);
const h = {
  ERROR_CODE: 103,
  ERROR_MESSAGE: "Request failed, confirm your apiKey and namespace is correct",
};
const f = {
  ERROR_CODE: 110,
  ERROR_MESSAGE:
    "Check your params, parameter apiKey, namespace and zoneHost is required!",
};
const g = {
  ERROR_CODE: 111,
  ERROR_MESSAGE: "Check your params, parameter request and store is required!",
};
const code = 112;
const m = {
  ERROR_CODE: 120,
  ERROR_MESSAGE: "Version is not found, please check your param [version]!",
};
const y = {
  zone: "CN",
  locale: "zh",
  timeout: 15000,
  test: false,
  mode: "normal",
  format: "merged",
  lazyUpdate: false,
  fallbackLang: ["zh"],
  tracker: function () {},
  cache: true,
};
class v {
  constructor(e) {
    this.options = e;
    this.options = e;
  }
  getText(e, t) {
    return l(this, undefined, undefined, function* () {
      return yield this._request(e, t);
    });
  }
  getTexts(e) {
    const t = this;
    return Promise.all(
      e.map((e) => {
        const n = e[0];
        const i = e[1];
        return t.getText(n, i);
      }),
    );
  }
  _request(e, t) {
    return l(this, undefined, undefined, function* () {
      let n;
      let i;
      let o;
      let r;
      let s;
      let a;
      let c;
      let l;
      n = this.options.getReleaseVersion(e);
      if (e && n && t) {
        return {};
      }
      i = this.getUrl(e, t);
      s = (r = (yield (o = this.options).request(i, {
        timeout: o.timeout,
      })).data).status;
      a = r.message;
      if (+s == 200) {
        return this._mapResponse(a);
      }
      if (+s == 1001) {
        throw new p((c = m).ERROR_CODE, c.ERROR_MESSAGE);
      }
      throw new p((l = h).ERROR_CODE, l.ERROR_MESSAGE);
    });
  }
  getUrl(e, t) {
    const options = this.options;
    const n_apiKey = options.apiKey;
    const n_locale = options.locale;
    const n_fallbackLang = options.fallbackLang;
    const n_zoneHost = options.zoneHost;
    const n_mode = options.mode;
    const n_getReleaseVersion = options.getReleaseVersion;
    const l = [n_locale].concat(n_fallbackLang);
    let u =
      n_zoneHost +
      "/check_and_get_text/" +
      n_apiKey +
      "/" +
      n_mode +
      "/" +
      e +
      "?lang=" +
      l;
    const p = n_getReleaseVersion(e);
    if (p) {
      u =
        n_zoneHost +
        "/text_by_release_version/" +
        n_apiKey +
        "/" +
        n_mode +
        "/" +
        e +
        "/" +
        p +
        "?lang=" +
        l;
    }
    if (typeof t === "string") {
      u += "&version=" + t;
    }
    return u;
  }
  _mapResponse(e) {
    if (e) {
      return Object.keys(e).reduce((acc, key) => {
        acc[key.toLowerCase()] = e[key];
        return acc;
      }, {});
    }
    return {};
  }
}
class _ {
  constructor(e) {
    this.options = e;
    this.options = e;
  }
  _setCache(e, t, n) {
    try {
      return this.options.store.set(e, t);
    } catch (error) {
      this.options.tracker("cache_error", {
        code,
        message: error.message,
        stack: error.stack,
      });
      if (n) {
        n();
      }
      return;
    }
  }
  _getCache(e) {
    const options = this.options;
    const t_store = options.store;
    const t_cache = options.cache;
    try {
      return t_cache && t_store.get(e);
    } catch (error) {
      this.options.tracker("cache_error", {
        code,
        message: error.message,
        stack: error.stack,
      });
      return;
    }
  }
  getVersion(e) {
    const options = this.options;
    const t_apiKey = options.apiKey;
    const t_locale = options.locale;
    const t_getReleaseVersion = options.getReleaseVersion;
    let r = "version." + t_apiKey + "." + e + "." + t_locale;
    const s = t_getReleaseVersion(e);
    if (s) {
      r += "." + s;
    }
    const a = this.getText(e);
    if (a && typeof a === "object") {
      if (typeof a === "object" && a.then) {
        return this._getCache(r);
      }
      if (typeof a === "object" && Object.keys(a || {}).length === 0) {
        return null;
      }
      return this._getCache(r);
    }
    return null;
  }
  getVersions(e) {
    const t = this;
    return Promise.all(e.map((e) => t.getVersion(e)));
  }
  getText(e) {
    const options = this.options;
    const t_apiKey = options.apiKey;
    const t_locale = options.locale;
    const t_getReleaseVersion = options.getReleaseVersion;
    let r = "text." + t_apiKey + "." + e + "." + t_locale;
    const s = t_getReleaseVersion(e);
    if (s) {
      r += "." + s;
    }
    return this._getCache(r);
  }
  getTexts(e) {
    const t = this;
    return Promise.all(e.map((e) => t.getText(e)));
  }
  refresh(e, t, n, i) {
    return l(this, undefined, undefined, function* () {
      let o;
      let r;
      let s;
      let a;
      let c;
      const l = this;
      r = (o = this.options).apiKey;
      s = o.getReleaseVersion;
      a = o.cache;
      c = [];
      t.forEach((o, u) => {
        let p = "text." + r + "." + e[u] + "." + i[u];
        let h = "version." + r + "." + e[u] + "." + i[u];
        const f = s(e[u]);
        if (f) {
          p += "." + f;
          h += "." + f;
        }
        if (a) {
          c.push(
            l._setCache(p, t[u], function () {
              l.options.store.set(p, {});
            }),
          );
          c.push(l._setCache(h, n[u]));
        }
      });
      yield Promise.all(c);
      return t.reduce((acc, item) => Object.assign(acc, item), {});
    });
  }
}
const b = (function () {
  class e {
    constructor(e = []) {
      this._list = [];
      this._list = e;
    }
    get length() {
      return this._list.length;
    }
    getList() {
      return this._list;
    }
    getNamespaces() {
      return this._list.map((e) => e.namespace);
    }
    addNamespace(e) {
      this._list.push(e);
    }
    insertTexts(e) {
      this._list.forEach((t, n) => {
        t.texts = e[n];
      });
    }
    sortByPrior() {
      this._list.sort((e, t) => e.prior - t.prior);
      return this._list;
    }
    concat(t) {
      return new e(this._list.concat(t.getList()));
    }
  }
  return e;
})();
class S {
  constructor(e, t, n) {
    this._promiseRefresh = Promise.resolve(null);
    this.remote = e;
    this.local = t;
    this.options = n;
  }
  _checkVersions(e) {
    return l(this, undefined, undefined, function* () {
      let t;
      let n;
      let i;
      let o;
      let equalNs;
      let diffNs;
      t = this.options.locale;
      n = yield this.local.getVersions(e);
      i = e.map((e, t) => [e, n[t]]);
      o = yield this.remote.getTexts(i);
      equalNs = new b();
      diffNs = new b();
      e.forEach((namespace, prior) => {
        const a = o[prior];
        const a_updated = a.updated;
        const a_version = a.version;
        const a_data = a.data;
        const a_lang = a.lang;
        if (a_updated) {
          diffNs.addNamespace({
            namespace,
            prior,
            version: a_version,
            texts: a_data,
            lang: a_lang,
          });
        } else {
          equalNs.addNamespace({
            namespace,
            prior,
            version: n[prior],
            lang: t,
          });
        }
      });
      return {
        equalNs,
        diffNs,
      };
    });
  }
  waitForRefresh() {
    return this._promiseRefresh;
  }
  _refresh(e) {
    const t = e.getList();
    const n = [];
    const i = [];
    const o = [];
    const r = [];
    t.forEach((e) => {
      n.push(e.namespace);
      i.push(e.version);
      o.push(e.texts);
      r.push(e.lang);
    });
    return this.local.refresh(n, o, i, r);
  }
  _getLocalTexts(e) {
    return l(this, undefined, undefined, function* () {
      let t;
      t = yield this.local.getTexts(e.getNamespaces());
      e.insertTexts(t);
      return t;
    });
  }
  load(e) {
    return l(this, undefined, undefined, function () {
      let t;
      let n;
      let i;
      let o;
      let r;
      return u(this, function (s) {
        switch (s.label) {
          case 0:
            t = this.options.format;
            return [4, this._checkVersions(e)];
          case 1:
            i = (n = s.sent()).equalNs;
            o = n.diffNs;
            if (!i.length) {
              return [3, 3];
            }
            return [4, this._getLocalTexts(i)];
          case 2:
            s.sent();
            return [3, 4];
          case 3:
            s.label = 4;
          case 4:
            r = this._formatTexts(t, o.concat(i));
            if (!o.length) {
              return [3, 6];
            }
            return [4, this._refresh(o)];
          case 5:
            s.sent();
            s.label = 6;
          case 6:
            return [
              2,
              {
                texts: r,
                diffNs: o.getNamespaces(),
                equalNs: i.getNamespaces(),
              },
            ];
        }
      });
    });
  }
  _getCacheText(e) {
    return l(this, undefined, undefined, function* () {
      let t;
      let n;
      let i;
      let o;
      let r;
      let s;
      let a;
      n = (t = this.options).locale;
      i = t.format;
      o = yield this.local.getTexts(e);
      r = yield this.local.getVersions(e);
      a = new b(
        (s = o
          .map((t, i) => {
            if (t) {
              return {
                namespace: e[i],
                version: r[i],
                lang: n,
                texts: t,
              };
            }
          })
          .filter((e) => !!e)),
      );
      return {
        texts: this._formatTexts(i, a),
        cacheAllLoaded: s.length === o.length,
      };
    });
  }
  lazyLoad(e) {
    return l(this, undefined, undefined, function* () {
      let t;
      let n;
      let i;
      let o;
      let r;
      n = (t = yield this._getCacheText(e)).texts;
      i = t.cacheAllLoaded;
      o = Object.keys(n).length === 0 || !i;
      this._promiseRefresh = this.load(e);
      if (o) {
        n = (r = yield this._promiseRefresh).texts;
      }
      return {
        texts: n,
        diffNs: o ? r && r.diffNs : [],
        equalNs: o ? r && r.equalNs : e,
      };
    });
  }
  _formatTexts(e, t) {
    if (e === "splitted") {
      return t.getList().reduce((acc, item) => {
        const t_namespace = item.namespace;
        const t_lang = item.lang;
        const t_texts = item.texts;
        const t_version = item.version;
        acc[t_namespace] = {
          lang: t_lang,
          texts: t_texts,
          version: t_version,
        };
        return acc;
      }, {});
    }
    return t
      .sortByPrior()
      .map((e) => e.texts)
      .reduce((acc, item) => Object.assign(acc, item), {});
  }
}
if (typeof Object.assign !== "function") {
  Object.defineProperty(Object, "assign", {
    value: function (e) {
      if (e == null) {
        throw TypeError("Cannot convert undefined or null to object");
      }
      const t = Object(e);
      for (let n = 1; n < arguments.length; n++) {
        const i = arguments[n];
        if (i != null) {
          for (const o in i) {
            if (Object.prototype.hasOwnProperty.call(i, o)) {
              t[o] = i[o];
            }
          }
        }
      }
      return t;
    },
    writable: true,
    configurable: true,
  });
}
const w = "client_load";
(D || (D = {})).AfterLoad = "afterLoad";
const E = (() => {
  function e(e) {
    this.afterLoadPlugins = [];
    this.setConfig(e);
  }
  e.prototype._init = function (e) {
    const t = this;
    this.options = ((e) => {
      let namespace = (e = {
        ...y,
        ...e,
      }).namespace;
      let e_apiKey = e.apiKey;
      const e_request = e.request;
      const e_store = e.store;
      const e_zoneHost = e.zoneHost;
      if (e.test) {
        e.mode = "test";
      }
      e.namespace = namespace = namespace
        ? Array.isArray(namespace)
          ? namespace
          : [namespace]
        : [];
      e.apiKey = e_apiKey = e_apiKey || e.api_key;
      if (!e_request || !e_store) {
        var s = g.ERROR_CODE;
        var a = g.ERROR_MESSAGE;
        throw new p(s, a, null);
      }
      if (!e_apiKey || !namespace.length || !e_zoneHost) {
        var s = f.ERROR_CODE;
        var a = f.ERROR_MESSAGE;
        throw new p(s, a, null);
      }
      return e;
    })(e);
    const options = this.options;
    const n_apiKey = options.apiKey;
    const n_locale = options.locale;
    const n_zoneHost = options.zoneHost;
    const n_request = options.request;
    const n_timeout = options.timeout;
    const n_fallbackLang = options.fallbackLang;
    const n_store = options.store;
    const n_lazyUpdate = options.lazyUpdate;
    const n_test = options.test;
    const n_mode = options.mode;
    const n_format = options.format;
    const n_cache = options.cache;
    const E = {
      mode: n_lazyUpdate ? "lazy" : n_test ? "test" : "prod",
      zone: n_zoneHost,
      locale: n_locale,
      apiKey: n_apiKey,
    };
    this._tracker = function (e, n) {
      try {
        t.options.tracker(e, {
          ...E,
          ...n,
        });
      } catch (error) {
        console.log(error);
      }
    };
    const getReleaseVersion = this._getReleaseVersionByNamespace.bind(this);
    const A = new v({
      request: n_request,
      timeout: n_timeout,
      apiKey: n_apiKey,
      locale: n_locale,
      zoneHost: n_zoneHost,
      fallbackLang: n_fallbackLang,
      mode: n_mode,
      getReleaseVersion,
    });
    const O = new _({
      apiKey: n_apiKey,
      locale: n_locale,
      store: n_store,
      tracker: this._tracker,
      getReleaseVersion,
      cache: n_cache,
    });
    this._textManager = new S(A, O, {
      locale: n_locale,
      format: n_format,
    });
    this.initPlugin();
  };
  e.prototype.initPlugin = function () {
    const e = this;
    const t = this.options.plugins || [];
    if (Array.isArray(t) && t.every((e) => typeof e === "object")) {
      t.forEach((t) => {
        if (t.type === D.AfterLoad) {
          e.afterLoadPlugins.push(t);
        }
      });
    }
  };
  e.prototype._getReleaseVersionByNamespace = function (e) {
    const namespace = this.options.namespace;
    const version = this.options.version;
    let i = null;
    if (Array.isArray(version)) {
      i = version[namespace.findIndex((t) => t === e)];
    } else if (version && typeof version === "object") {
      i = version[e];
    } else if (typeof version === "string") {
      i = version;
    }
    return i;
  };
  e.prototype.setConfig = function (e) {
    const t = {
      ...this.options,
      ...e,
    };
    this._init(t);
  };
  e.prototype.waitForRefresh = function () {
    return l(this, undefined, undefined, function* () {
      let e;
      if ((e = yield this._textManager.waitForRefresh())) {
        return e.texts;
      }
      return null;
    });
  };
  e.prototype._load = function () {
    return l(this, undefined, undefined, function* () {
      let e;
      let t;
      let n;
      let i;
      let o;
      t = (e = this.options).namespace;
      n = e.lazyUpdate;
      i = t;
      if (n) {
        o = yield this._textManager.lazyLoad(i);
      } else {
        o = yield this._textManager.load(i);
      }
      return o;
    });
  };
  e.prototype.load = function (e, t) {
    return l(this, undefined, undefined, function* () {
      let n;
      let i;
      let o;
      let r;
      let s;
      let a;
      let c;
      let diffLen;
      let equalLen;
      let namespacesLen;
      let ratio;
      let g;
      let d;
      const m = this;
      n = Date.now();
      i = this.options.namespace;
      try {
        this._tracker(w, {
          state: "start",
          version: "0.5.13",
        });
        r = (o = yield this._load()).diffNs;
        s = o.equalNs;
        a = o.texts;
        if (Array.isArray((c = this.afterLoadPlugins)) && c.length) {
          a =
            (yield c.reduce(
              (acc, item) =>
                acc.then((e) => {
                  if (typeof item.process === "function") {
                    return item.process(e || a, m.options);
                  }
                  return e;
                }),
              Promise.resolve(a),
            )) || a;
        }
        if (e) {
          e(a);
        }
        this._tracker("client_load_time", {
          time: Date.now() - n,
        });
        this._tracker(w, {
          state: "success",
          version: "0.5.13",
        });
        diffLen = r.length;
        ratio = ((equalLen = s.length) / (namespacesLen = i.length)).toFixed(2);
        this._tracker("client_cache", {
          diffLen,
          diff: r.join(","),
          equalLen,
          equal: s.join(","),
          namespaces: s.join(","),
          namespacesLen,
          ratio,
        });
        return a;
      } catch (error) {
        this._tracker(w, {
          state: "fail",
        });
        this._tracker("client_exception", {
          code: error.code,
          message: error.message,
          stack: error.stack,
        });
        if ((error || {}).useWebCache) {
          try {
            if (
              (d = (yield this._textManager._getCacheText(i)).texts) &&
              typeof d === "object"
            ) {
              g.response.data = d;
            } else {
              g.response.data = {};
            }
          } catch (error) {}
        }
        if (!t) {
          return Promise.reject(g);
        }
        t(g);
      }
    });
  };
  return e;
})();
const k = new ((() => {
  class e {
    get(e) {
      if (localStorage && localStorage.getItem) {
        const t = localStorage.getItem(e);
        if (typeof t === "string") {
          try {
            return JSON.parse(t);
          } catch (e) {
            return t || undefined;
          }
        }
        return;
      }
    }
    set(e, t) {
      if (localStorage && localStorage.setItem) {
        localStorage.setItem(e, JSON.stringify(t));
      }
    }
  }
  return e;
})())();
const A = ((e) => {
  function t(t, n, i, o, r, s) {
    const a = e.call(this, t) || this;
    a.url = n;
    a.code = i;
    a.request = o;
    a.response = r;
    a.useWebCache = s;
    a.url = n;
    a.code = i;
    a.request = o;
    a.response = r;
    a.useWebCache = !!s;
    return a;
  }
  s(t, e);
  return t;
})(Error);
function O(e, t) {
  const t_timeout = t.timeout;
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", e);
    request.overrideMimeType("application/json; charset=utf-8");
    request.withCredentials = false;
    request.onreadystatechange = function () {
      if (
        request &&
        request.readyState === 4 &&
        (request.status !== 0 ||
          (request.responseURL && request.responseURL.indexOf("file:") === 0))
      ) {
        let n;
        let r;
        const s = ((e) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return {};
          }
        })(request.responseText);
        const a = s.message && typeof s.message === "object" ? s : null;
        if (request.status < 200 || request.status >= 300 || !a) {
          n = request;
          r = (r = (s || {}).message || "") ? ", reason is: ".concat(r) : "";
          reject(
            new A(
              "Request failed with status code " + n.status + r,
              e,
              null,
              n,
              {
                data: {},
              },
              true,
            ),
          );
          request = null;
          return;
        }
        resolve({
          data: a,
          status: request.status,
          statusText: request.statusText,
          request,
        });
        request = null;
      }
    };
    request.onerror = function () {
      reject(
        new A(
          "Network Error",
          e,
          null,
          request,
          {
            data: {},
          },
          true,
        ),
      );
      request = null;
    };
    request.timeout = t_timeout;
    request.ontimeout = function () {
      reject(
        new A(
          "timeout of " + t_timeout + "ms exceeded",
          e,
          "ECONNABORTED",
          request,
          {
            data: {},
          },
          true,
        ),
      );
      request = null;
    };
    request.send();
  });
}
const R = ((e) => {
  function t(t) {
    if (!t.store) {
      t.store = k;
    }
    if (!t.request) {
      t.request = O;
    }
    return e.call(this, t) || this;
  }
  s(t, e);
  return t;
})(E);
function z() {
  let e = [];
  for (let t = 0; t < arguments.length; t++) {
    e = e.concat(
      ((e, t) => {
        let n = typeof Symbol === "function" && e[Symbol.iterator];
        if (!n) {
          return e;
        }
        let i;
        let o;
        const r = n.call(e);
        const s = [];
        try {
          while ((t === undefined || t-- > 0) && !(i = r.next()).done) {
            s.push(i.value);
          }
        } catch (error) {
          o = {
            error,
          };
        } finally {
          try {
            if (i && !i.done && (n = r.return)) {
              n.call(r);
            }
          } finally {
            if (o) {
              throw o.error;
            }
          }
        }
        return s;
      })(arguments[t]),
    );
  }
  return e;
}
let I;
let T;
var D;
let C;
let L;
let N;
let M;
class G {
  constructor() {
    this._hooks = {};
    this._cache = [];
    this._hooksCache = {};
  }
  on(e, t) {
    if (e && t && typeof t === "function") {
      if (!this._hooks[e]) {
        this._hooks[e] = [];
      }
      this._hooks[e].push(t);
    }
  }
  once(e, t) {
    const n = this;
    if (e && t && typeof t === "function") {
      this.on(e, function i(o) {
        t(o);
        n.off(e, i);
      });
    }
  }
  off(e, t) {
    if (e && this._hooks[e] && this._hooks[e].length) {
      if (t) {
        const n = this._hooks[e].indexOf(t);
        if (n !== -1) {
          this._hooks[e].splice(n, 1);
        }
      } else {
        this._hooks[e] = [];
      }
    }
  }
  emit(e, t, n) {
    if (n) {
      if (e) {
        if (this._cache.indexOf(n) !== -1) {
          this._emit(e, t);
        } else {
          if (!this._hooksCache.hasOwnProperty(n)) {
            this._hooksCache[n] = {};
          }
          if (!this._hooksCache[n].hasOwnProperty(e)) {
            this._hooksCache[n][e] = [];
          }
          this._hooksCache[n][e].push(t);
        }
      }
    } else {
      this._emit(e, t);
    }
  }
  _emit(e, t) {
    if (e && this._hooks[e] && this._hooks[e].length) {
      z(this._hooks[e]).forEach((e) => {
        try {
          e(t);
        } catch (e) {}
      });
    }
  }
  set(e) {
    if (e && this._cache.indexOf(e) === -1) {
      this._cache.push(e);
    }
  }
}
const P = (e) =>
  e != null && Object.prototype.toString.call(e) == "[object Object]";
C = +Date.now() + Number(("" + Math.random()).slice(2, 8));
const B = () => (C += 1);
const j = (e) =>
  ((e, t) => {
    if (typeof e === "string" && typeof t === "number") {
      let n;
      const i = [];
      const o = String.fromCharCode((t = t <= 25 ? t : t % 25) + 97);
      n = e.split(o);
      for (let r = 0; r < n.length; r++) {
        let s = parseInt(n[r], t);
        const a = String.fromCharCode((s ^= 64));
        i.push(a);
      }
      return i.join("");
    }
  })(e, 25);
const U = (e) => {
  const t = document.createElement("a");
  t.href = e;
  return t;
};
const K = (e) => {
  const t = {};
  try {
    let n = U(e).search;
    (n = n.slice(1)).split("&").forEach((e) => {
      let n;
      let i;
      const o = e.split("=");
      if (o.length) {
        n = o[0];
        i = o[1];
      }
      try {
        t[n] = decodeURIComponent(i === undefined ? "" : i);
      } catch (e) {
        t[n] = i;
      }
    });
  } catch (e) {}
  return t;
};
I = L = {
  exports: {},
};
T = L.exports;
I.exports = (() => {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      const n = arguments[e];
      for (const i in n) {
        t[i] = n[i];
      }
    }
    return t;
  }
  function t(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function n(i) {
    function o() {}
    function r(t, n, r) {
      if (typeof document !== "undefined") {
        if (
          typeof (r = e(
            {
              path: "/",
            },
            o.defaults,
            r,
          )).expires === "number"
        ) {
          r.expires = new Date(+new Date() + 86400000 * r.expires);
        }
        r.expires = r.expires ? r.expires.toUTCString() : "";
        try {
          const s = JSON.stringify(n);
          if (/^[\{\[]/.test(s)) {
            n = s;
          }
        } catch (e) {}
        n = i.write
          ? i.write(n, t)
          : encodeURIComponent(String(n)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent,
            );
        t = encodeURIComponent(String(t))
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/[\(\)]/g, escape);
        let a = "";
        for (const c in r) {
          if (r[c]) {
            a += "; " + c;
            if (r[c] !== true) {
              a += "=" + r[c].split(";")[0];
            }
          }
        }
        return (document.cookie = t + "=" + n + a);
      }
    }
    function s(e, n) {
      if (typeof document !== "undefined") {
        const o = {};
        for (
          let r = document.cookie ? document.cookie.split("; ") : [], s = 0;
          s < r.length;
          s++
        ) {
          const a = r[s].split("=");
          let c = a.slice(1).join("=");
          if (!(n || c.charAt(0) !== '"')) {
            c = c.slice(1, -1);
          }
          try {
            const l = t(a[0]);
            c = (i.read || i)(c, l) || t(c);
            if (n) {
              try {
                c = JSON.parse(c);
              } catch (e) {}
            }
            o[l] = c;
            if (e === l) {
              break;
            }
          } catch (e) {}
        }
        if (e) {
          return o[e];
        }
        return o;
      }
    }
    o.set = r;
    o.get = function (e) {
      return s(e, false);
    };
    o.getJSON = function (e) {
      return s(e, true);
    };
    o.remove = function (t, n) {
      r(
        t,
        "",
        e(n, {
          expires: -1,
        }),
      );
    };
    o.defaults = {};
    o.withConverter = n;
    return o;
  })(function () {});
})();
const L_exports = L.exports;
const F = (e, t) => {
  try {
    return L_exports.get(e);
  } catch (e) {
    return "";
  }
};
const q = (e, t, n, i) => {
  try {
    const domain = i || document.domain;
    const r = +new Date() + (n || 604800000);
    L_exports.set(e, t, {
      expires: new Date(r),
      path: "/",
      domain,
    });
  } catch (e) {}
};
class W {
  constructor() {
    this.cache = {};
  }
  setItem(e, t) {
    this.cache[e] = t;
  }
  getItem(e) {
    return this.cache[e];
  }
  removeItem(e) {
    this.cache[e] = undefined;
  }
  getCookie(e, t) {
    return F(e);
  }
  setCookie(e, t, n, i) {
    q(e, t, n, i);
  }
}
const H = {
  getItem: function (e) {
    try {
      const t = localStorage.getItem(e);
      let n = t;
      try {
        if (t && typeof t === "string") {
          n = JSON.parse(t);
        }
      } catch (e) {}
      return n || {};
    } catch (e) {}
    return {};
  },
  setItem: function (e, t) {
    try {
      const n = typeof t === "string" ? t : JSON.stringify(t);
      localStorage.setItem(e, n);
    } catch (e) {}
  },
  removeItem: function (e) {
    try {
      localStorage.removeItem(e);
    } catch (e) {}
  },
  getCookie: function (e, t) {
    return F(e);
  },
  setCookie: function (e, t, n, i) {
    q(e, t, n, i);
  },
  isSupportLS: (() => {
    try {
      localStorage.setItem("_ranger-test-key", "hi");
      localStorage.getItem("_ranger-test-key");
      localStorage.removeItem("_ranger-test-key");
      return true;
    } catch (e) {
      return false;
    }
  })(),
};
const J = {
  getItem: function (e) {
    try {
      const t = sessionStorage.getItem(e);
      let n = t;
      try {
        if (t && typeof t === "string") {
          n = JSON.parse(t);
        }
      } catch (e) {}
      return n || {};
    } catch (e) {}
    return {};
  },
  setItem: function (e, t) {
    try {
      const n = typeof t === "string" ? t : JSON.stringify(t);
      sessionStorage.setItem(e, n);
    } catch (e) {}
  },
  removeItem: function (e) {
    try {
      sessionStorage.removeItem(e);
    } catch (e) {}
  },
  getCookie: function (e, t) {
    return F(e);
  },
  setCookie: function (e, t, n, i) {
    q(e, t, n, i);
  },
  isSupportSession: (() => {
    try {
      sessionStorage.setItem("_ranger-test-key", "hi");
      sessionStorage.getItem("_ranger-test-key");
      sessionStorage.removeItem("_ranger-test-key");
      return true;
    } catch (e) {
      return false;
    }
  })(),
};
class X {
  constructor(e, t) {
    this._storage =
      t && t === "session" ? J : !e && H.isSupportLS ? H : new W();
  }
  getItem(e) {
    return this._storage.getItem(e);
  }
  setItem(e, t) {
    this._storage.setItem(e, t);
  }
  getCookie(e, t) {
    return this._storage.getCookie(e, t);
  }
  setCookie(e, t, n, i) {
    this._storage.setCookie(e, t, n, i);
  }
  removeItem(e) {
    this._storage.removeItem(e);
  }
}
class $ {
  constructor(e, t, n) {
    this.appid = e;
    this.domain = t;
    this.userAgent = window.navigator.userAgent;
    this.appVersion = window.navigator.appVersion;
    this.cookie_expire = n;
  }
  init() {
    const userAgent = window.navigator.userAgent;
    const language = window.navigator.language;
    const document_referrer = document.referrer;
    const referrer_host = document_referrer
      ? U(document_referrer).hostname
      : "";
    const o = K(window.location.href);
    const platform = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(
      this.appVersion,
    )
      ? "wap"
      : "web";
    this.utm = ((e, t, n, i) => {
      const o = new X(false, "session");
      const r = e ? "_$utm_from_url_" + e : "_$utm_from_url";
      const s = {};
      const a = [
        "tr_shareuser",
        "tr_admaster",
        "tr_param1",
        "tr_param2",
        "tr_param3",
        "tr_param4",
        "$utm_from_url",
      ];
      const c = {
        ad_id: Number(t.ad_id) || undefined,
        campaign_id: Number(t.campaign_id) || undefined,
        creative_id: Number(t.creative_id) || undefined,
        utm_source: t.utm_source,
        utm_medium: t.utm_medium,
        utm_campaign: t.utm_campaign,
        utm_term: t.utm_term,
        utm_content: t.utm_content,
        tr_shareuser: t.tr_shareuser,
        tr_admaster: t.tr_admaster,
        tr_param1: t.tr_param1,
        tr_param2: t.tr_param2,
        tr_param3: t.tr_param3,
        tr_param4: t.tr_param4,
      };
      try {
        let l = false;
        for (const u in c) {
          if (c[u]) {
            if (a.indexOf(u) !== -1) {
              if (!s.hasOwnProperty("tracer_data")) {
                s.tracer_data = {};
              }
              s.tracer_data[u] = c[u];
            } else {
              s[u] = c[u];
            }
            l = true;
          }
        }
        if (l) {
          o.setItem(r, "1");
        }
        if (o.getItem(r)) {
          if (!s.hasOwnProperty("tracer_data")) {
            s.tracer_data = {};
          }
          s.tracer_data.$utm_from_url = 1;
        }
      } catch (e) {
        return c;
      }
      return s;
    })(this.appid, o, this.domain, this.cookie_expire);
    const s = this.browser();
    const a = this.os();
    return {
      browser: s.browser,
      browser_version: s.browser_version,
      platform,
      os_name: a.os_name,
      os_version: a.os_version,
      userAgent,
      screen_width: window.screen && window.screen.width,
      screen_height: window.screen && window.screen.height,
      device_model: this.getDeviceModel(a.os_name),
      language,
      referrer: document_referrer,
      referrer_host,
      utm: this.utm,
      latest_data: this.last(document_referrer, referrer_host),
    };
  }
  last(e, t) {
    let n = "";
    let i = "";
    let o = "";
    const location_hostname = location.hostname;
    let isLast = false;
    if (e && t && location_hostname !== t) {
      n = e;
      i = t;
      isLast = true;
      const a = K(e);
      if (a.keyword) {
        o = a.keyword;
      }
    }
    return {
      $latest_referrer: n,
      $latest_referrer_host: i,
      $latest_search_keyword: o,
      isLast,
    };
  }
  browser() {
    let e;
    let t;
    let browser = "";
    let browser_version = "" + parseFloat(this.appVersion);
    const userAgent = this.userAgent;
    if (userAgent.indexOf("Edge") !== -1 || userAgent.indexOf("Edg") !== -1) {
      browser = "Microsoft Edge";
      if (userAgent.indexOf("Edge") !== -1) {
        e = userAgent.indexOf("Edge");
        browser_version = userAgent.substring(e + 5);
      } else {
        e = userAgent.indexOf("Edg");
        browser_version = userAgent.substring(e + 4);
      }
    } else if ((e = userAgent.indexOf("MSIE")) !== -1) {
      browser = "Microsoft Internet Explorer";
      browser_version = userAgent.substring(e + 5);
    } else if ((e = userAgent.indexOf("Lark")) !== -1) {
      browser = "Lark";
      browser_version = userAgent.substring(e + 5, e + 11);
    } else if (userAgent.indexOf("Chrome") !== -1) {
      if ((e = userAgent.indexOf("TTWebView")) !== -1) {
        browser = "TTWebView";
        browser_version = userAgent.substring(e + 10, e + 23);
      } else if (
        (e = userAgent.indexOf("Chrome")) !== -1 ||
        (e = userAgent.indexOf("Chrome")) !== -1
      ) {
        browser = "Chrome";
        browser_version = userAgent.substring(e + 7);
      }
    } else if (userAgent.indexOf("Safari") !== -1) {
      if ((e = userAgent.indexOf("Safari")) !== -1) {
        browser = "Safari";
        browser_version = userAgent.substring(e + 7);
        if ((e = userAgent.indexOf("Version")) !== -1) {
          browser_version = userAgent.substring(e + 8);
        }
      }
    } else if ((e = userAgent.indexOf("Firefox")) !== -1) {
      browser = "Firefox";
      browser_version = userAgent.substring(e + 8);
    }
    if ((t = browser_version.indexOf(";")) !== -1) {
      browser_version = browser_version.substring(0, t);
    }
    if ((t = browser_version.indexOf(" ")) !== -1) {
      browser_version = browser_version.substring(0, t);
    }
    if ((t = browser_version.indexOf(")")) !== -1) {
      browser_version = browser_version.substring(0, t);
    }
    return {
      browser,
      browser_version,
    };
  }
  os() {
    let e;
    let t;
    let os_name = "";
    let os_version = "";
    for (
      let o = [
          {
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/,
          },
          {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/,
          },
          {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/,
          },
          {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/,
          },
          {
            s: "Android",
            r: /Android/,
          },
          {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/,
          },
          {
            s: "Mac OS X",
            r: /Mac OS X/,
          },
          {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
          },
          {
            s: "ChromeOS",
            r: /CrOS/,
          },
          {
            s: "Linux",
            r: /(Linux|X11)/,
          },
          {
            s: "Sun OS",
            r: /SunOS/,
          },
        ],
        r = 0;
      r < o.length;
      r++
    ) {
      const s = o[r];
      if (s.r.test(this.userAgent)) {
        if ((os_name = s.s) === "Mac OS X" && this.isNewIpad()) {
          os_name = "iOS";
        }
        break;
      }
    }
    const a = (e, t) => {
      const n = e.exec(t);
      if (n && n[1]) {
        return n[1];
      }
      return "";
    };
    const c = (e, userAgent) => {
      const n = RegExp(
        "(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + e + ")",
        "i",
      ).exec(userAgent);
      if (n) {
        return n.slice(1)[0];
      }
      return "";
    };
    if (/Windows/.test(os_name)) {
      os_version = a(/Windows (.*)/, os_name);
      os_name = "windows";
    }
    switch (os_name) {
      case "Mac OS X":
        os_version = c(
          "Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?",
          this.userAgent,
        );
        os_name = "mac";
        break;
      case "Android":
        if (!(t = a(/Android ([\.\_\d]+)/, (e = this.userAgent)))) {
          t = a(/Android\/([\.\_\d]+)/, e);
        }
        os_version = t;
        os_name = "android";
        break;
      case "iOS":
        os_version = this.isNewIpad()
          ? c(
              "Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?",
              this.userAgent,
            )
          : (os_version = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion))
            ? os_version[1] + "." + os_version[2] + "." + (0 | os_version[3])
            : "";
        os_name = "ios";
        break;
      case "chromeOS":
        const l = this.userAgent.indexOf("x86_64");
        os_version = this.userAgent.substring(l + 7, l + 16);
    }
    return {
      os_name,
      os_version,
    };
  }
  getDeviceModel(e) {
    let t = "";
    try {
      if (e === "android") {
        navigator.userAgent.split(";").forEach((e) => {
          if (e.indexOf("Build/") > -1) {
            t = e.slice(0, e.indexOf("Build/"));
          }
        });
      } else if (e === "ios" || e === "mac" || e === "windows") {
        if (this.isNewIpad()) {
          t = "iPad";
        } else {
          const n = navigator.userAgent.replace("Mozilla/5.0 (", "");
          const i = n.indexOf(";");
          t = n.slice(0, i);
        }
      }
    } catch (e) {}
    return t.trim();
  }
  isNewIpad() {
    return (
      this.userAgent !== undefined &&
      navigator.platform === "MacIntel" &&
      typeof navigator.maxTouchPoints === "number" &&
      navigator.maxTouchPoints > 1
    );
  }
}
const Y = {
  sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
  va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
};
const Z = {
  va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
  sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
  in: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
};
const Q = {
  sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z21z1ez4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
  va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
  in: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k",
  ie2: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z1gz1cz4ez4az22z1gz1iz22z1mz1iz25z4az1cz23",
};
const ee = {
  sg: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az22z1gz1iz22z1mz1iz25z4az23z21",
  va: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az22z1gz1iz22z1mz1iz24z4az23z21",
  ie: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z1gz1cz4az22z1gz1iz22z1mz1iz25z4az1cz23",
  ie2: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z1gz1cz4ez4az22z1gz1iz22z1mz1iz25z4az1cz23",
};
i = N || (N = {});
i.Init = "init";
i.Config = "config";
i.Start = "start";
i.Ready = "ready";
i.TokenComplete = "token-complete";
i.TokenStorage = "token-storage";
i.TokenFetch = "token-fetch";
i.TokenError = "token-error";
i.ConfigUuid = "config-uuid";
i.ConfigWebId = "config-webid";
i.ConfigDomain = "config-domain";
i.CustomWebId = "custom-webid";
i.TokenChange = "token-change";
i.TokenReset = "token-reset";
i.ConfigTransform = "config-transform";
i.EnvTransform = "env-transform";
i.SessionReset = "session-reset";
i.SessionResetTime = "session-reset-time";
i.Event = "event";
i.Events = "events";
i.EventNow = "event-now";
i.CleanEvents = "clean-events";
i.BeconEvent = "becon-event";
i.SubmitBefore = "submit-before";
i.SubmitScuess = "submit-scuess";
i.SubmitAfter = "submit-after";
i.SubmitError = "submit-error";
i.SubmitVerify = "submit-verify";
i.DestoryInstance = "destory-instance";
i.Stay = "stay";
i.ResetStay = "reset-stay";
i.StayReady = "stay-ready";
i.SetStay = "set-stay";
i.RouteChange = "route-change";
i.RouteReady = "route-ready";
i.Ab = "ab";
i.AbVar = "ab-var";
i.AbAllVars = "ab-all-vars";
i.AbConfig = "ab-config";
i.AbExternalVersion = "ab-external-version";
i.AbVersionChangeOn = "ab-version-change-on";
i.AbVersionChangeOff = "ab-version-change-off";
i.AbOpenLayer = "ab-open-layer";
i.AbCloseLayer = "ab-close-layer";
i.AbReady = "ab-ready";
i.AbComplete = "ab-complete";
i.AbTimeout = "ab-timeout";
i.Profile = "profile";
i.ProfileSet = "profile-set";
i.ProfileSetOnce = "profile-set-once";
i.ProfileUnset = "profile-unset";
i.ProfileIncrement = "profile-increment";
i.ProfileAppend = "profile-append";
i.ProfileClear = "profile-clear";
i.Autotrack = "autotrack";
i.AutotrackReady = "autotrack-ready";
i.CepReady = "cep-ready";
i.TracerReady = "tracer-ready";
i.sessionRecord = "session-record";
i.SessionRecordStart = "session-record-start";
i.SessionRecordPause = "session-record-pause";
i.SessionRecordEnd = "session-record-end";
i.SessionRecordReport = "session-record-report";
i.VisualCollectReady = "visual-collect-ready";
i.VisualApiReady = "visual-api-ready";
i.VisualApiUpdate = "visual-api-update";
o = M || (M = {});
o.DEBUGGER_MESSAGE = "debugger-message";
o.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk";
o.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch";
o.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result";
o.DEBUGGER_MESSAGE_EVENT = "debugger-message-event";
o.DEVTOOL_WEB_READY = "devtool-web-ready";
const et = N;
let en;
const ei = new Date().getTimezoneOffset();
const timezone = parseInt(`${-ei / 60}`, 10);
const tz_offset = 60 * ei;
class es {
  constructor(e, t) {
    this.is_first_time = true;
    this.configPersist = false;
    this.initConfig = t;
    this.collect = e;
    var n = new $(
      t.app_id,
      t.cookie_domain || "",
      t.cookie_expire || 604800000,
    ).init();
    var i = "__tea_cache_first_" + t.app_id;
    this.configKey = "__tea_cache_config_" + t.app_id;
    this.sessionStorage = new X(false, "session");
    this.localStorage = new X(false, "local");
    this.channelUrl =
      t.channel_type === "tcpy" || t.channel_type === "ttp"
        ? {
            WEBID_URL: "/v1/user/webid",
            TOB_URL: "",
            REPORT_URL: "/v1/list",
          }
        : {
            WEBID_URL: "/webid",
            TOB_URL: "/tobid",
            REPORT_URL: "/list",
          };
    if (t.configPersist) {
      this.configPersist = true;
      this.storage =
        t.configPersist === 1 ? this.sessionStorage : this.localStorage;
    }
    var o = this.localStorage.getItem(i);
    if (o && o == 1) {
      this.is_first_time = false;
    } else {
      this.is_first_time = true;
      this.localStorage.setItem(i, "1");
    }
    this.envInfo = {
      user: {
        user_unique_id: en,
        user_type: en,
        user_id: en,
        user_is_auth: en,
        user_is_login: en,
        device_id: en,
        web_id: en,
        ip_addr_id: en,
        user_unique_id_type: en,
      },
      header: {
        app_id: en,
        app_name: en,
        app_install_id: en,
        install_id: en,
        app_package: en,
        app_channel: en,
        app_version: en,
        ab_version: en,
        os_name: n.os_name,
        os_version: n.os_version,
        device_model: n.device_model,
        ab_client: en,
        traffic_type: en,
        client_ip: en,
        device_brand: en,
        os_api: en,
        access: en,
        language: n.language,
        region: en,
        app_language: en,
        app_region: en,
        creative_id: n.utm.creative_id,
        ad_id: n.utm.ad_id,
        campaign_id: n.utm.campaign_id,
        log_type: en,
        rnd: en,
        platform: n.platform,
        sdk_version: "5.2.3_oversea",
        sdk_lib: "js",
        province: en,
        city: en,
        timezone,
        tz_offset,
        tz_name: en,
        sim_region: en,
        carrier: en,
        resolution: n.screen_width + "x" + n.screen_height,
        browser: n.browser,
        browser_version: n.browser_version,
        referrer: n.referrer,
        referrer_host: n.referrer_host,
        width: n.screen_width,
        height: n.screen_height,
        screen_width: n.screen_width,
        screen_height: n.screen_height,
        utm_term: n.utm.utm_term,
        utm_content: n.utm.utm_content,
        utm_source: n.utm.utm_source,
        utm_medium: n.utm.utm_medium,
        utm_campaign: n.utm.utm_campaign,
        tracer_data: JSON.stringify(n.utm.tracer_data),
        custom: {},
      },
    };
    this.ab_version = "";
    this.ab_uuid_cache = {};
    this.evtParams = {};
    this.reportErrorCallback = function () {};
    this.isLast = false;
    this.setCustom(n);
    this.initDomain();
    this.initABData();
  }
  initDomain(e) {
    const channel_domain = this.initConfig.channel_domain;
    if (channel_domain) {
      this.domain = channel_domain;
    } else {
      const n = e || this.initConfig.channel;
      let i =
        this.initConfig && this.initConfig.channel_type
          ? this.initConfig.channel_type === "tcpy"
            ? Q[n]
            : ee[n]
          : Y[n];
      if (!i) {
        console.warn(
          "current channel: " +
            n +
            " is not exist, use va instead, please check!!!!",
        );
        i = Y.sg;
      }
      this.domain = j(i);
    }
  }
  setDomain(e) {
    this.customDomain = true;
    this.domain = e;
  }
  getDomain(e) {
    if (!this.customDomain) {
      if (e) {
        this.initDomain(e);
      }
    }
    return this.domain;
  }
  initABData() {
    let e;
    const t = "__tea_sdk_ab_version_" + this.initConfig.app_id;
    e = this.localStorage.getItem(t);
    this.setAbCache(e);
  }
  setAbCache(e) {
    this.ab_cache = e;
  }
  getAbCache() {
    return this.ab_cache;
  }
  clearAbCache() {
    this.ab_cache = {};
    this.ab_version = "";
  }
  setAbVersion(e) {
    this.ab_version = e;
  }
  getAbVersion() {
    return this.ab_version;
  }
  setAbUuidCache(e, t) {
    const n = t || this.envInfo.user.user_unique_id;
    if (!this.ab_uuid_cache["" + n]) {
      this.ab_uuid_cache["" + n] = [];
    }
    if (this.ab_uuid_cache["" + n].indexOf(e) === -1) {
      this.ab_uuid_cache["" + n].push(e);
    }
  }
  getAbUuidCache(e) {
    return this.ab_uuid_cache["" + e];
  }
  getUrl(e) {
    let t = "";
    switch (e) {
      case "event":
        t = this.channelUrl.REPORT_URL;
        break;
      case "webid":
        t = this.channelUrl.WEBID_URL;
        break;
      case "tobid":
        t = this.channelUrl.TOB_URL;
    }
    let n = "";
    if (this.initConfig.caller) {
      n =
        "?sdk_version=5.2.3_oversea&sdk_name=web&app_id=" +
        this.initConfig.app_id +
        "&caller=" +
        this.initConfig.caller;
    }
    return "" + this.getDomain() + t + n;
  }
  setCustom(e) {
    if (e && e.latest_data && e.latest_data.isLast) {
      delete e.latest_data.isLast;
      this.isLast = true;
      for (const t in e.latest_data) {
        this.envInfo.header.custom[t] = e.latest_data[t];
      }
    }
  }
  setAppid(e) {
    this.envInfo.header.app_id = e;
  }
  set(e) {
    const t = this;
    Object.keys(e).forEach((n) => {
      if (!(e[n] !== undefined && e[n] !== null)) {
        t.delete(n);
      }
      if (n === "traffic_type" && t.isLast) {
        t.envInfo.header.custom.$latest_traffic_source_type = e[n];
      }
      if (n === "evtParams") {
        t.evtParams = {
          ...(t.evtParams || {}),
          ...(e.evtParams || {}),
        };
      } else if (n === "_staging_flag") {
        t.evtParams = {
          ...(t.evtParams || {}),
          _staging_flag: e._staging_flag,
        };
      } else if (n === "reportErrorCallback" && typeof e[n] === "function") {
        t.reportErrorCallback = e[n];
      } else {
        let i = "";
        let o = "";
        if (n.indexOf(".") > -1) {
          const r = n.split(".");
          i = r[0];
          o = r[1];
        }
        if (i) {
          if (i === "user" || i === "header") {
            t.envInfo[i][o] = e[n];
          } else {
            t.envInfo.header.custom[o] = e[n];
          }
        } else if (Object.hasOwnProperty.call(t.envInfo.user, n)) {
          if (["user_type", "ip_addr_id"].indexOf(n) > -1) {
            t.envInfo.user[n] = e[n] ? Number(e[n]) : e[n];
          } else if (
            [
              "user_id",
              "web_id",
              "user_unique_id",
              "user_unique_id_type",
            ].indexOf(n) > -1
          ) {
            t.envInfo.user[n] = e[n] ? String(e[n]) : e[n];
          } else if (["user_is_auth", "user_is_login"].indexOf(n) > -1) {
            t.envInfo.user[n] = !!e[n];
          } else if (n === "device_id") {
            t.envInfo.user[n] = e[n];
          }
        } else if (Object.hasOwnProperty.call(t.envInfo.header, n)) {
          t.envInfo.header[n] = e[n];
        } else {
          t.envInfo.header.custom[n] = e[n];
        }
      }
    });
  }
  get(e) {
    try {
      if (e) {
        if (e === "evtParams") {
          return this.evtParams;
        }
        if (e === "reportErrorCallback") {
          return this[e];
        }
        if (Object.hasOwnProperty.call(this.envInfo.user, e)) {
          return this.envInfo.user[e];
        }
        if (Object.hasOwnProperty.call(this.envInfo.header, e)) {
          return this.envInfo.header[e];
        }
        return JSON.parse(JSON.stringify(this.envInfo[e]));
      }
      return JSON.parse(JSON.stringify(this.envInfo));
    } catch (error) {
      console.log("get config stringify error ");
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
    }
  }
  setStore(e) {
    try {
      if (!this.configPersist) {
        return;
      }
      const t = this.storage.getItem(this.configKey) || {};
      if (t && Object.keys(e).length) {
        const n = Object.assign(e, t);
        this.storage.setItem(this.configKey, n);
      }
    } catch (error) {
      console.log("setStore error");
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
    }
  }
  getStore() {
    try {
      if (!this.configPersist) {
        return null;
      }
      const e = this.storage.getItem(this.configKey) || {};
      if (e && Object.keys(e).length) {
        return e;
      }
      return null;
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
      return null;
    }
  }
  delete(e) {
    try {
      if (!this.configPersist) {
        return;
      }
      const t = this.storage.getItem(this.configKey) || {};
      if (t && Object.hasOwnProperty.call(t, e)) {
        delete t[e];
        this.storage.setItem(this.configKey, t);
      }
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
      console.log("delete error");
    }
  }
}
class ea {
  constructor(e, t) {
    this.isLog = t || false;
    this.name = e || "";
  }
  info(e) {
    if (this.isLog) {
      console.log(
        "%c %s",
        "color: yellow; background-color: black;",
        "[Tea instance: " + this.name + "] " + e,
      );
    }
  }
  warn(e) {
    if (this.isLog) {
      console.warn(
        "%c %s",
        "color: #4D1B00; background-color: #FF7D00;",
        "[Tea instance: " + this.name + "] " + e,
      );
    }
  }
  error(e) {
    if (this.isLog) {
      console.error(
        "%c %s",
        "color: #FFF; background-color: #F53F3F;",
        "[Tea instance: " + this.name + "] " + e,
      );
    }
  }
  throw(e) {
    this.error(this.name);
    throw Error(e);
  }
}
class ec {
  constructor() {
    this.spiderBot = [
      "Baiduspider",
      "googlebot",
      "360Spider",
      "haosouspider",
      "YoudaoBot",
      "Yisouspider",
      "Googlebot",
      "Headless",
      "Applebot",
      "Bingbot",
      "PetalBot",
    ];
  }
  checkSpider(e) {
    if (!e.enable_spider) {
      return false;
    }
    const userAgent = window.navigator.userAgent;
    if (!userAgent) {
      return true;
    }
    let n = false;
    this.spiderBot.forEach((e) => {
      if (userAgent.indexOf(e) !== -1) {
        n = true;
      }
    });
    return n;
  }
}
class el {
  constructor(e, t) {
    this.collect = e;
    this.native = t;
  }
  bridgeInject() {
    try {
      return (
        !!this.native &&
        (AppLogBridge
          ? (console.log("AppLogBridge is injected"), true)
          : (console.log("AppLogBridge is not inject"), false))
      );
    } catch (e) {
      console.log("AppLogBridge is not inject");
      return false;
    }
  }
  bridgeReady() {
    const e = this;
    return new Promise((resolve, reject) => {
      try {
        if (e.bridgeInject()) {
          AppLogBridge.hasStarted(function (e) {
            console.log("AppLogBridge is started? : " + e);
            if (e) {
              resolve(true);
            } else {
              reject(false);
            }
          });
        } else {
          reject(false);
        }
      } catch (error) {
        console.log("AppLogBridge, error:" + JSON.stringify(error.stack));
        reject(false);
      }
    });
  }
  setNativeAppId(e) {
    try {
      AppLogBridge.setNativeAppId(JSON.stringify(e));
      console.log("change bridge appid, event report with appid: " + e);
    } catch (e) {
      console.error("setNativeAppId error");
    }
  }
  setConfig(e) {
    const t = this;
    try {
      Object.keys(e).forEach((n) => {
        if (n === "user_unique_id") {
          t.setUserUniqueId(e[n]);
        } else if (e[n]) {
          t.addHeaderInfo(n, e[n]);
        } else {
          t.removeHeaderInfo(n);
        }
      });
    } catch (e) {
      console.error("setConfig error");
    }
  }
  setUserUniqueId(e) {
    try {
      AppLogBridge.setUserUniqueId(e);
    } catch (e) {
      console.error("setUserUniqueId error");
    }
  }
  addHeaderInfo(e, t) {
    try {
      AppLogBridge.addHeaderInfo(e, t);
    } catch (e) {
      console.error("addHeaderInfo error");
    }
  }
  setHeaderInfo(e) {
    try {
      AppLogBridge.setHeaderInfo(JSON.stringify(e));
    } catch (e) {
      console.error("setHeaderInfo error");
    }
  }
  removeHeaderInfo(e) {
    try {
      AppLogBridge.removeHeaderInfo(e);
    } catch (e) {
      console.error("removeHeaderInfo error");
    }
  }
  reportPv(e) {
    this.onEventV3("predefine_pageview", e);
  }
  onEventV3(e, t) {
    try {
      AppLogBridge.onEventV3(e, t);
      this.collect.emit(DebuggerMesssge.DEBUGGER_MESSAGE, {
        type: DebuggerMesssge.DEBUGGER_MESSAGE_EVENT,
        info: "bridge埋点上报",
        time: Date.now(),
        data: [
          {
            events: [
              {
                event: e,
                params: t,
              },
            ],
          },
        ],
        code: 200,
        status: "success",
      });
    } catch (e) {
      console.error("onEventV3 error");
    }
  }
  profileSet(e) {
    try {
      AppLogBridge.profileSet(e);
    } catch (e) {
      console.error("profileSet error");
    }
  }
  profileSetOnce(e) {
    try {
      AppLogBridge.profileSetOnce(e);
    } catch (e) {
      console.error("profileSetOnce error");
    }
  }
  profileIncrement(e) {
    try {
      AppLogBridge.profileIncrement(e);
    } catch (e) {
      console.error("profileIncrement error");
    }
  }
  profileUnset(e) {
    try {
      AppLogBridge.profileUnset(e);
    } catch (e) {
      console.error("profileUnset error");
    }
  }
  profileAppend(e) {
    try {
      AppLogBridge.profileAppend(e);
    } catch (e) {
      console.error("profileAppend error");
    }
  }
}
class eu {
  constructor() {
    this.eventLimit = 50;
    this.enable_ttwebid = false;
    this.eventCache = [];
    this.beconEventCache = [];
  }
  apply(e, t) {
    const n = this;
    this.collect = e;
    this.config = t;
    this.configManager = e.configManager;
    this.cacheStorgae = new X(true);
    this.localStorage = new X(false);
    this.maxReport = t.max_report || 10;
    this.reportTime = t.reportTime || 30;
    this.timeout = t.timeout || 100000;
    this.enable_ttwebid = t.enable_ttwebid;
    this.reportUrl = t.report_url || this.configManager.getUrl("event");
    this.eventKey = "__tea_cache_events_" + this.configManager.get("app_id");
    this.beconKey =
      "__tea_cache_events_becon_" + this.configManager.get("app_id");
    this.abKey = "__tea_sdk_ab_version_" + this.configManager.get("app_id");
    this.refer_key = "__tea_cache_refer_" + this.configManager.get("app_id");
    this.collect.on(et.Ready, function () {
      n.reportAll(false);
    });
    this.collect.on(et.ConfigDomain, function () {
      n.reportUrl = n.configManager.getUrl("event");
    });
    this.collect.on(et.Event, function (e) {
      n.event(e);
    });
    this.collect.on(et.BeconEvent, function (e) {
      n.beconEvent(e);
    });
    this.collect.on(et.CleanEvents, function () {
      n.reportAll(false);
    });
    this.linster();
  }
  linster() {
    let e;
    const t = this;
    window.addEventListener(
      "unload",
      function () {
        t.reportAll(true);
      },
      false,
    );
    e = function () {
      t.reportAll(true);
    };
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      window.addEventListener("pagehide", e, false);
    } else {
      window.addEventListener("beforeunload", e, false);
    }
    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.visibilityState === "hidden") {
          t.reportAll(true);
        }
      },
      false,
    );
  }
  reportAll(e) {
    this.report(e);
    this.reportBecon();
  }
  event(e) {
    const t = this;
    try {
      const n = z(e, this.cacheStorgae.getItem(this.eventKey) || []);
      this.cacheStorgae.setItem(this.eventKey, n);
      if (this.reportTimeout) {
        clearTimeout(this.reportTimeout);
      }
      if (n.length >= this.maxReport) {
        this.report(false);
      } else {
        const i = this.reportTime;
        this.reportTimeout = setTimeout(() => {
          t.report(false);
          t.reportTimeout = null;
        }, i);
      }
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
    }
  }
  beconEvent(e) {
    const t = z(e, this.cacheStorgae.getItem(this.beconKey) || []);
    this.cacheStorgae.setItem(this.beconKey, t);
    if (!(this.collect.destroy || this.collect.sdkStop)) {
      if (this.collect.tokenManager.getReady() && this.collect.sdkReady) {
        this.cacheStorgae.removeItem(this.beconKey);
        this.send(this.split(this.merge(t)), true);
      }
    }
  }
  reportBecon() {
    if (
      !this.collect.destroy &&
      !this.collect.sdkStop &&
      this.collect.tokenManager.getReady() &&
      this.collect.sdkReady
    ) {
      const e = this.cacheStorgae.getItem(this.beconKey) || [];
      if (e && e.length) {
        this.cacheStorgae.removeItem(this.beconKey);
        this.send(this.split(this.merge(e)), true);
      }
    }
  }
  report(e) {
    if (
      !this.collect.destroy &&
      !this.collect.sdkStop &&
      this.collect.tokenManager.getReady() &&
      this.collect.sdkReady
    ) {
      const t = this.cacheStorgae.getItem(this.eventKey) || [];
      if (t.length) {
        this.cacheStorgae.removeItem(this.eventKey);
        this.sliceEvent(t, e);
      }
    }
  }
  sliceEvent(e, t) {
    if (e.length > this.eventLimit) {
      for (let n = 0; n < e.length; n += this.eventLimit) {
        const i = e.slice(n, n + this.eventLimit);
        var o = this.split(this.merge(i));
        this.send(o, t);
      }
    } else {
      o = this.split(this.merge(e));
      this.send(o, t);
    }
  }
  handleRefer() {
    let e = "";
    try {
      if (this.config.spa || this.config.autotrack) {
        const t = this.localStorage.getItem(this.refer_key) || {};
        e = t.routeChange ? t.refer_key : this.configManager.get("referrer");
      } else {
        e = this.configManager.get("referrer");
      }
    } catch (t) {
      e = document.referrer;
    }
    return e;
  }
  merge(e, t) {
    const n = this;
    const i = this.configManager.get();
    const i_header = i.header;
    const i_user = i.user;
    i_header.custom = JSON.stringify(i_header.custom);
    i_header.referrer = this.handleRefer();
    const s = this.configManager.get("evtParams");
    const a = this.configManager.get("user_unique_id_type");
    const c = JSON.parse(
      JSON.stringify({
        events: e.map((e) => {
          try {
            if (Object.keys(s).length && !t) {
              e.params = {
                ...s,
                ...e.params,
              };
            }
            if (a) {
              e.params.$user_unique_id_type = a;
            }
            const i = n.configManager.getAbCache();
            const o = i_user[n.config.ab_user_mode] || i_user.user_unique_id;
            const c = n.configManager.getAbUuidCache(o);
            if (i && i.uuid && i.uuid === o) {
              const l = n.configManager.getAbVersion();
              if (n.config.enable_ab_uuid) {
                if (c && c.length) {
                  const u = c.join(",");
                  if (l && l.includes(u)) {
                    e.ab_sdk_version = l;
                  }
                }
              } else {
                if (l) {
                  e.ab_sdk_version = l;
                }
              }
            }
            e.session_id = n.collect.sessionManager.getSessionId();
            e.params = JSON.stringify(e.params);
            return e;
          } catch (error) {
            n.collect.emit(M.DEBUGGER_MESSAGE, {
              type: M.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: error.message,
            });
            return e;
          }
        }),
        user: i_user,
        header: i_header,
      }),
    );
    c.local_time = Math.floor(Date.now() / 1000);
    c.user_unique_type = this.config.enable_ttwebid
      ? this.config.user_unique_type
      : undefined;
    c.verbose = 1;
    const l = [];
    l.push(c);
    return l;
  }
  split(e) {
    return e.map((e) => {
      const t = [];
      t.push(e);
      return t;
    });
  }
  send(e, t) {
    const n = this;
    if (e.length) {
      if (!this.config.disable_track_event) {
        e.forEach((e) => {
          try {
            let i = JSON.parse(JSON.stringify(e));
            if (n.config.filter) {
              if (!(i = n.config.filter(i))) {
                console.warn("filter must return data !!");
              }
            }
            if (n.collect.eventFilter && i) {
              if (!(i = n.collect.eventFilter(i))) {
                console.warn("filterEvent api must return data !!");
              }
            }
            const o = i || e;
            const r = JSON.parse(JSON.stringify(o));
            if (!o.length) {
              return;
            }
            let s = true;
            o.forEach((e) => {
              if (!e.events.length) {
                s = false;
              }
            });
            if (!s) {
              return;
            }
            n.collect.emit(et.SubmitBefore, o);
            n.collect.emit(et.SubmitVerify, o);
            n.collect.requestManager.useRequest({
              url: n.reportUrl,
              data: o,
              success: function (e, eventData) {
                if (e && e.e !== 0) {
                  n.collect.emit(et.SubmitError, {
                    type: "f_data",
                    eventData,
                    errorCode: e.e,
                    response: e,
                  });
                  n.collect.emit(M.DEBUGGER_MESSAGE, {
                    type: M.DEBUGGER_MESSAGE_EVENT,
                    info: "埋点上报失败",
                    time: Date.now(),
                    data: r,
                    code: e.e,
                    failType: "数据异常失败",
                    status: "fail",
                  });
                } else {
                  n.collect.emit(et.SubmitScuess, {
                    eventData,
                    res: e,
                  });
                  n.collect.emit(M.DEBUGGER_MESSAGE, {
                    type: M.DEBUGGER_MESSAGE_EVENT,
                    info: "埋点上报成功",
                    time: Date.now(),
                    data: r,
                    code: 200,
                    status: "success",
                  });
                }
              },
              fail: function (e, t) {
                n.configManager.get("reportErrorCallback")(e, t);
                n.collect.emit(et.SubmitError, {
                  type: "f_net",
                  eventData: e,
                  errorCode: t,
                });
                n.collect.emit(M.DEBUGGER_MESSAGE, {
                  type: M.DEBUGGER_MESSAGE_EVENT,
                  info: "埋点上报网络异常",
                  time: Date.now(),
                  data: r,
                  code: t,
                  failType: "网络异常失败",
                  status: "fail",
                });
              },
              timeout: n.timeout,
              useBeacon: !n.config.disable_sendbeacon && t,
              withCredentials: n.enable_ttwebid,
            });
            n.collect.emit(et.SubmitAfter, o);
          } catch (error) {
            console.warn("something error, " + JSON.stringify(error.stack));
            n.collect.emit(M.DEBUGGER_MESSAGE, {
              type: M.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: error.message,
            });
          }
        });
      }
    }
  }
}
const ep = () =>
  (function e(t) {
    if (t) {
      return (t ^ ((16 * Math.random()) >> (t / 4))).toString(10);
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e);
  })()
    .replace(/-/g, "")
    .slice(0, 19);
class eh {
  constructor() {
    this.cacheToken = {};
    this.enableCookie = false;
    this.enable_ttwebid = false;
    this.enableCustomWebid = false;
  }
  apply(e, t) {
    const n = this;
    this.collect = e;
    this.config = t;
    this.configManager = this.collect.configManager;
    this.storage = new X(false);
    this.tokenKey = "__tea_cache_tokens_" + t.app_id;
    this.enable_ttwebid = t.enable_ttwebid;
    this.enableCustomWebid = t.enable_custom_webid;
    this.collect.on(et.ConfigUuid, function (e) {
      n.setUuid(e);
    });
    this.collect.on(et.ConfigWebId, function (e) {
      n.setWebId(e);
    });
    this.enableCookie = t.cross_subdomain;
    this.expiresTime = t.cookie_expire || 604800000;
    this.cookieDomain = t.cookie_domain || "";
    this.checkStorage();
  }
  checkStorage() {
    const e = this;
    this.cacheToken = this.storage.getItem(this.tokenKey) || {};
    this.tokenType =
      this.cacheToken && this.cacheToken._type_
        ? this.cacheToken._type_
        : "default";
    if (this.tokenType !== "custom" || this.enableCustomWebid) {
      if (this.enableCustomWebid) {
        this.collect.on(et.CustomWebId, function () {
          e.tokenReady = true;
          e.collect.emit(et.TokenComplete);
        });
      } else {
        if (!this.checkEnv()) {
          if (this.enable_ttwebid) {
            this.completeTtWid(this.cacheToken);
          } else {
            this.check();
          }
        }
      }
    } else {
      this.remoteWebid();
    }
  }
  check() {
    if (this.cacheToken && this.cacheToken.web_id) {
      this.complete(this.cacheToken);
    } else if (this.config.disable_webid) {
      this.complete({
        web_id: ep(),
        user_unique_id: this.configManager.get("user_unique_id") || ep(),
      });
    } else {
      this.remoteWebid();
    }
  }
  checkEnv() {
    const userAgent = window.navigator.userAgent;
    if (
      userAgent.indexOf("miniProgram") !== -1 ||
      userAgent.indexOf("MiniProgram") !== -1
    ) {
      const t = K(window.location.href);
      return (
        !(!t || !t.Web_ID) &&
        (this.complete({
          web_id: "" + t.Web_ID,
          user_unique_id:
            this.configManager.get("user_unique_id") || "" + t.Web_ID,
        }),
        true)
      );
    }
    return false;
  }
  remoteWebid() {
    const e = this;
    const t = this.configManager.getUrl("webid");
    const n = {
      app_key: this.config.app_key,
      app_id: this.config.app_id,
      url: location.href,
      user_agent: window.navigator.userAgent,
      referer: document.referrer,
      user_unique_id: "",
    };
    this.collect.emit(M.DEBUGGER_MESSAGE, {
      type: M.DEBUGGER_MESSAGE_SDK,
      info: "SDK 发起WEBID请求",
      logType: "fetch",
      level: "info",
      time: Date.now(),
      data: n,
    });
    const localWebId = ep();
    this.collect.requestManager.useRequest({
      url: t,
      data: n,
      success: function (t) {
        let n;
        if (t && t.e === 0) {
          n = t.web_id;
          e.collect.emit(M.DEBUGGER_MESSAGE, {
            type: M.DEBUGGER_MESSAGE_SDK,
            info: "WEBID请求成功",
            logType: "fetch",
            level: "info",
            time: Date.now(),
            data: t,
          });
        } else {
          n = localWebId;
          e.collect.configManager.set({
            localWebId,
          });
          e.collect.emit(et.TokenError);
          e.collect.emit(M.DEBUGGER_MESSAGE, {
            type: M.DEBUGGER_MESSAGE_SDK,
            info: "WEBID请求返回值异常",
            logType: "fetch",
            level: "warn",
            time: Date.now(),
            data: t,
          });
          e.collect.logger.warn(
            "appid: " + e.config.app_id + " get webid error, use local webid~",
          );
        }
        e.complete({
          web_id: e.configManager.get("web_id") || n,
          user_unique_id: e.configManager.get("user_unique_id") || n,
        });
      },
      fail: function () {
        e.complete({
          web_id: e.configManager.get("web_id") || localWebId,
          user_unique_id: e.configManager.get("user_unique_id") || localWebId,
        });
        e.collect.configManager.set({
          localWebId,
        });
        e.collect.emit(et.TokenError);
        e.collect.emit(M.DEBUGGER_MESSAGE, {
          type: M.DEBUGGER_MESSAGE_SDK,
          info: "WEBID请求网络异常",
          logType: "fetch",
          level: "error",
          time: Date.now(),
          data: null,
        });
        e.collect.logger.warn(
          "appid: " + e.config.app_id + ", get webid error, use local webid~",
        );
      },
      timeout: 300000,
    });
  }
  complete(e) {
    const e_web_id = e.web_id;
    const e_user_unique_id = e.user_unique_id;
    e.timestamp = Date.now();
    this.collect.configManager.set({
      web_id: e_web_id,
      user_unique_id: e_user_unique_id,
    });
    this.setStorage(e);
    this.tokenReady = true;
    this.collect.emit(et.TokenComplete);
  }
  completeTtWid(e) {
    const t = e.user_unique_id || "";
    const n = this.configManager.get("user_unique_id");
    if (n || t) {
      this.configManager.set({
        user_unique_id: n || t,
      });
    }
    this.setStorage(e);
    this.tokenReady = true;
    this.collect.emit(et.TokenComplete);
  }
  setUuid(e) {
    if (e && ["null", "undefined", "Null", "None"].indexOf(e) === -1) {
      const t = String(e);
      const n = this.configManager.get("user_unique_id");
      const i = this.cacheToken && this.cacheToken.user_unique_id;
      if (t !== n || t !== i) {
        this.configManager.set({
          user_unique_id: t,
        });
        if (!this.cacheToken) {
          this.cacheToken = {};
        }
        this.cacheToken.user_unique_id = t;
        this.cacheToken.timestamp = Date.now();
        this.setStorage(this.cacheToken);
        this.collect.emit(et.TokenChange, "uuid");
        this.collect.emit(et.SessionReset);
      }
    } else {
      this.clearUuid();
    }
  }
  clearUuid() {
    if (!this.config.enable_ttwebid) {
      if (this.configManager.get("web_id")) {
        this.configManager.set({
          user_unique_id: this.configManager.get("web_id"),
        });
        if (this.cacheToken && this.cacheToken.web_id) {
          this.cacheToken.user_unique_id = this.cacheToken.web_id;
          this.cacheToken.timestamp = Date.now();
          this.setStorage(this.cacheToken);
        }
        this.collect.emit(et.TokenReset);
      }
    }
  }
  setWebId(e) {
    if (e && !this.config.enable_ttwebid) {
      if (this.cacheToken && this.cacheToken.web_id) {
        if (this.cacheToken.web_id !== e) {
          this.cacheToken.user_unique_id =
            this.cacheToken.web_id === this.cacheToken.user_unique_id
              ? e
              : this.cacheToken.user_unique_id;
          this.cacheToken.web_id = e;
        }
      } else {
        this.cacheToken = {};
        this.cacheToken.web_id = e;
        this.cacheToken.user_unique_id = e;
      }
      this.cacheToken.timestamp = Date.now();
      const t = this.configManager.get("web_id");
      const n = this.configManager.get("user_unique_id");
      if (!(n && n !== t)) {
        this.configManager.set({
          user_unique_id: e,
        });
        this.collect.emit(et.TokenChange, "uuid");
      }
      if (t !== e) {
        this.configManager.set({
          web_id: e,
        });
        this.collect.emit(et.TokenChange, "webid");
      }
      this.setStorage(this.cacheToken);
    }
  }
  setStorage(e) {
    e._type_ = this.enableCustomWebid ? "custom" : "default";
    delete e["diss".split("").reverse().join("")];
    this.storage.setItem(this.tokenKey, e);
    this.cacheToken = e;
  }
  getReady() {
    return this.tokenReady;
  }
  getTobId() {
    const e = this;
    return new Promise((resolve) => {
      if (e.config.channel_type !== "tcpy" && e.config.channel_type !== "ttp") {
        e.collect.requestManager.useRequest({
          url: e.configManager.getUrl("tobid"),
          data: {
            app_id: e.config.app_id,
            user_unique_id: e.configManager.get("user_unique_id"),
            web_id: e.configManager.get("web_id"),
            user_unique_id_type: e.configManager.get("user_unique_id_type"),
          },
          success: function (e) {
            if (e && e.e === 0) {
              resolve(e.tobid);
            } else {
              resolve("");
            }
          },
          fail: function () {
            resolve("");
          },
          time: 30000,
          withCredentials: e.enable_ttwebid,
        });
      } else {
        resolve("");
      }
    });
  }
}
const ef = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = (16 * Math.random()) | 0;
    return (e === "x" ? t : (3 & t) | 8).toString(16);
  });
class eg {
  apply(e, t) {
    const n = this;
    this.collect = e;
    this.storage = new X(false, "session");
    this.sessionKey = "__tea_session_id_" + t.app_id;
    this.expireTime = t.expireTime || 1800000;
    this.disableSession = t.disable_session;
    this.disableSessionTimeCheck = t.disable_session_check;
    if (!this.disableSession) {
      this.setSessionId();
      this.collect.on(et.SessionReset, function (e) {
        n.resetSessionId(e);
      });
      this.collect.on(et.SessionResetTime, function () {
        n.updateSessionIdTime();
      });
    }
  }
  updateSessionIdTime() {
    let e = this.storage.getItem(this.sessionKey);
    if (e && e.sessionId) {
      const t = e.timestamp;
      if (Date.now() - t > this.expireTime) {
        e = {
          sessionId: ef(),
          timestamp: Date.now(),
        };
      } else {
        e.timestamp = Date.now();
      }
      this.storage.setItem(this.sessionKey, e);
      this.resetExpTime();
    }
  }
  setSessionId() {
    const e = this;
    let t = this.storage.getItem(this.sessionKey);
    if (t && t.sessionId) {
      t.timestamp = Date.now();
    } else {
      t = {
        sessionId: ef(),
        timestamp: Date.now(),
      };
    }
    this.storage.setItem(this.sessionKey, t);
    if (!this.disableSessionTimeCheck) {
      this.sessionExp = setInterval(() => {
        e.checkEXp();
      }, this.expireTime);
    }
  }
  getSessionId() {
    const e = this.storage.getItem(this.sessionKey);
    if (this.disableSession) {
      return "";
    }
    if (e && e.sessionId) {
      return e.sessionId;
    }
    return "";
  }
  resetExpTime() {
    const e = this;
    if (this.sessionExp) {
      clearInterval(this.sessionExp);
      this.sessionExp = setInterval(() => {
        e.checkEXp();
      }, this.expireTime);
    }
  }
  resetSessionId(e) {
    const t = {
      sessionId: e || ef(),
      timestamp: Date.now(),
    };
    this.storage.setItem(this.sessionKey, t);
  }
  checkEXp() {
    let e = this.storage.getItem(this.sessionKey);
    if (e && e.sessionId && Date.now() - e.timestamp + 30 >= this.expireTime) {
      e = {
        sessionId: ef(),
        timestamp: Date.now(),
      };
      this.storage.setItem(this.sessionKey, e);
    }
  }
}
class ed {
  constructor(e, t) {
    this.collector = e;
    this.config = t;
    this.requestType = t.request_type || "xhr";
    this.supportBeacon = !(!window.navigator || !window.navigator.sendBeacon);
    this.errorCode = {
      NO_URL: 4001,
      IMG_ON: 4000,
      IMG_CATCH: 4002,
      BEACON_FALSE: 4003,
      XHR_ON: 500,
      RESPONSE: 5001,
      TIMEOUT: 5005,
    };
    this.customHeader = t.custom_request_header || {};
  }
  useFetch(e) {
    const e_url = e.url;
    const e_data = e.data;
    const e_method = e.method;
    const e_success = e.success;
    const e_fail = e.fail;
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };
    if (Object.keys(this.customHeader).length) {
      for (const a in this.customHeader) {
        headers[a] = this.customHeader[a];
      }
    }
    if (window.fetch) {
      fetch(e_url, {
        method: e_method || "POST",
        headers,
        body: JSON.stringify(e_data),
      })
        .then((e) => e.json())
        .then((e) => {
          if (e_success) {
            e_success(e);
          }
        })
        .catch((e) => {
          if (e_fail) {
            e_fail(e_data, e);
          }
        });
    } else {
      this.requestType = "xhr";
      console.log("your brwoser not support fetch, use xhr");
      this.useRequest({
        url: e_url,
        data: e_data,
        method: e_method,
        success: e_success,
        fail: e_fail,
      });
    }
  }
  useBeacon(e) {
    const e_url = e.url;
    const e_data = e.data;
    const e_success = e.success;
    const e_fail = e.fail;
    if (window.navigator.sendBeacon(e_url, JSON.stringify(e_data))) {
      if (e_success) {
        e_success();
      }
    } else if (e_fail) {
      e_fail(e_data, this.errorCode.BEACON_FALSE);
    }
  }
  useRequest(e) {
    const t = this;
    const e_url = e.url;
    const e_data = e.data;
    const e_method = e.method;
    const e_success = e.success;
    const e_fail = e.fail;
    const e_timeout = e.timeout;
    const e_useBeacon = e.useBeacon;
    const e_withCredentials = e.withCredentials;
    const e_app_key = e.app_key;
    const e_forceXhr = e.forceXhr;
    if (e_useBeacon && this.supportBeacon) {
      this.useBeacon({
        url: e_url,
        data: e_data,
        method: e_method,
        success: e_success,
        fail: e_fail,
      });
    } else if (this.requestType !== "fetch" || e_forceXhr) {
      try {
        const h = new XMLHttpRequest();
        const f = e_method || "POST";
        h.open(f, "" + e_url, true);
        h.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        if (e_app_key) {
          h.setRequestHeader("X-MCS-AppKey", "" + e_app_key);
        }
        if (Object.keys(this.customHeader).length) {
          for (const g in this.customHeader) {
            h.setRequestHeader(g, this.customHeader[g]);
          }
        }
        if (e_withCredentials) {
          h.withCredentials = true;
        }
        if (e_timeout) {
          h.timeout = e_timeout;
          h.ontimeout = function () {
            if (e_fail) {
              e_fail(e_data, t.errorCode.TIMEOUT);
            }
          };
        }
        h.onload = function () {
          if (e_success) {
            let e = null;
            if (h.responseText) {
              try {
                e = JSON.parse(h.responseText);
              } catch (t) {
                e = {};
              }
              e_success(e, e_data);
            }
          }
        };
        h.onerror = function () {
          h.abort();
          if (e_fail) {
            e_fail(e_data, t.errorCode.XHR_ON);
          }
        };
        h.send(JSON.stringify(e_data));
      } catch (e) {}
    } else {
      this.useFetch({
        url: e_url,
        data: e_data,
        method: e_method,
        success: e_success,
        fail: e_fail,
      });
    }
  }
}
class em {
  constructor(e, t) {
    this.devToolReady = false;
    this.devToolOrigin = "*";
    this.sendAlready = false;
    if (t.enable_debug) {
      this.collect = e;
      this.config = t;
      this.app_id = t.app_id;
      var n = e.adapters.storage;
      this.cacheStorgae = new n(false, "session");
      this.filterEvent = [
        "__bav_page",
        "__bav_beat",
        "__bav_page_statistics",
        "__bav_click",
        "__bav_page_exposure",
        "bav2b_page",
        "bav2b_beat",
        "bav2b_page_statistics",
        "bav2b_click",
        "bav2b_page_exposure",
        "_be_active",
        "predefine_pageview",
        "__profile_set",
        "__profile_set_once",
        "__profile_increment",
        "__profile_unset",
        "__profile_append",
        "predefine_page_alive",
        "predefine_page_close",
        "abtest_exposure",
      ];
      this.load();
    }
  }
  loadScript(e) {
    try {
      const t = document.createElement("script");
      t.src = e;
      t.onerror = function () {
        console.log("load DevTool render fail");
      };
      t.onload = function () {
        console.log("load DevTool render success");
      };
      document.getElementsByTagName("body")[0].appendChild(t);
    } catch (error) {
      console.log("devTool load fail, " + error.message);
    }
  }
  parseUrl() {
    const e = {};
    try {
      const t = window.location.href.split("?")[1].split("&");
      if (t.length) {
        t.forEach((t) => {
          const n = t.split("=");
          e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
        });
      }
    } catch (e) {}
    return e;
  }
  load() {
    try {
      const e = this.parseUrl();
      if (e.open_devtool_web && e.app_id) {
        if (parseInt(e.app_id) !== this.app_id) {
          return;
        }
      } else if (!this.getStorage()) {
        return;
      }
      this.loadBaseInfo();
      this.loadHook();
      this.setStorage();
      this.addLintener();
      this.loadDebuggerModule();
      this.loadDevTool();
    } catch (error) {
      console.log("debug fail, " + error.message);
    }
  }
  getStorage() {
    const e = this.cacheStorgae.getItem("__applog_devtool_web");
    return e && parseInt(e) === this.app_id;
  }
  setStorage() {
    this.cacheStorgae.setItem("__applog_devtool_web", this.app_id);
  }
  loadDevTool() {
    this.loadScript(
      "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/devtool/debug-web.js",
    );
  }
  loadBaseInfo() {
    const e = this;
    this.info = [
      {
        title: "基本信息",
        type: 1,
        infoName: {
          app_id: this.config.app_id,
          channel: this.config.channel,
          上报域名: this.collect.configManager.getDomain(),
          SDK版本: "5.2.3_oversea",
          SDK引入方式: "npm",
        },
      },
      {
        title: "用户信息",
        type: 2,
        infoName: {
          uuid: this.collect.configManager.get("user").user_unique_id || "",
          web_id: this.collect.configManager.get("user").web_id || "",
          ssid: "点击获取SSID",
        },
      },
      {
        title: "公共参数信息",
        type: 2,
        infoName: {
          浏览器: this.collect.configManager.get("browser"),
          浏览器版本: this.collect.configManager.get("browser_version"),
          平台: this.collect.configManager.get("platform"),
          设备型号: this.collect.configManager.get("device_model"),
          操作系统: this.collect.configManager.get("os_name"),
          操作系统版本: this.collect.configManager.get("os_version"),
          屏幕分辨率: this.collect.configManager.get("os_version"),
          来源: this.collect.configManager.get("referrer"),
          自定义信息: "",
        },
      },
      {
        title: "配置信息",
        type: 3,
        infoName: {
          全埋点: !!this.config.autotrack,
          停留时长: !!this.config.enable_stay_duration,
        },
      },
      {
        title: "A/B配置信息",
        type: 4,
        infoName: {
          "A/B实验": !!this.config.enable_ab_test,
        },
      },
      {
        title: "客户端信息",
        type: 3,
        infoName: {
          打通开关: !!this.config.Native,
        },
      },
    ];
    this.log = [];
    this.event = [];
    this.collect.on(et.Ready, function () {
      e.info[1].infoName.uuid =
        e.collect.configManager.get("user").user_unique_id;
      e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id;
      e.info[2].infoName.自定义信息 = JSON.stringify(
        e.collect.configManager.get("custom"),
      );
      if (e.config.enable_ab_test) {
        e.info[4].infoName.已曝光VID = e.collect.configManager.getAbVersion();
        e.info[4].infoName["A/B域名"] =
          e.config.ab_channel_domain || j(Z[e.config.channel]);
        e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
      }
      if (e.config.Native) {
        e.info[5].infoName.是否打通 = !!e.collect.bridgeReport;
      }
    });
  }
  loadHook() {
    const e = this;
    this.collect.on(M.DEBUGGER_MESSAGE, function (t) {
      switch (t.type) {
        case M.DEBUGGER_MESSAGE_SDK:
          const n = {
            time: t.time,
            type: t.logType || "sdk",
            level: t.level,
            name: t.info,
            show: true,
            levelShow: true,
            needDesc: !!t.data,
          };
          if (t.data) {
            n.desc = {
              content: JSON.stringify(t.data),
            };
          }
          e.updateLog(n);
          if (t.secType && t.secType === "AB") {
            e.info[4].infoName.已曝光VID =
              e.collect.configManager.getAbVersion();
            e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
          } else if (t.secType === "USER") {
            e.info[1].infoName.uuid =
              e.collect.configManager.get("user").user_unique_id;
            e.info[1].infoName.web_id =
              e.collect.configManager.get("user").web_id;
          }
          return void e.updateInfo();
        case M.DEBUGGER_MESSAGE_EVENT:
          if (t.data && t.data.length) {
            const i = t.data[0];
            const o = i.events;
            if (!o.length) {
              return;
            }
            o.forEach((n) => {
              n.checkShow = true;
              n.searchShow = true;
              n.success = t.status;
              n.type = e.filterEvent.indexOf(n.event) !== -1 ? "sdk" : "cus";
              n.type = e.collect.bridgeReport ? "bridge" : n.type;
              n.info = "";
              if (t.status === "fail") {
                n.info = {
                  message: "code: " + t.code + "， msg: " + t.failType,
                };
              }
            });
            e.updateEvent(i);
          }
          return;
      }
    });
  }
  addLintener() {
    const e = this;
    window.addEventListener("message", function (t) {
      if (t.origin === location.origin) {
        if (t && t.data && t.data.type === "devtool:web:ready") {
          e.devToolOrigin = t.origin;
          e.devToolReady = true;
          if (e.sendAlready) {
            return;
          }
          console.log("inittttt");
          e.sendData("devtool:web:init", {
            info: e.info,
            log: e.log,
            event: e.event,
          });
          e.sendAlready = true;
        }
        if (t && t.data && t.data.type === "devtool:web:ssid") {
          e.collect.getToken(function (t) {
            e.info[1].infoName.ssid = t.tobid;
            e.updateInfo();
          });
        }
      }
    });
  }
  sendData(type, payload) {
    try {
      (window.opener || window.parent).postMessage(
        {
          type,
          payload,
        },
        this.devToolOrigin,
      );
    } catch (e) {}
  }
  updateInfo() {
    if (this.devToolReady) {
      this.sendData("devtool:web:info", this.info);
    }
  }
  updateLog(e) {
    if (this.devToolReady) {
      this.sendData("devtool:web:log", e);
    } else {
      this.log.push(e);
    }
  }
  updateEvent(e) {
    if (this.devToolReady) {
      this.sendData("devtool:web:event", e);
    } else {
      this.event.push(e);
    }
  }
  loadDebuggerModule() {
    const e = document.head || document.getElementsByTagName("head")[0];
    const t = document.createElement("style");
    t.appendChild(
      document.createTextNode(
        "#debugger-applog-web {\n      position: absolute;\n      width: 90px;\n      height: 30px;\n      background: #23c243;\n      border-radius: 6px;\n      color: #fff;\n      font-size: 12px;\n      bottom: 5%;\n      right: 10%;\n      text-align: center;\n      line-height: 30px;\n      cursor: pointer;\n      z-index:100;\n    }",
      ),
    );
    e.appendChild(t);
    const n = document.createElement("div");
    n.innerHTML =
      '<div id="debugger-applog-web" class="debugger-applog-web">AppLog调试</div>';
    const i = document.createElement("div");
    i.innerHTML =
      '<div id="debugger-container" class="debugger-container"></div>';
    document.getElementsByTagName("body")[0].appendChild(n);
    document.getElementsByTagName("body")[0].appendChild(i);
    document
      .getElementById("debugger-applog-web")
      .addEventListener("click", function () {
        (window.opener || window.parent).postMessage(
          {
            type: "devtool:web:open-draw",
          },
          location.origin,
        );
      });
  }
}
const ey = {
  autotrack: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/autotrack.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/autotrack.js",
    },
    object: "LogAutoTrack",
  },
  ab: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/ab.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/ab.js",
    },
    object: "LogAb",
  },
  stay: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/stay.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/stay.js",
    },
    object: "LogStay",
  },
  route: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/route.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/route.js",
    },
    object: "LogRoute",
  },
  tracer: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/tracer.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/tracer.js",
    },
    object: "LogTracer",
  },
  retry: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/retry.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/retry.js",
    },
    object: "LogRetry",
  },
  visual: {
    src: {
      sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/visual.js",
      va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/visual.js",
    },
    object: "LogVisual",
  },
};
const ev = ["et", "profile", "heartbeat", "monitor"];
const e_ = (function () {
  class e {
    constructor(e) {
      this.disableAutoPageView = false;
      this.bridgeReport = false;
      this.staging = false;
      this.pluginInstances = [];
      this.sended = false;
      this.started = false;
      this.destroy = false;
      this.sdkReady = false;
      this.adapters = {};
      this.loadType = "base";
      this.sdkStop = false;
      this.name = e;
      this.hook = new G();
      this.remotePlugin = new Map();
      this.Types = et;
      this.adapters.storage = X;
    }
    static usePlugin(plugin, n, options) {
      if (n) {
        let o = false;
        for (let r = 0, s = e.plugins.length; r < s; r++) {
          if (e.plugins[r].name === n) {
            e.plugins[r].plugin = plugin;
            e.plugins[r].options = options || {};
            o = true;
            break;
          }
        }
        if (!o) {
          e.plugins.push({
            name: n,
            plugin,
            options,
          });
        }
      } else {
        e.plugins.push({
          plugin,
        });
      }
    }
    usePlugin(e, t, call) {
      if (e) {
        if (this.loadType === "full" && ev.includes(e)) {
          console.info("your sdk version has " + e + " already ~");
        } else if (t) {
          if (typeof t === "string") {
            if (!this.remotePlugin.get(e)) {
              this.remotePlugin.set(e, {
                src: t,
                call,
              });
            }
          } else if (!this.remotePlugin.get(e)) {
            this.remotePlugin.set(e, {
              instance: t,
            });
          }
        } else if (!this.remotePlugin.get(e)) {
          this.remotePlugin.set(e, "sdk");
        }
      }
    }
    init(t) {
      let n;
      let i;
      const o = this;
      try {
        n = JSON.parse(JSON.stringify(t));
      } catch (e) {
        n = t;
      }
      this.logger = new ea(this.name, n.log);
      if (this.inited) {
        this.logger.warn(
          "[instance: " +
            this.name +
            "], every instance's api: init,  can be call only one time!",
        );
      } else if (n && P(n)) {
        if (n.app_id && typeof (i = n.app_id) === "number" && !isNaN(i)) {
          if (n.app_key && typeof n.app_key !== "string") {
            this.logger.warn(
              "app_key param is error, must be string, please check!",
            );
          } else {
            const r = ["sg", "va", "in", "ie", "ie2"];
            if (!(n.channel_domain || r.indexOf(n.channel) !== -1)) {
              this.logger.warn(
                "your channel: " +
                  n.channel +
                  " is not exist. channel must be one of " +
                  r.join(",") +
                  ", use sg instead, please check!!!",
              );
              n.channel = "sg";
            }
            this.spider = new ec();
            if (this.spider.checkSpider(n)) {
              this.logger.warn(
                "The current environment may be a spider, can not report!",
              );
            } else {
              this.appBridge = new el(this, n.enable_native);
              this.requestManager = new ed(this, n);
              this.bridgeReport = this.appBridge.bridgeInject();
              this.configManager = new es(this, n);
              this.debugger = new em(this, n);
              this.initConfig = n;
              this.emit(et.Init);
              this.emit(M.DEBUGGER_MESSAGE, {
                type: M.DEBUGGER_MESSAGE_SDK,
                info: "SDK 执行INIT",
                data: n,
                level: "info",
                time: Date.now(),
              });
              if (n.disable_auto_pv) {
                this.disableAutoPageView = true;
              }
              if (!this.bridgeReport) {
                this.configManager.setAppid(n.app_id);
                this.eventManager = new eu();
                this.tokenManager = new eh();
                this.sessionManager = new eg();
                Promise.all([
                  new Promise((resolve) => {
                    o.once(et.TokenComplete, function () {
                      resolve(true);
                    });
                  }),
                  new Promise((resolve) => {
                    o.once(et.Start, function () {
                      resolve(true);
                    });
                  }),
                ]).then(() => {
                  try {
                    e.plugins.reduce((acc, plugin) => {
                      const t_plugin = plugin.plugin;
                      const t_options = plugin.options;
                      const r = Object.assign(o.initConfig, t_options);
                      const s = new t_plugin();
                      s.apply(o, r);
                      acc.push(s);
                      return acc;
                    }, o.pluginInstances);
                  } catch (error) {
                    console.warn("load plugin error, " + error.message);
                    o.emit(M.DEBUGGER_MESSAGE, {
                      type: M.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: error.message,
                    });
                  }
                  o.sdkReady = true;
                  o.emit(et.Ready);
                  o.emit(M.DEBUGGER_MESSAGE, {
                    type: M.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 初始化完成",
                    time: Date.now(),
                    level: "info",
                    data: o.configManager.get("user"),
                  });
                  o.logger.info(
                    "appid: " +
                      n.app_id +
                      ", userInfo:" +
                      JSON.stringify(o.configManager.get("user")),
                  );
                  o.logger.info(
                    "appid: " +
                      n.app_id +
                      ", sdk is ready, version is 5.2.3_oversea, you can report now !!!",
                  );
                  if (n.disable_auto_pv) {
                    o.disableAutoPageView = true;
                  }
                  try {
                    if (
                      (o.loadType === "full" && n.enable_ab_test) ||
                      n.autotrack
                    ) {
                      (window.opener || window.parent).postMessage(
                        "[tea-sdk]ready",
                        "*",
                      );
                    }
                  } catch (error) {
                    o.emit(M.DEBUGGER_MESSAGE, {
                      type: M.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: error.message,
                    });
                  }
                  o.pageView();
                  o.on(et.TokenChange, function (e) {
                    if (e === "webid") {
                      o.pageView();
                    }
                    o.logger.info(
                      "appid: " +
                        n.app_id +
                        " token change, new userInfo:" +
                        JSON.stringify(o.configManager.get("user")),
                    );
                    o.emit(M.DEBUGGER_MESSAGE, {
                      type: M.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 设置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: o.configManager.get("user"),
                    });
                  });
                  o.on(et.TokenReset, function () {
                    o.logger.info(
                      "appid: " +
                        n.app_id +
                        " token reset, new userInfo:" +
                        JSON.stringify(o.configManager.get("user")),
                    );
                    o.emit(M.DEBUGGER_MESSAGE, {
                      type: M.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 重置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: o.configManager.get("user"),
                    });
                  });
                  o.on(et.RouteChange, function (e) {
                    if (!(e.init || n.disable_route_report)) {
                      o.pageView();
                    }
                  });
                });
                this.tokenManager.apply(this, n);
                this.eventManager.apply(this, n);
                this.sessionManager.apply(this, n);
              }
              this.inited = true;
            }
          }
        } else {
          this.logger.warn(
            "app_id param is error, must be number, please check!",
          );
        }
      } else {
        this.logger.warn("init params error,please check");
      }
    }
    config(e) {
      if (this.inited) {
        if (e && P(e)) {
          let t;
          try {
            t = JSON.parse(JSON.stringify(t));
          } catch (n) {
            t = e;
          }
          if (this.bridgeReport) {
            this.appBridge.setConfig(t);
          } else {
            if (t._staging_flag && t._staging_flag === 1) {
              this.staging = true;
            }
            if (t.disable_auto_pv) {
              this.disableAutoPageView = true;
              delete t.disable_auto_pv;
            }
            let n = {
              ...t,
            };
            if (this.initConfig && this.initConfig.configPersist) {
              const i = this.configManager.getStore();
              if (i) {
                n = Object.assign(i, t);
              }
              this.configManager.setStore(t);
            }
            n.web_id;
            n.user_unique_id;
            const o = ((e, t) => {
              const n = {};
              for (var i in e) {
                if (
                  Object.prototype.hasOwnProperty.call(e, i) &&
                  t.indexOf(i) < 0
                ) {
                  n[i] = e[i];
                }
              }
              if (
                e != null &&
                typeof Object.getOwnPropertySymbols === "function"
              ) {
                let o = 0;
                for (i = Object.getOwnPropertySymbols(e); o < i.length; o++) {
                  if (t.indexOf(i[o]) < 0) {
                    n[i[o]] = e[i[o]];
                  }
                }
              }
              return n;
            })(n, ["web_id", "user_unique_id"]);
            if (n.hasOwnProperty("web_id")) {
              this.emit(et.ConfigWebId, n.web_id);
            }
            if (n.hasOwnProperty("user_unique_id")) {
              this.emit(et.ConfigUuid, n.user_unique_id);
            }
            this.configManager.set(o);
            this.emit(M.DEBUGGER_MESSAGE, {
              type: M.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行CONFIG",
              level: "info",
              time: Date.now(),
              data: n,
            });
          }
        } else {
          console.warn("config params is error, please check");
        }
      } else {
        console.warn("config must be use after function init");
      }
    }
    setDomain(e) {
      if (this.configManager) {
        this.configManager.setDomain(e);
      }
      this.emit(et.ConfigDomain);
    }
    getConfig(e) {
      return this.configManager.get(e);
    }
    send() {
      this.start();
    }
    start() {
      if (this.inited && !this.sended) {
        this.sended = true;
        this.emit(et.Start);
        this.emit(M.DEBUGGER_MESSAGE, {
          type: M.DEBUGGER_MESSAGE_SDK,
          info: "SDK 执行START",
          level: "info",
          time: Date.now(),
        });
        if (this.bridgeReport) {
          this.pageView();
          this.emit(et.Ready);
        }
      }
    }
    event(e, t) {
      const n = this;
      try {
        const i = [];
        if (Array.isArray(e)) {
          e.forEach((e) => {
            const t = n.processEvent(e[0], e[1] || {});
            if (t) {
              i.push(t);
            }
          });
        } else {
          const o = this.processEvent(e, t);
          if (!o) {
            return;
          }
          i.push(o);
        }
        if (this.bridgeReport) {
          i.forEach((e) => {
            const e_event = e.event;
            const e_params = e.params;
            n.appBridge.onEventV3(e_event, JSON.stringify(e_params));
          });
        } else if (i.length) {
          this.emit(et.Event, i);
          this.emit(et.SessionResetTime);
        }
      } catch (error) {
        this.logger.warn("something error, please check");
        this.emit(M.DEBUGGER_MESSAGE, {
          type: M.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: error.message,
        });
      }
    }
    beconEvent(e, t) {
      if (Array.isArray(e)) {
        this.logger.warn("beconEvent not support batch report, please check");
      } else {
        const n = [];
        const i = this.processEvent(e, t || {});
        if (i) {
          n.push(i);
          if (n.length) {
            this.emit(et.BeconEvent, n);
            this.emit(et.SessionResetTime);
          }
        }
      }
    }
    beaconEvent(e, t) {
      this.beconEvent(e, t);
    }
    processEvent(e, t = {}) {
      try {
        if (!e) {
          console.warn("eventName is null， please check");
          return null;
        }
        let n = e;
        if (/^event\./.test(e)) {
          n = e.slice(6);
        }
        let i = t;
        if (typeof i !== "object") {
          i = {};
        }
        if (i.profile) {
          delete i.profile;
        } else {
          i.event_index = B();
        }
        let local_time_ms;
        if (i.local_ms) {
          local_time_ms = i.local_ms;
          delete i.local_ms;
        } else {
          local_time_ms = +new Date();
        }
        return {
          event: n,
          params: i,
          local_time_ms,
          is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0,
        };
      } catch (error) {
        this.emit(M.DEBUGGER_MESSAGE, {
          type: M.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: error.message,
        });
        return {
          event: e,
          params: t,
        };
      }
    }
    filterEvent(e) {
      this.eventFilter = e;
    }
    on(e, t) {
      this.hook.on(e, t);
    }
    once(e, t) {
      this.hook.once(e, t);
    }
    off(e, t) {
      this.hook.off(e, t);
    }
    emit(e, t, n) {
      this.hook.emit(e, t, n);
    }
    set(e) {
      this.hook.set(e);
    }
    stop() {
      this.sdkStop = true;
    }
    reStart() {
      this.sdkStop = false;
    }
    pageView() {
      if (!this.disableAutoPageView) {
        this.predefinePageView();
      }
    }
    predefinePageView(e = {}) {
      if (this.inited) {
        const t = {
          title: document.title || location.pathname,
          url: location.href,
          url_path: location.pathname,
          time: Date.now(),
          referrer: window.document.referrer,
          $is_first_time:
            "" +
            ((this.configManager && this.configManager.is_first_time) || false),
        };
        const n = {
          ...t,
          ...e,
        };
        this.event("predefine_pageview", n);
      } else {
        console.warn("predefinePageView should call after init");
      }
    }
    clearEventCache() {
      this.emit(et.CleanEvents);
    }
    setWebId(e) {
      this.config({
        web_id: "" + e,
      });
    }
    setNativeAppId(e) {
      if (this.bridgeReport) {
        this.appBridge.setNativeAppId(e);
      }
    }
    getSessionId() {
      return ef();
    }
    setSessionId(e) {
      this.emit(et.SessionReset, e);
    }
    resetStayDuration(e, t, n) {
      this.emit(
        et.ResetStay,
        {
          url_path: e,
          title: t,
          url: n,
        },
        et.Stay,
      );
    }
    resetStayParams(e = "", t = "", n = "") {
      this.emit(
        et.SetStay,
        {
          url_path: e,
          title: t,
          url: n,
        },
        et.Stay,
      );
    }
    getToken(e, t) {
      const n = this;
      if (this.inited) {
        let i = false;
        const o = (t) => {
          if (!i) {
            i = true;
            const o = n.configManager.get().user;
            if (t) {
              o.tobid = t;
              o["diss".split("").reverse().join("")] = t;
            }
            return e({
              ...o,
            });
          }
        };
        const r = () => {
          n.tokenManager.getTobId().then((e) => {
            o(e);
          });
        };
        if (this.sdkReady) {
          r();
        } else {
          if (t) {
            setTimeout(() => {
              o();
            }, t);
          }
          this.on(et.Ready, function () {
            r();
          });
        }
      } else {
        console.warn("predefinePageView should call after init");
      }
    }
    profileSet(e) {
      if (this.bridgeReport) {
        this.appBridge.profileSet(JSON.stringify(e));
      } else {
        this.emit(et.ProfileSet, e, et.Profile);
      }
      this.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSet",
        level: "info",
        time: Date.now(),
        data: e,
      });
    }
    profileSetOnce(e) {
      if (this.bridgeReport) {
        this.appBridge.profileSetOnce(JSON.stringify(e));
      } else {
        this.emit(et.ProfileSetOnce, e, et.Profile);
      }
      this.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSetOnce",
        level: "info",
        time: Date.now(),
        data: e,
      });
    }
    profileIncrement(e) {
      if (this.bridgeReport) {
        this.appBridge.profileIncrement(JSON.stringify(e));
      } else {
        this.emit(et.ProfileIncrement, e, et.Profile);
      }
      this.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileIncrement",
        level: "info",
        time: Date.now(),
        data: e,
      });
    }
    profileUnset(e) {
      if (this.bridgeReport) {
        this.appBridge.profileUnset(e);
      } else {
        this.emit(et.ProfileUnset, e, et.Profile);
      }
      this.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileUnset",
        level: "info",
        time: Date.now(),
        data: e,
      });
    }
    profileAppend(e) {
      if (this.bridgeReport) {
        this.appBridge.profileAppend(JSON.stringify(e));
      } else {
        this.emit(et.ProfileAppend, e, et.Profile);
      }
      this.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileAppend",
        level: "info",
        time: Date.now(),
        data: e,
      });
    }
    setExternalAbVersion(e) {
      this.emit(
        et.AbExternalVersion,
        typeof e === "string" && e ? ("" + e).trim() : null,
        et.Ab,
      );
    }
    getVar(name, defaultValue, n, uuid) {
      this.emit(
        et.AbVar,
        {
          name,
          defaultValue,
          callback: n,
          uuid,
        },
        et.Ab,
      );
    }
    getABconfig(params, t) {
      this.emit(
        et.AbConfig,
        {
          params,
          callback: t,
        },
        et.Ab,
      );
    }
    getAbSdkVersion() {
      return this.configManager.getAbVersion();
    }
    onAbSdkVersionChange(e) {
      const t = this;
      this.emit(et.AbVersionChangeOn, e, et.Ab);
      return function () {
        t.emit(et.AbVersionChangeOff, e, et.Ab);
      };
    }
    offAbSdkVersionChange(e) {
      this.emit(et.AbVersionChangeOff, e, et.Ab);
    }
    openOverlayer() {
      this.emit(et.AbOpenLayer, "", et.Ab);
    }
    closeOverlayer() {
      this.emit(et.AbCloseLayer, "", et.Ab);
    }
    getAllVars(e) {
      this.emit(et.AbAllVars, e, et.Ab);
    }
    destoryInstace() {
      if (!this.destroy) {
        this.destroy = true;
        this.off(et.TokenComplete);
        this.emit(et.DestoryInstance);
      }
    }
    destroyInstance() {
      if (!this.destroy) {
        this.destroy = true;
        this.off(et.TokenComplete);
        this.emit(et.DestoryInstance);
      }
    }
  }
  e.plugins = [];
  return e;
})();
class eb {
  apply(e, t) {
    const n = this;
    if (t.event_verify_url) {
      if (typeof t.event_verify_url === "string") {
        this.url = t.event_verify_url + "/v1/list_test";
        if (this.url) {
          const i = e.Types;
          e.on(i.SubmitBefore, function (t) {
            e.requestManager.useBeacon({
              url: n.url,
              data: t,
            });
          });
        }
      } else {
        console.log("please use correct et_test url");
      }
    }
  }
}
class eS {
  constructor() {
    var e = this;
    this.setInterval = function () {
      let t;
      let n;
      let i;
      let o;
      t = function () {
        if (e.isSessionhasEvent) {
          e.endCurrentSession();
        }
      };
      n = e.sessionInterval;
      if (t === undefined) {
        t = function () {};
      }
      if (n === undefined) {
        n = 1000;
      }
      o = Date.now() + n;
      i = window.setTimeout(function e() {
        const r = Date.now() - o;
        t();
        o += n;
        i = window.setTimeout(e, Math.max(0, n - r));
      }, n);
      e.clearIntervalFunc = function () {
        window.clearTimeout(i);
      };
    };
    this.clearInterval = function () {
      if (e.clearIntervalFunc) {
        e.clearIntervalFunc();
      }
    };
  }
  apply(e, t) {
    const n = this;
    this.collect = e;
    if (!t.disable_heartbeat) {
      this.sessionInterval = 60000;
      this.startTime = 0;
      this.lastTime = 0;
      this.setInterval();
      const i = this.collect.Types;
      this.collect.on(i.SessionReset, function () {
        n.process();
      });
    }
  }
  endCurrentSession() {
    this.collect.event("_be_active", {
      start_time: this.startTime,
      end_time: this.lastTime,
      url: window.location.href,
      referrer: window.document.referrer,
      title: document.title || location.pathname,
    });
    this.isSessionhasEvent = false;
    this.startTime = 0;
  }
  process() {
    if (!this.isSessionhasEvent) {
      this.isSessionhasEvent = true;
      this.startTime = +new Date();
    }
    const e = this.lastTime || +new Date();
    this.lastTime = +new Date();
    if (this.lastTime - e > this.sessionInterval) {
      this.clearInterval();
      this.endCurrentSession();
      this.setInterval();
    }
  }
}
class ew {
  apply(e, t) {
    const n = this;
    this.collect = e;
    this.config = t;
    if (
      !this.config.channel_domain &&
      !t.disable_track_event &&
      !t.disable_sdk_monitor
    ) {
      this.url = e.configManager.getUrl("event");
      const i = this.collect.Types;
      this.collect.on(i.Ready, function () {
        n.sdkOnload();
      });
      this.collect.on(i.SubmitError, function (e) {
        const e_type = e.type;
        const e_eventData = e.eventData;
        const e_errorCode = e.errorCode;
        if (e_type === "f_data") {
          n.sdkError(e_eventData, e_errorCode);
        }
      });
    }
  }
  sdkOnload() {
    const e = this;
    try {
      const t = this.collect.configManager.get();
      const n = t.header;
      const i = t.user;
      const app_id = n.app_id;
      const r = n.app_name;
      const sdk_version = n.sdk_version;
      const user_unique_id = i.web_id;
      const c = {
        events: [
          {
            event: "onload",
            params: JSON.stringify({
              app_id,
              app_name: r || "",
              sdk_version,
              sdk_type: "npm",
              sdk_config: this.config,
              sdk_desc: "TOC_OVERSEA",
            }),
            local_time_ms: Date.now(),
          },
        ],
        user: {
          user_unique_id,
        },
        header: {},
      };
      setTimeout(() => {
        e.collect.requestManager.useRequest({
          url: e.url,
          data: [c],
          timeout: 30000,
          app_key: "566f58151b0ed37e",
          forceXhr: true,
        });
      }, 16);
    } catch (e) {}
  }
  sdkError(e, error_code) {
    const n = this;
    try {
      const i = e[0];
      const o = i.user;
      const r = i.header;
      const s = [];
      e.forEach((e) => {
        e.events.forEach((e) => {
          s.push(e);
        });
      });
      const a = {
        events: s.map((e) => ({
          event: "on_error",
          params: JSON.stringify({
            error_code,
            app_id: r.app_id,
            app_name: r.app_name || "",
            error_event: e.event,
            sdk_version: r.sdk_version,
            local_time_ms: e.local_time_ms,
            tea_event_index: Date.now(),
            params: e.params,
            header: JSON.stringify(r),
            user: JSON.stringify(o),
          }),
          local_time_ms: Date.now(),
        })),
        user: {
          user_unique_id: o.user_unique_id,
        },
        header: {},
      };
      setTimeout(() => {
        n.collect.requestManager.useRequest({
          url: n.url,
          data: [a],
          timeout: 30000,
          app_key: "566f58151b0ed37e",
          forceXhr: true,
        });
      }, 16);
    } catch (e) {}
  }
}
const eE =
  typeof window !== "undefined"
    ? (window.LogPluginObject || (window.LogPluginObject = {}),
      window.LogPluginObject)
    : null;
class ek {
  apply(e, t) {
    this._plugin = {};
    this.config = t;
    this.collect = e;
    this.channel = t.channel || "cn";
    this.loadExtend();
  }
  loadExtend() {
    const e = this;
    try {
      this.collect.remotePlugin.forEach((t, n) => {
        if (t === "sdk") {
          if (ey.hasOwnProperty(n)) {
            const i = ey[n].object;
            const o = "" + ey[n].src[e.channel];
            e.exist(n, i, o);
          } else {
            console.warn(
              "your " + n + " is not exist，please check plugin name",
            );
          }
        } else {
          if (typeof t === "object") {
            if (t.src) {
              e.exist(n, t.call, t.src);
            } else {
              e.process(n, t.instance, "INSTANCE");
            }
          }
        }
      });
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
      console.log("load extend error");
    }
  }
  exist(e, t, n) {
    const i = this;
    if (eE[t]) {
      this.process(e, eE[t]);
      console.log("已有" + e + "插件，避免重复加载~");
    } else {
      this.loadPlugin(
        e,
        n,
        function () {
          i.process(e, eE[t]);
          console.log(
            " %c %s %s %s",
            "color: yellow; background-color: black;",
            "–",
            "load plugin:" + e + " success",
            "-",
          );
        },
        function () {
          console.log(
            " %c %s %s %s",
            "color: red; background-color: yellow;",
            "–",
            "load plugin:" + e + " error",
            "-",
          );
        },
      );
    }
  }
  process(e, t, n) {
    try {
      if (n) {
        const i = new t();
        if (i.apply) {
          i.apply(this.collect, this.config);
        }
        console.log("excude " + e + " success");
      } else {
        if (t) {
          t(this.collect, this.config);
        }
      }
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
      console.log("excude " + e + " error, message:" + error.message);
    }
  }
  loadPlugin(e, t, n, i) {
    const o = this;
    try {
      const r = document.createElement("script");
      r.src = t;
      if (!this._plugin[e]) {
        this._plugin[e] = [];
      }
      this._plugin[e].push(n);
      r.onerror = function () {
        i(t);
      };
      r.onload = function () {
        o._plugin[e].forEach((e) => {
          e();
        });
      };
      document.getElementsByTagName("head")[0].appendChild(r);
    } catch (error) {
      this.collect.emit(M.DEBUGGER_MESSAGE, {
        type: M.DEBUGGER_MESSAGE_SDK,
        info: "发生了异常",
        level: "error",
        time: Date.now(),
        data: error.message,
      });
    }
  }
}
e_.usePlugin(ek, "extend");
e_.usePlugin(eb, "et");
e_.usePlugin(eS, "heartbeat");
e_.usePlugin(ew, "monitor");
const eA = new e_("default");
var eO = ((e) => {
  function t(t) {
    let n;
    let enable_et_test;
    let o;
    let channel_type;
    let channel;
    let a;
    const t_test = t.test;
    const t_TEAChannelDomain = t.TEAChannelDomain;
    const u = t_TEAChannelDomain === undefined ? "" : t_TEAChannelDomain;
    const t_mode = t.mode;
    const t_TEAChannel = t.TEAChannel;
    const t_TEAChannelType = t.TEAChannelType;
    t.tracker =
      u || t_TEAChannelType || t_TEAChannel
        ? ((enable_et_test = (n = {
            isTest: t_test || t_mode === "test",
            channel_domain: u,
            channel_type: t_TEAChannelType,
            channel: t_TEAChannel,
          }).isTest),
          (o = n.channel_domain),
          (channel_type = n.channel_type),
          (channel = n.channel),
          (a =
            /snssdk|zijieapi/g.test(o) &&
            /ttp|tcpy/g.test(channel_type) &&
            /va|sg|in/g.test(channel)),
          eA.init({
            app_id: a ? 3053 : 3297,
            channel_type,
            channel,
            channel_domain: o,
          }),
          eA.config({
            _staging_flag: +!!enable_et_test,
            enable_et_test,
          }),
          eA.start(),
          eA.event.bind(eA))
        : function () {};
    return e.call(this, t) || this;
  }
  s(t, e);
  return t;
})(R);
export { eO as default };
